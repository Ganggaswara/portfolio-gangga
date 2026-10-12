import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code2, MessageCircle } from 'lucide-react';
import { profile, projects } from '../data/dummy';
import { waForProject } from '../lib/utils';
import { Chip } from '../components/ui';
import { Reveal } from '../components/Reveal';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-5 pt-40 pb-24 text-center">
        <h1 className="font-display text-6xl text-white">PROYEK HILANG</h1>
        <Link to="/projects" className="btn-capsule btn-primary mt-6">
          Kembali ke katalog
        </Link>
      </div>
    );
  }

  const wa = waForProject(profile.whatsapp, project.title);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
      <Helmet>
        <title>{`${project.title}, Gangga Swara`}</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>
      <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-slate-400 uppercase hover:text-electric">
        <ArrowLeft size={14} /> Katalog
      </Link>

      <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/12">
            <img src={project.gallery[0] ?? project.thumbnail} alt={project.title} className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {project.gallery.slice(1).map((g) => (
              <img key={g} src={g} alt={`${project.title} gallery`} loading="lazy" className="aspect-[16/10] w-full rounded-xl border border-white/10 object-cover" />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              <Chip>{project.category}</Chip>
              <Chip>{project.period}</Chip>
              <Chip>{project.role}</Chip>
            </div>
            <h1 className="font-display mt-4 text-5xl text-white">{project.title}</h1>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-300">{project.longDescription}</p>
            <div className="mt-5">
              <p className="hud-label mb-2">Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.demoUrl} className="btn-capsule btn-primary !px-5 !py-2 !text-[0.7rem]">
                <ExternalLink size={14} /> Live Demo
              </a>
              <a href={project.repoUrl} className="btn-capsule btn-ghost !px-5 !py-2 !text-[0.7rem]">
                <Code2 size={14} /> Repo
              </a>
            </div>
            <a href={wa} target="_blank" rel="noreferrer" className="btn-capsule mt-3 w-full justify-center border-neon/50 !text-white hover:shadow-[0_0_24px_rgba(255,46,99,0.4)]">
              <MessageCircle size={15} /> Diskusi proyek ini via WA
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
