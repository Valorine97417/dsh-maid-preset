// 三档方向端到端：造真 bare 仓，逐档验证行为差异
// 关键断言：push 档必须「不吃远端条目」（跳过合流）；pull 档必须「不推」（远端 commit 不变）
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { syncOnce, resolveDirection } from '../lib/sync.js';
import { makeDb, readLevel } from './test-helpers.mjs';

const git = (args, cwd) => execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const dir = mkdtempSync(join(tmpdir(), 'maid-dir-'));

function setupRepo(tag) {
  const bare = join(dir, `remote-${tag}.git`);
  const seed = join(dir, `seed-${tag}`);
  git(['init', '--bare', '-q', bare], dir);
  git(['init', '-q', seed], dir);
  git(['-C', seed, 'config', 'user.name', 'test'], dir);
  git(['-C', seed, 'config', 'user.email', 't@t'], dir);
  makeDb(join(seed, 'memory', 'memory.db'), [{ level: 'fact', id: 'R1', title: '远端条目', updated_at: 500 }]);
  writeFileSync(join(seed, 'memory', 'MEMORIES.md'), 'stub');
  git(['-C', seed, 'add', '-A'], dir);
  git(['-C', seed, 'commit', '-qm', 'seed'], dir);
  git(['-C', seed, 'remote', 'add', 'origin', bare], dir);
  git(['-C', seed, 'push', '-q', 'origin', 'HEAD:main'], dir);
  return { bare, seed };
}

function setupHome(tag) {
  const home = join(dir, `home-${tag}`);
  const ws = join(dir, `ws-${tag}`);
  mkdirSync(join(home, '.dsh-meow'), { recursive: true });
  writeFileSync(join(home, '.dsh-meow', 'window-index.json'), JSON.stringify({ 'ws-1': ws }));
  makeDb(join(ws, '.dsh-meow', 'memory.db'), [{ level: 'fact', id: 'L1', title: '本机条目', updated_at: 400 }]);
  return { home, ws };
}

const results = [];
async function runCase(tag, direction) {
  const { bare } = setupRepo(tag);
  const { home, ws } = setupHome(tag);
  const before = git(['-C', bare, 'rev-list', '--count', 'main'], dir).trim();
  const prevHome = process.env.USERPROFILE, prevHome2 = process.env.HOME;
  process.env.USERPROFILE = home; process.env.HOME = home;
  const r = await syncOnce({
    repoUrl: bare, branch: 'main', direction,
    workcopy: join(dir, `wc-${tag}`), logFile: join(dir, `log-${tag}`),
    gitPath: 'git', proxies: [], identity: { name: 't', email: 't@t' },
  }, {});
  process.env.USERPROFILE = prevHome; process.env.HOME = prevHome2;
  const after = git(['-C', bare, 'rev-list', '--count', 'main'], dir).trim();
  const rows = readLevel(join(ws, '.dsh-meow', 'memory.db'), 'fact');
  results.push({ direction, ok: r.ok, reason: r.reason, added: r.added, remoteRows: rows.map((x) => x.id), pushed: before !== after });
}

await runCase('both', 'both');
await runCase('pull', 'pull');
await runCase('push', 'push');

console.log('=== 三档实测 ===');
for (const x of results) console.log(JSON.stringify(x));
console.log('\n=== 断言 ===');
const checks = [
  ['解析器：both/pull/push/旧pullOnly/非法 五例正确',
    resolveDirection({}) === 'both' && resolveDirection({ direction: 'pull' }) === 'pull'
    && resolveDirection({ direction: 'push' }) === 'push' && resolveDirection({ pullOnly: true }) === 'pull'
    && resolveDirection({ direction: 'xxx' }) === 'both'],
  ['both 档：吃进远端条目且推了（远端 commit +1）',
    results[0].remoteRows.includes('R1') && results[0].pushed === true],
  ['pull 档：吃进远端条目但没推（远端 commit 不变）',
    results[1].remoteRows.includes('R1') && results[1].pushed === false && results[1].reason === 'pulled'],
  ['push 档：没吃远端条目（只有本机 L1）且推了',
    !results[2].remoteRows.includes('R1') && results[2].remoteRows.includes('L1') && results[2].pushed === true],
  ['三档都保留了本机 L1（只增不删）',
    results.every((x) => x.remoteRows.includes('L1'))],
];
let pass = 0;
for (const [n, ok] of checks) { console.log(ok ? '  PASS' : '  FAIL', n); if (ok) pass++; }
console.log(`\n${pass}/${checks.length} 通过`);
rmSync(dir, { recursive: true, force: true });
process.exit(pass === checks.length ? 0 : 1);
