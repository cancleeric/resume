// Tech stack chips + FAQ

function TechStack() {
  const cats = [
    { nameKey: 'tech.cat.lang', en: 'REPRESENTATIVE LANGUAGES', items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'Swift', 'Kotlin', { name: 'Java', badge: t('tech.lang.java.badge') }, 'PHP', 'Go', 'Solidity', 'SQL', 'C++', 'Objective-C', 'Bash', 'PowerShell'] },
    { nameKey: 'tech.cat.backend', en: 'BACKEND', items: ['.NET 8', 'ASP.NET Core', 'FastAPI', 'Express', 'Next.js', 'EF Core', 'SQLAlchemy 2.0', 'Blazor Server', 'WPF', 'Hardhat (Solidity)', 'MCP'] },
    { nameKey: 'tech.cat.frontend', en: 'FRONTEND', items: ['React 18', 'Next.js', 'TypeScript', 'SwiftUI', 'SpriteKit', 'Vue.js', 'Android (Kotlin)'] },
    { nameKey: 'tech.cat.database', en: 'DATABASE', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'SQLite', 'Redis', 'ClickHouse', 'Firestore', 'CloudKit', 'Alembic', 'EF Migrations', 'RLS'] },
    { nameKey: 'tech.cat.cloud', en: 'CLOUD · DEVOPS', items: [{ name: 'GCP Cloud Run', badge: '19 svc' }, 'Cloud SQL', 'Cloud Build', 'Artifact Registry', 'GCP Secret Manager', 'Firebase', 'Docker', 'Docker Compose', { name: 'Drone CI', badge: '12+ repos' }, 'GitHub Actions', t('tech.item.gitea'), t('tech.item.stalwart'), 'Headscale VPN', 'Tailscale', 'Sentry', 'OpenTelemetry', 'Prometheus'] },
    { nameKey: 'tech.cat.auth', en: 'AUTH · SECURITY', items: ['OAuth 2.0', 'OIDC', 'JWT RS256', 'MFA', 'RBAC', 'BCrypt', 'AES-256-GCM', 'Rate Limiting', 'Audit Logging', t('tech.item.scanner')] },
    { nameKey: 'tech.cat.ai', en: 'AI · LLM', items: ['MCP', 'Anthropic Claude API', 'Google Gemini', 'OpenAI API', 'AutoGen v0.4', t('tech.item.brain'), t('tech.item.anemone'), t('tech.item.modelhub'), 'RAG', 'Provider Routing'] },
    { nameKey: 'tech.cat.payments', en: 'PAYMENTS', items: [{ name: 'PayPal Production', badge: 'LIVE' }, t('tech.item.newebpay'), 'StoreKit 2', 'IAP', t('tech.item.hpay')] },
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
        .tech-profile {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin: -24px 0 28px;
        }
        .tech-profile__item {
          padding: 18px 20px;
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
        }
        .tech-profile__value {
          display: block;
          margin-bottom: 7px;
          color: var(--cyan);
          font-family: var(--font-mono);
          font-size: 24px;
          font-weight: 600;
        }
        .tech-profile__label {
          color: var(--text-hi);
          font-family: var(--font-tc);
          font-size: 13px;
          line-height: 1.55;
        }
        @media (max-width: 900px) { .tech-profile { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .tech-profile { grid-template-columns: 1fr; } }
      `}</style>
      <div className="container">
        <SectionHead
          label="08 / TECH STACK"
          title={<>{t('tech.section.title')}</>}
          sub={t('tech.section.sub')}
        />
        <div className="tech-profile" aria-label={t('tech.profile.aria')}>
          <div className="tech-profile__item"><span className="tech-profile__value">60+</span><span className="tech-profile__label">{t('tech.profile.languages')}</span></div>
          <div className="tech-profile__item"><span className="tech-profile__value">13+</span><span className="tech-profile__label">{t('tech.profile.top25')}</span></div>
          <div className="tech-profile__item"><span className="tech-profile__value">25 yr</span><span className="tech-profile__label">{t('tech.profile.experience')}</span></div>
          <div className="tech-profile__item"><span className="tech-profile__value">B.S.</span><span className="tech-profile__label">{t('tech.profile.education')}</span></div>
        </div>
        {cats.map(c => (
          <div key={c.nameKey} className="tech-grid">
            <div className="tech-cat-label">
              <span className="tc">{t(c.nameKey)}</span>
              <span className="en">{c.en}</span>
            </div>
            <div className="tech-chips">
              {c.items.map((item) => {
                const name = typeof item === 'string' ? item : item.name;
                const badge = typeof item === 'object' && item.badge;
                return (
                  <span key={name} className="tech-chip">
                    {name}
                    {badge && <span className="badge">{badge}</span>}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { TechStack });
