import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

export function NotFoundPage() {
  const { t } = useI18n();
  return (
    <div className="relative mx-auto flex min-h-[90dvh] w-full max-w-3xl flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-mono text-[0.7rem] tracking-[0.25em] text-error uppercase">{t.notFound.tag}</p>
      <h1 className="font-display mt-3 text-[clamp(4rem,14vw,9rem)] leading-none text-white">
        VOID<span className="bg-gradient-to-r from-electric to-neon bg-clip-text text-transparent">_404</span>
      </h1>
      <div className="mt-4 flex items-center gap-3 font-mono text-[0.7rem] text-slate-500">
        <span className="h-px w-16 bg-electric/40" /> {t.notFound.hud} <span className="h-px w-16 bg-neon/40" />
      </div>
      <p className="mt-4 max-w-[44ch] text-sm text-slate-400">
        {t.notFound.desc}
      </p>
      <Link to="/" className="btn-capsule btn-primary mt-7">
        {t.notFound.back}
      </Link>
    </div>
  );
}
