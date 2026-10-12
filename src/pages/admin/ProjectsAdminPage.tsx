import { useState } from 'react';
import { projects as seed } from '../../data/dummy';
import { Card } from '../../components/ui';

export function ProjectsAdminPage() {
  const [filter, setFilter] = useState<'All' | 'published' | 'draft'>('All');
  const rows = seed.map((p, i) => ({ ...p, status: i < 4 ? 'published' : 'draft' }));
  const shown = rows.filter((r) => filter === 'All' || r.status === filter);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-4xl text-white">PROYEK</h1>
        <button className="btn-capsule btn-primary !px-5 !py-2 !text-[0.7rem]">Proyek Baru</button>
      </div>
      <div className="mt-4 flex gap-2">
        {(['All', 'published', 'draft'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${filter === f ? 'border-electric/60 bg-electric/10 text-white' : 'border-white/12 text-slate-400'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <Card className="mt-4 !p-0 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 font-mono text-[0.65rem] tracking-widest text-slate-500 uppercase">
              <th className="px-5 py-3">Judul</th>
              <th className="hidden px-5 py-3 md:table-cell">Kategori</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((p) => (
              <tr key={p.slug} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                <td className="px-5 py-3">
                  <span className="font-semibold text-white">{p.title}</span>
                  <span className="block font-mono text-[0.65rem] text-slate-500">/{p.slug}</span>
                </td>
                <td className="hidden px-5 py-3 text-slate-400 md:table-cell">{p.category}</td>
                <td className="px-5 py-3">
                  <span className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase ${p.status === 'published' ? 'border-success/40 text-success' : 'border-warn/40 text-warn'}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-right text-xs">
                  <button className="mr-2 text-slate-300 hover:text-white">Edit</button>
                  <button className="text-error">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
