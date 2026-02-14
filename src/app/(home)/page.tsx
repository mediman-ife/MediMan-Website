import { SectionDivider } from '@/components/ui/SectionDivider';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { BannerSection } from '@/components/home/BannerSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { CareSection } from '@/components/home/CareSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

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
