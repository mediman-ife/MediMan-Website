import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const steps = [
  {
    number: '1',
    title: 'Onboard',
    description:
      'Download MediMan Doctor App & Signup with your profile and verify credentials. Requirements: Phone No, Email ID, Profile Photo, NIC, Medical Council Registration ID',
  },
  {
    number: '2',
    title: 'Setup',
    description:
      'Set your available timing slots & pre-define weekly templates, consultation fees, and clinic details.',
  },
  {
    number: '3',
    title: 'Approvals',
    description:
      'Await approval. Once your profile is approved you can open booking slots for the upcoming weeks, share your profile to your patients to start getting appointments.',
  },
];

export function DoctorHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-16 md:py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden"
    >
      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue-light/50 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple-light/50 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>

      <div className="container-width px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="inline-block text-brand-purple font-semibold tracking-widest text-xs uppercase bg-brand-purple/10 border border-brand-purple/20 px-4 py-1 rounded-full">
                  Simple Process
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                  How It Works
                </h2>
                <p className="text-lg text-brand-purple font-semibold">
                  Get Started in 3 Easy Steps!
                </p>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-6 rounded-3xl border border-transparent bg-white/50 hover:bg-white hover:border-slate-200 hover:shadow-xl transition-all duration-300 group items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-purple text-white flex items-center justify-center font-bold text-lg shadow-md lg:shadow-brand-purple/30 group-hover:scale-110 transition-transform mt-1">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-purple transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="relative z-10 p-2 bg-white rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ring-1 ring-slate-100">
                <Image
                  src="/images/doctor/how-it-works.webp"
                  alt="How MediMan Doctor App Works"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              {/* Back Blob */}
              <div className="absolute inset-0 bg-brand-purple-light/60 blur-3xl -z-10 transform scale-110 rounded-full" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
