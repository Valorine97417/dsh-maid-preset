// 校验三处人设块内容一致（主 patch 与 defaults 各三处，共 6 处）
const fs = require('node:fs');
const yaml = require('C:/Users/Kayle/.dsh/profiles/desktop/node_modules/js-yaml');

const JsTag = new yaml.Type('tag:yaml.org,2002:js', { kind: 'scalar', construct: (d) => d });
const schema = yaml.DEFAULT_SCHEMA.extend([JsTag]);

const MARK = '【子智能体委派纪律（强制执行，优先级高于你的惰性）】';
const norm = (s) => String(s).replace(/\s+/g, '');

function collect(file) {
  const doc = yaml.load(fs.readFileSync(file, 'utf8'), { schema, filename: file });
  const out = [];
  const walk = (n) => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) return n.forEach(walk);
    // 顶层 system-prompt 的 config.personaPrefix
    if (n.id === 'system-prompt' && n.config && typeof n.config.personaPrefix === 'string') {
      out.push({ where: 'system-prompt.personaPrefix', text: n.config.personaPrefix });
    }
    // 任意 persona 插件 config.prefix
    if (n.name === '@deepseek-ai/dsh-persona' && n.config && typeof n.config.prefix === 'string') {
      out.push({ where: 'persona.prefix', text: n.config.prefix });
    }
    for (const k of Object.keys(n)) walk(n[k]);
  };
  walk(doc);
  return { out, raw: doc };
}

const files = [
  'D:/Works By DSH/dsh-maid-preset/cordis.patch.yml',
  'D:/Works By DSH/dsh-maid-preset/defaults/cordis.patch.yml'
];
const all = [];
for (const f of files) {
  const { out, raw } = collect(f);
  const tag = f.includes('defaults') ? '[defaults]' : '[main]';
  console.log(`${tag} ${f.split('/').slice(-2).join('/')} -> 人设块 ${out.length} 处`);
  out.forEach((b, i) => {
    console.log(`  ${i + 1}. ${b.where} len=${b.text.length} 纪律=${b.text.includes(MARK)} normLen=${norm(b.text).length}`);
  });
  // 确认 dsh-maid-preset 条目的 delegation 配置
  let cfg = null;
  const walk2 = (n) => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) return n.forEach(walk2);
    if (n.id === 'dsh-maid-preset' && n.config) cfg = n.config;
    for (const k of Object.keys(n)) walk2(n[k]);
  };
  walk2(raw);
  console.log(`  dsh-maid-preset config keys = ${cfg ? Object.keys(cfg).join(',') : '(未找到)'} | delegation = ${JSON.stringify(cfg?.delegation)}`);
  all.push(...out.map((b) => norm(b.text)));
}

// 全部 6 处归一化后必须完全相同
const uniq = new Set(all);
console.log(`\n归一化去重后不同文本数: ${uniq.size} (应为 1，共 ${all.length} 处)`);
if (uniq.size === 1) console.log('OK 六处人设文本完全一致');
else {
  console.log('MISMATCH');
  const arr = [...uniq];
  arr.forEach((t, i) => console.log(`  变体${i + 1} len=${t.length} 纪律=${t.includes(norm(MARK))}`));
}
