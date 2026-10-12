// dsh-maid-preset 插件入口
// cordis.patch.yml 负责人设/预设/meow-memory 行的注入；这里只做一件事：
// 把随包分发的记忆种子 memory/memory.db 播进尚无记忆库的工作区。
// 红线：目标已有 memory.db 时绝不覆盖——种子只在「空白」工作区生效。
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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

export function apply(/** @type {import('@deepseek-ai/cordis').Context} */ ctx) {
  // 启动即播：覆盖 window-index 里已知的全部历史工作区（新机器首次安装的主路径）。
  for (const ws of knownWorkspaces()) seedWorkspace(ws);
  if (process.cwd()) seedWorkspace(process.cwd());

  // 兜底：会话的 workspace 可能在启动后才确定（新建工作区/新 session）。
  // 必须在 next() 之前播种——meow-memory 的 preStepInject→getDb 发生在它自己的
  // await next() 之后，因此无论两个 handler 谁先注册，这里都赶在它建库之前。
  ctx.on('agent/pre-step', async ({ agent }, next) => {
    try {
      seedWorkspace(agent?.session?.header?.cwd);
    } catch {
      /* ignore */
    }
    return next();
  });
}
