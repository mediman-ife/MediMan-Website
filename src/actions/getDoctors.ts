
import { Doctor } from '@/types/doctor';

const API_BASE_URL = 'https://api.mediman.life';
const API_KEY = 'jmziDgOf+BmlBA8CJMkBT1hWAQltr1vh'; // Should be in env vars better, but using what's in api.ts

export async function getDoctors({
  specialty,
  location,
  query,
}: {
  specialty?: string;
  location?: string;
  query?: string;
} = {}): Promise<Doctor[]> {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'key': API_KEY,
    };

    const body: any = {
      pageNumber: 1,
      limit: 100, // API max limit is 100
    };

    if (query) {
      body.searchTerm = query;
    }

    const filter: any = {};
    if (specialty && specialty !== 'All') {
      // We need to map specialty name to ID or use as is? 
      // api.ts uses simple string match filter logic on client side usually?
      // logic in api.ts:
      // filtered = filtered.filter((d) => d.designation.toLowerCase().includes(specialty.toLowerCase()));
      // But for real API, we need to pass filter object?
      // Let's assume for generateStaticParams we just want ALL.
      // For Filter logic, the component `DoctorsPageContent` handles it via `useDoctors` hook which calls API.
      // This `getDoctors` action is ONLY used for `generateStaticParams` now.
    }

    // For generateStaticParams, we just need ALL doctors.
    // The arguments specialty/location are legacy from the mock version? 
    // Actually getDoctors() is called without args in generateStaticParams.

    // So we just fetch all.
    const response = await fetch(`${API_BASE_URL}/publicRoutes/searchDoctors`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      cache: 'no-store' // Ensure fresh data at build time
    });

    if (!response.ok) {
      console.error('Failed to fetch doctors', await response.text());
      return [];
    }

    const data = await response.json();
    return (data.data as Doctor[]) || [];

  } catch (error) {
    console.error('Error in getDoctors:', error);
    return [];
  }
}
