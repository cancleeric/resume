// Deliverable Systems — 3 tabs with card grids

function Systems() {
  const tabs = [
    { key: 'ai', labelKey: 'systems.tab.ai.label', en: 'AI / AGENT', count: 9 },
    { key: 'saas', labelKey: 'systems.tab.saas.label', en: 'PUBLIC SAAS', count: 5 },
    { key: 'infra', labelKey: 'systems.tab.infra.label', en: 'GROUP INFRA', count: 5 },
  ];

  const systems = {
    ai: [
      { name: 'Squid', taglineKey: 'sys.squid.tagline', stack: ['LIDS OAuth2', 'JWT', 'API Key', 'Python SDK', 'JS SDK'], status: 'LIVE', metricKey: 'sys.squid.metric' },
      { name: 'Manta', taglineKey: 'sys.manta.tagline', stack: ['sys.stack.sandbox', 'Webhook', 'sys.stack.realtime-monitor'], status: 'LIVE', metricKey: 'sys.manta.metric' },
      { name: 'AICAD', taglineKey: 'sys.aicad.tagline', stack: ['Anemone', 'Claude Vision', 'DXF'], status: 'LIVE', metricKey: 'sys.aicad.metric' },
      { name: 'fiona-radar', taglineKey: 'sys.fiona-radar.tagline', stack: ['Anemone', 'JSONB', 'YouTube'], status: 'GA', metricKey: null, metric: 'v1.1.0' },
      { name: 'fiona-pipeline', taglineKey: 'sys.fiona-pipeline.tagline', stack: ['n8n', 'webhook'], status: 'LIVE', metricKey: 'sys.fiona-pipeline.metric' },
      { name: '智腦平台', taglineKey: 'sys.brain.tagline', stack: ['Anemone', 'Brain Cloud', 'LLM Gateway'], status: 'GA', metricKey: null, metric: '四層反向連線架構' },
      { name: 'Claude Agents', taglineKey: 'sys.claude-agents.tagline', stack: ['sys.stack.multirole', 'sys.stack.cross-machine-sync', 'sys.stack.tiered-access'], status: 'LIVE', metricKey: 'sys.claude-agents.metric' },
      { name: 'Modelhub', taglineKey: 'sys.modelhub.tagline', stack: ['FastAPI', 'SQLAlchemy', 'SQLite'], status: 'GA', metricKey: 'sys.modelhub.metric' },
      { name: 'Anemone', taglineKey: 'sys.anemone.tagline', stack: ['LLM ingress', 'sys.stack.cross-tenant'], status: 'LIVE', metricKey: 'sys.anemone.metric' },
    ],
    saas: [
      { name: 'Conch (RS / 海螺訂位)', taglineKey: 'sys.conch.tagline', stack: ['LINE Pay', 'PayPal Live', 'iOS App'], status: 'LIVE', metricKey: null, metric: '1,265+ tests / 28 migrations / 29 PRs' },
      { name: 'Abacus 算盤', taglineKey: 'sys.abacus.tagline', stack: ['.NET 8', 'Blazor', 'LIDS PKCE', 'Playwright 24'], status: 'LIVE', metricKey: 'sys.abacus.metric' },
      { name: 'Tianji 天機', taglineKey: 'sys.tianji.tagline', stack: ['iOS', 'Web'], status: 'LIVE', metricKey: 'sys.tianji.metric' },
      { name: '打工仔 DaGongZai', taglineKey: 'sys.dagongzai.tagline', stack: ['FastAPI', 'Next.js 14', 'Swift iOS', 'PayPal Escrow'], status: 'LIVE', metricKey: 'sys.dagongzai.metric' },
      { name: 'Gyre v0.11.0', taglineKey: 'sys.gyre.tagline', stack: ['Secret Manager', 'sys.stack.env-isolation'], status: 'BETA', metricKey: 'sys.gyre.metric' },
    ],
    infra: [
      { name: 'Hurricane Pay', taglineKey: 'sys.hurricane-pay.tagline', stack: ['FastAPI', 'PostgreSQL', 'PayPal SDK'], status: 'LIVE', metricKey: null, metric: '15 routes / 90 tests / 88% coverage' },
      { name: 'LIDS', taglineKey: 'sys.lids.tagline', stack: ['OAuth2', 'OIDC', 'sys.stack.custom-oidc-patch'], status: 'LIVE', metricKey: 'sys.lids.metric' },
      { name: 'Hurricane Vault', taglineKey: 'sys.vault.tagline', stack: ['Secret Manager', 'sys.stack.audit', 'sys.stack.symmetric-backup'], status: 'LIVE', metricKey: null, metric: '90+ secrets' },
      { name: 'Tentacle BFF', taglineKey: 'sys.tentacle.tagline', stack: ['BFF', 'neritic CLI'], status: 'LIVE', metricKey: 'sys.tentacle.metric' },
      { name: 'Headscale', taglineKey: 'sys.headscale.tagline', stack: ['ACL', 'sys.stack.cross-node'], status: 'LIVE', metricKey: 'sys.headscale.metric' },
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
          /* --text-mid 而非 --text-low：10.5px 技術棧標籤，--text-low 在 surface-2 上深版僅 ~3.5:1 未達 AA */
          color: var(--text-mid);
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
          title={<span dangerouslySetInnerHTML={{ __html: t('systems.section.title') }} />}
          sub={t('systems.section.sub')}
        />

        <div className="systems-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={active === tab.key ? 'active' : ''}
              onClick={() => setActive(tab.key)}
            >
              {t(tab.labelKey)}
              <span className="en">{tab.en}</span>
              <span className="count">{tab.count}</span>
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
              <p className="tagline">{t(s.taglineKey)}</p>
              <div className="metric">{s.metricKey ? t(s.metricKey) : s.metric}</div>
              <div className="stack">
                {s.stack.map(st => <span key={st}>{st.startsWith('sys.stack.') ? t(st) : st}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Systems });
