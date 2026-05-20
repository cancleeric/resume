// Trust bar — client domains marquee

function TrustBar() {
  const domains = [
    { name: '年軟體經驗', en: 'YEARS', count: '25' },
    { name: '企業客戶', en: 'ENTERPRISE', count: '100+' },
    { name: '生產系統', en: 'PROD SYSTEMS', count: '30+' },
    { name: '子公司', en: 'SUBSIDIARIES', count: '6' },
    { name: 'Cloud Run 服務', en: 'CLOUD RUN', count: '19' },
    { name: 'SaaS 接入', en: 'SAAS INTEGRATED', count: '9+' },
  ];

  return (
    <section id="trust" className="trust-section">
      <style>{`
        .trust-section {
          padding: 56px 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          background: linear-gradient(180deg, rgba(0,0,0,0.2), transparent);
        }
        .trust-label {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--text-low);
          margin-bottom: 32px;
        }
        .trust-label::before, .trust-label::after {
          content: ""; flex: 1; max-width: 100px; height: 1px;
          background: var(--border-subtle);
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0;
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          overflow: hidden;
        }
        @media (max-width: 980px) { .trust-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 580px) { .trust-grid { grid-template-columns: repeat(2, 1fr); } }
        .trust-cell {
          padding: 22px 18px;
          border-right: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          transition: background 0.2s;
        }
        .trust-cell:hover { background: var(--surface-1); }
        .trust-cell .name {
          font-family: var(--font-tc);
          font-size: 15px;
          font-weight: 500;
          color: var(--text-hi);
          margin-bottom: 4px;
        }
        .trust-cell .en {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--text-low);
          margin-bottom: 10px;
        }
        .trust-cell .count {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--cyan);
        }
      `}</style>
      <div className="container">
        <div className="trust-label">TRUST CREDENTIALS · 信任要件</div>
        <div className="trust-grid">
          {domains.map(d => (
            <div key={d.name} className="trust-cell">
              <div className="name">{d.name}</div>
              <div className="en">{d.en}</div>
              <div className="count">{d.count}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TrustBar });
