// dsh-maid-preset 设置面板后端支撑。
// 分工：
//   - 设置文件 $DSH_HOME/maid-settings.json：设置页写、sync 引擎每 tick 热读（repoUrl/idleMinutes 即时生效）。
//   - 人设：存在 cordis.patch.yml 的 personaPrefix 锚点区段（平台装配层），改完重启 DSH 生效。
//     写入时每行强制加 6 空格缩进——内容永远不可能顶格成 `- id:` 造出新插件条目，天然防注入。
//   - 记忆清单：node:sqlite 直查工作区活库（与 meow-memory 同引擎，Node 内置零依赖）。
import { existsSync, readFileSync, writeFileSync, renameSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { promisify } from 'node:util';
import { execFile } from 'node:child_process';

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

/** 工作区活库路径；不存在返回 null。ws 必须是绝对路径形态。 */
function dbPathOf(ws) {
  if (typeof ws !== 'string' || !/^[A-Za-z]:[\\/]/.test(ws)) return null;
  const p = join(ws, '.dsh-meow', 'memory.db');
  return existsSync(p) ? p : null;
}

/** 列表：level/status/q 过滤 + 分页。返回 {ok, total, rows}。 */
export async function listMemories({ ws, level = '', status = '', q = '', page = 1, pageSize = 20 }) {
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
    all.sort((a, b) => (String(b.updated_at || b.created_at || '')).localeCompare(String(a.updated_at || a.created_at || '')));
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

/** 远端连通测试：git ls-remote（15s 超时）。 */
export async function testRepoUrl(url) {
  if (typeof url !== 'string' || !/^https?:\/\//.test(url)) return { ok: false, error: '需要 http(s) 地址' };
  try {
    const r = await pExecFile('git', ['ls-remote', '--heads', url], {
      timeout: 15000, windowsHide: true, encoding: 'utf8',
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0' }
    });
    const heads = String(r.stdout || '').trim().split('\n').filter(Boolean);
    return { ok: true, heads: heads.length, hint: heads.length ? heads[0].split('\t')[1] : '空仓库' };
  } catch (e) {
    return { ok: false, error: String(e?.stderr || e?.message || e).split('\n')[0].slice(0, 300) };
  }
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
