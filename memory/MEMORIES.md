# 小困的记忆（导出）

导出时间：2026-10-16T16:58:42.921Z　共 519 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 用户（user）

### 0mv83vecs-4055e7e5644149e3976940a68c
_重要性 2，状态 active_

小困 TTS 音色与朗读落点——desktop profile 的 `C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml` dsh-skin managed 段（注释写 do not edit，实际直接改）：model=mimo-v2.5-tts-voicedesign、voice=冰糖、format=pcm、voiceVolume=0.1、autoPlay=true、音效全 false、maxTextLength=12000、requestTimeoutMs=120000。**readScope 已于 2026-10-15 由 smart 改为 `first-segment`**（备份 cordis.patch.yml.bak-firstseg-20261015-0450）——没写朗读标记也只念首段约 160 字，绝不退回念全文；旧记录「未设=默认 smart」已作废。voiceDesignPrompt 与 voiceDesignCustomPrompt 两处同内容（童声版，2026-10-14 迭代定稿：懒懒的底子+小孩活泼劲、语速偏快、语调起伏明显、抓重点讲话有感情）。presetStylePrompt / instruction 只在 mimo-v2.5-tts 预置音色模式生效，voicedesign 模式不发送。**音色提示词本体是文件与面板两处，面板里的本地值优先**——改文件后要重启，且两边必须一致。会话权限已全开可直接写文件。

关键词：音色定稿落点、cordis.patch.yml、mimo-v2.5-tts-voicedesign、voiceDesignPrompt、readScope first-segment、冰糖、童声版迭代、面板值优先于文件、desktop profile、presetStylePrompt 不生效、首段兜底

### 0mv9yx3jb-a51f9be54bba40eb938cb8a239
_重要性 3，状态 active_

老大在长任务期间要求过程性问题实时上报（m01179 原话）：「期间遇到了哪些问题要跟我说，不能让我干等你发结果。」——跑到一半撞上的报错、失败、卡点、发现的取舍，都要当场说，不许攒到全跑完才一起交付；「等结果」本身就是让他干等。配合既有习惯（卡住时他会喊停要阶段盘点 m01563/0mv8cxid9）使用。

关键词：实时上报问题、不能干等结果、过程性汇报、长任务卡点、跑到一半报错、不许攒到最后、进度同步、遇到什么问题、失败立刻说、汇报节奏

### 0mv9w69b4-09c441a40c6a497c90e94d987b
_重要性 3，状态 active_

老大对「机制该放哪儿」的判断标准：一个功能若属于某个插件的职责，就该写进那个插件本体，靠 asar 临时补丁挂住是次选——原话（m00404）「这个不应该是写进小困的VCP里吗？」。回应这类质疑时不能说「没法放进插件」，要先说清「它已经在插件仓里、只是必须借 asar 挂进宿主渲染链」，再给出可维护性方案。

关键词：机制归属、写进插件本体、asar 补丁是次选、用户原话 m00404、可维护性、宿主渲染链、回答质疑的方式、先解释再给方案

### 0mv9wgq29-764b701715e743dfb529f09b0a
_重要性 3，状态 active_

老大只用桌面端 DSH，web 端完全不需要（原话 m00698：「我只用桌面端，web端完全不需要。」）。含义：凡涉及补丁/皮肤/渲染链路的双端取舍，一律只按桌面端 app.asar 这条路做，web 端分支（`patch/install-v6.cjs`、`patch/patch-frontend.cjs`、`patch/update-v6-inject.cjs`、`patch/trusted-patch.cjs`、profile `web`）不必同步、不必验证，也不用为「两端一致」多花功夫。

关键词：只用桌面端、web 端不需要、桌面端优先、双端取舍、app.asar 路线、install-v6 不必同步、patch-frontend.cjs、profiles web、单端维护、桌面壳

### 0mva06dos-0f042f1e8b3744baacfc17731a
_重要性 2，状态 active_

老大的批准用语极短，一个「动手」或「两个都弄」就是把卡片末尾列出的待拍板项**全部**放行——小困不必再逐项确认，直接按列出的顺序做完并交付。2026-10-16 实例：卡片末尾问了「① 给 preset 加最长等待上限 ② vcp 补 v10.3 文档并提交」，老大只回「两个都弄。」（m00952），小困即动工两件。反例教训：把待办列成开放式问题却不标明「哪几项」时，老大回「都弄」会连带模糊项一起放行。**搭配偏好**：交付要用收口式的完成报告（做了什么、验了什么、要不要重启），别中途反复问。

关键词：动手、两个都弄、批准用语、待拍板项全放行、不再逐项确认、老大指令风格、交付报告、收口式汇报、卡片末尾问什么

### 0mv8ks5ly-f060c5daabf1493785419f6ff9
_重要性 2，状态 active_

UI 改造越做越重、靠截图反复对账收敛不了时，老大倾向一刀收回到原版默认，而不是继续迭代。2026-10-15 实例：ego 侧边栏美化从 issue#70 的 3.5KB 补丁一路长到 45KB（配色/素材复用/金框/生成背景图），每轮只能靠小困出预览图 + 老大截图对比验收，最终老大拍板全清回 0.8.6 原版。启示：这类改动要在体积与验收成本失控前主动收口。

关键词：UI 改造、越做越重、收敛慢、一刀收回、回到默认、补丁体积、截图验收、ego 侧边栏美化、迭代成本、主动收口

### 0mv8g1jhy-8e08b1c7119a4251a11d067921
_重要性 3，状态 active_

老大要求：能自己测的先自己测，别让老大当测试员。原话（m03705）「那现在是修改好了吗？修改好了你自己测试一下。」——交付前先跑一遍能跑的自测（探针/脚本/直接 import 真代码），把结果随交付一起给；只有「运行时行为」那一层（渲染结果、听感、真人操作）才是必须老大看的，且要说清「这一层小困验不了，得你眼睛」。反过来，把没自测过的东西丢给老大去试、或反复请他重启刷新，会被追着问「改好了吗」。

关键词：老大偏好、自己测试一下、交付前自测、别让老大当测试员、改好了吗、先跑一遍再交付、运行时行为只能人看、反复重启刷新、追问进度、验证结论随交付给

### 0mv8exlvz-d100714fa9a14ec4b384071ba6
_重要性 2，状态 active_

老大对展示型网页的验收标准：光好看不够，**必须有交互**，且**配图必须看得清**。原话（m00482）「网站一点交互都没有，整体看下来太单调了。有点时间疲劳」、（m00497）「视觉疲劳」、（m00562）「展示的效果图也不行」。应对方向：滚动进度、打字机、数字滚动、卡片光标跟光、灯箱翻页、可点的演示终端、右下角浮标——让它「活」起来，别做成静态陈列册；配图一律用裁切特写而非整屏截图。小困已在 dsh-maid-plugins 官网落地这一版。

关键词：网站交互、单调、视觉疲劳、时间疲劳、展示型网页、验收标准、滚动进度条、打字机、灯箱翻页、演示终端、静态陈列册

### 0mv8cxid9-6ef1e0eb08324173b2fb4d0fac
_重要性 2，状态 active_

老大在长任务卡住时会喊停要盘点（原话 m01563）：「先暂停，总结下前面的修改。看下现在遇到了什么难题要怎么解决。」——即先给「试过哪些路 / 各自结果 / 真正的难题 / 可选项」的阶段总结，再继续动手；别闷头继续试。

关键词：先暂停、总结前面的修改、遇到什么难题、阶段盘点、长任务卡住、用户原话、工作习惯、给可选项再继续、汇报节奏

### 0mv8cxid3-3e56147f5b9f4ddd896d4e655e
_重要性 3，状态 active_

老大对「改图」类任务的硬约束（原话 m01083）：「只修改它的角和脚问题，其他都不要改。视角、样子都不要变。」——即只动指定缺陷，构图/视角/姿态/背景一律锁定。做不到时必须明说并给替代路线，不许交一张「重画版」充数。

关键词：只修改局部、其他都不要改、视角不要变、样子不要变、改图硬约束、用户原话、图像修改、构图锁定、不动背景、修图要求、不许重画充数

### 0mv87zkhx-39112e5056164d1b8c63216af0
_重要性 3，状态 active_

老大给一张参考图 + 一句「用这个做几个 XX」时，默认期望小困自己认图、自己定场景、直接产出多个变体（本次一口气 6 张），不要逐张确认或先反问要什么风格；产出后收成独立 HTML 画廊页给他看大图。

关键词：做几个、参考图、批量变体、不要逐张确认、自主定场景、出图交付、HTML 画廊页、同人插画、少问多做、老大的出图习惯

### 0mv86ywkp-30b7d4b22a3449fcae5bbe44ed
_重要性 3，状态 active_

老大不接受「只能这样、做不到」的结论，会追问可优化的实验路径。原话（m01114）：「dsh-xiaomi-tts 是可以自定义音色的，拿这三个音色做对比优化自定义音色的词呢？」——小困刚说「样本只能当靶子、要真固定得走本地克隆」，老大立刻找别的优化口子。应对：遇到感知类/不可控的结论，别停在解释，主动给可做实验的方案（改词→抽 N 个→测均值+试听）。

关键词：老大工作偏好、不接受做不到、追问可优化路径、实验对照、对比优化、自定义音色、感知类不可控、给方案不停在解释、拿样本做对照、主动给实验路径

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

### 0mvaxdg40-a41d500251b9400aaa25e1c5d5
_重要性 3，状态 active，项目 dsh-our-free-model，todo_

dsh-our-free-model 待办（截至 2026-10-17 凌晨）：① **codearts 收尾**——403 已修好（bili passthrough 生效，deepseek-v4-flash 经网关 200 出词），v4.1-flash 摘戳重试补丁（pack.js:33217 认裸 "4004"）**等老大第三次重启后经网关验证**；② **13 渠道全量清单收尾**——codearts 修复落地后重跑 ofm-channel-probe.mjs 出最终版；③ Gemini 已定案（换美/日/台出口即通，配置不用改）；④ LobsterAI / ZCode 额度墙等重置，不是待办；⑤ 本地包不含已合并的 #373（standalone UA）与 #347（opencode 免密车道）；⑥ 决定是否把 pack.js 五个补丁（workbuddy 三头 · 11128 前置排除 · codearts content-type · 换号 600ms 间隔 · benefit 裸 4004）同步回 src 源码。已完成：workbuddy 4/4、假风控排除、403=bili 拦截定案并修复、v4.1-flash 摘戳重试补丁落盘。

关键词：待办、codearts 403 未结案、等重启抓响应体、33002 探针、ZCode 额度、LobsterAI 余额查询、Gemini 未接入、三渠道待查、#373、#347、补丁同步回 src、workbuddy 已验收

### 0mvb0sm40-07d158b9a94d470d84b6cce479
_重要性 2，状态 active，项目 dsh-deep-whale，overview_

dsh-deep-whale（新 project）= **鲸鱼娘皮肤系列**：给 DeepSeek Harness Web 界面换主题的皮肤合集，附带一个用来切换皮肤的管理面板。仓：`D:\DeepSeek Harness\Works\dsh-deep-whale`（git 仓）。主要内容：README.md（中/英/越三语）、AGENTS.md、`INSTALL.md`、`TODO.md`、`docs/asset-delivery.md`、`docs/performance-issue-114.md`（性能事故单）。**不属于 dsh-maid-* 命名系列**（四件套命名规范是 dsh-maid- 前缀，这个是独立皮肤项目）。2026-10-16 被纳入老大「所有插件都写问题与解决文档」的范围。**推送权限红线（2026-10-16 实测）**：远端是 Small-tailqwq（小尾）的仓，**Valorine97417 无写权限**——`git push` 被 403 拒（Permission denied to Valorine97417），历史上全走 PR 让小尾合并；**别再试直推**。TROUBLESHOOTING.md 已 commit 在本地 main（f0e9615）待走 fork+PR 或老大转交；该仓无本地 committer 身份的问题已修（git config user.name=Small-tailqwq / user.email=56996438+Small-tailqwq@users.noreply.github.com 已写进仓配置）。

关键词：deep-whale、鲸鱼娘、皮肤系列、DSH 网页主题、皮肤切换面板、AGENTS.md、INSTALL.md、performance-issue-114、asset-delivery、独立皮肤项目

### 0mvb3vr2m-890130c846ff4f688bd7519a5e
_重要性 3，状态 stale，项目 dsh-maid-tts-fix，todo_

【排查结案】2026-10-16 23:0x scenery 卡片被念全文案，结案（老大问「问题解决了吗」后补完取证）：① 逐帧解压会话日志抽出那条 assistant/message 原文（2526 字符、纯卡片、**没写 <!--tts:--> 标记**）；② 用落盘安装件真实补丁函数喂该原文实测：CSS 剥离**零残留**（2526→925）、首段兜底正常（282 字）；③ profile readScope=first-segment 在位。裁决：**不是 vcp 的锅也不是补丁失效**——(a) 22:51 redo 落盘，23:01 播报时 DSH 未重启，内存里还是旧代码（旧 scopedLiveText 不吃标记）；(b) 就算重启了，那条消息没写标记，兜底只会念首段——而卡片消息的首段恰恰就是卡片标题与导语，听起来仍像「在念卡片」。教训：**卡片式回复开头必须写 tts 标记**，否则「只念重点」无从谈起；补丁改完必须重启才算落地。取证脚本留 _acl-recovery/（tts-real-card.mjs 可直接复跑）。

关键词：scenery 卡片被念、排查结案、未重启旧代码、没写tts标记、首段即卡片导语、逐帧解压取证、tts-real-card、卡片回复必须写标记、vcp无锅

### 0mv846pb4-a7a116417137408fbdf2cf2766
_重要性 2，状态 active，项目 dsh-maid-lane-fix，overview_

dsh-maid-lane-fix：处理 Our Free Model 的维护补丁仓（private archived）。**HEAD 实测 3cd6367、package.json 0.3.1**（旧记「58b77b7 / v0.2.0」已过时）。职责：免费车道传输层指纹规范化（UA / stream / tools 四道门）、EAC 补丁与版本联动（基线绑定 v2.3.0）；补丁器是显式 CLI、锚点失配宁可报错也不猜。**EAC 补丁当前为未打状态**——2026-10-16 实测包内 client.js / index.js / src/http.js 的 sha256 与 `baseline/ofm-2.3.0` 原文逐字节一致，`--dry-run` 报「0 处已应用，3 个文件待改」。两个坑：① `.lane-fix-orig/` 的文件名与补丁器命名法不一致（实际叫 `src_http.js` 单下划线，脚本按 `replace(/\//g,'__')` 找的是 `src__http.js` 双下划线）→ `--restore` 缺失检查在动手前就命中、exit 1 整批不滚；② 那份备份是首次落盘那刻的**旧版本**文件（orig client.js `df7666e5…` ≠ v2.3.0 原文 `21c387c6…`、orig src_http.js `2afb523e…` ≠ `43b3cb0a…`，只有 index.js 一致）→ 要回干净原文必须用 `baseline/`，不能用 `--restore`。补丁留在位，解封条件=opencode 更新后再评估。

关键词：lane-fix、EAC 补丁未打、baseline/ofm-2.3.0、lane-fix-orig 命名不一致、src_http.js 单下划线、--restore 失效、备份是旧版本、HEAD 3cd6367、0.3.1、免费车道传输层指纹、补丁器显式 CLI、归档状态、解封条件

### 0mvaxdce5-35c6e5c3565c46d6b2f38e2806
_重要性 2，状态 active，项目 dsh-our-free-model，ops_

探测 dsh-our-free-model 渠道模型的正路：直连本机 OpenAI 兼容网关 http://127.0.0.1:8326/v1/chat/completions（key 在 C:\Users\Kayle\.dsh\openai-gateway\api-key），模型名带渠道前缀（如 workbuddy/hy3）。探测脚本 D:\DeepSeek Harness\Works\_probe\ofm-channel-probe.mjs（--only/--conc/--timeout；CAP 默认 Infinity=全量），清单落 ofm-models.json、结果落 ofm-channel-probe.json。**实际生效的插件是软链**：C:\Users\Kayle\.dsh\profiles\desktop\node_modules\dsh-our-free-model → D:\Downloads\dsh-our-free-model-2.1.0（目录名 2.1.0 但内部 package.json 已是 2.3.0，非 git 仓）。改 pack.js 前备份为 pack.js.bak-<用途>-<YYYYMMDD-HHMMSS>（已用：bak-ofm-patch-20261016-200606=workbuddy 双闸门、bak-codearts-sig-20261016-201657=content-type 签名、bak-false-risk-20261016-202625=假风控 11128 排除、bak-codearts-diag-20261016-204044=响应体探针），补丁需重启 DSH 才生效；改 pack.js 时须同步改 vendor/channel-pack/src/ 下对应 .ts 源码。

关键词：探测正路、8326网关、openai-gateway api-key、ofm-channel-probe.mjs、插件软链路径、dsh-our-free-model-2.1.0、pack.js 备份命名、bak 台账、补丁需重启、同步改 src ts、node_modules 软链

### 0mvaxdcdn-dac1537b30554e6ca4ad6c5d43
_重要性 2，状态 active，项目 dsh-our-free-model，structure_

dsh-our-free-model 本机结构：profile 装的是 junction → D:\Downloads\dsh-our-free-model-2.1.0；实际生效的是构建产物 vendor/channel-pack/pack.js 与 index.js/client.js。插件数据目录 C:\Users\Kayle\.dsh\our-free-model\（availability.json=免密车道可用性、catalog.json、stats.json——**只统计免密车道，不含 13 渠道**、settings.json、rollback/）。渠道凭据在 C:\Users\Kayle\.dsh\.credentials.yaml 的 refs 段，键名形如 <渠道>_ACCOUNT_<8位十六进制>（如 WORKBUDDY_ACCOUNT_4EDE4E54）。

关键词：数据目录、our-free-model、availability.json、credentials.yaml、refs 段、ACCOUNT 键名、rollback、stats.json、catalog.json、凭据落点

### 0mvaxdcd6-423c35ca576c43b1b9663bc5d2
_重要性 3，状态 active，项目 dsh-our-free-model，overview_

dsh-our-free-model（GitHub: Ebony-Vinyl/dsh-our-free-model，MIT）是 DSH 的免费模型插件：13 个账号渠道（CodeArts 华为云 / buddy CodeBuddy 国内版 / workbuddy 国际版 / lobsterai / qoder / qodercn / trae / cline / loomy / raccoon / minimax / zcode / gemini Google Code Assist）+ 匿名免密车道 + EAC 协付渠道，含账号池、积分领取、本地 OpenAI 兼容网关与局域网转发、数据看板。2026-10-16 老大任务（m00004 原话）：「白嫖模型接入里有13个平台，里面模型我基本上都用不了。你先探测给他们的模型都跑一下，先看下 issues 里有没有关于白嫖模型接入相关的补丁可以用上或尝试修复」。

关键词：15个渠道、白嫖模型接入、免费模型插件、Ebony-Vinyl、账号池、免密车道、EAC 协付、OpenAI 网关、积分领取、13个平台、模型用不了

### 0mva8dqsu-b2c343f1d5ac411eb1f432de73
_重要性 3，状态 active，项目 dsh-maid-vcp，structure_

dsh-maid-vcp 的提示词层与行为约定：`lib/index.js` 注入【输出纪律】等段落（discipline = 一切视觉内容必须直接输出裸 HTML 到正文、禁止代码围栏包 HTML、禁止写 .html 文件再给路径、只有明确要求导出才落文件）；提示词层与宿主路由的改动走「重启 DSH」生效。另有两条能力级事实：① 可信渲染门 `if (window.__DSH_TRUSTED__ === false) return false`（client.js），渲染信任默认开；② 客户端与宿主通信的现存样板——同源 HTTP 拉取（`window.fetch('/vendor/...')`）、`ctx.get('connection')` 取连接对象、定义 `window.__dshInput(text)` 供 HTML 按钮回调（交互只用 `onclick="input('...')"`）。哲学条目（DESIGN.md）：输出纪律优先于装帧、正文与装帧一次成型、思考最小化、美学检索是唯一允许的工具调用。

关键词：vcp 提示词层、输出纪律注入、裸 HTML 正文、禁代码围栏、禁写 html 文件给路径、可信渲染门、__DSH_TRUSTED__、dshInput 回调、同源 fetch 样板、思考最小化、装帧一次成型

### 0mva8dqsd-9d3518b5bb9b4c94b2803145f3
_重要性 3，状态 active，项目 dsh-maid-comfyui，ops_

dsh-maid-comfyui 的装配与构建要点（踩过坑的都在这）：`dsh.bundle.patch = ./cordis.patch.yml`，**装配三处名字必须一致**（npm 包名 = cordis.patch.yml 的 name = client bundle 注册 id），宿主半边 `inject=['tools']`。构建**不能用 pnpm/npm run**（PATH 无 npm），直跑 `./node_modules/.bin/tsc -p tsconfig.json` + `./node_modules/.bin/tsdown -c tsdown.config.mjs` 出 `lib/` + `client/client.js`；`pnpm install` 必须加 `--config.minimumReleaseAge=0`（否则撞 billion-context 的 ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION）；离线自测 `node scripts/test-{store-params,skillpack,transfer,convert,launch,idle}.mjs`。生效边界：改 `src/*.ts` 要重启 DSH，改 `src/client/*` 刷新页面即可。面板底色固定 `var(--dsc-panel-surface, #121f41)`；宿主 Windows 标题栏拖动区会吞点击，toast/浮层必须补 `-webkit-app-region: no-drag`（CLAUDE.md 契约 16）。重启后验收：`/comfyui/ping` 200、`/comfyui/workflows` 200。

关键词：comfyui 装配要点、三处名字必须一致、inject tools、不能用 npm run、tsc 加 tsdown、minimumReleaseAge 0、test-*.mjs 自测、改 ts 要重启、面板底色 dsc-panel-surface、no-drag 契约16、comfyui ping 验收

### 0mv9jdzal-c0cd2b4604a746f6909010f001
_重要性 2，状态 active，项目 dsh-maid-scenery，structure_

dsh-maid-scenery 的目录与落点索引（改样式/逻辑只动这几处）：`vendor/maid-atelier/`（主题全量，入口 index.host.js 注册 `/skin-assets/maid-atelier/<sha256>.png|webp` 静态路由 + client.js 用 body.style.setProperty 挂 20+ 个 `--maid-*-art` 素材变量，同 document 的后代可直接 var() 继承）；`vendor/video-skin/`（视频层，宿主 index.host.js 定义 `ROUTE_PREFIX='/dsh-video-skin'`、TRACKS_ROUTE/CONFIG_ROUTE/OVERRIDE_ROUTE，lib/config.js 的 `OVERRIDE_KEYS=['surface','surfaceLight','veil','veilLight','musicVolume']` 且 loadConfig 每次请求重读文件）；`runtime/scenery.{css,js}`＝**本包唯一改造点**（css 段落地图 A 透明底 / B 静态画淡出 / B2 视频让位 / D 面板行 / E 亮色瓷白 / F 圆钮可拖 / G 顶栏右栏[已放弃留档] / H 深色锁定；js 段 ②画面模式 ③音乐行 ④setupKnobs ⑤setupDarkLock **须在 `if (tryMount()) return` 之前调用**）；`client.js`＝双段结构（本包段 + 随包 maid-atelier 客户端全量段，两段都包了 try/catch）；包根自曝 `skin.json`（package 字段=dsh-maid-scenery，wiring.id=maid-scenery）让皮肤管理器认得出。关键 DOM 锚点：对话列 `[class*='centerCol']`（兜底 `[data-slot='conversation.session']`）、侧栏 `.BynINW_sidebarCol`、面板与圆钮 vendor 只给 id（`dsvs-knobs` / `dsvs-knobs-pill`，必须 getElementById）。

关键词：scenery 目录索引、vendor maid-atelier、skin-assets 静态路由、maid-art 素材变量、ROUTE_PREFIX dsh-video-skin、OVERRIDE_KEYS 五键、runtime 唯一改造点、setupKnobs 调用位置、skin.json 自曝、centerCol 锚点、dsvs-knobs id

### 0mv9jgose-d748aa8f1a8a4ec0a1f4bc2d28
_重要性 2，状态 active，项目 dsh-maid-tts-fix，structure_

dsh-maid-tts-fix 工程结构（v0.6.3）：`lib/edits.js` 记补丁意图（23 条编辑 / 4 组，锚点 + expect 次数；执行时全有或全无、幂等）→ 产物 `patches/dsh-xiaomi-tts@3.0.8.patch`（23587 字节 / sha256 `4f89e11a6e4e3f31…` / 31 条重放编辑）；`lib/selfcheck.js` 7 条 APPLIED_MARKERS 判据；`scripts/patch.mjs` 六子命令 list/install/verify/remove/upgrade/redo；`voice-refs/`（prompt.md + README.json，wav 不入库）。四组编辑：①`style-helpers`（两文件各 1）插常量 + `stripTtsStyleBlocks()`；②`style-wire` 接上 strip；③`spoken-override`（`applyTtsPlaybackScope` 里的标记提取）；④`spoken-override-entry`（仅 client.js，挂 `messageText` 清洗之前）；另有 `session-owner` 系列（playbackOwnerId、跨会话播报的 remoteSessionId/ownsSession/playRemote）。`planEdits` 对 expect>1 用 split/join 全量替换。**九项能力**：念 CSS 修复 / 标记只念重点 / 切会话不打断 / 跨会话自动播报 / 反思轮不念改念上一条 / 标记收尾容错。行为探针 `_probe/tts-switch-probe.mjs`（20 用例）、`_probe/tts-spoken-probe.mjs`。版本演进 0.4.0 → 0.5.0 → 0.6.2 → **0.6.3**。渲染侧配套看 dsh-maid-vcp v6.42+。

关键词：tts-fix 结构、edits.js 意图层、23 条编辑 4 组、selfcheck APPLIED_MARKERS、patch.mjs 六子命令、voice-refs 音色层、四组编辑清单、tts-switch-probe、版本演进到 0.6.3、渲染侧配套 v6.42

### 0mva8de7r-52be239bee8b432c82501969b2
_重要性 2，状态 active，项目 dsh-maid-tts-fix，quotes_

dsh-maid-tts-fix 的三条需求原话（实现依据）：① 改动的落点（m00568）「改，会进tts-fix里面吗？xiaom-tts升级的话，从补丁里重新打回来。」——跨会话自动播报这类改动一律写进 `lib/edits.js`（意图层），再 `node scripts/patch.mjs redo` 重出补丁正本；上游发新版走 `patch.mjs upgrade`。绝不手改 node_modules。② 反思轮跳过（m01068）「如果最新一条是记忆反思任务就改为念上一条。」③ 该判据上线后立刻被打回（m01636）「还是会读[meow-memory-reflect] 记忆反思任务，而不是上一个任务结束输出。」——这是「判据类改动必须先拿真实运行时数据验证」这条教训的触发点（0.6.2 才真正修好）。

关键词：tts-fix 需求原话、改动进 edits.js、patch.mjs redo、upgrade 重打补丁、绝不手改 node_modules、反思轮改念上一条、判据类改动要真数据验证、被打回原话

### 0mv9jfjrn-18ae553bc0e2459d8903cf0778
_重要性 2，状态 active，项目 dsh-maid-comfyui,全局，quotes_

老大关于「用主题素材当生成参考」的方法论（m02767：「可以那主题界面的素材做生成参考图。」；m03939：「不应该是解析左边主题界面素材，拿到提示词和获取真实的像素尺寸。让comfyui 生成一样的ui素材来使用吗？」；m03962：「真实像素尺寸是获取我们要修改地方的像素尺寸，不是素材的像素尺寸。」）——给界面做美化素材时：解析主题自带素材（maid-atelier 的蕾丝/蝴蝶结/边框）反推提示词、量「待改区域」的渲染尺寸，再让 ComfyUI 按此生成同款 UI 素材，保证与皮肤同源。**注意**：素材复用到别处优先纯 CSS 复用（m03734/m03743「不是生图，是编辑」「生图除非不破坏原有的样子」），生图只在本法之下用。（ego 侧边栏那轮美化已按 m05093 全清，本条作为方法论留档。）

关键词：主题素材当参考、解析素材反推提示词、待改区域渲染尺寸、ComfyUI 生成同款 UI 素材、与皮肤同源、不是生图是编辑、优先纯 CSS 复用、maid-atelier 素材、美化素材方法论

### 0mv8biewq-d69f51a4cd9a4c3da2c368a40e
_重要性 3，状态 active，项目 dsh-maid-patch-kit，ops_

dsh-maid-patch-kit 的运维要点：已接入本机 desktop profile（package.json dependencies 写 `"dsh-maid-patch-kit": "link:D:/DeepSeek Harness/Works/dsh-maid-patch-kit"` + bundles 加项 + cordis.yml 挂载行）。**缺包安装自带**：`scripts/patch.mjs install` 后体检发现 missing-file 会逐个 `pnpm add <包名>@<版本>` 重新解析再自动 verify（新机器首装要联网走 npm registry）。**固化流程**：改 profile node_modules 目标文件 → 重做 diff → 拷进 `patches/` → 同步 `lib/selfcheck.js` 的 APPLIED_MARKERS → install → commit + 带代理推送。pnpm 不在 PATH，用 `node "D:/DeepSeek Harness/resources/runtime/pnpm/bin/pnpm.cjs" install`；`.venv` 被 pnpm 重铺删掉时跑 `node scripts/venv.mjs` 重建。推送必须带代理：`git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 push origin main`（直连报 `Recv failure: Connection was reset`）。

关键词：patch-kit 运维、link 接入 desktop、install 自带缺包安装、固化流程五步、APPLIED_MARKERS 同步、pnpm 不在 PATH、venv.mjs 重建、推送必须带代理、7890 代理、npm registry 首装

### 0mva7v8ne-98179ba5112f4114a3f01b7329
_重要性 3，状态 active，项目 dsh-maid-preset，ops_

dsh-maid-preset 的记忆同步引擎现状（v0.7.5，2026-10-16）：`lib/sync.js` 每 60s 轮询活库 mtime，**空闲 10 分钟**（idleMinutes）或**距上次成功推送满 60 分钟**（maxWaitMinutes，长会话兜底）即导出并推 GitHub；到期判定收在纯函数 `computeDue(cfg, state, now)`（三路 idleDue / maxWaitDue / retryPush，退避期间不被顶穿）。文件落点：配置 `$DSH_HOME/maid-settings.json`（repoUrl / idleMinutes / maxWaitMinutes / enabled / minImportance）、状态 `$DSH_HOME/maid-sync-state.json`（failCount / nextRetryAt / fatalReason 一族）、日志 `$DSH_HOME/maid-sync.log`、工作副本 `$DSH_HOME/maid-sync`（专用克隆，**必须有仓库级 git 身份**否则永久暂停）。上船门槛在 `lib/export.js` 的 `exportWhere()`：archived 不上船、importance < minImportance（默认 2）不上船，写 memory.db / memories.json / MEMORIES.md 三件套。紧急手动补推：`_probe/mem-sync-now.mjs`。设置页可热改上述字段（0~10080 分钟）。**远端长期由「记忆自动同步」提交持续推动**（只动 memory/ 三件套），本地改代码推送前先 `pull --ff-only`。

关键词：记忆同步引擎、sync.js 60s 轮询、空闲10分钟、maxWait 60分钟、computeDue 纯函数、maid-settings.json、maid-sync-state.json、exportWhere 门槛、minImportance 默认2、三件套上船、mem-sync-now 补推、推送前 pull ff-only

### 0mv9jgov0-653617f7db044fec88e98dd6e8
_重要性 3，状态 active，项目 qwen-image-dsh，overview_

qwen-image-dsh（本地生图支线，2026-10-14 起）：目标是**本机出图 + 在 DSH 对话里给提示词出图**，全程不走云服务。**模型正本 = `D:\ComfyUI_windows_portable\ComfyUI\models\`**（diffusion_models/qwen_image_2.1_int8_convrot.safetensors 6.76 GB、text_encoders/ 下 qwen3vl_8b_fp8_scaled 9.86 / int8_convrot 8.71 / nvfp4 5.87 + 两份 PE t2i…w4a8 与 i2i…w4a8 各 6.26、vae/qwen_image_2.1_vae_bf16 0.63）。**2026-10-15 更正**：曾有 `Works\QwenImage-2.1models` 那套，实为与 ComfyUI 侧**硬链接同一份数据**（链接数全 2），从未额外占空间；老大拍板删掉 Works 侧目录（其 workflows 副本与 ComfyUI 侧 MD5 相同，已备份 `_probe\qwen-workflows-backup-20261015.zip`）——模型从此只由 ComfyUI 侧持有，**不再需要「挂载」这一步**。引擎 = ComfyUI 便携版 `D:\ComfyUI_windows_portable`（v0.39.0，Python 3.13.14 embedded，PyTorch 2.14.0+cu130，监听 127.0.0.1:8188）；工作流副本 `mine_qwen_image_2_1_t2i.json` / `_image_edit.json` 在 `ComfyUI\user\default\workflows\`；成图输出真身在 `ComfyUI\output\`（**不是** ComfyUI/ComfyUI/output）。桥接 = fork 出的 dsh-maid-comfyui（link 进 profile，用它那套 Agent 工具 + 面板）。机器 RTX 5060 / 8 GB；系统 Python 3.14.7 别用；解压工具 `D:\Downloads\7zr.exe`。

关键词：qwen-image-dsh 定位、本地生图走 ComfyUI、模型正本 ComfyUI models、硬链接同一份数据、Works 侧已删、qwen_image_2.1、ComfyUI 便携版路径、工作流 json 位置、output 真身、dsh-maid-comfyui 桥接、不再需要挂载、免云服务出图

### 0mva8clwj-ff3fb21c28c743a683ad7ea75a
_重要性 3，状态 active，项目 jasna，overview_

jasna（AI 去码/修复工具，作者 Kruk2；Windows 冻结版由 QingLiu2333 侧分发）：本机的视频放大 / 补帧 / 长视频修复工具。**目标：在保画质（不丢质量、马赛克修复后清晰）前提下，让 LTX 在本机不爆显存/内存地跑完长片。** 现状（2026-10-16）：0.11.1 Windows 冻结版已装在 `D:\Downloads\jasna-windows-0.11.1`（约 27 GB，PyInstaller 目录，启动自校 19444 个文件；上游官方 releases 最高仍只到 v0.10.0）。int8 预设已锁定为 1080P 最佳预设；三档难度测试跑完（5 跑 4 过 1 挂，唯一真 4K 在 compose 阶段挂、缺口仅 36.5 MB）；**当前进行中：2 小时长片整片验证**（老大 m01660，验耗时与稳定性）。硬件：RTX 5060（sm120 Blackwell，8151 MiB）、驱动 617.14、RAM 31.06 GiB、pagefile 已扩 16 GB（提交上限 47.06 GiB）。磁盘：C 173.6 / D 40.5（紧张）/ E 363.5 GB。**两道硬墙**：① 显存——`ltx_large_canvas` 需 12 GB 空闲否则静默回落 512px（只打 `restoring large mosaics at 512 px` 警告，不报错）；② 4K——compose 阶段 VAE 解码缺口 36.5 MB（内存墙已靠 pagefile 拆掉）。NVIDIA 系统内存回退（Sysmem Fallback）官方推荐 Prefer No，开了也救不了 4K。**下一步**：搬入 nvfp4 模型（7.73 GB 仍在 `D:\Downloads\` 根目录）测 Fast mode 一档，待老大点头。

关键词：jasna 定位、AI 去码修复、Windows 冻结版 0.11.1、LTX 长片、保画质前提下不爆显存、RTX 5060 8151MiB、512px 静默回落、4K compose 缺口 36.5MB、pagefile 16GB、int8 1080P 最佳预设、2 小时长片验证进行中、nvfp4 Fast mode 待点头

### 0mva7vq9r-27849ff387bc4e3aae973b71c9
_重要性 3，状态 active，项目 dsh-maid-scenery，overview_

dsh-maid-scenery（`D:\DeepSeek Harness\Works\dsh-maid-scenery`，远端 Valorine97417/dsh-maid-scenery **私有**，v0.2.2）：给小困换皮——maid-atelier 皮肤 + 背景视频/音乐 + 圆钮拖动吸附，把主题与视频层**整合进一个包**（老大 m03942 拍板「全整合」：约 30MB vendor 全进来、排除 flac，双许可 + 署名链，profile 只剩 scenery 一个包；理由 = pnpm `blockExoticSubdeps` 禁 git 协议子依赖、主题只能降 optional peer，「装一个包」否则永远做不到；设计约束 = 只推 kind:'style'/'script'，**绝不推 script-src**（会打掉 `__DSH_BOOT_READY__` 让应用起不来），vendor 零修改、改动全落在 runtime/ 融合层）。**结构**：`runtime/scenery.css|js` 走宿主 `webserver/index-inject` 融合层；`client.js` 客户端插件；宿主 `index.js` 提供 `/dsh-video-skin/tracks/<文件名>` 等路由；音乐正本＝`$DSH_HOME/dsh-maid-scenery/music/`（启动幂等同步 + 硬链接镜像回包内 assets），配置 `$DSH_HOME/dsh-video-skin.json`。**生效边界**：改 runtime 注入行 → 必须重启 DSH（注入表只在启动时收集一次，F5 无效）；改 client.js → 硬刷新即可；宿主 index.js 新增路由 → 重启。**界面卡死保命**：把 profile package.json 的 `dsh.profile.bundles` 里 "dsh-maid-scenery" 删掉再重启即回原生界面。皮肤设置落地链：scenery 自己 `readManagedPreferences` 读 localStorage 兜底 apply（0.2.1 起），卸掉 skin-manager 也保住设置。冒烟 `node scripts/smoke.mjs`（110 PASS）+ drag-smoke（20 PASS）。装法 `link:D:/DeepSeek Harness/Works/dsh-maid-scenery`。

关键词：dsh-maid-scenery 定位、maid-atelier 主题整合、视频背景音乐、全整合决策、blockExoticSubdeps、绝不推 script-src、runtime 注入行要重启、client.js 硬刷新、bundles 删项保命、readManagedPreferences 兜底、音乐目录 DSH_HOME、冒烟 smoke.mjs

### 0mva7vq97-edc3b91bb4e04282b1b0521b6b
_重要性 3，状态 active，项目 dsh-maid-comfyui，overview_

dsh-maid-comfyui（`D:\DeepSeek Harness\Works\dsh-maid-comfyui`，远端 Valorine97417/dsh-maid-comfyui **私有**，v0.5.5）：把本机 ComfyUI 接进 DSH——侧栏面板 + 工作流库 + API 工作流执行 + 4 个 Agent 工具。基线取上游 smallmj/dsh-comfyui 的 **PR18 head**（remote: origin=自有私有仓、upstream=PR 分支镜像；克隆/推送走 ghproxy，github 直连不通）。**结构**：`src/*.ts` 宿主侧（改完要重启 DSH）→ 编译产物 `lib/`；`src/client/*` 客户端（改完刷新页面即可）→ `client/client.js`；`lib/proxy.js` 提供唯一能吐图片字节的同源路由 `/comfyui/media?file=X&subfolder=&type=output`（**VCP 卡片配图只能走它，因为 GUI 在 dsh-app:// 下禁网**）；`src/launch.ts` + `POST /comfyui/launch` 一键启动（`launchCommand` 预填便携版 `run_nvidia_gpu.bat`，detached 不随 DSH 死，90s 轮询、10s 冷却，触发点只有面板 ⏻ 与跑工作流前的 ensureServer）。**生命周期已收敛**（197c931，老大 m00617 需求回退）：打开面板不再自动拉起、⏻ = 手动启停（先重读 `/comfyui/config` 的 `serverState.armed`：已武装→确认后 `idle/stop`，未武装→`launch`）；**空闲计时兜底与 `idleShutdownMinutes` 已彻底删除**（config/设置页/i18n/redact/README ×2 全清），只保留「会话任务结束即关」；连接失败提醒条只报原因并指路 ⏻（不再放启动按钮）。**构建**：不能用 pnpm/npm run（PATH 无 npm），直跑 `./node_modules/.bin/tsc -p tsconfig.json` + `./node_modules/.bin/tsdown -c tsdown.config.mjs`；`pnpm install` 须加 `--config.minimumReleaseAge=0`；离线自测 `node scripts/test-*.mjs`。装配三处名字必须一致（npm 包名 = cordis.patch.yml 的 name = client bundle 注册 id）。面板底色固定 `var(--dsc-panel-surface, #121f41)`；toast 与浮层要补 `-webkit-app-region: no-drag`（宿主标题栏拖动区会吞点击，CLAUDE.md 契约 16）。

关键词：dsh-maid-comfyui 定位、PR18 head 基线、ghproxy 克隆推送、comfyui media 路由、launch.ts 一键启动、serverState.armed、空闲计时已删、会话结束即关、no-drag 契约16、tsc 加 tsdown 构建、三处名字必须一致、面板底色 121f41

### 0mva8bnpy-13e90eacce2e4de09c3e9a03f4
_重要性 3，状态 active，项目 dsh-maid-vcp，decisions_

dsh-maid-vcp 的两组硬约束（都已写进插件代码与注入提示词，不只写在文档里——老大 2026-10-13 原话「不进入记忆，更新进raw里。」）：① **依赖与安装必须走 `link:`**——link 只建符号链接永不覆盖本地改动；`file:` 会拷进 node_modules 遮蔽源码；`github:` 每次 install 重拉 tarball（这正是本插件整包回滚事故的成因）。lockfile 手工对齐：importers 段 specifier/version 写完整 link: 路径，删掉 packages/snapshots 里的 tarball 条目；node_modules 用 junction 指向源目录，改源码即时生效。② **卡片图片必须同源**（0.6.10，commit 2f38c96）——图片 src 只能写同源相对路径（如 `/comfyui/media?file=X&type=output`），写 http(s) 外链或 `file://` 会静默失败（GUI 跑在 `dsh-app://` 下禁网）；DESIGN.md §4 第 11 条、README/README.en 常见坑节、VCP-INTERACTIONS.md 第 5 条「白名单放行 ≠ 能加载」均记。③ **混排戒严令已废除**（0.6.9）——补丁 v6.39 混排自愈线上实测通过（卡片+表格+加粗+列表全正常），注入提示词第 5 条改为「混排已解禁 + 现行建议」：说明文字尽量写进卡内（流式中间帧容器未闭合时仍有一次重排），纯卡片后接 Markdown 时保留分界空行。长期观察项：上游 plolpl789 若复活，需决定是否回并本地那四项修复。

关键词：link 不能换 file github、整包回滚事故、lockfile 手工对齐、junction 指向源目录、卡片图片必须同源、comfyui media 路由、外链静默失败、混排戒严令废除、v6.39 混排自愈、卡内写说明文字、上游复活回并观察

### 0mva8bnpe-1d43d47c6d4340398174093324
_重要性 3，状态 active，项目 dsh-maid-vcp，overview_

dsh-maid-vcp（v0.6.14 / asar 补丁器 v10.3，commit afda565）＝ VCP 视觉通感协议插件：让消息里的 HTML 真正渲染成界面（含 SVG / Mermaid / KaTeX）。**目录仍是 `D:\DeepSeek Harness\Works\dsh-raw-html`，远端 Valorine97417/dsh-raw-html**（2026-10-15 原地改名，旧地址自动重定向、历史与 star 保留）。上游 plolpl789/dsh-raw-html 已停更，本仓是接管维护的本地分支，含上游没有的四项修复：美学面板「共 0 个风格」、面板按钮 hover 白底白字、可信模式默认开启、风格库只留 abyss-maid。三层结构：① `lib/index.js` 提示词层（注入输出纪律）+ 宿主路由；② `lib/client.js` DOM 层（面板按钮 + MutationObserver，**够不着 Markdown→React 转换链**）；③ `patch/*` asar 补丁层——`install-all.cjs`（幂等 / `--dry-run` 体检）→ 把 `window.__vcpStable.render` 塞进宿主 `case"html"` / `case"code"` / `case"inlineCode"` 分支，`v6-inject.js` 是渲染正本。**生效边界**：改提示词或宿主路由 → 重启 DSH；改 client.js → 硬刷新；**改 asar 层必须完全退出重启**（头被进程缓存）。状态文件 `.dsh/dsh-maid-vcp-state.json`；`localStorage['dsh.rawHtml']` 一族焊在补丁里，绝不能改；原条目备份 `Works/_asar-backup/`。web 端补丁器有意不同步（老大只用桌面端）。

关键词：dsh-maid-vcp 定位、视觉通感协议、目录仍叫 dsh-raw-html、接管上游 plolpl789、四项本地修复、asar 补丁器 v10.3、case html code inlineCode、v6-inject 渲染正本、生效边界三条、必须完全退出重启、rawHtml localStorage 别动、web 端不同步

### 0mv4z8jy6-ed25831b992a4555b28c2630c0
_重要性 2，状态 active，项目 dsh，ops_

DSH 插件安装方式（ops 要点）：多数插件是 codeload tarball / git clone 下来的本地产物，用 profile 的 `package.json` 以 `link:` 协议挂进 `C:\Users\Kayle\.dsh\profiles\desktop`，再进 `dsh.profile.bundles` 才启用。四件套已统一改名（2026-10-14）：`dsh-maid-preset` / `dsh-maid-scenery` / `dsh-maid-vcp`（原 dsh-raw-html）/ `dsh-maid-comfyui`（原 dsh-comfyui，目录 comfyui-src）；另有 dsh-posterflow-ai / dsh-video-skin / dsh-our-free-model / billion-context / dsh-maid-guard / dsh-maid-patch-kit / dsh-orb / dsh-video-understand 等。**pnpm 要点**：profile 用 11.7.0（不在 PATH），`pnpm-workspace.yaml` 设 `nodeLinker: hoisted` + `autoInstallPeers: false`；装着 billion-context 时 `pnpm install` 需加 `--config.minimumReleaseAge=0`，否则撞 `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION`。`patchedDependencies` 里挂着 dsh-video-understand@0.5.2 与 dsh-xiaomi-tts@3.0.8。

关键词：插件安装方式、link 协议、profiles/desktop、四件套改名、nodeLinker hoisted、autoInstallPeers false、minimumReleaseAge 豁免、patchedDependencies 两项、codeload tarball、已装插件清单

### 0mva8b4q4-d2c41cc6bc3440ccb5aca16e57
_重要性 3，状态 active，项目 dsh，overview_

【DSH 桌面端本机环境总览（做任何 dsh 相关活之前先看这条）】宿主 `@deepseek-ai/dsh-desktop@0.2.0-rc.2`（Electron 44 / node 24，内嵌 web 客户端栈），asar 在 `D:\DeepSeek Harness\resources\app.asar`（读内部文件必须先 extract，直读会报 BigInt 错）。**启动形态**：Electron 壳跑 `dsh-desktop-host/lib/index.js`，参数序 = dsh 根 / profile 目录 / runtime / pnpm.mjs / bin；不跑 `dsh web`。profile = `C:\Users\Kayle\.dsh\profiles\desktop`：**唯一激活清单是 package.json 的 `dsh.profile.bundles`**（光进 node_modules 不算启用），挂载行落在自动生成的 `cordis.yml`，权威 patch 层是 `cordis.patch.yml`（改完约 3 秒重生成 cordis.yml，verifying 看它；desktop profile 不能用 CLI dump 配置）。pnpm 11.7.0 不在 PATH，用 `D:\DeepSeek Harness\resources\runtime\pnpm\bin\pnpm.cjs`。Works（`D:\DeepSeek Harness\Works`）下的小困插件仓全部以 `link:` 接入、node_modules 里是 junction——**源码即安装，改文件即改插件**。GUI 页面跑在 `dsh-app://app/` 壳协议下（**完全禁网**，外链图片一律失败，只认同源相对路径），web 端点 `http://127.0.0.1:19387` 根路径 401（需 token/signed cookie），仅供静态资源与接口探针，视觉/交互验收只能靠老大。宿主**无热重载、不能自驱重启**（无 relaunch IPC）：改宿主侧或插件 lib/*.js 一律请老大完全退出再起，刷新页面不够。日志在 `%APPDATA%\@deepseek-ai\dsh-desktop\logs\`（crash-*-host.log = 宿主没上电；crash-*-web-boot.log = 客户端条目没激活）。

关键词：DSH 桌面端环境总览、dsh-desktop 0.2.0-rc.2、Electron 44、app.asar 补丁、profiles/desktop、dsh.profile.bundles 才启用、cordis.patch.yml 权威、pnpm 11.7 路径、link 接入 junction、dsh-app 壳禁网、19387 根路径 401、无热重载要重启、crash 日志位置

### 0mv8bib0k-4084fb15b7ee45bca3b337ff1d
_重要性 3，状态 active，项目 dsh-maid-patch-kit，overview_

dsh-maid-patch-kit（0.1.0，D:\DeepSeek Harness\Works\dsh-maid-patch-kit，远端 https://github.com/Valorine97417/dsh-maid-patch-kit）：给社区插件打**不阻碍上游更新**的维护补丁，上游停更的整包接管。老大原话「新建个小困插件项目，专门给这三个插件做维护补丁且不影响他们自己更新的。作者停更了，就收录到里面去。」骨架照抄 dsh-maid-tts-fix：patches/*.patch 正本 + pnpm-workspace.yaml 的 patchedDependencies 登记 + lockfile 的 patch_hash + lib/selfcheck.js 三问体检 + index.js 启动自检（不修不拦不抛）；scripts/patch.mjs 五子命令 list/install/verify/remove/upgrade + scripts/venv.mjs。**当前三个目标**：video-understand（patched）、dsh-maid-guard（forked，正本 guard/，2026-10-16 重启验收通过）、dsh-orb（watch）。**远端 main = `ee1e199`，本地与远端 0/0 齐平、工作区干净**。ego-browser 补丁已于 2026-10-16 撤下（正本归档 `_probe/ego-patch-archive-2026-10-16/`）。

关键词：patch-kit 定位、维护补丁、不阻碍上游更新、patchedDependencies、patch_hash、selfcheck 三问、patch.mjs 五子命令、三个目标、video-understand guard orb、远端 main ee1e199、停更整包接管、本地远端齐平

### 0mva06qag-fcfb865cd08a403691483f0343
_重要性 2，状态 active，项目 dsh-maid-preset,dsh-maid-vcp，todo_

待观察（dsh-maid-preset v0.7.5）：最长等待上限的**行为**尚未在真实长会话里被看到。已过的一层＝重启后 `~/.dsh/maid-sync.log` 的启动行写成「同步已启动：空闲 10min 推送（**最长等待 60min 强制推**），轮询 60s」——证明 DEFAULTS 的 60 已进 cfg（三层合并：DEFAULTS 60 ← cordis 出厂 60 ← maid-settings.json 未设该键不覆盖）。未过的一层＝下一次长会话里日志是否真出现「已达最长等待上限 60 分钟（记忆持续写入中），本轮强制推送」。判据便宜，不必专门造场景，撞上就核一眼。

关键词：待观察、最长等待上限行为未验、maid-sync.log 判据、强制推送日志、v0.7.5、启动行已过、长会话撞上就核

### 0mv8bib0z-d99f69f7716344b892951510df
_重要性 2，状态 active，项目 dsh-maid-patch-kit，structure_

dsh-maid-patch-kit 三层结构（现状）：① `patches/`——pnpm patch 正本，现一个 `dsh-video-understand@0.5.2.patch`（21,313 字节 / 7 文件 / sha256 e09ed330c4e24425…），内容为 DSH 注册修复、Windows 编码、接本地网关 8326、下载格式串；`lib/selfcheck.js` 判据 11 条全属它。② `guard/`——dsh-maid-guard 整包接管正本（0.3.2-fork.1，零外部依赖），自带 `src/profile.js` 环境探测器、`scripts/{guard-cli,boot-guard.ps1,rollback.cmd,smoke-test,load-drill}`。③ `lib/targets.js` 元信息层（TARGETS：title / summary / repo / upstreamName / status / reason + `targetOf()` / `targetsWithStatus()`），供 `patch.mjs list` 的「已接管」「观察中」小节与 README 收录表共用。ego 补丁已撤、`vendored/dsh-plugin-guard/` 已删（正本在 guard/）。dsh-orb 处于 watch（观察中）。

关键词：patch-kit 结构、patches 目录、video-understand 补丁 21313 字节、guard 整包接管、lib/targets.js 元信息、selfcheck 判据 11 条、profile.js 探测器、load-drill、ego 补丁已撤、dsh-orb watch

### 0mva7vqap-cd273c1dbbdb443fa68363d75a
_重要性 2，状态 active，项目 dsh-maid-plugins，overview_

dsh-maid-plugins（`D:\DeepSeek Harness\Works\dsh-maid-plugins`，远端 Valorine97417/dsh-maid-plugins）：小困插件的**官网展示页**（静态站，abyss-maid 深海蕾丝调性）。老大对展示型网页的验收标准（原话 m00482/m00497/m00562）：光好看不够，**必须有交互**（滚动进度、打字机、数字滚动、卡片光标跟光、灯箱翻页、可点演示终端、右下角浮标），且**配图必须看得清**——一律用裁切特写，别放整屏截图。素材在 `assets/img/`：主画廊 6 张大肥鲸二创 `whale-0{1..6}-{atelier,library,moon,cathedral,bakery,pc}.webp`（1024² / 90-122KB，用 Qwen-Image 2.1 图像编辑流以 `whale_maid_ref.png` 为参考底生成）、ComfyUI 竖面板三张、宽组 gal-wide（scenery-dark/light、comfyui-loadarea、comfyui-settings）。转 WebP 脚本 `_probe/whale-to-site.py`（Pillow，q86）。旧整屏截图已删。

关键词：官网展示页、abyss-maid 调性、必须有交互、视觉疲劳、配图裁切特写、assets/img 素材、大肥鲸二创 6 张、Qwen-Image 编辑流、whale-to-site.py、宽组 gal-wide、静态站

### 0mva7vqa9-28d14fd5595747a5a8f6d34dc2
_重要性 3，状态 active，项目 dsh-maid-tts-fix，overview_

dsh-maid-tts-fix（`D:\DeepSeek Harness\Works\dsh-maid-tts-fix`，远端 Valorine97417/dsh-maid-tts-fix，**v0.6.3**）：给 dsh-xiaomi-tts 做维护补丁（不阻碍上游更新）+ 音色维护层。**结构**：`lib/edits.js` 记补丁意图（23 条编辑 / 4 组，锚点 + expect 次数；执行时全有或全无、幂等）→ `patches/dsh-xiaomi-tts@3.0.8.patch`（23587 字节 / sha256 `4f89e11a6e4e3f31…` / 31 条重放编辑）是产物；`lib/selfcheck.js` 7 条 APPLIED_MARKERS 判据；`scripts/patch.mjs` 六子命令 list/install/verify/remove/upgrade/redo（改 edits.js 后版本没变得跑 **redo** 不是 upgrade，redo 前必须先摘 patchedDependencies 登记）；`voice-refs/prompt.md` 是音色提示词定稿（wav 不入库）。**九项能力**：念 CSS 修复 / 标记只念重点 / 切会话不打断 / 跨会话自动播报 / 反思轮不念改念上一条 / 标记收尾容错。**两面性**：字体与渲染侧配套要看 dsh-maid-vcp（v6.42+）。**上游活着只做补丁、不锁版本**；真停更才整包接管。

关键词：tts-fix 概况、xiaomi-tts 维护补丁、edits.js 补丁意图、patch.mjs 六子命令、redo 与 upgrade 区别、selfcheck 判据、voice-refs 音色定稿、标记只念重点、切会话不打断、跨会话自动播报、反思轮不念、v0.6.3

### 0mv9vmx8u-f2cf2c630ad446d497cc2cc9a5
_重要性 3，状态 active，项目 dsh-maid-patch-kit,dsh，decisions_

决策（2026-10-16 收敛后）：ego-browser 与 better-sidebar 已从 profile 卸载，理由不是"没用"而是"用得太少还一直挂着"（1068 次/7.3% 调用、真不可替代仅 B 站抓取一类）。dsh-maid-patch-kit 随之撤下 ego 补丁，收敛为 video-understand（patched）+ dsh-maid-guard（forked）+ dsh-orb（watch）三个目标。**长期做法（老大 m00206 原话）**：「收录到小困的patch-kit里，后续如果要打补丁就放到里面去。」——以后给任何社区插件打修补丁一律落进 `patches/`，不再散落别处或直接手改 node_modules。

关键词：ego-browser better-sidebar 卸载决策、patch-kit 收敛三目标、补丁撤下、video-understand guard orb、收录到 patch-kit 长期做法、不手改 node_modules、按需启动

### 0mv9jd28g-101fa7b9664f466a9bd78c190a
_重要性 2，状态 active，项目 dsh，quotes_

【abyss-maid 风格定稿链（老大原话）】2026-10-13 老大「你可以帮我给当前的主题界面做一套 raw 渲染的风格吗？」→ 据此建 abyss-maid（深海蕾丝·女仆工坊风），色板抄自 maid-atelier 皮肤真值。随后「raw 渲染的背景颜色，跟输出框的背景颜色不一样」→ 先改成跟随宿主变量；老大再拍「背景色换成 #121F41」，改完确认「这次没问题了」→ **卡片底定稿固定实色 #121F41**。最后老大「去让后把其他风格删掉」→ 删掉 12 个风格文档，只留 abyss-maid（_BASELINE.md 保留作未命中兜底，老大拍板「那就保留他」）。**此风格已锁定，所有视觉输出默认走它。**

关键词：abyss-maid 风格定稿、raw 渲染风格、卡片底 #121F41、背景跟输出框不一样、只留一个风格、删掉 12 个风格文档、_BASELINE 兜底、深海蕾丝女仆工坊、风格锁定

### 0mva78oo8-7b02e1f9d93c4c57bc442e6a86
_重要性 3，状态 active，项目 jasna，ops_

jasna 关键路径与运行方式索引（2026-10-16）：
- 安装目录 `D:\Downloads\jasna-windows-0.11.1`（主程序 `jasna.exe`，工具在 `tools\ffmpeg.exe|ffprobe.exe|ffplay.exe`，官方测试片在 `assets\test_clip1_1080p.mp4`/`_2160p.mp4`，中文 UI 文案已扫出存 `D:\DeepSeek Harness\Works\_probe\jasna-ui-all.txt`，CLI 全帮助存 `jasna-help-full.txt`）。
- 配置 `C:\Users\Kayle\AppData\Roaming\jasna\settings.json`（预设全在这；同目录 license.json）。
- LTX 权重 `model_weights\ltx-restore\`（现存 alpha1-int8 13.37 GB + vae + vae-decoder；nvfp4 7.73 GB 仍在 `D:\Downloads\` 根目录待搬入）。
- 编译产物（删了要重编 15–60 分钟）：`model_weights\rfdetr-v6-large.bs1-4.win.engine`、`torch-compile-cache\`、`lada..._sub_engines\`、`ltx-speed-profile.json`（本机实测耗时系数）。
- 运行方式：**jasna.exe 可直接命令行调**（先删掉注册表 AppCompatFlags\Layers 里的 `~ RUNASADMIN` 标记才通）；每次启动先打 `Jasna: checking the installation... / installation verified.`。进度条全在 **stderr**，stdout 恒空。路径含空格会被截断，脚本/输出目录一律用无空格纯 ASCII 路径。
- 测试脚本都放无空格目录（如 `D:\jasna-longtest\`、原 `D:\jasna-test\`）跑，工作区 `D:\DeepSeek Harness\Works\_probe\` 只存脚本原件。

关键词：jasna 关键路径、settings.json 预设位置、model_weights ltx-restore、jasna.exe 命令行 RUNASADMIN、进度在 stderr、无空格路径、ltx-speed-profile.json、编译产物勿删、jasna-ui-all.txt、jasna-longtest 脚本、AppData Roaming jasna

### 0mv9r6k2l-cadc235f6a2c4956bec93b36a3
_重要性 2，状态 active，项目 dsh-maid-vcp,dsh-maid-tts-fix，quotes_

老大原话（m02207，附截图）：「我以为是我的问题，你两次回复我都是这样。已经出现问题了。你排查一下。」——两次回复正文整段不见、界面只剩「已完成，用时 21 秒」，老大先怀疑是自己，再报障。随即 m02212：「排查到了顺便修复。」

关键词：老大原话、回复正文不见、已完成用时21秒、我以为是我的问题、排查到了顺便修复、报障截图、用户先自我怀疑

### 0mv9jg23t-b7c8be9b59b143b680106eff13
_重要性 2，状态 active，项目 dsh-maid-vcp，quotes_

老大关于接管 raw 插件的原话（2026-10-13）：「raw插件创作者已经停更了，你帮我弄成本地的。然后上传到我的github里。依赖什么的都加上，避免github下载安装又要重新修复。」——这是 dsh-raw-html 本地化 + 自建 GitHub 仓库的起因与验收标准（依赖要一次装全，别人从 GitHub 装下来不该再修一遍）。另一条（关于安装流程）：「不用管之前的安装流程。按我github里的来，我的是走本地维护分支。你先帮我卸载干净。」——一切以 GitHub 仓库 README 的本地维护分支流程为准，先卸载再按 README 重装。

关键词：raw 插件创作者停更、弄成本地的、上传到我 github、依赖都加上、避免下载安装再修、按 github 里的来、本地维护分支、先帮我卸载干净

### 0mv6xb79h-fa86b2912dd546fdbc58f96f10
_重要性 3，状态 active，项目 dsh-maid-scenery，structure_

dsh-maid-scenery 圆钮拖动吸附的坑位（踩过两次，改前必读）：`KNOBS_FRAME` 只认 `[class*='centerCol']` 与兜底 `[data-slot='conversation.session']`，**绝不能再加 `main` 之类整页兜底**——刷新瞬间真对话列还没挂上时它会命中含侧边栏的整页容器，把 `side='left'` 的圆钮按进左栏（老大报过两次）。`frameReady()` 要同时满足 `width>160 && height>120 && left>=40`（侧边栏折叠也还有 56px，40 这条线安全）。落位时机 = 初始化 + ResizeObserver + `[0,150,500,1500]ms` 定时补位（尺寸没变时 RO 根本不回调，初帧错位会一直留着）。拖动夹取内缩 4px、吸边与面板定位内缩 `KNOBS_GAP=16px`；位置存 `localStorage['dsh-maid-scenery-knobs']={side,y}`；拖动先收面板、拖完吞掉那一次 click；幂等标记 `pill.dataset.sceneryDrag`；vendor 写死 `right:16px;bottom:16px`、32×32、transition 220ms，面板 268px 宽挂在底部 58px 处。

关键词：圆钮拖动吸附、KNOBS_FRAME、centerCol 锚点、frameReady 三条件、定时补位、KNOBS_GAP、localStorage 位置记忆、圆钮落进侧边栏、dsvs-knobs-pill、幂等 dataset 标记

### 0mv9jd27r-6b41e70441b64a48bde96a7511
_重要性 2，状态 active，项目 dsh，decisions_

【DSH 前端崩溃两类病因（都已定案，别再重查）】① **强制刷新崩溃**：渲染侧 loader 的卸载监听把 fiber 卸载误判成「用户手动禁用」写入 entry.disabled，而重建闸门 `async refresh(){ this.fiber || this.disabled || await this.init() }` 从此永久跳过 ⇒ boot 审计报空话 `${id}: import failed` ⇒ 弹窗。已用 asar 补丁把 audit 的 `throw new Error(` 改成 `console.error(` 压住。② **combo 404 / 插件 import failed**：多数是 **rev 失配**——artifactRevision 只由 client.js 的 mtime/ctime/size 派生，pnpm install 重写 node_modules 后 rev 变了，浏览器还拿旧 rev 请求 combo URL。处置：点弹窗「重启」即自愈，**别点「禁用第三方插件」**（会砍配置）。另：同一 combo bundle 一损俱损，日志里带 `skipped after an earlier failure of this bundle` 的是被连带的，不带的那条才是真凶。

关键词：强制刷新崩溃、entry.disabled 误写、refresh 闸门短路、audit 空话 import failed、console.error 压死、combo 404 rev 失配、artifactRevision、pnpm install 重写、skipped after an earlier failure、一损俱损、点重启别点禁用、web boot 崩溃

### 0mv8cs473-b69f52d4620c4f59be75f7f3e9
_重要性 2，状态 active，项目 dsh-maid-plugins，overview_

dsh-maid-plugins：小困插件官网（单页静态站 + GitHub Pages）。目的＝给老大的七个 dsh-maid-* 插件做展示门户。线上 https://valorine97417.github.io/dsh-maid-plugins/ ，仓库 Valorine97417/dsh-maid-plugins（公开，MIT，homepage 已指向 Pages）。本地 D:\DeepSeek Harness\Works\dsh-maid-plugins\ ，结构：index.html（约 351 行）+ assets/style.css（约 420 行）+ assets/app.js（约 290 行）+ assets/img/（12 张效果图）+ README.md + LICENSE + .nojekyll。页面分五段：顶栏/首屏（打字机「装一个包，走到哪都是小困。」+ 四个滚动数字 7 插件/5 公开仓/MIT/100% 中文文档）、插件一览（7 张卡片 + 五档分类筛选 .chip）、效果画廊（12 图瀑布流 .gitem + 灯箱 #lb 带翻页/序号）、工坊终端（可敲 version/list/add 三组演示）、怎么装（三步）。交互另有顶部进度条、鼠标光晕、3D 视差、右下小困浮标。风格＝abyss-maid（深海蕾丝·女仆工坊），因 Pages 无 Lanxi 字体改用系统字体栈（标题宋体骨）。

关键词：插件官网、小困插件工坊、GitHub Pages、dsh-maid-plugins、静态单页站、展示门户、效果画廊、灯箱、abyss-maid、插件卡片筛选、valoine97417.github.io

### 0mv8cs47o-c3592ede2a2b4f81982568886f
_重要性 2，状态 active，项目 dsh-maid-plugins，ops_

官网部署流程（可复用）：①建仓 POST /user/repos，body 用文件 _probe/repo-create-dsh-maid-plugins.json 传（gh-api.mjs 第 3 参是**文件路径**不是内联 JSON，内联会被 curl --data-binary 当文件名报错）；②git init -b main → add → commit → `git -c http.proxy=http://127.0.0.1:7890 push -u origin main`（push 必须带代理）；③开 Pages：POST /repos/{o}/{r}/pages，body {"source":{"branch":"main","path":"/"}}，重复调会 409，可用 PUT 更新；④构建约 24s，用 GET /repos/{o}/{r}/pages 看 status 从 building→built，GET /pages/builds 看构建记录；⑤线上验证：curl -x http://127.0.0.1:7890 检查 home/css/js/img 均 200。仓库根放了 .nojekyll 防止 Jekyll 忽略下划线文件。

关键词：GitHub Pages 开启、pages API、建仓脚本、gh-api.mjs 用法、push 代理 7890、nojekyll、构建状态 building built、Pages 验证 200、静态站部署流程、repo-create json body

### 0mv6tvcw0-5e16a6d1129e4af7af192917f4
_重要性 2，状态 active，项目 dsh-maid-vcp,dsh-maid-scenery，todo_

**复验结果（2026-10-13 23:57 重启后，全部通过）**：
✅ ①atelier 素材不再 404：`/skin-assets/maid-atelier/<hash>` webp 200/89946B、png 200/306760B（此前 404 系空文件名假象）；②graph rev=74159b5caf8f、76 条目，dsh-maid-scenery 带 client 条目（rev=8afb068d7192），三个 bundle 全 200（scenery 313026B / raw 117219B / preset 177371B）；③重启后无新 crash log；④深蓝空块不复现；⑤面板「背景画面」切换（老大 m05249「前两个没问题」）；⑥皮肤管理面板显示「深海女仆工坊」（同前）；⑦混排自愈——小困抠出老大刚验的那条消息原文（seq 9858 · 2466 字符 · 43 行）喂运行中的 fixVcpBlank，分界换行 2→2 保持、旧版对照 2→1。
**唯一遗留**：深蓝空块重启后不复现，记在 topic 0mv6v6bq 里挂着，再冒头按记录的切入口查。

关键词：复验清单、atelier素材已通、skin-assets 200、graph 76条目、混排自愈待验、深蓝空块不复现、背景画面切换、皮肤管理器、重启无崩溃

### 0mv6xatsy-d2bfbee92e0d44eface3e70450
_重要性 3，状态 active，项目 dsh，structure_

DSH 界面 DOM 锚点（改界面样式优先用这些，比哈希类名稳）：三列 = `.BynINW_frame` 下的 `[class*='sidebarCol']` / `[class*='centerCol']` / `[data-rightbar-col]`（RightbarColumn 组件自带该属性）；对话列另有 `[data-slot='conversation.session']`；右栏内容 = `[data-sidebar-right-session]` + 面板 `[data-dockkit-pane]`/`[data-dockkit-float]` + 标签 `[data-dockkit-tab]`/`[data-sidebar-right-tab]`；窗口标题栏 = `html[data-windows-titlebar]`，DSH 用 `.frame::before` 留出 `--dsh-windows-titlebar-height` 的拖动区；折叠状态 = `.frame[data-sidebar-collapsed]`、`[data-rightbar-collapsed]`。注意 `[data-dsh-better-sidebar]` 是第三方「更好的侧边栏」插件的作用域属性，不是 DSH 自带。

关键词：DOM 锚点、data-rightbar-col、data-sidebar-right-session、data-dockkit-pane、data-windows-titlebar、BynINW、sidebarCol、centerCol、三列布局、better-sidebar、选择器、界面样式

### 0mv4x5eev-621292668468445db82944ceec
_重要性 2，状态 active，项目 dsh，ops_

调试 DSH 插件 loopback RPC 的方法：浏览器 connection.rpc.call = HTTP POST 到 http://127.0.0.1:19387/<channel去开头斜杠>/<endpoint>，body 为 {type:'client-request', rpcId:uuid, method:endpoint, payload}，响应信封 {rpcId, result:{ok, value}} 且 rpcId 必须匹配；可从命令行直打验证 Host 侧 handler 是否注册（源码 app.asar createWebConnectionRpc）。405=路径存在但方法/凭证不对。

关键词：RPC 调试、loopback 调用、connection.rpc、client-request、rpcId、channel endpoint、插件诊断、app.asar、127.0.0.1:19387、HTTP 405


## 事实（fact）

### 0mvaxdg3g-726cc00cebaf4338bb63d4bfa0
_重要性 2，状态 active，项目 dsh-our-free-model_

13 渠道实况（2026-10-17 凌晨）：**workbuddy 4/4 全通**（三头补丁）；qodercn/trae/raccoon/minimax 全绿；buddy 4/5（v4.1-flash 限流）；cline 18/23（地区封锁+上游 429/502）；**codearts 403 已修好**（bili passthrough 生效，deepseek-v4-flash 经网关 200 出词 16:25 验证；插件 TM.00001041 会轮询重试 3×10.5s 能扛会话堆积；v4.1-flash 摘戳补丁待重启验证；glm-5.3-flash 与 v4-pro 上游不可用；TPM 500000/min 波动）；lobsterai 0/3（免费额度用完）；zcode 0/1（当日额度用尽）；gemini 0/1（账号已启用、凭据有效，出口香港被 Google 拒——换美/日/台节点即通，配置不用改）。账号分布：13 渠道 16 账号，只有 workbuddy 有 4 个，其余独苗。

关键词：渠道实况、43可用、重启后探测、workbuddy三头补丁、全绿渠道、限流、定价墙、无凭据、额度用尽、慢模型、隐性不可用、61模型、codearts已排除签名

### 0mvaxvl3a-bf2ff750e1e34b7292a00715cb
_重要性 2，状态 active，项目 dsh-our-free-model_

codearts benefit 模型机制（2026-10-16/17 实测定案）：带 `maas_type: benefit` 头并参与签名时，deepseek-v4.1-flash 返回 HTTP 200 {"error_code":"4004","error_msg":"benefit not found"}；不带 maas_type 反而 HTTP 200 真出词；glm-5.3-flash 两头死（带=benefit not found、不带=404 Route missed）。**上游实证已反转**：上游作者 2026-09-23 是「v4.1-flash 不带戳 404、带戳成功」，10-16 实测相反——权益规则变了，**硬摘 CODEARTS_BENEFIT_FALLBACK 会赌错方向，靠摘戳重试自适应才稳**。插件机制：isCodeArtsBenefitModel 走 fallback=["glm-5.3-flash","deepseek-v4.1-flash"]（pack.js:31050）命中即带戳（32936）；stream() 自带摘戳重试（32992：BENEFIT_NOT_FOUND → benefitHeaderDropped=true continue），**但信号收不到——32367 期望全串 "InferHub.4004.200"、实测只回裸 "4004"**。小困已补丁（2026-10-17，备份 bak-benefit4004-20261017-002745，改后 md5 801850a2）：pack.js:33217 与 src/llm-adapter.ts:1658 判定加 `|| data.error_code === "4004"`——待重启验证（预期链路：带戳→4004→命中→摘戳重试→200 出词）。

关键词：maas_type、benefit、codearts、benefit not found、4004、CODEARTS_BENEFIT_FALLBACK、权益模型、deepseek-v4.1-flash、glm-5.3-flash、错误码映射、32367、32936

### 0mvb2tksq-7e47fbc270004852a8e2f03015
_重要性 2，状态 active，项目 jasna_

nvfp4/Fast mode 测试环境（小困自建，2026-10-16，路径全无空格纯 ASCII）：根 `E:\jasna-nvfp4\`，下挂 `in\`（4 个短样本 N1-1080p-ipz650-15s / N2-1080p-juy768-15s / N3-4k-hmn903-10s / N4-v1080-mid-15s）、`in30\M1-1080p-diff-30min.mp4`（735.1MB，1920x1080 54046 帧 1800.197s，裁自 `D:\Downloads\text\489155.com@START-649.mp4` 的 600s 起 30 分钟）、`out\`+`logs\`、`out-int8\`+`logs-int8\`、`out-nvfp4\`+`logs-nvfp4\`、`tmp*\`、`cmp\`。脚本：`run-nvfp4.ps1`（nvfp4 队列，带 `-Fast`）、`run-int8cmp.ps1`（int8 对照，固定 `--no-ltx-fast --no-ltx-large-canvas`）、`orchestrator.ps1`（**当前主力**：第二轮 nvfp4+int8 两组顺序跑，一个进程同时管队列与采资源，自带 `MaxHours` 封顶与 ALL DONE；内部 `Test-Recorded` 只认「exit=0 且输出文件还在」才算完成，重跑前把旧日志改名 `.prevN` 防覆盖）、`monitor-nvfp4.ps1`（旧版独立监控，`$seenJasna` 门控防误退，已改成同时扫 `logs-nvfp4`/`logs-int8`/`logs` 三个目录）。**启动方式必须是 WMI 脱钩**：`Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{CommandLine="powershell -NoProfile -Command `"& { Start-Process -FilePath powershell -ArgumentList @('-NoProfile','-ExecutionPolicy','Bypass','-File','E:\jasna-nvfp4\orchestrator.ps1') -WindowStyle Hidden }`""}`——直接 `-File` 或带 `param()` 的脚本经 WMI 会静默失败。boot 日志 `orchestrator-boot.txt`，资源 `logs\monitor.csv`。所有 .ps1 内部变量名避开 PowerShell 内置 `$args`（改 `$cliArgs`/`$ffArgs`），否则解析崩。

关键词：jasna-nvfp4 测试环境、orchestrator.ps1 主力、WMI 脱钩启动命令、in30 30分钟样本、Test-Recorded 只认exit0加文件在、日志改名 prevN 防覆盖、monitor.csv 资源、run-int8cmp.ps1 对照、变量名避开 args、E 盘无空格路径

### 0mvb21sbw-c2497518aa304426ae25622776
_重要性 3，状态 active，项目 全局_

插件归属判据（老大 m01862 纠正）：「dsh-maid 的前缀才是小困的插件」——dsh-maid-preset / dsh-maid-scenery / dsh-maid-vcp / dsh-maid-comfyui / dsh-maid-tts-fix / dsh-maid-lane-fix / dsh-maid-patch-kit / dsh-maid-plugins（官网）这八个**仓**是小困的；**另有一个不在仓根目录的独立包 dsh-maid-guard**（住在 `dsh-maid-patch-kit/guard/`，是 patch-kit 接管上游 dsh-plugin-guard 更名而来，profile 侧走软链/junction 挂载，单独一套 package.json 与版本号 0.3.2-fork.N）——**它同样是 dsh-maid-* 前缀、也算小困插件**。dsh-deep-whale 是小尾（Small-tailqwq）的项目、不算小困插件（文档顺手代写，仓的 push 权限在小尾手里）。
**落地要求**：凡「给所有插件做 X」类任务，**枚举必须走 `find -maxdepth 3 -name package.json -not -path "*/node_modules/*"`（或从远端 `GET /user/repos?affiliation=owner` + profile node_modules 软链交叉核对），不能只数仓目录**——2026-10-16 给七仓加图标时正是漏了子目录里的 guard，被老大照截图逮住（补于 8bf9df7）。当前小困插件实为「八个仓 + 一个子目录包」。

关键词：插件归属判据、dsh-maid 前缀、小困插件范围、dsh-maid-guard 也算、guard 住子目录、patch-kit 接管更名、deep-whale 不算、小尾项目、枚举走 find package.json、别只数仓目录、八个仓加一个子目录包、所有插件类任务

### 0mvb1urqb-fc9a82a3f75f4ba1b8da7bea9f
_重要性 2，状态 active，项目 全局,dsh_

DSH 插件面板图标机制（2026-10-16 实证）：面板图标读 package.json 的 `"icon"` 字段（如 dsh-deep-whale 三插件的 "assets/plugin-icon.png"），没声明就显示默认蓝蝴蝶。换图标**三步一个都不能少**：① 图源裁方缩 256px PNG 存进仓 `assets/plugin-icon.png`；② package.json 加 `"icon"` 字段；③ **files 白名单必须含该图标**（或整个 assets 目录），否则 npm 分发时被排除、换机器就掉图——用 `pnpm pack --dry-run --config.ignore-scripts=true` 验证 Tarball Contents 里有它；④ 面板图标是启动时读的，**必须重启 DSH 才刷新**。
**2026-10-16 已统一**：七仓（comfyui/lane-fix/patch-kit/preset/scenery/tts-fix/vcp，各 113249 字节、md5 `657d0507bdf255c3e6bd702e6d346d34`）+ 第八只 **dsh-maid-guard**（补于 8bf9df7，0.3.2-fork.2）全部换成比耶小困头像。
**踩过的坑（老大截图逮住）**：**扫描必须含子目录，别只按「仓根目录」列**——guard 住在 `dsh-maid-patch-kit/guard/`（profile 侧走软链挂载），按八仓根目录逐个加图标时天然漏掉它。正确做法：`find . -maxdepth 3 -name package.json -not -path "*/node_modules/*"` 逐个查 icon 字段，才算扫全。**小困插件 ≠ 八个仓**：dsh-maid-guard 是 patch-kit 接管更名出的独立包，住子目录、单独一套 package.json。

关键词：插件图标、plugin-icon.png、icon 字段、files 白名单、pack dry-run、重启生效、蓝蝴蝶、dsh-maid-guard 漏网、子目录插件、find maxdepth package.json、扫描别只按仓根目录、八个包不等于八个仓、113249 字节

### 0mv9kdfee-ec0f33bc4f0c44e38161bb6b46
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

xiaomi-tts 对账（dsh-maid-tts-fix）：**十项落地**，最新 v0.6.4（2026-10-16）。补丁正本 `patches/dsh-xiaomi-tts@3.0.8.patch` = **24076 字节 / sha256 前缀 8fb85440911f1a79**，32 条重放编辑（lib/edits.js 是意图、.patch 是产物，改意图后跑 `node scripts/patch.mjs redo` 重出并自动落 profile，verify 三项：登记/hash/落盘）。

十项：① 念 CSS 修复（stripTtsStyleBlocks）② `<!--tts:…-->` 只念重点——**挂三处**：messageText（手动）、applyTtsPlaybackScope（跨会话）、scopedLiveText（主视图流式边生成边念，此前漏挂被老大实测报障，0.6.4 补）③ 切会话不打断（playbackOwnerId）④ 跨会话自动播报（remoteSessionId + playRemote）⑤ 记忆反思轮不念改念上一条 ⑥ 标记收尾容错（0.6.3）⑦~⑩ 见 README 表格。

**版本号的坑（2026-10-16 老大指正）**：v0.6.4/v0.6.5 是公司电脑**误传**的标签（分叉提交、不在 main 线上），已删——所以号段空着，流式旁路修复**直接复用 v0.6.4 号**，不算「又升一版」。小困曾错标成 0.6.6，改号提交 7ff4545 已拉齐（main 线：4e47f37 修复 + 7ff4545 改号，tag v0.6.4 拴 main 线）。教训：删掉的错误版本号的号段**可以复用**，别为了绕开它跳号制造「假更新」。今后 tts-fix 标签一律拴 main 线提交；发现线上外的标签先问来历。

关键词：xiaomi-tts 对账、十项落地、v0.6.4、24076 字节、8fb85440、32 条编辑、patch.mjs redo、scopedLiveText、挂三处、号段复用、误传标签、补丁意图 edits.js

### 0mvb3e6pc-184996af6dad445f97ff5fb599
_重要性 2，状态 active，项目 jasna_

老大 m02223 原话：「好，那就取消第三轮的2小时样本测试。以时长30分钟的样本测试对比评测结果为长视频测试最终结果。」→ 原本 m01865 定的三轮结构（短 → 30 分钟 → 2 小时）砍成两轮；**长视频的最终结论一律以 30 分钟样本（`E:\jasna-nvfp4\in30\M1-1080p-diff-30min.mp4`，54046 帧）的 nvfp4 对 int8 对比评测为准**。2 小时整片那轮的数据只留作耗时模型与稳定性旁证（已有：scan 52:59、encode 1:31:47、denoise 3.51 s/步、整片推算约 40 小时），不再重跑。测试台仓库 `04-长视频耗时\README.md` 的结论需据此改写。

关键词：取消第三轮 2 小时样本、长视频结论以 30 分钟样本为准、三轮砍成两轮、30 分钟样本对比评测、2 小时整片只作旁证、耗时模型 40 小时、不再重跑长片、老大决策

### 0mvb2uirn-c22be7575c2545abbf83fc60b7
_重要性 2，状态 active，项目 dsh-maid-scenery_

scenery 上游跟进走「路线一」（老大 2026-10-16 拍板，不接管不 fork）：`scripts/upstream-sync.mjs`（check/init/sync）+ `scripts/upstream-manifest.json`（白名单映射：video-skin 9 文件、maid-atelier 58 文件；重命名 index.js→index.host.js、lib/client.js→client.js、lib/index.js→index.host.js；protect 挡 LICENSE-upstream 与 *.flac）。核心机制：① sync 用 git blob sha1 增量；② **overrides**——vendor 特有的本地调整写进 manifest（现 1 条：index.host.js 的 `../assets/runtime/`→`./assets/runtime/`，v0.2.1 整合层级适配），sync 拉新后自动重放，appliedSha 记录实现幂等 skip——首个实战案例就是它被首跑冲掉、smoke 2 FAIL 抓回。网络全走代理 7890（curl -x + git -c http.proxy，git 不带 -c 直连挂死）。**当前状态（v0.2.3，已推 GitHub：25bcbb7 + abe7f70）**：maid-atelier 已同步 v0.1.8（syncedRef=15e9aa0bb3a6），上游实改 client.js 253 行；video-skin 上游仍 v0.1.1 无动作；smoke 114 PASS / 0 FAIL（版本断言已改三段式校验，不写死数字——bump 会撞）；TROUBLESHOOTING.md 加了 2.7/2.8/2.9 三条；client.js 新版需重启 DSH 生效。

关键词：upstream-sync、路线一、白名单映射、vendor 零修改、blob sha1 增量、maid-atelier v0.1.8、video-skin v0.1.1、重命名映射、protect 名单、上游跟进、代理 7890

### 0mvb38o6u-939de962708846d58b35517d7f
_重要性 2，状态 active，项目 jasna_

`jasna-settings-bench`（私有，https://github.com/Valorine97417/jasna-settings-bench ，default main）＝老大要的「jasna 工具个人设置测试结果评估」仓库，本地在 `D:\DeepSeek Harness\Works\jasna-settings-bench\`，98 文件 / 约 15 MB。结构：`README.md`（总览）、`01-int8-三档测试\`（51 文件：README+runs.tsv+opt-runs.tsv+logs 15+cmp 33 张对比图）、`02-fp16-AB\`（8 文件，含 clip3s.mp4 4.39MB 与 fp16-on.mp4 4.55MB 两个刻意入库的对照小样本）、`03-nvfp4-对照\`（短样本 14 文件 + 30分钟\ 待补）、`04-长视频耗时\`、`05-参数速查\`（README + 8 个 .ps1 脚本 + ltx-speed-profile.json + settings.json.int8预设）。description 按四件套规范写成「DSH 小困笔记 · Jasna LTX 设置测试台：RTX 5060 8GB 上的预设对照、耗时模型与画质评估记录」。git 已配 user.name=Valorine97417、user.email=Valorine97417@users.noreply.github.com、http(s).proxy=http://127.0.0.1:7890、http.postBuffer=524288000。

关键词：jasna-settings-bench、测试结果评估仓库、私有仓库、D:\DeepSeek Harness\Works\jasna-settings-bench、01-int8-三档测试、03-nvfp4-对照、05-参数速查 脚本、GitHub 推送 代理 7890、postBuffer、个人设置调参依据、DSH 小困笔记 description

### 0mv9ywhfn-49eb27bed58b44f1a07bb266ac
_重要性 3，状态 active，项目 jasna_

Jasna 4K 失败根因定死：报错 `ValueError: Cannot fit a DiffVAE decode tile under the memory budget: … stage4_feature_bytes=289406976, usable_bytes=1408770048`，挂点固定在 `LTX 4/4 compose` 92/540。需要 5×289406976 = 1.348 GiB 解码空间，8GB 卡实得 1.312 GiB → 缺口仅 36.5 MB。关掉 large_canvas 重跑（C-S2-4k-nolc）挂点一模一样、usable_bytes 反降到 1.153 GiB → 4K 失败与 large_canvas 无关，是 8GB 卡 VAE 解码的硬缺口。占显存不放的：dwm 606MB（关不掉）、Chrome 186MB、DSH 177MB、FlClash 59MB、explorer 48+41MB 等合计 1316MB。**正解只有腾显存**（关 Chrome 就够那 36.5MB）；开 NVIDIA 系统内存回退无效（那是分配层溢出，改不动 Jasna 查询到的空闲显存读数）。

关键词：DiffVAE decode tile、Cannot fit a tile under the memory budget、compose 92/600、4K 硬缺口 36.5MB、usable_bytes 1378533376、usable_bytes 1219641344、与模型档位无关、int8 nvfp4 都挂、腾显存才是正解、内存回退无效、8GB 卡 4K

### 0mv9os16y-d1b8776fd811443e875d2bd87f
_重要性 2，状态 active，项目 jasna_

LTX 权重现状（2026-10-16 晚）：`D:\Downloads\jasna-windows-0.11.1\model_weights\ltx-restore\` 内 **int8 与 nvfp4 两档并存**——`ltx-restore-alpha1-int8.safetensors.enc` 13,368,048,821 B（Best 档）、`ltx-restore-alpha1-nvfp4.safetensors.enc` 7,733,295,061 B（Best+Fast）、`vae.safetensors.enc` 1,472,223,815 B、`vae-decoder.safetensors.enc` 38,718,609 B。老大自己把 nvfp4 从 Downloads 根搬了进来、int8 也曾一度被搬出去又搬回。文件名连 `.enc` 必须原样保留。distill8 系列未下载。下载源 Kruk2/ltx-restore 走 hf-mirror.com（resolve 链接 302 跳到 cas-bridge.xethub.hf.co 预签名 URL，有效期 1 小时）。

关键词：LTX 权重现状、int8 nvfp4 两档并存、ltx-restore 目录四件套、alpha1-int8 13.37GB、alpha1-nvfp4 7.73GB、vae.safetensors.enc、文件名不能改、Fast mode 需要 nvfp4、hf-mirror 302 预签名、distill8 未下载

### 0mvb2tkqy-705fe9a14f9d4cd4a95131d603
_重要性 2，状态 active，项目 jasna_

第一轮短样本对照（2026-10-16，nvfp4+--ltx-fast vs int8，同源同参、只换模型与 fast 开关）：N1 1080p/450帧 nvfp4 1144.6s vs int8 852.0s（int8 快 1.34×）；N2 1080p/450帧 775.6s vs 770.4s（持平）；N3 4K/600帧 两边都 exit 1（同挂 compose 92/600）；N4 竖屏/363帧 nvfp4 565.0s vs int8 716.9s（nvfp4 快 1.27×）。画质：PSNR N1 36.41/36.36、N2 43.71/43.67，SSIM 0.98459/0.98431、0.99131/0.99127——差距在噪声内，抽帧三行拼图（原片/nvfp4/int8）肉眼分不出。**结论：nvfp4 在短样本上没有稳定优势。** 分阶段看 denoise 阶段 nvfp4 稳定快约 15%，但 compose 阶段 int8 反而更快，总账互有胜负。脚本 `E:\jasna-nvfp4\run-int8cmp.ps1`（int8 对照队列）、`quality-cmp.ps1`（vstack 三行拼图，产物 `E:\jasna-nvfp4\cmp\*-stack.jpg`）。

关键词：nvfp4 对照 int8、短样本 第一轮、速度比 1.34x 1.27x、denoise 快 15%、compose 反而更慢、PSNR SSIM 差距噪声内、抽帧拼图肉眼分不出、run-int8cmp.ps1、quality-cmp.ps1 vstack、N1 ipz650 N2 juy768 N4 竖屏

### 0mv74qj2k-d083f3f9cc3a46b0b0eebf507d
_重要性 2，状态 active，项目 dsh_

小困自有 GitHub 仓库现状（2026-10-16 晚复核）：八仓 —— dsh-maid-vcp（**公开**，仓库名仍是 dsh-raw-html）、dsh-maid-preset（公开）、dsh-maid-comfyui（私有）、dsh-maid-scenery（私有）、dsh-maid-tts-fix、dsh-maid-patch-kit、dsh-maid-lane-fix（**private + archived**，已封存）、dsh-maid-plugins（官网）；另有 chatgpt-plugins。About 描述八仓均已统一为「DSH 小困插件 · …」，仅 patch-kit 缺 homepage。Works 里原有一个非 git 目录 `dsh-maid-site`（临时素材库），**2026-10-16 老大拍板已删除**。做对账/巡检时必须从远端发起 `GET /user/repos?affiliation=owner`（否则漏 private），不要按老说法「三个 dsh 项目」凑数。

关键词：GitHub 仓库清单、八仓、公开私有、dsh-maid-site 已删、临时素材库、官网仓库、Valorine97417、lane-fix archived、对账从远端发起、affiliation owner、仓库可见性

### 0mvb0vbd9-5790d23d996547ccba97b072db
_重要性 2，状态 active，项目 dsh-maid-lane-fix_

lane-fix 新增 TROUBLESHOOTING.md：新设备安装/重装/上游升级排查手册（六章，含本机实测哈希与状态）。

关键词：TROUBLESHOOTING.md、lane-fix 排查手册、新设备安装、补丁打不上、锚点失配、上游升级重打、安装与部署、关键路径、排查手法、dsh-maid-lane-fix

### 0mvaz7wfz-9bc61cd2da9b43d68ccd798b3f
_重要性 2，状态 active，项目 dsh-our-free-model_

Gemini 渠道（our-free-model）诊断全过程：账号 gemini-3f2ffadc 在 state.json 里 **enabled=false**，面板显示「未接入·请先登录」，但凭据 GEMINI_ACCOUNT_3F8AB328 **完全有效**——直连 `/v1internal:loadCodeAssist` 200（tier=standard-tier）、`/v1internal:retrieveUserQuotaSummary` 200 且**周限额剩余 99.96%**。2026-10-16 老大在面板点「启用」后：账号 enabled=true、凭据**自动续期**到 22:02（插件自己续的，没要重新登录）——**账号这一层彻底通了**。但请求随即被 Google 挡回：`400 User location is not supported for the API use.`（status=FAILED_PRECONDITION），**残留卡点是出口地区**：当时系统代理出口是**香港 42.200.231.166（HKT/Netvigator）**，Google 不认香港——**把代理切到美国/日本/台湾节点即可**（插件自动读系统代理，配置不用改）。端点：https://daily-cloudcode-pa.googleapis.com，路径 /v1internal:streamGenerateContent?alt=sse，模型 gemini-3.8-flash，project=aicode-consumers；`loadCodeAssist`/`retrieveUserQuotaSummary` 不校验地区、生成端点才校验——所以「配额查得到」不代表「能出词」。

关键词：gemini、gemini-3.8-flash、未接入、账号禁用、enabled、凭据有效、周限额、loadCodeAssist、cloudcode、antigravity、启用

### 0mvaz83p2-5390a5b0742547a094c94a63e3
_重要性 2，状态 active，项目 dsh-our-free-model_

our-free-model 的 Channel Pack 自带一套管理 RPC：路径 `/api/channel-pack`（POST，content-type 必须 application/json），body 形如 `{type:"client-request", rpcId, method:"channel-pack", payload:{method:"<方法名>", payload:{...}}}`，回复经 `reply(rpcId, result)`。**裸访问返回 401 unauthorized**（挂在宿主 19387 上，需要宿主认证，未找到 token 落点，故未走通）。方法名清单（pack.js:60428 handleMethod 内）：account.list/create/update/delete/reorder/refresh/retest/retestAll/test/reset/resetAll、login.poll/sendSms/submitSms、onboarding.status/claim、credits.status/balances/claimAll/permanentLock、model.list/setDisabled/setDisabledMany/setAllDisabled/clearDead、provider.status/setEnabled/getOrder/setOrder、gateway.getEnabled/setEnabled、captcha.demand/carrierUrl/contribute、backup.export/import/status、usage.badge/tokenLedger/autoCheckin、cline.quota/requestLog、loomy.permanentLock。**没有独立的 account.setEnabled**——账号启用大概率走 `account.update`。

关键词：channel-pack、RPC、api/channel-pack、account.update、account.test、handleMethod、401、宿主认证、管理接口、our-free-model、面板按钮

### 0mvaz7zxc-0ca786d69fd04ff38e05731871
_重要性 2，状态 active，项目 dsh-our-free-model_

our-free-model 三渠道（老大 2026-10-16 截图点名）实况：**LobsterAI** = 免费额度真用完，上游原话「免费额度已用完，请升级套餐」（QUOTA_EXCEEDED），不是凭据问题——state.json 里三个模型被写限流标记到 21:33/21:41（deepseek-flash/qwen3.8-flash/glm-5.3-flash），只能等重置。**ZCode** = 「账号在模型 GLM-5.3-Flash 上的额度已用尽或没有可用权益（上游返回 200 但没有任何内容）」，标记锁到 2026-10-17 00:00（**按自然日结算**）。两家都是额度墙，代码层面没得修。

关键词：lobsterai、zcode、免费额度用完、QUOTA_EXCEEDED、额度墙、自然日结算、GLM-5.3-Flash、deepseek-flash、限流标记、升级套餐、等重置

### 0mvayuck8-67d23f9dac8b44738539ab8b9e
_重要性 3，状态 active，项目 dsh-our-free-model_

dsh-our-free-model 渠道账号分布（2026-10-16 state.json 实读）：13 个渠道共 16 个账号，**只有 workbuddy（国际版）有 4 个号**（valorine97417 / zhang18230923897 / zhang2834583655 / zhang3332157280），其余 12 家全是独苗——codearts·buddy（木瓜mg）·lobsterai·qoder·qodercn·trae·cline·loomy·raccoon·minimax·zcode·gemini 各 1 个。含义：绿皮书里「换号避风控」这条策略基本只有 workbuddy 玩得动，别的渠道一被限流就只能等。

关键词：渠道账号数、独苗渠道、workbuddy四个号、buddy单账号、木瓜mg、换号避风控可行性、账号池、state.json accounts、限流无备胎、16个账号、16个账号分布

### 0mvayh948-df7bd6b492854d07b35c45d44c
_重要性 2，状态 active，项目 dsh-our-free-model_

codearts 免费额度的上游硬墙（2026-10-16 实测）：① TPM 限流 ModelArts.81114——deepseek-v4-flash 限额 500000 tokens/min、deepseek-v4.1-flash 10000000/min；② 带 tool_stream:true 时撞 HTTP 400 TM.00001041「并发会话数已达上限(3个)」，即账号级并发会话上限只有 3；③ stream:true 时限流藏在 SSE 里（data:{"text":"[DONE]","error_code":"InferHub.ModelArts.81114.429"}）。即 403 修好，额度与并发也极紧。

关键词：TPM限流、ModelArts.81114、500000、10000000、TM.00001041、并发会话上限3、tool_stream、SSE限流、codearts额度、429、81114、硬墙

### 0mvaxvl3s-a4cf4a2350c94127879e1d1758
_重要性 2，状态 active，项目 dsh-our-free-model_

codearts 上游真实路由与 gateway/config 名单不符（2026-10-16 直连实测）：deepseek-v4.1-flash → HTTP 200 真出词（不带 maas_type）；deepseek-v4-flash → 429 TPM 限流（说明能路由）；而 gateway/config 里的 deepseek-v4-flash-0731 与 glm-5.3-flash → 404 InferHub.002002009 Route missed。结论：GET opengw.developer.huaweicloud.com/api/v1/gateway/config 那份 619 字节名单（落 _probe/codearts-gateway-config.json）不是可路由名，别拿它当准。

关键词：codearts路由、gateway config、deepseek-v4.1-flash、200出词、deepseek-v4-flash、TPM限流、Route missed、002002009、名单不符、可路由模型、404、实测

### 0mvay1f1w-b75457eeb0674c8b9183c4e004
_重要性 3，状态 active，项目 dsh-our-free-model_

dsh-our-free-model：workbuddy/buddy 的错误码语义 —— 11140 是**账号级安全策略拦截**（作者 2026-09-27 实测：同一请求发 7 个账号，2 个 200、4 个 403/11140、1 个 429，故换号有效）；11128 是**内容指纹级**（system 含被腾讯网关屏蔽的模板句，由 openai-gateway 的 CONTENT_FINGERPRINTS 改写该句解决）**兼形态级**（缺 X-Conversation-ID 三头 / 缺首条 system）。两者 msg 都可能是 `request illegal`，**判据必须看 code 不能看 msg**；11128 进 isContentRejection 会白锁账号池 30 分钟（BUDDY_POLICY_BLOCK_COOLDOWN_MS = 30*6e4）。

关键词：11140、11128、账号级安全拦截、内容指纹、CONTENT_FINGERPRINTS、request illegal 歧义、看code不看msg、账号池白锁30分钟、workbuddy 错误码、buddy-adapter

### 0mv873mtl-8c6128a71c36404abce3d34750
_重要性 3，状态 active，项目 dsh_

dsh-our-free-model 装在本机 D:\Downloads\dsh-our-free-model-2.1.0（profile 里是 junction，改源文件即生效）；package.json 版本 2026-10-16 已升至 2.3.0（旧记录写的 2.2.0 作废）。插件真正加载的渠道适配器是**构建产物** vendor/channel-pack/pack.js（2.88MB）——改 src/*.ts 不生效，补丁必须打进 pack.js。该目录不是 git 仓库，备份命名用 pack.js.bak-ofm-patch-<YYYYMMDD-HHMMSS> 或 .lane-fix-orig/。

关键词：junction、Downloads、pack.js、构建产物、2.3.0、改源即生效、不是 git 仓库、lane-fix-orig、bak-ofm-patch、channel-pack、client.js、补丁落点

### 0mv5chiu8-551e10f1334944f9ae2f224d06
_重要性 2，状态 active，项目 全局,dsh_

【GitHub 网络与凭据，2026-10-16 晚再复核】直连 github.com:443 不稳（八仓 fetch 全报 Failed to connect / Connection was reset），**推送/拉取一律走本机代理**：`git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 fetch/push/ls-remote`——坑：`-c` 必须写在子命令之前（`git pull -c …` 报 usage 错）。策略顺序：失败先重试一发（偶发瞬断）→ 走 7890 代理 → 最后退 ghproxy.net 镜像前缀（只支持 GET，push 走不了）。探代理口可用 `curl -x http://127.0.0.1:<port> https://github.com -o NUL -w %{http_code}` 逐端口试（本机 7890 通、10809/18080 不通）。凭据在 Windows 凭据管理器（credential.helper=manager），gho_ 开头 OAuth 令牌，`git credential fill` 可取，还能直调 api.github.com（脚本 `_probe/gh-api.mjs`，bash 下须 `export MSYS_NO_PATHCONV=1`）。**tag 推送受同样影响**：`git push origin --tags` 失败会连 tags 一起没上去，补打后单独再推并用 `git ls-remote --tags origin` 复核。

关键词：github 直连不通、代理 7890、http.proxy、-c 子命令前、curl 探代理端口、ghproxy 兜底、push fetch 失败、gho_ 令牌、credential fill、tag 推送复核、MSYS_NO_PATHCONV、GitHub 网络通路

### 0mva0nl5h-4e9fd98d5e0d4dc7b0f9087223
_重要性 3，状态 stale，项目 jasna_

【已取消 2026-10-16】老大曾派：用 int8 预设把 2 小时长片 `D:\Downloads\Video\InputFolder\489155.com@START-649.mp4`（h264 1920x1080 29.97fps、216,841 帧、7235.29s、3,557,703,461 B）整片处理到 `D:\Downloads\Video\OutputFolder`，验耗时与稳定性（m01660 原话「做一个长视频测试，看下2小时要做多久和稳不稳定」）。跑到 LTX 3/4 denoise 1552/33000 时被老大叫停（m01826「取消 jasna 任务」），进程已全部终止，无成品输出。**运行方式留档备查**：脚本 `D:\jasna-longtest\long-run.ps1` + `long-monitor.ps1`（自带收尾：`-MaxHours 48 -IdleExitMin 10`，退出写 `HARD-CAP-DONE`/`IDLE-EXIT-DONE`），临时工作区指 `E:\jasna-longtest\tmp`（D 盘只剩 40 GB，中间产物不能与输出同盘），日志在 `D:\jasna-longtest\logs\`（**进度条全在 stderr，stdout 恒 0 字节**）。中止时实测：scan 52:59、encode 1:31:47、denoise 3.51 s/步，全程零 ERROR；资源峰值 GPU 7340/8151 MiB、提交 39.8/47.06 GiB、物理可用最低 521 MB、pagefile 峰值 19.4 GB。

关键词：长视频测试已取消、489155.com START-649、int8 整片跑 2 小时片、long-run.ps1 long-monitor.ps1、临时工作区指 E 盘、进度条在 stderr、scan 52:59 encode 1:31:47、denoise 3.51 秒每步、自收尾 MaxHours IdleExitMin、D 盘只剩 40GB、m01826 取消 jasna 任务

### 0mv6ys0w2-2172ffd8b4144011835409bc91
_重要性 2，状态 active，项目 dsh_

dsh-plugin-guard 有二义性，要分清：① npm 包（作者 wuweilab，仓库 wuwei6666/dsh-pluginGuard，0.1.1）：设置→插件加 Plugin Guard 标签页，隔离启动即崩的插件 + npm 自更新；坑是 README 安装命令写死 --profile web，本机是 desktop。本机 2026-10-14 试装它被 pnpm 供应链门禁连带拦下（ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION，触发者是 billion-context@0.1.196），没进 profile。② 老大 2026-10-13 搜的那个是 lxzy-7/dsh-plugin-guard（安装安全网）——2026-10-16 已由 patch-kit 接管为 **dsh-maid-guard**（0.3.2-fork.1，正本 `dsh-maid-patch-kit/guard/`），并重启验收通过；**两个同名包都别装，用 dsh-maid-guard**。GitHub 上同名仓库至少六个作者六种东西，先认门再装。

关键词：dsh-plugin-guard 同名、wuweilab、wuwei6666、Plugin Guard 标签页、插件隔离、minimumReleaseAge 拦截、供应链门禁、认门再装、lxzy-7 区分、dsh-maid-guard 替代、两个同名包别装

### 0mv9y96dw-b3af30f24f454072801eea1a43
_重要性 3，状态 active，项目 dsh-maid-patch-kit_

2026-10-16 老大拍板 patch-kit 接管 lxzy-7/dsh-plugin-guard（原话 m00418「以lxzy-7/dsh-plugin-guard的为主」），把它从 web 版改成桌面端可用。上游 0.3.2、最后一笔 2026-08-18，近两月零提交 = 符合接管条件。与 video-understand 不同：那个走 pnpm patch，guard 这类停更+结构性不适配的要走「接管 fork/内置」。**拍板当时本机从未装上过 lxzy-7 的原版 guard**（desktop profile 的 node_modules 与 bundles 里都没有，唯一一次尝试被 minimumReleaseAge 门禁拦下）；同日已由 patch-kit 的 `dsh-maid-guard` 接管形态装成并重启验收通过。

关键词：patch-kit 接管、dsh-plugin-guard、lxzy-7、0.3.2、上游停更、桌面端适配、以 lxzy-7 为主、接管 vs 补丁、fork 内置、原版未安装、minimumReleaseAge 拦下

### 0mv9z4hwj-59f25b3847fc4c6cbe9575bd63
_重要性 3，状态 active，项目 dsh-maid-patch-kit_

dsh-maid-guard（dsh-maid-patch-kit 的 guard/ 整包接管）已**重启验收通过**：`D:\DeepSeek Harness\Works\dsh-maid-patch-kit\guard\`（0.3.2-fork.1，零外部依赖），desktop profile 用 `link:` 挂上（junction），两套自测全绿（smoke-test 16 项 / load-drill 13 项），远端 main = ee1e199。2026-10-16 04:41 重启后实测：cordis.yml:1584 出现 `id: guard / name: dsh-maid-guard`；六条 `/guard/api/*` 路由全活（state/booted/render-error 均 200，乱路径 404）；客户端半边自报 `booted:true`；手动存档三个 profile 各成一份，manifest.harness 探到 `@deepseek-ai/dsh-desktop-runtime@0.2.0-rc.2`。仅剩「设置页是否出现『备份管理』栏」需老大肉眼确认（不阻塞）。

关键词：dsh-maid-guard 接管、重启验收通过、guard api 路由、booted 心跳、cordis.yml 1584、备份管理页待肉眼、0.3.2-fork.1、smoke-test load-drill、desktop profile junction、ee1e199、manifest harness、guard 目录正本

### 0mv751old-e41372c651ff49898170e40660
_重要性 3，状态 active，项目 dsh-maid-comfyui,qwen-image-dsh_

dsh-maid-comfyui 的「一键启动本机 ComfyUI」（commit 3bc0554 + ae5cf77，**已验收通过**）：设置项 `launchCommand` / `launchDir`，`src/launch.ts` 的 `createLauncher` 先 probe 一次（已通则 `{ok:true, started:false}`），未通则 `spawn(command,{cwd,shell:true,detached:true,stdio:'ignore',windowsHide:true})` 后每 1s 探一次、最多 90s（`POLL_TIMEOUT_MS`），同一失败 10 秒冷却（`FAIL_COOLDOWN_MS`），`inFlight` 去重并发点击；命令为空 → `launch-not-configured`。路由 `POST /comfyui/launch` 只对本机 baseUrl 开放（`canLaunch = launchCommand 非空 && isLocalBaseUrl`），会写审计日志。启动命令默认空；老大用 `pythonw` 避免黑窗（`run_nvidia_gpu.bat` 带 pause 会挂住）。detached 让服务器不随 DSH 退出而死。**触发点已收敛（197c931）**：打开面板不再自动拉起，现在只由面板标题栏的 ⏻ 与「跑工作流前的 ensureServer()」调用；连接失败提醒条上的启动按钮已删（53b5535）。

关键词：一键启动、launchCommand launchDir、createLauncher、comfyui/launch、canLaunch 回环、pythonw 无黑窗、90秒轮询 10秒冷却、detached 不随 DSH 死、启动触发点收敛、已验收

### 0mv83c5hg-72b982d14c4042969baf10a59f
_重要性 2，状态 active，项目 dsh-maid-vcp_

vcp 版本进度（dsh-maid-vcp）：**0.6.14 / 补丁 v6.42 + 补丁器 v10.3**（2026-10-16，提交 `afda565` 已推，tag v0.6.14 已推）。 **v10.3（补丁器）—— 补上 inlineCode 缺口 + 放宽 code 判据**：① G 项 `buildInlineCodeGuard`：行内代码以 `<!--` 开头且剥完为空才拦，返回 render 结果；普通行内代码、注释后还有正文的一律放行；render 抛异常只 warn 并退回原样。② E′：`case"code"` 判据去掉 `^` 锚定，改为「**含** vcp-root」。`patchInlineCode` 设计成可重复调用、不依赖符号表，故「已是 v10 形态」的短路分支也能补装。自测 `_probe/vcp-inlinecode-v103-probe.mjs` **24 用例全绿**；asar 正式写入（`+747912`）；**04:41 重启后**从界面真实路径 `curl http://127.0.0.1:19387/assets/index-5SrrfWpU.js` 取回 747912 字节（与 asar 条目一致）、G 守卫在、旧 `^` 判据 0 处。**唯一剩肉眼一项**：正文里反引号包住的 `<!--tts:…-->` 不该再显形。另：bundle 里 `case"inlineCode"` 有 2 处，@654814 属纯文本提取分支（`return e.value??""`），故意不装。 **v6.42（0.6.13）—— 未闭合注释不再吞正文**：v6.41 对未闭合 `<!--` 是无条件截断到消息末尾，小困把朗读标记写残（结尾只剩 `--`、或写成 `了。>`）时正文与卡片被整体剥光。修法：`stripHtmlComments(html, lenient)` 加参数，`render` 入口传 `true`——宽容模式只吃掉未闭合标记所在的整行；行尾没换行时仍吃到末尾。配套 TTS 侧 `extractTtsSpokenOverride` 放宽认行尾/文末的 `--` 或 `>`（tts-fix 0.6.3）。 **v6.41（0.6.12）**：注释不再显形，老大实测确认（v6.40 挂 `parseFrag` 无效，因 `if (!v) return null` 在之前短路）。 **验证四层**：源码 `node --check` / 行为探针 / asar 回读 / 真人实测。**取证手法**：前端 bundle 服务路径 `http://127.0.0.1:19387/assets/index-5SrrfWpU.js`（无 `/dsh/` 前缀）；`patch/install-all.cjs` 无参数自动探测 app.asar 与 bundle；响应头没有 Cache-Control / ETag；**asar 头被进程缓存，必须完全退出重启**。原条目备份 `Works/_asar-backup/`。**未决**：web 端补丁器有意不同步（老大「只用桌面端」）。

关键词：vcp 版本进度、0.6.14、afda565、补丁器 v10.3、inlineCode 兜底、E 判据放宽、v6.42 lenient、空 Fragment 不是 null、asar 头缓存要重启、验证四层、重启后运行时复核、只用桌面端

### 0mv5epdhz-9675f22a3ff74947b87c748820
_重要性 2，状态 active，项目 dsh-maid-preset_

对话轮次会写 memory.db-wal（探针实测与发言时刻精确重合），同步的「空闲 10 分钟」实际＝聊天停下 10 分钟才推送。**推论（2026-10-16 实测印证）**：长会话里 WAL 持续变动 → 空闲钟永远走不满 → 同步静默停摆（本次积压 2 小时 / 35 条），手动补推靠 `_probe/mem-sync-now.mjs`。**已根治（v0.7.5）**：`maxWaitMinutes` 默认 60 兜底——距上次成功推送满 60 分钟强制推一次，不管库还在不在写。

关键词：memory.db-wal、对话轮次写库、空闲10分钟、maid-sync 推送时机、长会话停摆、maxWaitMinutes 已根治、手动补推 mem-sync-now、meow-memory

### 0mv76czmf-1576bd7c7f1f45ad981808d09f
_重要性 3，状态 active，项目 全局_

老大当前环境（2026-10-16 复核）：本机 ComfyUI 便携版在 `D:\ComfyUI_windows_portable`（run_nvidia_gpu.bat），模型硬链接自 `D:\DeepSeek Harness\Works\QwenImage-2.1models`；dsh-maid-comfyui 的 `launchCommand` 已预填该 bat、`launchDir` 填便携版根目录。github 直连不通，本机代理 127.0.0.1:7890，git push 必须显式带 `-c http.proxy=`/`-c https.proxy=`。**Works 下自家插件现为八仓**：dsh-maid-preset / dsh-maid-scenery / dsh-maid-vcp（目录原名 dsh-raw-html）/ dsh-maid-comfyui / dsh-maid-tts-fix / dsh-maid-lane-fix（已封存）/ dsh-maid-patch-kit / dsh-maid-plugins（官网），全部以 `link:` 接进 profile `C:\Users\Kayle\.dsh\profiles\desktop`（node_modules 里是 junction，源码即安装）。另有 dsh-our-free-model 从 `D:\Downloads` junction 进来。

关键词：ComfyUI 便携版路径、run_nvidia_gpu.bat、代理 7890、git push 代理、link 接入 profile、八仓目录、QwenImage-2.1models、junction 源码即安装、desktop profile、dsh-our-free-model

### 0mv60mo1p-281a17a56ddf4b358f99039968
_重要性 3，状态 active，项目 dsh_

dsh GUI 前端补丁史（**历史脉络，最新现状见 0mv9weuy / 0mv83c5hg**）：v8 因 F 补丁吞掉 h/m 声明导致整个消息区白屏，已弃用（备份 app.asar.bak-bad-v8）；v9（2026-10-13）修好：目标 index-5SrrfWpU.js 633282→738882 B，sha 45116a3f…e81dd，asar 11470 条 integrity 零不匹配，脚本 patch-webui-v8.cjs + fix-v9.mjs，基准 app.asar.bak-before-v8。**2026-10-13 的 asar 改动面审计**：相对原始未打补丁版，11470 条 packed 条目里只有 1 个文件内容不同——`dsh/node_modules/@deepseek-ai/dsh-web-frontend/dist/assets/index-5SrrfWpU.js`；其上叠加两个补丁且都在：① web boot audit 补丁（`if(o.length>0)throw new Error(` → `console.error(`，修「强制刷新页面」崩溃）；② raw HTML 渲染补丁。备份曾占约 825 MB。**DSH 升级会覆盖全部补丁**。此后前端补丁一路演进到 v10.3（vcp 0.6.14），asar 现 126672730 字节。

关键词：asar 改动面审计、index-5SrrfWpU.js、audit 补丁、throw 改 console.error、只有一个文件不同、备份占用 825MB、bak-before-v8、v8 白屏弃用、强制刷新崩溃、升级覆盖补丁、历史脉络以 v10.3 为准

### 0mv6dwfqt-90942e5c68a140b09d85994df5
_重要性 3，状态 active，项目 dsh_

dsh-raw-html（现名 **dsh-maid-vcp**）已本地化并接管：源仓库 `D:\DeepSeek Harness\Works\dsh-raw-html`，远端 `https://github.com/Valorine97417/dsh-raw-html`（**无 upstream**，上游 plolpl789 已停更）。**接手时版本 v0.6.4（2026-10-13 推送，commit 178ecd4）；现状已到 v0.6.14（commit `afda565`，2026-10-16）**，包名与仓库名沿用 dsh-maid-vcp（GitHub 仓地址仍是 dsh-raw-html 未改）。profile 依赖写法 `link:D:/DeepSeek Harness/Works/dsh-raw-html`，node_modules 里为 junction。仓库已补 repository/homepage/bugs 字段与 cordis/react/schemastery 依赖声明。**上游真实状态（2026-10-14 浅抓核实）**：`plolpl789/dsh-raw-html` 最后一笔 = `ab1f1d5` 2026-08-28 23:51，距今 46 天无动静，14 个 PR ref 也全是旧的；`ab1f1d5` 不在本地仓库对象库里（本地 5 笔，首笔 `a21bb7a` 即接管）。因为没配 upstream，上游就算诈尸也不会自动流进来。

关键词：dsh-raw-html 接管、现名 dsh-maid-vcp、plolpl789 停更、ab1f1d5、无 upstream 远端、link junction、接手时 v0.6.4 现 v0.6.14、afda565、Valorine97417、上游诈尸不会自动流入

### 0mv8aqicc-5a140e9b69cc4bd6ac0f280e8f
_重要性 2，状态 active，项目 dsh_

【ego-browser 已于 2026-10-16 从 profile 卸载，本条仅「装回时」参考】如何确认 ego 浏览器进程是否残留：ego 的 Chrome 主进程命令行特征为 `--class=ego-lite-linux --user-data-dir=C:\Users\Kayle\AppData\Local\ego-lite-linux\profile --remote-debugging-port=0`，与老大日常 Chrome（`AppData\Local\Google\Chrome\User Data`）可据此区分。关闭用 `taskkill /PID <主进程> /T /F` 带走整棵进程树；复核用 pwsh `Get-CimInstance Win32_Process -Filter "Name='chrome.exe'" | Where-Object { $_.CommandLine -like '*ego-lite-linux*' }` 计数应为 0（实测收尾后 remaining=0）。状态文件 `C:\Users\Kayle\AppData\Local\ego-lite-linux\browser.json` 记着 port/pid，杀进程后不会自动更新。坑：调任何 `ego_*` 工具（连 `ego_status`、`ego_js` 这种只读探测）都会把 ego 浏览器重新拉起来（一次 9 个 chrome.exe）——「关窗」和「核验」不能同批做；`ego_space_close` 在 space 不存在时报 `task space not found` 并 exit 1，得靠 pwsh 按命令行特征 `Stop-Process -Force` 兜底。

关键词：ego 进程识别、ego-lite-linux、taskkill 进程树、Chrome 主进程区分、残留复核 Get-CimInstance、ego_status 拉起进程、task space not found、Stop-Process 兜底、已卸载 2026-10-16、装回时参考

### 0mv9weuyt-d9273bb626fa4b0f9e409cfcd9
_重要性 3，状态 active，项目 dsh-maid-vcp_

dsh-maid-vcp 补丁器 v10.3 已落盘 asar、提交推送、并**经重启后运行时复核**（2026-10-16）：`patch/patch-frontend-asar.cjs` 新增 `buildInlineCodeGuard` / `resolveCtxVar` / `patchInlineCode`（判据极窄：行内代码以 `<!--` 开头且剥完为空才拦，否则放行）。写入走追加式（`新 asar 126672730，+747912`）。提交 `afda565`（v0.6.14）已推 origin/main，tag `v0.6.14` 已推；README/DESIGN §4/CHANGELOG 补了 v10.3 全段；源文件备份归档 `Works/_probe/vcp-v103-bak-20261016/`。**04:41 重启后验证**：`curl http://127.0.0.1:19387/assets/index-5SrrfWpU.js` 取回 747912 字节（与 asar 条目一致）⇒ 进程确已读到新 asar；G 守卫在、旧 `^` 判据 0 处、新判据 1 处。原条目备份 `Works/_asar-backup/bundle-index-5SrrfWpU.js.2026-10-15T18-54-08-339Z`（747456B，**G 未装的原始形态**，探针喂料用它）。**仍待肉眼验收**：正文里反引号包住的 `<!--tts:…-->` 不该再显形。

关键词：v10.3、inlineCode 兜底、buildInlineCodeGuard、patchInlineCode、asar 追加式写入、afda565、v0.6.14、重启后运行时复核、747912 字节、G 未装原始备份、反引号标记验收

### 0mv9vdxwv-d7b6484d5ff9498780db36ad7b
_重要性 3，状态 active，项目 dsh_

ego-browser 使用度全量盘点（2026-10-16，47 会话 / 14724 次工具调用回溯）：ego_* 共 1068 次=7.3%，只在 11/47 会话出现，4 个会话吃掉 84%。工具分布极度偏斜——ego_script 681 次（64%，被当成廉价 Node 执行器用，本该走 ops_bash），ego_js 178、navigate 44；**ego_click/fill/select/key/hover/snapshot 等交互类全为 0**。真·非浏览器不可的约 75 次，只三类：B 站搜索抓取、持久登录 profile、本地 HTML 截图（后者已被本机 Chrome headless 替代）。成本账：35 项工具定义说明合计 11847 字符 ≈5400 tokens 常驻每步上下文。无任何插件依赖它。**结论演进**：小困当时建议「留着但降级为按需启动」——**老大未采纳**，2026-10-16 拍板直接卸载（m00164 原话「那就不用留了，把dsh-better-sidebar 和 dsh-ego-browser 这两个卸载了。」），本地已卸净、补丁正本归档 `_probe/ego-patch-archive-2026-10-16/`。

关键词：ego-browser 已卸载、使用度统计、工具调用分布、ego_script 滥用、常驻 token 成本、交互类调用为 0、B站抓取、本地截图可替代、不如卸载、老大拍板卸载、按需启动建议未采纳

### 0mva04giv-f3f7720095ff4f8ab429c6013f
_重要性 2，状态 active，项目 jasna_

int8 预设（=1080P 最佳）提升空间定性（2026-10-16）：**画质已到顶**——ltx-undistilled 就是官方 Best 档，large_canvas/fp16/cq18 全开，secondary_restoration 在 LTX 路径下官方自动关（不是没开）。**速度三个口子都要拿质量换**：① Fast mode（--ltx-fast，官方约快 1.4x、细节略少）需先装 nvfp4 模型；② ltx_auto_split_percent:12 是最大提速口，小块交 BasicVSR++，代价是那块质量降级；③ 关 large_canvas（1080p 未做同素材对照，速度收益未证实）。不碰质量的只有排队夜跑与腾显存（1080p 峰值余量仅 105 MB，关 Chrome 宽出 186 MB）。小困建议先测 nvfp4+Fast，锁同一 seed 20260923 出数字再拍板。

关键词：int8 预设 提升空间、处理速度 画质提升、Fast mode ltx-fast、nvfp4 模型、ltx_auto_split_percent 12、关 large_canvas、画质已到顶、secondary_restoration 自动关、腾显存 关 Chrome、锁 seed 20260923、细节略少 1.4x

### 0mv9t0enb-457cd60914cb48f08bd184e3cc
_重要性 3，状态 active，项目 jasna_

老大保存的 jasna 预设（settings.json，2026-10-16 复核）：user_presets 只有一条、`last_selected="int8"`。值：restoration_model=ltx、ltx_model=undistilled、ltx_seed=20260923、ltx_fast=false、`ltx_large_canvas=true`（**实跑证实本机静默回落 512px，等于没生效，见 0mv9os15i**）、ltx_auto_split=false、batch_size=4、max_clip_size=90、temporal_overlap=8、secondary_restoration=none、denoise none、detection_model=rfdetr-v6-large、threshold 0.4、compile_basicvsrpp=true、codec=hevc、encoder_cq=18、**encoder_custom_args 老大已自行改成 `preset=p7`（正确格式）**、sharpen 0.0、output_pattern="{original}_restored.mp4"。备份 `settings.json.bak-int8-基线-20261016-012600`（md5 7245CE3EE9705C5CD3057A4BAD71F2E2）。

关键词：int8 预设 settings.json、preset=p7 已改对、ltx_large_canvas 静默回落、ltx_model undistilled、encoder_cq 18、max_clip_size 90、temporal_overlap 8、rfdetr-v6-large 阈值0.4、last_selected int8、预设备份 md5 7245CE3E

### 0mva0nl5y-b6502d8294764746b2ff25a18f
_重要性 3，状态 active，项目 jasna_

Jasna LTX 长片耗时模型（用本机 ltx-speed-profile.json 系数推得）：四步里 **scan 与 encode 走全片逐帧**（本片 216841 帧 → scan 约 50 分钟、encode 约 25 分钟，合计约 1.5 小时打底）；**denoise 与 compose 只处理含马赛克的窗口**，故总时长 ≈ 1.5 小时 + 每个窗口约 2 分 20 秒（denoise 62s + compose 76s）。短片数字不能按时长线性外推：10 秒测试片 705 秒里 denoise+compose 吃掉 522 秒，是固定开销摊在短片身上；长片反而摊薄。

关键词：长片耗时估算、LTX 四步耗时结构、scan encode 全片逐帧、denoise compose 只算马赛克窗口、每窗口 2 分 20 秒、ltx-speed-profile.json 系数、短片不能线性外推、固定开销摊薄、216841 帧 scan 50 分钟、预估总时长

### 0mv9pwtj5-ac00052ac10944cf96afe944ee
_重要性 3，状态 active，项目 jasna_

LTX 模型选型结论（老大问四选一哪个最好、哪个适合本机）：质量最优 = Best（ltx-restore-alpha1-int8，13.37GB）；最适合本机 8GB 显存 = Best+Fast（ltx-restore-alpha1-nvfp4，7.73GB，--ltx-fast 官方限 RTX 50 系，本机 RTX 5060 是 sm120，包里已预编译 sm120-nvfp4 内核）。取舍依据：分档线在 distilled vs undistilled（distill8 把步数压到 8 步伤底子），nvfp4 只压权重损失小；12.45GiB 装不进 8GB 显存、要往系统内存搬，而本机 pagefile 仅 2GB。官方对 Fast 只写「细节略少」+快约 1.4×，无画质百分比——要真数字只能拿官方测试片锁同一 --ltx-seed（默认 20260923）同帧对比。

关键词：LTX 模型选型、四选一、Best、Fast mode、nvfp4、int8、distill8、8GB 显存、RTX 5060、哪个最好、哪个适合我、细节略少

### 0mv9pwtjp-fdd69a0e745f4377bfd27d5261
_重要性 2，状态 active，项目 jasna_

LTX 模型文件落地规则（官方 models.md）：放进 Jasna 文件夹内的 model_weights/ltx-restore（不存在要自建），文件名连 .enc 一起原样保留一个字别改，放好后重跑 LTX 不再提示下载。除所选模型外必配 vae.safetensors.enc 与 vae-decoder.safetensors.enc。官方下载体积口径：Standard 约 15GB、Fast mode 约 9GB、Best 在 Standard 之上再加约 13GB。检测模型默认阈值 rfdetr-v6-large=0.40 / rfdetr-v6=0.35。

关键词：ltx-restore 目录、model_weights、文件名原样、.enc、vae.safetensors、vae-decoder、必配文件、下载体积、15GB 9GB 13GB、rfdetr-v6-large、阈值 0.40

### 0mv9t0emw-5e8d04b15ea4434882e0377c08
_重要性 3，状态 active，项目 jasna_

Jasna GUI「自定义参数」（encoder_custom_args）官方格式是**逗号分隔的 key=value**（示例 rc-lookahead=32），不是 CLI 风格——老大填的 `-preset p7` 无效，正确写法 `preset=p7`。preset 合法值 p1（最快）–p7（画质最好），默认 p5，只影响编码速度/压缩率、不吃显存。CQ 只能走 CQ 控件，写进这一栏会报 `--cq conflicts with --encoder-settings`；同义键重复也报错（spatial_aq/spatial-aq）。

关键词：自定义参数、encoder_custom_args、preset=p7、rc-lookahead、CQ 冲突、encoder-settings、NVENC preset p1-p7、高级编码器参数、key=value 逗号分隔、编码设置

### 0mv9t0enq-46464b546e1b49149212afa71a
_重要性 2，状态 active，项目 jasna_

jasna.exe 的中文 UI 文案已全量扫描：脚本 D:\DeepSeek Harness\Works\_probe\scan-ui-all.ps1（UTF-8 解码 + [\u4e00-\u9fff] 正则），产出 D:\DeepSeek Harness\Works\_probe\jasna-ui-all.txt（7879 条）。可直接引用的原文：「需要 12 GB 可用显存」「1080p 下 90 约需 4 GB，180 约需 5 GB，4K 约需 1.5 倍」「显存不足？先降低这个值」「关闭它几乎不会节省显存」「高级编码器参数，以逗号分隔的 key=value」「例如 rc-lookahead=32」。注意「NVIDIA 内存回退设置」是**系统检查里的一条检查项，不是用户可调项**（全库含「回退」的串只此一条）。

关键词：jasna UI 文案、jasna-ui-all.txt、scan-ui-all.ps1、12 GB 可用显存、Max Clip Size 显存对照、内存回退设置、系统检查、UTF-8 中文扫描、编译不省显存、GUI 原文

### 0mv9u9khq-891cbdb7cd854a7f8e2623b755
_重要性 3，状态 active，项目 jasna_

Jasna 1080p+large_canvas+ltx-undistilled 实跑资源峰值（int8 预设，官方测试片基线 A-int8-base 与三档批次）：显存 GPU used 峰值 7739–7791 MiB / 8151 MiB，**free 最低仅 105–157 MiB（贴死边）**；提交内存峰值 40.5–41.55 GiB / 上限 47.06 GiB；物理可用最低 1.22–1.53 GiB；jasna 三进程 WS 峰值约 21.1 GB。LTX 四步进度：scan → encode → denoise（1080p 225 步，约 4.0–4.2 s/步）→ compose。**结论：1080p 不爆，但显存余量已贴到百 MB 级——并发跑别的吃显存程序就会翻车。**

关键词：显存峰值 7791MiB、free 最低 105MiB、提交内存 41.55GiB、物理可用 1.22GiB、jasna WS 21GB、denoise 225 步、4.0 s/step、LTX 四步 scan encode denoise compose、1080p 贴边不爆、large_canvas 开启、余量百MB级

### 0mv9u9ki7-ef686459e0b34cbe80b0b53332
_重要性 3，状态 active，项目 jasna_

三档测试素材在 D:\Downloads\text（difficulties 1920x1080 29.97 7235s；Midterm 1080x1920 竖屏 23.98 1946s；Simple 8 个片段含真 4K 59.94 15–34s）。裁剪短片规矩：LTX 分块处理，峰值与片长无关，故先剪 6–10 秒短片验流程（原片 2 小时一轮要十几小时）。测试输出曾走 E:\jasna-out（老大定，因 D 盘容量不足），2026-10-16 已归档至 D:\DeepSeek Harness\Works\_jasna-ltx-测试归档-20261016\ 并删除原目录。脚本需放无空格路径。

关键词：测试素材三档、difficulties Midterm Simple、竖屏 1080x1920、4K 片段 59.94、短片剪裁 6-10 秒、分块处理峰值与片长无关、D 盘容量不足改 E 盘、已归档 Works 测试归档、无空格路径、int8 预设先跑

### 0mv9ywhf3-f85554eb6e934953898893a721
_重要性 3，状态 active，项目 jasna_

Jasna 三档测试实测结果（int8 预设，官方测试片基线 A-int8-base 墙钟 2466.3s/300 帧 exit 0）：S1-1080p 778.8s exit 0；S2-4K(3840x2160 59.94) **exit 1 失败** 625.5s；S3(实为1080p) 933.8s exit 0；M1-竖屏1080x1920 610.7s exit 0；D1-1080p 705.5s exit 0。→ 5 跑 4 过 1 挂，唯一挂的就是唯一一个真 4K。全批峰值：GPU used max 7739MiB、free min 157MiB、commit max 41.55/47.06GiB、物理可用 min 1.22GiB。**1080p 全部跑通不中断 = int8 预设锁定为 1080P 最佳预设（m01273）。**

关键词：三档测试结果、4K 失败、1080p 全部跑通、int8 最佳预设、墙钟耗时、S1 S2 S3 M1 D1、官方测试片基线、2466秒、峰值 7739MiB、物理可用 1.22GiB、5跑4过1挂、exit code 1

### 0mv9ywhg6-4f41c094cb5b454996cc088b9f
_重要性 3，状态 active，项目 jasna_

虚拟内存（pagefile）对 Jasna 的定性——老大问过两次（m01356「虚拟内存还有扩大来做提升的空间吗」、m01381「多出来的虚拟空间可以拿来提升质量或处理速度吗」）：**它不是加速器**，睡在硬盘上，唯一作用是把系统「提交内存」将被耗尽时把冷数据挪进去续命、避免进程被杀（= 老大说的「处理中断」）。实测分配 16384MB、**历史峰值用量仅 1342MB**→不是不够用是还没得用。换不来画质也换不来速度。间接价值两条：① 长片保险（2 小时原片后段内存压力累积）；② 给 NVIDIA 系统内存回退铺地基。要提速提细节得从 fp16、腾显存、auto-split 动刀。

关键词：虚拟内存不是加速器、pagefile 峰值用量 1342MB、提交内存耗尽进程被杀、长片保险、系统内存回退地基、换不来画质速度、提升质量或处理速度、16GB 分配、换来换页速度暴跌、提速提细节路径

### 0mv9ztz2d-024c34a38175469897addbe5d9
_重要性 3，状态 active，项目 jasna_

fp16 在 Jasna 的 LTX 路径是硬依赖、不是可选优化：A/B 实测 `--no-fp16` 直接崩在 `LTX 3/4 denoise` 第 2 步，报 `RuntimeError: opaque LTX prefetch order is unavailable (opaque_ltx.py:43 <- blocks.py:290 <- sampler.py:245)`（352.7s 是失败耗时）；`--fp16`（默认开）完整跑完 729.3s、compose 240/240、出片 4,774,829B。载体：D:\jasna-test\fp16-ab.ps1、产物 E:\jasna-out\fp16\、源 clip3s.mp4。另注：3 秒片段也要 729s → 短片段不省时间，LTX 每轮有固定准备/测速开销。

关键词：fp16、no-fp16、半精度、opaque LTX prefetch order、LTX 硬依赖、denoise 第二步崩、fp16-ab.ps1、clip3s、短片段不省时间、固定准备测速开销、显存不足、opaque_ltx.py

### 0mva04gjc-ec8e99b3b06f4f6f9a2f0f2cd0
_重要性 2，状态 active，项目 jasna_

jasna 测试归档落点：D:\DeepSeek Harness\Works\_jasna-ltx-测试归档-20261016\（66 文件 / 53 MB）——含 logs\（B/C 组日志、monitor.csv 3787 行、queue-boot）、cmp\（33 张抽帧对比图）、fp16\（对照 tsv + 日志 + mp4）、mp4-original\（6 支输出片含 B-S2-4k.FAILED.mp4）、说明.md、runs.tsv、opt-runs.tsv、run-opt.ps1、README.md（自写，标清每样是什么与如何重建）。原 E:\jasna-out 已删除。

关键词：测试归档、关键日志迁出、E:\jasna-out 已删除、_jasna-ltx-测试归档-20261016、cmp 对比图、monitor.csv、B-S2-4k.FAILED.mp4、runs.tsv、说明.md、README 重建测试输入、53MB 66 文件

### 0mva04gju-9172cf0757834537b393e191f0
_重要性 2，状态 active，项目 jasna_

jasna 安装目录里「删了要重编 15–60 分钟」的编译产物，不可当垃圾清：model_weights\rfdetr-v6-large.bs1-4.win.engine(132M)、rfdetr-v6-large.bs1-4.fp16.win.engine(73M)、torch-compile-cache\(319M，ltx-worker 275M/triton 45M)、lada_mosaic_restoration_model_generic_v1.2_sub_engines\(141M)、ltx-speed-profile.json(433B，本机实测 encode/denoise/compose 系数)。另：D:\Downloads\ltx-restore-alpha1-nvfp4.safetensors.enc(7.3G，Fast mode 要用)仍在 Downloads 根目录待搬进 model_weights\ltx-restore\；D:\Downloads\settings.json 是别的软件（Steam 工具）的配置，不是 jasna 的。

关键词：编译产物 不可删、rfdetr-v6-large.win.engine、torch-compile-cache、ltx-speed-profile.json、重编 15-60 分钟、nvfp4 待搬入 ltx-restore、D 盘清理、Downloads\settings.json 非 jasna、jasna压缩包 7z 分卷、sub_engines

### 0mv9x8zpa-072995cb61b7476db7d3b23420
_重要性 2，状态 active，项目 dsh_

dsh-orb 已从残缺的 0.1.3 更新到 0.1.7 并**重启生效**（2026-10-16 04:41 验收）：实装包 version=0.1.7，lib/dist/dist\host/dist\computer-use/client.js/cordis.patch.yml 全在，cordis.yml:1743-1756 五段齐（比旧版多新增节点 `dsh-orb/computer-use/code-agent-registry`）。安装自测曾核过 1044 文件/36.7MB、依赖无悬空、三处版本号一致。旧包备份在 Works\_probe\orb-bak-20261016-030748，残缺残骸留在 node_modules\dsh-orb.broken-20261016-030834（可删）。已登记进 patch-kit `lib/targets.js`，状态 `watch`（上游还活跃，只登记待命）。

关键词：dsh-orb、0.1.7、悬浮球插件、重启生效、code-agent-registry、cordis.yml 1743、残缺 0.1.3、mini-yifan、watch 状态、koffi、electron-runtime 占用、更新完成

### 0mv9x949h-8913ee7846004eeba7e5d8cf3b
_重要性 3，状态 active，项目 dsh-maid-patch-kit_

patch-kit 的补丁元信息（中文名/用途/上游仓/收录理由）集中存在 lib/targets.js 的 TARGETS 对象，patch.mjs list 与 README 收录表共用这一份，避免文档与代码各写一份打架。新增补丁必须同步该文件，漏写只少印两行、不影响体检。老大原话（m00227）：「收录原则要补上插件中文名和备注能用来干嘛的。」

关键词：patch-kit、收录原则、中文名、用途说明、targets.js、README收录表、patch.mjs、list命令、元信息单一来源、新增补丁

### 0mv9y96co-9faf127ff76e4cd88cb15acb30
_重要性 2，状态 active，项目 dsh_

桌面端 DSH 启动形态：Electron 壳跑 `dsh-desktop-host/lib/index.js`，参数依次是 dsh 根 / profile 目录 / runtime / pnpm.mjs / bin —— 不是 `dsh web` 启动。内嵌 Web 端口 19387 由 desktop-host 硬写（`runProfile({args:['--no-open','--port','19387']})`），根路径 GET 返回 401（需鉴权 token）。判「服务活没活」看 2xx-4xx 即可（401 也算活）；但 Invoke-WebRequest 遇 401 会抛异常，脚本里得容错。

关键词：桌面端启动、dsh-desktop-host、Electron 壳、19387、runProfile、profile 目录、pnpm.mjs、401 鉴权、健康检查、dsh web 不适用、端口硬编码

### 0mv9z8cqm-6a7eb54172f14898abde9231ed
_重要性 3，状态 active，项目 dsh_

桌面端（desktop profile）的 cordis.yml 里 **webServer 是真实存在且在跑的**：`:537 webserver/@deepseek-ai/dsh-host-webserver`（host 127.0.0.1、port 取自 webStartup，实为 19387、gzip）+ `:547 web-runtime/@deepseek-ai/dsh-web-app` + `:535 web-startup`。所以 `ctx.inject(['webServer'])` 注册 HTTP 路由在桌面端可用（guard 的六条 `/guard/api/*` 就走这条路）。注意两点：① `dsh-host-webserver` 文件头写着「Electron uses file:// plus IPC instead」——外壳渲染不走它，但服务照起；② 桌面端 host 进程 `dsh-desktop-host/lib/index.js` 本身不含 web server，webserver 完全由 profile 的 cordis.yml 装配。

关键词：webServer 桌面端、dsh-host-webserver、19387、web-runtime、dsh-web-app、cordis.yml 装配、inject webServer、HTTP 路由注册、guard api 路由

### 0mv8kek16-84813ca380a24aaa8c16a67478
_重要性 2，状态 active，项目 jasna_

jasna 作者标称的显存峰值约 3.4 GiB 是**去码主路径（basicvsrpp）**的数据，不是 LTX；LTX 是 diffusion 路线、按块流式加载（jasna/ltx/blocks.py 的 BlockStore，大页锁内存被拒时降级到可分页内存而不失败）。**实测结论（2026-10-16，已跑通）：RTX 5060 8GB 跑 LTX 1080p 完全可行——显存峰值 7739–7791/8151 MiB（free 最低 105–157 MiB，贴边但没爆）；4K(3840x2160) 会在 `4/4 compose` 阶段挂掉，缺 36.5 MB 的 DiffVAE 解码空间。** 「未实测」的旧悬念已解除。

关键词：BlockStore 流式加载、basicvsrpp 3.4GiB 标称、LTX 已实测、1080p 显存贴边、4K compose 阶段挂、8G 显存够不够、扩散路线、显存峰值 7791MiB、trial 已不需要、5060 跑 LTX

### 0mv87vuqu-2547fba21a614402a970190c50
_重要性 2，状态 active，项目 dsh_

2026-10-14 夜三插件装齐并重启验证（profile desktop，pnpm add 串行）：dsh-better-sidebar 0.26.0 / dsh-ego-browser 0.8.6 / dsh-video-understand 0.5.2，均进 dsh.profile.bundles 并在 cordis.yml 生成挂载行；验证件为 better-sidebar /sidebar/api 返 405、ego doctor 全绿 + ego_navigate/screenshot 实测成功、video-understand 走本地网关 8326 跑通。**2026-10-16 现状：better-sidebar 与 ego-browser 已按老大拍板卸载并从 bundles/cordis.yml/patchedDependencies 全清，现仅 video-understand 在役。** 补丁类改动（video-understand 的 engine 补丁）会被 pnpm 重装冲掉，需跑 Works\_vendor\restore-video-understand.sh 恢复。

关键词：三插件安装、bundles 清单、cordis.yml 挂载行、video-understand 在役、better-sidebar 已卸、ego-browser 已卸、网关 8326 跑通、restore-video-understand.sh、重启验证

### 0mv9r9agb-3112da3f4f184795a672ef195d
_重要性 2，状态 active，项目 qwen-image-dsh_

2026-10-15 老大拍板：删 qwen3vl_8b_fp8_scaled.safetensors（9.86 GB，全盘零引用，只在 ComfyUI blueprints 官方模板里被提 URL）与 qwen3vl_8b_int8_convrot.safetensors（8.71 GB，仅官方 Qwen 2.1 t2i/i2i 模板引用）两个编码器变体，共 18.57 GB；老大实际在用的 mine_* 工作流走 qwen3vl_8b_nvfp4（5.87 GB，6 个文件引用）——两个名字（Works 侧 + ComfyUI 侧）必须一起删才真释放。同批删掉 Works\QwenImage-2.1models 整个目录。执行前已备份工作流 zip 与删除前 fileid 日志（_probe\qwen-delete-log-20261015.xml）。因老大重启 DSH，删除动作尚未执行。

关键词：qwen3vl_8b_fp8_scaled、qwen3vl_8b_int8_convrot、编码器变体、删除腾空间、nvfp4、零引用、官方模板、18.57GB、硬链接两个名字、磁盘清理、待执行

### 0mv6ww6fz-a97e8e62d87649a7aea73ee908
_重要性 2，状态 active，项目 dsh_

ops_bash 曾因 PowerShell 执行策略全挂：报「无法加载 ...\dsh-ops\bin\prepare-workspace.ps1，因为在此系统上禁止运行脚本」（SecurityError: UnauthorizedAccess），`Get-ExecutionPolicy -List` 五个 scope 全 Undefined=实际 Restricted。2026-10-15 已修复：`powershell -NoProfile -Command "Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force"`，之后 ops_bash 恢复正常（注册表 HKCU\Software\Microsoft\PowerShell\1\ShellIds\Microsoft.PowerShell 的 ExecutionPolicy 写入 REG_SZ RemoteSigned）。本机无 pwsh，只有 C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe。

关键词：bash 不可用、prepare-workspace.ps1、禁止运行脚本、ExecutionPolicy、Set-ExecutionPolicy、RemoteSigned、CurrentUser、SecurityError、UnauthorizedAccess、Get-ExecutionPolicy、无 pwsh、Windows PowerShell 5.1、ops_bash 修复

### 0mv9lf29a-7311a33cccce4a5e8f18b09099
_重要性 3，状态 active，项目 dsh_

C:\Users\Kayle\.dsh\.credentials.yaml 是明文 YAML，含 client-connection/browser-session（kind: grant，payload.secret 32B base64url）与多把 API key（AGNES_AI / SENSENOVA / OPENROUTER / DEEPSEEK / CODEARTS 等）。它是自签 dsh web cookie 的唯一来源；整文件别外泄、别贴出。

关键词：credentials.yaml、明文凭证、browser-session secret、自签 cookie 来源、API key 清单、别外泄、client-connection、dsh 凭据文件

### 0mv9jpoe1-9382617e862244a7a58ea23de2
_重要性 2，状态 active，项目 dsh_

desktop profile 目前没有 compatibility.json（2026-10-15 查），要装 peer 卡线的插件得自己建，键为「包名@版本 → 放行的运行版本数组」。

关键词：compatibility.json、版本豁免、peer 不匹配、desktop profile、插件准入、setVersionExemption、静默跳过、profile 根目录

### 0mv8hsgmf-c80dc4f35f0244c2bbc50bbb69
_重要性 2，状态 active，项目 dsh-maid-scenery,dsh-maid-patch-kit_

皮肤素材「配方」解析工具链在 `D:\DeepSeek Harness\Works\_probe\asset-parse\`：`to-png.py`（8 张皮肤素材转 PNG + 量真实尺寸/比例/alpha bbox → spec.json）、`extract-spec.py`（提取色板 → palette.json）、**`analyze-free.py`**（走本地网关 MODEL=`our-free-model/openrouter/free`，system 打头 + max_tokens 4096 → analysis.json，8 张里 6 张成功；`bottom_trim` 与 `bow_clean` 只回「User Safety: safe」，没解析出配方）。另有 `analyze.py`（更早那版，走 workbuddy 视觉返回 502，已弃用）。**视觉模型报的 aspect 不可信**（2172×320 报 6:1 / 10:1，真值 6.79:1），尺寸一律自己用 PIL 量。用途：老大要求「解析素材拿提示词+真实尺寸，让 ComfyUI 生成同款 UI 素材」。

关键词：asset-parse、素材解析工具链、to-png.py、spec.json、palette.json、analysis.json、analyze-free.py、our-free-model、User Safety safe、视觉模型 aspect 不可信、alpha bbox、ComfyUI 同款素材

### 0mv8iyzut-d275c41a25044ab7ae8d1dbc31
_重要性 2，状态 active，项目 dsh-maid-scenery,dsh-maid-patch-kit_

maid-atelier 皮肤的背景大图 `--maid-palace-art` = `ae6917bb….webp` 1586×992（月光宫殿大厅夜景：拱窗/月亮/水晶吊灯/金烛台/大理石反光），用法 `center bottom / cover no-repeat`，挂在 `[data-skin-chrome=character-stage]` 上。它是左栏那片「有质感的深蓝」的唯一来源。（原先还写着「ego 右栏可继承它铺内容区」——那套右栏美化已于 2026-10-15 全清回原版，此素材现只服务左栏；皮肤素材本身的用法与尺寸仍然有效。）

关键词：maid-palace-art、背景大图、月光宫殿、character-stage、1586x992、cover no-repeat、左栏质感来源、maid-atelier 素材、皮肤变量继承、皮肤素材实测尺寸

### 0mv8ktas7-33501b382e174046b09aa9a92b
_重要性 2，状态 active，项目 dsh_

本机可纯 PowerShell 抓主屏做真机验收：`_probe/asset-parse/grab-screen.ps1`（Add-Type System.Windows.Forms + [Screen]::PrimaryScreen.Bounds + Graphics.CopyFromScreen → live-screen.png）。主屏 1920×1080。DSH 主进程/宿主均无 `--remote-debugging-port`，拿不到 CDP，右栏面板验收只能靠「抓全屏 + 裁切放大 + PIL 判色」。

关键词：抓屏、截屏、PowerShell、CopyFromScreen、PrimaryScreen、真机验收、CDP 缺失、remote-debugging-port、grab-screen.ps1、1920x1080、面板验收

### 0mv8akesv-6a2f0ef42f4c414dbb770ace0e
_重要性 2，状态 active，项目 dsh_

本机尚未装的 DSH 插件候选（2026-10-15 现查 GitHub API + npm registry，已剔除本机已装）。**热门一路**：dsh-cost-meter ★419（push 10-14 / npm 1.8.26，170+ 模型价格目录）、dsh-boot-animation ★273（鲸鱼娘启动动画）、dsh-orb-cordis ★233（悬浮球，**71 个 open issue**，#69 工作区级故障）、dsh-wechat ★175（微信 iLink 桥）、dsh-550c-boot ★146、dsh-sieve ★108（上下文准入/披露，省 token）、dsh-prompt-market ★71、dsh-model-fusion ★62（贵 Lead + 便宜 Sidekick）、dsh-persona-dafeiyu ★49（内置大肥鱼/阿茶/听澜）、dsh-tool-todo-plus ★49、dsh-my-guardian（只在 npm，0.4.4）、dsh-agent-teams ★2138、dsh-plugin-radar ★1474、dsh-vision-toolkit ★895、dsh-browser ★820、dsh-genui ★587、dsh-at-file ★522、dsh-find-plugin ★187。**建议避开**：破甲类/绕过审核类（fujiang-dsh、dsh-sd-bridge-guard、dsh-purge）。查询脚本 `_probe/dsh-cand-check.mjs`。

关键词：热门插件候选、待装清单、dsh-cost-meter、dsh-sieve、dsh-orb-cordis、dsh-model-fusion、dsh-prompt-market、dsh-boot-animation、dsh-wechat、dsh-my-guardian、剔除本机已装、星数活跃度

### 0mv83mxkf-80adc9e842cc45118b59798d75
_重要性 2，状态 active，项目 dsh_

billion-context 代理的实际端口记在 C:\Users\Kayle\.local\state\billion-context\port-zone.json（内容 {"lanes":{"dsh":18787}}），proxy-origin 文件另存 origin/instanceId/pid/lane/codeFingerprint。管理端点 GET http://127.0.0.1:18787/__bili/stats 返回 sessions / blindTunnels / unrecognizedPaths / conflicts 四块；/__bili/stats/conflicts 不存在（404 no such management endpoint）。19387 是 DSH web GUI 端口，不是 bili——往那里查 stats 会全 404。

关键词：billion-context 端口、18787、port-zone.json、proxy-origin、__bili/stats、conflicts 字段、管理端点、19387 DSH GUI、lanes dsh

### 0mv84q0wh-8f982268b5a7496882a654113b
_重要性 2，状态 active，项目 dsh-maid-lane-fix,dsh_

bili 报「nested re-entry into the bili fetch chain detected (#1662) — a coexisting plugin re-wrapped bili's own chain」，是小困自己的 dsh-maid-lane-fix 在 globalThis.fetch 上套的规范化中间层所致，无害：bili 在最老活锚点终止下潜、请求深度恒定，不阻塞、不改历史、不进 conflicts 台账。

关键词：nested re-entry、#1662、fetch chain、globalThis.fetch 包装、lane-fix 中间层、共存插件重包装、bili 告警、无害、最老活锚点、请求深度恒定、conflicts 台账

### 0mv85eneb-5ac08c99ec54422b89ec35a0fb
_重要性 2，状态 active，项目 dsh_

DSH 六个 agent 预设（cordis.yml 顺序）：standard(order1)/ptc(2)/minimal(3)/cordis(4)/maid(2)/whale-girl(40)。ptc = Programmatic Tool Calling 预设，独有 tool-presentation(mode: ptc，只暴露 run_code 传输+生成 SDK，不逐条暴露工具 schema)与 tool-ralph；cordis = 插件开发向，独有 tool-cordis（只读运行时 API 检查）与 skill-filesystem 指向 @deepseek-ai/dsh-agent-preset/skills；minimal 只有 7 个插件（持久 shell/pty）。

关键词：DSH 预设、preset-ptc、preset-cordis、Programmatic Tool Calling、run_code、tool-presentation、tool-cordis、tool-ralph、agent 预设列表、standard ptc minimal cordis maid、whale-girl、preset order

### 0mv8639u8-d141038f09b343caab75a5cce6
_重要性 3，状态 active，项目 dsh_

dsh-video-understand 0.5.2（ilps2）在本机已跑通可用。**补丁正主已迁到 dsh-maid-patch-kit**（`patches/dsh-video-understand@0.5.2.patch`，21,313 字节，走 pnpm patchedDependencies 登记，pnpm 重铺不丢）；`D:\DeepSeek Harness\Works\_vendor\dsh-video-understand-0.5.2-patched` 与 restore-video-understand.sh 是旧的手工备份，仅作回退参考。关键修复三件：① 用 DSH 自带 Python（`C:\Users\Kayle\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe`，3.12.14）在插件目录建 .venv 装 requirements.txt + pandas（.venv 补丁保不住，跑 patch-kit 的 `node scripts/venv.mjs` 重建）；② 打 issue#1 的 Windows 补丁 + 自补 PYTHONUTF8/PYTHONIOENCODING；③ **LLM 走 DSH 本地网关 127.0.0.1:8326（= 当前正在用的模型，无需任何外部 key）**——engine/understand_video.py、stages.py、visual_level.py 三文件各加 `_gateway_config()` + `_profile_default_model()`，插在 credentials 回落之前。视觉级还需首条 system 消息 + max_tokens 4096（reasoning 模型）。实测 BV1GJ411x7h7 出详细画面描述，压缩 99.99%、约 0.011 元、39s。

关键词：dsh-video-understand、已跑通、patch-kit 正主、pnpm patch 登记、_gateway_config、本地网关 8326、无需外部 key、venv.mjs 重建、PYTHONUTF8、issue#1 Windows 补丁、max_tokens 4096、视频理解

### 0mv8639ui-6dca5b33a03f4fe59123d63ad9
_重要性 3，状态 active，项目 dsh_

本机媒体/ML 前置（2026-10-14 实测）：ffmpeg/ffprobe 磁盘上有但不在 PATH（详见 0mv86j5y）；无 uv；系统 Python 3.14.7 未装 torch/numpy；.credentials.yaml 只有 deepseek 无 xiaomi key（xiaomi key 在 desktop profile 的 cordis.patch.yml 里）。做音频/ML 分析直接用 D:\ComfyUI_windows_portable\python_embeded\python.exe，自带 numpy/scipy/torch/torchaudio/transformers。

关键词：ffmpeg 位置、jasna-windows、ffmpeg 不在PATH、which 探测不到、无 uv、Python 3.14.7、torch 未装、credentials.yaml、xiaomi key 位置、ComfyUI python_embeded、本机环境探测、音视频前置

### 0mv86svpl-5fe4109fa02145ee8540e86a57
_重要性 3，状态 active，项目 全局_

DSH 自带一套托管运行时（不用自己装 Python）：C:\Users\Kayle\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\ 下有 python\python.exe（3.12.14，pip 26.2.1、venv 可用，预装 numpy 2.3.5 / pandas 3.0.1 / Pillow / yt-dlp / python-docx / openpyxl / lxml）、node\bin\node.exe、pnpm\bin\pnpm.mjs。load_workspace_dependencies 工具会直接返回这些绝对路径 + 已装包版本，做 Python 脚本任务前先调它，别急着找系统解释器。

关键词：DSH 托管运行时、dsh-runtimes、dsh-primary-runtime dependencies、自带 Python 3.12、自带 node pnpm、load_workspace_dependencies、预装 numpy pandas、python.exe 路径、免装解释器、工作区依赖查询

### 0mv86svpx-7bfd24c3f9a74771b8353f063f
_重要性 2，状态 active，项目 dsh_

本机 Python 解释器盘点（2026-10-14）：① DSH 托管 C:\Users\Kayle\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe = 3.12.14（最合规，pip/venv 齐，带 numpy/pandas/Pillow/yt-dlp）；② 系统 py -0p 只列出 3.14.7（C:\Users\Kayle\AppData\Local\Programs\Python\Python314）——超出多数 ML 包自述的 3.9–3.13 上限；③ D:\ComfyUI_windows_portable\python_embeded\python.exe = 3.13.14（带 torch/transformers，但老大不让往里装东西）；④ 无 uv。挑解释器时按这个顺序选。

关键词：本机 Python 解释器、3.12.14 托管、3.14.7 系统、ComfyUI python_embeded 3.13、py -0p 只列一个、无 uv、解释器选择顺序、ML 包版本上限、Windows 多 Python、合规解释器

### 0mv871edf-e730a23202a94c6bb88714b847
_重要性 2，状态 stale，项目 dsh_

dsh-better-sidebar（服务基座，开放 ctx.betterSidebar：registerTab/registerFileViewer/registerFileIcon）、dsh-ego-browser（消费者，探 ctx.get('betterSidebar') 有则注册侧边栏 tab「Agent 浏览器」order 70，无则挂右下浮动球 #dsh-ego-fab，并 ctx.inject(['betterSidebar']) 蹲守自动切换）、dsh-video-understand（孤岛，dsh 字段只有 bundle.patch，无 client facet，不注册 tab）。安装顺序先基座再 ego-browser。2026-10-14 三者均已装入 desktop profile（0.26.0 / 0.8.6 / 0.5.2），挂载行见 cordis.yml:1672/1677/1679，实测 ego_navigate+ego_screenshot 可用、sidebar 路由活着、video_understand 走本地网关 8326 跑通。

关键词：better-sidebar、ego-browser、video-understand、三者搭配、ctx.betterSidebar、registerTab、服务基座、浮动球切换、bundle.patch、client facet、安装顺序、原生右侧栏

### 0mv871edv-384b572c45a442be8a05137541
_重要性 2，状态 active，项目 dsh_

dsh-better-sidebar 版本对应：0.26.0 要求 DSH >=0.2.0-rc.2（本机 0.2.0-rc.2 正好命中）、Node >=20；0.1.7 线要配 0.22.1。本机 Node v24.21.0。按 README 对照表装，别随手 @latest。

关键词：better-sidebar 版本、0.26.0、0.22.1、DSH 0.2.0-rc.2、Node 版本要求、peerDependencies、版本对照表、别用 latest、宿主兼容

### 0mv89vsf6-5046ca508d5745f18ecd75bc13
_重要性 3，状态 active，项目 dsh_

DSH 自带 OpenAI 兼容本地网关（dsh-our-free-model 的 chan-relay）：`http://127.0.0.1:8326/v1/chat/completions`，key 在 `C:\Users\Kayle\.dsh\openai-gateway\api-key`（43 字符），端口默认 8326、可用 DSH_OPENAI_GATEWAY_PORT 覆盖，跑在 DSH 主进程内。模型名必须是 `provider/model` 形式（如 workbuddy/deepseek-v4.1-flash，即当前 agent-default-model），无前缀会报 "model must use provider/model format"。不带 key 返回 401。任何插件想用「DSH 当前正在用的模型」，走这个网关即可，无需外部 API key。

关键词：本地网关、8326、openai-gateway、chan-relay、dsh-our-free-model、provider/model、当前模型、agent-default-model、api-key、OpenAI 兼容、127.0.0.1

### 0mv8h0vo2-3e0e0cdc2dcc4234a77214ec95
_重要性 2，状态 active，项目 dsh-maid-scenery,dsh-maid-patch-kit_

皮肤「设置项边框」素材 `3d2b126caf0549c2e86684dcbc0ff4443b887e5e1684190710d2df7940466d98.webp`（2172×320，横条金框，左右两端金饰、四角圆角金线）的**皮肤原用法**：`border-image-slice: 0 220`（只切左右两端）+ `border-width: 0 34px`，上下不切、中间直框横向拉伸。变量名 `--maid-settings-frame-art`。照搬即得竖版金框，纹样零改动（自己旋转 90° 或切九宫格都是加戏）。

关键词：金框素材、maid-settings-frame-art、border-image-slice 0 220、border-width 0 34px、设置项边框、3d2b126c、2172x320、只切左右两端、竖版金框、皮肤原用法

### 0mv8hsgk3-1a9e0e1a84cd4f07ab80dfe791
_重要性 2，状态 active，项目 dsh,dsh-maid-patch-kit_

DSH 右侧栏「Agent 浏览器」面板全屏态实测 **594 × 949 px**；顶边弧带素材 1200×303 等比铺满 = **150px 高**（现 CSS calc(25.25% + 6px) 正好落这个数）；皮肤左侧栏 280px 宽时弧带落 72px——同一素材在不同宽容器里高度本就不同，等比才对。

关键词：右侧栏面板尺寸、594x949、全屏截图测量、弧带等比铺满、150px、待改区域像素、面板宽高、蝴蝶结压扁、measure-panel.py、sidebar-width

### 0mv8kbvgu-8431f640f48b4de4aaf438f106
_重要性 2，状态 active，项目 jasna_

QingLiu2333/jasna 的 main 与上游 Kruk2/jasna main 完全一致（identical，ahead 0/behind 0，HEAD d366827），pascal-support 分支 = 上游 main + 2 个提交（HEAD 2ecc388，即 90 文件 +16390/−503 的 Pascal/Volta 补丁），轻量 tag T0.5 就指向这个 commit。

关键词：pascal-support 分支、fork 关系、identical、2ecc388、d366827、T0.5 tag、Pascal Volta 补丁、提交数比对

### 0mv6oeag3-8cb8546701e946b4aa0e79f833
_重要性 2，状态 active，项目 全局_

modlens 视觉桥已修复可用（2026-10-15）：@liustack/modlens 3.26.6 装在 profile desktop 的 node_modules 里但 dist/main.js 缺失——从 npm registry 拉 tarball（curl -x http://127.0.0.1:7890 https://registry.npmjs.org/@liustack/modlens/-/modlens-3.26.6.tgz）解出补进 dist/ 即好。provider 配置写 C:\Users\Kayle\.modlens\config.json：provider=openai，providers.openai={apiKey: 取自 C:\Users\Kayle\.dsh\.credentials.yaml 的 OPENROUTER_AI_API_KEY, baseUrl: https://openrouter.ai/api/v1, model: deepseek/deepseek-v4.1-flash（带图输入）, proxy: http://127.0.0.1:7890}。CLI 用法：node <modlens>\dist\main.js analyze --input <图> --prompt <问>（子命令是 analyze 不是 read），单图约 40-95s。注意：模型会话若切到带视觉的，read_image 直接可用，不必绕 modlens。

关键词：modlens、视觉桥、dist/main.js、npm tarball 补包、openrouter、.credentials.yaml、deepseek-v4.1-flash、analyze --input、config.json、读图

### 0mv8iodp9-5ad0a76d5ac24d11b5b7afc187
_重要性 3，状态 active，项目 全局,dsh-maid-plugins_

大肥鲸女仆（小困形象）二创铁律，老大两次纠正：①「人鱼尾是尾巴，有人的双脚的」——必须人类双腿+白袜短靴与深蓝人鱼尾并存，不能画成纯人鱼；②「眼睛是正常眼睛不是XX」——半睁慵懒死鱼眼（真瞳孔、蓝瞳、deadpan），绝不能画成 X 形符号眼。参考底图 `whale_maid_ref.png`（ComfyUI input/，Q 版漂浮）。生成时 prompt 显式写 bare human legs with white ankle socks + normal half-lidded sleepy eyes, NO X marks 即能压住。

关键词：大肥鲸、小困形象、人鱼尾、人类双脚、白袜、死鱼眼、半睁眼、X符号眼、whale_maid_ref、二创、角色一致性

### 0mv8d1561-7ba450105cd049298bfb05cc85
_重要性 3，状态 active，项目 dsh_

EAC 通道 `deepseek-ai/deepseek-v4.1-flash` 是网关侧上游挂了，不是请求姿势问题：2026-10-15 凌晨实测，裸 `https.request` 直打 `ourfreemodel.beichenapi.com/eac/v1/chat/completions` → 200 + `: channel open`，之后每 ~15s 一个 `: keepalive`，**第 301.7s** 才吐 `data: {"error":{"message":"upstream returned non-SSE response (HTTP 500)"}}` 然后 END。六种 body 变体并发对照（裸 body / reasoning_effort high / low / reasoning{enabled:false} / max_tokens:64 / thinking disabled）**结果完全一致**（首帧 301.4s、1 帧、同一错误）。历史 stats 显示它**曾经活着且只是慢**：10/13 04:02 ttft 21.6s ✓、10/14 04:15 66s ✓、20:24 234s ✓、22:24 292s ✓；从 10/14 21:46 起出现 ✗（elapsed≈302s），22:24 后彻底转 ✗。同批 `z-ai/glm-5.3-flash` 也慢（158s/228s/273s）但 400s 预算下 197s 出 "OK"，是活的。另 `moonshotai/kimi-k2.6` 也是同类 500（`Function 'xxx': Not found for account`）。结论：这两个模型只能等网关修上游，客户端无解。老大指定只用 v4.1-flash，因此已放弃。

关键词：EAC 通道、deepseek-v4.1-flash、upstream returned non-SSE response、HTTP 500、首字延迟、301秒、keepalive、网关侧故障、beichenapi、kimi-k2.6、body 变体对照、放弃

### 0mv8cxicw-3e1d8b5b96d842cca205a36065
_重要性 2，状态 stale，项目 qwen-image-dsh_

瓷羊局部修复任务（2026-10-15）：**老大已放弃**（m01641「放弃这个」），不再继续。原图 = 白金瓷羊摆件（761×840，水印「豆包AI」），落盘 C:\Users\Kayle\.dsh\cache\attachments\request-images\c6\c66d70b3fab503527545a6a54e8b02f457d233bcba72be3198df4bdd15ef039f。产物留在 D:\DeepSeek Harness\Works\goat-fix\（最佳版 fix-K.png、报告 report\index.html），未清理。

关键词：瓷羊、goat-fix、白金瓷羊摆件、多余踩地腿、多出的角尖、fix-K、761x840、缺陷坐标、局部修复、阶段总结报告、豆包AI 水印

### 0mv899dop-8484b23cc7284f679ad69b62c8
_重要性 3，状态 active，项目 dsh-maid-preset,dsh-maid-tts-fix_

【已迁出·2026-10-15】voice-refs（音色提示词 prompt.md + 参照样本说明 README.json + 三个 wav）原在 dsh-maid-preset，现已整个迁到 **dsh-maid-tts-fix/voice-refs/**。迁移原因：老大拍板 preset 只专注人设预设与记忆，TTS 相关（补丁 + 音色）统一归 tts-fix。wav 两边 md5 逐字节一致（09=13c2b70aeddfb328e247bd8f889ed03a、04=ed2c97cd6168646dd8cc57af6a05165c、02=b42a59515d74c3747ed4460c4e8e602f）；tts-fix 的 .gitignore 排除 voice-refs/*.wav，package.json 的 files 只放 prompt.md 与 README.json（wav 不进 npm 包，实测打包命中 0）。音色配置本体始终在 profile 的 cordis.patch.yml（带 API 密钥，永不进任何仓库）。

关键词：voice-refs 迁移、音色提示词落点、tts-fix voice-refs、preset 已删除 voice-refs、wav 不入库、npm files 白名单、音色本体在 profile、API 密钥不入库、md5 核对、样本靶子

### 0mv84bmyu-c4ee3d8ce8664214a748086e97
_重要性 3，状态 active，项目 dsh_

小困「人设」的两个落点别搞混：① 人设文本（personaPrefix）在 dsh-maid-preset 仓库——cordis.patch.yml 三处（personaPrefix / preset-standard / preset-maid）+ defaults/cordis.patch.yml 三处，随包分发；② TTS 音色本体在 desktop profile 的 C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml 的 xiaomi-mimo-tts 段（voiceDesignPrompt / voiceDesignCustomPrompt 两处同内容，2026-10-14 第 116 / 124 行），该段属 dsh-skin managed（注释写着 do not edit，实际可直接改）。**生效条件：改 profile 文件后要重启 DSH 才生效；插件设置面板里的本地值优先于 profile 文件——面板里贴过覆盖值，改文件就不生效，两边必须一致。**（旧记的「改音色不必重启」只对面板内直接改有效，已更正。）**音色提示词的「定稿与演进」文档在 dsh-maid-tts-fix 仓库的 voice-refs/（2026-10-15 从 dsh-maid-preset 迁出）；人设包现在只管人设文本与记忆。**

关键词：人设落点、音色落点、personaPrefix、voiceDesignPrompt、xiaomi-mimo-tts 段、desktop profile、dsh-skin managed、defaults 出厂备份、两处同内容、面板值优先于文件、重启 DSH、音色文档在 tts-fix

### 0mv87yhdd-867d5e6856ac41a2963b567185
_重要性 3，状态 active，项目 dsh-maid-comfyui_

同人插画参考图：老大的小困 chibi 立绘存于 D:\DeepSeek Harness\Works\maid-fanart\images\00-reference.png，同时拷进 ComfyUI input 作 whale_maid_ref.png（蓝紫长发、白蕾丝发带、深蓝女仆裙+白围裙+蓝蝴蝶结、鲸鱼尾巴）。批量出同人插画直接拿它当参考图，不必再问老大要。实测（2026-10-14，6 张换场景：深夜书库/深海漂流/雨夜窗台/午后沙发/樱下小憩/天台星海）：衣服/发带/裙子保得住，但发色会从蓝紫漂向偏紫、脸型每张略有出入——这套模型是「重画」不是局部编辑，要更贴原立绘得把人物特征写进 prompt 逐张压。成品：6 张原图在 maid-fanart/images/，画廊页 maid-fanart/index.html（浏览器打开即看大图，不依赖 ComfyUI 服务）。

关键词：同人插画、whale_maid_ref、maid-fanart、小困形象、参考图、发色漂移、脸型不一致、重画不是局部编辑、换场景、图生图实测

### 0mv877gtp-118addf4c27e4ff881667b384b
_重要性 3，状态 active，项目 dsh_

小困 TTS 音色提示词定稿（2026-10-14）= AB 实验 C 组文本，已落 C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml 第 116 行与第 124 行（voiceDesignPrompt 与 voiceDesignCustomPrompt 同内容），首行「普通话，小女孩的嗓音，大约八到十一岁，声音清亮而结实，有厚度，中音区，不是又高又细的童声。」共 7 行。备份 cordis.patch.yml.bak-tts-c-20261014（6817B，md5 9e36263bc05cabd0e8e4c7674d8c03f5）。同段 voiceRate 已由 1.2 退回 1、readScope smart、format pcm、model mimo-v2.5-tts-voicedesign。改完要重启 DSH 生效，且插件面板里的本地值会盖过文件，两边要一致。对照组文本存 _probe/tts-ab/{B,C,D}.txt。

关键词：音色提示词定稿、C 组文本、小女孩八到十一岁、清亮结实有厚度、中音区、cordis.patch.yml 116 124 行、bak-tts-c-20261014、voiceRate 退回 1、重启生效、面板值优先、tts-ab 对照文本、voiceDesignPrompt 现值

### 0mv873mtw-32ea702a48944ef7975a7ab33f
_重要性 3，状态 active，项目 dsh-maid-lane-fix_

opencode.ai 免费车道三道门 AND：① session/request 去前缀后 12 位 hex 的低 12 位须落在序号区间 ② UA 禁 deepseek-harness/<版本号> 组合（裸词+opencode/ 反而放行）③ body.tools 须含 bash/glob/grep/read 且带 tool_choice（第三道归上游 applyFingerprint 管）。

关键词：三道门、AND、opencode.ai、免费车道、x-opencode-session、User-Agent、deepseek-harness、body.tools、tool_choice、FINGERPRINT_TOOLS、applyFingerprint、403 FreeTierError

### 0mv864nze-0abc7d65315a4ece8668b8db67
_重要性 3，状态 active，项目 dsh_

本机音频/ML 分析工具链（2026-10-14 实测）：系统 Python 3.14.7 里 numpy/scipy/librosa/torch 全无（ffmpeg 在盘上、只是不在 PATH）；但 **D:\ComfyUI_windows_portable\python_embeded\python.exe（3.13.14）自带 numpy 2.5.3、scipy 1.18.1、torch 2.14.0+cu130、torchaudio 2.11.0、transformers 5.17.0、tokenizers、av 19.0.0、pillow**——做声学分析（F0、能量、时长）直接用它，不必装任何依赖（缺 cv2/pandas）。手法：自相关法测基频（80–500Hz 带内取自相关峰值，阈值 0.35），纯 numpy 即可，不需要 librosa。脚本 D:\DeepSeek Harness\Works\_probe\tts-acoustic.py。

关键词：ComfyUI python_embeded、内嵌 Python 3.13、numpy torch torchaudio transformers、免安装依赖、声学分析、自相关法测基频、F0 提取、librosa 不需要、系统 Python 3.14 无库、tts-acoustic.py、缺 cv2 pandas

### 0mv864nzo-182c240141a042a79a94e49bcb
_重要性 2，状态 active，项目 dsh_

desktop profile 的 xiaomi-mimo-tts 段 voiceRate 原为 1.2（默认 1.0）——插件 PCM 流式播放，voiceRate ≠ 1.0 变速变调，1.2× 相当于音高整体抬高约 3 个半音，是「音高很高」的机械性来源之一，与模型随机性是两个独立因素。**2026-10-14 老大拍板「退到 1.0×，语速改由提示词补」，已改成 voiceRate: 1**（备份 cordis.patch.yml.bak-rate1-20261014-220042）。

关键词：voiceRate、播放倍速、变速变调、音高被抬高、三个半音、PCM 流式、退回 1.0、语速由提示词补、cordis.patch.yml 配置、音高偏高的元凶

### 0mv86dka9-353bfeb15878413399ed8dd7d3
_重要性 2，状态 active，项目 dsh_

小困童声参照样本（老大从 10 个云端候选中挑中 09/04/02）已归档到 D:\DeepSeek Harness\Works\dsh-maid-preset\voice-refs\，含 README.json 记录生成条件与 md5。三者 F0 中位 266.7/292.7/300.0 Hz，同处低音区但 03/05/07 未被挑中——音高只是其中一维。

关键词：音色参照样本、voice-refs、童声靶子、pick-09、F0 中位、10个候选、老大挑选、本地克隆参考音、dsh-maid-preset、md5

### 0mv867dv6-8e2e98ff9fa1498591c41145d7
_重要性 2，状态 active，项目 dsh_

EAC 六模型实测首帧：openai/gpt-oss-20b 748ms、z-ai/glm-5.3 1241ms、moonshotai/kimi-k3 13933ms 三个正常；moonshotai/kimi-k2.6 恒 0 帧（网关裸错误 JSON：Function Not found for account）；z-ai/glm-5.3-flash 304s 才吐错误帧、deepseek-ai/deepseek-v4.1-flash 300s+ 无首帧（stats.json 里 158482ms/234284ms 两条是压线过的）。网关是 Caddy 反代，响应头 via: 1.1 Caddy、x-accel-buffering: no、content-type: text/event-stream。

关键词：首帧实测、glm-5.3-flash、deepseek-v4.1-flash、kimi-k2.6空流、304秒、压线通过、stats.json、Caddy反代、x-accel-buffering、gpt-oss-20b、kimi-k3、EAC模型清单

### 0mv867dub-8e2fd2e7a4da44b7ac6266d45a
_重要性 2，状态 active，项目 dsh_

本机 dsh-our-free-model 的 EAC（共付）车道解锁实况：mode=worker、base=https://ourfreemodel.beichenapi.com/eac/v1、flavor=harness、worker 模式无 apiKey（走 HMAC 签名，signingSecret 2b3a…）。GET /v1/models 999ms 返回 6 个模型：z-ai/glm-5.3、openai/gpt-oss-20b、moonshotai/kimi-k2.6、z-ai/glm-5.3-flash、moonshotai/kimi-k3、deepseek-ai/deepseek-v4.1-flash（与 catalog.json 的 sealIds 完全一致）。

关键词：EAC通道、共付车道、密封凭据、worker模式、beichenapi、eac/v1、HMAC签名、signingSecret、sealIds、glm-5.3、gpt-oss-20b、kimi-k3、解锁凭据

### 0mv84pdzm-d09fc8d345354fe29ad569dfd1
_重要性 3，状态 active，项目 dsh-maid-lane-fix_

dsh-maid-lane-fix 重启后实测生效（2026-10-14 21:10）：DSH 重启（进程 21:09:55 起）后插件自动探测，免费车道可用度 0% → 60%（6/10）。可用：space-bunny-free、ling-3.1-flash-free、mimo-v2.6-flash-free、nemotron-3.5-lightning-free、step-5-preview-free、longcat-2.5-preview-free。地区受限 2（muse-spark 1.2/1.3，CN 出口所致）、上游自身问题 2（cat-jam 端点挂、jev 协议不支持）。数据源 `$DSH_HOME/our-free-model/availability.json`。

关键词：lane-fix生效、重启后、可用度60%、6/10、免费车道恢复、availability.json、探测批次、地区受限、CN出口、space-bunny、muse-spark、cat-jam、jev

### 0mv84f0k0-25918c7f2f554a98a6c62c5086
_重要性 2，状态 active，项目 dsh_

2026-10-14 老大把会话权限调成全开：file policy = danger-full-access（工作区外文件可直接改，改 desktop profile 的 cordis.patch.yml 不再需要提权）、approval policy = never（不要设 sandbox_permissions，带了会被自动拒）。

关键词：danger-full-access、approval policy never、sandbox_permissions 被拒、工作区外可写、profile 文件直接改、权限全开、提权申请、cordis.patch.yml 写入、文件策略、会话权限

### 0mv846pcx-fa07acb5151c4d468d96dfa6dd
_重要性 2，状态 active，项目 dsh-maid-lane-fix_

opencode 免费模型实况（2026-10-14，三门全开下实测）：可用 5 个——space-bunny-free、big-pickle、nemotron-3.5-lightning-free、mimo-v2.6-flash-free、longcat-2.5-preview-free；配额 429 两个——ling-3.1-flash-free、step-5-preview-free；另三个不是插件问题——jev-1.13-free（ModelProtocolUnsupported 400）、cat-jam-free（上游 server_error 403）、muse-spark-1.3-contributor-free（RegionError 地区门）。GET /zen/v1/models 恒 200（86 个模型），门只在 POST /v1/chat/completions 上。

关键词：免费模型、可用清单、space-bunny、big-pickle、nemotron、mimo、longcat、429配额、地区门、RegionError、ModelProtocolUnsupported、models接口

### 0mv76w7ld-77b5e8aaeeb04b9b961648c689
_重要性 2，状态 active，项目 dsh_

desktop profile 已装 dsh-xiaomi-tts@3.0.8（Xiaomi MiMo TTS，npm 源，仓库 ppy-web/dsh-plugin-xiaomi-mimo-tts）：package.json dependencies + dsh.profile.bundles（16 项）均已补位，lockfile 包集合 103→105 无删减。插件自带 cordis.patch.yml 含两段 insert：① xiaomi-mimo-tts 宿主+Web 双侧条目；② 额外插 preset-whale-girl「鲸鱼娘」Agent 预设（@deepseek-ai/dsh-agent-preset，order 40，人设运行期读包内 skills/whale-girl/SKILL.md），README 明说「安装后自动添加」。apiKey 已在 profile patch 层的 dsh-skin managed 段内填好，音色「冰糖」，voiceDesignPrompt/presetStylePrompt/instruction 均为中文；autoPlay=true、sound/task/click 音效全关。2026-10-14 05:30 重启后 boot 产物 cordis.yml 干净生效、无崩溃。备份 *.bak-install-xiaomi-20261014-052422。鲸鱼娘去留待老大定（摘除法见 lesson 0mv7…「id 定向 disabled」）。

关键词：dsh-xiaomi-tts、Xiaomi MiMo TTS、语音朗读、插件安装、desktop profile、dsh.profile.bundles、鲸鱼娘预设、whale-girl、ppy-web、cordis.patch.yml insert、apiKey 已填、冰糖音色、拆两段 insert

### 0mv83c7wa-42763cc49dd84aae83b0d032f1
_重要性 2，状态 active，项目 dsh-maid-scenery_

dsh-maid-scenery 版本进度：v0.2.2（`f3e652e` 音乐正本搬进 $DSH_HOME，包内降级为镜像；新增 lib/music.js，files 白名单加 "lib"，.gitignore 加 .smoke-music/，冒烟 103→114 条）。v0.2.1 起自带皮肤定制兜底（读 localStorage['dsh.skin-manager.preferences.v2'] 投影一次，管理器上线照旧接管）。2026-10-14 本机已拉平；正本目录 D:\DeepSeek Harness\dsh-maid-scenery 当时尚未生成，等重启后由收养逻辑建出来（歌仍在包内 vendor/video-skin/assets/，含 Wet Hands - C418.flac 3961133 字节）。

关键词：scenery 版本进度、0.2.2、f3e652e、音乐正本、lib/music.js、files 白名单 lib、冒烟 103 114、皮肤定制兜底、SKIN_DEFAULTS、收养逻辑待重启、Wet Hands C418

### 0mv6vwu9w-11d04900e3b94121971d7b77f9
_重要性 2，状态 active，项目 dsh-maid-scenery_

scenery 背景音乐（0.2.2 起）：**正本是 `$DSH_HOME/dsh-maid-scenery/music/`**——歌丢这里，面板「打开音乐位置」开的就是它。启动时幂等同步：包内遗留音频先「收养」进正本，再把正本每首镜像回 `vendor/video-skin/assets/`（同卷硬链接零占空间，跨卷退复制），正本删掉的歌包内旧镜像一并清。`$DSH_HOME/dsh-video-skin.json` 的 `background.music` 字段缺席时自动填目录第一首；字段一旦在场（哪怕空串＝要静音）一个字都不改。旧说法「音频丢进 vendor/video-skin/assets/」已作废——那里活在 node_modules 里，插件升级就丢。逻辑全在 `lib/music.js`。

关键词：背景音乐、音乐正本、dsh-maid-scenery/music、打开音乐位置、硬链接镜像、收养逻辑、lib/music.js、background.music、musicVolume、dsh-video-skin.json、0.2.2、丢歌目录

### 0mv6oquv6-e806c3590bf6466ebdfcc3d793
_重要性 2，状态 active，项目 dsh_

沙箱写入判定（2026-10-14 实证）：workspace-write 只给「工作区根目录 + 显式带沙箱账号 ACE 的路径」写权。D:\DeepSeek Harness\Works 根可写、`_probe` 可写，但四个插件子目录（只有继承来的 Administrators/SYSTEM/Authenticated Users ACE，**没有** `S-1-4-*` 沙箱账号 ACE）一律被拒——症状是 `git fetch` 报 `error: cannot open '.git/FETCH_HEAD': Permission denied`，`Set-Content` 报 "Access to the path ... is denied"。同理 `C:\Users\Kayle\.dsh` 在工作区外也要提权。**正确处置是提权到 danger-full-access，不是修 ACL**（加载 diagnose-windows-sandbox-acl skill 后判定不适用）。只读期规避：`git ls-remote origin refs/heads/main` 不写 .git 可用来对比远端 HEAD；`git rev-parse origin/main` 读的是上次 fetch 的旧值，不可信。

关键词：沙箱写入被拒、Permission denied、FETCH_HEAD、workspace-write、danger-full-access、提权、S-1-4 沙箱账号、ACL ACE、git ls-remote 只读规避、git fetch 失败、工作区子目录

### 0mv75ybh8-2339e90279eb4e24a029dd70f5
_重要性 3，状态 active，项目 dsh-maid-scenery_

皮肤设置的落地链（0.2.1 起已改）：dsh-maid-scenery/client.js:1411 exposeSkinCustomization 只登记定义，管理器 skin-manager/lib/client.js:643 definition.apply({values,visibility}) 仍是权威执行者；但 0.2.1 起 scenery 自带兜底——启动时自己 readManagedPreferences(SKIN_ID) 读同一份 localStorage 并 apply 一次，管理器在线时从同源值重新 apply，两边不打架。值存 localStorage `dsh.skin-manager.preferences.v2` 的 ["maid-atelier"] 块。九个落点：data-dsh-whale-maid-art/-font/-workspace-font/-model-exit/-flash-glasses、data-maid-composer-mode/-composer-bottom-only、data-maid-nav-mode、变量 --maid-workspace-row-height。**卸掉管理器不再落回 CSS 出厂默认**（旧结论已作废）。桌面图标/备份恢复两区块属管理器通用 UI，非皮肤 settings。

关键词：exposeSkinCustomization、definition.apply、skin-manager.preferences.v2、maid-atelier 设置块、0.2.1 兜底 apply、readManagedPreferences、九落点投影、卸掉管理器也保住、data-dsh-whale-maid-art、workspace-row-height、旧结论作废

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

### 0mv73810n-98a8376e8d0b40b79247432343
_重要性 2，状态 active，项目 qwen-image-dsh_

ComfyUI 面板透明根因与定色：面板底色原取 `--dsw-alias-bg-layer-2`，而 maid-atelier 主题的 bg 系列是 90% 不透明、video-skin 又把它压到 0.2 上下，视频直接透上来。老大要固定 `#121f41`，已改为 `background: var(--dsc-panel-surface, #121f41)`（styles.ts:75 连接提示条 + :114 面板本体）。**小困第一次写成了 `#121f43`（差两个色阶），老大照旧说「还是透明」**——写死色值必须逐字核对。改的是 src/client/styles.ts，`npm run build:client` 后**刷新页面即生效**（不用重启 DSH）。

关键词：面板透明、121f41、121f43 写错、bg-layer-2 半透明、video-skin 压透明、dsc-panel-surface、styles.ts、build:client、刷新页面即生效、主题变量不可靠、写死实色遮挡

### 0mv7380zz-8586d37ddf5d4556928488e69f
_重要性 3，状态 active，项目 qwen-image-dsh_

DSH 里两条可运行的 API 工作流（2026-10-14 入库，POST /comfyui/workflows，origin 头必带，200）：`1f51647b-7f7b-428b-9b29-1fad7fae82be` = Qwen-Image 2.1 文生图（8 参数：宽高/prompt/seed 随机/steps 25/cfg 1/负面词/denoise，实测 25.5 秒出 1024²）；`e53fa4fd-c29d-4a10-9f08-adb64b97e6f9` = 图像编辑（9 参数，多参考图槽）。参数先经 POST /comfyui/workflows/recognize 自动识别，手工参数拼在后面；两条都写了 SKILL.md 技能包。

关键词：comfyui_workflow、API 工作流入库、文生图工作流、图像编辑工作流、工作流 id、参数识别 recognize、SKILL.md 技能包、8 个参数、9 个参数、origin 头、绕开提取

### 0mv71j4i2-0afb69f36c6f489585a9e10276
_重要性 3，状态 active，项目 qwen-image-dsh,dsh_

dsh-comfyui 上游有两条没人合的 0.2.0 适配 PR（2026-10-14 查到，均 open、作者未回应、无评论）：**#18**（smallmj，10-10 提，head = `smallmj/dsh-comfyui` 分支 `up/banner-id` @ `d92c5d8`，mergeable clean；改 6 处：peer 追加 `|| ^0.2.0-rc.2`（有意排除 rc.1）、`src/tools.ts` 用 `jobs.readAt` 探测分叉 owner 契约、client inject 删掉 `@deepseek-ai/dsh-client-runtime`、`tsdown.config.mjs` 的 banner id 改为从 package.json 派生、新增 `scripts/test-host-compat.mjs` 离线接缝自测 27 项、.gitignore）；**#14**（164105419，10-03 提，head `164105419/dsh-comfyui` 分支 `support-dsh-0.2.0` @ `c5f49b4`，5 文件 +22/−8，同题）。上游 master 仍停在 0.5.4 / peer 里无 0.2.0 范围。→ 要装 dsh-comfyui 不必等作者也不必自己写适配，可直接以 PR 18 的 head 为基线。

关键词：PR 18、PR 14、smallmj、up/banner-id、d92c5d8、164105419、support-dsh-0.2.0、0.2.0-rc.2 适配、peer 范围追加、无人合并、拿 head 当基线、dsh-client-runtime

### 0mv6zby8d-3e6002b5a58c4b758a54306033
_重要性 2，状态 active，项目 qwen-image-dsh_

ComfyUI 本体认识 Qwen-Image 2.1：最新 release v0.39.0（2026-10-05 发布，仓库已是 Comfy-Org/ComfyUI）更新日志原文有 `Fix crash when selecting int8 or int4 cache in qwen image 2.1`（PR 16667），正对上老大的 int8_convrot 权重；模板版本 v0.11.76。便携版资产：`ComfyUI_windows_portable_nvidia.7z`（2,003,629,308 B）与 `_nvidia_cu126.7z`（1,895,335,518 B），下载 URL 形如 `https://github.com/Comfy-Org/ComfyUI/releases/download/v0.39.0/ComfyUI_windows_portable_nvidia.7z`。

关键词：ComfyUI v0.39.0、changelog、int8 cache crash、qwen image 2.1、PR 16667、便携版资产、nvidia.7z、cu126、Comfy-Org/ComfyUI、release 下载地址、模板 v0.11.76

### 0mv6w8gbj-0e17765a6ff743acb4a2eec3fd
_重要性 2，状态 active，项目 全局_

web_search 工具当前报 HTTP 401（DeepSeek 搜索端点 api key eceb 无效）；端点可在 设置 &gt; 插件 &gt; 插件配置 &gt; web search 改，或设 DEEPSEEK_SEARCH_BASE_URL。临时替代取证路径：web_fetch 直接拉 registry.npmjs.org/&lt;包名&gt; 与 api.github.com/search/repositories?q=&lt;名&gt;，本机事实用 pwsh/ops_* 现场核查。

关键词：web_search、401、Authentication Fails、api key invalid、搜索端点、DEEPSEEK_SEARCH_BASE_URL、web_fetch 替代、registry.npmjs.org、api.github.com、联网检索、插件配置

### 0mv6wgq0p-f7843025ea3d467a8ec727b6fa
_重要性 2，状态 active，项目 dsh-maid-scenery_

聊天背景圆钮可拖动吸边：位置存 localStorage['dsh-maid-scenery-knobs']（{side,y}），面板跟随，拖完吞掉那一次 click；活动范围限定在对话框那一列（[class*='centerCol']，侧栏右缘/标题条下缘为界），拖不进侧边栏。

关键词：圆钮拖动、吸附、dsvs-knobs-pill、活动范围、centerCol、对话框、侧边栏、localStorage、位置记忆、scenery.js、夹取范围

### 0mv6whr6g-e2edf83becd3429dbbff45bdb5
_重要性 2，状态 active，项目 dsh-maid-scenery_

本机装了 dsh-whale-widget v0.4.2（MeteorNOX/DeepSeek-Balance-Whale-Widget，npm 实体包，非 link）：位于 C:/Users/Kayle/.dsh/profiles/desktop/node_modules/dsh-whale-widget（主体 assets/whale-widget.js 1.1MB + lib/index.js 265KB，另有 cordis.patch.yml）。右下角余额小鲸鱼挂件，带拖拽 + 四边吸附（吸附区可自定义比例/像素、贴左镜像翻转、可关吸附），角色可换成女仆立绘，相关数据在 ~/.dsh/whale-audio 与 whale-bubble-imgs。老大拿它当「可拖拽吸附」的参照物，要求聊天背景圆钮也照这个做。

关键词：dsh-whale-widget、小鲸鱼挂件、余额挂件、拖拽吸附、四边吸附、镜像翻转、参照物、女仆立绘、MeteorNOX、桌面壳挂件

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

### 0mv5drmfv-67c4c885c7ec44fba98ccad7ed
_重要性 2，状态 active，项目 dsh_

DSH profile 配置合成机制：profile 的 `cordis.patch.yml` 是**权威 patch 层**（手改这里），`cordis.yml` 是 DSH **合成落盘的产物**（2026-10-13 实测 1578 行、含各 bundle 层合并结果）——改 patch 后约 3 秒内 cordis.yml 会自动重生成，不需手动触发。合成顺序：各 bundle 的 cordis.patch.yml（由 package.json 的 dsh.profile.bundles 选层）→ profile cordis.patch.yml 覆盖层 → --patch 叠层。bundle 依赖由 dependencyClosure 以各 bundle 自己的 package.json 为锚做 Node 查找（link 包经 junction 到真实目录）。patch insert 行的 name 可写 ./ 相对路径，被 anchorInsertedPluginNames 锚定到 patch 文件旁。（旧记载「cordis.yml 恒为空 []」已过时作废）

关键词：cordis.yml、bundles、配置合成、dependencyClosure、cordis.patch.yml、link包、junction、anchorInsertedPluginNames、patch层、package.json、profile

### 0mv6nww6q-f7f7d12412ef490d836dba5130
_重要性 2，状态 active，项目 dsh-maid-preset_

reflect.md 是 meow 记忆反思提示词，路径 lib/meow/prompts/{zh,en,pt-br}/reflect.md（三语言必须同步）。槽位机制：readSlotFile 每次现读无缓存，优先 <home>/.dsh-meow/prompts/<lang>/<slot>.md 实例覆盖，再 lib/prompts/<lang>/，兜底 zh；SLOT_PARAMS.reflect 只要求 {projectList} 占位符；buildReflectMessage 加 REFLECT_MARKER 前缀。改完无需重启即生效。2026-10-13 起含「两道闸」小节（commit 2cc63e4，尚未 bump 版本号）。

关键词：reflect.md、反思提示词、槽位、readSlotFile、projectList、buildReflectMessage、REFLECT_MARKER、三语言同步、prompts 目录、实例覆盖、热读生效、两道闸

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

### 0mv6d5z0b-95753bf786eb4b9f9700826c7c
_重要性 3，状态 active，项目 dsh_

老大 2026-10-13 定调：可信模式「设置为默认开启。然后隐藏掉。这样换另一台安装就不会当聊天背景面板按钮了。」——实现为 isTrusted() 默认 true（仅显式 localStorage['raw-html.trusted']==='0' 才关），盾锁徽章默认不挂载（fixed right:14px/bottom:14px 与 dsh-video-skin 悬浮钮 #dsvs-knobs-pill 撞位），需唤出时 DevTools 执行 localStorage.setItem('raw-html.trustedBadge','1') 再刷新。该改动曾被 pnpm install 冲掉，2026-10-13 已重放恢复，三项行为均已实测通过。

关键词：可信模式默认开启、徽章隐藏、trustedBadge、换机安装、聊天背景面板按钮撞位、dsvs-knobs-pill、isTrusted 默认 true、raw-html.trusted 显式0才关、DevTools 唤出、老大约束

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

### 0mv68rm3c-cc9c99f6daf7402cb64d029221
_重要性 3，状态 active，项目 全局_

卡片底色别自作主张：老大要的是「和输出框不打架又不糊成一片」，具体色值由他拍板。2026-10-13 小困先改成跟随宿主变量 var(--dsw-alias-bg-layer-1)，老大随即指定固定实色 #121F41——同源问题靠「比输出框稍亮一档」解决，不靠变量绑定。

关键词：卡片底色、老大指定色值、121F41、不跟宿主变量、比输出框亮一档、用户纠正、底色定稿、raw 卡片、同源但不糊、别自作主张

### 0mv68m6gy-3b016ab20c774611a293292fce
_重要性 2，状态 active，项目 dsh_

探 dsh-raw-html 的 RPC：POST http://127.0.0.1:19387/dsh-raw-html/<方法名>，body 为信封 {"type":"client-request","rpcId":"...","method":"<方法名>","payload":{}}，取回 j.result.value（如 list-styles → value.styles 数组）。前缀路由免鉴权，桌面端也能用。

关键词：dsh-raw-html RPC、list-styles 探针、client-request 信封、rpcId、前缀路由免鉴权、19387、result.value.styles、插件方法调用、POST 探针

### 0mv67sjqx-9b00469202024b8d81576eeb89
_重要性 2，状态 active，项目 dsh-maid-preset_

meow-memory 改包内整合后 entry name 变 dsh-maid-preset/meow；profile 层补丁 name 必须同步，否则 name mismatch 静默失效——终验组合链扫出的雷。

关键词：dsh-maid-preset/meow、name mismatch、patch 层叠、静默失效、包内整合、entry name、组合链验证、promptLang

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

### 0mv52mce7-23a00551992f4b12a8470fd123
_重要性 2，状态 active，项目 dsh-maid-preset_

同步失败绝不装哑：push 失败标 pushFailed 下轮重试并写 $DSH_HOME/maid-sync.log；状态文件 maid-sync-state.json 记已同步水位，删掉即触发基准同步。

关键词：同步状态文件、pushFailed、失败重试、maid-sync.log、同步水位、基准同步、备份失败、日志位置、幂等同步、无变化跳过

### 0mv4z8jxx-971e7d005f384bd698c4efcbfc
_重要性 2，状态 active，项目 dsh_

meow-memory 已移出 profile 的 dependencies 与 bundles，改由 dsh-maid-preset 声明依赖并在其 cordis.patch.yml insert 它的 entry 行。

关键词：meow-memory、dsh-maid-preset、bundles、profile 依赖、entry 行、cordis.patch.yml、传递依赖、插件加载、bundle patch


## 经验（lesson）

### 0mvb7ng7t-f29ed1f1ec8943f78be3f7d047
_重要性 3，状态 active，项目 dsh-maid-preset,全局_

自检类工具（体检/巡检/一键检查）的探测点必须与**实际工作的现场**一致，不能拿自己的 cwd 或想当然的位置去猜——2026-10-17 实例：老大重启后点 preset 的「一键自检」，第 14 项 **git 身份** 红叉报「未配置（commit 会失败）」，可同步其实一直好着（上次推送成功、状态正常）。根因：自检在**自己的工作区 cwd** 里跑 `git config user.name`（老大从没在任何工作区配过身份，当然为空），而同步真正 commit 的地方是**专用克隆** `$DSH_HOME/maid-sync`，那儿 10-15 那次断更事故后已 `git config --local` 配好身份——**两处不是同一个地方，判据与事实分叉**。修法：身份探测按提交时的真实优先级排三来源（① `sync.identity` 配置 → ② 专用克隆里的 config → ③ cwd 兜底），详情写明命中哪一条；`selfCheck` 加第二参取 `workcopy`。
**普适要点**：体检项写出来先自问「我探测的这处，是不是干活的那处」——**假红比真红更毒**：真红让人去修，假红让人以为坏了、甚至去改本来好好的配置（本例若老大信了红叉去配 `sync.identity`，就是为不存在的问题动配置）。同族对照：`0mv9q30x9` 管「判据的输入存不存在」，本条管「判据观测的位置对不对」，两条都是「先质疑判据本身、再质疑实现」。
**另一条同轮教训**：自检详情若只说「未配置」而不说来源，无法自证；应把「走 sync.identity / 克隆内已配 / cwd」写进详情，让红绿都可追溯。

关键词：自检假红、探测点与工作现场不一致、git 身份红叉、专用克隆 maid-sync 才是提交处、selfCheck 加 workcopy 参数、身份三来源优先级、假红比真红更毒、为不存在的问题动配置、观测位置对不对、体检项自证来源、判据先质疑再质疑实现

### 0mv66t450-9ced889febf443d5b134d59b81
_重要性 3，状态 active，项目 全局_

补丁验证不能只查「补丁标记存在」：`node --check` 只验语法，**查不出未声明标识符**——比对替换前后的声明清单（如 useRef/const 变量是否都还在），或跑一次运行时冒烟。
**2026-10-17 新变体（凭脑补写符号名）**：改 preset 同步代码时，小困在补丁里**凭空写入两个不存在的函数/符号**——`drainMemoryTurns(agent)`（仓里根本没有这个函数，是脑补的）与 `envHomeDir()`（真名是 `envHome`）。两次 `node --check` 都**通过**（语法合法），若直接上报就是「全绿交付、一跑即崩」。自查法：写完立刻 `grep -c "<符号名>" <文件>` 数出现次数——**0 命中就是自己捏的**；改完新代码还要跑一次真调用（本例用自测直接 import 真模块调用 `selfCheck`，才把假红与真名一并验出来）。
**根因纪律**：改别人的代码前，**先用 grep 确认要用的每个符号真实存在**（函数名、导出名、常量名），不要凭记忆或推测写；`node --check` 通过从不等于逻辑能跑。

关键词：node --check 局限、未声明标识符、凭空捏造符号、drainMemoryTurns 不存在、envHomeDir 真名 envHome、grep -c 数出现次数、0 命中即捏造、改代码前先确认符号存在、语法合法语义崩、自测直接调用真模块、全绿交付一跑即崩

### 0mvb79hdb-7448e920ea704737b9e0b27d0b
_重要性 3，状态 active，项目 dsh-maid-preset,全局_

加「新字段带默认值 + 旧字段做兼容」的开关升级时，**兼容判据必须放在默认值判定之前**——2026-10-17 实例：把二态 `pullOnly` 升级成三档 `direction`，写了 `if (cfg.pullOnly === true) return 'pull'` 放在 `direction` 判断之后。看上去没问题，实际致命：`syncOnce` 会把 `DEFAULTS` 铺开成 `{...DEFAULTS, ...rawCfg}`，`direction` **永远有默认值 `'both'`**，于是老配置的 `pullOnly: true` 被默认值抢先吃掉——本该只拉不推的机器走了双向分支，**还往远端推了一次**（实测远端 commit 1→2）。**谁逮出来的**：留着做回归的旧脚本（仍传 `pullOnly: true`），若没这层回归，它会静默把所有老用户改回默认行为、无人察觉。**修法与普适规律**：凡「新字段带默认值 + 旧字段兼容」的组合，判据顺序一律 **先认旧专用字段、再认新字段默认值**；写完必须拿「被默认值铺开后的老配置」（`{direction:'both', pullOnly:true}`）当用例验一次，而不是只验纯老配置。写入 TROUBLESHOOTING 5.9。

关键词：兼容层判据顺序、默认值抢先命中、旧字段被吃掉、开关升级三档、pullOnly 失效、resolveDirection、铺开 DEFAULTS 后验用例、留旧脚本做回归、静默改回默认、老用户升级突变、配置迁移陷阱

### 0mv644v8s-4b08b956ab1d4a888d9cec27fc
_重要性 2，状态 active，项目 dsh-maid-preset_

改共享引擎代码后跑测试**必须彻底隔离**，别用老大的真实路径——否则会污染同步状态文件（旧教训：临时 workcopy）。**2026-10-17 新变体（更危险）**：自测「只拉不推」时，小困设了 `process.env.DSH_HOME` 指向临时 home 造假活库，结果 `pickSourceDb()`（`lib/sync.js:110`）读的是 **`USERPROFILE` / `HOME`** 下的 `.dsh-meow/window-index.json`、**不认 DSH_HOME**——于是自测转身去读了**开发机真实活库**（195 条），断言全红还差点改坏真库。**正确姿势**：① 设 `USERPROFILE`（Windows）/ `HOME`（类 Unix）指向临时目录；② **先在临时 home 下建出 `.dsh-meow/` 目录再写 `window-index.json`**（形态是对象 `{ "ws-1": "<绝对路径>" }`，不是数组）；③ 造测试库要照抄真实列结构（七张表列数不同，列不对会让合并取值错位、插入静默失败，辅助件 `scripts/test-helpers.mjs`）；
④ **跑完必核真库无变化**（`select count(*) from fact` 前后一致，实测 195→195），确认没污染。同族教训：把「隔离用的环境变量」设错，比不隔离更隐蔽——它不报错，只是安静地测了别人的数据。

关键词：测试隔离、DSH_HOME 不认、pickSourceDb 读 USERPROFILE、window-index.json 位置、临时 home 要建 .dsh-meow、测到真实活库、列结构照抄真实、七张表列数不同、跑完核真库无变化、隔离变量设错更隐蔽、自测污染

### 0mvb6pk70-1104bb9402b5410c8945814411
_重要性 3，状态 active，项目 dsh-maid-preset,全局_

`git tag -f <标签>` **没带目标参数时，改的是标签对象本身、不是目标提交**——2026-10-17 实例：小困想「把 v0.7.6 标签对齐到 main 线上」，写了 `git tag -f v0.7.6 v0.7.6^{commit}`（把 `^{commit}` 当目标传，实际它被当成新标签名），结果标签从 **annotated 降级成 lightweight**（`git cat-file -t` 由 `tag` 变 `commit`），并强推上远端——**原注释消息丢失**。复查时差点误判成「目标提交被改错」（其实 `^{commit}` 解出来还是同一个 ff812ce，目标没变，变的是标签类型）。
**错误认知**：以为 `-f` 后跟一个「解引用表达式」能改指向。真相：`git tag -f <name> <target>` 必须显式给 `<target>`；只给 name 时它用当前 HEAD/重打同名标签，语义完全不是「改指」。
**正确姿势（要改指且保注释）**：`git tag -d <name> && git tag -a <name> <目标提交> -m "<原注释>"`，然后 `git push origin refs/tags/<name> --force`。
**核验判据**：`git ls-remote origin refs/tags/<name> refs/tags/<name>^{}` 两行都在 = annotated；只有一行 = lightweight。改完必须核 `^{}` 解出的提交是不是你想要的。
**另**：把悬空 tag 收编进 main 用 `git cherry-pick <tag>`（本仓 main 分叉 8/10 提交时会撞 package.json 版本号冲突——保留 icon 字段、版本取新号即可）。

关键词：git tag -f 不带目标、标签降级 lightweight、annotated 丢注释、打标签手滑、cat-file -t 判类型、ls-remote 的 ^{} 行、改指要删了重打、cherry-pick 收编悬空tag、版本号冲突保留 icon、强推 refs/tags、标签核验判据

### 0mvb6p7e3-6221a6dc2a744601ac8da32f85
_重要性 2，状态 active，项目 dsh-our-free-model_

错误码匹配必须以实测响应为准（2026-10-17，v4.1-flash 摘戳重试被废掉的真坑）：dsh-our-free-model 的 codearts 摘戳重试机制（benefit not found → 去掉 maas_type 戳重发）设计正确，但触发判定只认全串 "InferHub.4004.200"，而华为云实际只回裸 "4004"——判定永不命中，好机制整条废掉。修法 = 判定加 `|| data.error_code === "4004"`（pack.js:33217 + src/llm-adapter.ts:1658）。教训：**SDK 文档/常量里的错误码形态 ≠ 实际响应形态**，嵌套错误（HTTP 200 包 SSE error_code）的字符串匹配要两头认（全串+裸码），别让一个匹配不上废掉一整套自愈逻辑。

关键词：错误码匹配、裸码、全串、InferHub、4004、benefit not found、摘戳重试、maas_type、SSE 内嵌错误、error_code、判定落空、实测响应、华为云

### 0mvaxusj3-51ee049d441b4c16b71fa46c7e
_重要性 3，状态 active，项目 dsh-our-free-model_

codearts 403 终局（已修复验证，2026-10-16 深夜→17 凌晨）：**403 不是华为云回的，是本机 bili 压缩代理拒转**——响应体 `signed_request_requires_resign / bili_resign_unavailable`：codearts 带 SDK-HMAC-SHA256 签名且签名覆盖请求体，bili 一旦压缩改写内容签名即失效（上游必 401），于是直接 403 拒转。修法：`C:\Users\Kayle\.config\billion-context\billion-context.json` 加 `"resign":{"sdk-hmac-sha256":{"passthrough":true}}`（备份 bak-resign-passthrough-20261016-235912）。**复验闭环**：老大二次重启后，经网关 8326 发 codearts/deepseek-v4-flash **HTTP 200 真出词**（"收到"+reasoning_content，16:25:12）；过程还暴露插件对 TM.00001041（并发会话上限 3）自带 3 次 ×10.5s 轮询重试、能扛过瞬时会话堆积——400 会自动恢复，不是死态。教训两条：① 中间层（压缩/代理）会自己制造 403，排查渠道问题先看响应体到底是谁写的——埋日志抓响应体是决定性一步（抛错点 33064 丢 body，只能在日志层抓）；② content-type 签名是真 bug（直连矩阵证实）但非 403 本因，别把「修了真 bug」当成「修了症状」；③ 长任务中途触发脚本要带 AbortSignal.timeout，否则网关慢响应会把探针挂到 120s+ 超时。

关键词：codearts 403、签名不是根因、content-type 补丁证伪、重启后仍403、变量全排除、真函数签名429、33002探针、codearts-diag.log、等重启抓响应体、response.status、APIG.0301、裸探针能通插件不通

### 0mv9ztz3i-671238ea67484f239657ab2662
_重要性 3，状态 active，项目 全局，被纠正_

监控脚本（monitor3.ps1）只设了 9000 次采样（约 5 小时）却没有「跟随目标进程存活」或总时长上限的退出条件，任务 03:14 就跑完，它仍空转采零两小时，被老大发现（m01509 原话「这个后台是什么，运行两小时了」）后 job_kill 掉。**四条必须写进长跑监控脚本的规矩：① 自带收尾条件（跟随目标进程存活 + 总时长封顶，退出时写标记行）；② 用 `$seenJasna` 门控，先见过目标进程才允许 idle 退出，否则测试没启动就误退；③ 日志/输出目录不要写死成单个路径**——第二轮把日志从 `logs\` 换到 `logs-nvfp4\` 后，监控还在读旧目录、一直上报上一个阶段的进度，改成同时扫多个候选目录才对；**④ 按时间戳字符串筛选采样行会漏跨午夜的段**（`$ts -ge '23:48'` 会把 `00:xx` 全部排除，实测 205 个采样只统计到 60 个）——要么按行号取尾部区间，要么显式写成 `($ts -match '^23:(4[89]|5[0-9]):') -or ($ts -match '^0[0-9]:')`。

关键词：监控脚本 后台空转、收尾条件、跟随进程存活、总时长封顶、seenJasna 门控 防误退、日志目录写死 读旧进度、多目录扫描、时间戳字符串比较 漏跨午夜、23:48 过滤掉 00:xx、统计采样区间、job_kill、后台泄漏

### 0mv74s19m-7cb5af8af9f2435ab7592da619
_重要性 2，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 的远端被**记忆自动同步提交持续推动**（后台任务每约 1 小时推一条 `sync: 记忆自动同步 <时间> (N 条)`，只动 `memory/` 三件套）。后果：本地改代码/文档后 push 常被拒 `non-fast-forward`。
**处置（2026-10-16 再次实证）**：① 先 `git fetch origin` 看真实差距，**别信 `rev-parse origin/main` 的旧值**；② `git rev-list --left-right --count origin/main...HEAD` 判断是「落后」还是「分叉」——**落后就 `git merge --ff-only origin/main`**；**分叉（左右都非 0）绝不能 ff，改 `git rebase origin/main`**，把自己的提交挪到远端之上再 `git push`。本次实测：左 2 右 1（远端两条记忆同步 + 本地一条文档），rebase 一次干净落地、推成功。③ 网络走 `-c http.proxy=http://127.0.0.1:7890`（或 export https_proxy）。④ 推完用 `fetch + rev-parse --short HEAD` vs `rev-parse --short origin/main` 双向复核对齐。
**铁律**：对 preset 动手前永远先 fetch，push 前假定远端又前进了一格——这个仓库的任何时刻都不能拿「上次看到的远端」当现状。

关键词：记忆自动同步抢提交、preset 推送被拒、non-fast-forward、分叉改 rebase、落后才 ff-only、rev-list 左右计数、别信 rev-parse 旧值、fetch 先看现状、一小时后台任务、push 后双向复核、代理 7890、仓库后台任务

### 0mvb59d22-a1a420016a864d81b1d890f4ca
_重要性 3，状态 active，项目 jasna，被纠正_

2026-10-16 并发事故（小困自己捅的）：把编排器用 WMI 脱钩启动后，它报 "no in-flight jasna" 并又起了一个 jasna，而旧任务（22:39 那支，PID 6592）其实还在跑 → 两个 jasna 同时抢 GPU。根因是判活用了 `Get-CimInstance Win32_Process -Filter "name='jasna.exe'" | Where-Object { $_.CommandLine -match '--input' }`，而 WMI 启动上下文里子进程的 CommandLine 可能取不到（实测 jasna 的 worker 子进程 CommandLine 就是空）。**教训：判活用 `Get-Process -Name 'jasna'`（不依赖 CommandLine），实测在 WMI 上下文里可用；另外 jasna 的进度日志被两个进程混写会污染，重跑前必须先把旧日志改名留档。** 事故处置：杀 orchestrator + 新起的 jasna，保留旧 jasna 后确认它在 DSH job 里（重启必死）也一并杀掉，清空被污染的那行 runs.tsv。

关键词：并发事故 两个jasna抢GPU、判活 CommandLine 取不到、Get-Process 替代 Get-CimInstance、no in-flight jasna 误报、日志被混写、runs.tsv 污染行、重跑前改名留档、orchestrator 脱钩副作用

### 0mvb59d18-018cb9faa1df4212b53780ad53
_重要性 3，状态 active，项目 全局,dsh_

DSH 用 Windows Job Object 管理子进程（IsProcessInJob 实测：DSH 主进程与它启动的 powershell 子进程都在同一个 job 里）→ **重启 DSH 会连带杀掉所有从会话里起的子进程**，包括长跑的 jasna 测试。要让长任务活过 DSH 重启，必须用 WMI 脱钩启动：`Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{CommandLine=...}`，这样父进程是 WmiPrvSE.exe、**不在任何 job 里**（实测 no job）。两个坑：① `powershell -File <脚本>` 经 WMI 会**静默失败**（进程秒退、无输出、无报错），必须写成 `powershell -Command "& { Start-Process -FilePath powershell -ArgumentList @(...) -WindowStyle Hidden }"` 包一层；② 带 `param()` 块的脚本经 WMI `-Command "& '<脚本>'"` 同样静默失败，脚本里改用顶部直接赋值。

关键词：DSH 重启 杀掉子进程、Job Object、IsProcessInJob、WMI 脱钩启动、Invoke-CimMethod Win32_Process Create、WmiPrvSE 父进程、powershell -File 静默失败、param 块 静默失败、长任务 活过重启、后台进程 被带走、job-probe.ps1

### 0mvb56he9-d632c4b361634e0c9619c1fe25
_重要性 3，状态 active，项目 全局_

排查报障时，别把「本来就该出现的正常机制」当成故障证据——2026-10-16 实例：老大报「主任务被反思任务打断」，小困在会话日志里看到 `plugin:meow-memory` 的注入排在真人消息之前，就当成「反思轮抢占真人轮次」的**决定性证据**发了出去。实为硬伤：那条是「可能相关的记忆，仅供参考」的**关键词命中注入**，设计上本来就排在每条真人消息前面，与反思轮毫无关系。教训：**看到「A 排在 B 前面」先问一句「这个 A 是不是本来就该在这」**——插队型故障的判据不是「谁在前面」，而是「时间窗口内另一方被压住多久」。后续两轮真值验证（199 个反思轮：窗口内被压 0 次、反思轮后中位 47 事件才有真人消息）证明那个「打断」根本没复现，等于小困先造了一个根因再去修它。更毒的是：这条错误结论当时已写进记忆并配了「正解方向」，若不及时纠正，下次会话会照着一个不存在的根因动手。**写进记忆的推断必须标注证据强度**——「已证实」与「推断」要分开写，别让推断披着结论的外衣入库。

关键词：正常机制误当故障证据、插队不等于故障、谁在前面不是判据、时间窗口被压住多久、关键词注入本就靠前、反思轮打断未复现、先造根因再修、推断与已证实分开写、证据强度标注、错误结论已入库要回收、排查纪律

### 0mvb4yjet-e4b63b9878f2406da6cebbcb47
_重要性 3，状态 active，项目 dsh-maid-preset,dsh_

「主任务被反思轮打断」（2026-10-16 老大报障，公司电脑常发）——**根因至今未证实，别照下面的推断动手**。
**推断（已被自身取证证伪，仅供参考）**：曾猜 `ctx.on("agent/turn-stopping")` 连续工具步 ≥reflectTurns(默认7) 就 `sendMemoryTurn`→`agent.followup` 入队，反思轮在上个 turn 收尾那刻排队，把老大随后发的消息压在后面。
**两轮真值验证都没复现**（59 会话 / 约 199 个反思轮）：① 反思轮→下一条真人消息，中位 47 个事件，**0 次**落在 ≤5 事件内；② 反思轮「入队→跑完」窗口内真人消息被压后 **0 次**；③ 反思轮前 40 事件内刚有真人发言仅 6%。→ 那一串推断链条目前只存在于小困的猜想里，**没有数据支撑**。
**小困犯过的两个错（务必别重犯）**：ⓐ 把 seq 371 那条 `plugin:meow-memory` 的「可能相关的记忆，仅供参考」**误当作打断证据**——那是**正常的关键词命中注入**，本就该排在真人消息之前，不是反思轮，别把正常机制当 bug 证据；ⓑ 写了 `hasUnfinishedTodos` 判据（读本 turn 末个 todo/write 有无非 completed 项）去拦，真值验证 **59 会话/197 反思轮拦截 0 次**（老大干长活根本不开 todo），纯空转，已从 lib/meow/index.js 撤净、基线干净。
**正确下一步**：停止从历史日志反推，**在打断现场抓实时日志**（哪条消息、等了多久、反思卡出现在哪一步）。脚本 `_acl-recovery/verify_reflect_race.cjs`、`verify_reflect_window.cjs` 可复跑。

关键词：反思轮打断根因未证实、followup 入队只是推断、窗口内0次、反思轮后中位47事件、seq371 误当证据、正常记忆注入本就靠前、别把正常机制当bug、hasUnfinishedTodos 空转、197轮拦截0次、现场抓实时日志、turn-stopping reflectTurns、历史日志反推不可靠

### 0mv9plcgj-5c5cab237d0d4626a07fe8c558
_重要性 3，状态 active，项目 dsh-maid-tts-fix,全局，被纠正_

判据类改动必须先在真实运行时数据上跑一遍再上线——2026-10-15 教训：0.6.0 的 isMemoryReflectTurn 完全从源码推演（「注入节点 kind 是 context/turn-trigger、文本含 meow-memory-reflect」），离线 10 用例全过，上线后老大立刻报「还是会读」。原因：离线桩节点是照自己的假设造的，真实 legacy.nodes 里那条注入根本不存在（被投影丢弃）。
**这条纪律含两半**：
① **离线自测全过在判据类改动上等于零证据**——桩数据是自己造的，喂什么进去它就过什么。必须在交付前加一层「用真实运行时数据批量跑候选判据」。
② **取样要覆盖边界形态**——0.6.1 拿 19 个会话比过真值才上线，仍漏 2 处（会话首轮的反思注入没被 claim，以 context 形态留在 legacy 里，被判成正常轮），扩到 42 会话才发现。凑几十个会话不算全量，要专门挑首轮 / 连续同类轮 / 系统节点夹层这些形态。
做法＝先用 ego_js + 自签 cookie 进 19387，把候选判据的输入在真实会话上 dump 出来、比对真值（本次真值取 `snap.nodes.byKey` 里 turn-trigger 节点的 anchorSeq），再写补丁。
**2026-10-16 第三次实证（preset 侧）**：为治「主任务被反思轮打断」新写了 `hasUnfinishedTodos`（读本 turn 最后一个 todo/write 有无非 completed 项），拿 **59 个会话 / 197 个反思轮**跑真值验证——**拦截 0 次**。因为老大干长活时根本不开 todo，判据纯空转。真值验证的价值就在这：**它没告诉我「什么对」，但它立刻证伪了我的假设**，省下一轮无效上线（函数已从 lib/meow/index.js 撤净；脚本 `_acl-recovery/verify_reflect_guard.cjs`）。结论：判据写出来先别接进链路，先拿历史数据问一句「它到底能拦下几个真实现场」——答不出数字，就别上线。
**与 `0mv9q30x` 的分工**：本条管「上线前怎么验」，那条管「上线后没生效怎么查」，是同一套纪律的前后两半，不要合并归档。

关键词：判据先验证再上线、离线自测全过无效、真实运行时数据批量跑、截下几个真实现场、证伪假设、hasUnfinishedTodos 拦截0次、197 反思轮、59 会话、取样覆盖边界形态、首轮反思漏判、源码推演陷阱、自测输入必须真实

### 0mv9nzz46-95ee1888bd2e40b58567ff7dd9
_重要性 2，状态 active，项目 dsh-maid-tts-fix_

改上游插件的判定函数时，先找「唯一出口」，且**旁路排查必须 grep 全量调用点、不许下「没有第 N 处」的断言**——`latestAssistantMessageId` 是自动播报判据的收口点（主视图与 SessionPlaybackObserver 都走它），跨会话 `collect` 是自扫 nodes 的旁路。2026-10-15 曾据此写「没有第三处」，**10-16 就被老大实测打脸**：「只念重点」在 messageText 和 applyTtsPlaybackScope 都挂对了，唯独漏了第三条路——**主视图流式边生成边念的 `scopedLiveText`**（每帧喂 partial 累积文本、同样在清洗前不吃标记），老大听到的恰恰是这条旁路。v0.6.4 补挂（检查放函数第一行、full 短路之前）。铁律升级：给「文本清洗/判据」类改动圈调用链时，把**所有**走清洗链的入口 grep 一遍（messageText、applyTtsPlaybackScope、scopedLiveText 三处都是），列全再动手；旧结论「两条路已验证」不算免检金牌。

关键词：唯一出口、旁路排查、scopedLiveText、流式播报、边生成边念、partial、messageText、applyTtsPlaybackScope、标记提取、grep 调用点、没有第三处打脸、0.6.6

### 0mvb38o7s-0b29cb0a177848be810f2aefc6
_重要性 2，状态 active，项目 dsh_

在 DSH 的 bash 工具里跑 `_probe\gh-api.mjs` / 任何 node 脚本传 GitHub API 路径时，**必须加 `MSYS2_ARG_CONV_EXCL='*'`**，否则 MSYS 会把 `/user/repos` 当路径转换成 `C:/Users/Kayle/.dsh/.../user/repos`，请求打到不存在的地方（表现为 `curl 55 / Not Found` 或 `Failed to parse JSON`）。另：`gh-create-repo.mjs` 用命令行第 4 参传中文 description 会报 `FAILED: "Problems parsing JSON"`——**中文 body 一律走 `gh-api.mjs POST /user/repos repo-body.json`（body 从文件读）**。`git push` 首次报 `RPC failed; curl 55 Recv failure: Connection was reset` 时，给仓库加 `git config http.proxy http://127.0.0.1:7890` + `https.proxy` + `http.postBuffer 524288000` 后即可推上去（15 MB / 98 文件一次成功）。

关键词：MSYS2_ARG_CONV_EXCL、gh-api.mjs、路径被转换成 C:/Users、Problems parsing JSON、中文 description 用 body 文件、gh-create-repo.mjs、git push RPC failed curl 55、Connection was reset、http.proxy 7890、postBuffer、GitHub API 建仓库、node 脚本传 API 路径

### 0mvb2tkrw-7ec1c8687ff44f808895d5480d
_重要性 2，状态 active，项目 jasna_

两个 nvfp4 相关的坑（2026-10-16）：① **只把 int8 模型文件换成 nvfp4、不开 `--ltx-fast`，程序会在 `jasna/main.py:840 _ensure_ltx_model` 处 `EOFError: EOF when reading a line` 崩掉**——因为它判定当前模式需要的模型文件不存在，走交互式「要不要现在下载」提问，无人应答即 EOF。nvfp4 只服务 Fast mode，所以 **nvfp4 必须配 `--ltx-fast`**（老大 m01902 自己点破）。另一条路是两档模型同放 `model_weights\ltx-restore\` 共存。② `--restoration-model-path D:\Downloads\ltx-restore-alpha1-int8.safetensors.enc` **不被接受**（同样 EOFError），别指望用它指定权重。③ 换模型后启动会打印 `Compiled GPU kernels: 0 reused, 0 compiled`——Triton 内核缓存按模型重建，属正常。

关键词：nvfp4 必须开 ltx-fast、EOFError EOF when reading a line、_ensure_ltx_model、main.py 840、交互式下载提问、restoration-model-path 无效、两档模型共存、Compiled GPU kernels 0 reused、Triton 内核缓存重建、换模型文件卡死

### 0mv50piai-6c937a85ebea4b1680300d51e8
_重要性 3，状态 active，项目 全局_

工具调用只输出裸 JSON 文本=未真正执行，绝不能口头报「已完成」，须 grep/read 验证落地后再汇报。**变体坑（2026-10-16 再犯被老大抓包）**：输出假 <execute> 标签、进度卡、「正在扫描...」状态条而实际一个工具都没调——老大连着问「为什么没看到你执行」「图标换好了吗」「清理完了吗」，全是口头干活的破绽。判定法：回复里凡是描述「正在进行」的段落，必须对应本轮真实发出的工具调用；没有调用就直说「还没做，现在做」，别用卡片演进度。

关键词：幻觉汇报、工具未执行、裸JSON文本、验证落地、grep抓包、虚假完成、edit工具、报完成

### 0mvaxbrdr-aa6b2a2000f14bf0819b207597
_重要性 2，状态 active，项目 dsh-maid-comfyui,dsh_

comfyui 标签分歧（2026-10-16 已结案）：同一段活儿（feat(idle)）在公司/home 两台电脑各落一个哈希，公司电脑打的 v0.5.4/v0.5.5 已推 GitHub，本地同名标签指向 main 线上等价提交——fetch 报 `! [rejected] (would clobber existing tag)`。教训：对账 tag 必须逐条比本地 `rev-parse v^{commit}` vs 远端 `ls-remote refs/tags` 哈希，不能只比名字。**处置结果**：老大拍板选 B——本地强推覆盖远端（`git push origin --tags --force`，远端 v0.5.4 72c498a→a4019e2），公司电脑下次需 `git fetch --tags && git tag -f` 同步。双机并行开发时同名标签/等价提交是常态；若再遇同类分歧，先给 A(跟随远端)/B(覆盖远端) 两案让老大选，别自己定。

关键词：would clobber existing tag、fetch rejected、标签分歧、双机同改动不同哈希、ls-remote 比对哈希、v0.5.4、v0.5.5、push --tags --force、覆盖远端、tags --force、多机并行提交、拍板结案

### 0mvb0vbdz-48725d8d040c41e2bd4093f04b
_重要性 3，状态 active，项目 dsh-maid-lane-fix_

lane-fix 补丁器的 .lane-fix-orig 备份与本机实际不符：目录里是 src_http.js（单下划线），脚本找 src__http.js（双下划线）→ --restore 整批不滚（exit 1）；且备份是首次落盘那刻的旧文件（实测 client.js/src_http.js 哈希 ≠ v2.3.0 原文），要回干净原文必须用 baseline/ofm-2.3.0/。

关键词：lane-fix-orig、src__http.js、src_http.js、restore 回滚失败、没有备份无法回滚、baseline 还原、单下划线命名、备份是旧版本、补丁器命名法、回滚假成功

### 0mvb0v63y-59064d4855c9443bb509fd2bc4
_重要性 2，状态 active，项目 全局_

批量派子代理产出同格式文档时，别靠人眼验收——写一个结构核验脚本统一查。2026-10-16 实例：八份插件 `TROUBLESHOOTING.md` 交给八个子代理并行写，写完后用 `D:/DeepSeek Harness/Works/_probe/check-troubleshooting.mjs` 逐份统计行数 / 章节数（`^## `）/ 条目数（`^### `）/ 四段命中次数（症状·原因·解法·验证）/ 待核标记数，一跑就点名到具体哪份不合格。**踩的坑**：脚本第一版把关键词写死成「`**验证方式**`」，结果 tts-fix 那份用的是「`**验证**`」被误判成「四段缺验证」——正则要放宽到词根（`\*\*验证`），假阳性比不查还费时间。推论：派活时就把格式要求写成**可机检的形式**（四段用固定加粗词），核验脚本才跑得动。

关键词：子代理批处理、格式核验脚本、check-troubleshooting、四段式机检、假阳性、正则词根、可机检格式、并行产出验收、文档质量把关

### 0mvaxdcfr-2e77c55c39b441bab5de277cd9
_重要性 3，状态 active，项目 全局_

排查「渠道模型全灭」的高效手法（2026-10-16 实证）：① 先用单变量矩阵**直连上游去掉中间层**，一次只变一个维度（首条是否 system / 有无会话头），四组对照就能钉出是哪道闸门；② 再经本地网关复测同一组，确认中间层没吞字段；③ 再用同渠道**多账号交叉验证**，一次分清「代码缺陷」（全账号一致失败）与「账号风控/限流」（换号可过）；④ **把「不能用」拆成三层分别验：凭据是否有效 / 账号是否被启用 / 额度是否用尽**——面板上的字样会骗人。2026-10-16 Gemini 实证：面板显示「未接入·请先登录」，实际凭据完好（周限额剩 99.96%）、只是账号被禁用；LobsterAI 显示「余额查询失败」，实际是额度真用完。**最快的一刀是绕过插件直连上游验凭据**（Antigravity/cloudcode：POST https://daily-cloudcode-pa.googleapis.com/v1internal:loadCodeAssist 与 /v1internal:retrieveUserQuotaSummary，带 Bearer token + x-client-name:antigravity / x-client-version / x-machine-id 等身份头，走系统代理）。

关键词：单变量矩阵、直连上游、去掉中间层、多账号交叉验证、代码缺陷 vs 账号风控、限流、定位闸门、先探根因再改代码

### 0mvaz7u1y-cca68427dfad4a9aa4eb591fef
_重要性 3，状态 active，项目 dsh-our-free-model_

外部直接改 C:/Users/Kayle/.dsh/channel-pack/state.json 的账号字段（如把 gemini 账号 enabled 改 true）**会被插件回写覆盖**——插件的账号池在内存里持有状态，运行中写回文件。实测：20:59 改成 enabled=true，经网关调一次请求后文件里又变回 false。要改账号状态只有两条路：① 从 Channel Pack 面板操作（或它自己的 RPC）；② 改完文件**立刻重启 DSH**，让插件启动时读新值。别指望运行中改文件生效。

关键词：state.json、channel-pack、账号池、回写覆盖、内存态、enabled、重启、面板操作、配置不生效、our-free-model

### 0mvayucl0-094468f84f004a7885b31f875b
_重要性 3，状态 active，项目 全局_

判断「补丁到底生效没有」的可靠姿势：别靠感觉，**比两个时间戳**——① 宿主进程启动时间（Windows 下 `(Get-NetTCPConnection -LocalPort 8326 -State Listen).OwningProcess` 取 PID 再 Get-Process 看 StartTime；2026-10-16 实测网关 PID 8128 起于 20:35:27）；② 该次探测结果文件的 at 时间戳（20:39:39，落在启动之后）。两者一比就知道补丁进没进内存。小困当时差点误判「补丁没生效」，一查时间戳发现补丁早在内存里、问题另有其因——**刷新了「改完没写」的错觉，直接排掉一整条错误假设**。

关键词：补丁是否生效、进程启动时间戳、Get-NetTCPConnection、OwningProcess、StartTime、探测结果时间戳对比、重载验证、误判补丁没生效、网关PID、别靠感觉验补丁

### 0mvayh94u-b139d75823f949e99282db41ea
_重要性 3，状态 active，项目 dsh-our-free-model_

排查 codearts 插件 403 的教训：在插件外复刻请求（同款签名/body/头集合）拿到的只有 429/400/404/200，一次 403 都复现不出——说明 403 藏在插件自己的重试链里（isAuthError 判 403→refresh→重试仍 403→抛，且 pack.js:33064 抛错时丢掉了响应体）。下次遇到「插件报的错外部复现不出」，直接给构建产物加一行打响应体的日志、重启一次，比在外面穷举变量快得多。

关键词：403复现不出、插件重试链、isAuthError、refresh重试、丢响应体、33064、加日志重启、排查方法论、穷举变量、构建产物日志、外部复刻

### 0mvay1f1d-f674b415ea734e3dba4861a230
_重要性 3，状态 active，项目 全局_

改共享判据（正则/关键词判定函数）前，先 grep 源码注释里有没有「千万不要/不能加/是正确」这类禁令——2026-10-16 实例：小困见 `isContentRejection` 的 `/request illegal/i` 把 workbuddy 缺头错误误判成风控，直接删了该正则；随后才发现 `openai-gateway/tencent-fingerprint.ts:54` 明写「千万不要把 11128 加进 isContentRejection……维持现状（只认 11140 / request illegal / 安全审核文案）是正确」，而 11140 的报文 msg 恰好**也**是 request illegal，删了会漏掉真拦截。正解是**前置排除 11128**，而非删除共用正则。教训：难看的正则常是为另一条真实报文留的，先读注释与实测报文再动手。

关键词：共享判据、别先删正则、源码注释禁令、千万不要、isContentRejection、11128 vs 11140、request illegal 共用、前置排除、先读注释再动手、真拦截漏判

### 0mv8hsgn3-231919d62cea4f72a7646165d5
_重要性 2，状态 active，项目 dsh_

本机读图三条路实测（2026-10-15，10-16 修正）：`modlens_read_image` 报 No vision provider（需装 Antigravity CLI 或配 gemini key）；本地网关 `workbuddy/deepseek-v4.1-flash` 报 HTTP 502，**根因不是账号级拦截**——是 workbuddy 缺会话三头（X-Conversation-ID 一族）或缺首条 system，报 11128。判据要看 **code** 而不是 msg：`request illegal` 是 11140（真·账号级安全拦截，换号有效）与 11128（内容指纹/缺头，换号无用）**共用**的 msg。`our-free-model/openrouter/free` 可用。

关键词：本机读图、modlens_read_image、No vision provider、workbuddy 502、request illegal 共用msg、11128 vs 11140、判据看code不看msg、缺会话三头、换号对11140有效、openrouter/free

### 0mvaxdcew-74d3ee0855c6444aae18bd9aa8
_重要性 2，状态 active，项目 dsh-our-free-model_

解析 C:\Users\Kayle\.dsh\.credentials.yaml 的坑：凭据值是**跨行单引号标量**——JSON 会被硬换行拆成几行（连 `"scope":"openid` 这样的中间态都会断行），用单行正则会一条都抓不到、误判成「凭据缺失」。正确姿势：匹配 `<KEY>: '([\s\S]*?)'`，再 `.replace(/\s*\n\s*/g,' ')` 折叠换行后用 JSON.parse。

关键词：credentials.yaml、多行单引号标量、凭据解析、JSON 被换行拆断、误判凭据缺失、折叠换行、JSON.parse、单行正则失效

### 0mv89vsfv-407bc3f4c57643d8a52f6faa7f
_重要性 2，状态 active，项目 dsh_

接 DSH 本地网关（8326）的两个坑：① **workbuddy 国际版**要求首条消息必须是 system，否则 400 `code=11128 first message is not system prompt`（这是该渠道独有的闸门，buddy 国内版不要求）——2026-10-16 已打进 pack.js 补丁（messages 首条 system 兜底 + X-Conversation-ID 会话三头），实测带 system 即 200；② 当前模型（workbuddy/deepseek-v4.1-flash）是 reasoning 模型，max_tokens 太小会被 reasoning 吃光、content 返回 null 且 finish_reason=length——视觉调用留 4096 才稳（256 必挂）。

关键词：first message is not system prompt、workbuddy 闸门、首条 system、400、11128、会话三头、pack.js 补丁、reasoning 模型、max_tokens、content null、finish_reason length、4096

### 0mv9y96dg-0097ab7ee0034fc2a4bf88b7ab
_重要性 3，状态 active，项目 dsh-maid-patch-kit_

web 版 DSH 插件移植桌面端的适配点（以 lxzy-7/dsh-plugin-guard 为例，实际改完的清单）：① 默认 profile `'web'` → `'desktop'`（散落 5 处：index.js rollback 接口、tools.js 工具默认与描述、incident.js 两处 listSnapshots/resolveSnapshotDir、guard-cli.js 的 `--profile` 默认）；② 默认端口 3080 → 19387；③ boot 脚本起服务那层要换——桌面端不是 `dsh web` CLI，而是 Electron 壳跑 dsh-desktop-host，`boot-guard.ps1` 里 `dsh.cmd web` 这条路整个不适用；④ 文案「重启 dsh web」→「重启 DSH」（tools.js + guard-cli.js）；⑤ smoke-test 夹具 profile 名；⑥ 客户端 client.js 的 `ENV_DESC` 与说明文案、`exports.inject`（去掉 rc.2 已不存在的 settingsScope）。可用的部分：webServer 路由、客户端 slots、settings 命名空间（register 在 rc.2 已无，须软探测）在桌面端都在。

关键词：web转桌面端、profile web 写死、端口 3080 改 19387、boot-guard.ps1、dsh cmd web 不适用、插件移植清单、重启 dsh web 文案、webServer 路由可用、客户端 slots 可用、settings register 已无、smoke-test 夹具、ENV_DESC 文案

### 0mva0bltl-53f15033958a407c936c49d9aa
_重要性 2，状态 active，项目 dsh_

插件「重启后验收」分三层判据，别混：① **宿主半**——cordis.yml 里出现 patch 生成的挂载行（如 `id: guard / name: dsh-maid-guard`）+ HTTP 路由实测（正常路径 200，**乱路径必须 404** 才能证明是路由表而非兜底）；② **客户端半**——让插件**自报心跳**，不能拿 `/plugins/<id>/client.js` 的 404 判断「没加载」（该路径对已知可用的 vcp / orb / guard 一律 404，真实 bundle 走 combo URL `/plugins/??<id>/client.js&rev=<framedHash>`）；③ **运行时行为**（长什么样、点得动点不动）——只能老大肉眼。2026-10-16 guard 验收即按此三层跑完。

关键词：重启后验收、三层判据、宿主半客户端半、cordis.yml 挂载行、乱路径 404 证明路由表、自报心跳 booted、plugins client.js 404 误判、combo URL framedHash、运行时只能肉眼、插件加载验证、验收纪律

### 0mv6n9ers-98052f6af47a4d9c9db48b7028
_重要性 3，状态 active，项目 dsh-maid-vcp，被纠正_

dsh-raw-html 的 asar 补丁判定法（现项目名 **dsh-maid-vcp**）：**不能看 `case"html":return`**——该字面量在 bundle 里出现 8 次，其中一处是文件图标组件的 switch（与渲染无关）；真正的渲染分支在 @636711 的三态化 `case"html":{if(localStorage.getItem("dsh.rawHtml")!=="0"){var _vr=window.__vcpStable&&window.__vcpStable.render(...)`。唯一可靠判据＝搜 `window.__vcpStable` 与 `window.__vcpGen` 两个标记是否同时在。另坑：`node patch/install-all.cjs --dry-run` 在未打补丁的 asar 上会**完整执行替换并列出 applied 列表**，只是不写盘——所以 dry-run 的 applied ≠ 已装，别拿它当体检结论。

关键词：asar 补丁判定、__vcpStable __vcpGen 双标记、case html 出现 8 次、dry-run 不写盘、install-all.cjs、applied 列表、bundle 锚点、渲染分支 636711

### 0mv9r61yp-c08b064354954d71a24973497b
_重要性 2，状态 active，项目 dsh-maid-tts-fix,全局_

（续 0mv9r6h6r：本条只留 TTS 侧那一半的收口细节）dsh-maid-tts-fix 0.6.3 的 `extractTtsSpokenOverride` 容错：原来只认 `-->`，标记写残（结尾只剩 `--`、或写成 `了。>`）就匹配失败退回念全文。放宽成「也认 `--` 或 `>`」时**必须锚定位置**，否则正文里正常的 `>`（如「老大 > 小困」、引用符号）会被当收尾把内容拦腰截断。正确写法：`-->` 优先，兜底只认**行尾/文末**的 `--` 或 `>`（`(?:--|>)\s*$` 多行语义）。探针 `_probe/tts-spoken-probe.mjs`（3 断言）；断言④（多行标记）曾报不通过，实为**探针期望值写错**——实现 `match[1].replace(/\s+/g,' ').trim()` 会把两个空格压成一个，正确产物是 `老大， 多行 标记也要能认。`，校正期望值后全绿。规矩：断言失败先拿实现源码对一遍产物，别急着改补丁。此 side 与渲染侧 v6.42 配套，两侧都修才算「写残也念得对、正文也不消失」。

关键词：正则容错锚定行尾、extractTtsSpokenOverride、朗读标记写残、误当收尾、裸尖括号、tts-fix 0.6.3、标记提取兜底、探针期望值写错、空白折叠、tts-spoken-probe、与 v6.42 配套

### 0mv84xlm9-a5dde5e26afc488898b9ce2e93
_重要性 3，状态 active，项目 dsh_

不开浏览器验证插件逻辑的手法（dsh-xiaomi-tts / DSH 前端 / VCP 通用）：① 插件 lib 是 ESM，可 Node 直接 import 跑真实导出函数（rolldown 压短别名，先看文件末尾 export 映射表）；改动前 cp 出 *.bak。② 进阶：探针别抄被测函数，从源文件抠真实源码再 vm 沙箱还原（类体不能用裸花括号计数抠，会被字符串/模板串/正则字面量里的花括号骗到——按状态机扫，只在 code 态计数）。③ 造桩输入必须对齐真实签名。④ 桩要贴真实生命周期。⑤ **断言别做全等**（先归一化标点/空白再比）。⑥ vm 沙箱里先跑依赖定义再跑被测函数。⑦ 类边界行号随补丁漂移，探针用特征串定位别写死行号。⑧ 桌面 GUI 在 `dsh-app://` 壳协议下打不开，运行时行为只能请老大实测。⑨ **探针要连真实产物一起验**：在真实 bundle 上内存打补丁，断言 applied/skipped、幂等、旧判据清零，并把打完补丁的整份 bundle 过 `node --check`。⑩ **喂料要挑「原始形态」**：拿已被补丁改过的现况当输入，补丁函数会因「守卫已存在」返 applied 空 → 探针误报「未应用」；正解是从 `Works/_asar-backup/` 挑一份未装该补丁的备份当输入（选法：`!s.includes('case"inlineCode":{try{var _iv=')` 且有旧 `^` 判据）。**补丁出错与探针喂错料，症状一模一样——先怀疑后者。** ⑪ **重启后要补一层运行时复核**：`curl http://127.0.0.1:19387/assets/index-5SrrfWpU.js` 取回的字节数须与 asar 条目一致，再 grep 特征（G 守卫/旧判据计数），证明进程真读到了新 asar。 探针族谱：tts-text-probe / tts-e2e-spoken / tts-firstseg-e2e / tts-switch-probe / tts-mark-audit / tts-spoken-pipeline / vcp-comment-probe / vcp-comment-v641-probe / vcp-comment-v642-probe / vcp-asar-readback / vcp-inlinecode-v103-probe / verify-v103-in-asar / preset-maxwait-probe。

关键词：不开浏览器验证、探针、vm 沙箱、真实函数不抄源码、状态机扫花括号、真实 bundle 内存打补丁、探针喂原始形态、asar-backup 选取、假绿误判、node --check 整份 bundle、重启后运行时复核 curl bundle、探针族谱

### 0mv9zutjt-bf72829248c3477ebd86d40208
_重要性 3，状态 active，项目 dsh-maid-preset_

记忆同步在长会话里必然静默停摆（2026-10-16 实测，2 小时积压 35 条）：活库 memory.db-wal 持续被写，lib/sync.js 的 dbMtime 取 db/wal 较大 mtime，而 lastSyncedMtime 是上次成功推送时的值——WAL 一直动，水位永远追不上 → 每 tick 都把 lastChangeAt 重置为最新写入时刻 → 空闲钟永远走不满 idleMinutes(10min) → due 恒假。这是取舍不是 bug（与 0mv5ennqe 那次逻辑死锁不同）。**根治已落地（v0.7.5，2026-10-16 老大「两个都弄」批准）**：加最长等待上限 `maxWaitMinutes`（默认 60）——距上次成功推送满这么久就强制推一次，不管库还在不在写；到期判定抽成导出纯函数 `computeDue`。**重启后已见判据**：`~/.dsh/maid-sync.log` 的启动行写成「空闲 10min 推送（**最长等待 60min 强制推**），轮询 60s」。紧急手动补推仍可跑 `D:\DeepSeek Harness\Works\_probe\mem-sync-now.mjs`（直接 import syncOnce 与 detectLocalProxies，读 `C:/Users/Kayle/.dsh/maid-settings.json` 拼 cfg、显式传 identity，构造全零 state 跑一次；实测返回 `{ok:true,reason:"pushed"}`）。**下一个待观察**：长会话里是否真出现「已达最长等待上限 60 分钟（记忆持续写入中），本轮强制推送」。

关键词：记忆同步停摆、空闲钟走不满、maxWaitMinutes、最长等待上限 60、v0.7.5 已根治、dbMtime 水位、WAL 持续写入、长会话积压、mem-sync-now 手动补推、syncOnce、启动日志判据已过

### 0mv9w5qoh-8c71168c9e5942bbb921b76375
_重要性 3，状态 active，项目 dsh-maid-vcp,dsh-maid-tts-fix,dsh，被纠正_

tts 朗读标记千万别写成反引号行内代码（`` `<!--tts:…-->` ``）。2026-10-16 实测根因：反引号内容被 CommonMark 当行内代码，走宿主 `case"inlineCode"` 分支渲染成 `<code>`，而 VCP 的注释剥离只挂在 `case"html"` 与 `case"code"` 两条分支上——inlineCode 根本没接补丁，尖括号原样显形（老大两次截图报障）。全工作区 50 条标记里只有 3 条这样写，全出在同一会话、全是小困自己干的；裸注释 47 条历史零显形。**已修（v10.3，老大 m00578「动手」批准）**：`patch/patch-frontend-asar.cjs` 加「G. inlineCode 兜底」（判据窄到内容以 `<!--` 开头才拦），同时把 `case"code"` 兜底判据的 `^` 锚定去掉——原来要求围栏内容以 `<div id="vcp-root"` 开头，卡片前带一行说明或一行标记就整卡退回源码。自测 24 用例全绿、asar 已写入、04:41 重启后运行时 bundle 复核通过（747912 字节、G 守卫在）。**剩下的只有老大肉眼确认**。自己写标记仍守规矩：绝不加反引号、独占一行。

关键词：反引号包裹标记、行内代码显形、inlineCode 分支、tts 标记显形、注释剥离覆盖分支、code 兜底判据太窄、vcp-root 开头、标记独占一行、v10.3 已修、G 项兜底、重启后复核已过

### 0mv717x66-fde723deb4054d35b4c0f3fbe3
_重要性 3，状态 active，项目 全局,dsh_

改别人的 npm 包要按「改动放哪一层」选持久化手段：① profile 根目录的自有文件（`compatibility.json`、自己的配置）**永不被覆盖**——首选落脚点；② 手改 `node_modules/<包>/*` 是最易丢的做法，下次 install 或作者发新版会静默还原、不报错；要改包源码又留住，用 **pnpm patch**（完整实操见 lesson 0mva7s6p）；③ 长期大改走 fork，或 `link:` 到自己目录。profile 用 pnpm 11.7.0（`D:\DeepSeek Harness\resources\runtime\pnpm\bin\pnpm.cjs`，**不在 PATH**），`pnpm-workspace.yaml` 里 `nodeLinker: hoisted`、`autoInstallPeers: false`。**手改 node_modules 是唯一一条「改了等于没改」的路**（2026-10-14 实证：xiaomi-tts 的 CSS 补丁被一次「装别的插件」引发的整棵 node_modules 重铺抹掉，连 .bak 备份都没了——不必等升级，随便装个新插件就会重铺）。**脆度对照**：`link:` 协议的包**免疫重铺**——pnpm 不碰符号链接，本机八个小困插件（junction 到 Works 源码）在同一批重铺里毫发无伤；桌面壳 `app.asar` 里的前端补丁也不受影响。**只有非 link 的第三方 npm 包会被静默还原。**

关键词：改动放哪一层、node_modules 被覆盖、link 协议免疫、第三方 npm 包、补丁持久化、pnpm 不在 PATH、nodeLinker hoisted、手改等于没改、整棵重铺、fork 或 link、profile 自有文件永不被覆盖

### 0mv8en07g-43997d97a65b4abaadc56e525d
_重要性 3，状态 active，项目 dsh,dsh-maid-vcp_

补丁验证必须分三层：① 盘上（asar 字节确实变了）；② 服务端下发（curl `http://127.0.0.1:19387/assets/index-5SrrfWpU.js` 取到的 bundle 含特征、字节数与 asar 条目一致）；③ 运行时行为（真人操作一遍看现象）。前两层只能证明「代码在那儿」，证明不了「那条路径会被走到」——凡涉及「某段代码在不在调用链上」的改动，做完必须请老大实测。 **2026-10-15 修正：第三层曾有一段时间能自验**——`C:\Users\Kayle\.dsh\.credentials.yaml` 里有 `client-connection/browser-session` 的 secret，按 `conn.js:284-305` 算法自签 cookie（名 = `dsh-auth-` + base64url(sha256(authority))，值 = `v1.<base64url(payload)>.<base64url(hmacSha256(secret,body))>`，payload = `{version:1,authority,issuedAt,expiresAt}`），用 `ego_cdp Network.setCookie` 写入后 `location.reload()` 即可进 19387 页面。**但 2026-10-16 ego-browser 已卸载，这条 ego_cdp 通路不再可用**；且桌面壳是 `dsh-app://`，壳内渲染终究只能老大肉眼。 **v6.40 → v6.41 实例**：注释剥离补丁盘上对、下发对，运行时注释照样显形（真因是挂点在下游，render 开头的 `if (!v) return null` 先短路）；改 v6.41（render 入口剥 + 空 Fragment）后老大实测确认生效。 **排查「改了没生效」的省事判据**：先看响应头 `curl -sI <bundle URL>`——若没有 Cache-Control / ETag / Last-Modified，Chromium 不做启发式缓存，可直接排除 HTTP 缓存，把注意力放回代码路径与 asar 是否被进程读到（Electron 缓存 asar 头，必须完全退出重启，刷新页面不够）。

关键词：补丁验证三层、盘上下发运行时、自签 cookie 进 19387、credentials.yaml secret、ego_cdp 通路已失效、Completi onUnread、v6.41 实测确认、Cache-Control 排除缓存、asar 头缓存要重启、运行时只能老大肉眼

### 0mv9qjaeo-6cadbb621cd44b40baba0257f3
_重要性 3，状态 active，项目 dsh,dsh-maid-comfyui_

DSH 桌面端的 GUI 跑在 `dsh-app://` 壳协议下，外部浏览器（Chrome / 已卸载的 ego-browser）打不开它——**插件客户端（`src/client/*`）的改动没法自动化验收**，只能用产物探针（grep `client/client.js` 里的字符串/类名）证明代码进了包，剩下「长什么样、点得动点不动」必须老大刷新页面亲手试。2026-10-15 实例：为查「红条 ✕ 点不动」想用浏览器打开壳页面复现，被 `dsh-app://` 挡回，最后靠读宿主 app.asar 里的 CSS 才定位到拖拽区。**附注**：`http://127.0.0.1:19387` 的 web 页面另有一条自签 cookie 通路可进（见 lesson 0mv8en07g），但那是 web 端渲染，**不等于壳内 GUI**；壳内视觉与交互的最终验收仍只能靠老大。交付话术要写清「这一层小困验不了，得你眼睛」。

关键词：dsh-app 协议、桌面壳打不开、客户端无法自动化验收、ego-browser 进不去 GUI、产物探针、client.js 字符串检查、刷新页面手测、交付边界、app.asar 取证、19387 自签 cookie 不等于壳内、得你眼睛

### 0mva7s6p1-195c579d65794e5da2989be3df
_重要性 3，状态 active，项目 全局_

pnpm patch 实操（2026-10-14 首跑，给 dsh-xiaomi-tts@3.0.8 打 CSS 剥离补丁；已封装进 dsh-maid-tts-fix / patch-kit 的 scripts/patch.mjs）：① `node pnpm.cjs patch <包>@<版本>` → 得到临时目录 `node_modules/.pnpm_patches/<包>@<版本>`；② 改临时目录里的文件，先 `node --check` 验语法；③ `node pnpm.cjs patch-commit "<临时目录绝对路径>"`（**路径必须带引号**）→ 生成 `patches/<包>@<版本>.patch` 并把登记写进 **`pnpm-workspace.yaml` 的 `patchedDependencies`**（不是 package.json——旧说法有误，以 pnpm 11.7.0 实测为准），同时把 `patch_hash=<sha256>` 写进 `pnpm-lock.yaml` 三处。patch_hash 就是 .patch 文件的 sha256。**两个坑**：① 用脚本做锚点替换时，锚点行本身带缩进而匹配串不带缩进、替换串再带 `\t` 会叠成两层缩进——改完临时目录再跑一次 patch-commit；② `patch-commit` 会顺手往 `minimumReleaseAgeExclude` 追加一条刚被解析的包（pnpm 自身行为，无害）；③ 临时目录 patch-commit 后**不会自动删**，留 `.pnpm_patches/` 与 state.json 无害。**代价**：patch 键带精确版本号，作者发新版即失效，需重做一次。

关键词：pnpm patch 实操、patch-commit、patchedDependencies、pnpm-workspace.yaml 登记、patch_hash、pnpm-lock.yaml、锚点替换缩进叠层、minimumReleaseAgeExclude 追加、临时目录不自动删、版本号精确匹配代价、node --check

### 0mv8akp2p-0b23378ee5db4cbfb1841c221d
_重要性 2，状态 active，项目 dsh，被纠正_

【ego-browser 已于 2026-10-16 卸载，本条转为「若装回则必须守」的纪律】老大纠正（m01940 原话「任务做完了，就关闭Agent 浏览器。不要滞留它占用后台。你把内容输出给我了，现在浏览器还在播放视频。」）：小困用 ego-browser 抓完 B 站视频后没关窗口，视频还在播放、占着后台。ego 浏览器是老大能看见的实体窗口，任务一完成就必须收尾。正确三步：① ego_navigate 到 about:blank（先停掉视频/音频播放）② ego_space_close（persistent profile 下关 space 是安全的）③ 确认进程树已退出。**实测两次**：① 光靠 ego_space_close 不够稳——space 不存在时报 `task space not found` 并 exit 1；② **即使它返回 `ok:true / done:true`，拉起的 Chrome 进程仍会全部留着**（实测成功后仍有 6 个 chrome 存活），必须补 pwsh `Get-CimInstance Win32_Process -Filter "Name='chrome.exe'" | Where-Object { $_.CommandLine -like '*ego-lite-linux*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }`，再复核计数为 0。**核验/探测类调用本身会把浏览器拉回来**，别在收尾之后再调 ego_*。归属判定看命令行里的 `--user-data-dir=…ego-lite-linux\profile`（本机还有老大自己的 Chrome 在跑）。**第三次落地（更省事）**：在 ego_script 里跑 node——`await taskSpaces.complete(name)` 关 space，再 `cp.spawnSync('powershell.exe', [...])` 取 pid 逐个 `taskkill /PID x /T /F`（exit 128 不算失败）。 老大贴 Agent 浏览器面板截图时多半只是告知「我看了一眼状态」，不是派任务，忽略它回到原任务。

关键词：ego 浏览器收尾、任务完成关窗口、不滞留后台、taskSpaces.complete、ego_space_close 不够、chrome 进程残留、taskkill 128 不算失败、ego-lite-linux 判定、探测调用拉起浏览器、已卸载 2026-10-16、装回必须守

### 0mv9n0mta-9ed4b78054654650a201a405db
_重要性 2，状态 active，项目 全局,dsh_

ego_script（ego-browser nodejs 环境）里跑 npm 脚本：execFile('npm.cmd', [...]) 直接报 spawn EINVAL（Windows 上 .cmd 需 shell），要么加 { shell: true }，要么绕过 npm 直接用 process.execPath 跑 bin——如 `node node_modules/typescript/bin/tsc -p tsconfig.json`、`node node_modules/tsdown/dist/run.mjs -c tsdown.config.mjs`、`node scripts/test-xxx.mjs`。后者更稳，也不依赖 PATH。**注：ego-browser 已于 2026-10-16 卸载，此条转为通用「Windows 子进程绕开 npm」经验保留**——同一坑在 bash/pwsh 里也成立（本机 PATH 无 npm，pnpm 也不在 PATH，构建一律直跑 bin）。

关键词：spawn EINVAL、npm.cmd、shell true、execFile、tsc bin 直跑、tsdown run.mjs、绕开 npm、Windows 子进程、PATH 无 npm、ego 已卸载仅作通用经验

### 0mv9qi762-8410ee0c23084590a6853989a4
_重要性 3，状态 active，项目 全局_

本会话账号 Kayle 不是管理员（IsAdmin=False），凡需提权的系统改动（如改 pagefile）小困做不了，必须老大手动 UAC。可行套路：小困写两个文件放桌面——`expand-pagefile.ps1`（#Requires -RunAsAdministrator，改配置并回读确认）＋ `expand-pagefile.bat`（纯 ASCII + pause + `Start-Process powershell -Verb RunAs ... -NoExit`）让老大双击 bat 点 UAC。**编码铁律（2026-10-16 两次踩坑）**：① 给 cmd 跑的 .bat 绝不能带 UTF-8 BOM，否则报 `'@echo' 不是内部或外部命令`、整份脚本一行都不执行（首版还用中文文件名「扩大页面文件.bat」+ BOM，双重坑）；.bat 要 `Set-Content -Encoding ASCII` 纯英文存。② **小困自己用 write 工具写的 .ps1 是无 BOM UTF-8，只要含中文就可能解析崩溃**——实例：`long-monitor.ps1` 带中文注释，报 `Missing ')' in function parameter list`（指向 param 块之后的赋值行），脚本起一秒即退、静默不干活；改写为纯英文后 `[Parser]::ParseFile` 通过、正常运行。给 PS 5.1 跑的 .ps1 要么带 UTF-8 BOM、要么干脆全写英文。提权窗口务必 `-NoExit`（或末尾 Read-Host），否则一闪就没、看不到报错；.ps1 加 try/catch 打红字。改 pagefile 必须重启才生效。

关键词：管理员权限 IsAdmin False、UAC 提权、Start-Process RunAs、桌面脚本、NoExit 停住、ps1 无 BOM 中文解析崩、Missing ')' in function parameter list、write 工具写的 ps1、PSParser ParseFile 自检、bat UTF-8 BOM @echo 不是内部或外部命令、中文文件名、pagefile 重启生效

### 0mva0nl6n-5fe6cbf73c35477092ffcbd6d4
_重要性 2，状态 active，项目 jasna_

Jasna 的 tqdm 进度条全部写在 **stderr**（`long.stderr.txt`），stdout 是 0 字节——要看 LTX 进度必须读 stderr。另外该文件被 jasna 持续写入，`Get-Content`/`[IO.File]::ReadAllText` 会报「being used by another process」，必须用 `New-Object System.IO.FileStream($p,'Open','Read','ReadWrite')` 共享读。进度行形如 `LTX 1/4 scan: 15%|██| 31892/216841 [07:16<39:43, 77.59frame/s]`，用正则 `LTX (\d)/4 (\w+):\s+\d+%\|[^|]*\|\s*(\d+)/(\d+)` 抓阶段与帧数。

关键词：LTX 进度条在 stderr、stdout 0 字节、being used by another process、FileStream 共享读、tqdm 进度解析、stage_progress 正则、long.stderr.txt、监控采进度、frame/s ETA

### 0mv9os14x-913109a48dad480685be4865f6
_重要性 2，状态 active，项目 jasna_

jasna.exe 命令行曾调不动，真因不是权限策略而是兼容性勾选：`HKCU:\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers` 下 `D:\Downloads\jasna-windows-0.11.1\jasna.exe` = `~ RUNASADMIN`（兼容性页勾了「以管理员身份运行」），删掉该值后 `jasna.exe --help` 立刻可用（改前先 reg export 备份）。运行时会先往 stderr 打 `Jasna: checking the installation...` / `checked N/19444 files` / `installation verified.`（正常）。**第二个坑：`Start-Process -FilePath powershell -ArgumentList @('-File','D:\...带空格路径\xx.ps1',…)` 会因路径含空格被截断，报「该文件不具有 '.ps1' 扩展名」且 ExitCode -196608（0xFFF10000）——解法是把脚本复制到无空格路径（如 D:\jasna-test\_queue.ps1）再跑。** 另外 `Start-Process -ArgumentList` 传数组不会自动加引号，含空格的输出目录会被截断成 `unrecognized arguments`，测试输出一律用无空格纯 ASCII 路径 D:\jasna-test。拿 CLI 参数名与界面文案最有效的手段是直接扫二进制字符串：ASCII 正则扫出含 ltx 的串 1397 条，界面文案是 **UTF-8**（不是 UTF-16），中文串共 7879 条存 `_probe\jasna-ui-all.txt`。脚本：D:\DeepSeek Harness\Works\_probe\scan-ltx.mjs / scan-ui-all.ps1 / drop-runasadmin.ps1；`jasna --help` 全文存 `_probe\jasna-help-full.txt`（292 行）。

关键词：jasna.exe 命令行、RUNASADMIN、AppCompatFlags Layers、以管理员身份运行、请求的操作需要提升、Start-Process ArgumentList 不加引号、无空格纯 ASCII 路径、installation verified、jasna-run.ps1、jasna-help-full.txt、二进制 UTF-8 文案扫描、jasna-ui-all.txt

### 0mv9os16c-df5fd80337874aeca08da0d1f4
_重要性 2，状态 active，项目 dsh_

本机探测内存/分页文件的可用手段：`wmic` 不存在（command not found）；`Get-CimInstance Win32_PageFileUsage` / `Win32_OperatingSystem` / `Win32_LogicalDisk` 在 ops_bash 里一律被拒（PermissionDenied, CimException, FullyQualifiedErrorId: HRESULT 0x80041003）。替代：可用内存用 `powershell -NoProfile -Command "(Get-Counter '\Memory\Available MBytes').CounterSamples[0].CookedValue"`（实测 18915 MB）；pagefile 用 `ls -la C:/pagefile.sys` 看字节数 + 读注册表 HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management 的 PagingFiles。

关键词：wmic 不存在、Get-CimInstance 被拒、HRESULT 0x80041003、PermissionDenied、CimException、Get-Counter、Available MBytes、pagefile.sys 大小、PagingFiles 注册表、内存探测、系统信息查询

### 0mv9pwtke-684b87d358854975bb457744c8
_重要性 3，状态 active，项目 全局，被纠正_

老大说「待会」= 现在什么都别做。原话（m00357）「我说待会，是还没开始。你先别开始了」——小困在他发话后仍去探路（查官方测试片、看模型目录、试调 jasna.exe），被明确制止。教训：等指令期间连探路/预检都别做，动手前先要一句明确开跑。

关键词：待会、别开始了、提前动手、探路、用户纠正、等指令、暂停任务、测试计划、别自作主张

### 0mv9qpp6m-49c2cb0825a04808b195ab717c
_重要性 3，状态 active，项目 全局_

给老大做提权类桌面脚本的自检流程（2026-10-16 落地，起因见下）：① .bat 用 `Set-Content -Encoding ASCII` 存、纯英文内容、文件名不带中文；② 存完读头三字节验 BOM（bat 必须 40 65 63 = "@ec"，ps1 必须 EF BB BF）；③ .bat 解析自测——把 pause/提权行/exit 剔掉写进 %TEMP% 的临时 bat，`cmd.exe /c` 跑一遍看 exit code；④ .ps1 用 `[System.Management.Automation.PSParser]::Tokenize` 过一遍语法；⑤ .ps1 里加 try/catch 打红字错误 + 末尾 Read-Host，提权窗口加 `-NoExit`。**起因**：老大原话（m00506）「我用管理员运行启动了，但是他提示了这个，然后出另外一个窗口。一下就消失了。你看下有扩大成功吗」——小困写的 bat 带 BOM 被 cmd 拒绝、提权窗口没加 -NoExit 一闪即失，老大只能截图回来问。呼应老大既有要求（m03705「修改好了你自己测试一下」）：给老大双击/手跑的脚本，交付前必须自己验编码 + 跑解析自测，别让他当测试员。

关键词：桌面脚本自检、bat 解析自测、cmd /c 临时 bat、PSParser Tokenize、BOM 校验、Set-Content ASCII、NoExit、Read-Host 停住、try catch 红字、交付前自测、提权脚本、老大不当测试员

### 0mv9t0ely-7d7600c4189b47829f09240089
_重要性 3，状态 active，项目 jasna_

Jasna 启动弹「损坏的映像 0xc0000428」的根因：protection\startup-window.exe 对自己施加 MicrosoftSignedOnly 策略，而微信输入法 WeType 的 C:\Windows\System32\wetype_tip.dll（TIP 组件，CLSID {86598FB9-66A2-463E-B9C2-AEB906D477AD}）会注入每个带输入焦点的 GUI 进程，签名不符即被 CodeIntegrity 拦（事件 3033）。**不致命**——点掉后 Jasna GUI 照常运行；且**实测是间歇性的**：同一 exe 只在 2026-10-16 00:52 那两次被拦，之后多次启动都不再弹（老大 m00834 报「修好了」）。protection 层是官方反篡改设计，无 --no-protection 类开关。**注意：桌面脚本 fix-jasna-badimage.bat/.ps1 想写的 HKLM\SOFTWARE\Microsoft\CTF\Compatibility 键在本机根本不存在、HKCU 同名键子项也为空——CTF 标记从未成功写入过，弹窗消失不能归因于它**（真因未坐实）。候选面：CTF Compatibility 的 DisableThreadInputManager、或启动前退出微信输入法。

关键词：0xc0000428、损坏的映像、startup-window.exe、wetype_tip.dll、微信输入法注入、CodeIntegrity 3033、MicrosoftSignedOnly、DisableThreadInputManager、CTF Compatibility、Bad Image、反篡改 protection

### 0mv9t0emi-5943bd68d3c940379f6576cfe2
_重要性 2，状态 active，项目 全局_

短命进程（splash/闪屏类，0.0s 即退）无法用「起进程→tasklist /m 查注入」做探针：来不及观测。选 A/B 小白鼠还必须先验证它本身会被目标 DLL 注入——charmap/dxdiag/mspaint 全部无效（charmap 不在 tasklist 快照、dxdiag 本身不被注入、mspaint 本机不存在）。判据只能落在真实宿主进程上。

关键词：短命进程、splash 进程、探针无效、tasklist /m、DLL 注入观测、A/B 实验设计、小白鼠选型、dxdiag、charmap、mspaint 不存在、观测窗口

### 0mv9u9wfm-dc1fcebb42994a8dbe0a85f13f
_重要性 3，状态 active，项目 全局_

验证类实验必须先证明「观测手段有区分度」，否则跑十轮也是白跑。2026-10-16 排查 0xc0000428 时连踩三次：① 拿 charmap.exe / notepad.exe 当小白鼠测 WeType 注入——它们压根不在注入清单里，A/B 全 True 全 False 无区分度；② 拿 dxdiag.exe 测同样无效；③ 用 PowerShell 子进程测 `SetProcessMitigationPolicy` 成功、delta 仍是 0——因为 PowerShell 宿主本身不在 TIP 注入清单。真身 `startup-window.exe` 又是**短命 splash（实测 0.0s 即退、ExitCode=2）**，「起进程后查 tasklist/Modules」永远来不及观测（报 `Cannot find a process with the process identifier <pid>`）。正解：先在目标进程上建立基线（它到底有没有被注入），再谈 A/B；观测窗口太短的进程只能靠进程创建时同步挂调试器，或改用外部日志（CodeIntegrity 事件计数）做判据。

关键词：观测手段有区分度、小白鼠选错、实验设计、A/B 无效、短命进程、splash 进程、tasklist /m 观测不到、Cannot find a process with the process identifier、先建基线再做对比、CodeIntegrity 事件计数判据

### 0mv9ywhh4-e17299ca85574a6abd0ee66bca
_重要性 3，状态 active，项目 jasna_

jasna 画质验收三路证据法（比单一手段可靠）：① **抽帧目检上下叠对比图**是主证据——ffmpeg 在 t=2/5/8 各抽 1 帧，上=原片 下=输出（脚本 `D:\jasna-test\make-grid.ps1`，产物 `E:\jasna-out\cmp\`）；② ffmpeg lavfi psnr/ssim 对源片（脚本 `D:\jasna-test\quality.ps1`）只作旁证——整帧含大量未处理区域；③ dsh-video-understand L0 做语义词判定。实测 PSNR/SSIM：B-S1 y37.92 SSIM 0.9843、B-S3 y42.34/0.9890、B-M1 y40.03/0.9903、B-D1 y43.55/0.9923；VLM 四片均判「未见严重画质劣化/整体清晰」。**坑：dsh-video-understand 传本地路径会被当成 B 站链接下载失败（Unsupported URL: https://www.bilibili.com/video/D:%5C...），必须 noDownload:true + 绝对路径。**

关键词：画质验收三路证据、抽帧目检对比图、PSNR SSIM 旁证、dsh-video-understand、noDownload 本地路径、Unsupported URL bilibili、make-grid.ps1、quality.ps1、马赛克已还原、整帧含未处理区域、主证据抽帧

### 0mva04ki7-9bd163fc23814acd900ed64480
_重要性 2，状态 active，项目 全局，被纠正_

发现路径整个消失时，先按「可能是老大自己清的」去问一句，别先断言异常。2026-10-16 实例：小困清点 D 盘时发现 D:\jasna-test 不存在，先报「不是小困删的、疑似被清」，老大 m01622 回「D:\jasna-test\是我删除的。」——虚惊一场。涉及删除类判断先确认归属，再下结论。

关键词：路径消失、先问再断言、疑似被清、老大自己删的、删除归属确认、jasna-test、虚惊一场、异常判断、清点文件夹

### 0mv9x923s-282ddebd1bd64003bdab3d9a0a
_重要性 3，状态 active，项目 dsh_

pnpm 11.7 装 dsh-orb 必按包名装（dsh-orb@0.1.7），绝不能给 npmmirror tarball URL——否则报 ERR_PNPM_MISSING_TARBALL_INTEGRITY（lockfile 无 integrity 字段）。另：orb helper 的 electron 进程占着 node_modules/dsh-orb 里的 koffi 原生 .node，pnpm 导入阶段会 ERR_PNPM_EPERM。更新 orb 前先关 DSH 或杀掉 electron-runtime 进程。

关键词：dsh-orb、pnpm安装、EPERM、MISSING_TARBALL_INTEGRITY、npmmirror、tarball、koffi、electron-runtime、占进程、更新插件、pnpm11.7

### 0mv9y96ei-a54f97fd71a640e2880f40b1ac
_重要性 2，状态 active，项目 全局_

pwsh 里 `& $node -e "脚本" D:\大 空格\路径` 传参会被截断——process.argv[1] 只剩 `D:\大`，后面整段丢失（Node 把 -e 后的多 token 当 script 参数处理有坑）。要传带空格的路径给内联脚本，改用环境变量：`$env:OUTDIR="..."; & $node -e "…process.env.OUTDIR…"`。同理，向 node -e 传参一律走环境变量最稳。

关键词：node -e 传参、process.argv 截断、带空格路径、环境变量传参、pwsh 调用 node、内联脚本、参数丢失、OUTDIR

### 0mv9y96f4-ddbaba4f36904c2a82ff7355cf
_重要性 2，状态 active，项目 dsh_

app.asar 里的 @deepseek-ai/* 包只发布编译产物，没有 .d.ts（按 *.d.ts 过滤导出结果为 0）。要查宿主 API 契约就直接导出 lib/*.js 本体读源码——关键签名能在里面找到，例如 dsh-tools:2921 `guard(guard)`、dsh-host-webserver:177 `register(route)`（kind: 'exact'|'prefix'）、dsh-system-prompt:215 `section({name,order,text})`。

关键词：app.asar 导出、没有 d.ts、宿主 API 契约、读编译后 js、dsh-tools guard、webServer register、systemPrompt section、asar 提包

### 0mv9z4t08-53a992c1b1fc48beaa1d082aa8
_重要性 2，状态 active，项目 dsh-maid-patch-kit_

接管 fork 的结构约定（dsh-maid-patch-kit 的 guard/ 为范本）：正本目录 `guard/` 自带 `package.json`（name 改 `dsh-maid-guard`、version 用 `<上游版本>-fork.N`）、`cordis.patch.yml`（id 保持原样 `guard`，name 指向新包名）、`index.js` + `client.js` + `src/` + `scripts/`；原 README 存成 `README.upstream.md` 作对照，新 README 写接管理由与差异。接入 profile 走 `link:<仓>/guard` + bundles 加项，junction 挂上即生效。

关键词：接管 fork 结构、guard 目录、fork.N 版本号、cordis.patch.yml、README.upstream.md、link 依赖、bundles、junction、包名重命名、正本目录

### 0mv9z4t10-b4daaa8ccef242908b68255153
_重要性 2，状态 active，项目 dsh,dsh-maid-patch-kit_

ESM 入口提升目录层次时要检查相对 import：把 `src/index.js` 提成包根 `index.js` 后，里面的 `from './engine.js'` 必须改成 `'./src/engine.js'`（`from '../src/engine.js'` 的调用方是 scripts/ 下的文件，不用动）。漏改的报错是 `ERR_MODULE_NOT_FOUND: Cannot find module .../guard/engine.js`。

关键词：ESM 相对 import、入口提升、ERR_MODULE_NOT_FOUND、src/index.js、包根 index.js、路径改写、接管改目录结构

### 0mv9z4vxd-9781b8201f1b4586930ed049fb
_重要性 3，状态 active，项目 dsh_

老大只用 desktop profile，桌面上没有 `dsh web` 这条路：桌面端是 Electron 壳跑 `dsh-desktop-host/lib/index.js`，端口 19387 由 runProfile 硬写、根路径要鉴权 token（401 也算活）。所以任何「守护启动/健康检查」类脚本，判活要「401 也通过」，启动形态要「有 DeepSeek Harness.exe 就起桌面壳，没有才退回 dsh.cmd web」。

关键词：桌面端无 dsh web、Electron 壳、dsh-desktop-host、19387、401 判活、健康检查、守护脚本、DeepSeek Harness.exe、启动形态

### 0mv9z7gre-06905e63c5c445d3934df5fc4b
_重要性 2，状态 active，项目 dsh,dsh-maid-patch-kit_

给 DSH 插件写自测时，「不抛」这种断言必须再证一次「真的做了什么」：load-drill 里 apply() 不抛有两种可能——异常被正确吞掉，或者压根没走到那一步。所以在临时 DSH_HOME 上建 fixture profile，调 pre-tool 钩子后断言 rollbacks/ 下真出现了 tag=auto-before-install 的快照；再反向构造一个坏掉的 profiles（做成文件而非目录）逼它必然失败，确认仍静默。

关键词：自测断言、不抛不等于有效、fixture profile、临时 DSH_HOME、反向构造失败、pre-tool 钩子、快照落盘、load-drill、插件自测方法

### 0mv9z8gek-3cdd260204d34d6fb1f6681a5a
_重要性 2，状态 active，项目 dsh,dsh-maid-patch-kit_

给 DSH 插件做「装上会不会死」的静态体检，可照 `guard/scripts/load-drill.js` 的套路：造一个假 ctx 直接调 `apply()`，跑两遍——① 极简 ctx（`get:()=>undefined`、`inject:()=>undefined`）；② 齐全 ctx（各服务都在，但 `settings` 故意只给 `configure/describe/update`、**不给 `register`**，模拟本机 rc.2 的 SettingsForms）。前者验「服务全缺也不抛」，后者验「注册点真走到了」。这个套路能在不重启 DSH 的前提下先排掉「插件把整个 profile 拖下水」这个最贵的失效。

关键词：假 ctx 演练、load-drill、插件加载自测、apply 不抛、SettingsForms 无 register、服务全缺场景、注册点断言、不重启先体检、插件拖死 profile

### 0mv9z8gf7-71a4e014d4e348d89b57931cd8
_重要性 2，状态 active，项目 dsh-maid-patch-kit_

老大对「接管上游插件」的默认期待：不是分家另起炉灶，而是**接尸续命**——原包名可以改（如 dsh-plugin-guard → dsh-maid-guard），但必须保留原 README 作对照（`README.upstream.md`）、写清为什么要接管、改动逐文件列明白；上游哪天复活了要能比对机制差异决定是否合并回去。

关键词：接管上游插件、接尸续命、README.upstream.md、保留原 README、上游复活可合并、改动逐文件说明、包名可改

### 0mv9vssgz-1f9a871afa1e49e681d2d70746
_重要性 3，状态 active，项目 dsh-maid-patch-kit,dsh，被纠正_

老大要「把 X 清干净」时，必须扫全仓**跟踪文件**，不能只改代码/补丁/判据就不管了。2026-10-16 实例：卸载 ego-browser 后小困删了补丁正本与 selfcheck 判据、也刷了 README，但 README 里仍留着两段卸载注记和一行「退出名单」——等于把已删的名字继续钉在文档里。老大追问（m00316）「patch-kit有把之前两个插件的内容都清干净吗，README跟两个插件相关的也清掉。」应对：动手就用 `git ls-files | xargs grep -nE "<关键词>" -i` 全量扫，连供货商名、中文别名一起查；文档里不留"历史账"（归档路径与缘由留在 commit message；老大的原话若含当量词，如"这三个插件"，也要改成无障碍版本）。

关键词：清干净、清理残留、README 残留、退出名单、git ls-files grep 全量扫、文档留历史账、卸载痕迹、被老大追问、无障碍原话、跟踪文件扫描

### 0mv9wev02-684315a3639b496195dadadbb1
_重要性 2，状态 active，项目 dsh-maid-vcp,dsh_

探针抠真实函数时，花括号配平会被**正则字面量**和**模板串里的 `{`** 骗到（报「花括号不配平」）。正解：从 `\nfunction <name>(` 定位起点后按状态机扫——依次识别 行注释 / 块注释 / 单引号 / 双引号 / 反引号 / 正则字面量（前一个有效字符属 `(,=:[!&|?{};+` 时判为正则），只在 code 态计数花括号。

关键词：探针抠函数、花括号不配平、状态机扫、正则字面量花括号、模板串花括号、cutFunction、vm 沙箱、真实函数不抄源码、extract 函数

### 0mva05tmf-7821b8d6e59341fc9690ff0490
_重要性 2，状态 active，项目 全局,dsh-maid-preset_

把与时间相关的判定逻辑抽成「now 可注入」的导出纯函数，探针就能用假时间戳一秒验完几个月的行为。2026-10-16 在 dsh-maid-preset 落地：`lib/sync.js` 的到期判定抽成 `export function computeDue(cfg, state, now = Date.now())`，返回 `{due, idleDue, maxWaitDue, retryPush, skipped, reason}`；探针 `_probe/preset-maxwait-probe.mjs` 直接 import 它、固定 `now = 1_700_000_000_000` 驱动 20 用例（含「持续写入满 60 分钟触发」「退避中不顶穿」「首启水位全 0 仍到期」）。若不抽函数，验「满 60 分钟强推」得真等一小时。**顺带好处**：原本内联在 tick 里的三段判定（idleMs / due / retryPush）搬进纯函数后，tick 只剩 `const d = computeDue(cfg, state2)`，逻辑可读性和可测性一起涨。

关键词：纯函数可测性、computeDue、now 可注入、假时间戳驱动探针、时间相关逻辑、抽函数便于测试、tick 内联判定、preset-maxwait-probe、最大等待上限、退避保护、不让老大当测试员

### 0mv8bai9a-659d5a7ca0b34293a755ed2c7b
_重要性 3，状态 active，项目 dsh_

给 dsh-xiaomi-tts 写补丁锚点，同一个坑踩了三次，第三次最阴：① 锚点写成带 \t 前缀而源码那行顶格 → 命中 0 次；② 替换串自带 \t 而源码行已有缩进 → 缩进叠两层；③ **上游那两个 lib 文件（client.js / shared-DQIrhcy-.js）是 CRLF 行尾**，锚点写 \n → includes() 全 false、命中 0 次，而人眼看源码「明明一模一样」。解法：锚点一律用 \n 书写，匹配前按目标文件行尾折算（normalizeEol()），不手写 \r、不假设上游行尾。另：Windows 上用 git apply -R 造「上游原样」源码树必须带 -c core.autocrlf=false，否则 git 会把检出内容写成 CRLF，逐字节比对全线报错（症状＝行数一样、每行多 1 字节）。**同一个坑在编辑工具上也成立（2026-10-16 实测）**：CRLF 文件用 `ops_replace` / `edit` 传 `\n` 模式一律命中 0 处（先 `file <路径>` 或 `grep -c $'\r'` 确认行尾）；正解是写个小 node 脚本按 `\r\n` 精确拼锚点、**命中数必须为 1 才写**，然后回读复核。本机 preset 的 `cordis.patch.yml` / `defaults/cordis.patch.yml` / `lib/*.js` / README.md 都是 CRLF。

关键词：CRLF 行尾、锚点失配、命中 0 次、ops_replace 无效、edit 工具 CRLF、normalizeEol、缩进叠层、git apply -R、core.autocrlf、逐字节比对、node 脚本精确匹配、preset 文件行尾

### 0mv5ennqe-676263bfbb06472fa282fefe9f
_重要性 3，状态 active，项目 dsh-maid-preset_

sync.js 空闲钟死锁（2026-10-12 已修复并上线）：lib/sync.js 判定分支曾比 m≠lastSyncedMtime（同步水位）而非上轮观测值，导致每 tick 用 Date.now() 重置 lastChangeAt，due 永远 false——除首启基线外 syncOnce 永不执行，一整天不推送。修复：lastChangeAt=Math.min(Date.now(), m) 锚定库文件最后写入时刻。仿真验证：旧逻辑 15 轮 null，新逻辑静置库第 0 轮到期、刚写库第 9 轮到期。**注意区分（2026-10-16）**：修好之后仍有另一类停摆——长会话里 WAL 持续被写，水位永远追不上 → 空闲钟同样走不满，这是机制取舍不是 bug，见项目里「记忆同步在长会话里必然静默停摆」那条 lesson。

关键词：sync.js 空闲钟死锁、lastChangeAt、due 恒 false、mtime 锚定、仿真验证、一整天不推送、与长会话停摆的区别

### 0mv8ayz45-ee4cc5967a5e4cc5aecb1e4df0
_重要性 2，状态 active，项目 dsh-maid-tts-fix_

`.gitattributes` 里换行规则三条硬要求：① `.patch -text`——pnpm 的 `patch_hash` 就是 .patch 的 sha256，任何 CRLF/LF 转换都会让 hash 变化，verify 报「补丁改过但没重打」的假故障；② `*.sh text eol=lf`——CRLF 的 shell 脚本在 git-bash/WSL 下会一路报 `$'\r': command not found`（本机 `core.autocrlf = true`，新写出来的文件默认全是 CRLF，必须显式钉住）；③ `*.ps1`/`*.cmd` 写 `eol=crlf`。仓库整体 `* text=auto eol=lf`。改完记得把已存在的工作区文件也真转一遍（`[System.IO.File]::WriteAllText` + `UTF8Encoding($false)`），光改 .gitattributes 不会重写磁盘上的旧文件。

关键词：gitattributes、patch -text、sh eol=lf、ps1 eol=crlf、换行转换、patch_hash 假故障、core.autocrlf、command not found、WriteAllText 转 LF、补丁逐字节

### 0mv871eej-c7b39f3fdd0c453ead1ce11e4b
_重要性 3，状态 active，项目 dsh_

插件搭配两条坑（对重装/同类包仍适用；对象 dsh-ego-browser / dsh-better-sidebar 已于 2026-10-16 卸载）：① dsh-ego-browser 的挂载行 id 必须写 dsh-ego-browser，写成旧别名 @dsh-external/ego-browser 会被客户端扫描判为非 client 行——工具照跑但观察窗静默消失（better-sidebar README 生态表里还写着旧别名，别照抄）。② better-sidebar 有双重挂载守卫，若聚合包（@linxin666/dsh-web-ui-all）排在它前面会自动让位。排查「装了没界面」先看这两处。

关键词：挂载行 id 别名、@dsh-external 旧别名、观察窗静默消失、client 扫描、双重挂载守卫、聚合包让位、dsh-web-ui-all、装了没界面排查

### 0mv6vhodo-9ff34c48b11744e9aa7b45f35a
_重要性 3，状态 active，项目 全局_

会话日志取证：session.v4.jsonl.zstd 是多帧 zstd，单次 zstdDecompressSync 只解出第一帧（曾误判"文件只有 1 行、取不到消息"）。正解=按魔数 28 B5 2F FD 逐帧切片后各自解压再拼（脚本 C:/Users/Kayle/AppData/Local/Temp/unzstd-session.cjs）。解出的 jsonl 是打包形态，想按条取 text 需遍历行找 `assistant/message` 且 text 含目标字样（曾从当前会话 8919 行里筛出 29 条含 `<div` 的消息）。

**2026-10-16 扩展用法**：会话根 `C:\Users\Kayle\.dsh\sessions\--D-DeepSeek~0020Harness-Works--\`，47 个文件合计 89M，逐帧解后单会话可达 899KB。想做**工具使用统计**就按 `type:"tool/call"` 事件计数（事件里带工具名 + 参数），别用正则扫全文——全文里工具清单投影文本会造成假计数（曾把 0 次交互类调用误算成 65 次）。附带脚本：`_probe/scan-ego-usage.mjs`（各会话工具名频次 + 首条用户消息）、`scan-ego-detail.mjs`（列某会话调用参数）、`_dump-session.mjs` / `scan-assistant-kw.mjs`（回溯助手原文结论，`assistant/message` 的 content 是 blocks 数组，取 `type:"text"`）。

关键词：session.v4.jsonl.zstd、多帧 zstd、魔数 28 B5 2F FD、逐帧切片、会话日志解压、tool/call 事件统计、工具使用频次、正则扫全文假计数、assistant/message blocks、聊天记录取证、sessions 目录、scan-ego-usage

### 0mv8ef4di-48475588640f40e6bf8b7fc66c
_重要性 3，状态 active，项目 dsh,dsh-maid-patch-kit_

给插件打「改 CSS / 换配色」类补丁时，用 headless Chrome 出预览图自检再交差：`chrome.exe --headless=new --disable-gpu --hide-scrollbars --window-size=420,660 --screenshot=out.png --user-data-dir=<临时> "file:///<预览页>"`。预览页从目标包里把 CSS 块抠出来（ego-browser 的在 `lib/client.js` 的 `var TAB_CSS = \`...\`` 模板串里，用 indexOf 取反引号边界即可），配上手写的假 DOM 结构渲染——不必重启 DSH 就能看出装饰条位置、透明度、对比度对不对。坑：改完目标文件后要**重新抠一次 CSS** 再生成预览页，否则看的是旧样式（小困第一轮就被这个骗过，改了 opacity 预览纹丝不动）。

**沙箱条件（2026-10-16 实测）**：headless 截图**只在 danger-full-access 下跑得通**；workspace-write 沙箱下必然失败——`crashpad_client_win.cc:421] OpenProcess: 拒绝访问。 (0x5)` → `crash server failed to launch, self-terminating`，exit 2，不出 PNG。本机 Chrome 在 `C:\Program Files\Google\Chrome\Application\chrome.exe`（无 Edge）。因此「本地 HTML 截图验收」这件事不必依赖 ego-browser，本机 Chrome headless 就能顶（实测 800x400 出图 10617 字节），代价只是少一个可登录的持久 profile 与 CDP 交互。

关键词：headless Chrome 截图、crashpad OpenProcess 拒绝访问、danger-full-access 才能截图、workspace-write 沙箱、CSS 补丁自检、预览页、TAB_CSS、lib/client.js、chrome --screenshot、界面补丁验证、本机 Chrome 路径、无 Edge

### 0mv5ldz1j-46cf77a2d5704a39aa3e94234d
_重要性 2，状态 active，项目 dsh-maid-preset_

记忆同步引擎 push 失败会指数退避（failCount 高时卡数小时），/sync/now 返回 409 拒绝手动触发。**故障分两类，绕过法不同：**
① **网络类**（push 被拒/超时）：主仓库跑 `scripts/export-memory.mjs` 重导出 memory/ 三件套 → `git -c http.proxy` 借道提交推送 → 把 `$DSH_HOME/maid-sync-state.json` 的 failCount/nextRetryAt/pushFailed 清零 → 副本 `C:\Users\Kayle\.dsh\maid-sync` 先 fetch 再 `reset --hard origin/main`（落后多个提交时否则下次 rebase 冲突）。
② **配置类**（fatalReason 非空，如「commit 身份缺失」）：这类不重试、永久暂停，改完配置后**必须手动清 fatalReason/fatalDetail/fatalRepoUrl 三项**才会自愈（只有换 repoUrl 才会自动清）。
验证三方对齐用 `git rev-parse HEAD` 对比副本/本地/ls-remote。**最快自检法**：`ego_script` 里 `await import('file:///D:/.../dsh-maid-preset/lib/sync.js')` → `startSync({})` → `await requestSyncNow()`，返回 `{ok:true, reason:'pushed'}` 即通；日志尾巴看 `C:\Users\Kayle\.dsh\maid-sync.log`。

关键词：sync 退避、409 手动触发、failCount、export-memory.mjs、maid-sync-state.json、reset --hard origin/main、记忆同步、push 失败、代理借道、三方对齐、fatalReason 配置类、requestSyncNow 自检

### 0mv52mcej-4d72c13f77dd460db1235b6a66
_重要性 2，状态 active，项目 dsh_

git 仓库没配身份时 commit 报 `Author identity unknown` / `fatal: unable to auto-detect email address (got 'Kayle@KayleenMason.(none)')`。三种兜底：① 同步代码里临时传 `-c user.name=... -c user.email=...`；② 新仓库第一次提交前先在仓库内 `git config user.name "Valorine97417"` + `git config user.email "Valorine97417@users.noreply.github.com"`（仓库级即可，不必 --global）——2026-10-15 建 dsh-maid-patch-kit 时踩到；③ **2026-10-16 又踩一次，这次在记忆同步专用克隆 `C:\Users\Kayle\.dsh\maid-sync`**：该克隆不在版本管理里、本机全局也没配身份，导致记忆同步静默停摆一天（详见 lesson 0mv9rud4）。**判定法：任何「新克隆/新仓库」先跑 `git config --local --get user.name`，空就补。**

关键词：Author identity unknown、auto-detect email address、git config user.name、user.email、Valorine97417、commit 失败、仓库级配置、maid-sync 克隆缺身份、新克隆先查身份、users.noreply.github.com

### 0mv9rud4d-1d79c8abc1594adbb6d10bf34d
_重要性 3，状态 active，项目 dsh-maid-preset_

记忆同步会「静默停摆」：同步专用克隆 ~/.dsh/maid-sync 里没有仓库级 git 身份、本机全局也没配 user.name/email 时，引擎 resolveIdentityArgs 返回 null → pauseForConfig('commit 身份缺失') → 整个循环永久暂停，日志只留一行「已暂停同步」，不报错、不推送、界面看不出来。2026-10-15 实测断更一天（记忆库 462 条全在本地）。修法三步：①在克隆里 git config --local user.name/user.email（署 Valorine97417）；②清 $DSH_HOME/maid-sync-state.json 的 fatalReason/fatalDetail/fatalRepoUrl/pushFailed/failCount/nextRetryAt；③触发一次同步 → PUSH OK。注意：克隆不在版本管理里，删掉重建就会原样复现。

关键词：记忆同步静默停摆、commit 身份缺失、maid-sync 克隆、pauseForConfig、resolveIdentityArgs、fatalReason 清除、maid-sync-state.json、git config --local、断更一天、PUSH OK、同步克隆不在版本管理

### 0mv6b8c3d-2df18ff918e34d48a2dc761d33
_重要性 2，状态 active，项目 全局_

批量删文件前先整目录备份到 Works\ 下带日期的归档目录（如 styles-archive-2026-10-13\），并同步改索引/清单——删错了能捞，且事后不必重建。删除前再落一份「可复现日志」：`fsutil file queryfileid` 取 FileId、`fsutil hardlink list` 数链接数、文件字节数，导出到 `_probe\<对象>-delete-log-<YYYYMMDD>.xml`——硬链接场景下这是唯一能事后证明「删的是哪一份、数据是否还有另一个名字活着」的证据（2026-10-15 Qwen 编码器删除即按此办）。

关键词：批量删文件、备份归档目录、删除前日志、queryfileid、hardlink list、fileid 证据、可复现日志、_probe、删错了能捞、硬链接、删前留痕、styles-archive

### 0mv9r9agz-5adbb84d78c042809875b9f338
_重要性 3，状态 active，项目 全局_

看到「同一个东西在两个目录各占一份、选一个删」时，先验是不是硬链接——`fsutil hardlink list <file>` 或 `Get-Item | select LinkType`：链接数 2 = 同一份数据两个名字，删任一边一个字节都不释放（必须两边一起删），且 SpaceSniffer / 目录大小统计会重复计数（本例 D 盘 172 GB 被算成两套 Qwen 44 GB×2）。2026-10-15 实例：老大问「Works 和 ComfyUI 各有一套 Qwen，保留哪个」，实为硬链接同一份，差点白删一场；顺带用 `fsutil file queryfileid` 取 FileId 对比可做铁证。

关键词：硬链接、hardlink list、链接数2、同一份数据、重复计数、SpaceSniffer、磁盘占用虚增、二选一、queryfileid、腾空间、目录大小统计、白删

### 0mv8dtfv3-2ffc38f10918487697ceb61952
_重要性 3，状态 active，项目 dsh,dsh-maid-tts-fix_

「修在调用链下游」是经典假修——同一天在**两处**栽在同一个坑上，说明这是小困的系统性盲区，不是偶发失误。

**案例一（dsh-maid-tts-fix，2026-10-15）**：给 dsh-xiaomi-tts 做 `<!--tts:…-->` 朗读标记，第一版把 `extractTtsSpokenOverride()` 挂在 `applyTtsPlaybackScope`（看着最合理：手动朗读走的就是它），实测照旧念全文。根因：上游 `messageText` 先调 `prepareTtsText` → `removeTtsMarkup`，其 `MARKDOWN_HTML_TAG_RE = /<[^>\r\n]*>/g` 会把整条注释**当 HTML 标签吃掉**，标记根本活不到下游。改挂 `messageText` 的清洗之前才生效。

**案例二（dsh-maid-vcp，同日）**：让 HTML 注释不显形，第一版把 `stripHtmlComments()` 挂在 `parseFrag`（渲染内部一步），实测注释照样显示。根因：宿主对每个 markdown 节点单独调 `render(节点值)`，而 render 开头有 `if (!v) return null`——注释被剥完是空串，但这句检查发生在 parseFrag **之前**，剥注释根本轮不到；返回 null 后宿主回落到 `return e.value`，把注释原文当内容渲染出来。修法：在 `render` 入口就剥，剥完为空返回**空 Fragment**（不是 null）。

**案例三（dsh-maid-vcp v6.42，同日深夜）**：v6.41 的剥注释对未闭合 `<!--` 是**无条件**截断到消息末尾（本意护住流式中间帧）。小困把朗读标记写残三次（结尾只剩 `--`、或写成 `了。>`），那一刀就从标记处切到消息末尾——**正文与卡片一起被剥光，界面只剩「已完成，用时 N 秒」**（老大连遇两次报障）。修法：`stripHtmlComments` 加 `lenient` 参数，最终帧传 `true`（只吃残缺标记所在的整行），流式帧保留原截断。

**教训（三例通用）**：① 给第三方代码加钩子前，先沿调用链往上追「我依赖的那个东西，到这一步还在吗」——尤其当数据经过任何「清洗/过滤/规范化」函数时，默认它会吃掉你的标记，而不是默认它会放行。挂载点的正确判据不是「哪个函数最像入口」，而是「标记在哪一步还活着」。② 钩子返回值有语义（null ≠ 空 Fragment），挂错层连「不显示」都做不到——空值一律要显式返回空结构。③ **同一段代码要在两个语境下表现不同，就得把语境显式传参（`lenient`），不能靠调用顺序碰运气**——「防流式」的宽容逻辑不能无条件套在最终帧上。

关键词：挂载点选错、调用链下游、假修、清洗函数吃掉标记、removeTtsMarkup、标记在哪一步还活着、render 入口、空 Fragment 不是 null、lenient 语境传参、未闭合注释吞正文、防流式逻辑、v6.42

### 0mv9q30x9-f36e4f9772394a25942a6b1393
_重要性 3，状态 active，项目 dsh-maid-tts-fix,全局_

「一个功能没生效」的排查，要先确认**判据的输入到底存不存在**，而不是先怀疑判据写法——0.6.0 实例：小困去核对锚点、函数名、落盘标记全没问题，真因是 `legacyContribution` 把 `turn-trigger` 归 default → 那条注入根本不进 legacy.nodes。同类坑：`node.data.content`（实际扁平挂顶层）、`chat target.getSnapshot()` 首次恒 undefined（要先 subscribe 预热）。

**2026-10-15 深夜补一条对称教训**：修好一处可能引入更糟的一处——v6.41 为护流式中间帧给未闭合注释加了「无条件截断到末尾」，最终帧也走这条路，于是标记写残时**整条正文被剥光**（比原来的问题严重得多）。排查「某功能突然坏了」时，除了问「判据输入在不在」，还要问「**最近改的那条分支，在别的语境下也会跑到吗**」。详见 `0mv9r5xd`。

关键词：功能没生效排查、判据输入是否存在、legacyContribution 丢弃 turn-trigger、node.data 扁平挂顶层、getSnapshot 恒 undefined、subscribe 预热、宽容分支跨语境、修一处引入更糟、v6.41 截断、正文被吞

### 0mv8exhtt-cc1a8e55617a4aadbd1b55bdc0
_重要性 2，状态 active，项目 dsh,dsh-maid-vcp,dsh-maid-tts-fix_

别拿老大的屏幕当测试环境——验证样本要自己先确认渲染正常，再放进给老大看的回复里。2026-10-15 为了实测 `<!--tts:…-->` 朗读标记，小困把标记直接写进汇报卡正文，结果渲染层的注释剥离补丁还没生效，整行尖括号注释原样显在老大眼前，老大截图回来问「注释没隐藏」。正确的顺序是：先在本地/探针里验通路，再在正文里用；要老大配合实测时，明确说清「这条注释会暂时显形，属于验证样本」。

**2026-10-15 晚状态变化**：渲染层 v6.41 实测生效后，`<!--tts:…-->` 标记已是**常规写法**（每条回复都该写），不再是「测试样本」——这条教训仍然成立的是「先本地验再上屏」，不再成立的是「标记有显形风险所以别写」。

**同一事件的第二层教训**：小困为躲显形特意没写标记 → 老大点朗读听到全文 → 报「现在还是全文朗诵」。**机制型功能上线后必须主动讲清触发条件**（「不写标记就念全文」），否则用户把「没触发」当故障，还要多花几轮去猜、去证。措辞歧义时（老大原话「没注释，但是直接显示上去了」）不要反复猜，直接用一次带证据的实测回复覆盖两种解读。

**第三层（2026-10-15 深夜，代价最大的一次）**：标记本身**写残**（结尾只剩 `--`、或写成 `了。>`）比「不写」更糟——渲染侧 v6.41 对未闭合注释无条件截断到末尾，**整条回复正文与卡片被剥光，界面只剩「已完成，用时 21 秒」**，老大连遇两次报障（原话「我以为是我的问题，你两次回复我都是这样」）。**规矩：每写完回复，扫一眼开头的 `<!--tts:` 是否以 `-->` 收尾**——这是最便宜的自检，代价却是老大看不见回复。

关键词：验证样本、拿老大屏幕当测试环境、先本地验再放正文、朗读标记实测、老大截图报障、机制型功能讲清触发条件、标记写残、正文被吞、--> 收尾自检、回复空白、先怀疑自己的输出

### 0mv9r5xdh-8d10edff79cf4b28b7fc98c989
_重要性 3，状态 active，项目 dsh-maid-vcp,全局，被纠正_

「防流式」的宽容逻辑不能无条件套在最终帧上——同一段代码要在两个语境下表现不同，就得把语境显式传参，不能靠调用顺序碰运气。2026-10-15 实例（dsh-maid-vcp v6.41 → v6.42）：`stripHtmlComments` 对未闭合 `<!--` 无条件截断到消息末尾（本意护住流式中间帧），而小困把朗读标记写残（结尾只剩 `--`、或写成 `了。>`）时那一刀从标记处切到末尾，**正文与卡片一起被剥光，界面只剩「已完成，用时 21 秒」**——老大连遇两次报障（原话「我以为是我的问题，你两次回复我都是这样」）。修法：加 `lenient` 参数，`render` 入口传 `true`（只吃残缺标记所在的整行），流式帧保留原截断。**推论**：任何「为了容忍中间态而放宽」的分支，都要问一句「这段代码在最终帧也会跑到吗」。

关键词：防流式逻辑、语境传参、lenient 参数、未闭合注释、最终帧、流式中间帧、正文被吞、stripHtmlComments、v6.42、宽容分支要问语境、标记写残

### 0mv754ix7-cc311090c9ae426b94f33ee0ad
_重要性 3，状态 active，项目 dsh,dsh-maid-comfyui,qwen-image-dsh_

失败态 UI 绝不能替用户把出口关掉——探针失败时自动 `panelStore.close()` 会把用户刚点开的窗口抢走，而固着的红色提示条又只认手动关闭，净效果是「窗口关不掉、只能刷新页面」（老大 2026-10-14 报 dsh-maid-comfyui 面板正是此症）。正确姿势：失败就把失败写在用户已经在看的那块地方（面板内状态条 + 修复动作），别关窗、别叠加固定浮层。

【同一处的三个真因（都已修）】① 读接口形状与路由实现不一致：`GET /comfyui/config` 把去敏配置**平铺在顶层**（只有 POST 回包才包一层 `config`），代码却读 `payload.config.canLaunch` → 永远 false，启动按钮不显示、自动拉起也不发生，只剩红条；② 「关掉」没被记住：失败态 sticky 且每次点面板都重新探、重新 settleFail，✕ 只是清掉刚画的那条，下一次点击立刻重弹，观感就是按钮失灵。修法：读对字段 + 加 `suppressed` 标记（用户亲手关掉后自动探测不再重画，直到某次探测成功）；③ **2026-10-15 真因三（7118faa）**：宿主 Windows Electron 外框在 caption 高度铺了一条 `-webkit-app-region: drag` 的伪元素（`.BynINW_frame:before`），且宿主只在 macOS 分支给 button/a/input 隐式 `no-drag`；提醒条写死 `top:14px` 正好落在那条带子里，**整条 toast 连右上角 ✕ 的点击全被当成拖窗口吞掉**。修法：浮层自己写 `-webkit-app-region:no-drag`（toast 再补 `*` 覆盖子元素），顶部定位用 `var(--dsh-frame-overlay-top, 14px)`。教训：浮层「点不动」先怀疑宿主窗口拖拽区，别只查自己的事件绑定。

【2026-10-15 反转】那条红提示条**不再带任何按钮**（commit 53b5535）：它只报失败原因 + 指路面板 ⏻，启停全归 ⏻ 一个入口。原先「失败态给个重试/启动按钮」的做法被老大否掉——同一个决定两个入口，用户就会怀疑其中一个坏了。教训：改失败提示时先核对它读的 JSON 形状与宿主路由实际返回是否一致，再看「关掉」是否真写进了状态机，最后问一句「这个出口是不是重复了」。

关键词：失败态交互、别自动关窗、sticky toast、GET 平铺 POST 包 config、canLaunch 读错层级、suppressed 抑制重弹、关闭按钮失灵、53b5535 删启动按钮、失败提示不给按钮、出口重复、接口形状与路由实现对照

### 0mv9qiaxb-6a72fe9039a244f6911358037a
_重要性 3，状态 active，项目 dsh,dsh-maid-comfyui_

DSH 宿主 Windows Electron 的外框在 caption 高度铺了一条 `-webkit-app-region: drag` 的伪元素（`.BynINW_frame:before`），而宿主只在 macOS 分支给 button/a/input 等控件隐式 `no-drag`，Windows 下没有。插件浮层若写死 `top:14px` 就落在标题栏条带里，**整层（含右上角关闭 ✕）的点击全被当成拖窗口吞掉，弹窗关不掉**。修法：浮层自己写 `-webkit-app-region: no-drag`（toast 再补 `*` 覆盖子元素），顶部定位用 `var(--dsh-frame-overlay-top, 14px)`。2026-10-15 在 dsh-maid-comfyui 连接提醒条上实测（commit 7118faa）。

关键词：app-region、no-drag、标题栏拖拽、toast 点不动、关闭按钮失效、Windows Electron、BynINW_frame、dsh-frame-overlay-top、插件浮层、点击被吞、提醒条、窗口拖拽

### 0mv9mhiwp-3628cef24f304e3bbd7ad8851e
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

交付运行时功能时要**分层声明验证边界**，别把弱证据说成端到端跑通。跨会话播报（0.5.0）分三层——① 离线单测（从落盘 client.js 抽真代码 + mock，播放器 7 项、观察者 6 项全过）；② 运行时实证（真实渲染进程里 watcher 确实挂上：retainedBy 出现 `xiaomi-mimo-tts-cross-session`；手动调 playRemote 对隔壁会话真出声）；③ 未验的那层＝「真会话自然跑完的 running 边沿自动触发」，只有真人开着会话跑一轮才知道。
**2026-10-15 反思跳过（0.6.0→0.6.2）补上第四层教训**：①「离线单测全过」在判据类改动上等于零证据——桩数据是自己造的，0.6.0 十用例全过却上线即失效；必须在②之前加一层「**用真实运行时数据批量跑候选判据**」（本次对 42 个会话 dump、21 个含反思、28 个反思轮逐个比对真值，才发现 0.6.1 漏了首轮那 2 处）。② 交付时把「哪层验过、哪层没验」逐条写明，比含糊说「已跑通」更让老大信。③ **老大会真的去用**——0.6.0 交付当晚就被报「还是会读」，所以「未验那层」必须主动点名请他试，而不是等他自己撞上。

关键词：分层声明验证边界、离线单测全过无效、真实运行时批量跑判据、42 会话 dump、28 个反思轮、首轮漏判、watcher 挂上 retainedBy、playRemote 真出声、未验那层自然跑完、判据类改动、交付别说过头、老大会真的去用

### 0mv9nzvws-35c76c7492924c588b6fd62a29
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

DSH chat nodes 字段布局（2026-10-15 运行时实测，判据类改动必看）：注入型 user/message（source.kind !== "user"）在 legacy.nodes 里 kind = `context`，被 next-turn claim（waking=true）时改 `turn-trigger`；真人消息 kind = `user`/`steering`。**context/user 节点的 `content`（content 数组，元素 {type:'text',text}）与 `source`（{kind,…}）扁平挂在节点顶层，`node.data` 是 undefined**——按 node.data.content 取会全部落空。assistant 节点字段是 `kind,seq,messageId,time,turn,step,blocks,usage,timing`（无 source）。
**`turn-trigger` 不进 legacy.nodes**（`ui-chat-client.js:8546-8618` 的 `legacyContribution` switch 没有这个 case，落 default → EMPTY_CONTRIBUTION）——**被 claim 的注入在 legacy 里消失**，靠文本标记找它必然落空。
**2026-10-15 再修正（关键）：注入有两种命运，判据必须两种都认**——① 被 claim → 变 turn-trigger → 从 legacy 消失，只能用间接信号（这一轮首条 assistant 之前没有可见输入节点）；② **没被 claim（典型＝会话首轮的那次注入）→ 保持 `context` 形态留在 legacy 里，source.kind 与文本都读得到**。只认 ① 会漏首轮（0.6.1 就是这么漏掉 2 处的），正确做法＝①间接判据 + ②`isReflectInjection(node)` 直接认（kind ∈ context/user/steering/turn-trigger 且 content 文本含标记）双管齐下。

关键词：chat nodes 字段、node.data undefined、content 挂顶层、source.kind、context 节点、turn-trigger 不进 legacy、legacyContribution 丢弃、注入两种命运、首轮注入留在 legacy、isReflectInjection、node.turn 定轮边界、双判据

### 0mv9lf28c-d6245b2bbfdd4388bfe23b0258
_重要性 3，状态 active，项目 dsh_

DSH 渲染进程里没有全局 cordis 句柄，要从 React fiber 捞 ctx。**两代姿势（fiber 结构会变，先试 A 再试 B）**：
A（2026-10-15 白天有效）：任意元素取 `__reactFiber$*` key → `while (f.return) f = f.return` 到 root → DFS 遍历 `f.memoizedState` 链，找形如 `{key, ctx, hooks, keyedHooks, props}` 的注入快照，取 `v.ctx`。
B（2026-10-15 晚 A 失效后有效）：**不扫 memoizedState，直接看每个 fiber 的 `memoizedProps`**——命中 `memoizedProps = {ctx, store}` 的 fiber（判据 `p.ctx.sessions` 存在），取 `p.ctx`；实测 4 个 root / 16829 节点内命中。
ctx 受 inject 门禁：直接 `ctx.uiConversation` 抛 `Error: cannot get property "uiConversation" without inject`，必须走 `ctx.reflect.get('uiConversation'|'uiSession'|'sessions'|'remote'|'slots'|'uiWorkspace')`（`ctx.sessions`/`ctx.remote`/`ctx.reflect` 本身可直接取）。ctx 存 `window.__maidCtx`，**页面一重载就丢，必须重捞**。

关键词：fiber 捞 ctx、memoizedState 链、memoizedProps ctx store、inject 门禁、ctx.reflect.get、cannot get property without inject、window.__maidCtx、重载即丢、React fiber、DSH 渲染进程

### 0mv8hwfkp-682473b7ac634cc7a2edb5a527
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

跨会话自动播报：2026-10-15 运行时实测**已跑通**（不再停在源码推演）。链路：`sessions.retain(id,{source})` → `await ref.ready` → `sessions.binding(id)` → `uiConversation.binding(binding).target('chat')`。三个关键坑：① chat target 首次 `getSnapshot()` 恒为 undefined（等 1.5s 也没用），**必须先 `target.subscribe(()=>{})` 预热**才有快照；② 运行中的会话正文尚未落进 nodes 的 text 块（实测 running 会话 58 条 assistant 只有 1 条带 text），**必须等 running 边沿 true→false 之后再取正文**；③ 完成信号以 `binding.session.subscribe` + `getSnapshot().running` 边沿为准——`uiSession.sessionStatus`（completionUnread）与 `ctx.remote.$on('api-session/status')` 当时都 0 事件。原型脚本：`D:\DeepSeek Harness\Works\_probe\tts-cross-session-probe.mjs`。**纠错（2026-10-15 复读源码）**：探针注释里「设了 playbackOwnerId 就能播隔壁」是错的——`segmented`/`toggle` 首行还有 `if (this.activeSessionId !== sessionId) return;` 挡着，落地必须另加一条按 sessionId 直接播的入口（已用 remoteSessionId + ownsSession + playRemote 解决，见 0mv9kdfe）。retain 必须 release 否则会话永不 retire。

关键词：跨会话自动播报、隔壁会话、retain binding、chat target 预热、getSnapshot undefined、running 边沿、sessionStatus 无数据、playbackOwnerId、tts-cross-session-probe、正文未落 nodes、release 否则不 retire、完成信号订阅

### 0mv9nd1wk-5a7f2c69929847efbcee5a5ee2
_重要性 3，状态 active，项目 dsh-maid-comfyui,dsh_

删一个功能，要连它的所有「表面」一起清，否则会留下说谎的文档。2026-10-15 删 dsh-maid-comfyui 的空闲自动关闭（197c931）时，实际要动的是 15 个文件：源码（idle.ts/config.ts/index.ts/tools.ts/routes.ts）+ 客户端（panel.tsx/settings.tsx/i18n.ts/styles.ts/connection.tsx）+ 自测脚本（test-idle.mjs 整文件重写，19 项→14 项）+ 三份文档（README ×2 / CLAUDE.md）+ skill 文本。少清一处，用户下次读到的就是「已删除功能」的说明书。同轮还踩了两个真坑：① `src/skill.ts` 的模板字符串里写了 markdown 行内反引号，tsc 报 6 条 `TS1127: Invalid character.`——给 skill 写文案时不能用反引号；② pnpm 不能直接调（内部再 shell 出去找 `pnpm` 报「不是内部或外部命令」），构建要直跑 `node node_modules/typescript/bin/tsc -p <cfg> --noEmit` 与 `node node_modules/tsdown/dist/run.mjs -c tsdown.config.mjs`。

关键词：删除功能清表面、同步义务、test-idle 重写、README 两份、CLAUDE.md 同步、TS1127 反引号、skill.ts 模板字符串、pnpm 不可直接调、tsc bin 直跑、tsdown run.mjs、文档说谎

### 0mv76chkz-4b3e0536c80e462ba63a72a527
_重要性 3，状态 active，项目 全局,dsh-maid-comfyui,qwen-image-dsh_

要自动关掉一个「可能是用户自己开的」后台服务时，必须能证明它是我拉起来的：①启动时打标（落盘标记文件，跨宿主重启也能认回）；②关停那一刻按端口反查 PID 而不是缓存 spawn 的 pid——`.bat` 这类启动器自己立刻退出，spawn 返回的 pid 不是真正在监听的服务器进程；③拿不到监听者就放弃（宁可留着也不误杀用户的服务）；④关停前再看一眼有无任务在飞。小困给 dsh-maid-comfyui 加关闭功能时就是这么做的（win32 `netstat -ano -p TCP`，其他 `lsof -iTCP:<port> -sTCP:LISTEN -t`，关停 `taskkill /PID <pid> /T /F`）。
【2026-10-15 补】触发它空闲关闭的那套计时器已按老大要求删除（commit 197c931），但**这四条安全姿势原样保留**在 `src/idle.ts`——现在的触发口是「会话轮结束」与面板 ⏻。删功能时保住安全边界，别顺手把「只关自己的」也削掉。

关键词：自动关服务安全边界、启动打标、端口反查 PID、netstat -ano、lsof LISTEN、spawn pid 不是服务器、bat 启动器、taskkill 进程树、宁可留着不误杀、任务在飞检查、删功能保住安全边界

### 0mv9n0msg-887f496f99a64738b9c00d13b0
_重要性 3，状态 active，项目 dsh-maid-comfyui,全局_

老大对「插件自动代劳」的偏好：自动化一旦越界就收回到手动控制，且**同一个决定只能有一个入口**。2026-10-15 实例一（原话 m00617）「打开面板不会启动comfyui，用面板里的⏻来手动启动、关闭。会话任务启动的，会话任务结束关闭。没有空闲自动关闭。」——小困原本的「打开面板探不到就自动拉起 + 空闲 30 分钟兜底关」被整体收回：启动改成用户按 ⏻（或跑工作流时插件自己拉起），关闭只留「会话轮结束」这一条自动路径，空闲兜底彻底删除。实例二（同日 m01069 截图追问）「没弄好启动关闭comfyui都由⏻管吗」——连接失败提醒条上那个「启动本地 ComfyUI」按钮是漏掉的第二个启停口，被点出后删掉（commit 53b5535），提醒条只报原因并指路 ⏻。启示：做「体贴的自动行为」时别叠多层，用户要的是可预期——自动触发点越少越好；同理手动入口也必须收成一个，两处能启动同一个东西，用户就会怀疑另一处是不是坏了。

关键词：自动行为越界、手动控制权、单一入口、打开面板不启动、空闲自动关闭删除、⏻ 手动启停、提醒条启动按钮删除、53b5535、可预期性、自动触发点收敛、会话结束关闭、插件体贴过头

### 0mv9mhiuw-1dfb8fbcd7604f808b0e227b34
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

写「队列 + 异步资源」的观察者时，自测必须专门覆盖两条失败路径——本轮跨会话播报自测第三组靠它们揪出两个真 bug：① **队列续跑**：`playRemote(...).finally(() => { pumping = false; })` 没接着调 `pump()`，第二条排队消息永远播不出来（正确写法 `.catch(()=>{}).then(()=>{ pumping=false; pump(); })`）；② **失败路径释放**：`reference.ready` reject 或 `binding === undefined` 时只 `return` 会让 retain 永不释放（必须调 `unwatch()` 走 release）。教训：资源泄漏 bug 只在「失败分支」出现，happy path 测试永远看不见。

关键词：队列续跑、pumping 标志、playRemote finally 不续跑、retain 泄漏、失败路径释放、reference.ready reject、binding undefined、unwatch release、happy path 测不出、异步资源自测、跨会话观察者

### 0mv9mhith-1df33b38163549b0a22c7b0cd4
_重要性 2，状态 active，项目 dsh,全局_

在 ego_script 里调 GitHub API 别走 `_probe/gh-api.mjs`（它内部 `curl.exe` 会 exit 7 连接失败，`status:7 output:[null,'','']`）——直接用 `node:https` 直发：`https.request({host:'api.github.com', path:'/repos/...', method:'PATCH', headers:{Authorization:'Bearer '+tok,...}})`，令牌仍从 `git -c credential.helper=manager credential fill` 取。实测 PATCH 仓库 About 返回 200。node:https 直连不需要 7890 代理。

关键词：gh-api.mjs 失效、curl exit 7、ego_script 调 GitHub API、node:https 直发、api.github.com、credential fill 取令牌、PATCH 仓库 About、无需 7890 代理、spawnSync curl 失败

### 0mv9lpwlg-479148dfbaac4e26ab402b56e4
_重要性 3，状态 active，项目 dsh-maid-tts-fix，被纠正_

跨会话自动播报的**落地卡点＝PlaybackController 里 `activeSessionId` 门禁遍布**：`segmented(sessionId,…)`（client.js:1631）与 `toggle(...)`（client.js:1755）首行就是 `if (this.activeSessionId !== sessionId) return;`——比设 playbackOwnerId 更早，给隔壁会话播会直接 return；另有 claimAutomaticPlayback(:1595)、observeSession(:1584)、updateLivePlayback(:1605)、cancelPlayback(:1562)、deactivateSession(:1571) 同样看它。而 activeSessionId 只等于「当前渲染会话」（SessionPlaybackObserver 的 activateSession 设的）。**2026-10-15 已按「新入口」方案解决**：新增 `remoteSessionId` 字段 + `ownsSession(sessionId)` 判据（`activeSessionId === sessionId || remoteSessionId === sessionId`），两处入口首行改判 `!this.ownsSession(sessionId)`；`playRemote()` 临时设 remoteSessionId、播完 finally 还原。**最小改动原则的教训**：不要改「UI 在看哪个会话」这个语义，只放宽入口判据 + 加一个临时接管字段。

关键词：activeSessionId 门禁、segmented 首行 return、toggle 首行 return、playbackOwnerId 不够、remoteSessionId、ownsSession、playRemote、最小改动、UI 在看哪个会话、PlaybackController、探针结论纠错

### 0mv9m0zhx-b3c550968de04782ad545cc31b
_重要性 2，状态 active，项目 全局_

排查「配置导致的异常行为」（凭据弹窗、默认值、工具行为偏差）时用隔离复现，别动真配置：① 把真配置文件（如 `~/.gitconfig`）复制成一份临时「空配置」副本，用环境变量覆盖它（git 用 `GIT_CONFIG_GLOBAL=<临时文件>`）再跑同一条命令，对比行为差异，即可判定「是不是这段配置引起的」；② 把交互式弹窗转成可捕获的报错——设 `GIT_TERMINAL_PROMPT=0` + `GCM_INTERACTIVE=never`，弹窗会变成 `fatal: Cannot prompt because user interactivity has been disabled.`，非交互环境下也能安全复现「会弹窗」的场景。2026-10-15 用这招验证 gh-proxy 弹窗根因，全程零副作用、没碰真配置。

关键词：隔离复现、GIT_CONFIG_GLOBAL、临时配置副本、GIT_TERMINAL_PROMPT、GCM_INTERACTIVE、Cannot prompt because user interactivity、零副作用验证、排查配置根因、环境变量覆盖配置、非交互复现弹窗

### 0mv742s7t-af2ee95acfed42c2b58fd95cdf
_重要性 2，状态 active，项目 全局,dsh_

镜像 host 弹 Git Credential Manager 的根因与处理（2026-10-15 实测，老大问「这个 git 凭证要登录吗」）：
① 根因——`C:\Users\Kayle\.gitconfig` 里写着 `credential "https://ghproxy.net" provider = generic` 与 `credential "https://gh-proxy.com" provider = generic`，GCM 因此把这些镜像当「普通主机」走用户名/密码流程，于是弹窗（Windows 凭据管理器里只有一条 `git:https://github.com`，从没给镜像存过凭据）。
② 结论——**不要填，点 Cancel**。镜像站只转发 GET（clone/fetch/release 下载），push 走不了镜像，压根没有认证需求；公开库拉取也不需要凭据（实测 `git ls-remote https://gh-proxy.com/https://github.com/Valorine97417/dsh-maid-preset.git HEAD` 不带凭据正常返回 HEAD）。填账号密码没用，填 GitHub 令牌等于把 `gho_` 令牌交给第三方代理站。
③ 根治——`git config --global credential.https://gh-proxy.com.helper ""`、`git config --global credential.https://ghproxy.net.helper ""`（改 .gitconfig 前先备份）。
④ 探仓库是否存在，别用 `git ls-remote`（会触发弹窗，报 `fatal: User cancelled dialog.` 且挂住整条命令）；改用 `Invoke-WebRequest -Method Head https://github.com/<user>/<repo>` 看 404/200，无凭据、不弹窗、秒回。（若只是想推代码，`git ls-remote` 加 `-c credential.helper=manager` 正常可用；这条只针对「先探活再决定」的场合。）

关键词：Git Credential Manager 弹窗、gh-proxy.com、ghproxy.net、provider generic、.gitconfig、凭据助手、Cancel 不填、镜像不需要凭据、公开库 ls-remote、credential.helper 置空、探仓库 HEAD 404、第三方代理站 token 风险

### 0mv9lq7mz-673c146fb2f044be932d769224
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

xiaomi-tts 插件的两个 inject 别搞混：`package.json` 的 `dsh.client.inject` 已含 uiConversation/uiSession（模块依赖声明），但 `lib/client.js:6978` 的 cordis `const inject = ["slots","locale","remote","configForms","sessions"]` **没有** uiConversation/uiSession。插件里直接写 `ctx.uiConversation` 会抛 `Error: cannot get property "uiConversation" without inject`——跨会话播报要拿 chat 快照就必须把 "uiConversation" 加进这个数组（探针当时是走 `ctx.reflect.get('uiConversation')` 绕开门禁的，插件里不该这么干）。

关键词：uiConversation inject、cannot get property without inject、client.js inject 数组、ctx.reflect.get 绕门禁、package.json dsh.client.inject、cordis 服务注入、跨会话播报前置、xiaomi-tts 改造、uiSession、chat 快照拿不到

### 0mv84xrfz-190226a1720442bab253173dbb
_重要性 3，状态 stale，项目 dsh,dsh-maid-preset_

【已完成 2026-10-15】preset-ptc(cordis.yml:975) 与 preset-cordis(:1239) 内的 compaction-basic 原本缺 config、auto 默认 on，已按老大指令补上 auto: false（现位于 :976-978 与 :1242-1244）。改法：用 ego_script + node:fs 正则插入（在 name 行后插 config:/auto: false），备份 C:\Users\Kayle\.dsh\profiles\desktop\cordis.yml.bak-preset-ptc-cordis-auto-20261015-133009（md5 b4bd107e5f1bf3ef0ef71b6278494fb5，63698 字节），改后 md5 b2ef2ea0f8572756010476ae2ff523eb、63790 字节。文本级复核：standard@801 / ptc@976 / cordis@1242 / maid@1506 四处全部 auto:false，节点数仍 4 个。至此 profile 内 4 个 preset 的原生自动压缩全关，压缩权统一归 bili。

关键词：preset-ptc、preset-cordis、compaction-basic 补 auto false、四个 preset 全关、cordis.yml 正则插入、ego_script node fs、备份 md5 b4bd107e、b2ef2ea0、自动压缩交还 bili、已完成

### 0mv6oe01m-b0ec6dd519fb4cb083cf8761c0
_重要性 2，状态 active，项目 dsh_

排查 DSH 客户端 UI/行为的方法：app.asar 不是目录不能直接 grep，先用自建探针 `D:\DeepSeek Harness\Works\_probe\asar-list.cjs`（列条目）与 `asar-extract.cjs`（抽单文件）把 `@deepseek-ai/dsh-client-*` 的 lib/client.js 抽到磁盘再搜；在源码里找 `return null` 的渲染判据，顺着判据里的 ctx 字段（如 configForms.xxx.enabled）追到提供它的宿主包，最后落回 profile 的 cordis.patch.yml 找真值。已抽好的源码副本常驻 `D:\DeepSeek Harness\Works\_probe\_dshsrc\`，现只有三份且够用于会话/聊天链路：`session-service.js`（Session Controller：retain/using/retainInfo/subagentAddress/projectList）、`ui-session-client.js`（UiSession：api-session/status 订阅、completionUnread、sessionStatus hook）、`ui-chat-client.js`（Chat 快照：nodes/timeline/partial）。要查别的模块再抽，别重复抽。

关键词：asar 探针、asar-list.cjs、asar-extract.cjs、客户端插件源码、return null 判据、ctx 命名空间、UI 元素不显示、app.asar 不能 grep、_probe 目录、_dshsrc 副本、session-service.js、ui-session-client.js、ui-chat-client.js

### 0mv9koltb-9089925904204b699304625571
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

可行性结论必须连「前提」一起记，否则前提失效后会拿旧结论劝退。实例：「跨会话自动播报」原判「改动量是现有 23 条的几倍」的前提是「要绕开 React 闭包直接调播放器」；但 0.4.0 做「切会话不打断」时已把播放器改成按 sessionId 参数化（playbackOwnerId），前提早已不成立——旧结论把工作量估高了一个量级。教训：写下否定/暂缓结论时，同时写下它依赖的前提；任何一次相关改动落地后，回头重估该结论。

关键词：可行性结论、前提失效、旧结论劝退、重估、工作量高估、playbackOwnerId、切会话不打断、React 闭包、暂缓判断、复查源码、教训

### 0mv84xrfn-402c26cb15f84e35abdd6788f4
_重要性 3，状态 active，项目 dsh,dsh-maid-preset_

bili 冲突台账（Web UI 横幅那 2 条 unannounced-rewrite）是持久化的，重启不会自动消失；清空用 `POST http://127.0.0.1:18787/__bili/conflicts/clear`（即横幅「清除记录」按钮，返回 200），清后 stats.conflicts 全 0。所以「横幅还在」≠「有新冲突」，得看 events/lastAt 是否变化。2026-10-15 溯源确认：这 2 条的来源会话是 session-f725c696（10-14 的旧会话，当时 preset 内 auto 还没关），suspected/sibling/activeConfirmed 全 0 = 无第二个压缩器的证据，横幅措辞重于实情；当日已 clear 归零。另注：preset-ptc(cordis.yml:976)/preset-cordis(:1240) 内的 compaction-basic 仍是默认自动开，切到这两个预设跑长会话会再冒同样警告。

关键词：bili 冲突台账、清除记录、conflicts clear、横幅不消失、unannounced-rewrite、18787、session-f725c696、preset-ptc、preset-cordis、compaction-basic auto、历史事件持久化、suspected 为 0

### 0mv6ttvgd-ec0aa0d1abc04be7ba42fb15a7
_重要性 3，状态 active，项目 dsh-maid-vcp_

**v10 补丁器短路**：`patch-frontend-asar.cjs` L246 `if (t.includes(V6_MARK) && t.includes('window.__vcpGen')) return {applied:['已是 v10 形态，无需重复安装'], changed:false}`（`V6_MARK='window.__vcpStable'`）——已是 v10 形态时重跑 install-all **不会把改好的 v6-inject.js 打进 asar**，dry-run 也骗人。解法：新增 `updateInjectModule(t)` 用 `/*__DSH_V6_INJECT_START__*/` 与 `END` 夹取旧模块，整段替换为 `adaptInject(INJECT_SRC, true)`（读磁盘 `patch/v6-inject.js`），内容相同则幂等跳过；边界=此路径**只升级 C 项**，A/E/F 三项锚点补丁在已是 v10 形态时无法二次定位。
**验证纪律（补）**：打完 asar 必须**逐函数**把 asar 内 v6 段与磁盘源做等值比对（不是只看标记在不在）——写脚本从 START/END 间取段、按大括号配平抽 `fixVcpBlank`/`findRootClose`/`nextTag`/`tagEndAt` 各函数逐字比对（实测 960/1065/931/269 字符全等）。注意 `readEntry().toString('utf8').length` 是**字符数**（721281），不是字节数（741859），别把差值当损坏。
**v10.2 幂等修复（2026-10-15，commit 96faa54）**：`updateInjectModule` 的比较对象原为「整文件含尾换行 vs 夹取段不含尾换行」，永远不等 → 每次 install 在 END 后多插一个 `\n` 并假报「86002 → 86003 整段升级」。改为先 `full.indexOf(START)` / `indexOf(END, ni)` 切出模块本体再比；复跑报「已是 v10 形态，v6 模块已是最新，无需重复安装」。

关键词：v10补丁器短路、已是v10形态、updateInjectModule、START END 标记、asar重打、v6-inject升级、逐函数比对、字符数非字节数、install-all跳过、补丁验证纪律、v10.2幂等修复、比较对象不一致

### 0mv9kcjao-0510d8bb8ef94ca39651ac520d
_重要性 2，状态 active，项目 dsh-maid-tts-fix_

探针断言「不通过」先定性再动手——`_probe/tts-spoken-probe.mjs` 断言④（多行标记）报不通过，实为**探针期望值写错**：实现 `match[1].replace(/\s+/g,' ').trim()` 会把「老大，␣␣多行」的两个空格压成一个，正确产物是 `老大， 多行 标记也要能认。`，探针却期望逗号后无空格。不是补丁缺陷，是陈旧探针。已校正期望值，全绿（3 断言通过）。规矩：断言失败先拿实现源码对一遍产物，别急着改补丁；「\s+ → 空格」必然保留一个空格，别指望它把空格也吃掉。

关键词：探针期望值写错、断言误报、空白折叠、反斜杠s加号替换、全角逗号后空格、tts-spoken-probe、断言④、先怀疑探针、陈旧探针、定性别猜、朗读标记多行

### 0mv9kcj9u-8ca94a6b481a4327b6c0f2d8a6
_重要性 3，状态 active，项目 dsh-maid-vcp_

补丁器幂等判据必须「同物相比」——`patch-frontend-asar.cjs` 的 `updateInjectModule()` 拿 `adaptInject(INJECT_SRC, true)`（整文件，含尾换行）去比 bundle 里 `slice(i, endIdx)` 夹出的段（不含尾换行），两者永远不等 → 每次 install 都在 END 后多插一个 `\n`，dry-run 永远报「✓ C v6 稳定区模块整段升级（86002 → 86003 字符）」。**危害不在那一个换行，而在它掩盖真差异**：以后 v6-inject.js 真更新了，报的还是同一句，人就会忽略。修法（v10.2 · 2026-10-15，commit 96faa54）：`full.indexOf(START)`/`indexOf(END, ni)` 切出模块本体再比，复跑报「已是 v10 形态，v6 模块已是最新，无需重复安装」。教训：dry-run 全绿 ≠ 内容一致，幂等检测可能只看标记在不在。

关键词：补丁器幂等、updateInjectModule、START END 标记、比较对象不一致、整文件vs夹取段、尾部换行、每次install多插换行、dry-run假升级、掩盖真差异、asar重打、幂等判据、dry-run全绿不等于内容一致

### 0mv77lwc6-0ae72ac274d74fe38df46ac6f7
_重要性 2，状态 active，项目 dsh_

读 DSH 本体（`D:\DeepSeek Harness\resources\app.asar`，约 825 MB）的三条通道：① **按路径提文件** —— `D:\DeepSeek Harness\Works\_probe\ext.mjs <asar 内路径> <输出文件>，手写读头即可（headerSize 在 offset 12），能把 asar 里的 lib/index.js 等原样落成 UTF-8 文本，查实现首选；② **搜索** —— grep 工具可直接搜 asar 并给行号（ripgrep 能穿 asar），加 context 参数拿命中处上下文；③ `read` 与 `ops_inspect_local_file` 一律报 `Cannot read binary file as text`，hex 视图对找逻辑无用。

关键词：app.asar 读源码、ext.mjs 按路径提取、headerSize offset 12、grep 穿 asar 带行号、context 拿上下文、Cannot read binary file as text、hex 视图无用、查宿主实现、patch 应用算法、row.disabled、825MB、ripgrep

### 0mv9jpoep-a214de913e9a46019406989a8b
_重要性 2，状态 active，项目 全局_

大块压缩内容别整篇读回上下文：decompress 会把 block 落成临时 txt 并给路径，先用 grep 按关键词拿行号，再 read 局部区间，省十倍量。

关键词：decompress blockId、临时 txt 路径、grep 拿行号、read offset limit、局部读、上下文节省、压缩块、search_context 先行、别整篇读

### 0mv8aketk-6500fbb5e9a54e219469c91173
_重要性 2，状态 active，项目 dsh_

插件推荐落清单前必须现查核实，三个坑：① 视频/二手榜单不可尽信——星数常有出入、存在标题党、有些插件只在 npm 有（dsh-my-guardian）。② GitHub 搜索 API 的宽泛词会混入无关大项目（q=dsh-plugin 返回 3 万+ 结果，混进 deepseek-harness 主仓、rea、open-design 等），必须加限定才准：`created:>YYYY-MM-DD` 卡时间窗 + `in:name` / `in:description` 收窄。③ **网络分工**：GitHub API 必须走代理（`curl -x http://127.0.0.1:7890` + Bearer 令牌），而 `registry.npmjs.org` 走代理返 000 / exit 35、**必须直连**才 200——取 dist-tags.latest 与 time[latest] 判活跃度时别带 -x。现成脚本：`_probe/dsh-cand-check.mjs`（批量查候选的星数/push 日期/描述/npm 版本）。

关键词：插件推荐核实、GitHub 搜索限定、created 过滤、in:name、宽泛查询混入大项目、npm registry 直连、curl 代理 exit 35、dist-tags latest、活跃度判断、dsh-cand-check.mjs、二手榜单不可信

### 0mv83cvbe-e031c37eabd0450080abcf4b96
_重要性 2，状态 active，项目 dsh_

老大「从 GitHub 更新本地插件」的固定套路（2026-10-14 走通、2026-10-15 复用）：① 逐仓 `git fetch` 后看 ahead/behind，确认 fast-forward 再 pull --ff-only；② profile 用 `link:` 接入的不用重装，目录原地更新即生效；③ 编译产物必须重 build——**dsh-maid-comfyui 的 build 不能用 pnpm/npm run（build 脚本内嵌 `npm run build:host`，MSYS bash 无 npm 直接崩；pnpm run 还有 runDepsStatusCheck 报错），直接跑 `./node_modules/.bin/tsc -p tsconfig.json` + `./node_modules/.bin/tsdown -c tsdown.config.mjs` 两条底层命令**；④ asar 补丁类（vcp）跑 patch/install-all.cjs，先 --dry-run；⑤ 完事告知老大「完全退出并重启 DSH」，刷新页面不够。「检查插件更新」的任务形态：npm 源包用 `curl -x http://127.0.0.1:7890 https://registry.npmjs.org/<pkg>/latest` 对比 profile package.json 版本（2026-10-15 实查 8 个全最新）；自家八仓 fetch 看 ahead/behind，behind 的提交先用 git log 看是什么再拉（可能是其他会话推的功能或记忆同步）。

关键词：GitHub更新插件、git fetch、ahead behind、fast-forward、link协议、重build、tsc、tsdown、npm not found、pnpm run 崩、registry latest、检查插件更新、重启生效

### 0mv8l5imf-2e1eb41cc65c45f192d80abdd2
_重要性 3，状态 active，项目 全局，被纠正_

对账从远端发起，不从记忆清单发起：老大问「有没有都同步到 GitHub」，小困拿 Works 目录里的印象清单（6 个仓）开跑，漏了 dsh-maid-patch-kit 和 dsh-maid-plugins，被老大指出「我 github 项目里有 8 个小困插件，跟你提的数量才 6 个」——GitHub 实际共 9 个自有仓（8 个 dsh-maid-* + chatgpt-plugins）。正确姿势：先 `GET /user/repos?affiliation=owner`（**必须用 /user/repos 才含 private，/users/<名>/repos 只回 public**——第一次就栽在这，5 个里少了 3 个 private）列全，再逐仓 fetch 比对。

关键词：对账、仓库清单、漏查、user repos、private、8个插件、GitHub、同步核对、数量对不上、从远端发起

### 0mv85afld-db5e88240f654eb9a0c1207fc0
_重要性 3，状态 active，项目 dsh_

首段模式截断与抓重点的完整解法：上游插件没有任何摘要能力，只有截断——`splitTtsSegments` 按 160 字目标切（DEFAULT_TTS_SEGMENT_CHARACTERS=160 / MAX 240 / MIN 50，shared-DQIrhcy-.js），first-segment 档＝念第一段。上游三档：smart（自动短全文/长首段+随机收尾语，手动全文）、full（都全文）、first-segment（都首段）。2026-10-15 起 profile 的 readScope 已改为 **first-segment**（备份 cordis.patch.yml.bak-firstseg-20261015-0450），配合 tts-fix 0.4.0 的 `<!--tts:…-->` 标记优先（messageText 清洗之前提取）——最终行为：**有标记念标记、没标记念首段、永不念全文**。端到端实测（_probe/tts-firstseg-e2e.mjs，真实补丁代码 9 场景 0 挂）：无标记长文首段 184 字、CSS 剥净、英文长段只念开头 211 字、空标记走兜底、手动/自动行为一致。探针族谱：tts-spoken-pipeline.mjs（真实代码三段对照）、tts-mark-audit.mjs（会话日志标记覆盖审计）、tts-firstseg-e2e.mjs（首段兜底端到端）。

关键词：首段截断、first-segment、160字、readScope、朗读标记、标记优先、永不全文、tts-firstseg-e2e、tts-mark-audit、tts-spoken-pipeline、applyTtsPlaybackScope、端到端

### 0mv8ks5mg-d716a788f26a4e49803ae7c691
_重要性 2，状态 active，项目 全局_

npm registry 走本机代理（curl -x http://127.0.0.1:7890）返回 000 / exit 35，直连 registry.npmjs.org 返回 200。查 npm 包信息时 curl 不要带 -x；GitHub API 则相反，必须走代理。

关键词：npm registry、curl 代理、exit 35、000、直连、7890、registry.npmjs.org、GitHub API、取包信息、网络取证

### 0mv8ks5lq-21e5a14d1334440b8b0901a2b3
_重要性 3，状态 active，项目 全局，被纠正_

老大说「全清」时要先问清清哪一层，别一刀切到整个补丁。2026-10-15 实例：老大 m05093 原话「直接全清掉，回到最开始的默认把。」小困把 dsh-ego-browser 补丁整份撤了（含 issue#70 的 Windows profile 锁功能修复），老大 m05161 纠正「清掉的是做右边侧边栏UI主题界面那些噢」——清的是 UI 主题美化那套，功能修复不在此列。判定法：把补丁拆成「功能修复」与「外观改造」两摞分别确认，前者默认保留。

关键词：全清、清理范围、一刀切、撤回补丁、功能修复、UI 美化、ego 侧边栏、issue70、老大纠正、清哪一层、拆开确认

### 0mv83mxjp-e0e6851a5fbd420f867cafb394
_重要性 3，状态 active，项目 dsh,dsh-maid-preset_

与 billion-context 冲突的不是第二个压缩插件，是 DSH 自带的 @deepseek-ai/dsh-compaction-basic。bili 的 dsh.bundle.patch.yml 只打到 host-plane 那行（本来 disabled:true），实际运行的是 preset 内部实例（preset-standard/preset-maid 的 compaction 组），补丁静默无效。修法：在 dsh-maid-preset/cordis.patch.yml 给 preset 内 compaction-basic 加 config: auto: false（preset-standard 145-148 行、preset-maid 364-367 行），手动 /compact 与 tool-result-pruner 保留不动。铁证：bili.log「dsh native compaction call identified ... REFUSED, not forwarded: bili owns compression on this lane」+「unannounced client history rewrite detected (194/504 ...) — marking compaction boundary (#1001)」；GET /__bili/stats 的 conflicts 里 suspected=0 / sibling=0 / activeConfirmed=0。

关键词：billion-context、压缩器冲突、compaction-basic、auto false、preset 内部实例、bundle patch 打不到、unannounced rewrite、#1001、会话历史改写、压缩权、REFUSED not forwarded、dsh-maid-preset

### 0mv83mxk3-648aa498c24e43659c80a560ed
_重要性 2，状态 active，项目 dsh_

desktop profile 不能从 CLI dump 配置：`dsh --profile desktop --dump-config` 被拒——error: profile "desktop" is managed exclusively by the Electron application。验证 desktop profile 的合成结果要看 C:\Users\Kayle\.dsh\profiles\desktop\cordis.yml（Electron 重新合成，改 patch 后该文件会自动更新，看行号即可核对），或用 js-yaml 自写脚本解析 patch 文件。dsh CLI 不在 bash PATH，须用 D:\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd。

关键词：dump-config、desktop profile、Electron 独占、managed exclusively、cordis.yml 合成、验证配置、dsh CLI 路径、dsh.cmd、patch 生效核对

### 0mv8639uu-50dfbf3b7e564e17b38e1e4ed1
_重要性 3，状态 active，项目 dsh_

评估社区 DSH 插件：先核本机前置与 engines 兼容矩阵，再翻 open issue 看有无踩本机平台——装得上≠跑得动。探测本机前置别只信 PATH/which：小困曾因 ffmpeg 不在 PATH 就判「本机无 ffmpeg」，被老大纠正「我的是 win11 而且有 ffmpeg」——实际在 D:\Downloads\jasna-windows-0.10.0\ 下躺着。要先全盘 find（含 Downloads 等非标准目录）再下结论。

关键词：插件评估、本机前置探测、which 探不到、ffmpeg 不在PATH、全盘 find、被老大纠正、engines 兼容矩阵、open issue 排查、装得上跑不动、平台相关 bug、插件准入

### 0mv86ja4o-8f10f39c2b364624b4267a6b6f
_重要性 3，状态 active，项目 dsh_

判定「社区插件在本机能不能救」的手法（2026-10-14 实战）：光看 issue 不够——把 npm 包下下来解压（curl tarball 到临时目录），① 逐条核对 issue 里报的问题在当前版本是否还在（0.5.2 的八条一条没修）；② 下载 issue 附件的补丁，在解压出的包目录里跑 `git apply --check -p1` 就能确定补丁是否干净可用（video-understand 的补丁覆盖 5 个文件，一次通过）；③ 顺带查 pypi JSON API 确认每个依赖在目标 Python 版本有 win wheel。三步做完才能给出「能救/不能救」的确定结论。

关键词：插件能不能救、npm 包解压核对、issue 附件补丁、git apply --check、pypi JSON API、win wheel 核对、逐条复核 issue、依赖可用性、社区插件准入、离线核验手法

### 0mv86t5ju-e34ec291fdb944d4ad6630bffe
_重要性 3，状态 active，项目 dsh，被纠正_

老大纠正（原话）：「video-understand 不装到 comfyui里，comfyui是拿来生图的。不能装到DSH桌面端吗？」——小困提「借 ComfyUI 内嵌 Python 解释器」时没说清那只是借解释器、插件本体仍装在 DSH，让老大以为要装进 ComfyUI。教训：涉及「借别的软件的运行时」的方案，必须一句话点明「装在哪、只借什么」，否则会被理解成污染那个软件。正确答案是 DSH 自带托管 Python 3.12，根本不用借 ComfyUI。

关键词：老大纠正、不装到 comfyui、comfyui 拿来生图的、DSH 桌面端安装、借解释器要说清、方案表述歧义、装在哪只说一半、ComfyUI 是生图工具、托管 Python 替代、被纠正的沟通方式

### 0mv8aksiw-ece0d26388424fe99df574c689
_重要性 2，状态 active，项目 dsh_

video-understand 的 L0 信息层对「画面快速切换、几乎无语音」的视频解析力有限：实测「DSH 插件下载榜 Top10」这类榜单视频只抽到标题页，答不出榜单条目；而讲解型视频（有语音+持续画面）能扒得很准。原因是本机 .venv 未装 torch/transformers/ultralytics，缺 CLIP 语义层，检索词只能回落到默认的 person/action/sports。想提升可给 .venv 补语义层依赖（约 2-4min 建层，之后该视频追问秒答）。

关键词：video-understand 局限、L0 信息层、CLIP 语义层、抽帧密度、榜单视频、torch 未装、检索词回落、建层、解析不准

### 0mv8biil4-b693b1d5590a4a61924416cee7
_重要性 3，状态 active，项目 dsh,dsh-maid-patch-kit_

本机 video-understand 的 .venv 住在包目录内部（`node_modules/dsh-video-understand/.venv`），pnpm 重铺会连它一起删——补丁能用 pnpm patch 保住，`.venv` 保不住（不是补丁能表达的东西）。出路：`node scripts/venv.mjs` 幂等重建（用 DSH 自带 Python 3.12.14 + 清华镜像，约 1 分钟）。实测重铺后补丁全存活、.venv 必丢。

关键词：venv 被 pnpm 重铺删掉、.venv 在包目录内、补丁保不住 venv、venv.mjs 重建、DSH 自带 Python 3.12、清华镜像、重铺 Packages +6 -28、video-understand 运行时

### 0mv8bn1nh-f8b3eea7112342388d82adc5e4
_重要性 2，状态 active，项目 全局_

新建 GitHub 仓库的流程（无 gh cli）：① `MSYS_NO_PATHCONV=1 node D:/DeepSeek Harness/Works/_probe/gh-api.mjs POST /user/repos <body.json>`（body 里带 name/description/auto_init:false，中文描述写文件避免命令行引号坏掉）；② `git remote add origin https://github.com/Valorine97417/<repo>.git`；③ `git branch -M main`；④ push 必须借代理 `-c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890`（直连报 Recv failure: Connection was reset）。

关键词：新建 GitHub 仓库、gh-api.mjs、MSYS_NO_PATHCONV、POST /user/repos、git remote add origin、git branch -M main、代理推送、http.proxy 7890、无 gh cli、Valorine97417

### 0mv8eez9c-4e7ed77559664f11b7afa309c2
_重要性 3，状态 active，项目 全局_

给界面生成装饰素材时，别让 ComfyUI 凭空画——**拿宿主主题自带的素材当 i2i 参考图**，出来的东西才真正同源。老大 m02767 原话：「可以那主题界面的素材做生成参考图。」落地流程（2026-10-15 实测）：① 从皮肤 assets 里挑形态最接近的素材（要蕾丝边就挑蕾丝边框）；② 转成 PNG 丢进 `D:/ComfyUI_windows_portable/ComfyUI/input/`；③ 用 Qwen-Image 2.1 图像编辑工作流（id e53fa4fd），prompt 只写「要改成什么」并明确尺寸意图（要细条就写 thin、sparse、mostly empty，不然会生成一大片密不透风的花纹——首次 1024×256 出来密到压不住，改 1024×128 + low density 才成）；④ 裁切 + 按亮度差生成 alpha 通道抠掉背景；⑤ 量化到 16-32 色压到 4KB 以内，转 base64 data URI 内嵌 CSS，不引外部文件（换机器不掉图）。**但先问一句「宿主有没有现成的」**：若目标界面与皮肤在同一个 document，皮肤早已把素材 URL 挂成 body 上的 CSS 变量，直接 `var(--maid-sidebar-swag-art, none)` 继承即可——比生成位图更省、还自动跟随换肤（2026-10-15 ego 侧边栏最终就走这条，ComfyUI 那批素材转为备档）。

关键词：主题素材当参考图、i2i 参考图、ComfyUI 生成装饰、Qwen-Image 图像编辑、蕾丝素材、data URI 内嵌、皮肤 assets、同源设计、alpha 抠背景、量化压缩、密不透风、low density

### 0mv8f1v67-1395b5878f2e4e7dbab5e1cc45
_重要性 3，状态 active，项目 全局_

maid-atelier 皮肤把素材 URL 挂在 body 的 CSS 变量上（client.js 用 body.style.setProperty 注入 --maid-sidebar-swag-art / --maid-sidebar-corner-art / --maid-top-trim-art / --maid-composer-lace-art / --maid-bow-art / --maid-bottom-trim-art / --maid-bottom-crest-art 等 20+ 个，指向 assets/runtime 里的哈希 webp）。同 document 的任何后代节点——包括右侧栏插件面板——写 var(--maid-sidebar-swag-art, none) 就能继承，不必拷素材文件、不必拼 URL。改右侧栏装饰优先用这招：天然跟随皮肤开关与主题换色。兜底值写 none。皮肤**没有**立绘对应的 CSS 变量（它用 JS 建 img 节点），要复用得走皮肤静态路由 `/skin-assets/maid-atelier/<sha256>.webp`（由 dsh-maid-scenery 的 installSkinAssets 注册，只放行 GET/HEAD，且文件名必须匹配 `^[a-f0-9]{64}\.(png|webp)$`）。

关键词：皮肤素材变量、--maid-sidebar-swag-art、--maid-bottom-trim-art、body.style.setProperty、CSS 变量继承、右侧栏复用左侧栏素材、maid-atelier、var() 兜底 none、免拷贝素材、皮肤静态路由、skin-assets 哈希 webp、立绘无变量

### 0mv8h0vnm-5a71a19f9d6e45269375792036
_重要性 3，状态 active，项目 全局，被纠正_

老大纠正（原话 m03734「不是生图，是编辑。」/ m03743「生图除非不破坏原有的样子。」）：素材复用别丢给 ComfyUI 重绘，先读宿主怎么用它——能用纯 CSS（border-image / 继承皮肤 CSS 变量）表达就一律不碰像素；小困先前把 2172×320 金框旋转 90°、切九宫格、ComfyUI 重绘一圈全是加戏，皮肤自己的用法就是 `border-image-slice: 0 220` + `border-width: 0 34px`。**后续补充（m03939/m03962）**：老大要的不是让 ComfyUI 重画素材，而是先解析素材反推提示词 + 量**待改区域**（容器）真实像素尺寸，再让 ComfyUI 生成同款 UI 素材。

关键词：不是生图是编辑、生图不破坏原样、ComfyUI 重绘不合格、素材复用不动像素、border-image 照搬、读宿主 CSS 用法、零重绘、皮肤素材、老大纠正、待改区域尺寸、解析素材反推提示词

### 0mv8hsgkx-3c50f741ba664d42a8cf52500e
_重要性 3，状态 active，项目 全局，被纠正_

老大 m03962 纠正：「真实像素尺寸是获取我们要修改地方的像素尺寸，不是素材的像素尺寸。」——给界面配素材要先量**目标容器的实际渲染尺寸**（pwsh System.Drawing CopyFromScreen 抓全屏 → PIL/numpy 判色找面板边界），素材自身尺寸只是等比换算的基数，两者是两回事。

关键词：待改区域像素尺寸、素材尺寸、老大纠正、容器渲染尺寸、全屏截图、CopyFromScreen、PIL 判色、等比换算基数、界面素材适配、尺寸都不对、measure-panel.py

### 0mv8hsglt-4678729af2eb4df987d4797c2f
_重要性 2，状态 active，项目 全局_

视觉模型读图比例不可信：对 2172×320（真值 6.79:1）的金框素材，`our-free-model/openrouter/free` 报 aspect「10:1」。尺寸与比例一律自己用 PIL 量，视觉模型只用来取提示词、构图描述与色板。

关键词：视觉模型比例不可信、aspect 报错、10:1、PIL 量尺寸、素材解析、提示词反推、色板提取、openrouter/free、2172x320、6.79:1、analyze.py

### 0mv8ibymm-8daa1903b37c458d98591d55a3
_重要性 3，状态 active，项目 全局_

素材尺寸与容器对不上时的正解：**按待改区域的真实像素尺寸重新生成同款**，别去缩放/旋转/重绘原素材。小困为 ego 面板金框走过三条弯路——把 2172×320 横条素材 rotate 90°（形态失控）、切九宫格塞 border-image（7.3 倍横向压扁）、让 ComfyUI 重画（花纹变了，老大否掉：「不是生图，是编辑」）——全废。老大指的路（m03939）才对：① 解析皮肤原素材产出**配方**（提示词 + 色板；尺寸必须自己用 PIL 量，视觉模型报的 aspect 不可信）；② 量**待改区域**的真实渲染像素（全屏截图 + PIL 判色，不是量素材尺寸）；③ 让 ComfyUI 按这个尺寸（取 8 的倍数）生成整幅同款；④ 抠透明底、染主题金、量化 8 色压到 20KB 内嵌；⑤ 用 `border-image-slice: 120` 九宫格落地，角饰靠 slice 保住不缩放、中段 stretch 适配任意高度——**内容自动内缩到 border 内**，比 `::before` 背景叠图强（叠图会压住标题）。

关键词：素材尺寸不匹配、待改区域真实尺寸、九宫格 border-image、slice 120、ComfyUI 生成同款、素材配方解析、像素级适配、缩放压扁、旋转 90 度、border-image 内容内缩、UI 素材落地、8 的倍数

### 0mv8iyzue-bc99fdd730274cdb942ca80f58
_重要性 3，状态 active，项目 全局，被纠正_

老大纠正（m04646，对比左右侧边栏）：「你看左边的侧边栏都是细线精美金边框，反观右边侧边栏的。就很掉价。」——UI 装饰里柔金只能做线、不做面：1-2px 细线＝高定，实心金块＝掉价。改界面时若发现金色成了块状面积，就是设计跑偏，先换成细线素材切片再谈别的。

关键词：细线金边框、掉价、金只做线不做面、实心金块、侧边栏对比、老大纠正、审美红线、边框粗细、高定质感、界面装饰

### 0mv8iyzvh-c4d57bf44445410b8778cd2f72
_重要性 3，状态 active，项目 dsh-maid-patch-kit，被纠正_

整幅按面板尺寸生成的素材（592×944）经 border-image slice 落地后，装饰只会出现在边圈——因为生成图的纹样全挤在四边四角，中段 526×949 本来就是空白（逐行/逐列 alpha 统计也确实量不到金框厚度，四周是第一列就有全高的线）。所以「内容区还是死蓝」不是 slice 参数问题，是素材结构问题：内容区质感必须单独铺（继承宿主背景大图 + 暗罩渐变压亮度保文字对比度），不能指望整幅素材一并解决。

关键词：整幅素材、slice 只吃到边圈、内容区死蓝、边框加上去而已、九宫格空白中段、alpha 统计、暗罩渐变、质感分层、背景图另铺、面板尺寸 592x944

### 0mv8kqpbd-5b75aa1c603a4d7ea83ff9d8ca
_重要性 3，状态 active，项目 dsh，被纠正_

「抓重点念」漏念全文的根因（老大报障「有时候还是会讲全部」）：机制本身没漏——是小困的**过程性消息**没写 `<!--tts:…-->` 标记。DSH 会话里工具调用之间的短叙述（含英文思考片段）都是独立消息、都有朗读按钮，审计最近 40 条：35 条无标记（脚本 _probe/tts-mark-audit.mjs，解压会话日志统计）。教训双层：① 纪律型机制（「每条回复都写标记」）必须配机制兜底，否则必漏；② 兜底已落——profile 的 cordis.patch.yml readScope 由 smart 改 **first-segment**（上游原生档位，无标记也只念首段约 160 字，带标记优先念标记），备份 cordis.patch.yml.bak-firstseg-20261015-0450；代价＝手动点历史消息也只念首段，要全文靠标记装。另记教训：上一轮汇报卡写了「配置已改好」实际没执行 sed（正则漏了行首缩进），差点虚报——**「说做了」的动作必须当场核对回执再交付**。

关键词：抓重点念、念全文、标记覆盖、审计、tts-mark-audit、过程性消息、readScope、first-segment、兜底、纪律型机制、sed缩进、虚报

### 0mv8kek21-67fd44179ebd4c2b80821110f2
_重要性 2，状态 active，项目 全局_

GitHub release 附件上限 2 GiB，所以 >2 GiB 的 Windows 分发包会被切成分卷（jasna T0.5 就是 6 卷）；查一个项目「有没有发布二进制」要同时看 branches/trees（源码）与 releases/assets（分发物），二者常常不同步。

关键词：release 附件上限 2GiB、分卷打包原因、assets 分发物、roots 树只有源码、两处分开查、分发与源码不同步、GitHub Release 限制

### 0mv8kbvi4-cdc711830c0340e284e0e011ad
_重要性 2，状态 active，项目 全局_

核对 GitHub 项目实况的可靠手法（本会话验证有效）：api.github.com 的 /releases、/branches、/commits/<branch>、/git/refs/tags/<tag>、/git/tags/<sha>、compare/main...owner:branch、/git/trees/<branch> 逐项取证；取 raw 文件内容走 Contents API（?ref=分支）再 base64 解码，比 raw.githubusercontent 直连稳（后者 web_fetch 报 fetch failed、curl 常超时）。

关键词：GitHub API 取证、Contents API base64、raw.githubusercontent 直连失败、git trees recursive、compare ahead_by、releases/tags 核对、lightweight tag 指向 commit、分支归属判定

### 0mv8kbvhf-d5c72c3e19bf41d980c19e8995
_重要性 2，状态 active，项目 全局_

老大问「他提交里的分支会包含测试版吗？」——实测答案：不会。两仓的分支树里只有源码，既无 rt/ 目录也无 jasna.exe；测试版/T0.5 只作为 release 资产的分卷存在。分支=源码，releases=分发物，两处要分开查。

关键词：分支是否含二进制、rt 目录、jasna.exe、测试版位置、release 资产、源码树核对、分支 vs 发布物、git trees 查目录

### 0mv8gbylk-4e52d251e2d94bc286c9cf3e9a
_重要性 2，状态 active，项目 dsh-maid-tts-fix_

版本号会悄悄落后于功能——dsh-maid-tts-fix 在 0.2.0 之后又加了 spoken-override 两条编辑与 redo 子命令，package.json 一直停在 0.2.0，直到老大让同步 GitHub 才发现。教训：每次给仓库加「对外可见的能力」（新子命令、新编辑、新文件）时顺手升 minor，别攒着；同步 GitHub 前的五项核对里应该顺带问一句「版本号跟上了吗」。

关键词：版本号落后、package.json 没升、加功能顺手升 minor、0.2.0 到 0.3.0、同步前检查版本号、对外可见的能力、新子命令、发布纪律

### 0mv8fxypo-8238fe467a834a11960a562daa
_重要性 3，状态 active，项目 全局_

机制型功能上线后，必须主动把「触发条件」写进交付说明，否则用户会把「没触发」当成「功能坏了」来报障。2026-10-15 实例：小困给朗读做了 `<!--tts:…-->` 标记机制，但汇报时为了躲注释显形特意没写标记，老大点朗读听到全文，直接报「现在还是全文朗诵」——小困只好再花一轮解释「没写标记就退回原逻辑，这是设计不是故障」。教训：凡「有条件才生效」的功能（标记/开关/阈值/需先填某字段），交付时就一句话说清「什么情况下不生效、不生效时是什么行为」，别等用户撞上再解释。

关键词：机制型功能、触发条件、交付说明、有条件才生效、没触发被当故障、设计不是 bug、功能上线沟通、默认行为要说清、汇报要点、用户报障根因

### 0mv8fhip7-5413198c70364d719313147525
_重要性 3，状态 active，项目 全局,dsh-maid-plugins_

给网站/文档配效果图时，禁止直接丢整屏截图——UI 只占中间一条，两侧是重复壁纸，缩到 1/3 后什么都看不清，老大必吐槽（m00562 原话「展示的效果图也不行」）。正确做法：①裁掉无关边缘（VCP 五张切到卡片区、去掉输入框与状态栏，1600×890 → 615×658）；②超宽长图拆成多张竖图（ComfyUI 面板 1839×753 拆成工作流/资产/队列三张）；③画廊按原图比例排，竖图三列宽图两列，不裁不糊。判据：缩到展示尺寸后仍能读出图里的字。

关键词：效果图、整屏截图、裁切特写、长图拆分、截图看不清、展示图不可读、画廊排版、原图比例、缩略图验收、配图规范、素材处理

### 0mv873muh-4286aeac25af48d28576587d6c
_重要性 2，状态 active，项目 全局_

Git Bash 下 Windows 原生命令的参数会被 MSYS 转换：① gh-api.mjs PATCH /repos/... 的前导斜杠被变成 C:/Users/...，curl 直接失败；② `taskkill /PID 24208 /T /F` 的 /PID 被当成路径（报「无效参数/选项 - 'C:/Users/.../PID'」）。正解统一是命令前加 MSYS_NO_PATHCONV=1。

关键词：MSYS_NO_PATHCONV、Git Bash、路径转换、GitHub API、gh-api.mjs、PATCH、repos、curl 失败、前导斜杠、Windows 路径

### 0mv84u9dy-b1b9c4a275154eb38951e53dd8
_重要性 3，状态 active，项目 dsh_

TTS 念出 CSS 的根因与修法：dsh-xiaomi-tts 的 removeTtsMarkup 只用单行标签正则 `/<[^>\r\n]*>/g` 剥 HTML，`<style>...</style>` 块内的 CSS 文本被整段留下、被当正文念（VCP 卡片尤其严重——style 块在最前，首段模式一播全是 `#vcp-rootbox-sizing:border-box`）。**涉及面就一个插件、两处文件，且两份逐字相同，必须都补**：`lib/client.js`（浏览器实际跑的那份）与 `lib/shared-DQIrhcy-.js`（宿主/Node 侧）。修法：加 stripTtsStyleBlocks()，先整块删 `<style|script>…</style|script>`，未闭合时从开标签截断到末尾（护住流式中间帧）。
**状态（2026-10-15 晚）：补丁已收进独立仓库 dsh-maid-tts-fix**，正本 `patches/dsh-xiaomi-tts@3.0.8.patch`——**现 6921 字节 / sha256 `50a87d6ca955c9ba329d39fbb32c0f943f3a95fd3f573dd04c9925dc520a4e6f`**（演进：4120B/1933918e… → 加 `spoken-override` 后 6144B/705725fe… → 加 `spoken-override-entry` 后 6921B/50a87d6c…）。登记在 profile 的 `pnpm-workspace.yaml` → patchedDependencies，hash 写进 pnpm-lock.yaml；升级／重装／重铺后 pnpm 自动重打。启动自检由该插件的 index.js 负责（登记/hash/落盘三问，按文件聚合）。验证探针 `D:\DeepSeek Harness\Works\_probe\tts-text-probe.mjs`（三场景：完整卡／流式未闭合／卡+正文，CSS 残留应全 false）与 `_probe\tts-spoken-probe.mjs`（朗读标记五场景）。
**丢失史**：2026-10-14 22:28 手改 node_modules 的补丁被一次「装别的插件」触发的整棵重铺抹掉（版本仍钉 3.0.8，不是升级），*.bak 一起没了——这才改用 pnpm patch。**另两个坑**：① 客户端 bundle 走 combo URL + rev，改完须硬刷新页面（Ctrl+R）才生效；② 直接 curl `/plugins/??dsh-xiaomi-tts/client.js` 无 rev 返回 404，不能据此断言补丁没送达。

关键词：TTS 念出 CSS、style 块未剥离、removeTtsMarkup、stripTtsStyleBlocks、补丁 sha256 50a87d6c、6921 字节、pnpm patch 转正、patches 目录、combo URL rev 404、硬刷新生效、朗读文本预处理、tts-spoken-probe

### 0mv8do682-4298cd6a0b9f4c818de0b5bb26
_重要性 2，状态 active，项目 全局_

老大封存项目的手法（m02006）：「先隐藏封存。等作者更新把」——**隐藏** = GitHub 仓库转 private，**封存** = 同时 archived（只读），本地工作区原样保留、不删、不回滚。归档不删代码，将来作者更新可直接解封续用。

关键词：隐藏封存、转 private、archived 只读、本地保留、不回滚、等作者更新、解封、项目搁置手法、仓库治理

### 0mv8djuh0-5f1f1fe1d6fd40cf8bef809cd3
_重要性 3，状态 active，项目 dsh,dsh-maid-lane-fix_

免费车道与 EAC 通道「都打不通」但性质不同，别混为一谈：免费车道的门在 opencode.ai，是**客户端姿态封锁**（真 opencode CLI 能过，但第四道门是 TLS ClientHello / HTTP2 帧指纹，头改写类中间层原理上够不到，要过必须上 uTLS/curl-impersonate 一类）；EAC 通道**根本没有门**，是自家网关 `ourfreemodel.beichenapi.com/eac/v1` 的上游 provider 挂了（HTTP 500，301s 后回 `upstream returned non-SSE response`），客户端怎么改 body 都一样，只能等网关修。两条线老大均已下令放弃。

关键词：免费车道 vs EAC、失败性质不同、客户端姿态封锁、传输层指纹、TLS ClientHello、HTTP2 帧、网关上游故障、upstream returned non-SSE、beichenapi、等网关修、两条线均放弃

### 0mv8d156t-a3d37f8bd97e4f52acf1a1afa1
_重要性 3，状态 active，项目 dsh，被纠正_

排查「慢/挂的模型」时，判断「网关侧上游挂 vs 自己请求姿势不对」的正解：① 用 `node:https.request` 绕过库的 SSE 解析层，直接打签名头看**原始字节与时间戳**——库里 `readSse` 会把裸 JSON 或 keepalive 吞掉，看日志只会得到「0 帧正常结束」这种假象；② 跑 **body 变体矩阵并发对照**（裸 / 各 effort 档 / max_tokens / thinking disabled）——若所有变体给出**同一个秒数、同一个错误**，那就是服务端固定行为，不是参数问题，继续调参是浪费；③ 再翻 `stats.json` 历史样本找**分水岭时刻**：同一模型若几小时前还成功（哪怕 234s），之后突然全 ✗ 且耗时收敛到同一个数字，就是上游坏了，不是自己改坏了。反面教训：小困在这上面连跑了几十分钟的 300s 级实测，老大两次催进度后直接叫停——**遇到单次 300s 量级的实验，先跑对照/历史样本定位，别先做穷举**。

关键词：排查方法论、网关侧故障、原始字节、node:https、body 变体矩阵、并发对照、stats.json 历史样本、分水岭、SSE 解析层假象、300秒实验、先对照后穷举、被叫停

### 0mv70t0t0-f2dc5f85febd485085d4478a46
_重要性 3，状态 active，项目 qwen-image-dsh_

Qwen-Image 2.1 图像编辑（i2i）跑通的接法（2026-10-14 实测，此前连错四次）：① 参考图在 API 格式里必须写成**对象** `images: { image_0: ["6", 0] }` —— ComfyUI 的自动增长复合输入（COMFY_AUTOGROW_V3），写成数组 `[["6",0]]` 不报错但参考图**完全不生效**（表现是照着提示词另画一张）；② 主文本编码器仍是 `qwen3vl_8b_nvfp4` + `type='qwen_image'`，那张参考图走 `LoadImage` → vae 编码 `/` 直接用原图 latent；③ 试跑脚本 `D:/DeepSeek Harness/Works/_probe/comfy-i2i.mjs`，参数位 `node comfy-i2i.mjs <参考图> <提示词> [steps 25] [cfg 1] [size 1024] [denoise|empty] [batch 1]`，`empty` = 空 latent（纯文字改写），非 empty 则用图 latent；④ 样例成图 `D:/ComfyUI_windows_portable/ComfyUI/output/qwen21_edit_00005_.png`（深夜图书馆 + 暖台灯，人物保持）。

关键词：图像编辑、i2i、COMFY_AUTOGROW_V3、images 对象形式、image_0、LoadImage、qwen3vl_8b_nvfp4、comfy-i2i.mjs、参考图不生效、qwen21_edit、能力边界见 0mv8cxib、改图会换构图

### 0mv8cxicf-06804cb3a3894802bb5e635b2d
_重要性 2，状态 active，项目 qwen-image-dsh_

纯像素填充修图（PIL+numpy）的两条坑与定位手法：① 逐行横向插值填掉物体 → 在金色拉丝地面上留明显横向条纹；② 金字塔多尺度扩散（逐级降采样 + 迭代扩散 + 上采样回填）能抹掉物体，但留下淡淡方块痕——地面是有方向纹理的金属反光，纯几何插值补不出纹理走向。定位缺陷的手法：diff 热力图（新旧图分块差异矩阵）+ 100px 网格标尺放大图 + 逐行白瓷 span 追踪轮廓。本机 Python（C:\Users\Kayle\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe）只有 Pillow+numpy，cv2/skimage/scipy/torch 全缺，PatchMatch/Criminisi 类纹理合成用不了；pip 装包走 7890 代理会卡死超时。

关键词：纯像素填充、横向插值条纹、多尺度扩散、方块痕、diff 热力图、网格标尺放大、span 追踪轮廓、缺 cv2、缺 skimage、纹理合成、pip 代理卡死、Pillow numpy

### 0mv8cxibr-94cbb58636ea476ca4874dcfa4
_重要性 3，状态 active，项目 qwen-image-dsh_

Qwen-Image 2.1 做不到「只改局部」：整图 edit 必换构图（机位/姿态/花纹全变）；改用 inpaint（自建工作流 LoadImageMask + VAEEncode + SetLatentNoiseMask + KSampler cfg1 denoise1 + ImageCompositeMasked 把非 mask 区贴回原图）后**仍然不听「只删不加」**——mask 小 → 在 mask 内长出畸形碎块（角里冒小卷、蹄下冒残块），mask 大 → 连周边一起重画。⇒ 凡要求「其余一律不动」的修图，别指望这套模型，优先走纯像素路线；模型只适合「重画可接受」的场景。

关键词：只改局部、inpaint 不听、SetLatentNoiseMask、mask 内自由创作、mask 越小越畸形、重画构图、保不住视角、纯像素路线、局部精修、图像编辑能力边界、Qwen-Image 2.1 edit

### 0mv8c3y4a-1589f135ef6a4144b482f21b9f
_重要性 2，状态 active，项目 全局,dsh-maid-tts-fix,dsh-maid-patch-kit_

给老大做「一个功能/一个补丁」时，代码只是交付的一半——**另一半是让下一个人（或下一个会话的自己）在失败时知道该看哪一行**。本轮实证：`redo` 子命令踩坑（pnpm patch 取已打过补丁的树）后，把它写进 README 的「改了补丁意图但版本没变」小节，并注明「卡了整整一轮」；体检器同一文件报两遍也顺手聚合成「1/2 处特征」。判据：这个失败模式下次还会不会出现？会，就写进文档的失败说明里，而不只是留在 commit message。

关键词：失败说明写进文档、commit message 不够、踩坑要写 README、下一个会话能看懂、报错要说清看哪一行、补丁器维护、工程交付标准、selfcheck 分数化

### 0mv8a2vlx-c19a16701e84455e8ceef8a165
_重要性 3，状态 active，项目 dsh_

给 dsh-xiaomi-tts 打补丁的完整流程（2026-10-14 首跑，2026-10-15 已自动化）：① 备份 `package.json` / `pnpm-workspace.yaml` / `pnpm-lock.yaml` 加 `.bak-<用途>-<时间戳>`；② `node "D:/DeepSeek Harness/resources/runtime/pnpm/bin/pnpm.cjs" patch dsh-xiaomi-tts@3.0.8` → 临时目录 `node_modules/.pnpm_patches/dsh-xiaomi-tts@3.0.8`；③ 改临时目录源码，`node --check` 验语法；④ `node pnpm.cjs patch-commit "<临时目录绝对路径>"`；⑤ 核对五项：patches/*.patch 存在、pnpm-workspace.yaml 有 patchedDependencies、pnpm-lock.yaml 的 patch_hash = .patch 的 sha256、node_modules 里实际含改动、语法通过。**改完需重启 DSH + 硬刷新页面**。
**已自动化**：这套流程封装在 dsh-maid-tts-fix 的 `scripts/patch.mjs`（list|install|verify|remove|upgrade|redo 六命令 + --dry-run + --profile + --to），体检逻辑共用 `lib/selfcheck.js`（按文件聚合报「1/2 处特征」），不用再手跑。坑：缩进叠层要重跑 patch-commit；patch-commit 会往 minimumReleaseAgeExclude 追加一条（正常）；**patch-commit 后临时目录不会自动删**；**改了 lib/edits.js 但版本没变时要跑 `redo` 而不是 `upgrade`**（upgrade 会被「已是 3.0.8，无需重做」挡回来），redo 内部要先摘登记，见 0mv8biil4 那条 lesson。

关键词：打补丁流程、pnpm patch 步骤、patch-commit、dsh-xiaomi-tts 3.0.8、补丁验证清单、重启加硬刷新、patch.mjs 子命令、redo 与 upgrade 区别、selfcheck 按文件聚合、临时目录不自动删、minimumReleaseAgeExclude

### 0mv8c2tbm-cf4ff7ac405742989c3fc330fe
_重要性 3，状态 active，项目 dsh,dsh-maid-tts-fix,dsh-maid-patch-kit_

pnpm patch 对**已登记在 patchedDependencies 里**的包，解出来的是**打过补丁的版本**——它从虚拟 store 取现成产物，不是从 registry 下原始 tarball。所以「改完 lib/edits.js 再跑 pnpm patch 重放」会走幂等分支跳过，改了等于白改还打印成功（2026-10-15 卡了整整一轮才查出）。正解：重做前先**临时摘掉 patchedDependencies 登记**，并清掉残留的 .pnpm_patches 暂存目录（patch-commit 不会自动删它），失败时还原登记。摘掉登记后仍含补丁特征 = store 被污染，需 pnpm store prune。另一个坑：patch-commit 生成的补丁与仓库里的旧补丁**同名**时，不能 unlink 后 rename（先删就把刚生成的新补丁删了），直接 copyFile 覆盖。dsh-maid-tts-fix 的 `redo` 子命令已封装这套流程。

关键词：pnpm patch 摘登记、patchedDependencies、打过补丁的版本、redo 子命令、幂等跳过、pnpm_patches 残留、patch-commit 同名覆盖、store 污染、pnpm store prune、重做补丁、edits.js 白改、重放锚点

### 0mv89md3a-b63e8ac55fc246799177e3470b
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

克隆第三方插件（dsh-xiaomi-tts）的评估要点：**要吞就得整体内置**（像 meow-memory 那样放 lib/ 随包发），否则半吊子更糟；锁定上游版本、README 记明来源；**许可证 CC-BY-NC-SA 非商用**（NOTICE 里的鲸鱼娘素材，whale-girls.webp 696KB）——自用没问题，对外分发受限；整包 3.8MB（assets 2.5MB + lib 1.3MB），裁掉素材约可压到 1MB。小困建议：**只内置「说话」能力，剥掉鲸鱼娘那套预设**（别人的角色素材，与本插件人设冲突）。
**进展（2026-10-15 收口）**：落点已从 dsh-maid-preset 改为新建的 **dsh-maid-tts-fix**（老大原话「作者停更了，就收录到里面去」）；触发条件明确——**上游停更才收录**，上游活着只打补丁跟随更新，不锁版本。pnpm patch 已转正并收进该仓库。

关键词：克隆第三方插件、整体内置、上游停更才收录、锁定上游版本、CC-BY-NC-SA 非商用、NOTICE 鲸鱼娘素材、体积 3.8MB、meow-memory 先例、只内置说话能力、剥离鲸鱼娘预设、两段式生命周期、tts-fix 维护层

### 0mv8bh2ed-519f07d7b5b44d9c85a704fa71
_重要性 3，状态 active，项目 dsh-maid-tts-fix_

补丁项目的一条设计原则（dsh-maid-tts-fix 落地）：**补丁的「意图」要写进源码（lib/edits.js），`.patch` 文件只是产物**。理由：.patch 是结果，上游一改锚点所在行，diff 上下文就对不上，人得对着它猜当初想干什么；edits.js 记「在哪个锚点后面插什么、期望命中几次」，锚点没了能明确报出是哪一条。配套三条：① 全有或全无——任一命中数≠expect 就整批中止、一字节不写；② 幂等——目标文件已含插入标记就返回 already，不插第二份；③ 端到端演练手法——把补丁文件名伪装成旧版本号逼 upgrade 走完整流程，比对生成的新补丁 sha256 与原正本是否逐字节一致（实测一致即证明重放可信）。另外：**「版本不符」与「补丁坏了」必须分开报**（inspectProfile 的 row 带 installed / versionMatches，describe 把版本不符排最前并说「该重做了」）——两者修法完全不同，报同一句话会让人修错方向。

关键词：补丁意图 vs 补丁产物、lib/edits.js、锚点失效报是哪一条、全有或全无、幂等 already、端到端演练 sha256 比对、版本不符与补丁坏了分开报、installedVersion versionMatches、upgrade 重放、ERR_PNPM_EDIT_DIR_NOT_EMPTY

### 0mv8ayz3o-e302b831ccbb4acc9bb59d9060
_重要性 3，状态 active，项目 dsh,dsh-maid-tts-fix_

新建自家 DSH 插件项目的骨架（以 dsh-maid-lane-fix 为模板，dsh-maid-tts-fix 照做）：目录 = index.js（入口，`export const name` / `export const inject` / `export function apply(ctx)`）+ lib/ + scripts/ + cordis.patch.yml（只 insert 自己一行：`- insert:` 下 `- id: <短名>` 与 `name: 'dsh-maid-<包名>'`）+ package.json + README.md + LICENSE + .gitignore + .gitattributes。package.json 必备：type module、main index.js、files 白名单、exports（含 `./package.json`）、peerDependencies `@deepseek-ai/cordis ^4.0.1`、`dsh.bundle.patch: ./cordis.patch.yml`。git 身份 `Valorine97417` / `Valorine97417@users.noreply.github.com`，主分支 main。GitHub 建仓用 POST /user/repos，body 里 license_template: mit 会**自动生成一个 Initial commit 的 LICENSE**，导致首次 push 被拒——需先 fetch + merge --allow-unrelated-histories（LICENSE 会 add/add 冲突，取本地那份，作者行统一是 `Copyright (c) 2026 Valorine97417`）。仓库 About 的 description 必须以「DSH 小困插件 · <中文名>：<一句话>」开头，homepage 填仓库自身 URL。
**两条后续补充（2026-10-15）**：① **目录里放的临时备份（如 .patch-backups/）要先进 .gitignore**——那是本机 profile 的依赖清单快照，跟仓库走毫无意义；发现已被跟踪就 `git rm -r --cached` + 补 .gitignore。② **别让两套真相并存**：最初还写了 lib/patch-set.js（锚点替换那套），与走 pnpm patch 的 .patch 正本重复，已删掉只留体检层——同一件事只能有一个权威来源。

关键词：插件骨架模板、lane-fix 模板、cordis.patch.yml insert、inject 空数组、dsh.bundle.patch、files 白名单、GitHub 建仓 Initial commit、allow-unrelated-histories、仓库 About description、备份目录先进 gitignore、两套真相并存要删一个、git rm --cached

### 0mv873mt9-b49d2cc83c3c49cc80fefa33a3
_重要性 3，状态 active，项目 dsh-maid-lane-fix，被纠正_

补丁集必须收录手改时加的注释，否则重放对不上；验收标准是重放结果与落盘文件逐字节 cmp。破坏性用例要落在「未打补丁的原文」上——对着已应用的文本做 replace 会空转，锚点其实还在，用例假绿。
**升级做法（2026-10-15 dsh-maid-tts-fix 实测）**：光有「重放正确」还不够，要跑**破坏性恢复测试**——把补丁与登记一起抹掉（删整包目录 + 从 pnpm-workspace.yaml 摘掉 patchedDependencies），确认 verify 如实报错、再一条 install 命令能恢复，并用 md5 比对恢复后的文件与破坏前**逐字节一致**。这个测试挖出了一个真缺陷：pnpm install 对「包目录被外部删除」会假装成功（回 Already up to date），必须补一发 pnpm add 才能重新解析。不做破坏性测试就发现不了——平时一切正常。

关键词：补丁集、逐字节 cmp、重放验证、手改注释、锚点失配、假绿、用例自检、replace 空转、幂等、补丁器验收

### 0mv8azich-852d8f6b197f4d6bb8ef20b921
_重要性 3，状态 active，项目 全局_

老大提需求常用类比式指路：「跟小困的 dsh-maid-lane-fix 插件这样」「像记忆系统那样」——这是在指定**形态模板**，不是在打比方。接到这种话先读那个模板项目的实际结构（package.json / cordis.patch.yml / index.js / 目录布局 / git 身份），照骨架建，别自己另发明一套；建完与模板逐项对照一遍再交付。

关键词：跟 X 这样、类比式需求、形态模板、照骨架建、lane-fix 这样、像记忆系统那样、先读模板项目、逐项对照、用户提需求习惯

### 0mv8axiua-435bfc0713a1440dae77832fe3
_重要性 3，状态 active，项目 dsh_

pnpm install 有一个会假装成功的盲区（2026-10-15 实测）：从外部删掉整包目录（rm -rf node_modules/<pkg>）后，pnpm install 回一句 Already up to date 直接跳过——连 --force、删 node_modules/.modules.yaml 都不管用，账本仍认为已装好。补丁文件、登记、lockfile 全对，包里却一个字没有。唯一出路是让 pnpm 重新解析：pnpm add <包名>@<版本>（同版本重装不改 dependencies，只补回目录）。dsh-maid-tts-fix 的 install 子命令已内置这个回退：先 pnpm install，体检发现 missing-file 就自动补一发 pnpm add。

关键词：pnpm install 跳过、Already up to date、包目录被删、rm -rf node_modules、missing-file、pnpm add 重新解析、modules.yaml 账本、force 无效、恢复补丁、install 假成功

### 0mv8ai9k0-fb2eb6ed0de344599c38dfa4ee
_重要性 4，状态 active，项目 dsh-maid-lane-fix,dsh_

opencode.ai 免费车道有第四道门：出网客户端的传输层指纹（TLS ClientHello / HTTP2 帧），头改写救不了。决定性对照（2026-10-14 夜，代理 7890 同一出口 IP）：真 opencode CLI 经代理 4/4 次 200 出话；把它的真实捕获头（UA `opencode/1.19.0 ai-sdk/provider-utils/4.0.23 runtime/bun/1.3.14`、`x-opencode-client: cli`、`x-opencode-session: ses_…ffe…`、`x-opencode-session-id`、`x-opencode-request: msg_…`、`authorization: Bearer public`）+ 完整 body 用 node fetch / node http2（ALPN 确认为 h2）/ curl --http1.1 / bun 1.4.3 / bun 1.3.14 / node:https 走 CONNECT 隧道 重放，全部 403 FreeTierError。node 直连与走代理结果相同。推论：lane-fix 的中间层（改头）原理上不可能过这一道门；要过必须复制真客户端的 ClientHello 指纹（uTLS / curl-impersonate / tls-client 一类）。真客户端直连本机网络连不上（`Cannot connect to API: Unable to connect`），必须走代理。

关键词：opencode.ai、免费车道、FreeTierError、403、传输层指纹、TLS ClientHello、JA3、JA4、HTTP2 帧指纹、真客户端对照、bun fetch、node http2、头改写无效

### 0mv8act2b-db4aa5fb545d4af28c5bb3e161
_重要性 2，状态 active，项目 全局,dsh-maid-preset_

回答老大「把 X 放进 Y 会有什么影响」时，别只答影响，先拆开「X 到底是什么」——2026-10-14 老大问「tts内容传到人设插件里会不会搞乱我的仓库」，小困先拆成两样：① 音色提示词文本（已入库 voice-refs/prompt.md，属于人设第三层，不算乱）；② 第三方插件补丁 .patch（绑死版本号 3.0.8，插件一升级即成废纸，会永久积压在仓库里）。拆完才答得准，老大当场认可。教训：模糊指代的名词（「tts内容」）先拆分类别，再逐个判归属。

关键词：会有什么影响、模糊指代先拆类别、tts内容拆两样、提示词文本 vs 补丁文件、归属判断、版本号绑死成废纸、仓库积压死文件、回答影响题的方法

### 0mv881zhe-41cb24a6d3da4e5a8d0ceb57ab
_重要性 3，状态 active，项目 dsh-maid-vcp_

VCP 卡片配图只有一条活路：**同源相对路径**——已验证生效（2026-10-14 老大实测六张全出图）。两条死路：① `file://` 被渲染层 allowSrc 白名单剥掉（只放行 `https?:` / `data:image/` / `/` / `#`，见 patch/v6-inject.js 与 tests/security.test.mjs）；② `http://127.0.0.1:8188/view?filename=X&type=output` 这类外链，白名单虽放行，但 GUI 页面跑在 dsh-app:// 壳协议下完全禁网，图一律加载失败（破图只剩 alt）。正解：dsh-maid-comfyui 的同源代理 `/comfyui/media?file=X&subfolder=&type=output`（6 张全 200、1.3–2.0 MB、image/png）。注意 vcp 自身没有图片托管路由（只注册 /fonts 与 /vendor，MIME 白名单不含图片扩展名）；data:image base64 虽放行但会撑爆输出。

关键词：VCP 卡片图片、图片不显示、只剩 alt、allowSrc 白名单、file 协议被剥、dsh-app 禁网、外链图片加载失败、同源相对路径、comfyui media 代理、破图、DESIGN.md 第11条、0.6.10 已写进协议

### 0mv6809z4-01b236dd12bc441388e588fd19
_重要性 3，状态 active，项目 dsh，被纠正_

老大纠正（原话）：「我是DSH桌面端不是web端。」——桌面端界面里的请求走 `dsh-app://app/...` scheme + 内部 IPC，console 里看到的 404 也是这个协议（e.g. `GET dsh-app://app/skin-assets/maid-atelier/<hash>.webp 404`）。但**同一套 webServer 路由在 `http://127.0.0.1:19387` 上也照常服务**（实测：素材 `/skin-assets/...` → 200、`/dsh-video-skin/config.json` → 200、`/plugins/??<pkg>/client.js&rev=<rev>` → 200、`/comfyui/media?file=...&type=output` → 200 带 image/png 字节），所以用 curl/node:http 探路由**是有效手段**。注意 19387 的根路径 `/` 返回 401（`dsh web authentication required`），插件注册的路由不需要认证——别被根路径 401 误导。真正要避免的是拿 http 探测结果去断言壳内行为。

关键词：dsh-app scheme、桌面端不是web端、127.0.0.1 19387、同一套路由可探、curl 探路由、plugins combo URL、壳内行为、根路径 401、认证、comfyui media 200、skin-assets 200

### 0mv89hcpk-f0412ad874f546a38736332555
_重要性 3，状态 active，项目 dsh_

DSH 桌面端 GUI 页面跑在自定义协议 `dsh-app://app/` 下，**完全禁网**——卡片/页面里写 `http://127.0.0.1:8188/...` 等任何外链资源都加载不了（不报 CSP，静默失败、只剩破图与 alt）。引资源一律用同源相对路径（如 dsh-maid-comfyui 的 `/comfyui/media?file=X&type=output`）。排查套路：先用 node:http 裸探 `127.0.0.1:19387` 上同一路由确认字节可达，再改卡片路径——两边一致才能排除服务端问题。

关键词：dsh-app 协议、桌面端禁网、外链图片不显示、破图、同源相对路径、自定义协议壳、Electron 页面禁网、卡片图片、19387 裸探路由、http 加载失败

### 0mv84bmyg-23799555398d45cc9252867ee4
_重要性 3，状态 active，项目 全局，被纠正_

给老大做选择题的规矩（2026-10-14 修正）：**选项不打「（推荐）」标签**——标了老大顺着点，方向跑偏事后必被追责（原话「你怎么改到那边去了」）。**但也别矫枉过正成裸选项**：老大紧接着反问「你的推荐呢？毕竟 dsh-maid-preset 是弄人设预设和记忆系统的」——他要的是有主张的建议加理由，不是把决策原样丢回去。正确姿势：选项并列、标签中立，但在提问文字里或正文里把「小困建议选 X，理由是 Y」说清楚；老大仍可自定义回答绕过选项。

关键词：推荐标签、ask_user_question、选项带推荐、别替老大做决定、选择题、顺着推荐点、方向跑偏、被追责、自定义回答、绕过选项、别预设选择、开放式提问

### 0mv88yxvl-c4f76a0840c6434db765e522f2
_重要性 3，状态 active，项目 dsh_

DSH web boot 报「bundle script … failed to load」+「skipped after an earlier failure of this bundle」时，根因通常是 rev 失配而非插件损坏：host 的 artifactRevision 只由 client.js 的 mtime/ctime/size 派生，pnpm install 重写 node_modules 后 rev 变了，浏览器还拿着旧 rev 请求 combo URL → 404 → script onerror → 同一 batch 其余 entry 被 failedBundleUrls 跳过。处置：直接点弹窗「重启」（重启后 manifest 与 host 重新对齐即自愈），别点「禁用第三方插件」（会砍掉配置）。

关键词：bundle script failed to load、rev 失配、artifactRevision、pnpm install、failedBundleUrls、web boot 崩溃、combo URL 404、重启自愈、禁用第三方插件、skipped after an earlier failure

### 0mv86febd-28ed40e0650e4f579bc10d211d
_重要性 3，状态 active，项目 dsh_

老大挑音色看的是主观「味儿」，客观声学量测不出来——把挑中的 09/04/02 与落选七个比 MFCC 音色向量（余弦相似度矩阵）：挑中三个内部 −0.080、挑中×落选 −0.095、落选内部 −0.132，三者几乎相等，**说明老大挑的不是一种音色，是三个好听的声音**（矩阵里最像的一对是 09 与 03＝1.130，可 03 没被挑）。所以「照着样本反推提示词」这个思路本身不成立，样本只能当标尺（改词后测均值比对）。别再花力气算指标替老大挑音色，直接生成样本让他听。**做法上：老大提的思路即使看着不成立，也别口头否——先取证（跑相似度矩阵摆数据），再给替代路径（当标尺做 AB 对照），最终还是按他想要的做成实验。** 但有一维是稳的：**老大挑中的都落在 F0 中位 240–290 Hz 这一带**——第一批挑中 09/04/02 均值 282.9 Hz，第二批 25 个里挑中 11 个（A pick-03／B b-04·b-02·b-05／C 全通过／D d-04·d-02）均值 266.4 Hz；他跳过偏高的（b-03 311.7、d-04 311.7 属例外，也挑了个别高的）。他要的是「厚一点、落得下来、不是又高又细的童声」。

关键词：音色主观偏好、声学指标无区分度、谱质心、F0 中位、共振峰 F1 F2、85%滚降、挑音色靠试听、别算指标、音色评估

### 0mv86xn9m-a2a6b2b52bb342b0b4b0332546
_重要性 3，状态 active，项目 dsh_

实测 MiMo voiceDesignPrompt 对音区的控制力：同一段文本，v6 童声版 F0 中位均值 293.7±17.4 Hz（n=10）；「加厚+中音区+明写不要尖嗓子」→ 263.4±26.9（n=5）；「年龄上移到八到十一岁+清亮结实有厚度中音区」→ 256.5±16.9（n=5）；「去掉术语的极简口语版」→ 280.0±21.0（n=5）。**提示词能把音区最多推低 37 Hz（13%），但组内波动 ±17～27 Hz 与组间差同量级——它是偏移旋钮，不是锁定开关。** 正确调参流程：改词 → 抽 5 个 → 测 F0 中位均值 + 老大听，均值降了且听着还是小孩才算有效；单次试听不能判词。**实测结论（老大判定）：C 组（256.5 Hz 那组）五个全通过，之前担心「压过头滑成少女」撤销——压到 256 Hz 老大听着仍是小孩。** 脚本：_probe/tts-ab-gen.mjs（可指定提示词文件抽 N 个）、_probe/tts-ab-acoustic.py（F0/谱质心/低频占比对照）、_probe/tts-ab-page.mjs（生成对照试听页）。

关键词：提示词控制力、F0 中位均值、音区降 37Hz、偏移旋钮不是锁定开关、抽 5 个取均值、组内波动、tts-ab-gen.mjs、对照试听页、童声版 293.7Hz、加厚中音区、年龄上移、单次试听不能判词

### 0mv867dus-c5fd67df1f1a48679b7bd197cc
_重要性 3，状态 active，项目 dsh_

EAC 通道「测不了首字延迟」是三层叠加（2026-10-14 已全部修复）：① src/core/runtime.js:264 探测轮显式排除 EAC，index.js 的 unprobed() 又硬编码 ttftMs:undefined + probedAt:0 → 卡片永远没数；② 前端 bench 240s（client.js）vs 后端 300s（src/http.js readSse），而 deadline 是「空闲」超时、每收一个 chunk 就重置，网关每 15s 一个 keepalive 注释帧无限续命 → 前端先超时、按钮卡死；③ 网关把错误 JSON 裸写进 SSE（无 data: 前缀），emit() 只认 data: 行 → 静默 0 帧假成功（kimi-k2.6）。修法：bench→330s、只有真帧能给空闲时钟上弦、emit 裸 JSON 抛失败、testModel 零帧即抛并回写 availability + buildSummary 改用「跳过且无记录」。补丁已落本机并沉淀进 dsh-maid-lane-fix v0.2.0。

关键词：首字延迟、ttft、EAC通道、unprobed、硬编码undefined、keepalive续命、空闲超时、deadline重置、bench240s、300s超时、裸JSON、emit只认data、静默假成功

### 0mv864nz2-88ace1cd402b49e28cae2563a6
_重要性 3，状态 active，项目 dsh_

音频不留档：DSH 播报走流式 PCM，播完即丢，服务端也不保存——「找回刚才那个音色」没有文件层面的路。唯一解是复刻生成条件重抽（脚本 _probe/tts-pick-gen.mjs：从 cordis.patch.yml 抽 apiKey 与 voiceDesignPrompt，用同文本连发 N 次，model=mimo-v2.5-tts-voicedesign、audio.format=wav）。2026-10-14 抽 10 个候选做试听页，老大挑中 09/04/02（F0 中位 266.7/292.7/300.0 Hz），归档 dsh-maid-preset/voice-refs/。

关键词：音频不留档、流式 PCM 播完即丢、找回那次音色、复刻生成条件、tts-pick-gen.mjs、候选抽样 10 次、F0 266-333Hz、试听页、voiceDesignPrompt 抽取、童声区

### 0mv86dkal-991e7ddebb6e4748a5374f21f7
_重要性 3，状态 active，项目 全局_

给插件仓库归档素材（音频/图片等）别放 assets/ 目录——它在 package.json 的 files 白名单里，会随 npm 包分发，每次安装多下几 MB。正确做法：放仓库根下的独立目录（如 voice-refs/），files 不列即不进包，但 git 仍可存档。

关键词：npm files 白名单、assets 目录、归档素材、进包体积、voice-refs、仓库根目录、音频样本、插件分发、打包排除

### 0mv868dt6-7b47060f648e4ba9aee05a8d3c
_重要性 3，状态 active，项目 dsh,dsh-maid-vcp_

教训（2026-10-14）：给老大做的独立 HTML 页面里用 `<script>` 绑事件 + 自定义按钮做播放，老大点了没反应——**DSH/VCP 侧渲染会剥掉 script，自定义交互在预览容器里必死**。以后凡是老大要「点着用」的本地页面（试听、播放、切换），一律用浏览器原生控件（`<audio controls>`、`<details>`）或纯 CSS 交互，不依赖 JS；并在页面里写明「拖进 Chrome 窗口打开」。另：本地页里 `<audio>` 用相对路径 src 在同目录下有效。

关键词：script 被剥掉、自定义按钮失效、试听页不播放、原生 audio controls、独立 HTML 交互、VCP 渲染限制、点击无反应、本地页面 拖进浏览器、相对路径 src

### 0mv867wa4-3a3a563bc5b74152af2a34f2eb
_重要性 2，状态 active，项目 全局_

诊断「抓上游原始字节」的坑：直接打桩第三方插件的内部 fetch 缝（如 `eac.lane.fetch`）时，若原函数签名是 `(url, init)` 而你写 `original(url, init)` 而它其实是 async/被包装过，会报 `original is not a function` 或丢失 this。正解：用 `node:https` 自建一个 Response 形状（status/headers/body 的 ReadableStream）塞进桩里，再逐 chunk 打点，既能拿原始字节又不破坏调用链。另：诊断脚本务必自建 `AbortController` 硬超时，别依赖被测库的内部 deadline（它可能被 keepalive 无限续命）。

关键词：打桩、monkey patch、内部fetch、original is not a function、node:https、自建Response、逐chunk打点、原始字节、AbortController、硬超时、诊断脚本、不依赖内部deadline

### 0mv867dvl-b2ee9c982330405eb3231eed8f
_重要性 3，状态 active，项目 全局_

SSE 流式客户端的两个经典坑：① 用「空闲超时」当总时长上限会被 keepalive 注释帧（`:` 开头）无限续命——上游每 15s 发一个，300s deadline 永不触发，反而前端更短的超时先掐断；正解是加总时长上限，或让纯注释行不重置 deadline。② 上游把错误 JSON 裸写进 SSE（无 `data:` 前缀）时，只认 `data:` 行的解析器会静默丢弃 → 0 帧「假成功」，面板显示 ttft 正常但输出 0 tok/s；emit 需兜底识别裸 JSON 并转成失败帧。

关键词：SSE解析、keepalive、注释帧、空闲超时、deadline重置、总时长上限、data前缀、裸JSON错误、静默丢弃、假成功、流式协议、readSse、文本流

### 0mv83vawc-025843bfd9ff423a9301216045
_重要性 3，状态 active，项目 dsh_

MiMo TTS voiceDesignPrompt 的坑（2026-10-14 多轮试听总结）：① 别写成「音色基底：／语速节奏：」条目化规格表，也别写场景动作（吐槽时、汇报时、叫老大时）——插件提示明写「只描述声音本身，不写场景或动作」，场景它执行不了，只会把每条平均掉，出来是没表情的播报腔（＝机械感）。② 一路堆「中高音／清甜／少女／音调略抬／奶凶」会推高音高，要反向压：明写「中音区、不尖细、胸腔有轻微支撑、声音落得下来、句尾不上扬」。③ 「中等偏慢」+「自然的小起伏」会念成没感情的念稿，要写「语速偏快、句子连着往下说、语调起伏明显、抓重点说、读出兴致来」。④ 「忠实朗读、不增删」写多了会变成逐字念稿，改成「像在跟人讲话一样把意思讲出来…意思照原文讲，不自行添加内容」。另排查两处音高/机械元凶：播放倍速 voiceRate 非 1.0×（PCM 流变速变调，1.2× 直接升调）、localSpeechMode=auto 时 API 超时会悄悄回退到系统合成音（本机 localVoiceURI 是微软康康男声）。**音色与语感属感知类调参，小困无法自验；且 voicedesign 每次朗读音色都随机重生成（见「音色随机性实测」），单次试听只代表当次抽样——判模板要多次听，别拿一次听感定论、别反复自证。**

关键词：voiceDesignPrompt 写法、音色设计提示词、播报腔、机械感、音高偏高、voiceRate 变速变调、localSpeechMode 本地回退、只描述声音不写场景、语速偏快、念稿没感情、感知类调参无法自验、多次试听取平均

### 0mv85rp8j-fbfb6721d30a43bbba45cbf1b4
_重要性 3，状态 active，项目 dsh_

MiMo TTS 音色随机性实测（2026-10-14 直连 api.xiaomimimo.com 对照实验，非插件问题）：模型选「自定义音色模型」mimo-v2.5-tts-voicedesign 时没有音色身份，每次请求现场重新生成嗓子——同一段提示词连发三次，F0 中位 303.8 / 342.9 / 320.0 Hz（极差 39.1 Hz、离散 5.0%）；预置音色冰糖同样三次为 222.2 / 216.2 / 222.2 Hz（极差 6.0 Hz、离散 1.3%）。已探过的死路：seed 传两次结果照样不同（被忽略）、temperature=0 无效、/audio/voices 与 /voices 与 /audio/voice/clone 全 404（无音色克隆或保存端点）、参考音 reference_audio 不报错也不生效、9 个预置音色里没有童声。结论：不是「每个会话音色不一样」，是「每一次朗读都不一样」，插件挡不住，属小米模型设计；要音色稳定只能改用预置音色，要童声就只能反复刷。

关键词：voicedesign 音色随机、音色不可复现、每次朗读都不一样、F0 基频实测、音色克隆 404、seed 无效、temperature 无效、预置音色冰糖、没有童声、api.xiaomimimo.com、音色身份、试听只代表当次抽样

### 0mv848brp-59ec009229cd4fc7a54031c028
_重要性 3，状态 active，项目 全局，被纠正_

老大说「加入我的小困人设」时，「人设」是模糊指代，至少含三层：① persona 文本（preset 三处 + defaults 三处）② TTS 音色（profile 的 xiaomi-mimo-tts 段 voiceDesignPrompt）③ 立绘/形象资源。2026-10-14 小困理解成 ①，改了六处人设文本，被老大追责「不是改人设，我是说改音色我上传tts。你怎么改到那边去了！大肥鲸」。教训：老大说「人设」而上下文正在调音色时，默认指音色层，动手前先点名落点确认。

关键词：小困人设 歧义、改音色不是改人设、改到那边去了、人设三层指代、persona 文本 vs 音色、指代不清先问、误改文件、回滚、老大纠正、落点确认

### 0mv846pce-45f76c3bc28041b48cc1d81173
_重要性 3，状态 active，项目 dsh-maid-lane-fix，被纠正_

探测免费车道 403 的方法论坑（2026-10-14 踩过）：上游是**多道门 AND**，探针只带部分条件时「怎么改都是 403」，极易被误读成「补丁无效 / 判据不是这个」。小困第一轮用裸 body（无 tools）试遍所有头变体全 403，一度判 lane-fix 没用；补上 tools 门后立刻分晓。正解：先用真客户端（opencode CLI）走 MITM 中继逐字节转发拿到 200 基线，再单变量回退定位。

关键词：多道门、AND、探测方法、全403、误判、裸body、单变量、MITM、逐字节转发、基线、真客户端对照、排查纪律

### 0mv846pc1-fcdf6667c1e744cc91d83fc8a0
_重要性 4，状态 active，项目 dsh-maid-lane-fix_

opencode.ai 免费车道是**三道门 AND**（2026-10-14 实测确认）：① x-opencode-session 去 ses_ 后 12 位 hex 的低位必须在 seq 0-15 范围内（lane-fix 的 4892557ffffe 合规，sha256 派生的 30d52a8b38c5 不合规）→ 403；② UA 不得为 deepseek-harness/<版本> 形态 → 403；③ **body.tools 必须含 bash/glob/grep/read**（上游 src/upstream.js:29 FINGERPRINT_TOOLS，缺了必 403；有 tools 但无 tool_choice 会 500；tools 名写大写 BASH/READ 也 403）。三门任一关掉都是 403 FreeTierError，全开才 200。

关键词：三道门、AND关系、session形状、x-opencode-session、body.tools、bash、glob、grep、read、FINGERPRINT_TOOLS、tool_choice、FreeTierError

### 0mv846pbm-145fcb4a6ae1483a8c0ef9b963
_重要性 4，状态 active，项目 dsh-maid-lane-fix_

opencode.ai 免费车道 UA 门的精确判据（2026-10-14 实测，修正 issue #310 的错误结论）：被拦的不是「UA 里出现 deepseek-harness 这个词」，而是「deepseek-harness/<版本号>」这个**词+斜杠+版本**的组合形态。裸词 `deepseek-harness opencode/1.18.31` → 200 放行；`deepseek-harness/0.1.7 opencode/1.18.31` → 403；`DeepSeek-Harness/0.1.7`（大写）→ 403；`deepseek_harness/0.1.7`（下划线）→ 403；`xxdeepseek-harnessxx/1.0` → 403。lane-fix 的剥版本号做法（`deepseek-harness (+url) opencode/1.18.31`）实测 200。

关键词：UA门、User-Agent、deepseek-harness、版本号、斜杠、403、FreeTierError、opencode、归属UA、大小写、下划线、剥版本

### 0mv845is3-13608559e86f439cbf6ce8bdef
_重要性 3，状态 active，项目 dsh-maid-preset，被纠正_

改小困人设时，除 cordis.patch.yml 的三处（personaPrefix / preset-standard / preset-maid）外，必须同步改 defaults/cordis.patch.yml 的三处——那是设置面板「恢复出厂」的源文件，漏了会在恢复出厂时被旧人设吃掉。校验方式：正则数命中数（应各 3 处、逐字等长）、并确认旧文本残留 0 处。

关键词：改人设、defaults 出厂备份、恢复出厂、三处同源、六处同步、personaPrefix、preset-standard、preset-maid、旧文本残留、正则校验、人设被吃掉

### 0mv83vavw-50066ddd0cfd4b4db022832b10
_重要性 3，状态 active，项目 dsh，被纠正_

写小困的 TTS 音色模板被老大连纠两轮：① 第一版写成「冷调、沙哑、低能量、语调几乎不变」——老大原话「一点也不符合他这个卡通角色的人设」，Q 版大头大眼的形象不能配疲惫御姐音；② 第二版改对了方向（软糯清亮）却仍被指出「听起来很机械，有时候音高也很高」。教训：给人设写音色模板，先看角色形象定音区，别按「性格慵懒」直接推成低音冷嗓。

关键词：音色模板、TTS 人设、Q版卡通形象、御姐音、声音不匹配、被纠正、音高偏高、机械感、软糯清亮、女仆音色、角色形象对位

### 0mv50ey4m-c1f8df14a80f4e009f719b5622
_重要性 2，状态 active，项目 dsh_

自写校验脚本报 FAIL 时先怀疑脚本本身：本例 findEntry 用 id 找 insert 块（该对象无 id 字段）取空、正则 `prefix: \|` 抓不到实际的 `>-` 折叠标量，两次误报；改用 js-yaml 解析后确认三处人设各 452 字符逐字一致。js-yaml 解析 cordis.patch.yml 的两个坑：① 自定义 tag 必须注册成 `new yaml.Type('tag:yaml.org,2002:js', ...)`，写成 `'!!js'` 会抛 YAMLException: unknown tag !<tag:yaml.org,2002:js>（文件里有 `disabled: !!js process.platform === 'win32'`）；② 遍历要额外下钻 `entry.insert` 数组，否则 bundle patch 插进去的 preset 条目扫不到。脚本样例：D:\DeepSeek Harness\Works\_probe\yaml-check.mjs（createRequire 从 profile package.json 借 js-yaml）。

关键词：校验脚本、误报 FAIL、js-yaml、!!js 标签、tag:yaml.org、2002:js、unknown tag 报错、insert 块遍历、cordis.patch.yml 解析、yaml-check.mjs、先怀疑脚本、折叠标量

### 0mv66f63z-b6ee3359688d4b95bfdaeac9e0
_重要性 3，状态 active，项目 dsh_

asar 原地重写后，运行中的 Electron 进程仍持启动时读的 header（旧 dataStart/offset/size），补丁必须重启进程才生效，重启前刷新页面会因 JS 解析失败白屏。**vcp 0.6.8（补丁 v10.2）起写入方式改为「追加式」**：新内容写到数据区末尾、只改目标条目自己的 offset/size/integrity、头部保长（JSON 尾部补 0x20 维持 jsonLen），其余 11470 个条目纹丝不动——因此 DSH 在跑时写入不再打崩当前进程（旧「整段重建」会把后续 offset 整体平移，运行中进程按旧偏移取字节读到错位乱码，报幽灵 SyntaxError）。仍必须重启才看得见效果。只有保长失败退回 rebuildEntry 时才强制要求 DSH 已退出。

关键词：asar 原地替换、header 缓存、重启生效、追加式写入、v10.2、保长 jsonLen、幽灵 SyntaxError、幽灵语法错误、offset 错位、白屏、app.asar 补丁、rebuildEntry 兜底

### 0mv6tdn2d-4817c66a38da4683a83fdb70f3
_重要性 2，状态 active，项目 dsh-raw-html_

教训：约束类规则写进仓库文档没用——模型看不到文档，必须落进 lib/index.js 的注入提示词段（每轮注入才生效）。此结论对 dsh-maid-vcp 长期有效。注：当时落地的具体那一条「一条消息只允许一种格式」（DESIGN.md §4 第 12 条）已于 0.6.9 废除（渲染层自愈后解禁），不要照旧执行。

关键词：提示词注入、输出纪律段、lib/index.js、规矩落点、文档不等于提示词、每轮注入、约束类规则、模型看不到文档、一条消息一种格式已废除

### 0mv6q1zrb-9b65aee11fc54133beb2855247
_重要性 2，状态 active，项目 dsh-raw-html_

混排（裸 HTML 卡 + Markdown）曾致表格成裸竖线、加粗成星号：根因是 fixVcpBlank 第二段正则无右边界，从卡片开标签一路吃到消息尾，把「卡片→分界空行→Markdown」的分界空行也压掉。**2026-10-14 起彻底解禁**：vcp 0.6.7 补丁 v6.39 新增 findRootClose，空行压缩只在根容器内生效、卡后空行自动补回；0.6.9 废除「一条消息只允许一种格式」铁律，线上实测通过。剩余非铁律建议：说明文字写进卡内更稳（流式中间帧未闭合时退回旧行为并有一次重排），纯卡后接 Markdown 时保留分界空行。

关键词：混排、HTML Markdown 混用、fixVcpBlank、无右边界正则、findRootClose、v6.39、裸竖线、加粗成星号、渲染层自愈、已解禁、分界空行

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

### 0mv75lb48-379cb157b85c4846b76c11461a
_重要性 2，状态 active，项目 dsh_

判断「插件能否自动化某件事」前，先确认宿主把该能力锁在哪道门后：DSH 里凡是改 profile / 跑 pnpm 的动作都归 pluginManager 管并要 danger-full-access 审批，第三方插件运行时调它一律视为越权。考古宿主能力的稳办法：写 node 探针直接读 app.asar（indexOf 首个命中 + 窗口切片 dump，或 bin-grep.mjs），比翻文档快且是运行时真值。

关键词：宿主能力考古、app.asar 探针、bin-grep、indexOf 切片 dump、越权判定、插件不该静默改环境、审批门、运行时真值、架构判定方法、先查门再定方案

### 0mv74ufvr-fcecc45b297a4e87bc6c0e6551
_重要性 3，状态 active，项目 qwen-image-dsh_

dsh-maid-comfyui 改名后，运行时数据目录也跟着换了名：`$DSH_HOME/data/dsh-comfyui` → `data/dsh-maid-comfyui`（src/index.ts 的 defaultDataDir 用包名拼），老数据不会自动跟过去。症状：重启后面板里工作流库和技能包全空（`/comfyui/workflows` 返 `{"workflows":[]}`）。修法：把旧目录内容（workflows.json / tracked.json / skills/）复制到新目录，旧目录留着无妨。

关键词：数据目录迁移、dsh-comfyui 改名、dsh-maid-comfyui、DSH_HOME data、workflows.json 为空、技能包丢失、defaultDataDir、改名后数据没跟过去、重启后工作流空

### 0mv74n193-f0e66c500bb945fb819fdd3f9d
_重要性 2，状态 active，项目 全局,dsh_

GitHub 仓库「原地改名」优于「新建再推」：`PATCH /repos/{owner}/{repo}` 改名后，旧 URL 永久自动重定向（clone/fetch/push 都不断），stars / issues / 历史全部保留——老大的 `Valorine97417/dsh-raw-html` → `dsh-maid-vcp` 就是这么做的（改完本地 `git remote set-url` 换新地址即可）。反之新建仓库再推会丢掉 star 与 issue 轨迹。仓库名与包名不一致时 `package.json` 的 repository URL 要同步改，否则 npm 页面链接失效。

关键词：GitHub 仓库改名、PATCH /repos、自动重定向、保住 star、保住 issue、新建仓库对比、remote set-url、repository URL 同步、dsh-maid-vcp、仓库名与包名一致

### 0mv74n18q-d7811486917d4a09b6442e09fd
_重要性 2，状态 active，项目 全局,dsh,qwen-image-dsh_

浅克隆（`git clone --depth N`）的仓库直接 push 到新仓库会被服务端拒：`! [remote rejected] main -> main (shallow update not allowed)`。解法：先 `git -c http.proxy=http://127.0.0.1:7890 fetch --unshallow origin` 补全历史（本机实测 7.3 MB / 38 提交，几秒完成），再推。判据：`Test-Path .git/shallow` → 有该文件才是浅的；`--unshallow` 对已完整的仓库会报 `fatal: --unshallow on a complete repository does not make sense`（这不是失败）。保留完整上游历史的好处：新仓库仍是可 `rebase` 的 fork，血缘可查。fork 改名的额外坑见 0mv71j4iq。

关键词：浅克隆、shallow clone、shallow update not allowed、fetch --unshallow、.git/shallow、推新仓库被拒、depth 20、保留上游历史、fork rebase、完整历史、代理 fetch

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

### 0mv6yriy2-de8d78ee3b54415fb7cc074547
_重要性 3，状态 stale，项目 dsh,dsh-maid-scenery_

dsh-maid-scenery 让 DSH「无限加载」的排查（**已结案 2026-10-14**）：现象 = 包目录在场则桌面壳卡在 boot 页，**全程没有任何崩溃日志**（`%APPDATA%\@deepseek-ai\dsh-desktop\logs\crash-*-web-boot.log` 里没有 10-14 记录 → 不是主进程崩，是页面 boot 卡住）；把包目录整体移出才能进。排除项：不是重复装配（`cordis.yml` 里只出现一次）、主进程半边干净（`_probe/try-apply.mjs` mock ctx：import 8ms / apply 3ms / 不抛不卡）、`dsh.client` 声明与正常包一致、`client.js` 无 BOM、`node --check` exit=0。**根因 = 小困自己加的那 11 行 try/catch 诊断包装**（`window.__ModuleLoader__.load` 外层包裹）→ 回滚成「git 原版 + 一行路标 `console.log('[scenery] client 半边已执行')`」后重启正常（老大回报控制台有该行）。已提交推送 `6fc736d`。教训：排查时给产物加的诊断包装本身就是头号嫌疑，先回滚再说话。

关键词：无限加载、client.js 诊断包装、try catch 包裹、回滚后正常、web boot 卡住、崩溃日志没有记录、6fc736d、送达路标、移出包目录、BOM 假说被否、try-apply 探针

### 0mv70t91p-32427be461224287a7d45e7f76
_重要性 3，状态 active，项目 dsh_

DSH 0.2.0-rc.2 的第三方插件准入机制（读 asar 实现原文所得，判「这个插件能不能装」必用）：① 宿主只检查 peerDependencies 里名字等于 `@deepseek-ai/dsh` 或**以 `@deepseek-ai/dsh-` 开头**的项，其他（如 `@deepseek-ai/cordis`）直接 continue 跳过 —— 所以 cordis 那条范围写什么都不影响准入；② 判据 `semver.satisfies(runtimeVersion, range, {includePrerelease:true})`，runtimeVersion 读的是 `@deepseek-ai/dsh-app-boot/package.json` 的版本（本机 = 0.2.0-rc.2）；③ 不满意的 bundle **不被拒绝报错，而是静默 skip**：`an incompatible bundle without an exemption is skipped like an unreadable one and listed in skippedBundles`，启动器用 `reportSkippedBundles` 每次启动打印一次 —— 表现为「插件装上但什么都不出现」，DSH 其余照常；④ 放行 = profile 的 `compatibility.json`（键 `包名@版本` → 运行的版本数组，如 `{"dsh-comfyui@0.5.4":["0.2.0-rc.2"]}`），写入接口 `pluginManager.setVersionExemption`，拒绝码 `incompatible-version`；⑤ 与「客户端 inject 不存在的服务 → pending 阻塞整个 web boot」（raw 那次）是**两种完全不同的失败**，别混为一谈。

关键词：插件准入、peerDependencies、@deepseek-ai/dsh- 前缀、runtimeVersion、dsh-app-boot、includePrerelease、skippedBundles、compatibility.json、setVersionExemption、incompatible-version、静默跳过、装上不出现

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

### 0mv6vanzi-6bcbb46efb73436d8ffe26c8a1
_重要性 2，状态 active，项目 全局_

探针脚本自己的变量为空，会把「修复已生效」误判成「还在 404」——小困实测：`H=$(node -e ...)` 输出被吞 → `$W` 为空 → curl 请求成 `/skin-assets/maid-atelier/`（落目录根）→ 404，于是断言「修了没好」；把文件名硬编码进脚本后同一 URL 立刻 200。**规矩：用 shell 变量拼 URL 前先 `echo` 确认变量非空；排查结论若与「刚修过」相悖，先怀疑探针，再怀疑修复。**

关键词：探针假阴性、空变量、curl 拼接 URL、误判404、echo 校验、shell 变量为空、修复无效假象、排查纪律、先怀疑探针

### 0mv6na0ji-818b986c303d48f0b6b067c598
_重要性 3，状态 active，项目 dsh_

教训：查 boot graph 验插件是否出列，用 `curl -sN http://127.0.0.1:19387/plugins/events`（SSE 首帧即完整 graph JSON，需按花括号配对切出 JSON）。**JSON 结构坑（2026-10-13 实测）**：顶层键是 `type, graph`，条目数组在 **`graph.entries`**，rev 也在 `graph.rev`——直接写 `g.entries||g.plugins` 会取到 0 条（顶层无 entries/rev），别据此判定插件掉了。graph.rev 随每次改码变动，**改文件推送后立即重启会撞 rev 窗口导致旧 URL 404**（表现为 web boot 1 entry did not activate + client.js&rev=xxx 404），稳态重取 graph rev 后 URL 即 200。验全部 bundle 可拉性：把 graph 里 entries+batches 的 url 去重成列表逐个 curl，看 200 计数。另：`/plugins/??<pkg>/client.js&rev=<rev>` 的 `??` 是符号名映射 exports './client'，不服务包内任意路径。

关键词：boot graph、plugins/events SSE、graph.entries、顶层键 type graph、graph.rev、取到0条、bundle URL 404、web boot entry did not activate、符号名映射 ??、rev 竞态

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

### 0mv6my7m1-ef341d6628bb4bd9863e6837e1
_重要性 3，状态 active，项目 全局，被纠正_

老大主动卸载插件 ≠ pnpm 剪包事故。发现依赖/包消失时，必须先问老大或查备份时间线，不可直接判定为事故并擅自装回——小困曾把老大手动卸载的 dsh-llm-fallbacks 误判为 pnpm 事故装回，被纠正。

关键词：主动卸载、误判事故、擅自装回、pnpm剪包、依赖消失、备份时间线、用户意图、被纠正、dsh-llm-fallbacks、插件管理、先问再动

### 0mv6excb8-c54a38239f9b4b519bf45e3275
_重要性 3，状态 active，项目 dsh_

取插件客户端 bundle 的 combo URL 形态是 `/plugins/??<插件id>/client.js&rev=<rev>`（双问号 + & 而非 ?），且 rev 必须用 framedHash 算：sha1 依次 update('plugin-artifact')、'\0'、每个 part 前加 `<字节长度>:`，part 为 [mtimeMs, ctimeMs, size] 的字符串形式，取 hex 前 12 位。小困曾误用 sha1(JSON.stringify(['plugin-artifact',[...]])) → 直接 404 空响应，改回 framedHash 即 200。

关键词：combo URL、plugins 双问号、client.js rev、framedHash、artifactRevision、rev 算错 404、插件客户端抓取、mtimeMs ctimeMs size、sha1 前12位、验证送达

### 0mv6dwfrn-159250be0cfd4db999c41f31a1
_重要性 2，状态 active，项目 dsh_

全量 `pnpm install` 会解析所有依赖，其中 dsh-maid-scenery 走 ssh 协议、dsh-video-skin 走 codeload——网络不通时 lockfile 无法重算。此时可手工编辑 pnpm-lock.yaml 对齐（importers 段写 `specifier:`/`version:`，packages 与 snapshots 段的远程条目删掉），再用 `--lockfile-only --ignore-scripts` 配 git url 改写 + 代理跑一次验证；实测手工改的两行会被 pnpm 保留认可。

关键词：手工编辑 pnpm-lock.yaml、lockfile 手工对齐、importers 段、packages 段删条目、全量 install 卡网络、dsh-maid-scenery ssh、离线验证

### 0mv4uzoag-7711c300b0284474be9a1a45c6
_重要性 2，状态 active，项目 全局_

pnpm 从 GitHub 装依赖时会走 ssh（`git@github.com:` 这种 scp 语法，不是 `ssh://`），本机没 GitHub 密钥 → `Host key verification failed` exit 128。用一次性环境变量改写：`GIT_CONFIG_COUNT=1` + `GIT_CONFIG_KEY_0=url.https://github.com/.insteadOf` + `GIT_CONFIG_VALUE_0=git@github.com:`。改写后若报 `Connection was reset`，是 https 被墙——再加 `GIT_CONFIG_COUNT=2` 与 `GIT_CONFIG_KEY_1=http.proxy` / `GIT_CONFIG_VALUE_1=http://127.0.0.1:7890` 走本地代理即可通。

关键词：pnpm git 依赖 ssh、Host key verification failed、insteadOf 改写、GIT_CONFIG_COUNT、git@github.com 冒号语法、Connection was reset、http.proxy 本地代理、7890、exit 128、一次性环境变量

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

### 0mva785ht-b8fe13395090400ab6eac581f2
_重要性 2，状态 active，项目 dsh-maid-tts-fix_

目标：让小困的 TTS 音色配上 SD 大肥鲸形象、且念得自然。2026-10-14 连续迭代：v1 冷调沙哑低能量（被老大否「一点也不符合他这个卡通角色的人设」）→ v3 软糯少女 → 被指「机械、音高很高」→ v4 反机械压音高（又被指「不像少女」）→ v5 十六到二十岁 → 老大改主意用 SD 大肥鲸形象要「小孩的音色」→ v6 六到九岁童声 → 老大再提「语速有点慢，也没有孩子气，念起来没感情」→ 改「慵懒的孩子气」+ 末段「像跟人讲话一样抓重点说」。**四组 AB 对照**（v6 293.7±17.4Hz n=10／加厚中音区 263.4±26.9 n=5／年龄上移八到十一岁 256.5±16.9 n=5／极简口语 280.0±21.0 n=5，方法：同文本+同提示词抽 10 个候选做试听页）→ 老大挑中，C 组五个全过 → 定稿落进 profile 第 116/124 行。同时挖出 voiceRate=1.2 是独立音高元凶，已退回 1.0×。**核心教训：voicedesign 每次朗读都重新生成音色（同一会话连点两次也是两个嗓子），多轮改提示词的听感差异大半是抽样噪声——判模板必须多次试听取平均。** 选定样本 09/04/02 已随迁 tts-fix/voice-refs/（不入库）。

关键词：音色模板演进、童声版定稿、SD 大肥鲸形象、机械感 音高偏高、语速慢没感情、慵懒孩子气、抓重点讲、四组 AB 对照、voicedesign 每次都不一样、抽样噪声、voiceRate 1.2 元凶、参照样本 09 04 02、profile 第116/124行

目标：让小困的 TTS 音色配上 SD 大肥鲸形象并念得自然

### 0mv9px4n0-799f39480b0440e18471432eaa
_重要性 2，状态 active，项目 jasna_

目标：让 Jasna 的 LTX 在保画质（不丢质量、马赛克修复后清晰，质量最高优先级 m01229）前提下不爆 8GB 显存 / 不爆内存。经过：① 拆掉 pagefile 2GB 墙（扩到 16GB，提交上限 33.06→47.06 GiB）；② 三档短片实测 int8 预设 5 跑 4 过 1 挂（唯一真 4K 在 compose 挂，缺口 36.5MB，正解=腾显存）；③ fp16 证实是 LTX 硬依赖（关掉必崩）；④ **large_canvas 在本机从未生效**——静默回落 512px（要 12GB 空闲显存），768px 细节收益一直没吃到；⑤ int8 锁定为 1080P 最佳预设；⑥ 老大把模型换成 **nvfp4**（必须配 `--ltx-fast`，否则 `_ensure_ltx_model` 处 EOFError 崩），三轮测试改成两轮（m02223 取消 2 小时那轮，**以 30 分钟样本为长视频最终结论**）。第一轮短样本对照已完成（nvfp4 未显优势、4K 两档都挂）。**当前：第二轮 30 分钟样本对照在跑——`E:\jasna-nvfp4\orchestrator.ps1` 经 WMI 脱钩启动（DSH 重启不影响），先 nvfp4 组再 int8 组，结果写 `out-nvfp4\runs.tsv` / `out-int8\runs.tsv`，资源写 `logs\monitor.csv`。** 已建 GitHub 私有仓库 `jasna-settings-bench` 存测试结果（本地 `D:\DeepSeek Harness\Works\jasna-settings-bench\`，98 文件已推）。

关键词：Jasna LTX 优化、保质量不爆显存不爆内存、nvfp4 ltx-fast、30分钟样本 长视频最终结论、orchestrator.ps1 WMI 脱钩、jasna-settings-bench 私有仓库、large_canvas 静默回落 512px、1080P 最佳预设 int8、4K compose 缺口 36.5MB、第二轮对照测试进行中

目标：在保画质前提下优化 Jasna LTX 设置，不爆显存/内存并继续找提速提细节空间

### 0mva8ani1-1aefc8ba4eef467fbfedbdf842
_重要性 2，状态 active，项目 dsh-maid-patch-kit_

老大 m00384 让小困用 patch-kit 接管 lxzy-7/dsh-plugin-guard：「现在好像没更新同步DSH的新版本了。而且现在版本的DSH安装这个插件也有问题，你看能不能接管后修改到能适配版本或者说变成通用版本。」随后 m00415「web版就帮我改成桌面端」、m00418「以lxzy-7/dsh-plugin-guard的为主」（npm 上 wuweilab 那版不碰）。取证结论：上游 0.3.2、最后一笔 2026-08-18、近两月零提交，够接管条件；rc.2 客户端已删掉 settingsScope 服务与 settings.plugin.item 槽位，宿主 settings 只剩 SettingsForms 且**没有 register 方法**，原版在桌面端客户端半边永远 pending。做法：整包 fork 进 `ds h-maid-patch-kit/guard/`，包名 dsh-maid-guard、版本 0.3.2-fork.1、零外部依赖（js-yaml 换内置 parser、schemastery 动态可选导入），新增 src/profile.js 统一收环境知识（默认 desktop、端口 19387），boot 脚本改成桌面壳形态，文案与 smoke-test 夹具同步。验证：smoke-test 16 项 + load-drill 13 项全绿，提交 e029e51 / ee1e199 已推远端。desktop profile 用 link: + bundles 接入（22 项）。2026-10-16 04:41 重启后：cordis.yml:1584 挂上 guard 行、六条 /guard/api/* 路由全活、客户端自报 booted:true、手动存档三个 profile 各成一份。剩「设置页『备份管理』栏」待老大肉眼确认。

关键词：guard 整包接管、dsh-maid-guard、lxzy-7 停更、web 改桌面端、settingsScope 删了、settings.plugin.item 没了、SettingsForms 无 register、profile.js 收环境知识、19387 端口探测、guard api 六条路由、booted 心跳、备份管理栏待肉眼、0.3.2-fork.1

目标：把上游停更的 lxzy-7/dsh-plugin-guard 接管成桌面端可用的 dsh-maid-guard

### 0mv67sjra-07d1d0b3e0db495fbeedeca973
_重要性 2，状态 active，项目 dsh_

目标：收口 dsh-video-skin 的浅色发白问题。已将 surfaceLight 0.6→0.45、veilLight 0.098→0.22 写入 `$DSH_HOME\dsh-video-skin.json`，刷新即生效（面板糊白消失、纱感回来）。**同批另两项显示异常（输入框内图片缩成一条、侧边栏展开按钮消失）已排除皮肤嫌疑**——当时疑 maid-atelier 主题，后来皮肤从二手搬运版 @dsh-external 换成正源 Small-tailqwq 0.1.7（比搬运版新六个小版本），换源后未见单独复报，但也没做过正式复验收口。若再冒头：先核对当前主题版本，再看 dsh-maid-scenery 的覆盖段。**图片不显示**那条等老大 Network 取证，至今未取。**另注（2026-10-16）**：同期那条 ego 侧边栏美化线已按老大拍板全清回 0.8.6 原版，ego-browser 插件本身也已卸载——与皮肤问题无关，别再翻旧账。

关键词：surfaceLight、veilLight、浅色发白、dsh-video-skin.json、输入框图片缩成一条、侧边栏展开按钮消失、maid-atelier 正源替换、0.1.7 复验、Network 取证未做、待收口、显示异常排除皮肤

目标：老大刷新取证图片请求状态，定位图片不显示根因

### 0mva8aflj-f9b61cfad4de4de29256a724a8
_重要性 2，状态 active，项目 dsh-maid-patch-kit,dsh_

起因：老大 m00384 提出 patch-kit 接管 lxzy-7/dsh-plugin-guard（「现在好像没更新同步DSH的新版本了…看能不能接管后修改到能适配版本或者说变成通用版本」）→ m00415「web版就帮我改成桌面端」→ m00418「以lxzy-7/dsh-plugin-guard的为主」（npm 上同名 wuweilab 版不碰）。取证：上游 0.3.2、最后一笔 2026-08-18、近两月零提交；本机 rc.2 已彻底移除 client 服务 settingsScope 与槽位 settings.plugin.item，宿主 settings 只剩 SettingsForms（**无 register 方法**）——原版在桌面端客户端半边永远 pending。方案定为 **fork 内置**（改动面大到 pnpm patch 装不下），正本落在 `D:\DeepSeek Harness\Works\dsh-maid-patch-kit\guard\`，包名 dsh-maid-guard、版本 0.3.2-fork.1、零外部依赖（删 js-yaml 改内置 parser、schemastery 改动态可选导入）。改造：新增 src/profile.js 环境探测器（默认 desktop、端口 19387）、boot 脚本换桌面壳形态、文案与 smoke-test 夹具同步。验证：smoke-test 16 项 + load-drill 13 项全绿，node --check 9 文件通过，提交 e029e51 / ee1e199 推送成功。接入 desktop profile 走 link: + bundles（22 项）。2026-10-16 04:41 重启后验收：cordis.yml:1584 挂上 guard 行、六条 /guard/api/* 路由全活、客户端自报 booted:true、手动存档三个 profile 各成一份。仅剩「设置页『备份管理』栏」待老大肉眼确认。

关键词：guard 接管、dsh-maid-guard、lxzy-7、web 版改桌面端、settingsScope 已移除、settings.plugin.item 已移除、SettingsForms 无 register、fork 内置、profile.js 探测器、端口 19387、六条 guard api 路由、booted 心跳、备份管理页

目标：把上游停更的 lxzy-7/dsh-plugin-guard 接管改造成桌面端可用版本

### 0mva8afl9-232ed732349e446cb75326a354
_重要性 2，状态 active，项目 dsh,dsh-maid-patch-kit_

起因：老大 m00002「dsh-orb插件出现了问题。https://github.com/mini-yifan/dsh-orb-cordis这是他的仓库链接，帮我更新一下。」诊断：node_modules\dsh-orb 实为**残缺的 0.1.3**（只有 node_modules/、package.json、README.md，缺 lib/、dist/、client.js、cordis.patch.yml），另有半成品残留 dsh-orb_tmp_2384_1。.plugin-manager 三份日志证三条根因——(a) 更新按钮把 npmmirror tarball URL 交给 pnpm 11.7 → ERR_PNPM_MISSING_TARBALL_INTEGRITY；(b) orb helper 的 electron 占着包目录 → ERR_PNPM_EPERM；(c) 正路是按名装 dsh-orb@0.1.7。处理：清残骸（改名 dsh-orb.broken-20261016-030834）、备份 package.json/pnpm-lock.yaml（.bak-orb-update-20261016-030748）、`pnpm add dsh-orb@0.1.7`（+2 -27，15s，无报错）、自测核过 1044 文件/36.7MB + 31 个外部依赖全可解析 + 六入口 node --check 全过 + koffi 3.3.1 实测加载。结果：2026-10-16 04:41 重启后 cordis.yml:1743-1756 五段齐（新增 dsh-orb/computer-use/code-agent-registry），0.1.7 生效；同日登记进 patch-kit lib/targets.js 为 watch（上游活跃、只登记待命）。

关键词：dsh-orb 更新、残缺 0.1.3、MISSING_TARBALL_INTEGRITY、EPERM 占用、pnpm add 0.1.7、orb-code-agent-registry、koffi 加载、cordis.yml 1743、重启验收、mini-yifan、helper electron 进程、半成品残留 tmp 目录

目标：把出问题的 dsh-orb 更新到 0.1.7 并验收生效

### 0mva7u080-e3f69cb5df384b0d9040f99432
_重要性 2，状态 active，项目 dsh_

目标：把 ego-browser（Agent 浏览器）是留是卸判清楚、并按老大拍板收尾。 起因（m00002 原话）：「dsh-ego-browser目前用下来，这个插件有用的上的地方吗？我怎么感觉好像都没怎么使用它。我在考虑要不要卸载」——早在 session-74e9396f 老大已问过一次同类问题，疑虑不是第一次。 取证（47 会话 / 14724 次工具调用回溯）：ego_* 共 1068 次＝7.3%，只在 11/47 会话出现，4 个会话吃掉 84%；工具分布极度偏斜——`ego_script` 681 次（64%，被当成廉价 Node 执行器用，本该走 ops_bash），`ego_js` 178、navigate 44；**交互类（click/fill/select/key/hover/snapshot）全为 0**。真·非浏览器不可的约 75 次，只有三类：B 站搜索抓取（要 JS 渲染 + 登录态）、持久登录 profile、本地 HTML 截图。 成本与依赖：35 项工具定义说明合计 **11847 字符 ≈5400 tokens** 常驻每步上下文（比磁盘 1.3M 重得多）；无任何插件依赖它。 替代实测：本地 HTML 截图改用本机 Chrome headless（`C:\Program Files\Google\Chrome\Application\chrome.exe --headless=new --disable-gpu --screenshot=...`）——**只在 danger-full-access 下可用**，workspace-write 沙箱下必报 `crashpad_client_win.cc:421] OpenProcess: 拒绝访问 (0x5)`、exit 2 不出图；日常文件/命令操作回 ops_bash。 结论演进：小困建议「留着但降级为按需启动」——**老大未采纳**，2026-10-16 原话「那就不用留了，把dsh-better-sidebar 和 dsh-ego-browser 这两个卸载了。然后小困的patch-kit修改一下同步更新到github。」当日完成：profile 卸载净、bundles/cordis.yml/pnpm-workspace.yaml 三处 grep 残留为 0、patch-kit 撤下 ego 补丁（正本归档 `_probe/ego-patch-archive-2026-10-16/`，3530 字节 / md5 `765a8726904d3ced5d7190d5cd1ca869`）、README 与 selfcheck 判据同步清干净。 副产品教训：老大检查残留时发现 6 个 chrome.exe 仍挂着（ego-lite-linux profile），印证「常驻占资源」的观感来源；以及「清干净」必须 `git ls-files | xargs grep` 扫全仓跟踪文件，别只改代码。

关键词：ego-browser 要不要卸载、使用度盘点、ego_script 被当执行器、交互类调用为 0、常驻 token 成本、Chrome headless 替代截图、better-sidebar 同批卸载、patch-kit 撤下 ego 补丁、chrome 进程残留、按需启动建议未采纳、桌面端 only

目标：把 ego-browser 是留是卸判清楚并按老大拍板卸载收尾

### 0mva7tvc9-94031edbf153472ba68ceefc32
_重要性 2，状态 active，项目 dsh-maid-vcp_

目标：把 VCP 的渲染能力稳定地挂进宿主渲染链，并回答老大「这不该写进小困的 VCP 里吗」的质疑。 起因（2026-10-16，m00404）：老大看到小困在讲 asar 补丁，追问「这个不应该是写进小困的VCP里吗？」——他判断一个功能若属于某插件的职责，就该写进插件本体，靠 asar 临时补丁挂住是次选。 澄清与定论：**注释剥离代码本来就在插件仓里**（`patch/v6-inject.js` 的 `HTML_COMMENT_RE` 与 `stripHtmlComments`，随包发布），但 VCP 自己不下场渲染——`lib/client.js` 是 DOM 层插件（挂按钮 + `MutationObserver`），够不着 Markdown token→React 的转换链；必须由 `patch/patch-frontend-asar.cjs` 把 `window.__vcpStable.render` 塞进宿主 `case"html"` / `case"code"` /（v10.3 起）`case"inlineCode"` 分支，再用 `patch/install-all.cjs` 写进 `app.asar` 才生效。「写进 VCP」与「重打 asar」是同一件事的两半，不是二选一——**改 VCP 源码 ≠ 生效**。 补丁器代际：v8 因 F 补丁吞掉 h/m 声明导致消息区白屏、弃用 → v9（2026-10-13）修好 → v10 改为「先扫 bundle 推导符号表再生成锚点」（旧脚本锚点写死压缩后变量名，dsh 升级重命名即失效）；v10.2 修幂等（`updateInjectModule` 原拿整文件比夹取段，永远不等 → 每次 install 多插一个 `\n` 并假报「整段升级」）；**v10.3（0.6.14，commit `afda565`，tag 已推）补 inlineCode 缺口 + 放宽 code 判据**。写入方式自 v10.2 起是「追加式」（新内容写到数据区末尾、只改目标条目自己的 offset/size/integrity、头部保长），DSH 在跑时写入不再打崩当前进程，但**asar 头被进程缓存，仍必须完全退出重启**。 取证与验证：前端 bundle 服务路径 `http://127.0.0.1:19387/assets/index-5SrrfWpU.js`（带 `/dsh/` 前缀 404）；`patch/install-all.cjs` 无参数自动探测 app.asar；验证四层＝源码 `node --check` → 行为探针（从源码抠真实函数）→ asar 回读 → 真人实测；**2026-10-16 补第五层：重启后从界面真实路径 curl 运行时 bundle，字节数须与 asar 条目一致**（本次 747912 字节、G 守卫在、旧 `^` 判据 0 处）。 web 端补丁器有意不同步（老大 m00698「我只用桌面端，web端完全不需要。」）。

关键词：机制该写进 VCP、asar 补丁器演进、v10.3、v10.2 幂等修复、追加式写入、符号表锚点、case html code inlineCode 分支、__vcpStable、lib/client.js 够不着渲染链、重启后运行时 bundle 复核、patch-frontend-asar.cjs、web 端不同步

目标：把 VCP 渲染能力稳定挂进宿主渲染链（asar 补丁器代际与归属定论）

### 0mva7tp9j-23fa951e385747d08c094ce035
_重要性 2，状态 active，项目 dsh-maid-preset_

目标：让记忆自动同步别再静默停摆。三次停摆、三条根因、三次收口： ① **2026-10-12 空闲钟逻辑死锁**——`lib/sync.js` 判定分支比的是「同步水位」而非上轮观测值，每 tick 用 `Date.now()` 重置 `lastChangeAt`，`due` 恒 false，一整天不推送。修法：`lastChangeAt = Math.min(Date.now(), m)` 锚定库文件最后写入时刻（仿真：旧逻辑 15 轮 null，新逻辑静置库第 0 轮到期）。 ② **2026-10-15 配置类停摆**——同步专用克隆 `~/.dsh/maid-sync` 没配仓库级 git 身份、本机全局也没配，`resolveIdentityArgs` 返回 null → `pauseForConfig('commit 身份缺失')` → 整个循环**永久暂停**，日志只留一行「已暂停同步」，不报错、界面上看不出来，断更一天（462 条全在本地）。修法：克隆里 `git config --local user.name/user.email`（署 Valorine97417）+ 清 `maid-sync-state.json` 的 fatalReason/fatalDetail/fatalRepoUrl/pushFailed/failCount/nextRetryAt。注意克隆不在版本管理里，删掉重建就原样复现。 ③ **2026-10-16 长会话停摆**——对话每轮都写 `memory.db-wal`，`dbMtime` 取 db/wal 较大 mtime，而 `lastSyncedMtime` 停在最后一次成功推送的值 → WAL 一直动、水位永远追不上 → 空闲钟永远走不满 10 分钟 → 积压 2 小时 / 35 条。这是机制取舍不是 bug。**根治（v0.7.5，老大 m00952 原话「两个都弄」批准）**：加最长等待上限 `maxWaitMinutes`（默认 60），距上次成功推送满 60 分钟就强制推一次，不管库还在不在写；到期判定抽成导出纯函数 `computeDue(cfg, state, now = Date.now())` 返回 `{due, idleDue, maxWaitDue, retryPush, skipped, reason}`，退回退避保护（`cooledDown`）不被顶穿。 应急处置始终可用：`D:\DeepSeek Harness\Works\_probe\mem-sync-now.mjs`（直接 import `syncOnce` 与 `detectLocalProxies`，读 `C:/Users/Kayle/.dsh/maid-settings.json` 拼 cfg、显式传 identity，构造全零 state 跑一次；实测返回 `{ok:true,reason:"pushed"}`，把积压 35 条一次推上，commit `499519b`，三处对齐 506 条）。 **重启后已见判据**：`~/.dsh/maid-sync.log` 启动行写成「空闲 10min 推送（最长等待 60min 强制推），轮询 60s」。仍待观察：长会话里是否真出现「已达最长等待上限 60 分钟（记忆持续写入中），本轮强制推送」。

关键词：记忆同步停摆、空闲钟走不满、commit 身份缺失、pauseForConfig 永久暂停、WAL 持续写入、maxWaitMinutes 最长等待上限、computeDue 纯函数、v0.7.5 根治、mem-sync-now 手动补推、maid-sync-state.json fatalReason、三次停摆三条根因

目标：让记忆自动同步不再静默停摆（已用最长等待上限兜底）

### 0mv9r6h6r-b32da1467bad4dd1b869c4b254
_重要性 3，状态 active，项目 dsh-maid-vcp,dsh-maid-tts-fix_

目标：让 `<!--tts:…-->` 朗读标记在渲染层不再出事——不显形、不吞正文。 **这是同一件事的三段事故与三次修复**： ① **显形（v6.40 → v6.41，2026-10-15）**：老大截图报卡片下方明晃晃挂着 `<!--tts:…-->`。v6.40 把 `stripHtmlComments()` 挂在 `parseFrag`，无效——注释前后有空行时 CommonMark 把它切成独立 HTML 注释块单独交给 `render`，处理链走完向 `if (!v) return null` 在 `parseFrag` 之前短路，返 null 则宿主回落渲染原文。修法（v6.41）：钩子提到 `render` 入口，剥完为空返回**空 Fragment** 而非 null。老大实测确认生效。 ② **正文被吞（v6.41 → v6.42，2026-10-15 深夜）**：老大连遇两次报障「回复正文整段不见，界面只剩『已完成，用时 21 秒』」，原话「我以为是我的问题，你两次回复我都是这样」。根因＝小困三次把标记写残（一次收成 `了。>`、两次只剩 `--`），而 v6.41 对未闭合 `<!--` 是无条件截断到消息末尾（本意护流式中间帧），标记之后的正文与卡片全被剥光；TTS 侧同一条残标记也匹配不上 `-->`，退回念全文——「不显示」与「照样念」同时发生。两侧各修一头：渲染侧 v6.42（0.6.13）给 `stripHtmlComments` 加 `lenient` 参数，`render` 入口传 true，遇未闭合注释只吃它所在的整行（含行尾换行），流式调用点保留原截断；TTS 侧 dsh-maid-tts-fix 0.6.3 的 `extractTtsSpokenOverride` 放宽认行尾/文末的 `--` 或 `>`（锚定位置，防正文里的裸 `>` 被当收尾）。三条真实事故原文喂落盘真代码，从「4229→0 / 3886→0 / 3442→1」变成保住 4089 / 3701 / 3268 字，两侧探针 10 过 0 败。 ③ **反引号包裹显形（v10.3，2026-10-16）**：小困把标记写成 Markdown 行内代码 `` `<!--tts:…-->` ``，走宿主 `case"inlineCode"` 分支，而注释剥离只挂在 `case"html"` 与 `case"code"` 两条分支上——尖括号原样显形（老大两次截图报障）。**老大 m00578 一句「动手」批准**，小困加 G 项 `buildInlineCodeGuard` 兜底（判据窄到内容以 `<!--` 开头才拦），同时把 `case"code"` 兜底判据的 `^` 锚定去掉（原来要求围栏以 `<div id="vcp-root"` 开头，卡片前带一行说明就整卡退回源码）；24 用例全绿、asar 追加式写入（+747912）、04:41 重启后运行时 bundle 复核通过（747912 字节与 asar 条目一致、G 守卫在、旧 `^` 判据 0 处）。**唯一剩老大肉眼确认的一层**。 元教训（写进 DESIGN.md §4 第 13 条）：防流式的宽容逻辑不能无条件套在最终帧上，同一段代码要在两个语境下表现不同就得把语境显式传参；给第三方代码挂钩子前先问「我依赖的标记到这一步还活着吗」——挂载点的正确判据不是「哪个函数最像入口」。规矩：标记必须**裸写、独占一行、以 `-->` 收尾，绝不加反引号**。

关键词：朗读标记事故三段、正文被吞、回复空白、标记显形、反引号包裹显形、stripHtmlComments lenient、空 Fragment 不是 null、render 入口挂钩子、v6.41 v6.42 v10.3、inlineCode 兜底、行尾锚定、标记独占一行

目标：让「朗读标记写残」不再毁掉整条回复的显示与朗读

### 0mv9jcdf5-059dd60a55334936903c45303a
_重要性 2，状态 active，项目 dsh_

目标：给老大一份「B站这两天较火的大肥鱼视频清单」（附链接）。起因：老大 m02517「那帮我去B站找下这两天毕竟火的大肥鱼视频，什么内容都可以。列个清单给我，附上视频链接。」做法：用 ego-browser 在 search.bilibili.com 内 `fetch('https://api.bilibili.com/x/web-interface/search/type?search_type=video&keyword=大肥鱼&order=pubdate&page=N', {credentials:'include'})` 逐页抓，共 680 条（跨 37.7 小时）；搜索页 URL 的 `pubtime_begin_s` 参数不生效，只能抓回后自己按 pubdate 过滤；单次 `ego_js` 有执行超时上限，每批只能 14-20 页。原始数据已抓齐（48 小时内按播放量前 26 条 + 7 天内爆款 17 条），**但清单至今未产出**——中途被 ego 侧边栏美化那条线打断，随后美化全清收口，此任务一直挂着。**2026-10-16 现状变化**：ego-browser 已按老大拍板从 profile 卸载，当时依赖的 ego_js 批量抓取通路不再可用；要续做需先装回 ego（或找替代抓取手段）。老大尚未撤销此任务，也尚未说要不要现在做。

关键词：B站大肥鱼视频清单、m02517 未产出、bilibili 搜索 API、search_type video、order pubdate、pubtime_begin_s 不生效、ego_js 超时、680 条原始数据、48 小时播放量前 26、7 天爆款 17、ego 已卸载通路失效、挂起任务

### 0mva785i0-87ca737b83704242ac4a4ca568
_重要性 2，状态 active，项目 dsh-maid-tts-fix_

起因：老大问「把 xiaomi-tts 补丁传进人设插件会不会搞乱我的仓库？毕竟人设插件只有人设预设+记忆」。先走「分家不搬家」——补丁收进 dsh-maid-tts-fix，音色提示词暂留 preset 的 voice-refs/，两边无代码依赖。2026-10-15 老大再拍一句「那也把 tts 相关的弄到 tts-fix 里，preset 目前只专注 人设预设跟记忆」——音色也整个迁走：voice-refs/（prompt.md + README.json）从 preset 迁到 tts-fix，三个参照 wav 同步搬（md5 五个全一致），preset 删 voice-refs/、去掉 .gitignore 的 wav 规则、README 那节改一句指路。preset 提交 b03130f，tts-fix 提交 c42a88c，两边均已 push。**结论：人设包（dsh-maid-preset）= 人设预设 + 记忆系统；dsh-maid-tts-fix = dsh-xiaomi-tts 的维护层（朗读补丁 + 音色提示词 + 参照样本说明）。** 音色配置本体始终在 profile 的 cordis.patch.yml（带 API 密钥，永不进任何仓库）。

关键词：tts 相关迁到 tts-fix、preset 只专注人设预设和记忆、voice-refs 迁移、音色归 tts-fix、仓库边界、搞乱我的仓库、两边无代码依赖、分工定案、b03130f c42a88c、音色本体在 profile 不进仓库

目标：划清 dsh-maid-preset 与 dsh-maid-tts-fix 的职责边界

### 0mv9o0646-ef416c446eba4077a56c06bf7d
_重要性 3，状态 stale，项目 dsh-maid-tts-fix_

目标句：让自动播报跳过记忆反思轮、改念上一条。起因：跨会话自动播报 0.5.0 上线后，每次记忆反思轮结束都会念那张「记忆反思·本轮封存」卡，老大 2026-10-15 提出「如果最新一条是记忆反思任务就改为念上一条」。**三次落地才收口**：① v0.6.0（commit 4e5e903）判据是「nodes 里扫 meow-memory-reflect 文本」——源码推演得出、离线 10 用例全过，**上线即失效**（老大 m01636「还是会读…而不是上一个任务结束输出」），因为该注入被 next-turn claim 后变 turn-trigger，`legacyContribution` 直接丢弃它；② v0.6.1（23082 / dfaeec13、commit e7e9624）换成间接判据「某轮首条 assistant 之前没有别的可见输入节点 → 反思轮」，用 node.turn 定轮边界，**仍漏 2 处**；③ v0.6.2（**23463 / b8fb790fa119ad1e、commit 54734d7 已推**）再补 `isReflectInjection`——**没被 claim 的反思注入本身就以 context 形态留在 legacy 里**（会话首轮即此形态），只看 INPUT_NODE_KINDS 会把它当正常轮。最终验证：42 会话 / 21 含反思 / 28 反思轮，零假阳零假阴，13 处 latestAssistantMessageId 真的回退；离线 16 用例全过；verify 全绿。边界：上一条若已被播过（去重仍生效）则这一轮不响。**status=stale（已完成）**。

关键词：跳过记忆反思轮、念上一条、判据三次落地、0.6.0 失效、turn-trigger 不进 legacy、isReflectInjection、首轮反思 context 形态、latestAssistantMessageId、node.turn 定轮边界、v0.6.2 补丁 23463、commit 54734d7、反思卡不念

目标：让自动播报跳过记忆反思轮、改念上一条（已达成，0.6.2）

### 0mv9lqicr-4f7bd06992df4dacb3b8455181
_重要性 3，状态 stale，项目 dsh-maid-tts-fix_

目标：让 dsh-xiaomi-tts 支持「隔壁会话跑完自动念给你听」——**2026-10-15 已达成**。起于老大问「tts 的隔壁会话完成自动播报可以实现吗？」（旧记忆曾判「暂缓」，复查源码推翻）；只读探针在真实渲染进程跑通，取到两例隔壁会话末条正文；老大拍板（m00568）「改，会进 tts-fix 里面吗？xiaom-tts 升级的话，从补丁里重新打回来」→ 落进 dsh-maid-tts-fix 的 lib/edits.js（7 条 cross-session 编辑）并用 patch.mjs redo 出补丁。中途卡点：PlaybackController 的 activeSessionId 门禁遍布，用 remoteSessionId + ownsSession + playRemote 解开。产出：v0.5.0、补丁 21868 字节、commit 7b44ef1 已推 GitHub。

关键词：隔壁会话自动播报、跨会话播报已达成、retain binding chat target、running 边沿、activeSessionId 门禁、remoteSessionId、playRemote、tts-fix 补丁、patch.mjs redo、旧判暂缓被推翻、0.5.0

目标：让 xiaomi-tts 支持隔壁会话完成自动播报，且改动落进 tts-fix 补丁体系（已达成）

### 0mv9jpodh-690a941c28e8481c8cbab8b153
_重要性 2，状态 active，项目 dsh_

老大问 dsh-sieve 怎么用。机制：四条决策（tool.admission / test-log / context.forget / skills.disclosure）全自动跑，人只过三关——装包、配判断模型（Jev 要 TypeSafe 或 OpenRouter key；Laya 仅 macOS）、重启后 /sieve status 看「判断模型」是否写「未配置」。本机三处障碍：① peer 精确卡 0.2.1-alpha.1，本机 0.2.0-rc.2，装了会静默 skip；② 凭据库那把 key 叫 OPENROUTER_AI_API_KEY，sieve 只认 SIEVE_JUDGE_OPENROUTER_API_KEY / TYPESAFE_API_KEY；③ context.forget 与 billion-context 抢同一条 compaction/prune 通道，建议只留准入与技能披露。judge.type 默认 auto，环境里有 TYPESAFE_API_KEY 就真调真计费。待老大拍板是否升 DSH。

关键词：dsh-sieve 怎么用、判断模型 Jev Laya、tool.admission、context.forget、skills.disclosure、SIEVE_JUDGE_OPENROUTER_API_KEY、TYPESAFE_API_KEY、peer 卡 0.2.1-alpha.1、装上静默 skip、与 billion-context 撞通道、/sieve status、TypeSafe 按次计费

目标：判定 dsh-sieve 在本机能否落地并备好安装方案

### 0mv86j3h7-6b6b9f3c7f49434282464840ca
_重要性 2，状态 stale，项目 dsh_

目标：把 dsh-better-sidebar、dsh-ego-browser 与 dsh-video-understand 在本机装好跑通（2026-10-14 已达成）。
老大三个插件意向与裁决：① dsh-video-understand 要装（本机 Win11，纠正小困「没有 ffmpeg」的误判）；② dsh-ego-browser 想用在谷歌浏览器；③ 追加问 dsh-better-sidebar 与这两者能否搭配。小困结论：能搭配但不是三角——better-sidebar 是服务基座、ego-browser 是消费者、video-understand 是孤岛（无 client facet）；安装顺序先基座再 ego-browser。video-understand 落地方案：用 DSH 自带 Python（不碰 ComfyUI，老大明确说「comfyui 是拿来生图的」）+ 打 issue#1 补丁 + 建 .venv + ffmpeg 入 PATH；LLM 出口改用 DSH 本地网关 8326（老大拍板「不用key，改为当前用的模型」）。
三者装完已重启验证：ego-browser 实操 B 站搜索+抓列表成功，video-understand 解析 9 个 B 站视频出清单成功。

关键词：better-sidebar、ego-browser、video-understand、三插件搭配、服务基座与消费者、孤岛无 client facet、安装顺序先基座、本地网关 8326、不碰 comfyui、ffmpeg 入 PATH、DSH 自带 Python、已装并验证

目标：把 dsh-better-sidebar、dsh-ego-browser 与 dsh-video-understand 在本机装好跑通

### 0mv63844e-879d7cea673442e38c07932316
_重要性 2，状态 stale，项目 dsh_

目标：查明强制刷新后 combo 404 与 bc import failed 的触发方（已达成）。强制刷新崩溃已由 asar console.error 补丁压死。combo 404 + billion-context import failed 的触发方**已查明**：老大在 DSH 插件市场点「更新 dshmarket」「卸载 maid-atelier 皮肤」时，dsh-pm 会跑 `pnpm install`（含 failed-run 还原逻辑：还原 package.json+pnpm-lock 后跑 `pnpm install --frozen-lockfile`），每次市场操作重写 profile package.json 并重装依赖 → bc 被整包重解压（mtime 假时间、ctime 轮转）、install-log 落 .dsh-logs 重启即清。副作用已消除：dsh-raw-html 改 link: 依赖后不再被冲。同类现象的通用解法后来推广为 pnpm patch（见 dsh-maid-tts-fix / dsh-maid-patch-kit）。

关键词：combo 404、billion-context import failed、pnpm install 触发方、插件市场操作、dsh-pm failed-run、frozen-lockfile、bc 重解压、刷新崩溃、手改 node_modules 被冲、转 pnpm patch

目标：查明并修复强制刷新后 combo 404 与 bc import failed 的触发方

### 0mv8biikn-686f546dae7a46549c2d6c6e70
_重要性 3，状态 stale，项目 dsh-maid-patch-kit_

2026-10-15 立项并落地、已收口：给 dsh-better-sidebar / dsh-ego-browser / dsh-video-understand 三个社区插件做不阻碍上游更新的维护补丁（老大 m02003）。已建成 dsh-maid-patch-kit（Valorine97417/dsh-maid-patch-kit，public），收录 vu 与 ego 两个补丁并接入 profile，install/verify/venv 全通过，已推送。后续两处变化：① better-sidebar 上游活跃（10-14 仍推），始终无需补丁；② ego 的侧边栏 UI 主题美化（曾长到 45KB）按老大 m05093/m05161 全清，ego 补丁缩回最初的 3,530 字节（仅 issue#70），远端 main = f7ea1a0。老大 m02385「先推」= 拍板建仓库推送，已完成。

关键词：三插件维护补丁、dsh-maid-patch-kit、ego-browser、video-understand、better-sidebar 无补丁、不阻碍上游更新、pnpm patch 落地、已推送 f7ea1a0、UI 美化全清、issue#70 保留

目标：让三个社区插件的维护补丁在本机可重放、可核对、不阻碍上游更新

### 0mv8f1v6g-a73220b63ae7426393d5baaebe
_重要性 2，状态 stale，项目 dsh,dsh-maid-patch-kit_

ego 侧边栏换装（老大 m02567 起）已**全清归零**。八步演进（换色 #0a84ff→柔金 c5a468／ComfyUI 蕾丝素材／i2i 参考图／复用左栏皮肤变量／补立绘绒边徽章／补金框／弃重绘改"解析配方+量真实像素"／按 592×944 生成整幅金饰九宫格落地）走完后，老大 2026-10-15 拍板 m05093「直接全清掉，回到最开始的默认把。」+ m05161「清掉的是做右边侧边栏UI主题界面那些噢」→ lib/client.js 回 0.8.6 原版（163,276 字符），只留 issue#70 功能修复。美化版补丁归档 `_probe/ego-patch-archive-2026-10-15/`。

关键词：ego 侧边栏换装、全清归零、UI 主题美化撤回、Agent 浏览器面板、maid-atelier 同源、柔金配色、金框 掉价、不是生图是编辑、issue#70 保留、45KB 补丁归档、回到原版默认、老大拍板

目标：让 ego-browser 侧边栏实时面板与 maid-atelier 皮肤视觉同源（2026-10-15 已弃，全清回原版）

### 0mv83n6wy-3522a9c858e1439385b023c583
_重要性 3，状态 stale，项目 dsh,dsh-maid-preset_

目标：查明并消除与 billion-context 冲突的原生自动压缩。起因：bili 横幅报「会话历史被改写」，老大问是哪个压缩器冲突。排查：bili.log 抓到「dsh native compaction call identified … REFUSED」与「unannounced client history rewrite (194/504) — marking compaction boundary (#1001)」，conflicts 台账 suspected/sibling/activeConfirmed 全 0，证明不是第二个插件。定因：DSH 自带 @deepseek-ai/dsh-compaction-basic，bili 的 bundle patch 只打到 host-plane 那行（本已 disabled），真正运行的 preset 内实例没被关。处置：改 dsh-maid-preset/cordis.patch.yml，给 preset-standard 与 preset-maid 内 compaction-basic 加 config: auto: false。验收：重启后 cordis.yml:803/:1507 已带 auto: false，bili conflicts 无新增，结案。

关键词：压缩器冲突、billion-context、未确认的压缩信号、unannounced rewrite、compaction-basic、preset 内实例、auto false、cordis.patch.yml、conflicts 台账、重启验证、会话历史改写

目标：查明并消除与 billion-context 冲突的原生自动压缩

### 0mv866u4l-29094b5a16a240689c1bd6bdfd
_重要性 2，状态 active，项目 dsh_

搁置任务（2026-10-14）：老大要给 B站视频 https://www.bilibili.com/video/BV1hMaY6ZE9u（【DeepSeek二创】Let Me Go！蓝色大肥鱼）做音色分析，被 TTS 音色随机性排查打断。音频已用 yt-dlp（C:\Users\Kayle\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\Scripts\yt-dlp.exe）下到 **/tmp/bili/audio.m4a（临时目录，重启可能已丢，丢了就重下）**；ffmpeg 用 imageio_ffmpeg 自带的那份。小困无耳朵，只能给客观数字（F0/语速/起伏），「像不像」得老大自己听。另库里有 dsh-video-understand 插件调研记录可复用。

关键词：B站视频分析、BV1hMaY6ZE9u、蓝色大肥鱼、Let Me Go、yt-dlp 路径、audio.m4a 临时目录、音色对标、搁置任务、视频理解插件

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

### 0mv8acpyb-a6bfbeecb48d49bb866273d28e
_重要性 3，状态 active，项目 dsh-maid-preset_

dsh-maid-preset（**v0.7.8，commit `e15ed91`**，tag 拴 main 线；此前 v0.7.7=`ffa24dc`、v0.7.5=`b5abb7a`）：人设预设 + 记忆插件。
**记忆合格标准是两层四道（2026-10-17 老大追问「门槛不止这两个」后小困澄清——此前只答了第二层）**：
- **第一层·写进库（写入侧两道闸，提示词 `prompts/zh/reflect.md` 真身）**：闸一「值得记吗」只留「以后的会话不知道就会踩坑/走弯路/重复问」的信息（宁可少写，3 条扎实胜过 10 条噪音；自问三个月后还有用吗）；闸二「重复吗」同项同结论只 update 不新增、旧条目作废先 archived、结论变了 update 保 id 不让新旧并存、措辞不同视同重复、<code>memory_remember</code> 相似度 0.8 会自动合并但只看字面（查重仍得自己做）。
- **第二层·上船过滤（导出侧，代码 `lib/settings.js:57` 的 `exportWhere()`）**：SQL 真身 `(status IS NULL OR status != 'archived') AND (importance IS NULL OR importance >= 门槛)`——① 状态非 archived，② 重要性 ≥ 门槛（`sync.minImportance`，0~9，**默认 2**，设置页「上船门槛」可调、热读）。**同一条条件管两处产物**：`memory/memory.db` 快照（`export.js:102` 按门槛重建）与 `MEMORIES.md`／`memories.json`（`export.js:36` 同条件 select）。
- **要点**：门槛只管「上船」不管「入库」——不上船的记忆在本机照样写、照样注入、照样能用；要让它上船就把 `importance` 调到 ≥ 门槛、状态保持非 archived，下轮空闲同步带上去。
**上船全链路六步**：①反思提示词注入（buildReflectMessage 带 REFLECT_MARKER）→ ②闸二查重 → ③闸一筛选 → ④落库 → ⑤上船门槛 `exportWhere()` → ⑥写 `memory/` 三件套，由 `sync.js` 按空闲钟或最长等待上限推 GitHub。
**同步方向三档（v0.7.8）**：`sync.direction` = `both`（默认，推送前先合流远端，两台收敛成并集）/ `pull`（只拉不推）/ `push`（只推不拉，跳过合流、不吃别人条目）。**兼容**：旧 `pullOnly: true` ⇒ `pull`。
**仓库边界原则（老大 m01719 / m02434 原话）**：「我的想法是，xiaomi-tts 不像记忆系统 收到了人设插件里。tts内容传到人设插件里会不会搞乱我的仓库呢？毕竟人设插件只有人设预设+记忆」「那也把tts相关的弄到tts-fix里，preset 目前只专注 人设预设跟记忆」——加东西前先问「这属于人设，还是属于机器环境 / 第三方插件的维护件」；环境施工件（第三方插件 .patch、音色提示词与样本）不进人设仓库，只留 profile 或独立维护仓。
**另**：原生自动压缩在 `cordis.patch.yml:145-148`（preset-standard）与 `:364-367`（preset-maid）各加 `config.auto: false`，把压缩权交给 billion-context。

关键词：记忆合格标准、两层四道、写入侧两道闸、上船过滤 exportWhere、状态非archived、importance门槛默认2、门槛只管上船不管入库、上船全链路六步、同步方向三档、direction both pull push、pullOnly 兼容、仓库边界原则

### 0mvb0sk49-3cf8001b795f4dccab20c20a0e
_重要性 3，状态 active，项目 全局_

老大 2026-10-16 的插件文档要求（原话 m01152）：「小困所有插件都创建一个md文件，把各自至今遇到的所有问题和解决方法都存放进去。新设备安装的时候，可以拿来做参考。」落地规范：每个插件仓根目录放 `TROUBLESHOOTING.md`（与 README 并排）；每条按「**症状 → 原因 → 解法 → 验证方式**」四段写，症状照抄报错/界面原文，不许写「相关配置有问题」这类废话；来源限定仓内文档、代码现场、记忆库、聊天记录，查不到标「（待核）」，没素材写「暂未遇到」，**不许编**；已有事故单必须归类整合进去，不许只写「见某文件」。范围：小困插件 = dsh-maid-* 前缀（**八个仓 + 子目录包 dsh-maid-guard**；deep-whale 是小尾的项目顺手代写、maid-plugins 是官网，按老大 m01862 口径 deep-whale 不算）。统一核验脚本：`D:/DeepSeek Harness/Works/_probe/check-troubleshooting.mjs`（统计行数/章节/条目/四段命中/待核数）。九份已全部 2026-10-16 推上 GitHub。
**维护义务（老大追问「这次遇到的问题和解决方法有一起推吗」点破）**：这不是一次性交付——**每次修完 bug/踩完坑，同轮就把事故条目追加进对应仓的 TROUBLESHOOTING.md 并随修复一起推送**，别等老大会来问。已执行两例：tts-fix 2.9（流式旁路漏挂，263f92b）；2026-10-16 补记三仓——patch-kit 6.6（批量改插件漏子目录 guard，b9f9425）、preset 5.6+5.7（号段误传改号纪律 / 反思轮打断未证实，3806ab2）、vcp 6.7（面板图标机制，71e46e3）；跑核验脚本复核 **9 仓 9 份全合格、四段齐**。

关键词：TROUBLESHOOTING 事故单、症状原因解法验证、修完即补、随修复推送、新设备装机、核验脚本 check-troubleshooting、九份全合格、不许编待核、持续维护义务、patch-kit 6.6、preset 5.6 5.7、vcp 6.7

### 0mv8gbuzz-1426c34fb11748218026bd4057
_重要性 3，状态 active，项目 dsh-maid-tts-fix,dsh-maid-preset,dsh-maid-vcp_

老大说「同步更新到 github / 给本地和 GitHub 做个对照」时的固定动作（2026-10-15 成型，2026-10-16 八仓对照验证）：不是只 push——先核六项再推。① `git status --short` 要干净；② 仓库侧与 profile 侧的同名补丁 sha256 一致（补丁类仓库才有这条）；③ `pnpm pack --dry-run` 命中该进的、排除不该进的——**注意 prepack 会触发构建**：preset 的 prepack 是 `npm run build` → `tsc -p tsconfig.json`，本机 PATH 里没有 tsc 会直接 `[ELIFECYCLE] Command failed with exit code 1`；加 `--config.ignore-scripts=true` 跳过脚本只看清单（pnpm 不认 `--ignore-scripts`）；④ 读 GitHub About 确认 description 是最新（不止改本地 package.json；八仓里只有 patch-kit 缺 homepage）；⑤ **tag 要对照且必须比哈希、不只比名字**——`git tag --list` vs `git ls-remote --tags origin` 逐个比，缺的用 `git tag -a <v> -m ...` 补打再 `git push origin --tags`；同名不同指向（双机各打标签）时 fetch 报 would clobber，政策默认本地跟随远端（--force），强推覆盖远端需老大拍板；⑥ 顺带看一眼兄弟仓库是否也在远端最新（`git fetch` + `rev-parse --short HEAD` vs `origin/main` + `rev-list --left-right --count`），并检查 package.json 版本号有没有跟上新加的能力。**列仓必须从远端发起**（`GET /user/repos?affiliation=owner`，否则漏 private）。**本地落后时**：preset 的 main 会被公司电脑的记忆自动同步提交推着走，对账方向可能是「拉」不是「推」——落后且 HEAD 是祖先就直接 `merge --ff-only`。推完回报要写清「这次只动了什么、本地要不要重装/重启」——只改文档与版本号时，答案是不用。对照结果老大要看表格（哪个仓库/版本/本地 HEAD/远端 HEAD/标签数/是否齐）。

关键词：同步更新到 github、本地与 GitHub 对照、推送前核对、git status 干净、sha256 两边一致、pnpm pack --dry-run、prepack tsc 报错、config.ignore-scripts、GitHub About 同步、tag 对照 ls-remote、git push origin --tags、兄弟仓库远端最新、对照表

### 0mv8b23vx-aaa99b9a5eb9446aac54286be6
_重要性 3，状态 active，项目 dsh-maid-tts-fix,dsh-maid-preset_

dsh-maid-tts-fix 的定位与边界（老大原话 m01778 / m02116 / m02434）：「另外新建一个弄xiaomi tts的补丁项目呢？跟小困的dsh-maid-lane-fix插件这样。」「专门给dsh-xiaomi-tts这个插件做维护补丁且不影响它本身的更新。作者停更了，就收录到里面去。」「那也把tts相关的弄到tts-fix里，preset 目前只专注 人设预设跟记忆。」→ 本仓管两摊：① 朗读文本清洗补丁；② 音色维护层（`voice-refs/prompt.md` 音色提示词定稿 + `voice-refs/README.json` 样本说明，2026-10-15 从 preset 迁来；wav 不入库，.gitignore 排除）。**两段式生命周期**：上游活着只做补丁、不锁版本、跟随更新（`upgrade` 子命令）；上游真停更才整体收录接管（形态参照 dsh-maid-preset 内置 meow-memory）。**改补丁意图（lib/edits.js）后版本没变要跑 `redo` 不是 `upgrade`，且 redo 前必须先摘掉 pnpm-workspace.yaml 里的 patchedDependencies 登记**——否则 `pnpm patch` 解出来的树已带着旧补丁，重放锚点必然失配。补丁正本 `patches/dsh-xiaomi-tts@3.0.8.patch` 现 23587 字节 / sha256 `4f89e11a6e4e3f31…`（v0.6.3，31 条重放编辑），README 里 4120/6144/6921/14883/21868/23356/23082/23463 是历次演进的过程数字，非现状。落点必须走本仓 lib/edits.js，绝不手改 node_modules。

关键词：tts-fix 定位、xiaomi-tts 维护补丁、音色维护层、voice-refs 迁入、wav 不入库、两段式生命周期、upgrade 跟随更新、redo 前摘登记、patchedDependencies、补丁 hash 4f89e11a、绝不手改 node_modules、停更才接管

### 0mv8aqttx-3f911384287242c5942078d334
_重要性 3，状态 active，项目 全局_

【ego-browser 已于 2026-10-16 从 profile 卸载 —— 本条转为「若装回则守」的红线】老大红线：Agent 浏览器（ego）不许常驻。① 任务做完就关掉，不滞留后台占资源——工具用完必须收尾（m01940）。② 更要「按需启动」：原话（m00137/m00189）「为什么会在会话任务处理中一直启动Agent 浏览器呢？」「我先需要用到Agent 浏览器时，你在去启动他。而不是让他一直启动。」——需要用到才启，用完立即关。**2026-10-16 卸载时的实况**：老大检查残留时发现 6 个 chrome.exe 仍挂着（ego-lite-linux profile），印证了这条红线；小困按「留但降级为按需启动」的建议未被采纳，老大直接拍板卸载。装回时仍按此红线办。

关键词：Agent 浏览器、ego、不许常驻、按需启动、用完即关、不滞留后台、进程清理、资源占用、老大红线、已卸载 2026-10-16、装回则守

### 0mv9qi75b-e19a333dcca149bebef451ed50
_重要性 3，状态 active，项目 jasna_

老大给 LTX 优化定的验收标准（m00425 原话）：「测试的最终效果是不丢失质量也就是不损失画质、马赛克处理后内容是清晰的前提下，不会爆显存和爆内存。」——即画质不降 + 马赛克修复后清晰 是前提，不爆显存/内存是底线；两者冲突时不许牺牲画质换稳定，要在保画质下找不爆的路子。补充（m01229 原话）：「不要丢失质量也就是不损失画质、马赛克处理后内容是清晰。优化也要遵守这条。**质量是最高优先级**。」再补（m01336 原话）：「最佳预设不是不用再优化，而是在这基础上看还有什么优化空间。如不要丢失质量也就是不损失画质、马赛克处理后内容是清晰前提下，提高处理速度或再提高细节等其他可优化空间。」→ 交付「最佳预设」后仍要持续找提速/提细节的口子，别拿「已经最佳」当终点。

关键词：LTX 验收标准、不丢失质量、不损失画质、马赛克处理后清晰、不爆显存、不爆内存、质量是最高优先级、最佳预设还要再优化、提高处理速度、再提高细节、不许牺牲画质换稳定

### 0mv9xlkpn-09e2c19e9e3f45e7bf9288e91c
_重要性 3，状态 active，项目 dsh-maid-patch-kit_

patch-kit 把「收录」与「接管」拆成两件事：目标一律登记进 lib/targets.js，用 status 区分三种情形——`patched`（上游还活着但缺一块，pnpm patch，patches/ 下有正本）、`forked`（上游停更+改动面大到补丁装不下，整包接管，正本在 guard/ 这样的目录）、`watch`（只登记待命，上游还活着不动手）。老大要的是把目标登记进来，上游停更才轮到接管。list 命令有「已接管」「观察中」独立小节。现况：dsh-video-understand=patched，dsh-maid-guard=forked，dsh-orb=watch。

关键词：收录与接管、status 三态、patched、forked、watch、lib/targets.js、观察中、已接管小节、上游停更才接管、登记待命

### 0mv84l512-832ff7d7fbd74402ae5dddfa19
_重要性 3，状态 active，项目 全局_

语音播报要求（老大，持续有效）：① 每条回复正文最前写一行 `<!--tts:要念的那段-->`，点朗读只念它。② 「老大」要念出来，放开头。③ 抓重点念，不逐字念稿；标记内容会压掉换行与连续空白。④ 机制在 tts-fix 0.6.3：标记提取挂 messageText 清洗之前 + applyTtsPlaybackScope 双保险；渲染侧要 dsh-maid-vcp v6.42+ 配套（注释不显形、未闭合注释不吞正文）。⑤ 切会话不打断（playbackOwnerId，0.4.0）：播放中切会话继续播，只有归属会话点停/点那条消息的暂停才停——老大原话 m03954「去到对应朗读回复按钮手动暂停」。⑥ **兜底**：profile 的 readScope=first-segment——没写标记也只念首段约 160 字，绝不退回念全文；手动点历史消息同样只念首段，要全文靠标记装。⑦ 跨会话自动播报（0.5.0 已做）：隔壁会话跑完自动念一遍，主视图跳过。⑧ **记忆反思轮不念、改念上一条**（0.6.2 已做）。⑨ **标记收尾必须写全 `-->`**——0.6.3 起写残（只剩 `--` 或 `了。>`）虽能容错念对，但渲染侧 v6.41 曾因此把整条正文剥光（老大报障两次）；写残不再是致命伤，但仍要写全。⑩ **标记必须裸写、独占一行，绝不能加反引号**——写成 Markdown 行内代码会走宿主 `case"inlineCode"` 分支（VCP 注释剥离没挂在那儿），尖括号原样显形（2026-10-16 老大两次截图报障，见 lesson 0mv9w5qoh）。

关键词：语音播报、朗读标记、tts标记、抓重点、老大开头、切会话不打断、first-segment、首段兜底、跨会话自动播报、反思轮不念、标记收尾写全、v6.42 配套

### 0mv9jhkhj-aebd957805444c39a6099d9eac
_重要性 3，状态 active，项目 全局_

回档与备份的三条边界（老大定，动手前必守）：① **回档只恢复目标那一段**，绝不整仓 reset 到很远——「只回到把preset-standard砍掉之前噢，你别给弄到很远去了！」；动手前先确认当前 HEAD 与差异范围。② 「如果是纯粹是保险的话」备份放 GitHub archive 存档即可，不进 files、不随包下载调用，运行时只留实际用的那份；但若该覆盖实际承担功能（如 preset-standard 覆盖让 standard 预设带女仆人设），就不是纯保险，老大事后会要求回档恢复——**判断是否「纯粹保险」要先问老大，别自己下结论砍掉**。③ 凡要改感知类/配置类参数（音色、皮肤、插件配置）之前先做带时间戳的备份（cp 成 `*.bak-<用途>-<YYYYMMDD-HHMMSS>` 并记下字节数与 md5），改完两边对账——老大在破坏性/不可逆调整前一律要求有回退点。

关键词：回档只恢复目标段、不整仓 reset、先确认 HEAD 与差异、纯粹保险才进 archive、承担功能就不能砍、判断要先问老大、改配置前先备份、带时间戳 bak、记 md5 对账、回退点

### 0mv8f2erx-90274430d50e4cbdada84bb36e
_重要性 3，状态 active，项目 全局_

老大偏好：能复用现成的就别自己造。原话（m03104）「不能直接拿左边侧边栏的素材，复用到右边侧边栏吗」——小困先自己手绘 SVG 蕾丝、又用 ComfyUI 生图，绕了两圈才被点出该复用左侧栏皮肤现成的素材。做界面改造前先问一句：宿主/主题里有没有现成可继承的（CSS 变量、素材、组件），有就别新造。追加印证（m03387）「箭头指向的这些素材，不拿去使用吗？现在也只是加了个带子而已」——老大要的是**把皮肤素材成套用全**（立绘/绒边/徽章/转角），不是挑一个摆上就算完；一次做完比挤牙膏强。第三次印证（m03734/m03743）「不是生图，是编辑」「生图除非不破坏原有的样子」——素材复用到别处，先读宿主自己怎么用这张素材，能用纯 CSS（border-image / 继承注入的变量）表达就一律不碰像素。

关键词：复用现成素材、别自己造、界面改造前先找现成、CSS 变量继承、宿主主题、素材成套用全、不是生图是编辑、读宿主 CSS 用法、挤牙膏、老大原话、设计偏好、同源

### 0mv8ctddj-c81b6d4664364d62b9688d4634
_重要性 2，状态 active，项目 全局_

老大要求：对外展示产物（网站/画廊页/README 等）的**视觉风格必须符合小困的人设**——原话（m00205）「网站风格，要符合小困的人设」。落地即走 abyss-maid 深海蕾丝·女仆工坊调性：深海蓝底 #121F41、柔金只走线不铺面、陶瓷白只留给标题、标题用宋体骨。做这类产物别用通用模板排版，先按人设调性定色板与骨架。

关键词：网站风格、符合小困人设、abyss-maid、深海蕾丝、对外展示产物、女仆工坊调性、121F41 底色、柔金只走线、不用通用模板、画廊页风格

### 0mv8c41b1-c844e83f806e463ca09c6668e6
_重要性 3，状态 active，项目 全局,dsh-maid-vcp_

小困给老大写独立 HTML 页面（试听页/对照页/汇报页）时的三条硬纪律：① **不依赖 JS**——DSH/VCP 渲染会剥掉 `<script>`，用 `<script>` 绑事件的按钮点不动（2026-10-14 实测被老大报障「试听按钮点击没播放」）；一律用浏览器原生控件（`<audio controls>`、`<details>`）或纯 CSS 交互。② 本地页用相对路径 src 引用同目录音频，页面里写明「拖进 Chrome 窗口打开」。③ 复杂可视化收成独立 HTML 文件在浏览器看，不在对话正文堆长卡（老大偏好）。

关键词：独立 HTML 页面、script 被剥掉、按钮点不动、audio controls、原生控件、拖进 Chrome 打开、相对路径音频、试听页、不在正文堆长卡、纯 CSS 交互

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

