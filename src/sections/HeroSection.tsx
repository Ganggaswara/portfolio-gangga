"use client";
import { Suspense, lazy } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Download, MessageCircle } from 'lucide-react';
import { profile } from '../data/dummy';
import { waLink } from '../lib/utils';
import { Particles } from '../components/Particles';

const Lanyard = lazy(() => import('../components/Lanyard'));

const stats = [
  { value: '7+', label: 'Years shipping' },
  { value: '48', label: 'Projects live' },
  { value: '31', label: 'Happy clients' },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.3);
  const glowX = useTransform(mx, [0, 1], ['10%', '70%']);
  const glowY = useTransform(my, [0, 1], ['5%', '35%']);
  const wa = waLink(profile.whatsapp, 'Halo Gangga, saya menemukan portofolio Anda dan ingin berdiskusi.');

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-24 pb-8"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
    >
      <Particles density={40} />
      <motion.div
        className="pointer-events-none absolute h-[480px] w-[480px] rounded-full opacity-25 blur-[120px]"
        style={{ left: glowX, top: glowY, background: 'radial-gradient(circle, #00e5ff, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <p className="font-display -mb-6 text-center text-[18vw] leading-none text-transparent opacity-[0.07] [-webkit-text-stroke:1px_#fff]">
          GANGGA
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <div className="flex items-center justify-between font-mono text-[0.65rem] tracking-[0.22em] text-slate-500 uppercase">
          <span>Folio / 2026</span>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="text-electric">Open for work</span>
          </span>
        </div>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-4">
          <div className="max-w-xl">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-1 pr-4 pl-1.5 backdrop-blur"
            >
              <span className="rounded-full bg-electric px-2.5 py-0.5 font-mono text-[0.62rem] font-bold tracking-widest text-void uppercase">
                New
              </span>
              <span className="font-ui text-xs font-semibold text-slate-200">
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-5 text-[clamp(3.4rem,7.5vw,6.2rem)] leading-[0.92] text-white"
            >
              GANGGA SWARA
              <span className="block bg-gradient-to-r from-electric via-grape to-neon bg-clip-text pb-2 text-transparent">
                IDEA TO IMPACT
              </span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-slate-300"
            >
              Fullstack developer crafting fast interfaces and intelligent systems for ambitious teams.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a href="#cta" className="btn-capsule btn-primary">
                <Download size={15} />
                Download CV
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="btn-capsule btn-ghost">
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="/projects"
                className="group inline-flex items-center gap-1.5 px-2 font-ui text-xs font-bold tracking-[0.16em] text-slate-300 uppercase transition hover:text-white"
              >
                View work
                <ArrowUpRight size={15} className="text-electric transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.dl
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-9 grid max-w-md grid-cols-3 divide-x divide-white/10 border-y border-white/10"
            >
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-3 first:pl-0">
                  <dt className="order-2 mt-1 block font-mono text-[0.62rem] tracking-[0.14em] text-slate-500 uppercase">
                    {s.label}
                  </dt>
                  <dd className="font-display text-3xl text-white">{s.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            <div className="relative h-[480px] sm:h-[540px]">
              {reduce ? (
                <img
                  src={profile.heroImage}
                  alt="Portrait of Gangga Swara"
                  className="h-full w-full rounded-[24px] object-cover"
                  loading="eager"
                />
              ) : (
                <Suspense
                  fallback={
                    <div className="flex h-full items-center justify-center">
                      <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                        Loading ID card
                      </p>
                    </div>
                  }
                >
                  <Lanyard
                    frontImage={profile.heroImage}
                    backImage={profile.aboutImage}
                    strapImage={undefined}
                    style={undefined}
                    cardColor="#0A0F1E"
                    strapColor="#00E5FF"
                    finish="glossy"
                    size={0.58}
                    strapLength={0.5}
                    gravity={1}
                    breeze={0.35}
                  />
                </Suspense>
              )}
            </div>

            <p className="mt-2 text-center font-mono text-[0.62rem] tracking-[0.2em] text-slate-500 uppercase">
              Drag to swing / Click to flip
            </p>
            <p className="mt-3 text-center font-ui text-xs font-bold text-white">
              {profile.shortName}
              <span className="ml-2 font-mono text-[0.62rem] font-normal tracking-widest text-electric uppercase">
                Bali ID
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
