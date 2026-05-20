// Why This Studio — comparison table
// Desktop: 4-column grid (labels + 3 comparison cols)
// Mobile : 3 stacked cards, each containing header + 6 labeled rows

function WhyStudio() {
  const cols = [
    { key: 'freelancer', label: 'vs Freelancer', title: '個人接案', tone: 'neutral' },
    { key: 'agency',     label: 'vs Agency',     title: '外包公司', tone: 'neutral' },
    { key: 'studio',     label: '本工作室',      title: '颶風軟體', tone: 'highlight' },
  ];

  const rows = [
    { label: '責任歸屬', en: 'OWNERSHIP', values: {
      freelancer: { text: '個人扛，遇資安／合約／DB／部署痛點時容易斷線', tone: 'bad' },
      agency:     { text: '層層轉包，責任在 PM 與多人手中', tone: 'mid' },
      studio:     { text: '一個負責人直扛 + AI 副手團隊，從 spec 到維運不中斷', tone: 'good' },
    }},
    { label: '成本結構', en: 'COST', values: {
      freelancer: { text: '時薪低、但常需自行補軟硬體', tone: 'mid' },
      agency:     { text: '報價高、層層加成，PM／業務佔大頭', tone: 'bad' },
      studio:     { text: 'US$10k/月 fixed，直接買產出、不買中間人', tone: 'good' },
    }},
    { label: '上工速度', en: 'TIME-TO-PROD', values: {
      freelancer: { text: '快，但 stack 與部署常需重做', tone: 'mid' },
      agency:     { text: '慢，3-6 週前置作業、kick-off 排期', tone: 'bad' },
      studio:     { text: '專案制 1-2 週啟動、retainer 隨時加入', tone: 'good' },
    }},
    { label: '覆蓋面', en: 'COVERAGE', values: {
      freelancer: { text: '單點工程：前端 or 後端 or 設計', tone: 'mid' },
      agency:     { text: '全鏈、但層層介面、整合斷點多', tone: 'mid' },
      studio:     { text: '整條 pipeline：spec / design / build / review / deploy / ops', tone: 'good' },
    }},
    { label: '決策速度', en: 'DECISION', values: {
      freelancer: { text: '快，但風險評估常缺位', tone: 'mid' },
      agency:     { text: '會議多、簽核流程冗長', tone: 'bad' },
      studio:     { text: '即時：負責人就是決策者，AI 跑風險預演', tone: 'good' },
    }},
    { label: '驗證程度', en: 'PROOF', values: {
      freelancer: { text: '個案 portfolio，多為 demo', tone: 'mid' },
      agency:     { text: 'logo wall，實際參與深度不一', tone: 'mid' },
      studio:     { text: '自家集團 6 子公司、30+ 生產系統、1 年實戰跑出 20×', tone: 'good' },
    }},
  ];

  return (
    <section id="why" className="section why-section">
      <style>{`
        .why-section { padding-top: 140px; }

        /* Desktop grid: 4-col with sub-grid per column */
        .why-table {
          display: grid;
          grid-template-columns: 200px repeat(3, 1fr);
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          overflow: hidden;
        }
        .why-col {
          display: grid;
          grid-template-rows: subgrid;
          grid-row: span 7;
          border-right: 1px solid var(--border-subtle);
        }
        .why-col:last-child { border-right: none; }
        .why-col.labels { background: var(--bg-2); }

        .why-cell {
          padding: 22px 24px;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--surface-1);
        }
        .why-col.labels .why-cell { background: var(--bg-2); }
        .why-col.highlight .why-cell { background: rgba(255,107,53,0.025); }
        .why-cell:last-child { border-bottom: none; }
        .why-cell .row-label-inline { display: none; }

        /* Header cell */
        .why-head {
          padding: 24px;
          background: var(--bg-2);
          border-bottom: 1px solid var(--border);
        }
        .why-col.highlight .why-head {
          background: linear-gradient(180deg, rgba(255,107,53,0.10), rgba(255,107,53,0.03));
          border-top: 1px solid var(--orange);
          margin-top: -1px;
        }
        .why-head .badge-pill {
          display: inline-flex; align-items: center;
          padding: 4px 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--text-low);
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 100px;
          margin-bottom: 12px;
        }
        .why-col.highlight .why-head .badge-pill {
          color: var(--orange);
          background: var(--orange-soft);
          border-color: var(--orange-line);
        }
        .why-head h4 {
          font-family: var(--font-tc);
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .why-head .meta-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--text-low);
        }
        .why-head .meta-sub {
          margin-top: 10px;
          color: var(--text-mid);
          font-size: 14px;
        }

        /* Row label cell (in labels column on desktop) */
        .row-label-cell {
          font-family: var(--font-tc);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-hi);
        }
        .row-label-cell .en {
          display: block;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--text-low);
          margin-top: 4px;
        }

        .why-text {
          font-family: var(--font-tc);
          font-size: 14px;
          color: var(--text-mid);
          line-height: 1.55;
        }
        .why-col.highlight .why-text { color: var(--text-hi); }
        .tone-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 18px; height: 18px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .tone-icon.good { background: rgba(46,224,160,0.12); color: var(--live); }
        .tone-icon.mid  { background: var(--surface-2); color: var(--text-low); }
        .tone-icon.bad  { background: rgba(255,107,53,0.08); color: #FF9E7E; }

        /* ── Mobile: 3 stacked cards ── */
        @media (max-width: 640px) {
          .why-table {
            display: flex !important;
            flex-direction: column;
            gap: 16px;
            background: transparent !important;
            border: none !important;
            border-radius: 0 !important;
            overflow: visible !important;
          }
          .why-col {
            display: flex !important;
            flex-direction: column;
            grid-row: auto;
            border: 1px solid var(--border) !important;
            border-radius: 6px;
            background: var(--surface-1);
            overflow: hidden;
          }
          .why-col.labels { display: none !important; }
          .why-col.highlight {
            border-color: var(--orange-line) !important;
            border-top: 1px solid var(--orange) !important;
            background:
              linear-gradient(180deg, rgba(255,107,53,0.06), rgba(255,107,53,0.0)) !important;
          }
          .why-head { padding: 18px 18px 14px !important; }
          .why-head h4 { font-size: 18px !important; }
          .why-cell {
            padding: 14px 18px !important;
            border-bottom: 1px dashed var(--border) !important;
            background: transparent !important;
          }
          .why-col.highlight .why-cell { background: transparent !important; }
          .why-cell:last-child { border-bottom: none !important; }
          .why-cell .row-label-inline {
            display: block !important;
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-low);
            margin-bottom: 4px;
          }
          .tone-icon { display: none !important; }
        }
      `}</style>

      <div className="container">
        <SectionHead
          label="03 / WHY THIS STUDIO"
          title={<>為什麼選工作室<br/>而不是 freelancer 或 agency。</>}
          sub="同樣的預算、同樣的時間。一個負責人 + AI 副手團隊把整條 pipeline 接管，比傳統做法多 20× 產出。"
        />

        <div className="why-table">
          {/* Labels column (desktop only) */}
          <div className="why-col labels">
            <div className="why-head">
              <div className="meta-label">COMPARISON</div>
              <h4 className="meta-sub">六項對照</h4>
            </div>
            {rows.map(r => (
              <div key={r.label} className="why-cell row-label-cell">
                {r.label}
                <span className="en">{r.en}</span>
              </div>
            ))}
          </div>

          {/* 3 comparison columns */}
          {cols.map(c => (
            <div key={c.key} className={`why-col ${c.tone === 'highlight' ? 'highlight' : ''}`}>
              <div className="why-head">
                <span className="badge-pill">{c.label}</span>
                <h4>{c.title}</h4>
              </div>
              {rows.map(r => {
                const v = r.values[c.key];
                return (
                  <div key={r.label} className="why-cell">
                    <span className="row-label-inline">{r.label} · {r.en}</span>
                    <span className={`tone-icon ${v.tone}`}>
                      {v.tone === 'good' ? <Check size={10}/> : v.tone === 'bad' ? <Cross size={10}/> : <Tilde size={10}/>}
                    </span>
                    <p className="why-text">{v.text}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WhyStudio });
