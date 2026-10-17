import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { dict, enData, type Dict, type Lang } from './dict';
import { education, experience, projects, services } from '../data/dummy';

const STORAGE_KEY = 'lang';

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() =>
    localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'id'
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dict[lang] }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}

export function useContent() {
  const { lang } = useI18n();
  return useMemo(() => {
    if (lang === 'id') return { projects, services, experience, education };
    return {
      projects: projects.map((p) => ({ ...p, ...enData.projects[p.slug] })),
      services: services.map((s) => ({ ...s, ...enData.services[s.title] })),
      experience: experience.map((e) => ({ ...e, ...enData.experience[e.company] })),
      education: education.map((d) => ({ ...d, ...enData.education[d.institution] })),
    };
  }, [lang]);
}
