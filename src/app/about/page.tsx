import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionSection } from '@/components/about/MissionSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { AboutCTA } from '@/components/about/AboutCTA';

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
