'use client';

import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Handle success/error state here
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 h-full relative overflow-hidden group">
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-blue/10 rounded-3xl transition-colors duration-500 pointer-events-none"></div>

      <ScrollReveal variant="fade-up" delay={100}>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
            <p className="text-slate-600">Fill out the form below and we&apos;ll get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="bg-slate-50 border-slate-200 focus:bg-white transition-all h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">
                  Phone
                </label>
                <Input
                  id="phone"
                  placeholder="Your phone number"
                  className="bg-slate-50 border-slate-200 focus:bg-white transition-all h-12"
                  type="tel"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">
                Email
              </label>
              <Input
                id="email"
                placeholder="you@example.com"
                className="bg-slate-50 border-slate-200 focus:bg-white transition-all h-12"
                type="email"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                className="bg-slate-50 border-slate-200 focus:bg-white transition-all min-h-[150px] resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold h-12 rounded-xl shadow-lg shadow-brand-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
}
