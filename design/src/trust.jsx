// Trust bar — client domains marquee

function TrustBar() {
  const domains = [
    { name: '金融', en: 'FINANCE', count: '8 clients' },
    { name: '製造業', en: 'MANUFACTURING', count: '12 clients' },
    { name: '醫療', en: 'HEALTHCARE', count: '4 clients' },
    { name: '零售連鎖', en: 'RETAIL', count: '14 clients' },
    { name: '物流', en: 'LOGISTICS', count: '6 clients' },
    { name: '教育', en: 'EDUCATION', count: '5 clients' },
    { name: '政府', en: 'GOV / PUBLIC', count: '3 contracts' },
    { name: 'B2B SaaS', en: 'B2B SAAS', count: '18 clients' },
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
          grid-template-columns: repeat(8, 1fr);
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
        <div className="trust-label">TRUSTED ACROSS · 客戶領域</div>
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
