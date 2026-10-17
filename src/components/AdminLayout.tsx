import {
  Award,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
  Star,
  User,
  Briefcase,
  FolderKanban,
  Wrench,
} from 'lucide-react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const items = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/profile', label: 'Profil', icon: User },
  { to: '/admin/education', label: 'Pendidikan', icon: GraduationCap },
  { to: '/admin/experience', label: 'Pengalaman', icon: Briefcase },
  { to: '/admin/projects', label: 'Proyek', icon: FolderKanban },
  { to: '/admin/skills', label: 'Skill', icon: Wrench },
  { to: '/admin/testimonials', label: 'Testimoni', icon: Star },
  { to: '/admin/cv', label: 'File CV', icon: FileText },
  { to: '/admin/settings', label: 'Pengaturan', icon: Settings },
];

export function AdminLayout() {
  return (
    <div className="flex min-h-[100dvh] bg-void text-mist">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/10 bg-navy/80 p-5 backdrop-blur-xl md:flex">
        <Link to="/" className="mb-8 flex items-center gap-3">
          <span className="font-display flex h-9 w-9 items-center justify-center rounded-full border border-electric/40 bg-electric/10 text-sm text-electric">
            RA
          </span>
          <span className="font-ui text-xs font-bold tracking-[0.2em]">CONSOLE</span>
        </Link>
        <nav className="flex flex-1 flex-col gap-1">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-2.5 font-ui text-sm font-semibold transition ${
                  isActive
                    ? 'border-l-2 border-electric bg-electric/10 text-white'
                    : 'border-l-2 border-transparent text-slate-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <it.icon size={16} />
              {it.label}
            </NavLink>
          ))}
        </nav>
        <div className="glass mt-4 flex items-center gap-3 p-3">
          <Award size={18} className="text-electric" />
          <div>
            <p className="font-ui text-xs font-bold">Gangga Swara</p>
            <p className="font-mono text-[0.65rem] text-slate-400">ADMIN UTAMA</p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-void/80 px-5 backdrop-blur-xl">
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-slate-400 uppercase">
            Admin <span className="text-white/20">/</span> <span className="text-electric">Kelola Konten</span>
          </p>
          <Link to="/" className="btn-capsule btn-ghost !px-4 !py-1.5 !text-[0.68rem]">
            <LogOut size={13} />
            Keluar
          </Link>
        </div>
        <div className="mx-auto w-full max-w-5xl flex-1 p-5 sm:p-8">
          <Outlet />
        </div>
        <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-navy/60 p-3 md:hidden">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${
                  isActive ? 'border-electric/50 bg-electric/10 text-white' : 'border-white/10 text-slate-400'
                }`
              }
            >
              <it.icon size={14} />
              {it.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
