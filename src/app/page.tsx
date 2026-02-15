import { SectionDivider } from '@/components/ui/section-divider';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturesSection } from '@/components/home/features-section';
import { BannerSection } from '@/components/home/banner-section';
import { HowItWorksSection } from '@/components/home/how-it-works-section';
import { CareSection } from '@/components/home/care-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <SectionDivider />

        <FeaturesSection />

        <SectionDivider />

        <BannerSection />

        <SectionDivider />

        <HowItWorksSection />

        <SectionDivider />

        <CareSection />

        <SectionDivider />

        <TestimonialsSection />

        <SectionDivider />

        <CTASection />
      </main>
    </div>
  );
}
