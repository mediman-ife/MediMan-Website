'use server';

import { Doctor } from '@/types/doctor';

// Mock Data for now - will be replaced by API call later
const MOCK_DOCTORS: Doctor[] = [
  {
    _id: '1',
    firstName: 'Vimalan',
    lastName: 'Parameswaran',
    title: 'Dr.',
    designation: 'Cardiologist',
    country: 'Jaffna',
    consultationType: ['CLINIC', 'ONLINE'],
    profileImage: { signedUrl: '/placeholder-doctor.jpg' },
    averageRating: 4.8,
    consultationAvailable: true,
  } as unknown as Doctor,
  {
    _id: '2',
    firstName: 'Ganeshan',
    lastName: 'Parthiban',
    title: 'Dr.',
    designation: 'General Practitioner',
    country: 'Colombo',
    consultationType: ['CLINIC'],
    profileImage: { signedUrl: '/placeholder-doctor.jpg' },
    averageRating: 4.5,
    consultationAvailable: true,
  } as unknown as Doctor,
  {
    _id: '3',
    firstName: 'Sangeetha',
    lastName: 'Nadarajah',
    title: 'Dr.',
    designation: 'Pediatrician',
    country: 'Kandy',
    consultationType: ['CLINIC', 'ONLINE'],
    profileImage: { signedUrl: '/placeholder-doctor.jpg' },
    averageRating: 4.9,
    consultationAvailable: true,
  } as unknown as Doctor,
  {
    _id: '4',
    firstName: 'Sundaresan',
    lastName: 'Vignesh',
    title: 'Dr.',
    designation: 'Dermatologist',
    country: 'Jaffna',
    consultationType: [],
    profileImage: { signedUrl: '/placeholder-doctor.jpg' },
    averageRating: 4.7,
    consultationAvailable: false,
  } as unknown as Doctor,
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
    filtered = filtered.filter((d) => d.designation.toLowerCase().includes(specialty.toLowerCase()));
  }

  if (location && location !== 'All') {
    filtered = filtered.filter((d) => d.country.toLowerCase().includes(location.toLowerCase()));
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(
      (d) =>
        `${d.firstName} ${d.lastName}`.toLowerCase().includes(lowerQuery) ||
        d.designation.toLowerCase().includes(lowerQuery) ||
        d.country.toLowerCase().includes(lowerQuery)
    );
  }

  return filtered;
}
