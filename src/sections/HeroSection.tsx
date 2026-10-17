"use client";
import { motion, useMotionValue, useTransform, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import { profile } from '../data/dummy';
import { useI18n } from '../i18n';
import { Typewriter } from '../components/Typewriter';
import { waLink } from '../lib/utils';
import { Particles } from '../components/Particles';

const CODE_ICON = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><text x="50%" y="56%" font-family="monospace" font-size="72" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">&lt;/&gt;</text></svg>`
)}`;

export function HeroSection() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.3);
  const glowX = useTransform(mx, [0, 1], ['10%', '70%']);
  const glowY = useTransform(my, [0, 1], ['5%', '35%']);
  const wa = waLink(profile.whatsapp, t.cta.waMessage);

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-20 pb-6 lg:pt-24 lg:pb-8"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
    >
      <Particles density={40} />
      <motion.div
        className="pointer-events-none absolute h-[480px] w-[480px] rounded-full opacity-25"
        style={{ left: glowX, top: glowY, background: 'radial-gradient(circle, #fcf1d0, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex select-none justify-center overflow-hidden"
        aria-hidden="true"
      >
        <p className="font-display -mb-2 whitespace-nowrap text-center text-[26vw] leading-none text-transparent opacity-[0.07] [-webkit-text-stroke:1px_#fff] sm:-mb-6 sm:text-[18vw]">
          GANGGA
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <div className="mt-4 flex flex-col gap-4 lg:mt-6 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-4">
          <div className="contents lg:block lg:max-w-xl">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-success opacity-70" />
                <span className="h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="font-mono text-[0.65rem] tracking-[0.18em] text-electric uppercase">
                Open for work
              </span>
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display order-2 mt-3 text-[clamp(3.25rem,7.5vw,6.2rem)] leading-[0.92] text-white lg:mt-5"
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
              className="order-3 mt-2 max-w-[42ch] font-ui text-xl font-semibold text-slate-300 sm:text-2xl lg:mt-3"
            >
              <Typewriter phrases={['Fullstack Developer', 'Machine Learning', 'Software Engineer']} />
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="order-4 mt-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center lg:mt-7"
            >
              <a href="/projects" className="btn-capsule btn-primary justify-center">
                View Projects
                <ArrowDownRight size={15} />
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="btn-capsule btn-ghost justify-center">
                Let's Talk
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative order-5 mx-auto w-full max-w-[440px] lg:order-none lg:translate-x-12"
          >
            <div className="flex justify-center">
              <ProfileCard
                avatarUrl={profile.heroImage}
                iconUrl={CODE_ICON}
                miniAvatarUrl={profile.heroImage}
                  name=""
                  title=""
                  handle="ganggaswara"
                status="Open for work"
                contactText="Contact"
                onContactClick={() => window.open(wa, '_blank')}
              />
            </div>

            <p className="mt-1 text-center font-mono text-[0.62rem] tracking-[0.2em] text-slate-500 uppercase lg:mt-2">
              Hover to tilt
            </p>
            <p className="mt-1.5 text-center font-ui text-xs font-bold text-white lg:mt-3">
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
