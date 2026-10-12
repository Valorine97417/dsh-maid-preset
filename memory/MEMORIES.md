# 小困的记忆（导出）

导出时间：2026-10-12T18:42:43.577Z　共 22 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 用户（user）

### 0mv5ldirl-3b2819d21c4840e3a6e875d026
_重要性 3，状态 active_

老大对记忆库的偏好：按重要度精选，只保留重要的记忆上传 GitHub，「没必要的就不保留了」——2026-10-13 执行过一次精选（30→20，淘汰 9 条 archived）。日常写记忆也要克制，别囤低价值条目。

关键词：记忆精选、只保留重要、没必要的不保留、重要度排序、记忆上传、GitHub 快照、记忆精简、用户偏好、archived 淘汰

### 0mv5j3kg2-0e277a664c8841e693373bc54c
_重要性 3，状态 active_

老大在开新工程前要求先对账保回退：「先对本地这边的内容跟github上的内容做核对。查漏补缺一下。以免这个整合出错回不来档」——有破坏性的改造（整合/重构）动手前，先完成本地↔远端全量对账（工作区/stash/ahead-behind/tags/文件清单），确保远端有满血回档点再开工。

关键词：回档点、查漏补缺、对账、本地远端核对、可回退、破坏性操作前置、满血恢复、git 安全、动手前备份、老大习惯


## 事实（fact）

### 0mv5iu5qy-e3e91ffab2684e2eb2d10b1772
_重要性 3，状态 stale，项目 dsh-maid-preset_

meow-memory 整合进 dsh-maid-preset（B方案）已完结：代码 vendor lib/meow/ + entry name='dsh-maid-preset/meow' + client 拼接随包物化 + profile 三件套已摘（-28包）。四提交：179506c 方案B、da45b2c client拼接+immediately、c753b4c inject并集、cab2b74 报错防叠加三刀（meow段load幂等try/catch、maid disposer接管meow cleanup、registerSection降级warn源+产物同步）。tag v0.4.0/v0.4.1/v0.5.0/v0.6.0 全推远端。终验全绿：物化日志、喵记忆设置段、右键菜单「记忆参与」项、会话行图标、memory_search 活。

关键词：meow-memory 整合、dsh-maid-preset、卸载不影响、自包含、entry 冲突、cordis.patch.yml、记忆插件合并、两包共存、整合任务、功能自持

### 0mv5ieaq6-06558faf727d4cc896146b904a
_重要性 3，状态 active，项目 dsh_

DSH client 插件服务依赖声明契约：模块 factory 须返回 {inject, apply} 并声明所需服务（meow-memory 独立时为 var inject=["slots","sessions","remote.settings"] 经 module.exports 导出），缺声明则宿主不给该 fiber 的 isolate 表填标识，ctx.<服务> 必抛 cannot get property ... without inject（结构性不可见，重试永远无效）。关键补充（v0.6.0 实测）：宿主只为「直接调度的 entry」按其 exports.inject 填表；整合场景下用 require('模块') 拿到 exports 再手动 apply(ctx)，宿主不会为目标模块的 inject 填宿主 fiber——所需服务必须并进调用方自己的 inject 声明（并集）。

关键词：client 插件、inject 声明、isolate 表、without inject、slots 服务、服务依赖、factory 返回、meow-memory 对照、设置面板注册、dsh 插件开发、Proxy 拦截、web client

### 0mv5iu5rf-66a07f881700496f8da5201929
_重要性 2，状态 active，项目 dsh-maid-preset_

meow-memory 摸底（整合输入）：v0.31.0、MIT 协议；文件=lib/index.js(服务端) + lib/client.js(3041行前端) + lib/prompts/{zh,en,pt-br} + cordis.patch.yml + LICENSE；package.json 形态与 maid 同构：dsh.bundle.patch=./cordis.patch.yml、dsh.client.platform=web、main=lib/index.js、exports ./client。仓库 Phant0Meow/dsh-meow-memory。

关键词：meow-memory 摸底、lib/index.js、lib/client.js、cordis.patch.yml、MIT 协议、dsh.client.platform、包结构、prompts、Phant0Meow、esbuild 构建

### 0mv5hl8d4-d76aa106918d48248c2ef9ec7d
_重要性 2，状态 active，项目 dsh-maid-preset_

老大意向（2026-10-13）：把 meow-memory 的依赖与 patch 配置段整合进 dsh-maid-preset 一并安装，避免两个包分开管理——「meow-memory不是装进dsh-maid-preset里面了吗？装回依赖+补回patch配置段。这两个也整合进dsh-maid-preset不就好了」。当时先做恢复未展开整合，涉及上游双仓库打包方式待议。

关键词：整合 meow-memory、打包方式、双仓库、一键安装、依赖合并、patch 段、dsh-maid-preset、一体包、用户意向、安装形态

### 0mv5dc9fm-46923791a47c4b30871cd5f11f
_重要性 3，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 自包含改造（2026-10-12）：meow-memory 不再是独立插件——profile 依赖与 bundles 条目均已移除，pnpm install 已剪掉 profile/node_modules/meow-memory（lockfile 无残留）；代码由 maid 包自带：npm install --omit=peer --ignore-scripts --no-package-lock 装入 Works\dsh-maid-preset\node_modules\meow-memory@0.31.0。解析机制：bundle 入选后 dependencyClosure 以该 bundle 的 package.json 为锚做 Node 查找（link 经 junction 到真实目录），profile cordis.patch.yml 的 id:meow-memory 行（promptLang zh + homeDir D:\DeepSeek Harness\meow-memory）作为覆盖并入 maid 插入的行。备份 package.json.bak-20261012-selfcontained。当晚重启验收通过：记忆工具可用=从 maid 包加载的铁证。如果你确实需要更多细节，可以直接去聊天记录里搜索相关关键词。

关键词：meow-memory、自包含、dependencyClosure、bundles、node_modules、junction、promptLang、homeDir、pnpm剪除、重启生效、link安装

### 0mv5epdhz-9675f22a3ff74947b87c748820
_重要性 2，状态 active，项目 dsh-maid-preset_

对话轮次会写 memory.db-wal（探针实测与发言时刻精确重合），同步的"空闲10分钟"实际=聊天停下10分钟才推送。

关键词：memory.db-wal、对话轮次、写库、空闲10分钟、maid-sync、推送时机、探针、meow-memory、聊天停下

### 0mv5drmgn-fdf6c8c9a6594ef5b8206b8eea
_重要性 3，状态 active，项目 dsh-maid-preset_

用户原话（m00262）："我需要dsh-maid-preset里面就包含这些内容，不要依赖其他插件。"——要求记忆功能由 dsh-maid-preset 自包含提供，不依赖独立 meow-memory 插件；这是自包含改造的直接动因。

关键词：自包含、不依赖其他插件、meow-memory、dsh-maid-preset、用户要求、原话、记忆功能、内置、改造动因

### 0mv5drmfv-67c4c885c7ec44fba98ccad7ed
_重要性 2，状态 active，项目 dsh_

DSH profile 配置合成机制：cordis.yml 恒为空 []；启动时在内存里按序合成——各 bundle 的 cordis.patch.yml（由 package.json 的 dsh.profile.bundles 选层）→ profile cordis.patch.yml 覆盖层 → --patch 叠层。bundle 依赖由 dependencyClosure 以各 bundle 自己的 package.json 为锚做 Node 查找（link 包经 junction 到真实目录）。patch insert 行的 name 可写 ./ 相对路径，被 anchorInsertedPluginNames 锚定到 patch 文件旁。

关键词：cordis.yml、bundles、配置合成、dependencyClosure、cordis.patch.yml、link包、junction、anchorInsertedPluginNames、patch层、package.json、profile

### 0mv5chiu8-551e10f1334944f9ae2f224d06
_重要性 2，状态 active，项目 全局_

【更正】GitHub 直连可用：全局死代理 http.proxy=127.0.0.1:7890（老大关代理所致）曾令 git 全挂，已 unset（还原：git config --global http.proxy http://127.0.0.1:7890）；credential-manager 凭据有效，裸 fetch 直连成功，远端=本地=ece2c58；镜像 ghfast.top/gh-proxy.com 通但私库无凭据无用。

关键词：github、代理、7890、git、直连、凭据、fetch、镜像、credential-manager、网络不通、proxy、ece2c58


## 经验（lesson）

### 0mv5drmgi-245853b1c1ad4b0bae13c722d6
_重要性 2，状态 active，项目 全局_

教训：本会话 bash 工具实际执行 PowerShell（没有 head/&&/printf，命令分隔用 ;）；pwsh 工具名注意别敲成 pash，手滑会白耗轮次。

关键词：bash工具、PowerShell、pwsh、pash、head不存在、&&报错、工具名拼写、printf

### 0mv5ldz1j-46cf77a2d5704a39aa3e94234d
_重要性 2，状态 active，项目 dsh-maid-preset_

记忆同步引擎 push 失败会指数退避（failCount 高时卡数小时），/sync/now 返回 409 拒绝手动触发。绕过法：主仓库跑 scripts/export-memory.mjs 重新导出 memory/ 三件套 → git 带 -c http.proxy 借道提交推送 → 副本 C:\Users\Kayle\.dsh\maid-sync reset --hard origin/main 清掉脏 sync 提交防下次 rebase 冲突。

关键词：sync 退避、409、failCount、手动导出、export-memory.mjs、maid-sync 副本、reset hard、记忆同步、push 失败重试、代理借道、三件套

### 0mv5kwd2h-a89ca57010564d35a0d9c33e66
_重要性 2，状态 active，项目 dsh-maid-preset_

改插件 client.js 并推送后若立即重启 DSH，可能撞 rev 竞态窗口：boot 请求的 graph rev 与文件实际 rev 对不上→404→web boot: 1 entry did not activate / import failed 弹框。诊断：读最新 crash-*.log + curl 验证 graph rev 与单文件 GET 是否 200；稳态一致则重启一次即恢复，非插件代码问题。

关键词：web boot、entry did not activate、import failed、rev 竞态、bundle 404、重启崩溃、graph rev、crash log、stat-poll、插件推送时机

### 0mv5jqah3-c7ae093652904e79a89c39f5ff
_重要性 3，状态 active，项目 dsh_

esbuild 打包产物 vendor 挪目录，必搜必改相对根引用：meow lib/index.js 里 createRequire(import.meta.url)("../package.json")（取 version）与 pluginRootDir() 的 resolve(dirname, "..")——原位是包根，挪深一级全变指错，前者启动即崩。改法两级跳 "../../"。先 grep "\.\." / createRequire / import.meta 排查再挪。prompts 类同目录资源（dirname+"prompts"）随文件走则安全。

关键词：esbuild 产物、vendor 挪目录、createRequire、package.json 相对路径、pluginRootDir、import.meta.url、启动即崩、相对根引用、两级跳、prompts 路径、拷贝排查、打包产物移植

### 0mv5jq3yx-4b0d1369713c43dfa5bf0f6c7a
_重要性 3，状态 active，项目 dsh_

DSH client bundle机制（v0.6.0整合实测）：宿主只扫 profile bundles 列表内各包的 package.json dsh.client 声明（单 ./client 入口）生成 boot graph——bundle出列即client失联（graph从75→74掉meow-memory）；bundle惰性物化（first used 才执行apply）；dsh.client.immediately=true 可令立即物化（asar L377363）。整合解法=小插件client拼接进主包./client文件尾（顶层只有load()调用零冲突）+主包apply内 require('meow-memory')+apply(ctx) 复刻宿主物化调度。

关键词：dsh.client、bundles 扫描、boot graph、immediately 字段、惰性物化、client 拼接、ModuleLoader.load、require 复刻物化、单 client 入口、graph 74条、bundle 机制、web 插件加载

### 0mv5iukon-293fda1140c441b3840382c6a6
_重要性 2，状态 active，项目 dsh_

git 所有远端操作（push/fetch/ls-remote）在直连失败（Recv failure: Connection was reset / 443 超时）时都带 `-c http.proxy=http://127.0.0.1:7890` 借道，不动全局配置；先问老大代理是否开着。对账用 `git rev-list --left-right --count origin/main...HEAD`（左=远端独有 右=本地独有）。2026-10-13 实测：fetch/ls-remote 忘带代理同样超时，不只 push。

关键词：git 远端操作、Connection was reset、http.proxy、127.0.0.1:7890、借道代理、push fetch ls-remote、对账、rev-list 差异、github 连通、网络排查

### 0mv5ivlw4-59f849cac8d0466fb6bd43378d
_重要性 2，状态 active，项目 全局_

同一轮并行调用多个 memory_remember 会撞生成 id（返回相同 id），后写的被静默吞掉或误报"已合并"——批量写记忆必须串行（一条完成再下一条），写后核对回执 id 各不相同。2026-10-13 反思任务 4 条并行写丢 2 条，串行补写才落库。

关键词：memory_remember 撞号、并行写入、id 冲突、静默丢失、串行写记忆、反思任务、回执核对、已合并误报、批量写入、记忆工具坑

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

