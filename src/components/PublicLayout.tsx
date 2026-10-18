import { ChevronDown, Globe, Rocket, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { profile } from '../data/dummy';
import { useI18n } from '../i18n';
import type { Dict } from '../i18n/dict';
import { BrandIcon } from './BrandIcon';

const LANGS = [
  { code: 'id', label: 'Indonesia' },
  { code: 'en', label: 'English' },
] as const;

function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className ?? ''}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[0.65rem] font-semibold tracking-[0.18em] text-slate-300 uppercase transition hover:border-electric/40 hover:text-electric"
      >
        <Globe size={13} className="text-electric" />
        {lang}
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label="Language"
          className="glass absolute top-[calc(100%+8px)] right-0 z-50 w-40 overflow-hidden p-1 !rounded-xl !bg-navy shadow-[0_16px_40px_rgba(1,7,54,0.6)]"
        >
          {LANGS.map((o) => (
            <button
              key={o.code}
              type="button"
              role="option"
              aria-selected={lang === o.code}
              onClick={() => {
                setLang(o.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                lang === o.code ? 'bg-electric/10 text-electric' : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="font-ui text-sm font-semibold">{o.label}</span>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase opacity-70">{o.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const links: Array<{ to: string; key: keyof Dict['nav'] }> = [
  { to: '/', key: 'Home' },
  { to: '/experience', key: 'Experience' },
  { to: '/projects', key: 'Projects' },
  { to: '/services', key: 'Services' },
  { to: '/#cta', key: 'Contact' },
  { to: '/blog', key: 'Blog' },
];

function routeKey(pathname: string, hash: string) {
  if (pathname.startsWith('/projects')) return 'Projects';
  if (pathname.startsWith('/blog')) return 'Blog';
  if (pathname.startsWith('/experience')) return 'Experience';
  if (pathname.startsWith('/services')) return 'Services';
  if (pathname === '/') {
    if (hash === '#cta') return 'Contact';
    return 'Home';
  }
  return 'Home';
}

export function PublicLayout() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const [active, setActive] = useState(() => routeKey(loc.pathname, loc.hash));
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const barRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const lockRef = useRef(0);
  const tickRef = useRef(0);

  const measure = () => {
    const el = tabRefs.current[active];
    if (!el) return;
    setPill((prev) => {
      const left = el.offsetLeft;
      const width = el.offsetWidth;
      if (prev.left === left && prev.width === width) return prev;
      return { left, width };
    });
  };

  useEffect(() => {
    measure();
  }, [active]);

  useEffect(() => {
    measure();
    const t = setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const next = routeKey(loc.pathname, loc.hash);
    lockRef.current = Date.now() + 900;
    setActive((prev) => (prev === next ? prev : next));
  }, [loc.pathname, loc.hash]);

  useEffect(() => {
    if (loc.pathname !== '/') return;
    const onScroll = () => {
      if (tickRef.current) return;
      tickRef.current = requestAnimationFrame(() => {
        tickRef.current = 0;
        if (Date.now() < lockRef.current) return;
        const services = document.getElementById('services');
        const experience = document.getElementById('experience');
        const cta = document.getElementById('cta');
        const mid = window.innerHeight * 0.5;
        const ctaTop = cta?.getBoundingClientRect().top ?? Infinity;
        const servicesTop = services?.getBoundingClientRect().top ?? Infinity;
        const expTop = experience?.getBoundingClientRect().top ?? Infinity;
        const next =
          ctaTop < mid ? 'Contact' : servicesTop < mid ? 'Services' : expTop < mid ? 'Experience' : 'Home';
        setActive((prev) => (prev === next ? prev : next));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (tickRef.current) cancelAnimationFrame(tickRef.current);
    };
  }, [loc.pathname]);

  return (
    <div className="noise relative min-h-[100dvh] bg-void text-mist">
      <div className="grid-bg pointer-events-none fixed inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(600px 400px at 15% 0%, rgba(252,241,208,0.1), transparent 60%), radial-gradient(700px 500px at 90% 20%, rgba(34,57,111,0.55), transparent 60%), radial-gradient(500px 400px at 50% 100%, rgba(34,57,111,0.4), transparent 60%)',
        }}
      />

      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="glass flex h-16 w-full max-w-4xl items-center justify-between !rounded-full px-4 max-md:!bg-navy sm:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Home">
            <span className="font-display flex h-9 w-9 items-center justify-center rounded-full border border-electric/40 bg-electric/10 text-sm tracking-widest text-electric">
              {profile.monogram}
            </span>
          </Link>
          <div ref={barRef} className="relative hidden items-center gap-1 p-1 md:flex">
            <span
              aria-hidden="true"
              className="absolute top-1 bottom-1 rounded-full bg-electric transition-[left,width] duration-300 ease-out"
              style={{ left: pill.left, width: pill.width }}
            />
            {links.map((l) => {
              const isActive = active === l.key;
              return (
                <Link
                  key={l.key}
                  ref={(el) => {
                    tabRefs.current[l.key] = el;
                  }}
                  to={l.to}
                  onClick={() => {
                    lockRef.current = Date.now() + 900;
                    setActive(l.key);
                  }}
                  className={`relative rounded-full px-4 py-2 font-ui text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 ${
                    isActive ? 'text-void' : 'text-slate-300 hover:text-electric'
                  }`}
                >
                  <span className="relative z-10">{t.nav[l.key]}</span>
                </Link>
              );
            })}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <LangToggle />
            <a
              href="/CV-Gangga.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-capsule btn-primary !px-5 !py-2 !text-[0.7rem]"
            >
              <Rocket size={14} />
              {t.layout.viewCv}
            </a>
          </div>
          <button
            className="rounded-full border border-white/15 p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="glass fixed inset-x-4 top-24 z-50 flex flex-col gap-2 p-4 !bg-navy md:hidden">
          {links.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-ui text-sm font-semibold tracking-wider text-white hover:bg-white/5"
            >
              {t.nav[l.key]}
            </Link>
          ))}
          <div className="mt-1 flex items-center justify-between rounded-xl border-t border-white/10 px-4 pt-3">
            <span className="font-ui text-sm font-semibold tracking-wider text-white">{t.layout.language}</span>
            <LangToggle />
          </div>
        </div>
      )}

      <main className="relative z-10">
        <Outlet />
      </main>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10">
        <div className="glow-line mb-8" />
        <div className="glass flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-wide text-white">{profile.name.toUpperCase()}</p>
            <p className="mt-1 text-sm text-slate-400">
              {profile.location} <span className="mx-2 text-white/20">/</span> {profile.email}
            </p>
          </div>
          <div className="flex gap-2.5">
            {profile.socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                title={s.platform}
                aria-label={s.platform}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-slate-300 transition hover:-translate-y-1 hover:border-electric/60 hover:text-electric hover:shadow-[0_0_20px_rgba(252,241,208,0.35)]"
              >
                <BrandIcon platform={s.platform} size={16} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-5 text-center font-mono text-[0.68rem] tracking-[0.18em] text-slate-500 uppercase">
          2026 {profile.name}. {t.layout.credit}
        </p>
      </footer>
    </div>
  );
}
