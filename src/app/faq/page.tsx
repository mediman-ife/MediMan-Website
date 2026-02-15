'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search, MessageCircle, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const FAQS = [
  {
    question: 'How do I book an appointment through MediMan?',
    answer:
      'Easily book appointments by logging into the app, searching and selecting your preferred doctor, and choosing an available time slot that suits your schedule.',
  },
  {
    question: 'What types of consultations can I schedule on MediMan?',
    answer:
      'MediMan offers both virtual and in-person consultations, allowing you to choose the option that best fits your needs and availability.',
  },
  {
    question: 'Can I access medical services from anywhere?',
    answer:
      'Yes, MediMan provides telehealth services that you can access from any location, facilitating healthcare without geographical constraints.',
  },
  {
    question: 'How do I manage prescriptions through MediMan?',
    answer:
      "After a consultation, if a prescription is issued, it's automatically saved to your consultation schedule or under medical records section and can be accessed anytime.",
  },
  {
    question: 'Is my personal health information secure with MediMan?',
    answer:
      'Absolutely. We prioritize your privacy with top-notch security measures to protect your personal health information at all times.',
  },
  {
    question: 'What payment methods are accepted on MediMan?',
    answer:
      'MediMan accepts various payment methods including credit cards and debit cards to make your transactions seamless and secure.',
  },
  {
    question: 'Can I change or cancel an appointment?',
    answer:
      'Yes, you can easily change or cancel appointments through the app. Please note that cancellations should be made at least 24 hours before the scheduled time to avoid any charges.',
  },
  {
    question: 'How can I access my medical records through MediMan?',
    answer:
      'Your medical records are stored securely on our platform and can be accessed anytime through your user profile for your convenience.',
  },
  {
    question: 'Can I consult with specialists through MediMan?',
    answer:
      'Absolutely! MediMan connects you with a wide range of specialists, allowing you to receive expert care tailored to your specific health needs.',
  },
  {
    question: 'What should I do if I have technical issues with the app?',
    answer:
      'If you encounter any technical issues, please contact our support team via the help section in the app or by emailing support@mediman.life. We are here to help resolve any problems swiftly.',
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-blue/5 to-transparent -z-10" />
      <div className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[400px] left-[-200px] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4 border border-brand-blue/20">
            <MessageCircle className="w-4 h-4" />
            <span>Help Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            How can we <span className="text-brand-blue">help you?</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about appointments, prescriptions,
            and managing your health with MediMan.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-10 relative group">
            <div className="absolute inset-0 bg-brand-blue/20 rounded-2xl blur-xl group-hover:bg-brand-blue/30 transition-all duration-300" />
            <div className="relative bg-white rounded-2xl shadow-xl flex items-center p-2 border border-slate-100 group-focus-within:border-brand-blue/50 transition-colors">
              <Search className="w-6 h-6 text-slate-400 ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 px-4 text-lg text-slate-900 bg-transparent border-none outline-none placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors mr-2 shrink-0"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="pb-32 px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:border-brand-blue/20 data-[state=open]:bg-white data-[state=open]:shadow-lg"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-brand-blue hover:no-underline py-4 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : (
            <div className="text-center py-20 bg-white/50 rounded-3xl border border-slate-100">
              <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No results found
              </h3>
              <p className="text-slate-500">
                Try searching for a different keyword or browse the list above.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-6 text-brand-blue font-semibold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-brand-blue to-brand-purple rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Still have questions?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our friendly support
                team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="mailto:support@mediman.life"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
