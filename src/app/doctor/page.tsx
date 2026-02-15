import { DoctorHero } from '@/components/doctor/doctor-hero';
import { DoctorFeatures } from '@/components/doctor/doctor-features';
import { DoctorAppShowcase } from '@/components/doctor/doctor-app-showcase';
import { DoctorHowItWorks } from '@/components/doctor/doctor-how-it-works';
import { DoctorFAQ } from '@/components/doctor/doctor-faq';
import { DoctorCTA } from '@/components/doctor/doctor-cta';
import { SectionDivider } from '@/components/ui/section-divider';
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
