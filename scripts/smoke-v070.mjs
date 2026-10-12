// v0.7.0 冒烟自测：selfCheck / memoryStats / listMemories 排序 / create+delete 闭环
// 用法：node scripts/smoke-v070.mjs [工作区绝对路径]
import { selfCheck, memoryStats, listMemories, createMemory, mutateMemory } from '../lib/settings.js';

const WS = process.argv[2] || 'D:\\DeepSeek Harness\\Works';

console.log('=== selfCheck ===');
const sc = await selfCheck();
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
