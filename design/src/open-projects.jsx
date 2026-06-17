// Open-Source R&D — personal CV / DL research repos (signsight / nanograd / edgekit)
function OpenSourceProjects() {
  const projects = [
    { key: 'signsight', stack: ['Python', 'PyTorch', 'CNN', 'Grad-CAM', 'FastAPI', 'Docker'], url: 'https://github.com/cancleeric/signsight' },
    { key: 'nanograd',  stack: ['Python', 'Autograd', 'Backprop', 'NumPy'],                   url: 'https://github.com/cancleeric/nanograd' },
    { key: 'edgekit',   stack: ['Python', 'NumPy', 'Canny', 'CV'],                            url: 'https://github.com/cancleeric/edgekit' },
  ];
  return (
    <section id="oss" className="section oss-section">
      <style>{`
        .oss-section { padding-top: 140px; }
        .oss-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; }
        @media (max-width: 980px) { .oss-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .oss-grid { grid-template-columns: 1fr; gap: 12px; } }
        .oss-card { padding: 22px 20px 20px; display: flex; flex-direction: column; text-decoration: none; }
        .oss-card:hover { transform: translateY(-2px); }
        .oss-card__name { font-size: 18px; font-weight: 600; color: var(--text-hi); letter-spacing: -0.015em; }
        .oss-card__tagline { font-family: var(--font-tc); font-size: 13px; color: var(--text-mid); line-height: 1.5; margin: 8px 0 12px; }
        .oss-card .metric { color: var(--cyan); }
        .oss-card__desc { font-size: 13px; color: var(--text-mid); line-height: 1.55; margin-top: 12px; flex: 1; }
        .oss-card__stack { display: flex; flex-wrap: wrap; gap: 4px; padding-top: 14px; border-top: 1px dashed var(--border); margin-top: 14px; }
        .oss-card__stack span { font-family: var(--font-mono); font-size: 10.5px; color: var(--text-mid); padding: 3px 6px; background: var(--surface-2); border-radius: 2px; }
        .oss-card__link { margin-top: 12px; font-family: var(--font-mono); font-size: 11.5px; color: var(--cyan); display: inline-flex; align-items: center; gap: 4px; }
      `}</style>
      <div className="container">
        <SectionHead
          label={t('oss.section.label')}
          title={<span dangerouslySetInnerHTML={{ __html: t('oss.section.title') }} />}
          sub={t('oss.section.sub')}
        />
        <div className="oss-grid">
          {projects.map((p, i) => (
            <a
              key={p.key}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card oss-card"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="oss-card__name mono">{t(`oss.${p.key}.name`)}</span>
              <p className="oss-card__tagline">{t(`oss.${p.key}.tagline`)}</p>
              <div className="metric">{t(`oss.${p.key}.metric`)}</div>
              <p className="oss-card__desc">{t(`oss.${p.key}.desc`)}</p>
              <div className="oss-card__stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              <div className="oss-card__link">{t('oss.repo.link')} <ArrowUpRight size={12} /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { OpenSourceProjects });
