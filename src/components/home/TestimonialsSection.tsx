import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';

export function TestimonialsSection() {
  return (
    <section className="py-16 overflow-x-clip relative">
      <div className="absolute top-0 w-full h-full bg-slate-50 -z-20"></div>
      <div className="absolute -top-20 right-0 w-[700px] h-[700px] bg-brand-light/60 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="fade-right">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-light rounded-full blur-3xl z-0"></div>
              <Image
                src="/images/features-doctors.webp"
                alt="Happy Patient"
                width={600}
                height={800}
                className="rounded-3xl shadow-2xl relative z-10 object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl z-0"></div>

              {/* Rating Badge */}
              <div className="absolute bottom-8 right-8 z-20 glass-card p-4 rounded-xl flex flex-col items-center shadow-xl animate-in fade-in zoom-in duration-1000 delay-500">
                <span className="text-3xl font-bold text-slate-900">4.8</span>
                <div className="flex text-yellow-400 text-sm gap-0.5">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs text-slate-500 mt-1">App Store Rating</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={150}>
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-block text-brand-blue font-semibold tracking-widest text-xs uppercase bg-brand-blue/10 border border-brand-blue/20 px-4 py-1 rounded-full">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-3">
                Loved by users <span className="text-brand-blue">across the globe.</span>
              </h2>

              <div className="space-y-6">
                {/* Dynamic Testimonials Carousel */}
                <TestimonialsCarousel />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
