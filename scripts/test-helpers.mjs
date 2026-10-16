// 测试辅助：按真实活库的列结构建库（七张表列定义不同，必须逐表照抄）
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export const LEVELS = ['soul', 'user', 'project', 'fact', 'lesson', 'topic', 'rules'];

// 按本机活库实测的列定义（2026-10-17 pragma table_info 抄录）
const EXTRA = {
  soul: [],
  user: [],
  project: ['subcategory'],
  fact: ['project'],
  lesson: ['corrected', 'project'],
  topic: ['goal', 'project'],
  rules: ['project'],
};

export function createSchema(db) {
  for (const level of LEVELS) {
    const cols = ['id text primary key', 'title text', 'content text', 'importance integer',
      'keywords text', 'status text', 'source_session text', 'hit_count integer',
      'created_at integer', 'updated_at integer', 'last_accessed_at integer', ...EXTRA[level].map((c) => `${c} text`)];
    db.exec(`create table if not exists "${level}" (${cols.join(', ')})`);
  }
}

export function makeDb(path, rows) {
  mkdirSync(dirname(path), { recursive: true });
  const db = new DatabaseSync(path);
  createSchema(db);
  for (const r of rows) {
    db.prepare(`insert into "${r.level}" (id, title, content, importance, keywords, status, created_at, updated_at) values (?,?,?,?,?,?,?,?)`)
      .run(r.id, r.title ?? '', r.content ?? '', r.importance ?? 1, r.keywords ?? '', r.status ?? 'active',
        r.created_at ?? r.updated_at, r.updated_at);
  }
  db.close();
}

export function readLevel(dbPath, level) {
  const db = new DatabaseSync(dbPath, { readOnly: true });
  const rows = db.prepare(`select id, title, updated_at from "${level}" order by id`).all();
  db.close();
  return rows;
}
