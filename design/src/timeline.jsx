// Timeline — recent deliveries

function Timeline() {
  const filters = [
    { key: 'all', labelKey: 'timeline.filter.all', en: 'ALL' },
    { key: 'q1q2', labelKey: 'timeline.filter.q1q2', en: 'RECENT' },
    { key: 'enterprise', labelKey: 'timeline.filter.enterprise', en: 'ENTERPRISE' },
  ];
  const items = [
    {
      date: '2026.05',
      version: 'v2.55.0',
      titleKey: 'timeline.item.01.title',
      tag: 'q1q2',
      summaryKey: 'timeline.item.01.summary',
      kindKey: 'timeline.kind.saas',
      chips: ['JWT httpOnly', 'LIDS', 'CSRF PASS'],
    },
    {
      date: '2026.05',
      version: 'v0.13.0',
      titleKey: 'timeline.item.02.title',
      tag: 'q1q2',
      summaryKey: 'timeline.item.02.summary',
      kindKey: 'timeline.kind.infra',
      chips: ['FastAPI', 'PostgreSQL', 'PayPal LIVE'],
    },
    {
      date: '2026.04',
      version: 'v4.0.0',
      titleKey: 'timeline.item.03.title',
      tag: 'q1q2',
      summaryKey: 'timeline.item.03.summary',
      kindKey: 'timeline.kind.saas',
      chips: ['LINE Pay', 'PayPal Live', 'iOS App'],
    },
    {
      date: '2026.04',
      version: 'v1.1.0',
      titleKey: 'timeline.item.04.title',
      tag: 'q1q2',
      summaryKey: 'timeline.item.04.summary',
      kindKey: 'timeline.kind.saas',
      chips: ['FastAPI', 'Next.js 14', 'Swift iOS'],
    },
    {
      date: '2026.04',
      version: 'v1.0.0',
      titleKey: 'timeline.item.05.title',
      tag: 'q1q2',
      summaryKey: 'timeline.item.05.summary',
      kindKey: 'timeline.kind.infra',
      chips: ['Secret Manager', t('timeline.chip.audit'), t('timeline.chip.failover')],
    },
    {
      date: '2024.05 - 2026.02',
      version: '—',
      titleKey: 'timeline.item.06.title',
      tag: 'enterprise',
      summaryKey: 'timeline.item.06.summary',
      kindKey: 'timeline.kind.enterprise',
      chips: ['.NET 8', 'Blazor', t('timeline.chip.microservices')],
    },
    {
      date: t('timeline.item.07.date'),
      version: '—',
      titleKey: 'timeline.item.07.title',
      tag: 'enterprise',
      summaryKey: 'timeline.item.07.summary',
      kindKey: 'timeline.kind.enterprise',
      chips: ['PHP', 'CodeIgniter', 'HMVC'],
    },
    {
      date: '2023.06 - 2024.04',
      version: '—',
      titleKey: 'timeline.item.08.title',
      tag: 'enterprise',
      summaryKey: 'timeline.item.08.summary',
      kindKey: 'timeline.kind.enterprise',
      chips: ['SwiftUI', 'SpriteKit', 'Firebase'],
    },
  ];

  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? items : items.filter(i => i.tag.includes(filter));

  return (
    <section id="timeline" className="section timeline-section">
      <style>{`
        .timeline-section { padding-top: 140px; }
        .tl-filters { display: flex; gap: 4px; margin-bottom: 40px; padding: 4px; background: var(--surface-1); border: 1px solid var(--border); border-radius: 6px; width: fit-content; }
        .tl-filters button {
          padding: 8px 14px;
          font-family: var(--font-tc);
          font-size: 13px;
          color: var(--text-mid);
          border-radius: 4px;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .tl-filters button .en { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em; color: var(--text-dim); }
        .tl-filters button.active { background: var(--surface-3); color: var(--text-hi); }
        .tl-filters button.active .en { color: var(--orange); }

        .tl-track {
          position: relative;
          padding-left: 32px;
        }
        .tl-track::before {
          content: "";
          position: absolute;
          top: 8px; bottom: 8px;
          left: 7px;
          width: 1px;
          background: linear-gradient(to bottom, var(--border-strong) 0%, var(--border) 50%, transparent 100%);
        }
        .tl-item {
          position: relative;
          padding: 0 0 32px 32px;
          margin-left: -32px;
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 32px;
        }
        @media (max-width: 760px) {
          .tl-item { grid-template-columns: 1fr; }
        }
        .tl-item::before {
          content: "";
          position: absolute;
          left: 4px; top: 22px;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--surface-1);
          border: 1px solid var(--border-strong);
          z-index: 1;
        }
        .tl-item.recent::before {
          background: var(--orange);
          border-color: var(--orange);
          box-shadow: 0 0 0 4px rgba(255,107,53,0.15), 0 0 12px var(--orange);
        }
        .tl-meta {
          padding-top: 16px;
        }
        .tl-date {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-hi);
          letter-spacing: 0.02em;
          margin-bottom: 4px;
        }
        .tl-version {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-low);
          letter-spacing: 0.04em;
        }
        .tl-kind {
          margin-top: 8px;
          font-family: var(--font-tc);
          font-size: 12px;
          color: var(--cyan);
        }
        .tl-card {
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 22px 24px;
          transition: all 0.2s;
        }
        .tl-card:hover { border-color: var(--border-strong); background: var(--surface-2); }
        .tl-card h4 {
          font-family: var(--font-tc);
          font-size: 19px;
          font-weight: 600;
          color: var(--text-hi);
          letter-spacing: -0.015em;
          margin-bottom: 8px;
        }
        .tl-card p {
          font-family: var(--font-tc);
          font-size: 14px;
          color: var(--text-mid);
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .tl-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .tl-chips span {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-low);
          padding: 3px 8px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 2px;
        }
      `}</style>
      <div className="container">
        <SectionHead
          label="07 / RECENT DELIVERIES"
          title={<span dangerouslySetInnerHTML={{ __html: t('timeline.section.title') }} />}
          sub={t('timeline.section.sub')}
        />

        <div className="tl-filters">
          {filters.map(f => (
            <button key={f.key} className={filter === f.key ? 'active' : ''} onClick={() => setFilter(f.key)}>
              {t(f.labelKey)} <span className="en">{f.en}</span>
            </button>
          ))}
        </div>

        <div className="tl-track">
          {filtered.map((it, i) => (
            <div key={it.titleKey} className={`tl-item ${i < 2 ? 'recent' : ''}`}>
              <div className="tl-meta">
                <div className="tl-date">{it.date}</div>
                <div className="tl-version">{it.version}</div>
                <div className="tl-kind">{t(it.kindKey)}</div>
              </div>
              <div className="tl-card">
                <h4>{t(it.titleKey)}</h4>
                <p>{t(it.summaryKey)}</p>
                <div className="tl-chips">
                  {it.chips.map(c => <span key={c}>{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Timeline });
