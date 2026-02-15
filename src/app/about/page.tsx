import { Metadata } from 'next';
import { AboutHero } from '@/components/about/about-hero';
import { MissionSection } from '@/components/about/mission-section';
import { ValuesSection } from '@/components/about/values-section';
import { AboutCTA } from '@/components/about/about-cta';

export const metadata: Metadata = {
  title: 'About Us | MediMan',
  description:
    "Learn about MediMan's mission to make healthcare accessible, affordable, and simple for everyone.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <AboutCTA />
    </div>
  );
}
