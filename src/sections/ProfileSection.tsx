import { MapPin, Mail } from 'lucide-react';
import { profile } from '../data/dummy';
import { Reveal } from '../components/Reveal';
import { Card, Chip } from '../components/ui';

export function ProfileSection() {
  return (
    <section id="profil" className="mx-auto w-full max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/12">
            <img src={profile.aboutImage} alt="Raka working in studio" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <span className="chip !border-electric/40 !text-electric">7+ tahun</span>
              <span className="chip">Jakarta based</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="h-full">
            <p className="hud-label mb-4">Profil</p>
            <h2 className="font-display text-4xl text-white sm:text-5xl">ENGINEER DENGAN TASTE VISUAL.</h2>
            <p className="mt-4 max-w-[60ch] text-[0.92rem] leading-relaxed text-slate-300">{profile.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-electric" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail size={14} className="text-electric" /> {profile.email}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.socials.map((s) => (
                <a key={s.platform} href={s.url} target="_blank" rel="noreferrer">
                  <Chip>{s.platform}</Chip>
                </a>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
