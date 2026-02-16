'use client';

import { FilterConstants } from '@/types/doctor';

interface SelectedFilters {
    gender: string[];
    consultationType: string[];
    service: string[];
    languages: string[];
    clinic: string[];

    [key: string]: string[]; // allow index access
}

interface DoctorFiltersProps {
    filters?: FilterConstants;
    selectedFilters: SelectedFilters;
    onFilterChange: (newFilters: SelectedFilters) => void;
    isLoading: boolean;
}

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

// ... (existing interfaces)

export default function DoctorFilters({ filters, selectedFilters, onFilterChange, isLoading }: DoctorFiltersProps) {

    const handleCheckboxChange = (key: keyof SelectedFilters, value: string) => {
        const currentValues = selectedFilters[key] || [];
        const newValues = currentValues.includes(value)
            ? currentValues.filter((v) => v !== value)
            : [...currentValues, value];

        onFilterChange({
            ...selectedFilters,
            [key]: newValues,
        });
    };

    const CheckboxItem = ({
        label,
        checked,
        onChange,
        count,
        profileId
    }: {
        label: string;
        checked: boolean;
        onChange: () => void;
        count?: number;
        profileId?: string;
    }) => (
        <div className="flex items-center justify-between group py-1">
            <label className="flex items-center gap-3 cursor-pointer flex-1">
                <div className="relative flex items-center justify-center h-5 w-5 shrink-0">
                    <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={checked}
                        onChange={onChange}
                    />
                    <div className="absolute inset-0 rounded-[6px] border-2 border-slate-300 bg-white transition-all duration-200 peer-checked:border-brand-blue peer-checked:bg-brand-blue group-hover:border-brand-blue/60 peer-focus:ring-2 peer-focus:ring-brand-blue/20 shadow-sm"></div>
                    <svg
                        className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-all duration-200 transform peer-checked:scale-100 scale-50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <span className={`text-[15px] font-medium transition-colors ${checked ? 'text-brand-blue' : 'text-slate-600 group-hover:text-slate-900'} line-clamp-1`}>
                    {label}
                </span>
            </label>

            <div className="flex items-center gap-2">
                {profileId && (
                    <Link
                        href={`/clinic/${profileId}`}
                        className="p-1.5 text-slate-400 hover:text-brand-blue hover:bg-blue-50 rounded-md transition-all"
                        title="View Clinic Profile"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                )}

                {count !== undefined && (
                    <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                        {count}
                    </span>
                )}
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            {/* Consultation Type */}
            <div className="pb-6 border-b border-slate-100">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">Consultation Type</h3>
                <div className="space-y-2">
                    {(filters?.consultationTypes || []).map((type) => (
                        <CheckboxItem
                            key={type}
                            label={type === 'ONLINE' ? 'Online Video Call' : 'In-Person Clinic'}
                            checked={(selectedFilters.consultationType || []).includes(type)}
                            onChange={() => handleCheckboxChange('consultationType', type)}
                        />
                    ))}
                </div>
            </div>

            {/* Gender */}
            <div className="pb-6 border-b border-slate-100">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">Gender</h3>
                <div className="space-y-2">
                    {(filters?.genders || []).map((gender) => (
                        <CheckboxItem
                            key={gender}
                            label={gender}
                            checked={(selectedFilters.gender || []).includes(gender)}
                            onChange={() => handleCheckboxChange('gender', gender)}
                        />
                    ))}
                </div>
            </div>

            {/* Specialty */}
            {filters?.services && filters.services.length > 0 && (
                <div className="pb-6 border-b border-slate-100">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">Specialty</h3>
                    <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent hover:scrollbar-thumb-slate-300">
                        {filters.services.map((service) => (
                            <CheckboxItem
                                key={service._id}
                                label={service.name}
                                checked={(selectedFilters.service || []).includes(service._id)}
                                onChange={() => handleCheckboxChange('service', service._id)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Languages */}
            {filters?.languages && filters.languages.length > 0 && (
                <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">Language</h3>
                    <div className="space-y-2">
                        {filters.languages.map((language) => (
                            <CheckboxItem
                                key={typeof language === 'string' ? language : (language as any)._id}
                                label={typeof language === 'string' ? language : (language as any).name}
                                checked={(selectedFilters.languages || []).includes(typeof language === 'string' ? language : (language as any).name)}
                                onChange={() => handleCheckboxChange('languages', typeof language === 'string' ? language : (language as any).name)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Clinics */}
            {filters?.clinics && filters.clinics.length > 0 && (
                <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">Clinics (Hospitals)</h3>
                    <div className="space-y-1 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent hover:scrollbar-thumb-slate-300">
                        {filters.clinics.map((clinic) => (
                            <CheckboxItem
                                key={clinic._id}
                                label={clinic.clinicName}
                                checked={(selectedFilters.clinic || []).includes(clinic._id)}
                                onChange={() => handleCheckboxChange('clinic', clinic._id)}
                                profileId={clinic._id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
