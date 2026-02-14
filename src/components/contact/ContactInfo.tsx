import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ContactInfo() {
  return (
    <ScrollReveal variant="fade-right">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4 text-primary">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have questions about MediMan? We&apos;re here to help you revolutionize your healthcare
            experience.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-muted-foreground">+94 11 466 8668</p>
              <p className="text-sm text-muted-foreground">Mon-Fri from 8am to 5pm</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground">support@mediman.life</p>
              <p className="text-sm text-muted-foreground">We usually reply within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Office</h3>
              <p className="text-muted-foreground">
                MediMan Life (PVT) Ltd,
                <br />
                Colombo, Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
