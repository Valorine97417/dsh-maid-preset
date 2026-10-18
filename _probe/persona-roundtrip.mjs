import { readFileSync, copyFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire('C:/Users/Kayle/.dsh/profiles/desktop/package.json');
const yaml = require('js-yaml');

const JSType = new yaml.Type('tag:yaml.org,2002:js', { kind: 'scalar', construct: (d) => d });
const schema = yaml.DEFAULT_SCHEMA.extend([JSType]);
const FILE = 'D:/Works By DSH/dsh-maid-preset/cordis.patch.yml';
const BAK = 'D:/Works By DSH/dsh-maid-preset/_probe/roundtrip-before.yml';

function spans(lines) {
  const out = { top: null, folded: [] };
  const ti = lines.findIndex((l) => /^\s*personaPrefix:\s*\|\s*$/.test(l));
  if (ti >= 0) {
    let e = lines.length;
    for (let i = ti + 1; i < lines.length; i++) if (/^- /.test(lines[i])) { e = i; break; }
    out.top = { start: ti, end: e };
  }
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*prefix:\s*>-\s*$/.test(lines[i])) continue;
    const indent = lines[i].match(/^\s*/)[0].length;
    let e = lines.length;
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].trim() === '') continue;
      if (lines[j].match(/^\s*/)[0].length <= indent) { e = j; break; }
    }
    out.folded.push({ start: i, end: e });
  }
  return out;
}

const before = readFileSync(FILE, 'utf8');
if (!existsSync(BAK)) copyFileSync(FILE, BAK);
const sp = spans(before.split(/\r?\n/));
console.log('顶层 personaPrefix 行:', sp.top && `${sp.top.start}-${sp.top.end}`);
console.log('>- 折块行:', sp.folded.map((b) => `${b.start}-${b.end}`).join(', '));

// 模拟 writePersona 的正文提取 + 拼回（不落盘，纯内存比对）
const lines = before.split(/\r?\n/);
const bodyLines = lines.slice(sp.top.start + 1, sp.top.end);
while (bodyLines.length && bodyLines[bodyLines.length - 1].trim() === '') bodyLines.pop();
const text = bodyLines.map((l) => (l.startsWith('      ') ? l.slice(6) : l)).join('\n');
const norm = text.replace(/\r\n/g, '\n').replace(/\n+$/, '');
const pad6 = norm.split('\n').map((l) => (l === '' ? '' : '      ' + l));
const withTop = [...lines.slice(0, sp.top.start + 1), ...pad6, '', ...lines.slice(sp.top.end)];

// syncFoldedPrefixes 复刻
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

const next = syncFolded(withTop, norm);
const eol = /\r\n/.test(before) ? '\r\n' : '\n';
const after = next.join(eol);
console.log('中文正文长度:', norm.length);
console.log('roundtrip 字节一致:', after === before, `(before ${Buffer.byteLength(before)} / after ${Buffer.byteLength(after)})`);

// YAML 语义比对
const d0 = yaml.load(before, { schema });
const d1 = yaml.load(after, { schema });
const normDoc = (d) => JSON.stringify(d, (k, v) => (typeof v === 'string' ? v.replace(/\s+/g, '') : v));
console.log('YAML 语义（去空白）一致:', normDoc(d0) === normDoc(d1));

// 三处是否真的同文
const hit = [];
walk(d1, hit);
function walk(node, arr, path = '$') {
  if (Array.isArray(node)) node.forEach((v, i) => walk(v, arr, `${path}[${i}]`));
  else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (typeof v === 'string' && v.includes('【子智能体委派纪律')) arr.push({ path: `${path}.${k}`, t: v.replace(/\s+/g, '') });
      walk(v, arr, `${path}.${k}`);
    }
  }
}
console.log('纪律命中:', hit.length, '三处归一化同文:', new Set(hit.map((h) => h.t)).size === 1);
