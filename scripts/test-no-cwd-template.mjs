import assert from 'node:assert/strict';
import fs from 'node:fs';

// cwd is a literal runtime context, not a prompt template variable in DSH rc.2+.
const files = [
  new URL('../cordis.patch.yml', import.meta.url),
  new URL('../defaults/cordis.patch.yml', import.meta.url),
  ...process.argv.slice(2),
];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  assert.equal(text.includes('{{cwd}}'), false, `${file}: obsolete cwd template`);
  const delegationCount = text.split('【子智能体委派纪律（强制执行，优先级高于你的惰性）】').length - 1;
  assert.equal(delegationCount, 0, `${file}: delegation instructions must live in the standalone package`);
  console.log(`PASS ${file}: no obsolete cwd template; delegation copies=${delegationCount}`);
}
