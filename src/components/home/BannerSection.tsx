import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function BannerSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 -z-20"></div>
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-brand-blue-light/50 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-red-light/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container-width">
        <ScrollReveal variant="scale-in">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/15">
            <Image
              src="/images/full-width-banner.webp"
              alt="Everything You Need in One Smart Health App — MediMan features overview"
              width={1920}
              height={800}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
