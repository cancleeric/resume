// Timeline — recent deliveries

function Timeline() {
  const filters = [
    { key: 'all', label: '全部', en: 'ALL' },
    { key: 'q1q2', label: '2026 Q1-Q2', en: 'RECENT' },
    { key: 'enterprise', label: '企業客戶', en: 'ENTERPRISE' },
  ];
  const items = [
    {
      date: '2026.05',
      version: 'v2.64',
      title: 'Manta — AI Workflow Canvas（對標 Coze）',
      tag: 'q1q2',
      summary: '多租戶生產中；同月完成 JWT httpOnly cookie 遷移 + LIDS end_session + CSRF PoC BLOCKED（CISO / compliance 雙審 PASS）。',
      kind: '對外 SaaS',
      chips: ['JWT httpOnly', 'LIDS', 'CSRF PASS'],
    },
    {
      date: '2026.05',
      version: 'v0.13.0',
      title: 'Hurricane Pay — 集團統一金流',
      tag: 'q1q2',
      summary: 'FastAPI + PostgreSQL + PayPal SDK，PayPal LIVE，9+ tenant 接入；15 routes / 90 tests / 88% coverage。',
      kind: '集團基礎建設',
      chips: ['FastAPI', 'PostgreSQL', 'PayPal LIVE'],
    },
    {
      date: '2026.04',
      version: 'v6.0',
      title: 'Conch（RS / 海螺訂位）— 預約 SaaS GA',
      tag: 'q1q2',
      summary: '1,265+ tests 全通過、28 DB migrations、29 PRs merged、CI 4 jobs 全綠；含 CRM / 平板模式 / No-show 管理 / 公開目錄。',
      kind: '對外 SaaS',
      chips: ['LINE Pay', 'PayPal Live', 'iOS App'],
    },
    {
      date: '2026.04',
      version: 'v1.6.0',
      title: '打工仔 DaGongZai — 零工媒合 SaaS',
      tag: 'q1q2',
      summary: '台灣零工媒合 SaaS 生產中（API + Web + iOS 三端同步），雙端用戶（求職 / 案主）；PayPal Escrow + ML 薪資推算。',
      kind: '對外 SaaS',
      chips: ['FastAPI', 'Next.js 14', 'Swift iOS'],
    },
    {
      date: '2026.04',
      version: 'v1.0.0',
      title: 'Hurricane Vault — 自建 Secret Manager',
      tag: 'q1q2',
      summary: '多層稽核 + 雲端對稱備援，90+ secrets 治理。',
      kind: '集團基礎建設',
      chips: ['Secret Manager', '稽核', '對稱備援'],
    },
    {
      date: '2024.05 - 2026.02',
      version: '—',
      title: '政府信用保證機構 — 技術顧問',
      tag: 'enterprise',
      summary: '主導舊系統從 .NET Framework 4.6 升級至 .NET 8 + Blazor，採微服務架構；跨年度 8 人外部技術團隊交付；支援銀行端信用保證業務之核心生產系統。',
      kind: '企業客戶',
      chips: ['.NET 8', 'Blazor', '微服務'],
    },
    {
      date: '2019.02 - 持續',
      version: '—',
      title: '全國性協會 — 組織綜合管理平台',
      tag: 'enterprise',
      summary: '線上課程報名系統，服務 5,000+ 學員，線上報名率 +80%、行政時間 -60%；PHP CodeIgniter HMVC + 15+ 種營運報表；2026 持續維運。',
      kind: '企業客戶',
      chips: ['PHP', 'CodeIgniter', 'HMVC'],
    },
    {
      date: '2023.06 - 2024.04',
      version: '—',
      title: 'iOS 多功能社交遊戲平台',
      tag: 'enterprise',
      summary: '多米諾骨牌對戰手遊，SwiftUI + SpriteKit + Firebase + CloudKit；即時多人對戰、AI 聊天、AdMob 廣告；已上 App Store。',
      kind: '企業客戶',
      chips: ['SwiftUI', 'SpriteKit', 'Firebase'],
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
