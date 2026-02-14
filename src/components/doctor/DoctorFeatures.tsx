import React from 'react';
import { CalendarClock, Globe, Network } from 'lucide-react';
import { StaggerChildren } from '@/components/ui/ScrollReveal';

// Returning to the original content but with Home Page consistent spacing/dividers
const features = [
  {
    title: 'Smart Scheduling',
    description:
      'Use your free hours for online consultations or manage in-person clinic bookings all in one place, effortlessly.',
    icon: CalendarClock,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Earn Anywhere',
    description:
      'Consult from wherever you are and receive payments securely in LKR or USD from local and overseas patients.',
    icon: Globe,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Connected Care',
    description:
      'Never miss a patient or follow-up. Share digital prescriptions and provide continuous care with ease.',
    icon: Network,
    color: 'bg-green-100 text-green-600',
  },
];

export function DoctorFeatures() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Background Decor - Consistent with Home Page */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-20"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple-light/40 rounded-full blur-[120px] -z-10 opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue-light/40 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none"></div>
      {/* Subtle divider if needed, or rely on padding */}

      <div className="container-width px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-brand-purple font-bold tracking-wider text-xs uppercase bg-brand-purple/5 border border-brand-purple/10 px-4 py-1.5 rounded-full mb-2">
            Why Join MediMan?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Empowering Your Practice
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Tools designed to give you freedom, flexibility, and control over your medical practice.
          </p>
        </div>

        <StaggerChildren className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto" staggerDelay={150}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full flex flex-col items-center md:items-start text-center md:text-left bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-brand-purple/10 hover:-translate-y-1 transition-all duration-300 mb-2"
            >
              <div
                className={`relative z-10 p-3 rounded-xl w-12 h-12 flex items-center justify-center ${feature.color} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ring-1 ring-black/5 mx-auto md:mx-0`}
              >
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-purple transition-colors">
                {feature.title}
              </h3>
              <p className="relative z-10 text-slate-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
