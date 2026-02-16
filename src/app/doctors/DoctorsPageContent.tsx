'use client';

import { useState, useEffect } from 'react';
import { useDoctors } from '@/services/api';
import DoctorFilters from '@/components/doctors/DoctorFilters';
import DoctorsGrid from '@/components/doctors/DoctorsGrid';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { FilterConstants, Service, Language, Clinic } from '@/types/doctor';

interface DoctorsPageContentProps {
    initialFilters: FilterConstants | undefined;
    initialServices: Service[] | undefined;
    initialLanguages: Language[] | undefined;
    initialClinics: Clinic[] | undefined;
}

export default function DoctorsPageContent({ initialFilters, initialServices, initialLanguages, initialClinics }: DoctorsPageContentProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Parse URL params
    const initialPage = Number(searchParams.get('page')) || 1;
    const initialSearch = searchParams.get('search') || '';
    const initialGenders = searchParams.getAll('gender');
    const initialTypes = searchParams.getAll('type');
    const initialServicesParams = searchParams.getAll('service');
    const initialLanguagesParams = searchParams.getAll('language');

    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [page, setPage] = useState(initialPage);
    const [selectedFilters, setSelectedFilters] = useState({
        gender: initialGenders,
        consultationType: initialTypes,
        service: initialServicesParams,
        languages: initialLanguagesParams
    });

    const combinedFilters = {
        ...initialFilters,
        genders: initialFilters?.genders || [],
        consultationTypes: initialFilters?.consultationTypes || [],
        services: initialServices || [],
        languages: initialLanguages || [],
        clinics: initialClinics || []
    };

    // Fetch doctors
    const { doctors, pagination, isLoading: doctorsLoading } = useDoctors({
        pageNumber: page,
        limit: 9,
        searchTerm: searchTerm,
        filter: {
            gender: selectedFilters.gender.length > 0 ? selectedFilters.gender : undefined,
            consultationType: selectedFilters.consultationType.length > 0 ? selectedFilters.consultationType : undefined,
            service: selectedFilters.service.length > 0 ? selectedFilters.service : undefined,
            languages: selectedFilters.languages.length > 0 ? selectedFilters.languages : undefined,
        }
    });

    // Update URL on filter change
    useEffect(() => {
        const params = new URLSearchParams();
        if (searchTerm) params.set('search', searchTerm);
        if (page > 1) params.set('page', page.toString());

        selectedFilters.gender.forEach(g => params.append('gender', g));
        selectedFilters.consultationType.forEach(t => params.append('type', t));
        selectedFilters.service.forEach(s => params.append('service', s));
        selectedFilters.languages.forEach(l => params.append('language', l));

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [searchTerm, page, selectedFilters, router, pathname]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1); // Reset to page 1 on search
    };

    const handleFilterChange = (newFilters: {
        gender: string[];
        consultationType: string[];
        service: string[];
        languages: string[];
    }) => {
        setSelectedFilters({
            ...newFilters
        });
        setPage(1); // Reset to page 1 on filter change
    };

    const clearFilters = () => {
        setSelectedFilters({
            gender: [],
            consultationType: [],
            service: [],
            languages: []
        });
        setSearchTerm('');
        setPage(1);
    };

    return (
        <>
            <main className="min-h-screen bg-slate-50 pb-20 pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-10 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Find Your <span className="text-brand-blue">Specialist</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600">
                            Connect with top-rated doctors for online consultations or in-person visits.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mx-auto mb-12 max-w-2xl">
                        <form onSubmit={handleSearch} className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search by doctor name..."
                                className="w-full rounded-2xl border-0 bg-white py-4 pl-12 pr-4 shadow-lg shadow-brand-blue/5 ring-1 ring-slate-200 transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-brand-blue"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="pointer-events-none absolute left-4 text-slate-400">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <button type="submit" className="absolute right-2 rounded-xl bg-brand-blue px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-dark">
                                Search
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col gap-8 lg:flex-row">
                        {/* Filters Sidebar */}
                        <aside className="w-full flex-none lg:w-64">
                            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-slate-900">Filters</h2>
                                    <button onClick={clearFilters} className="text-sm text-brand-blue hover:text-brand-dark hover:underline">
                                        Reset
                                    </button>
                                </div>
                                <DoctorFilters
                                    filters={combinedFilters}
                                    selectedFilters={selectedFilters}
                                    onFilterChange={handleFilterChange}
                                    isLoading={false} // Data is pre-fetched via SSR
                                />
                            </div>
                        </aside>

                        {/* Content Grid */}
                        <div className="flex-1">
                            <div className="mb-6 flex items-center justify-between">
                                <p className="text-slate-500">
                                    Showing <span className="font-semibold text-slate-900">{doctors.length}</span> results
                                    {pagination?.totalAvailable && ` of ${pagination.totalAvailable}`}
                                </p>
                            </div>

                            <DoctorsGrid doctors={doctors} isLoading={doctorsLoading} />

                            {/* Pagination */}
                            {pagination && pagination.totalAvailable > pagination.pageSize && (
                                <div className="mt-10 flex justify-center gap-2">
                                    <button
                                        disabled={page === 1}
                                        onClick={() => setPage(p => Math.max(1, p - 1))}
                                        className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    <span className="flex items-center px-4 py-2 text-sm font-semibold text-brand-blue bg-blue-50 rounded-lg border border-blue-100">
                                        Page {page}
                                    </span>
                                    <button
                                        disabled={doctors.length < pagination.pageSize} // simplistic check
                                        onClick={() => setPage(p => p + 1)}
                                        className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
