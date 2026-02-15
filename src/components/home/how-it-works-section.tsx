import React from 'react';
import { ScrollReveal, StaggerChildren } from '@/components/ui/scroll-reveal';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-slate-50 -z-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[120px] opacity-80 -z-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-blue-light/60 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-red-light/30 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>

      <div className="container-width">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-block text-brand-blue font-semibold tracking-widest text-xs uppercase bg-brand-blue/10 border border-brand-blue/20 px-4 py-1 rounded-full">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Consult in 3 Easy Steps
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <StaggerChildren className="grid md:grid-cols-3 gap-12 relative z-10" staggerDelay={150}>
            {/* Step 1 */}
            <div className="h-full bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Download & Sign Up</h3>
              <p className="text-slate-600 text-base">
                Get the MediMan app from your store and create your secure profile in seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="h-full bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Choose Specialist</h3>
              <p className="text-slate-600 text-base">
                Browse verified doctors, check reviews, and book a slot that works for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="h-full bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Consult & Heal</h3>
              <p className="text-slate-600 text-base">
                Join the video call, discuss your health, and get your digital prescription
                instantly.
              </p>
            </div>
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
