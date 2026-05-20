// Pricing — 3 cards, retainer highlighted (4xl)

function Pricing() {
  const tiers = [
    {
      key: 'project',
      label: 'PROJECT',
      tc: '專案制',
      price: 'US$ 25k+',
      unit: '/ 案',
      tagline: '單一交付物、明確 scope',
      desc: '從 spec 到上線，固定範圍、固定報價。3-12 週交付，含 30 天 hyper-care 維運。',
      includes: [
        '完整 spec + 設計文件',
        '生產級實作（含 CI/CD）',
        '上線後 30 天緊急支援',
        '一份完整 handoff',
      ],
      fitFor: '範圍清楚、要在固定時點上線的單一系統',
      cta: '討論 scope',
      tone: 'default',
    },
    {
      key: 'retainer',
      label: 'RETAINER · FLAGSHIP',
      tc: '月費 Retainer',
      price: 'US$ 10,000',
      unit: '/ 月',
      tagline: '長期駐點、整條 pipeline 接管',
      desc: '同時段最多 2 案。負責人 + AI 副手團隊持續產出，等於一支 4-6 人 in-house 團隊的速度。',
      includes: [
        '整條 pipeline AI 自動化',
        '每週 demo + 進度看板',
        '隨時加入 / 暫停（30 天 notice）',
        '優先檔期、優先回應',
        '架構決策直接拍板',
      ],
      fitFor: '中長期持續開發、想把這套帶進內部團隊的客戶',
      cta: '預約 kick-off',
      tone: 'highlight',
    },
    {
      key: 'advisory',
      label: 'ADVISORY',
      tc: '顧問制',
      price: 'US$ 1,500',
      unit: '/ 小時',
      tagline: '架構評審、技術盡調、董事會簡報',
      desc: '不寫 code、只做決策支援。從技術 due diligence 到 AI 落地策略，按需呼叫。',
      includes: [
        '技術架構 review',
        'AI 落地策略 workshop',
        '招募／團隊評鑑',
        '董事會技術簡報',
      ],
      fitFor: '已有團隊、需要外部 senior 視角的公司',
      cta: '安排一場',
      tone: 'default',
    },
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <style>{`
        .pricing-section { padding-top: 140px; }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: stretch;
        }
        @media (max-width: 980px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
        .price-card {
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 28px 28px 28px;
          display: flex; flex-direction: column;
          position: relative;
          transition: border-color 0.2s, transform 0.2s;
        }
        .price-card.highlight {
          background:
            linear-gradient(180deg, rgba(255,107,53,0.08), rgba(255,107,53,0.0) 60%),
            var(--surface-1);
          border-color: var(--orange-line);
          padding-top: 36px;
          padding-bottom: 36px;
          box-shadow: 0 30px 80px -30px rgba(255,107,53,0.25);
        }
        .price-card.highlight::before {
          content: "RECOMMENDED · 主推";
          position: absolute; top: -10px; left: 24px;
          padding: 4px 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          background: var(--orange);
          color: #110800;
          border-radius: 2px;
          font-weight: 600;
        }
        .price-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--text-low);
          margin-bottom: 16px;
        }
        .price-card.highlight .price-label { color: var(--orange); }
        .price-tc {
          font-family: var(--font-tc);
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.015em;
          margin-bottom: 4px;
        }
        .price-tagline {
          font-family: var(--font-tc);
          font-size: 14px;
          color: var(--text-mid);
          margin-bottom: 24px;
        }
        .price-amount {
          font-family: var(--font-mono);
          font-weight: 500;
          color: var(--text-hi);
          letter-spacing: -0.04em;
          display: flex; align-items: baseline; gap: 6px;
          margin-bottom: 6px;
          line-height: 1;
        }
        .price-amount .num { font-size: 48px; }
        .price-card.highlight .price-amount .num {
          font-size: 80px;
          background: linear-gradient(180deg, #fff, #FF9E7E);
          -webkit-background-clip: text; background-clip: text;
          color: transparent;
        }
        .price-amount .unit { font-size: 18px; color: var(--text-low); font-family: var(--font-mono); }
        .price-card.highlight .price-amount .unit { font-size: 22px; color: var(--text-mid); }
        .price-tooltip {
          position: relative;
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--text-low);
          margin-bottom: 24px;
          padding: 6px 10px;
          background: var(--surface-2);
          border: 1px dashed var(--border-strong);
          border-radius: 4px;
          cursor: help;
          align-self: flex-start;
        }
        .price-tooltip .q { color: var(--cyan); font-weight: 600; }
        .price-tooltip:hover .tip { opacity: 1; pointer-events: auto; }
        .price-tooltip .tip {
          position: absolute; bottom: calc(100% + 8px); left: 0;
          width: 240px;
          padding: 10px 12px;
          background: var(--surface-3);
          border: 1px solid var(--border-strong);
          border-radius: 4px;
          font-family: var(--font-tc);
          font-size: 12px;
          color: var(--text-mid);
          opacity: 0; pointer-events: none;
          transition: opacity 0.15s;
          z-index: 5;
          line-height: 1.5;
        }
        .price-desc {
          font-family: var(--font-tc);
          font-size: 14px;
          color: var(--text-mid);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .price-divider {
          height: 1px; background: var(--border-subtle);
          margin: 0 0 20px;
        }
        .price-includes {
          list-style: none;
          display: grid; gap: 10px;
          margin-bottom: 24px;
        }
        .price-includes li {
          font-family: var(--font-tc);
          font-size: 13.5px;
          color: var(--text-mid);
          display: flex; align-items: flex-start; gap: 10px;
        }
        .price-includes li svg { color: var(--live); margin-top: 4px; flex-shrink: 0; }
        .price-card.highlight .price-includes li { color: var(--text-hi); }
        .price-fit {
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 12px 14px;
          margin-top: auto;
          margin-bottom: 16px;
        }
        .price-fit .fit-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--text-low);
          margin-bottom: 4px;
        }
        .price-fit .fit-text {
          font-family: var(--font-tc);
          font-size: 13px;
          color: var(--text-hi);
          line-height: 1.5;
        }
        .price-cta {
          width: 100%;
          justify-content: center;
        }
      `}</style>
      <div className="container">
        <SectionHead
          label="05 / PRICING & ENGAGEMENT"
          title={<>三種接案模式。<br/>挑一個合適的。</>}
          sub="一律不收 setup fee、不算 PM／業務時數。買的是產出，不是中間人。"
        />

        <div className="pricing-grid">
          {tiers.map(t => (
            <div key={t.key} className={`price-card ${t.tone === 'highlight' ? 'highlight' : ''}`}>
              <div className="price-label">{t.label}</div>
              <h3 className="price-tc">{t.tc}</h3>
              <p className="price-tagline">{t.tagline}</p>
              <div className="price-amount">
                <span className="num">{t.price}</span>
                <span className="unit">{t.unit}</span>
              </div>
              <div className="price-tooltip">
                <span className="q">?</span>
                <span>何時適合</span>
                <div className="tip">{t.fitFor}</div>
              </div>
              <p className="price-desc">{t.desc}</p>
              <div className="price-divider"></div>
              <ul className="price-includes">
                {t.includes.map(it => (
                  <li key={it}><Check size={14}/>{it}</li>
                ))}
              </ul>
              <div className="price-fit">
                <div className="fit-label">何時適合 · GOOD FIT</div>
                <div className="fit-text">{t.fitFor}</div>
              </div>
              <button className={`btn ${t.tone === 'highlight' ? 'btn-primary' : 'btn-ghost'} price-cta`}>
                {t.cta} <ArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
