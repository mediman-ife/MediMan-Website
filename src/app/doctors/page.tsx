
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { DoctorFilters } from "@/components/doctors/DoctorFilters";
import { getDoctors } from "@/actions/getDoctors";
import { Suspense } from "react";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface DoctorsPageProps {
    searchParams: Promise<{
        specialty?: string;
        location?: string;
        query?: string;
    }>;
}

export async function generateMetadata({ searchParams }: DoctorsPageProps): Promise<Metadata> {
    const params = await searchParams;
    const specialty = params.specialty || "Doctors";
    const location = params.location ? `in ${params.location}` : "";

    return {
        title: `Best ${specialty} ${location} | MediMan`,
        description: `Find top rated ${specialty} ${location}. Book video consultations or in-clinic appointments on MediMan.`,
    };
}

export default async function DoctorsPage({ searchParams }: DoctorsPageProps) {
    const params = await searchParams;
    const doctors = await getDoctors(params);

    return (
        <div className="container py-8 md:py-12">
            <ScrollReveal variant="fade-up">
                <div className="flex flex-col gap-4 mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Find Your Doctor</h1>
                    <p className="text-muted-foreground w-1/2">
                        Search, filter, and book appointments with trusted healthcare professionals.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
                <ScrollReveal variant="fade-right">
                    <aside className="sticky top-24">
                        <Suspense fallback={<div>Loading filters...</div>}>
                            <DoctorFilters />
                        </Suspense>
                    </aside>
                </ScrollReveal>

                <ScrollReveal variant="fade-up" delay={150}>
                    <main>
                        {doctors.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {doctors.map((doctor) => (
                                    <DoctorCard key={doctor.id} doctor={doctor} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-muted/20 rounded-lg">
                                <h3 className="text-lg font-semibold">No doctors found</h3>
                                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                            </div>
                        )}
                    </main>
                </ScrollReveal>
            </div>
        </div>
    );
}
