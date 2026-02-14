import React from 'react';
import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | MediMan',
  description: 'Get in touch with MediMan. We are here to help you with any questions about our telehealth platform.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pb-24">
        <ContactHero />

        <section className="container-width relative z-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
