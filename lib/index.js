// dsh-maid-preset 插件入口
// cordis.patch.yml 负责人设/预设/meow-memory 行的注入；这里负责两件事：
//   1. 把随包分发的记忆种子 memory/memory.db 播进尚无记忆库的工作区；
//      红线：目标已有 memory.db 时绝不覆盖——种子只在「空白」工作区生效。
//      v0.4.1 起可用 config.seed.enabled: false 整个关掉播种（种子是老大打包时
//      那批记忆，给别人用时属泄漏，该让人自己决定吃不吃）。
//   2. 启动记忆自动同步循环（空闲达标后导出→commit→push 到 GitHub）。
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { startSync } from './sync.js';

export const name = 'dsh-maid-preset';

const PKG_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SEED_DB = join(PKG_ROOT, 'memory', 'memory.db');
const PROJECT_DIR = '.dsh-meow'; // 与 meow-memory 默认 projectDir 一致

/** 把种子复制到 ws/<PROJECT_DIR>/memory.db；已存在或无种子则跳过。返回是否播种。 */
function seedWorkspace(ws) {
  try {
    if (typeof ws !== 'string' || ws.length === 0) return false;
    if (!existsSync(SEED_DB)) return false; // 未随包分发（如源码检出）
    const targetDir = join(ws, PROJECT_DIR);
    const target = join(targetDir, 'memory.db');
    if (existsSync(target)) return false; // 活库，绝不覆盖
    mkdirSync(targetDir, { recursive: true });
    copyFileSync(SEED_DB, target);
    return true;
  } catch {
    return false; // 播种失败只记哑巴亏，不影响插件加载
  }
}

/** 读 meow-memory 的实例级 window-index.json，收集历史工作区。 */
function knownWorkspaces() {
  const out = new Set();
  try {
    const home = process.env.USERPROFILE || process.env.HOME || '';
    if (!home) return out;
    const indexFile = join(home, '.dsh-meow', 'window-index.json');
    if (!existsSync(indexFile)) return out;
    const merged = JSON.parse(readFileSync(indexFile, 'utf8'));
    for (const ws of Object.values(merged)) {
      if (typeof ws === 'string' && ws.length > 0) out.add(ws);
    }
  } catch {
    /* 索引损坏就当没有 */
  }
  return out;
}

export function apply(
  /** @type {import('@deepseek-ai/cordis').Context} */ ctx,
  config = {}
) {
  // 播种开关：默认开（老大自己机器上，记忆随插件走是特性）；别人可用 seed.enabled: false 关掉。
  const seedEnabled = config?.seed?.enabled !== false;

  // 启动即播：只播 meow-memory 自己记录过的工作区（window-index.json），
  // 不碰 process.cwd()——那可能是安装目录等非工作区路径，播种只会留下无主目录。
  if (seedEnabled) for (const ws of knownWorkspaces()) seedWorkspace(ws);

  // 兜底：新机器上还没有 window-index，工作区要到首轮消息才确定。
  // 必须在 next() 之前播种——meow-memory 的 preStepInject→getDb 发生在它自己的
  // await next() 之后，因此无论两个 handler 谁先注册，这里都赶在它建库之前。
  ctx.on('agent/pre-step', async ({ agent }, next) => {
    try {
      if (seedEnabled) seedWorkspace(agent?.session?.header?.cwd);
    } catch {
      /* ignore */
    }
    return next();
  });

  // 记忆自动同步：变更+空闲达标才推，避免每轮写入都制造一个 commit。
  // 失败不影响插件加载——同步是增强功能，人设/预设/种子不能被它拖垮。
  try {
    startSync(config.sync || {});
  } catch (e) {
    try { console.error('[dsh-maid-preset] 同步启动失败（不影响其他功能）:', e?.message ?? e); } catch { /* ignore */ }
  }
}
