// Shared utilities, hooks, components

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// IntersectionObserver hook to trigger animation when element enters viewport
function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// Animated count-up number
function CountUp({ to, duration = 1400, suffix = '', prefix = '', decimals = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setVal(to * ease(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  const display = decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString();
  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>;
}

// Section heading block
function SectionHead({ label, title, sub, align = 'left', children }) {
  return (
    <div style={{ textAlign: align, marginBottom: 64, maxWidth: align === 'center' ? '760px' : 'none', margin: align === 'center' ? '0 auto 64px' : '0 0 64px' }}>
      {label && <div className="section-label" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>{label}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {sub && <p className="section-sub" style={{ marginInline: align === 'center' ? 'auto' : 0 }}>{sub}</p>}
      {children}
    </div>
  );
}

// Arrow icons
const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Check = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Cross = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Tilde = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 9C3 9 4.5 7 6 7C7.5 7 8.5 9 10 9C11.5 9 13 7 13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Phone = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 4C3 3.4 3.4 3 4 3H5.5L7 6L5.5 7C6 8.5 7.5 10 9 10.5L10 9L13 10.5V12C13 12.6 12.6 13 12 13C7 13 3 9 3 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Mail = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="2" y="3.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M2.5 4.5L8 9L13.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

Object.assign(window, {
  useInView, CountUp, SectionHead,
  ArrowUpRight, ArrowRight, ChevronDown, Check, Cross, Tilde, Phone, Mail
});
