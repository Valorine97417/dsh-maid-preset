// 隔离三种 HOME；模拟 git 读取远端快照，不提交、不联网、不接触真实活库。
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, utimesSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
import { promisify } from 'node:util';
import { EventEmitter } from 'node:events';
import { DatabaseSync } from 'node:sqlite';
import { makeDb, readLevel } from './test-helpers.mjs';

const root = mkdtempSync(join(tmpdir(), 'maid-source-db-'));
const previous = Object.fromEntries(['HOME', 'USERPROFILE', 'DSH_HOME'].map(k => [k, process.env[k]]));
for (const key of Object.keys(previous)) process.env[key] = root;
const selected = join(root, 'selected.db');
const ws = join(root, 'other');
const other = join(ws, '.dsh-meow', 'memory.db');
makeDb(selected, [{ level: 'fact', id: 'selected', updated_at: 100 }]);
makeDb(other, [{ level: 'fact', id: 'other', updated_at: 100 }]);
mkdirSync(join(root, '.dsh-meow'), { recursive: true });
writeFileSync(join(root, '.dsh-meow', 'window-index.json'), JSON.stringify({ other: ws }));
utimesSync(selected, new Date(1000), new Date(1000));
utimesSync(other, new Date(), new Date());
const snap = join(root, 'remote.db');
makeDb(snap, [{ level: 'fact', id: 'remote', updated_at: 200 }]);
const originalExec = childProcess.execFile;
let gitCalls = 0;
childProcess.execFile = (_file, args, _opts, cb) => {
  gitCalls++;
  assert.ok(['fetch', 'show'].includes(args[0]), '禁止提交或推送');
  cb(null, args[0] === 'show' ? readFileSync(snap) : '', '');
};
childProcess.execFile[promisify.custom] = async (file, args, opts) => new Promise((resolve, reject) => {
  childProcess.execFile(file, args, opts, (err, stdout, stderr) => err ? reject(err) : resolve({ stdout, stderr }));
});
syncBuiltinESMExports();
try {
  // 必须在隔离环境和 git mock 就绪后加载（settings 在模块初始化时读取 DSH_HOME）。
  const { pickSourceDb, syncOnce, startSync, requestSyncNow } = await import('../lib/sync.js');
  const { saveSettings, loadSettings } = await import('../lib/settings.js');
  assert.equal(pickSourceDb({ sourceDb: selected }), selected);
  assert.equal(pickSourceDb(), other);
  assert.equal(pickSourceDb({ sourceDb: '' }), other);
  assert.equal(pickSourceDb({ sourceDb: null }), other);
  const missing = join(root, 'missing.db');
  const corrupt = join(root, 'corrupt.db');
  writeFileSync(corrupt, 'not sqlite');
  const nonMemory = join(root, 'non-memory.db');
  const emptyDb = new DatabaseSync(nonMemory);
  emptyDb.exec('CREATE TABLE unrelated (id TEXT)');
  emptyDb.close();
  for (const sourceDb of [missing, corrupt, nonMemory, root, 'relative.db', 42, '   ']) {
    const before = gitCalls;
    assert.throws(() => pickSourceDb({ sourceDb }), /sync.sourceDb 无效.*禁止回落/s);
    const r = await syncOnce({ sourceDb, repoUrl: 'test-only' }, {});
    assert.equal(r.ok, false);
    assert.match(r.reason, /sync.sourceDb 无效/);
    assert.equal(gitCalls, before);
  }
  const wc = join(root, 'wc');
  mkdirSync(join(wc, '.git'), { recursive: true });
  saveSettings({ unrelated: 'preserved', sync: { sourceDb: selected, repoUrl: 'test-only', direction: 'pull' } });
  // 验证真实设置路由白名单接受字段并保留同级/其他设置。
  const routes = [];
  const { apply } = await import('../lib/index.js');
  apply({ on() {}, effect(fn) { fn(); }, get() { return { register(def) { routes.push(def); } }; } },
    { seed: { enabled: false }, sync: { enabled: false, pollSeconds: 3600 } });
  const req = new EventEmitter();
  req.method = 'POST';
  let response;
  const handled = routes.find(r => r.path === '/dsh-maid-preset/settings').handler(req, {
    writeHead(status) { assert.equal(status, 200); }, end(body) { response = JSON.parse(body); }
  });
  req.emit('data', JSON.stringify({ sync: { sourceDb: selected } }));
  req.emit('end');
  await handled;
  assert.equal(response.settings.sync.sourceDb, selected);
  assert.equal(response.settings.sync.direction, 'pull');
  assert.equal(response.settings.unrelated, 'preserved');
  // 状态 GET 必须执行真实只读选择；不写状态/数据库、不调用 git、不回显其他配置。
  const stateRoute = routes.find(r => r.path === '/dsh-maid-preset/sync/state');
  const stateFile = join(root, 'maid-sync-state.json');
  const { existsSync } = await import('node:fs');
  const snapshot = () => [selected, other, stateFile].map(p => existsSync(p) ? readFileSync(p).toString('base64') : null);
  const beforeStatus = snapshot();
  const beforeGit = gitCalls;
  function status() {
    let result;
    stateRoute.handler({ method: 'GET' }, { writeHead(code) { assert.equal(code, 200); }, end(body) { result = JSON.parse(body); } });
    return result.sourceSelection;
  }
  const evidence = status();
  assert.equal(evidence.selectedDb, selected);
  assert.equal(evidence.ok, true);
  assert.equal(evidence.mode, 'explicit');
  assert.equal(evidence.evidence, 'read-only-selection');
  assert.ok(Number.isFinite(Date.parse(evidence.checkedAt)));
  assert.deepEqual(Object.keys(evidence).sort(), ['checkedAt', 'error', 'evidence', 'mode', 'ok', 'selectedDb'].sort());
  assert.deepEqual(snapshot(), beforeStatus);
  assert.equal(gitCalls, beforeGit);
  saveSettings({ ...loadSettings(), sync: { ...loadSettings().sync, sourceDb: missing } });
  assert.equal(status().selectedDb, null);
  assert.match(status().error, /sync.sourceDb 无效/);
  assert.equal(gitCalls, beforeGit);
  saveSettings({ ...loadSettings(), sync: { ...loadSettings().sync, sourceDb: selected } });
  const timer = startSync({ sourceDb: missing, pollSeconds: 3600, workcopy: wc });
  try {
    const r = await requestSyncNow();
    assert.equal(r.ok, true, JSON.stringify(r));
    assert.ok(readLevel(selected, 'fact').some(r => r.id === 'remote'));
    assert.deepEqual(readLevel(other, 'fact').map(r => r.id), ['other']);
    // 热改失效路径：实际 tick 必须失败，且不能碰其他工作区或 git。
    const before = gitCalls;
    saveSettings({ ...loadSettings(), sync: { ...loadSettings().sync, sourceDb: missing } });
    const failed = await requestSyncNow();
    assert.equal(failed.ok, false);
    assert.match(failed.reason, /sync.sourceDb 无效/);
    assert.equal(gitCalls, before);
    assert.equal(loadSettings().unrelated, 'preserved');
  } finally { clearInterval(timer); }
  console.log('PASS: explicit priority; 7 invalid paths fail before git; unset/empty/null compatibility; settings POST preservation; actual startSync/requestSyncNow settings precedence + hot reload; other DB unchanged.');
  console.log(`Isolated fixtures retained: ${root}`);
} finally {
  childProcess.execFile = originalExec;
  syncBuiltinESMExports();
  for (const [key, value] of Object.entries(previous)) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
}
