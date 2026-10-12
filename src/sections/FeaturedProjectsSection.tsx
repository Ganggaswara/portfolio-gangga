import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/dummy';
import { Reveal } from '../components/Reveal';
import { Chip, SectionHead } from '../components/ui';

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.isFeatured).slice(0, 4);
  const [first, ...rest] = featured;

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <SectionHead index="02" title="Karya pilihan" desc="Empat proyek yang paling mewakili cara saya bekerja." />
        <Link to="/projects" className="btn-capsule btn-ghost !px-5 !py-2 !text-[0.7rem]">
          Semua karya <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal className="md:row-span-2">
          <Link
            to={`/projects/${first.slug}`}
            className="glass card-hover group relative block h-full min-h-[480px] overflow-hidden !p-0"
          >
            <img src={first.thumbnail} alt={first.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" aria-hidden="true" />
            <div className="absolute right-6 bottom-6 left-6">
              <div className="mb-3 flex gap-2">
                <Chip>{first.category}</Chip>
                <Chip>{first.period}</Chip>
              </div>
              <h3 className="font-display text-4xl text-white sm:text-5xl">{first.title}</h3>
              <p className="mt-2 max-w-[52ch] text-sm text-slate-300">{first.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-ui text-xs font-bold tracking-widest text-electric uppercase">
                Buka studi kasus <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        </Reveal>

        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={0.06 * (i + 1)}>
            <Link to={`/projects/${p.slug}`} className="glass card-hover group grid grid-cols-[120px_1fr] gap-4 p-4 sm:grid-cols-[180px_1fr]">
              <div className="overflow-hidden rounded-xl">
                <img src={p.thumbnail} alt={p.title} className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex min-w-0 flex-col justify-center py-1">
                <div className="mb-2 flex gap-2">
                  <Chip>{p.category}</Chip>
                </div>
                <h3 className="font-ui text-base font-bold text-white">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-[0.82rem] text-slate-400">{p.shortDescription}</p>
                <span className="mt-2 inline-flex items-center gap-1 font-mono text-[0.68rem] tracking-widest text-electric uppercase">
                  Detail <ArrowUpRight size={12} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
