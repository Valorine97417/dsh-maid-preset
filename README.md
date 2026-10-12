# dsh-maid-preset

DeepSeek Harness（DSH）女仆预设「小困」插件——**装一个包，走到哪台电脑都是小困**。

把一整套 DSH 女仆助理人设打包成可分发的配置插件（形态与 `dshmarket`、`dsh-whale-widget` 同构），装机后新会话默认使用女仆预设。

## 装的是什么

| 条目 | 说明 |
|---|---|
| `system-prompt` 的 personaPrefix | 部署级全局女仆人设（形象/口吻/称呼「老大」/自称「小困」/思考也中文） |
| `preset-maid`（id=maid，name=女仆） | 完整预设：内置 standard 的全部工具/功能/设置 + 女仆前缀 |
| `agent-preset-registry` | 默认预设 = maid |
| `meow-memory` 独立记忆 | 长期记忆插件：首轮注入 + 每消息关键词命中、`/dream` 整理、SQLite 持久化 |

人设文本在插件的 `cordis.patch.yml` 里是**单一来源**（personaPrefix 与 preset-maid 两处同源），改一处即全部更新。内置 `standard` 预设**不再覆盖**，保持 DSH 原厂默认；原覆盖段存档于 `archive/preset-standard-override.yml`，需要时拷回即可生效。

## 独立记忆（meow-memory）

本包依赖 [`meow-memory`](https://github.com/Phant0Meow/dsh-meow-memory)，其 entry 行由本包的 `cordis.patch.yml` 插入（照官方 `dsh-experimental-schedule-bundle` 的先例：bundle 的 patch 插别的包的行，靠自己的 `package.json` 依赖解析）。因此装这一个包就同时得到人设 + 记忆，无需再单独装 `meow-memory`。

**记忆随包分发**：`memory/` 目录里带着一份记忆种子，装到新机器后第一次打开会话，`lib/index.js` 会把它播种到该工作区的 `.dsh-meow/memory.db`，小困的记忆跟着插件一起走。

| 文件 | 用途 |
|---|---|
| `memory/memory.db` | 可直接播种的 SQLite 快照（`VACUUM INTO` 导出，单文件、无 WAL 残留） |
| `memory/MEMORIES.md` | 人读版，方便浏览与 git diff |
| `memory/memories.json` | 结构化全量导出（含 id/重要性/关键词等元数据） |
| `scripts/export-memory.mjs` | 重新导出工具 |

播种规则：**目标工作区已有 `memory.db` 时绝不覆盖**——种子只对空白工作区生效，本机正在用的记忆不受任何影响。播种时机为启动时（覆盖 `window-index.json` 里的历史工作区）+ 每轮 `agent/pre-step` 兜底（赶在 meow-memory 首次建库之前）。

记忆有更新后重新导出，把 `memory/` 一起提交即可让新机器拿到最新记忆：

```bash
node scripts/export-memory.mjs                 # 默认读 ..\.dsh-meow\memory.db
node scripts/export-memory.mjs <源库绝对路径>  # 或显式指定
```

## 安装

```bash
# 桌面端 profile 名为 desktop（如不同请替换）
# 仓库为私有：需要 GitHub 认证（token）。本机缓存凭据（git credential）时直接可用；
# 新机器可先把 token 备好：git credential fill 或设置 GITHUB_TOKEN 环境变量。
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

- `cordis.patch.yml` — 全部人设与预设定义 + meow-memory entry 行（由 `package.json` 的 `dsh.bundle.patch` 声明，随 bundle 并入 DSH 配置层）
- `lib/index.js` — 记忆种子播种逻辑（启动 + `agent/pre-step` 兜底），无构建依赖
- `memory/` — 随包分发的记忆种子（db 快照 + 人读导出）
- `scripts/export-memory.mjs` — 记忆重新导出工具
- 依赖：`meow-memory`（运行时），peer 依赖 `@deepseek-ai/cordis`（DSH 自带），装机零额外构建

## License

MIT
