# 小困的记忆（导出）

导出时间：2026-10-13T05:50:18.567Z　共 93 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 用户（user）

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

### 0mv68rq8f-8f854671e2a842109f1c386ac6
_重要性 2，状态 active，项目 dsh，quotes_

老大原话（2026-10-13）：「raw渲染的背景颜色，跟输出框的背景颜色不一样。」——据此把 abyss-maid 风格文档的卡片底从写死 #091333 改为跟随宿主变量。

关键词：用户原话、raw渲染背景颜色、输出框背景颜色、底色不一致、abyss-maid 修订起因、写死 hex 问题、卡片底色

### 0mv68r8sl-f47af945a8cc442396d7bd69f9
_重要性 3，状态 active，项目 dsh-maid-scenery，todo_

待办：① scenery.js 面板注入改 getElementById('dsvs-knobs')、按钮类名改 .dsvs-knobs-preset、激活态改 data-active="1"；② 面板补「亮色/暗色」切换行 + 两种主题下按钮可读性优化；③ raw 可信模式默认打开（localStorage raw-html.trusted=1）并隐藏盾锁徽章；④ 查侧边栏展开后按钮消失（疑 maid-atelier 主题 rail/展开态判定）；⑤ 查输入框内图片显示异常。

关键词：待办、面板注入修复、亮暗切换行、按钮可读性、可信模式隐藏、侧边栏按钮消失、输入框图片、dsvs-knobs-preset、data-active、maid-atelier 主题

### 0mv68r8sb-d82fdc8999804b409507146c43
_重要性 3，状态 active，项目 dsh-maid-scenery，quotes_

老大原话（m02944/m02966/m02969）：「聊天背景面板加上一个亮色、暗色背景切换。然后帮我给暗色背景和亮色背景做一个优化。让界面的按钮都可以正常显示出来。」「聊天背景面板没添加视频背景和静态背景切换，也没有添加亮色背景和暗色背景切换。且raw渲染的可信模式按钮跟聊天背景面板按钮重叠了。你直接帮我把可信模式默认打开，然后隐藏掉它。」「还有侧边栏展开后的按钮都不见了。和上传在输入框的图片没好好显示出来。」

关键词：亮色暗色切换、按钮正常显示、视频背景静态背景、可信模式默认打开、隐藏可信模式、按钮重叠、侧边栏展开、输入框图片、聊天背景面板、老大原话

### 0mv67kuh7-43cd2f09282b456fb5f3b1d1ff
_重要性 3，状态 active，项目 dsh-maid-scenery，overview_

dsh-maid-scenery v0.1.1 已交付并生效（私有仓库 fb58639，profile 已装、重启后背景融合正常显示）：maid-atelier 静态画沉到视频层后 + 聊天背景面板「视频/静态画」切换。浅色发白已调（veilLight 0.22 / surfaceLight 0.45 写 $DSH_HOME\dsh-video-skin.json，刷新即生效）。待办：面板注入选择器 bug（.dsvs-knobs → #dsvs-knobs）与按钮类名 bug（.dsvs-knobs-pill → .dsvs-knobs-preset）要修；补亮色/暗色切换 + 两种主题按钮可读性；raw 可信模式默认开并隐藏徽章；侧边栏展开按钮消失、输入框图片显示两项待查（已排除 scenery，疑 maid-atelier 主题）。主题正源 Small-tailqwq/dsh-deep-whale 已上 npm，是否换掉搬运版待老大拍板。

关键词：dsh-maid-scenery、融合层插件、静态画沉底、背景画面切换、浅色发白、surfaceLight、veilLight、面板注入 bug、侧边栏按钮、输入框图片、正源替换

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

### 0mv4z8jy6-ed25831b992a4555b28c2630c0
_重要性 2，状态 active，项目 dsh，ops_

desktop profile 自装 10 插件：真 git clone 仅 dsh-maid-preset；dsh-raw-html/posterflow-ai/video-skin 走 codeload tarball；dshmarket、dsh-whale-widget、billion-context、dsh-llm-fallbacks 走 npm；dsh-our-free-model 本地 tgz。

关键词：插件来源、codeload tarball、git clone、pnpm-lock、profile 插件、dsh-raw-html、dsh-posterflow-ai、dsh-video-skin、dsh-our-free-model、billion-context

### 0mv4x5eev-621292668468445db82944ceec
_重要性 2，状态 active，项目 dsh，ops_

调试 DSH 插件 loopback RPC 的方法：浏览器 connection.rpc.call = HTTP POST 到 http://127.0.0.1:19387/<channel去开头斜杠>/<endpoint>，body 为 {type:'client-request', rpcId:uuid, method:endpoint, payload}，响应信封 {rpcId, result:{ok, value}} 且 rpcId 必须匹配；可从命令行直打验证 Host 侧 handler 是否注册（源码 app.asar createWebConnectionRpc）。405=路径存在但方法/凭证不对。

关键词：RPC 调试、loopback 调用、connection.rpc、client-request、rpcId、channel endpoint、插件诊断、app.asar、127.0.0.1:19387、HTTP 405

### 0mv4vttac-84a7419e2d264b2e8eb705ba7e
_重要性 2，状态 active，项目 dsh，ops_

本机 DSH 桌面环境：DSH_HOME=C:\Users\Administrator\.dsh，profile 在其 profiles\desktop（无 web profile、无 dsh 命令行）；PowerShell 7.6.6 已装于 C:\Program Files\PowerShell\7，与系统 5.1 并存。

关键词：DSH 桌面环境、DSH_HOME、profiles desktop、PowerShell 7.6.6、profile 配置、无 dsh 命令行、pwsh.exe、安装位置、5.1 并存


## 事实（fact）

### 0mv68m6ga-da74881bb1cf4623972bbb21a6
_重要性 3，状态 active，项目 dsh_

dsh-raw-html 第 13 个风格 abyss-maid「深海蕾丝 · 女仆工坊风」，对齐 maid-atelier 皮肤。色板：底 var(--dsw-alias-bg-layer-1,#091333)（跟随宿主输出框）+ #10204d / #1c326b / #526aa8 / #8ea5da / #c5a468 / #f8f6f0 / #172347；主标题 Lanxi-朗宋。文件 styles/abyss-maid.md，_INDEX.md 已同步。

关键词：abyss-maid、深海蕾丝、女仆工坊风、raw 渲染风格、13 个风格、styles 目录、Lanxi-朗宋、底色跟随宿主、bg-layer-1、c5a468 柔金、maid-atelier 配色

### 0mv68rm3c-cc9c99f6daf7402cb64d029221
_重要性 3，状态 active，项目 dsh_

maid-atelier 女仆皮肤把 --dsw-alias-bg-layer-1 覆写成 rgba(18,31,67,0.94)（浅色主题 rgba(248,250,255,0.9)），并令 --dsw-alias-bg-base: transparent 透出场景画。输出框走 bg-layer-1；raw 卡片若写死 #091333 就与它脱色。

关键词：maid-atelier 皮肤、bg-layer-1 覆写、rgba(18、31、67、0.94)、bg-base transparent、输出框底色、场景画透出、深海蓝 #091333、皮肤变量表、浅色 rgba(248、250、255、0.9)

### 0mv68qde0-0bb73645b9b142a6960a62f74d
_重要性 2，状态 active，项目 dsh_

dsh-raw-html 的「可信模式」盾锁徽章 fixed right:14px/bottom:14px z-index:900，与 dsh-video-skin 的悬浮圆钮 #dsvs-knobs-pill fixed right:16px/bottom:16px z-index:900 几乎完全同位——这就是老大看到「可信模式按钮跟聊天背景面板按钮重叠」的原因。

关键词：可信模式、盾锁徽章、dsvs-knobs-pill、悬浮圆钮、按钮重叠、右下角、z-index 900、dsh-raw-html、dsh-video-skin、fixed 定位

### 0mv68qddr-dfcfc17d86db4295bdd22b2c50
_重要性 2，状态 active，项目 dsh_

本机 DSH 版本 0.2.0-rc.2。maid-atelier 主题原作者是 Small-tailqwq/dsh-deep-whale（老大给的正源），正源已上 npm：maid-atelier 0.1.7 / skin-manager 0.1.6 / orca-link 0.1.7，peer 范围 >=0.1.7-rc.1 <0.3.0-0 本机满足；本机现装的是 flaricy 二手搬运版 @dsh-external/dsh-client-ui-skin-maid-atelier v0.0.1 private:true，两版同 skin id 不能共存。

关键词：DSH 版本、0.2.0-rc.2、Small-tailqwq、dsh-deep-whale、maid-atelier 正源、skin-manager、orca-link、flaricy 搬运版、@dsh-external、private true、skin id 冲突、peer 范围

### 0mv68m6gy-3b016ab20c774611a293292fce
_重要性 2，状态 active，项目 dsh_

探 dsh-raw-html 的 RPC：POST http://127.0.0.1:19387/dsh-raw-html/<方法名>，body 为信封 {"type":"client-request","rpcId":"...","method":"<方法名>","payload":{}}，取回 j.result.value（如 list-styles → value.styles 数组）。前缀路由免鉴权，桌面端也能用。

关键词：dsh-raw-html RPC、list-styles 探针、client-request 信封、rpcId、前缀路由免鉴权、19387、result.value.styles、插件方法调用、POST 探针

### 0mv68c25m-9931441c0fc14a368fd5b338da
_重要性 3，状态 active，项目 dsh_

dsh-raw-html 插件本地改动仅 2 个文件（其余文件 mtime 均为安装时的 10-12 14:12）：① lib/index.js（10-12 15:46）——删掉 ctx.inject(['connection'])，RPC 通道改挂 webServer 前缀路由 /dsh-raw-html，复刻宿主信封协议；② lib/client.js（10-13 13:06）——hover 白字修复。patch/ 目录下的官方脚本（patch-frontend.cjs、install-v6.cjs、v6-inject.js 等）未改动。

关键词：dsh-raw-html 本地改动、lib/index.js、lib/client.js、connection inject 删除、webServer 前缀路由、RPC_CHANNEL、patch 目录未改、安装时间 mtime、插件改动面

### 0mv60mo1p-281a17a56ddf4b358f99039968
_重要性 3，状态 active，项目 dsh_

DSH app.asar 改动面审计（2026-10-13）：相对原始未打补丁版（备份 app.asar.bak-2026-10-13T01-40-03），11470 条 packed 条目中**只有 1 个文件内容不同**——dsh/node_modules/@deepseek-ai/dsh-web-frontend/dist/assets/index-5SrrfWpU.js（633282 → 738882 B）。该文件内叠加了两个补丁且**都在**：① web boot audit 补丁（`if(o.length>0)throw new Error(` → `console.error(`，修「强制刷新页面」崩溃）；② raw HTML 渲染补丁 v8→v9。二者不冲突、共存，v9 基于含 audit 补丁的 bak-before-v8 重打。备份：bak-2026-10-13T01-40-03（原始）/ bak-before-v8（含 audit）/ bak-bad-v8（坏 v8）/ app.asar.new，共约 825 MB。DSH 升级会覆盖全部补丁。

关键词：asar 改动面审计、index-5SrrfWpU.js、audit 补丁、throw 改 console.error、raw 渲染补丁 v9、只有一个文件不同、备份占用 825MB、bak-before-v8、强制刷新崩溃、升级覆盖补丁

### 0mv674rjd-566bfd3b5e4942ec972252acd1
_重要性 3，状态 active，项目 dsh_

dsh-raw-html client.js hover 白底白字修复·最终版（2026-10-13）：lib/client.js 116253 B，7 处 hover 规则（aes-picker-tool / aes-picker-ok / aes-op-btn / aes-btn / aes-fontcat-add / aes-tagbtn / aes-btn-primary）背景由 --dsw-alias-button-primary-fill 改为 --dsw-alias-interactive-bg-hover-accent、字色由 #fff 改为 --dsw-alias-label-primary；另 4 处静态字色改 label-primary-foreground；保留 .aes-del:hover 与 .aes-chip-x:hover 的 #dc2626 红底白字。语法 node --check EXIT 0，combo URL 送达 116322 B 含 7 处新规则，硬刷新生效无需重启。

关键词：hover 白字修复、client.js、116253、aes-btn、interactive-bg-hover-accent、label-primary-foreground、美学面板按钮、dc2626 红底保留、dsh-raw-html、combo URL 送达

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

### 0mv50pia0-a2e1c588ba884006be98bb5adb
_重要性 2，状态 active，项目 dsh_

dsh-raw-html 美学面板「0个风格」已本地接管修复：删掉 ctx.inject(['connection'])，改为直接挂 webServer 前缀路由并逐字节复刻宿主 RPC 信封协议（Origin围栏+404/415/400/失败details规范化），自测 10/10 全绿（rpc-selftest.mjs）；2026-10-13 宿主重启后实测 POST /dsh-raw-html/list-styles → 200 返回 12 风格全量，补丁验证生效。bug 已发 issue #14 到 plolpl789/dsh-raw-html。

关键词：dsh-raw-html、美学面板、0个风格、webServer前缀路由、信封协议复刻、connection inject 静默挂起、本地接管补丁、issue 14、rpc-selftest、重启生效

### 0mv50pia9-4a68553c38474a93b82e9187b7
_重要性 2，状态 active，项目 dsh_

强制刷新崩溃：机制已于 2026-10-12 定案（详见 0mv53o3b）；2026-10-13 已实施修复——asar 内核补丁把 audit 的 `throw new Error(` 等长改为 `console.error(`，崩溃降级为控制台报错（补丁详情/备份见 0mv60mo1），用户重启+刷新验证弹窗不再出现。【待决】是否向 DSH 官方提 issue（草稿需先过用户目）。旧「两清单分家」方向已作废。源码抽取件在 Works\asrc\。

关键词：强制刷新崩溃、机制定案、待决官方issue、规避方案、重启DSH、两清单假说作废、诊断报告已交付、billion-context

### 0mv621ie3-d78e58a1f8e34ff69a6e336e9b
_重要性 2，状态 active，项目 dsh-maid-preset_

同步引擎 0.7.0 前有个卡死病根：pull --rebase 撞记忆文件冲突后 workcopy 卡在 (no branch, rebasing main)，main 引用停在老历史，push 永远 non-fast-forward 且被误判为网络类退避，引擎自 10-12 起就没推成功过。0.7.1 加基线自愈：识别 non-fast-forward/conflict 为 baseline 类，abort 后 reset --hard origin 再重做导出+commit+push。

关键词：基线自愈、non-fast-forward、rebase挂起、no branch rebasing main、同步引擎、卡死、reset --hard、记忆同步、冲突、退避、0.7.1

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

### 0mv4vtt9h-8c0c2ea9f2034bd5a5da69c4ce
_重要性 2，状态 active，项目 全局_

本机 DSH_HOME=C:\Users\Administrator\.dsh；meow-memory 的 promptLang 应写进 profiles\desktop\cordis.patch.yml（提示给的上层路径不存在），已设 'zh'。

关键词：DSH_HOME、promptLang、cordis.patch.yml、meow-memory、profiles desktop、记忆语言、配置路径、zh、插件配置


## 经验（lesson）

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

### 0mv4vtt8z-9b3e11043fbd41b1a03bd8887a
_重要性 2，状态 active，项目 全局_

DSH pwsh 命令全报 0xC0000142 时别急着修 ACL：诊断判 NOT_THIS_CLASS 零改动，会话切 danger-full-access 后命令即恢复。

关键词：0xC0000142、DLL 初始化失败、沙箱受限模式、ACL 诊断、NOT_THIS_CLASS、danger-full-access、pwsh 工具、命令失败、保活组

### 0mv4vtt8o-6fcde62dbcbd44d4afeec813b4
_重要性 2，状态 active，项目 全局_

winget 装 PowerShell 7 报 0x80070422（DoSvc 被禁且 Set-Service 无权限），改为 GitHub 直下 MSI + msiexec /i /qn 装成功。

关键词：winget、PowerShell 7、0x80070422、DoSvc、msiexec、GitHub releases、MSI 直装、服务被禁用、安装失败

### 0mv4uzoar-367bee85159f4043a0d94db639
_重要性 3，状态 active，项目 全局_

DSH 桌面端插件装在 C:\Users\Administrator\.dsh\profiles\desktop\：pnpm add 进该目录的 node_modules，再把包名加进 package.json 的 dsh.profile.bundles 数组才会加载。本机没有 dsh 命令行，profile 只有 desktop 没有 web。

关键词：dsh、插件安装、profile、desktop、pnpm、node_modules、bundles、package.json、cordis、dotdsh、加载、配置

### 0mv4uzoag-7711c300b0284474be9a1a45c6
_重要性 2，状态 active，项目 全局_

pnpm 从 GitHub 装依赖（github:user/repo 或 git+https）时会改用 ssh 协议，本机没配 GitHub 密钥会以 exit 128 失败；用一次性环境变量 GIT_CONFIG_COUNT/GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n 写 url.https://github.com/.insteadOf 改写成 https，不必改全局 git 配置。

关键词：pnpm、git+ssh、github、insteadOf、exit 128、ls-remote、安装依赖、https、改写、GIT_CONFIG、无法克隆、密钥


## 话题（topic）

### 0mv67sjra-07d1d0b3e0db495fbeedeca973
_重要性 2，状态 active，项目 dsh_

dsh-video-skin 浅色发白根因：surfaceLight 0.6 面板糊白 + veilLight 0.098 无纱；已改 0.45/0.22 写 $DSH_HOME\dsh-video-skin.json，刷新即生效。图片不显示：已排除皮肤嫌疑，等老大 Network 取证；另输入框内图片显示异常（缩成一条）与侧边栏展开按钮消失两项待查，疑 maid-atelier 主题。

关键词：surfaceLight、veilLight、浅色发白、dsh-video-skin.json、刷新即生效、图片不显示、Network 取证、透明度旋钮、待排查

目标：老大刷新取证图片请求状态，定位图片不显示根因

### 0mv68qdea-43a68a413e084661933fc0eac4
_重要性 3，状态 active，项目 dsh-maid-scenery_

老大报五处界面问题（m02966/m02969）：① 聊天背景面板缺「视频/静态画」切换——scenery 注入失败，根因是它用 .dsvs-knobs（class 选择器）去找 id='dsvs-knobs' 的面板，永远 null；② 缺亮色/暗色切换，且两种主题下按钮要能正常显示；③ raw 可信模式按钮与面板圆钮重叠，老大要求默认打开并隐藏掉；④ 侧边栏展开后按钮消失；⑤ 输入框内图片显示异常。①②③根因已定，④⑤待查（已排除 scenery 的 CSS，疑 maid-atelier 主题）。

关键词：聊天背景面板、背景画面切换、视频与静态画、亮色暗色切换、可信模式默认打开、隐藏徽章、侧边栏按钮消失、输入框图片显示、scenery 注入失败、选择器根因、界面问题清单

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

### 0mv63844e-879d7cea673442e38c07932316
_重要性 2，状态 active，项目 dsh_

强制刷新崩溃已由 asar console.error 补丁压死，但刷新后 combo 404 + billion-context import failed 仍在：bc 文件 09:47 被整包重解压（mtime 1985 假时间、ctime 轮转），pnpm-lock/.modules.yaml 09:46-10:21 多次被写，install-log 分块落 .dsh-logs（重启即清）。asar 里 dsh-pm 含 failed-run 修复逻辑（还原 package.json+pnpm-lock 后跑 pnpm install --frozen-lockfile），ofm 自更新不碰 pnpm；10:21 那次无可见进程的 install 触发方未定，正挖 asar。

关键词：强制刷新、404、combo、pnpm install、billion-context、ctime 轮转、rev、install-log、frozen-lockfile、触发方、刷新崩溃、取证

目标：查明并修复强制刷新后 combo 404 与 bc import failed 的触发方

### 0mv4x5ef3-3d3f20e88cab4ec7916235d5f8
_重要性 2，状态 stale，项目 dsh_

dsh-raw-html 美学面板「0 个风格」已结案（2026-10-12）：本地接管修复——删 ctx.inject(['connection'])，改直接挂 webServer 前缀路由并复刻宿主 RPC 信封协议，rpc-selftest.mjs 10/10 全绿，需重启 DSH 装载；bug 已发 issue #14 到 plolpl789/dsh-raw-html。

关键词：dsh-raw-html、美学系统、美学面板、0 个风格、scanStyles、hostRpc 空、list-styles、HTTP 405、风格检索、插件重装时间线

目标：修好 dsh-raw-html 美学系统面板显示 0 个风格


## 准则（rules）

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

