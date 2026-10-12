// 从工作区记忆库导出可随包分发的种子：memory.db 快照 + JSON/MD 可读导出。
// 实现在 lib/export.js（与 lib/sync.js 自动同步共用），这里只做参数解析与结果回显。
// 用法：node scripts/export-memory.mjs [源库路径]
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exportMemory } from '../lib/export.js';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');
const srcDb = resolve(process.argv[2] ?? join(repoRoot, '..', '.dsh-meow', 'memory.db'));
const outDir = join(repoRoot, 'memory');

if (!existsSync(srcDb)) {
  console.error(`源库不存在: ${srcDb}`);
  process.exit(1);
}

const r = exportMemory(srcDb, outDir);
console.log(`memory.db 快照 ${r.bytes} bytes`);
console.log(`memories.json / MEMORIES.md  ${r.count} 条`);
