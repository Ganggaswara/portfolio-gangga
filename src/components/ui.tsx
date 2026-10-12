import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('glass card-hover p-6', className)}>{children}</div>;
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>;
}

export function SectionHead({
  index,
  title,
  desc,
}: {
  index: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="hud-label mb-3">
        <span className="text-white/40">{index}</span>
        <span className="mx-3 text-white/20">/</span>
        {title}
      </p>
      {desc ? <p className="text-sm leading-relaxed text-slate-400">{desc}</p> : null}
    </div>
  );
}

export function GlowDivider() {
  return <div className="glow-line mx-auto my-0 w-full max-w-6xl opacity-70" aria-hidden="true" />;
}
