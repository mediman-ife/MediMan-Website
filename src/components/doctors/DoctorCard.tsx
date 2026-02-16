
'use client';

import { Doctor } from '@/types/doctor';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface DoctorCardProps {
    doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
    const getChargesText = () => {
        const charges = [];
        if (doctor.charges?.onlineCharge?.amount) {
            charges.push(`Online: ${doctor.charges.onlineCharge.currency} ${doctor.charges.onlineCharge.amount}`);
        }
        if (doctor.charges?.clinicCharge?.amount) {
            charges.push(`Clinic: ${doctor.charges.clinicCharge.currency} ${doctor.charges.clinicCharge.amount}`);
        }
        return charges.length > 0 ? charges.join(' | ') : 'Contact for price';
    };

    const router = useRouter();

    const handleCardClick = (e: React.MouseEvent) => {
        // Prevent navigation if the target is a button or link
        if ((e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
            return;
        }
        router.push(`/doctors/${doctor._id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-brand-blue/8 ring-1 ring-brand-blue/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
        >
            {/* Image Section */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                {doctor.profileImage?.signedUrl ? (
                    <Image
                        src={doctor.profileImage.signedUrl}
                        alt={`${doctor.firstName} ${doctor.lastName}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-300">
                        <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                )}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                    {doctor.consultationType.includes("ONLINE") && (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 backdrop-blur-sm">
                            Online
                        </span>
                    )}
                    {doctor.consultationType.includes("CLINIC") && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 backdrop-blur-sm">
                            Clinic
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-5">
                <div className="mb-1 text-xs font-medium uppercase tracking-wider text-brand-blue">
                    {doctor.designation || 'Specialist'}
                </div>
                <h3 className="mb-1 text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-1" title={`${doctor.title?.endsWith('.') ? doctor.title : `${doctor.title}.`} ${doctor.firstName} ${doctor.lastName}`}>
                    {doctor.title?.endsWith('.') ? doctor.title : `${doctor.title}.`} {doctor.firstName} {doctor.lastName}
                </h3>

                {doctor.attachedHospital && (
                    <p className="mb-3 text-sm text-slate-500 line-clamp-1">
                        🏥 {doctor.attachedHospital}
                    </p>
                )}

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col w-full">
                        <span className="text-xs text-slate-400">Consultation Fee</span>
                        <span className="text-sm font-semibold text-slate-700 line-clamp-1" title={getChargesText()}>{getChargesText()}</span>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link href={`/doctors/${doctor._id}`} className="flex items-center justify-center rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100">
                        Profile
                    </Link>
                    <Link href="https://app.mediman.life" target="_blank" className="flex items-center justify-center rounded-xl bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-all hover:bg-brand-dark hover:shadow-brand-blue/40">
                        Book Now
                    </Link>
                </div>

            </div>
        </div>
    );
}
