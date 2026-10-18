import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire('C:/Users/Kayle/.dsh/profiles/desktop/package.json');
const yaml = require('js-yaml');

const JSType = new yaml.Type('tag:yaml.org,2002:js', { kind: 'scalar', construct: (d) => d });
const schema = yaml.DEFAULT_SCHEMA.extend([JSType]);

function walk(node, hit, path = '$') {
  if (Array.isArray(node)) node.forEach((v, i) => walk(v, hit, `${path}[${i}]`));
  else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (typeof v === 'string' && v.includes('【子智能体委派纪律')) hit.push({ path: `${path}.${k}`, len: v.length });
      walk(v, hit, `${path}.${k}`);
    }
  }
}

for (const f of ['cordis.patch.yml', 'defaults/cordis.patch.yml']) {
  const raw = readFileSync(f, 'utf8');
  const doc = yaml.load(raw, { schema });
  const hit = [];
  walk(doc, hit);
  const entry = doc.flatMap((r) => (r.insert || [])).find((r) => r.id === 'dsh-maid-preset');
  console.log(`== ${f}`);
  console.log('  CRLF:', raw.includes('\r\n'), ' 行数:', raw.split(/\r?\n/).length);
  console.log('  纪律命中:', hit.map((h) => `${h.path}=${h.len}`).join(' | ') || '无');
  console.log('  delegation:', JSON.stringify(entry?.config?.delegation));
  console.log('  config keys:', Object.keys(entry?.config ?? {}).join(','));
}
