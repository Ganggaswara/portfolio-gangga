import { Helmet } from 'react-helmet-async';
import { education, experience, skills } from '../data/dummy';
import { Reveal } from '../components/Reveal';
import { Card, Chip } from '../components/ui';

export function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
      <Helmet>
        <title>Jejak Karier, Gangga Swara</title>
      </Helmet>
      <p className="hud-label">Jejak / 02</p>
      <h1 className="font-display mt-2 text-6xl text-white sm:text-7xl">PENGALAMAN</h1>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative">
          <div className="timeline-rail absolute top-1 bottom-1 left-[7px] w-[2px]" aria-hidden="true" />
          <div className="flex flex-col gap-5">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05}>
                <div className="relative pl-10">
                  <span className="absolute top-2 left-0 h-4 w-4 rotate-45 border border-electric bg-void shadow-[0_0_12px_rgba(0,229,255,0.8)]" aria-hidden="true" />
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

        <div className="flex flex-col gap-5">
          <Reveal delay={0.1}>
            <Card>
              <p className="hud-label mb-4">Pendidikan</p>
              {education.map((d) => (
                <div key={d.institution} className="border-t border-white/10 py-4 first:border-0 first:pt-0">
                  <h3 className="font-ui font-bold text-white">{d.institution}</h3>
                  <p className="text-sm text-slate-400">{d.degree} {d.field} / {d.period}</p>
                  <p className="mt-1 text-[0.83rem] text-slate-300">{d.detail}</p>
                </div>
              ))}
            </Card>
          </Reveal>
          <Reveal delay={0.15}>
            <Card>
              <p className="hud-label mb-4">Skill HUD</p>
              <div className="flex flex-col gap-4">
                {skills.slice(0, 6).map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="font-ui font-bold text-white">{s.name}</span>
                      <span className="font-mono text-electric">{s.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
