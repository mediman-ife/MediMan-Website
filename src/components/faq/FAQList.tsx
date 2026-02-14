import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const faqs = [
  {
    question: 'What is MediMan Doctor App?',
    answer:
      'MediMan Doctor App is a secure telehealth platform that enables you to consult patients online via video, audio, or chat. It helps manage both online and in-person appointments, issue e-prescriptions, track follow-ups, and receive payouts – all in one system.',
  },
  {
    question: 'How do I join the MediMan Doctor Network?',
    answer:
      'You can download the MediMan Doctor App from the Play Store or App Store and sign up using your credentials. Our team will verify your details before you can start practicing.',
  },
  {
    question: 'What documents are required for verification?',
    answer:
      'You will need to provide your SLMC registration, ID proof, and professional qualifications for verification purposes.',
  },
  {
    question: 'Can I set my own consultation fees?',
    answer:
      'Yes, you have full control over your consultation fees for both online and in-clinic appointments.',
  },
  {
    question: 'How do I receive payments?',
    answer:
      'Payments are processed securely and transferred directly to your registered bank account on a scheduled basis.',
  },
  {
    question: 'Can I consult patients from overseas?',
    answer:
      'Yes, MediMan allows you to connect with patients globally, expanding your practice beyond local boundaries.',
  },
  {
    question: 'Can I manage both online and clinic appointments together?',
    answer:
      'Absolutely. The app provides a unified calendar to manage your physical clinic slots alongside your online availability.',
  },
  {
    question: 'Is e-Prescription legal and accepted by pharmacies?',
    answer:
      'Yes, MediMan generates compliant e-prescriptions that are recognized and accepted by pharmacies.',
  },
];

export function FAQList() {
  return (
    <ScrollReveal variant="fade-up" delay={150}>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollReveal>
  );
}
