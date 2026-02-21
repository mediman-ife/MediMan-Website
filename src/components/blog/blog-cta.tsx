"use client";

import Link from 'next/link';
import Image from 'next/image';

export function BlogCTA() {
    return (
        <section className="py-12 relative overflow-hidden my-12 max-w-5xl mx-auto px-4 md:px-0">
            <div className="rounded-3xl bg-gradient-to-br from-brand-blue via-[#103E99] to-brand-blue-dark p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-brand-blue/20 ring-1 ring-white/10 isolate">
                {/* Background Patterns */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-light/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                            Ready to take control of your health?
                        </h2>
                        <span className="block text-lg text-blue-100/90 max-w-lg mx-auto md:mx-0">
                            Download the MediMan app today and consult with top doctors anytime, anywhere.
                        </span>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="https://play.google.com/store/apps/details?id=com.mediman.life"
                                target="_blank"
                                className="hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src="/images/google-play.png"
                                    alt="Get it on Google Play"
                                    className="h-12 w-auto"
                                />
                            </Link>
                            <Link
                                href="https://apps.apple.com/us/app/mediman-patient/id6445903276"
                                target="_blank"
                                className="hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src="/images/app-store.png"
                                    alt="Download on the App Store"
                                    className="h-12 w-auto"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-brand-blue/30 blur-[40px] rounded-full scale-110 pointer-events-none"></div>
                        <Image
                            src="/images/mobile-app-mockup.png"
                            alt="MediMan App"
                            width={200}
                            height={400}
                            className="w-48 md:w-56 drop-shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
