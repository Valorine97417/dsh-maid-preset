// v0.7.0 冒烟自测：selfCheck / memoryStats / listMemories 排序 / create+delete 闭环
// 用法：node scripts/smoke-v070.mjs [工作区绝对路径]
//
// 注意（2026-10-15 修）：selfCheck 的「git 身份」一项要看 cordis 传入的 sync.identity——
// 真实运行时是 `selfCheck(config?.sync?.identity)`（见 lib/index.js）。本脚本此前空参调用，
// 在「本机 git 全局配置为空、身份由配置提供」的机器上会**误报 ❌**（实际同步完全正常）。
// 现在把身份从设置文件读出来一起传，两个来源（本机 git config / 配置身份）有一个就算过。
import { selfCheck, memoryStats, listMemories, createMemory, mutateMemory, loadSettings } from '../lib/settings.js';

const WS = process.argv[2] || 'D:\\DeepSeek Harness\\Works';

// 身份来源与运行时一致：优先设置文件（本机覆盖层），其次缺省交给本机 git config。
const syncIdentity = loadSettings()?.sync?.identity ?? null;

console.log('=== selfCheck ===');
const sc = await selfCheck(syncIdentity);
for (const it of sc.items) console.log(`${it.ok ? '✅' : '❌'} ${it.name}: ${it.detail}`);

console.log('\n=== memoryStats ===');
const st = await memoryStats({ ws: WS });
console.log(JSON.stringify(st));

console.log('\n=== listMemories sort=importance (top3) ===');
const lm = await listMemories({ ws: WS, pageSize: 3, sort: 'importance' });
for (const r of lm.rows) console.log(`imp=${r.importance} ${r.level} ${String(r.content).slice(0, 40)}`);

console.log('\n=== createMemory + delete 闭环 ===');
const c = await createMemory({ ws: WS, level: 'fact', content: '冒烟测试记忆（即写即删）', keywords: '测试,冒烟', importance: 2 });
console.log('create:', JSON.stringify(c));
if (c.ok) {
  const d = await mutateMemory({ ws: WS, id: c.id, level: 'fact', op: 'delete' });
  console.log('delete:', JSON.stringify(d));
}
console.log('\nALL DONE');
