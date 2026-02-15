'use client';

import { Suspense } from 'react';
import { useDoctorProfile } from '@/services/api';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Video, Stethoscope, Star, Globe, DollarSign, ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

function DoctorProfileContent() {
    const params = useParams();
    const id = params.id as string;
    const { doctor, isLoading, isError } = useDoctorProfile(id);

    if (isLoading) {
        return (
            <div className="flex h-[60vh] w-full items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-brand-blue"></div>
                    <p className="text-slate-500 font-medium">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (isError || !doctor) {
        return (
            <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-4 text-center">
                <div className="bg-red-50 p-4 rounded-full">
                    <Stethoscope className="h-12 w-12 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Doctor Not Found</h2>
                <p className="text-slate-500 max-w-md">We couldn&apos;t retrieve this doctor&apos;s information. They may have been removed or the link is incorrect.</p>
                <Link href="/doctors" className="mt-4 rounded-full bg-slate-900 px-6 py-2.5 font-medium text-white transition-colors hover:bg-slate-800">
                    Back to Doctors
                </Link>
            </div>
        );
    }

    // Determine charges text
    const getOnlineCharge = () => {
        if (doctor.charges?.onlineCharge?.amount) {
            return `${doctor.charges.onlineCharge.currency} ${doctor.charges.onlineCharge.amount}`;
        }
        return 'N/A';
    };

    const getClinicCharge = () => {
        if (doctor.charges?.clinicCharge?.amount) {
            return `${doctor.charges.clinicCharge.currency} ${doctor.charges.clinicCharge.amount}`;
        }
        return 'N/A';
    };

    return (
        <div className="animate-in fade-in zoom-in-95 duration-500">
            {/* Breadcrumb / Back */}
            <div className="mb-6">
                <Link href="/doctors" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-blue">
                    <div className="rounded-full p-1 group-hover:bg-blue-50 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                    </div>
                    Back to Find Doctors
                </Link>
            </div>

            {/* Profile Header Card */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200/60 mb-8">
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-100"></div>
                <div className="px-6 pb-6 lg:px-10">
                    <div className="relative flex flex-col items-center lg:flex-row lg:items-end lg:gap-8 -mt-16 sm:-mt-20 lg:-mt-12">
                        {/* Profile Image */}
                        <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-2xl border-4 border-white shadow-md bg-white">
                            {doctor.profileImage?.signedUrl ? (
                                <Image
                                    src={doctor.profileImage.signedUrl}
                                    alt={`${doctor.firstName} ${doctor.lastName}`}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-300">
                                    <Stethoscope className="h-16 w-16" />
                                </div>
                            )}
                        </div>

                        {/* Name and Title */}
                        <div className="mt-4 flex-1 text-center lg:text-left lg:pb-2">
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                                    {doctor.title} {doctor.firstName} {doctor.lastName}
                                </h1>
                                <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">
                                    VERIFIED
                                </span>
                            </div>
                            <p className="text-lg font-medium text-brand-blue">{doctor.designation || 'Specialist'}</p>
                            {doctor.attachedHospital && (
                                <p className="text-slate-500 mt-1 flex items-center justify-center lg:justify-start gap-1.5">
                                    <MapPin className="h-4 w-4" />
                                    {doctor.attachedHospital}
                                </p>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:w-auto lg:pb-3">
                            <a
                                href="https://app.mediman.life"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-none items-center justify-center rounded-xl bg-brand-blue px-8 py-3 font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all hover:bg-brand-dark hover:shadow-brand-blue/40 transform active:scale-95"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Stats & Info */}
                <div className="space-y-6">
                    {/* Quick Stats */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/60">
                        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-500" />
                            Overview
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Experience</span>
                                <span className="text-lg font-semibold text-slate-900">{doctor.experience || 0} Years</span>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Gender</span>
                                <span className="text-lg font-semibold text-slate-900">{doctor.gender || 'Unknown'}</span>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Languages</span>
                                <span className="text-sm font-semibold text-slate-900 truncate" title={doctor.languages?.join(', ')}>
                                    {doctor.languages?.join(', ') || 'English'}
                                </span>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Country</span>
                                <span className="text-lg font-semibold text-slate-900 flex items-center gap-1">
                                    <Globe className="h-4 w-4 text-slate-400" />
                                    {doctor.country || 'LK'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Consultation Fees */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/60">
                        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-green-600" />
                            Consultation Fees
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-green-50/50 border border-green-100/50">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <Video className="h-5 w-5 text-green-700" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900">Online Video</p>
                                        <p className="text-xs text-slate-500">{doctor.charges?.onlineSlotDuration || 15} mins</p>
                                    </div>
                                </div>
                                <span className="font-bold text-green-700">{getOnlineCharge()}</span>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/50 border border-blue-100/50">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <MapPin className="h-5 w-5 text-blue-700" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900">Clinic Visit</p>
                                        <p className="text-xs text-slate-500">{doctor.charges?.clinicSlotDuration || 15} mins</p>
                                    </div>
                                </div>
                                <span className="font-bold text-blue-700">{getClinicCharge()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* About */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/60">
                        <h3 className="font-semibold text-slate-900 mb-4 text-lg">About Dr. {doctor.lastName}</h3>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                            <p>{doctor.about || "No biography available."}</p>
                        </div>
                    </div>

                    {/* Services */}
                    {doctor.service && doctor.service.length > 0 && (
                        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/60">
                            <h3 className="font-semibold text-slate-900 mb-4 text-lg">Specializations & Services</h3>
                            <div className="flex flex-wrap gap-2">
                                {doctor.service.map((item, index) => (
                                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function DoctorProfilePage() {
    return (
        <div className="min-h-screen bg-slate-50/50 font-sans">
            <main className="container-width py-8 lg:py-12">
                <Suspense fallback={
                    <div className="flex h-[60vh] w-full items-center justify-center">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-brand-blue"></div>
                    </div>
                }>
                    <DoctorProfileContent />
                </Suspense>
            </main>
        </div>
    );
}
