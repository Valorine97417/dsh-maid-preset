# dsh-maid-preset

DeepSeek Harness（DSH）女仆预设「小困」插件——**装一个包，走到哪台电脑都是小困**。

把一整套 DSH 女仆助理人设打包成可分发的配置插件（形态与 `dshmarket`、`dsh-whale-widget` 同构），装机后新会话默认使用女仆预设。**记忆功能已内置**（v0.6.0 起），无需再单独装 `meow-memory`。

## 装的是什么

| 条目 | 说明 |
|---|---|
| `system-prompt` 的 personaPrefix | 部署级全局女仆人设（形象/口吻/称呼「老大」/自称「小困」/思考也中文） |
| `preset-standard` 覆盖 | standard 预设也带女仆前缀 |
| `preset-maid`（id=maid，name=女仆） | 完整预设：内置 standard 的全部工具/功能/设置 + 女仆前缀 |
| `agent-preset-registry` | 默认预设 = maid |
| 设置面板 | 设置左栏「maid 设置」：人设编辑（含恢复备份/出厂）/ 记忆清单（新增/改重要性/排序/统计）/ 同步（总闸+门槛）/ GitHub 仓库 / 一键自检 **五卡片** |
| **内置记忆 meow-memory** | 长期记忆：首轮注入 + 每消息关键词命中、`/dream` 整理、右键会话「记忆参与」、SQLite 持久化——代码随包（`lib/meow/`），**卸载独立的 `meow-memory` 包不影响本包记忆功能** |

人设三处文本在插件的 `cordis.patch.yml` 里是**单一来源**，改一处即全部更新。

## 设置面板

设置左栏「maid 设置」五卡片，前后端全在本包：`lib/settings.js` 后端路由 + `lib/client.js` 前端注册（`dsh.client.platform=web`，注册进 `settings.section` slot）。

| 卡片 | 作用 |
|---|---|
| 人设编辑 | 读写 `cordis.patch.yml` 的 personaPrefix（改完重启生效）；**恢复备份**（上次保存前快照）/**恢复出厂**（随包 `defaults/cordis.patch.yml`） |
| 记忆清单 | 工作区 / 层级 / 状态过滤，直查真实 `memory.db`；改状态/重要性、删除、**手写新增**；**统计条**（各状态计数 + 可上船数）与**排序**（更新时间/重要性） |
| 同步（GitHub） | repoUrl、idleMinutes、**自动同步总闸**、**上船门槛**（importance ≥ 此值才推 GitHub）；测试连接 / 立即同步 / 一键新建私有仓库 |
| GitHub 仓库 | 测试连接 / 一键新建私有记忆同步仓库 |
| **一键自检** | 插件文件、记忆库、同步引擎、git 环境、代理端口逐项体检（✅/❌ 表格）；排查问题先点这里 |

`meow-memory` 自带的「喵记忆」设置段（总开关 / 注入命中 / 反思轮数 / dream 空闲整理）随本包一并注册。

## 内置记忆（meow-memory）

**v0.6.0 起 `meow-memory` 代码直接内置**（`lib/meow/`，源自 [Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) v0.31.0，MIT）：`cordis.patch.yml` 的 entry 解析路径指向包内子模块（`name: 'dsh-maid-preset/meow'` → `exports "./meow"`），Node 解析永远落在本包身上——**卸载独立的 `meow-memory` 包，本包的记忆功能照常**。（≤v0.5.0 为外部依赖形态：entry 按包名解析，卸载即断。）

前端 `meow` client 随本包 `./client` bundle 一并下发，在 maid 的 `apply` 里同步物化（`require('meow-memory')` + `apply(ctx)`），无需宿主单独调度。

### 记忆随包分发

`memory/` 目录里带着一份记忆种子，装到新机器后第一次打开会话，`lib/index.js` 会把它播种到该工作区的 `.dsh-meow/memory.db`，小困的记忆跟着插件一起走。

| 文件 | 用途 |
|---|---|
| `memory/memory.db` | 可直接播种的 SQLite 快照（**精选门槛**：只含 active/stale 且 importance≥2 的条目，archived 与琐碎条目不上船） |
| `memory/MEMORIES.md` | 人读版，方便浏览与 git diff |
| `memory/memories.json` | 结构化导出（含 id/重要性/关键词等元数据） |
| `scripts/export-memory.mjs` | 重新导出工具 |

播种规则：**目标工作区已有 `memory.db` 时绝不覆盖**——种子只对空白工作区生效，本机正在用的记忆不受任何影响。播种时机为启动时（覆盖 `window-index.json` 里的历史工作区）+ 每轮 `agent/pre-step` 兜底（赶在 meow-memory 首次建库之前）。

记忆有更新后重新导出，把 `memory/` 一起提交即可让新机器拿到最新记忆：

```bash
node scripts/export-memory.mjs                 # 默认读 ..\.dsh-meow\memory.db
node scripts/export-memory.mjs <源库绝对路径>  # 或显式指定
```

## 记忆自动同步 GitHub（v0.7.0 可调门槛 + 自动代理）

不用手动导出+提交。插件加载时会启动同步循环 `lib/sync.js`：

- **触发 = 变更 + 空闲**：每 60s 轮询活库的 `memory.db` / `-wal` mtime；检测到写入就拨回空闲钟，**连续空闲 10 分钟**才导出并推送——避免每轮对话都生成一个 commit 把历史刷爆。
- **专用克隆副本**：同步用独立的 `git clone`（默认 `$DSH_HOME/maid-sync`），与插件安装目录、开发目录互不干扰，缺失时自动克隆。
- **幂等**：活库无变化时直接清 pending 跳过，不产生空 commit。
- **精选门槛（v0.6.1 起，v0.7.0 可调）**：推送前统一过滤——`archived` 条目不上船；`importance < 门槛` 的琐碎条目留在本地不上 GitHub。`memory.db` 快照不再是全量 `VACUUM INTO`，改为**按门槛重建筛选库**，防止 archived 随种子在新工作区复活。**门槛在设置页「上船门槛」直接调**（`sync.minImportance`，0~9，默认 2），导出三路热读同一值，改完即生效。
- **自动代理探测（v0.7.0）**：**默认直连**；失败后自动检测本机代理（环境变量 → Windows 注册表 `ProxyEnable/ProxyServer` → 常见端口 7890/7897/10809 等），探到即借道重试。**无需手动配置代理列表**，代理开关/端口变更自动适应。
- **同步总闸（v0.7.0）**：设置页「自动同步」开关直接控启停（`sync.enabled`），关掉后引擎待命不推，**不必改 yml 文件**。
- **失败分级（v0.4.1）**：仍失败则按错误类型分流——
  - **基线类（v0.7.1）**（`non-fast-forward`、落后远端、rebase 挂起出现 `unmerged files`/`could not apply`）：**自动自愈**——丢弃挂起的 rebase/merge，`reset --hard origin/<branch>` 对齐后重新导出+提交+推送。记忆导出是全量重建，本地历史无保留价值，冲突不该硬 rebase。缺这一刀，workcopy 一旦卡在 `(no branch, rebasing main)` 就永久推不动（0.7.0 及以前正是这样卡死的）。
  - **网络类**（连接重置、超时、DNS）：指数退避重试 5/10/20/40… 分钟，封顶 8 小时，不再每 60 秒撞一次墙。
  - **配置类**（认证失败、仓库不存在、无写权限、缺 git 身份）：**立即暂停整个同步循环**并写日志说明怎么改。这类错误重试一万次也还是错，只会刷爆日志。
  - 改好配置（尤其是 `repoUrl`）后重启 DSH 即自动恢复；`repoUrl` 变化也会自动清除暂停标记。
- **`syncOnce` 可外部直接调用（v0.7.1）**：设置页手动触发、自检、自测都能直接调——`workcopy`/`logFile` 缺省自动补 `$DSH_HOME` 路径（此前只有 `startSync` 补，外部直调必然报「专用工作副本不可用」）。
  - 日志写 `$DSH_HOME/maid-sync.log`，绝不假装成功。
- **手动触发**：`POST /dsh-maid-preset/sync/now`（同步退避中会返回 409）。

配置在 `cordis.patch.yml` 的 `dsh-maid-preset` entry 下（`enabled`/`idleMinutes`/`repoUrl`/`minImportance` 也可在设置页热改）：

```yaml
config:
  sync:
    enabled: true
    repoUrl: 'https://github.com/Valorine97417/dsh-maid-preset.git'
    branch: 'main'
    idleMinutes: 10
    pollSeconds: 60
    minImportance: 2          # 上船门槛：importance ≥ 此值才推 GitHub（设置页可调 0~9）
    # proxies 已弃用（v0.7.0 起自动探测本机代理，无需手动配置）
    # 留空则交给该机器自己的 git 配置；两者都缺时暂停并写清怎么配，不崩在 auto-detect
    identity:
      name: 'Valorine97417'
      email: 'Valorine97417@users.noreply.github.com'
  seed:
    enabled: true
```

状态文件 `$DSH_HOME/maid-sync-state.json` 记录已同步水位；删掉它即触发一次基准同步。

### 换一台电脑装的时候（给别人用请先读这段）

默认 `repoUrl` 指向本仓库——**别人机器上没有你的凭据，clone/push 必然被拒**。v0.4.1 把这条从「无限重试」改成了「暂停 + 写清怎么改」；v0.7.0 起 `enabled`/门槛等都能在设置页直接调，不必手改 yml：

| 想要的效果 | 怎么改 |
| --- | --- |
| 不上传，只本地存记忆 | 设置页关掉「自动同步」，或把 `repoUrl` 留空（待机） |
| 上传到自己的仓库 | fork 本仓库，`repoUrl` 指向 fork，并在该机器配好 GitHub 凭据 |
| 提交署自己的名 | `sync.identity` 改成本人，或留空走该机器 `git config --global` |
| 不吃下种子记忆 | `seed.enabled: false`——种子是打包时那批记忆，装上就会进会话 |

### 已知坑：v0.7.0 及以前的同步卡死（v0.7.1 已修）

日志里如果见到**反复出现的 `PUSH FAILED（网络类，N 分钟后重试）`**、且间隔一路从 5 分钟涨到 8 小时再没成功过，那多半不是网络——是专用克隆卡在了挂起的 rebase 上：

- 症状：`git -C $DSH_HOME/maid-sync branch -vv` 显示 `* (no branch, rebasing main)`，`main` 落后远端几十个提交；
- 成因：`pull --rebase` 撞上 `memory/` 三件的合并冲突后挂起，workcopy 从此非 fast-forward，而旧版把这类失败归为网络类，只会退避重试；
- 0.7.1 之前的临时解法：`git -C $DSH_HOME/maid-sync rebase --abort && git -C $DSH_HOME/maid-sync reset --hard origin/main`，下轮引擎即可正常推送；
- 0.7.1 起引擎自己会识别并重置，无需手动干预。若仍卡住，按上面两条命令手动对齐后重启 DSH。


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
- `lib/settings.js` — 设置面板后端（人设/记忆清单/同步/GitHub 四卡片的 API 路由）
- `lib/client.js` — 设置面板前端 bundle（含随包 meow client 拼接段；`dsh.client.platform=web` + `immediately`）
- `lib/sync.js` — 记忆自动同步引擎（变更检测、空闲判定、导出、commit/push、失败重试）
- `lib/export.js` — 导出实现（精选门槛 + 筛选快照 + JSON/MD），被手工脚本与自动同步共用
- `lib/meow/` — 内置的 meow-memory（服务端 `index.js` + 前端 `client.js` + prompts）
- `memory/` — 随包分发的记忆种子（精选 db 快照 + 人读导出）
- `defaults/cordis.patch.yml` — 出厂快照（设置页「恢复出厂」用）
- `scripts/export-memory.mjs` — 记忆重新导出工具
- `scripts/smoke-v070.mjs` — v0.7.0 冒烟自测（selfCheck / 统计 / 排序 / 新增+删除闭环）
- peer 依赖 `@deepseek-ai/cordis`（DSH 自带），装机零额外构建；**无运行时外部依赖**

## License

MIT
