import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white -z-20"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue-light/40 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red-light/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container-width">
        <ScrollReveal variant="scale-in">
          <div className="bg-gradient-to-br from-brand-blue via-[#103E99] to-brand-blue-dark rounded-[2rem] p-8 md:p-12 text-center md:text-left text-white relative overflow-hidden shadow-2xl shadow-brand-blue/20 ring-1 ring-white/10 isolate">
            {/* Background Patterns & Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-brand-light/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-brand-light/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] drop-shadow-sm">
                    Your Health,
                    <br />
                    <span className="text-blue-100">In Your Hands.</span>
                  </h2>
                  <p className="text-lg text-blue-100/90 leading-relaxed font-light max-w-lg">
                    Join thousands of users experiencing the future of healthcare today. Instant
                    access to specialists, anytime, anywhere.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.mediman.life"
                    target="_blank"
                    className="hover:scale-105 transition-transform duration-300 group"
                  >
                    <img
                      src="/images/google-play.png"
                      alt="Google Play"
                      className="w-[200px] sm:w-auto sm:h-[2.75rem]"
                    />
                  </Link>
                  <Link
                    href="https://apps.apple.com/us/app/mediman-patient/id6445903276"
                    target="_blank"
                    className="hover:scale-105 transition-transform duration-300 group"
                  >
                    <img
                      src="/images/app-store.png"
                      alt="App Store"
                      className="w-[200px] sm:w-auto sm:h-[2.75rem]"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex-shrink-0 relative flex justify-center md:justify-end">
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-brand-blue/30 blur-[60px] rounded-full scale-90 pointer-events-none"></div>
                  <Image
                    src="/images/mobile-app-mockup.png"
                    alt="MediMan App Interface"
                    width={280}
                    height={560}
                    className="w-[420px] md:w-auto md:max-w-[280px] mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out origin-bottom transform-gpu hover:scale-105 scale-160 md:scale-100 mt-16 translate-y-16 md:mt-0 md:translate-y-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
