// Tech stack chips + FAQ

function TechStack() {
  const cats = [
    { name: '前端', en: 'FRONTEND', items: [['Next.js', 14], ['React', 18], ['Vue 3', 6], ['TypeScript', 20], ['Tailwind', 12], ['Vite', 8]] },
    { name: '後端', en: 'BACKEND', items: [['Node.js', 16], ['Go', 9], ['Python', 14], ['tRPC', 7], ['GraphQL', 4], ['Postgres', 18]] },
    { name: '雲端', en: 'CLOUD · INFRA', items: [['GCP', 19], ['Cloud Run', 19], ['BigQuery', 11], ['PubSub', 8], ['Cloudflare', 6], ['Terraform', 9]] },
    { name: 'AI / LLM', en: 'AI · LLM', items: [['Claude', 14], ['Vertex AI', 9], ['LangGraph', 6], ['pgvector', 7], ['Embeddings', 11], ['Evals', 8]] },
    { name: '工作流', en: 'WORKFLOW', items: [['GitHub Actions', 22], ['Linear', 6], ['Cursor', 12], ['Slack Bots', 9]] },
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
          sub="徽章上的數字是「在多少個生產系統正在使用」，不是「會」也不是「碰過」。"
        />
        {cats.map(c => (
          <div key={c.name} className="tech-grid">
            <div className="tech-cat-label">
              <span className="tc">{c.name}</span>
              <span className="en">{c.en}</span>
            </div>
            <div className="tech-chips">
              {c.items.map(([n, count]) => (
                <span key={n} className="tech-chip">
                  {n} <span className="badge">{count}</span>
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
