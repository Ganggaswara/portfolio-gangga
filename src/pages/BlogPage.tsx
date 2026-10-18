import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

export function BlogPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
      <Helmet>
        <title>{t.blog.title}</title>
      </Helmet>
      <p className="hud-label">Blog / 04</p>
      <h1 className="font-display mt-2 text-6xl text-white sm:text-7xl">BLOG</h1>
      <p className="mt-3 max-w-[58ch] text-sm text-slate-400">
        {t.blog.desc}
      </p>
      <Link to="/" className="btn-capsule btn-ghost mt-8 !px-6 !py-2.5 !text-[0.72rem]">
        {t.blog.back}
      </Link>
    </div>
  );
}
