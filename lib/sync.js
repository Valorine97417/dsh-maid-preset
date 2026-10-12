// 记忆自动同步：轮询活库 mtime → 空闲达标 → 导出到专用克隆 → commit + push 到 GitHub。
// 老大拍板 (m01048)：触发 = 变更+空闲自动推；工作副本 = 专用克隆 $DSH_HOME/maid-sync。
// 两条红线：
//   1. 只在活库真正变化后才导出——否则 memories.json 的 exportedAt 每次都变，会制造空 commit。
//   2. 推送失败绝不能装作成功——留 dirty 标记，下轮重试并写日志。
import { execFile } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, appendFileSync, writeFileSync, renameSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { promisify } from 'node:util';
import { exportMemory } from './export.js';

const pExecFile = promisify(execFile);

const DEFAULTS = {
  enabled: true,
  repoUrl: 'https://github.com/Valorine97417/dsh-maid-preset.git',
  branch: 'main',
  workcopy: '',            // 空 = $DSH_HOME/maid-sync
  idleMinutes: 10,         // 记忆停写多久才推（防刷爆历史）
  pollSeconds: 60,         // 轮询间隔
  proxies: ['http://127.0.0.1:7890'], // 直连失败后逐个试；本机 Clash
  gitPath: 'git',
  // 专用克隆是全新仓库，没有仓库级身份；全局也可能没配。默认写死，免得 commit 卡在 auto-detect。
  identity: { name: 'Valorine97417', email: 'Valorine97417@users.noreply.github.com' },
  logFile: ''              // 空 = $DSH_HOME/maid-sync.log
};

function envHome() {
  return process.env.DSH_HOME || join(process.env.USERPROFILE || process.env.HOME || '', '.dsh');
}

function logLine(cfg, msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  try {
    if (existsSync(cfg.logFile) && statSync(cfg.logFile).size > 262144) {
      rmSync(cfg.logFile + '.1', { force: true });
      renameSync(cfg.logFile, cfg.logFile + '.1');
    }
    appendFileSync(cfg.logFile, line, 'utf8');
  } catch { /* 日志写不进去不影响同步 */ }
}

/** 取 db 与 -wal 中较大的 mtime（WAL 模式下只看 db 会漏掉最新写入）。 */
function dbMtime(dbPath) {
  let m = 0;
  for (const p of [dbPath, dbPath + '-wal']) {
    try { const s = statSync(p); if (s.mtimeMs > m) m = s.mtimeMs; } catch { /* 缺件跳过 */ }
  }
  return m;
}

/** 从 window-index 里找 mtime 最新的活库；没有则返回 null。 */
function pickSourceDb() {
  try {
    const home = process.env.USERPROFILE || process.env.HOME || '';
    const idx = join(home, '.dsh-meow', 'window-index.json');
    if (!existsSync(idx)) return null;
    const map = JSON.parse(readFileSync(idx, 'utf8'));
    let best = null, bestM = 0;
    for (const ws of new Set(Object.values(map))) {
      if (typeof ws !== 'string' || ws.length === 0) continue;
      const db = join(ws, '.dsh-meow', 'memory.db');
      const m = dbMtime(db);
      if (m > bestM) { bestM = m; best = db; }
    }
    return best;
  } catch {
    return null;
  }
}

function runGit(args, opts = {}) {
  return pExecFile(opts.gitPath || 'git', args, {
    cwd: opts.cwd,
    timeout: 60000,
    maxBuffer: 8 * 1024 * 1024,
    windowsHide: true,
    encoding: 'utf8',
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_CONFIG_NOSYSTEM: '0', ...opts.env }
  });
}

/** git 操作：先不带代理，失败再逐个代理重试（本机直连 github 常超时）。 */
async function gitWithFallback(args, cfg, cwd) {
  const attempts = [null, ...cfg.proxies];
  let lastErr = null;
  for (const proxy of attempts) {
    try {
      const extra = proxy ? ['-c', `http.proxy=${proxy}`] : [];
      const r = await runGit([...extra, ...args], { cwd, gitPath: cfg.gitPath });
      return r.stdout ?? '';
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

/** 确保专用克隆在位；缺失则 clone。返回工作副本路径或 null。 */
async function ensureWorkcopy(cfg) {
  const wc = cfg.workcopy;
  if (existsSync(join(wc, '.git'))) return wc;
  if (existsSync(wc)) {
    logLine(cfg, `workcopy 存在但不是 git 仓库，跳过: ${wc}`);
    return null;
  }
  mkdirSync(dirname(wc), { recursive: true });
  const extra = cfg.proxies[0] ? ['-c', `http.proxy=${cfg.proxies[0]}`] : [];
  try {
    await runGit([...extra, 'clone', '--branch', cfg.branch, cfg.repoUrl, wc], { cwd: dirname(wc), gitPath: cfg.gitPath });
    logLine(cfg, `已克隆专用同步副本: ${wc}`);
    return wc;
  } catch (e) {
    logLine(cfg, `克隆失败: ${e.message}`);
    return null;
  }
}

/** 一次同步。返回 {ok, reason}。导出供自测直接驱动。 */
export async function syncOnce(rawCfg, state) {
  // 就地兜底：调用方（含自测）漏传字段不能让 commit 崩在 auto-detect 上。
  const cfg = { ...DEFAULTS, ...rawCfg };
  const src = pickSourceDb();
  if (!src) return { ok: false, reason: '找不到活库（window-index 为空）' };

  const wc = await ensureWorkcopy(cfg);
  if (!wc) return { ok: false, reason: '专用工作副本不可用' };

  const result = exportMemory(src, join(wc, 'memory'));
  logLine(cfg, `导出 ${result.count} 条 / 快照 ${result.bytes}B ← ${src}`);

  await gitWithFallback(['add', '-A'], cfg, wc);
  const staged = (await gitWithFallback(['diff', '--cached', '--quiet'], cfg, wc).then(() => false, () => true));
  if (!staged) {
    // 仓库已与活库一致：清掉 pending，否则每到空闲点都会白跑一趟。
    logLine(cfg, '记忆无变化，跳过提交');
    state.pending = false;
    state.pushFailed = false;
    state.lastSyncedMtime = dbMtime(src);
    state.lastSyncedAt = Date.now();
    saveState(cfg, state);
    return { ok: true, reason: 'no-change' };
  }

  const msg = `sync: 记忆自动同步 ${new Date().toISOString()} (${result.count} 条)`;
  const idArgs = cfg.identity?.name
    ? ['-c', `user.name=${cfg.identity.name}`, '-c', `user.email=${cfg.identity.email}`]
    : [];
  await gitWithFallback([...idArgs, 'commit', '-m', msg], cfg, wc);

  // 远端可能被别的会话推进过：先 rebase 再推，避免被拒。
  try {
    await gitWithFallback(['pull', '--rebase', 'origin', cfg.branch], cfg, wc);
  } catch (e) {
    logLine(cfg, `pull --rebase 失败（继续尝试推送）: ${e.message}`);
  }

  try {
    await gitWithFallback(['push', 'origin', cfg.branch], cfg, wc);
  } catch (e) {
    // 推不上去 = 备份没发生。留 dirty 让下轮重试，且必须报出去。
    state.pushFailed = true;
    logLine(cfg, `PUSH FAILED: ${e.message}`);
    return { ok: false, reason: `push failed: ${e.message}` };
  }

  state.pushFailed = false;
  state.lastSyncedMtime = dbMtime(src);
  state.lastSyncedAt = Date.now();
  state.pending = false;
  state.lastChangeAt = 0;
  saveState(cfg, state);
  logLine(cfg, `PUSH OK → ${cfg.repoUrl}#${cfg.branch}`);
  return { ok: true, reason: 'pushed' };
}

function statePath(cfg) { return join(dirname(cfg.logFile), 'maid-sync-state.json'); }

function loadState(cfg) {
  try { return { ...JSON.parse(readFileSync(statePath(cfg), 'utf8')) }; }
  catch { return { pending: false, lastChangeAt: 0, lastSyncedMtime: 0, pushFailed: false }; }
}

function saveState(cfg, st) {
  try { writeFileSync(statePath(cfg), JSON.stringify(st), 'utf8'); } catch { /* 状态写不下就下轮重算 */ }
}

/**
 * 启动同步循环。不阻塞插件加载；任何异常都只写日志。
 * @param {object} userCfg cordis 传入的 config 覆盖
 */
export function startSync(userCfg = {}) {
  const cfg = { ...DEFAULTS, ...userCfg };
  if (!cfg.enabled) return null;
  const home = envHome();
  if (!cfg.workcopy) cfg.workcopy = join(home, 'maid-sync');
  if (!cfg.logFile) cfg.logFile = join(home, 'maid-sync.log');

  const state = loadState(cfg);
  let running = false;
  let timer = null;

  const tick = async () => {
    if (running) return;
    running = true;
    try {
      const src = pickSourceDb();
      if (src) {
        const m = dbMtime(src);
        if (state.lastSyncedMtime === 0) {
          // 首次启动：以当前水位为基线，但仍然标记 pending——
          // 新装机器/新克隆的远端可能落后，要做一次基准同步；无变化时 git 会自动判空。
          state.lastSyncedMtime = m;
          state.pending = true;
          state.lastChangeAt = 0;
          saveState(cfg, state);
        } else if (m !== state.lastSyncedMtime) {
          if (!state.pending) state.pending = true;
          state.lastChangeAt = Date.now(); // 每次变化都把空闲钟拨回零
        }
      }

      const idleMs = cfg.idleMinutes * 60000;
      const due = state.pending && (Date.now() - (state.lastChangeAt || 0) >= idleMs);
      const retryPush = state.pushFailed && (Date.now() - (state.lastSyncedAt || 0) >= idleMs);
      if (!due && !retryPush) return;

      const r = await syncOnce(cfg, state);
      if (!r.ok) {
        state.pushFailed = true;
        saveState(cfg, state);
      }
    } catch (e) {
      try { logLine(cfg, `同步异常: ${e.stack || e.message}`); } catch { /* ignore */ }
    } finally {
      running = false;
    }
  };

  try {
    timer = setInterval(tick, cfg.pollSeconds * 1000);
    if (typeof timer.unref === 'function') timer.unref(); // 不拖住宿主退出
    logLine(cfg, `同步已启动：空闲 ${cfg.idleMinutes}min 推送，轮询 ${cfg.pollSeconds}s，副本 ${cfg.workcopy}`);
  } catch (e) {
    logLine(cfg, `启动失败: ${e.message}`);
    return null;
  }
  return timer;
}
