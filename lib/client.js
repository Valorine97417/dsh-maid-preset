// dsh-maid-preset 设置面板（前端）
// 无构建步骤：手写 React（createElement），经 window.__ModuleLoader__ 加载。
// 注册模式照 meow-memory：apply(ctx) → ctx.slots.inject('settings.section', …)
// → ctx.slots.register({name:'settings.section', id, order, label}, Page)。
// 数据面全部走自家后端路由（lib/index.js）：/dsh-maid-preset/*。
window.__ModuleLoader__.load({
  id: 'dsh-maid-preset',
  factory: (require) => {
    console.info(`[dsh-maid-preset] client 入口，tid=${typeof process !== 'undefined' ? process.pid : 'na'}`);
    const React = require('react');
    const h = React.createElement;
    const { useState, useEffect, useCallback } = React;

    const NS = 'dsh-maid-preset';
    const API = '/dsh-maid-preset';
    const CSS_ID = 'dsh-maid-preset-settings-css';

    // ───────────────────── 基础设施 ─────────────────────

    async function api(path, opts = {}) {
      const init = { headers: { 'content-type': 'application/json' } };
      if (opts.method) init.method = opts.method;
      if (opts.body !== undefined) init.body = JSON.stringify(opts.body);
      let r;
      try {
        r = await fetch(API + path, init);
      } catch (e) {
        return { ok: false, error: '请求失败：' + (e?.message ?? e) };
      }
      try {
        return await r.json();
      } catch {
        return { ok: false, error: `HTTP ${r.status}` };
      }
    }

    function fmtTime(v) {
      if (v === undefined || v === null || v === '') return '—';
      const n = Number(v);
      if (Number.isFinite(n) && n > 1e12) {
        try { return new Date(n).toLocaleString('zh-CN', { hour12: false }); } catch { /* ignore */ }
      }
      const s = String(v);
      const parsed = Date.parse(s);
      if (Number.isFinite(parsed)) {
        try { return new Date(parsed).toLocaleString('zh-CN', { hour12: false }); } catch { /* ignore */ }
      }
      return s.length > 19 ? s.slice(0, 19) : s;
    }

    const CSS = `
.maidset_page{display:flex;flex-direction:column;gap:16px;max-width:860px;padding:4px 4px 32px}
.maidset_card{border:1px solid var(--dsw-border-primary,#2a2a33);border-radius:12px;padding:16px 18px;background:var(--dsw-bg-secondary,rgba(20,20,26,.6))}
.maidset_card h2{margin:0 0 4px;font-size:15px;font-weight:600}
.maidset_desc{margin:0 0 12px;font-size:12px;line-height:1.7;color:var(--dsw-alias-label-caption,#8a8a96)}
.maidset_row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px}
.maidset_label{font-size:12px;color:var(--dsw-alias-label-caption,#8a8a96);min-width:76px}
.maidset_input,.maidset_select,.maidset_textarea{background:var(--dsw-bg-input,rgba(12,12,16,.8));border:1px solid var(--dsw-border-primary,#2a2a33);border-radius:8px;color:var(--dsw-text-primary,#e8e8ef);padding:7px 10px;font-size:13px;font-family:inherit;outline:none}
.maidset_input:focus,.maidset_select:focus,.maidset_textarea:focus{border-color:#5b7fff}
.maidset_input{flex:1;min-width:200px}
.maidset_textarea{width:100%;min-height:300px;line-height:1.7;resize:vertical;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.maidset_btn{border:1px solid var(--dsw-border-primary,#33333d);background:var(--dsw-bg-button,#26262e);color:var(--dsw-text-primary,#e8e8ef);border-radius:8px;padding:7px 14px;font-size:12.5px;cursor:pointer;white-space:nowrap}
.maidset_btn:hover{background:#30303a}
.maidset_btn:disabled{opacity:.45;cursor:default}
.maidset_btn_pri{background:#4f6ae8;border-color:#4f6ae8}
.maidset_btn_pri:hover{background:#5f79ef}
.maidset_btn_danger{background:#7f2b32;border-color:#7f2b32}
.maidset_btn_danger:hover{background:#93323b}
.maidset_msg{font-size:12px;min-height:16px;line-height:1.6}
.maidset_msg_ok{color:#6fce8f}
.maidset_msg_err{color:#f08080}
.maidset_muted{color:var(--dsw-alias-label-caption,#8a8a96);font-size:12px}
.maidset_tablewrap{overflow-x:auto;border:1px solid var(--dsw-border-primary,#2a2a33);border-radius:8px}
.maidset_table{width:100%;border-collapse:collapse;font-size:12px}
.maidset_table th,.maidset_table td{text-align:left;padding:7px 9px;border-bottom:1px solid var(--dsw-border-primary,#23232b);vertical-align:top}
.maidset_table th{background:rgba(255,255,255,.03);color:var(--dsw-alias-label-caption,#9a9aa6);font-weight:500;white-space:nowrap}
.maidset_table tr:last-child td{border-bottom:none}
.maidset_content{max-width:340px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;word-break:break-all;white-space:pre-wrap}
.maidset_badge{display:inline-block;padding:1px 7px;border-radius:999px;font-size:11px;background:rgba(91,127,255,.16);color:#8fa7ff;margin-right:4px}
.maidset_badge_st{background:rgba(255,196,80,.14);color:#f0c674}
.maidset_badge_arch{background:rgba(140,140,150,.16);color:#9a9aa6}
.maidset_ops{display:flex;gap:5px;flex-wrap:wrap}
.maidset_ops .maidset_btn{padding:3px 8px;font-size:11px}
.maidset_pager{display:flex;gap:8px;align-items:center;justify-content:flex-end;margin-top:8px;font-size:12px;color:var(--dsw-alias-label-caption,#8a8a96)}
.maidset_logbox{margin-top:10px;background:rgba(0,0,0,.35);border:1px solid var(--dsw-border-primary,#26262f);border-radius:8px;padding:8px 10px;font-family:ui-monospace,Consolas,monospace;font-size:11px;line-height:1.7;max-height:180px;overflow:auto;white-space:pre-wrap;word-break:break-all;color:#b9b9c6}
.maidset_stat{display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:var(--dsw-alias-label-caption,#9a9aa6);margin-bottom:6px}
.maidset_stat b{color:var(--dsw-text-primary,#e8e8ef);font-weight:600}
.maidset_section{margin-top:4px}
`;

    function injectCss() {
      let tag = document.querySelector(`style[data-plugin-css="${CSS_ID}"]`);
      if (!tag) {
        tag = document.createElement('style');
        tag.dataset.plugin = 'dsh-maid-preset-settings';
        tag.dataset.pluginCss = CSS_ID;
        document.head.appendChild(tag);
      }
      tag.textContent = CSS;
    }

    // ───────────────────── 卡片一：角色人设 ─────────────────────

    function PersonaCard() {
      const [text, setText] = useState('');
      const [loading, setLoading] = useState(true);
      const [saving, setSaving] = useState(false);
      const [msg, setMsg] = useState(null); // {ok, text}

      useEffect(() => {
        let alive = true;
        (async () => {
          const r = await api('/persona');
          if (!alive) return;
          setLoading(false);
          if (r.ok) setText(r.text ?? '');
          else setMsg({ ok: false, text: r.error ?? '读取失败' });
        })();
        return () => { alive = false; };
      }, []);

      const save = useCallback(async () => {
        setSaving(true);
        setMsg(null);
        const r = await api('/persona', { method: 'POST', body: { text } });
        setSaving(false);
        setMsg(r.ok
          ? { ok: true, text: '已写入 cordis.patch.yml —— 重启 DSH 后生效（记得 commit 到仓库）' }
          : { ok: false, text: r.error ?? '保存失败' });
      }, [text]);

      return h('div', { className: 'maidset_card' },
        h('h2', null, '角色人设'),
        h('p', { className: 'maidset_desc' },
          '写入 cordis.patch.yml 的 personaPrefix 区段（部署级 system-prompt）。改完重启 DSH 生效；内容会以 6 空格缩进安全落盘，不会影响补丁结构。'),
        loading
          ? h('span', { className: 'maidset_muted' }, '加载中…')
          : h('textarea', {
              className: 'maidset_textarea',
              value: text,
              spellCheck: false,
              onChange: (e) => setText(e.target.value)
            }),
        h('div', { className: 'maidset_row', style: { marginTop: '10px' } },
          h('button', { className: 'maidset_btn maidset_btn_pri', disabled: saving || loading, onClick: save },
            saving ? '保存中…' : '保存人设'),
          msg && h('span', { className: 'maidset_msg ' + (msg.ok ? 'maidset_msg_ok' : 'maidset_msg_err') }, msg.text)
        )
      );
    }

    // ───────────────────── 卡片二：记忆清单 ─────────────────────

    const LEVEL_OPTIONS = ['fact', 'lesson', 'topic', 'rules', 'project', 'user', 'soul'];
    const STATUS_OPTIONS = ['', 'active', 'stale', 'archived'];

    function MemoryCard() {
      const [wsList, setWsList] = useState([]);
      const [ws, setWs] = useState('');
      const [level, setLevel] = useState('');
      const [status, setStatus] = useState('');
      const [q, setQ] = useState('');
      const [qInput, setQInput] = useState('');
      const [page, setPage] = useState(1);
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [msg, setMsg] = useState(null);

      useEffect(() => {
        let alive = true;
        (async () => {
          const r = await api('/workspaces');
          if (!alive || !r.ok) return;
          const list = (r.workspaces || []).filter((w) => w.hasDb);
          setWsList(list);
          if (list.length) setWs((prev) => prev || list[0].ws);
        })();
        return () => { alive = false; };
      }, []);

      const load = useCallback(async () => {
        if (!ws) return;
        setLoading(true);
        setMsg(null);
        const params = new URLSearchParams({ ws, page: String(page) });
        if (level) params.set('level', level);
        if (status) params.set('status', status);
        if (q) params.set('q', q);
        const r = await api('/memories?' + params.toString());
        setLoading(false);
        if (r.ok) setData(r);
        else setMsg({ ok: false, text: r.error ?? '加载失败' });
      }, [ws, level, status, q, page]);

      useEffect(() => { void load(); }, [load]);

      const mutate = useCallback(async (row, op, extra = {}) => {
        if (op === 'delete' && !window.confirm(`确认删除这条记忆？（${row.id}）此操作不可恢复。`)) return;
        const r = await api('/memory', { method: 'POST', body: { ws, id: row.id, level: row.level, op, ...extra } });
        if (r.ok) {
          setMsg({ ok: true, text: op === 'delete' ? '已删除' : '已更新' });
          void load();
        } else {
          setMsg({ ok: false, text: r.error ?? '操作失败' });
        }
      }, [ws, load]);

      const stBtn = (row, st, label, cls) => h('button', {
        className: 'maidset_btn' + (cls ? ' ' + cls : ''),
        disabled: row.status === st,
        style: row.status === st ? { outline: '1px solid #5b7fff' } : undefined,
        onClick: () => mutate(row, 'update', { status: st })
      }, label);

      return h('div', { className: 'maidset_card' },
        h('h2', null, '记忆清单'),
        h('p', { className: 'maidset_desc' },
          '直查工作区活库（node:sqlite）。可按类型/状态/关键词过滤，改状态（active/stale/archived）或删除单条。'),
        h('div', { className: 'maidset_row' },
          h('span', { className: 'maidset_label' }, '工作区'),
          h('select', {
            className: 'maidset_select',
            value: ws,
            onChange: (e) => { setWs(e.target.value); setPage(1); }
          }, wsList.length
            ? wsList.map((w) => h('option', { key: w.ws, value: w.ws }, w.ws))
            : [h('option', { key: 'none', value: '' }, '（无带库工作区）')]),
          h('span', { className: 'maidset_label' }, '类型'),
          h('select', {
            className: 'maidset_select', value: level,
            onChange: (e) => { setLevel(e.target.value); setPage(1); }
          }, [h('option', { key: 'all', value: '' }, '全部'), ...LEVEL_OPTIONS.map((l) => h('option', { key: l, value: l }, l))]),
          h('span', { className: 'maidset_label' }, '状态'),
          h('select', {
            className: 'maidset_select', value: status,
            onChange: (e) => { setStatus(e.target.value); setPage(1); }
          }, STATUS_OPTIONS.map((s) => h('option', { key: s || 'any', value: s }, s || '全部'))),
          h('input', {
            className: 'maidset_input',
            style: { flex: '1', minWidth: '160px' },
            placeholder: '搜索内容/关键词…',
            value: qInput,
            onChange: (e) => setQInput(e.target.value),
            onKeyDown: (e) => { if (e.key === 'Enter') { setQ(qInput.trim()); setPage(1); } }
          }),
          h('button', {
            className: 'maidset_btn',
            onClick: () => { setQ(qInput.trim()); setPage(1); }
          }, '搜索')
        ),
        msg && h('div', { className: 'maidset_msg ' + (msg.ok ? 'maidset_msg_ok' : 'maidset_msg_err') }, msg.text),
        h('div', { className: 'maidset_tablewrap' },
          h('table', { className: 'maidset_table' },
            h('thead', null, h('tr', null,
              h('th', null, 'ID'),
              h('th', null, '类型'),
              h('th', null, '内容'),
              h('th', null, '重要性'),
              h('th', null, '状态'),
              h('th', null, '更新'),
              h('th', null, '操作')
            )),
            h('tbody', null,
              loading
                ? h('tr', null, h('td', { colSpan: 7, style: { textAlign: 'center', color: '#8a8a96' } }, '加载中…'))
                : !data || !data.rows || data.rows.length === 0
                  ? h('tr', null, h('td', { colSpan: 7, style: { textAlign: 'center', color: '#8a8a96' } }, '（没有匹配的记忆）'))
                  : data.rows.map((row) => h('tr', { key: row.level + ':' + row.id },
                    h('td', null, h('code', { title: row.id }, String(row.id).slice(0, 8))),
                    h('td', null, h('span', { className: 'maidset_badge' }, row.level)),
                    h('td', null,
                      h('div', { className: 'maidset_content', title: String(row.content ?? '') }, String(row.content ?? '')),
                      row.project ? h('span', { className: 'maidset_muted' }, '@' + row.project) : null,
                      row.keywords ? h('div', { className: 'maidset_muted', title: String(row.keywords) }, '关键词: ' + String(row.keywords).slice(0, 60)) : null
                    ),
                    h('td', null, String(row.importance ?? 1)),
                    h('td', null, h('span', {
                      className: 'maidset_badge ' + (row.status === 'stale' ? 'maidset_badge_st' : row.status === 'archived' ? 'maidset_badge_arch' : '')
                    }, row.status ?? 'active')),
                    h('td', { style: { whiteSpace: 'nowrap' } }, fmtTime(row.updated_at)),
                    h('td', null, h('div', { className: 'maidset_ops' },
                      stBtn(row, 'active', '激活'),
                      stBtn(row, 'stale', '完结'),
                      stBtn(row, 'archived', '归档'),
                      h('button', { className: 'maidset_btn maidset_btn_danger', onClick: () => mutate(row, 'delete') }, '删除')
                    ))
                  ))
            )
          )
        ),
        h('div', { className: 'maidset_pager' },
          h('span', null, data ? `共 ${data.total} 条 · 第 ${data.page} 页` : ''),
          h('button', { className: 'maidset_btn', disabled: page <= 1 || loading, onClick: () => setPage(page - 1) }, '上一页'),
          h('button', { className: 'maidset_btn', disabled: !data || data.total <= data.pageSize || loading, onClick: () => setPage(page + 1) }, '下一页')
        )
      );
    }

    // ───────────────────── 卡片三 + 四：同步 & GitHub ─────────────────────

    function SyncCard() {
      const [repoUrl, setRepoUrl] = useState('');
      const [idleMinutes, setIdle] = useState('10');
      const [snap, setSnap] = useState(null);
      const [msg, setMsg] = useState(null);
      const [busy, setBusy] = useState('');
      const [repoName, setRepoName] = useState('');
      const [repoPrivate, setRepoPrivate] = useState(true);

      const refresh = useCallback(async () => {
        const [s, st] = await Promise.all([api('/settings'), api('/sync/state')]);
        if (s.ok) {
          setRepoUrl(s.settings?.sync?.repoUrl ?? '');
          setIdle(String(s.settings?.sync?.idleMinutes ?? 10));
        }
        if (st.ok) setSnap(st);
      }, []);

      useEffect(() => { void refresh(); }, [refresh]);

      const act = useCallback(async (key, fn) => {
        setBusy(key);
        setMsg(null);
        const r = await fn();
        setBusy('');
        setMsg(r.ok
          ? { ok: true, text: r.text ?? '完成' }
          : { ok: false, text: r.error ?? r.reason ?? '失败' });
        if (key === 'save' || key === 'now' || key === 'test') void refresh();
        if (key === 'save' && r.settings?.sync?.repoUrl !== undefined) setRepoUrl(r.settings.sync.repoUrl);
      }, [refresh]);

      const save = () => act('save', async () => {
        const n = Number(idleMinutes);
        if (!Number.isFinite(n) || n < 0 || n > 1440) return { ok: false, error: '空闲时间需在 0~1440 分钟之间' };
        const r = await api('/settings', { method: 'POST', body: { sync: { repoUrl: repoUrl.trim(), idleMinutes: n } } });
        return r.ok ? { ok: true, text: '已保存 —— 同步引擎下个轮询（≤60 秒）即生效' } : r;
      });

      const now = () => act('now', async () => {
        const r = await api('/sync/now', { method: 'POST', body: {} });
        return r.ok ? { ok: true, text: '推送完成' } : r;
      });

      const test = () => act('test', async () => {
        const r = await api('/sync/test', { method: 'POST', body: { url: repoUrl.trim() } });
        return r.ok ? { ok: true, text: `连通正常（${r.hint ?? r.heads}）` } : r;
      });

      const create = () => act('create', async () => {
        if (!repoName.trim()) return { ok: false, error: '先填仓库名' };
        if (!window.confirm(`在 GitHub 新建${repoPrivate ? '私有' : '公开'}仓库「${repoName.trim()}」？`)) return { ok: false, error: '已取消' };
        const r = await api('/repo/create', { method: 'POST', body: { name: repoName.trim(), private: repoPrivate } });
        if (!r.ok) return r;
        setRepoUrl(r.url);
        return { ok: true, text: `已创建：${r.html ?? r.url}（记得点「保存设置」并「测试连接」）` };
      });

      const st = snap?.state;
      const lastSynced = st?.lastSyncedAt ? fmtTime(st.lastSyncedAt) : '—';

      return h('div', { className: 'maidset_card' },
        h('h2', null, '记忆同步（GitHub）'),
        h('p', { className: 'maidset_desc' },
          '空闲达标后自动导出→commit→push。改动保存后引擎每 60 秒热读一次，无需重启。'),
        h('div', { className: 'maidset_row' },
          h('span', { className: 'maidset_label' }, '仓库地址'),
          h('input', {
            className: 'maidset_input',
            placeholder: 'https://github.com/you/your-repo.git',
            value: repoUrl,
            onChange: (e) => setRepoUrl(e.target.value)
          })
        ),
        h('div', { className: 'maidset_row' },
          h('span', { className: 'maidset_label' }, '空闲时间'),
          h('input', {
            className: 'maidset_input', style: { flex: '0 0 110px' },
            type: 'number', min: 0, max: 1440, value: idleMinutes,
            onChange: (e) => setIdle(e.target.value)
          }),
          h('span', { className: 'maidset_muted' }, '分钟——记忆停写这么久才推送'),
          h('button', { className: 'maidset_btn maidset_btn_pri', disabled: busy === 'save', onClick: save }, '保存设置'),
          h('button', { className: 'maidset_btn', disabled: busy === 'test', onClick: test }, '测试连接'),
          h('button', { className: 'maidset_btn', disabled: busy === 'now', onClick: now }, '立即同步')
        ),
        msg && h('div', { className: 'maidset_msg ' + (msg.ok ? 'maidset_msg_ok' : 'maidset_msg_err') }, msg.text),
        h('div', { className: 'maidset_section' },
          h('div', { className: 'maidset_stat' },
            h('span', null, '状态: ', h('b', null,
              st?.fatalReason ? '配置问题已暂停' : st?.pending ? '有变更待推送' : '已同步'),
            ),
            h('span', null, '上次推送: ', h('b', null, lastSynced)),
            h('span', null, '推送失败: ', h('b', null, st?.pushFailed ? `是（${st.failCount ?? 0} 次）` : '否'))
          ),
          st?.fatalDetail ? h('div', { className: 'maidset_msg maidset_msg_err' }, st.fatalDetail) : null,
          snap?.logTail?.length
            ? h('div', { className: 'maidset_logbox' }, snap.logTail.join('\n'))
            : h('div', { className: 'maidset_muted' }, '暂无同步日志')
        ),
        h('div', { className: 'maidset_section' },
          h('div', { className: 'maidset_row', style: { marginTop: '10px' } },
            h('span', { className: 'maidset_label' }, '新建仓库'),
            h('input', {
              className: 'maidset_input', style: { flex: '0 0 220px' },
              placeholder: '仓库名，如 my-memory',
              value: repoName, onChange: (e) => setRepoName(e.target.value)
            }),
            h('label', { className: 'maidset_muted', style: { display: 'flex', gap: '5px', alignItems: 'center', cursor: 'pointer' } },
              h('input', {
                type: 'checkbox', checked: repoPrivate,
                onChange: (e) => setRepoPrivate(e.target.checked)
              }),
              '私有'
            ),
            h('button', { className: 'maidset_btn', disabled: busy === 'create', onClick: create }, '在 GitHub 创建')
          ),
          h('div', { className: 'maidset_muted' },
            '用本机 git 凭据（Git Credential Manager）调 GitHub API；创建成功后会自动填入上方地址。')
        )
      );
    }

    // ───────────────────── 整页 ─────────────────────

    function SettingsPage() {
      return h('div', { className: 'maidset_page' },
        h('div', { className: 'maidset_card' },
          h('h2', null, 'maid 设置'),
          h('p', { className: 'maidset_desc' },
            'dsh-maid-preset 自带面板：人设、记忆清单、同步与 GitHub。人设改动需重启生效；同步与记忆操作即点即用。')
        ),
        h(PersonaCard),
        h(MemoryCard),
        h(SyncCard)
      );
    }

    // ───────────────────── 注册 ─────────────────────
    // 韧性红线：apply 绝不抛错——fiber 里任何异常都会把整个 entry 打成 failed，
    // 连带 web boot 崩（2026-10-12 实测教训）。任何一环失败只 console.error 记详情，
    // 外加退避重试兜住「slot 声明晚于本 entry」的时序竞争。
    function apply(ctx) {
      try { injectCss(); } catch (e) { console.error('[dsh-maid-preset] CSS 注入失败:', e); }

      let disposed = false;
      let disposeEntry = null;
      let disposeInjection = null;
      let retryTimer = null;

      const registerSection = () => {
        if (disposed) return;
        try {
          try { disposeEntry?.(); } catch { /* 旧注册已失效就不管 */ }
          disposeEntry = ctx.slots.register(
            {
              name: 'settings.section',
              id: NS,
              order: 40,
              label: () => 'maid 设置'
            },
            SettingsPage
          );
          console.info('[dsh-maid-preset] 设置面板已注册');
        } catch (e) {
          console.error('[dsh-maid-preset] settings.section 注册失败:', e);
        }
      };

      const attach = () => {
        if (disposed) return false;
        try {
          disposeInjection = ctx.slots.inject('settings.section', registerSection);
          return true;
        } catch (e) {
          // slot 尚未声明（设置壳 factory 晚于本 entry）：不炸，退避重试。
          console.warn('[dsh-maid-preset] settings.section inject 未就绪，稍后重试:', e?.message ?? e);
          return false;
        }
      };

      if (!attach()) {
        // 无限重试：设置壳可能晚于本 entry 声明 slot，只停 60 拍会错过注册窗口。
        // 2 秒一拍直到成功；dispose 时由返回的 disposer 清掉。
        retryTimer = setInterval(() => {
          attach();
        }, 2000);
        if (retryTimer && typeof retryTimer.unref === 'function') retryTimer.unref();
      }

      return () => {
        disposed = true;
        if (retryTimer) { clearInterval(retryTimer); retryTimer = null; }
        try { disposeInjection?.(); } catch { /* ignore */ }
        try { disposeEntry?.(); } catch { /* ignore */ }
      };
    }

    return { apply };
  }
});
