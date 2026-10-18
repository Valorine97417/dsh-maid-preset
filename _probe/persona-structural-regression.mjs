// 仅在临时包副本写人设/备份；不 apply、不启动同步、不写真实 profile。
import assert from 'node:assert/strict';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// 复用已安装的 YAML 解析器（只读）；可由环境变量指定另一安装位置。
const require = createRequire(process.env.MAID_YAML_REQUIRE_FROM || 'C:/Users/Kayle/.dsh/profiles/desktop/package.json');
const yaml = require('js-yaml');
const schema = yaml.DEFAULT_SCHEMA.extend([
  new yaml.Type('tag:yaml.org,2002:js', { kind: 'scalar', construct: (d) => d })
]);
const load = (text) => yaml.load(text, { schema });
const temp = mkdtempSync(join(tmpdir(), 'maid-persona-regression-'));
const pkg = join(temp, 'pkg');
const home = join(temp, 'home');
mkdirSync(join(pkg, 'lib'), { recursive: true });
mkdirSync(join(pkg, 'defaults'));
mkdirSync(home);
for (const name of ['settings.js', 'sync.js', 'export.js']) {
  copyFileSync(join(root, 'lib', name), join(pkg, 'lib', name));
}
copyFileSync(join(root, 'cordis.patch.yml'), join(pkg, 'cordis.patch.yml'));
copyFileSync(join(root, 'defaults', 'cordis.patch.yml'), join(pkg, 'defaults', 'cordis.patch.yml'));
writeFileSync(join(pkg, 'package.json'), '{"type":"module"}');
process.env.DSH_HOME = home;
const mod = await import(pathToFileURL(join(pkg, 'lib', 'settings.js')).href);
const target = join(pkg, 'cordis.patch.yml');
const read = () => readFileSync(target, 'utf8');
let passed = 0;
function test(name, fn) {
  fn(); // 断言直接抛出：失败时 Node 非零退出，不只打印 false。
  passed++;
  console.log(`PASS ${name}`);
}
function presets(doc) {
  const found = [];
  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (['preset-standard', 'preset-maid'].includes(node.id)) found.push(node);
    for (const value of Object.values(node)) walk(value);
  }
  walk(doc);
  assert.equal(found.length, 2);
  return found;
}
function assertText(expected) {
  const doc = load(read());
  for (const preset of presets(doc)) {
    assert.equal(preset.config.plugins.find((p) => p.id === 'persona').config.prefix, expected);
  }
  assert.deepEqual(mod.readPersona(), { ok: true, text: expected });
}
const original = read();
const originalDoc = load(original);
const defaultDoc = load(readFileSync(join(pkg, 'defaults', 'cordis.patch.yml'), 'utf8'));
const defaultText = defaultDoc.find((p) => p.config?.personaPrefix !== undefined).config.personaPrefix.replace(/\n+$/, '');
// 同 preset 的非 persona 插件、其他 preset 的 persona，即使含旧关键词也不应被修改。
const decoys = '\n- id: preset-other\n  config:\n    plugins:\n      - id: persona\n        config:\n          prefix: >-\n            小困 unrelated\n- id: preset-standard\n  note: >-\n    - id: persona\n      config:\n        prefix: >-\n          女仆助理 decoy\n  config:\n    plugins:\n      - id: other\n        config:\n          prefix: >-\n            子智能体委派纪律 unrelated\n';
// 独立使用一个非目标 preset 避免与两个真实目标重复。
const safeDecoys = decoys.replace('- id: preset-standard\n  note:', '- id: preset-unrelated\n  note:');
writeFileSync(target, original + safeDecoys);
const first = '自定义助手\n逐行回答\n\n保留空段\n  保留正文缩进';
test('无关键词首次保存 + YAML 多行精确一致', () => {
  assert.equal(mod.writePersona(first).ok, true);
  assertText(first);
  assert.equal((read().match(/prefix: \|-/g) || []).length, 2);
});
const second = '完全不同的称呼\n第二次保存\n\n段落仍然保留\n- id: harmless-text\n  config: text';
test('无关键词第二次保存（读取已有 |-）', () => {
  assert.equal(mod.writePersona(second).ok, true);
  assertText(second);
});
test('重复保存字节幂等', () => {
  const before = read();
  assert.equal(mod.writePersona(second).ok, true);
  assert.equal(read(), before);
});
test('非目标 prefix 与伪结构正文未改', () => {
  assert.ok(read().replace(/\r\n/g, '\n').endsWith(safeDecoys));
});
test('去关键词后恢复默认，同步两处 preset', () => {
  assert.equal(mod.restorePersona('default').ok, true);
  assertText(defaultText);
});
test('非目标配置语义保持', () => {
  const after = load(read());
  for (const preset of presets(originalDoc)) preset.config.plugins.find((p) => p.id === 'persona').config.prefix = defaultText;
  originalDoc.find((p) => p.config?.personaPrefix !== undefined).config.personaPrefix = after.find((p) => p.config?.personaPrefix !== undefined).config.personaPrefix;
  assert.deepEqual(after.slice(0, originalDoc.length), originalDoc);
});
test('原文件 CRLF 风格保持', () => {
  if (original.includes('\r\n')) assert.ok(!/(?<!\r)\n/.test(read().slice(0, -safeDecoys.length)));
});
test('备份只写临时 home', () => {
  assert.equal(mod.envHome(), home);
  assert.ok(readFileSync(join(home, 'cordis.patch.yml.bak'), 'utf8').includes(second.split('\n')[0]));
});
console.log(`RESULT ${passed}/${passed} passed; temp=${temp}`);
