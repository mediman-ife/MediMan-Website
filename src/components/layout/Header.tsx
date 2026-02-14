'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Doctor', href: 'https://mediman.life/doctor/' },
  { name: 'Available Doctors', href: '/doctors' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm h-20'
          : 'bg-transparent border-transparent h-24' // Taller initial state, transparent
      )}
    >
      <div className="container-width h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.svg"
              alt="MediMan Logo"
              className="h-10 w-auto transition-all duration-300" // Slightly larger logo
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative group',
                  pathname === item.href ? 'text-brand-blue' : 'text-slate-600'
                )}
              >
                {item.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-full h-0.5 bg-brand-blue scale-x-0 transition-transform origin-left group-hover:scale-x-100',
                    pathname === item.href && 'scale-x-100'
                  )}
                />
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="https://play.google.com/store/apps/details?id=com.mediman.life"
            className="hidden sm:block"
          >
            <Button className="bg-brand-red hover:bg-brand-red-dark text-white rounded-full px-6 shadow-lg shadow-brand-red/20 transition-all hover:shadow-brand-red/40">
              Download App
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-800" />
            ) : (
              <Menu className="h-6 w-6 text-slate-800" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Menu - Glass Overlay */}
      {/* Mobile Menu - Full Screen Overlay */}
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-white h-screen w-screen p-6 lg:hidden flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between mb-8 shrink-0">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <img src="/images/logo.svg" alt="MediMan" className="h-10 w-auto" />
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-6 w-6 text-slate-800" />
          </Button>
        </div>
        <nav className="flex flex-col gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-medium text-slate-800 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <Link
            href="https://play.google.com/store/apps/details?id=com.mediman.life"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full bg-brand-red hover:bg-brand-red-dark text-white rounded-full py-6 text-lg shadow-lg shadow-brand-red/20">
              Download App
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
