'use client';

import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    text: "I live abroad and managing my parents' health in Sri Lanka was a nightmare until I found MediMan. Now I can book appointments and see their reports instantly. It's a lifesaver.",
    author: 'Janarthan D.',
    role: 'Expat in UK',
    initials: 'JD',
    color: 'bg-brand-blue',
  },
  {
    id: 2,
    text: "As a working mom, waiting in lines with a sick child is impossible. MediMan's video consultations saved us so much time and stress. The pediatrician was amazing.",
    author: 'Sarah K.',
    role: 'Marketing Manager',
    initials: 'SK',
    color: 'bg-purple-600',
  },
  {
    id: 3,
    text: 'The e-prescription feature is brilliant. I finished my consultation and walked into the pharmacy 10 minutes later with my unique code. No paper, no hassle.',
    author: 'Mohamed R.',
    role: 'Business Owner',
    initials: 'MR',
    color: 'bg-green-600',
  },
  {
    id: 4,
    text: 'Finding a specialist for my condition used to take weeks. With MediMan, I found a top endocrinologist and booked a slot for the next day. Truly world-class service.',
    author: 'Kumari P.',
    role: 'Retired Teacher',
    initials: 'KP',
    color: 'bg-orange-500',
  },
  {
    id: 5,
    text: 'The app interface is so clean and easy to use. Even my 70-year-old father uses it to check his diabetes records. Finally, a Sri Lankan app with international standards!',
    author: 'Dinesh S.',
    role: 'UX Designer',
    initials: 'DS',
    color: 'bg-indigo-600',
  },
  {
    id: 6,
    text: 'Reviewing my past medical history has never been easier. All my reports, prescriptions, and doctor notes are in one place. Highly recommended for everyone.',
    author: 'Fathima N.',
    role: 'Software Engineer',
    initials: 'FN',
    color: 'bg-pink-600',
  },
];

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden min-h-[220px]">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={testimonial.id}
              className={cn(
                'absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform',
                isActive
                  ? 'opacity-100 translate-x-0 relative z-10'
                  : 'opacity-0 translate-x-8 absolute z-0 pointer-events-none'
              )}
            >
              <div className="bg-white p-8 rounded-3xl border border-brand-blue/12 shadow-xl shadow-brand-blue/8 relative hover:shadow-2xl transition-shadow duration-300 ring-1 ring-brand-blue/5">
                <span className="absolute top-6 right-6 text-6xl text-slate-200 font-serif leading-none select-none">
                  "
                </span>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-slate-700 italic relative z-10 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-md',
                      testimonial.color
                    )}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-8 justify-center sm:justify-start">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              index === activeIndex ? 'bg-brand-blue w-8' : 'bg-slate-200 hover:bg-slate-300'
            )}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
