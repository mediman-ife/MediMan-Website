'use client';

import { FilterConstants } from '@/types/doctor';

interface DoctorFiltersProps {
    filters?: FilterConstants;
    selectedFilters: any;
    onFilterChange: (newFilters: any) => void;
    isLoading: boolean;
}

export default function DoctorFilters({ filters, selectedFilters, onFilterChange, isLoading }: DoctorFiltersProps) {
    console.log('DoctorFilters filters:', filters);
    console.log('DoctorFilters filters.clinics:', filters?.clinics);

    const handleCheckboxChange = (category: string, value: string) => {
        const currentValues = selectedFilters[category] || [];
        const newValues = currentValues.includes(value)
            ? currentValues.filter((item: string) => item !== value)
            : [...currentValues, value];

        onFilterChange({ ...selectedFilters, [category]: newValues });
    };

    if (isLoading) return (
        <div className="animate-pulse space-y-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-3">
                    <div className="h-4 w-1/3 bg-slate-200 rounded"></div>
                    <div className="space-y-2">
                        <div className="h-8 bg-slate-100 rounded"></div>
                        <div className="h-8 bg-slate-100 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    const CheckboxItem = ({
        label,
        checked,
        onChange,
        count
    }: {
        label: string;
        checked: boolean;
        onChange: () => void;
        count?: number;
    }) => (
        <label className="flex items-center gap-3 cursor-pointer group py-1">
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
            <span className={`text-[15px] font-medium transition-colors ${checked ? 'text-brand-blue' : 'text-slate-600 group-hover:text-slate-900'}`}>
                {label}
            </span>
            {count !== undefined && (
                <span className="ml-auto text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                    {count}
                </span>
            )}
        </label>
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
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
