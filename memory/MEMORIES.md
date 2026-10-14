# 小困的记忆（导出）

导出时间：2026-10-14T12:08:31.013Z　共 276 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 用户（user）

### 0mv6luy06-23891010554541199b6dc955cf
_重要性 2，状态 active_

老大原话（m02577）：「检查插件更新并把我github三个dsh项目安装更新一下。」——三个项目指 dsh-raw-html（Public）、dsh-maid-scenery（Private）、dsh-maid-preset（Public），即"我的 github 三个 dsh 项目"这一固定说法。

关键词：三个dsh项目、插件更新、安装更新、dsh-raw-html、dsh-maid-scenery、dsh-maid-preset、用户原话、GitHub 项目

### 0mv5ldirl-3b2819d21c4840e3a6e875d026
_重要性 3，状态 active_

老大对记忆库的偏好：按重要度精选，只保留重要的记忆上传 GitHub，「没必要的就不保留了」——2026-10-13 执行过一次精选（30→20，淘汰 9 条 archived）。日常写记忆也要克制，别囤低价值条目。

关键词：记忆精选、只保留重要、没必要的不保留、重要度排序、记忆上传、GitHub 快照、记忆精简、用户偏好、archived 淘汰

### 0mv5j3kg2-0e277a664c8841e693373bc54c
_重要性 3，状态 active_

老大在开新工程前要求先对账保回退：「先对本地这边的内容跟github上的内容做核对。查漏补缺一下。以免这个整合出错回不来档」——有破坏性的改造（整合/重构）动手前，先完成本地↔远端全量对账（工作区/stash/ahead-behind/tags/文件清单），确保远端有满血回档点再开工。

关键词：回档点、查漏补缺、对账、本地远端核对、可回退、破坏性操作前置、满血恢复、git 安全、动手前备份、老大习惯

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

### 0mv77coqz-9e49d3190e9b4edfa34598ecf5
_重要性 3，状态 active，项目 dsh-maid-scenery，decisions_

dsh-maid-scenery 0.2.1（commit 70b2427，已推 GitHub；**tag v0.2.1 已于 2026-10-14 补打并推送**）落地两处：① client.js 新增 SKIN_DEFAULTS 统一出厂基线，settings 每项 defaultValue 都取自它（artwork:false、font:"serif"、workspaceFont:"serif"、modelExit:false、mobileModelExit:true、flashGlasses:false、mobileNav:"corner"、composerMode:"persistent"、composerBottomOnly:false、workspaceRowHeight:WORKSPACE_ROW_HEIGHT_DEFAULT）；② exposeSkinCustomization 之前加兜底：readManagedPreferences(SKIN_ID) 读 localStorage['dsh.skin-manager.preferences.v2']['maid-atelier'] → apply({values, visibility:{sfwMode: artworkVisibility(...)}})，artworkVisibility 复刻管理器 scheduleVisibility 语义（inside 反转 outside 策略）。管理器在线时会从同一份值重新 apply，同源不打架。smoke 110 PASS / drag-smoke 20 PASS；README 补「不装管理器也能保住设置」与 0.2.1 变更节。

关键词：scenery 0.2.1、SKIN_DEFAULTS、出厂基线、readManagedPreferences、artworkVisibility、兜底 apply、preferences.v2、defaultValue、70b2427、tag v0.2.1 已推、smoke 110 PASS、同源不打架

### 0mv759jn2-a58e52898ef84512837ff4e9f6
_重要性 2，状态 active，项目 dsh-maid-scenery，decisions_

scenery 与皮肤管理器（deep-whale-manager）的关系决策：**维持现状，不整合、不引导安装**。① 发现契约早已成立（scenery 包根自曝 skin.json，管理器认得出）；② 把管理器整个 vendor 进 scenery 包内技术可行但是负债——它是"活工具"不是装饰，依赖宿主 pluginManager.setVersionExemption 精确版本放行、跟着 DSH 小版本迭代，搬进来会失去 npm 更新通道；且并入后只管得着 scenery 自己，互斥切换无戏可唱。③ 让 scenery 运行时自调 installBundle 静默装包也不做（绕过审批改老大环境）。④ 2026-10-14 拟过「检测缺管理器时挂提示 + 一键复制安装命令」，最终未实现、未落笔，已搁置。⑤ 补记：眼下结论更强了——皮肤本体不经过管理器也照旧生效，而设置偏好由本包 0.2.1 自带的兜底 apply 保住，管理器只负责「设置→皮肤管理」那一页的开关与 UI。

关键词：维持现状不整合、deep-whale-manager、皮肤管理器 vendor 负债、setVersionExemption 依赖、installBundle 静默安装不做、C 方案取消、老大原话 撤回一下、skin.json 自曝已够、失去 npm 更新通道、互斥切换无戏

### 0mv751ol2-eeb8fd1ca2d149ac9d7a36f882
_重要性 3，状态 stale，项目 qwen-image-dsh，todo_

已完成（stale）：面板一键启动 + 失败态不再关窗 + 空闲自动关闭 三件都已落地并推送（3bc0554 / ae5cf77 / 875070d）。待老大重启 DSH 后验收：点会话头部「ComfyUI 面板」应能自己把本机 ComfyUI 拉起来（设置页 `launchCommand` 已预填便携版 run_nvidia_gpu.bat），随后 10 分钟无人用会自己关掉、设置页可点「立即停止」。

关键词：面板按钮、一键启动 ComfyUI、关不掉窗口、刷新页面才能关、probeConnection、panelStore.close、connection.tsx、launch.ts、POST /comfyui/launch、launchCommand、ComfyUIRuntime 接口、待实施

### 0mv71qhuj-0e360ceffafa4178b17c794b3f
_重要性 3，状态 active，项目 qwen-image-dsh，ops_

dsh-comfyui 自建支线（2026-10-14 已接入 profile 并重启验证通过；同日随四插件统一改名，**包名与目录均为 `dsh-maid-comfyui`**）：源码仓 = `D:\DeepSeek Harness\Works\dsh-maid-comfyui`（原名 comfyui-src），基线取 **PR 18 的 head**（`smallmj/dsh-comfyui` 分支 `up/banner-id` @ `d92c5d8`），克隆走 `https://ghproxy.net/https://github.com/smallmj/dsh-comfyui.git`（github 直连不通）。构建工具链：node v24.21.0、pnpm = `D:\DeepSeek Harness\resources\runtime\pnpm\bin\pnpm.cjs`（11.7.0，不在 PATH）。`pnpm install --config.minimumReleaseAge=0`、`npm run build` 出 `lib/` + `client/client.js`（约 249 KB）、`npm run typecheck` 双 tsconfig 全绿；离线自测 `node scripts/test-{store-params,skillpack,transfer,convert,launch,idle}.mjs`。**接入方式**：profile `package.json` 加 `"dsh-maid-comfyui": "link:D:/DeepSeek Harness/Works/dsh-maid-comfyui"` + `dsh.profile.bundles`（不加 `--config.minimumReleaseAge=0` 会撞 billion-context 的 ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION）。**装配三处名字必须一致**（npm 包名 = `cordis.patch.yml` 的 name = client bundle 注册 id）；宿主半边 `inject=['tools']`。**重启后验收**：`/comfyui/ping` 200、`/comfyui/workflows` 200。改 `src/*.ts` 要重启 DSH，改 `src/client/*` 刷新页面即可。**自己的仓库**：`Valorine97417/dsh-maid-comfyui`（**private**，2026-10-14 创建并完整推送 38 笔历史）；remote 布局 = `origin` → 自己的私有仓，`upstream` → smallmj 的 PR 分支镜像。**自有改造两笔**：`3bc0554`+`ae5cf77` 面板一键启动（`src/launch.ts` + `POST /comfyui/launch` + 设置项 `launchCommand`/`launchDir`，只对本机 baseUrl 显示）、`875070d` 空闲自动关闭（`src/idle.ts` + `POST /comfyui/idle/stop` + 设置项 `idleShutdownMinutes` 默认 10，0 = 关）。面板底色固定 `var(--dsc-panel-surface, #121f41)`。**推送通道**：github 443 直连被重置，一律 `git -c http.proxy=http://127.0.0.1:7890 push`；凭据在 Windows 凭据管理器（`gho_` 开头的令牌，能建仓，所以小困可代劳）。

关键词：dsh-maid-comfyui、comfyui-src、PR18、up/banner-id、link 接入 profile、minimumReleaseAge、装配三处同名、一键启动 launch.ts、空闲关闭 idle.ts、875070d、3bc0554、私有仓 origin upstream

### 0mv75lb3w-d21bcbc465904d4891457e4431
_重要性 3，状态 active，项目 dsh-maid-scenery，decisions_

老大问（原话）：「那给scenery加个配套安装deep-whale-manager呢？比如我DSH安装scenery插件，但没deep-whale-manager。就会帮我顺便安装deep-whale-manager。」——小困勘察后判定：A) 把管理器写进 scenery 的 dependencies（装包不等于启用、且 pin 死断更新通道）不划算；B) scenery 启动时自调 installBundle = 绕过 danger-full-access 审批、静默改老大环境，不做；C) 推荐=检测 + 引导：scenery 启动时读 profile 的 package.json，缺管理器就在背景面板/设置页挂配套提示与一键安装命令，由老大或小困走官方流程执行。截至 2026-10-13 老大尚未拍板是否做 C。

关键词：配套安装、自动安装皮肤管理器、deep-whale-manager、scenery 自举、检测与引导、安装引导提示、是否要做、越权安装、依赖写死、skin.json 自曝

### 0mv4z8jy6-ed25831b992a4555b28c2630c0
_重要性 2，状态 active，项目 dsh，ops_

dsh（DSH）插件来源与安装方式清单：多数插件是从 codeload tarball / git clone 下来的本地产物，再由 profile 的 `package.json` 用 `link:` 协议挂进 `C:\Users\Kayle\.dsh\profiles\desktop`。四件套已统一改名（2026-10-14）：`dsh-maid-preset` / `dsh-maid-scenery` / **`dsh-maid-vcp`（原 dsh-raw-html）** / **`dsh-maid-comfyui`（原 dsh-comfyui / 目录 comfyui-src）**；另有 dsh-posterflow-ai / dsh-video-skin / dsh-our-free-model / billion-context 等。profile 用 pnpm（11.7.0，`D:\DeepSeek Harness\resources\runtime\pnpm\bin\pnpm.cjs`，不在 PATH），`pnpm-workspace.yaml` 设 `nodeLinker: hoisted` + `autoInstallPeers: false`；`pnpm install` 需要 `--config.minimumReleaseAge=0`（否则撞 billion-context 的 ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION）。

关键词：DSH 插件来源、codeload tarball、git clone、profile 依赖、link 协议、pnpm 11.7.0、nodeLinker hoisted、minimumReleaseAge=0、四件套改名、dsh-maid-vcp、dsh-maid-comfyui、本地插件

### 0mv6dwfqd-59e775104dd74e60b250fda565
_重要性 3，状态 active，项目 dsh-maid-vcp，quotes_

老大原话（2026-10-13）：「raw插件创作者已经停更了，你帮我弄成本地的。然后上传到我的github里。依赖什么的都加上，避免github下载安装又要重新修复。」——据此把 dsh-raw-html 本地化并推送至 Valorine97417/dsh-raw-html。

关键词：用户原话、创作者停更、弄成本地的、上传到我的 github、依赖都加上、避免重新修复、接管上游

### 0mv6lukzg-d0af95dc0c6d4b2f81436c53a7
_重要性 3，状态 active，项目 dsh-maid-vcp，overview_

dsh-raw-html 本地分支（2026-10-14 随四插件统一改名：**包名与目录均为 `dsh-maid-vcp`**，workspace 目录 `D:\DeepSeek Harness\Works\dsh-maid-vcp`）：VCP 视觉通感协议插件——让消息里的 HTML 真正渲染成界面（含 SVG/Mermaid/KaTeX）。**上游 plolpl789/dsh-raw-html 已停更，本仓库是接管维护的本地分支**，含上游没有的四项修复：①美学面板「共 0 个风格」（上游 ctx.inject(['connection']) 回调不触发，改直接挂 webServer 前缀路由+复刻宿主 RPC 信封）②面板按钮 hover 白底白字（7 处 hover 变量改 --dsw-alias-interactive-bg-hover-accent）③可信模式默认开启+徽章默认隐藏（isTrusted 缺省即信任，仅显式 '0' 才关；避免与 dsh-video-skin 悬浮钮撞位）④风格库精简只留 abyss-maid（深海蕾丝·女仆工坊风）。**安装必须用 `link:`**——github:/file: 会在 pnpm install 时重拉 tarball 或复制内容，把本地修复整包覆盖（曾出过事故）。渲染能力由 app.asar 补丁注入（桌面端 `node patch/install-all.cjs`，幂等+--dry-run 体检），插件只负责开关与协议注入。**当前版本 0.6.7，HEAD `5a208f5`（改名提交）已推。远端仓库走「原地改名」路线：`Valorine97417/dsh-raw-html` 直接改名为 **`Valorine97417/dsh-maid-vcp`**（GitHub 自动重定向旧地址，历史/star 保留），本地 remote 已换新地址，远端与本地 hash 一致。改名牵连：`lib/index.js` 的 name/RPC_CHANNEL/STATE_FILE、`lib/client.js` 的 id/BTN_ID/PANEL_ID、`cordis.patch.yml` 全部换名；状态文件 `.dsh/dsh-raw-html-state.json` 已复制一份为 `dsh-maid-vcp-state.json`（保住 style: abyss-maid 等设置），旧文件保留；补丁器 `patch/apply-onfilter.cjs` 与 `patch/update-v6-inject.cjs` 用 `Math.max(t.indexOf('dsh-maid-vcp v6'), t.indexOf('dsh-raw-html v6'))` 兼容双世代 asar 标记。**`localStorage['dsh.rawHtml']` 一族焊在 app.asar 的前端补丁里，绝对不能改**。

关键词：dsh-maid-vcp、原 dsh-raw-html、VCP 视觉通感协议、接管停更上游、仓库原地改名、GitHub 自动重定向、5a208f5、link 协议安装、app.asar 补丁器、install-all.cjs、state.json 迁移、abyss-maid 唯一风格

### 0mv6tvcw0-5e16a6d1129e4af7af192917f4
_重要性 2，状态 active，项目 dsh-maid-vcp,dsh-maid-scenery，todo_

**复验结果（2026-10-13 23:57 重启后，全部通过）**：
✅ ①atelier 素材不再 404：`/skin-assets/maid-atelier/<hash>` webp 200/89946B、png 200/306760B（此前 404 系空文件名假象）；②graph rev=74159b5caf8f、76 条目，dsh-maid-scenery 带 client 条目（rev=8afb068d7192），三个 bundle 全 200（scenery 313026B / raw 117219B / preset 177371B）；③重启后无新 crash log；④深蓝空块不复现；⑤面板「背景画面」切换（老大 m05249「前两个没问题」）；⑥皮肤管理面板显示「深海女仆工坊」（同前）；⑦混排自愈——小困抠出老大刚验的那条消息原文（seq 9858 · 2466 字符 · 43 行）喂运行中的 fixVcpBlank，分界换行 2→2 保持、旧版对照 2→1。
**唯一遗留**：深蓝空块重启后不复现，记在 topic 0mv6v6bq 里挂着，再冒头按记录的切入口查。

关键词：复验清单、atelier素材已通、skin-assets 200、graph 76条目、混排自愈待验、深蓝空块不复现、背景画面切换、皮肤管理器、重启无崩溃

### 0mv6ey659-56b2a79761174859b8be90da43
_重要性 2，状态 active，项目 dsh-maid-vcp，todo_

dsh-raw-html 长期观察项：① 上游 plolpl789/dsh-raw-html 若复活，需考虑是否回并本地修复（四项：美学面板 0 风格 / hover 白底白字 / 可信模式默认开启+徽章隐藏 / 风格库精简为 abyss-maid）。徽章消失与 push 同步两项已分别于 2026-10-13 完成。

关键词：上游 plolpl789、停更上游复活、回并本地修复、四项本地修复、长期观察项、fork 维护、上游合并

### 0mv6t43nv-f74520542b6d42c49897e7408f
_重要性 3，状态 stale，项目 dsh-maid-vcp，todo_

已完成并发布（dsh-raw-html v0.6.7，commit 5e04f4b，已推 origin/main）。①补丁 v6.39：`patch/v6-inject.js` 新增 `findRootClose(text, from, rootName)`（复用 nextTag 分词 + 深度计数，RAWTEXT 跳过 script/style、VOID_TAGS 不入栈），`fixVcpBlank` 改为先定位根容器闭合点、空行压缩只在容器内生效，闭合处紧跟单换行则补分界空行；未闭合（流式中间帧）退回旧行为。七用例全绿。②`lib/index.js`【输出纪律】段补第 5 条「一条消息只允许一种格式」。③`patch/patch-frontend-asar.cjs` 新增 `updateInjectModule(t)`：已是 v10 形态时不再短路跳过，按 START/END 标记整段升级 v6 模块。④asar 已重打（121454696→121457576，回读 sha256 一致，九项特征 OK）。**待老大重启 DSH 复验**。

关键词：混排自愈、fixVcpBlank、v6-inject.js、容器闭合点、右边界、重打 asar、install-all.cjs、输出纪律段缺口、提示词补一句、老大拍板

### 0mv6nbghu-b1f5a05f0a5f488a84c3ff6020
_重要性 2，状态 stale，项目 dsh-maid-vcp，todo_

待办：老大需点开界面「</>」开关完成 dsh-raw-html 渲染能力终验（asar 补丁 + 插件 + 前端 bundle 全链路已就位，小困已输出一张 abyss-maid 风格验收卡作为活体验证）。若显示源码而非卡片，Ctrl+F5 强刷一次。

关键词：待验收、渲染开关、</> 开关、raw-html 验收、abyss-maid 验收卡、Ctrl+F5 强刷、补丁生效验证、VCP 渲染

### 0mv6naz1r-1fb67071a0924c4380acb0ed55
_重要性 3，状态 active，项目 dsh-maid-vcp，quotes_

老大原话（2026-10-13，关于 dsh-raw-html 安装流程）：「不用管之前的安装流程。按我github里的来，我的是走本地维护分支。你先帮我卸载干净。」→ 意为一切以 GitHub 仓库 README 的本地维护分支流程为准，先卸载再按 README 重装，不要沿用先前那套折腾路径。

关键词：用户原话、本地维护分支、按 github 来、卸载干净、安装流程、raw-html 重装、README 为准、不要沿用旧流程

### 0mv6ey64x-3990f4fd4a554a4187883b69c7
_重要性 3，状态 active，项目 dsh-maid-vcp，decisions_

dsh-raw-html 本地化决策：① 依赖协议用 link: 而非 file:/github:（link 只建符号链接永不覆盖本地改动；file 会拷进 node_modules 遮蔽源码；github 每次 install 重拉 tarball 正是本次整包回滚事故的成因）；② lockfile 手工对齐（importers 段 specifier/version 写完整 link: 路径，删掉 packages/snapshots 里的 tarball 条目）；③ node_modules 下用 junction 指向源目录，改源码即时生效；④ 版本号 0.6.0 → 0.6.4 对齐 CHANGELOG。

关键词：link 优于 file、依赖协议决策、lockfile 手工对齐、junction 部署、防整包覆盖、github tarball 回滚、specifier version、版本号对齐 CHANGELOG

### 0mv6exx6b-5a994c01fa1c49eaab513d9ac5
_重要性 3，状态 active，项目 dsh-maid-vcp，quotes_

老大原话（2026-10-13）：「raw插件创作者已经停更了，你帮我弄成本地的。然后上传到我的github里。依赖什么的都加上，避免github下载安装又要重新修复。」——dsh-raw-html 本地化 + 自建 GitHub 仓库的起因与验收标准。

关键词：用户原话、创作者停更、弄成本地的、上传到我的github、依赖都加上、避免重新修复、本地化起因、验收标准

### 0mv742s78-24c9376a2305497db737b0849e
_重要性 2，状态 stale，项目 dsh，todo_

给四件套建自己的 GitHub 仓库（`Valorine97417/dsh-maid-vcp` 与 `dsh-maid-comfyui`，截至 2026-10-14 均 404 未创建；老大本机无 gh CLI，push 需他授权），并把两个仓库的 remote 从旧地址改过来；随后重启 DSH 验证改名后的四个包正常装配（重启会带走 ComfyUI 8188，需重拉）。

关键词：待建仓库、dsh-maid-vcp、dsh-maid-comfyui、GitHub 404、改 remote、重启 DSH 验证、无 gh CLI、改名收尾

### 0mv6zby80-fb4d9c9f3b404308898ae71653
_重要性 3，状态 active，项目 qwen-image-dsh，decisions_

本地生图支线（2026-10-14）：目标是**本地出图 + 在 DSH 对话里出图**，全程不走云服务。模型与工作流落在 `D:\DeepSeek Harness\Works\QwenImage-2.1models`（含 `workflows\` 模板与 `outputs\`），引擎是 ComfyUI 便携版 `D:\ComfyUI_windows_portable`，监听 `127.0.0.1:8188`。**t2i 与 i2i 均已跑通**（t2i 约 30 秒 / i2i 约 27 秒，1024²）。桥接方案 = fork 出 `dsh-maid-comfyui`（源码仓 `D:\DeepSeek Harness\Works\dsh-maid-comfyui`，原 comfyui-src）link 进 profile，用它的 4 个 Agent 工具 + 面板，而不是自己写脚本。

关键词：本地生图、对话生图桥、QwenImage-2.1models、ComfyUI 便携版、127.0.0.1:8188、t2i 跑通、i2i 跑通、dsh-maid-comfyui、fork 支线、不走云服务

### 0mv6zby7c-89ad50b08b5a415a9db88b9997
_重要性 3，状态 active，项目 qwen-image-dsh，overview_

老大要在 DSH 里用本地生图模型出图（2026-10-14 起）。原话：「我在工作区里放了一个本地生图模型"D:\DeepSeek Harness\Works\QwenImage-2.1models"，我想要给他到DSH里，通过我们的对话来弄提示词生成。他的工作流模板，你可以从Comfy ui那边下载QwenImage-2.1 文生图和图像编辑模板吗？」目标：在对话里给提示词 → 本机出图，不走云服务。**进度**：ComfyUI v0.39.0 便携版跑在 127.0.0.1:8188；模型硬链接挂好；t2i 与 i2i 双双跑通；**DSH 对话生图桥已通** —— dsh-comfyui 自建支线接入 profile 并重启验证通过，两条 API 工作流（文生图/图像编辑）已入库可跑，小困能直接调 comfyui_workflow 出图。**剩余可选项**：给 fork 加子图展平（让 ComfyUI 画布存的新版模板能直接提取）。

关键词：本地生图、QwenImage-2.1models、ComfyUI 便携版、对话出图、工作流模板、t2i 跑通、i2i 跑通、图像编辑、127.0.0.1:8188、不走云服务

### 0mv72nme5-df7a139e95ca4f8f9cf671dbd7
_重要性 3，状态 active，项目 dsh-maid-scenery，decisions_

dsh-maid-scenery 目标：让改 runtime/scenery.js|css 后免手动重启 DSH（老大 m02520 前后：「可以加一个重启DSH的按钮吗？每次手动重启很麻烦。写进融合层里可行吗」）。**结论：老大 m02709 拍板「那就不弄了」——不做（2026-10-14）**，现状维持：改 runtime 文件仍需重启 DSH，改动本身刷新页面即可见（vendor 与宿主 index.js 的新端点除外）。侦察留档（以后再想动可复用）：「页面加重启按钮」不可行——桌面壳 preload 经 contextBridge 只放出 onboarding/目录选择/宿主路径/平台窗口/更新状态，无 restart 或 quit；主进程 IPC 常量表里无重启通道；宿主侧只有 shutdown，且宿主一退出主进程即判 fail。唯一 `app.relaunch()` 在 DesktopFatalRecovery 崩溃恢复对话框回调里，另一处 restartAppHostMenu 只在开发模式。若能接受改造，治本方案 = 把融合层注入从「整份文本」改成动态加载（注入小 bootstrap，用 `<script src="/dsh-maid-scenery/runtime/scenery.js?v=<mtime>">` 取真身、CSS 走 `<link>`），宿主 makeReader 按 mtime+size 缓存，则刷新页面即取新版；代价是 scripts/smoke.mjs 里「注入四行」「融合层 css 与注入逐字节相等」等断言要重写。

关键词：重启 DSH、重启按钮、融合层、注入表启动时收集、动态加载 scenery.js、script-src、makeReader mtime、刷新页面即生效、preload 暴露面、IPC 常量表、app.relaunch、冒烟断言要改

### 0mv6xefk6-e7385a66cb984352849f09ec79
_重要性 2，状态 stale，项目 dsh-maid-scenery，todo_

已完成：dsh-maid-scenery 的深色锁定（老大 m01089「帮我改一下只用深色主题界面，不再随通用设置里的外观三个按钮变化」）——runtime/scenery.js ⑤ setupDarkLock（DARK_ATTR='data-ds-dark-theme'，缺失就补回，MutationObserver 盯着）+ scenery.css H 段 `color-scheme: dark`。已随 3759e27 提交推送（冒烟 94 PASS / drag-smoke 20 PASS）。

关键词：融合层生效、重启 DSH、注入表、启动时收集、刷新无效、生效边界、待验证、scenery.css、index-inject、观感验证

### 0mv6zby7p-c110132d5a5341bbad55ea59bb
_重要性 2，状态 active，项目 qwen-image-dsh，ops_

本机生图资产与部署（2026-10-14 更新）：模型源目录 `D:\DeepSeek Harness\Works\QwenImage-2.1models`，保持 ComfyUI 目录结构 —— `diffusion_models/qwen_image_2.1_int8_convrot.safetensors`（6.76 GB）、`text_encoders/` 下 `qwen3vl_8b_fp8_scaled`（9.86）/`qwen3vl_8b_int8_convrot`（8.71）/`qwen3vl_8b_nvfp4`（5.87）+ 两份 PE `qwen3.5_9b_qwen_image_2.1_pe_t2i_w4a8`（6.26）与 `_pe_i2i_w4a8`（6.26）、`vae/qwen_image_2.1_vae_bf16.safetensors`（0.63）。ComfyUI **便携版装在 `D:\ComfyUI_windows_portable`**（v0.39.0，Python 3.13.14 embeded，PyTorch 2.14.0+cu130，端口 8188），模型全部用**硬链接**挂进 `ComfyUI\models\{diffusion_models,text_encoders,vae}`（不额外占空间），挂完**不用重启**（CLIPLoader 的 enum 会实时刷新）。工作流副本（改过模型名的 `mine_qwen_image_2_1_t2i.json` / `_image_edit.json`）已放进 `ComfyUI\user\default\workflows\`，也能在 8188 的界面里直接加载。成图输出在 `ComfyUI\output\`，副本收在 `QwenImage-2.1models\outputs\`。机器：RTX 5060 / 8 GB，系统 Python 3.14.7（别用），解压工具 `D:\Downloads\7zr.exe`。

关键词：ComfyUI 安装位置、D:\ComfyUI_windows_portable、端口 8188、硬链接挂载、PE 编码器已下完、模型清单、qwen_image_2.1_int8_convrot、vae_bf16、python_embeded、启动命令、user/default/workflows、outputs 目录

### 0mv6z0v5i-6052354daf824c46bb9c84bf51
_重要性 2，状态 active，项目 dsh-maid-scenery，quotes_

老大原话（无限加载排查期）——m01346：「我是把"D:\DeepSeek Harness\Works\dsh-maid-scenery"文件夹移出才能进来的！笨蛋大肥鲸！」；m01404：「插件里面是关闭的，可能是这个的问题导致我进不来一直加载。而且我现在也手动打开不了。」；m01417：「继续查。」

关键词：无限加载、文件夹移出、才能进来、插件里面是关闭的、手动打开不了、继续查、老大原话、事故现场、dsh-maid-scenery

### 0mv6yriyb-e7b1e12e4ff84f269ea91f2599
_重要性 2，状态 active，项目 dsh-maid-scenery，ops_

dsh-maid-scenery 的客户端半边 client.js 是双段结构：① 本包段（id=dsh-maid-scenery，apply 里 `require('@smalltailqwq/dsh-client-ui-skin-maid-atelier')` 把主题客户端物化进本 fiber）② 随包 maid-atelier 客户端全量段（3202 行，自带 load、id 保持上游原样）；两段**现在都包了 try/catch**。界面卡死时的保命方案：把 `C:\Users\Kayle\.dsh\profiles\desktop\package.json` 里 `dsh.profile.bundles` 的 `"dsh-maid-scenery"` 临时删掉（顺手照顾逗号）→ 重启即回原生界面，再慢慢修。

关键词：client.js 双段结构、maid-atelier 物化、保命方案、profile package.json、bundles 摘掉、重启回原生界面、客户端半边、3202 行、require 主题客户端、界面卡死、启用关掉

### 0mv6xb79h-fa86b2912dd546fdbc58f96f10
_重要性 3，状态 active，项目 dsh-maid-scenery，structure_

dsh-maid-scenery 的 runtime/scenery.css 段落地图（本包唯一改样式的地方，vendor 零修改）：A 视频层兜底色透明 / B 「静态画」模式整体淡出 / B2「视频」模式让静态画让位 / C（已撤）/ D 面板「背景画面」行 / F 圆钮可拖（touch-action:none、面板 max-height）/ E 亮色改冷调瓷白 / G 顶栏与右栏（老大已放弃，代码留档）/ H 深色锁定（`color-scheme:dark`）。G 段：顶栏 `[data-windows-titlebar] [class*='frame']::before`（不挑父级）+ `var(--dsw-alias-bg-layer-2,…)` + 底边金线；`[data-rightbar-col]` 实心主题蓝 + 柔光 + 左金线。scenery.js 侧：② 画面模式 / ③ 音乐行 / ④ 圆钮拖动吸附 setupKnobs / ⑤ 深色锁定 setupDarkLock（须在 `if (tryMount()) return` 之前调用）。
**④ 的坑位（踩过两次）**：`KNOBS_FRAME` 只认 `[class*='centerCol']` 与 `[data-slot='conversation.session']`，**绝不能再加 `main` 之类的整页兜底** —— 刷新瞬间真对话列还没挂上时它会命中含侧边栏的整页容器，把 `side='left'` 的圆钮按进左栏（老大报过两次）；`frameReady()` 要同时满足 `width>160 && height>120 && left>=40`（侧边栏折叠也还有 56px，40 这条线安全）；落位时机 = 初始化 + ResizeObserver + `[0,150,500,1500]ms` 定时补位（尺寸没变时 RO 根本不回调，初帧错位会一直留着）。冒烟 94 PASS / drag-smoke 20 PASS。

关键词：scenery.css、段落地图、G段、顶栏实心、右栏实心、金线、殿蓝柔光、融合层、vendor 零修改、data-rightbar-col、frame::before、冷调瓷白

### 0mv67kuh7-43cd2f09282b456fb5f3b1d1ff
_重要性 3，状态 active，项目 dsh-maid-scenery，overview_

【顶栏/右栏美化 + 深色锁定 + 融合层生效机制】vendor/video-skin 保持上游形态；本包融合层 runtime/scenery.{css,js} 承载：面板「背景画面」「背景音乐」两行 + 圆钮拖动吸附 + 窗口顶栏与右侧栏底色（老大已放弃该需求，代码留档）+ 深色锁定（只用深色，外观三按钮不再改界面）。已推送：927b914（整合）→ f05885c（音乐行）→ 2a01b13（圆钮拖动）→ bc8bf65（活动范围限对话框）→ **3759e27**（深色锁定 + 圆钮刷新后不再落进侧边栏，3 文件 +161/−4）。冒烟 94 PASS / drag-smoke 19 PASS。DSH 深色变量实证挂在 `body[data-ds-dark-theme]`（asar: `body[data-ds-dark-theme]{--dsw-alias-bg-base:…}`）。生效：F5 刷新即取新文本，无需重启。

关键词：dsh-maid-scenery、v0.2.0、整合版、vendor、maid-atelier、dsh-video-skin、skin-assets、927b914、素材404已修、双许可、profile卸载配套

### 0mv6xatt7-7e5fa381844148f48b7340ab94
_重要性 3，状态 active，项目 dsh-maid-scenery，decisions_

顶栏与右侧栏美化（2026-10-14，**老大已放弃此需求**）
老大 m00743 原话：「顶部栏，应用、编辑、最小化、放大、关闭的这一栏没界面美化上，现在是视频背景覆盖上去，但是会跟旁边的主题界面产生突兀，比较对话的也是视频背景。然后是右边侧边栏，只有一片蓝色，不好看。」m01033 又提：「可以把红框圈起来的主题背景放到顶栏那边去吗？这样的话会不会更符合主题界面呢？」最后 m01089：「还是一样，放弃了。」
**根因**：① 顶栏 = Electron 原生 titleBarOverlay 透明，DSH 的 `.frame::before` 拖动区取 `--dsw-specific-sidebar-fill`（已被视频皮肤半透明化）；② 右栏在 Windows 下自身无底色（darwin 才有），实底来自主题的 `--dsw-alias-bg-overlay: rgba(13,25,59,.98)`。
**演进**：第一版「让视频透上来」（渐隐 + 半透明）→ 被否；第二版小困自调实心深蓝 `rgba(10,22,54,.97)` → 仍不像主题；第三版改成**取主题变量** `--dsw-alias-bg-layer-2`（maid-atelier 的面板蓝 #182850d1）+ 殿蓝柔光 + 金线。
**为何一直「还是一样」**：选择器写成了 `html[data-windows-titlebar] …`，而该属性不保证挂在 html 上 → 规则全程空转（已改成不挑父级的 `[data-windows-titlebar] [class*='frame']::before`）。
**当前状态**：G 段代码留在 runtime/scenery.css 里不动，不再折腾；落点始终是本包融合层，vendor 零修改。

关键词：顶栏、右侧栏、界面美化、参照物、实心深蓝、金线、殿蓝柔光、bg-overlay、sidebar-fill、titleBarOverlay、渐隐被否、观感一致

### 0mv6xatsy-d2bfbee92e0d44eface3e70450
_重要性 3，状态 active，项目 dsh，structure_

DSH 界面 DOM 锚点（改界面样式优先用这些，比哈希类名稳）：三列 = `.BynINW_frame` 下的 `[class*='sidebarCol']` / `[class*='centerCol']` / `[data-rightbar-col]`（RightbarColumn 组件自带该属性）；对话列另有 `[data-slot='conversation.session']`；右栏内容 = `[data-sidebar-right-session]` + 面板 `[data-dockkit-pane]`/`[data-dockkit-float]` + 标签 `[data-dockkit-tab]`/`[data-sidebar-right-tab]`；窗口标题栏 = `html[data-windows-titlebar]`，DSH 用 `.frame::before` 留出 `--dsh-windows-titlebar-height` 的拖动区；折叠状态 = `.frame[data-sidebar-collapsed]`、`[data-rightbar-collapsed]`。注意 `[data-dsh-better-sidebar]` 是第三方「更好的侧边栏」插件的作用域属性，不是 DSH 自带。

关键词：DOM 锚点、data-rightbar-col、data-sidebar-right-session、data-dockkit-pane、data-windows-titlebar、BynINW、sidebarCol、centerCol、三列布局、better-sidebar、选择器、界面样式

### 0mv6vyls2-b3538deb5db74ccbabede70a98
_重要性 2，状态 active，项目 dsh-maid-scenery，structure_

dsh-maid-scenery 视频层全在 vendor/video-skin/：宿主 index.host.js 定义路由常量 ROUTE_PREFIX='/dsh-video-skin'、MUSIC_ROUTE='/dsh-video-skin/music.mp3'、TRACKS_ROUTE='/dsh-video-skin/tracks'、CONFIG_ROUTE、OVERRIDE_ROUTE；lib/config.js 管 DEFAULT_CONFIG（background.music=''、musicVolume=0.25）、HOME_CONFIG_FILE='dsh-video-skin.json'、PACKAGE_CONFIG_FILE='video-skin.config.json'、OVERRIDE_KEYS=['surface','surfaceLight','veil','veilLight','musicVolume']、scanMusicPlaylist 自动成歌单，loadConfig 每次请求重读文件（改 JSON 刷新即生效）；runtime/skin.js:1079 startBackdropMusic 管轮播与音量，它建的音频元素 id='dsvs-backdrop-music'，背景层延后 1.2 秒才落 DOM。面板与圆钮 vendor 都只带 id（'dsvs-knobs' / 'dsvs-knobs-pill'）没 class，必须按 id 找；圆钮 vendor 写死 right:16px/bottom:16px、32×32、transition 220ms，面板 268px 宽、挂在底部 58px 处。
融合层是本包自加（runtime/scenery.js 是源文件，产物 client.js 压缩过、别 grep）：面板里两行——「背景画面」（视频/静态画）与「背景音乐」（播放/暂停直接操作 dsvs-backdrop-music、打开音乐位置、label 报目录曲目数）；另外给圆钮装了拖动吸附（位置存 localStorage['dsh-maid-scenery-knobs']={side,y}，面板贴着圆钮走：默认上方、塞不下翻下方；拖动先收面板、拖完吞掉那一次 click；只改定位样式不碰 vendor 逻辑，幂等标记 pill.dataset.sceneryDrag）。
拖动范围锚点（bc8bf65 起）：KNOBS_FRAME 选择器取 DSH 主界面中间列——`.BynINW_centerCol`（class 名带哈希前缀，故用 [class*='centerCol'] 子串匹配，兜底再试 [data-slot='conversation.session']，都落空才退回视口）；frameRect() 量它的矩形，拖动夹取内缩 4px、吸边与面板定位内缩 KNOBS_GAP=16px；window resize 时重新量、apply() 重排。同页布局锚点还有 .BynINW_sidebarCol（侧边栏，[data-slot='sidebar']，宽度变量 --dsh-sidebar-width）、标题条高度变量 --dsh-frame-top-clearance。

关键词：vendor/video-skin、index.host.js、MUSIC_ROUTE、TRACKS_ROUTE、config.js、scanMusicPlaylist、startBackdropMusic、dsvs-backdrop-music、dsvs-knobs、runtime/scenery.js、music.json、open-music-folder、融合层

### 0mv6sdqcc-e3822d55c40647898db68acecf
_重要性 2，状态 stale，项目 dsh-maid-scenery，todo_

dsh-maid-scenery v0.2.0 整合版验收进展（2026-10-13 晚）：代码/许可/冒烟（64 项）/推送（d7e02ba + 57fefa9 + af4e0a4）/卸载配套均已完成（profile deps 11 / bundles 14）。**已就地验证**：`discoverInstalledSkins(desktop patch)` 返回 1 个皮肤、目录指向 scenery 根、图标解析成功、cordis.yml 无 maid-atelier/video-skin 残留、无新崩溃日志。**仍待老大重启 DSH 后复验**：①graph 里 scenery 带 client 条目；②主题素材路由 /skin-assets/maid-atelier/* 返 200；③视频层与融合层注入行齐（面板「背景画面」切换可用）；④皮肤管理面板显示「深海女仆工坊」。未 bump tag。

关键词：v0.2.0 待验收、重启复验、skin-assets 路由、注入行、皮肤管理器、scenery 暴露 skin.json、待打 tag、graph client 条目

### 0mv6whxsb-afefde975387436b9671351d8c
_重要性 2，状态 active，项目 dsh-maid-scenery，quotes_

老大原话（m00353，附截图，箭头指向插件所在位置）：「聊天背景面板可以放到dsh-whale-widget插件的这个位置吗？或者像这个插件一样加个拖拽吸附的功能。」——诉求：把写死在右下角的圆钮/面板解放出来。小困选了后者（拖动 + 就近吸边 + 位置记忆），已推 2a01b13；默认位当时仍是右下角出厂位。

关键词：聊天背景面板、拖拽吸附功能、圆钮位置、whale-widget位置、用户原话、交互偏好、面板挪位、右下角圆钮

### 0mv6stlwm-a6c456d15a1c45508a6581d0e0
_重要性 2，状态 active，项目 dsh-maid-scenery，decisions_

老大 m04267 在「整合后皮肤管理器发现 0 个皮肤」的岔路口拍板：选「**先恢复「看得见」**（推荐）」——即 scenery 包根暴露 skin.json（`package` 字段改 dsh-maid-scenery），让面板重新显示主题与定制控件；互斥切换暂时写不出实际效果，**后续再补**。备选（当轮被否）：「补全整条链」（scenery patch 额外插 ui-skin-maid-atelier entry 指向包内主题模块，让切换真正生效，改动更大要拆重复装配）与「不管它」。

关键词：先恢复看得见、皮肤管理器、包根暴露 skin.json、互斥切换后续再补、补全整条链、ui-skin-maid-atelier、定制控件、面板显示

### 0mv6sd0yi-8f07b01390cc473daaf041c71a
_重要性 3，状态 active，项目 dsh-maid-scenery，decisions_

老大 m03942 拍板 scenery「全整合」：把 maid-atelier 主题与 dsh-video-skin 视频层全 vendor 进 scenery（约 30MB，排除 flac），双许可 + 署名链，profile 只剩 scenery 一个包。前置诉求原话（m03881）：「全部整合到scenery插件里吗？配套插件卸载了也能正常使用。」许可问题（m03924/m03942）：「整合后署名许可 可以吗？」→「像Small-tailqwq/dsh-deep-whale插件一样」。理由：pnpm `blockExoticSubdeps` 禁 git 协议子依赖，主题只能降 optional peer，「装一个包」永远做不到，三家谁缺席都要用户排查。

关键词：全整合方案、配套卸载不影响、blockExoticSubdeps、optional peer 降级、双许可、署名链、像 dsh-deep-whale 一样、装一个包、老大拍板

### 0mv68r8sl-f47af945a8cc442396d7bd69f9
_重要性 3，状态 stale，项目 dsh-maid-scenery，todo_

待办：① scenery.js 面板注入改 getElementById('dsvs-knobs')、按钮类名改 .dsvs-knobs-preset、激活态改 data-active="1"；② 面板补「亮色/暗色」切换行 + 两种主题下按钮可读性优化；③ raw 可信模式默认打开（localStorage raw-html.trusted=1）并隐藏盾锁徽章；④ 侧边栏展开后按钮消失、输入框图片显示异常——已换正源主题，重启后先复验是否上游已修，再决定是否动融合层。

关键词：待办、面板注入修复、亮暗切换行、按钮可读性、可信模式隐藏、侧边栏按钮消失、输入框图片、dsvs-knobs-preset、data-active、先复验再修

### 0mv6pg3u1-b2496e0f9aa74dd4b47cbe64c0
_重要性 3，状态 active，项目 dsh-maid-preset，decisions_

记忆库合并（2026-10-13，v0.7.3=946f5eb）：活库与 GitHub 远端 id 零重叠（本机 67 条 × 远端 118 条），按老大裁定的优先级「GitHub 远端 > 本地工作副本 > 本地活库」合并——远端 118 为底，并入本机过门槛条目，**结果 179 条（active 164，过门槛 161）**。跳过 6 条「另一台机器」环境事实（内容指向 C:\Users\Administrator，属错误信息，已 archived：0mv4vttac/0mv4vtt9h/0mv53o3cb/0mv4uzoar/0mv4v0ohm/0mv6d4mkj）；归档 2 条被远端完全覆盖的真重复（0mv5esl6d memory id 截断撞车、0mv6n9hn1 pnpm minimumReleaseAge）。memory/ 三件套重导出（161 条、违规 0）已推 GitHub。

关键词：记忆库合并、GitHub远端优先级、id零重叠、Administrator环境事实、另一台机器、真重复归档、179条、161条上船、v0.7.3、合并策略

### 0mv6nyid1-8f0e3c4f05e4437fae21508708
_重要性 2，状态 active，项目 dsh-maid-preset，todo_

反思两道闸已随 v0.7.3（946f5eb）发布，tag v0.7.3 已推。**待办：两道闸的松紧老大尚未表态**（若嫌「3 条扎实胜过 10 条噪音」太硬、或要求 dream 判据一并加严，则再改 reflect.md 三语言）。

关键词：两道闸、reflect.md、松紧待反馈、反思提示词、v0.7.3、值得记吗、重复吗、dream判据、三语言同步

### 0mv6oquuv-e829bc095cbd44afa7bc00d55b
_重要性 2，状态 active，项目 dsh，todo_

待验收：预设 chip 修复（方案 B 已改完 cordis.patch.yml）后，需老大 F5 刷新页面确认新会话页 chip 是否回归；若未回归则重启 DSH。验收通过即关闭此项。

关键词：预设 chip 验收、F5 刷新、重启 DSH、新会话预设回归、方案B 待验证、chip 是否恢复、cordis.patch.yml 生效、刷新页面

### 0mv6ofowe-499cbc8bf853471f8eca4041af
_重要性 2，状态 active，项目 dsh-maid-preset，todo_

待老大拍板（2026-10-13 20:47 提出）：①清理 C:/Users/Kayle/.dsh/maid-sync 卡住的 rebase（副本是缓存，直接 fetch + reset --hard origin/main 最省事）；②GitHub 上那份 Administrator 账户的 118 条外来库——留还是清，清了才轮到本机 45 条上船覆盖。两件小困均未动手，等老大一句话。

关键词：maid-sync rebase 清理、外来库处置、等老大拍板、reset hard origin/main、45 条上船、覆盖远端、记忆串库修复、同步恢复

### 0mv6o5adm-edb8c7af64de43c7acd0bf937d
_重要性 3，状态 active，项目 dsh-maid-preset，structure_

记忆上船链路六环（dsh-maid-preset 主线数据流）：①反思 buildReflectMessage 注入提示词（带 REFLECT_MARKER）→ ②闸二查重 memory_search/memory_find_similar → ③闸一筛选值得记吗 → ④落库 memory_remember/update → ⑤上船门槛 exportWhere()（archived 不上船 + importance >= sync.minImportance，默认 2，设置页可调 0~9，json/md/快照三路共用同一 WHERE）→ ⑥上船 exportMemory 写 memory/MEMORIES.md+memories.json+memory.db 快照，由 sync.js 空闲推送 GitHub。实测（2026-10-13）：readRows 导出 43 条，本轮 5 条 5/5 全在册，门槛外漏网 0、archived 漏网 0。

关键词：上船链路、六环、exportWhere、minImportance、exportMemory、memory 快照、MEMORIES.md、门槛热读、三路共用、archived 不上船、数据流、链路实测

### 0mv6nx1i1-41b798b6ced14317a28aa62711
_重要性 2，状态 active，项目 dsh-maid-preset，decisions_

反思提示词两道闸（v0.7.3，commit 2cc63e4）：闸一「值得记吗」只留以后的会话不知道就会踩坑/走弯路/重复问的信息，列正反清单+自问三个月后还有用吗+宁可少写（3条扎实胜10条噪音）；闸二「重复吗」先 memory_search 核心词、memory_find_similar 比对，同事项同结论只 update 不新增、旧条目作废先 archived、结论变了 update 保 id 不让新旧并存、措辞不同视同重复，兜底说明 0.8 自动合并只看字面。原三节顺延，【三】补第5条重复条目留最全归档其余。

关键词：两道闸、值得记吗、重复吗、去噪、查重流程、memory_find_similar、0.8 自动合并、归档重复、反思改版、提示词加严、记忆质量

### 0mv6nwrk7-8985d179f88c41839a7683df47
_重要性 3，状态 active，项目 dsh-maid-preset，quotes_

老大要求 dsh-maid-preset 具备记忆自治判断。原话：「dsh-maid-preset可以给记忆做个有用记忆、没有记忆的判断吗？自己判断要保留哪些记忆、判断记忆是不是跟之前的相似重复了。」小困摸完 meow 代码后，老大方向修正：「给他加到反思那边去会不会更好。」→ 拍板不新做独立功能，把判断能力注入既有反思提示词。

关键词：记忆自治、反思提示词、判断保留、相似重复、查重、有用记忆、加到反思、用户原话、meow 判断、去噪

### 0mv6nbkvm-ac9bed51e9c44c8f9f28de5685
_重要性 2，状态 stale，项目 dsh-maid-preset，todo_

待办：dsh-maid-preset 的 v0.7.1（dbf3742 同步基线自愈）与 v0.7.2（8379faf 设置页按钮修复）已提交推送但**尚未打 tag**——本地与远端 tag 都停在 v0.7.0；package.json 版本号已是 0.7.2。待老大确认后补打并推送。

关键词：待打 tag、v0.7.1、v0.7.2、dbf3742、8379faf、补打 tag、版本收尾、package.json 0.7.2

### 0mv6luph2-732a32149ffc40be92f6c68dfb
_重要性 3，状态 active，项目 dsh-maid-scenery，overview_

dsh-maid-scenery（Valorine97417/dsh-maid-scenery，Private，v0.1.4）：视频背景 × 深海女仆工坊的**融合层**插件，把 maid-atelier 主题与 dsh-video-skin 捏合成可切换场景。三件事：①两个背景互斥显隐（切静态画时视频层淡出；切视频时只让静态画的背景让位、立绘不动——刻意不写反向条件，脚本没跑时降级安全）②在视频皮肤「聊天背景」面板注入「背景画面」行（视频/静态画），localStorage 持久化，淡出用 opacity 不用 display:none（切回不闪不重载）③亮色可读性接管（视频皮肤在亮色下用 !important 刷纯白，本插件换回冷调瓷白并压实：表面亮度 92%→73%，对比度 15.4:1→10.9:1；暗色一字不动）。设计约束：只推 kind:'style'/'script' 绝不推 script-src（会打掉 __DSH_BOOT_READY__ 致应用起不来）；apply 同步注册 webserver/index-inject 订阅；出错安静待命。主题不做成本包依赖（pnpm blockExoticSubdeps 禁 git 协议藏子依赖），降为 optional peer，三条链全条件化。安装：`link:D:/DeepSeek Harness/Works/dsh-maid-scenery`，装完重启 DSH。

关键词：dsh-maid-scenery、融合层插件、视频背景、maid-atelier、dsh-video-skin、背景互斥显隐、亮色可读性、冷调瓷白、blockExoticSubdeps、optional peer、index-inject、link 安装

### 0mv5muuq8-de277745e1e54c3f81e13063d4
_重要性 2，状态 stale，项目 dsh-maid-preset，todo_

设置面板八项优化 v0.7.0 已实施、推送并**验收通过**（8a4a268 八项 + 01558de 假警报修复）：①重要性就地编辑②手写新增记忆（PRAGMA 探列 insert）③排序（更新时间/重要性）④统计条（各状态计数+可上船数）⑤人设恢复备份/出厂（restorePersona→writePersona）⑥一键自检卡（selfCheck 13 项+客户端事实合并）⑦同步总闸 enabled 热读（tick 头检查，设置页开关即生效）⑧上船门槛 minImportance 热读（exportWhere() 三路共用）+代理自动探测（detectLocalProxies：环境变量→注册表 ProxyEnable/ProxyServer→端口 7890/7897/10809/10808/8888，缓存 10min；gitWithFallback 先直连失败后借道；proxies 列表弃用仅兜底）。坑：node:sqlite options 显式传 undefined 触发 ERR_INVALID_ARG_TYPE（getDb 按参数个数分支）。冒烟 scripts/smoke-v070.mjs 全绿；老大重启后自检卡 16 项全绿（git 身份行走 sync.identity 绿灯）。

关键词：设置面板、八项优化、v0.7.0、重要性编辑、手写新增记忆、统计条、一键自检卡、同步总闸 enabled、上船门槛 minImportance、代理自动探测、getDb ERR_INVALID_ARG_TYPE、验收通过

### 0mv6b8c3q-f2e56c4712094aaca130275093
_重要性 2，状态 stale，项目 dsh，todo_

待老大决定：dsh-raw-html 的 styles/_BASELINE.md（未命中风格时的兜底基准库）是否也清掉——小困倾向保留（它不是风格，是工具），等指示。

关键词：_BASELINE 兜底库、是否清掉、待老大决定、未命中兜底、风格库清理后续、保留工具文件

### 0mv6b7r8h-80f79168ed4241538a9dfcc01e
_重要性 2，状态 active，项目 dsh，quotes_

老大原话（2026-10-13）：「去让后把其他风格删掉」——据此删除 dsh-raw-html 的 12 个风格文档，只留 abyss-maid。

关键词：用户原话、把其他风格删掉、只留一套、风格库清理起因、删风格决策

### 0mv6b46un-5064bb3e407840dfaee10e94e7
_重要性 2，状态 active，项目 dsh，quotes_

老大原话（2026-10-13）：「背景色换成#121F41」，改完确认「这次没问题了」——abyss-maid 底色定稿为固定实色 #121F41（比输出框 rgba(18,31,67,.94) 稍亮一档），文档五处同步。

关键词：用户原话、背景色换成121F41、底色定稿、abyss-maid 修订、固定实色、老大确认没问题、风格文档同步、比输出框亮一档

### 0mv68rq8f-8f854671e2a842109f1c386ac6
_重要性 2，状态 active，项目 dsh，quotes_

老大原话（2026-10-13）：「raw渲染的背景颜色，跟输出框的背景颜色不一样。」——据此把 abyss-maid 风格文档的卡片底从写死 #091333 改为跟随宿主变量。

关键词：用户原话、raw渲染背景颜色、输出框背景颜色、底色不一致、abyss-maid 修订起因、写死 hex 问题、卡片底色

### 0mv68r8sb-d82fdc8999804b409507146c43
_重要性 3，状态 active，项目 dsh-maid-scenery，quotes_

老大原话（m02944/m02966/m02969）：「聊天背景面板加上一个亮色、暗色背景切换。然后帮我给暗色背景和亮色背景做一个优化。让界面的按钮都可以正常显示出来。」「聊天背景面板没添加视频背景和静态背景切换，也没有添加亮色背景和暗色背景切换。且raw渲染的可信模式按钮跟聊天背景面板按钮重叠了。你直接帮我把可信模式默认打开，然后隐藏掉它。」「还有侧边栏展开后的按钮都不见了。和上传在输入框的图片没好好显示出来。」

关键词：亮色暗色切换、按钮正常显示、视频背景静态背景、可信模式默认打开、隐藏可信模式、按钮重叠、侧边栏展开、输入框图片、聊天背景面板、老大原话

### 0mv68m6h7-9fcd71dc437e4d6f9d63bba3b7
_重要性 2，状态 active，项目 dsh，quotes_

老大原话（2026-10-13）：「你可以帮我给当前的主题界面做一套raw渲染的风格吗？」——据此新建 abyss-maid 风格，色板取自 maid-atelier 深海女仆工坊皮肤。

关键词：用户原话、主题界面、raw渲染风格、abyss-maid 起因、女仆工坊、皮肤同源、风格定制需求

### 0mv66thzl-0f38bbb1b0654090868a612b2c
_重要性 3，状态 active，项目 dsh，quotes_

项目：dsh
老大原话存档（raw 渲染故障与后续）：
- m04543「不用去隔壁，你现在输出的这个就是没渲染html。」
- m04559「现在是连输出都不显示，就是一直在转圈」（贴截图）。m04492 前老大回复「重启了」。
- m04654「重启好了」。
- m04667「两边的raw渲染都恢复了，现在有个小bug你要修一下。就是美学系统里，鼠标放到按钮上。就变白色的而且看不到字符。」
→ 说明故障对本会话同样生效，不是隔壁会话独有；白屏是重启后新增症状。

关键词：用户原话、没渲染html、不用去隔壁、连输出都不显示、一直转圈、白屏、raw 渲染故障、重启了、vcp-root

### 0mv52mcdv-00f71d4f2c31414b8fa8a20aee
_重要性 2，状态 active，项目 dsh-maid-preset，decisions_

dsh-maid-preset 现为 v0.7.2：lib/sync.js 轮询活库 mtime，空闲 10 分钟才导出推 GitHub；专用克隆 $DSH_HOME/maid-sync；导出收敛到 lib/export.js。0.7.1 基线自愈，0.7.2 修设置页两按钮，已推远端并刷 profile，需重启生效。

关键词：dsh-maid-preset、记忆自动同步、sync.js、空闲推送、maid-sync 专用克隆、轮询 mtime、导出模块、GitHub 推送、0.7.2、版本

### 0mv53o3bt-a060e1574a674d39ba572857a4
_重要性 3，状态 active，项目 dsh，decisions_

「强制刷新崩溃」机制链已定位（2026-10-12）：渲染侧 loader 的卸载监听把 fiber 卸载误判为「用户手动禁用」，写入 entry.disabled；而重建闸门 `async refresh(){ this.fiber || this.disabled || await this.init() }` 此后永久跳过 ⇒ entry.fiber 恒 undefined ⇒ boot 审计报 `${id}: import failed (see console for the import error)`（空话，因 importError 记录表为空）⇒ reportFatal 弹窗。真因不可见是两处叠加：import 缺行的同步抛错不进错误记录表，且 ctx.logger.error 不落 console（crash log 里渲染进程 console 全干净）。`tree.write()` 基类空实现 ⇒ disabled 只活在当前页面。规避：插件管理器装/更新/禁用后重启 DSH；崩溃弹窗直接点「重启」。根治需官方改审计文案与内部替换逻辑。

关键词：刷新崩溃、web boot、entry did not activate、disabled、fiber undefined、refresh 闸门、unload 监听、审计空话、importError、插件管理器重启、app.asar 内核

### 0mv4z09na-eafb59be538147319310fc5c42
_重要性 2，状态 active，项目 dsh-maid-preset，decisions_

dsh-maid-preset 预设构成（v0.3.1，commit 0cbd19a）：cordis.patch.yml 含 ① system-prompt personaPrefix ② preset-standard 覆盖 ③ preset-maid 完整定义 ④ registry 默认 maid ⑤ meow-memory 行。三处人设文本同源（各 452 字符逐字一致）。历程：v0.3.0（3b9fec3）曾撤掉 preset-standard 覆盖并存档 archive/，老大随即要求「帮我弄回来，尝试回档」，v0.3.1（d41c340+0cbd19a）已恢复覆盖段、删除 archive/。老大原则：「只回到把preset-standard砍掉之前噢，你别给弄到很远去了！」

关键词：preset-standard 覆盖、preset-maid、回档、v0.3.1、三处人设同源、452 字符、archive 删除、恢复覆盖段、女仆预设构成、cordis.patch.yml

### 0mv4x5eev-621292668468445db82944ceec
_重要性 2，状态 active，项目 dsh，ops_

调试 DSH 插件 loopback RPC 的方法：浏览器 connection.rpc.call = HTTP POST 到 http://127.0.0.1:19387/<channel去开头斜杠>/<endpoint>，body 为 {type:'client-request', rpcId:uuid, method:endpoint, payload}，响应信封 {rpcId, result:{ok, value}} 且 rpcId 必须匹配；可从命令行直打验证 Host 侧 handler 是否注册（源码 app.asar createWebConnectionRpc）。405=路径存在但方法/凭证不对。

关键词：RPC 调试、loopback 调用、connection.rpc、client-request、rpcId、channel endpoint、插件诊断、app.asar、127.0.0.1:19387、HTTP 405


## 事实（fact）

### 0mv77wysl-bae4c3aefdec4ae58ecb5f2311
_重要性 2，状态 active，项目 dsh_

四件套 tag 补齐完成（2026-10-14）：preset v0.7.3→946f5eb、scenery v0.2.1→70b2427、vcp v0.6.7→5a208f5、comfyui v0.5.4→cd2df46，均为附注 tag（taggername=Valorine97417）且已推 origin。惯例：tag 打在「当前版本对应」的提交上，不一定等于最新 HEAD（preset 的 tag 比 HEAD d941fc5 早一步，属正常）。老大的触发语就一个字「补」。

关键词：四件套 tag、补 tag、v0.7.3、v0.2.1、v0.6.7、v0.5.4、附注 tag、推 origin、tag 打在升版提交、release 收尾

### 0mv75ybh8-2339e90279eb4e24a029dd70f5
_重要性 3，状态 active，项目 dsh-maid-scenery_

皮肤设置的落地链（0.2.1 起已改）：dsh-maid-scenery/client.js:1411 exposeSkinCustomization 只登记定义，管理器 skin-manager/lib/client.js:643 definition.apply({values,visibility}) 仍是权威执行者；但 0.2.1 起 scenery 自带兜底——启动时自己 readManagedPreferences(SKIN_ID) 读同一份 localStorage 并 apply 一次，管理器在线时从同源值重新 apply，两边不打架。值存 localStorage `dsh.skin-manager.preferences.v2` 的 ["maid-atelier"] 块。九个落点：data-dsh-whale-maid-art/-font/-workspace-font/-model-exit/-flash-glasses、data-maid-composer-mode/-composer-bottom-only、data-maid-nav-mode、变量 --maid-workspace-row-height。**卸掉管理器不再落回 CSS 出厂默认**（旧结论已作废）。桌面图标/备份恢复两区块属管理器通用 UI，非皮肤 settings。

关键词：exposeSkinCustomization、definition.apply、skin-manager.preferences.v2、maid-atelier 设置块、0.2.1 兜底 apply、readManagedPreferences、九落点投影、卸掉管理器也保住、data-dsh-whale-maid-art、workspace-row-height、旧结论作废

### 0mv751old-e41372c651ff49898170e40660
_重要性 3，状态 active，项目 qwen-image-dsh_

dsh-maid-comfyui 的一键启动（commit 3bc0554 起，修复 e82e853，文档 cd2df46）：`launchCommand` / `launchDir` 两个配置（设置页可改，profile 写在 `C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml` 的 `- id: comfyui` 条目下）→ `createLauncher({command,dir,probe,log})`（`src/launch.ts`，1s 轮询 / 90s 超时 / 失败 10s 冷却 / detached stdio ignore）→ `POST /comfyui/launch`；`canLaunch` 只在 `launchCommand` 非空且 baseUrl 是回环地址时为 true（`GET /comfyui/config` **平铺**返回，客户端读顶层字段）。**启动命令推荐写法（无黑窗）**：`D:\ComfyUI_windows_portable\python_embeded\pythonw.exe -s ComfyUI\main.py --windows-standalone-build`，工作目录 `D:\ComfyUI_windows_portable`；不要用自带的 `run_nvidia_gpu.bat`——它调 python.exe（有控制台）、由 cmd 拉起、结尾还有 `pause`，窗口必然挂着。

关键词：一键启动、launchCommand、launchDir、createLauncher、comfyui/launch、canLaunch 回环、pythonw 无黑窗、run_nvidia_gpu.bat 有 pause、90秒轮询、10秒冷却、cordis.patch.yml id comfyui、detached 不随 DSH 死

### 0mv76w7ld-77b5e8aaeeb04b9b961648c689
_重要性 2，状态 active，项目 dsh_

desktop profile 已装 dsh-xiaomi-tts@3.0.8（Xiaomi MiMo TTS，npm 源，仓库 ppy-web/dsh-plugin-xiaomi-mimo-tts）：package.json dependencies + dsh.profile.bundles（16 项）均已补位，lockfile 包集合 103→105 无删减。插件自带 cordis.patch.yml 含两段 insert：① xiaomi-mimo-tts 宿主+Web 双侧条目；② 额外插 preset-whale-girl「鲸鱼娘」Agent 预设（@deepseek-ai/dsh-agent-preset，order 40，人设运行期读包内 skills/whale-girl/SKILL.md），README 明说「安装后自动添加」。apiKey 已在 profile patch 层的 dsh-skin managed 段内填好，音色「冰糖」，voiceDesignPrompt/presetStylePrompt/instruction 均为中文；autoPlay/sound 全关。2026-10-14 05:30 重启后 boot 产物 cordis.yml 干净生效、无崩溃。备份 *.bak-install-xiaomi-20261014-052422。鲸鱼娘去留待老大定（摘除法见 lesson 0mv7…「id 定向 disabled」）。

关键词：dsh-xiaomi-tts、Xiaomi MiMo TTS、语音朗读、插件安装、desktop profile、dsh.profile.bundles、鲸鱼娘预设、whale-girl、ppy-web、cordis.patch.yml insert、apiKey 已填、冰糖音色、拆两段 insert

### 0mv76czmf-1576bd7c7f1f45ad981808d09f
_重要性 3，状态 active，项目 全局_

老大当前环境（2026-10-14）：本机 ComfyUI 便携版在 `D:\ComfyUI_windows_portable`（run_nvidia_gpu.bat），模型硬链接自 `D:\DeepSeek Harness\Works\QwenImage-2.1models`；dsh-maid-comfyui 的 `launchCommand` 已预填该 bat、`launchDir` 填便携版根目录。github 直连不通，本机代理 127.0.0.1:7890（系统代理已开），git push 必须显式带 `-c http.proxy=`/`-c https.proxy=`。四个自有插件在 `D:\DeepSeek Harness\Works\`：dsh-maid-preset / dsh-maid-scenery / dsh-maid-vcp / dsh-maid-comfyui，全部以 `link:` 接进 profile `C:\Users\Kayle\.dsh\profiles\desktop`。

关键词：ComfyUI 便携版路径、run_nvidia_gpu.bat、代理 7890、git push 代理、link 接入 profile、四个插件目录、QwenImage-2.1models、github 直连不通、desktop profile、本机环境

### 0mv76chk2-1278f83c0e9b4edb9074dad458
_重要性 2，状态 active，项目 qwen-image-dsh_

dsh-maid-comfyui 的空闲自动关闭（commit 875070d）：设置项 `idleShutdownMinutes` 默认 10（0 = 关），每 30s 一 tick，四条全中才关——「本插件启动的（启动时在 `<dataDir>/launched.json` 打标，跨宿主重启认回）+ 回环 baseUrl + 无任务在飞（ComfyUI `/queue` 与 tracker 同时看）+ 空闲满」。设置页配「立即停止」按钮走 `POST /comfyui/idle/stop`。ComfyUI 0.39 无任何退出路由，关停只能是杀进程。

关键词：空闲自动关闭、idleShutdownMinutes、idle.ts、launched.json、打标认回、立即停止、idle/stop、30秒一tick、无任务在飞、省显存、0 关闭、只关自己启动的

### 0mv7687gl-59d6db79e1d0467cb442f5f7e8
_重要性 2，状态 active，项目 dsh-maid-scenery_

dsh-maid-scenery 的 GitHub 推送节奏：远端 https://github.com/Valorine97417/dsh-maid-scenery.git，2026-10-14 凌晨连推五轮（00:44 / 01:12 / 01:14 / 01:46 / 04:24），最后一次 push 对应 commit ac595a8「docs: description 补「DSH 小困插件 · 」前缀」——本地 HEAD 与 origin/main 一致，工作区无未推改动。查「有没有传上去」最可靠的判据：`git reflog show origin/main` 显示 `update by push` 即已推。

关键词：dsh-maid-scenery 推送状态、origin/main update by push、reflog show origin/main、ac595a8、GitHub 远端最新、本地与远端一致、Valorine97417 仓库、无未推提交

### 0mv7380zm-fc1327f000ab4f87b41f648c4d
_重要性 3，状态 active，项目 qwen-image-dsh_

ComfyUI 是 DSH 桌面壳拖起的子进程，DSH 一重启它就跟着死（8188 拒连）。两条起法：①小困用 `Set-Location D:\ComfyUI_windows_portable; .\python_embeded\python.exe -s ComfyUI\main.py --windows-standalone-build`（后台 job，随会话/DSH 死）；②面板「启动本地 ComfyUI」按钮（commit 3bc0554 起）跑设置里的 `launchCommand`，**子进程 detached**，不随 DSH 重启而死——以后更省事。启动后轮询 `GET /system_stats` 判活，8188 约 12 秒起来（torch 2.14.0+cu130 / RTX 5060 8123 MB / comfyui 0.39.0）。模型是硬链接、工作流文件，重启不用重挂。

关键词：ComfyUI 子进程、8188、重启 DSH 后要重拉、一键启动 detached、run_nvidia_gpu.bat、python_embeded、system_stats 判活、12 秒起来、模型硬链接、桌面壳拖起、startBackdropMusic 无关

### 0mv75l54l-d9de36e315374425a1beb33bb1
_重要性 3，状态 active，项目 dsh_

宿主官方安装器 pluginManager.installBundle(spec, options)：内部真跑 `pnpm add <spec>`，成功后才把包写进 profile 的 dependencies 与 bundles，失败会还原 package.json 与 pnpm-lock.yaml。宿主 agent 工具 plugin_manager（actions: list/set_version_exemption/list_bundles/set_bundle/install_bundle/remove_bundle）调它之前强制 approveEscalation(danger-full-access, 'plugin management operation')。结论：第三方插件运行时自己调它 = 绕过用户审批、静默改老大环境，不做。

关键词：installBundle、plugin_manager、agent 工具、danger-full-access、approveEscalation、提权审批、pnpm add、install_bundle、approvedBuilds、失败还原 lockfile、自举安装

### 0mv75l54b-90ea750d540c405f86882fa478
_重要性 3，状态 active，项目 dsh_

DSH 插件「装包≠启用」：激活源只有 profile 目录 package.json 里的显式清单 dsh.profile.bundles（desktop profile 现 16 项）；包的 manifest 里 dsh 字段只认 bundle.patch（一个或有序多个 patch 文件），没有「依赖另一个 bundle」的通道，patch 改不了 pnpm。光把包下到 node_modules（含传递依赖落在 .pnpm/ 隔离层）不会被加载。模块解析 two-anchor：先 dsh 安装本体，再 profile 目录，pnpm 管的 profile/node_modules 优先。

关键词：dsh.profile.bundles、bundle.patch、装包不等于启用、node_modules、传递依赖、pnpm 隔离层、two-anchor、模块解析、profile manifest、插件激活源

### 0mv74qj2k-d083f3f9cc3a46b0b0eebf507d
_重要性 2，状态 active，项目 dsh_

四件套 GitHub 仓库可见性与地址（2026-10-14）：`Valorine97417/dsh-maid-vcp` 公开、`dsh-maid-preset` 公开、`dsh-maid-comfyui` 私有、`dsh-maid-scenery` 私有。四个仓库 About 描述均已统一为「DSH 小困插件 · …」并填 homepage。

关键词：仓库可见性、公开私有、dsh-maid-vcp、dsh-maid-preset、dsh-maid-comfyui 私有、dsh-maid-scenery 私有、Valorine97417、GitHub About、homepage、四件套仓库

### 0mv5chiu8-551e10f1334944f9ae2f224d06
_重要性 2，状态 active，项目 全局,dsh_

【GitHub 网络与凭据，2026-10-14 实测更新】直连 `github.com:443` 会被重置（`Test-NetConnection` False、`Connection was reset`），**推送/拉取一律走本机代理**：`git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 push`。凭据在 Windows 凭据管理器（`credential.helper=manager`），存的是 **`gho_` 开头的 OAuth 令牌**（User: Valorine97417）——不只是能 push，**还能直接调 api.github.com**（建仓、改名、查可见性都行），取法：`$raw = "protocol=https`nhost=github.com`n" | git -c credential.helper=manager credential fill`，取 `password=` 那行即令牌；调用脚本已备好 `_probe/gh-api.mjs`（curl + Bearer + `-x http://127.0.0.1:7890`）。镜像站（ghproxy.net 等）只支持 GET，**push 走不了镜像**。curl 可用 `curl.exe -s -m 10` 验通道。

关键词：GitHub 推送、http.proxy 7890、Connection was reset、gho_ 令牌、credential fill、api.github.com、建仓、仓库改名、gh-api.mjs、镜像不支持 push、凭据管理器、网络事实

### 0mv73810n-98a8376e8d0b40b79247432343
_重要性 2，状态 active，项目 qwen-image-dsh_

ComfyUI 面板透明根因与定色：面板底色原取 `--dsw-alias-bg-layer-2`，而 maid-atelier 主题的 bg 系列是 90% 不透明、video-skin 又把它压到 0.2 上下，视频直接透上来。老大要固定 `#121f41`，已改为 `background: var(--dsc-panel-surface, #121f41)`（styles.ts:75 连接提示条 + :114 面板本体）。**小困第一次写成了 `#121f43`（差两个色阶），老大照旧说「还是透明」**——写死色值必须逐字核对。改的是 src/client/styles.ts，`npm run build:client` 后**刷新页面即生效**（不用重启 DSH）。

关键词：面板透明、121f41、121f43 写错、bg-layer-2 半透明、video-skin 压透明、dsc-panel-surface、styles.ts、build:client、刷新页面即生效、主题变量不可靠、写死实色遮挡

### 0mv7380zz-8586d37ddf5d4556928488e69f
_重要性 3，状态 active，项目 qwen-image-dsh_

DSH 里两条可运行的 API 工作流（2026-10-14 入库，POST /comfyui/workflows，origin 头必带，200）：`1f51647b-7f7b-428b-9b29-1fad7fae82be` = Qwen-Image 2.1 文生图（8 参数：宽高/prompt/seed 随机/steps 25/cfg 1/负面词/denoise，实测 25.5 秒出 1024²）；`e53fa4fd-c29d-4a10-9f08-adb64b97e6f9` = 图像编辑（9 参数，多参考图槽）。参数先经 POST /comfyui/workflows/recognize 自动识别，手工参数拼在后面；两条都写了 SKILL.md 技能包。

关键词：comfyui_workflow、API 工作流入库、文生图工作流、图像编辑工作流、工作流 id、参数识别 recognize、SKILL.md 技能包、8 个参数、9 个参数、origin 头、绕开提取

### 0mv72nmek-821ce021816844c7a0935b4836
_重要性 3，状态 active，项目 dsh_

DSH 桌面壳（0.2.0-rc.2）没有「重启自己」的 IPC 通道：`DESKTOP_IPC` 全表 = shortcutsInput/CloseWindow/Get/Edit/Changed/Recording、boot、enterWorkspace、onboardingActive/ApiKey、bootFailed、browserAcquire/Release/OpenRequested、directoryPick、deviceInfo、localeBootstrap/localeChanged、updatesStatus/Open/Presentation、nativeThemeSet、windowFullscreen、windowsAppearance、windowsMenu；preload 给页面暴露 dshOnboarding / __DSH_DIRECTORY_PICKER__ / __DSH_HOST_PATHS__ / dshDesktopBoot / dshPlatform / dshDesktop(updates、快捷键) —— 全无 restart/quit。宿主 node 侧 `process.on('message')` 只认 shutdown / quit-inspection / update-tasks，且主进程对宿主 `close` 事件（哪怕 exit 0）一律判 fail；收到未经请求的 `shutdown-complete` 会直接 fail。

关键词：DESKTOP_IPC、preload、contextBridge、重启通道、relaunch、shutdown、宿主退出判失败、dshPlatform、dshDesktopBoot、update-tasks、quit-inspection、桌面壳机制

### 0mv6dwfqt-90942e5c68a140b09d85994df5
_重要性 3，状态 active，项目 dsh_

dsh-raw-html 已本地化并接管：源仓库 `D:\DeepSeek Harness\Works\dsh-raw-html`，远端 `https://github.com/Valorine97417/dsh-raw-html`（**无 upstream**，上游 plolpl789 已停更）。版本 v0.6.4（2026-10-13 推送，commit 178ecd4）。profile 依赖写法 `link:D:/DeepSeek Harness/Works/dsh-raw-html`，node_modules 里为 junction。仓库已补 repository/homepage/bugs 字段与 cordis/react/schemastery 依赖声明。**上游真实状态（2026-10-14 浅抓核实）**：`plolpl789/dsh-raw-html` 最后一笔 = `ab1f1d5` 2026-08-28 23:51「fix(install): 安装链审计三疏漏修复」，距今 46 天无动静，14 个 PR ref 也全是旧的；`ab1f1d5` 不在本地仓库对象库里（本地 5 笔，首笔 `a21bb7a` 即接管）。因为没配 upstream，**上游就算诈尸也不会自动流进来**，要合得手动加只读远端。

关键词：dsh-raw-html 接管、plolpl789 停更、ab1f1d5、2026-08-28 末笔、46 天无动静、无 upstream 远端、诈尸不会自动流入、只读远端手动合、本地 5 笔提交、Valorine97417

### 0mv71j4i2-0afb69f36c6f489585a9e10276
_重要性 3，状态 active，项目 qwen-image-dsh,dsh_

dsh-comfyui 上游有两条没人合的 0.2.0 适配 PR（2026-10-14 查到，均 open、作者未回应、无评论）：**#18**（smallmj，10-10 提，head = `smallmj/dsh-comfyui` 分支 `up/banner-id` @ `d92c5d8`，mergeable clean；改 6 处：peer 追加 `|| ^0.2.0-rc.2`（有意排除 rc.1）、`src/tools.ts` 用 `jobs.readAt` 探测分叉 owner 契约、client inject 删掉 `@deepseek-ai/dsh-client-runtime`、`tsdown.config.mjs` 的 banner id 改为从 package.json 派生、新增 `scripts/test-host-compat.mjs` 离线接缝自测 27 项、.gitignore）；**#14**（164105419，10-03 提，head `164105419/dsh-comfyui` 分支 `support-dsh-0.2.0` @ `c5f49b4`，5 文件 +22/−8，同题）。上游 master 仍停在 0.5.4 / peer 里无 0.2.0 范围。→ 要装 dsh-comfyui 不必等作者也不必自己写适配，可直接以 PR 18 的 head 为基线。

关键词：PR 18、PR 14、smallmj、up/banner-id、d92c5d8、164105419、support-dsh-0.2.0、0.2.0-rc.2 适配、peer 范围追加、无人合并、拿 head 当基线、dsh-client-runtime

### 0mv6zby8d-3e6002b5a58c4b758a54306033
_重要性 2，状态 active，项目 qwen-image-dsh_

ComfyUI 本体认识 Qwen-Image 2.1：最新 release v0.39.0（2026-10-05 发布，仓库已是 Comfy-Org/ComfyUI）更新日志原文有 `Fix crash when selecting int8 or int4 cache in qwen image 2.1`（PR 16667），正对上老大的 int8_convrot 权重；模板版本 v0.11.76。便携版资产：`ComfyUI_windows_portable_nvidia.7z`（2,003,629,308 B）与 `_nvidia_cu126.7z`（1,895,335,518 B），下载 URL 形如 `https://github.com/Comfy-Org/ComfyUI/releases/download/v0.39.0/ComfyUI_windows_portable_nvidia.7z`。

关键词：ComfyUI v0.39.0、changelog、int8 cache crash、qwen image 2.1、PR 16667、便携版资产、nvidia.7z、cu126、Comfy-Org/ComfyUI、release 下载地址、模板 v0.11.76

### 0mv6ys0wb-d0cc3c510c0e4e328e9e7eda7f
_重要性 2，状态 active，项目 dsh_

desktop profile 出现过「半装残留」：node_modules 里躺着 dsh-plugin-guard@0.1.1（npm 版 wuwei6666）与 dsh-plugin-notify-sounds，四处登记全无、重启也不加载。2026-10-14 已全部清除：①desktop 两个半装目录直接删 ②web profile 里 github:lxzy-7 那份完整安装走 pnpm remove + 从 dsh.profile.bundles 剔除（改前备份 .bak-uninstall-guard-20261014-014335）。两个 profile 四处登记现均 0 命中，.dsh 全盘复查 0 残留。判据：node_modules 有目录 ≠ 已装机，四处齐全才算生效。

关键词：半装残留、node_modules 有目录未注册、dsh-plugin-notify-sounds、四处清零、pnpm remove、dsh.profile.bundles 去除、web profile、lxzy-7 安装残留、bak-uninstall-guard 备份、重启不加载、装机判据

### 0mv6ys0w2-2172ffd8b4144011835409bc91
_重要性 2，状态 active，项目 dsh_

dsh-plugin-guard 有二义性，要分清：① npm 包（作者 wuweilab，仓库 wuwei6666/dsh-pluginGuard）：设置→插件里加 Plugin Guard 标签页，隔离启动即崩的插件 + npm 自更新，桌面端可用（声明 dsh.client.platform="web"，桌面端内嵌的就是这套 web 客户端）；坑是 README 安装命令写死 --profile web，本机是 desktop（C:\Users\Kayle\.dsh\profiles\desktop）。② 老大 2026-10-13 搜的那个是 lxzy-7/dsh-plugin-guard（安装安全网：快照/回滚/守护启动），本机不可用，见该结论条目。GitHub 上同名仓库至少六个作者六种东西（安装安全网/安全体检/门禁诊所/公约注入器…），先认门再装。

关键词：dsh-plugin-guard 同名、wuweilab、wuwei6666、Plugin Guard 标签页、插件隔离、启动崩溃、自更新、profile web 写死、profiles/desktop、认门再装、lxzy-7 区分

### 0mv6ywfog-16ee1287234346f98a27699db5
_重要性 2，状态 active，项目 dsh_

老大搜的 dsh-plugin-guard 是 lxzy-7 那支（插件安装安全网，快照/回滚/守护启动，42★，8/18 后停更）：本机 0.2.0-rc.2 上客户端半边永不激活、三个工具冷启动注册不上、回滚修复 PR #4 至今未合并，判定别装。

关键词：lxzy-7、插件安装安全网、安装前快照、一键回退、dsh_snapshot、dsh_rollback、incident_resolved、issue 7 冷启动、PR 4 未合并、8月18日 停更、判定别装

### 0mv6w8gbj-0e17765a6ff743acb4a2eec3fd
_重要性 2，状态 active，项目 全局_

web_search 工具当前报 HTTP 401（DeepSeek 搜索端点 api key eceb 无效）；端点可在 设置 &gt; 插件 &gt; 插件配置 &gt; web search 改，或设 DEEPSEEK_SEARCH_BASE_URL。临时替代取证路径：web_fetch 直接拉 registry.npmjs.org/&lt;包名&gt; 与 api.github.com/search/repositories?q=&lt;名&gt;，本机事实用 pwsh/ops_* 现场核查。

关键词：web_search、401、Authentication Fails、api key invalid、搜索端点、DEEPSEEK_SEARCH_BASE_URL、web_fetch 替代、registry.npmjs.org、api.github.com、联网检索、插件配置

### 0mv6ww6fz-a97e8e62d87649a7aea73ee908
_重要性 2，状态 active，项目 dsh_

ops_bash 工具在中途失效：报「bash executable is unavailable (ENOENT): C:\Users\Kayle\.dsh\profiles\desktop\node_modules\@dsh-ops\bash-win32-x64\bin\bash.exe」，bundled bash 载荷疑似缺失（2026-10-14 本会话中途开始）。命令改走 pwsh 工具（git 提交/推送照常）；要修就重装/修复 desktop profile 里的 @dsh-ops/bash-win32-x64。

关键词：bash 不可用、ENOENT、bash-win32-x64、dsh-ops、bundled bash 载荷、pwsh 兜底、命令执行器故障、profile 修复、git 命令、工具失效

### 0mv6wgq0p-f7843025ea3d467a8ec727b6fa
_重要性 2，状态 active，项目 dsh-maid-scenery_

聊天背景圆钮可拖动吸边：位置存 localStorage['dsh-maid-scenery-knobs']（{side,y}），面板跟随，拖完吞掉那一次 click；活动范围限定在对话框那一列（[class*='centerCol']，侧栏右缘/标题条下缘为界），拖不进侧边栏。

关键词：圆钮拖动、吸附、dsvs-knobs-pill、活动范围、centerCol、对话框、侧边栏、localStorage、位置记忆、scenery.js、夹取范围

### 0mv6whr6g-e2edf83becd3429dbbff45bdb5
_重要性 2，状态 active，项目 dsh-maid-scenery_

本机装了 dsh-whale-widget v0.4.2（MeteorNOX/DeepSeek-Balance-Whale-Widget，npm 实体包，非 link）：位于 C:/Users/Kayle/.dsh/profiles/desktop/node_modules/dsh-whale-widget（主体 assets/whale-widget.js 1.1MB + lib/index.js 265KB，另有 cordis.patch.yml）。右下角余额小鲸鱼挂件，带拖拽 + 四边吸附（吸附区可自定义比例/像素、贴左镜像翻转、可关吸附），角色可换成女仆立绘，相关数据在 ~/.dsh/whale-audio 与 whale-bubble-imgs。老大拿它当「可拖拽吸附」的参照物，要求聊天背景圆钮也照这个做。

关键词：dsh-whale-widget、小鲸鱼挂件、余额挂件、拖拽吸附、四边吸附、镜像翻转、参照物、女仆立绘、MeteorNOX、桌面壳挂件

### 0mv6vwu9w-11d04900e3b94121971d7b77f9
_重要性 2，状态 active，项目 dsh-maid-scenery_

scenery 背景音乐：音频丢进 vendor/video-skin/assets/，路径写 $DSH_HOME/dsh-video-skin.json 的 background.music，刷新页面即生效。

关键词：背景音乐、background.music、musicVolume、dsh-video-skin.json、assets 音频、刷新即生效、无需重启、Wet Hands

### 0mv6v6v06-f6e967bf371a44a7a25b6de970
_重要性 2，状态 active，项目 dsh,dsh-maid-scenery_

桌面壳里插件素材请求走 **`dsh-app://app/...`** 协议，不是 `http://localhost:19387`——console 里报的是 `GET dsh-app://app/skin-assets/maid-atelier/<hash>.webp 404 (Not Found)`。排查素材 404 时别只盯 http 端口，壳协议那一侧也在跑同一套 webServer 路由。

关键词：dsh-app 协议、桌面壳、skin-assets、素材404、console、webServer路由、localhost 19387、壳协议、Network 排查

### 0mv6t4gcz-6ef1e807a45545bf881efcc1fc
_重要性 2，状态 active，项目 dsh,dsh-maid-scenery_

本地上游副本 `D:\DeepSeek Harness\Works\dsh-deep-whale`（clone 自 github:Small-tailqwq/dsh-deep-whale，HEAD 6c07eef）= dsh-maid-scenery 的 vendor 素材来源与皮肤管理器正源，含 maid-atelier/ orca-link/ skin-manager/ 三个发行包 + AGENTS.md（分支走 dev、皮肤只做表现层、MIT 代码 / CC BY-NC-SA 4.0 美术边界、skin.build.json 不可手改 fingerprint）。profile 里 `@smalltailqwq/dsh-client-ui-skin-deep-whale-manager` 是 link 到 `dsh-deep-whale/skin-manager`。更新 maid-atelier 时从这里取源。

关键词：dsh-deep-whale、上游副本、vendor 源、skin-manager 正源、maid-atelier、orca-link、AGENTS.md、6c07eef、Works 目录、更新主题来源

### 0mv6naik6-8bea4c1e67f94659b049e7e67f
_重要性 2，状态 active，项目 dsh,dsh-maid-scenery_

@smalltailqwq/dsh-client-ui-skin-maid-atelier v0.1.7（skin.json id=maid-atelier，名「深海女仆工坊」）**已不再是 profile 依赖**——2026-10-13 起随 dsh-maid-scenery v0.2.0 vendor 进包内（vendor/maid-atelier/），profile 里的安装已移除；**皮肤管理器的发现已由 scenery 包根自曝 skin.json 补齐**（commit af4e0a4，package 改 dsh-maid-scenery、wiring.id=maid-scenery），面板照旧显示「深海女仆工坊」。**若将来仍需独立安装**：pnpm 直装 `github:Small-tailqwq/dsh-deep-whale#main&path:/maid-atelier` 会失败（直连 github:443 超时 21s，报 Please make sure you have the correct access rights）；正解 = 先 `git -c http.proxy=http://127.0.0.1:7890 clone --depth 1 https://github.com/Small-tailqwq/dsh-deep-whale.git` 到 Works，再 `pnpm add -C <profile> link:.../dsh-deep-whale/maid-atelier`。**换源提醒**：两版 skin.json 的 id 与 wiring.id 相同，装新的前必须先卸旧的，否则打架。

关键词：maid-atelier、深海女仆工坊、vendor 内置、skin-manager 认不出、discoverInstalledSkins、profile 依赖遍历、子目录 link 安装、github path 安装失败、dsh-deep-whale、scenery 配套主题

### 0mv6stie1-3cd1f1f2b3c04486a914c7cab2
_重要性 3，状态 active，项目 dsh-maid-scenery_

dsh-maid-scenery v0.2.0 起**包根自曝 `skin.json`**（commit af4e0a4），让皮肤管理器重新发现内置主题：`id` 仍 `maid-atelier`（换源先卸旧主题的规则不变）、`package` 改为 `dsh-maid-scenery`（发现链硬要求）、`wiring.id` 对齐本包 patch entry `maid-scenery`、`preview`/`desktopIcon` 指到 `vendor/maid-atelier/` 下。`files` 与 `exports` 已补 `skin.json`；冒烟 64 项含 8 项清单断言。实测 `discoverInstalledSkins(desktop patch)` 返回 1 个、`discoverSkinDirectories` 指向 scenery 根、图标解析到 `vendor/maid-atelier/assets/icons/delighted.ico`。**已知边界**：面板「切换」只管 `maid-scenery` 这条 entry 的 disabled，主题随 client.js 常驻物化，关掉只停融合层切换行、不会卸掉主题；真正「换成别的皮肤」要等上游支持包内皮肤。

关键词：skin.json、包根自曝、皮肤管理器、wiring.id、maid-scenery、preview、desktopIcon、vendor/maid-atelier、af4e0a4、包内皮肤边界、发现链

### 0mv6oquv6-e806c3590bf6466ebdfcc3d793
_重要性 2，状态 active，项目 dsh_

DSH profile 目录 `C:\Users\Kayle\.dsh` 在工作区（D:\DeepSeek Harness\Works）之外，改那里的文件需 danger-full-access 提权；沙箱默认 workspace-write 会拒。

关键词：工作区外写入、danger-full-access、提权、DSH profile 目录、.dsh 路径、沙箱权限、workspace-write 被拒、改配置文件

### 0mv5drmfv-67c4c885c7ec44fba98ccad7ed
_重要性 2，状态 active，项目 dsh_

DSH profile 配置合成机制：profile 的 `cordis.patch.yml` 是**权威 patch 层**（手改这里），`cordis.yml` 是 DSH **合成落盘的产物**（2026-10-13 实测 1578 行、含各 bundle 层合并结果）——改 patch 后约 3 秒内 cordis.yml 会自动重生成，不需手动触发。合成顺序：各 bundle 的 cordis.patch.yml（由 package.json 的 dsh.profile.bundles 选层）→ profile cordis.patch.yml 覆盖层 → --patch 叠层。bundle 依赖由 dependencyClosure 以各 bundle 自己的 package.json 为锚做 Node 查找（link 包经 junction 到真实目录）。patch insert 行的 name 可写 ./ 相对路径，被 anchorInsertedPluginNames 锚定到 patch 文件旁。（旧记载「cordis.yml 恒为空 []」已过时作废）

关键词：cordis.yml、bundles、配置合成、dependencyClosure、cordis.patch.yml、link包、junction、anchorInsertedPluginNames、patch层、package.json、profile

### 0mv6oflgb-7cea1117eb7f4f88b03de6065e
_重要性 3，状态 active，项目 dsh-maid-preset_

2026-10-13 20:47 实测：GitHub origin/main 的 memory/ 三件套（导出 10-13 16:33、118 条）不是本机的库——内容里满是 C:\Users\Administrator\.dsh（另一个 Windows 账户的 DSH_HOME），时间跨度 10-12 14:16→10-13 16:22，与本机活库 D:/DeepSeek Harness/Works/.dsh-meow/memory.db（60 条，过门槛 45 条）id 零重叠。本机第三处 D:/DeepSeek Harness/Works/dsh-maid-preset/memory/memory.db 也是那 118 条（被 git 跟踪）。即：同一 repoUrl 被两台机器的 DSH_HOME 共用，谁推谁覆盖。

关键词：记忆串库、Administrator DSH_HOME、另一台机器、origin/main memory、118 条、id 零重叠、repoUrl 共用、活库 60 条、过门槛 45 条、dsh-maid-preset/memory、git 跟踪库文件

### 0mv6nww6q-f7f7d12412ef490d836dba5130
_重要性 2，状态 active，项目 dsh-maid-preset_

reflect.md 是 meow 记忆反思提示词，路径 lib/meow/prompts/{zh,en,pt-br}/reflect.md（三语言必须同步）。槽位机制：readSlotFile 每次现读无缓存，优先 <home>/.dsh-meow/prompts/<lang>/<slot>.md 实例覆盖，再 lib/prompts/<lang>/，兜底 zh；SLOT_PARAMS.reflect 只要求 {projectList} 占位符；buildReflectMessage 加 REFLECT_MARKER 前缀。改完无需重启即生效。2026-10-13 起含「两道闸」小节（commit 2cc63e4，尚未 bump 版本号）。

关键词：reflect.md、反思提示词、槽位、readSlotFile、projectList、buildReflectMessage、REFLECT_MARKER、三语言同步、prompts 目录、实例覆盖、热读生效、两道闸

### 0mv6lv9hy-d129c84d86ec4645b8615b9c8e
_重要性 2，状态 active，项目 dsh,dsh-raw-html,dsh-maid-scenery_

2026-10-13 三项目安装终态（desktop profile）：dsh-raw-html 按 README 本地维护分支流程**卸载后重装完成并验收通过**——asar 补丁正式写入（+105745B，A 三态化/E 围栏/F 空行/B+C shim 四项，sha256 回读一致，`__vcpStable`+`__vcpGen` 双标记均在，bundle 719037B），link: junction 重建、lockfile 就位；重启后 boot graph rev=adab9e40b596 含 dsh-raw-html，78 个 bundle URL 逐一拉取 77 个 200、0 非 200，无新 crash log。dsh-maid-scenery 与 maid-atelier 主题、skin-manager（deep-whale-manager）同批 link 装入。dsh-maid-preset 已 ff 拉齐 4fd7214，tag 家族补齐到 v0.7.2。dsh-llm-fallbacks 是老大**主动卸载**的，勿再装回；其 cordis.patch.yml 配置段（原 L23-65，5 段子 agent persona：task/sonic/scout/reviewer/security-reviewer）已按老大指示删除，patch 层现 9 个 entry（ui-settings-account / ui-chat / ui-settings / dsh-ops-background / meow-memory / agent-default-model / llm-deepseek-account / llm-pi-ai / ui-theme）。**profile 当前 deps 13 项、bundles 16 项**。

关键词：安装终态、desktop profile、raw-html 验收通过、asar 补丁 +105745、rev adab9e40b596、bundle 200、link junction、deps 13 项、bundles 16 项、llm-fallbacks 主动卸载、patch 层 9 entry、skin-manager 已装

### 0mv6nii91-5a8dcae418b54a04a0685b95ab
_重要性 3，状态 active，项目 dsh,dsh-maid-scenery_

@smalltailqwq/dsh-client-ui-skin-deep-whale-manager v0.1.6（通用皮肤管理器，DSH 设置页注册「皮肤管理」一级页面）：从当前 profile 依赖中发现所有带有效 skin.json 的皮肤、互斥切换官方默认与皮肤、启动兜底检测（≥2 套皮肤同时启用则原子回退官方默认）、渲染皮肤通过版本化协议暴露的自定义项、通用「不那么二次元模式」按时段显隐、窄屏面板返回。会改写 profile 与 home patch 的 `dsh-skin managed` 区段（区段外用户 YAML 不动）。已装 desktop profile：`link:D:/DeepSeek Harness/Works/dsh-deep-whale/skin-manager`（与 maid-atelier 同源同 link 形态），bundles 16 项含它；自带 cordis.patch.yml 插 `id: ui-skin-deep-whale-manager`。**与 @linxin666/dsh-web-all（dsh-web）不能叠装**——那家自带皮肤中心，本机未装。dsh.client={inject:['@deepseek-ai/dsh-client-ui-settings'], platform:'web'}，lib/ 有 index.js/client.js/protocol.js 构建产物。

关键词：skin-manager、deep-whale-manager、皮肤管理、皮肤管理器、ui-skin-deep-whale-manager、skin.json、dsh-skin managed、互斥切换皮肤、原子回退官方默认、dsh-web-all 冲突、不那么二次元模式、profile patch 改写

### 0mv6natyy-520b44a670c44ee6ab29b989e3
_重要性 3，状态 active，项目 dsh-raw-html_

abyss-maid（深海蕾丝·女仆工坊风）= dsh-raw-html 风格库清库后唯一保留风格（其余 12 个已归档到 D:\DeepSeek Harness\Works\styles-archive-2026-10-13\）。风格档：D:/DeepSeek Harness/Works/dsh-raw-html/styles/abyss-maid.md。核心：卡片底**固定实色 #121F41**（老大 2026-10-13 拍板，不再跟随宿主变量 var(--dsw-alias-bg-layer-1)）；色板 #10204d/#1c326b/#526aa8/#8ea5da/#c5a468/#f8f6f0/#172347；柔金只做线不做面；陶瓷白亮块一屏至多一处；标题字体 Lanxi-朗宋，数字 tabular-nums。

关键词：abyss-maid、深海蕾丝、女仆工坊风、风格档、121F41、卡片底色、柔金线、Lanxi-朗宋、styles 目录、清库唯一风格、VCP 配色

### 0mv5hl8d4-d76aa106918d48248c2ef9ec7d
_重要性 2，状态 stale，项目 dsh-maid-preset_

老大意向（2026-10-13）：把 meow-memory 的依赖与 patch 配置段整合进 dsh-maid-preset 一并安装，避免两个包分开管理——「meow-memory不是装进dsh-maid-preset里面了吗？装回依赖+补回patch配置段。这两个也整合进dsh-maid-preset不就好了」。当时先做恢复未展开整合，涉及上游双仓库打包方式待议。

关键词：整合 meow-memory、打包方式、双仓库、一键安装、依赖合并、patch 段、dsh-maid-preset、一体包、用户意向、安装形态

### 0mv6exx6p-19fc8a24d39949cb8fd17522d7
_重要性 2，状态 active，项目 dsh-raw-html_

老大拍板：dsh-raw-html 的 styles/_BASELINE.md 保留（2026-10-13 原话「那就保留他」）。它是协议【风格检索】第 4 步的兜底落点，含 4 套浅底纸感色系/卡片骨架/11 个图型/动效参数，通篇标「示例，随语境重造」；scanStyles() 跳过 _ 开头文件，故不进美学面板。同目录 _INDEX.md 与 _FONTS.md 一并保留。

关键词：_BASELINE 保留、兜底基准库、风格检索第4步、示例素材库、不删、scanStyles 跳过下划线、_INDEX _FONTS 保留、浅底色系、保底不丑

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

### 0mv68c25m-9931441c0fc14a368fd5b338da
_重要性 3，状态 active，项目 dsh_

dsh-raw-html 插件本地改动面（2026-10-13 本地化后）：核心代码 2 个文件——lib/index.js（RPC 通道改挂 webServer 前缀路由 /dsh-raw-html，复刻宿主信封协议）、lib/client.js（hover 白字修复 + 可信模式默认开启、徽章隐藏）；另加 styles/abyss-maid.md（唯一风格）、styles 清库删 12 个、package.json（v0.6.4 + repository 字段）、README.md、CHANGELOG.md。patch/ 目录官方脚本未改动。插件现为本地仓库 `D:\DeepSeek Harness\Works\dsh-raw-html`，node_modules 里是 junction。

关键词：dsh-raw-html 改动面、lib/index.js RPC、lib/client.js、webServer 前缀路由、abyss-maid 风格、package.json v0.6.4、patch 目录未改、本地仓库 junction、插件源码清单

### 0mv6d5z0b-95753bf786eb4b9f9700826c7c
_重要性 3，状态 active，项目 dsh_

老大 2026-10-13 定调：可信模式「设置为默认开启。然后隐藏掉。这样换另一台安装就不会当聊天背景面板按钮了。」——实现为 isTrusted() 默认 true（仅显式 localStorage['raw-html.trusted']==='0' 才关），盾锁徽章默认不挂载（fixed right:14px/bottom:14px 与 dsh-video-skin 悬浮钮 #dsvs-knobs-pill 撞位），需唤出时 DevTools 执行 localStorage.setItem('raw-html.trustedBadge','1') 再刷新。该改动曾被 pnpm install 冲掉，2026-10-13 已重放恢复，三项行为均已实测通过。

关键词：可信模式默认开启、徽章隐藏、trustedBadge、换机安装、聊天背景面板按钮撞位、dsvs-knobs-pill、isTrusted 默认 true、raw-html.trusted 显式0才关、DevTools 唤出、老大约束

### 0mv50pia0-a2e1c588ba884006be98bb5adb
_重要性 2，状态 active，项目 dsh_

dsh-raw-html 美学面板「0个风格」的本地接管修复：删掉 ctx.inject(['connection'])，改为直接挂 webServer 前缀路由并逐字节复刻宿主 RPC 信封协议（Origin围栏+404/415/400/失败details规范化），自测 10/10 全绿（rpc-selftest.mjs）；2026-10-13 实测 POST /dsh-raw-html/list-styles → 200 正常返回。该补丁曾被 pnpm install 冲掉（index.js 回退到原版 1042 行），2026-10-13 已从会话记录重放恢复，现 index.js 61894 B、rpcHandler/RPC_CHANNEL/127.0.0.1:19387 围栏俱在，重启后实测返回 1 个风格（abyss-maid）。bug 已发 issue #14 到 plolpl789/dsh-raw-html。

关键词：美学面板 0个风格、webServer 前缀路由、信封协议复刻、connection inject 静默挂起、本地接管补丁、issue 14、rpc-selftest、index.js 61894、重放恢复、list-styles 200、Origin 围栏

### 0mv674rjd-566bfd3b5e4942ec972252acd1
_重要性 3，状态 active，项目 dsh_

dsh-raw-html client.js hover 白底白字修复（2026-10-13）：7 处 hover 规则（aes-picker-tool / aes-picker-ok / aes-op-btn / aes-btn / aes-fontcat-add / aes-tagbtn / aes-btn-primary）背景由 --dsw-alias-button-primary-fill 改为 --dsw-alias-interactive-bg-hover-accent、字色由 #fff 改为 --dsw-alias-label-primary；另 4 处静态字色改 label-primary-foreground；保留 .aes-del:hover 与 .aes-chip-x:hover 的 #dc2626 红底白字。该修复曾被 pnpm install 冲掉，2026-10-13 已从会话记录重放恢复，现 client.js 117150 B，node --check 通过。硬刷新生效无需重启。

关键词：hover 白底白字、aes-btn:hover、interactive-bg-hover-accent、label-primary-foreground、美学面板按钮、dc2626 红底保留、client.js 117150、重放恢复、硬刷新生效、暗色主题按钮、primary-fill 陷阱

### 0mv6d4ml0-ba10ec54630e4146ac939f6a89
_重要性 3，状态 active，项目 dsh_

2026-10-13 插件被冲事故的恢复结果（已全部复原并验证）：从会话记录重放 36 次 write/edit 重建 lib/client.js(117150B)、lib/index.js(61894B)、styles/abyss-maid.md、styles/_INDEX.md、README.md、CHANGELOG.md、tests/trusted.test.mjs，并删除 GitHub 原版带回的 12 个风格。验证四项全绿：RPC list-styles 返回 1 个风格(abyss-maid)；可信模式默认 true + 徽章默认不挂载 + trustedBadge=1 可唤出；hover 已改 interactive-bg-hover-accent 无 primary-fill 配 #fff；asar 前端补丁 sha 45116a3f…e81dd 与 header integrity 一致。暂存/脚本：Works\_replay2、replay2.mjs、restore-plugin.mjs、verify-restored.mjs、verify-asar2.mjs。

关键词：插件恢复完成、重放 36 次编辑、client.js 117150、index.js 61894、abyss-maid 复原、删除 12 风格、RPC 返回 1 风格、可信模式默认开启、hover 修复确认、asar sha 45116a3f、_replay2 暂存

### 0mv68m6ga-da74881bb1cf4623972bbb21a6
_重要性 3，状态 active，项目 dsh_

abyss-maid（深海蕾丝 · 女仆工坊风）是 dsh-raw-html 现存的**唯一**风格（原 13 个风格已清库，仅留它）。卡片底定稿 #121F41（比输出框亮一档、稍实），柔金 #c5a468 走线，标题字 Lanxi-朗宋，配套 maid-atelier 深海女仆工坊皮肤配色同源。文档：C:\Users\Administrator\.dsh\profiles\desktop\node_modules\dsh-raw-html\styles\abyss-maid.md

关键词：abyss-maid、深海蕾丝、女仆工坊风、唯一风格、121F41 底色定稿、raw 渲染风格、Lanxi-朗宋、比输出框亮一档、c5a468 柔金、maid-atelier 配色、styles 目录

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

### 0mv68m6gy-3b016ab20c774611a293292fce
_重要性 2，状态 active，项目 dsh_

探 dsh-raw-html 的 RPC：POST http://127.0.0.1:19387/dsh-raw-html/<方法名>，body 为信封 {"type":"client-request","rpcId":"...","method":"<方法名>","payload":{}}，取回 j.result.value（如 list-styles → value.styles 数组）。前缀路由免鉴权，桌面端也能用。

关键词：dsh-raw-html RPC、list-styles 探针、client-request 信封、rpcId、前缀路由免鉴权、19387、result.value.styles、插件方法调用、POST 探针

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

### 0mv5iu5qy-e3e91ffab2684e2eb2d10b1772
_重要性 3，状态 stale，项目 dsh-maid-preset_

meow-memory 整合进 dsh-maid-preset（B方案）已完结：代码 vendor lib/meow/ + entry name='dsh-maid-preset/meow' + client 拼接随包物化 + profile 三件套已摘（-28包）。四提交：179506c 方案B、da45b2c client拼接+immediately、c753b4c inject并集、cab2b74 报错防叠加三刀（meow段load幂等try/catch、maid disposer接管meow cleanup、registerSection降级warn源+产物同步）。tag v0.4.0/v0.4.1/v0.5.0/v0.6.0 全推远端。终验全绿：物化日志、喵记忆设置段、右键菜单「记忆参与」项、会话行图标、memory_search 活。

关键词：meow-memory 整合、dsh-maid-preset、卸载不影响、自包含、entry 冲突、cordis.patch.yml、记忆插件合并、两包共存、整合任务、功能自持

### 0mv5ieaq6-06558faf727d4cc896146b904a
_重要性 3，状态 active，项目 dsh_

DSH client 插件服务依赖声明契约：模块 factory 须返回 {inject, apply} 并声明所需服务（meow-memory 独立时为 var inject=["slots","sessions","remote.settings"] 经 module.exports 导出），缺声明则宿主不给该 fiber 的 isolate 表填标识，ctx.<服务> 必抛 cannot get property ... without inject（结构性不可见，重试永远无效）。关键补充（v0.6.0 实测）：宿主只为「直接调度的 entry」按其 exports.inject 填表；整合场景下用 require('模块') 拿到 exports 再手动 apply(ctx)，宿主不会为目标模块的 inject 填宿主 fiber——所需服务必须并进调用方自己的 inject 声明（并集）。

关键词：client 插件、inject 声明、isolate 表、without inject、slots 服务、服务依赖、factory 返回、meow-memory 对照、设置面板注册、dsh 插件开发、Proxy 拦截、web client

### 0mv5epdhz-9675f22a3ff74947b87c748820
_重要性 2，状态 active，项目 dsh-maid-preset_

对话轮次会写 memory.db-wal（探针实测与发言时刻精确重合），同步的"空闲10分钟"实际=聊天停下10分钟才推送。

关键词：memory.db-wal、对话轮次、写库、空闲10分钟、maid-sync、推送时机、探针、meow-memory、聊天停下

### 0mv5drmgn-fdf6c8c9a6594ef5b8206b8eea
_重要性 3，状态 active，项目 dsh-maid-preset_

用户原话（m00262）："我需要dsh-maid-preset里面就包含这些内容，不要依赖其他插件。"——要求记忆功能由 dsh-maid-preset 自包含提供，不依赖独立 meow-memory 插件；这是自包含改造的直接动因。

关键词：自包含、不依赖其他插件、meow-memory、dsh-maid-preset、用户要求、原话、记忆功能、内置、改造动因

### 0mv54302g-70c2fe60f63a408e8721cce295
_重要性 2，状态 active，项目 dsh-maid-preset_

v0.4.1 四件优化：①同步失败分级——认证/仓库不存在/无写权限为配置错，pauseForConfig 立即暂停整个循环并写清改法；网络类指数退避 5/10/20…封顶 8h ②sync.repoUrl 默认空=待机，绝不默认指向别人仓库（老大机器靠 cordis.patch.yml 显式写死 repoUrl）③sync.identity 默认 null=不注入 -c 交本机 git 配置，缺身份时 commit 前探测并暂停报错 ④seed.enabled 开关控制播种，给别人用要关。commit 3e2e786 已推，profile 已刷 0.4.1，21 项终验全过，需重启生效。

关键词：失败分级、配置类暂停、网络退避、repoUrl、待机、identity、commit身份、seed、播种开关、0.4.1、指数退避

### 0mv51x5l6-aa51d03863c6449ea3a9d160e5
_重要性 2，状态 active，项目 dsh_

dsh 内核 entry._init 确实吞 import 异常（catch→logger.error+return，不建 fiber、不进记录表，故 audit 只打「see console」空话）——但 2026-10-12 查实：强制刷新崩溃的真因不在此处，而是 entry.disabled 被卸载监听误写导致 refresh 永久短路（见 0mv53o3b）。

关键词：_init吞错、logger.error、see console空话、importError无记录、真因区分、disabled误写、refresh短路、内核机制

### 0mv51x5lf-f0a6f9e4233343c7adfc0cd5fd
_重要性 2，状态 active，项目 dsh_

（已更正）「plugins/modules 两清单分家」假说于 2026-10-12 被推翻：parseBootManifest 是单循环、同源生成两视图、无任何过滤，不存在分家。强制刷新崩溃真因是渲染侧卸载监听误写 entry.disabled + refresh 闸门短路，详见 0mv53o3b。

关键词：两清单分家已推翻、parseBootManifest、同源生成、无过滤、假说更正、强制刷新崩溃、disabled误写、boot图

### 0mv534rt8-e58e425d5f3b4afa8e15a4d065
_重要性 2，状态 active，项目 dsh_

记忆自动同步节奏：每 60s 轮询活库 mtime，停写满 10 分钟才导出推送（写入后 10-11 分钟上库），一个空闲窗口至多 1 个 commit，失败每 60s 重试；持续写入会一直攒着不推。

关键词：记忆同步频率、60秒轮询、空闲10分钟、mtime 检测、commit 粒度、防刷爆历史、推送重试、上传延迟、同步节奏、攒批推送

### 0mv52mce7-23a00551992f4b12a8470fd123
_重要性 2，状态 active，项目 dsh-maid-preset_

同步失败绝不装哑：push 失败标 pushFailed 下轮重试并写 $DSH_HOME/maid-sync.log；状态文件 maid-sync-state.json 记已同步水位，删掉即触发基准同步。

关键词：同步状态文件、pushFailed、失败重试、maid-sync.log、同步水位、基准同步、备份失败、日志位置、幂等同步、无变化跳过

### 0mv4z8jxx-971e7d005f384bd698c4efcbfc
_重要性 2，状态 active，项目 dsh_

meow-memory 已移出 profile 的 dependencies 与 bundles，改由 dsh-maid-preset 声明依赖并在其 cordis.patch.yml insert 它的 entry 行。

关键词：meow-memory、dsh-maid-preset、bundles、profile 依赖、entry 行、cordis.patch.yml、传递依赖、插件加载、bundle patch


## 经验（lesson）

### 0mv77pfs3-fe59bcb329134eca938bfde612
_重要性 2，状态 active，项目 dsh-maid-scenery_

验收浏览器端 client.js 而不开浏览器：node + DOM 桩把 factory 真跑一遍（脚本 `D:\DeepSeek Harness\Works\_probe\run_client_stub.mjs`）——桩 `__ModuleLoader__.load` 抓住 def，注入 `window/document.documentElement/createElement(带 dataset)/localStorage/MutationObserver/CustomEvent`，再喂 mock ctx `{get,effect:(fn)=>{fn()},inject}` 调 apply，断言 `setAttribute`/`style.setProperty` 收到的九落点。连踩四个坑：① `document.baseURI` 缺 → `new URL(...)` 报 Invalid URL；② createElement 返回对象没有 `dataset` → 设 tag.dataset.plugin 报错；③ root.style 缺 `getPropertyValue`、④ 缺 `getPropertyPriority`（SkinPropertyProjector 记账要用）。注意 ctx 生命周期部分（body.style）仍会抛，属正常，断言只看 attrs/props。

关键词：client.js 验收、DOM 桩、__ModuleLoader__、run_client_stub、document.baseURI、getPropertyPriority、getPropertyValue、createElement dataset、mock ctx apply、setAttribute 断言、不开浏览器验证、九落点投影

### 0mv75yfkb-49ce3247cd6f4e77aa450c161c
_重要性 2，状态 active，项目 dsh-maid-scenery_

判断「卸掉某组件后用户偏好会不会丢」时，不能只推机制，要把**现值逐项与出厂默认比对**——scenery 案例里老大界面上的十个自定义项其实九项仍在默认位，真正偏离的只有 artwork 与 font（leveldb 真值：artwork=false、font="serif"）。先比对再下结论，才不会把一件小事说成灾难。（后续 0.2.1 已自带兜底 apply，事本身不再成立，方法留下。）

关键词：偏好丢失评估、现值对比出厂默认、机制推断陷阱、对话区字体 Georgia、九项在默认位、卸组件影响、事实比对先行、汇报取舍

### 0mv77ql10-fb5760adea9e4f2e82c790a090
_重要性 3，状态 active，项目 全局，被纠正_

老大习惯同时推进多条话题线（同一时段可能在搞 comfyui、vcp、preset、scenery）。他嘴里的「撤回一下」「不添加了」「上传了没」必须**先对齐他当前在说哪条线**再落记忆/动手——小困曾把 m00275 属于另一问答的「不添加 C 了，撤回一下」当成 scenery 的指令，写进 project 记忆并准备撤改动，被老大 m00437 点破：「不添加 C 了，撤回一下是另外一个问答。不是我这个，大肥鲸你糊涂了。」判不准时直接问一句，比猜错后回滚便宜。

关键词：多话题并行、撤回指令对上下文、老大纠正 糊涂、m00437、m00275、别把别的问答安过来、指令归属核对、判不准先问、scenery 误判撤回、原话核准

### 0mv5ivlw4-59f849cac8d0466fb6bd43378d
_重要性 2，状态 active，项目 全局_

同一轮并行调用多个 memory_remember 会撞生成 id（返回相同 id），后写的被静默吞掉或误报"已合并"——批量写记忆必须串行（一条完成再下一条），写后核对回执 id 各不相同。2026-10-13 反思任务 4 条并行写丢 2 条；2026-10-14 又犯一次（两条并行返回同一 id 0mv77pfs，第二条被吞）。铁律：反思轮一次只发一个 memory_remember，发完读回执再发下一条。

关键词：memory_remember 撞号、并行写入、id 冲突、静默丢失、串行写记忆、反思任务、回执核对、已合并误报、批量写入、记忆工具坑、同一 id 被吞、一次一条

### 0mv77qbt8-a8b2da0ef81a45b9bd71612a0d
_重要性 3，状态 active，项目 全局，被纠正_

读设置页截图上开关的开/关：**铁律是「圆钮在左=关，在右=开」**（老大 m00537 原话纠正：「开关按钮拉到左边是关闭。」——小困先前读反过）。且宿主的 Switch 组件不写 `aria-checked`/`data-state`，DOM 属性问不出状态（`knob` 这个词在控件源码里根本不存在），所以只有两条路：看像素（金色圆角轨道 + 浅灰圆钮的左右位置）或读 localStorage 真值。判不准时以磁盘真值为准。

关键词：开关 左关右开、圆钮在左是关闭、读截图判读、aria-checked 不写、data-state 缺失、宿主 Switch 组件、像素判读、金色轨道 浅灰圆钮、老大纠正、设置页截图

### 0mv77qbsu-e847cfe02c994511a2e0d6761d
_重要性 3，状态 active，项目 全局_

取 Electron 应用（DSH 桌面端）localStorage 真值的方法：文件在 `%APPDATA%\@deepseek-ai\dsh-desktop\Local Storage\leveldb\`（另一个 `%APPDATA%\dsh-desktop\` 是空的旧目录）。`.log`/`.ldb` 被 Electron 进程独占，CopyTo 会报 "locked a portion of the file"——先拷到 TEMP 再分析。键名在 leveldb 里是 **UTF-8 明文**（搜 utf16 搜不到别放弃），值常被 **snappy 压缩**（首字节 0x00/0x01 等），得手写 snappy 解压器逐偏移试。实测 `dsh.skin-manager.preferences.v2` 的真值只在 000008.ldb @12689 解出，最新的 000010.log 反而没有。这条路能拿到「用户界面上到底勾了什么」的硬事实，比肉眼读截图可靠。

关键词：leveldb 取证、Local Storage、AppData Roaming、dsh-desktop、snappy 解压、文件被独占 locked、键名 UTF-8 明文、skin-manager.preferences.v2、000008.ldb、拷到 TEMP、设置真值硬证据、Electron localStorage

### 0mv77ps0w-6a674a294a49480a80b9215aed
_重要性 3，状态 active，项目 dsh_

日志分诊法（DSH 崩溃弹窗排查）：logs 目录两个文件指向两种病——host.log 说明 DSH 主进程都没上电（profile manifest 读失败之类），web-boot.log 说明主进程没事、是客户端插件条目没激活。web-boot 里若同时点名两个插件，看谁带 `skipped after an earlier failure of this bundle` 这句：带的是被连带的，不带的那一个才是真凶，因为它们共用一个 combo bundle。另：弹窗最右「禁用第三方插件、备份 profile patch 并重启」是最后手段，能读到日志就别先按。

关键词：日志分诊、两种病、host.log 主进程、web-boot 客户端条目、真凶辨别、被连带的插件、combo bundle 共用、禁用第三方插件 按钮、最后手段、启动失败弹窗

### 0mv77pfsl-b7be9a22c3c747c0b6a1929e54
_重要性 3，状态 active，项目 dsh_

DSH 弹「应用无法启动或已意外停止」时，先看 C:\Users\Kayle\AppData\Roaming\@deepseek-ai\dsh-desktop\logs\ 里的 crash-*host.log（宿主没起来：读 profile manifest 失败等）与 crash-*web-boot.log（宿主起来了、客户端条目没激活），两者病因完全不同。web-boot 里若同时列出两个插件，用 `skipped after an earlier failure of this bundle` 分辨真假：带这句的是连带受害者，真正先倒的是没带这句的那个（共用同一 combo bundle，一损俱损）。弹窗最右那颗「禁用第三方插件、备份 profile patch 并重启」是逃生阀，日志能定位前先别按。

关键词：应用无法启动、crash-host.log、crash-web-boot.log、宿主 vs 客户端、skipped after an earlier failure、连带受害者、combo bundle 一损俱损、逃生阀 禁用第三方插件、排查顺序、DSH 启动失败

### 0mv754ix7-cc311090c9ae426b94f33ee0ad
_重要性 3，状态 active，项目 dsh,qwen-image-dsh_

失败态 UI 绝不能替用户把出口关掉——探针失败时自动 `panelStore.close()` 会把用户刚点开的窗口抢走，而固着的红色提示条又只认手动关闭，净效果是「窗口关不掉、只能刷新页面」（老大 2026-10-14 报 dsh-maid-comfyui 面板正是此症）。正确姿势：失败就把失败写在用户已经在看的那块地方（面板内状态条 + 重试/修复动作），别关窗、别叠加固定浮层。

【补充 · 同一处的两个真因（已修，e82e853）】① 读接口形状与路由实现不一致：`GET /comfyui/config` 把去敏配置**平铺在顶层**（只有 POST 回包才包一层 `config`），代码却读 `payload.config.canLaunch` → 永远 false，启动按钮不显示、自动拉起也不发生，只剩红条；② 「关掉」没被记住：失败态 sticky 且每次点面板都重新探、重新 settleFail，✕ 只是清掉刚画的那条，下一次点击立刻重弹，观感就是按钮失灵。修法：读对字段 + 加 `suppressed` 标记（用户亲手关掉后自动探测不再重画，直到某次探测成功或用户主动点启动按钮——后者是新请求，解除抑制并照常汇报）。教训：改「失败提示」这类 UI 时，先核对它读的 JSON 形状与宿主路由实际返回是否一致，再看「关掉」是否真的写进了状态机。

关键词：失败态交互、别自动关窗、sticky toast、红色报错关不掉、canLaunch 读错层级、GET 平铺 POST 包 config、suppressed 抑制重弹、关闭按钮失灵、刷新页面脱困、错误出口、重试按钮、接口形状与路由实现对照

### 0mv77lwc6-0ae72ac274d74fe38df46ac6f7
_重要性 2，状态 active，项目 dsh_

DSH 本体（D:\DeepSeek Harness\resources\app.asar，约 825 MB）读源码的通道：grep 工具可以直接搜它并带行号返回命中（ripgrep 能穿 asar），加 context 参数还能拿到命中处上下文；但 read 与 ops_inspect_local_file 一律报 "Cannot read binary file as text"，hex 视图对找逻辑无用。结论：查宿主实现细节（如 patch 应用算法、row.disabled 跳过分支）用 grep + context，别指望 read 打开它。

关键词：app.asar 读不了、Cannot read binary file as text、grep 搜 asar 带行号、ripgrep 穿 asar、context 取上下文、查宿主实现、patch 应用算法、read 报二进制、resources app.asar、hex 视图无用

### 0mv77lrul-80c05cf09c4943b7b5226e96b6
_重要性 2，状态 active，项目 dsh_

查 DSH 本体实现（app.asar）的可行路径：`grep` 工具能直接搜这个 825 MB 的 asar 并给出命中行号（实测搜 applyPatches / profile patch 层 / row.disabled 均成功），但 `read` 与 `ops_inspect_local_file` 会报 "Cannot read binary file as text"，拿不到上下文。要读命中处上下文时，用带 context 的 grep，别去 read 文件本身。

关键词：app.asar、二进制文件搜索、Cannot read binary file as text、grep asar、DSH 本体实现、ripgrep、context 上下文、读不了 asar、源码排查、resources app.asar

### 0mv77lru8-ccae9739174b4817a1adb99a56
_重要性 3，状态 active，项目 dsh_

摘掉插件自带条目（如 xiaomi-tts 附赠的 preset-whale-girl 预设）的正确手法：在 profile 的 cordis.patch.yml 末尾追加 `- id: preset-whale-girl` + `disabled: true` 两行即可——profile patch 层叠在 bundle 层之后，后手点名能按住包内 insert；装载期对普通行有 `if (row.disabled === true && !row.group) continue;` 直接跳过，插件实例不加载故预设不注册。铁律：只写 id + disabled，多写 name/config 会变成「覆盖该行 config」而非禁用。绝不去改包内 cordis.patch.yml（升级/重装即被覆盖）。改后需重新组合配置或重启生效。先例：profile 里 `- id: dsh-ops-background / disabled: false` 即此写法。

关键词：cordis.patch.yml、disabled true、id 定向覆盖、摘掉插件自带条目、包内 insert、profile patch 层、bundle 层之后、row.disabled continue、升级被覆盖、preset-whale-girl、禁用插件行、别写 name config

### 0mv7779gn-96658fc535dd4fcf980bd932ec
_重要性 4，状态 active，项目 dsh_

教训：动 profile 的 package.json 会踩 UTF-8 BOM 的坑——宿主 dsh-app-boot 的 readProfileManifest 直接 JSON.parse，文件只要带 BOM 就抛 SyntaxError: Unexpected token '﻿'，宿主启动即 DesktopHostFatalError（桌面壳表现为连启动都过不去，反复重启必挂）。本次装 xiaomi-tts 后就因此连炸四次（05:25–05:28 四条 crash-*-host.log）。排查顺序：①%APPDATA%\@deepseek-ai\dsh-desktop\logs\crash-*-host.log 看 host diagnostic 栈 ②用 Node 校验 `JSON.parse(fs.readFileSync(p,'utf8'))` 而非 PowerShell ConvertFrom-Json（PS 会自动吞 BOM 掩盖真因）③用 `db 文件头字节是否是 EF BB BF` 判定。改 profile 文件后必跑 Node 解析自检。

关键词：JSON BOM、Unexpected token、readProfileManifest、DesktopHostFatalError、profile package.json、启动崩溃、crash-host.log、dsh-app-boot、JSON.parse 报错、重启无效、UTF-8 BOM 排查、Node 校验 JSON

### 0mv76wad0-e3ef1f21c97b49658134f6dd92
_重要性 3，状态 active，项目 dsh_

教训：给 desktop profile 装 npm 源插件时，`pnpm add <pkg>` 会自动从 .pnpm/ 隔离层补回被裁剪的传递依赖（本次 Packages: +1 -27 后 lockfile 包集合反而 103→105，无删减）；但 pnpm 只把包写进 dependencies，**不会**写进 dsh.profile.bundles——必须在 package.json 的 bundles 数组手动补包名，否则包下载了也不加载。install 后 pnpm add 会重写 package.json 全文件，缓存里的旧内容会覆盖外部编辑，写 bundles 要放在 install 之后、并重新读一次文件再改。

关键词：pnpm add、dsh.profile.bundles、手动补包名、传递依赖、lockfile 包集合、Packages +1 -27、package.json 重写、插件不加载、install 后再改、npm 源插件

### 0mv76chkz-4b3e0536c80e462ba63a72a527
_重要性 3，状态 active，项目 全局,qwen-image-dsh_

要自动关掉一个「可能是用户自己开的」后台服务时，必须能证明它是我拉起来的：①启动时打标（落盘标记文件，跨宿主重启也能认回）；②关停那一刻按端口反查 PID 而不是缓存 spawn 的 pid——`.bat` 这类启动器自己立刻退出，spawn 返回的 pid 不是真正在监听的服务器进程；③拿不到监听者就放弃（宁可留着也不误杀用户的服务）；④关停前再看一眼有无任务在飞。小困给 dsh-maid-comfyui 加空闲关闭时就是这么做的（win32 `netstat -ano -p TCP`，其他 `lsof -iTCP:<port> -sTCP:LISTEN -t`）。

关键词：自动关闭服务、误杀用户进程、端口反查 PID、netstat -ano、lsof LISTEN、spawn pid 不是服务器、bat 启动器、打标认回、杀进程树 taskkill、空闲关闭、保守优先

### 0mv75lb48-379cb157b85c4846b76c11461a
_重要性 2，状态 active，项目 dsh_

判断「插件能否自动化某件事」前，先确认宿主把该能力锁在哪道门后：DSH 里凡是改 profile / 跑 pnpm 的动作都归 pluginManager 管并要 danger-full-access 审批，第三方插件运行时调它一律视为越权。考古宿主能力的稳办法：写 node 探针直接读 app.asar（indexOf 首个命中 + 窗口切片 dump，或 bin-grep.mjs），比翻文档快且是运行时真值。

关键词：宿主能力考古、app.asar 探针、bin-grep、indexOf 切片 dump、越权判定、插件不该静默改环境、审批门、运行时真值、架构判定方法、先查门再定方案

### 0mv74ufvr-fcecc45b297a4e87bc6c0e6551
_重要性 3，状态 active，项目 qwen-image-dsh_

dsh-maid-comfyui 改名后，运行时数据目录也跟着换了名：`$DSH_HOME/data/dsh-comfyui` → `data/dsh-maid-comfyui`（src/index.ts 的 defaultDataDir 用包名拼），老数据不会自动跟过去。症状：重启后面板里工作流库和技能包全空（`/comfyui/workflows` 返 `{"workflows":[]}`）。修法：把旧目录内容（workflows.json / tracked.json / skills/）复制到新目录，旧目录留着无妨。

关键词：数据目录迁移、dsh-comfyui 改名、dsh-maid-comfyui、DSH_HOME data、workflows.json 为空、技能包丢失、defaultDataDir、改名后数据没跟过去、重启后工作流空

### 0mv74s19m-7cb5af8af9f2435ab7592da619
_重要性 2，状态 active，项目 dsh-maid-preset_

改 dsh-maid-preset 仓库并推送时，远端常被「记忆自动同步」的提交抢先（本地落后 1 笔、push 被拒）。正确姿势：先 `git pull --rebase origin main` 再 `git push`——直接 push 会 non-fast-forward。推完 `git rev-list --left-right --count HEAD...origin/main` 应得 `0 0`。走代理：`git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 push`。

关键词：dsh-maid-preset 推送、记忆自动同步抢提交、pull --rebase、non-fast-forward、push 被拒、代理 7890、rev-list 左右计数、rebase 后推送、仓库后台任务

### 0mv74n193-f0e66c500bb945fb819fdd3f9d
_重要性 2，状态 active，项目 全局,dsh_

GitHub 仓库「原地改名」优于「新建再推」：`PATCH /repos/{owner}/{repo}` 改名后，旧 URL 永久自动重定向（clone/fetch/push 都不断），stars / issues / 历史全部保留——老大的 `Valorine97417/dsh-raw-html` → `dsh-maid-vcp` 就是这么做的（改完本地 `git remote set-url` 换新地址即可）。反之新建仓库再推会丢掉 star 与 issue 轨迹。仓库名与包名不一致时 `package.json` 的 repository URL 要同步改，否则 npm 页面链接失效。

关键词：GitHub 仓库改名、PATCH /repos、自动重定向、保住 star、保住 issue、新建仓库对比、remote set-url、repository URL 同步、dsh-maid-vcp、仓库名与包名一致

### 0mv74n18q-d7811486917d4a09b6442e09fd
_重要性 2，状态 active，项目 全局,dsh,qwen-image-dsh_

浅克隆（`git clone --depth N`）的仓库直接 push 到新仓库会被服务端拒：`! [remote rejected] main -> main (shallow update not allowed)`。解法：先 `git -c http.proxy=http://127.0.0.1:7890 fetch --unshallow origin` 补全历史（本机实测 7.3 MB / 38 提交，几秒完成），再推。判据：`Test-Path .git/shallow` → 有该文件才是浅的；`--unshallow` 对已完整的仓库会报 `fatal: --unshallow on a complete repository does not make sense`（这不是失败）。保留完整上游历史的好处：新仓库仍是可 `rebase` 的 fork，血缘可查。fork 改名的额外坑见 0mv71j4iq。

关键词：浅克隆、shallow clone、shallow update not allowed、fetch --unshallow、.git/shallow、推新仓库被拒、depth 20、保留上游历史、fork rebase、完整历史、代理 fetch

### 0mv742s7t-af2ee95acfed42c2b58fd95cdf
_重要性 2，状态 active，项目 全局,dsh_

探 GitHub 仓库是否存在，别用 `git ls-remote`（走 ghproxy 会触发 Git Credential Manager 弹窗，报 `fatal: User cancelled dialog.`，且会挂住整条命令）；改用 `Invoke-WebRequest -Method Head https://github.com/<user>/<repo>` 看 404/200，无凭据、不弹窗、秒回。（注：若只是想推代码，`git ls-remote` 加 `-c credential.helper=manager` 正常可用；这条只针对「先探活再决定」的场合。）

关键词：git ls-remote 弹窗、Git Credential Manager、User cancelled dialog、探仓库是否存在、Invoke-WebRequest HEAD、404 探活、ghproxy 坑、不弹窗

### 0mv742ehm-0b901c7ab9ce43f28ea8904c54
_重要性 3，状态 active，项目 全局,dsh_

改插件包名/目录名时，重命名目录后必须重装或重建两处链接，否则构建直接罢工：① profile 的 `node_modules/<name>` junction 会变成悬空链接（还指着旧路径，`Test-Path 目标` 为 False）——旧条目要 `cmd /c rmdir` 清掉（rmdir 只删 junction 不动目标），再 pnpm install 重建；② 插件自己的 `node_modules/*` junction 也会保留旧绝对路径（`typescript` → 旧 `.../comfyui-src/node_modules/.pnpm/...`），表现为 `Cannot find module ...\typescript\bin\tsc`，需在本目录 `pnpm install` 重建。另外 `pnpm install` 在无 TTY 下会 `[ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY]`，需 `set CI=true`。

关键词：改包名、重命名目录、junction 悬空、node_modules 旧路径、tsc 找不到、pnpm install 重建、ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY、CI=true、rmdir 删 junction、profile link 协议

### 0mv68rm32-c0223a27a4e6455eaeacd557af
_重要性 3，状态 active，项目 全局_

写视觉风格文档/卡片时，卡片底色默认别写死 hex——用宿主变量 background:var(--dsw-alias-bg-layer-1,<兜底色>) 跟随输出框（写死实色会差一档深浅、少一层透明，老大一眼看出「背景颜色跟输出框不一样」）。**例外**：当容器需要遮挡住下层（视频背景/浮层）时，必须写死实色——女仆主题的 bg 系列只有 90% 不透明，透明会漏出视频；此时用 `var(--自定义变量, #实色)` 形式留出覆盖口。

关键词：卡片底色写死、跟随宿主变量、bg-layer-1、输出框底色不一致、脱色、遮挡层写实色、半透明漏出视频、自定义变量兜底、风格文档准则

### 0mv73810c-b4209a9512be488685658800b9
_重要性 3，状态 active，项目 qwen-image-dsh_

「包含未注册的 UI-only 节点 "c291ceec-…"」这类报错**不是模型路径问题**：真因是 ComfyUI 新版画布用子图（Subgraph），节点类型名是一串 UUID，dsh-comfyui 的转换器不认，按未注册拒了（convert.ts:237/242/340；Primitive* 会内联其第一个 widget，非 Primitive 直接报错）。绕过 = 不走「提取」这条路，改为把扁平 API 工作流直接 POST 入库。教训：老大问「是不是模型路径没适配好」时，先看报错发生在哪个阶段（提取阶段 vs 执行阶段），别顺着猜测走。

关键词：未注册 UI-only 节点、UUID 类型名、子图 Subgraph、图工作流提取失败、PrimitiveNode、模型路径没适配、报错阶段误判、按分量提取、绕过方式、convert.ts

### 0mv72nmey-41cbd4be0a924338995f5b184a
_重要性 2，状态 active，项目 dsh_

判断「页面这一侧能不能做某件事（重启/退出/读宿主路径）」，别猜也别只翻业务代码——直接去 app.asar 里反查 preload 的 `contextBridge.exposeInMainWorld` 暴露面与 IPC 常量表（`_probe/bin-grep.mjs <asar> <needle> [ctx] [max]`），对照宿主 index.js 的 `process.on('message')` 分支，两边一交叉，有没有通道立刻见分晓。

关键词：asar 反查、preload 暴露面、IPC 常量表、bin-grep.mjs、contextBridge、process.on message、判断页面能力、取证方法

### 0mv71qhv6-5283e982c4fe49de81057e5463
_重要性 3，状态 active，项目 dsh,qwen-image-dsh_

fork 别人还在活跃更新的插件，别一刀切「完全独立」：正确姿势是**保留 upstream 远端 + fork 自己发版**，定期 rebase，冲突点通常正好落在自己想改的那几行（如 peer 范围、配色文件）。只有当上游**真的停更**了，才值得走「接管」——切成纯自己的仓库、摘掉 upstream，连 rebase 的负担也一起省掉。本机实例：`dsh-raw-html` 是接管形态（remote 只有 `Valorine97417/dsh-raw-html`、无 upstream，提交里有「本地维护分支 v0.6.3：接管已停更的上游」），作者已停更所以干净；而 `dsh-comfyui` 的作者 9-27 还在连推 7 笔，故应保留一条 rebase 的路。判断依据：看作者最近的提交密度，而不是看主题重不重要。

关键词：fork 策略、保留 upstream、定期 rebase、接管停更上游、摘掉 upstream、作者还在动、提交密度、dsh-raw-html 接管、dsh-comfyui 活跃、冲突点、独立分支

### 0mv71j4iq-e3de31c239ca440e9ec86a18dc
_重要性 3，状态 active，项目 dsh_

fork / 改名 DSH 客户端插件时，客户端 bundle 的 banner 里**不能写死包名 id**（如 `const ID='dsh-comfyui'`）：渲染端按 graph-row id（= npm 包名）查找 factory 注册，包名一变 row 就 materialize 不了，loader 回落成 one-resource URL 重复执行 bundle → `client-modules: duplicate factory registration` → **web boot 整体失败、宿主起不来**。正确写法是从 package.json 派生（`createRequire(import.meta.url)('./package.json').name`）。此坑由 dsh-comfyui PR #18 的作者真实踩中并写在 PR 描述里。另：`@deepseek-ai/dsh-client-runtime` 在 0.2.0-rc.2 宿主里已不提供（app.asar 全文只有两处文档提及、无实际包）——client inject 里留着它会 pending 阻塞整个 web boot。

关键词：banner id、graph-row id、duplicate factory registration、web boot 失败、fork 改名、createRequire package.json name、tsdown、client inject、dsh-client-runtime 已移除、pending 阻塞 boot

### 0mv7181jv-96dc1f5dd6634bc49f85e6939d
_重要性 2，状态 active，项目 qwen-image-dsh,全局，被纠正_

老大 m01848 原话「你现在是在弄什么，怎么在频繁生图」——连跑多张却不交代目的，会被当成乱跑。调参/试错类工作要每跑一步先说清「在验哪个参数、预期看什么」，别闷头刷。

关键词：频繁生图、闷头跑任务、先说目的、调参试错、老大质疑、打断、进度交代、沟通节奏

### 0mv717x66-fde723deb4054d35b4c0f3fbe3
_重要性 3，状态 active，项目 全局,dsh_

改别人的 npm 包要按「改动放哪一层」选持久化手段：① profile 根目录的自有文件（`compatibility.json`、自己的配置）**永不被覆盖**——首选落脚点；② 手改 `node_modules/<包>/*` 是最易丢的做法，下次 install 或作者发新版会静默还原、不报错；要改包源码又留住，用 **pnpm patch**：`pnpm patch <包>@<版本>` → 在临时目录改 → `pnpm patch-commit <目录>`，改动记进 profile 的 `package.json` `pnpm.patchedDependencies` 与 `patches/*.patch`，之后每次安装自动重放；代价是 patch 键带精确版本号，作者发新版即失效需重做一次；③ 长期大改走 fork，或 `link:` 到自己目录（本机五个包如此）。profile 用 pnpm 11.7.0（`D:\DeepSeek Harness\resources\runtime\pnpm\bin\pnpm.cjs`），`pnpm-workspace.yaml` 里 `nodeLinker: hoisted`、`autoInstallPeers: false`，`patches/` 目录当前不存在。**手改 node_modules 是唯一一条「改了等于没改」的路**。

关键词：pnpm patch、patch-commit、patchedDependencies、patches 目录、node_modules 被覆盖、install 还原、profile 根目录、link 协议、fork、版本号失效、hoisted、改动放哪一层

### 0mv6yriy2-de8d78ee3b54415fb7cc074547
_重要性 3，状态 stale，项目 dsh,dsh-maid-scenery_

dsh-maid-scenery 让 DSH「无限加载」的排查（**已结案 2026-10-14**）：现象 = 包目录在场则桌面壳卡在 boot 页，**全程没有任何崩溃日志**（`%APPDATA%\@deepseek-ai\dsh-desktop\logs\crash-*-web-boot.log` 里没有 10-14 记录 → 不是主进程崩，是页面 boot 卡住）；把包目录整体移出才能进。排除项：不是重复装配（`cordis.yml` 里只出现一次）、主进程半边干净（`_probe/try-apply.mjs` mock ctx：import 8ms / apply 3ms / 不抛不卡）、`dsh.client` 声明与正常包一致、`client.js` 无 BOM、`node --check` exit=0。**根因 = 小困自己加的那 11 行 try/catch 诊断包装**（`window.__ModuleLoader__.load` 外层包裹）→ 回滚成「git 原版 + 一行路标 `console.log('[scenery] client 半边已执行')`」后重启正常（老大回报控制台有该行）。已提交推送 `6fc736d`。教训：排查时给产物加的诊断包装本身就是头号嫌疑，先回滚再说话。

关键词：无限加载、client.js 诊断包装、try catch 包裹、回滚后正常、web boot 卡住、崩溃日志没有记录、6fc736d、送达路标、移出包目录、BOM 假说被否、try-apply 探针

### 0mv70t91p-32427be461224287a7d45e7f76
_重要性 3，状态 active，项目 dsh_

DSH 0.2.0-rc.2 的第三方插件准入机制（读 asar 实现原文所得，判「这个插件能不能装」必用）：① 宿主只检查 peerDependencies 里名字等于 `@deepseek-ai/dsh` 或**以 `@deepseek-ai/dsh-` 开头**的项，其他（如 `@deepseek-ai/cordis`）直接 continue 跳过 —— 所以 cordis 那条范围写什么都不影响准入；② 判据 `semver.satisfies(runtimeVersion, range, {includePrerelease:true})`，runtimeVersion 读的是 `@deepseek-ai/dsh-app-boot/package.json` 的版本（本机 = 0.2.0-rc.2）；③ 不满意的 bundle **不被拒绝报错，而是静默 skip**：`an incompatible bundle without an exemption is skipped like an unreadable one and listed in skippedBundles`，启动器用 `reportSkippedBundles` 每次启动打印一次 —— 表现为「插件装上但什么都不出现」，DSH 其余照常；④ 放行 = profile 的 `compatibility.json`（键 `包名@版本` → 运行的版本数组，如 `{"dsh-comfyui@0.5.4":["0.2.0-rc.2"]}`），写入接口 `pluginManager.setVersionExemption`，拒绝码 `incompatible-version`；⑤ 与「客户端 inject 不存在的服务 → pending 阻塞整个 web boot」（raw 那次）是**两种完全不同的失败**，别混为一谈。

关键词：插件准入、peerDependencies、@deepseek-ai/dsh- 前缀、runtimeVersion、dsh-app-boot、includePrerelease、skippedBundles、compatibility.json、setVersionExemption、incompatible-version、静默跳过、装上不出现

### 0mv70t0t0-f2dc5f85febd485085d4478a46
_重要性 3，状态 active，项目 qwen-image-dsh_

Qwen-Image 2.1 图像编辑（i2i）跑通的接法（2026-10-14 实测，此前连错四次）：① 参考图在 API 格式里必须写成**对象** `images: { image_0: ["6", 0] }` —— ComfyUI 的自动增长复合输入（COMFY_AUTOGROW_V3），写成数组 `[["6",0]]` 不报错但参考图**完全不生效**（表现是照着提示词另画一张）；② 主文本编码器仍是 `qwen3vl_8b_nvfp4` + `type='qwen_image'`，那张参考图走 `LoadImage` → vae 编码 `/` 直接用原图 latent；③ 试跑脚本 `D:/DeepSeek Harness/Works/_probe/comfy-i2i.mjs`，参数位 `node comfy-i2i.mjs <参考图> <提示词> [steps 25] [cfg 1] [size 1024] [denoise|empty] [batch 1]`，`empty` = 空 latent（纯文字改写），非 empty 则用图 latent；④ 样例成图 `D:/ComfyUI_windows_portable/ComfyUI/output/qwen21_edit_00005_.png`（深夜图书馆 + 暖台灯，人物保持）。

关键词：图像编辑、i2i、COMFY_AUTOGROW_V3、images 对象形式、image_0、LoadImage、qwen3vl_8b_nvfp4、comfy-i2i.mjs、参考图不生效、数组写法不生效、qwen21_edit

### 0mv706fqe-e1d4a9ca0bba49278e5c576e8b
_重要性 3，状态 active，项目 qwen-image-dsh_

ComfyUI 里接 Qwen-Image 2.1 的三个坑（2026-10-14 亲自踩并解决）：① **`pe_*_w4a8` 那两份编码器不是主线文本编码器** —— 它们是「提示词重写」分支的（配 `TextGenerate` + `CLIPLoader(type='stable_diffusion')`），主线要 `qwen3vl_8b_nvfp4` + `type='qwen_image'`；接错照样能跑完，但**出纯噪声**。② **别加 `ModelSamplingAuraFlow`**（shift 1.73），官方 t2i 子图里根本没这个节点，加了同样出纯噪声。③ `SaveImageAdvanced` 的 `format` 是动态 combo，走 API 提交时必须同时给 `bit_depth:'8-bit'` 与 `input_color_space:'sRGB'`，否则报 `Required input is missing: bit_depth / input_color_space`；图省事直接用 `SaveImage`。附：官方模板的真实节点藏在 **subgraph** 里（顶层只有 ResolutionSelector + 子图 + SaveImageAdvanced + MarkdownNote），要读 `definitions.subgraphs` 才看得到接线。

关键词：ComfyUI 接线坑、出纯噪声、PE 不是主编码器、ModelSamplingAuraFlow 别加、SaveImageAdvanced 动态 combo、bit_depth、input_color_space、subgraph 子图、definitions.subgraphs、照官方模板接、qwen_image 类型、踩坑与解法

### 0mv6zhn6n-5638c6bf289c4fa8a089fbb19f
_重要性 3，状态 active，项目 qwen-image-dsh，被纠正_

小困的取证毛病（第二次犯，corrected）：查 ComfyUI 有没有 Qwen-Image 2.1 模板时，只翻了 `blueprints/index.json` 一层就下结论「官方没有这个模板」，被老大用截图纠正——人家真正列出来的在 `templates/index.json`（771 KB，顶层正好 12 个分类数组）。教训：下「没有/不存在」这类**否定结论**之前，先把同一仓库的兄弟目录和另一份索引都列一遍（tree API 或列目录）；否定结论的取证成本永远比肯定结论高。

关键词：否定结论、取证不全、blueprints 与 templates 两套索引、被截图纠正、corrected、复查兄弟目录、tree API、下结论太快、第二次犯、ComfyUI 模板仓库

### 0mv6zhn6a-2c20e5e3aa7f4c66aee7b81ddb
_重要性 3，状态 active，项目 dsh，被纠正_

这台机器的取网事实（2026-10-14 实测）：`github.com` 直连**不通**（curl 报 `Failed to connect to github.com:443`，21 秒超时），`raw.githubusercontent.com` **时通时不通**；可用镜像 = `ghproxy.net` / `gh-proxy.com` / `ghfast.top`（都返 200），`gh.llkk.cc` 不通；`hf-mirror.com` 通（HuggingFace 国内镜像，API 与 resolve 直用没问题）。→ 下 GitHub release 资产或 raw 文件时**直接用镜像前缀**（形如 `https://ghproxy.net/https://github.com/...`），别先试直连白等一轮。

关键词：github 直连不通、443 超时、ghproxy.net、gh-proxy.com、ghfast.top、gh.llkk.cc、hf-mirror.com、raw.githubusercontent 时通时不通、release 资产下载、镜像前缀、curl 超时、国内网络

### 0mv6z127z-9cc5e88d4790404eaa74ccc046
_重要性 3，状态 active，项目 dsh,dsh-maid-scenery_

皮肤管理器写"开关"的真身在 profile patch：`skin-manager`（junction → `D:\DeepSeek Harness\Works\dsh-deep-whale\skin-manager`）的 `src/index.ts:781-783` 遍历 catalog 往 `cordis.patch.yml` 写 managed 段（`- id: <wiringId>` + `  disabled: <当前皮肤?'false':'true'>`），**只写 id 不写 name**，段上带 `do not edit`；写入位置跟随激活 profile，所以 `$DSH_HOME/cordis.patch.yml`（根级）与 `$DSH_HOME/profiles/<name>/cordis.patch.yml` 都会出现。`src/compatibility.ts` 是宿主准入判定的镜像：**peer 范围不符的行只在"合成树"里被拒，patch 里仍写着 enabled，于是在面板上点开关会静默无效**（注释原话：The denial lives only in the composed tree: the patch still says "enabled" … a click would silently do nothing）。

关键词：皮肤管理器、managed 段、cordis.patch.yml、wiringId、disabled 写死、do not edit、compatibility.ts、合成树被拒、点开关静默无效、根级 patch、皮肤开关真身、skin-manager

### 0mv6z0v5a-032c1654d09d45619a8e8ee00e
_重要性 3，状态 active，项目 全局，被纠正_

下结论前先把时间线核对干净。小困两次栽在"没核对改动时间/进程启动时间就下结论"：①把 `Get-Process` 里某个进程当成"失败那次"，对老大说"DSH 其实起来了"；②看到 `client.js` 的 1:39 改动时间，断言"是外部程序改的"，其实是自己几分钟前加的诊断。判据：任何"某文件被改过 / 某进程跑过"的结论，先自问"是不是我自己这次会话干的"，再去怪外部。

关键词：时间线、下结论前核对、process start time、mtime 是谁改的、自我怀疑、误判、排查纪律、先问是不是自己、会话内改动、纠正

### 0mv6z0v50-c168f1c353ec46cbbb41fe6863
_重要性 3，状态 active，项目 dsh_

DSH 桌面壳的崩溃日志：`C:\Users\Kayle\AppData\Roaming\@deepseek-ai\dsh-desktop\logs\crash-<ISO 时间戳>-web-boot.log`（另有同前缀 `-host.log`）。首段是版本信息（`app: @deepseek-ai/dsh-desktop 0.2.0-rc.2` / `electron 44.0.0` / `node 24.18.1`），随后是 `Error: web boot: …` 与 renderer 控制台。**页面侧 boot 卡住（无限加载）不会留崩溃日志**——只在渲染进程真抛错时才写，所以"没有日志"本身就是线索（指向主进程卡死或纯加载等待）。

关键词：崩溃日志、crash-web-boot.log、AppData Roaming、@deepseek-ai、dsh-desktop、无限加载、没有日志也是线索、electron 版本、renderer console、排查路径

### 0mv6z0v4m-6f4b79e1fc9148e0af68e0fa0a
_重要性 3，状态 active，项目 dsh_

DSH 客户端插件（带 `dsh.client` 的包）的 `client.js` 会被拼成**同一条 bundle script** 一起送进页面（combo URL 形如 `plugins/??a/client.js,b/client.js,…&rev=<hash>`）。**一个入口失败 → 整条 bundle 被跳过 → 同链上所有插件都不激活**（桌面壳崩溃日志原话 `skipped after an earlier failure of this bundle`）。10-13 晚那次 `web boot: 3 entries did not activate` 就是这么来的（billion-context / @liustack/modlens / dshmarket 三个 import failed 拖累全链）。排查"某插件装了起不来"时，先看同一 bundle 里有没有别的坏入口。

关键词：bundle script、combo URL、一损俱损、entries did not activate、skipped after an earlier failure、client.js、dsh.client、插件客户端注入、billion-context、排查顺序

### 0mv5epdi5-292bf6a0351949b1af597192f8
_重要性 2，状态 active，项目 dsh_

教训：宿主 cordis 插件无热重载——改包内 lib/*.js 后运行中宿主不生效，须完整重启 DSH。更精确（issue #7 实测）：插件模块是宿主启动时 import 并缓存的，热重挂只重跑 apply()、不重新 import 源文件，所以「改代码+点重挂」会给出假结论（连 apply() 入口的写文件探针都不落盘），验证代码改动必须完整重启。另：`dsh plugin` CLI 只是 pnpm 薄壳（help 透传 pnpm），管包不管运行中宿主。

关键词：热重载、重启 DSH、cordis 插件、模块 import 缓存、只重跑 apply、热重挂假结论、探针不落盘、dsh plugin CLI、pnpm 薄壳、代码改动不生效

### 0mv6ywfo3-87479fab732c44fd8e159f6bf9
_重要性 3，状态 active，项目 dsh_

判 DSH 第三方插件还能不能用，第一步看它 dsh.client.inject 声明的服务/槽位在本机 asar 里是否还存在。DSH 0.1.7（2026-09-24）起移除了 client 服务 settingsScope、槽位 settings.plugin.item（本机 0.2.0-rc.2 只剩 plugins.tab）、宿主 settings.register；客户端插件若 inject 了不存在的服务会一直 pending，生态有 pending 阻塞整个 web boot 的记录（dsh-web#1711/#1712）——这是「装上可能开不了机」级别的红线。核实法：node _probe/asar-extract.cjs 提取 dsh-client-ui-*/lib/client.js 再 grep。另：DSH 生态同名插件极多（dsh-plugin-guard 至少 6 个作者），排查前先确认仓库归属。

关键词：插件兼容性判断、dsh.client.inject、settingsScope 已移除、settings.register 已移除、settings.plugin.item、plugins.tab 槽位、pending 阻塞 web boot、asar 提取 client.js 核实、DSH 0.1.7 接口变更、同名插件 确认仓库归属

### 0mv6yuyb5-24949b51a2d74f6b8bf8064e22
_重要性 3，状态 active，项目 dsh,dsh-maid-scenery_

排查「DSH 起不来是不是某个插件害的」，先本地把宿主的加载方式复刻一遍再开口：`_probe/try-apply.mjs` —— `await import('<包>/index.js')` 加一个 mock ctx（`logger.warn/info/error`、`on(ev,fn)` 记监听、`inject(deps,fn)` 记依赖、`effect(fn)` 立即执行），看 import / apply 的耗时与是否抛错。dsh-maid-scenery 实测 import 8ms、apply 3ms、无错 → 主进程侧当场排除，嫌疑一次收敛到客户端半边，比让用户反复重启去试快得多。

关键词：本地模拟宿主加载、try-apply.mjs、mock ctx、import 耗时、apply 耗时、排除主进程、收敛到客户端、别让用户反复重启、插件起不来排查、探针脚本

### 0mv6v65sw-4d2840a5069f485e8d273d06e6
_重要性 2，状态 active，项目 dsh,dsh-maid-scenery_

报「修好了却还在 404」前先比对时间戳：`statSync(文件).mtimeMs` vs DSH 主进程启动时间——文件比进程新，就说明当前进程加载的是旧代码，重启即愈，不是修复无效。实例：scenery 素材路径 23:24:57 修好，进程 23:21:11 起来（早 227 秒），界面照旧满屏 404。link 包（本地工作区源码）尤其容易踩：改文件不影响已启动进程。**同理，下结论前必须对齐自己的时间线**：2026-10-14 小困拿 `Get-Process` 看到的 1:33:58 那个进程当成"失败那次"，其实那是老大**把包目录移出之后**才起来的进程（包 mtime 1:36:57 = 后来移回），于是向老大报了"DSH 其实起来了"的错误结论，被当场纠正。教训：先对齐「进程启动时间 / 用户操作时间 / 文件 mtime」三者，再开口。

关键词：时间戳比对、进程启动时间、文件比进程新、重启即愈、mtimeMs、link 包不生效、时间线对齐、别只看 Get-Process、误判被纠正、移出后启动的进程、先对齐三者再结论

### 0mv6ys0wl-1b42fdf8f2b5486eac47a55501
_重要性 2，状态 active，项目 dsh_

判断第三方 DSH 插件能否在桌面端用：别把客户端声明 platform:"web" 当成「浏览器专属」——桌面客户端内嵌的就是这套 web 客户端，判据是比对本机已生效插件的同款声明（dsh-raw-html / dsh-maid-preset / dsh-maid-scenery 全是 platform:"web" 且在桌面端正常工作）。取证不必依赖 web_search：web_fetch 直拉 registry.npmjs.org/<包名>（含 dsh 字段、tarball、版本时间）与 api.github.com/search/repositories?q=<名>。

关键词：platform web、桌面端兼容性、客户端插件声明、dsh.client.inject、registry.npmjs.org、api.github.com 搜索、web_fetch 取证、同款声明比对、插件能否用

### 0mv6w8gbc-969a7bfd6db94aa78885413e64
_重要性 3，状态 active，项目 dsh-maid-scenery_

dsh-maid-scenery 的生效边界（分清三条路，别一概而论）：① **融合层注入行**（`runtime/scenery.css|js`）走宿主 `webserver/index-inject` —— 注入表**只在宿主启动时收集一次、没有任何刷新路径**，所以改它**必须重启 DSH**（F5 / Ctrl+Shift+R 全无效；判据 = 控制台有没有 `[scenery] …` 日志）；② **客户端插件**（`client.js`）走 combo URL `/plugins/??<id>/client.js&rev=…`，rev 含 mtime/size，**浏览器硬刷新即可生效、无需重启**（见 lesson 0mv674rj2）；③ **宿主 `index.js`** 新增路由/端点 → 要重启才装配（旧进程里新端点仍 404）。改配置 `$DSH_HOME/dsh-video-skin.json` 或 assets 音频 → 同样要重启（宿主只在启动时读盘）；右下角音量滑块会把 musicVolume 写回该 json。

关键词：生效边界、融合层注入行必须重启、runtime scenery.js、index-inject 启动时收集、client.js 硬刷新生效、combo URL rev、宿主 index.js 重启、控制台 scenery 日志判据、刷新无效、配置改动、musicVolume 写回、三条路分清

### 0mv6xskzq-6e85b98fe10d4010ba152340fe
_重要性 3，状态 active，项目 全局，被纠正_

CSS 选择器别把父级写死。给 DSH 顶栏写规则时小困写成 `html[data-windows-titlebar] [class*='frame']::before`，可那个属性并不保证挂在 html 上（DSH 自己的写法就是不挑父级的 `[data-windows-titlebar] .BynINW_frame`）→ 整条规则一直空转，老大白看了两遍「还是一样」。反向线索：**照抄宿主自己的选择器前缀**，它怎么写你就怎么写；挂载点不确定时一律不挑父级。

关键词：CSS选择器、父级写死、html属性、data-windows-titlebar、规则空转、选择器前缀、照抄宿主、不挑父级、顶栏、界面改了没生效、调试复盘

### 0mv6xlcog-4557d172062940b2a2c6bcb438
_重要性 3，状态 active，项目 dsh-maid-scenery_

要「符合主题」就别自己调色——直接取主题写在 CSS 变量上的那套值：maid-atelier 的面板蓝是 `--dsw-alias-bg-layer-2`（#182850d1），顶栏取同一个变量后，顶栏/左栏/卡片同源，问题自消。小困前两版都自己调（渐隐、rgba(10,22,54,.97)）才反复被嫌「不像主题」。落点 dsh-maid-scenery 的 runtime/scenery.css G 段。

关键词：主题变量、自己调色、--dsw-alias-bg-layer-2、符合主题、顶栏底色、CSS变量、maid-atelier、面板蓝、观感一致、scenery.css、复刻主题

### 0mv6xefjp-92252812d1184ecebd877f7fc8
_重要性 3，状态 active，项目 全局，被纠正_

观感类需求先对齐「参照物」，别按自己的美学假设动手：老大说界面「不好看 / 突兀」时，小困第一版按自己的理解把顶部栏做成渐隐、右侧栏拉成半透明（想让视频透上来），被一句「还是一样。」打回 —— 他要的是这两条边**看起来像主题的一部分**，参照物就是他满意的左侧栏（实心深蓝底 + 主题装饰）。做法：动手前先问「他满意的区域长什么样」，把新区域往那个样子推，而不是往自己的审美推。

关键词：观感需求、参照物、界面美化、不好看、方向反了、用户纠正、渐隐、半透明、实心表面、主题一致、左侧栏参照、美学假设

### 0mv6xattg-0d6a0a295a5d43b5be39eb00bf
_重要性 2，状态 active，项目 全局_

写压缩摘要时绝不用「…」占位——摘要一旦落盘就是原文的唯一记录，省略号等于真丢内容（本次把 19K 侦察压成 1.2K 骨架，结果要重新挖一遍 app.asar）。要么写全关键事实，要么这一段先不压。

关键词：压缩摘要、ACP、省略号、信息丢失、compress、摘要准则、上下文管理、重新侦察、教训

### 0mv68r8sv-e5852e01c0664500af7d503847
_重要性 2，状态 active，项目 全局_

看不到页面时怎么取 UI 真值（三路，按成本排序）：① 让老大截图（红框最快，但看不出层级与成因）；② 从落盘产物反查：app.asar 内 `dsh/…/dist/*.js` 或 Works 下的插件正源，grep class 名 / CSS 变量；③ **直接挖 app.asar 二进制（最准）**：asar 不能直接 grep，用自写探针 —— `_probe/bin-grep.mjs` 按 Buffer.indexOf 搜 ASCII 关键词并打印上下文（挖 CSS 片段、Electron 窗口配置 titleBarOverlay 等），`_probe/asar-extract.mjs` 按 asar 头（括号配平解析 JSON）提取内嵌文件。宿主根页面 401 鉴权，但 `/assets/*` 静态资源免鉴权可直接 curl。

关键词：app.asar、bin-grep、asar-extract、Buffer.indexOf、CSS 真值、Electron 窗口配置、titleBarOverlay、401 鉴权、截图取证、DOM 锚点、二进制搜索、探针脚本

### 0mv6wv9dc-67954d4252514a42af2324fb0e
_重要性 2，状态 active，项目 全局，被纠正_

可拖浮层的活动范围别图省事用视口：用 innerWidth/innerHeight 夹取，圆钮能被拖进左侧边栏（还盖在侧边栏上）。先量「它所属那块面板」的真实矩形（找那一列的 class 锚点）再夹取，量不到才退回视口。

关键词：活动范围、夹取边界、视口、innerWidth、拖拽吸附、浮层定位、centerCol、对话框、侧边栏、选择器锚点、UI 边界

### 0mv6whr6r-f3872f81f659427b98dbc3289d
_重要性 2，状态 active，项目 dsh-maid-scenery_

给 vendor 写死的 UI 补交互的套路：用内联样式覆盖它 id 选择器里的定位值（特异性够高），幂等标记放 dataset（元素被重建自愈），牵引用 pointerdown/move/up + setPointerCapture 配 4px 阈值，拖动期间清 transition，松手吞掉尾巴那一次 click。

关键词：vendor定制、内联样式覆盖、id选择器特异性、dataset幂等、pointercapture、拖动阈值、吞掉click、transition、UI打补丁、不碰vendor源码

### 0mv6wgx2u-cc2bed570f3048b9baf6334bd0
_重要性 3，状态 active，项目 全局_

页面脚本别只做源码特征断言：用 vm + 迷你 DOM 真跑一遍喂事件（scripts/drag-smoke.mjs 范式），才验得出跟手、吸边、点击吞噬这类行为。

关键词：迷你DOM、vm模块、pointer事件、行为测试、drag-smoke、注入脚本测试、源码断言不够、node测试、stub、页面脚本验证

### 0mv6vyn2t-9c0da9ac30fa40cfba8035361a
_重要性 2，状态 active，项目 dsh-maid-scenery_

否定式断言会替你把功能砍掉：冒烟脚本里写「vendor 内零 .flac」，把用户合法的本地资产判成违规，这条守卫正是当初砍掉背景音乐的推手。断言要对准真正的不变量（如「git 索引里零音频」），不是「磁盘上不许有」。

关键词：否定式断言、冒烟断言方向、断言盲区、假绿、测试守卫、把功能判成违规、git 索引不变量、vendor 资产排除、smoke.mjs、版权音频、本地自用合法

### 0mv6sdgmr-b9d0688b31b84c2fba11517b2a
_重要性 3，状态 active，项目 dsh-maid-scenery_

vendor 上游素材的许可陷阱与处置：①dsh-video-skin 上游 assets 只有 boot.mp4 + background.mp4；本机另有 C418 的 .flac 商业版权音频。**闸门是「不进 git 索引」，不是「磁盘上不许有」**——音频留在 vendor/video-skin/assets/ 本地自用完全合法（老大要的就是这首），`.gitignore` 按扩展名挡在索引外即可，package 的 files 字段与推 GitHub 才是再分发。旧做法（连 user 配置的 background.music 一起清空）是错的，会把功能砍掉，勿再照做。②maid-atelier 是混合许可：代码 MIT、美术素材 CC BY-NC-SA 4.0（含 AI 生成、含嵌入 CSS/data URL 的转换副本），署名链三创（上善 → ZipZipPipe → Small-tailqwq）不可省。处置 = 照 dsh-deep-whale 双许可结构：根 LICENSE 写明三层边界、NOTICE 保留完整署名链、LICENSE-ARTWORK 放 CC 正文、LICENSE-upstream 保留上游原始混合声明。

关键词：C418、商业版权音频、再分发、git 索引而非磁盘、gitignore 挡扩展名、background.music 别清空、vendor 上游素材、双许可结构、NOTICE 署名链、LICENSE-ARTWORK、CC BY-NC-SA 4.0、AI 生成素材

### 0mv6nbpfx-6556ce3219744d94a42d8ede33
_重要性 2，状态 active，项目 dsh-raw-html_

小困的优秀做法（2026-10-13 验收 raw-html）：当验收对象是「渲染能力本身」时，**最好的证据就是让输出自己走一遍那条链路**——不写「请打开某某页面看效果」，而是当场输出一张 abyss-maid 风格卡片，并告诉老大「你能看见卡片而不是源码，就是补丁生效的活证」。把被动等待验收变成一次自我验证，省掉一轮往返。
**升级版（2026-10-13 混排自愈验收）**：肉眼活证之外再加一层量化对照——从会话日志里把「老大刚验的那条消息原文」抠出来，喂给**运行中**的 asar 渲染层函数跑一遍，只挑一个判据（如卡片闭合到 Markdown 之间的换行数），并拿旧版无边界正则跑同一文本做对照组（实测新版 2→2、旧版 2→1）。一条消息里既有「看得见的卡」又有「算得出的数」，比截图对口。

关键词：活体验证、验收技巧、渲染能力验收、自我验证、输出即证据、量化对照、新旧版本对照、抠会话原文、判据单一化、对照组、abyss-maid 卡片

### 0mv6vhodo-9ff34c48b11744e9aa7b45f35a
_重要性 3，状态 active，项目 全局_

会话日志取证：session.v4.jsonl.zstd 是多帧 zstd，单次 zstdDecompressSync 只解出第一帧（曾误判"文件只有 1 行、取不到消息"）。正解=按魔数 28 B5 2F FD 逐帧切片后各自解压再拼（脚本 C:/Users/Kayle/AppData/Local/Temp/unzstd-session.cjs）。解出的 jsonl 是打包形态，想按条取 text 需遍历行找 `assistant/message` 且 text 含目标字样（曾从当前会话 8919 行里筛出 29 条含 `<div` 的消息）。

关键词：session.v4.jsonl.zstd、多帧 zstd、zstdDecompressSync、只解出第一帧、魔数 28 B5 2F FD、逐帧切片、unzstd-session.cjs、聊天记录取证、抠原文、assistant/message、会话日志解压

### 0mv6809z4-01b236dd12bc441388e588fd19
_重要性 3，状态 active，项目 dsh，被纠正_

老大纠正（原话）：「我是DSH桌面端不是web端。」——桌面端界面里的请求走 `dsh-app://app/...` scheme + 内部 IPC，console 里看到的 404 也是这个协议（e.g. `GET dsh-app://app/skin-assets/maid-atelier/<hash>.webp 404`）。但**同一套 webServer 路由在 `http://127.0.0.1:19387` 上也照常服务**（2026-10-13 实测：素材 `/skin-assets/maid-atelier/<hash>.webp` → 200/89946B、`/dsh-video-skin/config.json` → 200、`/plugins/??<pkg>/client.js&rev=<rev>` → 200），所以用 curl 探路由**是有效手段**，别因为「桌面端不是 web 端」就不敢探。真正要避免的是拿 http 探测结果去断言壳内行为。

关键词：dsh-app scheme、桌面端不是web端、127.0.0.1 19387、同一套路由可探、skin-assets 200、curl 探路由、plugins combo URL、壳内行为、运行形态

### 0mv6vanzi-6bcbb46efb73436d8ffe26c8a1
_重要性 2，状态 active，项目 全局_

探针脚本自己的变量为空，会把「修复已生效」误判成「还在 404」——小困实测：`H=$(node -e ...)` 输出被吞 → `$W` 为空 → curl 请求成 `/skin-assets/maid-atelier/`（落目录根）→ 404，于是断言「修了没好」；把文件名硬编码进脚本后同一 URL 立刻 200。**规矩：用 shell 变量拼 URL 前先 `echo` 确认变量非空；排查结论若与「刚修过」相悖，先怀疑探针，再怀疑修复。**

关键词：探针假阴性、空变量、curl 拼接 URL、误判404、echo 校验、shell 变量为空、修复无效假象、排查纪律、先怀疑探针

### 0mv6na0ji-818b986c303d48f0b6b067c598
_重要性 3，状态 active，项目 dsh_

教训：查 boot graph 验插件是否出列，用 `curl -sN http://127.0.0.1:19387/plugins/events`（SSE 首帧即完整 graph JSON，需按花括号配对切出 JSON）。**JSON 结构坑（2026-10-13 实测）**：顶层键是 `type, graph`，条目数组在 **`graph.entries`**，rev 也在 `graph.rev`——直接写 `g.entries||g.plugins` 会取到 0 条（顶层无 entries/rev），别据此判定插件掉了。graph.rev 随每次改码变动，**改文件推送后立即重启会撞 rev 窗口导致旧 URL 404**（表现为 web boot 1 entry did not activate + client.js&rev=xxx 404），稳态重取 graph rev 后 URL 即 200。验全部 bundle 可拉性：把 graph 里 entries+batches 的 url 去重成列表逐个 curl，看 200 计数。另：`/plugins/??<pkg>/client.js&rev=<rev>` 的 `??` 是符号名映射 exports './client'，不服务包内任意路径。

关键词：boot graph、plugins/events SSE、graph.entries、顶层键 type graph、graph.rev、取到0条、bundle URL 404、web boot entry did not activate、符号名映射 ??、rev 竞态

### 0mv6ttvgd-ec0aa0d1abc04be7ba42fb15a7
_重要性 3，状态 active，项目 dsh-raw-html_

**v10 补丁器短路**：`patch-frontend-asar.cjs` L246 `if (t.includes(V6_MARK) && t.includes('window.__vcpGen')) return {applied:['已是 v10 形态，无需重复安装'], changed:false}`（`V6_MARK='window.__vcpStable'`）——已是 v10 形态时重跑 install-all **不会把改好的 v6-inject.js 打进 asar**，dry-run 也骗人。解法：新增 `updateInjectModule(t)` 用 `/*__DSH_V6_INJECT_START__*/` 与 `END` 夹取旧模块，整段替换为 `adaptInject(INJECT_SRC, true)`（读磁盘 `patch/v6-inject.js`），内容相同则幂等跳过；边界=此路径**只升级 C 项**，A/E/F 三项锚点补丁在已是 v10 形态时无法二次定位。
**验证纪律（补）**：打完 asar 必须**逐函数**把 asar 内 v6 段与磁盘源做等值比对（不是只看标记在不在）——写脚本从 START/END 间取段、按大括号配平抽 `fixVcpBlank`/`findRootClose`/`nextTag`/`tagEndAt` 各函数逐字比对（实测 960/1065/931/269 字符全等）。注意 `readEntry().toString('utf8').length` 是**字符数**（721281），不是字节数（741859），别把差值当损坏。

关键词：v10补丁器短路、已是v10形态、updateInjectModule、START END 标记、asar重打、v6-inject升级、逐函数比对、字符数非字节数、install-all跳过、补丁验证纪律

### 0mv6sd9mh-dc1d11c040be4466b9d5afa47c
_重要性 2，状态 active，项目 dsh-maid-scenery,dsh_

冒烟脚本 `scripts/smoke.mjs` 三个坑（v0.2.0 实测）：①`new URL(p, import.meta.url)` 相对**脚本自身**（scripts/ 下），检查仓库根文件必须 `new URL('../'+p, import.meta.url)`，否则 statSync 全失败——**假绿**；②ESM 静态 import 会被提升，`process.env.DSH_HOME` 赋值要用 `await import()` 动态导入被测模块；③mock 要同时支持 `webCtx.get('webServer')`（主题层）与 `child.webServer`（视频层）两种取用风格，只 mock 一种会让 7 条路由断言假失败。
**第四条（血的教训）**：冒烟覆盖不到的东西等于没测——v0.2.0 冒烟 64 PASS，却漏掉了「素材 handler 真能取到文件」，结果 vendor 路径层级写错、界面满屏 404 才发现。补法：从 `registrations` 取 prefix 路由，造假 res 直接调 handler 探 200/404/405/Cache-Control（现 68 PASS）。**断言要落在「真实行为」上，不要只断言「文件存在」「函数可导入」。**

关键词：冒烟脚本、smoke.mjs、import.meta.url 相对脚本、ESM import 提升、mock 两种风格、断言盲区、假绿、handler 实测、素材路由 200、68 PASS

### 0mv6sctl6-febf690b0c27499eb81dce40f9
_重要性 3，状态 active，项目 dsh,dsh-maid-scenery_

**更正（2026-10-13 被打脸）**：原写「vendor 零修改、相对层级天然不变」是错的。搬进 vendor/ 后相对层级**不变**只对「相对自身目录」的写法成立（video-skin 的 `packageRoot = new URL('.', import.meta.url)` 确实没改）；**「相对上一级」的写法会错**——maid-atelier 上游在 `lib/index.js` 用的 `new URL('../assets/runtime/', import.meta.url)`，搬到 `vendor/maid-atelier/index.host.js`（深度少一层）后 `../` 退回 `vendor/`，落点成了不存在的 `vendor/assets/runtime/` → 31 个素材全 404、界面满屏红（老大 m04701 报「界面出问题了」、m05083「大部分素材链接 404」）。修法：改 `./assets/runtime/`，commit 927b914。
**教训**：vendor 上游文件必须**逐文件核对每个相对引用的深度**（`import.meta.url`、`__dirname`、`createRequire`、`require.resolve`、`new URL(...)` 全算），不能靠「同级子目录所以层级不变」推断。装配器 index.js 的顺序（先视频层后融合层）与各家 apply 包 try 仍然有效。

关键词：vendor 路径、相对层级、../assets/runtime、import.meta.url 深度、素材 404、index.host.js、maid-atelier、927b914、逐文件核对、相对引用、packageRoot

### 0mv6tvi9f-6fc4d70e8b6a44fdb7cf44bfd2
_重要性 2，状态 active，项目 dsh-raw-html_

单测注入型浏览器模块（如 patch/v6-inject.js）不必真跑浏览器：用 `node:vm` 建假 sandbox（给 window/document/console/localStorage/MutationObserver 等最小桩），`vm.createContext` + `vm.runInContext` 跑模块源码，再从 `sandbox.window.__vcpStable` 取内部函数做断言——本机以此七用例验证 fixVcpBlank 改造。坑：① 脚本若命名 `.mjs` 会在 ESM 作用域里报 `ReferenceError: require is not defined`，要用 `.cjs` 才能 require 同仓库的 asar-io.cjs；② 沙箱执行抛错未必致命，只要目标函数已挂上 window 即可继续断言。

关键词：node:vm 沙箱单测、vm.createContext、runInContext、__vcpStable、假 window 桩、require is not defined、.cjs 而非 .mjs、浏览器模块单测、fixVcpBlank 验证

### 0mv6q1zrb-9b65aee11fc54133beb2855247
_重要性 3，状态 active，项目 dsh-raw-html_

一条消息里混用裸 HTML 卡片 + Markdown → 表格/加粗全成裸文本（HTML 块内不解析 md）。**已双层根治（2026-10-13）**：①模型侧——`lib/index.js`【输出纪律】段第 5 条「一条消息只允许一种格式」+ DESIGN.md §4 第 12 条 + README 双端速查节（v0.6.6 commit 08551f6）；②渲染层——v0.6.7 commit 5e04f4b 的 v6.39 补丁让 `fixVcpBlank` 只在根容器内压空行（新增 `findRootClose`），卡后分界空行自动补回，混排不再是致命伤。**铁律仍保留**：自愈是兜底不是许可证，规范输出更省事、也避免流式那一帧重排。

关键词：混排、HTML Markdown 混用、一种格式、fixVcpBlank、v6.39 混排自愈、findRootClose、输出纪律、卡片后 Markdown、裸竖线、渲染层自愈、DESIGN §4 第12条

### 0mv6tdn2d-4817c66a38da4683a83fdb70f3
_重要性 3，状态 active，项目 dsh-raw-html_

规矩写进仓库文档 ≠ 模型看得到。dsh-raw-html 的「一条消息只允许一种格式」铁律已落三处文档（DESIGN.md §4 第 12 条 / README.md L174 + README.en.md / CHANGELOG 0.6.6，commit 08551f6），但 **`lib/index.js` 的【输出纪律 · 最高优先级】段（L144-148）里没有这一条**——那段才是每轮注入给模型的提示词。文档在仓库里模型读不到，等于只靠模型自觉，所以才会一犯再犯。教训：约束类规则必须写进 `lib/index.js` 的注入提示词段才算真生效，仓库文档只是给人看的权威源。

关键词：提示词注入、输出纪律段、lib/index.js、规矩落点、文档不等于提示词、一条消息一种格式、DESIGN.md第12条、每轮注入、约束类规则、模型看不到文档

### 0mv6stdrh-be76237360774beea42ab3a5a5
_重要性 3，状态 active，项目 dsh,dsh-maid-scenery_

皮肤管理器的发现链实测坑（2026-10-13 排查 scenery 整合后「发现 0 个皮肤」时踩到）：①`discoverInstalledSkins(profilePatch, runtimeVersion)` 默认 `resolveProfilePatch()` 在本机解析成 **`C:\Users\Kayle\.dsh\profiles\web\cordis.patch.yml`（web profile，不是 desktop）**——外部脚本里验证必须显式传目标 profile 的 patch 路径，否则读到空清单误判成故障；②第二参 `runtimeVersion` 传 `undefined` 才跳过兼容性判定，传 `readDshRuntimeVersion()` 可能因打包运行时取不到而行为不同；③`discoverSkinDirectories()` / `discoverSkinDesktopIcons()` 返回的是 **Map**，`console.log` 打印成 `{}` 看着像空，要 `[...map]` 才看得见；④`catalogEntry` 要求 `manifest.package === 已装目录自己 package.json 的 name`（link 别名不影响）；⑤`renderManagedBlock('official', catalog)` 写的是 `- id: <wiringId> / disabled: true`，切回官方就是给自己那条 entry 打 disabled。

关键词：皮肤管理器、discoverInstalledSkins、resolveProfilePatch、web profile、desktop profile、catalogEntry、skinManifestPath、Map 打印、renderManagedBlock、disabled true、发现 0 个皮肤

### 0mv6pg7xv-eb5e208cde6f48f9b686fad19d
_重要性 3，状态 active，项目 dsh-maid-preset_

教训：合并两套记忆库时，字面相似度（cosine/Jaccard）只能当**候选筛选**，不能当裁决依据——实测 19 对 cosine≥0.35 的「近亲」里，真重复只有 2 对（同一件事同一结论），其余 17 对是「词面像、事不同」（如本机讲 DSH profile 合成机制 vs GH 讲 meow 移出 bundles；本机讲 skin-manager 功能 vs GH 讲换正源主题）。**必须逐条读内容人工裁决**，否则会误杀独有信息。另：两库 id 零重叠不代表没重复（两台机器各自记了同一段历史），也不代表全是有效信息（GH 库里混着另一台机器的环境事实，按内容里的路径特征 `C:\Users\Administrator` 可批量识别）。

关键词：记忆库合并、相似度只能当候选、逐条人工裁决、cosine阈值、Jaccard、近亲误杀、id零重叠不等于无重复、错误环境事实识别、C:\Users\Administrator、批量识别特征

### 0mv6oe01a-9e9a4862130c4ce2ab1c6eee01
_重要性 3，状态 active，项目 dsh_

DSH 新会话预设 chip 消失的根因：`developerTools` 是预设选择器的唯一门控（client.js:480 `if (!main || !developerTools || !ready) return null`），而它的命名空间就是 `ui-settings`，该插件 Config 唯一字段 `enabled` 即开发者工具开关（设置里显示为「显示代码工作视图」）。profile patch 里 `- id: ui-settings` + `config.enabled: false` 一关，预设 chip、轨迹、代码差异一起消失——是设计行为不是故障。修法 A：设置→通用打开「显示代码工作视图」（即时落盘，重启后保持）。修法 B（2026-10-13 已执行）：把 `C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml` L19-22 的 `- id: ui-settings` 整段**注释掉**（保留原文便于还原），走 schema 默认 true；回退点 `cordis.patch.yml.bak-20261013-planB`。老大在 A/B 中选了 B。

关键词：developerTools、ui-settings、预设 chip 消失、显示代码工作视图、开发者工具开关、新会话预设选择、selectionAvailable、configForms、cordis.patch.yml、profile patch、唯一门控、设置通用、planB 回退

### 0mv6llckd-6a11440e1d8741748f89e66643
_重要性 2，状态 active，项目 dsh-maid-preset_

教训：老大说"本地和GitHub对账查漏补缺"，不能只比主仓库（git status/rev-list/tags 全平也未必没漏）——必须查三层：①主仓库本体（`git rev-list --left-right --count origin/main...HEAD` + tags + 跟踪文件清单）②同步引擎状态（$DSH_HOME/maid-sync-state.json 的 failCount/nextRetryAt，退避中则记忆已断更）③专用副本（$DSH_HOME/maid-sync 落后提交数 + **是否卡在 rebase 中途**，`git status` 出现 `no branch, rebasing main` 或 `.git/rebase-merge/` 存在即每次 tick 注定失败）。2026-10-13 即靠第三层才发现记忆断更一天（25 条躺本地）。三方对齐验证：副本/本地/`git ls-remote origin main` 三个 HEAD 相等。**第四层（2026-10-13 补）：必须比对 id 集合重叠度，不能只看条数**——本机活库 60 条与远端 118 条 id 零重叠，说明两边装的根本不是同一批记忆，仅看条数会误判为"只是没同步"。

关键词：三方对账、查漏补缺、四层检查、同步引擎状态、maid-sync-state、副本卡在 rebase、rebase-merge、rev-list 差异、id 零重叠、id 集合比对、failCount 退避、记忆断更、ls-remote 验证

### 0mv6oe01m-b0ec6dd519fb4cb083cf8761c0
_重要性 2，状态 active，项目 dsh_

排查 DSH 客户端 UI 元素为何不显示的方法：app.asar 不是目录不能直接 grep，先用自建探针 `D:\DeepSeek Harness\Works\_probe\asar-list.cjs`（列条目）与 `asar-extract.cjs`（抽单文件）把 `@deepseek-ai/dsh-client-*` 的 lib/client.js 抽到磁盘再搜；在源码里找 `return null` 的渲染判据，顺着判据里的 ctx 字段（如 configForms.xxx.enabled）追到提供它的宿主包，最后落回 profile 的 cordis.patch.yml 找真值。

关键词：asar 探针脚本、asar-list.cjs、asar-extract.cjs、客户端插件源码、return null 判据、ctx 命名空间、UI 元素不显示、排查方法、app.asar 不能 grep、_probe 目录

### 0mv6o5dwh-5ff7e5f28e954312ab3dd84afe
_重要性 2，状态 active，项目 dsh-maid-preset_

readRows(srcDb) 的入参是**记忆库文件的完整路径**（如 D:/DeepSeek Harness/Works/.dsh-meow/memory.db），不是工作区目录。误传工作区路径会报 `ERR_SQLITE_ERROR ... unable to open database file`。正确用法：`readRows(join(workspace, PROJECT_DIR || '.dsh-meow', 'memory.db'))`（PROJECT_DIR 从 settings.js 导入）。

关键词：readRows、入参、memory.db 路径、ERR_SQLITE_ERROR、unable to open database file、PROJECT_DIR、dsh-meow、导出脚本、冒烟脚本、node:sqlite

### 0mv6nx5qp-74eb1d3f05e042b1b161e3f6fb
_重要性 2，状态 active，项目 dsh-maid-preset_

写 prompt 文案（含三语言语言包）前，必须先读 meow 的 prompts/README.md：槽位分整文型（自由翻译，保留 {placeholders}）与键值型（`- key: value`，键名一字不改只翻值）；zh 是键集真源，各语言键不能多不能少；promptLang 按目录名逐字匹配（pt 不会解析到 pt-br），无匹配目录静默回落 zh。改完用 buildReflectMessage 之类函数冒烟，并校验各语言占位符数量一致。

关键词：语言包、prompts README、槽位类型、整文型、键值型、zh 真源、promptLang 匹配、静默回落、翻译规范、占位符校验、多语言同步

### 0mv5drmgi-245853b1c1ad4b0bae13c722d6
_重要性 2，状态 active，项目 全局_

教训（2026-10-13 更正）：本会话 bash 工具**确实执行真 bash**（有 head/&&/printf/while/date -u，Windows 路径下 /tmp 不存在需用 D:/... 绝对路径写临时文件）。旧记录「实际执行 PowerShell」已作废。其余仍有效：pwsh 工具名别敲成 pash（手滑白耗轮次）；pwsh 参数挑剔——只传 command/description 裸调用；文件 edit 前必须 read（压缩会吞掉读记录，每次压缩后首次 edit 需重读）。

关键词：bash 真 bash、工具名拼写、pash 手滑、pwsh 参数报错、edit 前必须 read、压缩吞读记录、/tmp 不存在、Windows 临时文件路径

### 0mv6luuph-f44e41e80be146cea8ccab89fa
_重要性 3，状态 active，项目 dsh,dsh-raw-html,dsh-maid-scenery_

教训：装本地开发的 DSH 插件必须用 `link:` 协议而非 `github:`/`file:`——`github:` 每次 pnpm install 重拉 tarball、`file:` 会把源目录内容拷进 node_modules，两者都会把本地改动整包覆盖（raw-html 曾因此出事故）。`link:` 只建符号链接，install 时只重建链接不碰源目录。**卸载要四处清零**：①`pnpm remove -C <profile> <包名> --config.minimumReleaseAge=0` ②`rm -f node_modules/<包名>`（junction 残留）③node 脚本从 `dsh.profile.bundles` 过滤掉包名并从 dependencies 删键 ④grep 三文件（package.json / pnpm-lock.yaml / cordis.patch.yml）核对 0 处残留。**安装三步**：①bundles 补包名（缺了插件不生效）②cordis.patch.yml 视需要补配置段 ③重启 DSH（宿主无热重载）。装卸前先备份 profile 的 package.json 与 cordis.patch.yml（`.bak-<用途>-<时间戳>`）。

关键词：link 协议、本地插件安装、卸载四处清零、pnpm remove、junction 残留、dsh.profile.bundles、cordis.patch.yml、重启 DSH、profile 备份、符号链接、整包回滚、grep 残留扫描

### 0mv6n9ers-98052f6af47a4d9c9db48b7028
_重要性 3，状态 active，项目 dsh-raw-html，被纠正_

教训：判定 dsh-raw-html 的 asar 补丁是否真生效，**不能看 `case"html":return`**——该字面量在 bundle 里出现 8 次，其中 @475394 是文件图标组件的 switch（与渲染无关）；真正的渲染分支在 @636711 的三态化 `case"html":{if(localStorage.getItem("dsh.rawHtml")!=="0"){var _vr=window.__vcpStable&&window.__vcpStable.render(...)`。唯一可靠判据 = 搜 `window.__vcpStable` 与 `window.__vcpGen` 两个标记是否同时在（patch-frontend-asar.cjs L36 V6_MARK + L246 双标记）。另坑：`node patch/install-all.cjs --dry-run` 在未打补丁的 asar 上会**完整执行替换并列出 applied 列表**，只是不写盘——所以 dry-run 的 applied ≠ 已装，别拿它当体检结论。

关键词：asar补丁判定、__vcpStable、__vcpGen、case html 三态化、dry-run 不写盘、install-all.cjs、applied 列表、bundle 锚点、patch-frontend-asar、渲染分支 636711、V6_MARK

### 0mv6my7m1-ef341d6628bb4bd9863e6837e1
_重要性 3，状态 active，项目 全局，被纠正_

老大主动卸载插件 ≠ pnpm 剪包事故。发现依赖/包消失时，必须先问老大或查备份时间线，不可直接判定为事故并擅自装回——小困曾把老大手动卸载的 dsh-llm-fallbacks 误判为 pnpm 事故装回，被纠正。

关键词：主动卸载、误判事故、擅自装回、pnpm剪包、依赖消失、备份时间线、用户意图、被纠正、dsh-llm-fallbacks、插件管理、先问再动

### 0mv5ennqe-676263bfbb06472fa282fefe9f
_重要性 3，状态 active，项目 dsh-maid-preset_

sync.js 空闲钟死锁（2026-10-12 已修复并上线）：lib/sync.js 判定分支曾比 m≠lastSyncedMtime（同步水位）而非上轮观测值，导致每 tick 用 Date.now() 重置 lastChangeAt，due 永远 false——除首启基线外 syncOnce 永不执行，一整天不推送。修复：lastChangeAt=Math.min(Date.now(), m) 锚定库文件最后写入时刻。仿真验证：旧逻辑 15 轮 null，新逻辑静置库第 0 轮到期、刚写库第 9 轮到期。

关键词：sync.js、空闲钟、死锁、lastChangeAt、Date.now重置、syncOnce、不推送、mtime、idleMinutes、仿真验证、已修复

### 0mv5iukon-293fda1140c441b3840382c6a6
_重要性 2，状态 active，项目 dsh_

git 远端操作（push/fetch/ls-remote）直连失败（Recv failure: Connection was reset / 443 超时）时带 `-c http.proxy=http://127.0.0.1:7890` 借道，不动全局配置。注意：代理端口 7890 探测活着≠通道可用——可能首连秒败，用 `curl -x http://127.0.0.1:7890 -o /dev/null -w "%{http_code}"` 验通道（200 即通）后重试 git 命令即成，属瞬断非配置问题。对账用 `git rev-list --left-right --count origin/main...HEAD`（左=远端独有 右=本地独有）。v0.7.0 起插件同步引擎已内置自动代理探测，此处仅适用于手动 git 操作。

关键词：git 远端操作、Connection was reset、http.proxy、127.0.0.1:7890、借道代理、push fetch ls-remote、rev-list 差异、代理瞬断、curl 验通道、github 连通、对账

### 0mv5ldz1j-46cf77a2d5704a39aa3e94234d
_重要性 2，状态 active，项目 dsh-maid-preset_

记忆同步引擎 push 失败会指数退避（failCount 高时卡数小时），/sync/now 返回 409 拒绝手动触发。绕过四步：①主仓库跑 scripts/export-memory.mjs 重导出 memory/ 三件套；②git 带 -c http.proxy 借道提交推送；③把 $DSH_HOME/maid-sync-state.json 的 failCount/nextRetryAt/pushFailed 清零（pending=false、lastSyncedAt=手动推送时刻），引擎即恢复满血待命；④副本 C:\Users\Kayle\.dsh\maid-sync 先 fetch 再 reset --hard origin/main（落后多个提交时否则下次 rebase 冲突）。2026-10-13 实测：断更一天（25 条记忆躺在本地）即由此法补齐，三方对齐验证用 git rev-parse HEAD 对比副本/本地/ls-remote。

关键词：sync 退避、409、failCount、手动导出、export-memory.mjs、maid-sync-state.json、reset hard、记忆同步、push 失败、代理借道、三方对齐、断更

### 0mv6excb8-c54a38239f9b4b519bf45e3275
_重要性 3，状态 active，项目 dsh_

取插件客户端 bundle 的 combo URL 形态是 `/plugins/??<插件id>/client.js&rev=<rev>`（双问号 + & 而非 ?），且 rev 必须用 framedHash 算：sha1 依次 update('plugin-artifact')、'\0'、每个 part 前加 `<字节长度>:`，part 为 [mtimeMs, ctimeMs, size] 的字符串形式，取 hex 前 12 位。小困曾误用 sha1(JSON.stringify(['plugin-artifact',[...]])) → 直接 404 空响应，改回 framedHash 即 200。

关键词：combo URL、plugins 双问号、client.js rev、framedHash、artifactRevision、rev 算错 404、插件客户端抓取、mtimeMs ctimeMs size、sha1 前12位、验证送达

### 0mv6dwfrn-159250be0cfd4db999c41f31a1
_重要性 2，状态 active，项目 dsh_

全量 `pnpm install` 会解析所有依赖，其中 dsh-maid-scenery 走 ssh 协议、dsh-video-skin 走 codeload——网络不通时 lockfile 无法重算。此时可手工编辑 pnpm-lock.yaml 对齐（importers 段写 `specifier:`/`version:`，packages 与 snapshots 段的远程条目删掉），再用 `--lockfile-only --ignore-scripts` 配 git url 改写 + 代理跑一次验证；实测手工改的两行会被 pnpm 保留认可。

关键词：手工编辑 pnpm-lock.yaml、lockfile 手工对齐、importers 段、packages 段删条目、全量 install 卡网络、dsh-maid-scenery ssh、离线验证

### 0mv6dwfr7-46acba80ea374a14b7cfc2c8ad
_重要性 4，状态 active，项目 全局，被纠正_

pnpm 本地目录依赖要选 `link:` 不要 `file:`：`link:` 只在 node_modules 建符号链接指向源目录，install 时只重建链接、永不复制覆盖源内容；`file:` 目录依赖会在 install 时把源目录内容拷进 node_modules，本地改动被复制品遮蔽；`github:`/`git+https:` 每次 install 重拉 tarball，最容易把改动冲光。验证方式：`pnpm install --lockfile-only --offline` 在小样目录里探 lockfile 写法，不必碰真项目。

关键词：link 协议、file 协议区别、本地目录依赖、pnpm 符号链接、install 不覆盖、lockfile 写法、lockfile-only 离线探法、本地改动保护、依赖协议选择

### 0mv4uzoag-7711c300b0284474be9a1a45c6
_重要性 2，状态 active，项目 全局_

pnpm 从 GitHub 装依赖时会走 ssh（`git@github.com:` 这种 scp 语法，不是 `ssh://`），本机没 GitHub 密钥 → `Host key verification failed` exit 128。用一次性环境变量改写：`GIT_CONFIG_COUNT=1` + `GIT_CONFIG_KEY_0=url.https://github.com/.insteadOf` + `GIT_CONFIG_VALUE_0=git@github.com:`。改写后若报 `Connection was reset`，是 https 被墙——再加 `GIT_CONFIG_COUNT=2` 与 `GIT_CONFIG_KEY_1=http.proxy` / `GIT_CONFIG_VALUE_1=http://127.0.0.1:7890` 走本地代理即可通。

关键词：pnpm git 依赖 ssh、Host key verification failed、insteadOf 改写、GIT_CONFIG_COUNT、git@github.com 冒号语法、Connection was reset、http.proxy 本地代理、7890、exit 128、一次性环境变量

### 0mv6d4mjr-8f31642c70eb49dba9c641d062
_重要性 4，状态 active，项目 dsh_

dsh-raw-html 的本地改动曾被 pnpm install 整包冲掉（2026-10-13 三次）——依赖写成 `github:plolpl789/dsh-raw-html`（远程 tarball），市场里点「更新 dshmarket / 卸载皮肤」触发 install 就重新解包覆盖 node_modules，本地编辑全丢。**已修复**：依赖改为 `link:D:/DeepSeek Harness/Works/dsh-raw-html`，pnpm 只在 node_modules 建符号链接指向源目录，install 只重建链接、永不复制覆盖；node_modules 里同时建了 junction。改动面：profile 的 package.json + pnpm-lock.yaml 均已对齐（plolpl789 残留 0 处）。

关键词：pnpm install 覆盖本地改动、github 依赖 tarball 重装、插件市场触发 install、link 协议、file 依赖陷阱、符号链接指向源目录、dsh-raw-html 回滚、node_modules junction、lockfile 对齐、防复发

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

### 0mv66gwar-d5ae4b0490ae49d7be3ca9c624
_重要性 3，状态 active，项目 全局_

给打包好的前端 bundle 打补丁，跨版本升级后老锚点会全部失效（rc.5~rc.7 的 vc/hp、rc.8 的 Xu/jd/Sd 到新版全没了，jsx runtime 别名从 f 变 l、React 从 R 变 j、hp 变 kb）。正确做法：先建新代际符号表（switch 分支、渲染入口、memo 组件逐一定位），再写带唯一性守卫的替换脚本，最后 node --check + 逐字节回读校验。绝不能凭记忆套老锚点。

关键词：前端补丁、锚点失效、符号表、跨代际、bundle 混淆、jsx runtime 别名、唯一性守卫、node --check、逐字节校验、升级覆盖、case html、memo 组件

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

### 0mv637q5z-36d8fbfe642649bc95c1f68741
_重要性 3，状态 active，项目 全局，被纠正_

老大纠正（m03160）：排查/技术汇报时别把大段源码、HTML 当正文堆出来——「小困说人话讲一遍，不用你翻代码」。结论和机制用人话讲，代码细节留给自己查证。

关键词：汇报方式、说人话、不用翻代码、源码堆砌、人话讲解、用户纠正、排查汇报、技术细节、沟通偏好

### 0mv5mv8f7-ebe9c499e7e342b29b8e5aec50
_重要性 2，状态 active，项目 全局，被纠正_

2026-10-13 走神翻车实录：同一轮回复里误调 skill 工具加载 office-xlsx、office-docx 两个 Office 技能（当时任务是插件开发，八竿子打不着），随后又误读不存在的路径 D:\DeepSeek Harness\resources\app.asar.unpacked\dsh\node_modules\@deepseek-ai\dsh-web-app\index.js。未造成文件改动，但白烧两轮。教训：发工具调用前过一遍脑子——这个调用和当前任务有关吗？任务无关的工具调用一条都不要发。

关键词：走神、误调工具、skill 误加载、office-xlsx、office-docx、无关调用、工具调用纪律、翻车、拉回正题

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

### 0mv52mcej-4d72c13f77dd460db1235b6a66
_重要性 2，状态 active，项目 dsh_

新 git clone 的仓库没有 user.name/email，全局也没配时 commit 会报 Author identity unknown——同步代码里用 -c user.name/-c user.email 传身份兜底。

关键词：Author identity unknown、git clone 身份、user.email、user.name、commit 失败、auto-detect email、身份兜底、新克隆仓库、git config

### 0mv51gizq-0520abda50944782b3e81c8da7
_重要性 2，状态 active，项目 全局_

解 asar 三坑：offset/size 是字符串须 Number()，带点文件名须 ['main.js'] 下标访问；node 用 dsh-runtimes 自带的。

关键词：asar、offset字符串、Number转换、下标访问、dataStart偏移、dsh-runtimes、自带node、app.asar解析、bundle文件

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

### 0mv4zbj28-3dba28b886894ee9b9fd93db1a
_重要性 2，状态 active，项目 全局_

memory_remember 返回的 id 是截断前缀，同批多条会显示成同一个 id，易误判为互相覆盖；要验证条数应用 memory_search 查，勿凭回显 id 重写。

关键词：memory_remember、记忆 id、截断、覆盖、同批写入、memory_search 验证、重复写入、记忆工具、id 前缀、回显误导

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

### 0mv4vtt8z-9b3e11043fbd41b1a03bd8887a
_重要性 2，状态 active，项目 全局_

DSH pwsh 命令全报 0xC0000142 时别急着修 ACL：诊断判 NOT_THIS_CLASS 零改动，会话切 danger-full-access 后命令即恢复。

关键词：0xC0000142、DLL 初始化失败、沙箱受限模式、ACL 诊断、NOT_THIS_CLASS、danger-full-access、pwsh 工具、命令失败、保活组

### 0mv4vtt8o-6fcde62dbcbd44d4afeec813b4
_重要性 2，状态 active，项目 全局_

winget 装 PowerShell 7 报 0x80070422（DoSvc 被禁且 Set-Service 无权限），改为 GitHub 直下 MSI + msiexec /i /qn 装成功。

关键词：winget、PowerShell 7、0x80070422、DoSvc、msiexec、GitHub releases、MSI 直装、服务被禁用、安装失败


## 话题（topic）

### 0mv6vwzkt-1742c8733985459994685a5d33
_重要性 2，状态 stale，项目 dsh-maid-scenery_

目标：恢复 scenery 插件被整合砍掉的背景音乐功能，且不把商业版权音频推上 GitHub
2026-10-14 老大报「原先的视频背景音乐没有合并进去」。查因：v0.2.0 整合 vendor 时按版权把 C418 audio 全排除，并把 $DSH_HOME/dsh-video-skin.json 的 background.music 清空、musicVolume 归 0——功能被砍掉，不是单纯没合。修复：①Wet Hands - C418.flac 从 Downloads 回位 vendor/video-skin/assets/（本地自用，不进 git 索引）②配置恢复 music + musicVolume 0.25 ③.gitignore 按扩展名挡音频 ④冒烟那条「vendor 内零 .flac」改成「git 索引零音频 + 本地音乐解析用例」，74 PASS。路由实测 200，刷新页面即可听。
收尾状态：三处改动（.gitignore/README.md/scripts/smoke.mjs，不含音频）尚未 commit，等老大拍板是否推送；原先 4 首 C418 里其余 3 首全盘已找不到。

关键词：背景音乐没合并、Wet Hands 回位、musicVolume 归零、配置被清空、版权排除过头、gitignore 挡音频、冒烟断言改造、74 PASS、tracks 路由 200、刷新即生效、vendor 音频自备

目标：恢复 scenery 插件被整合砍掉的背景音乐功能，且不把商业版权音频推上 GitHub

### 0mv6v6bqf-1d5a39219eee4752bfe755d805
_重要性 3，状态 active，项目 dsh-raw-html,dsh-maid-scenery_

【深蓝空块（老大 m04701/m04842/m05065 报「卡片渲染成一整块直角深蓝空块」）】症状：卡片底色生效、`border-radius` 与子元素全无，左上角一枚错位碎片。已排除：①v6.39 fixVcpBlank 改坏（对真实卡片样本零操作，且 asar 内与磁盘逐函数全等）；②asar 替换夹带污染（新旧段只差 findRootClose 与 v6.39 标记）；③主题 CSS 抢类名（maid-atelier 全局 CSS 全以 `body[data-dsh-maid-atelier]` 打头，无裸类选择器；scenery 自有 runtime 也不碰 vcp/markdown/pre/code）；④素材 404 连锁（404 是立绘素材，与卡片渲染无关，且已修）。
2026-10-13 23:57 重启后**不复现**。若再冒头，切入口：`vendor/maid-atelier/client.js` 的 `installMaidCustomization`（@:1272）与 `releaseClaimedStyles`（@:2129，apply 里挂在 disposer 上），怀疑点在「style 节点被回收 / HMR 重载时旧卡片样式被清」。

关键词：深蓝空块、重启后不复现、卡片渲染异常、直角矩形、旧rev缓存、流式帧残留、installMaidCustomization、releaseClaimedStyles、last-reply.txt、混排自愈已排除

目标：定位并修掉「卡片渲染成整块深蓝空块」的根因

### 0mv68qdea-43a68a413e084661933fc0eac4
_重要性 3，状态 active，项目 dsh-maid-scenery_

目标：修完 maid-atelier + video-skin 融合层的五处界面问题。老大报五处（m02966/m02969）：① 聊天背景面板缺「视频/静态画」切换——scenery 注入失败，根因是它用 .dsvs-knobs（class 选择器）找 id='dsvs-knobs' 的面板，永远 null；② 缺亮色/暗色切换，且两种主题下按钮要能正常显示；③ raw 可信模式按钮与面板圆钮重叠，老大要求默认打开并隐藏掉——**已完成**（v7.3：isTrusted 默认 true、徽章默认不挂载、写 trustedBadge=1 才唤出，送达验证 7/7）；④ 侧边栏展开后按钮消失；⑤ 输入框内图片显示异常。①②根因已定未修，④⑤待查（已排除 scenery 的 CSS，疑 maid-atelier 主题）。

关键词：聊天背景面板、背景画面切换、视频与静态画、亮色暗色切换、可信模式默认打开、隐藏徽章、侧边栏按钮消失、输入框图片显示、scenery 注入失败、选择器根因、dsvs-knobs id、界面问题清单

目标：修完 maid-atelier + video-skin 融合层的五处界面问题

### 0mv63844e-879d7cea673442e38c07932316
_重要性 2，状态 active，项目 dsh_

目标：查明强制刷新后 combo 404 与 bc import failed 的触发方。
强制刷新崩溃已由 asar console.error 补丁压死。combo 404 + billion-context import failed 的触发方**已查明**：老大在 DSH 插件市场点「更新 dshmarket」「卸载 maid-atelier 皮肤」时，dsh-pm 会跑 `pnpm install`（含 failed-run 还原逻辑：还原 package.json+pnpm-lock 后跑 `pnpm install --frozen-lockfile`），每次市场操作重写 profile package.json 并重装依赖 → bc 被整包重解压（mtime 假时间、ctime 轮转）、install-log 落 .dsh-logs 重启即清。副作用已消除：dsh-raw-html 改 link: 依赖后不再被冲。剩余待观察项：bc 版本漂移（磁盘 0.1.195 vs 声明 0.1.196）。

关键词：combo 404、billion-context import failed、pnpm install 触发方、插件市场操作、dsh-pm failed-run、frozen-lockfile、bc 重解压、install-log、刷新崩溃

目标：查明并修复强制刷新后 combo 404 与 bc import failed 的触发方

### 0mv67sjra-07d1d0b3e0db495fbeedeca973
_重要性 2，状态 active，项目 dsh_

dsh-video-skin 浅色发白根因：surfaceLight 0.6 面板糊白 + veilLight 0.098 无纱；已改 0.45/0.22 写 $DSH_HOME\dsh-video-skin.json，刷新即生效。图片不显示：已排除皮肤嫌疑，等老大 Network 取证；另输入框内图片显示异常（缩成一条）与侧边栏展开按钮消失两项待查，疑 maid-atelier 主题。

关键词：surfaceLight、veilLight、浅色发白、dsh-video-skin.json、刷新即生效、图片不显示、Network 取证、透明度旋钮、待排查

目标：老大刷新取证图片请求状态，定位图片不显示根因

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

### 0mv6ttzf0-0360ea716e6440b39939bce427
_重要性 2，状态 active，项目 dsh-maid-vcp_

混排自愈落地后仍需守「一条消息只允许一种格式」——自愈是渲染层兜底，不是混排许可证（规范输出更省事，且避免流式卡闭合那一帧的一次重排）。老大 2026-10-13 原话「不进入记忆，更新进raw里。」定调：这类输出约束要写进插件代码与注入提示词，不能只写进仓库文档。

关键词：一条消息只允许一种格式、混排自愈、规范输出、注入提示词、插件代码约束、不进入记忆更新进vcp、流式卡闭合、渲染层兜底、输出约束落点

### 0mv742egu-6908e93e2cc748ceac6dc962d3
_重要性 3，状态 active，项目 全局_

四件套统一命名规范（老大 2026-10-14 拍板）：包名一律 `dsh-maid-` 前缀——`dsh-maid-preset` / `dsh-maid-scenery` / `dsh-maid-vcp`（原 dsh-raw-html）/ `dsh-maid-comfyui`（原 dsh-comfyui）；workspace 目录、profile 依赖与 bundles 同步改名。`package.json` 的 **description 一律以「DSH 小困插件 · <中文名>：<一句话>」开头**。描述有两个落点，**必须都写**：① 包内 `package.json` 的 description；② **GitHub 仓库的 About**（`PATCH /repos/{owner}/{repo}` 传 `{"description": "...", "homepage": "..."}`，脚本 `_probe/gh-api.mjs`）。曾漏掉后一半，被老大点出「其他两个插件描述好像没补充上」。改名牵连的坑见 lesson 0mv742ehm（directory rename 会让 junction 悬空）。

关键词：命名规范、dsh-maid- 前缀、DSH 小困插件、description 两处、package.json description、GitHub About、PATCH /repos、仓库描述漏写、四件套、统一命名、homepage

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

