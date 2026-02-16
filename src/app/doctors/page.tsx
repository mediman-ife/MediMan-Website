import { Suspense } from 'react';
import DoctorsPageContent from './DoctorsPageContent';
import { FilterConstants, Service, Language, Clinic } from '@/types/doctor';

const API_BASE_URL = 'https://api.mediman.life';
const API_KEY = 'jmziDgOf+BmlBA8CJMkBT1hWAQltr1vh';

async function getFilterConstants(): Promise<FilterConstants | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/publicRoutes/getFilterConstants`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'key': API_KEY },
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!res.ok) return undefined;
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching filter constants:', error);
    return undefined;
  }
}

async function getAllServices(): Promise<Service[] | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/publicRoutes/getAllServices`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'key': API_KEY },
      next: { revalidate: 3600 }
    });
    if (!res.ok) return undefined;
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return undefined;
  }
}

async function getAllLanguages(): Promise<Language[] | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/publicRoutes/getAllLanguages`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'key': API_KEY },
      next: { revalidate: 3600 }
    });
    if (!res.ok) return undefined;
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching languages:', error);
    return undefined;
  }
}


async function getAllClinics(): Promise<Clinic[] | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/publicRoutes/getAllClinics`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'key': API_KEY },
      next: { revalidate: 3600 }
    });
    if (!res.ok) return undefined;
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching clinics:', error);
    return undefined;
  }
}

export default async function DoctorsPage() {
  // Parallel fetching of filter data
  const [filterConstants, services, languages, clinics] = await Promise.all([
    getFilterConstants(),
    getAllServices(),
    getAllLanguages(),
    getAllClinics(),
  ]);

  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 pt-32 text-center">Loading...</div>}>
      <DoctorsPageContent
        initialFilters={filterConstants}
        initialServices={services}
        initialLanguages={languages}
        initialClinics={clinics}
      />
    </Suspense>
  );
}
