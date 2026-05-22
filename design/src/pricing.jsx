// Pricing — 3 cards, retainer highlighted (4xl)

function Pricing() {
  const tiers = [
    {
      key: 'healthcheck',
      label: 'HEALTH CHECK',
      tcKey: 'pricing.tier.04.tc',
      price: 'US$ 1,500',
      unitKey: 'pricing.tier.04.unit',
      taglineKey: 'pricing.tier.04.tagline',
      descKey: 'pricing.tier.04.desc',
      includeKeys: [
        'pricing.tier.04.inc.01',
        'pricing.tier.04.inc.02',
        'pricing.tier.04.inc.03',
        'pricing.tier.04.inc.04',
      ],
      fitForKey: 'pricing.tier.04.fit',
      ctaKey: 'pricing.tier.04.cta',
      tone: 'entry',
      // 低風險入口 CTA 直接帶意圖進 mailto（主旨/正文預填健檢），不丟到通用 #cta 諮詢
      href: 'mailto:cancleeric@gmail.com?subject=%5B%E9%A0%90%E7%B4%84%E5%81%A5%E6%AA%A2%5D%20HurricaneSoft%20%C2%B7%202%20%E9%80%B1%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%81%A5%E6%AA%A2&body=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%83%B3%E9%A0%90%E7%B4%84%E3%80%8C2%20%E9%80%B1%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%81%A5%E6%AA%A2%E3%80%8D%EF%BC%88US%24%201%2C500%E2%80%932%2C000%EF%BC%89%EF%BC%9A%0A%0A%E3%80%90%E7%9B%AE%E5%89%8D%E6%9E%B6%E6%A7%8B%20/%20%E6%8A%80%E8%A1%93%E6%A3%A7%E7%B0%A1%E8%BF%B0%E3%80%91%EF%BC%9A%0A%E3%80%90%E6%9C%80%E6%83%B3%E5%85%88%E8%A7%A3%E6%B1%BA%E7%9A%84%E6%8A%80%E8%A1%93%E5%82%B5%20/%20%E7%97%9B%E9%BB%9E%E3%80%91%EF%BC%9A%0A%E3%80%90%E6%96%B9%E4%BE%BF%E8%81%AF%E7%B5%A1%E6%99%82%E6%AE%B5%E3%80%91%EF%BC%9A%0A',
    },
    {
      key: 'project',
      label: 'PROJECT',
      tcKey: 'pricing.tier.01.tc',
      price: 'US$ 8,000',
      unitKey: 'pricing.tier.01.unit',
      taglineKey: 'pricing.tier.01.tagline',
      descKey: 'pricing.tier.01.desc',
      includeKeys: [
        'pricing.tier.01.inc.01',
        'pricing.tier.01.inc.02',
        'pricing.tier.01.inc.03',
        'pricing.tier.01.inc.04',
      ],
      fitForKey: 'pricing.tier.01.fit',
      ctaKey: 'pricing.tier.01.cta',
      tone: 'default',
    },
    {
      key: 'retainer',
      label: 'RETAINER · FLAGSHIP',
      tcKey: 'pricing.tier.02.tc',
      price: 'US$ 10,000',
      unitKey: 'pricing.tier.02.unit',
      taglineKey: 'pricing.tier.02.tagline',
      descKey: 'pricing.tier.02.desc',
      includeKeys: [
        'pricing.tier.02.inc.01',
        'pricing.tier.02.inc.02',
        'pricing.tier.02.inc.03',
        'pricing.tier.02.inc.04',
      ],
      fitForKey: 'pricing.tier.02.fit',
      ctaKey: 'pricing.tier.02.cta',
      tone: 'highlight',
      // 旗艦方案 CTA 帶意圖直連 mailto（主旨/正文預填月費 Retainer），對齊標準版 v7.80
      href: 'mailto:cancleeric@gmail.com?subject=%E3%80%90%E9%A0%90%E7%B4%84%E6%9C%88%E8%B2%BB%20Retainer%E3%80%91HurricaneSoft%20%E5%B7%A5%E4%BD%9C%E5%AE%A4&body=%E6%82%A8%E5%A5%BD%EF%BC%8C%0A%0A%E6%88%91%E5%BE%9E%20HurricaneSoft%20%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%9A%84%E7%B6%B2%E9%A0%81%E6%83%B3%E9%A0%90%E7%B4%84%E3%80%8C%E6%9C%88%E8%B2%BB%20Retainer%E3%80%8D%E6%96%B9%E6%A1%88%EF%BC%88US%24%2010%2C000%20/%20%E6%9C%88%EF%BC%89%EF%BC%9A%0A%0A%E3%80%90%E7%9B%AE%E5%89%8D%E5%9C%98%E9%9A%8A%20/%20%E5%B0%88%E6%A1%88%E7%B0%A1%E8%BF%B0%E3%80%91%EF%BC%9A%0A%0A%E3%80%90%E6%9C%80%E6%83%B3%E4%BA%A4%E7%B5%A6%E8%87%AA%E5%8B%95%E5%8C%96%E7%9A%84%E7%92%B0%E7%AF%80%E3%80%91%EF%BC%9A%0A%0A%E3%80%90%E9%A0%90%E8%A8%88%E5%90%88%E4%BD%9C%E8%B5%B7%E5%A7%8B%E6%99%82%E9%96%93%E3%80%91%EF%BC%9A%0A%0A%E3%80%90%E6%96%B9%E4%BE%BF%E8%81%AF%E7%B5%A1%E6%99%82%E6%AE%B5%E3%80%91%EF%BC%9A%0A%0A%E8%AC%9D%E8%AC%9D%EF%BC%81%0A',
    },
    {
      key: 'advisory',
      label: 'ADVISORY',
      tcKey: 'pricing.tier.03.tc',
      price: 'US$ 250',
      unitKey: 'pricing.tier.03.unit',
      taglineKey: 'pricing.tier.03.tagline',
      descKey: 'pricing.tier.03.desc',
      includeKeys: [
        'pricing.tier.03.inc.01',
        'pricing.tier.03.inc.02',
        'pricing.tier.03.inc.03',
        'pricing.tier.03.inc.04',
      ],
      fitForKey: 'pricing.tier.03.fit',
      ctaKey: 'pricing.tier.03.cta',
      tone: 'default',
    },
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <style>{`
        .pricing-section { padding-top: 140px; }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
        }
        @media (max-width: 1100px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
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
        .price-recommended-badge {
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
        .price-card.entry { border-color: rgba(22,163,74,0.4); }
        .price-entry-badge {
          position: absolute; top: -10px; left: 24px;
          padding: 4px 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          background: #0d7a3a;
          color: #fff;
          border-radius: 2px;
          font-weight: 600;
        }
        .price-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          /* --text-mid 而非 --text-low：11px 方案標籤，--text-low 深版對比僅 ~3.6:1 未達 AA */
          color: var(--text-mid);
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
          /* --text-mid 而非 --text-low：10px 定價卡「何時適合」標籤，--text-low 亮版白底僅 ~3.3:1 未達 AA */
          color: var(--text-mid);
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
          title={<span dangerouslySetInnerHTML={{ __html: t('pricing.section.title') }} />}
          sub={t('pricing.section.sub')}
        />

        <div className="pricing-grid">
          {tiers.map(tier => (
            <div key={tier.key} className={`price-card ${tier.tone === 'highlight' ? 'highlight' : ''} ${tier.tone === 'entry' ? 'entry' : ''}`}>
              {tier.tone === 'highlight' && (
                <span className="price-recommended-badge">{t('pricing.recommended')}</span>
              )}
              {tier.tone === 'entry' && (
                <span className="price-entry-badge">{t('pricing.entry')}</span>
              )}
              <div className="price-label">{tier.label}</div>
              <h3 className="price-tc">{t(tier.tcKey)}</h3>
              <p className="price-tagline">{t(tier.taglineKey)}</p>
              <div className="price-amount">
                <span className="num">{tier.price}</span>
                <span className="unit">{t(tier.unitKey)}</span>
              </div>
              <p className="price-desc">{t(tier.descKey)}</p>
              <div className="price-divider"></div>
              <ul className="price-includes">
                {tier.includeKeys.map(ik => (
                  <li key={ik}><Check size={14}/>{t(ik)}</li>
                ))}
              </ul>
              <div className="price-fit">
                <div className="fit-label">{t('pricing.goodfit')}</div>
                <div className="fit-text">{t(tier.fitForKey)}</div>
              </div>
              <a href={tier.href || '#cta'} className={`btn ${tier.tone === 'highlight' ? 'btn-primary' : 'btn-ghost'} price-cta`}>
                {t(tier.ctaKey)} <ArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
