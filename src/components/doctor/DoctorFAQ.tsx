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
      'Simply download the MediMan Doctor App from the App Store or Play Store, complete the registration process, upload your credentials, and await verification. Once approved, you can start accepting appointments instantly.',
  },
  {
    question: 'What documents are required for verification?',
    answer:
      'You’ll need to submit your Medical Council registration number, valid ID, practice license, and optionally your clinic details or specialisation details. Our verification team will review and confirm your profile before activation.',
  },
  {
    question: 'Can I set my own consultation fees?',
    answer:
      'Yes. You have complete control to set your consultation fee, duration, and availability based on your preference. Fees can differ for online and in-person appointments.',
  },
  {
    question: 'How do I receive payments?',
    answer:
      'MediMan supports secure local and international payments. Fees collected from patients are credited to your MediPurse, and payouts are made upon payout request to your registered bank account.',
  },
  {
    question: 'Can I consult patients from overseas?',
    answer:
      'Yes. MediMan connects you with both local and the global patients, allowing you to earn in LKR or USD depending on the patient’s location.',
  },
  {
    question: 'Can I manage both online and clinic appointments together?',
    answer:
      'Absolutely. The MediMan Doctor App provides a single smart calendar where you can add clinic schedules, block unavailable slots, and manage both online and in-person appointments seamlessly.',
  },
  {
    question: 'Is e-Prescription legal and accepted by pharmacies?',
    answer:
      'Yes. MediMan e-Prescriptions are compliant with Sri Lanka’s MOH Telemedicine Guidelines and are accepted by partner pharmacies and registered clinics.',
  },
  {
    question: 'How do I handle patient follow-ups?',
    answer:
      'After each consultation, you can mark follow-ups, schedule reminders, and share care notes through the app. Patients receive automatic notifications to book their next appointment.',
  },
  {
    question: 'What if my consultation is interrupted or the patient doesn’t join?',
    answer:
      'All data is end-to-end encrypted and stored under strict privacy and compliance protocols. Only you and your authorised patient can access medical information. MediMan follows MOH and GDPR-aligned data standards.',
  },
  {
    question: 'Can I view my consultation history and earnings?',
    answer:
      'Yes. The Dashboard provides a clear summary of completed consultations, earnings, ratings, and patient feedback in real-time.',
  },
  {
    question: 'What happens if I need technical assistance?',
    answer:
      'Our support team is available via hotline, chat, or email (support@mediman.life) to help you resolve technical issues, payment queries, or onboarding support.',
  },
  {
    question: 'Can I pause my availability or take a break?',
    answer:
      'Yes. You can mark yourself as unavailable for certain dates or hours anytime, and patients won’t be able to book during that period.',
  },
  {
    question: 'How are patient ratings and feedback managed?',
    answer:
      'Patients can rate consultations based on experience. Feedback is monitored and moderated to ensure fairness and maintain platform quality.',
  },
  {
    question: 'Is there any joining or subscription fee?',
    answer:
      'Currently, joining the MediMan Doctor Network is free of charge. A minimal platform or service fee may apply per consultation, clearly shown before payout.',
  },
  {
    question: 'Can I integrate MediMan with my clinic’s software or system?',
    answer:
      'Integration features are under development. Soon, doctors will be able to sync calendars and records with third-party EMR systems and clinic management tools.',
  },
  {
    question: 'How does MediMan ensure clinical accountability?',
    answer:
      'All consultations are documented and timestamped, and every doctor’s credentials are verified before onboarding. Clinical judgement always remains solely with the practitioner.',
  },
  {
    question: 'Can I issue medical certificates or lab referrals digitally?',
    answer:
      'Yes, you can issue e-Certificates, lab referrals, and medical notes digitally within the app, subject to national telemedicine regulations.',
  },
];

export function DoctorFAQ() {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Background Base */}
      <div className="absolute inset-0 bg-white -z-20"></div>
      {/* Ambient Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-purple-light/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-blue-light/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container-width px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16 px-4">
            <span className="inline-block text-brand-purple font-bold tracking-wider text-xs uppercase bg-brand-purple/5 border border-brand-purple/10 px-4 py-1.5 rounded-full mb-2">
              Support
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about joining MediMan as a doctor.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto px-4 pb-12">
            <Accordion type="single" collapsible className="w-full space-y-4 p-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-slate-200 last:border-b rounded-2xl px-6 data-[state=open]:border-brand-purple/20 data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-slate-900 py-6 hover:text-brand-purple hover:no-underline [&[data-state=open]]:text-brand-purple">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6 font-medium">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
