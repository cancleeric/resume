// Pricing — 3 cards, retainer highlighted (4xl)

function Pricing() {
  const tiers = [
    {
      key: 'project',
      label: 'PROJECT',
      tc: '專案制 Project-based',
      price: 'US$ 8,000',
      unit: '起 / 案',
      tagline: '明確 scope 的單次交付',
      desc: '固定價單次交付，里程碑分期付款。POC 2-4 週 / MVP 4-8 週 / 現代化 8-12 週，含 1 個月上線後保固。',
      includes: [
        '明確 scope 的固定價交付',
        '里程碑分期付款',
        '含 1 個月上線後保固',
        'POC / MVP / 現代化皆可',
      ],
      fitFor: 'POC 2-4 週、MVP 4-8 週、現代化 8-12 週',
      cta: '討論 scope',
      tone: 'default',
    },
    {
      key: 'retainer',
      label: 'RETAINER · FLAGSHIP',
      tc: '月費 Retainer',
      price: 'US$ 10,000',
      unit: '/ 月',
      tagline: '負責人 + AI 副手團隊全力投入',
      desc: '承擔架構決策 + 親自下海 code，每週進度同步、月末交付報告。同時段最多 2 案。',
      includes: [
        '負責人 + AI 副手團隊全力投入',
        '承擔架構決策 + 親自下海 code',
        '每週進度同步 / 月末交付報告',
        '適合 3 個月以上中長案',
      ],
      fitFor: '3 個月以上中長案、想把這套帶進內部團隊的客戶',
      cta: '預約 kick-off',
      tone: 'highlight',
    },
    {
      key: 'advisory',
      label: 'ADVISORY',
      tc: '顧問諮詢 Advisory',
      price: 'US$ 250',
      unit: '/ 小時',
      tagline: '架構審查 / 技術選型 / Code Review',
      desc: '不下海寫 code，純諮詢。最少 4 小時起接，適合短期重大決策。',
      includes: [
        '架構審查 / 技術選型 / Code Review',
        '不下海寫 code，純諮詢',
        '最少 4 小時起接',
        '適合短期重大決策',
      ],
      fitFor: '最少 4 小時起接、短期重大決策',
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
          sub="合作流程：免費 30 分諮詢 → 報價簽約（30% 訂金）→ 開發 → 里程碑驗收 → 上線（含 1 個月保固）。付款：可開立統編發票（80289779）、支援電匯 / Wise / 加密貨幣 USDC。"
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
              <a href="#cta" className={`btn ${t.tone === 'highlight' ? 'btn-primary' : 'btn-ghost'} price-cta`}>
                {t.cta} <ArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
