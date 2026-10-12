import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="relative mx-auto flex min-h-[90dvh] w-full max-w-3xl flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-mono text-[0.7rem] tracking-[0.25em] text-error uppercase">Error 404 / signal lost</p>
      <h1 className="font-display mt-3 text-[clamp(4rem,14vw,9rem)] leading-none text-white">
        VOID<span className="bg-gradient-to-r from-electric to-neon bg-clip-text text-transparent">_404</span>
      </h1>
      <div className="mt-4 flex items-center gap-3 font-mono text-[0.7rem] text-slate-500">
        <span className="h-px w-16 bg-electric/40" /> HUD OFFLINE <span className="h-px w-16 bg-neon/40" />
      </div>
      <p className="mt-4 max-w-[44ch] text-sm text-slate-400">
        Koordinat yang Anda tuju tidak ada di peta. Kembali ke markas untuk lanjut eksplorasi.
      </p>
      <Link to="/" className="btn-capsule btn-primary mt-7">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
