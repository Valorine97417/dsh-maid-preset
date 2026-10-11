# dsh-maid-preset

DeepSeek Harness（DSH）女仆预设「小困」插件——**装一个包，走到哪台电脑都是小困**。

把一整套 DSH 女仆助理人设打包成可分发的配置插件（形态与 `dshmarket`、`dsh-whale-widget` 同构），装机后新会话默认使用女仆预设。

## 装的是什么

| 条目 | 说明 |
|---|---|
| `system-prompt` 的 personaPrefix | 部署级全局女仆人设（形象/口吻/称呼「老大」/自称「小困」/思考也中文） |
| `preset-standard` 覆盖 | standard 预设也带女仆前缀 |
| `preset-maid`（id=maid，name=女仆） | 完整预设：standard 的全部工具/功能/设置 + 女仆前缀 |
| `agent-preset-registry` | 默认预设 = maid |

人设三处文本在插件的 `cordis.patch.yml` 里是**单一来源**，改一处即全部更新。

## 安装

```bash
# DSH 桌面端 profile 名为 desktop（如不同请替换）
dsh plugin --profile desktop add github:Valorine97417/dsh-maid-preset
```

装完重启 DSH 生效。

## 本地开发安装

```bash
dsh plugin --profile desktop add link:<本仓库绝对路径>
```

## 卸载

```bash
dsh plugin --profile desktop remove dsh-maid-preset
```

## 包结构

- `cordis.patch.yml` — 全部人设与预设定义（由 `package.json` 的 `dsh.bundle.patch` 声明，随 bundle 并入 DSH 配置层）
- `lib/index.js` — 最小占位入口，纯配置分发器，无构建依赖
- 依赖：仅 peer 依赖 `@deepseek-ai/cordis`（DSH 自带），装机零额外构建

## License

MIT
