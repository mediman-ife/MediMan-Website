import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, FileText, Users, Video } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-20"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-red-light rounded-full blur-[120px] opacity-70 -z-10 animate-in fade-in duration-1000"></div>
      <div className="absolute bottom-[-10%] left-[-20%] w-[800px] h-[800px] bg-brand-blue/15 rounded-full blur-[140px] opacity-60 -z-10 animate-pulse duration-[5000ms]"></div>
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-brand-blue-light/50 rounded-full blur-[100px] -z-20"></div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm w-fit mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                Trusted by 10,000+ Patients
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl leading-[1.1]">
              Healthcare. <span className="text-brand-red">Simplified.</span>
            </h1>
            <span className="block max-w-[600px] text-slate-600 text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
              Connect with top specialists, get instant e-prescriptions, and manage your
              family&apos;s health records in one secure, premium app.
            </span>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
              <Link
                href="https://apps.apple.com/us/app/mediman-patient/id6445903276"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="w-[200px] sm:w-auto sm:h-12"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.mediman.life"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-[200px] sm:w-auto sm:h-12"
                />
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="pt-8 flex flex-col items-center lg:items-start gap-3">
              <p className="text-sm text-slate-400 font-medium">SECURE & COMPLIANT</p>
              <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-bold text-slate-700">HIPAA</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span className="font-bold text-slate-700">GDPR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold text-slate-700">SLMC</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative z-10 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
              <Image
                src="/images/hero-mockup.webp"
                alt="MediMan App Interface"
                width={600}
                height={800}
                className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute top-24 -left-4 md:-left-8 z-20 glass-card p-4 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Next appointment</p>
                  <p className="text-sm font-bold text-slate-800">10:00 AM</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-32 -right-2 md:-right-6 z-20 glass-card p-4 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-brand-blue-light p-2 rounded-lg text-brand-blue">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Prescription</p>
                  <p className="text-sm font-bold text-slate-800">Ready to download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
