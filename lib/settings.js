// dsh-maid-preset 设置面板后端支撑。
// 分工：
//   - 设置文件 $DSH_HOME/maid-settings.json：设置页写、sync 引擎每 tick 热读（repoUrl/idleMinutes 即时生效）。
//   - 人设：存在 cordis.patch.yml 的 personaPrefix 锚点区段（平台装配层），改完重启 DSH 生效。
//     写入时每行强制加 6 空格缩进——内容永远不可能顶格成 `- id:` 造出新插件条目，天然防注入。
//   - 记忆清单：node:sqlite 直查工作区活库（与 meow-memory 同引擎，Node 内置零依赖）。
import { existsSync, readFileSync, writeFileSync, renameSync, mkdirSync, copyFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { promisify } from 'node:util';
import { execFile } from 'node:child_process';
import { detectLocalProxies } from './sync.js';

const pExecFile = promisify(execFile);

const PKG_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PATCH_FILE = join(PKG_ROOT, 'cordis.patch.yml');

export function envHome() {
  return process.env.DSH_HOME || join(process.env.USERPROFILE || process.env.HOME || '', '.dsh');
}

export const SETTINGS_FILE = join(envHome(), 'maid-settings.json');

/** 读设置文件；不存在/损坏一律返回 {}（走默认值）。 */
export function loadSettings() {
  try { return JSON.parse(readFileSync(SETTINGS_FILE, 'utf8')); }
  catch { return {}; }
}

/** 原子写：先写 .tmp 再改名，避免半截 JSON 把同步配置弄坏。 */
export function saveSettings(obj) {
  mkdirSync(dirname(SETTINGS_FILE), { recursive: true });
  const tmp = SETTINGS_FILE + '.tmp';
  writeFileSync(tmp, JSON.stringify(obj, null, 2), 'utf8');
  renameSync(tmp, SETTINGS_FILE);
}

/** 浅合并补丁后落盘，返回新设置。 */
export function updateSettings(patch) {
  const cur = loadSettings();
  const next = { ...cur, ...patch };
  saveSettings(next);
  return next;
}

// ───────────────────── 同步门槛（v0.7.0：设置页可调，热读） ─────────────────────

/** 精选门槛：默认 2（v0.6.1 老大定），设置页 sync.minImportance 可调 0~9。 */
export function minImportance() {
  const n = Number(loadSettings()?.sync?.minImportance);
  return Number.isFinite(n) && n >= 0 && n <= 9 ? Math.floor(n) : 2;
}

/** 按当前门槛拼导出 WHERE——json/md/快照三路共用；每路各自热读，改设置即生效。 */
export function exportWhere() {
  return `(status IS NULL OR status != 'archived') AND (importance IS NULL OR importance >= ${minImportance()})`;
}

// ───────────────────── HTTP helpers（照 meow-memory 同款模式） ─────────────────────

export function writeJson(res, status, body) {
  try {
    res.writeHead?.(status, { 'content-type': 'application/json; charset=utf-8' });
    res.end?.(JSON.stringify(body));
  } catch { /* 客户端可能已断开 */ }
}

export function readJsonBody(req, maxBytes = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on?.('data', (chunk) => {
      const buf = typeof chunk === 'string' ? Buffer.from(chunk) : chunk;
      size += buf.length;
      if (size > maxBytes) { reject(new Error('request body too large')); return; }
      chunks.push(buf);
    });
    req.on?.('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')); }
      catch (e) { reject(e); }
    });
    req.on?.('error', reject);
  });
}

// ───────────────────── 人设（cordis.patch.yml personaPrefix 区段） ─────────────────────

const PERSONA_ANCHOR = /^\s*personaPrefix:\s*\|\s*$/;
const MAX_PERSONA = 20000;

/** 读人设文本（去掉块缩进；行尾统一成 \n，读回幂等）。 */
export function readPersona() {
  try {
    const text = readFileSync(PATCH_FILE, 'utf8');
    const lines = text.split(/\r?\n/); // 文件是 CRLF：split('\n') 会让行尾挂 \r，roundtrip 丢字节
    const start = lines.findIndex((l) => PERSONA_ANCHOR.test(l));
    if (start < 0) return { ok: false, error: '未找到 personaPrefix 锚点（cordis.patch.yml 已改结构？）' };
    const out = [];
    for (let i = start + 1; i < lines.length; i++) {
      if (/^- /.test(lines[i])) break; // 顶层新条目 = 区段结束
      out.push(lines[i]);
    }
    while (out.length && out[out.length - 1].trim() === '') out.pop();
    const body = out.map((l) => (l.startsWith('      ') ? l.slice(6) : l)).join('\n');
    return { ok: true, text: body };
  } catch (e) {
    return { ok: false, error: e?.message ?? String(e) };
  }
}

/** 覆写人设区段。备份放 $DSH_HOME（仓库外，不弄脏 git）。重启 DSH 生效。 */
export function writePersona(newText) {
  if (typeof newText !== 'string' || newText.includes('\u0000') || Buffer.byteLength(newText, 'utf8') > MAX_PERSONA) {
    return { ok: false, error: '人设内容不合法（空/超长/含非法字符）' };
  }
  try {
    const text = readFileSync(PATCH_FILE, 'utf8');
    const lines = text.split(/\r?\n/);
    const start = lines.findIndex((l) => PERSONA_ANCHOR.test(l));
    if (start < 0) return { ok: false, error: '未找到 personaPrefix 锚点' };
    let end = lines.length;
    for (let i = start + 1; i < lines.length; i++) {
      if (/^- /.test(lines[i])) { end = i; break; }
    }
    const norm = newText.replace(/\r\n/g, '\n').replace(/\n+$/, '');
    const body = norm.split('\n').map((l) => (l === '' ? '' : '      ' + l));
    const nextLines = [...lines.slice(0, start + 1), ...body, '', ...lines.slice(end)];
    // 保持原文件行尾风格（本仓库是 CRLF）：混用会让 git 把整段标脏。
    const eol = /\r\n/.test(text) ? '\r\n' : '\n';
    try { copyFileSync(PATCH_FILE, join(envHome(), 'cordis.patch.yml.bak')); } catch { /* 备份失败不拦路 */ }
    writeFileSync(PATCH_FILE, nextLines.join(eol), 'utf8');
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message ?? String(e) };
  }
}

// ───────────────────── 记忆清单（node:sqlite 直查活库） ─────────────────────

// 表名不能参数绑定：白名单防注入（meow-memory 按 level 分表）。
const LEVELS = new Set(['soul', 'user', 'rules', 'project', 'fact', 'lesson', 'topic']);
const STATUSES = new Set(['active', 'stale', 'archived', '']);
export const PROJECT_DIR = '.dsh-meow'; // 与 meow-memory 默认 projectDir 一致

/** 工作区活库路径；不存在返回 null。ws 必须是绝对路径形态。 */
function dbPathOf(ws) {
  if (typeof ws !== 'string' || !/^[A-Za-z]:[\\/]/.test(ws)) return null;
  const p = join(ws, '.dsh-meow', 'memory.db');
  return existsSync(p) ? p : null;
}

/** 读 meow-memory 的实例级 window-index.json，收集历史工作区。 */
export function knownWorkspaces() {
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

/** 工作区清单（带活库有无与最近写入时间，供设置页下拉）。 */
export function workspaceList() {
  const out = [];
  for (const ws of knownWorkspaces()) {
    const db = join(ws, PROJECT_DIR, 'memory.db');
    let mtime = 0;
    try {
      if (existsSync(db)) {
        mtime = statSync(db).mtimeMs;
        try { const w = statSync(db + '-wal').mtimeMs; if (w > mtime) mtime = w; } catch { /* 无 wal */ }
      }
    } catch { /* ignore */ }
    out.push({ ws, hasDb: existsSync(db), mtime });
  }
  out.sort((a, b) => b.mtime - a.mtime);
  return out;
}

/** 列表：level/status/q 过滤 + 分页 + 排序（updated=更新时间倒序，默认；importance=重要性倒序）。返回 {ok, total, rows}。 */
export async function listMemories({ ws, level = '', status = '', q = '', page = 1, pageSize = 20, sort = '' }) {
  const dbPath = dbPathOf(ws);
  if (!dbPath) return { ok: false, error: '该工作区没有记忆库' };
  if (level && !LEVELS.has(level)) return { ok: false, error: '非法 level' };
  if (status && !STATUSES.has(status)) return { ok: false, error: '非法 status' };
  const pg = Math.max(1, Number(page) || 1);
  const ps = Math.min(100, Math.max(5, Number(pageSize) || 20));
  const levels = level ? [level] : [...LEVELS];
  const like = q ? `%${String(q).replace(/[%_\\]/g, '\\$&')}%` : null;

  let DatabaseSync;
  ({ DatabaseSync } = await import('node:sqlite'));
  const db = new DatabaseSync(dbPath, { readOnly: true });
  try {
    const all = [];
    for (const lv of levels) {
      // 各 level 表结构可能随 meow-memory 版本演进：用 SELECT * 拿全列，不假设列集合。
      let sql = `SELECT * FROM ${lv}`;
      const args = [];
      const where = [];
      if (status) { where.push('status = ?'); args.push(status); }
      if (like) { where.push("(content LIKE ? ESCAPE '\\' OR IFNULL(keywords,'') LIKE ? ESCAPE '\\')"); args.push(like, like); }
      if (where.length) sql += ' WHERE ' + where.join(' AND ');
      try {
        const rows = db.prepare(sql).all(...args);
        for (const r of rows) all.push({ level: lv, ...r });
      } catch (e) {
        if (!/no such table|no such column/.test(String(e?.message))) throw e; // 表缺失=该 level 未启用，跳过
      }
    }
    if (sort === 'importance') {
      // 重要性倒序，同分按更新时间倒序
      all.sort((a, b) => (Number(b.importance ?? 1) - Number(a.importance ?? 1))
        || String(b.updated_at || b.created_at || '').localeCompare(String(a.updated_at || a.created_at || '')));
    } else {
      all.sort((a, b) => (String(b.updated_at || b.created_at || '')).localeCompare(String(a.updated_at || a.created_at || '')));
    }
    const total = all.length;
    const rows = all.slice((pg - 1) * ps, pg * ps).map((r) => ({
      id: r.id, level: r.level, content: r.content, keywords: r.keywords ?? '',
      importance: r.importance ?? 1, status: r.status ?? 'active',
      project: r.project ?? '', updated_at: r.updated_at ?? r.created_at ?? ''
    }));
    return { ok: true, total, page: pg, pageSize: ps, rows };
  } catch (e) {
    return { ok: false, error: e?.message ?? String(e) };
  } finally {
    try { db.close(); } catch { /* ignore */ }
  }
}

/** 单条操作：update（改 status/importance）或 delete。 */
export async function mutateMemory({ ws, id, level, op = 'update', status, importance }) {
  const dbPath = dbPathOf(ws);
  if (!dbPath) return { ok: false, error: '该工作区没有记忆库' };
  if (!LEVELS.has(level)) return { ok: false, error: '非法 level' };
  if (typeof id !== 'string' || !id) return { ok: false, error: '缺少 id' };

  let DatabaseSync;
  ({ DatabaseSync } = await import('node:sqlite'));
  const db = new DatabaseSync(dbPath); // 写库
  try {
    if (op === 'delete') {
      const r = db.prepare(`DELETE FROM ${level} WHERE id = ?`).run(id);
      return { ok: true, changed: Number(r.changes ?? 0) };
    }
    if (op === 'update') {
      const sets = [];
      const args = [];
      if (status !== undefined) {
        if (!['active', 'stale', 'archived'].includes(status)) return { ok: false, error: '非法 status' };
        sets.push('status = ?'); args.push(status);
      }
      if (importance !== undefined) {
        const n = Number(importance);
        if (!Number.isFinite(n) || n < 0) return { ok: false, error: '非法 importance' };
        sets.push('importance = ?'); args.push(n);
      }
      if (!sets.length) return { ok: false, error: '没有要改的字段' };
      args.push(id);
      const r = db.prepare(`UPDATE ${level} SET ${sets.join(', ')} WHERE id = ?`).run(...args);
      return { ok: true, changed: Number(r.changes ?? 0) };
    }
    return { ok: false, error: '未知操作' };
  } catch (e) {
    return { ok: false, error: e?.message ?? String(e) };
  } finally {
    try { db.close(); } catch { /* ignore */ }
  }
}

// ───────────────────── 同步状态 / 远端操作 ─────────────────────

/** 同步状态快照：state 文件 + 日志尾。 */
export function readSyncState() {
  const home = envHome();
  const out = { state: null, logTail: [], repoUrl: loadSettings()?.sync?.repoUrl ?? '' };
  try { out.state = JSON.parse(readFileSync(join(home, 'maid-sync-state.json'), 'utf8')); } catch { /* 未跑过 */ }
  try {
    const log = readFileSync(join(home, 'maid-sync.log'), 'utf8');
    out.logTail = log.split('\n').filter(Boolean).slice(-15);
  } catch { /* 无日志 */ }
  return out;
}

/** 远端连通测试：git ls-remote。直连失败后借道本机代理重试（本机直连 github 常超时）。 */
export async function testRepoUrl(url) {
  if (typeof url !== 'string' || !/^https?:\/\//.test(url)) return { ok: false, error: '需要 http(s) 地址' };
  // 直连先试一次；失败再借道探测到的代理。此前裸跑 git，本机直连超时
  // （约 21s）压在 15s 的超时上必失败——设置页「测试连接」点一次红一次。
  const env = { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_HTTP_LOW_SPEED_LIMIT: '1', GIT_HTTP_LOW_SPEED_TIME: '8' };
  const run = (proxyArgs) => pExecFile('git', [...proxyArgs, 'ls-remote', '--heads', url], {
    timeout: 45000, windowsHide: true, encoding: 'utf8', env
  });
  try {
    return okHeads(await run([]));
  } catch (first) {
    let lastErr = first;
    for (const proxy of await safeDetectProxies()) {
      try { return okHeads(await run(['-c', `http.proxy=${proxy}`])); }
      catch (e) { lastErr = e; }
    }
    return { ok: false, error: String(lastErr?.stderr || lastErr?.message || lastErr).split('\n')[0].slice(0, 300) };
  }
}

function okHeads(r) {
  const heads = String(r.stdout || '').trim().split('\n').filter(Boolean);
  return { ok: true, heads: heads.length, hint: heads.length ? heads[0].split('\t')[1] : '空仓库' };
}

async function safeDetectProxies() {
  try { return await detectLocalProxies(); } catch { return []; }
}

/** 从 git credential helper 取 GitHub PAT（15s 超时；GCM 弹窗时不会挂死接口）。 */
function ghToken() {
  return new Promise((resolve) => {
    let out = '';
    let done = false;
    const finish = (v) => { if (!done) { done = true; resolve(v); } };
    try {
      const child = spawn('git', ['credential-fill'], { windowsHide: true });
      const t = setTimeout(() => { try { child.kill(); } catch { /* ignore */ } finish(null); }, 15000);
      child.stdout.on('data', (d) => { out += d; });
      child.on('error', () => { clearTimeout(t); finish(null); });
      child.on('close', () => {
        clearTimeout(t);
        const m = out.match(/^password=(.+)$/m);
        finish(m ? m[1].trim() : null);
      });
      child.stdin.write('protocol=https\nhost=github.com\n\n');
      child.stdin.end();
    } catch { finish(null); }
  });
}

/** 新建 GitHub 私有仓库：credential 取 PAT → REST API。成功返回 clone_url。 */
export async function createRepo({ name, isPrivate = true }) {
  const n = String(name || '').trim();
  if (!/^[A-Za-z0-9._-]{1,100}$/.test(n)) return { ok: false, error: '仓库名不合法（字母/数字/.-_/1~100 字符）' };
  const token = await ghToken();
  if (!token) return { ok: false, error: '本机没有 GitHub 凭据（先在 git 里成功登录过一次）' };
  try {
    const r = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json', 'User-Agent': 'dsh-maid-preset' },
      body: JSON.stringify({ name: n, private: isPrivate !== false, description: 'DSH maid memory sync' })
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) return { ok: false, error: `GitHub ${r.status}: ${data.message || '创建失败'}` };
    return { ok: true, url: data.clone_url || `https://github.com/${data.full_name}.git`, html: data.html_url };
  } catch (e) {
    return { ok: false, error: e?.message ?? String(e) };
  }
}

// ───────────────────── v0.7.0：手写记忆 / 统计 / 人设恢复 / 自检 ─────────────────────

async function getDb(dbPath, readOnly) {
  let DatabaseSync;
  ({ DatabaseSync } = await import('node:sqlite'));
  // 注意：node:sqlite 的 options 形参显式传 undefined 会触发 ERR_INVALID_ARG_TYPE，
  // 必须按参数个数分支而不是三元传 undefined。
  return readOnly ? new DatabaseSync(dbPath, { readOnly: true }) : new DatabaseSync(dbPath);
}

/** 手写一条记忆（设置页「新增记忆」）。各 level 表列集合随 meow 版本演进，用 PRAGMA 探测后只写存在的列。 */
export async function createMemory({ ws, level, content, keywords, importance, project, title }) {
  const dbPath = dbPathOf(ws);
  if (!dbPath) return { ok: false, error: '该工作区没有记忆库' };
  if (!LEVELS.has(level)) return { ok: false, error: '非法 level' };
  const c = String(content ?? '').trim();
  if (!c) return { ok: false, error: '内容不能为空' };
  if (c.length > 20000) return { ok: false, error: '内容超长（>20000 字符）' };
  let imp = Number(importance);
  if (!Number.isFinite(imp)) imp = 1;
  imp = Math.min(9, Math.max(0, Math.floor(imp)));
  let kw = [];
  if (Array.isArray(keywords)) kw = keywords.map((s) => String(s).trim()).filter(Boolean);
  else if (typeof keywords === 'string' && keywords.trim()) kw = keywords.split(/[,、;]+/).map((s) => s.trim()).filter(Boolean);
  if (kw.length > 13) return { ok: false, error: '关键词太多（≤13）' };

  const now = Date.now();
  const id = `${now.toString(36)}${Math.random().toString(36).slice(2, 6)}`;
  const db = await getDb(dbPath, false);
  try {
    const cols = new Set(db.prepare(`PRAGMA table_info(${level})`).all().map((r) => r.name));
    const row = {
      id, content: c, importance: imp, keywords: JSON.stringify(kw),
      status: 'active', created_at: now, updated_at: now
    };
    if (cols.has('title') && typeof title === 'string' && title.trim()) row.title = title.trim().slice(0, 200);
    if (cols.has('project') && typeof project === 'string' && project.trim()) row.project = project.trim().slice(0, 200);
    const names = Object.keys(row).filter((n) => cols.has(n));
    db.prepare(`INSERT INTO ${level} (${names.join(', ')}) VALUES (${names.map(() => '?').join(', ')})`)
      .run(...names.map((n) => row[n]));
    return { ok: true, id, level };
  } catch (e) {
    return { ok: false, error: e?.message ?? String(e) };
  } finally {
    try { db.close(); } catch { /* ignore */ }
  }
}

/** 记忆统计：各 level/状态计数 + 总数 + 达门槛可上船数（设置页统计条）。 */
export async function memoryStats({ ws }) {
  const dbPath = dbPathOf(ws);
  if (!dbPath) return { ok: false, error: '该工作区没有记忆库' };
  const db = await getDb(dbPath, true);
  try {
    const byLevel = {};
    const byStatus = { active: 0, stale: 0, archived: 0 };
    let total = 0;
    for (const lv of LEVELS) {
      let rows;
      try { rows = db.prepare(`SELECT status, COUNT(*) AS n FROM ${lv} GROUP BY status`).all(); } catch { continue; } // 表缺失=该 level 未启用
      let lvTotal = 0;
      for (const r of rows) {
        const st = r.status || 'active';
        byStatus[st] = (byStatus[st] ?? 0) + Number(r.n);
        lvTotal += Number(r.n);
      }
      byLevel[lv] = lvTotal;
      total += lvTotal;
    }
    // 可上船 = 达当前门槛（与 lib/export.js 同一 WHERE）
    let exportable = 0;
    const where = exportWhere();
    for (const lv of LEVELS) {
      try { exportable += Number(db.prepare(`SELECT COUNT(*) AS n FROM ${lv} WHERE ${where}`).get()?.n ?? 0); } catch { /* 表缺失跳过 */ }
    }
    return { ok: true, total, byLevel, byStatus, exportable, threshold: minImportance() };
  } catch (e) {
    return { ok: false, error: e?.message ?? String(e) };
  } finally {
    try { db.close(); } catch { /* ignore */ }
  }
}

/** 从任意 yml 文本里抽 personaPrefix 区段正文（恢复功能复用）。 */
function extractPersona(text) {
  const lines = String(text).split(/\r?\n/);
  const start = lines.findIndex((l) => PERSONA_ANCHOR.test(l));
  if (start < 0) return null;
  const out = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (/^- /.test(lines[i])) break;
    out.push(lines[i]);
  }
  while (out.length && out[out.length - 1].trim() === '') out.pop();
  return out.map((l) => (l.startsWith('      ') ? l.slice(6) : l)).join('\n');
}

/**
 * 人设恢复：source='backup' 用 $DSH_HOME/cordis.patch.yml.bak（上次保存前的快照）；
 * source='default' 用随包 defaults/cordis.patch.yml（出厂快照，随包分发）。
 * 走 writePersona 落盘——缩进防注入、保存前再备份，全套保护不绕过。
 */
export function restorePersona(source) {
  const file = source === 'default'
    ? join(PKG_ROOT, 'defaults', 'cordis.patch.yml')
    : join(envHome(), 'cordis.patch.yml.bak');
  if (!existsSync(file)) {
    return { ok: false, error: source === 'default' ? '出厂快照缺失（defaults/cordis.patch.yml）' : '还没有备份（先在设置页保存过一次人设才会有）' };
  }
  let text;
  try { text = readFileSync(file, 'utf8'); } catch (e) { return { ok: false, error: e?.message ?? String(e) }; }
  const persona = extractPersona(text);
  if (persona === null) return { ok: false, error: '源文件里没有 personaPrefix 区段' };
  return writePersona(persona);
}

/**
 * 一键自检（服务端部分）：逐项探测插件健康。前端会把客户端事实
 * （meow 物化/设置注册/CSS）合并进同一张表。任何一项失败不影响其余项。
 */
export async function selfCheck(syncIdentity) {
  const items = [];
  const add = (name, ok, detail = '') => items.push({ name, ok: !!ok, detail: String(detail) });

  // 插件文件
  add('补丁文件（cordis.patch.yml）', existsSync(PATCH_FILE), PATCH_FILE);
  const persona = (() => { try { return readPersona(); } catch (e) { return { ok: false, error: e?.message }; } })();
  add('人设区段可读', persona.ok, persona.ok ? `${persona.text.length} 字` : persona.error);
  const seed = join(PKG_ROOT, 'memory', 'memory.db');
  add('随包记忆种子', existsSync(seed), existsSync(seed) ? `${(statSync(seed).size / 1024).toFixed(0)} KB` : '缺失（新工作区将无法播种）');

  // 设置
  let st = null;
  try { st = JSON.parse(readFileSync(SETTINGS_FILE, 'utf8')); } catch { /* 未创建=全默认 */ }
  add('设置文件可解析', true, st ? `${SETTINGS_FILE}（sync.enabled=${st?.sync?.enabled !== false}，门槛≥${minImportance()}）` : '未创建（走默认值）');

  // 工作区与活库
  const wss = workspaceList();
  const withDb = wss.filter((w) => w.hasDb);
  add('工作区活库', withDb.length > 0, withDb.length
    ? `${withDb.length} 个带库；最新 ${withDb[0].ws}（${new Date(withDb[0].mtime).toLocaleString('zh-CN', { hour12: false })}）`
    : '没有任何工作区带 memory.db');

  // 最新活库健康
  if (withDb[0]) {
    try {
      const db = await getDb(withDb[0].ws ? join(withDb[0].ws, PROJECT_DIR, 'memory.db') : '', true);
      try {
        const chk = db.prepare('PRAGMA quick_check').get();
        add('记忆库完整性', chk?.quick_check === 'ok', chk?.quick_check === 'ok' ? 'quick_check ok' : String(chk?.quick_check));
      } finally { db.close(); }
    } catch (e) {
      add('记忆库完整性', false, e?.message ?? String(e));
    }
  }

  // 同步
  const sync = readSyncState();
  add('同步目标 repoUrl', !!sync.repoUrl, sync.repoUrl || '未配置（待机，不上传）');
  const sst = sync.state;
  add('同步状态', !sst?.fatalReason, sst?.fatalReason
    ? `暂停：${sst.fatalDetail || sst.fatalReason}`
    : sst?.lastSyncedAt ? `上次推送 ${new Date(sst.lastSyncedAt).toLocaleString('zh-CN', { hour12: false })}${sst.failCount ? `（失败 ${sst.failCount} 次退避中）` : ''}` : '尚未推送过');
  if (sync.logTail?.length) add('同步日志尾', true, sync.logTail[sync.logTail.length - 1].slice(0, 160));

  // git 环境
  try {
    const r = await pExecFile('git', ['--version'], { timeout: 8000, windowsHide: true, encoding: 'utf8' });
    add('git 可用', true, String(r.stdout || '').trim());
  } catch (e) {
    add('git 可用', false, String(e?.message ?? e).slice(0, 160));
  }
  try {
    const [n, e2, h] = await Promise.all([
      pExecFile('git', ['config', 'user.name'], { timeout: 8000, windowsHide: true, encoding: 'utf8' }).then((r) => String(r.stdout || '').trim(), () => ''),
      pExecFile('git', ['config', 'user.email'], { timeout: 8000, windowsHide: true, encoding: 'utf8' }).then((r) => String(r.stdout || '').trim(), () => ''),
      pExecFile('git', ['config', '--get', 'credential.helper'], { timeout: 8000, windowsHide: true, encoding: 'utf8' }).then((r) => String(r.stdout || '').trim(), () => '')
    ]);
    // 身份两来源：本机 git config（自检运行时 cwd 视角，常为空）或 cordis.patch.yml 的 sync.identity
    //（同步 commit 时 resolveIdentityArgs 优先用它）。两者有其一即可正常提交，别报假红。
    const cfgIdentity = syncIdentity?.name
      ? `${syncIdentity.name} <${syncIdentity.email || `${syncIdentity.name}@users.noreply.github.com`}>`
      : '';
    add('git 身份', !!(n && e2) || !!cfgIdentity,
      n && e2 ? `${n} <${e2}>`
        : cfgIdentity ? `本机未配，走 sync.identity：${cfgIdentity}`
          : '未配置（commit 会失败；可配 sync.identity）');
    add('凭据助手', !!h, h || '未配置（私库 clone/push 会失败）');
  } catch { /* 上面单项已报 */ }

  // 本机代理端口（同步自动探测的目标）
  try {
    const net = await import('node:net');
    const ports = [7890, 7897, 10809, 10808, 8888];
    const alive = await Promise.all(ports.map((port) => new Promise((res) => {
      let done = false;
      const finish = (v) => { if (!done) { done = true; try { s.destroy(); } catch { /* ignore */ } res(v); } };
      const s = net.createConnection({ port, host: '127.0.0.1', timeout: 300 });
      s.on('connect', () => finish(true));
      s.on('error', () => finish(false));
      s.on('timeout', () => finish(false));
    })));
    const hit = ports.filter((_, i) => alive[i]);
    add('本机代理端口', true, hit.length ? `在听：${hit.join(', ')}（直连失败时自动借道）` : '常见端口无监听（纯直连）');
  } catch (e) {
    add('本机代理端口', false, e?.message ?? String(e));
  }

  return { ok: true, items };
}
