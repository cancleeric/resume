// App orchestrator + Top nav + sticky TOC + bottom dock + mobile menu

function Nav({ onMenuOpen }) {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const otherHref = isLight ? 'index.html' : 'index-light.html';
  const switcherIcon = isLight ? '☾' : '☀';
  const switcherLabel = isLight ? 'Dark' : 'Light';
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <svg className="mark" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-label="颶風軟體 logo" role="img">
            <g transform="translate(20 20) rotate(-18)" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <ellipse cx="0" cy="-3.5" rx="14" ry="5"/>
              <ellipse cx="0" cy="3.5" rx="14" ry="5"/>
            </g>
          </svg>
          <span className="logo-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'var(--font-tc)', fontSize: 15, fontWeight: 600 }}>颶風軟體</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-low)', letterSpacing: '0.12em' }}>HURRICANESOFT</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#services" className="nav-link-text">服務</a>
          <a href="#pricing" className="nav-link-text">報價</a>
          <a href="#systems" className="nav-link-text">可交付系統</a>
          <a href="#timeline" className="nav-link-text">交付案例</a>
          <a href="#faq" className="nav-link-text">FAQ</a>
          <a href="https://www.hurricanesoft.com.tw/pipeline" target="_blank" rel="noopener" className="lf nav-link-text" style={{ color: 'var(--cyan)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            LF Pipeline <ArrowUpRight size={12}/>
          </a>
          <a href={otherHref} className="theme-switch" title={`Switch to ${switcherLabel} theme`} aria-label={`Switch to ${switcherLabel} theme`}>
            <span className="theme-icon">{switcherIcon}</span>
            <span className="theme-label">{switcherLabel}</span>
          </a>
          <a href="#cta" className="cta btn btn-primary btn-sm nav-cta" style={{ marginLeft: 4 }}>
            預約諮詢
          </a>
          <button className="nav-hamburger" onClick={onMenuOpen} aria-label="開啟選單">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  const links = [
    { href: '#services', label: '服務', en: 'SERVICES' },
    { href: '#pricing', label: '報價', en: 'PRICING' },
    { href: '#systems', label: '可交付系統', en: 'SYSTEMS' },
    { href: '#timeline', label: '交付案例', en: 'TIMELINE' },
    { href: '#tech', label: '技術棧', en: 'TECH' },
    { href: '#studio', label: '工作室背景', en: 'STUDIO' },
    { href: '#faq', label: 'FAQ', en: 'FAQ' },
    { href: '#tokens', label: '設計 tokens', en: 'TOKENS' },
  ];
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="mobile-menu-inner">
        <div className="mobile-menu-head">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--text-low)' }}>MENU · 目錄</span>
          <button className="mobile-menu-close" onClick={onClose} aria-label="關閉">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <nav className="mobile-menu-list">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={onClose} style={{ animationDelay: `${i * 0.04 + 0.1}s` }}>
              <span className="mm-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="mm-tc">{l.label}</span>
              <span className="mm-en">{l.en}</span>
              <ArrowUpRight size={14}/>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <a href="https://www.hurricanesoft.com.tw/pipeline" target="_blank" rel="noopener" className="mobile-lf" onClick={onClose}>
            <span>進 LF Pipeline 看現場</span>
            <ArrowUpRight />
          </a>
          <a href="#cta" className="btn btn-primary mobile-cta" onClick={onClose}>
            預約諮詢
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

function StickyTOC() {
  const sections = [
    { id: 'hero', label: 'HERO' },
    { id: 'trust', label: 'TRUST' },
    { id: 'why', label: 'WHY' },
    { id: 'services', label: 'SERVICES' },
    { id: 'pricing', label: 'PRICING' },
    { id: 'systems', label: 'SYSTEMS' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'tech', label: 'TECH' },
    { id: 'studio', label: 'STUDIO' },
    { id: 'faq', label: 'FAQ' },
    { id: 'tokens', label: 'TOKENS' },
    { id: 'cta', label: 'CONTACT' },
  ];
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const handler = () => {
      const els = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = sections[0].id;
      for (const el of els) {
        if (el.offsetTop <= y) cur = el.id;
      }
      setActive(cur);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <nav className="sticky-toc" aria-label="頁面目錄">
      {sections.map(s => (
        <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''}>
          <span className="dot"></span>
          <span>{s.label}</span>
        </a>
      ))}
    </nav>
  );
}

function BottomDock() {
  return (
    <div className="bottom-dock">
      <a className="item" href="tel:+886921107206" aria-label="電話">
        <Phone size={14}/>
        <span className="dock-label">0921-107-206</span>
      </a>
      <span className="divider"></span>
      <a className="item" href="mailto:cancleeric@gmail.com" aria-label="Email">
        <Mail size={14}/>
        <span className="dock-label">cancleeric@gmail.com</span>
      </a>
      <span className="divider divider-mobile-show"></span>
      <a className="item dock-lf" href="https://www.hurricanesoft.com.tw/pipeline" target="_blank" rel="noopener" aria-label="LF Pipeline">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8 1.5C8 1.5 6.5 5 4 6.5C6.5 8 8 11.5 8 14.5C8 11.5 9.5 8 12 6.5C9.5 5 8 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        </svg>
        <span className="dock-label">LF Pipeline</span>
      </a>
      <span className="divider"></span>
      <a className="item cta" href="#cta">
        <span className="dock-cta-text-full">預約諮詢 →</span>
        <span className="dock-cta-text-short">預約 →</span>
      </a>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);
  return (
    <>
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <TrustBar />
        <WhyStudio />
        <Services />
        <Pricing />
        <Systems />
        <Timeline />
        <TechStack />
        <StudioOrg />
        <FAQ />
        <Tokens />
        <CTA />
      </main>
      <StickyTOC />
      <BottomDock />
      <footer style={{ padding: '40px 16px 140px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', letterSpacing: '0.08em', borderTop: '1px solid var(--border-subtle)' }}>
        © 2026 颶風軟體有限公司 HurricaneSoft Ltd. · 統編 80289779 · 負責人 王英豪 · 台北市忠孝東路六段 79 號 2 樓 · v5.1
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
