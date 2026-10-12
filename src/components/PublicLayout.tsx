import { Download, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { profile } from '../data/dummy';
import { waLink } from '../lib/utils';

const links = [
  { to: '/#profil', label: 'Profil' },
  { to: '/projects', label: 'Karya' },
  { to: '/experience', label: 'Jejak' },
];

export function PublicLayout() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const wa = waLink(profile.whatsapp, 'Halo Raka, saya menemukan portofolio Anda dan ingin berdiskusi.');

  return (
    <div className="noise relative min-h-[100dvh] bg-void text-mist">
      <div className="grid-bg pointer-events-none fixed inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(600px 400px at 15% 0%, rgba(0,229,255,0.12), transparent 60%), radial-gradient(700px 500px at 90% 20%, rgba(139,92,246,0.14), transparent 60%), radial-gradient(500px 400px at 50% 100%, rgba(255,46,99,0.08), transparent 60%)',
        }}
      />

      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="glass flex h-16 w-full max-w-4xl items-center justify-between !rounded-full px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-display flex h-9 w-9 items-center justify-center rounded-full border border-electric/40 bg-electric/10 text-sm tracking-widest text-electric">
              {profile.monogram}
            </span>
            <span className="font-ui hidden text-xs font-bold tracking-[0.2em] text-white sm:block">
              RAKA ADIT
            </span>
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="font-ui text-[0.72rem] font-semibold tracking-[0.18em] text-slate-300 uppercase transition hover:text-electric"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="btn-capsule btn-ghost !px-5 !py-2 !text-[0.7rem]"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
            <a href={`${loc.pathname}#cta`} className="btn-capsule btn-primary !px-5 !py-2 !text-[0.7rem]">
              <Download size={14} />
              CV
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
        <div className="glass fixed inset-x-4 top-24 z-50 flex flex-col gap-2 p-4 md:hidden">
          {[...links, { to: '/#cta', label: 'Download CV' }].map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-ui text-sm font-semibold tracking-wider text-white hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <main className="relative z-10">
        <Outlet />
      </main>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10">
        <div className="glow-line mb-8" />
        <div className="glass flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-wide text-white">RAKA ADITYA PRATAMA</p>
            <p className="mt-1 text-sm text-slate-400">
              {profile.location} <span className="mx-2 text-white/20">/</span> {profile.email}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.socials.map((s) => (
              <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="chip hover:border-electric/50 hover:text-white">
                {s.platform}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-5 text-center font-mono text-[0.68rem] tracking-[0.18em] text-slate-500 uppercase">
          2026 Raka Aditya. Built with precision.
        </p>
      </footer>
    </div>
  );
}
