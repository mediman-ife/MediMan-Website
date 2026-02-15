import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, AlertTriangle } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function ContactInfo() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      {/* Emergency Warning */}
      <ScrollReveal variant="fade-left" delay={100}>
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-2 rounded-full text-red-600 flex-shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-red-800 font-bold mb-1 text-lg">Not for Emergencies</h4>
              <p className="text-red-700 text-sm leading-relaxed">
                MediMan is not for emergencies. If you're facing a medical emergency, please contact your local emergency services immediately.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Info Cards */}
      <div className="grid gap-6 flex-1">
        {/* Support Emails */}
        <ScrollReveal variant="fade-left" delay={200}>
          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-brand-blue/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Email Us</h3>
            </div>
            <div className="space-y-2 pl-[4rem]">
              <a href="mailto:hello@mediman.life" className="block text-slate-600 hover:text-brand-blue font-medium transition-colors">
                hello@mediman.life
              </a>
              <a href="mailto:support@mediman.life" className="block text-slate-600 hover:text-brand-blue font-medium transition-colors">
                support@mediman.life
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Call Us */}
        <ScrollReveal variant="fade-left" delay={300}>
          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-brand-purple/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Call Us</h3>
            </div>
            <div className="space-y-2 pl-[4rem]">
              <a href="tel:+94114668668" className="block text-slate-600 hover:text-brand-purple font-medium transition-colors">
                +94 11 466 8668
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Location */}
        <ScrollReveal variant="fade-left" delay={400}>
          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-green-500/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Location</h3>
            </div>
            <div className="space-y-2 pl-[4rem]">
              <p className="text-slate-600 font-medium">Sri Lanka, UK, USA</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Socials */}
      <ScrollReveal variant="fade-left" delay={500}>
        <div className="pt-4 flex flex-col items-center">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">Follow our social network</h4>
          <div className="flex gap-4 justify-center">
            <SocialLink href="#" icon={Facebook} color="text-blue-600" bg="bg-blue-50 hover:bg-blue-100" />
            <SocialLink href="#" icon={Instagram} color="text-pink-600" bg="bg-pink-50 hover:bg-pink-100" />
            <SocialLink href="#" icon={Linkedin} color="text-blue-700" bg="bg-blue-50 hover:bg-blue-100" />
            <SocialLink href="#" icon={Youtube} color="text-red-600" bg="bg-red-50 hover:bg-red-100" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

function SocialLink({ href, icon: Icon, color, bg }: { href: string; icon: any; color: string; bg: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${bg} ${color} hover:scale-110 shadow-sm`}
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}
