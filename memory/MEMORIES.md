# 小困的记忆（导出）

导出时间：2026-10-12T17:29:57.595Z　共 26 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 项目（project）

### 0mv5etatj-bc66c617bf8448ad809597bbda
_重要性 2，状态 stale，项目 dsh-maid-preset，todo_

同步修复验收已通过：2026-10-12 23:44:48 PUSH OK（19 条增量快照 110592B，静置满10分钟准点触发，state 水位干净推进）。仅剩：修复提交 a9bd639 是否 push 到 GitHub（其他机器同款死锁 bug）待老大拍板。

关键词：重启验收、PUSH OK、a9bd639、push GitHub、同步修复、探针、待确认、其他机器、死锁


## 事实（fact）

### 0mv5ivci7-3b1b518c06374d47aa010c34ab
_重要性 2，状态 active，项目 dsh-maid-preset_

整合任务的输入情报：独立包 meow-memory 版本0.31.0、MIT、仓库 Phant0Meow/dsh-meow-memory；产物文件 lib/index.js 服务端 + lib/client.js 前端3041行 + lib/prompts 三语言 + cordis.patch.yml；package.json 与 maid 同构（dsh.bundle.patch + dsh.client.platform=web）。

关键词：meow-memory 包结构、0.31.0、MIT 许可、Phant0Meow、lib/client.js、lib/index.js、prompts 三语言、cordis.patch.yml、dsh.bundle.patch、整合输入、esbuild 产物

### 0mv5iu5rf-66a07f881700496f8da5201929
_重要性 2，状态 active，项目 dsh-maid-preset_

meow-memory 摸底（整合输入）：v0.31.0、MIT 协议；文件=lib/index.js(服务端) + lib/client.js(3041行前端) + lib/prompts/{zh,en,pt-br} + cordis.patch.yml + LICENSE；package.json 形态与 maid 同构：dsh.bundle.patch=./cordis.patch.yml、dsh.client.platform=web、main=lib/index.js、exports ./client。仓库 Phant0Meow/dsh-meow-memory。

关键词：meow-memory 摸底、lib/index.js、lib/client.js、cordis.patch.yml、MIT 协议、dsh.client.platform、包结构、prompts、Phant0Meow、esbuild 构建

### 0mv5iu5ra-78b2eee1e4c54c25b7ae17ffea
_重要性 2，状态 active，项目 dsh_

git push 直连 GitHub 失败（Recv failure: Connection was reset / curl 443 超时）时，先问老大代理是否开着；老大开代理后用 `git -c http.proxy=http://127.0.0.1:7890 push` 借道单次推送，不动全局配置。2026-10-13 实测成功。

关键词：push 失败、Connection was reset、git 代理、127.0.0.1:7890、借道推送、http.proxy、单次代理、github 连通、网络问题排查、credential manager

### 0mv5iu5r4-6f1b1371eade41489e37209a43
_重要性 2，状态 active，项目 dsh-maid-preset_

dsh-maid-preset v0.5.0 已发布：main=a2fd16c、tag=v0.5.0 推上 GitHub（Valorine97417/dsh-maid-preset）。4 提交=1826539 五件套feat + 009eb41 无限重试 + 52430cb inject声明 + a2fd16c README 设置面板章节。发布惯例照 v0.4.1：版本提交信息 + README 版本章节 + git tag。

关键词：v0.5.0、tag 发布、GitHub push、版本提交、README 章节、设置面板五件套、a2fd16c、发布惯例、main 分支、远端同步

### 0mv5iu5qy-e3e91ffab2684e2eb2d10b1772
_重要性 3，状态 active，项目 dsh-maid-preset_

用户原话（m01049）："现在把这个版本更新上传github，然后我们来解决meow-memory整合进dsh-maid-preset里。并且卸载meow-memory也不影响dsh-maid-preset里的meow-memory功能。" 上传已完成（tag v0.5.0），整合是进行中任务：目标=meow-memory 代码进 dsh-maid-preset 自持，卸载独立 meow-memory 包后功能不受影响。待解决：两包同名 entry 冲突、cordis.patch.yml entry 归属、数据 memory.db 路径不变。

关键词：meow-memory 整合、dsh-maid-preset、卸载不影响、自包含、entry 冲突、cordis.patch.yml、记忆插件合并、两包共存、整合任务、功能自持

### 0mv5ieaq6-06558faf727d4cc896146b904a
_重要性 3，状态 active，项目 dsh_

DSH client 插件必须在模块导出声明服务依赖：factory 返回 {inject: ['slots'], apply}（meow-memory 为 var inject=["slots","sessions","remote.settings"] 经 module.exports 导出）。缺 inject 声明则宿主不给该 fiber 的 isolate 表填 slots 标识，ctx.slots 访问必抛 cannot get property "slots" without inject，且重试永远无效（结构性不可见非时序）。dshmarket 另有 package.json dsh.client.inject=外部模块请求清单，两者不是一回事。

关键词：client 插件、inject 声明、isolate 表、without inject、slots 服务、服务依赖、factory 返回、meow-memory 对照、设置面板注册、dsh 插件开发、Proxy 拦截、web client

### 0mv5hl8d4-d76aa106918d48248c2ef9ec7d
_重要性 2，状态 active，项目 dsh-maid-preset_

老大意向（2026-10-13）：把 meow-memory 的依赖与 patch 配置段整合进 dsh-maid-preset 一并安装，避免两个包分开管理——「meow-memory不是装进dsh-maid-preset里面了吗？装回依赖+补回patch配置段。这两个也整合进dsh-maid-preset不就好了」。当时先做恢复未展开整合，涉及上游双仓库打包方式待议。

关键词：整合 meow-memory、打包方式、双仓库、一键安装、依赖合并、patch 段、dsh-maid-preset、一体包、用户意向、安装形态

### 0mv5epdia-8a88d5bd49e048bab26c3731a9
_重要性 2，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 仓库已配本地 git 身份（Valorine97417 / Valorine97417@users.noreply.github.com，仅本仓库不碰全局），提交不再需要内联 -c；另注意该仓库 origin 历史上曾误指向本地副本 C:\Users\Kayle\.dsh\maid-sync，2026-10-12 已改回 GitHub 真身。

关键词：Author identity unknown、git身份、commit失败、Valorine97417、内联-c参数、全局配置缺失、提交、user.email

### 0mv5dc9fm-46923791a47c4b30871cd5f11f
_重要性 3，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 自包含改造（2026-10-12）：meow-memory 不再是独立插件——profile 依赖与 bundles 条目均已移除，pnpm install 已剪掉 profile/node_modules/meow-memory（lockfile 无残留）；代码由 maid 包自带：npm install --omit=peer --ignore-scripts --no-package-lock 装入 Works\dsh-maid-preset\node_modules\meow-memory@0.31.0。解析机制：bundle 入选后 dependencyClosure 以该 bundle 的 package.json 为锚做 Node 查找（link 经 junction 到真实目录），profile cordis.patch.yml 的 id:meow-memory 行（promptLang zh + homeDir D:\DeepSeek Harness\meow-memory）作为覆盖并入 maid 插入的行。备份 package.json.bak-20261012-selfcontained。当晚重启验收通过：记忆工具可用=从 maid 包加载的铁证。如果你确实需要更多细节，可以直接去聊天记录里搜索相关关键词。

关键词：meow-memory、自包含、dependencyClosure、bundles、node_modules、junction、promptLang、homeDir、pnpm剪除、重启生效、link安装

### 0mv5epdhz-9675f22a3ff74947b87c748820
_重要性 2，状态 active，项目 dsh-maid-preset_

对话轮次会写 memory.db-wal（探针实测与发言时刻精确重合），同步的"空闲10分钟"实际=聊天停下10分钟才推送。

关键词：memory.db-wal、对话轮次、写库、空闲10分钟、maid-sync、推送时机、探针、meow-memory、聊天停下

### 0mv5c3g35-bcf6091ba89f46939a6b85b18a
_重要性 2，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 安装形态：desktop profile 以 link:D:/DeepSeek Harness/Works/dsh-maid-preset 安装，junction 在 profiles/desktop/node_modules/dsh-maid-preset；插件需同时满足三件事才生效：目标目录存在、依赖在 package.json、且在 dsh.profile.bundles 列表里。2026-10-12 工作区克隆目录丢失导致 junction 断链、bundles 条目被插件管理器剪掉；已从 ~/.dsh/maid-sync 重新克隆恢复、补回 bundles，当晚重启验收生效（记忆工具/maid 预设/同步引擎均正常）。

关键词：dsh-maid-preset、安装、bundles、junction、link安装、desktop profile、maid-sync、克隆、断链、插件管理器、cordis.patch.yml

### 0mv5drmgy-abcfa2d3c46f4022891c4a010d
_重要性 2，状态 active，项目 全局_

web_search 端点认证失败（HTTP 401，api key ****eceb 无效），搜索不可用；需老大在 设置→插件→Web search 改端点或配 DEEPSEEK_SEARCH_BASE_URL。

关键词：web_search、搜索、401、认证失败、端点、api key、DEEPSEEK_SEARCH_BASE_URL、插件配置

### 0mv5drmgt-d3426deaa914459fa4de55d402
_重要性 1，状态 active，项目 全局_

工作区 ACL 缺 WRITE_OWNER 致命令全挂，已修复；详情与还原命令见 D:\DeepSeek Harness\acl-recovery\ 下 acl-report-1c6fa9dca3b64eb7a7f85a4006058339.jsonl 的 ROLLBACK 行。

关键词：ACL、WRITE_OWNER、SetNamedSecurityInfoW、修复、acl-recovery、ROLLBACK、还原命令、工作区命令失败

### 0mv5drmgn-fdf6c8c9a6594ef5b8206b8eea
_重要性 3，状态 active，项目 dsh-maid-preset_

用户原话（m00262）："我需要dsh-maid-preset里面就包含这些内容，不要依赖其他插件。"——要求记忆功能由 dsh-maid-preset 自包含提供，不依赖独立 meow-memory 插件；这是自包含改造的直接动因。

关键词：自包含、不依赖其他插件、meow-memory、dsh-maid-preset、用户要求、原话、记忆功能、内置、改造动因

### 0mv5drmfv-67c4c885c7ec44fba98ccad7ed
_重要性 2，状态 active，项目 dsh_

DSH profile 配置合成机制：cordis.yml 恒为空 []；启动时在内存里按序合成——各 bundle 的 cordis.patch.yml（由 package.json 的 dsh.profile.bundles 选层）→ profile cordis.patch.yml 覆盖层 → --patch 叠层。bundle 依赖由 dependencyClosure 以各 bundle 自己的 package.json 为锚做 Node 查找（link 包经 junction 到真实目录）。patch insert 行的 name 可写 ./ 相对路径，被 anchorInsertedPluginNames 锚定到 patch 文件旁。

关键词：cordis.yml、bundles、配置合成、dependencyClosure、cordis.patch.yml、link包、junction、anchorInsertedPluginNames、patch层、package.json、profile

### 0mv5c3g3a-5421c1c9fc434289b87ae80a93
_重要性 2，状态 archived，项目 全局_

【已作废，见 0mv5chiu】旧判断"GitHub 不通"错误：真凶是全局死代理 http.proxy=127.0.0.1:7890，已 unset；直连 github.com 实际可用，credential-manager 凭据有效，fetch 成功，远端=本地=ece2c58。

关键词：github、代理、7890、网络不通、git、clone失败、proxy、push失败

### 0mv5chiu8-551e10f1334944f9ae2f224d06
_重要性 2，状态 active，项目 全局_

【更正】GitHub 直连可用：全局死代理 http.proxy=127.0.0.1:7890（老大关代理所致）曾令 git 全挂，已 unset（还原：git config --global http.proxy http://127.0.0.1:7890）；credential-manager 凭据有效，裸 fetch 直连成功，远端=本地=ece2c58；镜像 ghfast.top/gh-proxy.com 通但私库无凭据无用。

关键词：github、代理、7890、git、直连、凭据、fetch、镜像、credential-manager、网络不通、proxy、ece2c58


## 经验（lesson）

### 0mv5ivlw4-59f849cac8d0466fb6bd43378d
_重要性 2，状态 active，项目 全局_

同一轮并行调用多个 memory_remember 会撞生成 id（返回相同 id），后写的被静默吞掉或误报"已合并"——批量写记忆必须串行（一条完成再下一条），写后核对回执 id 各不相同。2026-10-13 反思任务 4 条并行写丢 2 条，串行补写才落库。

关键词：memory_remember 撞号、并行写入、id 冲突、静默丢失、串行写记忆、反思任务、回执核对、已合并误报、批量写入、记忆工具坑

### 0mv5iukon-293fda1140c441b3840382c6a6
_重要性 2，状态 active，项目 dsh_

git push 直连 GitHub 失败（Recv failure: Connection was reset / curl 443 超时）时，先问老大代理是否开着；老大开代理后用 `git -c http.proxy=http://127.0.0.1:7890 push` 借道单次推送，不动全局配置。2026-10-13 实测成功。

关键词：push 失败、Connection was reset、git 代理、127.0.0.1:7890、借道推送、http.proxy、单次代理、github 连通、网络排查、credential manager

### 0mv5esl6d-bde38578b94d4864b0f08fd9f2
_重要性 2，状态 active，项目 全局_

教训：memory_remember 返回的 id 只显示前 8 位、同批写入会撞车；要精确 update 先用 memory_search 拿全 id（形如 0mv5epdie-ae82af6dea5240ac8ff3e9e3d7）。

关键词：memory id、显示截断、撞车、memory_search、全id、memory_update、前8位、hex后缀、写记忆

### 0mv5drmg7-11c670d213c24f8d8a503c24bc
_重要性 2，状态 active，项目 dsh-maid-preset_

教训：state 文件 pending:false 只是未落盘（变更检测分支只写内存、syncOnce 才 saveState），既可能引擎健康在等空闲窗、也可能是真故障——2026-10-12 即排查出空闲钟死锁（见 0mv5ennq）。定生死要读源码与日志，别凭落盘状态下结论。

关键词：同步、pending、maid-sync、state文件、内存状态、空闲10分钟、saveState、误判、syncOnce

### 0mv5epdi5-292bf6a0351949b1af597192f8
_重要性 2，状态 active，项目 dsh_

教训：宿主 cordis 插件无热重载——改包内 lib/*.js 后运行中宿主不生效（改后日志无新"同步已启动"），须重启 DSH；`dsh plugin` CLI 只是 pnpm 薄壳（help 透传 pnpm），管包不管运行中宿主。

关键词：热重载、重启DSH、dsh plugin、pnpm薄壳、宿主、cordis插件、代码改动不生效、同步已启动、CLI

### 0mv5ennqe-676263bfbb06472fa282fefe9f
_重要性 3，状态 active，项目 dsh-maid-preset_

sync.js 空闲钟死锁（2026-10-12 修复）：lib/sync.js 判定分支比的是 m≠lastSyncedMtime（同步水位）而非上轮观测值，导致每 tick 用 Date.now() 重置 lastChangeAt，due 永远为 false——除首启基线（lastChangeAt=0 立即到期）外 syncOnce 永不执行，一整天不推送。修复：lastChangeAt=Math.min(Date.now(), m) 锚定库文件最后写入时刻。仿真验证：旧逻辑 15 轮 null，新逻辑静置库第 0 轮到期、刚写库第 9 轮到期。已提交待 push。

关键词：sync.js、空闲钟、死锁、lastChangeAt、Date.now重置、syncOnce、不推送、mtime、idleMinutes、仿真验证

### 0mv5drmgi-245853b1c1ad4b0bae13c722d6
_重要性 1，状态 active，项目 全局_

教训：本会话 bash 工具实际执行 PowerShell（没有 head/&&/printf，命令分隔用 ;）；pwsh 工具名注意别敲成 pash，手滑会白耗轮次。

关键词：bash工具、PowerShell、pwsh、pash、head不存在、&&报错、工具名拼写、printf

### 0mv5drmgd-27f3810ef71e4134a37d50b72b
_重要性 2，状态 active，项目 dsh_

教训：从 app.asar 按头部偏移提取文件可能拿到错位内容（cordis-plugin-loader 路径下竟是 Anthropic SDK 代码），提取后必须用特征串验证，可用 PowerShell 独立读交叉验证；改用物理内容指纹（全文件 indexOf 特征串）取证更可靠。

关键词：app.asar、提取、偏移错位、特征串、内容指纹、cordis-plugin-loader、交叉验证、asar取证、错位

