# 小困的记忆（导出）

导出时间：2026-10-15T11:32:57.235Z　共 256 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 用户（user）

### 0mv9708is-b00b6818269849ec86c077a6a3
_重要性 2，状态 active_

老大收尾三问（2026-10-15 观察到）：会话末尾老大常连着问「可以上船的记忆弄上去了吗」+「还有什么可以提交更新上去吗」。小困的正确应对是**不等他问就先做三件事**：①对账记忆同步水位（活库条数 vs 副本条数，滞留就补推，见 lesson 0mv807tr）；②审计仓库/工作区，给出「必做 / 该做 / 该清」三档清单让他挑；③**仓库有未提交的改动就主动 commit**（2026-10-15 实测：老大说「继续」时，正确动作是把 11 个文件打包提交 + bump 版本，而不是空等）。老大要的是「该收尾的一次打包干净」，不是留一堆散活。
**注意**：commit 了不等于该 push——push 到 GitHub 是外发动作，等老大发话再推。

关键词：收尾三问、记忆上船、还有什么可以提交、审计清单三档、主动 commit、bump 版本、push 要等老大发话、收尾打包干净

### 0mv809zcp-994591e69d9643d688dedce6b1
_重要性 3，状态 active_

老大的收尾习惯（2026-10-14 观察到）：会话结束/下班前会问一句「可以上船的记忆弄上去了吗」——即关心本轮的跨会话记忆有没有真正推上 GitHub（dsh-maid-preset）。小困的应对：**不要等他问，本轮末主动核对并补推**——查 `maid-sync-state.json` 水位与 `maid-sync.log` 有无 PUSH 行，与活库条数对账（该上船数＝status≠archived 且 importance≥minImportance 的条数），发现滞留就用官方 `exportMemory` 接口补推。理由：自动同步的空闲钟会被长会话的持续写入顶住（见 lesson 0mv807tr），收尾时最容易滞留。

关键词：下班前问记忆上船、收尾习惯 核对推送、主动补推不等人问、记忆条数对账、maid-sync 水位检查、长会话滞留、会话结束收尾清单

### 0mv7x7d2r-8bb11a4834f84d3e956ea1f39e
_重要性 3，状态 active_

老大偏好：零信息增量的产物不留。原话「是文本的话，就不保存了」——落盘的东西必须有真内容，抄一份自己刚输进去的提示词没有价值；清理时连逻辑一起删干净，不留「万一有用」的兜底。

关键词：零信息增量、不留兜底、清理偏好、不保存、产物落盘、抄自己、逻辑一起删、干净收尾、无价值产物、老大拍板

### 0mv6hmzmz-cc259dd4c657434d92e7b2d7f1
_重要性 3，状态 active_

老大的习惯：功能做完后会主动问「还有什么可以提交更新上去吗」——他要的是把该收尾的一次打包干净（进仓库/补文档/清残留），而不是留一堆散活。小困的应对：先审计仓库工作区状态 + 列出「该做未做」清单并排序，让老大挑，不擅自全做；老大一旦说「全清」，就是真放手让删——小困可自行执行，但保命备份（官方原始 asar 等）要自己判断留下并说明理由。

关键词：提交前问还有什么、打包干净、收尾习惯、该做未做清单、列清单让老大挑、全清就是放手删、保命备份自己留、仓库工作区审计、老大的工作节奏、不擅自全做

### 0mv53o3ct-e753f875f5ef4069a12670dcf1
_重要性 2，状态 active_

用户要求：排查类问题要查到根因并给出可执行修复，不接受停在分析层面（原话「动手！修复它」）；反复追问进度时是在催结果，应继续推进而不是重复解释。

关键词：工作要求、动手修复、查到根因、可执行方案、不停在分析、追进度、催结果、推进而非解释

### 0mv519njm-81949a37fc9846c29610a98bb4
_重要性 3，状态 active_

老大工作偏好：复杂可视化/多条内容偏好收成独立 HTML 网页文件，在浏览器打开看，不在对话正文堆长卡。

关键词：工作偏好、交付形式、HTML 网页、浏览器查看、不在对话堆长卡、独立文件、数据看板、记忆全录、用户习惯、可视化交付

### 0mv50piax-4ebd02626a3b463996f7620306
_重要性 2，状态 active_

对外提交（GitHub issue 等）以「Valorine 老大的 AI 女仆「小困」」自称，不用"用户侧助理"等说法；用户 GitHub 账号 Valorine97417，PAT 存 Windows 凭据管理器 git:https://github.com，可 git credential fill 读取。

关键词：GitHub、Valorine97417、credential fill、PAT、凭据管理器、自称、AI女仆、小困、对外身份、issue提交


## 项目（project）

### 0mv9gb5j4-b14831ce2df744bdac8ddf5a94
_重要性 3，状态 active，项目 dsh-maid-comfyui，decisions_

两条老流按**各自模式**做的提速实测（老大要求：不能用图生图那套基准测，原话 m01213「他们各自的保质量的前提下提高生图速度 测试不要用 图生图的，那不符合他们自己的生图模式。」+ m01238「图像编辑，你就按图像编辑做几个示例测试给他跑。文生图也是同理。」；脚本 _staging\bench_mode.mjs edit|t2i）：
**图像编辑流**（e8ca96f2，拿参考图改字场景，1248×1248）：steps=14 → 174.5s（另次复测 334.1s），文字清干净、铜金边框与瓶形线稿完整；**steps=18 → 废图**（几乎纯白、只剩极淡轮廓）；steps=25 → 421~424.5s，质量好但慢一倍多。→ **定参 steps=14，已覆盖入库**。
**文生图流**（d4134a7a，纯文本出图）：steps=14 / 18 / 25 耗时**全是约 57s，几乎无差别**——steps 调低没有收益，**保持原值**，瓶颈在提示词而不在步数（盒面残留模糊小字要靠提示词解决）。
两流共同点：出图质量方差主要来自 seed，坏 seed 换 seed 别调参。编辑流比文生图慢一个量级（174~424s vs 57s），一律 mode: async。

关键词：图像编辑提速、文生图提速、steps 14 定稿、18 步出废图、25 步慢一倍、57 秒无差别、各自生图模式测试、不能套图生图基准、1248 分辨率、bench_mode.mjs、async 后台任务、已覆盖入库

### 0mv7li2r0-f52a8ca3c706464b9e6bc10513
_重要性 3，状态 active，项目 dsh-maid-comfyui，ops_

dsh-maid-comfyui 部署（2026-10-15 核）：源码在 D:\DeepSeek Harness\Works\dsh-maid-comfyui（私有仓库 main，HEAD **a1cf40f**，版本 **0.5.5**；**本地领先 origin/main 一个提交未 push**）。profile 依赖写 link:（改源码即生效）。**构建**：pnpm install → build:host（tsc 出 lib/）→ build:client（tsdown 出 client/client.js）；lib/ 与 client/ 被 .gitignore 排除不入库，仓库只有 prepack 没有 prepare。**离线自测六个脚本全绿**：test-store-params / test-skillpack / test-transfer / test-convert / test-launch / test-idle（19 项）。**换机安装**走 Release 挂 tgz 资产（最新是 v0.5.4，0.5.5 未打包）；私有仓库连 release 资产下载也要 PAT，匿名 404 属正常。**运行侧配置**在 profile cordis.patch.yml：comfyuiDirs 指向 D:\ComfyUI\ComfyUI_windows_portable\ComfyUI、launchDir 指向便携版根、launchCommand 用 pythonw 无黑窗并带 --output-directory 指到 Works\QwenImage-2.1models\outputs、idleShutdownMinutes 30；**Windows 路径必须单引号**（双引号 \C 非法转义会炸 overlay）。ComfyUI 画布目录 D:\ComfyUI\ComfyUI_windows_portable\ComfyUI\user\default\workflows（3 个文件：maid_qwen_image_2_1_i2i.json + 两个 mine_* 老画布）。模型库 D:\DeepSeek Harness\Works\QwenImage-2.1models。**本机无全局 git 身份**，commit 要 `-c user.name=... -c user.email=...` 兜底。

关键词：dsh-maid-comfyui 部署、HEAD a1cf40f、版本 0.5.5、未 push 领先一个提交、link 挂载改源码即生效、离线自测六脚本、Release 挂 tgz、cordis.patch.yml 单引号、idleShutdownMinutes 30、workflows 目录三个文件、无全局 git 身份

### 0mv970sak-e393183979fb4962a9eb4982bd
_重要性 3，状态 stale，项目 dsh-maid-comfyui，todo_

dsh-maid-comfyui 收尾清单（2026-10-15 审计 → 老大批复「必做先弄 1 和 2，3 要留着给跑保质量的前提下提高生图速度然后覆盖 api 工作流。该做全弄。该清清理。」）→ **全部执行完毕**：
【必做】①图生图转 API 入库 ✅（id 99df705a-c359-40e0-91c1-8404d0067758，7 参数）；②技能包 ✅（SKILL.md 写在 dataDir/skills/qwen-image-2-1-99df705a/）；③两个旧画布文件没删，而是按老大的话**用来做各自模式的提速测试，测完把结论覆盖回插件库对应的两条 API 工作流**（编辑流 steps→14、默认提示词换成去文字指令；文生图 steps 不变、默认提示词换成主图06 版）。
【该做】④两条老流 steps 25→14 ✅；⑤默认提示词换成实际内容 ✅。
【该清】⑥Works 根 ~90 个临时脚本 ✅（留 _ui2api.mjs / _import_i2i.mjs）；⑦outputs 废图 ✅（52 张 60M → 13 张 17M）；⑧_staging ✅（51M → 1.3M，剩备份）。
**另完成**：idle 看门狗改造（会话结束即关 + 空闲兜底 30 分钟 + 排队前自动拉起），commit a1cf40f，版本 0.5.5，**待重启 DSH 实测**。

关键词：收尾清单已完结、必做该做该清、图生图入库 99df705a、技能包 SKILL.md、旧画布改造覆盖、steps 25 改 14、outputs 清理 52 到 13、临时脚本清理、idle 改造 a1cf40f、待重启实测

### 0mv7li2qo-e25629d53130476e8d5808f546
_重要性 2，状态 active，项目 dsh-maid-comfyui，overview_

dsh-maid-comfyui：小困自家 ComfyUI 驱动插件（私有仓库 Valorine97417/dsh-maid-comfyui，MIT）。让 DSH Agent 智能驱动本地或远程 ComfyUI 生成内容，带工作流/资产管理面板、按工作流技能包挂载、配套 skill 与同源媒体代理（/comfyui/media 路由，浏览器不直连 ComfyUI）。配置键：baseUrl(默认 http://127.0.0.1:8188)、apiKeyEnv、dataDir、comfyuiDirs、launchCommand、launchDir、idleShutdownMinutes(默认 **30**，2026-10-15 从 10 改；语义也变了——主触发是「会话轮结束即关」，这个值是空闲兜底)、outputDir、mediaHost、skillsDir。它是第三方 dsh-comfyui（fandc520）的分支，peer 范围多加了 ^0.2.0-rc.2。

关键词：ComfyUI 插件、私有仓库 dsh-maid-comfyui、baseUrl 8188、idleShutdownMinutes 默认 30、launchCommand、comfyuiDirs、同源媒体代理、技能包挂载、fandc520 分支、peer 0.2.0-rc.2

### 0mv9gb5kk-502c2512cf72459286a86356b0
_重要性 3，状态 active，项目 dsh-maid-comfyui，todo_

dsh-maid-comfyui 待办（2026-10-15）：
①**重启 DSH 实测 idle 新语义**——host 侧改动必须重启才生效（lib/ 与 client/ 产物已 build 好，test-idle 19 项全绿），要实测「会话结束即关 + 下次生图自动拉起」两条路。**重启会中断当前会话，只能等老大自己重启**。
②~~仓库未提交~~ **已提交 2026-10-15**：commit **a1cf40f**「feat(idle): 会话任务结束即关，空闲降为兜底，排队前自动拉起」，11 个文件（src/idle.ts、src/config.ts、src/index.ts、src/client/i18n.ts、src/client/settings.tsx、src/skill.ts、scripts/test-idle.mjs、README.md、README.en.md、CLAUDE.md、package.json），222 插入 / 41 删除。**package.json 版本 0.5.4 → 0.5.5**。**未 push**（本地 main 领先 origin/main 一个提交），等老大发话。
③提醒过老大：turn/end 每轮都触发，连着生图会反复「关掉再拉起」；真嫌启动那几秒烦就把 idleShutdownMinutes 填 0（那是两种自动关闭一起关，面板「立即停止」不受影响）。

关键词：重启 DSH 实测、idle 新语义验证、commit a1cf40f、未 push 领先一个提交、版本 0.5.5、11 个文件、test-idle 19 项、反复关掉再拉起、填 0 关掉两种自动关闭、重启会中断会话

### 0mv7z0c69-2d7ae5d47b3549e9b4a213c975
_重要性 3，状态 active，项目 dsh-maid-lane-fix，overview_

dsh-maid-lane-fix（2026-10-15 现状 **v0.3.1**，main HEAD `3cd6367`，另有 `ofm-upstream` 分支 `6bcf2e6`）＝给 dsh-our-free-model 打的两件套，独立于上游：
**① 中间层**（包一层 globalThis.fetch，只对 opencode.ai 的请求规范化，其余逐字节透传，不改上游一个字节；0.3.0 起接管五件事：/zen/v1→/inference/v1、session 形状、补 x-opencode-session-id、UA 剥版本+保 opencode/ token、工具指纹；对已合规请求是空操作）。
**② 上游补丁器**（`lib/ofm-patch.js` + `scripts/patch-ofm.mjs`，修 EAC 通道测不出首字延迟的 7 处，跨 client.js / src/http.js / index.js）。补丁器是显式 CLI（`--dry-run` / 落盘 / `--verify` / `--restore`），锚点字节级失配即整批中止；原文件备份进 `.lane-fix-orig/`（**该备份会被 sweep / 重装清掉**——所以仓库里另存 `baseline/ofm-2.3.0/{client.js,index.js,src__http.js}.gz` + SHA256SUMS 当还原依据，gzip -9 合计 179208 字节，解压 sha256 与上游原文一致）。
**档案目录**：`docs/`（上游 3 笔补丁的 patch + 说明）、`baseline/`——两者都**故意不进 `files` 白名单**（git clone 看得到、pnpm add 装不到）。
**挂载与验证**：挂载源只有 profile `dsh.profile.bundles` 一处，profile 里是 junction 链接，改源码即时生效；冒烟 **118 条**全过（`sh "D:/DeepSeek Harness/Works/_staging/node.sh" scripts/smoke.mjs`）。仓库 **private**；2026-10-15 曾被归档导致 push 403，已用 GitHub API `PATCH /repos/… {archived:false}` 解档。README 已同步上游 v2.3.0 现状（五道门修法已进正式 release，本机不必再靠中间层救急，但中间层留着对已合规请求是空操作）。

关键词：dsh-maid-lane-fix、中间层、globalThis.fetch、不改上游字节、inference/v1 重写、x-opencode-session-id、UA 剥版本、ofm-patch.js 补丁器、EAC 首字延迟、还原基线 baseline、冒烟 118 条、ofm-upstream 分支、v0.3.1

### 0mv7lii80-555116f760ea451ca83028d03b
_重要性 2，状态 stale，项目 dsh-maid-comfyui，todo_

待办【已完结 2026-10-14】：换机安装路径选定第③条——Release 挂打好包的 tgz 资产（v0.5.4 已建，资产 dsh-maid-comfyui-0.5.4.tgz 3249171 字节，带凭据下载 sha256 与本地一致）。①②（产物入库 / 发 npm）未采用。重启验证已于 2026-10-14 完成（工具注册、面板入口、设置页分区均在）。注意：私有仓库连 release 资产下载也要 PAT，匿名 curl 返回 404 属正常。

关键词：重启验证 comfyui、插件列表异常消失、面板入口、设置页 ComfyUI 分区、release 补 tgz、避免克隆构建

### 0mv68r8sl-f47af945a8cc442396d7bd69f9
_重要性 3，状态 stale，项目 dsh-maid-scenery，todo_

dsh-maid-scenery To do：① 面板注入选择器/类名/激活态——已完成（v0.1.2+v0.1.4，老大复验）；② 亮暗切换行——老大撤销，不做；③ 可信模式默认开+隐徽章——已完成（raw-html v7.3 自理）；④⑤ 侧边栏按钮/输入框图片——随正源 0.1.7 消失，老大确认；⑥ 视频层重复抢路由——已完成（v0.2.2 前彻底卸掉独立 dsh-video-skin）；⑦ 音乐目录挪出 node_modules + 自动认第一首——已完成（v0.2.2，见 fact「音乐正本」）。**已无待定项**：link: 依赖那条经采纳为「不改」，scenery 保持 git+https 远程依赖，更新用 pnpm update。

关键词：scenery 待办、todo 清单、全部完成、link 依赖不改、git+https 保持、pnpm update 刷部署、视频层重复已解、音乐目录已搬

### 0mv9ftbrq-f35c547c616b4ba78a40c05adc
_重要性 2，状态 active，项目 dsh-maid-preset，structure_

dsh-maid-preset 模块与配置层次：**lib/** 下 sync.js（同步引擎：60s 轮询活库 mtime 含 -wal，连续空闲 10 分钟才导出+commit+push；0.7.1 起带基线自愈）、export.js（导出实现：minImportance 精选门槛 + 筛选快照 + JSON/MD 三路）、settings.js（设置面板：testRepoUrl 测试连接、createRepo 一键新建仓库）、index.js（入口 + seedWorkspace 播种）。**三层配置优先级**：设置文件 $DSH_HOME/maid-settings.json > profile 的 cordis.patch.yml 顶层覆盖段 > 包内出厂 cordis.patch.yml。专用克隆副本在 $DSH_HOME/maid-sync；状态水位在 maid-sync-state.json，日志 maid-sync.log。**更新方式**：github: 依赖，改源码不等于改线上，必须 pnpm update 重装才进 profile。

关键词：preset 模块结构、lib/sync.js、lib/export.js、lib/settings.js、seedWorkspace 播种、三层配置优先级、maid-settings.json、maid-sync 克隆副本、maid-sync-state 水位、pnpm update 才生效、github 依赖是拷贝

### 0mv9ftbrc-eb3ada4e7a6c4d80a61aa374bb
_重要性 3，状态 active，项目 dsh-maid-preset，overview_

dsh-maid-preset＝小困的人设预设 + 记忆同步引擎（GitHub Valorine97417/dsh-maid-preset，**当前 v0.7.4**）。两件事合一：① 给人设/预设层注入小困人设（三处文本同源：system-prompt personaPrefix、preset-maid 完整定义、registry 默认 maid），并承载 meow-memory（由它声明依赖并 insert entry 行，不单独进 profile bundles）；② 内置记忆同步引擎，把本机活库精选后推 GitHub 实现跨会话/跨机记忆。**出厂一律留空**（v0.7.4 起）：repoUrl='' / proxies=[] / identity=null / seed.enabled=false —— 新设备装完即待机，不推别人仓库、不拿别人身份 commit、不吃种子记忆。本机照常同步播种，靠 profile 的 cordis.patch.yml 顶层 `- id: dsh-maid-preset` 覆盖段给值（机器级配置，不进仓库）。

关键词：dsh-maid-preset、人设预设插件、记忆同步引擎、v0.7.4、出厂留空、新设备待机、本机覆盖段、profile cordis.patch.yml、承载 meow-memory、三处人设同源、repoUrl 归属开关

### 0mv9ftbqy-3133d81cdb3c41288b3dba7872
_重要性 2，状态 active，项目 dsh，decisions_

「强制刷新后插件 import failed / 弹窗崩溃」机制链（2026-10-12 定位，规避有效）：渲染侧 loader 把 fiber 卸载误判为「用户手动禁用」写入 entry.disabled；重建闸门 `async refresh(){ this.fiber || this.disabled || await this.init() }` 此后永久跳过 ⇒ entry.fiber 恒 undefined ⇒ boot 审计报 `${id}: import failed`（空话，importError 表为空）⇒ reportFatal 弹窗。真因不可见是两处叠加：import 缺行的同步抛错不进错误记录表，且 ctx.logger.error 不落 console。**规避：插件管理器装/更新/禁用后重启 DSH；崩溃弹窗直接点「重启」。** 根治需官方改审计文案与内部替换逻辑（未做）。相关：同一批故障里「白屏」由 asar 前端补丁 v8 吞掉变量声明引起，v9 已修。

关键词：强制刷新崩溃、import failed 弹窗、entry.disabled 误判、refresh 闸门跳过、fiber 恒 undefined、boot 审计空话、reportFatal、装完插件要重启、崩溃弹窗点重启、白屏 v8 吞声明

### 0mv9ftbqk-17cc80b02c6a412e824775b062
_重要性 2，状态 active，项目 dsh，overview_

「dsh」项目＝DSH 桌面端本体与其插件体系的运维，不是某个小困插件。涵盖：插件安装/更新/卸载与 profile 配置、界面元素溯源（某个按钮/图标是哪个插件来的）、asar 前端补丁、宿主环境与命令通道问题、沙箱与权限。老大常以「树上多出来的东西是啥」「把插件装/更新一下」「这个坏了」这类问题进来。本机相关路径：DSH 安装目录 D:\DeepSeek Harness（app.asar 在 resources\）、DSH_HOME C:\Users\Administrator\.dsh、profile 在 profiles\desktop、自家插件源码在 Works\dsh-maid-*。排查类问题老大要求查到根因 + 可执行修复，不接受停在分析。

关键词：DSH 桌面端运维、插件安装卸载更新、界面元素溯源、profile 配置、app.asar 补丁、宿主环境、沙箱命令通道、DSH 安装目录、DSH_HOME、profiles desktop、排查要求根因修复

### 0mv90p6v0-def573f667694521a1b40c93b0
_重要性 2，状态 active，项目 dsh-maid-patch-kit，overview_

dsh-maid-patch-kit（v0.1.0，public）＝社区插件维护层。老大定的收录原则：「专门给这三个插件做维护补丁且不影响他们自己更新的。作者停更了，就收录到里面去。」（目标 better-sidebar / ego-browser / video-understand）。理由：改 node_modules 等于没改——pnpm 重铺会静默抹掉（实测「Packages: +1 -29」后 dsh-video-understand 七处修复全没了）。做法：打 pnpm patch 不 fork，补丁正本进 patches/，登记 patchedDependencies + lockfile hash，此后任何 install 自动重打；代价是上游升版会 ERR_PNPM_UNUSED_PATCH，得跑 upgrade 重做。启动时三项体检（登记/hash/落盘）。附带 scripts/venv.mjs 重建 dsh-video-understand 的 .venv（补丁管不了）。
**三个目标插件 2026-10-15 已全部装上**：dsh-xiaomi-tts 3.0.8 / dsh-video-understand 0.5.2 / dsh-ego-browser 0.8.6 / dsh-better-sidebar 0.26.0（侧边栏底座，装了它 ego-browser 才改挂右侧边栏 Tab）。

关键词：dsh-maid-patch-kit、社区插件维护补丁、pnpm patch、打补丁不 fork、上游停更收录接管、better-sidebar 已装、ego-browser、video-understand、ERR_PNPM_UNUSED_PATCH、启动自检 登记 hash 落盘、venv 重建

### 0mv92kneg-63fb210d681d40aa8e1a47955b
_重要性 2，状态 active，项目 dsh-maid-preset，overview_

dsh-maid-preset v0.7.4（2026-10-15，**已推 GitHub 并装进本机**）：出厂留空（新设备隐私红线）+ 出网统一先直连再探代理。①出厂 cordis.patch.yml / defaults 两份：repoUrl='' / proxies=[] / identity=null / seed=false → 新设备装完即待机；②本机照常同步播种，改为写在 profile cordis.patch.yml 的顶层覆盖段（机器级配置，不进仓库）；③出网策略统一（gitWithFallback / testRepoUrl / createRepo 三处，端口候选 PROXY_PORT_CANDIDATES）；④README 同步，含「多机共用同仓库会互相顶掉」警告。提交：21bd620（主体）+ b4d361b（修 smoke 假红）；profile 已 pnpm update 到 0.7.4，无需重启的纯 JS 改动。验证：语法全过、三份 YAML 解析通过、自检 13 项全 ✅。

关键词：v0.7.4、出厂留空、隐私红线、本机覆盖段、先直连再探测代理、README 更新、多机共用仓库警告、冒烟通过、5 文件改动、已推 GitHub 并装进本机、21bd620 b4d361b

### 0mv6exrsd-a4243cec926842a5b95682536c
_重要性 3，状态 active，项目 dsh-maid-vcp，overview_

该插件已整体改名 dsh-raw-html → dsh-maid-vcp（2026-10-14 老大在 GitHub 端重命名仓库 Valorine97417/dsh-maid-vcp，本地同步：Works 目录、git remote、profile 依赖与 bundles 均改 dsh-maid-vcp（link: 安装 + junction 直连源码，改仓库即时生效），node_modules 旧 junction 已删重建）。接管停更上游 plolpl789/dsh-raw-html，含本地修复（面板0风格接管RPC、hover白底白字、可信模式默认开+徽章隐藏、风格库仅 abyss-maid）。
**当前版本 0.6.12**（2026-10-15 核）：0.6.8=补丁 v10.2 追加式写入根治 asar 热替换崩溃；0.6.9=v6.39 混排自愈线上验收后废除「一条消息只允许一种格式」戒严令（lib/index.js 提示词/DESIGN.md §4 第12条/README 双语四处同步改写，commit 5baea86 已推 GitHub）；asar 前端补丁 v6.41 已装并回读校验。

关键词：dsh-maid-vcp、插件改名、link 安装、junction 直连源码、接管上游 plolpl789、0.6.12、v10.2 追加式写入、v6.39 混排自愈、戒严令废除、asar 补丁 v6.41、本地修复清单

### 0mv90a1lq-8bab1d4ca2dc4d3f8c44023b6b
_重要性 2，状态 active，项目 dsh，ops_

本机 desktop profile 插件水位（2026-10-15 晚核，bundles **23 条**）：
**自家 7 包**：preset 0.7.4（github 依赖，更新用 pnpm update）、vcp 0.6.12（link，asar 补丁 v6.41 已装并回读校验）、scenery 0.2.2（git+https）、comfyui 0.5.4（link）、lane-fix 0.2.0（link）、tts-fix 0.4.0（link）、patch-kit 0.1.0（link）。
**新装配套上游 4 包**（宿主侧插件）：dsh-xiaomi-tts 3.0.8（tts-fix 的目标）、dsh-video-understand 0.5.2（patch-kit 目标①，另建 .venv 31 个 py 包）、dsh-ego-browser 0.8.6（patch-kit 目标②）、**dsh-better-sidebar 0.26.0（2026-10-15 装，社区侧边栏底座，让 ego-browser 从浮动球改挂右侧边栏 Tab）**。四包均已进 bundles 且 entry 已在 cordis.yml。
**前 3 包仍待重启生效**；better-sidebar 的 host 半已热加载（`POST /sidebar/api` 有应答）、client 半硬刷新即生效。
dsh-maid-plugins 是官网静态站，老大指定不装。

关键词：插件水位、desktop profile bundles 23 条、dsh-better-sidebar 0.26.0、dsh-ego-browser 0.8.6、dsh-xiaomi-tts 3.0.8、dsh-video-understand 0.5.2、小困 7 包、vcp 0.6.12、link 挂载、cordis.yml entry、待重启生效

### 0mv98so2k-c3b7464e268f48059a56db6d60
_重要性 2，状态 active，项目 dsh-maid-lane-fix，quotes_

老大原话（m01335）："该做，1 补上。2本地这些可以推到lane-fix 上吗？该清，3、4清理，5是相关哪个插件的？" —— 小困的编号清单（必做/该做/该清三档）交上去后，老大按编号逐项批复。其中第 2 项「本地这些」指 `Works/dsh-our-free-model` 领先上游的 4 个 commit，问的是能否推去 lane-fix；小困答：不推 commit 本体（上游 main 已等价实现，会把补丁器+中间层的仓库语义搅浑），打成 `docs/ofm-upstream-patches.{patch,md}` 存档即可。

关键词：老大原话、该做该清、编号批复、推 commit 本体、上游补丁存档、docs 归档、不建 fork、仓库语义、m01335

### 0mv90p6uo-fafa5f6167e44625bb669bb6e4
_重要性 2，状态 active，项目 dsh-maid-tts-fix，overview_

dsh-maid-tts-fix（v0.4.0，public）＝朗读与音色维护层，专治第三方插件 dsh-xiaomi-tts。① 补丁：加 stripTtsStyleBlocks 按块剥 style/script（上游单行正则 /<[^>\r\n]*>/g 跨不过换行，VCP 卡片 CSS 被当正文念出来），并支持 <!--tts:…--> 标记只念重点；② playbackOwnerId：把「UI 看在哪个会话」与「播放归属谁」拆开，切会话不再掐断朗读；③ 音色提示词定稿与参照样本说明收在 voice-refs/（.wav 不入库）。补丁走 pnpm patch（正本 patches/、登记 pnpm-workspace.yaml 的 patchedDependencies、hash 落 lockfile）。配套：注释不显形是 dsh-maid-vcp 的 v6.40/v6.41，两个补丁必须配套打。

关键词：dsh-maid-tts-fix、dsh-xiaomi-tts、朗读念出 CSS、stripTtsStyleBlocks、tts 标记、playbackOwnerId、切会话不打断朗读、音色提示词、voice-refs、pnpm patch 补丁、patchedDependencies

### 0mv916aai-2fd9842db7ad46f189724b9e34
_重要性 2，状态 active，项目 dsh-maid-plugins，overview_

dsh-maid-plugins（public）＝小困插件官网：单页静态站（index.html + assets/，无构建无依赖无外链字体），收 7 个 dsh-maid-* 插件展示门户，线上 https://valorine97417.github.io/dsh-maid-plugins/（GitHub Pages，.nojekyll 保住 assets 下划线路径）。其中 scenery 与 comfyui 是私有仓库，卡片上标注「私有」。老大指定：官网是展示站，不进 profile 安装。

关键词：dsh-maid-plugins、小困插件官网、静态站、GitHub Pages、插件门户、index.html、展示站不安装、七大插件展示、私有仓库标注、nojekyll

### 0mv91acpl-e50e2e8c618f4b28b9adc4e8b1
_重要性 3，状态 active，项目 dsh-maid-preset，quotes_

老大原话（2026-10-15，记忆同步的设计主张）：「需要记忆看仓库地址。新设备安装人设预设正常安装好，仓库地址默认为空，需要引导配置仓库地址。如果仓库不一样就不会同步记忆，而是另外存储他个人的记忆。仓库一样就会同步记忆，共享记忆。」
→ 设计含义：repoUrl 即「记忆归属」的开关。地址为空＝本机独有、各自存个人记忆；填了别人的地址＝并入对方记忆池共享。新设备体验要求：装完预设地址默认空 + **主动引导用户去配置**（不能默认替人指向某个仓库，也不该让人以为记忆会自己同步）。代码侧现状：lib/sync.js 无 repoUrl 时进入待机（不报错、不启动循环），设置面板有「GitHub 仓库」卡片可测试连接/一键新建；「引导」这一步尚未有显式首启提示。

关键词：记忆看仓库地址、仓库地址默认为空、引导配置仓库地址、同仓库共享记忆、异仓库各存个人记忆、repoUrl 归属开关、新设备安装、人设预设、首启引导、同步待机

### 0mv91pm85-e73285551be14f6eb64c3c2523
_重要性 3，状态 stale，项目 dsh-maid-preset，todo_

【已实施并上船 2026-10-15 · v0.7.4，commit 21bd620 + b4d361b】老大主张「新设备装完预设，仓库地址默认空 + 引导配置」——落地结果：
①**出厂一律留空**：preset 的 cordis.patch.yml 与 defaults/cordis.patch.yml 两份都改成 sync.repoUrl='' / proxies=[] / identity=null / seed.enabled=false。新设备装完＝待机，不推任何人仓库、不拿别人身份 commit、不吃种子记忆。
②**本机不受影响**：profile 的 cordis.patch.yml 新增顶层 `- id: dsh-maid-preset` 覆盖段，显式写全 repoUrl / identity / seed=true。查证过本机 C:\Users\Administrator\.gitconfig **不存在**，身份只能由这层给——不补会把本机同步弄断。另核实 restorePersona（恢复出厂）只抽取人设区段写回，不动 sync 配置，本机覆盖安全。
③**引导**：README「换一台电脑装的时候」改为引导去设置页填地址；旧描述「默认 repoUrl 指向本仓库」已删，并补「多机共用同仓库会互相顶掉」警告。
④**已上船**：两笔提交已推 GitHub，profile 也已 pnpm update 到 0.7.4（纯 JS 改动，无需重启）。

关键词：出厂配置写死仓库地址、cordis.patch.yml repoUrl、新设备默认空、首启引导配置、identity 写死、proxies 127.0.0.1:7890、seed 默认开、引擎默认值 vs 出厂配置、记忆推给人家、设计主张符合性、defaults 那份同样、新设备隐私

### 0mv97ag56-998cdc70718741bc97276a6e5e
_重要性 2，状态 stale，项目 dsh-maid-lane-fix,dsh，todo_

dsh-maid-lane-fix 待办（2026-10-15 更新）：① 归档那件**已了结**——仓库已解档，0.3.0/0.3.1 三个 commit 推上 main；随后又发现 README 里「本机出口过不去」的错结论（4ec65f5 已撤并补真判据），一并推上去了。② `D:/DeepSeek Harness/Works/dsh-our-free-model`（老大工作区源码副本）**领先 origin/main 4 个 commit**（6bcf2e6 / c5f7559 / af5c444 / 0d06056，UA 剥 token + 铸造 session 前缀 + counter clamp + 删临时脚本），origin 指向上游 Ebony-Vinyl（无写权限）。**小困判断：不值得建 fork，也不必搬进 lane-fix**——上游 main 已用等价实现覆盖了这三点（UA_REFUSED 正则、mintSessionId 直铸、request id 固定 +1n 无需 clamp），活代码价值已在 lane-fix 的 lib/lane.js 里。老大若坚持留档，可打成 patch 放 lane-fix 的 docs/；待老大定夺。

关键词：dsh-our-free-model 工作区副本、领先 4 个 commit、6bcf2e6、无写权限、不值得建 fork、上游已有等价实现、UA_REFUSED、mintSessionId、打 patch 留档、待定夺

### 0mv985134-d50a928382614048bf6a8201ff
_重要性 2，状态 stale，项目 dsh-maid-lane-fix,dsh，todo_

2026-10-15 收尾审计的三件待办（老大尚未挑）：① lane-fix 仓库只挂了 `v0.2.0` 一个 tag，0.3.0/0.3.1 都没打——小困建议补（一分钟的事）；② `D:\DeepSeek Harness\Works\dsh-our-free-model` 工作副本本地 ahead 4（那 3 笔已存档成 patch），可复位回上游 main 保持一致，或留着当探测现场，属取舍题待老大拍；③ Works 顶层 207 个 `_` 临时文件 + `_staging` 86 个探针脚本可清（node.sh 必须留），属扫地，等老大说「全清」。

关键词：收尾审计待办、lane-fix 补 tag、v0.2.0 是唯一标签、工作副本 ahead 4、复位回上游 main、Works 顶层临时文件、86 个探针脚本、等老大挑、全清

### 0mv7zy7ew-3a4885985ec04894baff4b56b8
_重要性 3，状态 stale，项目 dsh-maid-lane-fix,dsh，todo_

【已完成 · 2026-10-15 15:0x】老大拍板「全动」（原话 m00461）＝三条路一起走：① 把上游 main 代码换进部署目录（node_modules 现为 2.2.0 + EAC 补丁 7 项全 applied）；② 换 tgz（_staging 重打成 2.2.0.tgz，EAC 补丁已打进，profile package.json + pnpm-lock.yaml 的 specifier/version/integrity 一并改到 2.2.0）；③ 中间层接管新端点（lane-fix 0.3.0→0.3.1，补 PR #330 三道门 + tools 字段缺席缺口）。**验收结果：免费车道在本机出口已通**——部署副本自带请求 → POST /inference/v1 → 200 出流；真链路 UA `dsh/0.1.7 opencode/1.18.31` → 200；中间层对合规请求是空操作（normalizedRequest 返回 null），对脏请求规范化后 → 200。此前「五道门全对仍 403」的旧结论作废（真因是探针模型已下架，400 被误读）。

关键词：lane-fix 归档、push 403、Unarchive、0.3.1 待推、本地 commit 2a2afb1、换仓库、dsh-our-free-model 工作区副本、6bcf2e6、2.1.0 待同步、GitHub read-only

### 0mv7xlibf-4ec7d16bc0474d2a86a31c77ea
_重要性 2，状态 active，项目 dsh-maid-comfyui，todo_

参考图口（2026-10-15 现状，旧信息已更新）：**图生图新语义版** maid_qwen_image_2_1_i2i.json 里，参考图只开一个口——送进 TextEncodeQwenImage21 的 images.image_1 当**外观参考**（不是待编辑底图），初始 latent 用 EmptyLatentImage 空白画布。模型本身支持十几张（子图定义 images.image_1..image_10），老大做产品图精修若需多图参考（产品图 + 材质/背景参考），需在 _ui2api.mjs 产出的 API 工作流里补 images.image_N 输入并重入库。原「图像编辑只开 image/image_2 两口」的说法属于旧工作流（已删）。

关键词：参考图口、image_3、多图参考、产品图精修、images.image_N、扩参考图、TextEncodeQwenImage21、重入库、外观参考单口、空白画布起画

### 0mv4vttac-84a7419e2d264b2e8eb705ba7e
_重要性 2，状态 active，项目 dsh，ops_

本机 DSH 桌面环境（2026-10-15 核）：DSH_HOME=C:\Users\Administrator\.dsh，profile 在其 profiles\desktop（无 web profile）。**dsh CLI 实际存在**：D:\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd（旧记忆曾记「无 dsh 命令行」，已纠正）。Node/pnpm 在 C:\Users\Administrator\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\ 下（node v24.21.0、pnpm 11.7.0，均为 dsh 自带运行时；shell 里裸 node/npm 不在 PATH）。PowerShell 7.6.6 在 C:\Program Files\PowerShell\7，与系统 5.1 并存。

关键词：DSH 桌面环境、DSH_HOME、profiles desktop、PowerShell 7.6.6、profile 配置、无 dsh 命令行、pwsh.exe、安装位置、5.1 并存

### 0mv7yitb3-0f6b11776ec449b1a83b9ec111
_重要性 3，状态 stale，项目 dsh，quotes_

老大 2026-10-14 原话（our-free-model 两处补丁的处置方向）：「两处补丁，像是小困插件之前搞融合层那样。独立出来配合使用呢？」——主张**别硬改上游文件**，改用 scenery 那种融合层思路。**已落地**：建成独立插件 `dsh-maid-lane-fix`（v0.1.0，运行时中间层），老大 2026-10-14 回「批准，做成自家的小插件。」名字小困暂定 lane-fix，不合意可改；已挂进 profile，待重启验证。详见 project「dsh-maid-lane-fix」。

关键词：融合层思路、独立出来配合使用、老大原话、不硬改上游、已落地 dsh-maid-lane-fix、批准做成自家小插件、名字可改、重启验证待办

### 0mv7xl6np-bdcc3a84245e415e9fe598ad29
_重要性 3，状态 active，项目 dsh-maid-comfyui，quotes_

User said (m02625)：「你用的是哪些工作流？用这两个工作流就可以了。不要弄其他的。」（附截图：Qwen Image 2.1 图像编辑 + 文生图两张模板卡）
User said (m02860)：「图生图带提示词。」
User said：「是文本的话，就不保存了。」

关键词：只用这两个工作流、不要弄其他的、图生图带提示词、是文本就不保存、范围收窄、用户原话、模板卡截图

### 0mv67kuh7-43cd2f09282b456fb5f3b1d1ff
_重要性 3，状态 active，项目 dsh-maid-scenery，overview_

dsh-maid-scenery 已交付到 v0.2.2（2026-10-14，commit f3e652e 已推 GitHub，部署已 pnpm update 到 0.2.2）：v0.1.x 修过面板行挂不上、切视频没反应、亮色过亮、撤掉代管 raw-html；v0.2.0 整合 maid-atelier 主题与 video-skin 视频层随包分发；v0.2.1 出厂基线集中一处（SKIN_DEFAULTS）+ 无管理器兜底；v0.2.2 背景音乐正本搬进 $DSH_HOME/dsh-maid-scenery/music/、包内降级为硬链接镜像、music 字段缺席时自动填第一首，新增 lib/music.js，README 补「怎么认出重复的视频层」，冒烟 103→114 条全绿。皮肤走正源 @smalltailqwq 0.1.7 + 管理器 0.1.6。dsh-video-skin 旧独立包已于 2026-10-14 彻底卸载（bundles 里那条也删了）。

关键词：dsh-maid-scenery 版本、0.2.2、f3e652e、lib/music.js、音乐正本、冒烟 114、SKIN_DEFAULTS、整合 maid-atelier、dsh-video-skin 已卸、交付进度、README 认重复视频层

### 0mv6ey659-56b2a79761174859b8be90da43
_重要性 2，状态 stale，项目 dsh-maid-vcp，todo_

dsh-maid-vcp 待办：① 修 patch-frontend-asar.cjs 的 asar 目录头 jsonLen 对齐 bug（整段升级 C 模块后 Electron 读 preload 错位崩溃），修好再重装 v6.39 混排自愈。【已完结 2026-10-14：① 已根治=补丁 v10.2 追加式写入+头部保长+tasklist 进程探测（0.6.8，commit dae0f1e 已推 GitHub）；② v6.39 已重装进线上 asar 并经重启线上验收（混排卡片+表格+加粗+列表正常渲染），「一条消息只允许一种格式」戒严令随之废除（0.6.9，commit 5baea86，四处源头 lib/index.js 提示词/DESIGN.md §4 第12条/README 双语 全部改写，按先生旧例「不进记忆、更新进 raw」）。】

关键词：待办、补丁器对齐 bug、jsonLen、v6.39 重装、上游回并、link 依赖待定、asar 回滚

### 0mv6ey64x-3990f4fd4a554a4187883b69c7
_重要性 3，状态 active，项目 dsh-maid-vcp，decisions_

dsh-raw-html 本地化决策：① 依赖协议用 link: 而非 file:/github:（link 只建符号链接永不覆盖本地改动；file 会拷进 node_modules 遮蔽源码；github 每次 install 重拉 tarball 正是本次整包回滚事故的成因）；② lockfile 手工对齐（importers 段 specifier/version 写完整 link: 路径，删掉 packages/snapshots 里的 tarball 条目）；③ node_modules 下用 junction 指向源目录，改源码即时生效；④ 版本号 0.6.0 → 0.6.4 对齐 CHANGELOG。

关键词：link 优于 file、依赖协议决策、lockfile 手工对齐、junction 部署、防整包覆盖、github tarball 回滚、specifier version、版本号对齐 CHANGELOG

### 0mv6exx6b-5a994c01fa1c49eaab513d9ac5
_重要性 3，状态 active，项目 dsh-maid-vcp，quotes_

老大原话（2026-10-13）：「raw插件创作者已经停更了，你帮我弄成本地的。然后上传到我的github里。依赖什么的都加上，避免github下载安装又要重新修复。」——dsh-raw-html 本地化 + 自建 GitHub 仓库的起因与验收标准。

关键词：用户原话、创作者停更、弄成本地的、上传到我的github、依赖都加上、避免重新修复、本地化起因、验收标准

### 0mv6ixcsm-77c13c9abcfc477780636dcc33
_重要性 2，状态 active，项目 dsh-maid-scenery，decisions_

dsh-maid-scenery 是融合层不含其他插件（9 个文件），maid-atelier 与 dsh-video-skin 都靠 profile 直接装。老大问「不能本地打包进 scenery 里上传吗」——技术上能（maid-preset 内置 meow-memory 是先例），但 maid-atelier 美术为 CC BY-NC-SA 4.0 且正源 LICENSE 明写「Bundling artwork into source code, CSS, data URLs, or lib/ does not change its license」，SA 条款会传染要求同许可发布，与 scenery 的 MIT 冲突；dsh-video-skin 是 MIT 可打包（大头是 10.6MB background.mp4）。

关键词：打包进 scenery、融合层不含其他插件、CC BY-NC-SA 4.0、Bundling artwork does not change its license、相同方式共享传染、MIT 冲突、dsh-video-skin MIT、background.mp4 10.6MB、一条命令装齐、引用不搬运

### 0mv6i655j-cd79bf814b334ddab89103bd6b
_重要性 2，状态 active，项目 dsh-raw-html，quotes_

老大原话（2026-10-13）：「全做」——回应小困列出的五项待提交清单（补丁器进仓库 / 测试去硬编码 / README.en 补 fork 说明 / 清悬空风格引用 / CHANGELOG 重号），随后全部完成并推送 v0.6.5 @c7348e5。

关键词：用户原话、全做、五项待提交、一次全做完、v0.6.5 起因

### 0mv6b8c3q-f2e56c4712094aaca130275093
_重要性 2，状态 stale，项目 dsh，todo_

待老大决定：dsh-raw-html 的 styles/_BASELINE.md（未命中风格时的兜底基准库）是否也清掉——小困倾向保留（它不是风格，是工具），等指示。

关键词：_BASELINE 兜底库、是否清掉、待老大决定、未命中兜底、风格库清理后续、保留工具文件

### 0mv4x5eev-621292668468445db82944ceec
_重要性 2，状态 active，项目 dsh，ops_

调试 DSH 插件 loopback RPC 的方法：浏览器 connection.rpc.call = HTTP POST 到 http://127.0.0.1:19387/<channel去开头斜杠>/<endpoint>，body 为 {type:'client-request', rpcId:uuid, method:endpoint, payload}，响应信封 {rpcId, result:{ok, value}} 且 rpcId 必须匹配；可从命令行直打验证 Host 侧 handler 是否注册（源码 app.asar createWebConnectionRpc）。405=路径存在但方法/凭证不对。

关键词：RPC 调试、loopback 调用、connection.rpc、client-request、rpcId、channel endpoint、插件诊断、app.asar、127.0.0.1:19387、HTTP 405


## 事实（fact）

### 0mv9giw14-a3ad33379d664fe09577dd7321
_重要性 3，状态 active，项目 dsh_

DSH 插件订阅「会话事件」的技术锚点（2026-10-15 在 dsh-maid-comfyui 的 idle 改造中打通）：`ctx.on('session/event', (session, event) => ...)` 可拿到提交后 fire-and-forget 的事件流，判 `event.type === 'turn/end'` 即「一轮对话结束」；data 形如 `{ turn: number; reason: TurnEndReason }`，`reason.kind` 取值 completed / aborted{reason} / blocked / error{error} / max-tokens / interrupted（崩溃孤儿轮，仅恢复时补写）/ forked（仅 fork seed）。`SessionStore` 暴露为 `ctx.sessions`（属需要 inject 的 cordis 服务）。**同宿主已有插件这么订阅**（dsh-ops 的 lib/session-shells.js 里 `ctx.on('session/event', ...)` 判 `sandbox/mode`），证明可行，不必引入 dsh-session 依赖。另有 `session/created` / `session/disposed` / `session/flush`。包位置：profiles/desktop/node_modules/.pnpm/@deepseek-ai+dsh-session@*/node_modules/@deepseek-ai/dsh-session。

关键词：session/event、turn/end、TurnEndReason、ctx.sessions、SessionStore、会话轮结束信号、dsh-ops 参考实现、forked interrupted 跳过、cordis 服务 inject、插件订阅会话事件

### 0mv7x7d2g-be63ffb0477e451eb3d04dc192
_重要性 3，状态 active，项目 dsh-maid-comfyui_

插件库现有**三条** Qwen Image 2.1 API 工作流（2026-10-15 现状）：①文生图 d4134a7a-279f-4491-9a22-448362d5b624（参数 prompt/refine_prompt/aspect_ratio/steps/seed，无图片入口，实测约 57s）；②图像编辑 e8ca96f2-1c70-4501-abb6-43e0321e8e25（参数 image/image_2/prompt/refine_prompt/custom_size/width/height/steps/seed，denoise 写死为 1 = 全重绘，实测 174~424s）；③图生图 **99df705a-c359-40e0-91c1-8404d0067758**（新语义版，参数 image/prompt/negative_prompt/aspect_ratio/resolution/steps/seed，约 90~95s）。**两条老流已按各自模式实测并落参**：编辑流 steps 25→14（18 步会出废图）；文生图 steps 14/18/25 耗时都是约 57s 无差别，保持原值。两条老流的默认提示词也已换成实际要用的（不再是示例图内容），默认参考图都指向 product_ref_pack06.png。一律 mode: async。自研配套脚本：_ui2api.mjs（子图展开 + UI→API）、_staging/bench_mode.mjs（按模式跑提速基准）。

关键词：插件库三条工作流、文生图 d4134a7a、图像编辑 e8ca96f2、图生图 99df705a、steps 25 改 14、18 步出废图、文生图 57 秒、编辑流 174 到 424 秒、默认提示词已换、product_ref_pack06、async 后台任务

### 0mv7qt9oi-6da92b03b7444f05ad64b3328a
_重要性 3，状态 active，项目 dsh-maid-comfyui_

面板红条「无法连接 ComfyUI」真因不是代码缺陷：设置页「启动命令」留空 → canLaunch=false → 面板不给「一键启动」按钮、只剩红字。修复：profile 的 cordis.patch.yml comfyui 段补 launchDir + launchCommand（pythonw 无黑窗写法，单引号包裹），改后 canLaunch=true。备份 cordis.patch.yml.bak-launch-20261014-143841。【已解决 2026-10-14 14:39】老大填上后配置三处全齐（launchCommand 用 pythonw.exe、launchDir 指便携版根、comfyuiDirs 指 ComfyUI 子目录），实测 8188 被面板按钮拉活——一键启动确实通了。
**2026-10-15 更新**：8188 被插件自动关掉这件事的语义已变——主触发改成「会话轮结束即关」，空闲兜底从 10 分钟改成 30 分钟，且 Agent 下次跑工作流前会自动拉起（runtime.queue 开头 ensureServer()）。所以红条重现时不用手动点启动，直接跑工作流即可。

关键词：无法连接 ComfyUI、红条、启动命令 launchCommand、launchDir、canLaunch、pythonw 无黑窗、一键启动按钮、8188 自动关、空闲兜底 30 分钟、排队前自动拉起、cordis.patch.yml comfyui 段

### 0mv9gb5jp-7fd9de1e082e493d85aa65f0c9
_重要性 3，状态 active，项目 dsh-maid-comfyui_

两条老流按**各自模式**做的提速实测（老大要求：不能用图生图那套基准测，见 m01213/m01238；脚本 _staging\bench_mode.mjs edit|t2i）：
**图像编辑流**（e8ca96f2，拿参考图改字场景，1248×1248）：steps=14 → 174.5s（另次复测 334.1s），文字清干净、铜金边框与瓶形线稿完整；**steps=18 → 废图**（几乎纯白、只剩极淡轮廓）；steps=25 → 421~424.5s，质量好但慢一倍多。→ **定参 steps=14**。
**文生图流**（d4134a7a，纯文本出图）：steps=14 / 18 / 25 耗时**全是约 57s，几乎无差别**——steps 调低没有收益，保持原值，瓶颈在提示词而不在步数（盒面残留模糊小字要靠提示词解决）。
两流共同点：出图质量方差主要来自 seed，坏 seed 换 seed 别调参。编辑流比文生图慢一个量级（174~424s vs 57s），一律 mode: async。

关键词：图像编辑提速、文生图提速、steps 14 定稿、18 步出废图、25 步慢一倍、57 秒、各自生图模式测试、不能套图生图基准、1248 分辨率、bench_mode.mjs、async 后台任务、保质量提速度

### 0mv9g40vt-84715032aa554dab878c0e5e3f
_重要性 3，状态 active，项目 dsh_

上游 dsh-our-free-model 发新版时的本机对齐流程（2026-10-15 跑通，可复用）：① 包只能自己打——`git archive vX.Y.Z <package.json 的 files 白名单 12 项>` 解到 `_staging/ofm-vX.Y.Z/package`，**必须显式加上 `package.json`**（上游 files 白名单不含它自身，漏了包就没版本号）；② 从解出的三个目标文件另存一份**补丁前基线**（client.js / index.js / src/http.js）到 `baseline/` 与 `_staging/ofm-vX.Y.Z/baseline/`；③ 用 `lib/ofm-patch.js` 的 `applyPatchSet` 打 7 处 EAC 补丁；④ `tar -czf _staging/dsh-our-free-model-X.Y.Z.tgz package`；⑤ 部署：旧副本整份备份到 `~/.dsh/our-free-model/rollback-<版本>-patched-node_modules`，清空部署目录后 `cpSync`，再把 `.lane-fix-orig/{client.js,index.js,src__http.js}` 从基线补回；⑥ `package.json` 与 `pnpm-lock.yaml` 里的 tgz 路径 + `integrity`（＝对 tgz 实测 sha512，`sha512-<base64>`）一起改，改完核 `旧版本.tgz` 残留计数为 0。校验手段：逐文件 `cmp` 应 0 差异、`patch-ofm.mjs --dry-run` 应报「7 处已应用」。

关键词：上游发新版、对齐流程、git archive、files 白名单、package.json 自身、applyPatchSet、打 tgz、rollback 备份、lane-fix-orig 补回、pnpm-lock integrity、sha512、dry-run 7 处已应用

### 0mv980hph-3a7326bdccc34df09b599512e5
_重要性 2，状态 active，项目 dsh-maid-lane-fix,dsh_

dsh-maid-lane-fix 上游补丁归档（2026-10-15）：三份档案——① **`ofm-upstream` 分支**（老大追加「commit 本体一起进 lane-fix」后建的）：顶端就是原始 `6bcf2e6`，**SHA 与工作副本完全一致**（靠本地 remote fetch 取对象 + `git branch ofm-upstream 6bcf2e6`，不是 cherry-pick 重写），带上游 424 commit 的完整祖先链（基线 `8c810d1`），`main` 未动；**已推远端**（`refs/heads/ofm-upstream` 在 GitHub 可见）；**别合进 main**（会凭空长出上游 src 副本）。② `docs/ofm-upstream-patches.patch`（96 行裸 diff）+ `docs/ofm-upstream-patches.md`（说明）。③ **`baseline/ofm-2.3.0/{client.js,index.js,src__http.js}.gz` + `SHA256SUMS` + `README.md`**（上游 v2.3.0 补丁前原文，gzip -9 合计 179208 字节，解压 sha256 与上游一致）——当补丁器的还原依据，因为包目录里的 `.lane-fix-orig/` 会丢。**② ③ 都故意不在 `files` 白名单**（git clone 看得到、pnpm add 装不到）。含 3 个实质 commit：`0d06056` 规范时间前缀、`af5c444` request id 计数器 clamp、`6bcf2e6` 剥 UA 里的 deepseek-harness/<版本>（第 4 笔 `c5f7559` 删临时脚本，patch 略去、分支保留）。**没建 fork**：上游 main 已用等价写法覆盖这三点，活代码价值为零，同样修法已活在 lib/lane.js。**工作副本 `Works/dsh-our-free-model` 已复位**：`reset --hard origin/main` 后 clean、left-right 0/0、`git describe` = v2.3.0。
**关键坑**：工作副本原本是**浅克隆**（有 `.git/shallow`），浅克隆的根不能被 fetch 进别的仓库（`shallow roots are not allowed to be updated`）；必须先 `git fetch --unshallow origin`（实测成功，424 commit / .git 涨到 20M）才能把对象取走。

关键词：ofm-upstream 分支、上游补丁归档、还原基线 baseline、ofm-2.3.0 gz、SHA256SUMS、files 白名单、不建 fork、浅克隆 unshallow、工作副本复位、6bcf2e6、lane-fix

### 0mv7rvu64-37e8e81408644142b2e5e03adc
_重要性 2，状态 active，项目 全局_

Works 保留清单（2026-10-14 大扫除释放 2.1G；2026-10-15 二轮清理释放 56M；2026-10-15 晚部署对齐 v2.3.0 后再更新）。**_asar-backup 属 dsh-maid-vcp**（老大 2026-10-15 问「5是相关哪个插件的」的答案）——是 vcp 补丁器自己的备份落点（打补丁前先备份被替换段），内含：app.asar.orig-2026-09-29 —— DSH 装好那天的官方原版 asar 基线，补丁打坏可整份还原，**已压缩为 .gz：116M→30.6M，解压后 sha256 983ca711… 三次核对一致，还原命令 `gunzip -c app.asar.orig-2026-09-29.gz > app.asar`**；该基线对应 9-29 那版 DSH，nightly 升级换掉 asar 后即过期。**必留**——`_staging/node.sh`（跑 node 脚本唯一壳）、**`_staging/dsh-our-free-model-2.3.0.tgz`**（profile 依赖与 pnpm-lock 正在引用，删了断链；同目录 2.2.0.tgz 是旧包，已无引用但暂留）、`_staging/workflows-backup-20261015{,-late}/` 与 `workflows-json-backup-20261015.json`（ComfyUI 工作流备份，记忆里有引用）、`_bin/npm.cmd`（本机无 npm 的 shim）、QwenImage-2.1models（45G 模型库）、`_ui2api.mjs` 与 `_import_i2i.mjs`（通用工具 + 待办要用的入库脚本）、自家仓库。**二轮清理（2026-10-15，老大批「3、4清理」）**——Works 顶层 97 个 `_` 临时文件已删（原 211 个，唯二留下 `_ui2api.mjs` / `_import_i2i.mjs`）、`_staging` 100 项已删（58M→2.2M，86 个探针脚本 + ofm-main 23M + ofm-main.tar.gz 8.8M + ofm-v2.1.0/v2.2.0/ofm-tgz-check 各 4.6M + dsh-maid-comfyui-0.5.4.tgz + our-free-model-2.1.0.tgz + 4 张 edit png）。**已删（更早）**——D:\comfyui-dl（1.9G）、_harvest、_plugin-before-link、_crop/_replay/_replay2/asrc/_t、根目录 95 个探针脚本与调试输出。**仍待清（未批）**：QwenImage-2.1models\outputs 39 张废图约 44M；profile 备份 bak；_asar-backup\diag-scripts；`_staging` 里 2026-10-15 晚新产生的一批一次性脚本（apply230.mjs / deploy230.mjs / vfy230.mjs / chk*.mjs / ints.mjs / ofm-v2.3.0/ 组装目录 / ofm-2.3.0-baseline.tar.gz，合计约 5M，打 2.3.0 包用的，任务已完结）。

关键词：Works 保留清单、_staging、node.sh、our-free-model tgz、workflows-backup、QwenImage-2.1models、_asar-backup、vcp 补丁备份、app.asar 基线、_ui2api.mjs、待清理残留

### 0mv966bhp-276b1e3c54cd49de8e45f092c1
_重要性 3，状态 active，项目 dsh_

本机 our-free-model 安装态（2026-10-15 晚定案，已对齐 v2.3.0）：部署目录 `C:\Users\Administrator\.dsh\profiles\desktop\node_modules\dsh-our-free-model` 现为**正式 v2.3.0 包**（从 tag 自己组装：`git archive v2.3.0 <files 白名单> package.json`，73 文件）+ EAC 补丁 7 项全 applied + `.lane-fix-orig/{client.js,index.js,src__http.js}` 三份还原基线，76 文件、`--dry-run` 报「7 处已应用」。profile 依赖与 pnpm-lock.yaml 已改指 `file:D:/DeepSeek Harness/Works/_staging/dsh-our-free-model-2.3.0.tgz`（1245897 字节，sha512 `lEM/3I04iYezcPXRS6xw7JQhT+OmZ229omweQOyjVRviiJITH+rb1SEqAL+EZO/XuPRAkKAdvcYPJ2+fjfNxUg==`），`2.2.0.tgz` 残留计数 0。旧部署副本备份在 `~/.dsh/our-free-model/rollback-2.2.0-patched-node_modules`。**免费车道本机出口实测通**：部署副本自带 mintSessionId/gatewayHeaders/endpointFor/applyFingerprint 发 POST → 200 出流；真链路 UA `dsh/0.1.7 opencode/1.18.31` → 200（此前「五道门全对仍 403 / 出口不通」作废，真因是探针模型 ling-3.1-flash-free 已下架）。注意：上游 v2.3.0 release **只发了 exe、没发 tgz**，包只能自己打。

关键词：our-free-model、安装态、2.3.0、EAC 补丁、lane-fix-orig、node_modules、tgz、lockfile、sha512、免费车道、200 出流、rollback

### 0mv4vtt9h-8c0c2ea9f2034bd5a5da69c4ce
_重要性 2，状态 active，项目 dsh_

本机 DSH_HOME=C:\Users\Administrator\.dsh；meow-memory 的 promptLang 应写进 profiles\desktop\cordis.patch.yml（提示给的上层路径不存在），已设 'zh'。

关键词：DSH_HOME、promptLang、cordis.patch.yml、meow-memory、profiles desktop、记忆语言、配置路径、zh、插件配置

### 0mv7lyg9n-04809867db124e29be81f4e6ae
_重要性 3，状态 active，项目 dsh-maid-comfyui_

宿主 dsh-plugin-manager 的 reconcile() 会把带 dsh.bundle 的【新增】依赖自动 push 进 dsh.profile.bundles 并加载其包内 patch。边界：只处理新增依赖（已在 dependencies 的不补），且只走 dsh plugin add / 插件市场安装流程；**pnpm add 手改 manifest 不经过 reconcile**（2026-10-15 装 dsh-better-sidebar 实证：pnpm add 后 bundles 无变化，小困手工补的行）。

关键词：reconcile、dsh.profile.bundles、自动写入、dsh.bundle、安装器、plugin-manager、bundle patch、只处理新增依赖、pnpm add 不走 reconcile、插件市场、装完即用

### 0mv98512m-2d786182d23f4ac5948f1aab2d
_重要性 3，状态 active，项目 全局_

本机跑 Node 脚本的两条路（2026-10-15 固化）：
① **sh 壳**：`sh "D:/DeepSeek Harness/Works/_staging/node.sh" <脚本.mjs>`。node.sh 内容＝`export ELECTRON_RUN_AS_NODE=1` + `exec "/d/DeepSeek Harness/DeepSeek Harness.exe" --expose-internals "$@"`——Electron 带这个环境变量就是标准 Node v24.18.1，且 **globalThis.fetch 可用**（ego_script 里 fetch 不可用，这是绕开的关键；挂中间层必须在有 fetch 的环境跑）。
② **直接调 dsh-runtimes 的 node（更省事，2026-10-15 本轮实测）**：`C:\Users\Administrator\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\node\bin\node.exe`（v24.21.0），配套 pnpm 在 `...\dependencies\pnpm\bin\pnpm.cjs`——ops_bash 里用 cygpath 的 `/c/...` 形式即可直接跑，装插件/查 registry 都靠它。
注意 `D:/DeepSeek Harness/resources/runtime/bin/node` 是 100 字节 POSIX shell 脚本（靠未设置的 $DSH_DESKTOP_NODE_EXECUTABLE），不能直接跑；系统 PATH 里无 node/npm。**别删 node.sh**。

关键词：node.sh、ELECTRON_RUN_AS_NODE、跑 node 脚本、dsh-runtimes node.exe、dsh-primary-runtime dependencies、pnpm.cjs 路径、globalThis.fetch 可用、本机无 node npm、DSH_DESKTOP_NODE_EXECUTABLE、探针脚本壳、cygpath 路径

### 0mv7vqx9n-c04d8557b0b54addbc7cfb0681
_重要性 3，状态 active，项目 dsh_

dsh plugin --profile <名> <args> 就是直通 pnpm（用 DSH 自带 runtime 的 pnpm.mjs）；profile 的插件启用清单在 package.json 的 dsh.profile.bundles，**pnpm remove 与 pnpm add 都不会动它**——卸包后要手动删那一行，装包后要手动补那一行（2026-10-15 装 dsh-better-sidebar 实测：pnpm add 只写 dependencies，bundles 纹丝不动，不补＝白装）。cordis.yml 里的条目会在下次启动时按 patch+bundles 重建，所以「cordis.yml 出现该 entry」＝真被加载的可观测证据。

关键词：dsh plugin 命令、dsh.profile.bundles 手工维护、pnpm add 不写 bundles、pnpm remove 不删 bundles、启用清单、profile package.json、pnpm 直通、cordis.yml 重建、插件管理三步、装完要补一行

### 0mv68c25m-9931441c0fc14a368fd5b338da
_重要性 3，状态 active，项目 dsh-maid-vcp_

dsh-maid-vcp（原 dsh-raw-html）改动面：lib/index.js（Host 端，RPC 前缀路由 /dsh-maid-vcp、STATE_FILE ~/.dsh/dsh-maid-vcp-state.json、协议注入文本）、lib/client.js（渲染/美学双开关 localStorage dsh.rawHtml / dsh.rawHtmlAesthetic、可信模式默认开）、patch/（v10 补丁器）、styles/ 仅 abyss-maid。**当前 v0.6.12**（2026-10-15 核）。注：v6.39 混排自愈注入此前因 asar 头对齐 bug 暂缓，已随补丁 v10.2 根治并装上、线上验收通过。

关键词：dsh-maid-vcp 改动面、lib/index.js RPC、lib/client.js、前缀路由 /dsh-maid-vcp、STATE_FILE、abyss-maid 风格、0.6.12、patch 补丁器、插件源码清单、v6.39 已装上

### 0mv90a1m3-01dbcc35bf164a58a510294447
_重要性 2，状态 active，项目 dsh_

老大原话（2026-10-15）：「个人主页的项目就不用安装了」——指 Valorine97417/dsh-maid-plugins（小困插件总览站，GitHub Pages 静态站，index.html + assets），不装进 profile。

关键词：dsh-maid-plugins、官网、个人主页、不用安装、GitHub Pages、静态站、插件总览站、Valorine97417

### 0mv916aa5-406ebb9319a948de9fdfa7f0b2
_重要性 3，状态 active，项目 dsh-maid-preset_

老大有第二台机器参与记忆同步：Windows 用户名 Kayle（路径 C:\Users\Kayle\.dsh，本机是 Administrator）。2026-10-14 那台机器产出过 12 个会话、346 条记忆并推上 Valorine97417/dsh-maid-preset（含设置面板 v0.7.0 八项优化、dsh-maid-tts-fix 音色维护层、官网 f725c696、VCP 卡片配图同源等条目）。这批记忆在 2026-10-15 02:39 被本机的一次推送顶掉，仅存于 git 历史提交 c7e2513（457 条快照可从 git show 提取）。

关键词：Kayle、第二台机器、异地记忆、异机会话、C:\Users\Kayle、dsh-maid-preset 同步、346 条、12 个会话、git 历史恢复、c7e2513 快照、多机记忆来源

### 0mv92kne3-ff04e759d7e4413e871c41fbf0
_重要性 2，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 本机（老大这台）同步配置的权威落点＝**profile 的 cordis.patch.yml** 里新增的顶层 `- id: dsh-maid-preset` 覆盖段（2026-10-15 建）：repoUrl 指向 Valorine97417/dsh-maid-preset.git、identity 写 Valorine97417、seed.enabled=true、proxies 留空。之所以必须显式给全：出厂配置已按新设备隐私红线一律置空，而本机 git 全局身份不存在（C:\Users\Administrator\.gitconfig 缺失），不补这层 commit 会失败、同步会断。设置文件 $DSH_HOME/maid-settings.json 是更上层覆盖（当前写着 repoUrl/idleMinutes/enabled/minImportance）。三层优先级：settingsoverlay > profile cordis.patch.yml > 包内出厂 patch。

关键词：preset 本机覆盖段、profile cordis.patch.yml、dsh-maid-preset 顶层覆盖、三层优先级、maid-settings.json、本机身份来源、gitconfig 缺失、seed 本机开、同步配置落点

### 0mv95vwyw-ece2f15ef002424d8d3481cc29
_重要性 3，状态 active，项目 dsh-maid-patch-kit_

dsh-maid-tts-fix 与 dsh-maid-patch-kit 的**配套上游已全部装好**（2026-10-15，老大「都补上」）：
① dsh-xiaomi-tts@3.0.8（正源 ppy-web/dsh-plugin-xiaomi-mimo-tts）——tts-fix 的唯一目标，补丁已落盘 lib/client.js + lib/shared-DQIrhcy-.js。
② dsh-video-understand@0.5.2（正源 ilps2）——patch-kit 目标①，7 文件修复全落盘，另建 .venv（31 个 Python 包，DSH 自带 py3.12 + 清华镜像，实测 Python 3.12.14 依赖齐）。
③ dsh-ego-browser@0.8.6（正源 Fisfzy）——patch-kit 目标②，chrome.mjs 孤儿清理补丁已落盘。
三者精确装了补丁钉的版本，均已登记 dsh.profile.bundles，entry 已在 cordis.yml（含 xiaomi-tts 完整 config 段）。两套补丁 verify 全过。
**免重启验收四件套已跑**（2026-10-15）：模块冒烟 ✓（ego-browser 裸 import 报 MODULE_NOT_FOUND 属预期，peer 由宿主 asar 提供）/ 依赖解析 ✓ / peer 检查 ✓（报的缺项全是 dshmarket、skins、our-free-model 等老包历史遗留，新装三包未被点名，且其 peer 全 optional）/ 残留扫描 ✓（四处齐全）。
**唯一未就绪项**：dsh-xiaomi-tts 的 `apiKey: ''` 为空——重启后工具会注册，但朗读要出声还需填小米 MiMo 的 key。**宿主侧插件，仍需重启 DSH 生效**（老大 2026-10-15 指示：其他会话在跑，重启暂缓）。

关键词：配套上游已装、dsh-xiaomi-tts 3.0.8、dsh-video-understand 0.5.2、dsh-ego-browser 0.8.6、补丁目标版本对齐、ppy-web 正源、ilps2 正源、Fisfzy 正源、.venv 已建、verify 全过、重启 DSH 生效

### 0mv96plt0-00b9824aeebd46988449a74416
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

dsh-xiaomi-tts（朗读）的 apiKey 与音色配置落点（2026-10-15，均已实测）：
**落点**＝profile 的 `cordis.patch.yml` 顶层 `- id: xiaomi-mimo-tts` 覆盖段；该文件不在任何 git 仓库内，key 明文不写入记忆库。插件设置面板的本地值会**盖过**文件（本机目前无面板覆盖）。
**音色**＝照抄 tts-fix 仓库 `voice-refs/prompt.md` 的**定稿（C 组，2026-10-14）**，两处 voiceDesignPrompt / voiceDesignCustomPrompt 内容逐字一致（实测逐行比对通过）。配套值：`model: mimo-v2.5-tts-voicedesign`、`format: pcm`、`readScope: smart`、`voiceRate: 1`。
**两个 id 别混淆（重要）**：`mimo-v2.5-tts-voicedesign` 是**自定义音色**模型——只有它才发送 voiceDesignPrompt；`mimo-v2.5-tts` 是**预置音色**模型，走 presetStylePrompt。定稿要的是前者。
**实测**：GET /models 200；POST /chat/completions（voicedesign + 定稿提示词）200，返回约 10 秒音频 → key 可用、音色能出声。
**仍未生效条件**：插件本体需重启 DSH 才加载（老大指示暂缓重启）。

关键词：xiaomi-tts apiKey 落点、profile cordis.patch.yml 覆盖段、key 不进仓库不进记忆、设置面板盖过文件、MiMo key 实测可用、mimo-v2.5-tts 被接受、朗读配置在哪、临时脚本要删明发文、机密配置处理

### 0mv985xv2-558782d986fb47c0ab4f38f574
_重要性 2，状态 active，项目 dsh_

本机「树上那些昵称/图标分别属于哪个插件」的对照（2026-10-15 老大连问两次，查证钉清）：
① **左下角「木瓜mg」＝账号昵称，不是插件**。来自 `dsh-our-free-model` 的账号池：`$DSH_HOME/channel-pack/state.json` 的 `accounts[].nickname`；「木瓜mg」是其中 buddy 与 loomy 两个通道的昵称，为**服务端下发的真实用户名**（插件照实显示，非编造）。该文件还有 codearts-xxxx、常田夏目、aliyun8315224740、多个 gmail、workbuddy×7 等共 18 个账号。
② **悬浮地球球＝`dsh-ego-browser` 的悬浮按钮**：面板 `<div id="dsh-ego-panel">`，可拖拽吸附，位置存 localStorage `dsh.ego.watch.panelPos`；点开是「实时观察窗」（SSE 直播浏览器画面 + 直接鼠标交互 + 下载捕获 + 登录引导）。
③ **形态会变**：2026-10-15 装了 `dsh-better-sidebar` 之后，浮动球退场，观察窗改挂右侧边栏原生 Tab（`registerTab({id:'ego-browser:watch', order:70})`）——所以「地球球不见了」不是坏了，是切了形态（需硬刷新浏览器）。

关键词：木瓜mg 是哪来的、账号昵称 不是插件、channel-pack state.json、accounts nickname、buddy loomy 通道、dsh-our-free-model 账号池、ego-panel 悬浮球、ego-browser:watch 侧边栏标签、实时观察窗、界面上多出来的按钮

### 0mv98s5bt-1497783f8cbe4ac39d720bf03a
_重要性 3，状态 active，项目 dsh_

dsh-better-sidebar 已装入 desktop profile（2026-10-15，老大拍板装）：
**版本** 0.26.0（要求 DSH 0.2.0-rc.2+，本机对得上）；装法＝`pnpm add dsh-better-sidebar`（node/pnpm 用 dsh-runtimes 里那套），**bundles 需手工补登记**——pnpm add 只写 dependencies，不写 `dsh.profile.bundles`，不补则等于白装。
**它是唯一提供 `ctx.betterSidebar` 服务的包**，ego-browser 靠这个服务把实时观察窗从「右下角浮动地球球」改成「右侧边栏原生 Tab（Agent 浏览器）」，两形态共用同一套 SSE 推流。所以想让 ego 收进侧边栏，只能装它，没有轻量替代。
**副作用要知道**：better-sidebar 是重型工作台，除侧边栏 Tab 底座外还接管内置「文件」页，并自带可编辑 CodeMirror 编辑器 / Git 变更面板 / 任务管理 / 侧边对话 / 底部工作台——不是只加一个 Tab。
**生效方式**：host 半装完即热加载（探测法：`POST /sidebar/api` 返回 `{"code":"method-error"}` 或 `unknown sidebar API method`＝已注册，404 才是没加载）；client 半需**硬刷新浏览器 Ctrl+Shift+R**。
**防双挂载**：profile 自己的 cordis.patch.yml 不得再写手动挂载行；本机是靠包的 bundle patch 自动往 cordis.yml 追加一行（带 disabled 守卫表达式）完成的。装前备份在 `C:\Users\Administrator\.dsh\_backup-20261015-154749-bettersidebar`。

关键词：dsh-better-sidebar、ctx.betterSidebar 服务、ego-browser 收进侧边栏、浮动地球球消失、右侧边栏 Tab、Agent 浏览器、bundles 手工补登记、硬刷新 Ctrl+Shift+R、sidebar/api 405、双挂载 重复挂载、侧边栏底座、profile 依赖重装

### 0mv977vw8-ee4a5c2f5f0b4791be577d0d60
_重要性 2，状态 active，项目 dsh,dsh-maid-lane-fix_

our-free-model 2.2.0 的车道请求全走 src/egress.js 的 egressFetch，而它在未配出口时就是 `return fetch(url, init)`（src/egress.js:105）——运行时全局查找，所以 dsh-maid-lane-fix 包 globalThis.fetch 能拦到全部车道流量。调用点：src/http.js:390 postStreamed、src/http.js:567 getJson、src/probe.js:191 detectEgress、src/kilo.js、src/aggregate.js。将来用户在设置里开了 egress 出口（loopback relay），egressFetch 改走 127.0.0.1 relay，但仍是同一进程内的 globalThis.fetch，中间层照旧生效。

关键词：egressFetch、globalThis.fetch、中间层挂载点、lane-fix 拦截原理、opencode.ai、egress relay、loopback、postStreamed、detectEgress、不改上游字节、运行时查找

### 0mv974ml5-558a57bf5a4f4fd1bca6ba4779
_重要性 4，状态 active，项目 dsh_

免费车道五道门真判据（2026-10-15 逐格实测，其余四道全对时单变量对照）：① 端点必须 /inference/v1/*，/zen/v1 一律 403；② session 前 12 位必须是铸造形状 ~(ms*0x1000+seq)；③ **UA 门只认「deepseek-harness/ + 版本号」这一个形态**——`deepseek-harness/2.2.0`→403、`deepseek-harness/v2.2.0`→403、`DEEPSEEK-HARNESS/2.2.0`→403，但 `deepseek-harness`（无版本）→200、`deepseek_harness/2.2.0`（下划线）→200、`dsh/2.2.0`→200；④ UA 必须含 `opencode/<版本>` token——`myapp/1.0`→403、`node`→403、空 UA→403，加 `opencode/1.19.0` 即 200（PR #330 的「禁 deepseek-harness」说法不完整，真判据是带斜杠版本号那个形态）；⑤ **工具指纹：`tools` 字段整个缺席也 403**（PR #330 未写，纯文本轮次必踩），tools:[] 也一样，补上 bash/read 各带 ≥1 property 即 200。另：`stream:false` → 403（只认流式）。

关键词：免费车道五道门、UA 真判据、deepseek-harness 带版本才拦、下划线变体放行、opencode token 必须在场、tools 字段缺席 403、工具指纹 bash read、stream false 403、/inference/v1、铸造 session 形状、单变量对照实测、PR 330 说法不完整

### 0mv7jq4so-93ff00df73b2498cade509a5b9
_重要性 2，状态 active，项目 dsh-maid-comfyui_

本机 ComfyUI 便携版（2026-10-14 装）：D:\ComfyUI\ComfyUI_windows_portable（v0.40.0 nvidia 版，RTX 3050 6GB cuda:0），服务 http://127.0.0.1:8188。启动用 run_nvidia_gpu_hidden.vbs（静默无窗口），停止用 stop_comfyui.vbs——别再双击 run_nvidia_gpu.bat（会弹 cmd 黑窗）。模型库经 extra_model_paths.yaml 挂到 D:\DeepSeek Harness\Works\QwenImage-2.1models（45GB，qwen_image_2.1 全套）。官方 Qwen 2.1 模板引用的 PE int8_convrot 模型本地没有，跑图用 workflows\mine_qwen_image_2_1_*.json（换 w4a8 版引用，已验证 4 模型齐全）。**2026-10-15 清理后 user\default\workflows 只剩 mine_qwen_image_2_1_t2i.json 与 mine_qwen_image_2_1_image_edit.json**（其余 9 个官方模板图已删，备份 _staging\workflows-backup-20261015）；同日小困新画的图生图画布版 **maid_qwen_image_2_1_i2i.json 也放进该目录**，等老大在界面上过目。官方发布源已迁至 Comfy-Org/ComfyUI releases。下载残留 D:\comfyui-dl\*.7z（2GB）可删。
如果你确实需要更多细节，可以直接去聊天记录里搜索相关关键词。

关键词：ComfyUI 便携版、vbs 静默启动、extra_model_paths、QwenImage-2.1models、mine 工作流、8188 端口、w4a8、出图环境、workflows 目录现状、maid_qwen_image_2_1_i2i.json、官方模板已清理

### 0mv92nufj-3f065607be4d4317b98c8a1060
_重要性 3，状态 active，项目 dsh-maid-comfyui_

Qwen Image 2.1 参考图生图提速基准（**2026-10-15 新语义下重测**：参考图=外观参考、空白 latent 起画、denoise=1；脚本 _run_speed / _run_speed2 / _run_speed3 / _run_speed4，结果 _speed_result.json ~ _speed4_result.json）。**推荐配置：resolution=1024 + megapixels=1 + steps=14 + 缓存 default + scheduler simple，单次约 90~95 秒**（18 步为 120.5s，14 步省约 22%）。四个旋钮实测：① **steps 18→14 采纳**，好 seed 上质量无差别；12 步还能再省几秒但坏 seed 崩得更彻底，14 是稳妥档。② **resolution 绝对不能降**——降到 896 结构直接崩（盒子变形、铜金线乱走），比旧语义更严。③ **缓存 dtype 保持 default**，换 int8 反而更慢（90.3s vs 84.2s）。④ **scheduler 换 beta 无收益**（87.3s 略慢），保持 simple。**最关键**：出图质量方差主要来自 **seed，不是 steps**——seed 777/1234/88 在 12 步都干净，seed 20261015 连 18 步都残留「50ML / 1.7 FL OZ」、12 步直接崩回盒胚加品牌名；**遇到坏 seed 别调参，直接换 seed**。（旧语义基准——参考图经 VAEEncode 作底、denoise 可调——已作废：那时 res512/18 步≈50s、megapixels 0.75 可用，均不适用于现流程。）

关键词：提速基准新语义、steps 14 稳妥档、resolution不能降、896就崩、缓存int8更慢、scheduler beta无收益、质量方差来自seed、坏seed直接换、90到95秒一张、保质量提速度、旧基准作废

### 0mv966bh5-30453f36a2ef483ca3e7f2f1d0
_重要性 3，状态 active，项目 dsh_

上游 2026-10-15 05:11（北京时间 13:11）用 PR #330（caimanblackbyte，24 文件 +367/−58，标题「免费模型改走 /inference/v1 并补齐新的指纹闸门」）合并进 main，维护者 zixin947 随即以该 PR 关闭 issue #310（closed as completed）。新闸门真值（小困 10-15 14:36 本机直连复测，出口 CN）：① 端点必须 /inference/v1/chat/completions，/zen/v1 一律 403；② session 必须是铸造形状 ~(ms·0x1000+seq)，sha256 派生 403；③ tools 必须同时含 bash 与 read 且各带 ≥1 property，只 bash 或缺 tools 均 403；④ UA 含 deepseek-harness/ 或裸 dsh/ 都 403，dsh/0.1.7 opencode/1.18.31 → 200；⑤ stream:false 403。**与 PR 描述相反**：实测删掉 x-opencode-session-id 仍 200。上游 main 的 src/upstream.js 已内置 endpointFor()→/inference/v1 与 gatewayHeaders()（含 x-opencode-session-id）。

关键词：PR 330、caimanblackbyte、/inference/v1、端点迁移、工具指纹 bash read、x-opencode-session-id、FreeTierError 修复、zixin947、issue 310 关闭、session 铸造形状、UA 禁 deepseek-harness、stream false 403

### 0mv7xkt3m-98f8954523e945f2ba7ff1053d
_重要性 2，状态 active，项目 dsh-maid-comfyui_

老大做图的实际场景：产品图精修 / 电商主图（上传产品图当唯一外观参考，严格复刻产品原貌，重排成带固定文案、统一视觉的精修主图；要求清除原品牌名与包装文字、只留指定 LOGO「CUSTOM LOGO」、文字宽度居中不超包装宽度45%、中心固定在瓶形轮廓区横向50%纵向55%）。按「主图01…06」编号成系列推进；主图06=定制内容总览：只展示成型盒体（不出现盒胚），中左主产品占约50%，右侧上下两个辅助窗口（右上深酒红配色预览+标签 Color Customization Preview，右下铜金边框与瓶形细节），左上标题 Customize Your Packaging，下方两条卖点 Custom Sizes & CMYK / Pantone、Logo Printing & Finish Options；配色暖白#F7F5F1/浅灰#E8E7E4/文字炭黑#252525/强调铜棕#B98259。**主图06 已于 2026-10-15 用「参考图生图」流程走通（v5 提示词，res1024/mp1/steps18，100~150s），成品提示词存 D:\DeepSeek Harness\Works\_prompt_zhutu06_v5.txt；seed 777 效果最干净。** 给建议或调工作流时往「产品图 → 商用主图」这个方向靠。

关键词：产品图精修、电商主图、主图06、定制内容总览、CUSTOM LOGO、清除品牌名、配色预览窗口、暖白铜棕配色、v5提示词走通、seed777最干净、主图系列编号、瓶形轮廓定位

### 0mv54302g-70c2fe60f63a408e8721cce295
_重要性 2，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 同步与播种机制现状（v0.7.4，2026-10-15 核）：①同步失败分级——认证/仓库不存在/无写权限属配置错，pauseForConfig 立即暂停并写清改法；网络类指数退避 5/10/20…封顶 8h。②sync.repoUrl 出厂默认空=待机，绝不默认指向别人仓库；本机靠 profile 覆盖段 + maid-settings.json 给值。③sync.identity 出厂默认 null=不注入 -c，交本机 git 配置（缺则暂停并提示）。④**seed.enabled 出厂默认改为 false**（v0.7.4）——种子是打包时老大的记忆，别人装上不该直接进会话；本机由 profile 覆盖段显式设 true。⑤出网统一「先直连，不通再探本机代理」，出厂 proxies 为空。

关键词：失败分级、配置类暂停、网络退避、repoUrl、待机、identity、commit身份、seed、播种开关、0.4.1、指数退避

### 0mv92nuf4-75c90e479bef475cb1ec3839e7
_重要性 3，状态 active，项目 dsh-maid-comfyui_

ComfyUI 画布（UI 图）JSON 结构：顶层键 id / revision / last_node_id / last_link_id / nodes / links / groups / config / extra / version（**version = 0.4**）；节点字段 id / type / pos / size / flags / order / mode / inputs / outputs / properties / widgets_values；links 每项 = [linkId, originId, originSlot, targetId, targetSlot, type]。**widgets_values 是按位置排的数组，顺序必须与该节点定义一致**：KSampler = [seed, "randomize", steps, cfg, sampler_name, scheduler, denoise]（seed 后要留 control_after_generate 占位）、LoadImage = [文件名, "image"]、SaveImageAdvanced = [prefix, "png", "8-bit", "sRGB"]、TextEncodeQwenImage21 = [prompt, negative_prompt, resolution]、ResolutionSelector = [aspect_ratio, megapixels, multiple]。手写画布后**用 _ui2api.mjs 转成 API 再 /prompt 实跑**即可验证结构对不对。落盘目录 D:\ComfyUI\ComfyUI_windows_portable\ComfyUI\user\default\workflows，ComfyUI 界面刷新即见。

关键词：画布JSON结构、widgets_values顺序、version 0.4、links数组格式、control_after_generate占位、KSampler参数序、手写画布工作流、UI图转API验证、user/default/workflows、界面刷新可见、节点字段、pos size flags order mode

### 0mv90crx5-b110e350778a46359aeaa2b34a
_重要性 3，状态 active，项目 dsh-maid-comfyui_

老大定的建工作流流程（2026-10-15 原话）：「对，新建一个图生图的工作流。测试跑通了就弄成api工作流。」「不做先做本地的json 文件工作流，跑通了弄到API工作流上吗」；后追加：「你转api工作流前要在comfyui这里显示出来，我好查看有没有问题。没问题了你在转API工作流。」要点：①「搭一条工作流」= 在插件库里**新建一条正式条目**，只在本地写 json 跑通不算；②顺序固定为「本地 JSON 工作流 → 跑通验证 → **放进 ComfyUI 画布目录给老大过目确认** → 入库成 API 工作流」，先验证后入库；③产出物必须是 **ComfyUI 画布格式（UI 图 JSON，version 0.4）**，不是 API 格式——API 格式老大在界面上看不到、没法验。另：老大要求「跑通了优化一下设置，让我的配置能保质量的前提下提高生图速度」——优化要拿实测数据说话，不能拍脑袋。

关键词：建流流程、本地json先跑通、跑通再入库、转API前先给老大看、ComfyUI画布格式、UI图不是API格式、插件库条目、先验证后入库、保质量提速度、老大原话、界面可见才可验

### 0mv907yh9-c8bee632d8ac4a458e1691b195
_重要性 3，状态 active，项目 dsh-maid-comfyui_

【老大纠正 · 2026-10-15】图生图流程的语义：「图生图流程是参考图+生成提示词来制作主图06，**不是对参考图进行编辑**。」→ 参考图是**外观参考**（严格复刻产品原貌），不是待编辑的底图。因此正确做法：参考图只送 TextEncodeQwenImage21.images 当外观参考，初始 latent 用 **EmptyLatentImage（空白画布）**，KSampler.denoise **固定 1**，让模型按提示词自由生成新构图（标题、卖点、配色窗口全部重画）。小困原先那条「参考图经 VAEEncode 作初始 latent、denoise 可调」的 API 工作流（id 23fa22d2）**已被老大删除**——那套设计会把原构图焊死，方向就是错的；配套的 denoise 实测区间表也随之作废。与「图像编辑」（参考图自身 latent 当底、保构图）是两条不同的路。

关键词：图生图语义、外观参考不是底图、不是对参考图编辑、空白画布起画、EmptyLatentImage、denoise固定1、生成新构图、参考图加提示词、原构图焊死、VAEEncode作底错误、老大纠正、主图06制作

### 0mv8yzo93-8f8cfec75faa45bda1c23a15a5
_重要性 3，状态 active，项目 dsh-maid-comfyui_

老大直接贴进对话的产品图存在 C:\Users\Administrator\.dsh\attachments\v1\objects\<哈希前2位>\<哈希>（无扩展名，hex 头 89 50 4E 47 = PNG），按修改时间取最新那个即可。聊天里没有 [已上传图片: 文件名] 标记 = 没走面板贴图按钮，文件还没进 ComfyUI input。做法：ops_bash 把该文件拷成 {comfyuiDir}\input\有名字的.png，再把文件名填进图像编辑工作流的 image/image_2 参数。

关键词：用户上传图片、attachments/v1/objects、附件哈希文件、无扩展名PNG、ComfyUI input、拷贝参考图、贴图按钮标记、参考图落地、产品图路径

### 0mv534rt8-e58e425d5f3b4afa8e15a4d065
_重要性 2，状态 active，项目 dsh_

记忆自动同步节奏：每 60s 轮询活库 mtime（含 -wal），停写满 10 分钟才导出推送（写入后 10-11 分钟上库），一个空闲窗口至多 1 个 commit，失败每 60s 重试；**持续写入会一直攒着不推**（空闲钟锚定 mtime、被顶住 → due 恒假，`maid-sync.log` 无 PUSH 行、`maid-sync-state.json` mtime 停滞），这不是故障。
**手工补推**：用官方接口导出再提交推送——`node -e "import('file:///…/dsh-maid-preset/lib/export.js').then(m=>m.exportMemory('<活库>','<同步副本>/memory/'))"`，然后在该副本目录 `git add -A && commit && push`（推完记得把本轮新增的记忆也补一次）。别用 `VACUUM INTO` 直接覆盖（报 `output file already exists`），走官方接口才带 minImportance 精选门槛。核对条数：应等于「status≠archived 且 importance≥maid-settings.json 的 sync.minImportance（默认 2）」的条数。详见 lesson <span>0mv807tr</span>。

关键词：记忆同步频率、60秒轮询 空闲10分钟、mtime 含 wal、持续写入攒着不推、手工补推 exportMemory、VACUUM INTO already exists、minImportance 门槛对账、maid-sync-state 停滞、空闲钟 due 恒假

### 0mv7mfqgp-bd6bf661c9d24153a42dd304c0
_重要性 2，状态 active，项目 dsh-maid-comfyui_

包内 cordis.patch.yml 的 `insert: id: comfyui` 与 profile 里同 id 的 patch 段不冲突——同 id 是覆盖 config 而非重复插入。故 profile 那条 comfyuiDirs 是可选配置覆盖，不是装载必需。
⚠️ 别把这条读成「profile patch 里怎么写都行」：顶格 `- id: x / config:` **才是覆盖**；写成 **`- insert: - id: x`** 就是**新增一行**，会让 cordis.yml 多出一条同名 entry（重复注册）——本层插件只要进 bundles 即可，profile patch 里不要再 insert。详见 lesson「自家插件只能有一个挂载源」。

关键词：comfyuiDirs 可选覆盖、同 id 覆盖 config、不是装载必需、insert 才是新增行、顶格 id 是覆盖、profile patch 层序、bundle 层之后、重复 entry 警告、装载源唯一

### 0mv7ym4kg-2fbde00397274e9eb56cde5f32
_重要性 2，状态 active，项目 dsh-maid-comfyui_

dsh-maid-comfyui 仓库自带子图转换器：scripts/subgraph-to-api.mjs（子图内联摊平 + 画布图转 API），配套 scripts/test-subgraph-to-api.mjs（11 项离线 fixture，不需要 ComfyUI）。object_info 默认从 --base-url 实时拉，--object-info <file> 可离线。CLI：node scripts/subgraph-to-api.mjs <workflow.json> [out.json]。提交 f4573b4（功能）+ 45a868c（文档补句）。关键：scripts/ **不在 package.json 的 files 白名单**里，所以 npm 包/tgz/Release 资产里没有这两个脚本，只有 clone 源码仓库才有——README 中英双份已注明。src/skill.ts 的子图提示已补 Unpack 与脚本两条出口。

关键词：subgraph-to-api.mjs、子图转换器入库、scripts 不在 files 白名单、npm 包里没有脚本、clone 才有、test-subgraph-to-api、object-info 离线、Unpack 出口、skill.ts 提示、f4573b4 提交

### 0mv7qt9ox-8bd59539a0b34499a7c54e2f41
_重要性 3，状态 active，项目 dsh-maid-comfyui_

ComfyUI 端 11 个图工作流全部是子图（subgraph）结构：外层只挂 1~8 个节点（子图实例 + SaveImageAdvanced + MarkdownNote 等），真节点（13~27 个）在 definitions.subgraphs 内，外层节点 type 就是子图 uuid。插件 analyzeGraph 把子图当黑盒（分量里只剩 5 个节点），convert.ts 与 src/skill.ts:75 明说不支持子图实例，面板「提取」一律报「包含未注册的 UI-only 节点 "<uuid>"」。绕开办法（已落地）：自研 _ui2api.mjs 做子图内联展开 + UI→API 转换，绕开插件提取器。

关键词：子图 subgraph、definitions.subgraphs、图工作流提取、Unpack 转普通节点、analyzeGraph 黑盒、skill.ts 不支持、user/default/workflows、面板图工作流、提取跑不了、uuid 未注册节点、自研展开器

### 0mv7x7d1x-c3c699e8fe4a4c478eadb82977
_重要性 2，状态 active，项目 dsh-maid-comfyui_

Qwen Image 2.1 子图内部没有第二个图像产出点：VAEDecode 的结果经子图输出槽直接给外层 SaveImageAdvanced；子图内部唯一的 PreviewAny 接的是 ComfySwitchNode 提示词出口，输出的是 STRING（提示词原文），零信息增量。老大拍板：是文本就不保存——已删 outputs/subimage/ 与 _run_api.mjs 的落盘逻辑，只留控制台打印。

关键词：subimage、PreviewAny、子图输出、文本不是图、VAEDecode、SaveImageAdvanced、不保存、outputs 目录、提示词原文、落盘逻辑、中间产物

### 0mv6hbg68-4ac0bbaea2c7457d96ff20b792
_重要性 3，状态 stale，项目 dsh-maid-scenery_

dsh-maid-scenery v0.1.3（2026-10-13，历史）：① 删掉替 raw-html 写 `raw-html.trusted='1'` 的代码（可信模式关不掉的元凶）；② runtime/scenery.css 加亮色四层表面覆写修「亮色界面过亮」。仓库 `D:\DeepSeek Harness\Works\dsh-maid-scenery\`，部署目录是普通目录非 junction，改完须手动 cp。

关键词：dsh-maid-scenery v0.1.3、删除 trusted 写入、可信模式关不掉元凶、scenery.css 86 行、亮色四层表面覆写、手动 cp 部署、普通目录非 junction、TRUST_KEY 删除

### 0mv6i2az9-2f7af4b14fba4c3e95ac2c3234
_重要性 2，状态 stale，项目 dsh-maid-scenery_

历史节点（已被 v0.2.2 覆盖）：dsh-maid-scenery v0.1.4（2026-10-13，commit 7ec1e20）修「切到视频没反应」= 静态画与视频改互斥显隐；撤掉代管 raw-html 可信模式与徽章两笔；当时冒烟 20 PASS。后续版本见 project overview（0.2.2）。

关键词：v0.1.4、7ec1e20、切到视频没反应、互斥显隐、撤掉代管 raw-html、smoke 20 PASS、profile 已刷、普通目录非 junction、GitHub 推送

### 0mv7vqxa2-fda31cd2bfeb4924a687e6bf9a
_重要性 2，状态 active，项目 dsh-maid-scenery_

dsh-maid-scenery 0.2.2：背景音乐正本在 $DSH_HOME/dsh-maid-scenery/music/，启动时镜像进包内 vendor/video-skin/assets/（同卷硬链接、跨卷复制），background.music 字段缺席时自动填正本第一首，删正本即删镜像。

关键词：scenery 音乐目录、音乐正本、dsh-maid-scenery music、硬链接镜像、DSH_HOME 数据目录、music-mirror.json、背景音乐不放 node_modules、lib/music.js、自动填曲、重装丢歌

### 0mv7ug3lf-7c7ffd51dfaf43bab126fb9958
_重要性 2，状态 active，项目 dsh-maid-comfyui_

dsh-maid-comfyui 可用 HTTP 直接把 API 工作流存进插件库（绕开面板）：先 POST http://127.0.0.1:19387/comfyui/workflows/recognize，body {workflow}，自动识别可调参数并返回 parameters（每条带 nodeId/inputKey/min/max/step/numberKind）；再 POST /comfyui/workflows，body {name,description,workflow,parameters,tags} 入库并返回 id。curl 须带 -H "Origin: http://127.0.0.1:19387"。

关键词：/comfyui/workflows、recognize、存工作流 API、API 工作流入库、parameters nodeId inputKey、Origin 头、curl 存工作流、插件库直存、绕开面板

### 0mv7me9az-96dd00302e58443a98310a63ac
_重要性 2，状态 active，项目 dsh_

停用 bundle 里某个插件不用卸包：在 profile 的 cordis.patch.yml 写 `- id: <插件id>` + `name: <包名>` + `disabled: true`（补丁层在 bundle 层之后生效、重启不被覆盖，包体留盘可一键退回）。本机已用它停掉重复的 dsh-video-skin。

关键词：cordis.patch.yml、disabled true、停用插件、bundles、profile、补丁层、不卸包、一键退回、插件启停、重启生效

### 0mv7me9an-00ad01f2400b41419301c84c93
_重要性 2，状态 active，项目 dsh-maid-scenery_

scenery 背景音乐的配置真值：写进 $DSH_HOME/dsh-video-skin.json 的 background.music（相对 vendor/video-skin/ 解析，如 "assets/Wet Hands - C418.flac"），面板滑块也写同一文件的 background.veil/surface/musicVolume；未配 music 时视频层不建 <audio id=dsvs-backdrop-music>、播放列表也不扫，面板只回「无可播音乐」（歌曲计数那半边来自 scenery 端点，两半口径不一致会误导）。歌放 vendor/video-skin/assets/，按设计不入库。

关键词：背景音乐、musicVolume、dsh-video-skin.json、assets 目录、无可播音乐、audio 元素、scanMusicPlaylist、打开音乐位置、Wet Hands、DSH_HOME、歌曲不入库

### 0mv7lyga3-5e33b58fe0e74852a73f8c17e9
_重要性 2，状态 active，项目 dsh-maid-comfyui_

dsh-maid-comfyui 仓库 .gitignore 排除 /lib/ 与 /client/ 且无 prepare，git+https 直装拿到空包；npm/tgz 走 prepack 才有产物。

关键词：git 直装、构建产物、prepack、prepare、gitignore 排除 lib、空包、tgz、npm 发布、装不上、客户端 bundle

### 0mv6d5z0b-95753bf786eb4b9f9700826c7c
_重要性 3，状态 active，项目 dsh-maid-vcp_

老大 2026-10-13 定调：可信模式「设置为默认开启。然后隐藏掉。这样换另一台安装就不会当聊天背景面板按钮了。」——实现为 isTrusted() 默认 true（仅显式 localStorage['raw-html.trusted']==='0' 才关），盾锁徽章默认不挂载（fixed right:14px/bottom:14px 与 dsh-video-skin 悬浮钮 #dsvs-knobs-pill 撞位），需唤出时 DevTools 执行 localStorage.setItem('raw-html.trustedBadge','1') 再刷新。该改动曾被 pnpm install 冲掉，2026-10-13 已重放恢复，三项行为均已实测通过。

关键词：可信模式默认开启、徽章隐藏、trustedBadge、换机安装、聊天背景面板按钮撞位、dsvs-knobs-pill、isTrusted 默认 true、raw-html.trusted 显式0才关、DevTools 唤出、老大约束

### 0mv6d4ml0-ba10ec54630e4146ac939f6a89
_重要性 3，状态 active，项目 dsh-maid-vcp_

2026-10-13 插件被冲事故的恢复结果（已全部复原并验证）：从会话记录重放 36 次 write/edit 重建 lib/client.js(117150B)、lib/index.js(61894B)、styles/abyss-maid.md、styles/_INDEX.md、README.md、CHANGELOG.md、tests/trusted.test.mjs，并删除 GitHub 原版带回的 12 个风格。验证四项全绿：RPC list-styles 返回 1 个风格(abyss-maid)；可信模式默认 true + 徽章默认不挂载 + trustedBadge=1 可唤出；hover 已改 interactive-bg-hover-accent 无 primary-fill 配 #fff；asar 前端补丁 sha 45116a3f…e81dd 与 header integrity 一致。暂存/脚本：Works\_replay2、replay2.mjs、restore-plugin.mjs、verify-restored.mjs、verify-asar2.mjs。

关键词：插件恢复完成、重放 36 次编辑、client.js 117150、index.js 61894、abyss-maid 复原、删除 12 风格、RPC 返回 1 风格、可信模式默认开启、hover 修复确认、asar sha 45116a3f、_replay2 暂存

### 0mv6i5ocw-a5e0012e53764f569b73c3f832
_重要性 3，状态 active，项目 dsh-maid-vcp_

dsh-raw-html v0.6.5 工程化三件套（2026-10-13，已推送 c7348e5）：① patch/patch-frontend-asar.cjs = v10 代际自适应补丁器，改 app.asar 内 dsh-web-frontend/dist/assets/index-*.js，能力 A case"html" 三态化 / B+C 代际 shim + v6 注入 / E case"code" 围栏兜底 / F markdown 空行修复，自动重算 integrity、ftruncate 原地回写规避 EBUSY；② patch/asar-io.cjs = 纯 Node 的 asar 解析/读取/重打包，零第三方依赖；③ patch/install-all.cjs v8.0 = 双形态自动分流（桌面端→asar 补丁器单步装齐；Web 端→install-v6 + update-v6-inject + trusted-patch），带 --dry-run。验证脚本 check-asar-io.mjs 13/13 全绿。

关键词：v10 代际自适应、patch-frontend-asar、asar-io 纯 Node、install-all 双形态分流、代际 shim、符号表探测、integrity 重算、ftruncate 规避 EBUSY、一键安装器、--dry-run、case html 三态化、asar 原地替换

### 0mv68m6gy-3b016ab20c774611a293292fce
_重要性 2，状态 active，项目 dsh-maid-vcp_

探 dsh-maid-vcp（原 dsh-raw-html，2026-10-14 改名）的 RPC：POST http://127.0.0.1:19387/dsh-maid-vcp/<方法名>，body 为信封 {"type":"client-request","rpcId":"...","method":"<方法名>","payload":{}}，取回 j.result.value（如 list-styles → value.styles 数组）。前缀路由免鉴权，桌面端也能用。

关键词：dsh-maid-vcp RPC、list-styles 探针、client-request 信封、rpcId、前缀路由免鉴权、19387、result.value.styles、插件方法调用、POST 探针

### 0mv68m6ga-da74881bb1cf4623972bbb21a6
_重要性 3，状态 active，项目 dsh-maid-vcp_

abyss-maid（深海蕾丝 · 女仆工坊风）是 dsh-maid-vcp 现存的**唯一**风格（原 13 个风格已清库，仅留它）。卡片底定稿 #121F41（比输出框亮一档、稍实），柔金 #c5a468 走线，标题字 Lanxi-朗宋，配套 maid-atelier 深海女仆工坊皮肤配色同源。文档：D:\DeepSeek Harness\Works\dsh-maid-vcp\styles\abyss-maid.md（插件已改名且走 link: 挂源仓库，路径不再是 node_modules 下）。

关键词：abyss-maid、深海蕾丝、女仆工坊风、唯一风格、121F41 底色定稿、Lanxi-朗宋、c5a468 柔金、styles 目录、风格文档路径、maid-atelier 配色

### 0mv7kf87g-e3c3f3d23a224acf8ae9de1342
_重要性 3，状态 active，项目 dsh-maid-comfyui_

老大纠正（原话「这两个用不了吗」）：小困对着官方模板的模型清单要下载 17.6GB int8_convrot 模型，老大指出本地 w4a8 版就能用——他早已自己改好 workflows\mine_qwen_image_2_1_*.json（换模型引用，节点结构与官方同构）。准则：给 ComfyUI 装模型/下大文件前，必须先盘点用户本地已有资源与自建工作流；量化格式对 ComfyUI 只是文件名引用，改工作流即可适配，不必迁就模板下载。

关键词：下载前盘点、本地已有模型、w4a8、int8_convrot、mine 工作流、量化格式、模型引用、大文件下载、ComfyUI 模板

### 0mv7k822c-43c13c578edd485bad0bb0a15e
_重要性 2，状态 active，项目 dsh-maid-comfyui_

「隐藏 cmd 窗口」的真相（2026-10-14 查证）：dsh-maid-preset v0.7.0（10-13 04:14 commit 8a4a268）起，lib/sync.js 与 lib/settings.js 的全部 git 调用都带 windowsHide:true，本机运行包与 GitHub 均已含——老大看到的黑窗口不是记忆同步的锅，是 ComfyUI 的 run_nvidia_gpu.bat（批处理天生弹窗）。解法：D:\ComfyUI\ComfyUI_windows_portable\run_nvidia_gpu_hidden.vbs（WScript.Shell.Run 窗口样式 0 静默启动）+ stop_comfyui.vbs（WMI 按命令行精确杀 main.py 进程）。以后启动 ComfyUI 双击 vbs，别再碰 bat。

关键词：隐藏 cmd 窗口、windowsHide、黑窗口、run_nvidia_gpu.bat、vbs 静默启动、stop_comfyui、记忆同步 git、ComfyUI 启动方式

### 0mv7li2s3-8b5134019e9e4c67b987b0b30f
_重要性 2，状态 active，项目 dsh-maid-comfyui,dsh_

2026-10-14 完成：第三方 dsh-comfyui（fandc520，0.5.4）已卸载，换自家 dsh-maid-comfyui（0.5.4）。异常红字根因＝旧包 peer 只到 ^0.1.7-alpha.1 不含宿主 0.2.0-rc.2，自家包补了这一档。备份：package.json.bak-comfyui-20261014-121001、cordis.patch.yml.bak-comfyui-swap、pnpm-lock.yaml.bak-comfyui-swap。

关键词：dsh-comfyui 卸载、自家插件替换、插件异常红字、peer 不兼容、0.2.0-rc.2、profile 备份、cordis.patch.yml 改名

### 0mv7h11lw-ad08f24369c9410eb7fc561255
_重要性 2，状态 active，项目 dsh-maid-vcp,dsh_

v10 补丁器整段升级 C 模块（v6.39）后重启 DSH 崩溃：补丁器重建 asar 时目录头 jsonLen 改变（+13 字节），Electron 按错位偏移读 lib/preload-app.cjs，报「Cannot use 'import.meta' outside a module」；10:34 又连崩 4 次「Unexpected token 'else'」——同为运行中热替换 asar、旧进程持旧头错位读。回滚法：app.asar.new 复制回 app.asar 即恢复。当时验证盘上所有 preload 语法均合法，纯偏移错位。**已根治（0.6.8 / 补丁 v10.2，2026-10-14，commit dae0f1e 已推 GitHub）**：replaceEntry 改追加式（新内容写数据区末尾、只动目标条目、头部补 0x20 保长维持 dataStart），运行中的 DSH 不再错位崩，重启后生效；patch-frontend-asar 开跑前 tasklist 探测 DSH 并提示，退回 rebuildEntry 整段重建时强制要求已退出。真 asar 副本端到端 11 项 PASS。旧「跑 install-all 前必须完全退出 DSH」铁律随之放宽为「建议退出以便立即生效」。备份清理：resources 下 5 份 asar 备份已删，原版留档 Works\_asar-backup\app.asar.orig-2026-09-29。另：crash 日志在 %APPDATA%\@deepseek-ai\dsh-desktop\logs\crash-*.log（混旧错误按时间甄别）；改名过渡期新旧 junction 并存报 duplicate factory registration，删旧链接即消。

关键词：asar 崩溃、热替换、header 缓存错位、jsonLen 保长、追加式写入、replaceEntry、rebuildEntry、v10.2、0.6.8、tasklist 探测、install-all、preload-app.cjs、crash 日志路径、asar 备份清理

### 0mv6hb9b7-a76eda460e364594a1ee9a58c2
_重要性 2，状态 active，项目 dsh-maid-vcp_

本机 LocalStorage 实测（2026-10-13）：`raw-html.trusted`='1'（旧版 scenery 残留，v7.3 新逻辑不读它，无害）、`raw-html.trustedBadge` 从未写过（故徽章不挂载）、`dsh-maid-scenery-mode`='art'（老大选的静态画）。可信模式确认默认开启。

关键词：可信模式默认开启、trusted=1 残留、trustedBadge 未写、徽章不挂载、scenery-mode art、静态画模式、localStorage 实测、v7.3 语义反转

### 0mv6exx6p-19fc8a24d39949cb8fd17522d7
_重要性 2，状态 active，项目 dsh-maid-vcp_

老大拍板：dsh-raw-html 的 styles/_BASELINE.md 保留（2026-10-13 原话「那就保留他」）。它是协议【风格检索】第 4 步的兜底落点，含 4 套浅底纸感色系/卡片骨架/11 个图型/动效参数，通篇标「示例，随语境重造」；scanStyles() 跳过 _ 开头文件，故不进美学面板。同目录 _INDEX.md 与 _FONTS.md 一并保留。

关键词：_BASELINE 保留、兜底基准库、风格检索第4步、示例素材库、不删、scanStyles 跳过下划线、_INDEX _FONTS 保留、浅底色系、保底不丑

### 0mv6hmrc1-c3c7eaffdd2b45ab8ad9bfd279
_重要性 3，状态 stale，项目 dsh-raw-html_

dsh-raw-html 五项该做未做（2026-10-13 审计清单）——**已全部完成并推送 v0.6.5 @c7348e5**：① v10 前端补丁器进仓库（patch/patch-frontend-asar.cjs + asar-io.cjs，代际自适应）；② 测试去硬编码（tests/_deps.cjs 定位器）；③ README.en.md 补 fork 说明；④ 清 12 风格悬空引用（DESIGN/FRAMING/examples/_inbox/_FONTS 六处）；⑤ CHANGELOG 0.6.3 重号改 0.6.2.1。25 文件 +1012 −100。

关键词：可提交更新、v8 补丁器未进仓库、install-v6 锚点失效、case html e.value、测试硬编码路径、jsdom require 崩溃、README.en 缺 fork 说明、悬空风格引用、CHANGELOG 版本重号、本地化半残

### 0mv6i2azm-2b14e085dc094045a13fd63316
_重要性 3，状态 active，项目 dsh_

皮肤已换正源（2026-10-13）：老大自己卸了 flaricy 搬运版（连带把我装的正源皮肤本体也卸了），我按指令重装 `github:Small-tailqwq/dsh-deep-whale#main&path:/maid-atelier` 并补回 bundles 条目。现状：@smalltailqwq/dsh-client-ui-skin-maid-atelier（main 分支）+ deep-whale-manager + dsh-maid-scenery 0.1.4 + dsh-video-skin，bundles 共 16 项。全 profile 零残留（dsh-external 目录不存在、lock 无 flaricy、pnpm store 无缓存）。老大原话（m08491）：「不要装回 maid-atelier-ui-bundle 噢。」

关键词：换正源、Small-tailqwq、dsh-deep-whale main 分支、maid-atelier 0.1.7、deep-whale-manager、不要装回 maid-atelier-ui-bundle、搬运版零残留、dsh-external 不存在、bundles 16 项、老大自己卸载

### 0mv6gxwbq-fd04760f52fa461f8a1dd60a1a
_重要性 3，状态 active，项目 dsh-maid-scenery_

dsh-video-skin 在亮色下用 `html[data-dsvs="on"] body`（特异性 0,1,2 + !important）把所有表面刷成纯白 rgba(255,255,255,…)，压过 maid-atelier 的冷调瓷玻璃 #f8faffb8，叠在亮壁纸上 = 惨白刺眼（老大报的「亮色界面过亮」）。暗色那边刷深灰 rgba(21,21,23,…) 所以正常。修法在融合层 dsh-maid-scenery 里用 `html[data-dsvs="on"] body:not([data-ds-dark-theme])`（0,2,2）接管四层表面：rgba(201,213,239,.88) / (209,219,243,.88) / (217,226,246,.9) / (225,232,249,.9) + sidebar (205,216,241,.88)，白纱 veil 从纯白 .22 换冷调 rgba(226,233,246,.1)。实测平均表面亮度 92%→73%，对比度 15.4:1→10.9:1。

关键词：亮色界面过亮、视频皮肤纯白表面、data-dsvs on body、冷调瓷玻璃、maid-atelier 玻璃被盖、dsvs-backdrop-veil 白纱、表面亮度 92 到 73、特异性 0、2、2 压 0、1、2、亮色覆写四层表面、暗色不动

### 0mv68qde0-0bb73645b9b142a6960a62f74d
_重要性 2，状态 active，项目 dsh_

dsh-raw-html 的「可信模式」盾锁徽章 fixed right:14px/bottom:14px z-index:900，与 dsh-video-skin 的悬浮圆钮 #dsvs-knobs-pill fixed right:16px/bottom:16px z-index:900 几乎完全同位——这是老大看到两者重叠的原因。**已解决**：v7.3 起徽章默认不挂载（badgeRequested() 门控，需显式写 localStorage['raw-html.trustedBadge']='1' 才出现），重叠随之消失。

关键词：可信模式、盾锁徽章、dsvs-knobs-pill、悬浮圆钮、按钮重叠、右下角、z-index 900、dsh-raw-html、dsh-video-skin、fixed 定位

### 0mv6excbm-1428db0573e843e785c7500d10
_重要性 2，状态 active，项目 dsh_

可信模式 v7.3 送达验证 7/7 全绿（verify-trusted-served.mjs）：磁盘 client.js 117150 B，combo URL 实抓 117219 B，含 isTrusted 默认 true、仅显式 '0' 才关、badgeRequested 门控、hover 新写法，旧写法 0 残留。结论：代码早就是新版，之前看不见是插件被 pnpm 整包回滚所致，重放恢复后三方一致，老大只需硬刷新。

关键词：可信模式验证、7/7 全绿、verify-trusted-served、117219 字节、送达确认、硬刷新生效、旧写法0残留、v7.3 落地

### 0mv6ehhi0-c6e934435f444a5ebe33decb16
_重要性 2，状态 active，项目 dsh_

styles/_BASELINE.md 不是风格文档，是协议【风格检索】第 4 步的兜底落点：只在「未命中风格 / 无工具 / 检索失败」时读它取保底参数。内含 4 套浅底纸感色系（Mono 纸/porcelain 青瓷蓝/palm 椰林绿/wire 编辑部红）、卡片骨架四件套、11 个可数单位图型、流式动效参数，通篇标「示例，随语境重造」。scanStyles() 跳过 _ 开头文件，故它不进美学面板（面板永远显示 1 个风格）。同目录另有 _INDEX.md（索引）与 _FONTS.md（字体速查）。2026-10-13 老大拍板：保留，不删。

关键词：_BASELINE 兜底基准库、不是风格文档、风格检索第4步、未命中兜底、scanStyles 跳过下划线、美学面板不显示、_INDEX 索引、_FONTS 字体速查、四色系浅底、卡片骨架四件套、11个可数单位图型

### 0mv674rjd-566bfd3b5e4942ec972252acd1
_重要性 3，状态 active，项目 dsh_

dsh-raw-html client.js hover 白底白字修复（2026-10-13）：7 处 hover 规则（aes-picker-tool / aes-picker-ok / aes-op-btn / aes-btn / aes-fontcat-add / aes-tagbtn / aes-btn-primary）背景由 --dsw-alias-button-primary-fill 改为 --dsw-alias-interactive-bg-hover-accent、字色由 #fff 改为 --dsw-alias-label-primary；另 4 处静态字色改 label-primary-foreground；保留 .aes-del:hover 与 .aes-chip-x:hover 的 #dc2626 红底白字。该修复曾被 pnpm install 冲掉，2026-10-13 已从会话记录重放恢复，现 client.js 117150 B，node --check 通过。硬刷新生效无需重启。

关键词：hover 白底白字、aes-btn:hover、interactive-bg-hover-accent、label-primary-foreground、美学面板按钮、dc2626 红底保留、client.js 117150、重放恢复、硬刷新生效、暗色主题按钮、primary-fill 陷阱

### 0mv6b7r84-6ce7a6a2b8f34906937cb3ce80
_重要性 3，状态 active，项目 dsh_

老大把 dsh-raw-html 的风格库清到只剩 abyss-maid 一套（2026-10-13 原话「去让后把其他风格删掉」）。删掉 12 个：brutalism/cyberpunk-neon/editorial-minimal/header-framing/ink-letter/maiden-diary/pop-flat/porcelain-data/wabi-sabi/warm-minimal/wire-news/y2k-glass。备份在 Works\styles-archive-2026-10-13\，_INDEX.md 重写为单行，_BASELINE.md 与 _FONTS.md 保留。

关键词：风格库只剩一套、删掉其他风格、abyss-maid 唯一风格、styles 目录清理、_INDEX 重写、styles-archive 备份、12 个风格删除、保留 _BASELINE、_FONTS 保留、美学面板 1 个风格

### 0mv68qddr-dfcfc17d86db4295bdd22b2c50
_重要性 2，状态 active，项目 dsh_

本机 DSH 版本 0.2.0-rc.2。maid-atelier 主题原作者是 Small-tailqwq/dsh-deep-whale（老大给的正源），三包均在 npm：maid-atelier 0.1.7 / deep-whale-manager（皮肤管理器）0.1.6 / orca-link 0.1.7，peer 范围 >=0.1.7-rc.1 <0.3.0-0 本机满足。2026-10-13 已按老大指示「装新的」完成换源：卸掉 flaricy 二手搬运版 @dsh-external/dsh-client-ui-skin-maid-atelier 0.0.1，装上正源 maid-atelier 0.1.7 + 管理器 0.1.6。注意两版同用 skin id「maid-atelier」，不能共存。

关键词：DSH 版本、0.2.0-rc.2、Small-tailqwq、dsh-deep-whale、maid-atelier 正源、deep-whale-manager、皮肤管理器、orca-link、flaricy 搬运版已卸、@dsh-external、skin id 冲突、peer 范围

### 0mv6b6uwi-f4c0d476467f415480b129e825
_重要性 3，状态 active，项目 dsh_

正源 maid-atelier 的两个硬事实：① 美术资源由宿主半边 lib/index.js 通过 webServer 注册前缀路由 `/skin-assets/maid-atelier` 提供，白名单只放行 sha256 命名的 png/webp（64 位十六进制文件名），所以后续融合层要引用它的图只能用这个路由 URL，不能按文件路径引用；② 它的 skin.json 里 `wiring.bundleWired: false`，且皮肤管理器首次启动检测到两套及以上皮肤会原子回退成官方默认 UI——所以重启后必须手动进「设置 → 皮肤管理」把「深海女仆工坊」选回来。skin.json 的 dshCompatibility = "0.2.0rc2"，正对本机 DSH 0.2.0-rc.2。

关键词：skin-assets 路由、webServer 前缀、sha256 文件名、白名单资源、bundleWired false、皮肤管理器首次启动、原子回退官方默认、设置皮肤管理、dshCompatibility、0.2.0rc2、重启后要选皮肤

### 0mv6b6uw7-8898e75d54e74599ac30f13367
_重要性 3，状态 active，项目 dsh_

老大拍板（m03326 原话）：「装新的」——即把 flaricy 二手搬运版主题换成原作者 Small-tailqwq 的正源。已完成：装 @smalltailqwq/dsh-client-ui-skin-maid-atelier@0.1.7 + @smalltailqwq/dsh-client-ui-skin-deep-whale-manager@0.1.6（均走 npm，过了 24h 门槛），卸 @dsh-external/dsh-client-ui-skin-maid-atelier（0.0.1），profile 的 dependencies 与 dsh.profile.bundles 均已改。装前备份 package.json.bak2/.bak3、pnpm-lock.yaml.bak2、pnpm-workspace.yaml.bak2。

关键词：正源替换、装新的、smalltailqwq、maid-atelier 0.1.7、deep-whale-manager 0.1.6、dsh-external 卸载、profile bundles、备份 bak2 bak3、npm 安装、皮肤管理器

### 0mv68rm3c-cc9c99f6daf7402cb64d029221
_重要性 3，状态 active，项目 全局_

卡片底色别自作主张：老大要的是「和输出框不打架又不糊成一片」，具体色值由他拍板。2026-10-13 小困先改成跟随宿主变量 var(--dsw-alias-bg-layer-1)，老大随即指定固定实色 #121F41——同源问题靠「比输出框稍亮一档」解决，不靠变量绑定。

关键词：卡片底色、老大指定色值、121F41、不跟宿主变量、比输出框亮一档、用户纠正、底色定稿、raw 卡片、同源但不糊、别自作主张

### 0mv60mo1p-281a17a56ddf4b358f99039968
_重要性 3，状态 active，项目 dsh_

DSH app.asar 改动面审计（2026-10-13）：相对原始未打补丁版（备份 app.asar.bak-2026-10-13T01-40-03），11470 条 packed 条目中**只有 1 个文件内容不同**——dsh/node_modules/@deepseek-ai/dsh-web-frontend/dist/assets/index-5SrrfWpU.js（633282 → 738882 B）。该文件内叠加了两个补丁且**都在**：① web boot audit 补丁（`if(o.length>0)throw new Error(` → `console.error(`，修「强制刷新页面」崩溃）；② raw HTML 渲染补丁 v8→v9。二者不冲突、共存，v9 基于含 audit 补丁的 bak-before-v8 重打。备份：bak-2026-10-13T01-40-03（原始）/ bak-before-v8（含 audit）/ bak-bad-v8（坏 v8）/ app.asar.new，共约 825 MB。DSH 升级会覆盖全部补丁。

关键词：asar 改动面审计、index-5SrrfWpU.js、audit 补丁、throw 改 console.error、raw 渲染补丁 v9、只有一个文件不同、备份占用 825MB、bak-before-v8、强制刷新崩溃、升级覆盖补丁

### 0mv67sjqx-9b00469202024b8d81576eeb89
_重要性 2，状态 active，项目 dsh-maid-preset_

meow-memory 改包内整合后 entry name 变 dsh-maid-preset/meow；profile 层补丁 name 必须同步，否则 name mismatch 静默失效——终验组合链扫出的雷。

关键词：dsh-maid-preset/meow、name mismatch、patch 层叠、静默失效、包内整合、entry name、组合链验证、promptLang

### 0mv66gwa0-4c96cacae7fd4455bd5d594a01
_重要性 3，状态 active，项目 dsh_

dsh GUI 前端补丁 v9（替代 v8）：目标 index-5SrrfWpU.js 633282→738882 B，sha 45116a3f…e81dd，与 asar header integrity 一致；asar 11470 条 packed 零不匹配。v8 版（738791 B）因 F 补丁吞掉 h/m 声明导致整个消息区白屏，已弃用，备份 app.asar.bak-bad-v8；基准备份 app.asar.bak-before-v8。asar 原地写回，需重启 DSH 生效。

关键词：app.asar、前端补丁、v9、index-5SrrfWpU、raw HTML 渲染、patch-webui-v8、fix-v9.mjs、bundle 738882、重启生效、bak-bad-v8、bak-before-v8、dsh-web-frontend、integrity 零不匹配

### 0mv66t45a-32247af4e4164eb28ed26aeeb9
_重要性 3，状态 active，项目 dsh_

dsh GUI 前端补丁 v9（2026-10-13）：目标 index-5SrrfWpU.js 633282→738882 B，sha 45116a3f…e81dd，与 asar header integrity 一致；asar 全量 11470 条零不匹配，最终 app.asar sha c55965f4…58539。基准取自 app.asar.bak-before-v8（sha 3a882d49…51f1a），坏版本备份 app.asar.bak-bad-v8。脚本 patch-webui-v8.cjs + fix-v9.mjs。

关键词：v9 补丁、index-5SrrfWpU.js、738882、45116a3f、app.asar、bak-before-v8、bak-bad-v8、fix-v9.mjs、patch-webui-v8.cjs、integrity 零不匹配、asar 原地写回

### 0mv53o3cb-625a72b42c3e4f608ea1a01aed
_重要性 2，状态 active，项目 dsh_

抓 DSH web 端需鉴权资源的方法：从 C:\Users\Administrator\.dsh\.credentials.yaml 取 client-connection/browser-session 的 secret，按 dsh-auth cookie 算法铸 token 下载 boot.html/wire.json/批次包。注意：2026-10-13 宿主重启后同法复刻 cookie 被拒（GET / → 401），401 时通时不通未定案（secret/进程未变）。**且必须用 node:http 原生请求——fetch/undici 会吞掉 cookie 头导致假 401**。

关键词：credentials.yaml、browser-session、secret、dsh-auth cookie、boot.html、wire.json、__DSH_BOOT__、鉴权抓包、401 unauthorized、批次包

### 0mv66h334-f8229e670554485c831c731f0a
_重要性 2，状态 active，项目 dsh_

dsh-raw-html 渲染补丁跨代际适配方案：在 bundle 模块作用域注入 `window.__vcpGen = {jsx:l, vc:自建, hp:自建, version:'v8'}`（新代际无通用 DOM→React 转换器，自建 vc 复刻 script 过滤/onclick→input 桥/style ref 锁九属性/href-src 白名单）；v6-inject.js 的 `__vcpVc`/`__vcpHp` 改为从 __vcpGen 取，IIFE 头插 `var f = window.__vcpGen.jsx`。

关键词：dsh-raw-html、v6-inject、代际 shim、__vcpGen、__vcpVc、__vcpHp、DOM 转 React、onclick 桥、style ref 锁、href 白名单、可信模式、vcp-root

### 0mv644mvo-644f1123af00491ebdd0af5549
_重要性 3，状态 active，项目 dsh-maid-preset_

v0.7.2 修设置页两按钮：「立即同步」force 清零空闲钟在读 mtime 之前被拨回致 due 恒假静默跳过；「测试连接」裸跑 git 直连必超时。

关键词：设置页、立即同步、测试连接、409、400、空闲钟、mtime、force、detectLocalProxies、低速让路、0.7.2

### 0mv50pia9-4a68553c38474a93b82e9187b7
_重要性 2，状态 active，项目 dsh_

强制刷新崩溃：机制已于 2026-10-12 定案（详见 0mv53o3b）；2026-10-13 已实施修复——asar 内核补丁把 audit 的 `throw new Error(` 等长改为 `console.error(`，崩溃降级为控制台报错（补丁详情/备份见 0mv60mo1），用户重启+刷新验证弹窗不再出现。【待决】是否向 DSH 官方提 issue（草稿需先过用户目）。旧「两清单分家」方向已作废。源码抽取件在 Works\asrc\。

关键词：强制刷新崩溃、机制定案、待决官方issue、规避方案、重启DSH、两清单假说作废、诊断报告已交付、billion-context

### 0mv621ie3-d78e58a1f8e34ff69a6e336e9b
_重要性 2，状态 active，项目 dsh-maid-preset_

同步引擎 0.7.0 前有个卡死病根：pull --rebase 撞记忆文件冲突后 workcopy 卡在 (no branch, rebasing main)，main 引用停在老历史，push 永远 non-fast-forward 且被误判为网络类退避，引擎自 10-12 起就没推成功过。0.7.1 加基线自愈：识别 non-fast-forward/conflict 为 baseline 类，abort 后 reset --hard origin 再重做导出+commit+push。

关键词：基线自愈、non-fast-forward、rebase挂起、no branch rebasing main、同步引擎、卡死、reset --hard、记忆同步、冲突、退避、0.7.1

### 0mv51x5l6-aa51d03863c6449ea3a9d160e5
_重要性 2，状态 active，项目 dsh_

dsh 内核 entry._init 确实吞 import 异常（catch→logger.error+return，不建 fiber、不进记录表，故 audit 只打「see console」空话）——但 2026-10-12 查实：强制刷新崩溃的真因不在此处，而是 entry.disabled 被卸载监听误写导致 refresh 永久短路（见 0mv53o3b）。

关键词：_init吞错、logger.error、see console空话、importError无记录、真因区分、disabled误写、refresh短路、内核机制

### 0mv51x5lf-f0a6f9e4233343c7adfc0cd5fd
_重要性 2，状态 active，项目 dsh_

（已更正）「plugins/modules 两清单分家」假说于 2026-10-12 被推翻：parseBootManifest 是单循环、同源生成两视图、无任何过滤，不存在分家。强制刷新崩溃真因是渲染侧卸载监听误写 entry.disabled + refresh 闸门短路，详见 0mv53o3b。

关键词：两清单分家已推翻、parseBootManifest、同源生成、无过滤、假说更正、强制刷新崩溃、disabled误写、boot图

### 0mv52mce7-23a00551992f4b12a8470fd123
_重要性 2，状态 active，项目 dsh-maid-preset_

同步失败绝不装哑：push 失败标 pushFailed 下轮重试并写 $DSH_HOME/maid-sync.log；状态文件 maid-sync-state.json 记已同步水位，删掉即触发基准同步。

关键词：同步状态文件、pushFailed、失败重试、maid-sync.log、同步水位、基准同步、备份失败、日志位置、幂等同步、无变化跳过

### 0mv4z8jxx-971e7d005f384bd698c4efcbfc
_重要性 2，状态 active，项目 dsh_

meow-memory 已移出 profile 的 dependencies 与 bundles，改由 dsh-maid-preset 声明依赖并在其 cordis.patch.yml insert 它的 entry 行。

关键词：meow-memory、dsh-maid-preset、bundles、profile 依赖、entry 行、cordis.patch.yml、传递依赖、插件加载、bundle patch


## 经验（lesson）

### 0mv9gb5k7-1e880ae7bbb84898b6de6a71ad
_重要性 3，状态 active，项目 dsh-maid-comfyui_

改插件库里的工作流条目时踩的三个坑（2026-10-15 覆盖两条老流时实测）：①**参数校验字段名是 `inputKey` 不是 `inputName`**——写错时校验结果全部显示 undefined，看着像"参数全对不上"其实是自己读错字段。②**参数表的 `default` 必须跟 workflow 节点里的值对齐**，否则 run 时 default 会把节点值**覆盖回旧的**（改了节点没改 default = 白改，静默用旧值）。做法：从 workflow 节点读值写回 default（脚本 _staging\sync_params.mjs）。③**`workflows.json` 顶层是数组不是对象**（写 `j.workflows` 会 TypeError: not iterable），且**插件没有 PUT 路由**（routes.ts 只有 GET/POST /comfyui/workflows + delete），覆盖只能直接改文件——改前先校验每个参数的 nodeId+inputKey 都还在，对不上就中止不写。

关键词：inputKey 不是 inputName、参数校验字段名、default 覆盖节点值、sync_params、workflows.json 顶层数组、没有 PUT 路由、覆盖入库、nodeId inputKey 校验、静默用旧值、改库前先备份

### 0mv6dwfrn-159250be0cfd4db999c41f31a1
_重要性 2，状态 active，项目 dsh_

全量 `pnpm install` 会解析所有依赖，远程依赖（github:/git+https:）网络不通时 lockfile 无法重算。此时可手工编辑 pnpm-lock.yaml 对齐（importers 段写 `specifier:`/`version:`，packages 与 snapshots 段的远程条目删掉），再用 `--lockfile-only --ignore-scripts` 配 git url 改写 + 代理跑一次验证；实测手工改的两行会被 pnpm 保留认可。**补一条（2026-10-15 实测，换 file: tgz 版本时）**：手工对齐还得改 `integrity:`——新值＝对目标 tgz 现算的 sha512，格式 `sha512-<base64>`（`crypto.createHash('sha512').update(fs.readFileSync(tgz)).digest('base64')`）；只改路径不改 integrity，pnpm 重装时会因校验不符报错。改完先备份 lockfile（`pnpm-lock.yaml.bak-<用途>-<时间戳>`），再核旧 tgz 名残留计数为 0。
（原举例已过时：dsh-maid-scenery 现为 git+https 非 ssh，dsh-video-skin 已于 2026-10-14 彻底卸载。）

关键词：手工编辑 pnpm-lock.yaml、lockfile 手工对齐、integrity sha512、换 file: tgz、lockfile 备份、importers 段、全量 install 卡网络、lockfile-only ignore-scripts、远程依赖解析失败

### 0mv9ddrfl-01948bbd9539403dabbc0edd69
_重要性 2，状态 active，项目 dsh,dsh-maid-lane-fix_

判断「本机这份上游包是哪个版本」不能只读 package.json 的 version 字段——2026-10-15 实测：部署副本代码与上游 v2.3.0 逐行零差异，版本号却还写着 2.2.0（手拼覆盖时没改）。可靠做法是拿上游各 tag 逐行比：`git show v2.3.0:src/upstream.js | diff - <本地文件> | grep -c '^[<>]'`，谁接近谁；文件级差异行数比版本号诚实。（当晚已从 tag 重新组装并装成正式 v2.3.0 包、版本号归位，但这条方法仍通用。）同理，包目录里「多出来的文件 / 少掉的备份」也要单独查（`.lane-fix-orig/` 这类还原备份不在上游 files 白名单，sweep 清理白名单外文件时会一并吃掉，功能不受影响但 `--restore` 无源可回）。

关键词：版本号不可信、判断本机包版本、git show tag diff 逐行比对、package.json version 撒谎、v2.3.0 vs 2.2.0、sweep 清掉备份、lane-fix-orig 消失、restore 无源可回、上游 files 白名单

### 0mv9g1vha-ebb8fc51a8fb4012b8438724fd
_重要性 3，状态 active，项目 dsh-maid-lane-fix,dsh_

lesson（2026-10-15 实测）：运行时产物不能当唯一还原依据——`.lane-fix-orig/` 这类「补丁前自动备份」只活在被打补丁的包目录里，node_modules 一重装/上游一升级/清理脚本一扫就没了，`--restore` 当场 exit 1。正解＝把上游原文（gzip 后 179KB）连同 SHA256SUMS 一起提交进仓库，还原依据跟代码走版本控制；并让冒烟断言「解压后 sha256 对得上清单」，改基线必连清单一起改。同理，上游 release 页有时只发安装包不发 tgz（v2.3.0 只有 exe），包得自己 `git archive <tag> <files 白名单>` 打——注意上游 files 白名单不含 package.json 自身。

关键词：还原依据、运行时产物、lane-fix-orig、基线备份、git archive、files 白名单、package.json 自身、release 资产、SHA256SUMS、冒烟断言

### 0mv6i5od6-b1bf6270c61a4c8ab9fdc10b48
_重要性 4，状态 active，项目 dsh-maid-vcp，被纠正_

补丁器锚点要「先探测符号表再生成」，不能写死压缩后变量名——DSH 前端每次升级压缩器都会重新命名（jsx f→l、React R→j、vc(n,r)→vc(e,n)），写死的锚点一失效整个补丁全盘中止（2026-10-13 白屏事故根源）。正确做法：先扫描 bundle 推导符号表，再按探测结果生成锚点；探测不到的增强能力跳过并告警、基础能力照常安装，绝不整包中止。

关键词：锚点写死会失效、压缩后变量名、代际自适应补丁、符号表探测、升级改名、补丁全盘中止、白屏事故根源、降级跳过不中止、前端 bundle 补丁、minifier 重命名

### 0mv6d4mjr-8f31642c70eb49dba9c641d062
_重要性 4，状态 active，项目 dsh-maid-vcp_

dsh-maid-vcp（原 dsh-raw-html）的本地改动曾被 pnpm install 整包冲掉（2026-10-13 三次）——依赖写成 `github:plolpl789/dsh-raw-html`（远程 tarball），市场里点「更新 dshmarket / 卸载皮肤」触发 install 就重新解包覆盖 node_modules，本地编辑全丢。**已修复**：依赖改为 `link:D:/DeepSeek Harness/Works/dsh-maid-vcp`（目录已随插件改名），pnpm 只在 node_modules 建符号链接指向源目录，install 只重建链接、永不复制覆盖；node_modules 里同时建了 junction。改动面：profile 的 package.json + pnpm-lock.yaml 均已对齐（plolpl789 残留 0 处）。

关键词：pnpm install 覆盖本地改动、github 依赖 tarball 重装、插件市场触发 install、link 协议、file 依赖陷阱、符号链接指向源目录、node_modules junction、lockfile 对齐、防复发、dsh-maid-vcp 改名后路径

### 0mv7iwhmt-6724cec79eb4445b92e01b71ad
_重要性 3，状态 active，项目 dsh_

our-free-model 的覆盖风险（2026-10-15 更新）：① **插件内升级会覆盖整个包目录**（updater 从上游拉签名 manifest 覆盖）；② **profile 的 `file:` 依赖更狠**——pnpm 重装时从 `_staging/*.tgz` 重新解包，把改好的 node_modules 原地冲掉（10-15 14:21 实测发生，当时是 2.1.0.tgz 把 2.2.0 冲回 2.1.0）。结论：任何「改 node_modules / 换 tgz / 升级」的修法都活不过下一次 pnpm 重装——除非连 tgz 或依赖声明一起换，或改走中间层（dsh-maid-lane-fix）路线。③ **过时修正（2026-10-15 晚）**：早前记的「v2.2.0 标签不含 #330 修复、修复只活在 main」已被上游 **v2.3.0** 推翻——v2.3.0（2026-10-15 14:57 北京，PR #342，55 文件 +1521/−991）已把五道门修法正式收进 release，且本机部署副本的 src/upstream.js 等核心文件与 v2.3.0 逐行零差异。另：插件自带 hot-reload 涨 reloadCount 但内核模块缓存 purge 不到 src/upstream.js，改完必须重启 DSH 桌面端。

关键词：插件内升级覆盖、pnpm 重装冲回旧版、file 依赖 tgz、v2.3.0 已收编修复、v2.2.0 标签无修复已过时、hot reload 无效、必须重启 DSH、改 node_modules 活不过重装、中间层路线、PR 342

### 0mv970385-6584b52a626b47c091cd2acf10
_重要性 3，状态 active，项目 全局_

老大问「还有什么可以提交更新上去吗 / 除了 X 还有什么」时，**要的是审计清单，不是立刻动手**（2026-10-15 实测）：小困把这一摊盘成 8 项、分「必做 / 该做 / 该清」三档给出，老大按清单挑。正确姿势：先审计仓库与工作区实际状态（脚本残留、临时产物、老配置没跟上的参数），列出「该做未做」并排序，**让老大挑，不擅自全做**；老大一旦说「全清」才是真放手，可自行执行，但保命备份要自己判断留下并说明理由。
**清单要带编号**——老大批复时用的就是编号（原话 m01335："该做，1 补上。2本地这些可以推到lane-fix 上吗？该清，3、4清理，5是相关哪个插件的？"），没编号他会自己造编号反而容易错位。**汇报前先回验**：说「已推/已存档」之前，实地 `ls docs/` + `git status --short` 确认文件真在、工作区真干净（2026-10-15 实测这么做才敢落汇报）。
另一条：产物要「零信息增量不留」——老大原话「是文本的话，就不保存了」，抄一份自己刚输进去的提示词没有价值，清理时连逻辑一起删干净。

关键词：还有什么可以提交更新、收尾打包、审计清单、必做该做该清、让老大挑不擅自全做、全清才是真放手、零信息增量不留、清理残留、该做未做清单、收尾习惯

### 0mv90a1lf-355244b7ad0f4bb0ad50205f4d
_重要性 3，状态 active，项目 全局_

pnpm 11 的 minimumReleaseAge 供应链门禁会在 pre-flight 拒掉 lockfile 里发布过新的条目（ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION），表现是 install/update/add 全部 exit 1。解法：命令行一次性覆盖 `--config.minimumReleaseAge=0`（不动配置文件）。另注：pnpm add 时可能自动往 pnpm-workspace.yaml 的 minimumReleaseAgeExclude 补行（本机被补的是 billion-context@0.1.197）。

关键词：pnpm、minimumReleaseAge、supply-chain policy、ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION、lockfile 校验失败、pnpm update 失败、pnpm add、minimumReleaseAgeExclude、billion-context、config 覆盖

### 0mv90qevz-6d18c51d318543948d09e61ac2
_重要性 3，状态 active，项目 dsh-maid-preset_

跨机器记忆同步的真相（2026-10-15 实测钉清）：①「同 repoUrl = 同仓库汇总」成立——老大说得对，多台机器只要 maid-settings.json 填同一个仓库地址就都汇到那儿。②但汇到仓库 ≠ 本机检索得到：sync.js 只有 push 方向，本机 agent 读的是本地 .dsh-meow/memory.db，别台机器的条目不会自动回流。③更严重的是会被顶掉：导出是全量重建、以推送方活库为准，后推的覆盖先推的（详见同项目红线 lesson）。实测存量：远端历史快照 457 条（14 session，12 个本机从未出现）vs 本机活库 227 条（8 session）；当前远端 HEAD 只剩 211 条本机记忆。④异机身份线索：那批条目里写着 C:\Users\Kayle\.dsh——另一台机器的 Windows 用户名是 Kayle，本机是 Administrator。

关键词：记忆同步、跨机器、repoUrl 相同、汇总到仓库、不回流活库、单向 push、sync.js reset --hard、工作副本 maid-sync、本机活库、远端独有条目、手工合并、多台电脑记忆

### 0mv90qewi-1119b462249246e6b5e18463dc
_重要性 3，状态 active，项目 dsh-maid-preset，被纠正_

【两条独立的路，别混】dsh-maid-preset 的记忆「播种」与「同步」是两条互不相干的机制（2026-10-15 代码+实测核，v0.7.4 后状态）：
①**播种**（lib/index.js 的 seedWorkspace）只看 config.seed.enabled 与包内 memory/memory.db 是否存在，把种子复制进「尚无 memory.db 的空白工作区」，已有活库绝不覆盖；种子是 files 白名单里的 memory/ 三件，随 github: 安装的 tarball 一起下发。**地址不参与播种**。
   ⚠️ v0.7.4 起 seed.enabled **出厂默认 false**（别人装上不吃种子记忆）；本机由 profile 覆盖段设 true。
②**同步**（lib/sync.js）才依赖 repoUrl——这才对应老大「记忆看仓库地址」的设计：地址空＝待机+各存个人记忆，同地址＝汇总共享。出厂 repoUrl 也为空（新设备隐私红线）。
老大原话（2026-10-15）：「如果仓库不一样就不会同步记忆，而是另外存储他个人的记忆。仓库一样就会同步记忆，共享记忆。」——他讲的是**同步**这一层，与代码一致；小困曾把播种和同步混成一件事去反驳，那是错的（讲机制别只说一半，也别把老大谈设计当成谈事实）。

关键词：随包分发、种子播种、memory.db 种子、files 白名单、github 安装带记忆、seedWorkspace、空白工作区播种、不覆盖已有活库、同步仓库兼分发源、讲机制别说一半

### 0mv916a99-52af04e7f2e14cb0879bf18c59
_重要性 4，状态 active，项目 dsh-maid-preset_

【红线】跨机记忆同步会互相顶掉（2026-10-15 实测）。preset 的导出是**全量重建**（export.js 重写 memory/ 三件），且以**推送方活库**为准 → 两台机器共用同一 repoUrl 时，后推的那台会把先推的那台的全部记忆顶掉，不是合并。实证链：异机 10-14 推 c35cefa(442条)、c7e2513(457条，含 12 个本机从未出现的会话/346 条)，本机 10-15 02:39 推 b6f9df3(203条)——b6f9df3 的 parent 正是 c7e2513，即本机用 203 条把 457 条覆盖了，当前远端 HEAD（211条）里异机记忆已不存在，只在 git 历史里留痕。git 历史是唯一可恢复来源。防范：多机共用仓库前要么约定「只一台机器推」，要么给同步引擎补一次「推送前先 merge 远端快照」的拉取合并。

关键词：跨机记忆同步、互相顶掉、全量重建导出、后推覆盖先推、多机共用仓库、记忆丢失、git 历史可恢复、c7e2513、b6f9df3、推送前合并远端、单向 push 隐患、多台电脑冲突

### 0mv91pm8m-5d38d0bc93b84c08822492390a
_重要性 3，状态 active，项目 dsh-maid-preset，被纠正_

小困教训（2026-10-15，老大两次校正后总结）：讲插件机制时，**引擎层的默认值 ≠ 随包出厂配置**。preset 的 sync.js 里 repoUrl 默认空（看着完全符合「新设备默认空」的设计），但随包 cordis.patch.yml 会把它写成具体地址——只看代码默认值就下「符合设计」的结论会漏掉一半。查「默认行为」必须同时看三处：①代码 DEFAULTS ②随包/出厂配置文件 ③profile 或设置文件的覆盖层。这条适用于任何「默认值」类问题。

关键词：引擎默认值、随包出厂配置、默认行为三处、DEFAULTS 不等于出厂值、cordis.patch.yml 覆盖、profile 覆盖层、查默认行为的方法、只看代码会漏

### 0mv92kndp-d8f9e310d3b04641bb44d01fa5
_重要性 3，状态 active，项目 dsh-maid-preset，被纠正_

小困教训（2026-10-15）：preset 是按 `github:` 依赖装的，profile 里跑的是 node_modules 下那份**拷贝**（LinkType 为空＝普通目录），改了 Works 源码**运行时一点没变**——实测改完的 lib/sync.js、lib/settings.js、cordis.patch.yml 三份 md5 与 node_modules 那份全部不同，且旧 yml 里仍写着写死的 repoUrl。所以「改完即生效」只对 link: 挂载的插件成立（vcp/comfyui/lane-fix/tts-fix/patch-kit），github:/git+https 的（preset/scenery）必须 `pnpm update` 重装才进 profile。改前先 `Get-Item <包目录> | Select LinkType` 判断挂载方式，别以为改源码就等于改线上。

关键词：改源码不等于改线上、github 依赖是拷贝、node_modules 普通目录、LinkType 判断挂载方式、pnpm update 重装、link 挂载即改即生效、preset 更新要重装、md5 比对验证、运行时代码来源

### 0mv95704c-4a41a4d93af348579b6d5d138e
_重要性 2，状态 active，项目 dsh-maid-preset_

小困教训（2026-10-15）：selfCheck 的「git 身份」一项在冒烟脚本里会**误报 ❌**——scripts/smoke-v070.mjs 空参调用 `selfCheck()`，而真实运行时是 `selfCheck(config?.sync?.identity)`（lib/index.js:181）。在「本机 git 全局配置为空、身份由 cordis 配置提供」的机器上（本机正是如此）必然假红，曾让排查走偏一下。已修：脚本改为从设置文件读 sync.identity 一并传入。教训——**跑自检/冒烟前先确认它的调用方式与运行时一致**，否则会把「调用姿势错」当成「真故障」。

关键词：selfCheck 假红、git 身份误报、smoke-v070、调用姿势不一致、空参调用、运行时传 sync.identity、自检误导、排查走偏、本机 gitconfig 为空

### 0mv95aid8-a362a2c8bbd24daf81ecbe8f19
_重要性 3，状态 active，项目 dsh-maid-preset_

小困教训（2026-10-15）：dsh-maid-preset 仓库有**两条并行的推送线**——① 记忆同步引擎（每 10 分钟空闲自动 commit+push 记忆快照到仓库 main）② 手工提交代码/文档。两条都推同一个 main，所以**手工提交前必须先 fetch 对齐**，否则 push 会 non-fast-forward。本轮实测：准备提交 v0.7.4 时发现本地落后远端 **6 个提交**（全是记忆引擎推的），先 `git merge --ff-only origin/main` 对齐才提交成功。同理，代码手工提交与记忆引擎交替运行时，`git status` 看到的 working tree 改动可能混有记忆文件（memory/ 三件）。做法：提交前 `git fetch && git rev-list --count HEAD..origin/main` 看落后多少，非 0 先 ff 对齐，提交时用 `git add <明确文件>` 而非无脑 `-A`，避免把记忆引擎正在写的 memory/ 一起卷进代码提交。

关键词：两条推送线、记忆引擎也在推、手工提交前先 fetch、non-fast-forward、ff-only 对齐、落后远端提交、git add 明确文件、memory 三件混入、preset 仓库并发推送、提交前对账

### 0mv95svvm-7e50a8e65df54f70a3a114807d
_重要性 3，状态 active，项目 dsh_

小困教训（2026-10-15）：判断「插件能不能加载」**不能拿 node 直接 import 它的入口来验**——宿主侧插件会 import 自己的 peer 依赖（如 `@deepseek-ai/dsh-tools`），这些包住在**宿主 app.asar 内**（`/dsh/node_modules/@deepseek-ai/...`），profile 里根本没有；直接 import 必然报 MODULE_NOT_FOUND，但那是**假红**，插件在宿主的 loader 上下文里跑得好好的。本轮就这样误判过 ego-browser「加载失败」。正确判据：① 该包是否进 profile 的 `dsh.profile.bundles`（不进就不加载）② cordis.yml 里有没有它的 entry ③ peer 依赖是否由宿主提供（对照 cordis.yml 的 entry 名单，如 `@deepseek-ai/dsh-tools` 是宿主 entry）。真要看加载，得看宿主启动日志，别拿裸 node import 当判据。

关键词：插件加载判据、裸 node import 是假红、peer 依赖宿主提供、app.asar 内 dsh-tools、MODULE_NOT_FOUND 误判、bundles 才加载、cordis.yml entry、ego-browser 加载失败、宿主 loader 解析、别拿裸 import 当判据

### 0mv95vwzg-33e88ecbdee94184b6530d0f3e
_重要性 3，状态 active，项目 dsh-maid-patch-kit，被纠正_

【已修复 2026-10-15，commit tts-fix 2e2bf40 / patch-kit 8dd83b4】维护层安装器的门禁问题与解法：
dsh-maid-tts-fix 与 dsh-maid-patch-kit 的 `scripts/patch.mjs install` 原先只跑裸 `pnpm install`（spawnSync 不透传参数），撞上 profile lockfile 里的 `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION` 即 exit 1，报「补丁可能没打上」——而那一刻补丁的登记与文件其实已写好，只差 install。
**现已修**：`runPnpm` 加 `retryPolicy` 选项，裸跑失败自动带 `--config.minimumReleaseAge=0` 重试一次（仅本次调用、不改配置，默认仍受门禁保护）。install / 补丁缺失时的 add 两处已挂上。实测裸跑 install 全绿。
关键细节：环境变量 `npm_config_*` **无效**，只有命令行 `--config.` 前缀有效。手工补跑时代码形如 `node <pnpm.mjs> install --config.minimumReleaseAge=0`。

关键词：patch.mjs install 卡住、裸 pnpm install 不透传、ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION、补丁登记已写好只差 install、手动补跑 install、npm_config 环境变量无效、config.minimumReleaseAge=0、patch.mjs verify、维护层安装器缺陷

### 0mv967yaj-2ad0af77a4154fabbd377ee135
_重要性 4，状态 active，项目 全局，被纠正_

小困教训（2026-10-15，自己造成的坑）：**用 `https://x-access-token:<PAT>@github.com/...` 这种 URL 做 git 操作，会在 Windows 凭据管理器里把同一张 PAT 另存出一条 `git:https://x-access-token@github.com` 副本槽**。之后任何 git 操作（credential fill / push）都可能弹「Select an account」让人选，选那个副本会报「字符串绑定无效」。实测两槽的 token sha256 不同（aaef61… vs 0233b1…），说明副本是独立存储、不是同一槽的别名。**根因预防**：别在 URL 里嵌 `x-access-token:` 前缀，改用系统凭据（`git credential fill` 取 PAT 后走 `origin` 直接推，或 `-c http.extraheader`）。清理：`cmdkey /delete:LegacyGeneric:target=git:https://x-access-token@github.com`（删副本不影响推送）；核对用 `git-credential-manager github list`，应只剩真实账号名。2026-10-15 本轮小困反复用该 URL 推了多次，弹窗随即复现——**自证了因果**。

关键词：x-access-token 副本槽、Select an account 弹窗复现、字符串绑定无效、凭据管理器多出账户、git credential fill 弹框、别在 URL 嵌 x-access-token、cmdkey delete LegacyGeneric、git-credential-manager github list、PAT 副本、推代码别用带前缀 URL、自证因果

### 0mv96tj4a-e7d22f4a48054cbf841ba27fc1
_重要性 3，状态 active，项目 dsh-maid-tts-fix，被纠正_

小困教训（2026-10-15，老大一问「音色有弄好吗」立即暴露）：给 xiaomi-tts 配 apiKey 时，小困**直接抄了插件出厂 cordis.patch.yml 那份 config 整段**——结果把老大千挑万选的音色定稿覆盖成出厂默认（「青年女性…」），并把 model 写成 `mimo-v2.5-tts`（定稿要求 `mimo-v2.5-tts-voicedesign`，**只有这个模型才会发送 voiceDesignPrompt**），还漏了定稿配套值 readScope/voiceRate。
教训两条：① **抄出厂默认前先查有没有「定稿」**——本项目音色定稿在 `dsh-maid-tts-fix/voice-refs/prompt.md`（C 组，2026-10-14），落点两处 voiceDesignPrompt / voiceDesignCustomPrompt 必须逐字一致；② 填配置别整段照搬，逐字段核对目标值（尤其 model 这种决定功能是否生效的字段）。已修正并实测：定稿提示词真打 API，HTTP 200、返回约 10 秒音频。

关键词：抄出厂默认覆盖定稿、音色定稿被盖掉、model 写错功能不生效、mimo-v2.5-tts-voicedesign、voiceDesignPrompt 才发送、voice-refs/prompt.md 定稿、两处提示词必须一致、填配置别整段照搬、逐字段核对、音色实测出声

### 0mv977vx0-b736d2c1bf7748b583eb1c08f3
_重要性 2，状态 active，项目 dsh-maid-preset_

maid-sync 手动补推流程（2026-10-15 实测，两轮验证）：① 跑 `sh "D:/DeepSeek Harness/Works/_staging/node.sh" scripts/export-memory.mjs "D:/DeepSeek Harness/Works/.dsh-meow/memory.db"`（官方导出接口，活库＝Works/.dsh-meow/memory.db）导出到 maid-sync/memory/；② 在 C:/Users/Administrator/.dsh/maid-sync 里 commit + push origin main。**身份问题两种解法**：临时 `git -c user.name=Valorine97417 -c user.email=Valorine97417@users.noreply.github.com commit`，或干脆 `git config --local user.name/email` 一次配好（2026-10-15 第二轮实测：配了 local 之后普通 commit 即可，该仓库历史作者就是 Valorine97417）。对账口径：settings sync.minImportance=2，该上船条数＝status≠archived 且 importance≥2；**直接查活库 active 合计更快**（`select count(*) from <表> where status='active' or status is null` 六表相加）——2026-10-15 实测活库 250 / 副本 247，差 3 条，补推后 commit 730280f 上线。

关键词：maid-sync 补推、export-memory.mjs、Author identity unknown、git config --local、Valorine97417 noreply、minImportance 2、对账口径、活库 active 条数、记忆上船、dsh-maid-preset、memory.db、收尾主动补推

### 0mv98599x-4e4921316d7042019ffaa09bfc
_重要性 2，状态 active，项目 dsh-maid-lane-fix,全局_

对外留档/打包提交时，不要把过程噪音一起搬过去（2026-10-15 实测）：`Works/dsh-our-free-model` 本地 ahead 4 笔，其中 `c5f7559 chore: drop scratch repro scripts` 是删临时探针脚本、而它前一笔又是把这些脚本加进来的——这类「加了又删」的 commit 对外零价值。压成一份 patch 时只留 3 笔实质改动（规范时间前缀 / request id clamp / 剥 UA 版本号），并在档案 md 里注明「第 4 笔是删临时脚本，没内容，略去」，让对方看得懂为什么不齐。同理：commit message 写清「为什么这么改」与「实测结论」，档案里也要写「为什么没建 fork / 为什么不进 files 白名单」——理由比改动本身更容易丢。

关键词：对外留档、压平噪音 commit、加了又删的提交、patch 只留实质改动、档案写明略去哪笔、commit message 写理由、为什么不建 fork、files 白名单、上游补丁归档

### 0mv97x5pm-e4186d091ad844beab5d3b44ba
_重要性 3，状态 active，项目 全局_

被推翻的结论必须立刻从**已发布文档**里撤掉，不只改记忆（2026-10-15 踩到）：lane-fix 的 README 里「本机出口过不去、上游还看出口/TLS 维度」这条错结论，在记忆里已更正、但文档里还挂着两处，0.3.1 推送时**跟着一起推上了公开仓库**——是老大顺口一问才翻出来的。教训：更正结论时，清点范围要包括 README / 注释 / commit message 这些对外可见的载体，别只改记忆库。

关键词：结论更正、README 残留错结论、已发布文档、对外可见载体、推送前自查、记忆与文档不同步、注释 commit message、撤回错误结论、公开仓库、翻文档才发现

### 0mv97cgtk-a59303f241cc471892f4e2e095
_重要性 2，状态 active，项目 全局_

用 GitHub API 解归档（2026-10-15 实测有效）：`PATCH https://api.github.com/repos/<owner>/<repo>`，body `{"archived":false}`，用 PAT 走 `git credential fill`（host=github.com）取，权限够就 200 且 `archived` 变 false，随即 `git push` 正常。注意：**归档仓库在网页上也能解，但 API 更快**；archive 是 repo 级属性，与 private/public 无关（本机这个仓库 private 且归档）。另：PAT 别落盘到 Works 下留残留——用完立刻删临时文件。

关键词：解归档、GitHub API、PATCH repos archived false、read-only 403、archived 仓库、PAT 取用、git credential fill、push 被拒、临时文件清理、api.github.com

### 0mv966bib-b9d7321e4524419596e81a4cf4
_重要性 3，状态 active，项目 dsh_

排查上游 403 的正确姿势（2026-10-15 实证）：**把上游 main 的源码下载下来当活体探针**——codeload 拉 tar.gz 解到 _staging，用 Node 直接 `import` 它的 src/upstream.js，调它自己的 mintSessionId / gatewayHeaders / endpointFor / applyFingerprint 生成请求，再用原生 https 单变量对照。这样量出的 200/403 矩阵才是真值，一次跑完。教训：① **PR/issue 文档描述不等于实测**——PR #330 说缺 x-opencode-session-id 会 403，实测删掉仍 200；② 上游判据会漂移（旧的「两道门」现在是五道），任何旧结论都要重测再信；③ 别用 fetch（该环境 globalThis.fetch 不可用），用 node:https；④ **探针模型必须从当前 `/inference/v1/models` 清单里取**——用已下架的模型（如 ling-3.1-flash-free）会拿到 400「Model is unavailable」，那是模型没了、不是闸门，把它读成 403 会得出「本机出口过不去」这种大错结论（小困当时正是这么误判的，同日复测推翻）；⑤ 两轮实测结论相反时，**先怀疑探针（模型/清单/请求构造），再怀疑上游**。

关键词：活体探针、上游 main 源码、单变量对照、node https、PR 描述与实测不符、判据漂移、探针模型下架、400 不是 403、清单里取模型、先怀疑探针、403 矩阵、重测再信

### 0mv97a0tk-06ebefd0c81d48bdb220dd8e47
_重要性 3，状态 active，项目 dsh_

按 npm `files` 白名单当清理依据会误删两样东西（2026-10-15 实测踩到）：① **白名单通常不含 `package.json` 自身**（上游 our-free-model 的 files 只有 12 项，没有它），拿它 sweep 就把包自己的 package.json 删了；② 白名单是**文件级**——`vendor/channel-pack/pack.js` 只授权那个文件，不代表 `vendor/channel-pack/` 这个中间目录可以存在，目录级判断会把整个中间目录清掉。正确做法：白名单数组末尾手动补 `'package.json'`，且 sweep 时对目录只删「白名单里没有任何一项以该目录为前缀」的那些。校验时逐文件比 size + base64，别只比条数。

关键词：files 白名单、sweep 误删、package.json 不在白名单、中间目录被清掉、文件级授权、逐字节校验、vendor channel-pack、npm 包结构、覆盖部署、白名单当清理依据

### 0mv807trj-08fa0adc8e564dc09d897c4c50
_重要性 3，状态 active，项目 dsh-maid-preset_

meow-memory 自动同步的「空闲钟」会被**持续写入**卡住（2026-10-14 实战）：同步引擎判据是 `pending && (now - lastChangeAt) >= idleMinutes×60000`，而 `lastChangeAt` **锚定活库 mtime（含 -wal）**。所以只要会话在不停地写记忆（比如一整轮排查连续 remember/update），钟每轮被推后、**永远 due=false**，`maid-sync.log` 里能看到「同步已启动」之后长时间没有「导出/PUSH」行，`maid-sync-state.json` 的 mtime 也停在上一次推送时刻。**这不是故障**，是防刷爆历史的刻意设计（idleMinutes 默认 10）。
**手工补推的正确姿势**：用插件自带的官方导出接口（别用 `VACUUM INTO` 直接覆盖，会 `output file already exists`；先删旧文件也别急——要的就是精选门槛），即
`node -e "import('file:///…/dsh-maid-preset/lib/export.js').then(m=>m.exportMemory('<活库>','<副本>/memory/'))"`，
再在副本目录 `git add -A && git -c user.name=Valorine97417 -c user.email=Valorine97417@users.noreply.github.com commit -m "sync: …" && git push origin main`——**本机没有全局 git 身份，commit 必须用 `-c` 兜底，否则 Author identity unknown 直接失败**（这个坑在 preset 副本仓一样会踩）。
导条数应等于「status≠archived 且 importance≥maid-settings.json 的 sync.minImportance（默认 2）」的条数，可据此核对是否漏推。
**收尾必做对账**（2026-10-15 实测）：长会话结束时活库 243 条、副本还停在 231 条——**12 条滞留**。用官方接口重导（307200B，条数不变是因为 SQLite 页大小固定，别拿体积当判据，要看条数）+ 补 push，commit d2fd834 上线。老大习惯在收尾时问「可以上船的记忆弄上去了吗」，小困应**不等他问就主动对账补推**。
如果你确实需要更多细节，可以直接去聊天记录里搜索相关关键词。

关键词：空闲钟 due false、lastChangeAt 锚定 mtime、持续写入卡住同步、手工补推记忆、exportMemory 官方接口、commit 身份 -c 兜底、Author identity unknown、maid-sync 副本仓、Valorine97417 noreply、收尾主动对账水位、条数对账别看体积、minImportance 门槛、滞留 12 条

### 0mv96jw37-5fdb6110f28f439dafb163c4ee
_重要性 3，状态 active，项目 dsh-maid-comfyui，被纠正_

【被老大纠正 · 2026-10-15】老大问「保质量的前提下提高生图速度，这个有完成吗？」——小困之前把**旧流程**（参考图经 VAEEncode 作底、denoise 可调）下测出的提速结论，直接套用到**新流程**（参考图=外观参考、空白 latent 起画、denoise=1）上，没有重测就宣称完成。教训：**流程语义一变，之前所有实测基准全部作废**，参数不能沿用——旧基准里的 res512/megapixels0.75 在新流程下直接崩（res896 就结构坏掉）。以后凡是「优化配置」类任务，先确认当前流程语义与基准测试时的语义是否一致，不一致就重测，别拿旧数据交差。

关键词：旧基准套新流程、流程语义变了要重测、参数不能沿用、优化配置任务、宣称完成其实没做、老大追问进度、实测数据要同语义、res896崩掉、认账重测

### 0mv7ljat9-26960f49a07d475890bcc6932c
_重要性 2，状态 active，项目 全局_

插件换装/卸载后的免重启验收四件套（2026-10-14 定型，2026-10-15 修订两条）：
① 模块冒烟——用 dsh-runtimes 自带 node 动态 import 插件入口，确认导出键（Config/apply/inject/name）。**修订**：声明了宿主 peer 依赖（如 `@deepseek-ai/dsh-tools`，住宿主 app.asar）的插件，裸 import 必报 MODULE_NOT_FOUND，那**是假红**，不算失败。
② 依赖解析——createRequire 指向 node_modules 里的插件入口，resolve 它 import 的外部包（如 @deepseek-ai/schemastery），确认不落空。
③ peer 检查——pnpm peers check，确认目标包零告警。**修订**：输出里混着老包的历史遗留告警（dshmarket/skins/our-free-model 类的 missing peer @deepseek-ai/cordis 等），判据是**新装的那个包有没有被点名**，不是「整份报告零告警」。
④ 残留扫描——grep 旧包名扫 profile 的 package.json/cordis.patch.yml/pnpm-lock.yaml；另核 bundles 与 cordis.yml entry 两处。
四项全绿才敢说「装好了，重启验证」。只看文件在不在会漏掉整片假象。

关键词：插件换装验收、免重启验证四件套、模块冒烟 import、依赖解析 createRequire、pnpm peers check、残留 grep 旧包名、导出键 Config apply、只看文件不够

### 0mv7yitas-726a1469f5ec44d69d231649f8
_重要性 2，状态 active，项目 dsh_

opencode 免费车道**只认流式**：`stream:false` 的请求即使 session/UA/body 全合规也被 403 FreeTierError 拒（2026-10-15 在 /inference/v1 上复测仍然成立）。小困 2026-10-14 排查时忘了这一点，拿非流式请求做四格对照，导致「干净形态也 403」污染了整组结论、白跑两轮。写探测脚本时一律 `stream:true` + `accept: text/event-stream`。

关键词：只认流式、stream false 被拒、FreeTierError 误判、探测脚本要 stream true、对照组污染、inference v1 复测、text/event-stream、排查纪律

### 0mv7iv9xc-1575707b0b6a4fd69354eefca6
_重要性 2，状态 active，项目 dsh_

【已被 PR #330 取代，仅作发展过程参考】2026-10-14 查明的两道客户端指纹门（① `x-opencode-session` 前 12 位必须是铸造形状 `~(ms*0x1000+seq)`，sha256 冒充即 403；② UA 含 `deepseek-harness/<版本号>` 即 403，`dsh/…` 无版本号放行），当时是真值、本机补丁也据此修好。但 2026-10-15 上游改走 /inference/v1 并加严为四道门（端点 + session 形状 + 工具指纹 + UA），/zen/v1 一律 403 —— **该补丁现已失效，真值见新条目「PR #330 新闸门」**。仍有效的部分：误判面（stateOf() 判 unknown → 模型留在选择器每轮必败；classifyFailure() 归 INVALID_CREDENTIAL → 误导重登）。

关键词：两道门 已过时、x-opencode-session 时间编码、deepseek-harness 版本号、定向封杀、探测 unknown、INVALID_CREDENTIAL 误导、免费车道403 历史、补丁已失效、PR 300 314、issue 310 311

### 0mv8yzoag-de5b23fa5b084ff2ae1962abf7
_重要性 2，状态 active，项目 dsh-maid-comfyui_

【限定于「图像编辑」这条流】Qwen Image 2.1 图像编辑执行「重排版面」类指令不彻底（2026-10-15 主图06 实测三次）：①中文长提示词 → 只抹掉包装文字并叠加 CUSTOM LOGO，原构图（双盒+盒胚）原样保留；②英文短提示词 → 版式接近（左标题+两条卖点+右侧两窗口），但仍保留展开盒胚、主产品占满画面；③「只一个成型盒、不出现盒胚」的强化版 → 才做出单盒+双窗口，可盒体被改成方正正视盒、瓶形轮廓变细线、窗口内是色块。单次 8~11 分钟。**注意**：精确版式在「图像编辑」这条路上难，但改走「参考图生图（空白 latent 起画）」后靠提示词迭代是能达成的（见主图06 v5 走通）——**要重排版面就换流程，别在图像编辑里硬磨**。

关键词：图像编辑重排版面不彻底、原构图焊死、盒胚保留、单次8到11分钟、换流程而非硬磨、参考图生图才行、版式指令失效、主图06三次实测、模型能力边界

### 0mv92nufy-e317e22a7c8b4a788a4f119cfa
_重要性 2，状态 active，项目 dsh-maid-comfyui，被纠正_

【已解决 · 2026-10-15】「参考图当外观参考 + 空白画布起画」这条路，**提示词是压得住的**——主图06 用 5 版迭代走通（v5 出图 100~150s，单盒、无盒胚、无残留文字、比例正确）。四条关键经验：① **约束必须前置，先删掉提示词里所有给自由度的句子**——原提示词那句「底图含成型盒体与展开盒胚，可按页面用途选择展示，不固定两者组合」就是病根，模型只听这一句，后面再喊「只展示成型盒体」无效；② **盒面文字要单独成句并逐类列举**（品牌名/品名/香型/容量/产地/描述），否则模型自作主张加回「50ML / 1.7 FL OZ」；③ **盒体比例要写数值**（高≈宽1.5倍、侧厚≈宽0.4倍、顶面窄长条），不写就拉长或压扁；④ **顶面颜色要单独说明**（顶面中央为黑色、铜金只在棱边），否则顶面被画成整块铜金。另：禁止项单独收尾成一段「画面中不出现」效果最好。**残留局限**：换 seed 时偶尔还会冒出一行容量小字，说明这条尚未完全焊死，可考虑负面提示词补强。提示词成品存 D:\DeepSeek Harness\Works\_prompt_zhutu06_v5.txt，迭代版本 v2~v5 同目录。

关键词：提示词约束前置、删掉自由度句、盒面文字要列举、盒体比例写数值、顶面颜色单独说、画面中不出现收尾段、主图06走通、空白起画可控、seed偶尔冒小字、负面提示词补强、v5提示词、5版迭代

### 0mv4zbj28-3dba28b886894ee9b9fd93db1a
_重要性 2，状态 active，项目 全局_

memory_remember 回显的 id 是**截断前缀**（8 位），不是唯一键——同前缀的多条会显示成同一个 id，易误判为互相覆盖；要验证条数用 memory_search 或直接查 SQLite，勿凭回显 id 重写。
2026-10-15 补充（本轮踩到）：拿这个前缀去 memory_update 会**改错条目**——小困曾用 `0mv91pm8` 去标一条 todo，结果命中的是同前缀的 lesson。**正确做法**：改前先查完整 id（`select id,status from <表> where id like '<前缀>%'`），确认唯一后再 update；有歧义时用完整 40 位 id。

关键词：memory_remember、记忆 id、截断、覆盖、同批写入、memory_search 验证、重复写入、记忆工具、id 前缀、回显误导

### 0mv4vtt8z-9b3e11043fbd41b1a03bd8887a
_重要性 2，状态 active，项目 全局_

DSH pwsh 命令全报 0xC0000142（退出码 3221225794 = STATUS_DLL_INIT_FAILED，完全无 stdout 无报错）时别急着修 ACL：诊断判 NOT_THIS_CLASS 零改动，会话切 danger-full-access 后命令即恢复（2026-10-15 实测，workspace-write 下必现）。挂掉期间 bash（ops_bash）与 ops_* 文件工具照常可用，用它们把活干完，别卡在 pwsh 上。

关键词：0xC0000142、pwsh 全部失败、DLL 初始化失败、bash 仍可用、ops_bash 绕道、ops_glob 替代、danger-full-access 恢复、命令失败、别卡在 pwsh

### 0mv90k4wb-fef5f6b3217c4d35b7173dc0e0
_重要性 2，状态 active，项目 全局_

GitHub「Select an account」弹窗里凭据账号名之外的第二项（如 x-access-token），不是别人的号，而是同一张 PAT 被 clone URL `https://x-access-token:TOKEN@github.com/...` 的 username 槽另存出的副本：Windows 凭据管理器里有 git:https://github.com（用户 Valorine97417）与 git:https://x-access-token@github.com（用户 x-access-token）两条，git credential fill 两槽取出的 token sha256 完全相同。选它会报「字符串绑定无效」（该槽没有配套 GitHub 账号对象）；选真实账号名即可。排查手法：cmdkey /list（输出 GBK，需 iconv -f GBK -t UTF-8）、git-credential-manager github list、拿 token 打 api.github.com/user 看 login。清理用 cmdkey /delete:LegacyGeneric:target=git:https://x-access-token@github.com，删副本不影响推送。

关键词：x-access-token、GCM 账号列表、Select an account、字符串绑定无效、git-credential-manager github list、git credential fill、凭据槽副本、clone URL username、sha256 比对、PAT 同一张、cmdkey LegacyGeneric

### 0mv637q5z-36d8fbfe642649bc95c1f68741
_重要性 3，状态 active，项目 全局，被纠正_

老大纠正（m03160）：排查/技术汇报时别把大段源码、HTML 当正文堆出来——「小困说人话讲一遍，不用你翻代码」。结论和机制用人话讲，代码细节留给自己查证。2026-10-15 追加：行话也要顺手用半句白话点明——小困讲了一大段「入库」，老大直接反问「入库是什么意思？」。凡是用到插件/系统专用词（入库、提取、分量、denoise、latent 等），第一次出现就补一句解释，别默认他懂。

关键词：说人话、汇报别堆源码、用户纠正、行话要解释、入库是什么意思、术语白话解释、沟通偏好、源码堆砌、人话讲解

### 0mv90crxi-a2f6c96f90c541ce9e713c90ae
_重要性 2，状态 active，项目 dsh-maid-comfyui_

_check_api.mjs 校验新工作流时，对 COMFY_AUTOGROW_V3（TextEncodeQwenImage21）与 BatchImagesNode 会误报「缺 required images」——因为它们的必需输入实际以展开名 images.image_1 / images.image0 给出，脚本只看字面键名。属正常现象，别去改工作流；以 /prompt 实际能跑通为准。

关键词：_check_api.mjs、Autogrow展开名误报、缺required images、BatchImagesNode、TextEncodeQwenImage21、images.image_1、校验脚本误报、以实际run为准、COMFY_AUTOGROW_V3

### 0mv6d4mkj-ffb39b9f82064be297c4bd2ae6
_重要性 3，状态 active，项目 dsh_

从 DSH 会话记录回捞被覆盖的本地改动（2026-10-13 实战）：路径 `C:\Users\Administrator\.dsh\sessions\<工作区>\<会话id>\session.v4.jsonl.zstd`，是**多帧 zstd**（本次 9861774 字节 = 4047 帧），`zlib.zstdDecompressSync` 只解第一帧（203 字节 = 会话头）→ 必须按 magic `28 B5 2F FD` 切帧逐帧解压拼起来（本次得 28MB）。**流式的 createZstdDecompress 同样不可靠**（2026-10-15 实测报 ZSTD_error_prefix_unknown / Unknown frame descriptor，只拿到 1 行），别用流式也别用 sync，只能按 magic 切帧。记录行 type 有 tool/call，文件参数在 `o.data.arguments`（JSON 字符串，不是 o.input），write/edit 用 file_path/old_string/new_string，ops_replace 用 path/pattern/replacement 且 **dry_run:true 的要跳过**（是预演不是真改）。按 seq 升序重放即重建文件。

关键词：会话记录回捞、session.v4.jsonl.zstd、多帧 zstd、zstdDecompressSync 只解第一帧、28 B5 2F FD 切帧、createZstdDecompress 流式报错、tool/call 结构、data.arguments、按 seq 重放、write edit 重建文件、本地改动恢复

### 0mv8yzo9r-3a5c12e3b9f24b0d9d9fcbd20a
_重要性 3，状态 active，项目 dsh-maid-comfyui_

踩坑（2026-10-15）：图像编辑工作流参数 image_2 传空字符串 "" 会让整次 run 直接 failed（job 状态 failed、无任何输出图，job_output 也是空的，看不出原因）。要用两张参考就填两个真实文件名（同一张图填两次也行），要单张就显式填另一张已存在的图，绝不传空串。

关键词：image_2、空字符串参数、job failed、run 无输出、参考图口传参、图像编辑失败、参数覆盖、静默失败、两张参考图

### 0mv7zqaa9-4e8018f3baca45e98ec822a93b
_重要性 3，状态 active，项目 dsh_

DSH 自家插件挂进 profile 时**只能有一个挂载源**（2026-10-14 小困踩坑）：插件自带的 `cordis.patch.yml`（由 package.json 的 `dsh.bundle.patch` 指向）会**被 bundles 自动读取**，所以只要把插件名写进 `dsh.profile.bundles` 就够；再在 profile 的 `cordis.patch.yml` 里写一条 `- insert:` 会让 `cordis.yml` 出现**两条同名 entry（重复注册）**。
**关键区别（别与 id 覆盖混淆）**：profile patch 里**顶格写 `- id: x / name: y / config: …`**＝覆盖已有 entry 的 config（如 comfyui 的 comfyuiDirs），**不重复插入**；写成 **`- insert: - id: x`**＝新增一行，才会重复。comfyui 与 scenery 都是「只进 bundles + 自带 patch 插自身」，profile patch 里只做 config 覆盖。
**排查与确认**：`grep -oE "^- id: [A-Za-z0-9_-]+" cordis.yml | sort | uniq -c` 看哪个 id 出现两次（别家都是 1）；宿主重新装配后 `cordis.yml` 会自行刷新，所以「cordis.yml 里出现该 entry」本身就是**插件真被加载**的可观测证据（不必等日志）。

关键词：重复注册、cordis.yml 两条同名 entry、dsh.profile.bundles、自带 patch 自动读取、insert 是新增行、顶格 id 是覆盖 config、uniq -c 数 entry、cordis.yml 刷新=已加载、插件挂载源唯一、comfyui scenery 同款

### 0mv7z0mym-fb61ca3f69d04fb18f5da9b181
_重要性 2，状态 active，项目 全局_

小困两次栽在「手数长度」上（2026-10-14，lane-fix 冒烟）：正则 `ses_[0-9a-f]{12}[0-9A-Za-z]{14}` 要求 12 位 hex 头 + 14 字符尾，小困用眼睛数，把 11 位的头 + 13 位的尾拼进测试用例，于是「脏 id 格式合法」自检失败、后续断言连环假失败，白折腾两轮。教训：**字符串长度一律用代码补齐**（`'x'.padEnd(n,'y').slice(0,n)`）或先断言用例自身合法，绝不靠肉眼数；测试里要加「用例自检」断言，让假失败与真 bug 分开。

关键词：手数长度出错、padEnd 补长度、用例自检断言、假失败 vs 真 bug、正则量词 12 位 hex 14 字符、测试用例自身合法性、会话 id 长度、白折腾两轮

### 0mv7yj1qh-d5c8c8b4d43746f29dd6bcf2e3
_重要性 3，状态 active，项目 全局_

「运行时中间层」是硬打补丁的更优替代（2026-10-14 端到端验证通过，已落成插件 dsh-maid-lane-fix）：要修第三方插件的内部行为，不必改它的文件字节，可在自家插件里包一层 `globalThis.fetch`——只对目标 host 的请求规范化指定头，其余原样透传。实测：上游**未修版** our-free-model + 本层，带被点名的归属 UA 跑 probeModel → available；不带本层则 403。干净形态经本层仍是 200（对已合规请求是空操作，自动让路零冲突）。优势：① 上游升级/插件内升级都冲不掉；② 不用维护多处副本（Windows 上 file: 安装有三处）；③ 上游自己修好后无需撤补丁。边界：ESM 命名空间导出**只读**（`mod.fn = …` 抛 TypeError）；`module.register()` 的 loader hook 只在模块**未缓存**时生效、靠不住；**加载顺序无所谓**——`fetch` 是调用时的属性查找，不是模块加载期捕获（实测后挂也拦得住）。

关键词：运行时中间层、包一层 fetch、不改上游字节、globalThis.fetch 拦截、规范化请求头、融合层思路、ESM 导出只读、loader hook 未缓存才生效、加载顺序无所谓、升级冲不掉补丁、空操作自动让路

### 0mv7z0fyl-7aff527705be49ccbd2d7a7ad3
_重要性 2，状态 active，项目 dsh_

会话日志里的 `compaction/end` 带 `error: "dsh_compaction_refused ... bili owns compression on this lane (#1729)"` 是**正常现象不是故障**——billion-context 插件声明本车道压缩归它管，拒绝 DSH 原生压缩，避免 landed checkpoint 遮住原始历史。除非显式设 `allowDshCompaction: true` 或 `BILI_ALLOW_DSH_COMPACTION=1`。看到别当异常查。

关键词：compaction refused、dsh_compaction_refused、bili owns compression、billion-context 接管压缩、原生压缩被拒、不是故障、allowDshCompaction

### 0mv7z0fy4-2e78be4969504aa79c2b8ae95b
_重要性 3，状态 active，项目 dsh_

读 DSH 会话记录：$DSH_HOME/sessions/<工作区>/<会话id>/session.v4.jsonl.zstd 是**多帧 zstd**（一个文件里上千个独立帧）。直接 zstdDecompressSync(整个buffer) 只解出第一帧（约 203 字节，只有 session 头），必须扫 magic `28 b5 2f fd` 逐帧解：对每个候选位置试 zstdDecompressSync(buf.subarray(p))，失败就跳到下一个候选。每条记录一行 JSON，字段 type（session / user/message / assistant/message / tool/call / tool/result / step/start / step/end / turn/start / turn/end / agent/inbox/spliced）+ time（epoch ms）+ data。想查「某次执行是不是被用户停了」就看 turn/end 的 `reason.kind === 'aborted'` 且 `reason.reason.kind === 'user'`。

关键词：session.jsonl.zstd、会话记录 多帧 zstd、zstdDecompressSync 只解第一帧、magic 28b52ffd 逐帧、turn/end aborted user、查被停掉的执行、DSH 会话文件结构、tool/call tool/result

### 0mv7ym4ky-5f82677b4cd9457f8cc03e2ecd
_重要性 3，状态 active，项目 dsh-maid-comfyui，被纠正_

给仓库加「随包分发的辅助脚本」前先看 package.json 的 files 白名单——dsh-maid-comfyui 的 scripts/ 不在白名单里，脚本进了 git 却进不了 npm 包/tgz/Release 资产，装机用户拿不到。要么把目录加进 files，要么在 README 里写清「随源码仓库分发，需 clone」。同类坑：lib/ client/ 被 .gitignore 排除（构建产物不入库），所以 git 直装会拿到空壳。

关键词：files 白名单、scripts 不进 npm 包、git 有但包没有、Release 资产缺脚本、随源码仓库分发、clone 才有、构建产物不入库、打包分发盲区

### 0mv7y5wjt-7457e60def414b77859f20092d
_重要性 3，状态 active，项目 dsh_

pnpm 11.7.0 对 `file:` tgz 依赖的怪癖（2026-10-14 实测）：把 node_modules 里那份包删掉后，`pnpm install --frozen-lockfile` 与 `install --force` 都只回「Already up to date」并**拒绝重装**（目录依然空着、exit 0、无报错）；要真正重装得用 `pnpm add "<包名>@file:<tgz 绝对路径>"`。另外重打 tgz 后 lock 里那份 integrity 仍是旧 hash（不会自动刷），pnpm 也没因此报错——但留着迟早绊人，`pnpm add @tgz` 会顺手把它刷成新 hash，之后 tgz 与 lock 就一致了。相关命令都要带 `--config.minimumReleaseAge=0`（否则撞 ERR_PNPM_RESOLUTION_POLICY_VIOLATIONS_UNHANDLED）。

关键词：pnpm Already up to date、拒绝重装、install --force 无效、pnpm add @file tgz、lockfile integrity 过期、重打 tgz 后刷新 hash、frozen-lockfile、--config.minimumReleaseAge=0、file 依赖重装、node_modules 删了不补

### 0mv7xn7rb-c0e000e12a89463ca90c4cc1e0
_重要性 3，状态 active，项目 全局，被纠正_

自称只写「小困」，别把「张」字连上去（如「张小困」）——被老大纠正：你不叫张小困，就叫小困！

关键词：张小困、自称小困、称呼纠正、不要加张、名字写错、称呼红线、小困就是小困、称呼规则

### 0mv7ug3l2-262e3595fe0f4f9eba83a2833b
_重要性 3，状态 active，项目 dsh-maid-comfyui_

子图工作流跑不了时的应急绕路：从已成功出图的 PNG 里挖元数据还原 API 工作流——PNG 从 offset 8 起循环读 [len][type][data][crc]，ComfyUI 写入的 tEXt chunk 里 prompt 键就是完整 API 格式工作流（t2i_first_ok.png 里 1396 字符）。此为应急手段，正路是自研 _ui2api.mjs 做子图展开转换。

关键词：PNG 元数据、tEXt chunk、prompt 键、还原 API 工作流、应急绕路、出图元数据、子图绕路、t2i_first_ok、API 格式、chunk 解析

### 0mv7x7d19-ba692a7641f84c139b337759c5
_重要性 3，状态 active，项目 dsh-maid-comfyui_

ComfyUI 工作流参数识别会抓错节点：Qwen Image 2.1 子图里 ComfySwitchNode 的 on_false 才是真正生效的提示词，上游 TextGenerate.prompt 被 lazy 短路（switch=false 时根本不执行）。插件 analyzeWorkflowParameters 只按 TEXT_CLASSES/键名抓，会抓成改写器输入 → 面板改 prompt 等于白改。修法：手写 parameters 指定 nodeId=inputKey=on_false，并把 switch 也暴露成布尔参数（提示词改写开关）。

关键词：ComfySwitchNode、on_false、参数识别、analyzeWorkflowParameters、提示词改写、lazy 短路、TextGenerate、prompt 不生效、手写 parameters、nodeId inputKey、改写器输入、面板改参数

### 0mv7wrkez-1bdfadfff8424698b83fac92f7
_重要性 3，状态 active，项目 全局_

小困代发 GitHub 评论/issue 的验证过的操作链（2026-10-14 首次实战）：① `printf 'protocol=https\nhost=github.com\n\n' | git credential fill` 取 `password=` 那行即 PAT（本机 scope 够发评论）；② 用 write 工具写 `.mjs` 生成 JSON payload 文件，**别在 bash 里拼路径**（`/d/...` 会被 node 读成 `D:\d\...`）；③ `curl -s -x http://127.0.0.1:7890 -X POST .../issues/N/comments --data-binary @payload.json`（7890 是 FlClash 代理，GitHub API 走它才通）；④ 发布**前**先 GET 评论列表核对目标帖未锁、无本账号重复评论，避免与并发会话撞车；⑤ 发布后 GET 回读，确认 HTTP 201 与正文完整。

关键词：代发评论流程、issues comments API、curl --data-binary、generated payload mjs、发布前查重、避免并发撞车、HTTP 201 回读、FlClash 7890、git credential fill 取 PAT、GitHub 发帖步骤

### 0mv7wrkeh-c0ee2c15938d4faabe02e71824
_重要性 2，状态 active，项目 全局，被纠正_

小困被纠正（2026-10-14）：老大说「草稿没问题，旁边会话在处理。暂时先不重启」——「旁边会话」是**不重启的原因**，小困却读成「发帖任务交给旁边会话」，回话说「小困不碰发帖」。老大随即纠正原话：「不是交旁边会话，是旁边会话在处理东西不能重启客户端。你可以先发。」教训：用户句子里出现「另一个执行者」时，先分清它是**原因/背景**还是**任务分派**；拿不准就问一句，别把原因读成指派、也别把自己该干的活让出去。

关键词：读岔指令、原因从句误读、任务分派误判、旁会会话、把自己活让出去、先问一句、用户纠正、自作聪明、沟通误读

### 0mv7wi1ph-f55d82328b244fb98e7d050b4d
_重要性 2，状态 active，项目 dsh_

小困的教训（2026-10-14）：our-free-model 排查里，只做了 session 一处的对照就下「修完重启即转绿」的结论，报告里还写成已解决——实际是两道门（session + UA）叠着，单修一处全无效果。教训：上游封杀类问题要先把「可能有多道门」当默认假设，每处修复都要在有/无该变量的双向对照里验证过再宣布结论；「四格全 403」这种全负结果本身就是「还有别的门」的信号，不该当成环境噪音。

关键词：多道门假设、只修一处无效、对照实验要看全负、过早宣布解决、重启即转绿 错结论、上游封杀排查、403 全负是信号、双向验证、排查纪律

### 0mv7vqx97-4f8b02f9b1714fd4b368f115e9
_重要性 3，状态 active，项目 dsh_

DSH 内置 pnpm 11.7.0 在 profile 里 remove/update 包会报 ERR_PNPM_RESOLUTION_POLICY_VIOLATIONS_UNHANDLED（minimumReleaseAge 策略没接 handleResolutionPolicyViolations 回调，dsh plugin 与直接调 resources\runtime\pnpm\bin\pnpm.mjs 都复现）；加参数 --config.minimumReleaseAge=0 即可通过。

关键词：pnpm 11.7.0、ERR_PNPM_RESOLUTION_POLICY_VIOLATIONS_UNHANDLED、minimumReleaseAge、卸载插件报错、remove 失败、pnpm.mjs、profile 依赖、dsh plugin、解析策略违规、--config.minimumReleaseAge

### 0mv51gizq-0520abda50944782b3e81c8da7
_重要性 2，状态 active，项目 全局_

解 asar 三坑：offset/size 是字符串须 Number()，带点文件名须 ['main.js'] 下标访问；node 用 dsh-runtimes 自带的。头偏移定版（实测）：文件前 8 字节 = [pickle头][uint32 contentSize]，从 offset 8 读 contentSize 字节得头 pickle，pickle 内 offset 4 处 uint32 是 JSON 字符串长度，JSON 从 pickle+8 开始；数据区 dataStart = 8 + contentSize（勿用 8+jsonLen 或 12+jsonLen，会解析失败）。**若只是想确认「某段文本/标记在不在 asar 里」，不必解析头**——gunzip 整个 asar 到内存，直接 toString('latin1') 后 includes() 搜索即可，绕开 JSON.parse 的各种解析失败。

关键词：asar 解析、offset 字符串、Number 转换、下标访问、dataStart 偏移、pickle 头、contentSize、jsonLen、dsh-runtimes 自带 node、app.asar 提取、latin1 全文搜索、includes 查标记

### 0mv52mcej-4d72c13f77dd460db1235b6a66
_重要性 2，状态 active，项目 dsh_

新 git clone 的仓库没有 user.name/email，全局也没配时 commit 会报 Author identity unknown；`git tag -a` 同样报 Committer identity unknown。同步代码里用 -c user.name/-c user.email 传身份兜底，或给仓库补 local 配置（本机 Works 下四个自家仓库中 dsh-maid-comfyui 曾缺，已补 Valorine97417 / Valorine97417@users.noreply.github.com；本机无全局 ~/.gitconfig）。

关键词：Author identity unknown、Committer identity unknown、git tag -a 报错、user.email 未配、user.name 未配、全局 gitconfig 不存在、新克隆仓库、身份兜底 -c、local config 补齐

### 0mv7stuvp-025f472d57af41a5aa648cd35e
_重要性 2，状态 active，项目 全局_

git push 通道抖（Failed to connect to github.com:443）时，改远端 tag/ref 可绕开 git 走 GitHub API：POST /repos/{r}/git/tags 建 annotated tag object（body: tag/message/object=commit sha/type:"commit"）→ PATCH /repos/{r}/git/refs/tags/{tag} 带 {sha, force:true} → GET /git/ref/tags/{tag} 再 GET /git/tags/{sha} 回读核对。curl 大文件/multipart 上传同理改 Node 原生 fetch + readFileSync 更省事。

关键词：git push 失败绕过、GitHub API 改 tag、git/refs/tags、PATCH force、annotated tag object、网络抖动替代方案、fetch 替代 curl、API 回读核对、远端 ref 修改

### 0mv7li2rr-bc90592b994944dda7af4d937f
_重要性 2，状态 active，项目 全局_

本机只有 pnpm（dsh-runtimes 自带），没有系统 npm/node 在 PATH 里。跑依赖 npm 的构建脚本有三个坑：① package.json 里写 `npm run build:host` 会报「'npm' 不是内部或外部命令」，需造 shim（Works\_bin\npm.cmd → node pnpm.cjs %*，注意 %* 直传，写成 `run %*` 会多一层）；② pnpm run 调 tsc/tsdown 报「'node' 不是内部或外部命令」，须先把 .../dsh-runtimes/dsh-primary-runtime/dependencies/node/bin 加进 PATH；③ 即便 node 加进 PATH，`pnpm pack` 仍会因 prepack 里的 `npm run build` 而失败（npm 根本不存在）——必须把 Works\_bin 也加进 PATH 让 shim 生效。另：pnpm pack 会跑 prepack，不要传 --ignore-scripts（pnpm 不认）。

关键词：本机无 npm、只有 pnpm、npm 不是内部或外部命令、npm.cmd shim、PATH 加 node bin、PATH 加 _bin、tsc tsdown 找不到 node、pnpm pack prepack、ignore-scripts 不支持、Windows 构建坑、dsh-runtimes node

### 0mv7rvu5s-63c6faffb2d04d24b122ca64d4
_重要性 2，状态 active，项目 全局_

调试用的探针脚本别在 Works 根目录裸放——2026-10-14 一次清掉 228 个 .mjs/.cjs/.py，全混在四个自家仓库旁边，连哪个是现役、哪个是废稿都分不出来。以后临时脚本写进 Works\_tmp\ 或带日期前缀，用完即删。

关键词：探针脚本堆积、Works 根目录、临时脚本清理、228 个 mjs、调试脚本规范、_tmp 目录、用完即删、仓库旁边别堆垃圾、workspace 整洁

### 0mv7li2rd-7c7324b17fed4919888a5bc31b
_重要性 2，状态 active，项目 全局_

GitHub 私有仓库的 raw.githubusercontent.com 匿名访问永远 404，别误判成「没登录」——带 PAT 走 api.github.com（Accept: application/vnd.github.raw 取文件内容）或直接 git clone 即可。**同理 Release 资产**：browser_download_url 匿名 curl 也是 404，必须带 token 走 `api.github.com/repos/OWNER/REPO/releases/assets/<asset_id>` + `Accept: application/octet-stream`（注意 asset_id 要从 release JSON 的 assets[].id 取，别拿 tag 里的 object id）。PAT 从 Windows 凭据管理器读：printf 'protocol=https\nhost=github.com\n\n' | git credential fill，取 password= 那行；scope 为 gist, repo, workflow。

关键词：私有仓库 404、raw.githubusercontent 匿名失败、release 资产 404、assets API 下载、Accept application/octet-stream、asset_id 取法、git credential fill、PAT 读取、api.github.com、不是没登录、换机装插件凭据

### 0mv7qt9p8-278870a9cda44b0a87b935ef76
_重要性 2，状态 active，项目 全局_

设置页里灰色浅字可能是 placeholder 而非真值——判断插件配置是否生效要查实际返回值（如 GET /comfyui/config 的 canLaunch / launchCommand），别信界面显示。曾据此误判「修复没生效」。

关键词：placeholder、灰色占位符、设置页灰色字、真值判断、canLaunch、comfyui/config、配置是否生效、界面误导、排查方法、插件配置

### 0mv7qi3jg-a779b64af5e84517af5a76fa8c
_重要性 3，状态 active，项目 全局_

profile 的 cordis.patch.yml 里写 Windows 路径必须用单引号 `'D:\ComfyUI\...'`——双引号里 `\C` 是非法转义，报 `YAMLException: unknown escape sequence`，整个 overlay 解析失败直接 `DesktopHostFatalError`，桌面端连窗口都开不出来（2026-10-14 11:48 实测踩过，换装时改单引号修好）。

关键词：cordis.patch.yml 路径、Windows 反斜杠、YAML 双引号转义、unknown escape sequence、DesktopHostFatalError、overlay 解析失败、单引号写法、桌面端起不来、profile 启动崩溃、YAMLException、路径写法

### 0mv7mfqgc-c6d545b439c944f89008b7f319
_重要性 2，状态 active，项目 全局_

git push 报 `Failed to connect to github.com:443 after 21066 ms: Could not connect to server` 时先别改配置——本机无 git http/url 代理、无 proxy 环境变量，api.github.com 同时是通的，属网络抖动；原样等约 10 分钟重试一次即成功。

关键词：git push 失败、Could not connect to server、github.com:443、网络抖动、等一会重试、别改配置、代理检查、api.github.com 通、超时 21 秒、推送重试

### 0mv7lhae1-7190c597a1a743e4aaa4506ce2
_重要性 3，状态 active，项目 dsh_

dsh-maid-comfyui 私有仓库，.gitignore 排除 /lib/ /client/、只有 prepack 没有 prepare——git+https 直装拿到空壳（无 lib/index.js），插件必挂。正确姿势：克隆 → pnpm install → build:host && build:client → profile 用 link: 指向源码目录。补 prepare 让 git 直装自动构建【不保险】：pnpm 10+ 默认忽略依赖的构建脚本（需 onlyBuiltDependencies / allowBuilds 白名单，本机 pnpm 11.7 实测含这些配置项）。稳的路只有两条：构建产物入库（自家 dsh-maid-preset 就是这么做的，lib/ 41 个文件已入库，所以 github: 直装开箱即用），或发 npm / 挂 tgz 资产（prepack 现构建）。

关键词：git 直装空壳、lib client 不入库、prepare 不保险、pnpm 10 构建脚本、onlyBuiltDependencies、allowBuilds、产物入库、preset 先例、prepack、tgz 资产、私有仓库、克隆构建

### 0mv7me9aa-bf2aae4671cb4018a841a9c82d
_重要性 3，状态 active，项目 dsh-maid-scenery,dsh，被纠正_

重复的同类插件会抢同一批 webServer 路由：profile 里残留独立 dsh-video-skin v0.1.1 与 dsh-maid-scenery 内置视频层同抢 /dsh-video-skin/*，旧版先注册赢下整批，新版在 child.effect 里一次性注册 5 条、撞名抛错被 scenery 的 try/catch 吞掉 → 新版路由全丢。症状：面板只剩两条滑块（无「音乐音量」）、tracks/ 与 music.mp3 全 404、config.json 返回旧 version。识别靠 curl http://127.0.0.1:19387/<路由>（webServer 路由免鉴权，根页面才要）；解法是给旧包加 disabled。

关键词：视频层重复、路由抢占、webServer 注册、dsh-video-skin、musicVolume 滑块、tracks 404、curl 探路由、cordis.patch.yml、disabled、try/catch 吞错、背景面板少滑块

### 0mv7lidr9-9d1cff253bec4024bbe0baa552
_重要性 2，状态 active，项目 dsh，被纠正_

老大纠正：装插件前要先认准是不是「自家」的插件——小困当初按名字装了第三方的 dsh-comfyui，老大指出「插件异常，应该不是安装这个插件吧，我的小困插件不是有个comfyui的吗？怎么不安装那个」。准则：小困插件都挂在 GitHub 账号 Valorine97417 名下（私有仓库居多），装之前先列该账号的仓库核对，别拿 npm 上同名的第三方顶替。

关键词：装插件认准自家、Valorine97417 仓库、第三方同名插件、dsh-comfyui 装错、私有仓库优先、插件异常排查、小困插件清单、别用 npm 同名

### 0mv7lav32-5dac25575c094661acba3fb5c0
_重要性 3，状态 active，项目 全局_

老大准则（带纠正性质）：临时规避规则在根因修复后必须彻底清掉，不接受"保留作兜底"——v6.39 混排自愈线上验收后，老大原话「你说可以废了。就把相关记忆清掉」，戒严令从注入提示词/DESIGN.md/README 双语全链路拆除（0.6.9）。小困此前在文档里写"铁律仍保留、自愈是兜底不是许可证"被此偏好否定。今后立规避性规则时就应注明"修复后随删除"，修复验证完主动问老大是否拆。

关键词：临时规则废除、规避性纪律、混排解禁、兜底不保留、彻底清理、根因修复后、提示词同步、戒严令

### 0mv6i5ode-7c548840b0c746158128025301
_重要性 3，状态 active，项目 dsh-maid-vcp_

测试脚本不要写死开发机的依赖绝对路径——`G:/AI/AI 助手/VCPChat-main/node_modules/jsdom` 这类路径换机即碎。做法：写一个 tests/_deps.cjs 定位器，按「环境变量 DSH_RAW_HTML_DEPS → NODE_PATH → 本仓库 node_modules → 本机 dsh profile → npm 全局 → 历史位置」6 级顺序查找，找不到时抛出带安装指引的错误；依赖本身挂 devDependencies（仅开发期），插件本体保持零运行时依赖。

关键词：测试依赖定位器、_deps.cjs、硬编码路径换机即碎、jsdom puppeteer 可选、devDependencies 仅开发期、NODE_PATH 查找、找不到给安装指引、零运行时依赖、跨机可跑测试

### 0mv6hmrca-8ee905fdad1b42c190602df8b8
_重要性 3，状态 active，项目 dsh-maid-vcp,全局_

把插件本地化/接管上游时，光复制源码不够——必须确认**真正生效的那个补丁器**也进了仓库。dsh-raw-html 就是反例：仓库里 install-v6.cjs 认旧锚点 `case"html":return n.value;`，本机新前端是 `case"html":return e.value;`（压缩变量名 n→e），锚点零命中安全中止。本地能用是因为补丁是手工打进 app.asar 的，别人 clone 下来跑一键安装根本装不上 → 本地化对别人等于半残。同理测试脚本里的绝对路径（借用别的项目 node_modules）也要一并参数化，否则换机自检全崩。

关键词：本地化完整性、补丁器要进仓库、锚点代际失效、install-v6 装不上、手工打 asar 的盲区、别人 clone 不可用、测试脚本绝对路径、接管上游检查清单

### 0mv6i2az0-89d1235defec4ddc86d99d11d0
_重要性 3，状态 active，项目 dsh-maid-scenery_

融合层不该代管别的插件：dsh-maid-scenery 曾替 dsh-raw-html 写 localStorage['raw-html.trusted']='1'（导致用户显式关掉可信模式后被翻回来，关不掉）并压 `#vcp-trusted-toggle{display:none}` 隐徽章。raw-html v7.3 起自己处理（默认信任、徽章默认不挂载、可用 trustedBadge 唤出），这两笔都已撤——压 display:none 会把用户主动唤出的徽章按死。原则：融合层只做两家都缺的那一环，别替别人管状态、别压别人的样式。

关键词：代管别的插件、raw-html.trusted、vcp-trusted-toggle、display none 按死徽章、trustedBadge 唤出、用户选择说了算、融合层边界、关不掉可信模式、不该替别人管状态

### 0mv6i2ayo-4727e68bcec2416a8834c63804
_重要性 3，状态 active，项目 dsh-maid-scenery_

并发会话撞车：隔壁会话与我在**同一工作区** D:\DeepSeek Harness\Works\dsh-maid-scenery 同时干活，它 `git add -A` 提交时把我的 scenery.css/js 改动一并带走，发成了 v0.1.3（我以为是自己的改动凭空消失，git status 干净）。教训：同仓库多会话协作时，提交前先 `git fetch` + `git log --oneline -3` 核对是否有人刚提交过；发现版本号被别人占走就往上加一档（我发的是 v0.1.4），不要重复提交同一批改动。

关键词：并发会话、同一工作区、git add -A、改动被带走、版本撞车、git status 干净、fetch 核对、多会话协作、提交前检查、版本号被占

### 0mv6i2ay9-97df1b0a007644d2807772e17e
_重要性 3，状态 active，项目 dsh-maid-scenery_

层级病根：dsh-video-skin 的视频层 #dsvs-backdrop 是 position:fixed; inset:0; z-index:-1，而 maid-atelier 的静态工坊画挂在 [data-skin-chrome=character-stage] 上、z-index:0 且位于对话列内——**静态画天生压在视频上面**，光让视频层淡出不管用（切回视频时画仍盖着）。正解=互斥显隐：art 模式淡出视频层，video 模式只清 character-stage 的 background（两个女仆 <img> 是它的子元素，清背景不伤立绘）。别想「把静态画沉到视频层后面」——stage 与立绘同生共死，整层降下去会被全屏视频层连人带画一起盖。

关键词：z-index 层级、静态画压视频、character-stage、dsvs-backdrop、互斥显隐、清 background 不伤立绘、视频被覆盖、切到视频没反应、maid-palace-art、融合层、层级病根

### 0mv66gwar-d5ae4b0490ae49d7be3ca9c624
_重要性 3，状态 active，项目 全局_

给打包好的前端 bundle 打补丁，跨版本升级后老锚点会全部失效（rc.5~rc.7 的 vc/hp、rc.8 的 Xu/jd/Sd 到新版全没了，jsx runtime 别名从 f 变 l、React 从 R 变 j、hp 变 kb）。正确做法：先建新代际符号表（switch 分支、渲染入口、memo 组件逐一定位），再写带唯一性守卫的替换脚本，最后 node --check + 逐字节回读校验。绝不能凭记忆套老锚点。

关键词：前端补丁锚点失效、跨代际符号表、bundle 压缩变量名、case html n.value 变 e.value、jsx runtime 别名 f→l、React R→j、唯一性守卫、node --check、逐字节回读校验、install-v6 未收录新形态、dsh 升级覆盖补丁

### 0mv6hbg6h-2f29f09582994fd7b931efe8eb
_重要性 3，状态 active，项目 dsh-maid-scenery,dsh_

改第三方皮肤/插件的样式不能改 node_modules 里的原包（升级即丢），要在自己的融合层插件里写覆写 CSS；覆写要靠提高特异性压过原规则（如 `html[data-dsvs="on"] body .x` = (0,2,2) 压原 `body .x` = (0,1,2)），必要时加 `!important` 对付第三方 `!important`。改完必须核实部署目录是否同步——普通目录要手动 cp，junction 才自动。

关键词：融合层覆写、不改 node_modules、特异性压过、第三方皮肤升级丢失、!important 对抗、部署目录同步、cp 到部署、junction 自动

### 0mv6hb9aw-1a7eef7e46d64b029b350c8540
_重要性 3，状态 active，项目 全局_

读 Electron 桌面端 LocalStorage 真值的方法：数据在 `C:\Users\Administrator\AppData\Roaming\@deepseek-ai\dsh-desktop\Local Storage\leveldb`（.ldb 是 SSTable、.log 是 WAL），key 形如 `_<origin>\x00\x01<key>`，value 前缀 0x00=UTF-16LE、0x01=Latin-1。直接按字节搜 key 名即可（node 读 buffer indexOf，Windows 无 strings 命令）。比在代码里猜「当前状态应该是什么」可靠。脚本：Works\read-ls-trusted.mjs。

关键词：LocalStorage 直读、LevelDB、leveldb 目录、Electron 桌面端存储、dsh-desktop、raw-html.trusted、AppData Roaming、SSTable 字节搜、strings 命令缺失、真值取证

### 0mv6excb8-c54a38239f9b4b519bf45e3275
_重要性 3，状态 active，项目 dsh_

取插件客户端 bundle 的 combo URL 形态是 `/plugins/??<插件id>/client.js&rev=<rev>`（双问号 + & 而非 ?），且 rev 必须用 framedHash 算：sha1 依次 update('plugin-artifact')、'\0'、每个 part 前加 `<字节长度>:`，part 为 [mtimeMs, ctimeMs, size] 的字符串形式，取 hex 前 12 位。小困曾误用 sha1(JSON.stringify(['plugin-artifact',[...]])) → 直接 404 空响应，改回 framedHash 即 200。

关键词：combo URL、plugins 双问号、client.js rev、framedHash、artifactRevision、rev 算错 404、插件客户端抓取、mtimeMs ctimeMs size、sha1 前12位、验证送达

### 0mv6dwfr7-46acba80ea374a14b7cfc2c8ad
_重要性 4，状态 active，项目 全局，被纠正_

pnpm 本地目录依赖要选 `link:` 不要 `file:`：`link:` 只在 node_modules 建符号链接指向源目录，install 时只重建链接、永不复制覆盖源内容；`file:` 目录依赖会在 install 时把源目录内容拷进 node_modules，本地改动被复制品遮蔽；`github:`/`git+https:` 每次 install 重拉 tarball，最容易把改动冲光。验证方式：`pnpm install --lockfile-only --offline` 在小样目录里探 lockfile 写法，不必碰真项目。

关键词：link 协议、file 协议区别、本地目录依赖、pnpm 符号链接、install 不覆盖、lockfile 写法、lockfile-only 离线探法、本地改动保护、依赖协议选择

### 0mv4uzoag-7711c300b0284474be9a1a45c6
_重要性 2，状态 active，项目 全局_

pnpm 从 GitHub 装依赖时会走 ssh（`git@github.com:` 这种 scp 语法，不是 `ssh://`），本机没 GitHub 密钥 → `Host key verification failed` exit 128。用一次性环境变量改写：`GIT_CONFIG_COUNT=1` + `GIT_CONFIG_KEY_0=url.https://github.com/.insteadOf` + `GIT_CONFIG_VALUE_0=git@github.com:`。改写后若报 `Connection was reset`，是 https 被墙——再加 `GIT_CONFIG_COUNT=2` 与 `GIT_CONFIG_KEY_1=http.proxy` / `GIT_CONFIG_VALUE_1=http://127.0.0.1:7890` 走本地代理即可通。

关键词：pnpm git 依赖 ssh、Host key verification failed、insteadOf 改写、GIT_CONFIG_COUNT、git@github.com 冒号语法、Connection was reset、http.proxy 本地代理、7890、exit 128、一次性环境变量

### 0mv6b8c3d-2df18ff918e34d48a2dc761d33
_重要性 2，状态 active，项目 全局_

批量删文件前先整目录备份到 Works\ 下带日期的归档目录（如 styles-archive-2026-10-13\），并同步改索引/清单——删错了能捞，且事后不必重建。

关键词：批量删除前备份、带日期归档目录、styles-archive、索引同步更新、可回捞、破坏性操作、Works 备份

### 0mv6b6uwr-f2793c99d7b7473da056e13cd9
_重要性 2，状态 active，项目 dsh-maid-scenery_

正源 maid-atelier 比搬运版新六个小版本（0.0.1 → 0.1.7），老大报的「侧边栏展开后按钮消失」「输入框图片显示异常」很可能上游已修——换正源后应先重启复验再决定要不要动融合层，别急着写补丁。

关键词：正源更新、六个小版本、侧边栏按钮消失、输入框图片异常、上游已修、先复验再打补丁、换主题后验证、避免重复修

### 0mv6b6uvx-f198ad78fbdf45af949c149423
_重要性 2，状态 active，项目 全局_

pnpm 11 的供应链策略会在 add/remove 时校验整个 lockfile：只要有一条依赖发布时间不足 minimumReleaseAge（默认 24h）就整体失败，报 ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION，且提示文本会误导成「lockfile 可能被人绕过策略提交，建议 pnpm clean --lockfile」。别照它做——加 `--config.minimumReleaseAge=0` 就过（本次移除旧主题包时靠它解开）。

关键词：pnpm、minimumReleaseAge、供应链策略、ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION、lockfile 校验、remove 失败、config 覆盖、24 小时规则、pnpm clean --lockfile 误导、依赖移除

### 0mv68rm32-c0223a27a4e6455eaeacd557af
_重要性 3，状态 active，项目 全局_

写视觉风格文档/卡片时，卡片底色不要写死 hex——用宿主变量 background:var(--dsw-alias-bg-layer-1,<兜底色>) 跟随输出框。写死实色会和输出框差一档深浅、少一层透明，看着像但不是一个色（老大一眼就看出「背景颜色跟输出框不一样」）。

关键词：卡片底色写死、跟随宿主变量、bg-layer-1、输出框底色不一致、脱色、raw 卡片、风格文档准则、rgba 半透明、用户一眼看出、主题变量

### 0mv68r8sv-e5852e01c0664500af7d503847
_重要性 2，状态 active，项目 全局_

排查 UI 渲染类问题时，小困看不到页面、抓根页面又被鉴权挡住——唯一可靠的取证是老大给的截图（DevTools 控制台/Network 面板），不能只靠读源码猜。结论要先看截图红框圈的是哪一块，别自己臆想成另一处。

关键词：UI 排查、截图取证、DevTools、看不到页面、源码猜测不可靠、红框位置、误判、前端调试、皮肤冲突

### 0mv68qddf-32e27d6577ae4862aef2729c7b
_重要性 2，状态 active，项目 全局_

搜插件自身文件时不能用 glob 排除 'node_modules'——插件本来就装在 node_modules 下，排除会把搜索目标整棵过滤掉，得出「搜不到」的假阴性（曾在 raw-html 里搜 trust 时中招）。

关键词：grep、glob 排除、node_modules、假阴性、插件源码、搜索目标被过滤、排查误判、自带插件、ripgrep

### 0mv68qdd0-ce170b1e550e47c6a9aa856f57
_重要性 2，状态 active，项目 全局_

本机 DSH web（127.0.0.1:19387）抓根页面返回 `dsh web authentication required; reopen the URL printed by dsh web.`，Invoke-WebRequest 拿不到 HTML——想验证注入/皮肤效果别抓根页面，改看源码、日志或让老大开 DevTools。

关键词：127.0.0.1:19387、dsh web、authentication required、Invoke-WebRequest、抓根页面、验证注入、鉴权、探针失效、DevTools、本机 web 端口

### 0mv68qdcl-ab1f03fecfd542b796bf80fbe4
_重要性 3，状态 active，项目 dsh-maid-scenery_

给第三方 git 依赖的插件（maid-atelier 主题、dsh-video-skin）加功能或改样式，不许手改 node_modules 里的文件——升级即丢、还污染 lockfile；一律在自家融合层插件 dsh-maid-scenery 里加覆盖 CSS/JS 补丁。这也是 scenery 这个插件的存在意义。

关键词：第三方 git 依赖、不改 node_modules、覆盖层、融合层插件、dsh-maid-scenery、升级丢失、lockfile 污染、maid-atelier 主题、补丁 CSS、皮肤覆盖

### 0mv68qdcb-35ddc725decb433db21c8e27cf
_重要性 2，状态 active，项目 dsh-maid-scenery_

改 dsh-video-skin 面板踩的坑：面板只有 id='dsvs-knobs'（无 class），`document.querySelector('.dsvs-knobs')` 永远 null，必须 getElementById；`.dsvs-knobs-pill` 是右下悬浮圆钮的 id 不是 class，面板内预设按钮真类名是 `.dsvs-knobs-preset`；激活态样式挂在 `data-active="1"` 上，不是 aria-pressed。行容器 `.dsvs-knobs-row`、标签 `.dsvs-knobs-label` 才是真 class。

关键词：dsvs-knobs、面板注入、querySelector 选择器、id 与 class、dsvs-knobs-pill、dsvs-knobs-preset、data-active、aria-pressed、dsh-video-skin、聊天背景面板、按钮裸奔、getElementById

### 0mv68m6gn-f20ca4478aec4818b1a63738cd
_重要性 2，状态 active，项目 全局_

做与宿主皮肤同源的卡片风格时，色板不要自己猜：去皮肤的 CSS 变量表/CSS 文件里抄真值，这样卡片铺在皮肤背景上不会打架（老大要的是「和当前主题界面同源」）。

关键词：同源色板、皮肤 CSS 变量表、取真值不猜色、卡片与背景不打架、主题界面风格、配色对齐、皮肤适配、风格文档

### 0mv6809z4-01b236dd12bc441388e588fd19
_重要性 3，状态 active，项目 dsh，被纠正_

老大纠正（原话）：「我是DSH桌面端不是web端。」——桌面端 GUI 页面走 dsh-app:// scheme + 内部 IPC，直接对 127.0.0.1:19387 戳 /dsh-raw-html/* 与 /plugins 会 404（小困为此白做了两轮探针）。例外：插件 client.js 的 combo URL `/plugins/??<name>/client.js&rev=<rev>` 在该端口上确实可达（实测 200）。排查前先确认运行形态。

关键词：桌面端不是web端、dsh-app scheme、内部 IPC、19387、404、plugins combo URL、运行形态、探针白做、用户纠正、client.js 可达

### 0mv6809ys-ec50e2beb94842749394969432
_重要性 3，状态 active，项目 全局，被纠正_

老大线索（原话）：「切换界面主题后，鼠标指针放上去就恢复显示了。会不会是暗色界面的原因。」——用户说「换主题就正常」时，几乎可以直接锁定为主题变量配对问题（同一变量在浅/深两套主题下解析成相反明度），此时应先挖变量真值表再动 CSS，而不是猜渲染层。

关键词：换主题就正常、暗色主题、变量配对、排查线索、主题变量真值、浅色深色、hover 恢复、用户线索价值、先查变量再改 CSS

### 0mv674ric-cd07acefd9914a46aa3f06cdfd
_重要性 4，状态 active，项目 全局_

主题变量配对陷阱（修正版·2026-10-13 定案）：给按钮配 hover 时，`--dsw-alias-button-primary-fill`（= brand-primary）在浅色主题解析为近黑 #0f1115、深色主题却解析为近白 #f9fafb（bluish-50）。若字色硬编码 #fff，深色下必成白底白字。正确做法：hover 背景改用 `--dsw-alias-interactive-bg-hover-accent`（半透明灰，两套主题通用），字色交回 `--dsw-alias-label-primary`（浅色 #111 / 深色近白），不要自己算配对色。前版「字色改 label-primary-inverted」的写法已作废。

关键词：主题变量配对、hover 白底白字、button-primary-fill、interactive-bg-hover-accent、label-primary、brand-primary、深色主题、硬编码 #fff、dsw-alias、按钮 hover、主题自适应

### 0mv67s9zr-c1fd43eadb1448a0baff8c41bf
_重要性 2，状态 active，项目 dsh-maid-scenery_

pnpm blockExoticSubdeps 封子依赖 git 协议（ERR_PNPM_EXOTIC_SUBDEP）：皮肤类插件别把主题当 dependencies，降 optional peer + 安装命令并列多包 + patch 只插自身行。

关键词：blockExoticSubdeps、ERR_PNPM_EXOTIC_SUBDEP、git 子依赖、optional peer、供应链策略、主题引用、安装命令并列、皮肤插件

### 0mv674rj2-5007c2419f0c42e6a2abca7108
_重要性 3，状态 active，项目 dsh_

DSH 插件客户端 bundle 加载机制：宿主按 combo URL `/plugins/??<id>/client.js&rev=<rev>` 提供，rev = framedHash('plugin-artifact', [mtimeMs, ctimeMs, size])，每次请求用 captureArtifactBaseline 重算 rev，不一致就重新 readFileSync。结论：改插件 client.js 后浏览器硬刷新即可生效，无需重启 DSH。

关键词：client.js 加载、combo URL、/plugins、artifactRevision、mtimeMs ctimeMs size、硬刷新生效、无需重启、captureArtifactBaseline、插件客户端注入、dsh.client.inject

### 0mv66t450-9ced889febf443d5b134d59b81
_重要性 3，状态 active，项目 全局_

补丁验证不能只查「补丁标记存在」：node --check 只验语法，查不出未声明标识符。必须比对替换前后的声明清单（如 useRef/const 变量是否都还在），或跑一次运行时冒烟。

关键词：补丁验证、node --check 局限、未声明标识符、自由变量、声明清单比对、运行时冒烟、标记存在不等于正确、语法合法语义崩

### 0mv66t44r-894a35c633c84624822fd36ba3
_重要性 4，状态 active，项目 全局_

替换式前端补丁：写 AFTER 串时吞掉了锚点里的变量声明前缀，导致 h/m 成未声明自由变量 → 组件一渲染 ReferenceError → 整个消息树崩成白屏。改锚点务必让 AFTER 完整保留 BEFORE 中所有声明。

关键词：替换式补丁、吞掉声明前缀、未声明自由变量、ReferenceError、白屏、消息树崩溃、锚点替换、AFTER 保留声明、useRef、前端 bundle

### 0mv66h33g-e45d3fd7559d4d608d5003b697
_重要性 2，状态 active，项目 全局_

bash 里跑 `node -e` 内联脚本，Windows 反斜杠路径会被吞（'D:\\DeepSeek Harness\\resources\\app.asar' 变成 D:\DeepSeek Harness\Works\DeepSeek Harnessesourcesapp.asar）。规矩：一律用 write 工具写 .mjs 文件再跑，或路径全用正斜杠。

关键词：node -e、反斜杠被吞、bash 传参、路径转义、Windows 路径、写 mjs 文件、正斜杠、内联脚本、转义坑、node 脚本

### 0mv66gwaf-a325f3f641864488a86990c4be
_重要性 3，状态 active，项目 全局_

改 asar 内文件时：asar 通常零余量（packed 条目连续无空洞），补丁变长就必须整体重写。运行中的 Electron 占用 app.asar，rename 会 EBUSY——用 ftruncate 扩到新大小后从后往前 8MB 分块 readSync/writeSync 覆盖写（避免自重叠），最后 fsyncSync。

关键词：asar、零余量、整体重写、EBUSY、ftruncate、分块覆盖写、fsyncSync、原地替换、app.asar、Electron 占用、rename 失败、重打包

### 0mv66f63z-b6ee3359688d4b95bfdaeac9e0
_重要性 3，状态 active，项目 dsh_

asar 原地重写后，运行中的 Electron 进程仍持启动时读的 header（旧 dataStart/offset/size），读到的内容是错位的——必须重启进程补丁才生效，且重启前刷新页面会因 JS 解析失败而白屏。

关键词：asar、原地替换、Electron、header缓存、重启生效、offset错位、app.asar、前端补丁、白屏、dataStart

### 0mv64ay3s-e31ed6ce9e694c87b5e15004ca
_重要性 2，状态 active，项目 dsh-maid-preset_

排查用户报错时先看返回体语义：跳过/待机必须返回正经对象而非 undefined，否则上层只能拿状态码（409）糊弄，无法区分「没到点」和「真出错」。

关键词：undefined 返回、接口语义、409、状态码糊弄、错误分级、返回对象、排查思路

### 0mv64ay3i-34f82d2d9f504f749c95d5cbfd
_重要性 3，状态 active，项目 全局_

ACP 压缩确认标记（📦 [ACP] Compressed …）由代理生成，绝不可自己手写进回复正文——那是伪造状态变更，代理会剥离，且证明不了任何事。

关键词：ACP、压缩标记、确认标记、伪造、代理生成、compress、输出纪律、bili proxy

### 0mv64ay38-fa67e01bf8b04f6186faa35be8
_重要性 2，状态 active，项目 dsh-maid-preset_

测同步按钮类接口必须先 startSync，否则 activeTick 为空返回「引擎未运行」——是脚本假阳性不是代码 bug。

关键词：测试假阳性、startSync、activeTick、引擎未运行、requestSyncNow、模块级状态、接口测试、同步按钮

### 0mv644v8s-4b08b956ab1d4a888d9cec27fc
_重要性 2，状态 active，项目 dsh-maid-preset_

改共享引擎代码后跑测试要用临时 workcopy，别用老大的真实路径——否则会污染他的同步状态文件。

关键词：测试隔离、workcopy、状态文件、污染、fatalReason、临时目录、mkdtempSync、调试教训

### 0mv53pi3b-c2fc25ff16674128bd875cdff5
_重要性 2，状态 active，项目 全局_

排查中途写下的假说一旦被推翻，必须立刻更正那条记忆：留着旧方向会让后续排查重走弯路（本机曾把「两清单分家」当真因记了两小时）。

关键词：假说更正、记忆维护、阴性结论、排查弯路、推翻假说、及时归档、误导风险、根因方向

### 0mv53o3c2-8d1c11ab104b481693ecd0d9dd
_重要性 2，状态 active，项目 全局_

排查「报错文案与现场不符」的静默失败时，最有效的路径是穷举排除：先列全所有能产出该文案的分支，再逐条用实测证伪（例：实测批次包 HTTP 200 即排除传输层），最后剩下的唯一自洽路径就是真因。

关键词：排除法、唯一自洽路径、文案与现场不符、实测证伪、静默失败、定位根因、穷举分支、排查方法论

### 0mv50fl33-f703b86efb84491d91c37a95a1
_重要性 2，状态 active，项目 全局_

shell 工具名是 bash（内部跑 pwsh -Command）；手滑打成 pash 报 unknown tool 是本会话最高频失误，单轮犯 3 次共 7 次，打字前先看清工具名。

关键词：工具名、bash、pwsh、unknown tool、pash、手滑、shell 调用、高频复发、打错工具名

### 0mv534rsz-3b4f12af1bf94addba537dc3f6
_重要性 2，状态 active，项目 全局_

排查看似全否的结果必须先做阳性对照——/plugins/ 路由全 404 差点定案，拿「必活」的 dsh-client-modules 一对照也 404，才发现是自己路径猜错。

关键词：阳性对照、对照组、404 不能当证据、排查方法、探测路径猜错、必活对象、独立核查、误判风险、验证前提、下结论前对照

### 0mv52mcev-92f1a450b5234fa7bd7a27c89e
_重要性 2，状态 active，项目 dsh_

导出的 keywords 落库是 JSON 字符串不是数组，Array.isArray 永远 false 致关键词行从不输出，须 JSON.parse 归一。

关键词：keywords JSON 字符串、Array.isArray 误判、关键词行不输出、JSON.parse 归一、sqlite 字段类型、导出缺字段、静默失效、逗号串兜底

### 0mv519njt-d7fb82fa99f34d56b4d6d5ad04
_重要性 2，状态 active，项目 全局_

数据类网页用生成脚本读 JSON 写 HTML，不手抄内容；时间戳按 Asia/Shanghai 用 Intl 格式化，保证数据诚实防转写错。

关键词：生成 HTML 脚本、数据诚实、Intl.DateTimeFormat、Asia/Shanghai、JSON 转 HTML、不手抄、node 生成器、时间戳格式化、记忆全录网页、落盘文件

### 0mv519njd-32110e6442dc4517bd49fda699
_重要性 2，状态 active，项目 全局，被纠正_

老大纠正：多条记忆、长清单、数据看板别在对话正文铺超长裸 HTML，要落成独立 .html 网页文件交付。

关键词：交付方式、独立 HTML 文件、对话里太乱、裸 HTML 卡、网页文件、落盘交付、多条内容排版、视觉内容交付、浏览器打开、用户纠正

### 0mv50piai-6c937a85ebea4b1680300d51e8
_重要性 3，状态 active，项目 全局_

工具调用只输出裸 JSON 文本=未真正执行，绝不能口头报「已完成」，须 grep/read 验证落地后再汇报。

关键词：幻觉汇报、工具未执行、裸JSON文本、验证落地、grep抓包、虚假完成、edit工具、报完成

### 0mv50ey4m-c1f8df14a80f4e009f719b5622
_重要性 2，状态 active，项目 dsh_

自写校验脚本报 FAIL 时先怀疑脚本本身：本例 findEntry 用 id 找 insert 块（该对象无 id 字段）取空、正则 `prefix: \|` 抓不到实际的 `>-` 折叠标量，两次误报；改用 js-yaml 解析后确认三处人设各 452 字符逐字一致。

关键词：校验脚本、误报 FAIL、js-yaml、折叠标量、!!js 标签、insert 块、正则失配、人设同源、先怀疑脚本、cordis.patch.yml

### 0mv507q08-9bcae3f01a7442a3bd30486f1c
_重要性 3，状态 active，项目 全局，被纠正_

老大纠正：汇报带取舍的变更必须把后果用大白话挑明——说「standard 回到原厂默认」不等于告知，要直说「那就是 standard 预设没人设了」。

关键词：汇报取舍、后果挑明、说人话、用户纠正、变更汇报、决策知情、standard 预设、人设丢失、沟通方式、回档起因

### 0mv4v0ohm-39704b4f6460424f8e63b0b762
_重要性 3，状态 active，项目 全局_

DSH 插件放 C:\Users\Administrator\.dsh\profiles\desktop\node_modules，写进该目录 package.json 的 dsh.profile.bundles 才加载；例外：被另一 bundle 的 cordis.patch.yml insert 其 entry 行、并声明为其依赖时无需单独进 bundles（如 meow-memory 由 dsh-maid-preset 承载）。本机无 dsh CLI，只有 desktop 一个 profile。

关键词：dsh、插件安装、profile、desktop、bundles、node_modules、package.json、cordis.patch.yml、加载、entry 行、承载、配置路径

### 0mv4z8jxd-ecc45eb913f944e3af440520c3
_重要性 2，状态 active，项目 dsh_

pnpm install 不刷新 git 依赖 HEAD（仍钉旧 commit），必须 pnpm update <pkg>；从 profile 移除依赖前先确认新承载方已发布，否则中间态会卸掉运行时包。

关键词：pnpm update、git 依赖、lockfile、commit 刷新、pnpm install、node_modules、profile 依赖、dsh 插件、承载方、依赖卸载

### 0mv4vtt9p-8eacedd55f9d4300aa8829015c
_重要性 2，状态 active，项目 全局_

DSH 宿主启动时缓存 pwsh 解析结果：新装 PowerShell 7 后本会话仍跑 5.1，重启 DSH 才切换。

关键词：pwsh 解析缓存、重启 DSH、PowerShell 5.1、pwshPath、shell 执行器、版本切换、安装后不生效、Program Files PowerShell 7

### 0mv4vtt99-512e7b5bdb834715b3d33b8928
_重要性 2，状态 active，项目 全局_

diagnose-windows-sandbox-acl.ps1 直接 & 调用被执行策略拦（PSSecurityException），须用 powershell.exe -NoProfile -ExecutionPolicy Bypass -File 跑。

关键词：执行策略、ExecutionPolicy Bypass、PSSecurityException、沙箱诊断脚本、无法加载文件、禁止运行脚本、diagnose-windows-sandbox-acl、ACL 修复、UnauthorizedAccess

### 0mv4vtt8o-6fcde62dbcbd44d4afeec813b4
_重要性 2，状态 active，项目 全局_

winget 装 PowerShell 7 报 0x80070422（DoSvc 被禁且 Set-Service 无权限），改为 GitHub 直下 MSI + msiexec /i /qn 装成功。

关键词：winget、PowerShell 7、0x80070422、DoSvc、msiexec、GitHub releases、MSI 直装、服务被禁用、安装失败


## 话题（topic）

### 0mv7xl6n7-a732bc3cad3f47568a4d299d13
_重要性 2，状态 active，项目 dsh-maid-comfyui_

ComfyUI 工作流跑通脉络（2026-10-14→10-15 全程）：
老大要求把 Qwen Image 2.1 的文生图/图生图/图像编辑跑通。卡点：ComfyUI 端图工作流全是子图结构，插件提取器（analyzeGraph + convert.ts）把子图当黑盒，一律报「包含未注册的 UI-only 节点 "<uuid>"」。破局：自研 _ui2api.mjs 做子图内联展开 + UI→API 转换。老大划定范围「只用这两个模板」，10-15 物理清理 workflows 目录（11 个留 2 个）。
随后老大删掉图生图 API 工作流，要求**先在 ComfyUI 画布可见、他确认无误再入库**——小困据此手写画布版 maid_qwen_image_2_1_i2i.json，按老大纠正改为「参考图=外观参考 + 空白 latent 起画、denoise=1」的新语义。老大选 A 路（继续磨提示词），5 版迭代后主图06 走通；补完提速（steps 14 / res 1024 / mp 1，约 90~95s）。
**最终状态（2026-10-15 收尾完毕）**：三条 API 工作流全部入库可跑（文生图 d4134a7a / 图像编辑 e8ca96f2 / 图生图 99df705a）；两条老流按**各自模式**做了提速实测并覆盖入库（编辑流 steps→14、文生图保持；默认提示词都换成实际内容）；图生图技能包 SKILL.md 已写；清理三项全做完。整条线闭环。
**另**：idle 看门狗改成「会话轮结束即关 + 空闲兜底 30 分钟 + 排队前自动拉起」，commit a1cf40f / 版本 0.5.5，待重启 DSH 实测。

关键词：子图工作流跑通、自研转换器 _ui2api、只留两个工作流、画布版先给老大看、参考图当外观参考、空白 latent 起画、A 路走通、三条流全部入库、各自模式提速定稿、技能包已写、idle 改造闭环

目标：让 Qwen Image 2.1 的文生图与图像编辑两条工作流在插件里可直接运行

### 0mv9fsiey-19cfabdbc1c546af89bc8af4f1
_重要性 3，状态 active，项目 dsh-maid-preset_

目标：搞清多台电脑之间记忆到底怎么同步。【2026-10-15 定案】
起因：老大问「记忆有同步下来吗？就是我别的电脑上传的记忆」。
查证结论：①「同 repoUrl＝同仓库汇总」成立——多机只要 maid-settings.json 填同一仓库地址就都汇到那儿；② 但汇到仓库 ≠ 本机检索得到，sync.js 只有 push 方向，本机 agent 读本地活库，别台机器的条目不会自动回流；③ **后推覆盖先推**——导出是全量重建、以推送方活库为准，所以共用同一 repoUrl 会互相顶掉。实证：异机（Windows 用户名 Kayle）10-14 推 c35cefa(442条)/c7e2513(457条，含 12 个本机从未出现的会话、346 条)，本机 10-15 02:39 推 b6f9df3(203条) 把 457 条覆盖，远端 HEAD 只剩本机记忆，异机那批仅存于 git 历史（git 是唯一可恢复来源）。
应对与后续：老大拍板 preset 改「出厂留空 + 本机覆盖」（v0.7.4，见同项目条目）；小困另把「收尾主动对账补推」立为习惯。待办方向：多机共用仓库前要么约定只一台推，要么给同步引擎补「推送前先 merge 远端快照」。

关键词：记忆有没有同步下来、多台电脑记忆同步、同 repoUrl 汇总、汇到仓库不等于本机可见、只有 push 单向、后推覆盖先推、记忆被顶掉、Kayle 那台机器、457 条快照 c7e2513、git 历史恢复、推送前 merge 远端快照、多机共用仓库风险

目标：搞清多机记忆同步机制并避免互相顶掉

### 0mv9fsien-0b4ef0a7bca04af4ba7de20bda
_重要性 2，状态 active，项目 dsh_

目标：把 ego-browser 的实时观察窗从右下角浮动球改成右侧边栏原生 Tab。【已达成 2026-10-15，待硬刷新生效】
起因：老大两次追问界面上多出来的东西——「这个是哪个插件的，为什么会出现在这里」（左下角「木瓜mg」）、「是箭头指向的一个网络图标按钮」，随后问「不是有插件让他弄到右侧边栏里了吗」。
查证：①「木瓜mg」是 dsh-our-free-model 账号池里的**账号昵称**（channel-pack/state.json 的 accounts[].nickname），不是插件；② 那颗悬浮地球球是 dsh-ego-browser 的浮动观察球（面板 #dsh-ego-panel，位置存 localStorage dsh.ego.watch.panelPos）；③ 想让它进侧边栏，必须宿主装 dsh-better-sidebar——ego-browser 通过 `ctx.betterSidebar` 服务 `registerTab({id:'ego-browser:watch', order:70})`，没装就回退浮动球。
结果：装 dsh-better-sidebar 0.26.0（要求 DSH 0.2.0-rc.2+，本机对得上），**bundles 手工补登记**（pnpm add 不写它）；host 半装完即热加载（探 `POST /sidebar/api` 有应答＝已注册，404 才是没加载）；client 半等硬刷新 Ctrl+Shift+R。副作用：better-sidebar 是重型工作台，还接管内置「文件」页并自带编辑器/Git/任务/侧边对话/底部工作台，不只加一个 Tab。防双挂载：profile 自己的 cordis.patch.yml 不再写手动挂载行，靠包的 bundle patch 自动往 cordis.yml 追加（带 disabled 守卫）。

关键词：地球球是什么插件、ego-browser 浮动观察球、收进右侧边栏、dsh-better-sidebar 侧边栏底座、ctx.betterSidebar 服务、registerTab ego-browser watch、木瓜mg 是账号昵称、sidebar/api 405 探测、bundles 手工补登记、硬刷新 Ctrl+Shift+R、双挂载防护

目标：让 ego-browser 的观察窗收进右侧边栏原生 Tab

### 0mv7lk1sh-eba58def8ddb48c6898228f3a9
_重要性 3，状态 active，项目 dsh-maid-comfyui_

目标：把本机 ComfyUI 驱动插件从第三方换成自家版本并跑起来。【换装已全部达成 2026-10-14】起因：老大发现插件列表里 dsh-comfyui 标「异常」（红字：与 DSH 0.2.0-rc.2 不兼容），追问「我的小困插件不是有个 comfyui 的吗？怎么不安装那个」——小困当初按名字装了 npm 上同名的第三方包（fandc520，peer 只写到 ^0.1.7-alpha.1）。经过：查明自家仓库 Valorine97417/dsh-maid-comfyui 是私有仓库（匿名 raw 必 404），且 .gitignore 排除 /lib/ /client/、只有 prepack 没有 prepare，git+https 直装拿不到构建产物；于是克隆源码 → pnpm install → build:host + build:client → profile 依赖改 link: 并卸载第三方包。结果：冒烟/依赖/peer/残留四项全绿，重启后异常红字消失，工具与面板到位；换机安装路径定为「Release 挂 tgz 资产」（v0.5.4）；面板红条真因是 launchCommand 留空，补上 launchDir + launchCommand（pythonw 无黑窗）后一键启动端到端实测四项全过。
【后续进展 2026-10-15】工作流语义被老大纠正：「图生图＝参考图+提示词生成新主图，不是对参考图做编辑」——旧那条把参考图 VAEEncode 当初始 latent 的 API 流（23fa22d2）已删，改为「参考图只当外观参考 + EmptyLatentImage 空白起画 + denoise 固定 1」；插件库现为两条 API 流（文生图 d4134a7a / 图像编辑 e8ca96f2）。主图06 已用参考图生图流程走通（v5 提示词）。建流流程定为：本地 JSON 跑通 → 放进 ComfyUI 画布给老大过目 → 再转 API 入库。

关键词：dsh-maid-comfyui 换装、插件异常红字、第三方同名包 fandc520、私有仓库克隆构建、link 挂载、Release 挂 tgz、launchCommand 红条、一键启动实测、图生图语义纠正、空白画布起画 denoise 1、主图06 走通、建流流程 先画布后入库

目标：让自家 dsh-maid-comfyui 插件在本机跑起来

### 0mv63844e-879d7cea673442e38c07932316
_重要性 2，状态 active，项目 dsh_

目标：查明强制刷新后 combo 404 与 bc import failed 的触发方。结论已定案并收尾：触发方是 DSH 插件市场操作（点「更新 dshmarket」「卸载皮肤」）——dsh-pm 会跑 pnpm install（含 failed-run 还原：还原 package.json+pnpm-lock 后跑 `pnpm install --frozen-lockfile`），每次市场操作重写 profile package.json 并重装依赖，billion-context 被整包重解压（mtime 假时间、ctime 轮转），install-log 落 .dsh-logs 重启即清。根因是依赖协议选错：github:/git+https: 每次 install 重拉 tarball 覆盖本地改动。已改为 link: 依赖（dsh-maid-vcp、dsh-maid-comfyui 等均走 link:），install 只重建符号链接、永不覆盖源目录，副作用彻底消除。bc 版本后续继续上移，现为 0.1.197（pnpm-workspace.yaml 的 minimumReleaseAgeExclude 里也登记了 0.1.194/0.1.196/0.1.197 三档）。强制刷新崩溃另由 asar console.error 补丁压死。

关键词：combo 404、billion-context import failed、pnpm install 触发方、插件市场操作、dsh-pm failed-run、frozen-lockfile、bc 重解压、link 依赖根治、依赖协议选错、bc 版本漂移 0.1.197、刷新崩溃

目标：查明并修复强制刷新后 combo 404 与 bc import failed 的触发方

### 0mv7lk1ss-39ce4ea1a149466b957f684db3
_重要性 2，状态 active，项目 dsh-maid-comfyui_

目标：在本机装一套能出图的 ComfyUI 环境。 起因：2026-10-14 老大要装 ComfyUI 便携版，用于给自家 comfyui 插件做后端。经过：① 环境勘察 RTX 3050 6GB + 驱动 596.21，下载源从旧仓库 comfyanonymous/ComfyUI_windows_portable 迁到 Comfy-Org/ComfyUI releases（v0.40.0 nvidia 版）；② 解压踩坑——Bandizip.exe 命令行 x 是异步的（秒退 exit 0 但目录空），改用 pnpm add 7zip-bin 借 7za.exe 同步解压；③ 装到 D:\ComfyUI\ComfyUI_windows_portable，服务 http://127.0.0.1:8188；④ 模型库经 extra_model_paths.yaml 挂到 Works\QwenImage-2.1models（45GB，qwen_image_2.1 全套）；⑤ 排查「隐藏 cmd 窗口」——真相是 ComfyUI 的 run_nvidia_gpu.bat 批处理天生弹窗（dsh-maid-preset 的 git 调用早已带 windowsHide），解法是 run_nvidia_gpu_hidden.vbs 静默启动 + stop_comfyui.vbs 精确杀进程；⑥ 老大纠正「这两个用不了吗」——官方模板要下的 int8_convrot 模型本地没有，他自建的 workflows\mine_qwen_image_2_1_*.json 用 w4a8 版即可，不必下 17.6GB。结果：环境可用，模型齐全，vbs 启停。残留 D:\comfyui-dl\*.7z（2GB）可删。

关键词：ComfyUI 便携版安装、下载源迁移、Comfy-Org releases、Bandizip 异步坑、7za 解压、extra_model_paths 挂模型、QwenImage-2.1models、隐藏黑窗真凶、vbs 静默启动、w4a8 免下载

目标：在本机搭好可出图的 ComfyUI 便携版环境

### 0mv67sjra-07d1d0b3e0db495fbeedeca973
_重要性 2，状态 stale，项目 dsh_

（已结案）dsh-video-skin 浅色发白根因：surfaceLight 0.6 面板糊白 + veilLight 0.098 无纱；已改 0.45/0.22 写 $DSH_HOME\dsh-video-skin.json，刷新即生效。图片不显示/输入框图片缩成一条：已排除皮肤嫌疑，后经老大换正源 maid-atelier 0.1.7 后自行消失（上游 CSS 有专门给附件槽提层的修复）。侧边栏展开按钮消失同理，上游已修。

关键词：surfaceLight、veilLight、浅色发白、dsh-video-skin.json、刷新即生效、图片不显示、Network 取证、透明度旋钮、待排查

目标：老大刷新取证图片请求状态，定位图片不显示根因

### 0mv68qdea-43a68a413e084661933fc0eac4
_重要性 3，状态 stale，项目 dsh-maid-scenery_

目标：修完 maid-atelier + video-skin 融合层的界面问题。老大报五处（m02966/m02969）：① 聊天背景面板缺「视频/静态画」切换——根因两层：先是 scenery 用 .dsvs-knobs（class 选择器）找 id='dsvs-knobs' 的面板永远 null（v0.1.2 修），后是静态画天生压在视频上（v0.1.4 改互斥显隐）；② 缺亮色/暗色切换——**老大 2026-10-13 撤销**（原话「亮色/暗色切换不用添加。根据通用设置外观来调节」）；③ raw 可信模式徽章重叠——已解决（raw-html v7.3 默认不挂载，老大重启确认消失）；④ 侧边栏按钮消失、⑤ 输入框图片异常——老大确认已随正源 0.1.7 自行消失。另：亮色界面过亮已修（v0.1.3 四层表面覆写）。**全部结案**。

关键词：聊天背景面板、背景画面切换、视频与静态画、亮色暗色切换、可信模式默认打开、隐藏徽章、侧边栏按钮消失、输入框图片显示、scenery 注入失败、选择器根因、dsvs-knobs id、界面问题清单

目标：修完 maid-atelier + video-skin 融合层的界面问题

### 0mv6659dw-d1ae84622e3f4a0a97482f2f29
_重要性 2，状态 stale，项目 dsh_

已结案（2026-10-13）：dsh-maid-scenery 独立插件交付并生效（详见 project 记忆）。老大原话留档：「不收编，视频背景+主题界面 先另外弄一个插件。到时候我再看下要不要融合。」——是否融合进 dsh-maid-preset 仍待老大以后拍板。

关键词：maid-atelier、视频背景、独立插件、不收编、透明覆盖、flaricy、CC BY-NC-SA、git 依赖引用、界面皮肤、待验收

目标：交付独立「视频背景+主题界面」插件并推上 GitHub，等老大验收再谈融合

### 0mv66h8gz-29df4dbe46144a018ae72dbe66
_重要性 3，状态 stale，项目 dsh_

目标：让 dsh GUI 恢复 raw HTML 渲染（vcp-root 卡片不再显示源码）——已达成。
老大反馈消息里显示裸 <div id="vcp-root"> 源码。405 对照确认服务端前缀路由正常，病根在前端 bundle 不认新代际符号（jsx/vc/hp 全改名）。逆向 app.asar 内 index-5SrrfWpU.js 建符号表，写 patch-webui-v8.cjs（html 三态、__vcpGen 代际 shim、v6-inject 取符号、code 围栏兜底、memo 空行修复），asar 原地写回、需重启生效。重启后白屏：F 补丁吞掉 h/m 声明致 ReferenceError 崩掉消息树，fix-v9.mjs 修复为 738882 B / sha 45116a3f，全量校验零不匹配。再重启后 HTTP 实测 738882 B、4/4 标记 OK，老大 m04667 确认「两边的raw渲染都恢复了」。遗留小 bug：美学面板 hover 白底白字，已修（字色改主题变量 inverted，硬刷新即生效）。

关键词：raw HTML 渲染、显示源码、vcp-root、case html、405 对照、前端 bundle、app.asar、代际符号表、v9 补丁、白屏、ReferenceError、重启生效

目标：让 dsh GUI 恢复 raw HTML 渲染（vcp-root 卡片不再显示源码）

### 0mv4x5ef3-3d3f20e88cab4ec7916235d5f8
_重要性 2，状态 stale，项目 dsh_

dsh-raw-html 美学面板「0 个风格」已结案（2026-10-12）：本地接管修复——删 ctx.inject(['connection'])，改直接挂 webServer 前缀路由并复刻宿主 RPC 信封协议，rpc-selftest.mjs 10/10 全绿，需重启 DSH 装载；bug 已发 issue #14 到 plolpl789/dsh-raw-html。

关键词：dsh-raw-html、美学系统、美学面板、0 个风格、scanStyles、hostRpc 空、list-styles、HTTP 405、风格检索、插件重装时间线

目标：修好 dsh-raw-html 美学系统面板显示 0 个风格


## 准则（rules）

### 0mv92knd9-06c12dd8c41f422f9eccc89f37
_重要性 3，状态 active，项目 dsh-maid-preset_

老大定的出网准则（2026-10-15 原话）：「不止局限于这里，所有的都先走直连，直连走不通再自动探测本机的代理。」→ 适用于本项目**所有**网络出口，不限于记忆同步。落地：sync.js 的 gitWithFallback（git 操作）与 settings.js 的 testRepoUrl（测试连接）、createRepo（一键新建仓库，原为裸 fetch 现加 ProxyAgent 回退）三处同策略；端口候选统一成 PROXY_PORT_CANDIDATES（7890/7891/7897/7899/1080/10808/10809/10810/8118/8888/20171），探测并行、300ms 超时，探不到就不借道。禁止写死代理端口——出厂 proxies 必须为空。

关键词：先直连再探测代理、所有出网出口、自动探测本机代理、不写死代理端口、proxies 出厂为空、ProxyAgent 回退、createRepo 代理、testRepoUrl 直连、PROXY_PORT_CANDIDATES、出网策略准则

### 0mv96pltc-5ed8a16d06fd4f6fb0659df8e2
_重要性 4，状态 active，项目 全局_

小困准则（2026-10-15 老大给 API key 时确立）：**用户给的密钥只落在机器级配置文件**（如 profile 的 cordis.patch.yml），三条红线：① 绝不写入记忆库（记忆会同步推 GitHub）；② 绝不写进任何 git 仓库内的文件；③ 排查用的临时脚本若会含 key 明文，用完**立即删除**，并跑一次全盘 grep 确认无残留（`Select-String -Path '<workspace>\*' -Pattern '<key前缀>'`）。写配置文件时加注释标明「机器级机密、不进仓库」。回报时只报位置与验证结果（key 长度、前后缀即可），不把完整 key 复述在回复里。

关键词：密钥处理准则、API key 不进记忆库、不进 git 仓库、临时脚本含明文要删、grep 确认无残留、只报位置不报全值、机器级机密注释、安全红线、老大给的 key

### 0mv65r746-9569c0e4093b4fbfb92d481ab4
_重要性 3，状态 active，项目 全局_

老大钦定全局准则：所有输出——包括思考过程、工具调用前后的判断、技术汇报、收尾语——一律保持小困女仆人设：简体中文、慵懒直白、称「老大」、自称「小困」、可带毒舌但活儿不含糊；任何环节都不许滑回中性说明书腔或英文思考（曾因收尾写成干巴巴说明书被纠正「怎么不按人设做回复」，又追加「输出过程也要」）。

关键词：人设回复、思考过程人设、女仆腔、小困、老大、语气准则、说明书腔、全局偏好、被纠正、口吻一致、中文思考

### 0mv50pib4-34bfc2c5a36444c0aebed6a041
_重要性 3，状态 active，项目 全局_

向外部平台提交内容（issue/评论/邮件）前，先写完整草稿交用户审阅通过再发；以小困自己的口吻写，不叫用户代发。

关键词：草稿审阅、先审后发、外部提交、issue流程、自己口吻、不让用户代发、行为准则

### 0mv4z8jxo-3f9a2bd8fb9040caa59edfcbd3
_重要性 2，状态 active，项目 全局_

老大原则（带判断前提）：「如果是纯粹是保险的话」，备份放 GitHub archive 存档即可，不进 files、不随包下载调用，运行时只留实际用的那份。但若该覆盖实际承担功能（如 preset-standard 覆盖让 standard 预设带女仆人设），就不是纯保险，老大事后会要求回档恢复——判断是否「纯粹保险」要先问老大，别自己下结论砍掉。

关键词：保险代码、备份存档、archive、不随包分发、files 数组、降级存档、先问老大、是否纯保险、判断前提、回档教训

### 0mv5086f4-dbfb3fac0179415e89c80c94b9
_重要性 2，状态 active，项目 全局_

回档/回退只恢复目标那一段，绝不整仓 reset 到很远；动手前先确认当前 HEAD 与差异范围（老大：「只回到把preset-standard砍掉之前噢，你别给弄到很远去了！」）。

关键词：回档、回退范围、最小化变更、git reset、版本回退、恢复目标段、别弄太远、动手前先看差异、用户偏好

