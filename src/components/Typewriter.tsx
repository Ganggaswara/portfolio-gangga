"use client";
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

export function Typewriter({
  phrases,
  typeMs = 110,
  deleteMs = 55,
  holdMs = 1700,
}: {
  phrases: string[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(phrases[0] ?? '');

  useEffect(() => {
    if (reduce) {
      setText(phrases[0] ?? '');
      return;
    }
    let phrase = 0;
    let char = (phrases[0] ?? '').length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const current = phrases[phrase] ?? '';
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char >= current.length) {
          deleting = true;
          timer = setTimeout(step, holdMs);
          return;
        }
        timer = setTimeout(step, typeMs);
      } else {
        char -= 1;
        setText(current.slice(0, Math.max(0, char)));
        if (char <= 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
          timer = setTimeout(step, 350);
          return;
        }
        timer = setTimeout(step, deleteMs);
      }
    };

    timer = setTimeout(step, holdMs);
    return () => clearTimeout(timer);
  }, [reduce, phrases, typeMs, deleteMs, holdMs]);

  return (
    <span className="text-white">
      {text}
      <span className="type-caret ml-1 inline-block h-[1.05em] w-[2px] translate-y-[4px] bg-electric" aria-hidden="true" />
    </span>
  );
}
