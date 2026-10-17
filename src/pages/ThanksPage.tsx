import { CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/dummy';
import { useI18n } from '../i18n';
import { waLink } from '../lib/utils';

export function ThanksPage() {
  const { t } = useI18n();
  const wa = waLink(profile.whatsapp, t.thanks.waMessage);
  return (
    <div className="mx-auto flex min-h-[80dvh] w-full max-w-xl flex-col items-center justify-center px-5 pt-28 pb-16 text-center">
      <span className="glass flex h-16 w-16 items-center justify-center !rounded-full">
        <CheckCircle2 size={28} className="text-success" />
      </span>
      <h1 className="font-display mt-6 text-5xl text-white">{t.thanks.heading}</h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        {t.thanks.desc}
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a href={wa} target="_blank" rel="noreferrer" className="btn-capsule btn-primary">
          <MessageCircle size={15} /> {t.thanks.openWa}
        </a>
        <Link to="/" className="btn-capsule btn-ghost">
          {t.thanks.back}
        </Link>
      </div>
    </div>
  );
}
