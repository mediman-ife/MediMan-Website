import React from 'react';
import { DoctorCard } from '@/components/doctors/doctor-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Doctor } from '@/types/doctor';

interface DoctorsGridProps {
  doctors: Doctor[];
}

export function DoctorsGrid({ doctors }: DoctorsGridProps) {
  if (doctors.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/20 rounded-lg">
        <h3 className="text-lg font-semibold">No doctors found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <ScrollReveal variant="fade-up" delay={150}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </ScrollReveal>
  );
}
