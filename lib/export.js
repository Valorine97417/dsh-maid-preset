// 记忆导出：活库 → memory.db 快照（筛选重建）+ memories.json + MEMORIES.md。
// 被 scripts/export-memory.mjs（手工）与 lib/sync.js（自动同步）共用。
import { DatabaseSync } from 'node:sqlite';
import { existsSync, mkdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { exportWhere } from './settings.js';

export const LEVELS = ['soul', 'user', 'project', 'fact', 'lesson', 'topic', 'rules'];
const LABEL = { soul: 'AI 自身', user: '用户', project: '项目', fact: '事实', lesson: '经验', topic: '话题', rules: '准则' };

// GitHub 精选门槛（老大定：只推比较重要的）：archived 不上船；importance < 门槛
// 的琐碎条目留在本地自用。v0.7.0 起门槛热读 $DSH_HOME/maid-settings.json 的
// sync.minImportance（默认 2，设置页可调 0~9），json/md/快照三路同一 WHERE。

/** keywords 落库是 JSON 字符串；老数据也可能是逗号串。统一成数组。 */
function parseKeywords(v) {
  if (Array.isArray(v)) return v;
  if (typeof v === 'string' && v.trim().length > 0) {
    try {
      const p = JSON.parse(v);
      if (Array.isArray(p)) return p;
    } catch { /* 非 JSON，落到分隔符 */ }
    return v.split(/[,、;]+/).map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

/** 读全部记忆行，keywords 归一成数组。源库缺失时抛错。 */
export function readRows(srcDb) {
  const db = new DatabaseSync(srcDb, { readOnly: true });
  const rows = [];
  try {
    for (const level of LEVELS) {
      let st;
      // 精选过滤见 exportWhere()（archived 与低重要度不上 GitHub，门槛热读可调）
      try { st = db.prepare(`select * from "${level}" where ${exportWhere()} order by updated_at desc, id`); } catch { continue; }
      for (const r of st.all()) {
        const { keywords, ...rest } = r;
        rows.push({ level, ...rest, keywords: parseKeywords(keywords) });
      }
    }
  } finally {
    db.close();
  }
  return rows;
}

function toMarkdown(exportedAt, rows) {
  const md = [
    '# 小困的记忆（导出）',
    '',
    `导出时间：${exportedAt}　共 ${rows.length} 条`,
    '',
    '> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。',
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
      r.subcategory ? r.subcategory : null,
      Number(r.corrected) ? '被纠正' : null
    ].filter(Boolean).join('，');
    md.push(`### ${r.id}${title}`, meta ? `_${meta}_` : '', '', String(r.content ?? '').trim(), '');
    if (r.keywords.length) md.push(`关键词：${r.keywords.join('、')}`, '');
    if (r.goal) md.push(`目标：${r.goal}`, '');
  }
  md.push('');
  return md.join('\n');
}

/**
 * 导出到 outDir（memory/）。返回 {count, bytes}。
 * 任何一步失败都抛出，由调用方决定是否吞掉——静默失败会让「以为在备份」比没备份更糟。
 */
export function exportMemory(srcDb, outDir) {
  if (!existsSync(srcDb)) throw new Error(`源库不存在: ${srcDb}`);
  mkdirSync(outDir, { recursive: true });

  const outDb = join(outDir, 'memory.db');
  try { if (existsSync(outDb)) rmSync(outDb); } catch { /* 目标被占用则让建库自己报错 */ }

  // 快照同样走精选门槛（不照抄 VACUUM INTO 全量，否则 archived/琐碎条目会随
  // 种子在新工作区复活）：ATTACH 源库 → 抄 level 表 schema 与索引 → 按门槛插行。
  // 附属运行表（dream_log/windows/…）不带：meow 启动 CREATE TABLE IF NOT EXISTS 自愈。
  const snap = new DatabaseSync(srcDb, { readOnly: true });
  const out = new DatabaseSync(outDb);
  try {
    out.exec(`ATTACH DATABASE '${srcDb.replace(/'/g, "''")}' AS src`);
    out.exec('BEGIN');
    for (const level of LEVELS) {
      const t = out.prepare(`SELECT sql FROM src.sqlite_master WHERE type='table' AND name=?`).get(level);
      if (t?.sql) out.exec(t.sql);
      if (!out.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`).get(level)) continue;
      out.exec(`INSERT INTO "${level}" SELECT * FROM src."${level}" WHERE ${exportWhere()}`);
      for (const idx of out.prepare(`SELECT sql FROM src.sqlite_master WHERE type='index' AND tbl_name=? AND sql IS NOT NULL`).all(level)) {
        try { out.exec(idx.sql); } catch { /* 索引冲突等不影响数据完整性 */ }
      }
    }
    out.exec('COMMIT');
  } finally {
    try { out.close(); } catch { /* ignore */ }
    try { snap.close(); } catch { /* ignore */ }
  }

  const exportedAt = new Date().toISOString();
  const rows = readRows(srcDb);
  const dump = { exportedAt, source: srcDb, count: rows.length, rows };
  writeFileSync(join(outDir, 'memories.json'), JSON.stringify(dump, null, 2), 'utf8');
  writeFileSync(join(outDir, 'MEMORIES.md'), toMarkdown(exportedAt, rows), 'utf8');

  return { count: rows.length, bytes: statSync(outDb).size };
}
