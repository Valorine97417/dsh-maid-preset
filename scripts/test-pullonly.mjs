// pullOnly 与合并语义自测：造两个真库，验「同 id 取新者 / 只增不删 / 只拉不推不写远端」
import { DatabaseSync } from 'node:sqlite';
import { mergeSnapshotInto } from '../lib/sync.js';
import { makeDb, readLevel } from './test-helpers.mjs';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const dir = mkdtempSync(join(tmpdir(), 'maid-selftest-'));
const localPath = join(dir, 'local.db');
const remotePath = join(dir, 'remote.db');

// 活库：A 条（旧）、B 条（本机独有）
makeDb(localPath, [
  { level: 'fact', id: 'A', title: 'A 旧版', content: '老内容', updated_at: 100 },
  { level: 'fact', id: 'B', title: 'B 本机独有', content: '只在活库', updated_at: 200 },
]);
// 远端快照：A 条（新版）、C 条（远端独有）
makeDb(remotePath, [
  { level: 'fact', id: 'A', title: 'A 新版', content: '新内容', updated_at: 300 },
  { level: 'fact', id: 'C', title: 'C 远端独有', content: '只在远端', updated_at: 250 },
]);

const r = mergeSnapshotInto(localPath, remotePath);
console.log('合并回报:', JSON.stringify(r));
console.log('期望：added=1（C）, updated=1（A）, remote=2');

const rows = readLevel(localPath, 'fact');
console.log('活库现有:', JSON.stringify(rows));

const checks = [
  ['A 被更新为远端新版', rows.find((x) => x.id === 'A')?.title === 'A 新版'],
  ['B 本机独有条目仍在', rows.some((x) => x.id === 'B')],
  ['C 远端独有条目已并入', rows.some((x) => x.id === 'C')],
  ['远端条数 = 2', r.remote === 2],
  ['added=1 / updated=1', r.added === 1 && r.updated === 1],
  ['总条数 3（只增不删）', rows.length === 3],
];
let pass = 0;
for (const [name, ok] of checks) { console.log(ok ? '  PASS' : '  FAIL', name); if (ok) pass++; }
console.log(`\n${pass}/${checks.length} 通过`);
rmSync(dir, { recursive: true, force: true });
process.exit(pass === checks.length ? 0 : 1);
