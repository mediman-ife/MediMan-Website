import { DoctorHero } from '@/components/doctor/DoctorHero';
import { DoctorFeatures } from '@/components/doctor/DoctorFeatures';
import { DoctorAppShowcase } from '@/components/doctor/DoctorAppShowcase';
import { DoctorHowItWorks } from '@/components/doctor/DoctorHowItWorks';
import { DoctorFAQ } from '@/components/doctor/DoctorFAQ';
import { DoctorCTA } from '@/components/doctor/DoctorCTA';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MediMan Doctor App | Manage Patients Online',
  description:
    'Secure telehealth app for doctors. Manage bookings, consult online, share e-prescriptions & earn from anywhere.',
};

export default function DoctorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <DoctorHero />
        <SectionDivider />
        <DoctorFeatures />
        <SectionDivider />
        <DoctorAppShowcase />
        <SectionDivider />
        <DoctorHowItWorks />
        <SectionDivider />
        <DoctorFAQ />
        <SectionDivider />
        <DoctorCTA />
      </main>
    </div>
  );
}
