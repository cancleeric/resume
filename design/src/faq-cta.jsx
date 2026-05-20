// FAQ + CTA

function FAQ() {
  const items = [
    { q: '檔期多久能排到？', a: '顧問諮詢類隨到隨接（4 小時起）。月費 Retainer 同時段最多 2 案，下個檔期 2026/07 起（約 6 週後）。專案制依範圍 1-2 週內可 kick-off。' },
    { q: '會簽 NDA / 開發票嗎？', a: '會。可開立公司行號統編發票（80289779），標準 NDA 模板可立即簽署，客製 NDA 24 小時內回覆。付款支援電匯／Wise／加密貨幣（USDC）。' },
    { q: '為何 US$ 10K/月不是按 hourly？', a: '月費模式讓負責人 + AI 副手團隊全力投入，不必為了計時打折注意力。同等價位 hourly 大約 US$ 80/h × 125h，但月費模式我們會超工，因為自家工具加成讓單位時間產出更高。' },
    { q: '跟你合作會用到哪些 AI 工具？', a: '內部 SOP：Claude Code（主力）+ 自建 Agent 框架（Brain）+ AI 副手角色庫（claude-agents）。所有 LLM 調用走自家 Anemone gateway，client code／data 全程不出您的環境（除非授權）。' },
    { q: '能不能只請你做某個 module，不要整套？', a: '可以，這就是「顧問諮詢」或「專案制」模式。常見 scope：1 週做完 OAuth/SSO 整合、2 週做完 PayPal 金流串接、3 週做完 Cloud Run 部署架構盤點與導入。' },
    { q: '合作結束後 code 歸屬？', a: '專案制 / 月費結束後，code、文件、CI/CD 設定、密鑰管理規範全交付給您。自家通用工具（Brain framework 等）可授權使用，不另收授權費。' },
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
              title={<>常見問題。</>}
              sub="如果這裡沒有答案，預約 30 分鐘諮詢直接問。第一次免費。"
            />
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <div key={it.q} className={`faq-item ${open === i ? 'open' : ''}`}>
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
          background: rgba(8,9,12,0.5);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          display: flex; align-items: center; gap: 12px;
        }
        .cta-meta-row .icon {
          width: 32px; height: 32px;
          display: grid; place-items: center;
          background: var(--surface-2);
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
              <div className="cta-eyebrow">11 / BOOK A CONSULT · 預約諮詢</div>
              <h2 className="cta-title">
                第一次<span className="accent"> 30 分鐘 </span>免費。<br/>
                帶您看一次<br/>
                完整 pipeline 跑現場。
              </h2>
              <p className="cta-sub">
                不推銷、不畫餅。先看我們怎麼做、再決定要不要合作。
                適合對象：CTO、VP Eng、創辦人、PM head。
              </p>
              <div className="cta-ctas">
                <button className="btn btn-primary">
                  預約諮詢 · 30 min free
                  <ArrowRight />
                </button>
                <button className="btn btn-ghost">
                  寄信先聊聊
                  <Mail />
                </button>
              </div>
            </div>
            <div className="cta-meta">
              <div className="cta-meta-row">
                <span className="icon"><Phone size={14}/></span>
                <div>
                  <div className="k">PHONE</div>
                  <div className="v">+886 921-107-206</div>
                </div>
              </div>
              <div className="cta-meta-row">
                <span className="icon"><Mail size={14}/></span>
                <div>
                  <div className="k">EMAIL</div>
                  <div className="v">cancleeric@gmail.com</div>
                </div>
              </div>
              <div className="cta-meta-row">
                <span className="icon"><ArrowUpRight /></span>
                <div>
                  <div className="k">LIVE PIPELINE</div>
                  <div className="v">hurricanesoft.com.tw/pipeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ, CTA });
