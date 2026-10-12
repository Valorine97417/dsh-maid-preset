// 记忆自动同步：轮询活库 mtime → 空闲达标 → 导出到专用克隆 → commit + push 到 GitHub。
// 老大拍板 (m01048)：触发 = 变更+空闲自动推；工作副本 = 专用克隆 $DSH_HOME/maid-sync。
// v0.4.1 起四条红线：
//   1. 只在活库真正变化后才导出——否则 memories.json 的 exportedAt 每次都变，会制造空 commit。
//   2. 推送失败绝不能装作成功——留 dirty 标记，下轮重试并写日志。
//   3. 认证/仓库不存在是配置错不是网络抖动：撞一次就永久暂停，绝不无限重试刷日志。
//   4. repoUrl 不配 = 待机。绝不默认指向别人的仓库——别的电脑装上不该自动往老大的仓库推。
import { execFile } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, appendFileSync, writeFileSync, renameSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { promisify } from 'node:util';
import { exportMemory } from './export.js';

const pExecFile = promisify(execFile);

const DEFAULTS = {
  enabled: true,
  // 空 = 待机。老大这台由 cordis.patch.yml 的 config.sync.repoUrl 显式指定。
  repoUrl: '',
  branch: 'main',
  workcopy: '',            // 空 = $DSH_HOME/maid-sync
  idleMinutes: 10,         // 记忆停写多久才推（防刷爆历史）
  pollSeconds: 60,         // 轮询间隔
  proxies: ['http://127.0.0.1:7890'], // 直连失败后逐个试；本机 Clash
  gitPath: 'git',
  // null = 不注入 -c，交给该机器自己的 git 配置（全局/仓库级）。
  // 本机也没配身份时，commit 前会探测出来并明确报错，而不是崩在 auto-detect 上。
  identity: null,
  retryBaseMinutes: 5,     // 网络类失败的退避基数：5/10/20/40… 分钟，封顶 8 小时
  logFile: ''              // 空 = $DSH_HOME/maid-sync.log
};

// 认证/权限/仓库不存在：这类错重试一万次也还是错，只会刷爆日志。
const FATAL_PATTERNS = [
  'authentication failed', '403 forbidden', '401 unauthorized',
  'repository not found', 'could not read username', 'terminal prompts disabled',
  'permission denied (publickey)', 'support for password authentication',
  'invalid username or password', 'you do not have permission', 'returned error: 404'
];

/** git 错误分类：'fatal' = 配置错，停；'retry' = 网络类，退避后重试。导出供测试。 */
export function classifyGitError(err) {
  const msg = String(err?.stderr || err?.message || err || '').toLowerCase();
  for (const p of FATAL_PATTERNS) if (msg.includes(p)) return 'fatal';
  return 'retry';
}

function firstLine(s, max = 200) {
  return String(s || '').split('\n')[0].slice(0, max);
}

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
    // clone 失败同样要分级：认证错（私有库无凭据）不能每 60 秒重来一遍。
    const kind = classifyGitError(e);
    if (kind === 'fatal') {
      return { fatal: `克隆被拒：${firstLine(e.stderr || e.message)}。多半是本机没有该仓库的读权限。改法：把 config.sync.repoUrl 指向你自己有权限的仓库（fork 一份即可），或配好 GitHub 凭据后重启 DSH。` };
    }
    logLine(cfg, `克隆失败（网络类，下轮重试）: ${firstLine(e.stderr || e.message)}`);
    return null;
  }
}

/**
 * 生成 commit 身份参数。config.sync.identity 优先；留空则交给该机器自己的 git 配置。
 * 两者都缺时返回 null——与其让 commit 崩在 auto-detect，不如说清楚怎么配。
 */
async function resolveIdentityArgs(cfg, wc) {
  if (cfg.identity?.name) {
    const email = cfg.identity.email || `${cfg.identity.name}@users.noreply.github.com`;
    return ['-c', `user.name=${cfg.identity.name}`, '-c', `user.email=${email}`];
  }
  try {
    const name = (await gitWithFallback(['config', 'user.name'], { ...cfg, proxies: [] }, wc)).trim();
    const email = (await gitWithFallback(['config', 'user.email'], { ...cfg, proxies: [] }, wc)).trim();
    if (name && email) return [];
  } catch { /* 探测失败往下走 */ }
  return null;
}

/** 记下配置类暂停：下次只有换 repoUrl 或重启并改好配置才恢复。 */
function pauseForConfig(cfg, state, reason, detail) {
  state.fatalReason = reason;
  state.fatalDetail = detail;
  state.fatalRepoUrl = cfg.repoUrl;
  saveState(cfg, state);
  logLine(cfg, `已暂停同步（配置问题）：${detail}`);
}

/** 一次同步。返回 {ok, reason, fatal?}。导出供自测直接驱动。 */
export async function syncOnce(rawCfg, state) {
  // 就地兜底：调用方（含自测）漏传字段不能让 commit 崩在 auto-detect 上。
  const cfg = { ...DEFAULTS, ...rawCfg };
  if (!cfg.repoUrl) return { ok: false, reason: '未配置 repoUrl，同步待机', fatal: true };

  const src = pickSourceDb();
  if (!src) return { ok: false, reason: '找不到活库（window-index 为空）' };

  const wc = await ensureWorkcopy(cfg);
  if (wc && typeof wc === 'object' && wc.fatal) {
    pauseForConfig(cfg, state, '仓库不可访问', wc.fatal);
    return { ok: false, reason: wc.fatal, fatal: true };
  }
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
    state.failCount = 0;
    state.nextRetryAt = 0;
    state.lastSyncedMtime = dbMtime(src);
    state.lastSyncedAt = Date.now();
    saveState(cfg, state);
    return { ok: true, reason: 'no-change' };
  }

  const idArgs = await resolveIdentityArgs(cfg, wc);
  if (idArgs === null) {
    const detail = 'config.sync.identity 未配置，本机 git 也没有 user.name/user.email。改法：在 cordis.patch.yml 的 sync 配置里写 identity: {name: 你的名字, email: 你的邮箱}，或本机执行 git config --global user.name "..." && git config --global user.email "..."，然后重启 DSH。';
    pauseForConfig(cfg, state, 'commit 身份缺失', detail);
    return { ok: false, reason: 'commit identity missing', fatal: true };
  }

  const msg = `sync: 记忆自动同步 ${new Date().toISOString()} (${result.count} 条)`;
  await gitWithFallback([...idArgs, 'commit', '-m', msg], cfg, wc);

  // 远端可能被别的会话推进过：先 rebase 再推，避免被拒。
  try {
    await gitWithFallback(['pull', '--rebase', 'origin', cfg.branch], cfg, wc);
  } catch (e) {
    logLine(cfg, `pull --rebase 失败（继续尝试推送）: ${firstLine(e.stderr || e.message)}`);
  }

  try {
    await gitWithFallback(['push', 'origin', cfg.branch], cfg, wc);
  } catch (e) {
    // 推不上去 = 备份没发生。但要分清是配置错还是网络抖。
    if (classifyGitError(e) === 'fatal') {
      const detail = `推送被拒：${firstLine(e.stderr || e.message)}。多半是本机没有该仓库的写权限。改法：把 config.sync.repoUrl 指向你自己有权限的仓库（fork 一份即可），或配好 GitHub 凭据后重启 DSH。`;
      pauseForConfig(cfg, state, 'push 被拒', detail);
      return { ok: false, reason: `push rejected: ${e.message}`, fatal: true };
    }
    state.pushFailed = true;
    state.failCount = (state.failCount || 0) + 1;
    const backoff = Math.min(cfg.retryBaseMinutes * (2 ** (state.failCount - 1)), 480);
    state.nextRetryAt = Date.now() + backoff * 60000;
    saveState(cfg, state);
    logLine(cfg, `PUSH FAILED（网络类，${backoff} 分钟后重试，第 ${state.failCount} 次）: ${firstLine(e.stderr || e.message)}`);
    return { ok: false, reason: `push failed: ${e.message}` };
  }

  state.pushFailed = false;
  state.failCount = 0;
  state.nextRetryAt = 0;
  state.lastSyncedMtime = dbMtime(src);
  state.lastSyncedAt = Date.now();
  state.pending = false;
  state.lastChangeAt = 0;
  saveState(cfg, state);
  logLine(cfg, `PUSH OK → ${cfg.repoUrl}#${cfg.branch}`);
  return { ok: true, reason: 'pushed' };
}

function statePath(cfg) { return join(dirname(cfg.logFile), 'maid-sync-state.json'); }

const STATE_DEFAULTS = {
  pending: false, lastChangeAt: 0, lastSyncedMtime: 0, pushFailed: false,
  failCount: 0, nextRetryAt: 0, fatalReason: '', fatalDetail: '', fatalRepoUrl: ''
};

function loadState(cfg) {
  try { return { ...STATE_DEFAULTS, ...JSON.parse(readFileSync(statePath(cfg), 'utf8')) }; }
  catch { return { ...STATE_DEFAULTS }; }
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

  // 不配仓库就待机：本地记忆照常用，只是不上传。绝不默认指向别人的仓库。
  if (!cfg.repoUrl) {
    logLine(cfg, '未配置 config.sync.repoUrl，同步待机（本地记忆不受影响，只是不上传）。');
    return null;
  }

  const state = loadState(cfg);

  // 换了仓库 = 上次的配置问题可能已经解决，自动恢复。
  if (state.fatalReason && state.fatalRepoUrl !== cfg.repoUrl) {
    logLine(cfg, `repoUrl 已变更，清除暂停状态（原：${state.fatalReason}）`);
    state.fatalReason = '';
    state.fatalDetail = '';
    state.fatalRepoUrl = '';
    state.pushFailed = false;
    state.failCount = 0;
    state.nextRetryAt = 0;
    saveState(cfg, state);
  }
  if (state.fatalReason) {
    logLine(cfg, `同步已因配置问题暂停：${state.fatalDetail || state.fatalReason}`);
    return null;
  }

  const state2 = state;
  let running = false;
  let timer = null;

  const tick = async () => {
    if (running) return;
    running = true;
    try {
      const src = pickSourceDb();
      if (src) {
        const m = dbMtime(src);
        if (state2.lastSyncedMtime === 0) {
          // 首次启动：以当前水位为基线，但仍然标记 pending——
          // 新装机器/新克隆的远端可能落后，要做一次基准同步；无变化时 git 会自动判空。
          state2.lastSyncedMtime = m;
          state2.pending = true;
          state2.lastChangeAt = 0;
          saveState(cfg, state2);
        } else if (m !== state2.lastSyncedMtime) {
          if (!state2.pending) state2.pending = true;
          // 空闲钟锚定库文件的最后写入时刻：旧实现每 tick 用 Date.now() 重置，
          // 而 m 在同步成功前恒不等于水位，导致钟永远走不满 idleMinutes、syncOnce 永不执行。
          state2.lastChangeAt = Math.min(Date.now(), m);
        }
      }

      const idleMs = cfg.idleMinutes * 60000;
      const due = state2.pending && (Date.now() - (state2.lastChangeAt || 0) >= idleMs);
      const cooledDown = !state2.nextRetryAt || Date.now() >= state2.nextRetryAt;
      const retryPush = state2.pushFailed && (Date.now() - (state2.lastSyncedAt || 0) >= idleMs) && cooledDown;
      if (!due && !retryPush) return;

      const r = await syncOnce(cfg, state2);
      if (r.fatal) {
        // 配置类错误：syncOnce 已写状态并暂停，循环自己停掉，别再空转。
        if (timer) { clearInterval(timer); timer = null; }
        return;
      }
      if (!r.ok) {
        state2.pushFailed = true;
        saveState(cfg, state2);
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
