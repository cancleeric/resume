// Services — grid with 8 items (2 hero cards span 3 cols, then 6 small span 2)

function Services() {
  const services = [
    {
      key: 'pipeline',
      num: '01',
      tcKey: 'svc.01.tc',
      en: 'AUTOMATED DELIVERY',
      descKey: 'svc.01.desc',
      bulletKeys: ['svc.01.bullet.01', 'svc.01.bullet.02', 'svc.01.bullet.03'],
      featured: true,
      tag: 'FLAGSHIP',
    },
    {
      key: 'ai-platform',
      num: '02',
      tcKey: 'svc.02.tc',
      en: 'AI / LLM PLATFORM',
      descKey: 'svc.02.desc',
      bulletKeys: ['svc.02.bullet.01', 'svc.02.bullet.02', 'svc.02.bullet.03'],
      featured: true,
      tag: 'CORE',
    },
    {
      key: 'saas',
      num: '03',
      tcKey: 'svc.03.tc',
      en: 'MULTI-TENANT SAAS',
      descKey: 'svc.03.desc',
    },
    {
      key: 'identity',
      num: '04',
      tcKey: 'svc.04.tc',
      en: 'IDENTITY · SECURITY',
      descKey: 'svc.04.desc',
    },
    {
      key: 'payments',
      num: '05',
      tcKey: 'svc.05.tc',
      en: 'PAYMENTS · BILLING',
      descKey: 'svc.05.desc',
    },
    {
      key: 'cloud-run',
      num: '06',
      tcKey: 'svc.06.tc',
      en: 'GCP CLOUD RUN',
      descKey: 'svc.06.desc',
    },
    {
      key: 'modernization',
      num: '07',
      tcKey: 'svc.07.tc',
      en: 'MODERNIZATION',
      descKey: 'svc.07.desc',
    },
    {
      key: 'gov-grant',
      num: '08',
      tcKey: 'svc.08.tc',
      en: 'GOV AI GRANTS',
      descKey: 'svc.08.desc',
    },
  ];

  return (
    <section id="services" className="section services-section">
      <style>{`
        .services-section { padding-top: 140px; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1px;
          background: var(--border-subtle);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          overflow: hidden;
        }
        @media (max-width: 980px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .service-card {
          background: var(--surface-1);
          padding: 28px 24px 24px;
          display: flex; flex-direction: column;
          min-height: 220px;
          transition: background 0.2s;
          cursor: default;
          grid-column: span 2;
        }
        .service-card.featured {
          grid-column: span 3;
          min-height: 320px;
          padding: 36px 32px 32px;
          background: linear-gradient(180deg, rgba(20,23,30,0.6), rgba(14,16,21,1));
          position: relative;
        }
        .service-card.featured::after {
          content: "";
          position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image: radial-gradient(ellipse at 80% 0%, black 0%, transparent 70%);
          pointer-events: none;
        }
        .service-card:hover { background: var(--surface-2); }
        .service-header {
          display: flex; align-items: flex-start; justify-content: space-between;
        }
        .service-num {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          /* --text-mid 而非 --text-low：12px 服務項目編號，--text-low 兩版對比未達 AA */
          color: var(--text-mid);
        }
        .service-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          padding: 3px 8px;
          background: var(--orange-soft);
          color: var(--orange);
          border-radius: 2px;
          border: 1px solid var(--orange-line);
        }
        .service-body { margin-top: 56px; position: relative; z-index: 1; }
        .service-card.featured .service-body { margin-top: 80px; }
        .service-tc {
          font-family: var(--font-tc);
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.015em;
          color: var(--text-hi);
          margin-bottom: 6px;
        }
        .service-card.featured .service-tc {
          font-size: 32px;
          letter-spacing: -0.025em;
        }
        .service-en {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--orange);
          margin-bottom: 14px;
        }
        .service-desc {
          font-family: var(--font-tc);
          font-size: 14px;
          color: var(--text-mid);
          line-height: 1.55;
          max-width: 36ch;
        }
        .service-bullets {
          margin-top: 20px;
          display: grid;
          gap: 6px;
        }
        .service-bullets li {
          list-style: none;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-mid);
          display: flex; align-items: center; gap: 10px;
        }
        .service-bullets li::before {
          content: ""; width: 4px; height: 4px; border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 6px var(--cyan);
        }
      `}</style>
      <div className="container">
        <SectionHead
          label="04 / SERVICES"
          title={<span dangerouslySetInnerHTML={{ __html: t('svc.section.title') }} />}
          sub={t('svc.section.sub')}
        />

        <div className="services-grid">
          {services.map(s => (
            <div key={s.key} className={`service-card ${s.featured ? 'featured' : ''}`}>
              <div className="service-header">
                <span className="service-num">{s.num} / 08</span>
                {s.tag && <span className="service-tag">{s.tag}</span>}
              </div>
              <div className="service-body">
                <div className="service-en">{s.en}</div>
                <h3 className="service-tc">{t(s.tcKey)}</h3>
                <p className="service-desc">{t(s.descKey)}</p>
                {s.bulletKeys && (
                  <ul className="service-bullets">
                    {s.bulletKeys.map(bk => <li key={bk}>{t(bk)}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services });
