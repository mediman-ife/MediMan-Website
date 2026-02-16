import { getDoctors } from '@/actions/getDoctors';
import DoctorProfileClient from './DoctorProfileClient';
import { Suspense } from 'react';
import { BackgroundGlow } from '@/components/ui/background-glow';

export async function generateStaticParams() {
    const doctors = await getDoctors();
    return doctors.map((doctor) => ({
        id: doctor._id,
    }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // ...

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
            <BackgroundGlow />
            <main className="container-width py-8 lg:py-12 relative z-10">
                <Suspense fallback={
                    <div className="flex h-[60vh] w-full items-center justify-center">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-brand-blue"></div>
                    </div>
                }>
                    <DoctorProfileClient id={id} />
                </Suspense>
            </main>
        </div>
    );
}
