import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function DoctorCTA() {
  return (
    <section id="download" className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-white -z-20"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple-light/30 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <div className="container-width px-4 md:px-6 relative z-10">
        <ScrollReveal variant="scale-in">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-8 md:p-16 lg:px-20 lg:py-24 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-900/20 ring-1 ring-white/10 isolate max-w-5xl mx-auto">
            {/* Decor */}
            <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-brand-purple/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-brand-blue/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

            <div className="relative z-10 mx-auto space-y-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white leading-[1.1]">
                Download MediMan Doctor App
              </h2>
              <div className="space-y-6">
                <p className="text-2xl text-brand-purple-light font-medium tracking-tight">
                  Because care begins from home..!
                </p>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                  MediMan is a secure telehealth app to book trusted doctors, consult by video or
                  in–clinic, get e-prescriptions, and manage family records – all in one place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mediman.doctor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 hover:shadow-lg rounded-lg"
                >
                  <Image
                    src="/images/google-play.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={54}
                    className="h-14 w-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/mediman-doctor/id6479666666" // Placeholder ID
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 hover:shadow-lg rounded-lg"
                >
                  <Image
                    src="/images/app-store.png"
                    alt="Download on the App Store"
                    width={180}
                    height={54}
                    className="h-14 w-auto" // Matched size
                  />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
