import React from 'react';
import { ScrollReveal, StaggerChildren } from '@/components/ui/ScrollReveal';

export function ValuesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
            Why Choose MediMan?
          </h2>
        </ScrollReveal>
        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={120}>
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-2">Patient First</h3>
            <p className="text-muted-foreground">
              Every decision we make starts with the patient. We design for simplicity, trust, and
              care.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-2">Verified Doctors</h3>
            <p className="text-muted-foreground">
              We rigorously verify every doctor on our platform to ensure you receive safe and
              expert care.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your health data is yours. We use bank-grade encryption to keep your records safe.
            </p>
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
