import { experience as seed } from '../../data/dummy';
import { Card } from '../../components/ui';

export function ExperienceAdminPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl text-white">PENGALAMAN</h1>
        <button className="btn-capsule btn-primary !px-5 !py-2 !text-[0.7rem]">Tambah</button>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {seed.map((e) => (
          <Card key={e.company} className="!p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[0.65rem] tracking-widest text-electric uppercase">{e.period}</p>
                <h3 className="font-ui font-bold text-white">{e.role} / {e.company}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-400">{e.description}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white">Edit</button>
                <button className="rounded-full border border-error/40 px-4 py-1.5 text-xs text-error">Hapus</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
