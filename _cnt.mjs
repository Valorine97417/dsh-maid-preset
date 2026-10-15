import { DatabaseSync } from 'node:sqlite';
function count(p){
  try{
    const db = new DatabaseSync(p, { readOnly: true });
    const rows = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    const out = {};
    for (const r of rows) {
      try {
        const n = db.prepare(`SELECT COUNT(*) AS c FROM "${r.name}"`).get().c;
        out[r.name] = n;
      } catch(e){ out[r.name] = 'err'; }
    }
    db.close();
    return out;
  } catch(e){ return 'OPEN FAIL: '+e.message; }
}
console.log('LIVE :', JSON.stringify(count('D:/DeepSeek Harness/Works/.dsh-meow/memory.db')));
console.log('SYNC :', JSON.stringify(count('C:/Users/Administrator/.dsh/maid-sync/memory/memory.db')));
