import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { projects, type ProjectCategory } from '../data/dummy';
import { Reveal } from '../components/Reveal';
import { Chip } from '../components/ui';

const cats: Array<'All' | ProjectCategory> = ['All', 'Web', 'Mobile', 'AI', 'Design'];

export function ProjectsPage() {
  const [cat, setCat] = useState<'All' | ProjectCategory>('All');
  const [q, setQ] = useState('');
  const [debounced, setDebounced] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 9;

  const onSearch = (v: string) => {
    setQ(v);
    window.clearTimeout((onSearch as unknown as { t?: number }).t);
    (onSearch as unknown as { t?: number }).t = window.setTimeout(() => {
      setDebounced(v.trim().toLowerCase());
      setPage(1);
    }, 300);
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const okCat = cat === 'All' || p.category === cat;
      const okQ =
        debounced.length < 3 ||
        p.title.toLowerCase().includes(debounced) ||
        p.shortDescription.toLowerCase().includes(debounced);
      return okCat && okQ;
    });
  }, [cat, debounced]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
      <Helmet>
        <title>Karya, Gangga Swara</title>
        <meta name="description" content="Katalog proyek web, mobile, AI, dan desain oleh Gangga Swara." />
      </Helmet>
      <p className="hud-label">Katalog / 01</p>
      <h1 className="font-display mt-2 text-6xl text-white sm:text-7xl">SEMUA KARYA</h1>
      <p className="mt-3 max-w-[58ch] text-sm text-slate-400">
        Filter berdasarkan kategori atau cari kata kunci. Setiap kartu membuka studi kasus lengkap.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setPage(1);
              }}
              className={`rounded-full border px-5 py-2 font-ui text-xs font-bold tracking-widest uppercase transition ${
                cat === c
                  ? 'border-electric/60 bg-electric/10 text-white shadow-[0_0_18px_rgba(252,241,208,0.25)]'
                  : 'border-white/12 text-slate-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="glass flex items-center gap-2 !rounded-full px-4 py-2.5 md:w-72">
          <Search size={15} className="shrink-0 text-slate-400" />
          <input
            value={q}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Cari proyek, min 3 huruf"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </label>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.05, 0.3)}>
            <Link to={`/projects/${p.slug}`} className="glass card-hover group block overflow-hidden !p-0">
              <div className="scroll-thumb relative aspect-[4/3] overflow-hidden">
                <img src={p.thumbnail} alt={p.title} className="h-full w-full" loading="lazy" />
                <span className="chip absolute top-3 left-3 !bg-void/70 backdrop-blur">{p.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-ui text-base font-bold text-white">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-[0.83rem] text-slate-400">{p.shortDescription}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {p.techStack.slice(0, 2).map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <ArrowUpRight size={16} className="text-electric" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass mt-8 p-10 text-center">
          <p className="font-ui font-bold text-white">Tidak ada hasil</p>
          <p className="mt-1 text-sm text-slate-400">Coba kata kunci lain atau reset filter kategori.</p>
        </div>
      )}

      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`h-9 w-9 rounded-full border font-mono text-xs transition ${
              page === n ? 'border-electric/60 bg-electric/10 text-white' : 'border-white/12 text-slate-400 hover:text-white'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
