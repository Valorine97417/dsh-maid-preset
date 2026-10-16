// 离线自测：推送前「把远端快照并回活库」的合流逻辑（lib/sync.js 的 mergeSnapshotInto / mergeRemoteSnapshot）。
// 用法：node scripts/test-merge.mjs
//
// 为什么要这层：exportMemory 是全量重建——推上去的快照就是本机活库的镜像。
// 多机共用同一个仓库时，后推的机器会把先推那台的记忆整片顶掉（2026-10-15 / 10-16 各翻过一次车）。
// 合流必须满足：只加不减、同 id 取 updated_at 新者、跨版本缺表缺列不炸、远端没有快照时安静返回 null。
// 这些断言一旦破掉，坏的是真记忆，不是测试数据——所以脚本自己造库，绝不碰活库。
import { DatabaseSync } from 'node:sqlite';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mergeSnapshotInto, mergeRemoteSnapshot } from '../lib/sync.js';
import { LEVELS } from '../lib/export.js';

const BASE = ['id', 'title', 'content', 'importance', 'keywords', 'status', 'source_session', 'hit_count', 'created_at', 'updated_at', 'last_accessed_at'];
const COLUMNS = {
  soul: BASE,
  user: BASE,
  project: [...BASE, 'project', 'subcategory'],
  fact: [...BASE, 'project'],
  lesson: [...BASE, 'corrected', 'project'],
  topic: [...BASE, 'goal', 'project'],
  rules: [...BASE, 'project'],
};

let passed = 0;
let failed = 0;
function check(name, cond, detail = '') {
  if (cond) { passed += 1; console.log(`ok ${passed + failed} — ${name}`); }
  else { failed += 1; console.log(`FAIL — ${name}${detail ? ` (${detail})` : ''}`); }
}

function createSchema(db, levels = LEVELS) {
  for (const level of levels) {
    const cols = COLUMNS[level];
    if (!cols) continue;
    db.exec(`create table "${level}" (${cols.map((c) => `"${c}"`).join(', ')})`);
  }
}

function insert(db, level, row) {
  const cols = Object.keys(row);
  db.prepare(`insert into "${level}" (${cols.map((c) => `"${c}"`).join(',')}) values (${cols.map(() => '?').join(',')})`).run(...cols.map((c) => row[c]));
}

function count(db, level) {
  try { return db.prepare(`select count(*) as n from "${level}"`).get().n; } catch { return null; }
}

function rowOf(db, level, id) {
  try { return db.prepare(`select * from "${level}" where id = ?`).get(id); } catch { return undefined; }
}

// Windows 上 node:sqlite 只认 Windows 形式路径，/tmp/... 这种 MSYS 写法打不开。
const root = mkdtempSync(join(tmpdir(), 'maid-merge-'));
const gitId = ['-c', 'user.name=test', '-c', 'user.email=test@example.invalid'];

try {
  // ---------- 1) 只加不减 / 同 id 新的赢 ----------
  const basePath = join(root, 'base.db');
  const snapPath = join(root, 'snap.db');
  {
    const base = new DatabaseSync(basePath);
    createSchema(base);
    insert(base, 'fact', { id: 'L1', content: '本机独有 A', importance: 2, updated_at: '2026-10-15T00:00:00.000Z' });
    insert(base, 'fact', { id: 'BOTH-OLD', content: '本机较新', importance: 2, updated_at: '2026-10-16T10:00:00.000Z' });
    insert(base, 'fact', { id: 'BOTH-NEW', content: '本机较旧', importance: 2, updated_at: '2026-10-14T00:00:00.000Z' });
    base.close();

    const snap = new DatabaseSync(snapPath);
    createSchema(snap);
    insert(snap, 'fact', { id: 'BOTH-OLD', content: '远端较旧', importance: 2, updated_at: '2026-10-14T00:00:00.000Z' });
    insert(snap, 'fact', { id: 'BOTH-NEW', content: '远端较新', importance: 3, updated_at: '2026-10-16T11:00:00.000Z' });
    insert(snap, 'fact', { id: 'R1', content: '远端独有 R1', importance: 2, updated_at: '2026-10-16T00:00:00.000Z' });
    insert(snap, 'lesson', { id: 'R2', content: '远端独有 R2（换表）', importance: 3, corrected: 1, updated_at: '2026-10-16T00:00:00.000Z' });
    snap.close();
  }
  {
    const r = mergeSnapshotInto(basePath, snapPath);
    const db = new DatabaseSync(basePath);
    check('远端独有的一条不少地插进来', r.added === 2 && r.remote === 4, `added=${r.added} remote=${r.remote}`);
    check('只更新 updated_at 更晚的那条', r.updated === 1, `updated=${r.updated}`);
    check('本机更新的条目没被远端旧版本盖掉', rowOf(db, 'fact', 'BOTH-OLD').content === '本机较新');
    check('远端更新的条目胜出', rowOf(db, 'fact', 'BOTH-NEW').content === '远端较新' && rowOf(db, 'fact', 'BOTH-NEW').importance === 3);
    check('本机独有的条目原样保留', rowOf(db, 'fact', 'L1')?.content === '本机独有 A');
    check('跨表也并进来（lesson）', rowOf(db, 'lesson', 'R2')?.content.includes('换表'));
    check('fact 表合计 4 条（3 本机 + 1 远端独有）', count(db, 'fact') === 4, `count=${count(db, 'fact')}`);
    db.close();
  }

  // ---------- 2) 幂等：再并一次不应该有任何变化 ----------
  {
    const before = new DatabaseSync(basePath);
    const n = count(before, 'fact');
    before.close();
    const r = mergeSnapshotInto(basePath, snapPath);
    check('重复合流是幂等的（added=0 且总数不变）', r.added === 0 && r.updated === 0 && count(new DatabaseSync(basePath), 'fact') === n, `added=${r.added} updated=${r.updated}`);
  }

  // ---------- 3) 跨版本：远端缺列 / 活库没这张表 ----------
  {
    const base2 = join(root, 'base2.db');
    const snap2 = join(root, 'snap2.db');
    {
      const db = new DatabaseSync(base2);
      createSchema(db); // 七张表齐全
      db.close();
      const snap = new DatabaseSync(snap2);
      // 远端来自老版本：fact 只有三列，且没有 topic 表
      snap.exec('create table "fact" ("id" TEXT, "content" TEXT, "updated_at" TEXT)');
      insert(snap, 'fact', { id: 'OLDFACT', content: '老版本写的 fact', updated_at: '2026-10-16T00:00:00.000Z' });
      insert(snap, 'fact', { id: null, content: '没有 id 的坏行' });
      snap.close();
    }
    let err = null;
    let r = null;
    try { r = mergeSnapshotInto(base2, snap2); } catch (e) { err = e; }
    check('远端缺列时不抛错', err === null, err && err.message);
    const db = new DatabaseSync(base2);
    check('缺列的那条照样插进来，缺的列补 null', r?.added === 1 && rowOf(db, 'fact', 'OLDFACT')?.content === '老版本写的 fact' && rowOf(db, 'fact', 'OLDFACT')?.project === null);
    check('没有 id 的坏行只跳过自己', count(db, 'fact') === 1, `count=${count(db, 'fact')}`);
    check('活库没有的表不会被凭空建出来', count(db, 'topic') === 0);
    db.close();
  }

  // ---------- 4) 远端还没有快照 → 安静返回 null（首次推送的正常路径） ----------
  {
    const upstream = join(root, 'upstream.git');
    execFileSync('git', ['init', '--bare', '-q', '-b', 'main', upstream]);
    const seed = join(root, 'seed');
    execFileSync('git', ['clone', '-q', upstream, seed]);
    execFileSync('git', [...gitId, 'commit', '-q', '--allow-empty', '-m', 'init'], { cwd: seed });
    execFileSync('git', ['push', '-q', '-u', 'origin', 'main'], { cwd: seed });

    const wc = join(root, 'wc');
    execFileSync('git', ['clone', '-q', upstream, wc]);
    const live = join(root, 'live.db');
    {
      const db = new DatabaseSync(live);
      createSchema(db);
      insert(db, 'fact', { id: 'LOCAL', content: '本机记忆', importance: 2, updated_at: '2026-10-16T00:00:00.000Z' });
      db.close();
    }
    const cfg = { branch: 'main', gitPath: 'git', proxies: [] };
    const m = await mergeRemoteSnapshot(cfg, wc, live);
    check('远端没有 memory/memory.db 时返回 null', m === null, JSON.stringify(m));
    check('返回 null 时本机活库一条不动', rowOf(new DatabaseSync(live), 'fact', 'LOCAL')?.content === '本机记忆');

    // ---------- 5) 远端真有快照：fetch + show + 并回 ----------
    {
      mkdirSync(join(seed, 'memory'), { recursive: true });
      const s = new DatabaseSync(join(seed, 'memory', 'memory.db'));
      createSchema(s);
      insert(s, 'fact', { id: 'REMOTE', content: '另一台机器的记忆', importance: 3, updated_at: '2026-10-16T12:00:00.000Z' });
      insert(s, 'user', { id: 'REMOTE-USER', content: '另一台机器的偏好', importance: 3, updated_at: '2026-10-16T12:00:00.000Z' });
      s.close();
      execFileSync('git', [...gitId, 'add', '-A'], { cwd: seed });
      execFileSync('git', [...gitId, 'commit', '-q', '-m', 'snapshot'], { cwd: seed });
      execFileSync('git', ['push', '-q', 'origin', 'main'], { cwd: seed });
    }
    const m2 = await mergeRemoteSnapshot(cfg, wc, live);
    const db2 = new DatabaseSync(live);
    check('远端有快照时能取到并合流', m2 !== null && m2.added === 2 && m2.remote === 2, JSON.stringify(m2));
    check('远端记忆进了活库', rowOf(db2, 'fact', 'REMOTE')?.content === '另一台机器的记忆');
    check('合流后本机原有的还在（只加不减）', rowOf(db2, 'fact', 'LOCAL')?.content === '本机记忆');
    check('git 状态干净：临时文件没漏进工作副本', execFileSync('git', ['status', '--porcelain'], { cwd: wc, encoding: 'utf8' }).trim() === '');
    db2.close();
  }
} finally {
  // Windows 上 git 刚碰过的目录可能还被句柄占着，删不掉不算失败。
  try { rmSync(root, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 }); } catch { /* 交给系统清理 */ }
}

console.log(`\n${passed} merge checks passed${failed > 0 ? `, ${failed} FAILED` : ''}`);
if (failed > 0) process.exitCode = 1;
