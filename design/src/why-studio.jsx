// Why This Studio — comparison table
// Desktop: 4-column grid (labels + 3 comparison cols)
// Mobile : 3 stacked cards, each containing header + 6 labeled rows

function WhyStudio() {
  const cols = [
    { key: 'freelancer', label: 'vs Freelancer', titleKey: 'why.freelancer.head', tone: 'neutral' },
    { key: 'agency',     label: 'vs Agency',     titleKey: 'why.agency.head',     tone: 'neutral' },
    { key: 'studio',     labelKey: 'why.studio.badge', titleKey: 'why.studio.head',     tone: 'highlight' },
  ];

  const rows = [
    { labelKey: 'why.row.01.label', en: 'OWNERSHIP', values: {
      freelancer: { textKey: 'why.freelancer.row.01', tone: 'bad' },
      agency:     { textKey: 'why.agency.row.01',     tone: 'mid' },
      studio:     { textKey: 'why.studio.row.01',     tone: 'good' },
    }},
    { labelKey: 'why.row.02.label', en: 'COST', values: {
      freelancer: { textKey: 'why.freelancer.row.02', tone: 'mid' },
      agency:     { textKey: 'why.agency.row.02',     tone: 'bad' },
      studio:     { textKey: 'why.studio.row.02',     tone: 'good' },
    }},
    { labelKey: 'why.row.03.label', en: 'TIME-TO-PROD', values: {
      freelancer: { textKey: 'why.freelancer.row.03', tone: 'mid' },
      agency:     { textKey: 'why.agency.row.03',     tone: 'bad' },
      studio:     { textKey: 'why.studio.row.03',     tone: 'good' },
    }},
    { labelKey: 'why.row.04.label', en: 'COVERAGE', values: {
      freelancer: { textKey: 'why.freelancer.row.04', tone: 'bad' },
      agency:     { textKey: 'why.agency.row.04',     tone: 'mid' },
      studio:     { textKey: 'why.studio.row.04',     tone: 'good' },
    }},
    { labelKey: 'why.row.05.label', en: 'DECISION', values: {
      freelancer: { textKey: 'why.freelancer.row.05', tone: 'mid' },
      agency:     { textKey: 'why.agency.row.05',     tone: 'bad' },
      studio:     { textKey: 'why.studio.row.05',     tone: 'good' },
    }},
    { labelKey: 'why.row.06.label', en: 'PROOF', values: {
      freelancer: { textKey: 'why.freelancer.row.06', tone: 'bad' },
      agency:     { textKey: 'why.agency.row.06',     tone: 'bad' },
      studio:     { textKey: 'why.studio.row.06',     tone: 'good' },
    }},
  ];

  return (
    <section id="why" className="section why-section">
      <style>{`
        .why-section { padding-top: 140px; }

        /* Desktop grid: 4-col with sub-grid per column */
        .why-table {
          display: grid;
          grid-template-columns: 200px repeat(3, 1fr);
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          overflow: hidden;
        }
        .why-col {
          display: grid;
          grid-template-rows: subgrid;
          grid-row: span 7;
          border-right: 1px solid var(--border-subtle);
        }
        .why-col:last-child { border-right: none; }
        .why-col.labels { background: var(--bg-2); }

        .why-cell {
          padding: 22px 24px;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--surface-1);
        }
        .why-col.labels .why-cell { background: var(--bg-2); }
        .why-col.highlight .why-cell { background: rgba(255,107,53,0.025); }
        .why-cell:last-child { border-bottom: none; }
        .why-cell .row-label-inline { display: none; }

        /* Header cell */
        .why-head {
          padding: 24px;
          background: var(--bg-2);
          border-bottom: 1px solid var(--border);
        }
        .why-col.highlight .why-head {
          background: linear-gradient(180deg, rgba(255,107,53,0.10), rgba(255,107,53,0.03));
          border-top: 1px solid var(--orange);
          margin-top: -1px;
        }
        .why-head .badge-pill {
          display: inline-flex; align-items: center;
          padding: 4px 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          /* --text-mid 而非 --text-low：10px 小字 --text-low 對比僅 ~3.4:1 未達 AA */
          color: var(--text-mid);
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 100px;
          margin-bottom: 12px;
        }
        .why-col.highlight .why-head .badge-pill {
          color: var(--orange);
          background: var(--orange-soft);
          border-color: var(--orange-line);
        }
        .why-head h4 {
          font-family: var(--font-tc);
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .why-head .meta-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--text-low);
        }
        .why-head .meta-sub {
          margin-top: 10px;
          color: var(--text-mid);
          font-size: 14px;
        }

        /* Row label cell (in labels column on desktop) */
        .row-label-cell {
          font-family: var(--font-tc);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-hi);
        }
        .row-label-cell .en {
          display: block;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--text-low);
          margin-top: 4px;
        }

        .why-text {
          font-family: var(--font-tc);
          font-size: 14px;
          color: var(--text-mid);
          line-height: 1.55;
        }
        .why-col.highlight .why-text { color: var(--text-hi); }
        .tone-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 18px; height: 18px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .tone-icon.good { background: rgba(46,224,160,0.12); color: var(--live); }
        .tone-icon.mid  { background: var(--surface-2); color: var(--text-low); }
        .tone-icon.bad  { background: rgba(255,107,53,0.08); color: #FF9E7E; }

        /* ── Mobile: 3 stacked cards ── */
        @media (max-width: 640px) {
          .why-table {
            display: flex !important;
            flex-direction: column;
            gap: 16px;
            background: transparent !important;
            border: none !important;
            border-radius: 0 !important;
            overflow: visible !important;
          }
          .why-col {
            display: flex !important;
            flex-direction: column;
            grid-row: auto;
            border: 1px solid var(--border) !important;
            border-radius: 6px;
            background: var(--surface-1);
            overflow: hidden;
          }
          .why-col.labels { display: none !important; }
          .why-col.highlight {
            border-color: var(--orange-line) !important;
            border-top: 1px solid var(--orange) !important;
            background:
              linear-gradient(180deg, rgba(255,107,53,0.06), rgba(255,107,53,0.0)) !important;
          }
          .why-head { padding: 18px 18px 14px !important; }
          .why-head h4 { font-size: 18px !important; }
          .why-cell {
            padding: 14px 18px !important;
            border-bottom: 1px dashed var(--border) !important;
            background: transparent !important;
          }
          .why-col.highlight .why-cell { background: transparent !important; }
          .why-cell:last-child { border-bottom: none !important; }
          .why-cell .row-label-inline {
            display: block !important;
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            /* --text-mid 而非 --text-low：手機版每格的對照維度標籤，--text-low 僅 ~3.3:1 未達 AA */
            color: var(--text-mid);
            margin-bottom: 4px;
          }
          .tone-icon { display: none !important; }
        }
      `}</style>

      <div className="container">
        <SectionHead
          label="03 / WHY THIS STUDIO"
          title={<span dangerouslySetInnerHTML={{ __html: t('why.section.title') }} />}
          sub={t('why.section.sub')}
        />

        <div className="why-table">
          {/* Labels column (desktop only) */}
          <div className="why-col labels">
            <div className="why-head">
              <div className="meta-label">COMPARISON</div>
              <h4 className="meta-sub">{t('why.comparison.head')}</h4>
            </div>
            {rows.map(r => (
              <div key={r.labelKey} className="why-cell row-label-cell">
                {t(r.labelKey)}
                <span className="en">{r.en}</span>
              </div>
            ))}
          </div>

          {/* 3 comparison columns */}
          {cols.map(c => (
            <div key={c.key} className={`why-col ${c.tone === 'highlight' ? 'highlight' : ''}`}>
              <div className="why-head">
                <span className="badge-pill">{c.labelKey ? t(c.labelKey) : c.label}</span>
                <h4>{t(c.titleKey)}</h4>
              </div>
              {rows.map(r => {
                const v = r.values[c.key];
                return (
                  <div key={r.labelKey} className="why-cell">
                    <span className="row-label-inline">{t(r.labelKey)} · {r.en}</span>
                    <span className={`tone-icon ${v.tone}`}>
                      {v.tone === 'good' ? <Check size={10}/> : v.tone === 'bad' ? <Cross size={10}/> : <Tilde size={10}/>}
                    </span>
                    <p className="why-text">{t(v.textKey)}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 安全驗收信任區塊 — 正面處理「自動化＝洞多」異議
function SecureNote() {
  return (
    <section id="secure" className="section secure-section">
      <style>{`
        .secure-section { padding-top: 40px; }
        .secure-note {
          padding: 30px 34px;
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-left: 3px solid var(--orange);
          border-radius: var(--r-md);
        }
        .secure-note__eyebrow {
          font-family: var(--font-mono);
          font-size: 11px; letter-spacing: 0.16em;
          color: var(--orange); margin-bottom: 10px;
        }
        .secure-note__title {
          font-family: var(--font-tc);
          font-size: clamp(22px, 2.6vw, 30px);
          font-weight: 600; letter-spacing: -0.02em;
          color: var(--text-hi); margin-bottom: 12px;
        }
        .secure-note__lead {
          font-family: var(--font-tc);
          font-size: 15px; line-height: 1.7;
          color: var(--text-mid); margin-bottom: 16px;
        }
        .secure-note__list { display: flex; flex-direction: column; gap: 9px; }
        .secure-note__list li {
          font-family: var(--font-tc);
          font-size: 14px; line-height: 1.6;
          color: var(--text-mid);
          padding-left: 20px; position: relative;
        }
        .secure-note__list li::before {
          content: "▸"; position: absolute; left: 0;
          color: var(--orange); font-size: 12px; top: 2px;
        }
        .secure-note__list strong { color: var(--text-hi); font-weight: 600; }
        @media (max-width: 560px) { .secure-note { padding: 22px 20px; } }
      `}</style>
      <div className="container">
        <div className="secure-note">
          <div className="secure-note__eyebrow">SECURITY VALIDATION</div>
          <div className="secure-note__title">{t('secure.title')}</div>
          <p className="secure-note__lead">{t('secure.lead')}</p>
          <ul className="secure-note__list">
            <li dangerouslySetInnerHTML={{ __html: t('secure.li1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('secure.li2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('secure.li3') }} />
          </ul>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WhyStudio, SecureNote });
