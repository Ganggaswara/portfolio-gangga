import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n';
import { Reveal } from '../components/Reveal';

const SEQUENCE: Array<[number, number]> = [
  [0, 4200],
  [1, 4200],
  [2, 4200],
  [3, 4200],
  [-1, 2200],
];

const NODE_POS = [
  'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
  'left-full top-1/2 -translate-x-1/2 -translate-y-1/2',
  'left-1/2 top-full -translate-x-1/2 -translate-y-1/2',
  'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
];

export function ProcessSection() {
  const { t } = useI18n();
  const process = t.servicesPage.process;
  const [state, setState] = useState({ step: 0, rot: 0 });
  const [center, setCenter] = useState(0);
  const isOn = state.step >= 0;
  const centerOn = center >= 0;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let i = 1;
    let id = 0;
    let centerId = 0;
    const run = () => {
      const [next, duration] = SEQUENCE[i];
      setState((prev) => ({
        step: next,
        rot: next < 0 ? prev.rot : prev.rot + 90,
      }));
      centerId = window.setTimeout(() => setCenter(next), next < 0 ? 350 : 1450);
      i = (i + 1) % SEQUENCE.length;
      id = window.setTimeout(run, duration);
    };
    id = window.setTimeout(run, SEQUENCE[0][1]);
    return () => {
      window.clearTimeout(id);
      window.clearTimeout(centerId);
    };
  }, []);

  return (
    <section id="process" className="mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20">
      <div className="mb-14 max-w-3xl">
        <p className="hud-label">{t.process.label}</p>
        <h2 className="font-display mt-4 max-w-[16ch] text-5xl leading-[0.95] text-white sm:text-6xl">
          {t.process.heading1}{' '}
          <span className="bg-gradient-to-r from-electric via-grape to-neon bg-clip-text text-transparent">
            {t.process.heading2}
          </span>
        </h2>
        <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-slate-400">
          {t.servicesPage.processIntro}
        </p>
      </div>
      <Reveal>
        <div className="mx-auto w-full max-w-[22rem] p-9 sm:max-w-[38rem] sm:p-16">
          <div className="relative aspect-square w-full">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-electric/15"
            style={{ boxShadow: 'inset 0 0 60px rgba(252,241,208,0.05)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-[19%] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(252,241,208,0.07), transparent 70%)' }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 z-[5]"
            style={{
              transform: `rotate(${state.rot}deg)`,
              opacity: isOn ? 1 : 0,
              transition: isOn
                ? 'transform 1.5s cubic-bezier(0.45, 0, 0.55, 1), opacity 0.4s ease'
                : 'opacity 0.4s ease',
            }}
          >
            <span className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric shadow-[0_0_16px_6px_rgba(252,241,208,0.45)]" />
          </div>

          {process.map((s, i) => {
            const on = state.step === i;
            return (
              <div
                key={s.step}
                className={`absolute z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full border bg-navy/95 transition duration-300 sm:h-28 sm:w-28 ${NODE_POS[i]} ${
                  on
                    ? 'scale-105 border-electric/50 shadow-[0_0_30px_rgba(252,241,208,0.25)] delay-[1450ms]'
                    : 'border-electric/20'
                }`}
              >
                <span
                  className={`font-mono text-[0.6rem] tracking-[0.2em] transition duration-300 sm:text-[0.65rem] ${
                    on ? 'text-electric delay-[1450ms]' : 'text-electric/50'
                  }`}
                >
                  {s.step}
                </span>
                <span
                  className={`font-display mt-1 hidden text-2xl leading-none transition duration-300 sm:block ${
                    on ? 'text-white delay-[1450ms]' : 'text-white/70'
                  }`}
                >
                  {s.title}
                </span>
              </div>
            );
          })}

          <div className="absolute inset-[19%] z-10 flex flex-col items-center justify-center rounded-full px-3 text-center">
            {centerOn ? (
              <motion.div
                key={center}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <p className="hud-label">{t.process.stepWord} {process[center].step}</p>
                <h3 className="font-display mt-2 text-2xl leading-none text-white sm:text-4xl">
                  {process[center].title}
                </h3>
                <p className="mt-3 hidden max-w-[26ch] text-[0.85rem] leading-relaxed text-slate-300 sm:block">
                  {process[center].desc}
                </p>
              </motion.div>
            ) : null}
          </div>
          </div>
        </div>
      </Reveal>

      <p className="mt-8 min-h-[3rem] text-center text-sm leading-relaxed text-slate-400 sm:hidden">
        {centerOn ? process[center].desc : ''}
      </p>
    </section>
  );
}
