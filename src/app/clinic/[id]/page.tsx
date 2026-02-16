
import React from 'react';
import ClinicProfileClient from '@/components/doctors/ClinicProfileClient';

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
    try {
        const response = await fetch('https://api.mediman.life/publicRoutes/getAllClinics', {
            headers: {
                'key': 'jmziDgOf+BmlBA8CJMkBT1hWAQltr1vh'
            }
        });

        if (!response.ok) {
            console.error('Failed to fetch clinics for static params');
            return [];
        }

        const data = await response.json();
        const clinics = data.data || [];

        return clinics.map((clinic: any) => ({
            id: clinic._id,
        }));
    } catch (error) {
        console.error('Error generating static params for clinics:', error);
        return [];
    }
}

export default async function ClinicProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    return <ClinicProfileClient id={resolvedParams.id} />;
}
