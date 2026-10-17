import { BrainCircuit, Code2, Search } from 'lucide-react';
import { useI18n, useContent } from '../i18n';
import { Reveal } from '../components/Reveal';
import { Chip } from '../components/ui';

export const ICONS = {
  code: Code2,
  ai: BrainCircuit,
  seo: Search,
} as const;

const SPANS = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-12'];

export function ServicesSection() {
  const { t } = useI18n();
  const { services } = useContent();
  return (
    <section id="services" className="mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="hud-label">{t.servicesSection.label}</p>
        <h2 className="font-display mt-4 max-w-[16ch] text-5xl leading-[0.95] text-white sm:text-6xl">
          {t.servicesSection.heading1}{' '}
          <span className="bg-gradient-to-r from-electric via-grape to-neon bg-clip-text text-transparent">
            {t.servicesSection.heading2}
          </span>
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-12">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.title} delay={Math.min(i * 0.06, 0.2)} className={SPANS[i]}>
              <div className="glass card-hover group relative h-full overflow-hidden p-6 sm:p-8">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  aria-hidden="true"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(252,241,208,0.55), transparent)' }}
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/30 bg-electric/10 text-electric transition group-hover:border-electric/60 group-hover:shadow-[0_0_24px_rgba(252,241,208,0.25)]">
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-slate-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-3xl leading-none text-white sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[56ch] text-[0.85rem] leading-relaxed text-slate-300">
                  {s.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.deliverables.map((d) => (
                    <Chip key={d}>{d}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
