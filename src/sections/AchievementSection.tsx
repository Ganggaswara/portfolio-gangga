import { profile } from '../data/dummy';
import { CountUp } from '../components/CountUp';
import { Reveal } from '../components/Reveal';

export function AchievementSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20">
      <Reveal>
        <div className="glass grid grid-cols-2 gap-px overflow-hidden !p-0 lg:grid-cols-4">
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-void/40 p-7 text-center transition hover:bg-electric/5 ${i > 0 ? 'border-l border-white/10' : ''}`}
            >
              <p className="font-display text-5xl text-white">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-mono text-[0.68rem] tracking-[0.18em] text-slate-400 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
