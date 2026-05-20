// Services — 3x3 grid with 7 items (2 hero cards span 2 cols, then 5 small)

function Services() {
  const services = [
    {
      key: 'pipeline',
      num: '01',
      tc: '端到端開發 Pipeline',
      en: 'END-TO-END PIPELINE',
      desc: '從 PRD、設計、實作、code review、CI/CD 到 OPS 監控，全套 AI 工具鏈接管。',
      bullets: ['Spec ↔ Design ↔ Build', 'Review × Deploy × Ops', '單一負責人 + AI 副手'],
      featured: true,
      tag: 'FLAGSHIP',
    },
    {
      key: 'ai-product',
      num: '02',
      tc: 'AI 產品線開發',
      en: 'AI PRODUCT BUILD',
      desc: 'Agent 協作分工、LLM 整合、私有部署、多模型路由。14+ 產品線實戰驗證。',
      bullets: ['LLM 整合 + 私有部署', 'Multi-agent 編排', 'Eval × Guardrails'],
      featured: true,
      tag: 'CORE',
    },
    {
      key: 'saas',
      num: '03',
      tc: 'SaaS 上線',
      en: 'SAAS SHIPPING',
      desc: '帳號、billing、tenancy、admin、metering 一條龍。',
    },
    {
      key: 'devops',
      num: '04',
      tc: 'Cloud Run / DevOps',
      en: 'INFRA · DEPLOY',
      desc: '19 Cloud Run 服務在跑、零停機部署、cost-aware 架構。',
    },
    {
      key: 'fix',
      num: '05',
      tc: '專案搶救',
      en: 'RESCUE OPS',
      desc: '接手卡關專案、做技術盡調、debug、收尾上線。',
    },
    {
      key: 'advisory',
      num: '06',
      tc: '技術顧問',
      en: 'ADVISORY',
      desc: '架構評審、AI 策略、招募評鑑、董事會技術簡報。',
    },
    {
      key: 'enablement',
      num: '07',
      tc: 'AI 工程化內訓',
      en: 'ENABLEMENT',
      desc: '把這套 pipeline 教給您的團隊，知識轉移、SOP 文件、留下能跑的系統。',
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
          margin-bottom: auto;
        }
        .service-num {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-low);
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
          title={<>七項服務，<br/>整條 pipeline 都有人接管。</>}
          sub="高優先項目放最大。從 spec 到 ops，每個環節都能單獨買、也可以整包綁定。"
        />

        <div className="services-grid">
          {services.map(s => (
            <div key={s.key} className={`service-card ${s.featured ? 'featured' : ''}`}>
              <div className="service-header">
                <span className="service-num">{s.num} / 07</span>
                {s.tag && <span className="service-tag">{s.tag}</span>}
              </div>
              <div className="service-body">
                <div className="service-en">{s.en}</div>
                <h3 className="service-tc">{s.tc}</h3>
                <p className="service-desc">{s.desc}</p>
                {s.bullets && (
                  <ul className="service-bullets">
                    {s.bullets.map(b => <li key={b}>{b}</li>)}
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
