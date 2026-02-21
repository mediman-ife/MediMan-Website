import React from 'react';
import { Video, Clock, FileText, Users, Pill } from 'lucide-react';
import { ScrollReveal, StaggerChildren } from '@/components/ui/scroll-reveal';

export function FeaturesSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-white -z-20"></div>
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue-light/60 rounded-full blur-[140px] -z-10 mix-blend-multiply opacity-80 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red-light/40 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-70 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/40 rounded-full blur-[80px] -z-20 pointer-events-none"></div>

      <div className="container-width">
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="inline-block text-brand-blue font-semibold tracking-widest text-xs uppercase bg-brand-blue/10 border border-brand-blue/20 px-4 py-1 rounded-full">
              Our Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Healthcare Reimagined
            </h2>
            <span className="block text-slate-600 text-base md:text-lg mt-2">
              Skip the waiting rooms. Experience the future of medical consultations with features
              designed for your convenience.
            </span>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-6 gap-6" staggerDelay={120}>
          {/* Large Card */}
          <div className="md:col-span-4 h-full bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-slate-200/80 shadow-xl shadow-brand-blue/8 ring-1 ring-brand-blue/5">
            <div className="relative z-10 flex flex-col h-full justify-between items-center md:items-start text-center md:text-left">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-red shadow-sm group-hover:scale-110 transition-transform mb-3 mx-auto md:mx-0">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Instant Video Consultations
                </h3>
                <p className="text-slate-600 text-base max-w-md">
                  Connect with specialists face-to-face from the comfort of your home. HD video
                  quality with secure, encrypted connection.
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-brand-blue-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Tall Card */}
          <div className="md:col-span-2 h-full bg-brand-purple text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-brand-purple/30 transition-all duration-300">
            <div className="relative z-10 flex flex-col h-full items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-3 mx-auto md:mx-0">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
              <p className="text-purple-100 text-base">
                Medical care doesn&apos;t wait for office hours. Find available doctors anytime,
                anywhere.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
          </div>

          {/* Small Card 1 */}
          <div className="md:col-span-2 h-full bg-brand-blue-light/50 rounded-3xl p-8 border border-brand-blue/15 shadow-lg shadow-brand-blue/8 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 group flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform mb-3 mx-auto md:mx-0">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Rx</h3>
            <p className="text-slate-600 text-base">
              Get valid e-prescriptions instantly after your visit. Print or share with pharmacies.
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="md:col-span-2 h-full bg-brand-purple-light/50 rounded-3xl p-8 border border-brand-purple/15 shadow-lg shadow-brand-purple/8 hover:shadow-xl hover:border-brand-purple/30 transition-all duration-300 group flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-brand-purple-light rounded-xl flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform mb-3 mx-auto md:mx-0">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Family Profiles</h3>
            <p className="text-slate-600 text-base">
              Manage health records for your parents, spouse, and children under one account.
            </p>
          </div>

          {/* Small Card 3 */}
          <div className="md:col-span-2 h-full bg-green-50/50 rounded-3xl p-8 border border-green-200/50 shadow-lg shadow-green-500/5 hover:shadow-xl hover:border-green-300/50 transition-all duration-300 group flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform mb-3 mx-auto md:mx-0">
              <Pill className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Medicine Reminders</h3>
            <p className="text-slate-600 text-base">
              Never miss a dose. Smart reminders keep your treatment plan on track.
            </p>
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
