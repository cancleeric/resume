// Hero section with pipeline visual + KPI band

function PipelineVisual() {
  // 6 nodes representing the pipeline: 規格 → 設計 → 實作 → 審查 → 部署 → 維運
  const nodes = [
    { label: 'SPEC',   tcKey: 'pipeline.node.01.tc' },
    { label: 'DESIGN', tcKey: 'pipeline.node.02.tc' },
    { label: 'BUILD',  tcKey: 'pipeline.node.03.tc' },
    { label: 'REVIEW', tcKey: 'pipeline.node.04.tc' },
    { label: 'DEPLOY', tcKey: 'pipeline.node.05.tc' },
    { label: 'OPS',    tcKey: 'pipeline.node.06.tc' },
  ];
  return (
    <div className="pipeline-visual">
      <style>{`
        .pipeline-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.05;
          max-width: 520px;
          margin-left: auto;
          padding: 28px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,107,53,0.06), transparent 60%),
            linear-gradient(180deg, rgba(14,16,21,0.9), rgba(8,9,12,0.5));
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          overflow: hidden;
        }
        .pipeline-visual::before {
          content: "";
          position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
          pointer-events: none;
        }
        .pipeline-header {
          position: relative;
          display: flex; justify-content: space-between; align-items: center;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--text-low);
          margin-bottom: 8px;
        }
        .pipeline-header .live-tag {
          display: inline-flex; align-items: center; gap: 6px;
          color: var(--live);
        }
        .pipeline-header .live-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--live);
          box-shadow: 0 0 8px var(--live);
          animation: pulse 1.6s ease-in-out infinite;
        }
        .pipeline-stage {
          position: relative;
          display: grid; grid-template-columns: 1fr;
          gap: 6px;
          margin-top: 18px;
        }
        .stage-row {
          position: relative;
          display: grid;
          grid-template-columns: 78px 1fr 60px;
          align-items: center;
          gap: 14px;
          padding: 14px 14px;
          background: rgba(20,23,30,0.6);
          border: 1px solid var(--border);
          border-radius: var(--r-sm);
          transition: all 0.3s;
        }
        .stage-row.active {
          background: rgba(255,107,53,0.06);
          border-color: var(--orange-line);
        }
        .stage-row .num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-low);
          letter-spacing: 0.06em;
        }
        .stage-row.active .num { color: var(--orange); }
        .stage-row .label {
          display: flex; align-items: baseline; gap: 8px;
        }
        .stage-row .label .tc {
          font-family: var(--font-tc);
          font-size: 15px;
          color: var(--text-hi);
          font-weight: 500;
        }
        .stage-row .label .en {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-low);
          letter-spacing: 0.1em;
        }
        .stage-row .stat {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-mid);
          text-align: right;
        }
        .stage-row.active .stat { color: var(--cyan); }
        .ai-tag {
          display: inline-flex;
          align-items: center;
          padding: 2px 6px;
          background: var(--cyan-soft);
          color: var(--cyan);
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.08em;
          border-radius: 2px;
          margin-left: 4px;
          border: 1px solid var(--cyan-line);
        }
        .flow-line {
          position: absolute;
          left: 42px;
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--orange), transparent);
          opacity: 0.7;
        }
        @keyframes flow {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .flow-particle {
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--orange);
          left: 39px;
          box-shadow: 0 0 12px var(--orange), 0 0 24px var(--orange);
          animation: flow 4s linear infinite;
        }
        .flow-particle.p2 { animation-delay: 1.3s; }
        .flow-particle.p3 { animation-delay: 2.6s; background: var(--cyan); box-shadow: 0 0 12px var(--cyan), 0 0 24px var(--cyan); }
      `}</style>
      <div className="pipeline-header">
        <span>LF_PIPELINE.STREAM</span>
        <span className="live-tag"><span className="live-dot"></span>LIVE</span>
      </div>
      <div className="pipeline-stage" id="pipeline-stages">
        <div className="flow-particle" style={{ top: 0 }}></div>
        <div className="flow-particle p2" style={{ top: 0 }}></div>
        <div className="flow-particle p3" style={{ top: 0 }}></div>
        {nodes.map((n, i) => (
          <ActiveStageRow key={n.label} idx={i} node={n} totalSteps={nodes.length} />
        ))}
      </div>
    </div>
  );
}

function ActiveStageRow({ idx, node, totalSteps }) {
  const [active, setActive] = useState(idx === 0);
  useEffect(() => {
    const t = setInterval(() => {
      setActive(a => {
        // rotate active state through nodes
        return a;
      });
    }, 800);
    return () => clearInterval(t);
  }, []);

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx(i => (i + 1) % totalSteps);
    }, 1500);
    return () => clearInterval(t);
  }, [totalSteps]);

  const stats = ['12.4ms', '0.8s', '2.1k LOC', '94%', '19 svc', '99.97%'];
  return (
    <div className={`stage-row ${activeIdx === idx ? 'active' : ''}`}>
      <span className="num">0{idx + 1} / 0{totalSteps}</span>
      <span className="label">
        <span className="tc">{t(node.tcKey)}</span>
        <span className="en">{node.label}</span>
        <span className="ai-tag">AI · ASSIST</span>
      </span>
      <span className="stat">{stats[idx]}</span>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          padding: 80px 0 120px;
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        .hero-status {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 6px 12px 6px 8px;
          border: 1px solid var(--border-strong);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-mid);
          background: rgba(14,16,21,0.7);
          margin-bottom: 28px;
        }
        .hero-status .dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--live);
          box-shadow: 0 0 8px var(--live);
          animation: pulse 1.8s ease-in-out infinite;
        }
        .hero-status .sep { color: var(--text-dim); }
        .hero-title {
          font-family: var(--font-tc);
          font-weight: 600;
          font-size: clamp(48px, 6.4vw, 88px);
          line-height: 1.0;
          letter-spacing: -0.04em;
          margin-bottom: 8px;
        }
        .hero-title .gradient {
          background: linear-gradient(180deg, #ffffff 0%, #B6B9C2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-title-en {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.2vw, 28px);
          letter-spacing: -0.02em;
          color: var(--text-low);
          line-height: 1.2;
          margin-top: 20px;
          margin-bottom: 28px;
          display: flex; align-items: center; gap: 14px;
        }
        .hero-title-en .accent { color: var(--orange); font-family: var(--font-mono); font-weight: 500; }
        .hero-title-en::before { content: ""; width: 32px; height: 1px; background: var(--border-strong); }
        .hero-sub {
          font-size: 18px;
          color: var(--text-mid);
          line-height: 1.55;
          max-width: 52ch;
          margin-bottom: 14px;
        }
        .hero-sub .stage {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--orange);
          letter-spacing: 0.06em;
          white-space: nowrap;
        }
        .hero-claim {
          font-family: var(--font-tc);
          font-size: 19px;
          color: var(--text-hi);
          line-height: 1.5;
          margin-bottom: 40px;
          padding-left: 16px;
          border-left: 2px solid var(--orange);
          max-width: 52ch;
        }
        .hero-claim b { color: var(--orange); font-weight: 600; }
        .hero-ctas { display: flex; gap: 12px; margin-bottom: 14px; flex-wrap: wrap; }
        .hero-cta-note {
          font-family: var(--font-tc);
          font-size: 13px;
          /* --text-mid 而非 --text-low：13px CTA 信任微文案，--text-low 亮版白底僅 ~3.3:1 未達 AA */
          color: var(--text-mid);
          margin-bottom: 56px;
        }

        .kpi-band {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          margin-top: 24px;
        }
        @media (max-width: 720px) {
          .kpi-band { grid-template-columns: repeat(2, 1fr); }
        }
        .kpi {
          padding: 28px 24px 28px 0;
          border-right: 1px solid var(--border-subtle);
        }
        .kpi:last-child { border-right: none; }
        .kpi .value {
          font-family: var(--font-mono);
          font-size: 44px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.04em;
          color: var(--text-hi);
        }
        .kpi .value .unit { color: var(--text-low); font-size: 18px; margin-left: 2px; }
        .kpi .value .plus { color: var(--orange); font-size: 32px; }
        .kpi .label {
          font-family: var(--font-tc);
          font-size: 13px;
          color: var(--text-mid);
          margin-top: 8px;
          display: flex; align-items: center; gap: 8px;
        }
        .kpi .label .en {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-dim);
          letter-spacing: 0.1em;
        }

        .availability-bar {
          margin-top: 32px;
          padding: 14px 18px;
          background: linear-gradient(90deg, rgba(46,224,160,0.06), rgba(46,224,160,0.0));
          border: 1px solid rgba(46,224,160,0.2);
          border-radius: var(--r-md);
          display: flex; align-items: center; gap: 14px;
          flex-wrap: wrap;
        }
        .availability-bar .live-pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--live);
        }
        .availability-bar .live-pill .dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--live);
          box-shadow: 0 0 8px var(--live);
          animation: pulse 1.8s ease-in-out infinite;
        }
        .availability-bar .msg {
          font-family: var(--font-tc);
          color: var(--text-hi);
          font-size: 14px;
          font-weight: 500;
        }
        .availability-bar .meta {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-low);
          letter-spacing: 0.04em;
        }
      `}</style>
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <div className="hero-status">
              <span className="dot"></span>
              <span>{t('hero.status')}</span>
              <span className="sep">·</span>
              <span>{t('hero.status.slot')}</span>
            </div>

            <h1 className="hero-title">
              <span className="gradient">{t('hero.h1_line1')}</span><br/>
              <span style={{ color: 'var(--orange)' }}>{t('hero.h1_line2')}</span>
            </h1>
            <div className="hero-title-en">
              <span>AUTOMATED</span>
              <span className="accent">SOFTWARE</span>
              <span>DELIVERY</span>
            </div>

            {window.LANG === 'en' ? (
              <p className="hero-sub">
                AI integration is just the baseline. The real difference is automating the <b style={{ color: 'var(--text-hi)' }}>entire development pipeline</b> —
                <span className="stage">SPEC</span> → <span className="stage">DESIGN</span> → <span className="stage">BUILD</span> → <span className="stage">REVIEW</span> → <span className="stage">DEPLOY</span> → <span className="stage">OPS</span>
                , with AI assistants and automation toolchains at every stage.
              </p>
            ) : (
              <p className="hero-sub">
                AI 整合只是基本盤。真正的差異，是把<b style={{ color: 'var(--text-hi)' }}>整套開發流程自動化</b>——
                <span className="stage">SPEC</span> → <span className="stage">DESIGN</span> → <span className="stage">BUILD</span> → <span className="stage">REVIEW</span> → <span className="stage">DEPLOY</span> → <span className="stage">OPS</span>
                ，每個環節都有 AI 副手 + 自動化工具鏈接管。
              </p>
            )}

            {window.LANG === 'en' ? (
              <p className="hero-claim">
                After a year of validation: <b>20× more output in the same time</b>—one person delivering what used to take an entire team. This delivery speed is ready for your project now.
              </p>
            ) : (
              <p className="hero-claim">
                一年驗證下來：<b>同樣的時間做 20× 以上的事</b>、一個人扛起以往需要整支團隊的產出。這套交付速度，現在就能接上您的專案。
              </p>
            )}

            <div className="hero-ctas">
              <a href="#cta" className="btn btn-primary">
                {t('hero.cta.primary')}
                <ArrowRight />
              </a>
              <a href="https://www.hurricanesoft.com.tw/pipeline" target="_blank" rel="noopener" className="btn btn-ghost">
                <span style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>↳</span>
                {t('hero.cta.pipeline')}
                <ArrowUpRight />
              </a>
            </div>
            <p className="hero-cta-note">{t('hero.cta.note')}</p>

            <div className="kpi-band">
              <div className="kpi">
                <div className="value"><CountUp to={30} />+</div>
                <div className="label">{t('hero.kpi.01.label')} <span className="en">PROD SYS</span></div>
              </div>
              <div className="kpi">
                <div className="value"><CountUp to={14} />+</div>
                <div className="label">{t('hero.kpi.02.label')} <span className="en">PRODUCTS</span></div>
              </div>
              <div className="kpi">
                <div className="value"><CountUp to={19} /></div>
                <div className="label">{t('hero.kpi.03.label')} <span className="en">CLOUD RUN</span></div>
              </div>
              <div className="kpi">
                <div className="value"><CountUp to={1} /></div>
                <div className="label">{t('hero.kpi.04.label')} <span className="en">YEAR PROVEN</span></div>
              </div>
            </div>

            <div className="availability-bar">
              <span className="live-pill"><span className="dot"></span>NEXT WINDOW</span>
              <span className="msg">{t('hero.avail.msg')}</span>
              <span className="meta">{t('hero.avail.meta')}</span>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            <PipelineVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, PipelineVisual });
