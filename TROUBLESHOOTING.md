# dsh-maid-preset · 问题与解决记录

> 这份文档收拢 `dsh-maid-preset`（女仆预设 + 内置 meow 记忆 + 记忆自动同步）从**安装到运行**踩过的坑，给新设备装机时当对照表用。每条都是「症状 → 原因 → 解法 → 验证方式」，照着走一遍能避开大部分「装了但一点动静都没有」的沉默故障。
> 最后更新：2026-10-19（新增 6.22 新设备 git 身份停摆） ｜ 适用版本：本地 v0.7.11（未发布迁出）；6.21 起对应 v0.7.12 人设纪律 ｜ 素材来源：仓内 README/源码注释 + 记忆库踩坑条目 + 老家机与公司机实测

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

- **另一个成因：两边都在推**。记忆自动同步与本机手工提交同时发生，`push` 被拒成 non-fast-forward，看起来和「副本卡在 rebase」一模一样，但**处置完全不同**——盲目 `reset --hard origin/main` 会把本机这一轮的提交丢掉。判据（先分清再动手）：`git -C <maid-sync> rev-list --left-right --count HEAD...origin/main` → 左>0 且右>0 = **真分叉**，走 `rebase`（`git pull --rebase` 后重推）；左>0 且右=0 = **只是本地领先**，直接推；左=0 且右>0 = **只是落后**，才用 `ff-only` 拉。**未验**：没有留下「真分叉按 rebase 处置后 `PUSH OK`」的日志片段。

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
- **原因**：旧版自检只看本机 `git config`，没算 `sync.identity`。v0.7.0（01558de）修过一轮（身份两来源，有其一即绿灯）；本机 v0.7.5 实测仍会显示红灯（因为本机走的是副本内的 local identity，两个来源都没配）——**属于已知的假警报**，看 `PUSH OK` 为准（v0.7.9 已修，详细复盘见 6.5）。
- **解法**：要么忽略，要么在 `maid-settings.json` 里补 `sync.identity`。
- **验证方式**：`sync/state` 的 `lastSyncedAt` 在推进 = 真的推成功了。

### 2.10 `pending:false` 不代表健康

- **症状**：以为 state 里 `pending:false` 就是「一切正常」。
- **原因**：变更检测分支只写内存，`syncOnce` 才会 `saveState`；所以 `pending:false` 可能只是没落盘。
- **解法**：判断健康要看 `lastSyncedAt` / `lastSyncedMtime` 是否在推进 + 日志有没有 `PUSH OK`。
- **验证方式**：如上。

### 2.11 导出的记忆来自「错的库」：按 mtime 挑到最新，却是别人的库（2026-10-18）

- **症状**：同步一直正常、`PUSH OK` 照常出现，但推上去的记忆内容和本机主库对不上——日志里 89 次导出的源库全部指向 `D:\DeepSeek Harness\Works\.dsh-meow\memory.db`，而本机实际在用的不是它。`lib/sync.js:113` 的 `pickSourceDb` 在 `window-index.json` 的候选里挑 `mtime` 最新的一份，本机 4 个候选里包含 `<DSH_HOME>\bili-duty` 这种空库。
- **原因**：根因未证实（**待核**：`pickSourceDb` 的旧实现按 `mtime` 最新选库，而「最新被写的库」不等于「当前主机在用的库」；两者在什么条件下分叉、89 次统计的完整口径，提交正文与日志都没有自陈）。
- **解法**：提交 `c153ee5` 起改为**显式配置 + 只读证据**：`DEFAULTS` 增加 `sourceDb: ''`（空 = 沿用旧的自动选库，兼容老配置；**一旦显式配置就绝不回落**）；`pickSourceDb(cfg)` 的显式分支依次校验——非空绝对路径 → `statSync().isFile()` → `new DatabaseSync(path, { readOnly: true })` → `PRAGMA quick_check === 'ok'` → 表名含 `LEVELS`；新增 `inspectSourceDb(userCfg)`，只读观测，返回 `{ ok, selectedDb, mode, checkedAt, evidence: 'read-only-selection', error }`。
- **验证方式**：`scripts/test-source-db.mjs`（130 行）覆盖显式路径、非文件、quick_check 不过、缺 `LEVELS` 表四类分支并全通过（**未验**：没有「重启后实际导出源已切到正确库」的运行时确认）。
- **证据**：提交 `c153ee5`（`feat(sync): explicit source database and read-only selection evidence`，`lib/sync.js` +48、`lib/index.js` +11、`scripts/test-source-db.mjs` 130 行），2026-10-18；旁证记忆 `0mvdv8umw-d8c86543280544a2914eaa2f21`。
- **教训**：「自动挑一个」这种便利逻辑，在有多份同类数据时迟早挑错一次，而且错得安静——同步照样成功，只是内容是别人的。

---

### 2.12 通用设置调权限报错：乐观锁版本冲突（2026-10-20）

- **症状**：在桌面端「通用设置 → 权限」页面修改设置并点击保存时提示失败：
  ```
  settings namespace "permission" changed since it was read (expected revision 8, now 10)
  ```
- **原因**：并非配置文件损坏或系统文件权限问题，而是前端页面持有的配置 revision 版本滞后。在设置页面处于打开状态期间，后台的子代理、定时任务或另一标签页修改了同一 namespace 的配置，导致服务端的版本号由 8 递增至 10。前端再次以旧 revision 8 提交时，服务端触发了内置的乐观并发锁校验并拒绝覆盖。
- **解法**：无需重置或修改磁盘配置文件，也无需调整代码。直接刷新客户端界面或重启，使前端重新获取最新 revision 的配置基线后再行保存即可。
- **验证**：2026-10-20 会话现场排查记录（seq21 报障，seq36 推断并发冲突，seq411 确认结论）；刷新页面后再次调整权限配置，保存成功且 revision 递增至 11，无任何额外代码改动。
- 来源：2026-10-20 桌面端会话记录 `seq21-seq411`；`dsh-maid-lane-fix/docs/incidents-2026-10-20.md` 第九条。

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
3. 配本机 git 身份（或在 `maid-settings.json` 写 `sync.identity`）。**新设备首启若 `maid-sync.log` 出现「已暂停同步（配置问题）」，就是这条没做，恢复手法见 6.22。**
4. 到设置页填自己的 `repoUrl` → 点「测试连接」→ 点「立即同步」。
5. 翻 `maid-sync.log` 尾部确认出现 `PUSH OK`，再看 `sync/state` 的 `lastSyncedAt` 是否推进。

---

## 六、工程复盘（版本管理 / 自测踩坑）

> 以下为历史现场记录；其中 6.7、6.8、6.11 描述的是迁出前实现，已由文末 6.20 迁移记录取代，不是当前启用指引。

### 6.1 版本号被别的机器「误传」占了号段，改号时不要跳号

**症状**：公司电脑上跑出来的两个分叉提交挂了 `v0.6.4`/`v0.6.5` 标签推上远端（不在 main 线上）；老大明确「公司电脑今天的数据不要」，于是远端本地双删。随后本机修完一个真 bug，小困顺手把版本标成 `v0.6.6`——老大指正：「v0.6.6 改为 0.6.4，之前删除的 v0.6.4 / v0.6.5。不算在更新，是错误上传。」

**原因**：把「删掉过的版本号」当成「已经用过的版本号」，于是为了绕开它跳号。**跳号会制造假象**——看版本历史的人会以为这段时间真的连升了两版，实际只是清了一次误报。

**解法**：误传 / 误删的号段**直接复用**，不算一次更新。改号要三处一起改齐：`package.json` 的 `version`、git tag（先删旧的再重打，新 tag 必须拴在 main 线的提交上）、README 与事故单里的版本字样。改号本身单独一个提交，消息里写清来龙去脉。

**验证方式**：`git ls-remote --tags origin` 与 `git tag` 两处列出的标签集合一致，且每个 tag 指向的提交都在 `main` 线上（`git merge-base --is-ancestor <tag> main`）；改号后全文搜索旧号应无残留。

### 6.2 「主任务被反思任务打断」——根因未证实，别照着推断动手

**症状**：老大反馈长任务收尾后冒出来的不是主线结果，而是「记忆反思」卡；公司电脑上一天多次。

**原因（截至 2026-10-16 仍未证实）**：曾推断 `agent/turn-stopping` 里连续工具步 ≥ `reflectTurns`（默认 7）就 `sendMemoryTurn` → `agent.followup` 把反思轮入队，压在老大随后发的消息前面。**两轮真值验证都没复现**（59 个会话 / 约 199 个反思轮）：反思轮之后到出现真人消息的中位间隔 47 个事件、**0 次**落在 ≤5 事件内；反思轮「入队 → 跑完」窗口内真人消息被压后 **0 次**。

**走过的弯路（别重犯）**：① 把会话日志里 seq 371 那条 `plugin:meow-memory`「可能相关的记忆，仅供参考」**误当打断证据**——那是关键词命中的**正常注入**，设计上本就排在真人消息之前，与反思轮无关；② 写过 `hasUnfinishedTodos` 判据（读本 turn 末个 `todo/write` 有无非 completed 项）去拦，真值验证 **59 会话 / 197 反思轮拦截 0 次**（老大干长活时根本不开 todo），纯空转，已从 `lib/meow/index.js` 撤净。

**解法**：**暂停处理**（老大 2026-10-16 定调「没判据就先不处理它吧」）。真要动，下一步是在**打断现场抓实时日志**（哪条消息、等了多久、反思卡出现在哪一步），不要继续从历史日志反推。

**验证方式**：无（现象未复现）。复跑脚本 `_acl-recovery/verify_reflect_race.cjs`、`verify_reflect_window.cjs` 会得到同样的 0 次结论。

### 6.3 自测同步引擎时环境变量设错，测到的是别人的活库

**症状**：写「只拉不推」端到端自测，明明造了隔离的假远端与假活库，回报却是 `added:0, updated:0, remote:1`——远端快照读到了，却一条都没并进来；断言 `added=1` 全红。

**原因**：`pickSourceDb()` 定位活库读的是 **`USERPROFILE` / `HOME`** 下的 `.dsh-meow/window-index.json`（`lib/sync.js:110`），**不认 `DSH_HOME`**。自测里设了 `process.env.DSH_HOME`，于是完全没被采纳，函数转身读了**本机真实活库**——测的其实是开发机上那 195 条真实数据，人造的 R1 自然不在结果里。

**解法**：自测里设 `process.env.USERPROFILE = <临时 home>`（Windows）或 `HOME`（类 Unix），并且**必须在临时 home 下先建出 `.dsh-meow/` 目录再写 `window-index.json`**（形态是对象 `{ "ws-1": "<工作区绝对路径>" }`，不是数组）。另：造测试库要照抄真实列结构（七张表列数不同），列不对会让合并时的取值错位、插入静默失败。

**验证方式**：`node scripts/test-pullonly-e2e.mjs` 应 5/5 全绿——其中「远端仓库 commit 数未变」这条证明只拉不推确实没推；跑完再用 `select count(*) from fact` 核本机真实活库条数**前后不变**（实测 195 → 195），确认自测没污染真库。辅助脚本：`scripts/test-helpers.mjs`（按真实列结构建库）、`scripts/test-pullonly.mjs`（合并语义 6 用例）。

### 6.4 加开关兼容层时，默认值会抢在旧字段前面命中——老配置被静默改回默认行为

**症状**：把「只拉不推」二态开关（`pullOnly`）升级成三档「同步方向」（`direction`），保留 `pullOnly: true ⇒ direction='pull'` 的兼容。结果跑旧的端到端自测（脚本仍传 `pullOnly: true`）时，`resolveDirection` 返回了 `'both'`——**本该只拉不推的机器走了双向分支，还往远端推了一次**（远端 commit 数 1 → 2）。

**原因**：`syncOnce` 会把 `DEFAULTS` 铺开成 `{...DEFAULTS, ...rawCfg}`，于是 `direction` 永远有个默认值 `'both'`。兼容判断写成「先看 `direction`、再退回 `pullOnly`」，那个默认值就把旧字段**抢先吃掉**了——旧配置形同虚设。

**解法**：兼容层的判据顺序必须**先认旧专用字段、再认新字段的默认值**：`if (cfg.pullOnly === true) return 'pull'` 放在最前，然后才判 `direction` 的合法值。凡「新字段带默认值 + 旧字段做兼容」的组合都要按这个顺序写。

**验证方式**：`resolveDirection` 五个用例——纯旧配置 `{pullOnly:true}`、**被默认值铺开后的** `{direction:'both',pullOnly:true}`、显式 `pull` / `push`、非法值退回 `both`——都应得到期望结果（前两者都必须返回 `'pull'`）。三档端到端脚本 `scripts/test-direction.mjs` 5/5：both 吃远端且推、pull 吃远端但不推、push 不吃远端但推、三档都保住本机独有条目。

### 6.5 自检报「git 身份 ❌」但同步其实一直好着——探测位置选错了

**症状**：老大重启后点「一键自检」，第 14 项 **git 身份** 红叉，详情「未配置（commit 会失败；可配 sync.identity）」。可同步看起来好好的（状态「已启动｜空闲 10 分钟推送」，日志里上次推送 2026-10-16 23:57:48 成功）。

**原因**：**判据的 cwd 选错了，是假红**。自检在**自己的 cwd（工作区）**里跑 `git config user.name` ——老大从没在任何工作区配过身份，当然为空。但同步真正提交的地方是**专用克隆** `$DSH_HOME/maid-sync`（默认 `C:\Users\Kayle\.dsh\maid-sync`），那儿在 2026-10-15「身份缺失断更一天」那次事故后已经 `git config --local` 配好：`Valorine97417 <Valorine97417@users.noreply.github.com>`。两处 cwd 不同，判据与事实分叉。

**解法**：自检的身份探测按**提交时的真实优先级**排三个来源——① `sync.identity` 配置（`resolveIdentityArgs` 最优先用）；② **专用克隆里的 git config**（`selfCheck` sits 第二参 `syncCfg.workcopy`，缺省回退 `$DSH_HOME/maid-sync`）；③ 自检 cwd 兜底。命中哪条就在详情里写明来源（「走 sync.identity」/「克隆内已配好，提交就用它」/「工作区 cwd」）。`selfCheck(syncIdentity, syncCfg)` 第二参为向后兼容新增，调用点 `lib/index.js` 传 `config?.sync`。

**验证方式**：`node scripts/test-selfcheck-identity.mjs` 3/3——造「工作区无身份 + 专用克隆有身份」的真实布局（正是老大本机现状），断言身份项 `ok:true`、详情含「克隆内」与真实身份名；同时确认克隆尚未建立时仍会如实报「未配置且克隆尚未建立」（首次同步会自动 clone，不算故障）。

---

### 2026-10-18 · `unknown prompt variable "{{cwd}}"` 导致会话无法开始（未闭环）

- **症状**：用户截图和会话日志均出现 `unknown prompt variable "{{cwd}}" in section "deployment:persona-suffix"; registered variables: provider, model`。用户反馈「点重试了也不行还是cwd」。
- **原因**：当次失败的提示词组装只注册 provider / model，旧 standard / maid persona suffix 仍引用 `{{cwd}}`。读取宿主 persona 实现确认：预设级 suffix 也使用 `deployment:persona-suffix` 这个节名，不能仅凭节名判断错误来自顶层配置。历史记忆记载 rc.2 起不再内置 cwd 变量；当前直接证据是上述报错和源码，不把版本历史当本轮重新核验结论。
- **解法**：先备份，再删除主 `cordis.patch.yml` 与出厂 `defaults/cordis.patch.yml` 内的整行 `suffix: Your working directory is {{cwd}}.`，共 4 处；保留人设、委派纪律与合法 `{{model}}`。当前工作目录由 `dsh-working-directory` 的 literal runtime context 提供，不另造变量、不改宿主插值器。若重试仍失败，核对实际运行实例、profile、配置来源与原会话加载状态；完整退出（含托盘）再打开是待验证的重新加载步骤，不保证必然治愈，也不擅自结束其他会话。
- **验证方式**：本地 `scripts/test-no-cwd-template.mjs` 已对主配置、出厂副本及 desktop profile 配置检查，3/3 PASS（旧引用为零、委派纪律各保留三处）；独立子代理静态复核通过并完成运行。但用户随后在原入口重试仍失败，尚无重启后原入口成功的确认，因此状态为**静态修复完成、运行时恢复待验**。磁盘零命中不等于运行实例已更新，子代理成功不等于原失败会话恢复。前次答复「直接重试即可」及「旧缓存导致」都说早了，后者只能列待核假设。验收须记录原入口的新一轮结果；若仍报错，保留完整新错误与时间再定位，禁止反复让用户盲试。

### 2026-10-18 · 排查脚本与实际工具路由不符

- **症状**：本轮先后遇到 `Get-ChildItem: A parameter cannot be found that matches parameter name 'la'`、`head: The term 'head' is not recognized`；邻近排查日志还出现 `unknown tool "ops_read_file"`。
- **原因**：将 Bash 语法交给实际输出 PowerShell 的命令工具，以及使用当前工具目录不存在的读文件工具名；不是预设代码本身报错。直接对 asar 内的虚拟目录做普通文件检索也失败，不能据此判断宿主文件缺失。
- **解法**：先看当前工具定义；通用命令走 `ops_bash`，文本读取/检索走当前存在的文件工具。宿主文件在 asar 内时，读取归档或已有提取副本，不把虚拟路径当普通目录。本轮复用了已有提取源码确认 persona 和插值机制。
- **验证方式**：后续 `ops_bash` 的 Node 回归检查正常结束、3/3 PASS；文件工具能读取配置及事故单。不要继续重跑已知错误的 shell 组合，遇到权限拒绝应按拒绝指引申请授权，不换路径或工具绕过。

### 2026-10-18 · 本地预设目录不是完整 Git 工作副本

- **症状**：`git -C dsh-maid-preset status` / `log` 报 `fatal: not a git repository (or any of the parent directories): .git`。
- **原因**：本轮检查到本地 `.git` 仅有 objects、packed-refs、refs，缺少 HEAD / config；因此不能把「存在 .git 目录」当作仓库健康的证据。元数据为何残缺未核实，不归因于用户中断。
- **解法**：不在运行目录执行 reset 或强行补造 HEAD。使用健康的同步克隆创建工作区内的独立发布副本，将 origin 指向目标 GitHub 仓库，fetch 后只允许快进对齐，再按远端内容合入事故条目。本轮发布副本为 `_probe/preset-incident-20261018`；同步克隆仅用作读取来源，不在里面提交。创建副本首次被沙箱拒绝，获得授权后原命令成功。
- **验证方式**：独立副本 clone / fetch / `merge --ff-only origin/main` 成功；提交前后检查 diff 与状态，push 后核对远端提交和文件内容。此方案解决本次发布路径，不等于修复了原目录残缺的 Git 元数据。

### 6.6 修改源码没效果：desktop 仍加载旧 tgz 实体副本

- **症状**：工作区源码已改，运行行为仍是旧版；desktop 的 `node_modules/dsh-maid-preset` 曾是 0.7.9 实体副本。
- **原因**：profile 依赖仍指向旧 `file:` tgz，安装产物不会跟随工作区文件变动；编辑源码不等于编辑实际加载包。
- **解法**：将 desktop 依赖改为 `link:D:/Works By DSH/dsh-maid-preset`，核对 junction 目标及包版本；当前工作区包为 0.7.11。不要只看工作区 `package.json` 就断言运行实例已经升级。
- **验证方式**：本轮读取 `C:/Users/Kayle/.dsh/profiles/desktop/package.json` 得到上述 `link:`；`Get-Item` 显示 `node_modules/dsh-maid-preset` 为 Junction、Target=`D:/Works By DSH/dsh-maid-preset`，从该安装入口读取版本为 0.7.11。以上是磁盘安装核验；仍需完整退出并重启 DSH 后验收运行时。

- **补充（2026-10-19）：先给顺序，别一上来就重启**。上面四段讲的结论对，但没给可执行次序，于是下次照样会先重启、白等一轮。判据按三步走，**顺序不能倒**：
  ① **先看 profile 的依赖写法**——读 `$DSH_HOME/profiles/desktop/package.json` 里本包的依赖值：`file:`（含 `file:.../*.tgz`）会把源码**拷成实体目录**进 `node_modules`，此后改仓库源码等于没改；必须是 `link:D:/Works By DSH/dsh-maid-preset`。顺手验安装形态：`cmd /c dir "%USERPROFILE%\.dsh\profiles\desktop\node_modules"` 看本行是不是 `<JUNCTION>`，实体目录即命中本条。
  ② **再看装配产物的 mtime**——`$DSH_HOME/profiles/desktop/cordis.yml`（及 `cordis.patch.yml`）的修改时间若**早于**你改源码的时刻，说明还没重新装配，此时重启也不会带上新配置；产物比源码新才轮到第③步。
  ③ **最后才重启 DSH**——宿主无热重载，改完不重启一切等于没改。
  2026-10-18 派活指引不生效那次，真凶就是第①步（依赖仍指向旧 `file:` 制品），中间白怀疑了一轮 `systemPrompt` 握手。
- **本机磁盘核验（2026-10-19 复核，只读）**：`%USERPROFILE%\.dsh\profiles\desktop\cordis.yml` 73193 字节、mtime `2026-10-18 23:34`；同目录 `cordis.patch.yml` 16190 字节、同时间；`node_modules` 下 `dsh-maid-preset` 为 `<JUNCTION>` → `D:\Works By DSH\dsh-maid-preset`（目录时间 `2026-10-18 04:20`）。这三条只证明「盘上是 link 形态且产物刚装配过」，**运行时是否已加载新版未验证**——仍需完整退出重启后按 §6.13 的办法验真实行为，别拿磁盘核对当功能验收。
- **与 §1.2 的分界**：§1.2 讲的是 junction **断链**（源目录被移走，链断、bundles 被剪），本条讲的是 junction **根本没建**（依赖写成 `file:` 实体副本）。两者表现都是「改了没效果 / 目录不见了」，但前者整包消失、后者包在却是旧内容，别混为一谈。

### 6.7 委派纪律静态与运行时双注入，缺省配置还会偷偷开启

- **症状**：三处 persona 已含静态委派纪律，运行时又挂 `dsh-maid-preset:delegation-guidance`，形成两套文本，浪费 token 并可能产生规则冲突。
- **原因**：静态人设与独立 runtime section 是两条注入路径；旧开关采用缺省开启语义，装配产物缺少 delegation 字段时仍可能重复挂载。
- **解法**：`lib/index.js` 的 `registerDelegationGuidance(ctx, config)` 仅在 `delegationCfg?.enabled === true` 时继续注册；主 patch 与 defaults 均设 `delegation.enabled: false`。静态纪律保留；确需运行时自定义才显式开启，并自行避免双注入。
- **验证方式**：本轮 `node _probe/guidance-unit.mjs` 输出 false→0 次、无 delegation 键→0 次、true→1 次（order=2801）、自定义文本正确；六处一致性脚本同时确认主/defaults 均为 false。注意该 guidance 脚本仅打印结果、没有断言，本轮输出后进程未自行退出，60 秒被执行器终止（exit 1），不能称其完整通过；原因未定位。完整重启后的真实提示词仍待验。

### 6.8 runtime section 重复 apply 与跨 ctx disposer 污染

- **症状**：同 layer 重复 insert 同名 section 会触发 duplicateError；模块级共享注册状态又可能让新 ctx 误以为已经挂载，卸载边界也不清晰。
- **原因**：去重状态若全局共享，无法区分宿主上下文；对同 ctx 无条件重复注册则撞同名 section。旧实现问题及本轮修复以源码机制为准，不把模拟测试当真实宿主生命周期验收。
- **解法**：`lib/index.js:295-355` 使用 `WeakMap` 按 ctx 存独立 `Set`，由 `disposersOf(ctx)` 取得；当前 ctx 的集合非空时不再调用 section；成功返回函数才加入该集合；`dispose` 事件只遍历并清空本 ctx 的 disposer，之后该 ctx 可重新挂载。不同 ctx 各自注册、各自清理，不互相借用标记。
- **验证方式**：源码逐行确认上述机制；guidance 脚本显示同 ctx 两次 apply 只注册 1 次、多个新建 ctx 仍各自注册。该脚本的 `on` 是空实现，**没有触发 dispose**，且进程本轮超时终止，因此只支持这些打印观测，不能宣称卸载/再挂载已通过自动断言。真实宿主重载、跨 ctx 清理与完整重启后行为待验。

### 6.9 人设只保存顶层，或按正文关键词识别 preset：二次保存与恢复默认失效

- **症状**：设置保存只更新顶层 `personaPrefix`，standard / maid 两份 preset 漂移；中途改为按正文关键词匹配，首次保存去掉关键词后，第二次保存或恢复默认又漏掉两处 preset。
- **原因**：把可被用户任意替换的人设正文当配置身份，匹配条件会被保存动作自己破坏；只写顶层也覆盖不了 preset 内自己的 persona prefix。
- **解法**：`lib/settings.js:113-179` 按 `preset-standard|preset-maid → config.plugins → id:persona → config.prefix` 的结构身份定位，同步顶层与两处 preset；扫描时跳过块标量正文，避免将正文里的 YAML 样式行误识别为配置。恢复默认复用相同写入路径。
- **验证方式**：本轮 `node _probe/persona-structural-regression.mjs` **8/8 PASS**：无关键词首次/再次保存、字节幂等、非目标与伪结构正文不改、去关键词后恢复默认、非目标配置语义保持、CRLF 保持、备份只在临时 home。测试只写临时包副本，不修改真实 profile。

### 6.10 preset 的 `>-` 把多行人设折叠成一行

- **症状**：面板保存多行内容后，YAML 解析出的 preset prefix 丢失普通换行，与顶层人设的段落结构不一致。
- **原因**：YAML `>-` 是折叠块标量；仅把文本原样写进缩进块，不能保证解析结果保留换行。
- **解法**：`syncPersonaPrefixes` 接受旧 `>-` 与新 `|-`，写入统一使用 literal `|-`，保留正文换行与空段；同时保持原文件行尾风格。
- **验证方式**：结构回归 8/8 中明确用 YAML 解析后逐字比较多行、空段及正文缩进，且连续第二次保存成功；不能只用去空白归一化一致性检查证明换行正确。本轮 `node --check lib/index.js`、`node --check lib/settings.js` 均正常退出。

### 6.11 defaults 漏补纪律，恢复出厂重新带回旧版

- **症状**：主 patch 已更新委派纪律，出厂副本仍旧；恢复默认后纪律消失或文本回退（关联 1.6、3.1）。
- **原因**：主 patch 与 defaults 各有三处人设，修主配置不等于修出厂快照；本轮曾漏掉 defaults。
- **解法**：补齐 defaults，使两文件各三处都保留同版纪律，主/defaults 的 delegation 均默认 false。本轮事故单阶段不再修改源码或 YAML，只核验已经完成的修复。
- **验证方式**：本轮 `node _probe/check-persona-consistency.cjs` 输出主 3 + defaults 3，六处纪律均 true，去空白归一化后唯一文本数 1（normLen=966），两文件 delegation 都为 false。该脚本只打印、不用断言，因此还需阅读输出；归一化同文不等于逐字/换行完全相同。原有运行会话未逐一验收，完整重启后的实际行为仍待验证。

### 6.12 配置 patch 的 `config` 是整体替换，不是逐字段合并

- **症状**：在基础 `cordis.yml` 补回 TTS 参数，仍可能被 profile patch 中的残缺 `config` 盖掉；只检查基础文件会得到「配置恢复了」的假结论。
- **原因**：现存恢复脚本 `D:/Works By DSH/restore-patch-yml-xiaomi.cjs:5-7` 明确记录 `applyEntryPatches` 对配置执行 `target[key] = value`，整个 config 被替换。另一个 `check-xiaomi-restored.cjs:3` 只读基础 `cordis.yml`，并没有核验最终合成配置。
- **解法**：先备份并确认同 id 条目的各层来源，以实际生效 patch 的完整 config 为单位恢复，保留未要求变更的字段；不能只往基础层补几项就收工。本次事故单整理仅阅读恢复脚本，不再次执行配置写入。
- **验证方式**：直接读取上述两个脚本确认其操作对象与检查范围；最终验收应读取合成配置再核对运行时音色、语速和 readScope。本次没有重跑恢复脚本，也未重新执行宿主配置合成或播放验收，不能据历史注释声称本轮运行时已恢复。

### 6.13 自检标记全绿、dry-run 有 applied，都不等于真实功能通过

- **症状**：补丁特征串齐全或预演列出 applied，就被解释为「补丁最新版且功能正常」。
- **原因**：TTS 自检检测标记；VCP 的 dry-run 只计算替换、不写盘；VCP 旧短路还曾只看安装痕迹，跳过新版模块内容。三者的证明范围不同。来源：TTS 事故单第六章第 3–5 条；VCP 事故单 1.3、1.5。
- **解法**：分开记录「标记在位」「真实代码行为」「运行入口验收」。文本行为用现有 `D:/Works By DSH/tts-309-landed-check.mjs`：复制实际安装的 lib 到临时目录，追加导出后 import，沿真实函数链跑样本；不能重抄一份实现充当端到端。识别文本 chunk 时排除 client.js。
- **验证方式**：本次执行上述探针正常退出，实际文本 chunk 为 `text-B7NACAYZ.js`，8/8 通过（CSS、纯卡片、嵌套 div、流式 style、标记、普通文本、围栏代码等）。它只验证文本链，不验证真实声音、自动播放或跨会话；其中第⑥题名虽称「写残」，输入实际仍以 `-->` 闭合，不能算残缺标记容错验收。

### 6.14 旧 `_probe` 路径缺失与测试数字漂移，不能拼成新一轮通过记录

- **症状**：旧事故单引用仓库外 `D:/DeepSeek Harness/Works/_probe/`，迁移后照路径找不到；首段探针同时出现 9 场景与扩展后 12 场景，补丁编辑数有 32、33，容易被混写为当前统一结果。
- **原因**：临时探针不是随包产物；测试集与上游版本会变化。TTS 事故单 3.2 已注明声学 Python 脚本和旧样本不在仓库；2.10 是 12 场景历史记录，第六章清单仍写首段 9 场景。分发器还保留 3.0.8 的静态 EDITS/TARGET_FILES 兼容出口（`lib/edits.js:114-120`）。
- **解法**：按实际文件、版本和执行时间分别记账；缺失就写不可复跑，不迁移旧成功数字冒充新结果。当前找到的落盘文本探针在 `D:/Works By DSH/tts-309-landed-check.mjs`；真实目标取 planEdits 返回的 targetFiles，不拿旧静态数组推断。
- **验证方式**：本次读取源事故单与探针原文，确认清单范围不一致；本次真正重跑的文本行为为 8/8、内存重放为 33 条（见 6.15）。没有重跑旧 9/12 场景、声学统计或缺失脚本，旧数字只保留为历史来源。

### 6.15 核验真实补丁重放，不能拿 already 短路当重放成功

- **症状**：对已打补丁的安装树调用 planEdits 得到 already，或只检查锚点字符串，就声称「真实补丁已完整重放、逐字节一致」。
- **原因**：`lib/edits-v309.js:837-847` 在标记齐全时直接返回 `already:true`、空 applied、无 contents；并未执行编辑。TTS 事故单 1.5 还记录 pnpm patch 可能取到已补丁缓存，不能把任意暂存树当干净上游。
- **解法**：使用确认为上游原始产物的树与真实分发器顺序重放，记录 ok/already/applied/failed/targetFiles；若要求可复现性，还须对重放字节与正式补丁/落盘做比对。仅内存计算不改运行目录，也不需要 redo 或重新安装。
- **验证方式**：本次从现存上游包 `D:/Works By DSH/update-audit-artifacts/dsh-xiaomi-tts/package` 调用真实 `lib/edits.js` 的 planEdits，读取文件、仅在内存计算：`ok:true, already:false, applied:33, failed:0`；目标为 `lib/client.js` 与 `lib/text-B7NACAYZ.js`。这证明当前存放树可重放，不证明来源 tarball 的独立完整性，也没有完成正式 patch 的逐字节等价核验；历史 `git apply -R → 重放 → 比对` 不能冒充本次已重跑。

### 6.16 Electron 中读取 asar 本体须用 original-fs

- **症状**：app.asar 明明存在，归档读取却报 ENOENT；将其内部虚拟目录当普通目录检索也失败，容易误判宿主文件丢失。
- **原因**：Electron 的 node:fs 带 asar 包装，读取归档本体也会被拆为归档内路径。与 VCP 事故单 1.2 的运行中旧 offset 缓存事故不同，不应混为一种故障。
- **解法**：复用 `D:/DeepSeek Harness/Works/dsh-maid-vcp/patch/asar-io.cjs:28-37`：优先 `require('node:original-fs')`，普通 Node 无该模块时回落 node:fs。现有 `D:/Works By DSH/check-vcp-asar-bound.cjs:10-18` 也记录 process.noAsar 与归档读取边界；读取本体和读取归档内条目须明确区分。
- **验证方式**：本次直接阅读上述实现确认分支存在；未重新写 asar、未重启宿主，也未把静态检查当 GUI 渲染验收。归档修改另须遵守追加写入、保长头和退出/重启要求，不能为验证文档随手重打运行中的包。

### 6.17 Jasna 的 stopped 故障：修复痕迹在，原失败现场尚未闭环

- **症状**：本次整理需追溯 stopped 相关面板故障，但现有 Jasna 事故单没有专项原始堆栈；不能仅凭全库搜索命中或相邻故障就确定原入口已修复。
- **原因**：`D:/Works By DSH/jasna-source/lib/client.js` 的 fmtDur 注释明确记载它与 stopped 同次事故被连带删除；原事故单 3.1 已记录 fmtDur 缺失导致任务结束白屏。两者相关，但 fmtDur 不能替代 stopped 的根因证据。
- **解法**：当前轮询使用局部 `alive` 守卫：异步更新和重排定时器前检查 alive，卸载设 false 并 clearTimeout；fmtDur 定义亦已补回。按这些现存源码记录修复形态，不虚构旧 stopped 的精确调用栈、删除提交或用户确认。
- **验证方式**：本次读取源码确认轮询守卫/清理和 fmtDur 定义；搜索 stopped 只得到事故注释，不能据此证明所有加载产物都已更新。尚缺原始 ReferenceError 堆栈、对应修复 diff、实际加载包核对及重启后原入口成功记录，因此 stopped 的根因定位与运行恢复均保留待验；本次不启动或结束 Jasna 任务。

### 6.18 多帧 zstd 会话日志不能只读首帧，也不能错认消息形状

- **症状**：日志解压后只见早期记录，或统计出大量「消息缺 id」，继而误判后续故障不存在/会话全坏。
- **原因**：会话日志由多个 zstd 帧追加；所用解压方式是否处理串联帧须实测，不能凭一次非空输出断言完整。事件形状亦不同：assistant 消息可在 data.message，user/tool-result 可直接在 data。
- **解法**：参考 `D:/Works By DSH/dsh-maid-comfyui/scripts/analyze-sessions.mjs:8-46,60-89` 按帧边界解压后拼接，再逐行解析；报告完整帧数、torn 尾帧和异常行，不能静默丢弃后半段。按事件类型解析消息。脚本 root 当前硬编码其他用户路径，直接运行前须在隔离副本指定正确日志目录，不修改产品配置。
- **验证方式**：本次阅读扫描器确认逐帧循环及 data.message/data 分支；其 JSON 解析失败会 continue，所以完整取证还需单独统计坏行。本次没有扫描全部会话，也不宣称缺 id 为零、尾帧完整或首帧解压法一定丢数据。

### 6.19 断言先核源码：探针期望错误会制造假阳性事故

- **症状**：TTS 多行标记探针报失败，实际输出 `老大， 多行 标记也要能认。`；容易为了「让测试绿」把正确实现改坏。
- **原因**：源 TTS 事故单 2.5 已记录实现 `match[1].replace(/\s+/g, " ").trim()`，它保留单空格，不是删除全部空白。探针期待无空格本身错误。6.13 的「写残」样本实际闭合，也是测试名不等于测试覆盖的同类问题。
- **解法**：先读真实函数与实际输入，再区分实现缺陷、旧接口/桩生命周期不符、错误期望值；仅修有证据的测试，不为错误断言修改产品源码，也不把测试标题当验收证据。
- **验证方式**：本次直接核对源事故单 2.5 与落盘探针样本，确认上述证据边界；旧多行专用探针未重跑。本次文本链 8/8 仅按实际输入范围报告，不外推不存在的覆盖。

### 暂未遇到 / 待核

- 内置 meow 与独立 meow 同时存在时的加载顺序（有同 id 去重设计，未实测冲突）。
- macOS / Linux 下的路径与代理探测差异（本记录全部基于 Windows 实测）。
- ~~v0.7.6 推送前合流远端快照的实际行为~~ → **已并入 v0.7.7 并实测**（三档端到端脚本覆盖 `both` 分支，冲突时 version 取新号、保留 icon 字段）。

### 6.21 语音播报纪律缺失导致每轮漏打标记（2026-10-19，v0.7.12）

- **症状**：老大报障「现在没有只念重点」。翻查历史日志发现，最近 20 条消息中 19 条未带 `<!--tts:...-->` 标记，连续 22 条裸奔；系统只能退回 first-segment 首段截断兜底，念出生硬的开场白（如「收到，维持 1.2」）。
- **原因**：病根在小困每轮唯一必读的 `personaPrefix`（部署级全局女仆人设）里，全文对「朗读、TTS、标记」零提及。纪律仅散落在记忆库和事故单中，一旦会话未命中记忆检索，AI 便会彻底遗忘打标记。
- **解法**：在 `cordis.patch.yml` 与出厂快照 `defaults/cordis.patch.yml` 的全部 6 处人设副本中，追加【语音播报纪律（强制执行）】：写死「每条回复正文最前面必须单独写一行 `<!--tts:要念的那段重点-->` 朗读标记，点朗读只念这一句；『老大』放开头；严禁漏写」。
- **验证**：`_probe/check-persona-consistency.cjs` 验证 6 处副本逐字对齐、换行 CRLF 格式正确；发版 v0.7.12 并全量推送到 GitHub。

---

### 6.20 委派/并发提示规则迁出独立包（2026-10-18，本地未发布）

- **症状**：preset 一个包同时扛人设预设、记忆播种/同步、子智能体委派策略三件事——主/defaults 各三段静态纪律、`config.delegation` 以及全部委派 runtime 注册器都长在本包里，改任一边都要动 preset，测试基线互相牵连。迁移后遗留残留实测：只读检测 `C:/Users/Kayle/.dsh/cordis.patch.yml.bak` 命中旧纪律字符串 5 处（历史备份，保留未清）。
- **原因**：职责边界不清。老大明确「dsh-maid-preset 只保留人设预设和记忆相关」，子智能体委派策略属另一件事，应归独立包。一处易误伤：`lib/meow` 的 `delegationDepth` 用于识别子会话，不是注入器，**不能跟着删**；原生 subagent/workflow 工具引用也不是本包的并发引擎。
- **当前边界**：子智能体委派/并发提示由独立的 `dsh-maid-delegation` 承接；preset 删除主/defaults 各三段静态纪律、preset 自身的 `config.delegation` 及全部委派 runtime 注册器。女仆人设、官方 subagent/workflow 工具组、AgentTeams 规则、meow 及设置结构修复均不迁。原 `lib/config.schema.json` 实际不存在，未新建；包版本仍为 0.7.11，未发布。
- **真实对账**：健康副本 `D:/Works By DSH/_probe/preset-incident-20261018` HEAD=4ed7a47797a3b59ccea8d82da76178368e479c13；迁移快照中只读 fetch 得线上 main=6d32bb0d66d2d4a3e4e403b0c9ff05a7432d0baf。线上入口没有本地委派 runtime，不能声称远端已完整保存当前改动，也不能以远端覆盖工作树。原目录残缺 .git 保持不动，无 push、无全局 git 改动。
- **编辑前回退点**：`D:/Works By DSH/_probe/preset-delegation-migration-20261018T082752Z`：`source/` 是 72 文件、5,016,615 字节的完整当前源码，本地 git commit=e3c4942（完整 hash 见 snapshot-head.txt）；`original-git-fragments/` 另存原残缺元数据；`backups/` 六个实际编辑文件带时间戳；`manifest.json` 保存每文件字节数/md5；`online-main-to-local-before.patch` 保存线上到本地编辑前的 binary 差异。快照包含记忆种子，只限本地，禁止上传。
- **回退操作**：先暂停部署并备份迁移后现状，按 manifest 核对 source 或 backups 的 md5；仅把本次六个改动文件从 source 复制回源目录同名路径，勿覆盖之后的其它 dirty 改动，不复制快照的 .git。不要在源目录 reset/修补 git。若完整目录丢失，source 可在另一空目录恢复全部源码；线上差异补丁仅供指定 main 基线的隔离副本重建核对，不直接套运行目录。恢复旧纪律时必须同步停用承接包，避免双注入。
- **旧备份风险**：`restorePersona('backup')` 仍按用户要求恢复 `$DSH_HOME/cordis.patch.yml.bak` 的完整人设；旧文案可能带回静态纪律。历史 .bak、_probe 测试夹具与用户备份不删除、不自动清洗；恢复前检测“子智能体委派纪律”及自定义委派段，告警后由用户决定。`restorePersona('default')` 使用已迁出的 defaults，不带旧纪律。
- **实测结果**：`scripts/test-no-cwd-template.mjs` 两文件通过且 delegation copies=0；迁移专用 `D:/Works By DSH/_probe/verify-preset-delegation-migration-20261018.mjs` 10/10（主/defaults 全 YAML 对象除指定删除外深度等价、恰好六文件改变、真实 apply 空/旧开关/自定义/重复/双 ctx 均不访问 systemPrompt、不注册 section）；`node --check lib/index.js` 通过。隔离人设结构回归 8/8；merge 18、direction 5、pullonly 6、pullonly-e2e 5、selfcheck-identity 3，共 37 项同步相关断言通过。只读检测 `C:/Users/Kayle/.dsh/cordis.patch.yml.bak` 命中旧纪律字符串 5 处，保留告警，未清理。lib/meow 的 delegationDepth 用于识别子会话，不是注入器，保持不变。
- **验证边界**：上述源码/隔离 apply 测试不等于宿主已重载。当前未改 profile/软链、未安装新包、未重启、未打开 GUI。captain 后续须同次启用承接包并重启，核验最终合成 prompt 中旧 section 为零、新规则唯一。`systemPrompt.complete` 独占最终 prompt 的入口不保证承接包 section 生效，须另验。

---

### 6.22 新设备首启同步整台暂停：没有 git 身份时它不崩、只是永不推送（2026-10-19，公司机）

停摆的通用机理与「清 state 文件」的老解法见 **§2.2**；本条只收**新设备这一触发面**、**免重启的恢复手法**、以及公司机踩到的**端口漂移**。

- **症状**：公司机（Windows 用户 `Administrator`，当天首次开机装完全家桶）填好 `repoUrl` 后自动 clone 了同步副本、并把记忆导出成了快照，但一条也没推出去。`$DSH_HOME\maid-sync.log` 里紧挨着的是这三行——**导出成功、推送为零**，且报的是配置问题不是网络问题：

  ```text
  [2026-10-19T04:16:20.630Z] 导出 800 条 / 快照 1175552B ← D:\Works by DSH\.dsh-meow\memory.db
  [2026-10-19T04:16:21.115Z] 已暂停同步（配置问题）：config.sync.identity 未配置，本机 git 也没有 user.name/user.email。改法：…然后重启 DSH。
  ```

- **触发面**：新装 Windows 用户目录**天生没有全局 git 身份**。`resolveIdentityArgs()`（正本 `lib/sync.js:285-295`）只在 `cfg.identity?.name` 存在时直接用它（缺 email 自动补 `<name>@users.noreply.github.com`，`:287`），否则到**同步副本工作树**里 `git config user.name/user.email`；**name 与 email 必须同时非空**才 `return []`（`:293`），只配一半也算无身份。都空 → `pauseForConfig(cfg, state, 'commit 身份缺失', detail)`（`:509` → `:299-305` 置 `fatalReason` 并打那行日志），本轮返回 `{ ok:false, reason:'commit identity missing', fatal:true }`（`:510`）。此后每个 tick 在 `:714` 直接 `return { paused: true }`：不报错、不重试、界面看不出异常。
- **恢复（两条动作，都不用重装插件）**：
  1. 补身份：`git -C "$env:USERPROFILE\.dsh\maid-sync" config --local user.name "..."` 与 `--local user.email "..."`。探测命令带 `-C <wc>`，git 的 local 覆盖 global，所以**副本级配置不依赖有没有全局身份**；全局那份建议一并配好（`git config --global …`），免得以后别的工作树再踩。或者在 `cordis.patch.yml` 的 `sync` 段写 `identity: {name: …, email: …}`，优先级最高、跨机器可控。
  2. **免重启清暂停**：`POST /dsh-maid-preset/settings` 提交一份**与上次不同字符串的 `repoUrl`**（去掉尾部 `.git` 再原样写回即可），命中 `lib/sync.js:698-711` 的自愈分支——`cfg.repoUrl !== lastRepoUrl` 且 `fatalRepoUrl !== cfg.repoUrl` 时清掉 `fatalReason/fatalDetail/fatalRepoUrl/pushFailed/failCount/nextRetryAt` 并 `saveState`；紧接着 `POST /dsh-maid-preset/sync/now` 补推。日志实证：

     ```text
     [2026-10-19T04:52:15.761Z] repoUrl 已变更，清除暂停状态（原：commit 身份缺失）
     [2026-10-19T04:53:09.055Z] PUSH OK → https://github.com/Valorine97417/dsh-maid-preset.git#main
     ```

     `sync.js:298` 那行注释就是这规矩的自述：「记下配置类暂停：下次只有换 repoUrl 或重启并改好配置才恢复。」——所以**光改 identity 不会自己解除暂停**，补完身份还得走这两条之一。
- **验证方式**：`git -C "$env:USERPROFILE\.dsh\maid-sync" log --format='%h %an <%ae> %s' -3` 看作者与条数；`git cat-file -s $(git rev-parse <sha>:memory/memories.json)` 核对体量。公司机补推连做两笔：`ffc5dd9`（810 条，`memory/memories.json` 1248279 B）与 `a34260e`（812 条，1251674 B），作者均为 `Valorine97417 <Valorine97417@users.noreply.github.com>`。事后 `GET /dsh-maid-preset/selfcheck` **13 项全绿**，身份项显示 `Valorine97417 <…@users.noreply.github.com>（卡片里那个克隆内已配好，提交就用它）`——这句文案证明它读的是**副本 local 配置**（`lib/settings.js:614-650`，身份三来源按提交真实优先级排；与 §2.9 那台假红是同处代码修好的）。
- **端口**：公司机 HTTP 入口当天从 **58436** 漂到 **56738**（老家机 19387）——0.2.1-rc.2 起宿主端口动态分配，`/dsh-maid-preset/selfcheck`、`/comfyui/ping`、`/dsh-video-skin/config.json` 都**不能写死端口**（§5.1 那条 curl 里的 19387 同理）。认法要按 **HTTP 200 且 body 对得上**：本机同时有 4 个 `127.0.0.1` 监听口（8326 / 56738 / 58982 / 18787），只有 56738 回 200，两个回 **401 Unauthorized**、一个回 404。401 表示那不是本插件的宿主入口，**不是权限坏了**，别去翻 token。
- **验证边界**：免重启只实测过「改 `repoUrl`」这一条。手改 `maid-sync-state.json`（§2.2 的老解法）本轮没试；按 `:684` 的 `loadState()` 只在同步循环启动时读一次，**改文件预计要等重启才对内存生效**（推断，待核）。
