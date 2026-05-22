// Trust bar — client domains marquee

function TrustBar() {
  const domains = [
    { nameKey: 'trust.item.01.name', en: 'YEARS', count: '25' },
    { nameKey: 'trust.item.02.name', en: 'ENTERPRISE', count: '100+' },
    { nameKey: 'trust.item.03.name', en: 'PROD SYSTEMS', count: '30+' },
    { nameKey: 'trust.item.04.name', en: 'SUBSIDIARIES', count: '6' },
    { nameKey: 'trust.item.05.name', en: 'CLOUD RUN', count: '19' },
    { nameKey: 'trust.item.06.name', en: 'SAAS INTEGRATED', count: '9+' },
  ];

  return (
    <section id="trust" className="trust-section">
      <style>{`
        .trust-section {
          padding: 56px 0;
          scroll-margin-top: 84px;
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
        /* 6 格：平板斷點用 3 欄（不是 4）—— 4 欄會留 4+2 破格，3 欄整齊 3+3 */
        @media (max-width: 980px) { .trust-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 580px) { .trust-grid { grid-template-columns: repeat(2, 1fr); } }
        .trust-cell {
          padding: 22px 18px;
          border-right: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          transition: background 0.2s;
        }
        .trust-cell:hover { background: var(--surface-1); }
        .trust-cell .count {
          font-family: var(--font-mono);
          font-size: 34px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.02em;
          color: var(--cyan);
          margin-bottom: 10px;
        }
        .trust-cell .name {
          font-family: var(--font-tc);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-hi);
          margin-bottom: 2px;
        }
        .trust-cell .en {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          /* --text-mid 而非 --text-low：10px 信任指標英文副標，--text-low 深版對比僅 ~3.6:1 未達 AA */
          color: var(--text-mid);
        }
      `}</style>
      <div className="container">
        <div className="trust-label">{t('trust.label')}</div>
        <div className="trust-grid">
          {domains.map(d => (
            <div key={d.nameKey} className="trust-cell">
              <div className="count">{d.count}</div>
              <div className="name">{t(d.nameKey)}</div>
              <div className="en">{d.en}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TrustBar });
