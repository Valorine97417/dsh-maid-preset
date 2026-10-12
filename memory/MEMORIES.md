# 小困的记忆（导出）

导出时间：2026-10-12T07:29:11.557Z　共 14 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 项目（project）

### 0mv4x5eev-621292668468445db82944ceec
_重要性 2，状态 active，项目 dsh，ops_

调试 DSH 插件 loopback RPC 的方法：浏览器 connection.rpc.call = HTTP POST 到 http://127.0.0.1:19387/<channel去开头斜杠>/<endpoint>，body 为 {type:'client-request', rpcId:uuid, method:endpoint, payload}，响应信封 {rpcId, result:{ok, value}} 且 rpcId 必须匹配；可从命令行直打验证 Host 侧 handler 是否注册（源码 app.asar createWebConnectionRpc）。405=路径存在但方法/凭证不对。

### 0mv4vttac-84a7419e2d264b2e8eb705ba7e
_重要性 2，状态 active，项目 dsh，ops_

本机 DSH 桌面环境：DSH_HOME=C:\Users\Administrator\.dsh，profile 在其 profiles\desktop（无 web profile、无 dsh 命令行）；PowerShell 7.6.6 已装于 C:\Program Files\PowerShell\7，与系统 5.1 并存。


## 事实（fact）

### 0mv4vtta4-36b38aed035541fab2c2c74198
_重要性 1，状态 active，项目 全局_

关 dsh-video-skin 开机动画：写 $DSH_HOME\dsh-video-skin.json 设 boot.enabled=false，深合并不冲其他项，下次启动生效。

### 0mv4vtt9h-8c0c2ea9f2034bd5a5da69c4ce
_重要性 2，状态 active，项目 全局_

本机 DSH_HOME=C:\Users\Administrator\.dsh；meow-memory 的 promptLang 应写进 profiles\desktop\cordis.patch.yml（提示给的上层路径不存在），已设 'zh'。

### 0mv4vpz3x-7bacaed20c6a4c9aad2890d648
_重要性 1，状态 active，项目 全局_

2026-10-12 已给 DSH desktop profile 装上 Something11235 的两个插件：dsh-video-skin（视频皮肤/开机动画）、dsh-posterflow-ai（PosterFlow 生图模式侧边栏启动器），均已 pnpm 装入 node_modules 并加进 package.json 的 dsh.profile.bundles。


## 经验（lesson）

### 0mv4vtt9w-1bc38365a17948578b300b7f04
_重要性 1，状态 active，项目 全局_

DSH pwsh 工具传 timeoutMs（数字）仍报 invalid arguments: must be a number；去掉该参数即可执行。

### 0mv4vtt9p-8eacedd55f9d4300aa8829015c
_重要性 2，状态 active，项目 全局_

DSH 宿主启动时缓存 pwsh 解析结果：新装 PowerShell 7 后本会话仍跑 5.1，重启 DSH 才切换。

### 0mv4vtt99-512e7b5bdb834715b3d33b8928
_重要性 2，状态 active，项目 全局_

diagnose-windows-sandbox-acl.ps1 直接 & 调用被执行策略拦（PSSecurityException），须用 powershell.exe -NoProfile -ExecutionPolicy Bypass -File 跑。

### 0mv4vtt8z-9b3e11043fbd41b1a03bd8887a
_重要性 2，状态 active，项目 全局_

DSH pwsh 命令全报 0xC0000142 时别急着修 ACL：诊断判 NOT_THIS_CLASS 零改动，会话切 danger-full-access 后命令即恢复。

### 0mv4vtt8o-6fcde62dbcbd44d4afeec813b4
_重要性 2，状态 active，项目 全局_

winget 装 PowerShell 7 报 0x80070422（DoSvc 被禁且 Set-Service 无权限），改为 GitHub 直下 MSI + msiexec /i /qn 装成功。

### 0mv4v0ohm-39704b4f6460424f8e63b0b762
_重要性 3，状态 active，项目 全局_

DSH 桌面端插件的安装位置与加载方式：插件放 C:\Users\Administrator\.dsh\profiles\desktop\node_modules，随后必须把包名写进该目录 package.json 的 dsh.profile.bundles 数组，否则不会加载。本机无 dsh 命令行，只有 desktop 一个 profile。

### 0mv4uzoar-367bee85159f4043a0d94db639
_重要性 3，状态 active，项目 全局_

DSH 桌面端插件装在 C:\Users\Administrator\.dsh\profiles\desktop\：pnpm add 进该目录的 node_modules，再把包名加进 package.json 的 dsh.profile.bundles 数组才会加载。本机没有 dsh 命令行，profile 只有 desktop 没有 web。

### 0mv4uzoag-7711c300b0284474be9a1a45c6
_重要性 2，状态 active，项目 全局_

pnpm 从 GitHub 装依赖（github:user/repo 或 git+https）时会改用 ssh 协议，本机没配 GitHub 密钥会以 exit 128 失败；用一次性环境变量 GIT_CONFIG_COUNT/GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n 写 url.https://github.com/.insteadOf 改写成 https，不必改全局 git 配置。


## 话题（topic）

### 0mv4x5ef3-3d3f20e88cab4ec7916235d5f8
_重要性 2，状态 active，项目 dsh_

dsh-raw-html 美学面板「共 0 个风格」排查（2026-10-12 进行中未完结）。已排除：styles/ 正常（12 风格文档+_INDEX.md 齐全）、node 复刻 scanStyles readdir 成功、Host switch 分发逻辑正常。疑点：① aesRpc 用 apply 时固定的 hostRpc（client.js:2150/747），connection 未就绪时永 null→面板全空，ensureGlobalFonts 重试时重新取却不回写该变量（client.js:765 注释自认）；② 插件 14:12 被 pnpm codeload tarball 整体重装、lockfile 14:35 更新，宿主是否重启未知；③ 命令行直打 list-styles 返回 HTTP 405。背景：13:25-13:46 插件管理器 git 安装全失败（本机无 git 命令→https 要凭据），后由 pnpm add 连带解析成 tarball。
