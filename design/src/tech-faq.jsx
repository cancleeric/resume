// Tech stack chips + FAQ

function TechStack() {
  const cats = [
    { name: '語言', en: 'LANGUAGES', items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'Swift', 'Kotlin', 'Java', 'PHP', 'Go', 'Solidity', 'SQL', 'C++', 'Objective-C', 'Bash', 'PowerShell'] },
    { name: '後端', en: 'BACKEND', items: ['.NET 8', 'ASP.NET Core', 'FastAPI', 'Express', 'Next.js', 'EF Core', 'SQLAlchemy 2.0', 'Blazor Server', 'WPF', 'Hardhat (Solidity)', 'MCP'] },
    { name: '前端', en: 'FRONTEND', items: ['React 18', 'Next.js', 'TypeScript', 'SwiftUI', 'SpriteKit', 'Vue.js', 'Android (Kotlin)'] },
    { name: '資料庫', en: 'DATABASE', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'SQLite', 'Redis', 'ClickHouse', 'Firestore', 'CloudKit', 'Alembic', 'EF Migrations', 'RLS'] },
    { name: '雲端 / DevOps', en: 'CLOUD · DEVOPS', items: ['GCP Cloud Run (19 services)', 'Cloud SQL', 'Cloud Build', 'Artifact Registry', 'GCP Secret Manager', 'Firebase', 'Docker', 'Docker Compose', 'Drone CI', 'GitHub Actions', 'Gitea-HS (自架 fork)', 'Stalwart Mail Server (自架)', 'Headscale VPN', 'Tailscale', 'Sentry', 'OpenTelemetry', 'Prometheus'] },
    { name: '認證 / 安全', en: 'AUTH · SECURITY', items: ['OAuth 2.0', 'OIDC', 'JWT RS256', 'MFA', 'RBAC', 'BCrypt', 'AES-256-GCM', 'Rate Limiting', 'Audit Logging', '自建程式碼安全掃描器'] },
    { name: 'AI / LLM', en: 'AI · LLM', items: ['MCP', 'Anthropic Claude API', 'Google Gemini', 'OpenAI API', 'AutoGen v0.4', 'Brain LLM Gateway (自建)', 'Anemone (自建 LLM ingress)', 'Modelhub (自訓模型)', 'RAG', 'Provider Routing'] },
    { name: '金流', en: 'PAYMENTS', items: ['PayPal Production', '藍新科技 NewebPay', 'StoreKit 2', 'IAP', 'Hurricane Pay (自建集團統一金流)'] },
  ];
  return (
    <section id="tech" className="section tech-section">
      <style>{`
        .tech-section { padding-top: 140px; }
        .tech-grid { display: grid; grid-template-columns: 200px 1fr; gap: 32px; padding: 28px 28px 8px; background: var(--surface-1); border: 1px solid var(--border); border-radius: var(--r-md); margin-bottom: 14px; }
        @media (max-width: 760px) { .tech-grid { grid-template-columns: 1fr; gap: 16px; padding: 20px; } }
        .tech-cat-label { display: flex; flex-direction: column; gap: 4px; padding-top: 6px; }
        .tech-cat-label .tc { font-family: var(--font-tc); font-size: 16px; font-weight: 600; color: var(--text-hi); }
        .tech-cat-label .en { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.14em; color: var(--orange); }
        .tech-chips { display: flex; flex-wrap: wrap; gap: 8px; padding-bottom: 22px; }
        .tech-chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 10px 7px 12px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 4px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-hi);
          transition: all 0.15s;
        }
        .tech-chip:hover { border-color: var(--cyan-line); color: var(--cyan); }
        .tech-chip .badge {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-low);
          background: var(--bg);
          padding: 2px 6px;
          border-radius: 2px;
          border: 1px solid var(--border);
          height: auto;
        }
      `}</style>
      <div className="container">
        <SectionHead
          label="08 / TECH STACK"
          title={<>技術棧 · 用過、跑過、上線過。</>}
          sub="每一項都在自家集團或客戶生產系統實際跑過 — 不是「會」也不是「碰過」。"
        />
        {cats.map(c => (
          <div key={c.name} className="tech-grid">
            <div className="tech-cat-label">
              <span className="tc">{c.name}</span>
              <span className="en">{c.en}</span>
            </div>
            <div className="tech-chips">
              {c.items.map((n) => (
                <span key={n} className="tech-chip">
                  {n}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { TechStack });
