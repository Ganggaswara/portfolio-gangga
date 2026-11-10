import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n';
import { coverClass, fmtDate, localizedPosts } from '../data/posts';
import { Chip } from '../components/ui';
import { Reveal } from '../components/Reveal';

export function BlogPage() {
  const { t, lang } = useI18n();
  const posts = localizedPosts(lang);
  const [featured, ...rest] = posts;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
      <Helmet>
        <title>{t.blog.title}</title>
        <meta name="description" content={t.blog.desc} />
      </Helmet>

      <p className="hud-label">{t.blog.label}</p>
      <h1 className="font-display mt-2 max-w-[16ch] text-5xl leading-[0.95] text-white sm:text-7xl">
        {t.blog.heading1}{' '}
        <span className="bg-gradient-to-r from-electric via-grape to-neon bg-clip-text text-transparent">
          {t.blog.heading2}
        </span>
      </h1>
      <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-slate-400">{t.blog.intro}</p>

      {featured && (
        <Reveal delay={0.05}>
          <Link
            to={`/blog/${featured.slug}`}
            className="group mt-10 grid overflow-hidden rounded-2xl border border-white/12 bg-white/[0.02] transition-colors hover:border-electric/40 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className={`${coverClass(featured.cover)} min-h-[220px] lg:min-h-[320px]`}>
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="absolute inset-0 z-[1] h-full w-full object-cover"
                />
              ) : null}
              {featured.image ? (
                <span className="absolute inset-0 z-[2] bg-gradient-to-t from-void/80 via-void/10 to-void/40" aria-hidden="true" />
              ) : null}
              <span className="absolute top-5 left-5 z-10 font-mono text-[0.6rem] tracking-[0.22em] text-white/70 uppercase">
                {t.blog.featured}
              </span>
              <span className="absolute bottom-5 left-5 z-10 font-display text-6xl text-white/15 select-none">
                01
              </span>
            </div>
            <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[0.65rem] tracking-[0.18em] text-electric uppercase">
                  {fmtDate(featured.date, lang)}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
                <span className="font-mono text-[0.65rem] tracking-[0.18em] text-slate-400 uppercase">
                  {featured.readMinutes} {t.blog.readTime}
                </span>
              </div>
              <h2 className="font-display text-3xl leading-tight text-white transition-colors group-hover:text-electric sm:text-4xl">
                {featured.title}
              </h2>
              <p className="max-w-[46ch] text-sm leading-relaxed text-slate-400">{featured.excerpt}</p>
              <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.18em] text-electric uppercase">
                  {t.blog.readMore}
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post, i) => (
          <Reveal key={post.slug} delay={0.06 + i * 0.05}>
            <Link
              to={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-electric/40"
            >
              <div className={`${coverClass(post.cover)} aspect-[16/9]`}>
                <span className="absolute top-4 left-4 z-10 font-mono text-[0.6rem] tracking-[0.22em] text-white/70 uppercase">
                  {String(i + 2).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.16em] uppercase">
                  <span className="text-electric">{fmtDate(post.date, lang)}</span>
                  <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
                  <span className="text-slate-500">{post.readMinutes} {t.blog.readTime}</span>
                </div>
                <h3 className="font-ui text-base leading-snug font-bold text-white transition-colors group-hover:text-electric">
                  {post.title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed text-slate-400">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                  <ArrowRight size={14} className="shrink-0 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:text-electric" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
