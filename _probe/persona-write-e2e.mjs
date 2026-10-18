// 端到端测 writePersona：用临时副本，别碰真文件。
import { readFileSync, copyFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createRequire } from 'node:module';
const require = createRequire('C:/Users/Kayle/.dsh/profiles/desktop/package.json');
const yaml = require('js-yaml');
const JSType = new yaml.Type('tag:yaml.org,2002:js', { kind: 'scalar', construct: (d) => d });
const schema = yaml.DEFAULT_SCHEMA.extend([JSType]);

// 直接引用真实模块的纯函数部分：writePersona 写死 PKG_ROOT，所以复刻其流程，但导入真实 helpers 不可行。
// 折中：把 lib/settings.js 复制到临时包根，patch 文件也复制过去，再 import 真实模块。
const tmp = mkdtempSync(join(tmpdir(), 'maid-preset-'));
const pkg = join(tmp, 'pkg');
import { mkdirSync } from 'node:fs';
mkdirSync(join(pkg, 'lib'), { recursive: true });
copyFileSync('D:/Works By DSH/dsh-maid-preset/lib/settings.js', join(pkg, 'lib', 'settings.js'));
for (const f of ['sync.js', 'export.js']) {
  try { copyFileSync(`D:/Works By DSH/dsh-maid-preset/lib/${f}`, join(pkg, 'lib', f)); } catch { /* 可选 */ }
}
copyFileSync('D:/Works By DSH/dsh-maid-preset/cordis.patch.yml', join(pkg, 'cordis.patch.yml'));
writeFileSync(join(pkg, 'package.json'), JSON.stringify({ name: 'x', type: 'module' }));

const mod = await import('file:///' + join(pkg, 'lib', 'settings.js').replace(/\\/g, '/'));
const target = join(pkg, 'cordis.patch.yml');
const before = readFileSync(target, 'utf8');

const read1 = mod.readPersona();
console.log('readPersona ok:', read1.ok, ' 长度:', read1.text?.length);

// 改一版：换掉称呼并追加一句
const edited = read1.text.replace('称呼用户为「老大」', '称呼用户为「老板」') + '\n\n新增一行测试：这条要同步进三处。';
const w = mod.writePersona(edited);
console.log('writePersona:', JSON.stringify(w));

const after = readFileSync(target, 'utf8');
const read2 = mod.readPersona();
console.log('回读与写入一致:', read2.text === edited.replace(/\n+$/, ''));

// 三处同步？递归搜所有 persona 文本
function collect(node, arr, path = '$') {
  if (Array.isArray(node)) node.forEach((v, i) => collect(v, arr, `${path}[${i}]`));
  else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (typeof v === 'string' && v.includes('新增一行测试')) arr.push(`${path}.${k}`);
      collect(v, arr, `${path}.${k}`);
    }
  }
}
const hits = [];
collect(yaml.load(after, { schema }), hits);
console.log('三处都带新句:', hits, '共', hits.length, '处');

const d = yaml.load(after, { schema });
const top = d[0].config.personaPrefix;
const std = d[2].config.plugins[0].config.prefix;
const maid = d[3].insert[2].config.plugins[0].config.prefix;
console.log('归一化同文:', new Set([top, std, maid].map((t) => t.replace(/\s+/g, ''))).size === 1);
console.log('旧称呼残留（应为 0）:', (after.match(/称呼用户为「老大」/g) || []).length);
console.log('CRLF 保持:', !/[^\r]\n/.test(after), ' 字节:', Buffer.byteLength(before), '->', Buffer.byteLength(after));

// 幂等：再写一次相同内容
const again = mod.writePersona(edited);
const after2 = readFileSync(target, 'utf8');
console.log('重复写入幂等:', again.ok && after2 === after);

// 反向：把原文写回，语义应等于原文件
const rev = mod.writePersona(read1.text);
const after3 = readFileSync(target, 'utf8');
const n = (s) => JSON.stringify(yaml.load(s, { schema }), (k, v) => (typeof v === 'string' ? v.replace(/\s+/g, '') : v));
console.log('写回原文语义复原:', rev.ok && n(after3) === n(before));
