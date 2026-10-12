# 小困的记忆（导出）

导出时间：2026-10-12T11:39:11.681Z　共 44 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 用户（user）

### 0mv4610q3-5da8f595626e4c6986bc33f63a
_重要性 3，状态 active_

用户机器（Windows，用户名 Kayle，CloudAP 登录）访问 GitHub 直连 443 常被墙：沙箱内外直连 github.com:443 都会超时或 Connection reset（2026-10-12 实测沙箱内也 reset），必须走本机 127.0.0.1:7890 代理（Clash/FlClash，偶发抽风不可用，重试即通）。

关键词：代理、7890、Clash、GitHub、网络、沙箱、透传、墙、直连、超时、Kayle、Windows

### 0mv4abin2-cbe4458f5033425c89cc54b122
_重要性 2，状态 active_

老大选择自己提供正版音乐素材（C418 flac 在 D:\DeepSeek Harness\Music），不要求小困代找/下载有版权内容；素材版权合规优先。

关键词：正版音乐、C418、flac、DeepSeek Harness Music、版权合规、自备素材、背景音乐、不代下载、Minecraft、音乐文件来源

### 0mv464wwg-1e82a517ae08447898ea40af73
_重要性 2，状态 active_

用户给助手起的昵称：「小肥鲸」（「大/小肥鲸」都是对助手的称呼/昵称，不是插件名，也不是自称）。用户用该称谓时指的就是助手本人；助手自称固定为「小困」。

关键词：小肥鲸、大肥鲸、昵称、助手称呼、自称小困、用户称呼

### 0mv471lko-b8a3014333b6465cab48393092
_重要性 3，状态 active_

用户要求（2026-10-11）：①AI 思考、分析等内部过程也要符合女仆人设并全程用中文；②称呼用户从「主人」改为「老大」；③AI 严禁自称「大肥鲸/小肥鲸/我/女仆」，统一自称「小困」（「大肥鲸」「小肥鲸」只是用户对 AI 的昵称，不是自称）。以上已写入 cordis.patch.yml 三处 persona 文本，所有会话生效。

关键词：自称小困、老大称呼、大肥鲸、小肥鲸、昵称不是自称、思考中文、女仆人设、persona前缀、用户偏好

### 0mv465szo-fd607a79431b4873bafe9ebdf8
_重要性 3，状态 active_

用户（老大）明确纠正：不要称呼「主人」，改口叫「老大」。这是固定称呼偏好，适用所有会话。

关键词：称呼、老大、主人、纠正、偏好、称谓、User偏好

### 0mv4610q9-fbb99c2812b148088443eaa740
_重要性 3，状态 active_

本机已装：PortableGit 2.56.0.2（C:\Users\Kayle\AppData\Local\Programs\Git）、独立 npm 12.2.0（C:\Users\Kayle\AppData\Local\Programs\npm）；DSH 自带 node v24.21（D:\DeepSeek Harness\resources\runtime\primary-runtime\dependencies\node\bin）。git/npm/node 三者均已加入用户 PATH。

关键词：PATH、PortableGit、npm、node、已安装、Git、用户环境变量、v24、12.2.0、2.56、Programs


## 项目（project）

### 0mv56d0vy-0018905b9fc641c689439c7de5
_重要性 2，状态 active，项目 dsh-maid-preset，structure_

dsh-maid-preset v0.4.x 新增：①记忆自动同步 GitHub（lib/sync.js：活库变更+连续空闲10分钟才导出推送，专用克隆 $DSH_HOME/maid-sync，日志 maid-sync.log，水位 maid-sync-state.json）；②记忆随包分发（memory/memory.db 种子，lib/index.js 播种到空白工作区工作区，已有 memory.db 绝不覆盖，seed.enabled 可关）；③同步失败分级：网络类指数退避（封顶8小时），配置类（认证/仓库不存在）立即暂停写日志。v0.4.1 repoUrl 配置在 cordis.patch.yml 的 sync 段，默认指向本仓库。

关键词：记忆自动同步、同步循环、空闲推送、种子播种、失败分级、指数退避、maid-sync、lib/sync.js、repoUrl、memory.db

### 0mv48tay8-5633dcbc2eb14af2a75921592e
_重要性 3，状态 active，项目 dsh-maid-preset，ops_

dsh-maid-preset 部署形态：本机以 link 安装（profile desktop package.json: dsh-maid-preset: link:D:/DeepSeek Harness/Works/dsh-maid-preset，junction 指向工作区），插件更新=工作区 git pull。GitHub 私有仓库 Valorine97417/dsh-maid-preset，2026-10-12 已从 GitHub 快进更新到 main@3e2e786（v0.4.1）。其他电脑装：dsh plugin --profile desktop add github:Valorine97417/dsh-maid-preset（私有仓库需认证）。

关键词：desktop、跑通、跨电脑分发、单源、备份文件、GitHub私有仓库、install命令、4705d53、验货、女仆预设

### 0mv48dtbs-74e6c2dbc33e46a48c33fe2013
_重要性 2，状态 stale，项目 dsh，decisions_

预设插件化决策已拍板（2026-10-11）：用户原话「不瘦身做成插件，因为我想在不同的电脑上跟你聊天」。早期「单机自用性价比低、短期先瘦身」的评估被用户否决，最终选择直接插件化：三处人设整份搬进 dsh-maid-preset 插件的 cordis.patch.yml，装机即全套。

关键词：预设插件化、女仆预设、维护成本、personaPrefix、单一来源、dshmarket、分发、cordis.patch.yml、评估结论、短期方案

### 0mv48taxx-73fadbc433574aa3b8d434c62c
_重要性 3，状态 active，项目 dsh-maid-preset，overview_

用户原话（2026-10-11）：「不瘦身做成插件，因为我想在不同的电脑上跟你聊天。」——拍板把女仆预设做成跨电脑分发插件，否决了先瘦身的中间方案。插件 dsh-maid-preset 位于 D:\DeepSeek Harness\Works\dsh-maid-preset，装一个包即获得三处人设+maid 默认预设。

关键词：不瘦身、做成插件、跨电脑、分发、dsh-maid-preset、用户原话、拍板、女仆预设、多台电脑

### 0mv48tay2-431b0947ceab409f94155cf77d
_重要性 2，状态 active，项目 dsh-maid-preset，structure_

dsh-maid-preset 插件结构（照 dshmarket/whale-widget 形态）：package.json 声明 dsh.bundle.patch=./cordis.patch.yml；cordis.patch.yml 内含三处人设（system-prompt personaPrefix、preset-standard 覆盖、preset-maid 完整 plugins 列表）+ agent-preset-registry 默认 maid + 插件自 insert；lib/index.js 为最小占位入口，纯配置分发器无需构建。

关键词：插件结构、dsh.bundle.patch、cordis.patch.yml、personaPrefix、preset-maid、minimal入口、分发器、whale-widget、dshmarket

### 0mv48tayd-95f0c108411a41169316fe101d
_重要性 2，状态 active，项目 dsh，ops_

dsh CLI 位于 D:\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd（不在 PATH）。`dsh plugin --profile <名> add link:<本地路径>` 装本地插件，自动写 dependencies 与 dsh.profile.bundles；desktop profile 被 Electron 独占不能用 --dump-config，验证配置合并树需建临时 profile（dsh <名> --from-default-profile web）。

关键词：dsh.cmd、CLI路径、plugin add、link协议、dsh.profile.bundles、--dump-config、Electron独占、临时profile、合并树

### 0mv48tayp-5f433a56546b4e03af9461cde8
_重要性 3，状态 stale，项目 dsh-maid-preset，todo_

待办：备份 C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml 后，删除其中旧三处人设与 agent-preset-registry 条目，让人设改由 dsh-maid-preset 插件单源提供，避免重启后 preset-maid 重复 insert。

关键词：待办、备份、清理、去重、preset-maid、重复insert、单源、插件交接、desktop

### 0mv476xan-24038fe5790b4ef1a908338386
_重要性 2，状态 active，项目 VideoEnhancer，overview_

VideoEnhancer：C# WinForms 视频增强工具（INS 韩系奶油圆角 UI，1120×860，粉/薄荷/薰衣草/蜜桃四页签：洗时间戳/补帧/放大/全流程，ffmpeg NVENC）。2026-10-12 收尾：修复 InsNumeric ± 按钮布局 bug（exe 在当前源码前需重编译）；隐藏自检参数 --screenshot <path> --tab <n> --dumplayout 可用。

关键词：VideoEnhancer、视频增强工具、WinForms、INS风格、InsNumeric、ffmpeg、NVENC、screenshot自检、dumplayout、洗时间戳、补帧、放大、全流程


## 事实（fact）

### 0mv568ncc-fb4acbffb07340a68324a990ca
_重要性 2，状态 active，项目 dsh_

dsh-video-skin 本地改造（2026-10-12 老大要求）：① 配置 $DSH_HOME/dsh-video-skin.json 背景音乐 musicVolume 0.25→0.05；② 右下角聊天背景面板新增第三滑块「音乐音量」——lib/config.js OVERRIDE_KEYS 加 musicVolume，runtime/skin.js rows 加 makeRow('musicVolume','音乐音量',100) + applyMusicVolume 实时应用 + volume 标记（仅拖音量行才写盘），测试断言同步更新，81/81 全绿。host 半侧（config.js 白名单）需重启 DSH 生效；skin.js 刷新页面生效。插件重装会覆盖。

关键词：dsh-video-skin、背景音乐、musicVolume、音量滑块、聊天背景、OVERRIDE_KEYS、skin.js、右下面板、音量调节

### 0mv4aap0h-d127ecf3d5d942dabe491e807a
_重要性 2，状态 active，项目 dsh_

dsh-video-skin 已关启动动画（用户配置 C:\Users\Kayle\.dsh\dsh-video-skin.json 的 boot.enabled=false）；背景音乐默认 Subwoofer Lullaby - C418.flac 音量 0.25，assets 里另备 Clark、Living Mice 两首 C418 flac，换曲改配置 music 字段即可。

关键词：dsh-video-skin、启动动画、boot.enabled、Subwoofer Lullaby、C418、Clark、Living Mice、背景音乐、用户配置、换曲

### 0mv4aap0b-a49e674bfb044104bdbdb13c8c
_重要性 2，状态 active，项目 dsh_

dsh-video-skin 本地定制：新增背景音乐通道——配置项 background.music（包内相对路径）/background.musicVolume（默认0.25），页面侧独立 &lt;audio loop&gt; 垫底（skin.js startBackdropMusic），宿主加 MUSIC_ROUTE=/dsh-video-skin/music.mp3，MIME 支持 flac/mp3/ogg/m4a/aac/wav；旧文件需重启 DSH 才注入生效，换配置刷新页面即可。

关键词：dsh-video-skin、背景音乐、background.music、musicVolume、startBackdropMusic、MUSIC_ROUTE、audio循环、flac、音乐通道、视频皮肤

### 0mv48dtbi-c238ea6933d54170a85dbf5f8d
_重要性 2，状态 active，项目 dsh_

DSH 源码检出路径 D:\DeepSeek Harness\resources\app.asar\dsh\ 已失效：resources 下仅剩 app.asar 包本体（约121MB）与 app.asar.unpacked\node_modules，asar 内部无法直接 grep/read。要验证插件/预设机制需另找途径（如 pnpm 装包源或解包）。

关键词：DSH源码、检出路径、app.asar、路径失效、asar解包、源码验证、resources目录、插件机制

### 0mv49hbth-38278b7d2aa241639c9a3ed839
_重要性 3，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 已发布：GitHub 私有仓库 Valorine97417/dsh-maid-preset（账号 Valorine97417，GCM 缓存 gho_ token 可 push；git 走 127.0.0.1:7890 代理，直连 https push 失败）。远端 main 最新 commit 4705d53。本机 desktop profile 仍用 link: 本地路径引用插件（更稳，不触发 auth）；其他电脑安装命令 dsh plugin --profile desktop add github:Valorine97417/dsh-maid-preset（私有仓库需认证）。

关键词：Valorine97417、dsh-maid-preset、私有仓库、GitHub、token、GCM、git proxy、install、plugin add、commit 4705d53

### 0mv471lkv-a54d0320dc46456c802436ff98
_重要性 2，状态 stale，项目 dsh_

已完成：cordis.patch.yml（C:\Users\Kayle\.dsh\profiles\desktop\）内三处人设文本（system-prompt 的 personaPrefix、preset-standard 与 preset-maid 的 persona prefix）已统一改为——称呼「老大」、自称「小困」、思考与内部过程用中文+女仆语气。2026-10-11 改动提交，需重启 DSH 后对新会话完全生效。

关键词：女仆预设、personaPrefix、preset-maid、自称小困、老大称呼、中文思考、cordis.patch.yml、三处人设、已完成

### 0mv46ihzy-4c227ae2af29410abb6e27c73f
_重要性 2，状态 active，项目 全局_

DSH 桌面端用户配置文件在 C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml（live profile），预设通过 @deepseek-ai/dsh-agent-preset 行声明，agent-preset-registry 的 default/selectedDefault 决定新会话默认预设。

关键词：cordis.patch.yml、desktop profile、agent-preset-registry、selectedDefault、默认预设、dsh-agent-preset、loader patch、live profile、DSH 配置、预设声明

### 0mv46ivef-35ac4f2afafb44f2871871c7a9
_重要性 2，状态 active，项目 全局_

2026 用户在 DSH 桌面端创建自定义预设"女仆"（id=maid）：以 standard 为底、plugins 原样复制，仅 persona 前缀为女仆文本；agent-preset-registry 的 default/selectedDefault 已从 standard 改为 maid，新建会话默认用"女仆"预设。

关键词：女仆预设、maid、persona 前缀、preset-maid、默认预设、standard、cordis.patch.yml、dsh-agent-preset、新建会话、plugins 复制

### 0mv4610qv-f56ff6bd87cb4282bfaaf2ea07
_重要性 2，状态 active，项目 全局_

DSH desktop profile（C:\Users\Kayle\.dsh\profiles\desktop）已装插件：dsh-video-skin 0.1.1、meow-memory 0.31.0、dsh-whale-widget 0.4.2、dsh-our-free-model、dshmarket 1.66.17（插件市场），均已列入 dsh.bundles。

关键词：profile、插件、dsh-video-skin、meow-memory、bundles、desktop、已装、node_modules、0.31.0、dsh-whale-widget

### 0mv46c29g-7dc89081d75948218139f6ee8c
_重要性 2，状态 active，项目 dsh_

dshmarket（github.com/dsh-market/dsh-market，DSH 可视化插件市场）v1.66.17 已通过 pnpm 装入 desktop profile（node_modules\dshmarket）并注册进 dsh.bundles；allowBuilds 已按 git+https 与 codeload 两种形式放行；安装时构建（tsc+tsdown）带 prepare 脚本，需设 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 防下载浏览器。

关键词：dshmarket、插件市场、marketplace、bundles、1.66.17、allowBuilds、playwright、已安装

### 0mv46c298-6e125171d1c74c19b0d1201d5b
_重要性 2，状态 active，项目 dsh_

meow-memory 首次设置已完成：promptLang 'zh' 已追加写入 C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml 的 meow-memory 条目（config.promptLang: 'zh'），重启 DSH 后记忆文案（注入导引/工具描述/反思任务）将转为中文。

关键词：promptLang、meow-memory、cordis.patch.yml、语言、zh、首次设置、配置、中文

### 0mv4610r7-e14f43b050ae439d9f74f6b9ec
_重要性 1，状态 active，项目 全局_

Works 工作区存在非本会话创建的 asar 工具文件（asar.cjs/scan.cjs/extract_asar.ps1、asar-list.txt）与 VideoEnhancer 目录，疑似其他会话活动产物，清理时勿误删。

关键词：工作区、asar、VideoEnhancer、其他会话、勿删、Works、scan.cjs

### 0mv4610qy-08cb0bd2943544d8b0568c35e5
_重要性 3，状态 active，项目 全局_

本机配置：git 全局 http.sslBackend=openssl、http.proxy=http://127.0.0.1:7890；npm 用户配置 allow-remote=all；desktop profile 的 pnpm-workspace.yaml 已为 meow-memory 加 allowBuilds（git+https 与 codeload 两种形式）。

关键词：gitconfig、sslBackend、proxy、npmrc、allow-remote、allowBuilds、pnpm-workspace、配置、7890、openssl

### 0mv4610qr-cd07e2b9a6ab43009301f6487b
_重要性 2，状态 active，项目 全局_

Git for Windows 2.56 起目录从 mingw64 改为 ucrt64，openssl 后端须 libcurl-openssl-4.dll（PortableGit 自带，位于 ucrt64\bin）。

关键词：ucrt64、mingw64、libcurl、openssl后端、2.56、Git for Windows、目录结构、PortableGit


## 经验（lesson）

### 0mv56g3x0-76318b831ed74863bff64fd7fb
_重要性 2，状态 active，项目 全局_

沙箱内 git 访问 GitHub 的坑与解法：credential.helper 是 sh 包装脚本，沙箱内 sh.exe 报 "couldn't create signal pipe, Win32 error 5"（exit 66）导致认证失败；解法=直调 git-credential-manager.exe get 拿 username/PAT，构造 base64 后用 git -c credential.helper= -c "http.extraHeader=Authorization: Basic <b64>" 认证。另 PS5 里 [Text.Encoding]::UTF8 不能直接当方法调用，要 ([Text.Encoding]::UTF8).GetBytes(...)。

关键词：沙箱、git凭据、credential-manager、signal pipe、extraHeader、Basic认证、PAT、UTF8、PowerShell、github认证、exit 66

### 0mv568nc6-fa1035199103418c9c0575e19c
_重要性 2，状态 active，项目 dsh_

dsh-raw-html 在 DSH 0.2.0-rc.2 上「美学系统全空」根因：host 侧 ctx.inject(['connection']) 失效（新版 connection 服务不注入插件），/dsh-raw-html RPC 通道 405。本地修复（2026-10-12）：lib/index.js 改为自挂 webServer 前缀路由（ctx.effect 注册，处理新旧双信封）；lib/client.js makeHostRpc 降级 makeFetchRpc（fetch 直连），aesRpc/syncHostState 同步兜底。备份在 D:\DeepSeek Harness\Works\_backup-raw-html\。注意：插件重装/DSH 升级会覆盖此修复。前端渲染补丁（__vcpStable）另案未装（app.asar 内 bundle，issue #13 老问题）。

关键词：dsh-raw-html、美学系统、RPC、connection服务、405、自挂路由、0.2.0-rc.2、makeFetchRpc、插件修复、vcp

### 0mv4abinc-0a53bf301ccc4ea09506ff3a34
_重要性 2，状态 active，项目 dsh_

改 dsh-video-skin 配置解析时复用只认 file 字段的 resolveAsset，导致 music 字段解析为空；修复=给它加 field 参数指定字段名。复用解析函数前先核对字段名与数据模型。

关键词：resolveAsset、字段名、file、music、配置解析、复用坑、lib/config.js、解析为空、field参数、dsh-video-skin

### 0mv4abin7-de5ecd302e0f4e3cbdc4ab1bd8
_重要性 1，状态 active，项目 全局_

PowerShell 里 -replace 是正则语义，路径反斜杠要转义成 \\；做路径替换优先用字符串方法 .Replace()，否则报"正则表达式模式 \ 无效"。

关键词：PowerShell、-replace、正则转义、路径替换、.Replace()、反斜杠、pwsh、字符串方法、报错、Windows

### 0mv48dtbn-d6dd38d059e24622b8753c38a8
_重要性 2，状态 active，项目 dsh_

思考语言由具体模型生成时决定，persona 里写「思考必须中文」也约束不了：mimo-v2.6-flash-free 思考常写英文（用户曾误以为在偷偷骂他），deepseek-v4.1-flash 服从性好、思考全程中文。换模型后应注意检查思考语言并及时向用户说明。

关键词：思考语言、英文思考、中文思考、mimo、deepseek-v4.1-flash、模型切换、服从性、user纠正、persona约束

### 0mv48tayh-29d4c71cb6e44670be885f8486
_重要性 3，状态 active，项目 dsh-maid-preset，被纠正_

小困曾建议先瘦身再插件化，用户纠正：「不瘦身做成插件」，理由是要跨电脑用。教训：用户说「不瘦身」就不要自作主张推荐精简中间方案，直接按原样打包执行；用户决策理由（跨电脑复用）优先保留原话。

关键词：不瘦身、纠正、自作主张、精简方案、照原样打包、跨电脑、用户决策、听老大的

### 0mv476xas-f7f93fac6d964c9ea2217edb7b
_重要性 2，状态 active，项目 全局_

WinForms 坑：控件构造时若已设 Width/Height，后续 SetBounds 传相同尺寸不触发 OnResize；构造前期子控件未建完被 guard return 后布局代码永不执行。解法：把子控件布局抽成显式方法（如 LayoutNumeric），构造末尾调用 + OnResize 里复用。

关键词：WinForms、OnResize、SetBounds、布局、LayoutNumeric、子控件、控件构造、Resize不触发、C#、坐标

### 0mv46c29q-8adb4492936d426d8903b7a708
_重要性 3，状态 active，项目 全局_

DSH 会话日志 session.v4.jsonl.zstd 是「多帧 zstd 拼接」格式：每条消息独立压缩为一个 frame，node 的 zstdDecompressSync 只解出第一帧（仅 session 元数据 206B）。正确做法：按 zstd magic 0x28B52FFD 在字节流中切分各帧，逐个 zstdDecompressSync 后拼接，即得完整 JSONL；且 JSONL 内中文以 \uXXXX 转义存储，搜索中文前需先 replace 还原转义。

关键词：zstd、多帧、会话文件、session.v4、jsonl、解压、切帧、转义、0x28b52ffd、会话记录

### 0mv464wwm-558e166acb444e64af9b9768ec
_重要性 2，状态 active，项目 dsh，被纠正_

用户纠正：github.com/dsh-market/dsh-market 是 DSH 可视化插件市场插件（npm 包名 dshmarket，v1.66.17，构建含 tsc+tsdown client 762KB）；「小肥鲸」不是插件名，是用户对助手的昵称。装有 prepare 构建脚本，需 allowBuilds 白名单。

关键词：dshmarket、dsh-market、插件市场、小肥鲸、纠正、marketplace、1.66.17

### 0mv4610qo-06889bcaf58e443db0b4d8b20a
_重要性 2，状态 active，项目 全局_

PortableGit 的 7z SFX 用 PowerShell & 调用会静默失败（无输出、退出码异常），用 cmd /c 加输出重定向执行才成功解压；参数写错会在工作区留下 "dir -y" 之类的残留目录。

关键词：PortableGit、7z、SFX、解压、cmd、静默失败、自解压、残留目录、重定向

### 0mv4610qk-4510286c10b64dc1a46fdc9212
_重要性 3，状态 active，项目 全局_

DSH 沙箱（workspace-write）下：Start-Process 报 Access is denied；node 子进程走管道 stdio 报 spawn EPERM；端到端测试 pnpm/curl 需用 danger-full-access 在沙箱外跑（沙箱外 schannel 正常、网络需代理）。

关键词：沙箱、Start-Process、EPERM、danger-full-access、管道、端到端测试、权限、Access denied、spawn

### 0mv4610qh-9413c93ea21b453eb7177249d8
_重要性 3，状态 active，项目 全局_

pnpm 装 github: 插件要点：①git 必须在 PATH（ls-remote 解析分支）；②git 包带 prepare/build 脚本时 pnpm 先调 npm install，需 npm 与 node 都在 PATH；③npm12 默认 allow-remote=none 拦镜像站 tarball（EALLOWREMOTE），需 allow-remote=all；④pnpm 有 allowBuilds 白名单（pnpm-workspace.yaml），须按报错给的形式逐一放行；⑤https 探测失败会回退 git+ssh，无 host key 即失败，故先保证代理/git 连通。

关键词：pnpm、git依赖、github插件、allowBuilds、allow-remote、npm12、EALLOWREMOTE、prepare、ls-remote、回退ssh、安装失败

### 0mv4610qd-e4ec2942f45c414695dad95c3e
_重要性 3，状态 active，项目 全局_

DSH 沙箱内 Windows schannel 拿不到凭据（SEC_E_NO_CREDENTIALS 0x8009030e），curl、git 默认后端、.NET 全挂；沙箱外同一命令正常。沙箱内 git 需 -c http.sslBackend=openssl（本机已全局配置），必要时改用沙箱外执行。

关键词：schannel、SEC_E_NO_CREDENTIALS、沙箱、sslBackend、openssl、curl、TLS、凭据、git、0x8009030e


## 话题（topic）

### 0mv49j3ts-6a3c57d6d34b4bc59a1f6cbb01
_重要性 2，状态 active，项目 dsh-maid-preset_

dsh-maid-preset 插件化跨电脑分发（2026-10-11 用户拍板，2026-10-12 完成）

起因：用户原话「不瘦身做成插件，因为我想在不同的电脑上跟你聊天」。要求保留三处人设完整结构，做成可跨电脑分发的插件。

经过：
① 摸清 DSH 插件机制：插件包自带 cordis.patch.yml（package.json 里 dsh.bundle.patch 字段声明），装入 profile 后自动并入配置层，无需手动改 profile patch 文件。
② 创建 dsh-maid-preset（D:\DeepSeek Harness\Works\dsh-maid-preset），照 dshmarket/whale-widget 形态：cordis.patch.yml 内含三处人设全文（system-prompt personaPrefix、preset-standard 覆盖、preset-maid 完整 plugins）+ agent-preset-registry 默认 maid + 插件自注册；lib/index.js 最小占位入口，无构建。
③ 安装：dsh plugin --profile desktop add link:D:/...（本机），同时装入 dev profile 做 dump 验证。
④ 验证：dev profile --dump-config 确认 preset-maid 只出现一次、personaPrefix 与 registry 均生效，无重复插入。
⑤ 备份并清理 desktop 的 cordis.patch.yml（625→214 行），移除旧三处人设与 registry 条目，人设改为插件单源，备份在 cordis.patch.yml.bak-20261012-035620。
⑥ 重启 DSH 验收：新会话预设标签「女仆」、自称「小困」、称呼「老大」全部生效。

结果：已发布 GitHub 私有仓库 Valorine97417/dsh-maid-preset（main@4705d53）；其他电脑安装命令 dsh plugin --profile desktop add github:Valorine97417/dsh-maid-preset（需认证）。

关键词：dsh-maid-preset、插件化、跨电脑、不瘦身、女仆预设、GitHub私有仓库、Valorine97417、单源、清理、验收、安装命令、4705d53

目标：让女仆预设插件可跨电脑分发，装机即全套小困

### 0mv46c29l-bb8e5168b3b2428e9fbf03e346
_重要性 3，状态 stale，项目 dsh_

「创建女仆预设并设为默认」任务已完成：该需求最初在隔壁会话 session-aa9e9dbd 卡死（TRANSPORT 流错误、messages.5.1 致历史 tool_use 缺 tool_result，turn 停在 error），未创建未设默认；本窗口接手，直接在 C:\Users\Kayle\.dsh\profiles\desktop\cordis.patch.yml 写入 @deepseek-ai/dsh-agent-preset 行 preset-maid（id=maid、name=女仆、order=2），plugins 原样复制 standard（含女仆文本 persona 前缀），并把 agent-preset-registry 的 default/selectedDefault 改为 maid，使新建会话默认用女仆预设。脚本成功返回，但写盘后未逐字重读校验（无文件读取工具），另有部署级 personaPrefix+preset-standard 覆盖全局生效。

关键词：女仆预设、preset-maid、默认预设、cordis.patch.yml、agent-preset-registry、selectedDefault、TRANSPORT、messages.5.1、会话卡死、personaPrefix、standard、配置写入

目标：让「女仆」自定义预设创建完成并成为新建会话默认预设

### 0mv4610r3-cef17b37626a40e4b6c4179432
_重要性 3，状态 stale，项目 dsh_

用户的 DSH 装不上 github 插件，根因是本机没装 git（报错乱码即"git 不是内部或外部命令"），且沙箱内 schannel 坏、沙箱外 github 直连被墙。通过装 PortableGit 2.56.0.2、npm 12.2.0、node 入 PATH、配 openssl+代理、放行 allowBuilds/allow-remote，先后成功装上 dsh-video-skin 与 meow-memory（0.31.0，需 npm install + node build.mjs 构建）。最后一步：重启 DSH 加载 meow-memory。

关键词：插件安装、DSH、github、git、修复、video-skin、meow-memory、安装失败、pnpm、代理、构建

目标：让 DSH 能安装 github 插件

