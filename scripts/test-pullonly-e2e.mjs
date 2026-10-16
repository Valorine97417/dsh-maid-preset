// pullOnly 端到端：造一个真远端仓（bare + 真快照），让 syncOnce 在 pullOnly 下跑
// 验三件：① 活库并进远端记忆 ② 远端仓库 commit 数不变（没推） ③ 回报 ok:true
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { syncOnce } from '../lib/sync.js';
import { makeDb, readLevel } from './test-helpers.mjs';

const git = (args, cwd) => execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

const dir = mkdtempSync(join(tmpdir(), 'maid-e2e-'));
const bare = join(dir, 'remote.git');
const seed = join(dir, 'seed');
const homeDir = join(dir, 'home');
const wsDir = join(dir, 'ws');

// 1) bare 远端 + 一条远端已有快照（含 R1）
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

// 2) 活库（含 L1 本机独有）
makeDb(join(wsDir, '.dsh-meow', 'memory.db'), [{ level: 'fact', id: 'L1', title: '本机条目', updated_at: 400 }]);

// 3) 模拟 window-index（pickSourceDb 从这里找活库）
mkdirSync(join(homeDir, '.dsh-meow'), { recursive: true });
writeFileSync(join(homeDir, '.dsh-meow', 'window-index.json'), JSON.stringify({ 'ws-1': wsDir }));

const before = git(['-C', bare, 'rev-list', '--count', 'main'], dir).trim();

// 5) 跑 pullOnly —— 注意：pickSourceDb() 读的是 USERPROFILE/HOME 下的 .dsh-meow/window-index.json，
//    不是 DSH_HOME（2026-10-17 自测踩过：设错环境变量会拿到真实活库，测的是别人的库）。
process.env.USERPROFILE = homeDir;
process.env.HOME = homeDir;
const state = {};
const r = await syncOnce(
  {
    repoUrl: bare, branch: 'main', pullOnly: true,
    workcopy: join(dir, 'workcopy'), logFile: join(dir, 'sync.log'),
    gitPath: 'git', proxies: [], identity: { name: 'test', email: 't@t' },
  },
  state
);
const after = git(['-C', bare, 'rev-list', '--count', 'main'], dir).trim();

const rows = readLevel(join(wsDir, '.dsh-meow', 'memory.db'), 'fact');

const checks = [
  ['回报 ok:true 且 reason=pulled', r.ok === true && r.reason === 'pulled'],
  ['远端 R1 已并进活库', rows.some((x) => x.id === 'R1')],
  ['本机 L1 仍在（只增不删）', rows.some((x) => x.id === 'L1')],
  ['远端仓库 commit 数未变（没推）', before === after],
  ['回报 added=1', r.added === 1],
];
let pass = 0;
for (const [n, ok] of checks) { console.log(ok ? '  PASS' : '  FAIL', n); if (ok) pass++; }
console.log(`\n回报: ${JSON.stringify(r)}`);
console.log(`远端 commit: before=${before} after=${after}`);
console.log(`活库: ${JSON.stringify(rows)}`);
console.log(`\n${pass}/${checks.length} 通过`);
rmSync(dir, { recursive: true, force: true });
process.exit(pass === checks.length ? 0 : 1);
