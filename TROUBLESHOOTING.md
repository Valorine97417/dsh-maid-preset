# dsh-maid-preset · 问题与解决记录

> 这份文档收拢 `dsh-maid-preset`（女仆预设 + 内置 meow 记忆 + 记忆自动同步）从**安装到运行**踩过的坑，给新设备装机时当对照表用。每条都是「症状 → 原因 → 解法 → 验证方式」，照着走一遍能避开大部分「装了但一点动静都没有」的沉默故障。
> 最后更新：2026-10-16 ｜ 适用版本：v0.7.5 ｜ 素材来源：仓内 README/源码注释 + 记忆库踩坑条目 + 本机实测

---

## 一、安装与部署

### 1.1 插件装完，界面毫无变化（没有「女仆」预设、没有 maid 设置页）

- **症状**：`dsh plugin --profile desktop add github:Valorine97417/dsh-maid-preset` 跑完没报错，但重启后界面上既看不到 `女仆` 预设，也没有 maid 设置面板。
- **原因**：插件在 profile 层要**同时**满足三个条件才算生效：① 插件目录真的落在 profile 下（`profiles/desktop/node_modules/dsh-maid-preset`）；② 依赖写进了该 profile 的 `package.json`；③ 出现在 `dsh.profile.bundles` 列表里。只满足其一，cordis 不会加载 patch，表现就是全静默。
- **解法**：打开 `C:\Users\<用户>\.dsh\profiles\desktop\cordis.patch.yml` 与同目录 `package.json`，确认包名在依赖里、`bundles` 里有 `dsh-maid-preset`；缺了就补，然后重启 DSH。
- **验证方式**：`curl http://127.0.0.1:19387/dsh-maid-preset/selfcheck` —— 返回 `{"ok":true,...}` 且第一项「补丁文件（cordis.patch.yml）」`ok:true` 并给出真实路径，说明 patch 已被加载。

### 1.2 工作区里的插件目录消失 → junction 断链、bundles 被剪

- **症状**：某天工作区里的 `dsh-maid-preset` 目录不见了，profile 里 `node_modules/dsh-maid-preset` 变成断链（junction 指向不存在的路径），接着 `bundles` 里这一条被插件管理器自动剪掉。
- **原因**：本机的安装形态是 `link:D:/DeepSeek Harness/Works/dsh-maid-preset`，profile 里只是 junction 软链。**源目录被移走/删除，链就断了**，插件管理器会顺手清理失效条目。
- **解法**：从同步副本重新克隆回来（同步副本一直都在）：从 `C:\Users\<用户>\.dsh\maid-sync` 重新 clone 出工作目录，再把 `dsh-maid-preset` 补回 `dsh.profile.bundles`，重启生效。
- **验证方式**：重启后跑一次上面的 `selfcheck`；`?? 空响应` 或 404 说明还没挂回去。

### 1.3 独立装过 meow-memory 的机器，换成内置版后记忆不工作

- **症状**：v0.6.0 起内置了 meow-memory，但老机器（装过独立 `meow-memory` 包）替换后记忆功能静默失效，没有报错。
- **原因**：profile 层 patch 里那条 entry 的 `name` 还指着独立包；内置版要求 `name: 'dsh-maid-preset/meow'`（`exports './meow'` → `lib/meow/index.js`）。名字对不上就等于没加载。
- **解法**：把该 entry 的 `name` 同步改成 `dsh-maid-preset/meow`；`id` 保持 `meow-memory` 不变——这样和独立包的 patch 天然同 id 去重，过渡期不会起双实例。
- **验证方式**：`GET /dsh-maid-preset/selfcheck` 里的「工作区活库」项应显示工作区路径与更新时间；记忆工具可用则说明实例起来了。

### 1.4 私有仓库装不上 / 一直卡在 git 认证

- **症状**：`add` 私有仓库地址时卡住或认证失败；某些镜像地址（如 `ghproxy.net`、`gh-proxy.com`）反而弹出 Git Credential Manager 的登录窗口。
- **原因**：私有仓库需要 GitHub 认证（token）；而镜像域名会在 `.gitconfig` 里被登记成 generic provider，于是弹凭据框——**那个框填什么都没用**。
- **解法**：安装前先配好凭据（`git credential` 缓存或 `GITHUB_TOKEN`）；镜像弹出的认证框直接点 **Cancel**。根治做法是把对应 helper 清空（`helper = ""`）。
- **验证方式**：`git ls-remote <repo-url>` 能出 refs 即认证通过。

### 1.5 前端资产报错弹框：`web boot: 1 entry did not activate / import failed`

- **症状**：改了 `lib/client.js` 后立即重启，界面弹框报 `web boot: 1 entry did not activate` 或 `import failed`。
- **原因**：boot graph 里的 rev 号和磁盘上文件的真实 rev 对不上（改文件与重启撞上了竞态），插件资产 GET 返回 404。
- **解法**：读最新一份 `crash-*.log` 确认是哪条 entry，然后**再平稳重启一次**（不要连续快速改重启）；稳态下 graph rev 与单文件 GET 会恢复一致。
- **验证方式**：`curl` 一下 graph 里给出的 rev 对应的单文件地址，返回 200 即恢复。

### 1.6 「恢复出厂」把旧人设带回来了

- **症状**：改了人设后点「恢复出厂」，人设又变回旧版本，或者只恢复一半。
- **原因**：人设文本在仓里是**三处副本**（`cordis.patch.yml` 的部署级 `personaPrefix`、`preset-standard` 覆盖、`preset-maid` 定义），另外 `defaults/cordis.patch.yml` 是出厂快照。只改主 patch 不改 defaults，恢复出厂就会被旧人设吃掉。
- **解法**：三处 + `defaults/` 一份一起改。
- **验证方式**：用正则数命中数——新文本在 `cordis.patch.yml` 与 `defaults/cordis.patch.yml` 各命中 3 处，旧文本残留 0 处。（实测：2026-10-16 主 patch 与 defaults 人设段 diff 为空，是一致的。）

### 1.7 打包/安装脚本报错（pnpm、tsc 找不到）

- **症状**：`prepack` 阶段失败，提示找不到 `tsc`；或 profile 侧 `pnpm install` 报 release-age 限制。
- **原因**：profile 用的 pnpm **不在 PATH 上**（本机为 11.7.0，`nodeLinker: hoisted`、`autoInstallPeers: false`）；`prepack` 会触发 `npm run build`（tsc），PATH 里没有 tsc 就炸。
- **解法**：用 profile 自带的 pnpm 全路径调用；安装时若被 release-age 拦，加 `--config.minimumReleaseAge=0`；只想验证打包内容用 `pnpm pack --dry-run --config.ignore-scripts=true` 跳过 prepack。
- **验证方式**：dry-run 能列出 `cordis.patch.yml`、`lib/`、`memory/` 三块文件即包内容正确。

### 1.8 新设备隐私红线（出厂默认值，别当故障查）

- **症状**：新机器装完，同步一直「待机」，怎么都不推。
- **原因**：**这是设计如此，不是 bug**。`cordis.patch.yml` 里 `repoUrl: ''`、`identity: null`、`proxies: []`、`seed.enabled: false` 一律留空——新设备装完不许推任何人的仓库、不许拿别人身份 commit、不许把种子记忆灌进别人会话。
- **解法**：装好后到「设置 → maid 设置 → 同步（GitHub）」填自己的仓库地址；需要种子记忆时显式开 `seed.enabled`（本机可写 `maid-settings.json`）。
- **验证方式**：填完跑一次「测试连接」（它会在直连失败时自动借道本机代理）。

---

## 二、运行时问题

### 2.1 记忆一直在写，但一天都没推上去（空闲钟死锁）

- **症状**：本地记忆条数在涨，GitHub 远端一天没动静，日志里连 `PUSH FAILED` 都没有。
- **原因**：空闲钟的判定拿「同步水位」当上轮观测值，`due` 恒为 false——**空闲钟永远走不满**。
- **解法**：已修，`lastChangeAt` 取 `Math.min(Date.now(), m)`。老版本升级后即恢复。
- **验证方式**：日志里出现 `PUSH OK → <repoUrl>#main`；`GET /dsh-maid-preset/sync/state` 的 `lastSyncedAt` 在推进。

### 2.2 同步永久停摆，日志只有一行「已暂停同步（配置问题）」

- **症状**：远端断更一天；`maid-sync.log` 里只有 `已暂停同步（配置问题）：commit 身份缺失`，界面完全看不出异常。
- **原因**：同步副本（`C:\Users\<用户>\.dsh\maid-sync`）是独立 clone，**没有仓库级 git 身份**；全局 git 身份也没配 → `resolveIdentityArgs` 返回 null → 走 `pauseForConfig('commit 身份缺失')` 永久暂停（配置类不重试）。克隆不在版本管理里，删掉重建就会复现。
- **解法**：在副本里配身份 `git -C C:\Users\<用户>\.dsh\maid-sync config --local user.name/... user.email/...`，然后清掉 `maid-sync-state.json` 里的 `fatalReason / fatalDetail / fatalRepoUrl / pushFailed / failCount / nextRetryAt`，再触发一次同步。
- **验证方式**：日志出现 `PUSH OK`；state 里 `fatalReason` 为空串。

### 2.3 长会话里记忆持续被写，推送一直等不到空闲

- **症状**：白天连续对话几小时，`pending` 一直是 true，但就是不推。
- **原因**：每轮对话都在写 `memory.db-wal`，变更检测取 db/wal 里较大的 mtime，而 `lastSyncedMtime` 停在成功推送那一刻——**水位永远追不上**，10 分钟空闲钟走不满。
- **解法**：v0.7.5 引入 `maxWaitMinutes`（默认 60，0 = 关闭）兜底：距上次成功推送超过 60 分钟就强制推一次。日志对应文案 `已达最长等待上限 60 分钟（记忆持续写入中），本轮强制推送`。
- **验证方式**：实测案例（2026-10-16）积压 2 小时 35 条后由兜底推成功；`sync/state` 里 `lastSyncedMtime` 随之抬升。

### 2.4 同步副本卡在 rebase，推送永远 non-fast-forward

- **症状**：`C:\Users\<用户>\.dsh\maid-sync` 处于 `(no branch, rebasing main)`；`git push` 一直 non-fast-forward，日志里还被误判成网络类反复退避。
- **原因**：`pull --rebase` 撞上 `memory/` 目录冲突后中断，副本状态卡死（v0.7.0 前的老坑）。
- **解法**：v0.7.1 起有基线自愈（abort + `reset --hard origin` + 重新导出提交推送）。手动急救：
  `git -C C:\Users\<用户>\.dsh\maid-sync rebase --abort` 然后 `git -C C:\Users\<用户>\.dsh\maid-sync reset --hard origin/main`。
- **验证方式**：`git -C ... status` 显示干净分支（不再 `rebasing`），随后日志出现 `PUSH OK`。

### 2.5 点「立即同步」返回 409

- **症状**：设置页点「立即同步」，接口返回 409。
- **原因**：网络类失败正处于指数退避窗口内（`nextRetryAt` 未到），请求被拒。
- **解法**：等退避窗口过，或按 2.2 的方式清 state 里的退避字段（先分清是网络类还是配置类：网络类才该退避）。
- **验证方式**：`POST http://127.0.0.1:19387/dsh-maid-preset/sync/now` 返回非 409 且带 `{ok,reason}`。

### 2.6 「测试连接」必超时，但同步其实没问题

- **症状**：设置页「测试连接」永远超时失败，可远端明明在正常推送。
- **原因**：旧实现裸 git 直连必超时（本机实测直连 github 要 21 秒，而超时设的 15 秒）；旧版「立即同步」还把计数器清零放在读 mtime 之前，导致 `due` 恒假、静默跳过、接口返回 `undefined`，前端只能报 409。
- **解法**：v0.7.2 修复——测试连接在直连失败后借道 `detectLocalProxies()` 的结果（缓存 10 分钟），超时放宽到 45 秒；「立即同步」的清零挪到 mtime 锚定之后，即使跳过也返回 `{ok:false,reason,skipped}`；git 子进程加 `GIT_HTTP_LOW_SPEED_LIMIT/TIME` 防挂死。
- **验证方式**：点「测试连接」应返回成功（本机代理 7890 在听时走代理）；`sync/state` 不会因一次点击就被清零。

### 2.7 直连 github 不通（网络/代理类）

- **症状**：`PUSH FAILED（网络类，N 分钟后重试，第 K 次）: ...`；本机直连 github 超时。
- **原因**：本机需要代理（本机代理在 `127.0.0.1:7890`）。出厂 `proxies: []` 不预设端口，由 `detectLocalProxies()` 直连失败后自动探本机活着的代理端口（环境变量 → Windows 系统代理 → 7890/7897/10809/10808/8888 逐个试连通）。
- **解法**：让探测自己生效，或在 `maid-settings.json` 里显式写代理。手动敲 git 命令时**必须显式带 `-c`，且 `-c` 要写在子命令之前**：
  `git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 push`
- **验证方式**：`selfcheck` 的「本机代理端口」项显示 `在听：7890（直连失败时自动借道）`；日志转为 `PUSH OK`。

### 2.8 billion-context 的压缩冲突与横幅

- **症状**：界面出现 `unannounced client history rewrite` 横幅；原生自动压缩与 billion-context 抢压缩权。
- **原因**：bili 的 bundle patch 只打到 host-plane 那一行（该行本就 `disabled:true`），**实际运行的是预设内的 compaction 实例**——所以补丁静默无效。
- **解法**：在 `cordis.patch.yml:145-148`（`preset-standard` 内）与 `cordis.patch.yml:371-374`（`preset-maid` 内）两处 `compaction-basic` 加 `config.auto: false`，把压缩权交给 billion-context（bili #1772/#2474）。profile 层 `preset-ptc`、`preset-cordis` 内的 compaction 同理也要补。
- **验证方式**：横幅不再新增；压缩由 bili 接管。清空持久横幅：`POST http://127.0.0.1:18787/__bili/conflicts/clear`。

### 2.9 自检卡「git 身份」红灯，但推送正常

- **症状**：自检里「git 身份」显示 `未配置（commit 会失败；可配 sync.identity）`，可日志里 `PUSH OK` 一直在走。
- **原因**：旧版自检只看本机 `git config`，没算 `sync.identity`。v0.7.0（01558de）修过一轮（身份两来源，有其一即绿灯）；本机 v0.7.5 实测仍会显示红灯（因为本机走的是副本内的 local identity，两个来源都没配）——**属于已知的假警报**，看 `PUSH OK` 为准。
- **解法**：要么忽略，要么在 `maid-settings.json` 里补 `sync.identity`。
- **验证方式**：`sync/state` 的 `lastSyncedAt` 在推进 = 真的推成功了。

### 2.10 `pending:false` 不代表健康

- **症状**：以为 state 里 `pending:false` 就是「一切正常」。
- **原因**：变更检测分支只写内存，`syncOnce` 才会 `saveState`；所以 `pending:false` 可能只是没落盘。
- **解法**：判断健康要看 `lastSyncedAt` / `lastSyncedMtime` 是否在推进 + 日志有没有 `PUSH OK`。
- **验证方式**：如上。

---

## 三、与人设/记忆相关的坑

### 3.1 改了人设，界面还是旧的

- **症状**：只改了一处人设文本，重启后女仆口气没变（或只有部分场景变）。
- **原因**：人设三处副本 + defaults 一份快照，详见 1.6。
- **解法 / 验证**：同 1.6。另外人设也可由「设置 → maid 设置 → 人设」直接写（`writePersona`，落到 `$DSH_HOME/maid-settings.json` 覆盖层），改文件时注意别被面板值盖掉。

### 3.2 种子记忆灌进别人会话 / 自己库被覆盖

- **症状**：新设备一装上，别人的会话里冒出一堆不属于他的记忆；或反过来，本机已有记忆被种子顶掉。
- **原因**：播种逻辑是「目标工作区**已有** `memory.db` 就跳过，绝不覆盖」；`seed.enabled` 出厂为 `false`——别人装上不该直接进他家会话。
- **解法**：不要把 `seed.enabled` 默认打开；需要时按机器显式开。
- **验证方式**：`selfcheck` 的「随包记忆种子」项显示体积（本机 648 KB）；目标工作区 `.dsh-meow\memory.db` 未被改写。

### 3.3 多机共用同一个仓库，记忆互相顶掉 ⚠️

- **症状**：两台机器都推同一个记忆仓库，隔天发现远端条数反而变少，另一台的记忆整批消失。
- **原因**：导出是**全量重建**，不是合并。实测两次：2026-10-15 一台 457 条被另一台 203 条顶掉；2026-10-16 远端 478 → 256 又演一次。还见过远端 `memory/` 三件套整批是另一台机器（`C:\Users\Administrator`，118 条，与本机 60 条 id 零重叠）的版本。
- **解法**：**一机一仓**，或多机共用时手动合流。v0.7.6（tag `ff812ce`，尚未在 main 线上）加了「推送前合流远端快照」。
- **验证方式**：推完 `git -C ... log --oneline -1` 看提交内容与条数；远端 `memory/MEMORIES.md` 头部的「共 N 条」与本地一致。

### 3.4 合并两套记忆库时，靠相似度判重会误伤

- **症状**：想合并两台机器的记忆，用字面相似度筛重复，结果要么漏（id 零重叠 ≠ 内容不重复）、要么误删。
- **原因**：实测 19 对 `cosine ≥ 0.35` 的候选里，**真重复只有 2 对**。字面相似度只能当候选，不能当判决。
- **解法**：候选筛出来之后逐条人工/语义复核再删。
- **验证方式**：合并后条数与人工清点一致。

### 3.5 导出被门槛拦掉一批记忆

- **症状**：本地几百条，推上去只有一部分。
- **原因**：导出按 `minImportance` 门槛过滤（v0.7.0 前是硬编码 2，v0.7.0 起热读 `$DSH_HOME/maid-settings.json` 的门槛值），琐碎条目留在本地自用。本机当前门槛 ≥2。
- **解法**：要全推就把门槛调低，或接受这是设计。
- **验证方式**：`selfcheck` 的「设置文件可解析」项会报 `sync.enabled=true，门槛≥N`；日志里的「导出 N 条」条数与预期对齐。

### 3.6 改 prompt 语言踩的坑

- **症状**：新增/改了某个语言目录的 prompt，界面上还是中文；或某语言（如 `pt-br`）完全不生效。
- **原因**：`zh` 是键集真源；`promptLang` **逐字匹配目录名**（`pt` 不会解析到 `pt-br`），无匹配时**静默回落 `zh`**。槽位读取顺序是 `<home>/.dsh-meow/prompts/<lang>/<slot>.md` → 包内 `lib/prompts/<lang>/` → `lib/prompts/zh/`。9 个槽位，bm25 分词器与语言无关（CJK bigram）。
- **解法**：改 prompt 时**三语言键集同步**改；语言码写全（`pt-br` 而不是 `pt`）。
- **验证方式**：切语言后看渲染出来的文案；`<home>/.dsh-meow/prompts/` 下的覆盖文件优先级最高，删掉即可回落到包内版本。

### 3.7 脚本读记忆库报 `ERR_SQLITE_ERROR: unable to open database file`

- **症状**：自己写脚本调 `readRows()` 读记忆，报 `ERR_SQLITE_ERROR: unable to open database file`。
- **原因**：`readRows(srcDb)` 的参数必须是 **`memory.db` 的完整文件路径**；传工作区目录会当文件打开而失败。
- **解法**：传 `<工作区>\.dsh-meow\memory.db` 全路径。
- **验证方式**：能读出条数与 `MEMORIES.md` 头部「共 N 条」一致。

### 3.8 `node:sqlite` 显式传 `options: undefined` 报 `ERR_INVALID_ARG_TYPE`

- **症状**：`new DatabaseSync(path, options)` 传了 `undefined` 直接抛 `ERR_INVALID_ARG_TYPE`。
- **原因**：`getDb` 按参数个数分支，显式传 undefined 会走错分支。
- **解法**：**按参数个数**分支调用，别显式传 undefined（不传整个参数）。
- **验证方式**：连接成功、`PRAGMA quick_check` 返回 ok。

---

## 四、关键路径与配置落点

| 用途 | 落点（本机实测值） |
| --- | --- |
| 插件安装源 | `D:\DeepSeek Harness\Works\dsh-maid-preset`（profile 里以 `link:` 挂载） |
| profile 补丁 | `C:\Users\<用户>\.dsh\profiles\desktop\cordis.patch.yml` |
| profile 内插件目录 | `C:\Users\<用户>\.dsh\profiles\desktop\node_modules\dsh-maid-preset`（junction） |
| 设置文件（覆盖层，优先级高于仓内 patch） | `C:\Users\<用户>\.dsh\maid-settings.json` |
| 同步状态 | `C:\Users\<用户>\.dsh\maid-sync-state.json` |
| 同步日志 | `C:\Users\<用户>\.dsh\maid-sync.log` |
| 同步专用克隆（工作副本） | `C:\Users\<用户>\.dsh\maid-sync` |
| 工作区活库 | `D:\DeepSeek Harness\Works\.dsh-meow\memory.db` |
| 随包记忆种子 | `dsh-maid-preset\memory\memory.db`（+ `memories.json` / `MEMORIES.md`） |
| prompt 覆盖目录（最高优先） | `C:\Users\<用户>\.dsh-meow\prompts\<lang>\<slot>.md` |
| 出厂快照 | `dsh-maid-preset\defaults\cordis.patch.yml` |
| 自检 | `GET http://127.0.0.1:19387/dsh-maid-preset/selfcheck` |
| 同步状态接口 | `GET .../dsh-maid-preset/sync/state` |
| 手动触发推送 | `POST .../dsh-maid-preset/sync/now`（退避中返回 409） |
| 测试仓库连通 | `POST .../dsh-maid-preset/sync/test` |

关键配置键（`cordis.patch.yml` → `insert: dsh-maid-preset.config`）：

```yaml
sync:
  enabled: true
  repoUrl: ''          # 空 = 待机（本地记忆照常，只是不上传）
  branch: 'main'
  idleMinutes: 10      # 空闲 10 分钟才推
  maxWaitMinutes: 60   # 兜底：持续写入也最多等 60 分钟强制推（0 = 关）
  pollSeconds: 60
  proxies: []          # 空 = 自动探测本机活着的代理端口
  identity: null       # 空 = 交给该机 git config；两者都缺会暂停并写日志
seed:
  enabled: false       # 播种随包记忆种子，默认关
```

---

## 五、排查手法（怎么定位这一类问题）

### 5.1 先跑自检，一次看全 13 项

```bash
curl -s http://127.0.0.1:19387/dsh-maid-preset/selfcheck
```

覆盖：补丁文件 / 人设区段（字数）/ 随包种子（体积）/ 设置文件 / 工作区活库 / 记忆库完整性（`PRAGMA quick_check`）/ 同步目标 `repoUrl` / 同步状态 / 同步日志尾 / git 可用 / git 身份 / 凭据助手 / 本机代理端口。**哪一项先红，问题就在那一层**。

### 5.2 同步问题按「四层」拆

1. **主仓库本体**：`cordis.patch.yml` 里的 `sync.*` 与 `maid-settings.json` 谁在生效（设置文件优先，且在热读）。
2. **引擎状态**：`GET /dsh-maid-preset/sync/state` —— 看 `pending / lastChangeAt / lastSyncedMtime / pushFailed / fatalReason / nextRetryAt`。
3. **专用副本**：`git -C C:\Users\<用户>\.dsh\maid-sync status` —— 是否卡在 `rebasing`、是否干净。
4. **id 集合重叠度**：本地库与远端 `memory/MEMORIES.md` 的 id 比对（判断是不是被别的机器顶掉了）。

### 5.3 日志关键词速查（`maid-sync.log`）

| 关键词 | 含义 |
| --- | --- |
| `同步已启动：空闲 10min 推送（最长等待 60min 强制推），轮询 60s，副本 ...` | 引擎正常起来了 |
| `导出 N 条 / 快照 xxxB ← <活库路径>` | 本 tick 做了导出 |
| `PUSH OK → <repoUrl>#main` | 推送成功（唯一的健康信号） |
| `PUSH FAILED（网络类，N 分钟后重试，第 K 次）` | 网络类，会自动退避 |
| `已暂停同步（配置问题）：<detail>` | **配置类永久停摆**，必须人工处理（见 2.2） |
| `已达最长等待上限 60 分钟（记忆持续写入中），本轮强制推送` | 兜底触发 |

### 5.4 几个反直觉的坑

- **测同步类接口前必须先 `startSync`**，否则「引擎未运行」是假阳性。
- **改共享引擎代码跑测试要用临时 workcopy**，别拿真实 `maid-sync` 路径当试验田。
- **`pending:false` 不等于健康**（见 2.10）；`git 身份` 红灯也可能是假警报（见 2.9）。
- **界面看不见的故障占多数**：配置类停摆只写日志一行，UI 无感——新设备装机后**第一件事就是跑一次 `selfcheck` 并翻一眼日志尾**。

### 5.5 装机检查清单（新设备照着走）

1. 装插件 → 确认 profile 三条件（目录 / 依赖 / bundles）→ 重启。
2. `curl .../selfcheck` → 补丁、人设、种子、活库四项应该全绿。
3. 配本机 git 身份（或在 `maid-settings.json` 写 `sync.identity`）。
4. 到设置页填自己的 `repoUrl` → 点「测试连接」→ 点「立即同步」。
5. 翻 `maid-sync.log` 尾部确认出现 `PUSH OK`，再看 `sync/state` 的 `lastSyncedAt` 是否推进。

---

### 暂未遇到 / 待核

- 内置 meow 与独立 meow 同时存在时的加载顺序（有同 id 去重设计，未实测冲突）。
- macOS / Linux 下的路径与代理探测差异（本记录全部基于 Windows 实测）。
- v0.7.6「推送前合流远端快照」的实际行为（tag `ff812ce` 尚未并入 main 线，未在本机跑过）。
