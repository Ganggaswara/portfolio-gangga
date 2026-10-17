import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { profile } from '../data/dummy';
import { useI18n, useContent } from '../i18n';
import { waLink } from '../lib/utils';
import { Reveal } from '../components/Reveal';
import { Card, Chip } from '../components/ui';
import { ICONS } from '../sections/ServicesSection';

export function ServicesPage() {
  const { t } = useI18n();
  const { services } = useContent();
  const process = t.servicesPage.process;
  const wa = waLink(profile.whatsapp, t.servicesPage.waMessage);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
      <Helmet>
        <title>{t.servicesPage.title}</title>
        <meta name="description" content={t.servicesPage.desc} />
      </Helmet>
      <p className="hud-label">{t.servicesPage.label}</p>
      <h1 className="font-display mt-2 text-6xl text-white sm:text-7xl">{t.servicesPage.h1}</h1>
      <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-slate-400">
        {t.servicesPage.intro}
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon];
          const wide = i === services.length - 1 && services.length % 2 === 1;
          return (
            <Reveal key={s.title} delay={Math.min(i * 0.05, 0.15)} className={wide ? 'md:col-span-2' : undefined}>
              <Card className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/30 bg-electric/10 text-electric">
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-slate-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="font-display mt-5 text-4xl text-white">{s.title}</h2>
                <p className="mt-2 max-w-[62ch] text-[0.88rem] leading-relaxed text-slate-300">{s.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <Chip key={d}>{d}</Chip>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <Card className="mt-10">
          <p className="hud-label mb-5">{t.servicesPage.processLabel}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <span className="font-mono text-xs tracking-[0.2em] text-electric">{p.step}</span>
                <h3 className="font-ui mt-2 text-sm font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="glass mt-10 flex flex-col items-center gap-4 p-8 text-center sm:p-10">
          <h2 className="font-display text-4xl text-white sm:text-5xl">{t.servicesPage.ctaHeading}</h2>
          <p className="max-w-[50ch] text-sm leading-relaxed text-slate-400">
            {t.servicesPage.ctaDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className="btn-capsule btn-primary">
              <MessageCircle size={15} />
              {t.servicesPage.ctaWa}
            </a>
            <Link to="/projects" className="btn-capsule btn-ghost">
              {t.servicesPage.ctaWorks}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
