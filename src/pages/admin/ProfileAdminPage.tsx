import { useState } from 'react';
import { profile } from '../../data/dummy';
import { Card } from '../../components/ui';

export function ProfileAdminPage() {
  const [form, setForm] = useState({ name: profile.name, headline: profile.headline, bio: profile.bio, whatsapp: profile.whatsapp, email: profile.email, location: profile.location });
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <h1 className="font-display text-4xl text-white">KELOLA PROFIL</h1>
      <Card className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(form).map(([k, v]) => (
            <label key={k} className={k === 'bio' || k === 'headline' ? 'sm:col-span-2' : ''}>
              <span className="font-ui text-xs font-bold tracking-widest text-slate-300 uppercase">{k}</span>
              <textarea
                value={v}
                rows={k === 'bio' ? 4 : 2}
                onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/12 bg-void/60 px-4 py-3 text-sm text-white outline-none focus:border-electric/60"
              />
            </label>
          ))}
        </div>
        <button
          onClick={() => {
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
          }}
          className="btn-capsule btn-primary mt-5"
        >
          {saved ? 'Tersimpan' : 'Simpan Perubahan'}
        </button>
      </Card>
    </div>
  );
}
