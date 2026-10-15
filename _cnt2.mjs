import { DatabaseSync } from 'node:sqlite';
const TABLES = ['soul','user','project','fact','lesson','topic','rules'];
function count(p){
  const db = new DatabaseSync(p, { readOnly: true });
  let total = 0;
  const per = {};
  for (const t of TABLES){
    const c = db.prepare(`SELECT COUNT(*) AS c FROM "${t}" WHERE (status IS NULL OR status != 'archived') AND (importance IS NULL OR importance >= 2)`).get().c;
    per[t] = c; total += c;
  }
  db.close();
  return { total, per };
}
const a = count('D:/DeepSeek Harness/Works/.dsh-meow/memory.db');
const b = count('C:/Users/Administrator/.dsh/maid-sync/memory/memory.db');
console.log('LIVE 门槛内:', a.total, JSON.stringify(a.per));
console.log('SYNC 门槛内:', b.total, JSON.stringify(b.per));
console.log('差距:', a.total - b.total);
