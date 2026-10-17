import { MessageCircle } from 'lucide-react';
import { profile } from '../data/dummy';
import { useI18n } from '../i18n';
import { waLink } from '../lib/utils';
import { Particles } from '../components/Particles';
import { Reveal } from '../components/Reveal';

export function CTASection() {
  const { t } = useI18n();
  const wa = waLink(profile.whatsapp, t.cta.waMessage);
  return (
    <section id="cta" className="mx-auto w-full max-w-6xl px-5 py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[24px] border border-electric/25 bg-navy px-6 py-14 text-center sm:px-14">
          <Particles density={35} />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(600px 300px at 50% 0%, rgba(252,241,208,0.14), transparent 65%), radial-gradient(500px 300px at 50% 110%, rgba(34,57,111,0.5), transparent 60%)',
            }}
          />
          <p className="hud-label relative">{t.cta.label}</p>
          <h2 className="font-display relative mx-auto mt-3 max-w-[16ch] text-[clamp(2.4rem,6vw,4.5rem)] text-white">
            {t.cta.heading}
          </h2>
          <p className="relative mx-auto mt-3 max-w-[52ch] text-sm leading-relaxed text-slate-300">
            {t.cta.desc}
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className="btn-capsule btn-primary">
              <MessageCircle size={15} />
              {t.cta.button}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
