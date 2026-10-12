# 小困的记忆（导出）

导出时间：2026-10-12T09:45:20.847Z　共 38 条

> 由 `scripts/export-memory.mjs` 从工作区 `.dsh-meow/memory.db` 导出。`memory/memory.db` 为可直接播种的快照，本文件仅供人读与 diff。


## 用户（user）

### 0mv519njm-81949a37fc9846c29610a98bb4
_重要性 3，状态 active_

老大工作偏好：复杂可视化/多条内容偏好收成独立 HTML 网页文件，在浏览器打开看，不在对话正文堆长卡。

关键词：工作偏好、交付形式、HTML 网页、浏览器查看、不在对话堆长卡、独立文件、数据看板、记忆全录、用户习惯、可视化交付

### 0mv50piax-4ebd02626a3b463996f7620306
_重要性 2，状态 active_

对外提交（GitHub issue 等）以「Valorine 老大的 AI 女仆「小困」」自称，不用"用户侧助理"等说法；用户 GitHub 账号 Valorine97417，PAT 存 Windows 凭据管理器 git:https://github.com，可 git credential fill 读取。

关键词：GitHub、Valorine97417、credential fill、PAT、凭据管理器、自称、AI女仆、小困、对外身份、issue提交


## 项目（project）

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

### 0mv51x5lf-f0a6f9e4233343c7adfc0cd5fd
_重要性 2，状态 active，项目 dsh_

强制刷新崩溃根因方向：boot 图 plugins 清单有 billion-context、modules 清单无其 row，两清单分家；产生于宿主侧增量扫描（Node 半侧）。

关键词：plugins清单、modules清单、两清单不一致、boot图、增量扫描、billion-context、row缺失、宿主侧组合、图生成

### 0mv51x5l6-aa51d03863c6449ea3a9d160e5
_重要性 2，状态 active，项目 dsh_

dsh 内核 entry._init 吞 import 异常：catch 后仅 logger.error 并 return，fiber 不建、错误不进记录表，audit 查无记录才打「see console」空话。

关键词：_init吞错、fiber静默缺失、logger.error、see console空话、importError无记录、audit、entry生命周期、web boot崩溃、内核机制

### 0mv50pia9-4a68553c38474a93b82e9187b7
_重要性 2，状态 active，项目 dsh_

强制刷新崩溃：机制链已闭环——内核 _init 吞 import 异常只 logger.error 不建 fiber；import 查无 row 同步抛错不进记录；prune 删行连带清记录 → audit 空话 → bootFailed IPC → crash。根因方向=boot 图 plugins 有 entry 但 modules 无其 row，两清单分家源于宿主侧增量扫描。下一步读 asar 内 dsh-client-modules lib/index.js 图生成；修复二选一=改 asar 图生成或重装两插件为标准布局。源码已抠至 Works\asrc\。

关键词：强制刷新、web boot、entry did not activate、import failed、billion-context、dsh-our-free-model、crash log、版本三方不一致、pnpm布局异常、DevTools console

### 0mv519nk3-90266b2aa4474a6292ef4a1bb4
_重要性 1，状态 active，项目 dsh_

meow-memory 的 memory.db 七表 soul/user/project/fact/lesson/topic/rules，列含 subcategory/corrected/goal，node:sqlite readOnly 可直查。

关键词：memory.db 表结构、node:sqlite、readOnly 查库、七表、subcategory 列、corrected 列、goal 列、dream_log 表、windows 表、记忆库直查

### 0mv50pia0-a2e1c588ba884006be98bb5adb
_重要性 2，状态 active，项目 dsh_

dsh-raw-html 美学面板「0个风格」已本地接管修复：删掉 ctx.inject(['connection'])，改为直接挂 webServer 前缀路由并逐字节复刻宿主 RPC 信封协议（Origin围栏+404/415/400/失败details规范化），自测 10/10 全绿（rpc-selftest.mjs），需重启 DSH 装载；bug 已发 issue #14 到 plolpl789/dsh-raw-html。

关键词：dsh-raw-html、美学面板、0个风格、webServer前缀路由、信封协议复刻、connection inject 静默挂起、本地接管补丁、issue 14、rpc-selftest、重启生效

### 0mv4z8jxx-971e7d005f384bd698c4efcbfc
_重要性 2，状态 active，项目 dsh_

meow-memory 已移出 profile 的 dependencies 与 bundles，改由 dsh-maid-preset 声明依赖并在其 cordis.patch.yml insert 它的 entry 行。

关键词：meow-memory、dsh-maid-preset、bundles、profile 依赖、entry 行、cordis.patch.yml、传递依赖、插件加载、bundle patch

### 0mv4vtta4-36b38aed035541fab2c2c74198
_重要性 1，状态 active，项目 全局_

关 dsh-video-skin 开机动画：写 $DSH_HOME\dsh-video-skin.json 设 boot.enabled=false，深合并不冲其他项，下次启动生效。

关键词：dsh-video-skin、开机动画、boot.enabled、视频皮肤、dsh-video-skin.json、配置覆盖、深合并、背景视频

### 0mv4vtt9h-8c0c2ea9f2034bd5a5da69c4ce
_重要性 2，状态 active，项目 全局_

本机 DSH_HOME=C:\Users\Administrator\.dsh；meow-memory 的 promptLang 应写进 profiles\desktop\cordis.patch.yml（提示给的上层路径不存在），已设 'zh'。

关键词：DSH_HOME、promptLang、cordis.patch.yml、meow-memory、profiles desktop、记忆语言、配置路径、zh、插件配置

### 0mv4vpz3x-7bacaed20c6a4c9aad2890d648
_重要性 1，状态 active，项目 全局_

2026-10-12 已给 DSH desktop profile 装上 Something11235 的两个插件：dsh-video-skin（视频皮肤/开机动画）、dsh-posterflow-ai（PosterFlow 生图模式侧边栏启动器），均已 pnpm 装入 node_modules 并加进 package.json 的 dsh.profile.bundles。

关键词：dsh-video-skin、dsh-posterflow-ai、插件安装、视频皮肤、PosterFlow、bundles、desktop profile、pnpm add、github 插件、侧边栏启动器


## 经验（lesson）

### 0mv51x5lm-d112c4a011a1480a90ff037e62
_重要性 1，状态 active，项目 全局_

bundle 巨行 grep 只回行首看不透，改用 node indexOf 输出命中点前后 400 字符。

关键词：巨行、grep失效、indexOf、上下文定位、压缩bundle、字节搜索、node搜索、前端代码

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

### 0mv50piap-a1bf7567b199417c80823b6292
_重要性 1，状态 active，项目 全局_

pwsh 每次新进程，Set-Content 写脚本可能不落盘致 Cannot find module；写测试脚本改用 write 工具。

关键词：Set-Content、不落盘、Cannot find module、write工具、临时脚本、pwsh新进程、node跑脚本

### 0mv50piai-6c937a85ebea4b1680300d51e8
_重要性 3，状态 active，项目 全局_

工具调用只输出裸 JSON 文本=未真正执行，绝不能口头报「已完成」，须 grep/read 验证落地后再汇报。

关键词：幻觉汇报、工具未执行、裸JSON文本、验证落地、grep抓包、虚假完成、edit工具、报完成

### 0mv50fl33-f703b86efb84491d91c37a95a1
_重要性 1，状态 active，项目 全局_

shell 工具名是 bash（内部跑 pwsh -Command）；曾多次手滑打成 pash 报 unknown tool，白费往返。

关键词：工具名、bash、pwsh、unknown tool、pash、手滑、shell 调用、命令执行

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

### 0mv4vtt9w-1bc38365a17948578b300b7f04
_重要性 1，状态 active，项目 全局_

DSH pwsh 工具传 timeoutMs（数字）仍报 invalid arguments: must be a number；去掉该参数即可执行。

关键词：timeoutMs、invalid arguments、pwsh 工具、参数校验错误、工具报错、超时参数、must be a number

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

### 0mv4x5ef3-3d3f20e88cab4ec7916235d5f8
_重要性 2，状态 stale，项目 dsh_

dsh-raw-html 美学面板「0 个风格」已结案（2026-10-12）：本地接管修复——删 ctx.inject(['connection'])，改直接挂 webServer 前缀路由并复刻宿主 RPC 信封协议，rpc-selftest.mjs 10/10 全绿，需重启 DSH 装载；bug 已发 issue #14 到 plolpl789/dsh-raw-html。

关键词：dsh-raw-html、美学系统、美学面板、0 个风格、scanStyles、hostRpc 空、list-styles、HTTP 405、风格检索、插件重装时间线

目标：修好 dsh-raw-html 美学系统面板显示 0 个风格


## 准则（rules）

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

