"use client";
import { useEffect, useRef } from 'react';

export function Particles({ density = 60 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dots = Array.from({ length: density }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.6,
      s: 0.0004 + Math.random() * 0.0012,
      o: 0.15 + Math.random() * 0.5,
      cyan: Math.random() > 0.35,
    }));

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = canvas.width = rect?.width ?? window.innerWidth;
      h = canvas.height = rect?.height ?? 600;
    };
    resize();
    window.addEventListener('resize', resize);

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.y -= d.s;
        if (d.y < -0.02) d.y = 1.02;
        const x = d.x * w;
        const y = d.y * h;
        ctx.beginPath();
        ctx.arc(x, y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.cyan ? `rgba(252,241,208,${d.o})` : `rgba(252,241,208,${d.o * 0.45})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [density]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}
