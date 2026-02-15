import { DoctorFilters } from '@/components/doctors/doctor-filters';
import { DoctorsGrid } from '@/components/doctors/doctors-grid';
import { getDoctors } from '@/actions/getDoctors';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface DoctorsPageProps {
  searchParams: Promise<{
    specialty?: string;
    location?: string;
    query?: string;
  }>;
}

export async function generateMetadata({ searchParams }: DoctorsPageProps): Promise<Metadata> {
  const params = await searchParams;
  const specialty = params.specialty || 'Doctors';
  const location = params.location ? `in ${params.location}` : '';

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

        <main>
          <DoctorsGrid doctors={doctors} />
        </main>
      </div>
    </div>
  );
}
