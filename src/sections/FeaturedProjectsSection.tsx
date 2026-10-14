import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/dummy';
import { Reveal } from '../components/Reveal';
import { Chip } from '../components/ui';

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          <p className="hud-label">Projects</p>
          <h2 className="font-display mt-4 max-w-[14ch] text-5xl leading-[0.95] text-white sm:text-6xl">
            WORKS &{' '}
            <span className="bg-gradient-to-r from-electric via-grape to-neon bg-clip-text text-transparent">
              CREATIVE EXPERIMENTS.
            </span>
          </h2>
        </div>
        <Link to="/projects" className="btn-capsule btn-ghost !px-5 !py-2 !text-[0.7rem]">
          Semua karya <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.25)}>
            <Link
              to={`/projects/${p.slug}`}
              className="glass card-hover group relative block overflow-hidden !p-0"
            >
              <div className="scroll-thumb relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(1,7,54,0) 45%, rgba(1,7,54,0.88) 100%), radial-gradient(420px 220px at 88% 0%, rgba(252,241,208,0.16), transparent 65%)',
                  }}
                />
                <span className="chip absolute top-4 left-4 !bg-void/75 !text-cream backdrop-blur">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="chip absolute top-4 right-4 !bg-void/75 !text-cream backdrop-blur">
                  {p.category}
                </span>
              </div>

              <div className="relative p-6">
                <div
                  className="pointer-events-none absolute inset-x-6 top-0 h-px"
                  aria-hidden="true"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(252,241,208,0.55), transparent)' }}
                />
                <p className="font-mono text-[0.65rem] tracking-[0.2em] text-electric uppercase">
                  {p.period} / {p.role}
                </p>
                <h3 className="font-display mt-2 text-3xl leading-none text-white sm:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-[52ch] text-[0.85rem] leading-relaxed text-slate-300">
                  {p.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 3).map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold tracking-[0.16em] text-electric uppercase">
                    Open case
                    <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
