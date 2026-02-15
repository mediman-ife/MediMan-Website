import { Doctor } from '@/types/doctor';
import DoctorCard from './DoctorCard';
import DoctorCardSkeleton from './DoctorCardSkeleton'; // Import the new skeleton

interface DoctorsGridProps {
    doctors: Doctor[];
    isLoading: boolean;
}

export default function DoctorsGrid({ doctors, isLoading }: DoctorsGridProps) {
    if (isLoading) {
        return (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <DoctorCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    if (doctors.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50/50 py-24 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-4xl">
                    🩺
                </div>
                <h3 className="text-lg font-bold text-slate-900">No doctors found</h3>
                <p className="text-slate-500 max-w-sm mt-2">
                    We couldn&apos;t find any doctors matching your current filters. Try adjusting your search or clearing some filters.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
        </div>
    );
}
