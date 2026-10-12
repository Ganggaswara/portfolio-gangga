import { FileUp } from 'lucide-react';
import { Card } from '../../components/ui';

export function CvAdminPage() {
  return (
    <div>
      <h1 className="font-display text-4xl text-white">FILE CV</h1>
      <Card className="mt-6">
        <div className="rounded-2xl border border-dashed border-electric/40 bg-electric/5 p-10 text-center">
          <FileUp size={28} className="mx-auto text-electric" />
          <p className="font-ui mt-3 font-bold text-white">Drag PDF ke sini atau klik untuk pilih</p>
          <p className="mt-1 font-mono text-[0.65rem] text-slate-400">PDF max 10MB. Upload baru menonaktifkan versi lama.</p>
          <button className="btn-capsule btn-primary mt-5 !px-6 !py-2 !text-[0.7rem]">Pilih File</button>
        </div>
        <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
          <div className="flex items-center justify-between bg-success/10 px-5 py-3">
            <div>
              <p className="font-ui text-sm font-bold text-white">CV-Raka-202601.pdf</p>
              <p className="font-mono text-[0.65rem] text-slate-400">2.4 MB / aktif / v2026-01</p>
            </div>
            <span className="rounded-full border border-success/50 px-3 py-1 font-mono text-[0.65rem] text-success uppercase">Aktif</span>
          </div>
          <div className="flex items-center justify-between px-5 py-3 text-sm">
            <span className="text-slate-400">CV-Raka-202508.pdf</span>
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase">Arsip</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
