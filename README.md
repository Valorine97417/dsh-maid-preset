# dsh-maid-preset

DeepSeek Harness（DSH）女仆预设「小困」插件——**装一个包，走到哪台电脑都是小困**。

把一整套 DSH 女仆助理人设打包成可分发的配置插件（形态与 `dshmarket`、`dsh-whale-widget` 同构），装机后新会话默认使用女仆预设。

## 装的是什么

| 条目 | 说明 |
|---|---|
| `system-prompt` 的 personaPrefix | 部署级全局女仆人设（形象/口吻/称呼「老大」/自称「小困」/思考也中文） |
| `preset-standard` 覆盖 | standard 预设也带女仆前缀 |
| `preset-maid`（id=maid，name=女仆） | 完整预设：内置 standard 的全部工具/功能/设置 + 女仆前缀 |
| `agent-preset-registry` | 默认预设 = maid |
| 设置面板（v0.5.0） | 设置左栏「maid 设置」：人设编辑 / 记忆清单 / 同步时间 / GitHub 仓库四卡片 |
| `meow-memory` 独立记忆 | 长期记忆插件：首轮注入 + 每消息关键词命中、`/dream` 整理、SQLite 持久化 |

人设三处文本在插件的 `cordis.patch.yml` 里是**单一来源**，改一处即全部更新。

## 设置面板（v0.5.0 起）

设置左栏「maid 设置」四卡片，前后端全在本包：`lib/settings.js` 后端路由 + `lib/client.js` 前端注册（`dsh.client.platform=web`，注册进 `settings.section` slot）。

| 卡片 | 作用 |
|---|---|
| 人设编辑 | 读写 `cordis.patch.yml` 的 personaPrefix（改完重启生效） |
| 记忆清单 | 工作区 / 层级 / 状态过滤，直查真实 `memory.db` |
| 同步时间 | repoUrl、idleMinutes 等白名单字段校验写回 |
| GitHub 仓库 | 测试连接 / 一键新建私有记忆同步仓库 |

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

## 记忆自动同步 GitHub（v0.4.0 起，v0.4.1 加固）

不用手动导出+提交。插件加载时会启动同步循环 `lib/sync.js`：

- **触发 = 变更 + 空闲**：每 60s 轮询活库的 `memory.db` / `-wal` mtime；检测到写入就拨回空闲钟，**连续空闲 10 分钟**才导出并推送——避免每轮对话都生成一个 commit 把历史刷爆。
- **专用克隆副本**：同步用独立的 `git clone`（默认 `$DSH_HOME/maid-sync`），与插件安装目录、开发目录互不干扰，缺失时自动克隆。
- **幂等**：活库无变化时直接清 pending 跳过，不产生空 commit。
- **失败分级（v0.4.1）**：先直连、失败后逐个试 `proxies`。仍失败则按错误类型分流——
  - **网络类**（连接重置、超时、DNS）：指数退避重试 5/10/20/40… 分钟，封顶 8 小时，不再每 60 秒撞一次墙。
  - **配置类**（认证失败、仓库不存在、无写权限、缺 git 身份）：**立即暂停整个同步循环**并写日志说明怎么改。这类错误重试一万次也还是错，只会刷爆日志。
  - 改好配置（尤其是 `repoUrl`）后重启 DSH 即自动恢复；`repoUrl` 变化也会自动清除暂停标记。
  - 日志写 `$DSH_HOME/maid-sync.log`，绝不假装成功。

配置在 `cordis.patch.yml` 的 `dsh-maid-preset` entry 下：

```yaml
config:
  sync:
    enabled: true
    repoUrl: 'https://github.com/Valorine97417/dsh-maid-preset.git'
    branch: 'main'
    idleMinutes: 10
    pollSeconds: 60
    proxies: ['http://127.0.0.1:7890']
    # 留空则交给该机器自己的 git 配置；两者都缺时暂停并写清怎么配，不崩在 auto-detect
    identity:
      name: 'Valorine97417'
      email: 'Valorine97417@users.noreply.github.com'
  seed:
    enabled: true
```

状态文件 `$DSH_HOME/maid-sync-state.json` 记录已同步水位；删掉它即触发一次基准同步。

### 换一台电脑装的时候（给别人用请先读这段）

默认 `repoUrl` 指向本仓库——**别人机器上没有你的凭据，clone/push 必然被拒**。v0.4.1 把这条从「无限重试」改成了「暂停 + 写清怎么改」，但配置本身仍需手改：

| 想要的效果 | 怎么改 |
| --- | --- |
| 不上传，只本地存记忆 | `sync.enabled: false`，或把 `repoUrl` 留空（待机） |
| 上传到自己的仓库 | fork 本仓库，`repoUrl` 指向 fork，并在该机器配好 GitHub 凭据 |
| 提交署自己的名 | `sync.identity` 改成本人，或留空走该机器 `git config --global` |
| 不吃下种子记忆 | `seed.enabled: false`——种子是打包时那批记忆，装上就会进会话 |

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
- `lib/index.js` — 记忆种子播种逻辑（启动 + `agent/pre-step` 兜底），并拉起同步循环；无构建依赖
- `lib/sync.js` — 记忆自动同步引擎（变更检测、空闲判定、导出、commit/push、失败重试）
- `lib/export.js` — 导出实现（`VACUUM INTO` 快照 + JSON/MD），被手工脚本与自动同步共用
- `memory/` — 随包分发的记忆种子（db 快照 + 人读导出）
- `scripts/export-memory.mjs` — 记忆重新导出工具
- 依赖：`meow-memory`（运行时），peer 依赖 `@deepseek-ai/cordis`（DSH 自带），装机零额外构建

## License

MIT
