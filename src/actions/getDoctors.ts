'use server';

import { Doctor } from '@/types/doctor';

// Mock Data for now - will be replaced by API call later
const MOCK_DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Vimalan Parameswaran',
    specialty: 'Cardiologist',
    location: 'Jaffna',
    image: '/placeholder-doctor.jpg',
    rating: 4.8,
    reviews: 124,
    available: true,
  },
  {
    id: '2',
    name: 'Dr. Ganeshan Parthiban',
    specialty: 'General Practitioner',
    location: 'Colombo',
    image: '/placeholder-doctor.jpg',
    rating: 4.5,
    reviews: 89,
    available: true,
  },
  {
    id: '3',
    name: 'Dr. Sangeetha Nadarajah',
    specialty: 'Pediatrician',
    location: 'Kandy',
    image: '/placeholder-doctor.jpg',
    rating: 4.9,
    reviews: 210,
    available: true,
  },
  {
    id: '4',
    name: 'Dr. Sundaresan Vignesh',
    specialty: 'Dermatologist',
    location: 'Jaffna',
    image: '/placeholder-doctor.jpg',
    rating: 4.7,
    reviews: 56,
    available: false,
  },
  {
    id: '5',
    name: 'Dr. Ananthi Sivakumar',
    specialty: 'Gynecologist',
    location: 'Batticaloa',
    image: '/placeholder-doctor.jpg',
    rating: 4.6,
    reviews: 112,
    available: true,
  },
  {
    id: '6',
    name: 'Dr. Kamal Raj',
    specialty: 'Neurologist',
    location: 'Colombo',
    image: '/placeholder-doctor.jpg',
    rating: 4.8,
    reviews: 95,
    available: true,
  },
];

export async function getDoctors({
  specialty,
  location,
  query,
}: {
  specialty?: string;
  location?: string;
  query?: string;
} = {}): Promise<Doctor[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filtered = MOCK_DOCTORS;

  if (specialty && specialty !== 'All') {
    filtered = filtered.filter((d) => d.specialty.toLowerCase().includes(specialty.toLowerCase()));
  }

  if (location && location !== 'All') {
    filtered = filtered.filter((d) => d.location.toLowerCase().includes(location.toLowerCase()));
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(
      (d) =>
        d.name.toLowerCase().includes(lowerQuery) ||
        d.specialty.toLowerCase().includes(lowerQuery) ||
        d.location.toLowerCase().includes(lowerQuery)
    );
  }

  return filtered;
}
