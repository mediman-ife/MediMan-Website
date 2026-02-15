import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Video, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function CareSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-white -z-20"></div>
      <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-brand-light/80 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-purple-light/60 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fade-right">
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-block text-brand-red font-semibold tracking-widest text-xs uppercase bg-brand-red/10 border border-brand-red/20 px-4 py-1 rounded-full">
                Global Access
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-3">
                Care without borders. <br />
                <span className="text-brand-red">For everyone.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-medium">
                Next-gen telehealth for real world needs.
              </p>
              <div className="space-y-4 text-slate-600">
                <p>
                  No one should spend a whole day for a 5 minute medical discussion. Traffic,
                  queues, long waits while the patient gets weaker. MediMan connects you to trusted
                  specialists worldwide, instantly.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <ul className="space-y-3 pt-2 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span>Verified doctors, wherever you are.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-blue-light flex items-center justify-center text-brand-blue">
                        <Video className="w-4 h-4" />
                      </div>
                      <span>Video/Audio and secure e-prescriptions.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-purple-light flex items-center justify-center text-brand-purple">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span>Fast booking, reminders, follow ups, and safe medical records.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-6 text-center lg:text-left">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.mediman.life"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-brand-red hover:bg-brand-red-dark text-white rounded-full text-base font-semibold shadow-lg shadow-brand-red/20 transition-all hover:scale-105"
                  >
                    Download Now
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={200}>
            <div className="relative">
              <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-50 rounded-[3rem] -z-10 rotate-3"></div>
              <div className="relative rounded-3xl shadow-xl z-10 w-full overflow-hidden">
                <Image
                  src="/images/care-family.png"
                  alt="Family Care - Healthcare for everyone"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover scale-[1.02] origin-center"
                />
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-light rounded-full blur-2xl z-0"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
