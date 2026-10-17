import { Suspense, lazy, useRef } from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import { useInView } from 'motion/react';
import { profile } from '../data/dummy';
import { BrandIcon } from '../components/BrandIcon';
import { Reveal } from '../components/Reveal';

const Lanyard = lazy(() => import('../components/Lanyard'));

const [bioMain, bioExtra] = profile.bio.split('\n\n');

const metaTiles = [
  { icon: MapPin, label: 'Based In', value: profile.location },
  { icon: GraduationCap, label: 'EDUCATION', value: 'Undiksha, Informatics' },
];

export function ProfileSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const showLanyard = useInView(cardRef, { margin: '400px 0px 400px 0px', once: true });
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(700px 320px at 12% 18%, rgba(0,229,255,0.10), transparent 65%), radial-gradient(600px 300px at 88% 80%, rgba(139,92,246,0.10), transparent 65%)',
        }}
      />

      <Reveal>
        <div className="relative">
          <p className="font-mono text-[0.68rem] tracking-[0.24em] text-electric uppercase">
              About Me
          </p>
          <h2 className="font-display mt-3 max-w-[14ch] text-5xl leading-[0.95] text-white sm:text-6xl">
            Hi everyone! I&apos;m{' '}
            <span className="bg-gradient-to-r from-electric via-grape to-neon bg-clip-text text-transparent">
              Gangga.
            </span>
          </h2>
        </div>
      </Reveal>

      <div className="relative mt-10 grid gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div ref={cardRef} className="relative h-[520px] overflow-hidden sm:h-[600px] lg:h-[500px]">
            <div className="relative h-full">
              <span aria-hidden="true" className="absolute top-2 left-0 h-6 w-6 border-t-2 border-l-2 border-electric/60" />
              <span aria-hidden="true" className="absolute top-2 right-0 h-6 w-6 border-t-2 border-r-2 border-electric/60" />
              <span aria-hidden="true" className="absolute bottom-2 left-0 h-6 w-6 border-b-2 border-l-2 border-electric/60" />
              <span aria-hidden="true" className="absolute right-0 bottom-2 h-6 w-6 border-r-2 border-b-2 border-electric/60" />
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]"
                aria-hidden="true"
                style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.35), transparent 65%)' }}
              />
              {showLanyard ? (
                <Suspense
                  fallback={
                    <div className="flex h-full items-center justify-center">
                      <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                        Loading ID card
                      </p>
                    </div>
                  }
                >
                  <div className="h-full w-full lg:origin-center lg:scale-[0.88]">
                    <Lanyard
                      frontImage="/lanyard-front.webp"
                      backImage="/lanyard-back.webp"
                      cardColor="#0D1C42"
                      strapColor="#FCF1D0"
                      finish="glossy"
                      size={0.66}
                      strapLength={0.5}
                      gravity={1}
                      breeze={0.35}
                    />
                  </div>
                </Suspense>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                    Loading ID card
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[0.62rem] tracking-[0.2em] text-slate-500 uppercase">
            Drag to swing / Click to flip
          </p>
        </Reveal>

        <div className="flex flex-col gap-5 lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="glass relative overflow-hidden p-6 sm:p-8">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                aria-hidden="true"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.7), transparent)' }}
              />
              <p className="max-w-[62ch] text-[0.95rem] leading-relaxed text-slate-200">{bioMain}</p>
              {bioExtra && (
                <p className="mt-4 max-w-[62ch] text-[0.95rem] leading-relaxed text-slate-200">{bioExtra}</p>
              )}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {metaTiles.map((t, i) => (
              <Reveal key={t.label} delay={0.1 + i * 0.05}>
                <div className="glass group h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/40">
                  <p className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.2em] text-slate-500 uppercase">
                    <t.icon size={13} className="text-electric" /> {t.label}
                  </p>
                  <p className="font-ui mt-2 truncate text-sm font-bold text-white" title={t.value}>
                    {t.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-start gap-4">
              <div className="flex gap-2.5">
                {profile.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    title={s.platform}
                    aria-label={s.platform}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-slate-300 transition hover:-translate-y-1 hover:border-electric/60 hover:text-electric hover:shadow-[0_0_20px_rgba(252,241,208,0.35)]"
                  >
                    <BrandIcon platform={s.platform} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
