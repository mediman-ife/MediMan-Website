import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | MediMan',
  description: 'Get in touch with the MediMan team for support or inquiries.',
};

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
