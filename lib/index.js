// dsh-maid-preset 插件入口（纯配置分发器）
// 全部人设/预设定义都在 cordis.patch.yml 里，这里只做最小占位，
// 让 cordis 能把插件识别为合法的 bundle 成员。
export const name = 'dsh-maid-preset';

export function apply(/** @type {import('@deepseek-ai/cordis').Context} */ ctx) {
  // 无需运行时逻辑；配置由 bundle patch 层注入。
  // 保留空实现以兼容 cordis 插件加载器。
}