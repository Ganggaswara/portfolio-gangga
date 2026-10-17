import { Helmet } from 'react-helmet-async';
import { profile } from '../data/dummy';
import { useI18n } from '../i18n';
import { HeroSection } from '../sections/HeroSection';
import { ProfileSection } from '../sections/ProfileSection';
import { FeaturedProjectsSection } from '../sections/FeaturedProjectsSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ProcessSection } from '../sections/ProcessSection';
import { ExperienceTimelineSection } from '../sections/ExperienceTimelineSection';
import { CTASection } from '../sections/CTASection';
import { GlowDivider } from '../components/ui';

export function Home() {
  const { t } = useI18n();
  return (
    <>
      <Helmet>
        <title>{t.home.title}</title>
        <meta name="description" content={t.home.desc} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: 'Digital Architect and AI-Driven Creative Developer',
            address: profile.location,
            email: profile.email,
          })}
        </script>
      </Helmet>
      <HeroSection />
      <GlowDivider />
      <ProfileSection />
      <GlowDivider />
      <ExperienceTimelineSection />
      <GlowDivider />
      <FeaturedProjectsSection />
      <GlowDivider />
      <ServicesSection />
      <GlowDivider />
      <ProcessSection />
      <CTASection />
    </>
  );
}
