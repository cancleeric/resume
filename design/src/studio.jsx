// Studio background — HurricaneGroup org

function StudioOrg() {
  const subs = [
    { name: 'HurricaneSoft', tc: '颶風軟體', role: '本工作室 · 集團部署 / GCP 維運 / 接案出口', accent: true },
    { name: 'HurricaneEdge', tc: '颶鋒科技', role: '8 大對外 SaaS 產品線' },
    { name: 'HurricaneCore', tc: '颶核科技', role: 'LLM Gateway / 自訓模型 / 智腦平台' },
    { name: 'HurricanePrime', tc: '颶擎科技', role: '客製化企業系統（.NET WMS、SaaS）' },
    { name: 'HurricaneDigital', tc: '颶電娛樂', role: '行動遊戲 / iOS / 文創' },
    { name: 'HurricaneTech', tc: '颶風科技', role: 'LIDS / CMS / Squid 等共用技術平台' },
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
          title={<>不是一個人，<br/>是一整個集團當靠山。</>}
          sub="工作室是 HurricaneGroup 的對外接案窗口。集團 6 子公司、30+ 生產系統，就是這套 pipeline 的試驗場。"
        />

        <div className="org-wrap">
          <div className="org-parent">
            <span className="tc">HurricaneGroup</span>
            <span className="en">PARENT · 集團母公司</span>
          </div>
          <div className="org-line"></div>
          <div className="org-tree">
            {subs.map(s => (
              <div key={s.name} className={`org-child ${s.accent ? 'accent' : ''}`}>
                <div className="role">{s.role}</div>
                <div className="name">{s.name}</div>
                <div className="tc">{s.tc}</div>
              </div>
            ))}
          </div>
          <div className="org-foot">
            <div className="stat"><div className="v"><span className="accent">25</span> yr</div><div className="l">負責人軟體經驗</div></div>
            <div className="stat"><div className="v">6</div><div className="l">集團子公司</div></div>
            <div className="stat"><div className="v">30+</div><div className="l">生產系統</div></div>
            <div className="stat"><div className="v">100+</div><div className="l">企業客戶（歷年）</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { StudioOrg });
