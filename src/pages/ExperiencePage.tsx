import { Helmet } from 'react-helmet-async';
import { useI18n, useContent } from '../i18n';
import { Reveal } from '../components/Reveal';
import { Card, Chip } from '../components/ui';

export function ExperiencePage() {
  const { t } = useI18n();
  const { experience, education } = useContent();
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
      <Helmet>
        <title>{t.experiencePage.title}</title>
      </Helmet>
      <p className="hud-label">{t.experiencePage.label}</p>
      <h1 className="font-display mt-2 max-w-[12ch] text-6xl leading-[0.95] text-white sm:text-7xl">
        {t.experienceTimeline.heading1}{' '}
        <span className="bg-gradient-to-r from-electric via-grape to-neon bg-clip-text text-transparent">
          {t.experienceTimeline.heading2}
        </span>
      </h1>
      <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-slate-400">
        {t.experiencePage.intro}
      </p>

      <div className="mx-auto mt-10 max-w-3xl">
        <div className="relative">
          <div className="timeline-rail absolute top-1 bottom-1 left-[7px] w-[2px]" aria-hidden="true" />
          <div className="flex flex-col gap-5">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05}>
                <div className="relative pl-10">
                  <span className="absolute top-2 left-0 h-4 w-4 rotate-45 border border-electric bg-void shadow-[0_0_12px_rgba(252,241,208,0.6)]" aria-hidden="true" />
                  <Card>
                    <p className="font-mono text-[0.68rem] tracking-[0.18em] text-electric uppercase">{e.period} / {e.type}</p>
                    <h3 className="font-ui mt-1 text-lg font-bold text-white">{e.role}</h3>
                    <p className="text-sm text-slate-400">{e.company}, {e.location}</p>
                    <p className="mt-2 text-[0.88rem] text-slate-300">{e.description}</p>
                    <ul className="mt-3 list-disc pl-5 text-[0.83rem] text-slate-400">
                      {e.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {e.techStack.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <Card className="mt-8">
            <p className="hud-label mb-4">{t.experiencePage.educationLabel}</p>
            {education.map((d) => (
              <div key={d.institution} className="border-t border-white/10 py-4 first:border-0 first:pt-0">
                <h3 className="font-ui font-bold text-white">{d.institution}</h3>
                <p className="text-sm text-slate-400">{d.degree} {d.field} / {d.period}</p>
                {d.detail && <p className="mt-1 text-[0.83rem] text-slate-300">{d.detail}</p>}
              </div>
            ))}
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
