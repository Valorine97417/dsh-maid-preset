// dsh-maid-preset 插件入口
// cordis.patch.yml 负责人设/预设/meow-memory 行的注入；这里负责三件事：
//   1. 把随包分发的记忆种子 memory/memory.db 播进尚无记忆库的工作区；
//      红线：目标已有 memory.db 时绝不覆盖——种子只在「空白」工作区生效。
//      v0.4.1 起可用 config.seed.enabled: false 整个关掉播种（种子是老大打包时
//      那批记忆，给别人用时属泄漏，该让人自己决定吃不吃）。
//   2. 启动记忆自动同步循环（空闲达标后导出→commit→push 到 GitHub）。
//      v0.5 起 sync 引擎每 tick 热读 $DSH_HOME/maid-settings.json：设置页改
//      repoUrl/idleMinutes 即时生效，无仓库时进入待机而非不启动。
//   3. 设置面板后端路由（lib/client.js 前端经 fetch 调用）：
//      设置读写 / 人设读写 / 记忆清单 / 同步状态与立即推 / 仓库测试与新建。
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { startSync, requestSyncNow, inspectSourceDb } from './sync.js';
import {
  loadSettings, updateSettings, readPersona, writePersona,
  listMemories, mutateMemory, readSyncState, testRepoUrl, createRepo,
  createMemory, memoryStats, restorePersona, selfCheck,
  knownWorkspaces, workspaceList, PROJECT_DIR,
  writeJson, readJsonBody
} from './settings.js';

export const name = 'dsh-maid-preset';

const PKG_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SEED_DB = join(PKG_ROOT, 'memory', 'memory.db');

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

// ───────────────────── 设置面板路由 ─────────────────────

const API = '/dsh-maid-preset';

function buildRoutes(config = {}) {
  const routes = [];
  // meow-memory 同款：route def 只有 kind/path/handler（register 不认 method 字段），
  // method 分流全在 handler 内做——GET/POST 同 path 必须合并成同一条 def，
  // 否则两条 exact 记录会互相覆盖/冲突。allow = 该 path 放行的方法白名单。
  const add = (allow, path, handler) => routes.push({
    kind: 'exact',
    path,
    handler: (req, res) => {
      if (!allow.includes(req.method)) {
        return writeJson(res, 405, { ok: false, error: `${req.method} not allowed on ${path}` });
      }
      return handler(req, res);
    }
  });

  // 设置读写（GET/POST 同 path 合并）：{ sync: { repoUrl, idleMinutes, enabled, minImportance } } —— 只放行白名单字段。
  add(['GET', 'POST'], `${API}/settings`, async (req, res) => {
    if (req.method === 'GET') {
      return writeJson(res, 200, { ok: true, settings: loadSettings() });
    }
    try {
      const body = await readJsonBody(req);
      const cur = loadSettings();
      const sync = { ...(cur.sync || {}) };
      if (body?.sync && typeof body.sync === 'object') {
        if (body.sync.repoUrl !== undefined) {
          const u = String(body.sync.repoUrl ?? '').trim();
          if (u.length > 500 || (u && !/^https?:\/\//.test(u))) {
            return writeJson(res, 400, { ok: false, error: 'repoUrl 需为 http(s) 地址且 ≤500 字符' });
          }
          sync.repoUrl = u;
        }
        if (body.sync.sourceDb !== undefined) {
          // 允许清空以恢复旧版自动选库；非空值由同步入口只读校验，失败绝不回落。
          if (typeof body.sync.sourceDb !== 'string' || body.sync.sourceDb.length > 4096) {
            return writeJson(res, 400, { ok: false, error: 'sourceDb 需为路径字符串且 ≤4096 字符（空字符串恢复自动选库）' });
          }
          sync.sourceDb = body.sync.sourceDb;
        }
        if (body.sync.idleMinutes !== undefined) {
          const n = Number(body.sync.idleMinutes);
          if (!Number.isFinite(n) || n < 0 || n > 1440) {
            return writeJson(res, 400, { ok: false, error: 'idleMinutes 需在 0~1440 之间' });
          }
          sync.idleMinutes = n;
        }
        if (body.sync.maxWaitMinutes !== undefined) {
          const n = Number(body.sync.maxWaitMinutes);
          if (!Number.isFinite(n) || n < 0 || n > 10080) {
            return writeJson(res, 400, { ok: false, error: 'maxWaitMinutes 需在 0~10080 之间（0=关闭）' });
          }
          sync.maxWaitMinutes = Math.floor(n); // 最长等待上限：记忆写不停也每隔这么久强推一次
        }
        if (body.sync.direction !== undefined) {
          // 同步方向三档：both=双向（推送前先合流）/ pull=只拉不推 / push=只推不拉。
          const d = String(body.sync.direction ?? '').trim();
          if (!['both', 'pull', 'push'].includes(d)) {
            return writeJson(res, 400, { ok: false, error: 'direction 只能是 both / pull / push' });
          }
          sync.direction = d;
        }
        if (body.sync.pullOnly !== undefined) {
          // 旧开关兼容：pullOnly=true ⇒ direction='pull'；false 不动方向（由 direction 字段说了算）。
          if (body.sync.pullOnly === true || body.sync.pullOnly === 'true') sync.direction = 'pull';
          sync.pullOnly = body.sync.pullOnly === true || body.sync.pullOnly === 'true';
        }
        if (body.sync.enabled !== undefined) {
          sync.enabled = !!body.sync.enabled; // 同步总闸：false=待命，引擎下个 tick 即停
        }
        if (body.sync.minImportance !== undefined) {
          const n = Number(body.sync.minImportance);
          if (!Number.isFinite(n) || n < 0 || n > 9) {
            return writeJson(res, 400, { ok: false, error: 'minImportance 需在 0~9 之间' });
          }
          sync.minImportance = Math.floor(n); // 精选门槛：导出三路热读同一值
        }
      }
      updateSettings({ ...cur, sync });
      writeJson(res, 200, { ok: true, settings: loadSettings() });
    } catch (e) {
      writeJson(res, 400, { ok: false, error: String(e?.message ?? e) });
    }
  });

  // 人设读写（cordis.patch.yml personaPrefix 区段；写入后重启 DSH 生效）。
  add(['GET', 'POST'], `${API}/persona`, async (req, res) => {
    if (req.method === 'GET') {
      const r = readPersona();
      return writeJson(res, r.ok ? 200 : 500, r);
    }
    try {
      const body = await readJsonBody(req);
      const r = writePersona(body?.text);
      writeJson(res, r.ok ? 200 : 400, r);
    } catch (e) {
      writeJson(res, 400, { ok: false, error: String(e?.message ?? e) });
    }
  });

  // 工作区下拉数据。
  add(['GET'], `${API}/workspaces`, (req, res) => {
    writeJson(res, 200, { ok: true, workspaces: workspaceList() });
  });

  // 记忆清单：GET 列表（含排序）、POST 单条操作（改 status/importance / 删除 / 新增）。
  add(['GET'], `${API}/memories`, async (req, res) => {
    try {
      const u = new URL(req.url, 'http://127.0.0.1');
      const r = await listMemories({
        ws: u.searchParams.get('ws') || '',
        level: u.searchParams.get('level') || '',
        status: u.searchParams.get('status') || '',
        q: u.searchParams.get('q') || '',
        page: u.searchParams.get('page') || 1,
        sort: u.searchParams.get('sort') || ''
      });
      writeJson(res, r.ok ? 200 : 400, r);
    } catch (e) {
      writeJson(res, 500, { ok: false, error: String(e?.message ?? e) });
    }
  });
  add(['POST'], `${API}/memory`, async (req, res) => {
    try {
      const body = await readJsonBody(req);
      const r = body?.op === 'create'
        ? await createMemory(body)
        : await mutateMemory(body || {});
      writeJson(res, r.ok ? 200 : 400, r);
    } catch (e) {
      writeJson(res, 500, { ok: false, error: String(e?.message ?? e) });
    }
  });

  // 记忆统计（设置页统计条：各 level/状态计数 + 达门槛可上船数）。
  add(['GET'], `${API}/memory/stats`, async (req, res) => {
    try {
      const u = new URL(req.url, 'http://127.0.0.1');
      const r = await memoryStats({ ws: u.searchParams.get('ws') || '' });
      writeJson(res, r.ok ? 200 : 400, r);
    } catch (e) {
      writeJson(res, 500, { ok: false, error: String(e?.message ?? e) });
    }
  });

  // 人设恢复：source='backup'（$DSH_HOME/cordis.patch.yml.bak）或 'default'（随包出厂快照）。
  add(['POST'], `${API}/persona/restore`, async (req, res) => {
    try {
      const body = await readJsonBody(req);
      const r = restorePersona(body?.source);
      writeJson(res, r.ok ? 200 : 400, r);
    } catch (e) {
      writeJson(res, 400, { ok: false, error: String(e?.message ?? e) });
    }
  });

  // 一键自检（服务端部分；前端把 meow 物化/设置注册等客户端事实合并进同一张表）。
  add(['GET'], `${API}/selfcheck`, async (req, res) => {
    try {
      writeJson(res, 200, await selfCheck(config?.sync?.identity, config?.sync));
    } catch (e) {
      writeJson(res, 500, { ok: false, error: String(e?.message ?? e) });
    }
  });

  // 同步：状态快照 / 立即推 / 远端测试。
  add(['GET'], `${API}/sync/state`, (req, res) => {
    writeJson(res, 200, { ok: true, ...readSyncState(), sourceSelection: inspectSourceDb(config?.sync) });
  });
  add(['POST'], `${API}/sync/now`, async (req, res) => {
    const r = await requestSyncNow();
    writeJson(res, r?.ok ? 200 : 409, r);
  });
  add(['POST'], `${API}/sync/test`, async (req, res) => {
    try {
      const body = await readJsonBody(req);
      const url = String(body?.url ?? loadSettings()?.sync?.repoUrl ?? '').trim();
      const r = await testRepoUrl(url);
      writeJson(res, r.ok ? 200 : 400, r);
    } catch (e) {
      writeJson(res, 400, { ok: false, error: String(e?.message ?? e) });
    }
  });

  // 新建 GitHub 仓库（credential helper 取 PAT 走 REST）。
  add(['POST'], `${API}/repo/create`, async (req, res) => {
    try {
      const body = await readJsonBody(req);
      const r = await createRepo({ name: body?.name, isPrivate: body?.private !== false });
      writeJson(res, r.ok ? 200 : 400, r);
    } catch (e) {
      writeJson(res, 400, { ok: false, error: String(e?.message ?? e) });
    }
  });

  return routes;
}

/** 注册全部路由；webServer 服务可能后就绪，轮询重试（meow-memory 同款）。 */
function registerRoutes(ctx, config) {
  const defs = buildRoutes(config);
  let attempts = 0;
  let registered = 0;
  const tryRegister = () => {
    const web = ctx.get?.('webServer');
    if (web && typeof web.register === 'function') {
      for (const def of defs) {
        try {
          ctx.effect(() => web.register(def));
          registered += 1;
        } catch (e) {
          ctx.logger?.warn?.(`dsh-maid-preset: 路由 ${def.path} 注册失败: ${e?.message ?? e}`);
        }
      }
      ctx.logger?.info?.(`dsh-maid-preset: 设置面板路由 ${registered}/${defs.length} 已注册`);
      return;
    }
    attempts += 1;
    if (attempts < 60) setTimeout(tryRegister, 2000); // 2 分钟内等 webServer 起来
  };
  tryRegister();
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

  // 设置面板后端路由（失败不影响插件其余功能）。
  try {
    registerRoutes(ctx, config);
  } catch (e) {
    try { console.error('[dsh-maid-preset] 设置路由注册失败（不影响其余功能）:', e?.message ?? e); } catch { /* ignore */ }
  }

  // 记忆自动同步：变更+空闲达标才推，避免每轮写入都制造一个 commit。
  // 失败不影响插件加载——同步是增强功能，人设/预设/种子不能被它拖垮。
  // v0.5：引擎内部热读 $DSH_HOME/maid-settings.json，设置页改动无需重启。
  try {
    startSync(config.sync || {});
  } catch (e) {
    try { console.error('[dsh-maid-preset] 同步启动失败（不影响其他功能）:', e?.message ?? e); } catch { /* ignore */ }
  }
}
