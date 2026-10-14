import { Link } from 'react-router-dom';
import { experience } from '../data/dummy';
import { Reveal } from '../components/Reveal';
import { Chip } from '../components/ui';

export function ExperienceTimelineSection() {
  const items = experience.slice(0, 3);
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-10 sm:py-16">
      <p className="hud-label">Experience</p>
      <h2 className="font-display mt-4 max-w-[12ch] text-5xl leading-[0.95] text-white sm:text-6xl">
        WORK THAT{' '}
        <span className="bg-gradient-to-r from-electric via-grape to-neon bg-clip-text text-transparent">
          SHAPED ME.
        </span>
      </h2>
      <div className="relative mt-10 ml-2 border-l-0">
        <div className="timeline-rail absolute top-1 bottom-1 left-[7px] w-[2px]" aria-hidden="true" />
        <div className="flex flex-col gap-6">
          {items.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.06}>
              <div className="relative pl-10">
                <span className="absolute top-2 left-0 flex h-4 w-4 rotate-45 items-center justify-center border border-electric bg-void shadow-[0_0_12px_rgba(252,241,208,0.6)]" aria-hidden="true" />
                <div className="glass p-5 sm:p-6">
                  <p className="font-mono text-[0.68rem] tracking-[0.18em] text-electric uppercase">{e.period}</p>
                  <h3 className="font-ui mt-1 text-lg font-bold text-white">{e.role}</h3>
                  <p className="text-sm text-slate-400">{e.company}</p>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-slate-300">{e.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.techStack.slice(0, 3).map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Link to="/experience" className="btn-capsule btn-ghost mt-8 !px-6 !py-2.5 !text-[0.72rem]">
        View all experience
      </Link>
    </section>
  );
}
