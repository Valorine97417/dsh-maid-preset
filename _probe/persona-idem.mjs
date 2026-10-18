import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire('C:/Users/Kayle/.dsh/profiles/desktop/package.json');
const yaml = require('js-yaml');
const JSType = new yaml.Type('tag:yaml.org,2002:js', { kind: 'scalar', construct: (d) => d });
const schema = yaml.DEFAULT_SCHEMA.extend([JSType]);
const FILE = 'D:/Works By DSH/dsh-maid-preset/cordis.patch.yml';

function syncFolded(ls, normText) {
  const blocks = [];
  for (let i = 0; i < ls.length; i++) {
    if (!/^\s*prefix:\s*>-\s*$/.test(ls[i])) continue;
    const indent = ls[i].match(/^\s*/)[0].length;
    let bodyIndent = null, end = ls.length;
    for (let j = i + 1; j < ls.length; j++) {
      if (ls[j].trim() === '') continue;
      const ind = ls[j].match(/^\s*/)[0].length;
      if (ind <= indent) { end = j; break; }
      if (bodyIndent === null) bodyIndent = ind;
    }
    blocks.push({ start: i, end, bodyIndent: bodyIndent ?? indent + 2 });
  }
  const out = ls.slice();
  for (let b = blocks.length - 1; b >= 0; b--) {
    const { start, end, bodyIndent } = blocks[b];
    const pad = ' '.repeat(bodyIndent);
    out.splice(start + 1, end - start - 1, ...normText.split('\n').map((l) => (l === '' ? '' : pad + l)), '');
  }
  return out;
}

function pass(src) {
  const lines = src.split(/\r?\n/);
  const ti = lines.findIndex((l) => /^\s*personaPrefix:\s*\|\s*$/.test(l));
  let e = lines.length;
  for (let i = ti + 1; i < lines.length; i++) if (/^- /.test(lines[i])) { e = i; break; }
  const body = lines.slice(ti + 1, e);
  while (body.length && body[body.length - 1].trim() === '') body.pop();
  const text = body.map((l) => (l.startsWith('      ') ? l.slice(6) : l)).join('\n');
  const norm = text.replace(/\r\n/g, '\n').replace(/\n+$/, '');
  const pad6 = norm.split('\n').map((l) => (l === '' ? '' : '      ' + l));
  const withTop = [...lines.slice(0, ti + 1), ...pad6, '', ...lines.slice(e)];
  return syncFolded(withTop, norm).join(/\r\n/.test(src) ? '\r\n' : '\n');
}

const original = readFileSync(FILE, 'utf8');
const p1 = pass(original);
const p2 = pass(p1);
const p3 = pass(p2);
console.log('一次改动字节变化:', Buffer.byteLength(original), '->', Buffer.byteLength(p1));
console.log('第二次幂等:', p1 === p2, ' 第三次幂等:', p2 === p3);
const d0 = yaml.load(original, { schema }), d2 = yaml.load(p2, { schema });
const n = (d) => JSON.stringify(d, (k, v) => (typeof v === 'string' ? v.replace(/\s+/g, '') : v));
console.log('语义不变:', n(d0) === n(d2));
console.log('CRLF 保持:', !/[^\r]\n/.test(p2));
