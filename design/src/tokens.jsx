// Design tokens display section

function Tokens() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const colorsDark = [
    { name: '--bg', value: '#08090C', label: '頁面底色' },
    { name: '--surface-1', value: '#0E1015', label: '卡片底' },
    { name: '--surface-2', value: '#14171E', label: '抬升層' },
    { name: '--border', value: '#1F2330', label: '主邊框' },
    { name: '--text-hi', value: '#F5F6F8', label: '主文字' },
    { name: '--text-mid', value: '#A1A4AE', label: '副文字' },
    { name: '--text-low', value: '#686B75', label: '弱文字' },
    { name: '--orange', value: '#FF6B35', label: '颶風橙' },
    { name: '--cyan', value: '#00D9FF', label: '電光青' },
    { name: '--live', value: '#2EE0A0', label: 'LIVE 狀態' },
  ];
  const colorsLight = [
    { name: '--bg', value: '#FFFFFF', label: '頁面底色' },
    { name: '--bg-2', value: '#F8F9FB', label: '交替帶' },
    { name: '--surface-1', value: '#FFFFFF', label: '卡片底' },
    { name: '--surface-2', value: '#F1F3F6', label: '抬升層' },
    { name: '--border', value: '#E5E7EB', label: '主邊框' },
    { name: '--text-hi', value: '#0A0B0F', label: '主文字' },
    { name: '--text-mid', value: '#52555F', label: '副文字' },
    { name: '--text-low', value: '#8A8D96', label: '弱文字' },
    { name: '--orange', value: '#FF6B35', label: '颶風橙' },
    { name: '--cyan', value: '#0EA5E9', label: '深海青' },
  ];
  const colors = isLight ? colorsLight : colorsDark;

  const types = [
    { label: 'Display · 88', size: 88, weight: 700, family: 'tc', sample: '開發流程自動化', tracking: '-0.04em' },
    { label: 'H1 · 56', size: 56, weight: 600, family: 'tc', sample: '一個人扛 30+ 系統' },
    { label: 'H2 · 40', size: 40, weight: 600, family: 'tc', sample: '為什麼選工作室' },
    { label: 'H3 · 24', size: 24, weight: 600, family: 'tc', sample: '端到端開發 Pipeline' },
    { label: 'Body · 16', size: 16, weight: 400, family: 'tc', sample: '把這套帶進您的團隊。' },
    { label: 'Mono · 12', size: 12, weight: 500, family: 'mono', sample: 'SPEC → DESIGN → BUILD' },
  ];

  const radii = [
    { name: 'r-xs', value: '3px', label: 'badge / inner' },
    { name: 'r-sm', value: '4px', label: '按鈕內部' },
    { name: 'r-md', value: '6px', label: '預設' },
    { name: 'r-lg', value: '8px', label: '大型容器' },
  ];

  const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96];

  return (
    <section id="tokens" className="section tokens-section">
      <style>{`
        .tokens-section { padding-top: 140px; padding-bottom: 160px; background: var(--bg-2); border-top: 1px solid var(--border-subtle); }
        .tokens-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        @media (max-width: 980px) { .tokens-grid { grid-template-columns: 1fr; } }
        .tk-block h4 {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--orange);
          margin-bottom: 16px;
        }
        .tk-block .tk-title {
          font-family: var(--font-tc);
          font-size: 22px;
          font-weight: 600;
          color: var(--text-hi);
          margin-bottom: 24px;
        }
        .tk-colors { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
        .tk-color {
          padding: 14px; display: flex; align-items: center; gap: 12px;
          background: var(--surface-1); border: 1px solid var(--border); border-radius: var(--r-md);
        }
        .tk-color .sw { width: 32px; height: 32px; border-radius: 4px; flex-shrink: 0; box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset; }
        .tk-color .meta .name { font-family: var(--font-mono); font-size: 12px; color: var(--text-hi); }
        .tk-color .meta .v { font-family: var(--font-mono); font-size: 10.5px; color: var(--text-low); margin-top: 2px; }
        .tk-color .meta .l { font-family: var(--font-tc); font-size: 11px; color: var(--text-mid); margin-top: 4px; }

        .tk-type-row {
          padding: 18px 0;
          border-bottom: 1px dashed var(--border);
          display: grid; grid-template-columns: 140px 1fr; gap: 24px; align-items: baseline;
        }
        .tk-type-row .label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--text-low);
        }
        .tk-type-row .sample { color: var(--text-hi); }

        .tk-radii { display: flex; gap: 12px; flex-wrap: wrap; }
        .tk-radius {
          flex: 1; min-width: 100px;
          padding: 18px;
          background: var(--surface-1);
          border: 1px solid var(--border);
          text-align: center;
        }
        .tk-radius .box {
          width: 56px; height: 56px;
          background: var(--orange);
          margin: 0 auto 12px;
        }
        .tk-radius .v { font-family: var(--font-mono); font-size: 13px; color: var(--text-hi); }
        .tk-radius .n { font-family: var(--font-mono); font-size: 10px; color: var(--text-low); margin-top: 2px; letter-spacing: 0.08em; }
        .tk-radius .l { font-family: var(--font-tc); font-size: 11px; color: var(--text-mid); margin-top: 4px; }

        .tk-spacing { display: flex; gap: 4px; align-items: flex-end; padding: 24px; background: var(--surface-1); border: 1px solid var(--border); border-radius: var(--r-md); }
        .tk-spacing-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .tk-spacing-item .bar { background: var(--cyan); width: 16px; }
        .tk-spacing-item .v { font-family: var(--font-mono); font-size: 10px; color: var(--text-low); }
      `}</style>
      <div className="container">
        <SectionHead
          label={isLight ? "DESIGN TOKENS · LIGHT" : "DESIGN TOKENS · DARK"}
          title={<>Design tokens · {isLight ? '亮色版' : '深色版'}風格說明書</>}
          sub={`本頁所用的色板、字級、圓角、間距。可以直接抄成 CSS variables 或 Figma token。${isLight ? '深色版見另一檔。' : '亮色版見 index-light.html。'}`}
        />

        <div className="tokens-grid">
          {/* colors */}
          <div className="tk-block">
            <h4>COLOR PALETTE</h4>
            <div className="tk-title">{colors.length} 個色彩 token · {isLight ? 'LIGHT' : 'DARK'}</div>
            <div className="tk-colors">
              {colors.map(c => (
                <div key={c.name} className="tk-color">
                  <div className="sw" style={{ background: c.value }}></div>
                  <div className="meta">
                    <div className="name">{c.name}</div>
                    <div className="v">{c.value}</div>
                    <div className="l">{c.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* type */}
          <div className="tk-block">
            <h4>TYPE SCALE</h4>
            <div className="tk-title">三種字型混排</div>
            <div style={{ marginBottom: 16, padding: '14px 16px', background: 'var(--surface-1)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--text-low)', marginBottom: 8 }}>FONT STACK</div>
              <div style={{ display: 'grid', gap: 6 }}>
                <div><span style={{ fontFamily: 'Inter', fontWeight: 600 }}>Inter</span><span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-low)', marginLeft: 10 }}>· 英文 UI / 數字</span></div>
                <div><span style={{ fontFamily: 'var(--font-tc)', fontWeight: 600 }}>IBM Plex Sans TC</span><span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-low)', marginLeft: 10 }}>· 繁體中文</span></div>
                <div><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500 }}>Geist Mono</span><span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-low)', marginLeft: 10 }}>· 標籤 / 數字 / code</span></div>
              </div>
            </div>
            {types.map(t => (
              <div key={t.label} className="tk-type-row">
                <span className="label">{t.label}</span>
                <span
                  className="sample"
                  style={{
                    fontSize: Math.min(t.size, 32),
                    fontWeight: t.weight,
                    fontFamily: t.family === 'tc' ? 'var(--font-tc)' : t.family === 'mono' ? 'var(--font-mono)' : 'Inter',
                    letterSpacing: t.tracking || '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {t.sample}
                </span>
              </div>
            ))}
          </div>

          {/* radii */}
          <div className="tk-block">
            <h4>RADII</h4>
            <div className="tk-title">圓角小、保留科技感</div>
            <div className="tk-radii">
              {radii.map(r => (
                <div key={r.name} className="tk-radius">
                  <div className="box" style={{ borderRadius: r.value }}></div>
                  <div className="v">{r.value}</div>
                  <div className="n">--{r.name}</div>
                  <div className="l">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* spacing */}
          <div className="tk-block">
            <h4>SPACING SCALE</h4>
            <div className="tk-title">9 階間距</div>
            <div className="tk-spacing">
              {spacing.map(s => (
                <div key={s} className="tk-spacing-item">
                  <div className="bar" style={{ height: s * 1.5 }}></div>
                  <div className="v">{s}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: '14px 16px', background: 'var(--surface-1)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--text-low)', marginBottom: 10 }}>SHADOW · DEPTH</div>
              <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div style={{ height: 56, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 6, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-mid)', boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset' }}>sm</div>
                <div style={{ height: 56, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 6, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-mid)', boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset' }}>md</div>
                <div style={{ height: 56, background: 'var(--surface-2)', border: '1px solid var(--orange-line)', borderRadius: 6, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--orange)', boxShadow: '0 0 0 1px rgba(255,107,53,0.4), 0 20px 60px -20px rgba(255,107,53,0.35)' }}>glow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Tokens });
