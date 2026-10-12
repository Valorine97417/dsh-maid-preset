// 从工作区记忆库导出可随包分发的种子：memory.db 快照 + JSON/MD 可读导出。
// 用法：node scripts/export-memory.mjs [源库路径]
import { DatabaseSync } from 'node:sqlite';
import { existsSync, mkdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');
const srcDb = resolve(process.argv[2] ?? join(repoRoot, '..', '.dsh-meow', 'memory.db'));
const outDir = join(repoRoot, 'memory');

if (!existsSync(srcDb)) {
  console.error(`源库不存在: ${srcDb}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

// 1) 干净单文件快照（VACUUM INTO 合并 WAL，不碰原库）
const outDb = join(outDir, 'memory.db');
try { if (existsSync(outDb)) rmSync(outDb); } catch {}
const src = new DatabaseSync(srcDb, { readOnly: true });
src.exec(`VACUUM INTO '${outDb.replace(/'/g, "''")}'`);
src.close();
console.log(`memory.db  ${statSync(outDb).size} bytes`);

// 2) 可读导出
const db = new DatabaseSync(srcDb, { readOnly: true });
const LEVELS = ['soul', 'user', 'project', 'fact', 'lesson', 'topic', 'rules'];
const rows = [];
for (const level of LEVELS) {
  let st;
  try { st = db.prepare(`select * from "${level}" order by updated_at desc, id`); } catch { continue; }
  for (const r of st.all()) rows.push({ level, ...r });
}
const dump = {
  exportedAt: new Date().toISOString(),
  source: srcDb,
  count: rows.length,
  rows
};
writeFileSync(join(outDir, 'memories.json'), JSON.stringify(dump, null, 2), 'utf8');
console.log(`memories.json  ${rows.length} 条`);

// 3) Markdown 便于人读与 git diff
const LABEL = { soul: 'AI 自身', user: '用户', project: '项目', fact: '事实', lesson: '经验', topic: '话题', rules: '准则' };
const md = [
  '# 小困的记忆（导出）',
  '',
  `导出时间：${dump.exportedAt}　共 ${rows.length} 条`,
  '',
  '> 由 \`scripts/export-memory.mjs\` 从工作区 \`.dsh-meow/memory.db\` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。',
  ''
];
let cur = null;
for (const r of rows) {
  if (r.level !== cur) {
    cur = r.level;
    md.push('', `## ${LABEL[cur] ?? cur}（${cur}）`, '');
  }
  const title = r.title ? ` — ${r.title}` : '';
  const meta = [
    r.importance !== undefined && r.importance !== null ? `重要性 ${r.importance}` : null,
    r.status ? `状态 ${r.status}` : null,
    r.project ? `项目 ${r.project}` : null,
    r.subcategory ? r.subcategory : null
  ].filter(Boolean).join('，');
  md.push(`### ${r.id}${title}`, meta ? `_${meta}_` : '', '', String(r.content ?? '').trim(), '');
  if (Array.isArray(r.keywords) && r.keywords.length) md.push(`关键词：${r.keywords.join('、')}`, '');
}
writeFileSync(join(outDir, 'MEMORIES.md'), md.join('\n'), 'utf8');
console.log(`MEMORIES.md  ${statSync(join(outDir, 'MEMORIES.md')).size} bytes`);
db.close();
