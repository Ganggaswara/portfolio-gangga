import { profile } from '../data/dummy';
import { Reveal } from '../components/Reveal';

export function PhilosophySection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 py-10 sm:py-16">
      <Reveal>
        <blockquote className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy via-void to-void p-8 sm:p-14">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{ background: 'radial-gradient(500px 260px at 80% 10%, rgba(139,92,246,0.18), transparent 60%)' }}
          />
          <p className="font-display text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.02] text-white">
            {profile.philosophy.title}
          </p>
          <p className="mt-5 max-w-[62ch] text-[0.92rem] leading-relaxed text-slate-300">{profile.philosophy.content}</p>
          <footer className="mt-6 font-mono text-[0.68rem] tracking-[0.2em] text-electric uppercase">
            Prinsip kerja / 01
          </footer>
        </blockquote>
      </Reveal>
    </section>
  );
}
