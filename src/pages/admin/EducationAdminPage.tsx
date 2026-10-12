import { education as seed } from '../../data/dummy';
import { Card } from '../../components/ui';

export function EducationAdminPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl text-white">PENDIDIKAN</h1>
        <button className="btn-capsule btn-primary !px-5 !py-2 !text-[0.7rem]">Tambah</button>
      </div>
      <Card className="mt-6 !p-0 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 font-mono text-[0.65rem] tracking-widest text-slate-500 uppercase">
              <th className="px-5 py-3">Institusi</th>
              <th className="hidden px-5 py-3 sm:table-cell">Gelar</th>
              <th className="px-5 py-3">Periode</th>
              <th className="px-5 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {seed.map((d) => (
              <tr key={d.institution} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                <td className="px-5 py-3 font-semibold text-white">{d.institution}</td>
                <td className="hidden px-5 py-3 text-slate-400 sm:table-cell">{d.degree} {d.field}</td>
                <td className="px-5 py-3 font-mono text-xs text-electric">{d.period}</td>
                <td className="px-5 py-3 text-right">
                  <button className="mr-2 text-xs text-slate-300 hover:text-white">Edit</button>
                  <button className="text-xs text-error">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
