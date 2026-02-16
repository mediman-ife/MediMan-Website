'use client';

import React, { useEffect, useState } from 'react';
import { useDoctors } from '@/services/api';
import { Doctor } from '@/types/doctor';
import DoctorCard from '@/components/doctors/DoctorCard';
import { BackgroundGlow } from '@/components/ui/background-glow';
import { ScrollReveal, StaggerChildren } from '@/components/ui/scroll-reveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeaturedDoctors() {
    const { doctors, isLoading } = useDoctors({
        pageNumber: 1,
        limit: 50, // Fetch a pool of doctors to randomize from
    });

    const [randomDoctors, setRandomDoctors] = useState<Doctor[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (doctors && doctors.length > 0) {
            // Shuffle and pick 5
            const shuffled = [...doctors].sort(() => 0.5 - Math.random());
            setRandomDoctors(shuffled.slice(0, 5));
        }
    }, [doctors]);

    // Prevent hydration mismatch for random content
    if (!mounted) return null;

    if (isLoading || randomDoctors.length === 0) {
        return null; // Or a skeleton if preferred, but for homepage sections clean loading is often better or specific skeleton
    }

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50/50">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[100px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal variant="fade-up">
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block text-brand-blue font-semibold tracking-widest text-xs uppercase bg-brand-blue/10 border border-brand-blue/20 px-4 py-1 rounded-full">
                            Expert Care
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            Meet Our Specialists
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Connect with verified doctors from top hospitals. Top-tier care, available anytime.
                        </p>
                    </div>
                </ScrollReveal>

                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" staggerDelay={100}>
                    {randomDoctors.map((doctor) => (
                        <div key={doctor._id} className="h-full">
                            <DoctorCard doctor={doctor} hideProfileButton={true} />
                        </div>
                    ))}
                </StaggerChildren>

                <div className="mt-12 text-center">
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-dark transition-colors group"
                    >
                        View All Doctors
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
