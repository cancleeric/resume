// Deliverable Systems — 3 tabs with card grids

function Systems() {
  const tabs = [
    { key: 'ai', label: 'AI / Agent 產品線', en: 'AI / AGENT', count: 9 },
    { key: 'saas', label: '對外 SaaS', en: 'PUBLIC SAAS', count: 5 },
    { key: 'infra', label: '集團基礎建設', en: 'GROUP INFRA', count: 5 },
  ];

  const systems = {
    ai: [
      { name: 'Squid', tagline: '集團專案 / 工單管理 SaaS（公司核心）— AI Agent 工單驅動開發底層', stack: ['LIDS OAuth2', 'JWT', 'API Key', 'Python SDK', 'JS SDK'], status: 'LIVE', metric: '多租戶 + 嚴格狀態機' },
      { name: 'Manta', tagline: 'AI Workflow Canvas（對標 Coze）— 多租戶 AI 編排', stack: ['沙盒', 'Webhook', '實時監控'], status: 'LIVE', metric: 'v2.64 生產中' },
      { name: 'AICAD', tagline: 'AI P&ID 工程圖辨識 SaaS', stack: ['Anemone', 'Claude Vision', 'DXF'], status: 'LIVE', metric: '多視圖分割 + 文字辨識' },
      { name: 'fiona-radar', tagline: 'AI 影片結構化洞察', stack: ['Anemone', 'JSONB', 'YouTube'], status: 'GA', metric: 'v1.1.0' },
      { name: 'fiona-pipeline', tagline: 'AI 腳本生成 + 推播', stack: ['n8n', 'webhook'], status: 'LIVE', metric: '多平台感知' },
      { name: 'Brain', tagline: '多代理 AI 協作框架', stack: ['Python', '21 files'], status: 'GA', metric: '~6,350 lines / 100% pass' },
      { name: 'Claude Agents', tagline: 'AI 高管副手角色庫 — 多角色虛擬團隊', stack: ['多角色', '跨機同步', '分級權限'], status: 'LIVE', metric: '技術／營運／商務／產品／資安／法務' },
      { name: 'Modelhub', tagline: 'ML 模型訓練 / 版本管理平台', stack: ['FastAPI', 'SQLAlchemy', 'SQLite'], status: 'GA', metric: '多層訓練資源排程' },
      { name: 'Anemone / Brain Gateway', tagline: '集團統一 LLM Gateway — 計費中心 + 自動模型路由', stack: ['LLM ingress', '跨租戶'], status: 'LIVE', metric: '計費 + 路由' },
    ],
    saas: [
      { name: 'Conch (RS / 海螺訂位)', tagline: '預約 SaaS v6.0（2026/04 GA）', stack: ['LINE Pay', 'PayPal Live', 'iOS App'], status: 'LIVE', metric: '1,265+ tests / 28 migrations / 29 PRs' },
      { name: 'Abacus 算盤', tagline: '中小企業帳務財務 SaaS（hurricane-books）', stack: ['.NET 8', 'Blazor', 'LIDS PKCE', 'Playwright 24'], status: 'LIVE', metric: '對標天心 CPA' },
      { name: 'Tianji 天機', tagline: '占卜命理 iOS + Web SaaS', stack: ['iOS', 'Web'], status: 'LIVE', metric: 'HurricaneEdge 旗下' },
      { name: '打工仔 DaGongZai', tagline: '零工媒合 SaaS v1.6.0（2026/04）', stack: ['FastAPI', 'Next.js 14', 'Swift iOS', 'PayPal Escrow'], status: 'LIVE', metric: '多平台爬蟲 + ML 薪資推算' },
      { name: 'Gyre v0.9.0', tagline: '多服務架構（apps/api + web + ai-service）', stack: ['Secret Manager', '環境分離'], status: 'BETA', metric: 'R5 freeze 待上線' },
    ],
    infra: [
      { name: 'Hurricane Pay', tagline: '集團統一金流微服務 v0.13.0', stack: ['FastAPI', 'PostgreSQL', 'PayPal SDK'], status: 'LIVE', metric: '15 routes / 90 tests / 88% coverage' },
      { name: 'LIDS', tagline: 'Multi-tenant SaaS 身份層 — OAuth2/OIDC', stack: ['OAuth2', 'OIDC', '客製 OIDC patch'], status: 'LIVE', metric: '9+ 系統接入' },
      { name: 'Hurricane Vault', tagline: '自建 Secret Manager + 多層稽核 v1.0.0', stack: ['Secret Manager', '稽核', '對稱備援'], status: 'LIVE', metric: '90+ secrets' },
      { name: 'Tentacle BFF', tagline: 'Squid 前端整合層（BFF pattern）', stack: ['BFF', 'neritic CLI'], status: 'LIVE', metric: '跨集團共用' },
      { name: 'Headscale', tagline: '集團統一 VPN', stack: ['ACL', '跨節點'], status: 'LIVE', metric: '動態 IP 管理' },
    ],
  };

  const [active, setActive] = useState('ai');

  return (
    <section id="systems" className="section systems-section">
      <style>{`
        .systems-section { padding-top: 140px; }
        .systems-tabs {
          display: flex;
          gap: 4px;
          padding: 4px;
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          margin-bottom: 32px;
          width: fit-content;
        }
        .systems-tabs button {
          padding: 10px 18px;
          font-family: var(--font-tc);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-mid);
          border-radius: 4px;
          display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.15s;
        }
        .systems-tabs button .en {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--text-dim);
        }
        .systems-tabs button .count {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 2px 6px;
          background: var(--surface-2);
          border-radius: 2px;
          color: var(--text-low);
        }
        .systems-tabs button:hover { color: var(--text-hi); }
        .systems-tabs button.active {
          background: var(--surface-3);
          color: var(--text-hi);
        }
        .systems-tabs button.active .en { color: var(--orange); }
        .systems-tabs button.active .count {
          background: var(--orange-soft);
          color: var(--orange);
          border: 1px solid var(--orange-line);
        }

        .systems-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 980px) {
          .systems-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .systems-grid { grid-template-columns: 1fr; }
        }
        .sys-card {
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 20px 20px 18px;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }
        .sys-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-2px);
          background: var(--surface-2);
        }
        .sys-card .head {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: 14px;
        }
        .sys-card .name {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.015em;
          color: var(--text-hi);
        }
        .sys-card .tagline {
          font-family: var(--font-tc);
          font-size: 13px;
          color: var(--text-mid);
          line-height: 1.5;
          margin-bottom: 16px;
          min-height: 40px;
        }
        .sys-card .metric {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--cyan);
          padding: 4px 8px;
          background: var(--cyan-soft);
          border: 1px solid var(--cyan-line);
          border-radius: 2px;
          margin-bottom: 14px;
          display: inline-block;
        }
        .sys-card .stack {
          display: flex; flex-wrap: wrap; gap: 4px;
          padding-top: 14px;
          border-top: 1px dashed var(--border);
        }
        .sys-card .stack span {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-low);
          letter-spacing: 0.04em;
          padding: 3px 6px;
          background: var(--surface-2);
          border-radius: 2px;
        }
        .grid-fade-in {
          animation: fadeUp 0.4s ease both;
        }
      `}</style>
      <div className="container">
        <SectionHead
          label="06 / DELIVERABLE SYSTEMS"
          title={<>30+ 生產系統、<br/>整個集團跑在上面。</>}
          sub="不是 portfolio 圖、不是 demo。是每天有真實 traffic、真實營收、真實 SLO 的生產系統。"
        />

        <div className="systems-tabs">
          {tabs.map(t => (
            <button
              key={t.key}
              className={active === t.key ? 'active' : ''}
              onClick={() => setActive(t.key)}
            >
              {t.label}
              <span className="en">{t.en}</span>
              <span className="count">{t.count}</span>
            </button>
          ))}
        </div>

        <div className="systems-grid" key={active}>
          {systems[active].map((s, i) => (
            <div key={s.name} className="sys-card grid-fade-in" style={{ animationDelay: `${i * 0.04}s` }}>
              <div className="head">
                <div className="name">{s.name}</div>
                <span className={`badge badge-dot badge-${s.status.toLowerCase()}`}>{s.status}</span>
              </div>
              <p className="tagline">{s.tagline}</p>
              <div className="metric">{s.metric}</div>
              <div className="stack">
                {s.stack.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Systems });
