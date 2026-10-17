import { Helmet } from 'react-helmet-async';
import { profile } from '../data/dummy';
import { HeroSection } from '../sections/HeroSection';
import { ProfileSection } from '../sections/ProfileSection';
import { FeaturedProjectsSection } from '../sections/FeaturedProjectsSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ExperienceTimelineSection } from '../sections/ExperienceTimelineSection';
import { CTASection } from '../sections/CTASection';
import { GlowDivider } from '../components/ui';

export function Home() {
  return (
    <>
      <Helmet>
        <title>{`${profile.shortName}, Digital Architect and AI Creator`}</title>
        <meta name="description" content={profile.bio.slice(0, 155)} />
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
      <CTASection />
    </>
  );
}
