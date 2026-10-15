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
import { loadSettings } from './settings.js';

const pExecFile = promisify(execFile);

/**
 * 常见本地代理端口候选（只用于「直连失败后」探测谁在监听）。
 * 覆盖 Clash(7890/7891/7897/7899)、V2RayN(10808/10809)、通用 socks/http(1080)、
 * 以及若干常见 http 代理端口。探测并行、300ms 超时，探不到就不借道——
 * 所以列表长一点不会拖慢「本想直连」的场景。
 */
export const PROXY_PORT_CANDIDATES = [7890, 7891, 7897, 7899, 1080, 10808, 10809, 10810, 8118, 8888, 20171];

const DEFAULTS = {
  enabled: true,
  // 空 = 待机。出厂不预设地址；本机由 $DSH_HOME/maid-settings.json 显式指定。
  repoUrl: '',
  branch: 'main',
  workcopy: '',            // 空 = $DSH_HOME/maid-sync
  idleMinutes: 10,         // 记忆停写多久才推（防刷爆历史）
  // 最长等待上限：白天的长会话里 WAL 持续被写、空闲钟永远走不满，靠这条兜底——
  // 距离上次成功推送超过这么久就强制推一次。0 = 关闭（回到纯空闲钟行为）。
  maxWaitMinutes: 60,
  pollSeconds: 60,         // 轮询间隔
  // 空 = 不预设代理。策略：所有出网先直连，直连不通再自动探本机在听的代理端口
  // （环境变量 → Windows 系统代理 → PROXY_PORT_CANDIDATES 逐个试连通）。
  // 写死端口会在没跑代理的机器上白失败一轮，故不预设。
  proxies: [],
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

// 基线坏了：rebase 挂起、分叉、落后远端。重试同样推不上去，但可自愈——
// 记忆导出是全量重建语义，冲突毫无意义，以远端为基准重做一遍即可。
// 不修这一类，workcopy 一旦卡在 "(no branch, rebasing main)" 就永久推不动。
const BASELINE_PATTERNS = [
  'non-fast-forward', 'behind its remote', 'diverged', 'fetch first',
  'unmerged files', 'could not apply', 'does not apply', 'conflict',
  'fix conflicts and then commit', 'pulling with rebase', 'need to specify how to reconcile'
];

/** git 错误分类：'baseline' = 基线坏（可自愈）；'fatal' = 配置错，停；'retry' = 网络类，退避。导出供测试。 */
export function classifyGitError(err) {
  const msg = String(err?.stderr || err?.message || err || '').toLowerCase();
  for (const p of BASELINE_PATTERNS) if (msg.includes(p)) return 'baseline';
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
    // 直连 github 常白等 21s 才超时，靠 connectTimeout 快速让路给代理重试；
    // 借道代理的那次才真正需要长超时（拉取大对象/慢链路）。
    timeout: opts.timeout ?? 60000,
    maxBuffer: 8 * 1024 * 1024,
    windowsHide: true,
    encoding: 'utf8',
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: '0',
      GIT_CONFIG_NOSYSTEM: '0',
      // 8 秒连不上就认定直连不通，别把整轮同步耗在这上面。
      GIT_HTTP_LOW_SPEED_LIMIT: '1',
      GIT_HTTP_LOW_SPEED_TIME: '8',
      ...opts.env
    }
  });
}

// ───────────────────── 代理自动探测（v0.7.0） ─────────────────────
// 老大拍板：不搞手动代理列表 UI——默认先直连，git 失败后才检测本机是否开了代理。
// 探测顺序：环境变量 → Windows 系统代理设置（注册表）→ 常见代理端口谁在听。
// 结果缓存 10 分钟：git 一次同步里会调好几次，不必每把都探。

let proxyProbeCache = { at: 0, list: [] };

/** 本机代理探测（环境变量 → 注册表 → 端口扫描），结果缓存 10 分钟。导出供设置页复用。 */
export async function detectLocalProxies() {
  const now = Date.now();
  if (now - proxyProbeCache.at < 600000) return proxyProbeCache.list;
  const out = [];
  const push = (u) => {
    const s = String(u || '').trim();
    if (s && /^https?:\/\//.test(s) && !out.includes(s)) out.push(s);
  };
  push(process.env.HTTPS_PROXY || process.env.https_proxy);
  push(process.env.HTTP_PROXY || process.env.http_proxy);
  // Windows 系统代理（WinINET，Clash/V2RayN 开系统代理就写这里）
  try {
    const q = await pExecFile('reg', ['query', String.raw`HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings`], {
      timeout: 5000, windowsHide: true, encoding: 'utf8'
    });
    const enabled = /ProxyEnable\s+REG_DWORD\s+0x1/i.test(q.stdout || '');
    const sv = (q.stdout || '').match(/ProxyServer\s+REG_SZ\s+(\S+)/i);
    if (enabled && sv) push(/^https?:/.test(sv[1]) ? sv[1] : `http://${sv[1]}`);
  } catch { /* 非 Windows 或查询失败就跳过 */ }
  // 常见本地代理端口探测（只探「正在监听」的，探不到就不借道）
  try {
    const net = await import('node:net');
    const ports = PROXY_PORT_CANDIDATES;
    const alive = await Promise.all(ports.map((port) => new Promise((res) => {
      let done = false;
      const fin = (v) => { if (!done) { done = true; try { s.destroy(); } catch { /* ignore */ } res(v); } };
      const s = net.createConnection({ port, host: '127.0.0.1', timeout: 300 });
      s.on('connect', () => fin(true));
      s.on('error', () => fin(false));
      s.on('timeout', () => fin(false));
    })));
    ports.forEach((p, i) => { if (alive[i]) push(`http://127.0.0.1:${p}`); });
  } catch { /* 探测失败=纯直连 */ }
  proxyProbeCache = { at: now, list: out };
  return out;
}

/** git 操作：先直连；失败后借道代理逐个重试（本机直连 github 常超时）。 */
async function gitWithFallback(args, cfg, cwd) {
  let lastErr = null;
  try {
    const r = await runGit(args, { cwd, gitPath: cfg.gitPath });
    return r.stdout ?? '';
  } catch (e) {
    lastErr = e;
  }
  // 直连失败：合并「自动探测的本机代理」+「配置里的 proxies」借道重试。
  // v0.7.0 老大拍板：不搞手动代理列表 UI——默认直连，失败才检测本机是否开了代理。
  let attempts;
  try { attempts = [...new Set([...(await detectLocalProxies()), ...(cfg.proxies || [])])]; }
  catch { attempts = cfg.proxies || []; }
  for (const proxy of attempts) {
    try {
      const r = await runGit(['-c', `http.proxy=${proxy}`, ...args], { cwd, gitPath: cfg.gitPath });
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
  try {
    await gitWithFallback(['clone', '--branch', cfg.branch, cfg.repoUrl, wc], cfg, dirname(wc));
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

/**
 * 基线自愈：丢掉挂起的 rebase/merge，把 workcopy 硬对齐到远端分支。
 * 记忆导出是全量重建（每次重新生成 memory/ 三件），本地历史毫无保留价值，
 * 所以冲突不该硬 rebase——以远端为基准重做一遍才是正解。
 */
async function resetBaseline(cfg, wc) {
  for (const args of [['rebase', '--abort'], ['merge', '--abort'], ['cherry-pick', '--abort'], ['reset', '--merge']]) {
    try { await gitWithFallback(args, { ...cfg, proxies: [] }, wc); } catch { /* 没挂起就跳过 */ }
  }
  await gitWithFallback(['fetch', 'origin'], cfg, wc);
  await gitWithFallback(['reset', '--hard', `origin/${cfg.branch}`], { ...cfg, proxies: [] }, wc);
}

/** 导出 + 提交 + 推送。返回 {ok, reason, baseline?, fatal?}；baseline=true 表示基线坏了需重做。 */
async function attemptPush(cfg, state, wc, src) {
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
    const kind = classifyGitError(e);
    if (kind === 'baseline') {
      // rebase 挂起会让 workcopy 卡在 detached HEAD（"(no branch, rebasing main)"），
      // 之后 push 永远 non-fast-forward——必须整体重置，绝不能硬着头皮往下推。
      logLine(cfg, `pull --rebase 基线损坏: ${firstLine(e.stderr || e.message)}`);
      return { ok: false, baseline: true, reason: 'rebase conflicted' };
    }
    logLine(cfg, `pull --rebase 失败（继续尝试推送）: ${firstLine(e.stderr || e.message)}`);
  }

  try {
    await gitWithFallback(['push', 'origin', cfg.branch], cfg, wc);
  } catch (e) {
    const kind = classifyGitError(e);
    if (kind === 'baseline') {
      logLine(cfg, `push 被拒（基线问题）: ${firstLine(e.stderr || e.message)}`);
      return { ok: false, baseline: true, reason: 'push non-fast-forward' };
    }
    // 推不上去 = 备份没发生。但要分清是配置错还是网络抖。
    if (kind === 'fatal') {
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

/** 一次同步。返回 {ok, reason, fatal?}。导出供自测/设置页手动触发直接驱动。 */
export async function syncOnce(rawCfg, state) {
  // 就地兜底：调用方（自测、设置页手动触发）漏传字段不能让 commit 崩在 auto-detect 上。
  const cfg = { ...DEFAULTS, ...rawCfg };
  // 这两个默认值依赖 envHome()，写不进 DEFAULTS 常量，必须在这里补——
  // 少了这段，外部直接调 syncOnce 会拿到空 workcopy，clone 目录必然找不到。
  const home = envHome();
  if (!cfg.workcopy) cfg.workcopy = join(home, 'maid-sync');
  if (!cfg.logFile) cfg.logFile = join(home, 'maid-sync.log');
  if (!cfg.repoUrl) return { ok: false, reason: '未配置 repoUrl，同步待机', fatal: true };

  const src = pickSourceDb();
  if (!src) return { ok: false, reason: '找不到活库（window-index 为空）' };

  const wc = await ensureWorkcopy(cfg);
  if (wc && typeof wc === 'object' && wc.fatal) {
    pauseForConfig(cfg, state, '仓库不可访问', wc.fatal);
    return { ok: false, reason: wc.fatal, fatal: true };
  }
  if (!wc) return { ok: false, reason: '专用工作副本不可用' };

  let r = await attemptPush(cfg, state, wc, src);
  if (r.baseline) {
    // 基线坏了允许重做一次：以远端为基准硬对齐后，重新导出+提交+推送。
    logLine(cfg, `基线自愈：重置到 origin/${cfg.branch} 后重做`);
    try {
      await resetBaseline(cfg, wc);
    } catch (e) {
      logLine(cfg, `基线自愈失败（下轮重试）: ${firstLine(e.stderr || e.message)}`);
      state.pushFailed = true;
      state.failCount = (state.failCount || 0) + 1;
      saveState(cfg, state);
      return { ok: false, reason: `reset baseline failed: ${e.message}` };
    }
    r = await attemptPush(cfg, state, wc, src);
  }
  return r;
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
 * 到期判定（纯函数，导出供自测直接驱动，不必等真实时间流逝）。
 * 三条路任一成立就该走一轮：
 *   idleDue    — 记忆停写满 idleMinutes（旧行为，防刷爆历史）；
 *   maxWaitDue — 距上次成功推送满 maxWaitMinutes（长会话里 WAL 一直动、空闲钟永远走不满的兜底）；
 *   retryPush  — 上次推失败且退避已过、空闲钟也到了。
 * @returns {{due:boolean, idleDue:boolean, maxWaitDue:boolean, retryPush:boolean, skipped:boolean, reason?:string}}
 */
export function computeDue(cfg, state, now = Date.now()) {
  const idleMs = Number(cfg.idleMinutes) * 60000;
  const pending = !!state.pending;
  const cooledDown = !state.nextRetryAt || now >= state.nextRetryAt;
  const idleDue = pending && (now - (state.lastChangeAt || 0) >= idleMs);
  const maxWaitMs = Number(cfg.maxWaitMinutes) > 0 ? Number(cfg.maxWaitMinutes) * 60000 : 0;
  // lastSyncedAt 缺省（新机器/新克隆）时退回 lastChangeAt：不能因为从未推过就永远不触发上限。
  const baseline = state.lastSyncedAt || state.lastChangeAt || 0;
  const maxWaitDue = pending && maxWaitMs > 0 && (now - baseline >= maxWaitMs) && cooledDown;
  const due = idleDue || maxWaitDue;
  const retryPush = !!state.pushFailed && (now - (state.lastSyncedAt || 0) >= idleMs) && cooledDown;
  return { due, idleDue, maxWaitDue, retryPush, skipped: !due && !retryPush, reason: '未到空闲点，本轮跳过' };
}

/**
 * 启动同步循环。不阻塞插件加载；任何异常都只写日志。
 * @param {object} userCfg cordis 传入的 config 覆盖
 */
export function startSync(userCfg = {}) {
  const home = envHome();
  // 配置每 tick 热读：cordis 配置为底、设置页文件（$DSH_HOME/maid-settings.json）优先。
  // 这样设置页改 repoUrl/idleMinutes 立即生效，无需重启。
  const mergeCfg = () => {
    const s = (loadSettings()?.sync) || {};
    const c = { ...DEFAULTS, ...userCfg, ...s };
    if (!c.workcopy) c.workcopy = join(home, 'maid-sync');
    if (!c.logFile) c.logFile = join(home, 'maid-sync.log');
    return c;
  };
  let cfg = mergeCfg();
  // v0.7.0：enabled 也走热读——循环照起（待命），设置页开关下个 tick 即生效。
  if (!cfg.enabled) {
    logLine(cfg, '同步当前已关闭（enabled: false）——循环待命，设置页开启后即时生效。');
  }

  // 无 repoUrl 不再直接退出（旧行为让设置页后配仓库永远不生效）：
  // 循环照起、进入待机，设置页填好仓库后下个 tick 自动激活。
  if (!cfg.repoUrl) {
    logLine(cfg, '未配置 repoUrl（cordis config 或设置页均可配），同步循环待机中——本地记忆不受影响，只是不上传。');
  }

  const state = loadState(cfg);

  const state2 = state;
  let lastRepoUrl = cfg.repoUrl;
  let running = false;
  let timer = null;

  const tick = async (force = false) => {
    if (running) return { ok: false, reason: 'busy' };
    running = true;
    try {
      // 热读：设置页改的 repoUrl/idleMinutes/enabled 从这一轮起生效。
      cfg = mergeCfg();
      if (!cfg.enabled) return { ok: false, reason: '同步已关闭（设置页可开启）', standby: true };
      if (cfg.repoUrl !== lastRepoUrl) {
        if (state2.fatalReason && state2.fatalRepoUrl !== cfg.repoUrl) {
          // 换了仓库 = 上次的配置问题可能已解决，自动恢复。
          logLine(cfg, `repoUrl 已变更，清除暂停状态（原：${state2.fatalReason}）`);
          state2.fatalReason = '';
          state2.fatalDetail = '';
          state2.fatalRepoUrl = '';
          state2.pushFailed = false;
          state2.failCount = 0;
          state2.nextRetryAt = 0;
          saveState(cfg, state2);
        }
        lastRepoUrl = cfg.repoUrl;
        logLine(cfg, `同步目标已更新: ${cfg.repoUrl || '(空，待机)'}`);
      }
      if (!cfg.repoUrl) return { ok: false, reason: '未配置 repoUrl，待机', standby: true };
      if (state2.fatalReason) return { ok: false, reason: state2.fatalReason, paused: true };
      if (force) {
        // 立即同步：空闲钟清零，due 判定恒真，本轮直接走 syncOnce。
        state2.pending = true;
        state2.lastChangeAt = 0;
      }

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

      if (force) {
        // 立即同步：清零必须放在上面按 mtime 锚定之后，否则刚拨回的钟会盖掉这次清零——
        // 库刚写过时 due 恒假，按钮点了等于没点（此前正是这样报 409）。
        state2.pending = true;
        state2.lastChangeAt = 0;
      }

      // 到期判定见 computeDue()：空闲钟 / 最长等待上限 / 失败退避重试，三条路任一成立即走。
      const d = computeDue(cfg, state2);
      // 跳过也要回正经结果：返回 undefined 会让接口层无法区分「没到点」和「出错了」。
      if (d.skipped) return { ok: false, reason: d.reason, skipped: true };
      if (d.maxWaitDue && !d.idleDue) logLine(cfg, `已达最长等待上限 ${cfg.maxWaitMinutes} 分钟（记忆持续写入中），本轮强制推送`);

      const r = await syncOnce(cfg, state2);
      if (r.fatal) {
        // 配置类错误：syncOnce 已写状态并暂停；循环不自杀——热读模式下
        // 设置页换掉 repoUrl 即可在下轮自愈（tick 头部的变更检测会清暂停）。
        return r;
      }
      if (!r.ok) {
        state2.pushFailed = true;
        saveState(cfg, state2);
      }
      return r;
    } catch (e) {
      try { logLine(cfg, `同步异常: ${e.stack || e.message}`); } catch { /* ignore */ }
      return { ok: false, reason: String(e?.message ?? e) };
    } finally {
      running = false;
    }
  };

  try {
    timer = setInterval(() => { void tick(false); }, cfg.pollSeconds * 1000);
    if (typeof timer.unref === 'function') timer.unref(); // 不拖住宿主退出
    logLine(cfg, cfg.repoUrl
      ? `同步已启动：空闲 ${cfg.idleMinutes}min 推送${Number(cfg.maxWaitMinutes) > 0 ? `（最长等待 ${cfg.maxWaitMinutes}min 强制推）` : ''}，轮询 ${cfg.pollSeconds}s，副本 ${cfg.workcopy}`
      : `同步已启动（待机）：轮询 ${cfg.pollSeconds}s，副本 ${cfg.workcopy}`);
  } catch (e) {
    logLine(cfg, `启动失败: ${e.message}`);
    return null;
  }
  activeTick = tick;
  return timer;
}

/** 当前活跃引擎的 tick（模块级：index.js 的路由拿不到 startSync 局部变量）。 */
let activeTick = null;

/** 立即同步（设置页「马上推」按钮）：空闲钟清零，本轮直接执行而不是等下个 tick。 */
export async function requestSyncNow() {
  if (typeof activeTick !== 'function') return { ok: false, reason: '同步引擎未运行（检查是否 enabled、或插件未加载）' };
  try {
    return await activeTick(true);
  } catch (e) {
    return { ok: false, reason: String(e?.message ?? e) };
  }
}
