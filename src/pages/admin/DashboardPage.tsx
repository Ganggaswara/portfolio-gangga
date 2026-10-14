import { Download, Eye, MessageCircle, FolderKanban } from 'lucide-react';
import { Card } from '../../components/ui';

const stats = [
  { label: 'Total Views', value: '12.480', icon: Eye },
  { label: 'CV Download', value: '3.214', icon: Download },
  { label: 'WA Clicks', value: '1.892', icon: MessageCircle },
  { label: 'Published', value: '6', icon: FolderKanban },
];

const trend = [12, 19, 14, 26, 22, 31, 28];

export function DashboardPage() {
  const max = Math.max(...trend);
  return (
    <div>
      <h1 className="font-display text-4xl text-white">DASHBOARD</h1>
      <p className="mt-1 text-sm text-slate-400">Ringkasan 7 hari terakhir. Data mock.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="!p-5">
            <s.icon size={18} className="text-electric" />
            <p className="font-display mt-3 text-3xl text-white">{s.value}</p>
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-slate-400 uppercase">{s.label}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-5">
        <p className="hud-label mb-4">Tren harian</p>
        <div className="flex h-32 items-end gap-2">
          {trend.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-lg bg-gradient-to-t from-electric/20 to-electric/80 shadow-[0_0_14px_rgba(252,241,208,0.3)]"
              style={{ height: `${(v / max) * 100}%` }}
              title={`Hari ${i + 1}: ${v}`}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between font-mono text-[0.65rem] text-slate-500">
          <span>7 hari lalu</span>
          <span>Hari ini</span>
        </div>
      </Card>
    </div>
  );
}
