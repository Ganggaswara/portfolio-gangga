import { useState } from 'react';
import { Card } from '../../components/ui';

export function SettingsAdminPage() {
  const [toggles, setToggles] = useState({ testimonial: true, achievement: true, philosophy: true });
  return (
    <div>
      <h1 className="font-display text-4xl text-white">PENGATURAN</h1>
      <Card className="mt-6">
        <p className="hud-label mb-3">SEO</p>
        <div className="grid gap-4">
          <label>
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-slate-300">Site title</span>
            <input defaultValue="Raka Aditya, Digital Architect and AI Creator" className="mt-2 w-full rounded-xl border border-white/12 bg-void/60 px-4 py-3 text-sm text-white outline-none focus:border-electric/60" />
          </label>
          <label>
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-slate-300">Description</span>
            <textarea rows={3} defaultValue="Portofolio personal Raka Aditya, digital architect and AI-driven creative developer." className="mt-2 w-full rounded-xl border border-white/12 bg-void/60 px-4 py-3 text-sm text-white outline-none focus:border-electric/60" />
          </label>
          <label>
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-slate-300">WhatsApp default message</span>
            <textarea rows={2} defaultValue="Halo, saya menemukan portofolio Anda dan tertarik untuk berdiskusi." className="mt-2 w-full rounded-xl border border-white/12 bg-void/60 px-4 py-3 text-sm text-white outline-none focus:border-electric/60" />
          </label>
        </div>
        <p className="hud-label mt-6 mb-3">Section toggle</p>
        <div className="flex flex-col gap-3">
          {(Object.keys(toggles) as Array<keyof typeof toggles>).map((k) => (
            <button
              key={k}
              onClick={() => setToggles({ ...toggles, [k]: !toggles[k] })}
              className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm"
            >
              <span className="font-ui font-bold text-white capitalize">{k} section</span>
              <span className={`rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase ${toggles[k] ? 'bg-success/15 text-success' : 'bg-white/5 text-slate-500'}`}>
                {toggles[k] ? 'On' : 'Off'}
              </span>
            </button>
          ))}
        </div>
        <button className="btn-capsule btn-primary mt-6">Simpan Pengaturan</button>
      </Card>
    </div>
  );
}
