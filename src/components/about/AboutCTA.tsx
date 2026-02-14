import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function AboutCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal variant="scale-in">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to experience better healthcare?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of patients who trust MediMan for their health needs.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/doctors">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Find a Doctor
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
