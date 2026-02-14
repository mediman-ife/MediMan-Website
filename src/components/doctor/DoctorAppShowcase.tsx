import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function DoctorAppShowcase() {
    return (
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container-width px-4 md:px-6">
                <ScrollReveal variant="scale-in" width="100%">
                    <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-blue/10 bg-slate-50 ring-1 ring-slate-200/50">
                        <Image
                            src="/images/doctor/hero-bg.webp"
                            alt="Everything You Need in One Smart Health App"
                            width={1800}
                            height={1000}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </ScrollReveal>
            </div>

            {/* Background Glows for consistency */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-blue-light/20 rounded-full blur-[140px] -z-10 pointer-events-none opacity-50"></div>
        </section>
    );
}
