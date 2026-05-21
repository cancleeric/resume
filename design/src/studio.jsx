// Studio background — HurricaneGroup org

function StudioOrg() {
  const subs = [
    { name: 'HurricaneSoft', tcKey: 'studio.soft.tc', roleKey: 'studio.soft.role', accent: true },
    { name: 'HurricaneEdge', tcKey: 'studio.edge.tc', roleKey: 'studio.edge.role' },
    { name: 'HurricaneCore', tcKey: 'studio.core.tc', roleKey: 'studio.core.role' },
    { name: 'HurricanePrime', tcKey: 'studio.prime.tc', roleKey: 'studio.prime.role' },
    { name: 'HurricaneDigital', tcKey: 'studio.digital.tc', roleKey: 'studio.digital.role' },
    { name: 'HurricaneTech', tcKey: 'studio.tech.tc', roleKey: 'studio.tech.role' },
  ];
  return (
    <section id="studio" className="section studio-section">
      <style>{`
        .studio-section { padding-top: 140px; }
        .org-wrap {
          padding: 48px 32px;
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          position: relative;
          overflow: hidden;
        }
        .org-wrap::before {
          content: ""; position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
          pointer-events: none;
        }
        .org-parent {
          position: relative;
          z-index: 1;
          display: inline-flex; flex-direction: column; align-items: center;
          margin: 0 auto 40px;
          padding: 16px 28px;
          background: linear-gradient(180deg, rgba(255,107,53,0.10), rgba(255,107,53,0.02));
          border: 1px solid var(--orange-line);
          border-radius: var(--r-md);
          left: 50%;
          transform: translateX(-50%);
        }
        .org-parent .tc { font-family: var(--font-tc); font-size: 22px; font-weight: 600; color: var(--text-hi); }
        .org-parent .en { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em; color: var(--orange); margin-top: 2px; }
        .org-line {
          position: relative; z-index: 1;
          width: 1px; height: 32px;
          background: linear-gradient(to bottom, var(--orange), transparent);
          margin: 0 auto;
        }
        .org-tree {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 760px) { .org-tree { grid-template-columns: 1fr; } }
        .org-child {
          padding: 18px 18px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          position: relative;
        }
        .org-child.accent {
          background:
            linear-gradient(180deg, rgba(255,107,53,0.10), rgba(255,107,53,0.02));
          border-color: var(--orange-line);
        }
        .org-child .role {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.14em;
          color: var(--text-low);
          margin-bottom: 8px;
        }
        .org-child.accent .role { color: var(--orange); }
        .org-child .name { font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 600; color: var(--text-hi); }
        .org-child .tc { font-family: var(--font-tc); font-size: 13px; color: var(--text-mid); margin-top: 2px; }
        .org-foot {
          margin-top: 36px; padding-top: 24px; border-top: 1px dashed var(--border);
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
          position: relative; z-index: 1;
        }
        @media (max-width: 760px) { .org-foot { grid-template-columns: repeat(2, 1fr); } }
        .org-foot .stat .v { font-family: var(--font-mono); font-size: 28px; color: var(--text-hi); letter-spacing: -0.02em; line-height: 1; }
        .org-foot .stat .l { font-family: var(--font-tc); font-size: 12px; color: var(--text-mid); margin-top: 6px; }
        .org-foot .stat .v .accent { color: var(--orange); }
      `}</style>
      <div className="container">
        <SectionHead
          label="09 / STUDIO BACKGROUND"
          title={<span dangerouslySetInnerHTML={{ __html: t('studio.section.title') }} />}
          sub={t('studio.section.sub')}
        />

        <div className="org-wrap">
          <div className="org-parent">
            <span className="tc">HurricaneGroup</span>
            <span className="en">{t('studio.parent.en')}</span>
          </div>
          <div className="org-line"></div>
          <div className="org-tree">
            {subs.map(s => (
              <div key={s.name} className={`org-child ${s.accent ? 'accent' : ''}`}>
                <div className="role">{t(s.roleKey)}</div>
                <div className="name">{s.name}</div>
                {t(s.tcKey) && <div className="tc">{t(s.tcKey)}</div>}
              </div>
            ))}
          </div>
          <div className="org-foot">
            <div className="stat"><div className="v"><span className="accent">25</span> yr</div><div className="l">{t('studio.stat.01.label')}</div></div>
            <div className="stat"><div className="v">6</div><div className="l">{t('studio.stat.02.label')}</div></div>
            <div className="stat"><div className="v">30+</div><div className="l">{t('studio.stat.03.label')}</div></div>
            <div className="stat"><div className="v">100+</div><div className="l">{t('studio.stat.04.label')}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { StudioOrg });
