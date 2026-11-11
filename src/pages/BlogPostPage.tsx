import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, CalendarDays, MessageCircle } from 'lucide-react';
import { profile } from '../data/dummy';
import { useI18n } from '../i18n';
import { waLink } from '../lib/utils';
import { coverClass, fmtDate, localizedPosts } from '../data/posts';
import { Chip } from '../components/ui';
import { Reveal } from '../components/Reveal';

export function BlogPostPage() {
  const { slug } = useParams();
  const { t, lang } = useI18n();
  const posts = localizedPosts(lang);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-5 pt-40 pb-24 text-center">
        <h1 className="font-display text-5xl text-white">{t.blog.missing}</h1>
        <Link to="/blog" className="btn-capsule btn-primary mt-6">
          {t.blog.backHome}
        </Link>
      </div>
    );
  }

  const wa = waLink(profile.whatsapp, t.blog.waMessage);
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 pt-32 pb-20">
      <Helmet>
        <title>{`${post.title}, Gangga Swara`}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Link
        to="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-slate-400 uppercase hover:text-electric"
      >
        <ArrowLeft size={14} /> {t.blog.back}
      </Link>

      <Reveal>
        <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] tracking-[0.16em] uppercase">
          <span className="inline-flex items-center gap-1.5 text-electric">
            <CalendarDays size={13} /> {fmtDate(post.date, lang)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-slate-400">
            <Clock size={13} /> {post.readMinutes} {t.blog.readTime}
          </span>
        </div>

        <h1 className="font-display mt-4 text-4xl leading-[1.02] text-white sm:text-5xl">{post.title}</h1>
        <p className="mt-4 max-w-[60ch] text-[0.95rem] leading-relaxed text-slate-300">{post.excerpt}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>

        <div className={`${coverClass(post.cover)} relative mt-8 overflow-hidden rounded-2xl border border-white/12 sm:-mx-8 lg:-mx-24`}>
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="relative z-[1] h-auto w-full"
            />
          ) : (
            <div className="relative aspect-[16/8]">
              <span className="absolute bottom-5 left-6 z-10 font-display text-7xl text-white/10 select-none">
                {post.tags[0]}
              </span>
            </div>
          )}
        </div>

        <article className="prose-futur mt-9">
          {post.body.map((par, i) => (
            <Fragment key={i}>
              <p>{par}</p>
              {post.figure && post.figureAfter === i + 1 ? (
                <figure className="mt-8">
                  <div className="overflow-hidden rounded-2xl border border-white/12">
                    <img
                      src={post.figure.image}
                      alt={post.figure.caption}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 border-l-2 border-electric/50 pl-3 text-[0.78rem] leading-relaxed text-slate-400">
                    {post.figure.caption}
                  </figcaption>
                </figure>
              ) : null}
            </Fragment>
          ))}
        </article>

        <div className="glass mt-12 flex flex-col items-start gap-3 p-7">
          <h2 className="font-display text-2xl text-white">{t.blog.ctaHeading}</h2>
          <p className="text-sm leading-relaxed text-slate-400">{t.blog.ctaDesc}</p>
          <a href={wa} target="_blank" rel="noreferrer" className="btn-capsule btn-primary mt-2 !px-5 !py-2.5 !text-[0.72rem]">
            <MessageCircle size={15} /> {t.blog.ctaWa}
          </a>
        </div>
      </Reveal>

      {others.length > 0 && (
        <div className="mt-14">
          <p className="hud-label mb-4">{t.blog.related}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/blog/${o.slug}`}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-electric/40"
              >
                <div className={`${coverClass(o.cover)} h-20 w-20 shrink-0 overflow-hidden rounded-xl`}>
                  {o.image ? (
                    <img src={o.image} alt={o.title} loading="lazy" className="h-full w-full object-cover" />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[0.6rem] tracking-[0.16em] text-slate-500 uppercase">
                    {fmtDate(o.date, lang)}
                  </p>
                  <h3 className="font-ui mt-1 text-sm leading-snug font-bold text-white transition-colors group-hover:text-electric">
                    {o.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 font-mono text-[0.6rem] tracking-[0.16em] text-electric uppercase">
                    {t.blog.readMore} <ArrowUpRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
