// 单测 registerDelegationGuidance 的去重与开关行为
import { createRequire } from 'node:module';
const require = createRequire('C:/Users/Kayle/.dsh/profiles/desktop/package.json');

const mod = await import('file:///D:/Works By%20DSH/dsh-maid-preset/lib/index.js');

function fakeCtx({ ready = true, getSectionOrder = () => 2800 } = {}) {
  const calls = [];
  let svc = ready ? {
    section(o) { calls.push(o); return () => { calls.push({ disposed: o.name }); }; },
    getSectionOrder
  } : undefined;
  return {
    calls,
    get: (n) => (n === 'systemPrompt' ? svc : undefined),
    effect: (fn) => fn(),
    on: () => {},
    logger: { info: () => {}, warn: (m) => calls.push({ warn: m }) }
  };
}

// 1) enabled:false → 不注册
let c = fakeCtx();
mod.apply(c, { delegation: { enabled: false }, seed: { enabled: false } });
await new Promise((r) => setTimeout(r, 50));
console.log('enabled:false 注册次数:', c.calls.filter((x) => x && x.name).length);

// 1b) 未配置 delegation → 也不注册（默认关）
c = fakeCtx();
mod.apply(c, { seed: { enabled: false } });
await new Promise((r) => setTimeout(r, 50));
console.log('无 delegation 键 注册次数（应为 0）:', c.calls.filter((x) => x && x.name).length);

// 2) enabled:true → 注册
c = fakeCtx();
mod.apply(c, { delegation: { enabled: true }, seed: { enabled: false } });
await new Promise((r) => setTimeout(r, 50));
const regs = c.calls.filter((x) => x && x.name);
console.log('enabled:true 注册次数:', regs.length, ' order:', regs[0]?.order, ' 文本含委派:', /委派/.test(regs[0]?.text ?? ''));

// 3) 重复 apply（模拟插件重载）→ 不应再 insert
c = fakeCtx();
mod.apply(c, { delegation: { enabled: true }, seed: { enabled: false } });
mod.apply(c, { delegation: { enabled: true }, seed: { enabled: false } });
await new Promise((r) => setTimeout(r, 50));
console.log('两次 apply 后注册次数（应为 1）:', c.calls.filter((x) => x && x.name).length);

// 4) guidance 覆盖生效
c = fakeCtx();
mod.apply(c, { delegation: { enabled: true, guidance: '  自定义委派文本  ' }, seed: { enabled: false } });
await new Promise((r) => setTimeout(r, 50));
const g = c.calls.filter((x) => x && x.name);
console.log('自定义 guidance:', JSON.stringify(g[0]?.text), ' 注册数:', g.length);

// 5) getSectionOrder 缺失 → 回落 2801
c = fakeCtx({ getSectionOrder: undefined });
mod.apply(c, { delegation: { enabled: true }, seed: { enabled: false } });
await new Promise((r) => setTimeout(r, 50));
console.log('无 getSectionOrder 回落 order:', c.calls.filter((x) => x && x.name)[0]?.order);

// 6) systemPrompt 迟迟不就绪 → 轮询而非立即失败
c = fakeCtx({ ready: false });
mod.apply(c, { delegation: { enabled: true }, seed: { enabled: false } });
await new Promise((r) => setTimeout(r, 50));
console.log('服务未就绪 注册次数（应为 0）:', c.calls.filter((x) => x && x.name).length);
