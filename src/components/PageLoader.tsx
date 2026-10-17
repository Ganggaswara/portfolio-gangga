import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { profile } from '../data/dummy';

type PatternUnit = number | null;
type PatternDef = { cells: PatternUnit[]; loop: number; scale: number; lit?: number };

const PATTERNS: Record<string, Partial<Record<3 | 4, PatternDef>>> = {
  arrow: { 3: { cells: [1, 2, 3, 0, 1, 2, 1, 2, 3], loop: 7.2, scale: 1 } },
  dots: { 3: { cells: [0, 1, 2, 0, 1, 2, 0, 1, 2], loop: 3, scale: 2.4 } },
  ripple: { 3: { cells: [2, 1, 2, 1, 0, 1, 2, 1, 2], loop: 4.8, scale: 1.5 } },
  spiral: { 3: { cells: [0, 1, 2, 7, 8, 3, 6, 5, 4], loop: 9, scale: 1.2, lit: 0.35 } },
  orbit: {
    3: { cells: [0, 1, 2, 7, null, 3, 6, 5, 4], loop: 8, scale: 1.2 },
    4: { cells: [0, 1, 2, 3, 11, null, null, 4, 10, null, null, 5, 9, 8, 7, 6], loop: 6, scale: 1.2, lit: 0.45 },
  },
  snake: {
    3: { cells: [0, 1, 2, 5, 4, 3, 6, 7, 8], loop: 9, scale: 1, lit: 0.35 },
    4: { cells: [0, 1, 2, 3, 7, 6, 5, 4, 8, 9, 10, 11, 15, 14, 13, 12], loop: 16, scale: 1, lit: 0.25 },
  },
  sweep: { 4: { cells: [0, 1, 2, 3, 1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6], loop: 5, scale: 1, lit: 0.45 } },
  spin: { 4: { cells: [0, 0, 1, 1, 0, 0, 1, 1, 3, 3, 2, 2, 3, 3, 2, 2], loop: 4, scale: 1.6, lit: 0.35 } },
  rain: { 4: { cells: [0, 2, 1, 3, 1, 3, 2, 4, 2, 4, 3, 5, 3, 5, 4, 6], loop: 4, scale: 1.2, lit: 0.35 } },
  pulse: { 4: { cells: [2, 1, 1, 2, 1, 0, 0, 1, 1, 0, 0, 1, 2, 1, 1, 2], loop: 2.4, scale: 2.5, lit: 0.45 } },
};
const DEFAULT_PATTERN: Record<3 | 4, string> = { 3: 'orbit', 4: 'sweep' };
const MARKS_DONE: Record<3 | 4, number[]> = { 3: [2, 3, 5, 7], 4: [7, 8, 10, 13] };

const resolvePattern = (pattern: string, grid: 3 | 4): PatternDef => {
  const named = PATTERNS[pattern];
  return named?.[grid] ?? PATTERNS[DEFAULT_PATTERN[grid]][grid]!;
};
const CELL =
  'h-[var(--ll-cell)] w-[var(--ll-cell)] [border-radius:max(1px,calc(var(--ll-cell)*0.25))] [background:var(--ll-color)] group-data-[shape=round]:rounded-full';
const LIT: Record<number, string> = {
  62: 'animate-[lattice-on_var(--ll-cycle)_infinite]',
  45: 'animate-[lattice-on-45_var(--ll-cycle)_infinite]',
  35: 'animate-[lattice-on-35_var(--ll-cycle)_infinite]',
  25: 'animate-[lattice-on-25_var(--ll-cycle)_infinite]',
};
const STYLE = `
@keyframes lattice-on { 0%, 100% { opacity: var(--ll-idle); } 18%, 42% { opacity: var(--ll-peak); } 62% { opacity: var(--ll-idle); } }
@keyframes lattice-on-45 { 0%, 100% { opacity: var(--ll-idle); } 13%, 31% { opacity: var(--ll-peak); } 45% { opacity: var(--ll-idle); } }
@keyframes lattice-on-35 { 0%, 100% { opacity: var(--ll-idle); } 10%, 24% { opacity: var(--ll-peak); } 35% { opacity: var(--ll-idle); } }
@keyframes lattice-on-25 { 0%, 100% { opacity: var(--ll-idle); } 7%, 17% { opacity: var(--ll-peak); } 25% { opacity: var(--ll-idle); } }
@media (prefers-reduced-motion: reduce) {
  .ll-run { --ll-peak: 0.7; }
  .ll-run > span { animation-delay: 0ms !important; animation-duration: 1400ms !important; }
  .ll-mark { transform: none !important; }
  .ll-text { filter: none !important; }
}
`;
const LABEL =
  'll-text absolute top-0 left-0 whitespace-nowrap opacity-0 [filter:blur(2px)] [transition:opacity_200ms_ease,filter_200ms_ease] data-[active]:static data-[active]:opacity-100 data-[active]:[filter:blur(0)]';
const fmt = (ds: number) => (ds < 600 ? `${(ds / 10).toFixed(1)}s` : `${Math.floor(ds / 600)}m ${((ds % 600) / 10).toFixed(1)}s`);

interface LatticeProps {
  label?: string;
  doneLabel?: string;
  status?: 'working' | 'done';
  pattern?: string;
  grid?: 3 | 4;
  color?: string;
  doneColor?: string;
  cellSize?: number;
  gap?: number;
  fontSize?: number;
  step?: number;
  idleOpacity?: number;
}

function LatticeLoader({
  label = 'Loading',
  doneLabel = 'Loaded in',
  status = 'working',
  pattern = 'orbit',
  grid = 3,
  color = 'currentColor',
  doneColor = '#22c55e',
  cellSize = 6,
  gap = 2,
  fontSize = 14,
  step = 90,
  idleOpacity = 0.15,
}: LatticeProps) {
  const n = grid === 4 ? 4 : 3;
  const pat = resolvePattern(pattern, n);
  const marks = MARKS_DONE[n];
  const d = step * pat.scale;
  const cycle = Math.round(pat.loop * d);

  const timerRef = useRef<HTMLSpanElement>(null);
  const [announce, setAnnounce] = useState(`${label}, in progress`);

  const paint = (ds: number) => {
    if (timerRef.current) timerRef.current.textContent = fmt(ds);
  };

  useLayoutEffect(() => {
    if (status !== 'working') return undefined;
    const startedAt = performance.now();
    paint(0);
    const id = window.setInterval(() => paint(Math.floor((performance.now() - startedAt) / 100)), 100);
    return () => clearInterval(id);
  }, [status]);

  useEffect(() => {
    setAnnounce(status === 'done' ? doneLabel : `${label}, in progress`);
  }, [status, label, doneLabel]);

  return (
    <span
      role="status"
      className="ll-root group relative inline-flex items-center leading-none [font-family:inherit] [gap:calc(var(--ll-font)*0.625)] [font-size:var(--ll-font)]"
      data-status={status}
      data-shape="round"
      style={
        {
          '--ll-n': n,
          '--ll-cell': `${cellSize}px`,
          '--ll-gap': `${gap}px`,
          '--ll-font': `${fontSize}px`,
          '--ll-color': color,
          '--ll-mark': doneColor,
          '--ll-idle': idleOpacity,
          '--ll-cycle': `${cycle}ms`,
          '--ll-peak': 1,
          '--ll-ease-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
          '--ll-ease-in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
        } as CSSProperties
      }
    >
      <style>{STYLE}</style>
      <span className="grid shrink-0" aria-hidden="true">
        <span className="ll-run [grid-area:1/1] grid [grid-template-columns:repeat(var(--ll-n),var(--ll-cell))] [gap:var(--ll-gap)] [transition:opacity_200ms_ease] group-data-[status=done]:opacity-0 group-data-[status=done]:[&>span]:[animation-play-state:paused]">
          {pat.cells.map((unit, i) => (
            <span
              key={i}
              className={
                unit == null
                  ? `${CELL} [opacity:calc(var(--ll-idle)*0.47)]`
                  : `${CELL} [opacity:var(--ll-idle)] ${LIT[Math.round((pat.lit ?? 0.62) * 100)] || LIT[62]} [animation-timing-function:var(--ll-ease-in-out)]`
              }
              data-hole={unit == null ? '' : undefined}
              style={unit == null ? undefined : { animationDelay: `${Math.round(unit * d)}ms` }}
            />
          ))}
        </span>
        <span className="ll-mark [grid-area:1/1] grid [grid-template-columns:repeat(var(--ll-n),var(--ll-cell))] [gap:var(--ll-gap)] origin-center opacity-0 [transform:scale(0.9)] [transition:opacity_160ms_var(--ll-ease-out),transform_160ms_var(--ll-ease-out)] group-data-[status=done]:opacity-100 group-data-[status=done]:[transform:none] group-data-[status=done]:[transition:opacity_200ms_ease,transform_200ms_var(--ll-ease-out)]">
          {pat.cells.map((_, i) => (
            <span
              key={i}
              className={`${CELL} [opacity:var(--ll-idle)] [transition:opacity_200ms_ease,background-color_200ms_ease] data-[on]:[background:var(--ll-mark)] data-[on]:[opacity:var(--ll-peak)]`}
              data-on={status === 'done' && marks.includes(i) ? '' : undefined}
            />
          ))}
        </span>
      </span>
      <span className="relative inline-block font-medium" aria-hidden="true">
        <span className={LABEL} data-active={status === 'working' ? '' : undefined}>
          {label}
        </span>
        <span className={LABEL} data-active={status === 'done' ? '' : undefined}>
          {doneLabel}
        </span>
      </span>
      <span
        ref={timerRef}
        className="font-mono tabular-nums opacity-60 [font-size:calc(var(--ll-font)*0.875)]"
        aria-hidden="true"
      >
        0.0s
      </span>
      <span className="sr-only">{announce}</span>
    </span>
  );
}

export function PageLoader() {
  const [status, setStatus] = useState<'working' | 'done'>('working');
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];
    const startedAt = performance.now();

    const docReady = new Promise<void>((res) => {
      if (document.readyState === 'complete') res();
      else window.addEventListener('load', () => res(), { once: true });
    });

    const heroImage = new Promise<void>((res) => {
      const img = new Image();
      img.onload = () => res();
      img.onerror = () => res();
      img.src = profile.heroImage;
    });

    const safety = new Promise<void>((res) => {
      timers.push(window.setTimeout(res, 12000));
    });

    Promise.race([Promise.all([docReady, heroImage, document.fonts?.ready ?? Promise.resolve()]).then(() => undefined), safety]).then(() => {
      if (cancelled) return;
      const wait = Math.max(0, 900 - (performance.now() - startedAt));
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setStatus('done');
          timers.push(window.setTimeout(() => setHiding(true), 750));
          timers.push(window.setTimeout(() => setGone(true), 1250));
        }, wait)
      );
    });

    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = '';
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-void transition-opacity duration-500 ${
        hiding ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <LatticeLoader
          label="Loading"
          doneLabel="Loaded in"
          status={status}
          color="#fcf1d0"
          doneColor="#22c55e"
          cellSize={8}
          gap={3}
          fontSize={15}
        />
      </div>
    </div>
  );
}
