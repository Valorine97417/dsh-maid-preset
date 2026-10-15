const { exportMemory } = await import('file:///C:/Users/Administrator/.dsh/profiles/desktop/node_modules/dsh-maid-preset/lib/export.js');
const res = await exportMemory('D:/DeepSeek Harness/Works/.dsh-meow/memory.db', 'C:/Users/Administrator/.dsh/maid-sync/memory/');
console.log(JSON.stringify(res));
