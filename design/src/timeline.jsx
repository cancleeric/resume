// Timeline — recent deliveries

function Timeline() {
  const filters = [
    { key: 'all', label: '全部', en: 'ALL' },
    { key: 'q1q2', label: '2026 Q1-Q2', en: 'RECENT' },
    { key: 'enterprise', label: '企業客戶', en: 'ENTERPRISE' },
  ];
  const items = [
    {
      date: '2026.05.14',
      version: 'v2.4.0',
      title: 'LF Pipeline 公開展示頁上線',
      tag: 'q1q2',
      summary: '集團 6 子公司即時開發看板對外開放，首週流量 24k UV。',
      kind: '對外產品',
      chips: ['Next.js 15', 'Cloud Run', 'Vertex AI'],
    },
    {
      date: '2026.04.02',
      version: 'v1.8.0',
      title: '某金控 AI 內部知識庫 GA',
      tag: 'enterprise q1q2',
      summary: '半年內把分散在 12 個 wiki / drive 的 8 萬份文件整合，員工搜尋 P95 < 800ms。',
      kind: '企業內部',
      chips: ['Embeddings', 'pgvector', 'SAML SSO'],
    },
    {
      date: '2026.03.20',
      version: 'v3.0.0',
      title: 'HurricaneOps 月度成本下降 38%',
      tag: 'q1q2',
      summary: 'Cost Sentinel 上線一季，集團 GCP 月費從 USD 24k 降至 14.9k，無服務降級。',
      kind: '基礎建設',
      chips: ['BigQuery', 'PubSub', 'Slack Bot'],
    },
    {
      date: '2026.02.11',
      version: 'v1.0.0',
      title: '製造業客戶 OT × IT 接合層',
      tag: 'enterprise',
      summary: '把 PLC / SCADA 訊號接到雲端、串到 LLM 做異常解讀，一個負責人 + AI 從 0 到 1 共 6 週。',
      kind: '企業客戶',
      chips: ['MQTT', 'TimescaleDB', 'Vue 3'],
    },
    {
      date: '2026.01.08',
      version: 'v2.1.0',
      title: 'Spec → Code 升級到 Claude Sonnet',
      tag: 'q1q2',
      summary: 'PRD → 可執行 spec 的通過率從 78% 提升至 94%，平均產出時間從 4h 降到 36 分鐘。',
      kind: '內部工具',
      chips: ['Claude', 'TypeScript', 'Zod'],
    },
    {
      date: '2025.12.18',
      version: 'v1.4.0',
      title: '某連鎖餐飲 POS 雲端化',
      tag: 'enterprise',
      summary: '120+ 門市從本地 POS 遷移至雲端、停機時間 < 4 小時、原 IT 預算砍半。',
      kind: '企業客戶',
      chips: ['Go', 'Cloud SQL', 'Cloud Run'],
    },
  ];

  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? items : items.filter(i => i.tag.includes(filter));

  return (
    <section id="timeline" className="section timeline-section">
      <style>{`
        .timeline-section { padding-top: 140px; }
        .tl-filters { display: flex; gap: 4px; margin-bottom: 40px; padding: 4px; background: var(--surface-1); border: 1px solid var(--border); border-radius: 6px; width: fit-content; }
        .tl-filters button {
          padding: 8px 14px;
          font-family: var(--font-tc);
          font-size: 13px;
          color: var(--text-mid);
          border-radius: 4px;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .tl-filters button .en { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em; color: var(--text-dim); }
        .tl-filters button.active { background: var(--surface-3); color: var(--text-hi); }
        .tl-filters button.active .en { color: var(--orange); }

        .tl-track {
          position: relative;
          padding-left: 32px;
        }
        .tl-track::before {
          content: "";
          position: absolute;
          top: 8px; bottom: 8px;
          left: 7px;
          width: 1px;
          background: linear-gradient(to bottom, var(--border-strong) 0%, var(--border) 50%, transparent 100%);
        }
        .tl-item {
          position: relative;
          padding: 0 0 32px 32px;
          margin-left: -32px;
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 32px;
        }
        @media (max-width: 760px) {
          .tl-item { grid-template-columns: 1fr; }
        }
        .tl-item::before {
          content: "";
          position: absolute;
          left: 4px; top: 22px;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--surface-1);
          border: 1px solid var(--border-strong);
          z-index: 1;
        }
        .tl-item.recent::before {
          background: var(--orange);
          border-color: var(--orange);
          box-shadow: 0 0 0 4px rgba(255,107,53,0.15), 0 0 12px var(--orange);
        }
        .tl-meta {
          padding-top: 16px;
        }
        .tl-date {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-hi);
          letter-spacing: 0.02em;
          margin-bottom: 4px;
        }
        .tl-version {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-low);
          letter-spacing: 0.04em;
        }
        .tl-kind {
          margin-top: 8px;
          font-family: var(--font-tc);
          font-size: 12px;
          color: var(--cyan);
        }
        .tl-card {
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 22px 24px;
          transition: all 0.2s;
        }
        .tl-card:hover { border-color: var(--border-strong); background: var(--surface-2); }
        .tl-card h4 {
          font-family: var(--font-tc);
          font-size: 19px;
          font-weight: 600;
          color: var(--text-hi);
          letter-spacing: -0.015em;
          margin-bottom: 8px;
        }
        .tl-card p {
          font-family: var(--font-tc);
          font-size: 14px;
          color: var(--text-mid);
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .tl-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .tl-chips span {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-low);
          padding: 3px 8px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 2px;
        }
      `}</style>
      <div className="container">
        <SectionHead
          label="07 / RECENT DELIVERIES"
          title={<>近期交付，<br/>有日期、有版本、有結果。</>}
          sub="一個人 + AI 副手在過去 6 個月實際交付的系統。沒有圖庫 stock photo、沒有「概念示意」。"
        />

        <div className="tl-filters">
          {filters.map(f => (
            <button key={f.key} className={filter === f.key ? 'active' : ''} onClick={() => setFilter(f.key)}>
              {f.label} <span className="en">{f.en}</span>
            </button>
          ))}
        </div>

        <div className="tl-track">
          {filtered.map((it, i) => (
            <div key={it.title} className={`tl-item ${i < 2 ? 'recent' : ''}`}>
              <div className="tl-meta">
                <div className="tl-date">{it.date}</div>
                <div className="tl-version">{it.version}</div>
                <div className="tl-kind">{it.kind}</div>
              </div>
              <div className="tl-card">
                <h4>{it.title}</h4>
                <p>{it.summary}</p>
                <div className="tl-chips">
                  {it.chips.map(c => <span key={c}>{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Timeline });
