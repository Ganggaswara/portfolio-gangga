import { useState } from 'react';
import { skills as seed } from '../../data/dummy';
import { Card } from '../../components/ui';

export function SkillsAdminPage() {
  const [items, setItems] = useState(seed.slice(0, 8));
  return (
    <div>
      <h1 className="font-display text-4xl text-white">SKILL</h1>
      <Card className="mt-6">
        <div className="flex flex-col gap-5">
          {items.map((s, i) => (
            <div key={s.name}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="font-ui font-bold text-white">{s.name} <span className="ml-2 font-mono text-[0.65rem] text-slate-500">{s.category}</span></span>
                <span className="font-mono text-electric">{s.level}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={s.level}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setItems(items.map((it, j) => (j === i ? { ...it, level: v } : it)));
                }}
                className="w-full accent-electric"
              />
            </div>
          ))}
        </div>
        <button className="btn-capsule btn-primary mt-6">Simpan Skill</button>
      </Card>
    </div>
  );
}
