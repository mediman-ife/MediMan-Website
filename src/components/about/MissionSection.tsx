import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function MissionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal variant="fade-right">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg">
                At MediMan, we believe access to quality healthcare is a fundamental right. We are
                building the infrastructure to power the next generation of healthcare delivery in
                Sri Lanka and beyond.
              </p>
              <p className="text-muted-foreground text-lg">
                By bridging the gap between patients and doctors through technology, we eliminate
                waiting times, reduce travel costs, and ensure medical records are secure and
                accessible.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left" delay={200}>
            <div className="rounded-xl bg-muted aspect-video flex items-center justify-center text-muted-foreground">
              {/* Placeholder for team image or mission graphic */}
              Mission Image
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
