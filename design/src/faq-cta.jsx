// FAQ + CTA

function FAQ() {
  const items = [
    { q: t('faq.01.q'), a: t('faq.01.a') },
    { q: t('faq.02.q'), a: t('faq.02.a') },
    { q: t('faq.03.q'), a: t('faq.03.a') },
    { q: t('faq.04.q'), a: t('faq.04.a') },
    { q: t('faq.05.q'), a: t('faq.05.a') },
    { q: t('faq.06.q'), a: t('faq.06.a') },
    { q: t('faq.07.q'), a: t('faq.07.a') },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section faq-section">
      <style>{`
        .faq-section { padding-top: 140px; }
        .faq-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 80px; align-items: start; }
        @media (max-width: 980px) { .faq-grid { grid-template-columns: 1fr; gap: 48px; } }
        .faq-list { display: flex; flex-direction: column; gap: 0; border-top: 1px solid var(--border); }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-q {
          width: 100%; text-align: left;
          padding: 22px 4px;
          font-family: var(--font-tc);
          font-size: 17px;
          font-weight: 500;
          color: var(--text-hi);
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px;
          transition: color 0.15s;
        }
        .faq-q:hover { color: var(--orange); }
        .faq-q .chev { transition: transform 0.2s; color: var(--text-low); flex-shrink: 0; }
        .faq-item.open .faq-q .chev { transform: rotate(180deg); color: var(--orange); }
        .faq-a {
          font-family: var(--font-tc);
          font-size: 15px;
          color: var(--text-mid);
          line-height: 1.7;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
          padding: 0 4px;
        }
        .faq-item.open .faq-a {
          max-height: 400px;
          padding: 0 4px 24px;
        }
        .faq-num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-low);
          letter-spacing: 0.08em;
          width: 28px;
          flex-shrink: 0;
        }
        .faq-q-text { flex: 1; }
      `}</style>
      <div className="container">
        <div className="faq-grid">
          <div>
            <SectionHead
              label="10 / FAQ"
              title={<>{t('faq.section.title')}</>}
              sub={t('faq.section.sub')}
            />
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="faq-num">Q.{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-q-text">{it.q}</span>
                  <span className="chev"><ChevronDown size={16}/></span>
                </button>
                <div className="faq-a">{it.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="section cta-section">
      <style>{`
        .cta-section { padding: 140px 0 200px; }
        .cta-wrap {
          position: relative;
          padding: 80px 64px;
          background:
            radial-gradient(800px 400px at 80% 100%, rgba(0,217,255,0.08), transparent 60%),
            radial-gradient(900px 500px at 20% 0%, rgba(255,107,53,0.10), transparent 60%),
            linear-gradient(180deg, var(--surface-1), var(--bg-2));
          border: 1px solid var(--border-strong);
          border-radius: var(--r-lg);
          overflow: hidden;
        }
        .cta-wrap::before {
          content: ""; position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
          pointer-events: none;
        }
        .cta-grid {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1.5fr 1fr;
          gap: 48px;
          align-items: end;
        }
        @media (max-width: 980px) { .cta-grid { grid-template-columns: 1fr; gap: 36px; } }
        .cta-eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.18em;
          color: var(--orange);
          margin-bottom: 28px;
          display: inline-flex; align-items: center; gap: 12px;
        }
        .cta-eyebrow::before {
          content: ""; width: 32px; height: 1px; background: var(--orange);
        }
        .cta-title {
          font-family: var(--font-tc);
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.035em;
          margin-bottom: 20px;
          color: var(--text-hi);
        }
        .cta-title .accent { color: var(--orange); }
        .cta-sub {
          font-family: var(--font-tc);
          font-size: 17px;
          color: var(--text-mid);
          line-height: 1.55;
          max-width: 48ch;
          margin-bottom: 36px;
        }
        .cta-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .cta-meta {
          display: grid; gap: 16px;
        }
        .cta-meta-row {
          padding: 14px 18px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          display: flex; align-items: center; gap: 12px;
          text-decoration: none;
          transition: border-color 0.15s, transform 0.15s;
        }
        a.cta-meta-row:hover {
          border-color: var(--orange-line);
          transform: translateY(-1px);
        }
        .cta-meta-row .icon {
          width: 32px; height: 32px;
          display: grid; place-items: center;
          background: var(--surface-3);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--orange);
        }
        .cta-meta-row .k {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--text-low);
          margin-bottom: 2px;
        }
        .cta-meta-row .v {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--text-hi);
        }
      `}</style>
      <div className="container">
        <div className="cta-wrap">
          <div className="cta-grid">
            <div>
              <div className="cta-eyebrow">{t('cta.eyebrow')}</div>
              <h2 className="cta-title">
                {t('cta.title.line1')}<span className="accent">{t('cta.title.accent')}</span>{t('cta.title.line2')}<br/>
                {t('cta.title.line3')}<br/>
                {t('cta.title.line4')}
              </h2>
              <p className="cta-sub">
                {t('cta.sub')}
              </p>
              <div className="cta-ctas">
                <a className="btn btn-primary" href="mailto:cancleeric@gmail.com?subject=%5B%E9%A0%90%E7%B4%84%E8%AB%AE%E8%A9%A2%5D%20HurricaneSoft%20%E5%B7%A5%E4%BD%9C%E5%AE%A4&body=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%83%B3%E9%A0%90%E7%B4%84%2030%20%E5%88%86%E9%90%98%E5%85%8D%E8%B2%BB%E8%AB%AE%E8%A9%A2%EF%BC%9A%0A%0A%E3%80%90%E9%9C%80%E6%B1%82%E7%B0%A1%E8%BF%B0%E3%80%91%EF%BC%9A%0A%E3%80%90%E9%A0%90%E7%AE%97%20%2F%20%E6%99%82%E7%A8%8B%E3%80%91%EF%BC%9A%0A%E3%80%90%E6%96%B9%E4%BE%BF%E8%81%AF%E7%B5%A1%E6%99%82%E6%AE%B5%E3%80%91%EF%BC%9A%0A">
                  {t('cta.primary')}
                  <ArrowRight />
                </a>
                <a className="btn btn-ghost" href="mailto:cancleeric@gmail.com">
                  {t('cta.secondary')}
                  <Mail />
                </a>
              </div>
            </div>
            <div className="cta-meta">
              <a className="cta-meta-row" href="tel:+886921107206">
                <span className="icon"><Phone size={14}/></span>
                <div>
                  <div className="k">PHONE</div>
                  <div className="v">+886 921-107-206</div>
                </div>
              </a>
              <a className="cta-meta-row" href="mailto:cancleeric@gmail.com">
                <span className="icon"><Mail size={14}/></span>
                <div>
                  <div className="k">EMAIL</div>
                  <div className="v">cancleeric@gmail.com</div>
                </div>
              </a>
              <a className="cta-meta-row" href="https://www.hurricanesoft.com.tw/pipeline" target="_blank" rel="noopener">
                <span className="icon"><ArrowUpRight /></span>
                <div>
                  <div className="k">LIVE PIPELINE</div>
                  <div className="v">hurricanesoft.com.tw/pipeline</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ, CTA });
