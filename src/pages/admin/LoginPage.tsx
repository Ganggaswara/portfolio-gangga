import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState('admin@portfolio.dev');
  const [pass, setPass] = useState('ChangeMe123!');
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-void px-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nav('/admin');
        }}
        className="glass w-full max-w-md p-8"
      >
        <p className="hud-label">Restricted access</p>
        <h1 className="font-display mt-2 text-4xl text-white">ADMIN LOGIN</h1>
        <label className="mt-6 block">
          <span className="font-ui text-xs font-bold tracking-widest text-slate-300 uppercase">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/12 bg-void/60 px-4 py-3 text-sm text-white outline-none focus:border-electric/60"
          />
        </label>
        <label className="mt-4 block">
          <span className="font-ui text-xs font-bold tracking-widest text-slate-300 uppercase">Password</span>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/12 bg-void/60 px-4 py-3 text-sm text-white outline-none focus:border-electric/60"
          />
        </label>
        <button type="submit" className="btn-capsule btn-primary mt-6 w-full justify-center">
          Masuk Console
        </button>
        <p className="mt-3 text-center font-mono text-[0.65rem] text-slate-500">Mock only. Backend di Fase 2.</p>
      </form>
    </div>
  );
}
