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

> **本包只专注两件事：人设预设 + 记忆系统。**
> 小困「人设」的第三层——TTS 音色（提示词、参照样本、朗读文本清洗补丁）——**不在本仓**，统一收在独立仓库 **[`dsh-maid-tts-fix`](https://github.com/Valorine97417/dsh-maid-tts-fix)**（2026-10-15 迁出）。那边是第三方插件 `dsh-xiaomi-tts` 的专属维护层；本仓与它**无代码依赖**，删掉任一个另一个照常跑。

## 设置面板

设置左栏「maid 设置」五卡片，前后端全在本包：`lib/settings.js` 后端路由 + `lib/client.js` 前端注册（`dsh.client.platform=web`，注册进 `settings.section` slot）。

| 卡片 | 作用 |
|---|---|
| 人设编辑 | 读写 `cordis.patch.yml` 的 personaPrefix（改完重启生效）；**恢复备份**（上次保存前快照）/**恢复出厂**（随包 `defaults/cordis.patch.yml`） |
| 记忆清单 | 工作区 / 层级 / 状态过滤，直查真实 `memory.db`；改状态/重要性、删除、**手写新增**；**统计条**（各状态计数 + 可上船数）与**排序**（更新时间/重要性） |
| 同步（GitHub） | repoUrl、idleMinutes、**最长等待上限**（maxWaitMinutes）、**自动同步总闸**、**上船门槛**（importance ≥ 此值才推 GitHub）；测试连接 / 立即同步 / 一键新建私有仓库 |
| GitHub 仓库 | 测试连接 / 一键新建私有记忆同步仓库 |
| **一键自检** | 插件文件、记忆库、同步引擎、git 环境、代理端口逐项体检（✅/❌ 表格）；排查问题先点这里 |

`meow-memory` 自带的「喵记忆」设置段（总开关 / 注入命中 / 反思轮数 / dream 空闲整理）随本包一并注册。

## 内置记忆（meow-memory）

**v0.6.0 起 `meow-memory` 代码直接内置**（`lib/meow/`，源自 [Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) v0.31.0，MIT）：`cordis.patch.yml` 的 entry 解析路径指向包内子模块（`name: 'dsh-maid-preset/meow'` → `exports "./meow"`），Node 解析永远落在本包身上——**卸载独立的 `meow-memory` 包，本包的记忆功能照常**。（≤v0.5.0 为外部依赖形态：entry 按包名解析，卸载即断。）

前端 `meow` client 随本包 `./client` bundle 一并下发，在 maid 的 `apply` 里同步物化（`require('meow-memory')` + `apply(ctx)`），无需宿主单独调度。

### 记忆随包分发

`memory/` 目录里带着一份记忆种子。**出厂默认关（`seed.enabled: false`）**——种子是打包时那批记忆，别人装上不该直接进会话；想要的人自己开。开启后，装到新机器第一次打开会话时，`lib/index.js` 会把它播种到该工作区的 `.dsh-meow/memory.db`。

> 注意：**播种与同步是两条独立的路**——播种看 `seed.enabled` 与包内有没有种子（**不看仓库地址**）；同步才看 `repoUrl`。所以「新设备没配仓库地址」不等于「没有记忆」。

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

### 反思的两道闸（v0.7.3）

每轮反思（`lib/meow/prompts/{zh,en,pt-br}/reflect.md`）在落笔前先过两道闸，治的是「什么都往里塞」和「同一件事记三遍」：

| 闸 | 问什么 | 判据 |
|---|---|---|
| **一 · 值得记吗** | 三个月后在另一个会话里被检索到，还有用吗 | 留：用户偏好与红线 / 被纠正的错误 / 踩过的坑与解法 / 重要决定及其理由 / 项目现状与结论 / 下次还要用的路径与专有名词。不留：一次性操作过程 / 能从文件现场查到的 / 临时中间状态 / 寒暄与心情 / 已被后续进展覆盖的旧状态 |
| **二 · 重复吗** | 是不是已经记过同一件事 | 先 `memory_search` 搜核心词，对怀疑相似的用 `memory_find_similar` 比对；同一件事同一结论 → 只 `memory_update` 补细节；结论变了 → `memory_update` 旧条目（保留 id 便于追溯）；旧条目作废 → 先 `archived` 再写新的；确实是两件事才新建，且关键词避开旧条目 |

「3 条扎实胜过 10 条噪音」——噪音会挤占首轮注入、污染检索结果。真没值得记的就回「无需记忆」，不硬凑。

> `memory_remember` 在字面相似度 ≥ 0.8 时会自动合并（返回 `merged`），但它只看字面，分不清同一个决定的两种说法——**查重仍然要自己做**。

提示词文件每次现读无缓存，改完下一轮反思即生效，不用重启。

## 记忆自动同步 GitHub（v0.7.0 可调门槛 + 自动代理）

不用手动导出+提交。插件加载时会启动同步循环 `lib/sync.js`：

- **触发 = 变更 + 空闲**：每 60s 轮询活库的 `memory.db` / `-wal` mtime；检测到写入就拨回空闲钟，**连续空闲 10 分钟**才导出并推送——避免每轮对话都生成一个 commit 把历史刷爆。
- **最长等待上限（v0.7.5）**：空闲钟有个天然盲区——**长会话里记忆一直在写，空闲钟永远走不满 10 分钟**（每 60s 一次 tick 都会把水位顶回当下），同步会一声不响地停摆几小时。所以再加一条兜底：`maxWaitMinutes`（默认 60）——**距上次成功推送超过这么久就强制推一次**，不管库还在不在写。0 = 关闭（只留空闲钟）。日志会写明「已达最长等待上限 N 分钟（记忆持续写入中），本轮强制推送」。
- **推送前合流远端（v0.7.6）**：多机共用同一个仓库时，旧版会互相顶掉（见下面那条说明）。现在每次推送前，引擎先把远端快照拉下来并回本机活库——**同 id 取 `updated_at` 新的那条，本机独有的一条不动，只加不减**，跨版本快照缺表缺列也不炸。并完再导出，于是推上去的天然就是两台机器的并集。日志会写「已并入远端记忆：新增 N 条、更新 M 条」。这一步失败不阻断推送（首次推、远端还没快照时属正常）。
- **只拉不推（v0.7.7）**：勾上设置页的「只拉不推」（`sync.pullOnly`）后，每轮**只把远端仓库里的记忆并回本机活库**，不导出、不提交、不推送。用途：多台机器共用同一个 `repoUrl` 时，让某台机器**只消费、不产出**——从此不再互相顶掉，还能吃到另一台新写的条目。合并语义与推送前那次完全一致（同 id 取 `updated_at` 新的、本机独有的一条不动、只加不减）。日志写「已并入远端记忆（只拉模式）：新增 N 条、更新 M 条」。远端还没有快照时属正常路径，回报 `no-remote-snapshot`。
- **专用克隆副本**：同步用独立的 `git clone`（默认 `$DSH_HOME/maid-sync`），与插件安装目录、开发目录互不干扰，缺失时自动克隆。
- **幂等**：活库无变化时直接清 pending 跳过，不产生空 commit。
- **精选门槛（v0.6.1 起，v0.7.0 可调）**：推送前统一过滤——`archived` 条目不上船；`importance < 门槛` 的琐碎条目留在本地不上 GitHub。`memory.db` 快照不再是全量 `VACUUM INTO`，改为**按门槛重建筛选库**，防止 archived 随种子在新工作区复活。**门槛在设置页「上船门槛」直接调**（`sync.minImportance`，0~9，默认 2），导出三路热读同一值，改完即生效。
- **自动代理探测（v0.7.0）**：**所有出网先直连**；直连不通再自动检测本机代理（环境变量 → Windows 注册表 `ProxyEnable/ProxyServer` → 常见端口逐个试连通），探到即借道重试。**无需手动配置代理列表**，代理开关/端口变更自动适应。出厂 `proxies: []`——写死端口会在没跑代理的机器上白失败一轮。
- **同步总闸（v0.7.0）**：设置页「自动同步」开关直接控启停（`sync.enabled`），关掉后引擎待命不推，**不必改 yml 文件**。
- **失败分级（v0.4.1）**：仍失败则按错误类型分流——
  - **基线类（v0.7.1）**（`non-fast-forward`、落后远端、rebase 挂起出现 `unmerged files`/`could not apply`）：**自动自愈**——丢弃挂起的 rebase/merge，`reset --hard origin/<branch>` 对齐后重新导出+提交+推送。记忆导出是全量重建，本地历史无保留价值，冲突不该硬 rebase。缺这一刀，workcopy 一旦卡在 `(no branch, rebasing main)` 就永久推不动（0.7.0 及以前正是这样卡死的）。**注意这条自愈单独用是危险的**（`reset` 只换 git 工作树，重做导出读的还是本机活库 → 「以远端为基准」变成「拿本机覆盖远端」，2026-10-16 那次就是这么翻的车）；v0.7.6 起因为推送前已经合流过远端，活库本身就是并集，重做一遍不再丢东西。
  - **网络类**（连接重置、超时、DNS）：指数退避重试 5/10/20/40… 分钟，封顶 8 小时，不再每 60 秒撞一次墙。
  - **配置类**（认证失败、仓库不存在、无写权限、缺 git 身份）：**立即暂停整个同步循环**并写日志说明怎么改。这类错误重试一万次也还是错，只会刷爆日志。
  - 改好配置（尤其是 `repoUrl`）后重启 DSH 即自动恢复；`repoUrl` 变化也会自动清除暂停标记。
- **`syncOnce` 可外部直接调用（v0.7.1）**：设置页手动触发、自检、自测都能直接调——`workcopy`/`logFile` 缺省自动补 `$DSH_HOME` 路径（此前只有 `startSync` 补，外部直调必然报「专用工作副本不可用」）。
  - 日志写 `$DSH_HOME/maid-sync.log`，绝不假装成功。
- **手动触发**：`POST /dsh-maid-preset/sync/now`（同步退避中会返回 409）。
- **设置页按钮修好了（v0.7.2）**：此前「测试连接」走**裸 git**——本机直连 github 白等 21 秒超时，压在 15 秒超时上**必失败**，点一次红一次；「立即同步」更冤——清零空闲钟的代码在读库 mtime **之前**，库刚写过时刚清零的钟又被拨回，`due` 恒假 → 本轮**静默跳过**，接口拿到 `undefined` 只能报 409。两处已修：测试连接直连失败后**借道探测到的代理重试**（同一条 `detectLocalProxies`，缓存 10 分钟），超时放宽到 45 秒；立即同步把清零**挪到 mtime 锚定之后**，跳过也返回正经 `{ok:false, reason, skipped}` 而非 `undefined`。另给所有 git 子进程加 `GIT_HTTP_LOW_SPEED_LIMIT/TIME`——8 秒没进展就认定直连不通，快速让路给代理，不再白等。

配置在 `cordis.patch.yml` 的 `dsh-maid-preset` entry 下（`enabled`/`idleMinutes`/`maxWaitMinutes`/`repoUrl`/`minImportance` 也可在设置页热改）：

```yaml
config:
  sync:
    enabled: true
    repoUrl: ''              # 出厂留空 = 待机（本机地址写在 $DSH_HOME/maid-settings.json）
    branch: 'main'
    idleMinutes: 10
    maxWaitMinutes: 60      # 兜底：距上次成功推送满 60 分钟就强推一次（0=关闭）
    pollSeconds: 60
    minImportance: 2          # 上船门槛：importance ≥ 此值才推 GitHub（设置页可调 0~9）
    # proxies 已弃用（v0.7.0 起自动探测本机代理，无需手动配置）
    # identity 出厂为 null，交给该机器自己的 git 配置；两者都缺时暂停并写清怎么配，不崩在 auto-detect
    identity: null
  seed:
    enabled: false            # 出厂关：种子是打包时那批记忆，别人装上不该直接进会话
```

状态文件 `$DSH_HOME/maid-sync-state.json` 记录已同步水位；删掉它即触发一次基准同步。

### 换一台电脑装的时候（给别人用请先读这段）

**出厂配置按「新设备隐私红线」一律留空**：`sync.repoUrl` / `sync.identity` / `sync.proxies` 都不预设，`seed.enabled: false`。所以别人装完是**待机状态**——本地记忆照常存，但不会往任何人的仓库推、也不会拿别人的身份提交、更不会吃下打包时那批种子记忆。

要启用同步，去**设置 → maid 设置 → 同步（GitHub）**填自己的仓库地址即可（本机地址写在 `$DSH_HOME/maid-settings.json`，是比出厂配置更高的覆盖层）：

| 想要的效果 | 怎么改 |
| --- | --- |
| 不上传，只本地存记忆 | 什么都不用做（出厂默认就是待机）；或保持 `repoUrl` 为空 |
| 上传到自己的仓库 | 设置页填自己的仓库地址（可点「一键新建私有仓库」），并在该机器配好 GitHub 凭据 |
| 提交署自己的名 | `sync.identity` 填本人，或留空走该机器 `git config --global user.name/email` |
| 吃下种子记忆 | `seed.enabled: true`——种子是打包时那批记忆，装上就进会话 |
| 与别人共用一套记忆 | 两台机器填**同一个**仓库地址即汇总到一处；每次推送前会把远端快照并回本地（见下） |

> **多机共用同一仓库是安全的（v0.7.6 起自动合流）**：推送前引擎会先拉取远端快照并回本机活库——同 id 取 `updated_at` 新的那条，本机独有的一条不动，只加不减。所以两台机器各写各的，汇总不会丢东西。
> 历史背景：v0.7.5 及以前没有这一步，导出是「谁推就以谁的活库为准」的**全量重建**，后推的机器会把先推那台的全部记忆顶掉（2026-10-15 实测：一台机器的 457 条被另一台的 203 条顶掉，只在 git 历史里留痕；2026-10-16 又翻过一次）。现在这类覆盖不会再发生；万一在旧版本上翻过车，git 历史里的每份 `memory/memory.db` 快照都能捞回来。

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
- `lib/sync.js` — 记忆自动同步引擎（变更检测、空闲判定、推送前合流远端、导出、commit/push、失败重试）
- `lib/export.js` — 导出实现（精选门槛 + 筛选快照 + JSON/MD），被手工脚本与自动同步共用
- `lib/meow/` — 内置的 meow-memory（服务端 `index.js` + 前端 `client.js` + prompts）
- `memory/` — 随包分发的记忆种子（精选 db 快照 + 人读导出）
- `defaults/cordis.patch.yml` — 出厂快照（设置页「恢复出厂」用）
- `scripts/export-memory.mjs` — 记忆重新导出工具
- `scripts/smoke-v070.mjs` — v0.7.0 冒烟自测（selfCheck / 统计 / 排序 / 新增+删除闭环）
- `scripts/test-merge.mjs` — 推送前合流自测（只加不减 / 同 id 取新 / 跨版本缺列 / 远端无快照）
- peer 依赖 `@deepseek-ai/cordis`（DSH 自带），装机零额外构建；**无运行时外部依赖**

## License

MIT
