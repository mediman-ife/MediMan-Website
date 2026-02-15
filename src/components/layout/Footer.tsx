import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
  HelpCircle,
  MessageCircle,
  FileText,
  Stethoscope,
} from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1: Brand & Description (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Logo className="h-14 w-auto text-white" />
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
              MediMan is a secure telehealth app to book trusted doctors, video consult, get
              e-prescriptions, and manage family records – all in one place.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 justify-center lg:justify-start">
              <SocialLink
                href="https://www.facebook.com/mediman.life"
                icon={<Facebook className="h-5 w-5" />}
              />
              <SocialLink
                href="https://www.instagram.com/mediman.life"
                icon={<Instagram className="h-5 w-5" />}
              />
              <SocialLink
                href="https://www.linkedin.com/company/mediman-life"
                icon={<Linkedin className="h-5 w-5" />}
              />
              <SocialLink
                href="https://www.youtube.com/@medimanlife"
                icon={<Youtube className="h-5 w-5" />}
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-3 text-slate-400 items-start w-fit mx-auto lg:mx-0">
              <FooterLink href="/faq">
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </FooterLink>
              <FooterLink href="/contact">
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us</span>
              </FooterLink>
              <FooterLink href="/blogs">
                <FileText className="w-4 h-4" />
                <span>Blogs</span>
              </FooterLink>
              <FooterLink href="/doctors">
                <Stethoscope className="w-4 h-4" />
                <span>Find a Doctor</span>
              </FooterLink>
            </nav>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-white font-bold text-lg">Support</h3>
            <div className="flex flex-col space-y-4 text-slate-400 items-start w-fit mx-auto lg:mx-0">
              <div className="flex items-start gap-3 group justify-start">
                <Phone className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5 group-hover:text-brand-blue transition-colors" />
                <a
                  href="tel:+94114668668"
                  className="hover:text-brand-blue transition-colors font-medium"
                >
                  +94 11 466 8668
                </a>
              </div>
              <div className="flex items-start gap-3 group justify-start">
                <Mail className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5 group-hover:text-brand-blue transition-colors" />
                <a
                  href="mailto:support@mediman.life"
                  className="hover:text-brand-blue transition-colors break-all"
                >
                  support@mediman.life
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Download App */}
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-white font-bold text-lg">Get the App</h3>
            <p className="text-sm text-slate-400 leading-relaxed mx-auto lg:mx-0 max-w-xs lg:max-w-none">
              For licensed practitioners. Manage your practice on the go.
            </p>

            <div className="flex flex-col gap-3 items-center lg:items-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.mediman.doctor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity w-fit bg-white/5 p-1 rounded-lg border border-white/10 hover:bg-white/10"
              >
                <img
                  src="/images/google-play.png"
                  alt="Google Play"
                  className="w-[200px] sm:w-auto sm:h-10"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/mediman-doctor/id6445903387"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity w-fit bg-white/5 p-1 rounded-lg border border-white/10 hover:bg-white/10"
              >
                <img
                  src="/images/app-store.png"
                  alt="App Store"
                  className="w-[200px] sm:w-auto sm:h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MediMan Life (PVT) Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 justify-center">
            <a
              href="https://www.producthunt.com/products/mediman?utm_source=badge-follow&utm_medium=badge&utm_source=badge-mediman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=1150139&theme=dark"
                alt="MediMan - Healthcare. Anytime. Anywhere. | Product Hunt"
                className="h-11 w-auto"
                width="250"
                height="54"
              />
            </a>
            <a
              href="https://www.saashub.com/mediman?utm_source=badge&utm_campaign=badge&utm_content=mediman&badge_variant=color&badge_kind=approved"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              <img
                src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1"
                alt="MediMan.life badge"
                className="h-11 w-auto"
              />
            </a>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <Link href="/terms-and-conditions" className="hover:text-brand-blue transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-brand-blue transition-colors">
              FAQ
            </Link>
            <Link href="/delete-account" className="hover:text-brand-blue transition-colors">
              Unsubscribe
            </Link>
          </nav>
        </div>
      </div>
    </footer >
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hover:text-brand-blue hover:translate-x-1 transition-all duration-200 w-fit flex items-center gap-2"
    >
      {children}
    </Link>
  );
}
