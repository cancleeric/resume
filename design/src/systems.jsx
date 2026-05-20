// Deliverable Systems — 3 tabs with card grids

function Systems() {
  const tabs = [
    { key: 'ai', label: 'AI 產品線', en: 'AI / PRODUCT LINE', count: 14 },
    { key: 'saas', label: '對外 SaaS', en: 'PUBLIC SAAS', count: 9 },
    { key: 'infra', label: '集團基礎建設', en: 'GROUP INFRA', count: 12 },
  ];

  const systems = {
    ai: [
      { name: 'LF Pipeline', tagline: '展示用：開發流程自動化現場', stack: ['Next.js', 'Cloud Run', 'Vertex AI'], status: 'LIVE', metric: '6 子公司即時看板' },
      { name: 'Agent Orchestrator', tagline: 'Multi-agent 任務分派 + eval', stack: ['Python', 'LangGraph', 'GCP'], status: 'GA', metric: '12 agent · 8 evals' },
      { name: 'Spec → Code', tagline: '從 PRD 自動產出可執行 spec', stack: ['Claude', 'TS', 'Zod'], status: 'GA', metric: '94% 通過率' },
      { name: 'Review Co-pilot', tagline: 'PR 審查 + 風險 flag', stack: ['GitHub Actions', 'LLM'], status: 'LIVE', metric: '> 2k PR 審過' },
      { name: 'Doc Synth', tagline: '產品文件 / RFC 自動生成', stack: ['Embeddings', 'MDX'], status: 'GA', metric: '8 產品線使用' },
      { name: 'Insight Stream', tagline: 'BI / 異常偵測串流', stack: ['BigQuery', 'PubSub'], status: 'BETA', metric: 'P95 < 1.2s' },
    ],
    saas: [
      { name: 'HurricaneOps', tagline: 'DevOps 監控 + 成本看板', stack: ['Vue', 'Go', 'GCP'], status: 'LIVE', metric: '19 服務在管' },
      { name: 'CanCleeric Studio', tagline: '個人接案 portfolio + 案件管理', stack: ['Next.js', 'tRPC'], status: 'LIVE', metric: '本頁就是' },
      { name: 'Compliance Kit', tagline: 'SaaS 法遵自動稽核', stack: ['Audit Logs', 'OPA'], status: 'GA', metric: 'SOC2 預備' },
      { name: 'Billing Mesh', tagline: '多租戶 metering / billing', stack: ['Stripe', 'Postgres'], status: 'GA', metric: '6 產品共用' },
      { name: 'Identity Edge', tagline: '集中 SSO + IdP', stack: ['OIDC', 'Workload Identity'], status: 'LIVE', metric: '跨集團共用' },
      { name: 'Forms Pro', tagline: '無 schema 表單生成', stack: ['React Hook Form'], status: 'BETA', metric: '120+ form schemas' },
    ],
    infra: [
      { name: 'Cloud Run Mesh', tagline: '集團 19 服務的統一部署', stack: ['Cloud Run', 'IaC'], status: 'LIVE', metric: '99.97% SLO' },
      { name: 'Secret Vault', tagline: '集中金鑰 + rotation', stack: ['GCP Secret Manager'], status: 'LIVE', metric: '0 leak in 12mo' },
      { name: 'Cost Sentinel', tagline: '即時雲端費用警示', stack: ['BigQuery', 'Slack'], status: 'LIVE', metric: '-38% 月費' },
      { name: 'Pipeline Runner', tagline: 'GitHub Actions 抽象層', stack: ['TS', 'YAML DSL'], status: 'GA', metric: '6 repo 共用' },
      { name: 'Eval Harness', tagline: '集團 LLM 評測平台', stack: ['Python', 'pytest'], status: 'GA', metric: '500+ test cases' },
      { name: 'Edge Gateway', tagline: 'API gateway + rate limit', stack: ['Cloudflare Workers'], status: 'LIVE', metric: '40M req/mo' },
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
