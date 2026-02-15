import { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQList } from '@/components/faq/faq-list';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | MediMan',
  description: 'Common questions about using MediMan for doctors and patients.',
};

export default function FAQPage() {
  return (
    <div className="container py-12 md:py-20 max-w-3xl">
      <ScrollReveal variant="fade-up">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-4 text-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground">
            Everything you need to know about the MediMan platform.
          </p>
        </div>
      </ScrollReveal>

      <FAQList />
    </div>
  );
}
