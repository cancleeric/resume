// Services — grid with 8 items (2 hero cards span 3 cols, then 6 small span 2)

function Services() {
  const services = [
    {
      key: 'pipeline',
      num: '01',
      tc: '開發流程自動化（主力）',
      en: 'AUTOMATED DELIVERY',
      desc: '把規格 → 設計 → 實作 → 審查 → 部署 → 維運整條流程自動化：AI 副手分工 + Agent 框架 + 工單狀態機 + 自建 CI/CD + 量化評審門檻。',
      bullets: ['規格 → 設計 → 實作', '審查 → 部署 → 維運', '1 人扛 30+ 系統維運'],
      featured: true,
      tag: 'FLAGSHIP',
    },
    {
      key: 'ai-platform',
      num: '02',
      tc: 'AI / LLM 平台整合',
      en: 'AI / LLM PLATFORM',
      desc: '自建 LLM Gateway / 計費中心 / Provider routing / 自訓模型上線 / RAG / 多 Agent 協作框架。已在 Brain + Modelhub + Anemone 跨產品線跑生產。',
      bullets: ['LLM Gateway + 計費', 'Provider routing + RAG', '多 Agent 協作'],
      featured: true,
      tag: 'CORE',
    },
    {
      key: 'saas',
      num: '03',
      tc: '多租戶 SaaS 從 0 到上線',
      en: 'MULTI-TENANT SAAS',
      desc: '多租戶資料隔離、計費、Admin 後台、SDK／API 共用層。已在 9+ 系統接入（Hurricane Pay / Squid 生態）。',
    },
    {
      key: 'identity',
      num: '04',
      tc: '身份 / 安全基礎建設',
      en: 'IDENTITY · SECURITY',
      desc: 'OAuth2 / OIDC Identity Provider 自建、SSO 跨系統串接、MFA、密鑰管理（Hurricane Vault 90+ secrets 治理）。',
    },
    {
      key: 'payments',
      num: '05',
      tc: '金流 / 訂閱整合',
      en: 'PAYMENTS · BILLING',
      desc: 'PayPal / 跨境金流串接、Webhook 設計、訂閱與發票、多租戶帳務隔離。已上 Hurricane Pay v0.13.0 LIVE。',
    },
    {
      key: 'cloud-run',
      num: '06',
      tc: 'GCP Cloud Run 部署架構',
      en: 'GCP CLOUD RUN',
      desc: '容器化、Cloud Build pipeline、Artifact Registry、Secret Manager 整合、19 個生產服務維運經驗。',
    },
    {
      key: 'modernization',
      num: '07',
      tc: '既有系統現代化',
      en: 'MODERNIZATION',
      desc: '.NET Framework → .NET 8 + Blazor、單體 → 微服務、PHP / Legacy → FastAPI / Next.js、技術債盤點與漸進式重構。實證：信保基金核心系統 1.5 年現代化、STA 5,000+ 學員平台。',
    },
    {
      key: 'gov-grant',
      num: '08',
      tc: '政府 AI 補助計畫輔導',
      en: 'GOV AI GRANTS',
      desc: '2026 政府釋出逾百億元 AI 補助。協助企業評估 SBIR / AI 躍昇 / 數位轉型 / 智慧製造方案資格，從計畫書撰寫、審查到 AI 系統開發落地全程協助。',
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
          title={<>八項服務，<br/>整條 pipeline 都有人接管。</>}
          sub="主力是「開發流程自動化」，其餘是延伸 — 每一類都已在自家集團跑過生產驗證。"
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
