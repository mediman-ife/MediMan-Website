'use client';

import React from 'react';
import { useClinic, useDoctors } from '@/services/api';
import DoctorCard from '@/components/doctors/DoctorCard';
import { MapPin, Phone, Mail, Building2, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ClinicProfileClientProps {
    id: string;
}

export default function ClinicProfileClient({ id }: ClinicProfileClientProps) {
    const { clinic, isLoading: clinicLoading, isError: clinicError } = useClinic(id);
    const { doctors, isLoading: doctorsLoading } = useDoctors({
        pageNumber: 1,
        limit: 100, // Fetch all for now
        filter: {
            clinic: [id]
        }
    });

    if (clinicLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-brand-blue"></div>
            </div>
        );
    }

    if (clinicError || !clinic) {
        return (
            <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold text-slate-800">Clinic Not Found</h2>
                <Link href="/doctors" className="text-brand-blue hover:underline">Back to Doctors</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-8">
                    <Link href="/doctors" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-blue mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Find Doctors
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="h-32 w-32 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border border-slate-200 overflow-hidden shadow-sm">
                            {clinic.logo?.fileUrl || clinic.logo?.signedUrl ? (
                                <img
                                    src={clinic.logo.signedUrl || clinic.logo.fileUrl}
                                    alt={clinic.clinicName}
                                    className="h-full w-full object-contain p-2"
                                />
                            ) : (
                                <Building2 className="h-16 w-16 text-slate-300" />
                            )}
                        </div>

                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">{clinic.clinicName}</h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-slate-600">
                                {clinic.clinicAddress && (
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                                        <span>{clinic.clinicAddress}</span>
                                    </div>
                                )}

                                {clinic.customerPhoneNumber && (
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-brand-blue shrink-0" />
                                        <a href={`tel:${clinic.customerPhoneNumber}`} className="hover:text-brand-blue transition-colors">
                                            {clinic.customerPhoneNumber}
                                        </a>
                                    </div>
                                )}

                                {clinic.email && (
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                                        <a href={`mailto:${clinic.email}`} className="hover:text-brand-blue transition-colors">
                                            {clinic.email}
                                        </a>
                                    </div>
                                )}

                                {clinic.hospitalFee && (
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center h-5 w-5 rounded-full bg-brand-blue/10 shrink-0">
                                            <span className="text-brand-blue text-xs font-bold">{clinic.hospitalFee.currency === 'LKR' ? 'Rs' : '$'}</span>
                                        </div>
                                        <span className="font-medium">
                                            Hospital Fee: {clinic.hospitalFee.amount} {clinic.hospitalFee.currency}
                                        </span>
                                    </div>
                                )}

                                {clinic.clinicLocation && (
                                    <div className="flex items-center gap-3 md:col-span-2">
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${clinic.clinicLocation.latitude},${clinic.clinicLocation.longitude}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-brand-blue hover:underline bg-brand-blue/5 px-3 py-1.5 rounded-lg transition-colors border border-brand-blue/10"
                                        >
                                            <MapPin className="h-4 w-4" />
                                            View on Google Maps
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Doctors Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex items-center gap-3 mb-8">
                    <Calendar className="h-6 w-6 text-brand-blue" />
                    <h2 className="text-2xl font-bold text-slate-900">Available Doctors</h2>
                    <span className="bg-brand-blue/10 text-brand-blue text-sm font-semibold px-3 py-1 rounded-full">
                        {doctors.length}
                    </span>
                </div>

                {doctorsLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-[380px] bg-white rounded-2xl animate-pulse border border-slate-100"></div>
                        ))}
                    </div>
                ) : doctors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {doctors.map((doctor) => (
                            <DoctorCard key={doctor._id} doctor={doctor} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 mb-4">
                            <Building2 className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">No Doctors Available</h3>
                        <p className="text-slate-500">There are currently no doctors scheduled at this clinic.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
