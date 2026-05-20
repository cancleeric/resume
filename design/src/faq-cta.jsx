// FAQ + CTA

function FAQ() {
  const items = [
    { q: '一個人真的能扛 30+ 系統嗎？', a: '能。關鍵不是「人多」，而是「整條 pipeline 都自動化」。spec、code、review、deploy、ops 每個環節都有 AI 副手 + 自動化工具鏈，人只做決策與品質把關。實際數據：集團 6 子公司、19 個 Cloud Run 服務、99.97% SLO，一人主責一年驗證下來的結果。' },
    { q: 'AI 寫的 code 品質如何控管？', a: '每段 code 經過 Spec → Code → Review 三道：先有可執行 spec、再生成實作、最後 Review Co-pilot 加人工把關。集成 evals、guardrails、staging 自動測試。實際通過率 94%，遠高於業界 60-70%。' },
    { q: '如果中途想暫停 retainer？', a: 'Retainer 採月費制、30 天 notice 制。隨時暫停、隨時重啟，沒有違約金。我們不靠綁約做生意，靠長期信任。' },
    { q: '能否帶進客戶的內部團隊？', a: '可。Retainer 內含「AI 工程化內訓」，會把這套 pipeline 文件化、SOP 化，留下能讓您團隊自己跑的系統。我們的目標是讓您離得開我們，不是離不開。' },
    { q: '為什麼比 agency 便宜這麼多？', a: 'agency 的報價有 40-60% 是 PM、業務、行政、辦公室、利潤分配。我們是一個負責人 + AI 副手團隊，沒有中間人、沒有層層轉包。買的是產出，不是組織。' },
    { q: '會接 short-term hack 嗎？', a: '原則上不接。我們做「能上線、能維運、能交接」的系統。如果只要 2 週做個 prototype demo、不需要維護，建議找個人 freelancer 會比較划算。' },
    { q: '資料安全 / NDA？', a: '標準 NDA、SOC2 預備、私有部署選項。集團自有 Identity Edge SSO 系統，所有產出可在客戶 GCP project 直接 deploy、code 在客戶 repo。' },
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
