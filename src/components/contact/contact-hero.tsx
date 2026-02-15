import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function ContactHero() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-white to-brand-purple/5 -z-20"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="container-width px-4 md:px-6 relative z-10">
                <ScrollReveal variant="fade-up">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <span className="inline-block text-brand-blue font-bold tracking-widest text-sm uppercase bg-brand-blue/10 border border-brand-blue/20 px-4 py-1.5 rounded-full shadow-sm">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                            We would love to <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue animate-gradient bg-300%">
                                hear from you.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                            Have a question about MediMan? Our team is ready to answer all your questions.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
