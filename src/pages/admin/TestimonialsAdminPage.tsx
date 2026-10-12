import { testimonials as seed } from '../../data/dummy';
import { Card } from '../../components/ui';

export function TestimonialsAdminPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl text-white">TESTIMONI</h1>
        <button className="btn-capsule btn-primary !px-5 !py-2 !text-[0.7rem]">Tambah</button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {seed.map((t) => (
          <Card key={t.name}>
            <p className="text-[0.9rem] leading-relaxed text-slate-200">“{t.quote}”</p>
            <p className="mt-3 font-ui text-sm font-bold text-white">{t.name}</p>
            <p className="font-mono text-[0.65rem] tracking-widest text-slate-500 uppercase">{t.role}</p>
            <div className="mt-4 flex gap-2">
              <button className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white">Edit</button>
              <button className="rounded-full border border-success/40 px-4 py-1.5 text-xs text-success">Published</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
