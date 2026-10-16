// 自检身份假红回归：造「工作区无身份 + 专用克隆有身份」的真实布局，验自检不再报红
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { selfCheck } from '../lib/settings.js';

const git = (args, cwd) => execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

const dir = mkdtempSync(join(tmpdir(), 'maid-selfcheck-'));
const home = join(dir, 'home');
const ws = join(dir, 'ws');
const wc = join(home, 'maid-sync');

mkdirSync(home, { recursive: true });
mkdirSync(ws, { recursive: true });

// 专用克隆：有 local 身份（模拟老大本机现状）
mkdirSync(wc, { recursive: true });
git(['init', '-q', wc], dir);
git(['-C', wc, 'config', 'user.name', 'Valorine97417'], dir);
git(['-C', wc, 'config', 'user.email', 'Valorine97417@users.noreply.github.com'], dir);

const prevHome = process.env.USERPROFILE, prevHomeAlt = process.env.HOME;
process.env.USERPROFILE = home; process.env.HOME = home;

// 关键：自检的 cwd 设到一个「没有身份」的目录（模拟 Works）
const prevCwd = process.cwd();
process.chdir(ws);

const result = await selfCheck(undefined, { repoUrl: 'https://example.com/x.git', workcopy: wc });
const identity = (result.items ?? []).find((x) => x.name === 'git 身份');

process.chdir(prevCwd);
process.env.USERPROFILE = prevHome; process.env.HOME = prevHomeAlt;

console.log('身份项:', JSON.stringify(identity));
const checks = [
  ['克隆内已配身份时，自检报绿（不再假红）', identity?.ok === true],
  ['详情里指出是「克隆内」配好的', /克隆内/.test(identity?.detail ?? '')],
  ['详情里带上真实身份', /Valorine97417/.test(identity?.detail ?? '')],
];
let pass = 0;
for (const [n, ok] of checks) { console.log(ok ? '  PASS' : '  FAIL', n); if (ok) pass++; }
console.log(`\n${pass}/${checks.length} 通过`);
rmSync(dir, { recursive: true, force: true });
process.exit(pass === checks.length ? 0 : 1);
