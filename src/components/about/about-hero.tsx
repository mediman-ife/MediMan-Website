import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function AboutHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                Healthcare Reimagined
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are on a mission to connect patients with the best doctors, anytime, anywhere.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
