
import { Button } from "@/components/ui/button";
import { MoveRight, Phone, FileText, Users, Stethoscope, Smartphone, Pill, Star, ShieldCheck, Clock, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { ScrollReveal, StaggerChildren } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-20 lg:py-24 overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-20"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-red-light rounded-full blur-[120px] opacity-70 -z-10 animate-in fade-in duration-1000"></div>
          <div className="absolute bottom-[-10%] left-[-20%] w-[800px] h-[800px] bg-brand-blue/15 rounded-full blur-[140px] opacity-60 -z-10 animate-pulse duration-[5000ms]"></div>
          <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-brand-blue-light/50 rounded-full blur-[100px] -z-20"></div>

          <div className="container-width relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm w-fit mx-auto lg:mx-0">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Trusted by 10,000+ Patients</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl xl:text-7xl leading-[1.1]">
                  Healthcare. <span className="text-brand-red">Simplified.</span>
                </h1>
                <p className="max-w-[600px] text-slate-600 text-lg md:text-xl leading-relaxed mx-auto lg:mx-0">
                  Connect with top specialists, get instant e-prescriptions, and manage your family's health records in one secure, premium app.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Link href="https://apps.apple.com/us/app/mediman-patient/id6445903276" className="hover:opacity-80 transition-opacity">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12 w-auto" />
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.mediman.life" className="hover:opacity-80 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12 w-auto" />
                  </Link>
                </div>

                {/* Trust Strip */}
                <div className="pt-8 flex flex-col items-center lg:items-start gap-3">
                  <p className="text-sm text-slate-400 font-medium">SECURE & COMPLIANT</p>
                  <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Logos or Icons representing security/partners */}
                    <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /><span className="font-bold text-slate-700">HIPAA</span></div>
                    <div className="flex items-center gap-2"><FileText className="w-5 h-5" /><span className="font-bold text-slate-700">GDPR</span></div>
                    <div className="flex items-center gap-2"><Users className="w-5 h-5" /><span className="font-bold text-slate-700">SLMC</span></div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="relative z-10 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
                  <Image
                    src="/images/hero-mockup.webp"
                    alt="MediMan App Interface"
                    width={600}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                </div>
                {/* Floating Cards */}
                <div className="absolute top-24 -left-4 md:-left-8 z-20 glass-card p-4 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600"><Video className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Next appointment</p>
                      <p className="text-sm font-bold text-slate-800">10:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-32 -right-2 md:-right-6 z-20 glass-card p-4 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-blue-light p-2 rounded-lg text-brand-blue"><FileText className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Prescription</p>
                      <p className="text-sm font-bold text-slate-800">Ready to download</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid (Bento Style) */}
        <section className="py-16 relative overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-white -z-20"></div>
          {/* Ambient Background */}
          {/* Ambient Background */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue-light/60 rounded-full blur-[140px] -z-10 mix-blend-multiply opacity-80 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red-light/40 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-70 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/40 rounded-full blur-[80px] -z-20 pointer-events-none"></div>
          <div className="container-width">
            <ScrollReveal variant="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span className="inline-block text-brand-blue font-semibold tracking-widest text-xs uppercase bg-brand-blue/10 border border-brand-blue/20 px-4 py-1 rounded-full">Our Features</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Healthcare Reimagined</h2>
                <p className="text-slate-600 text-lg">Skip the waiting rooms. Experience the future of medical consultations with features designed for your convenience.</p>
              </div>
            </ScrollReveal>

            <StaggerChildren className="grid md:grid-cols-6 gap-6" staggerDelay={120}>
              {/* Large Card */}
              <div className="md:col-span-4 bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-slate-200/80 shadow-xl shadow-brand-blue/8 ring-1 ring-brand-blue/5">
                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-red shadow-sm group-hover:scale-110 transition-transform"><Video className="w-6 h-6" /></div>
                    <h3 className="text-2xl font-bold text-slate-900">Instant Video Consultations</h3>
                    <p className="text-slate-600 max-w-md">Connect with specialists face-to-face from the comfort of your home. HD video quality with secure, encrypted connection.</p>
                  </div>
                  <Button variant="link" className="w-fit p-0 h-auto text-brand-red font-semibold group-hover:translate-x-1 transition-transform">
                    Book a consultation <MoveRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-brand-blue-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Tall Card */}
              <div className="md:col-span-2 bg-brand-purple text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-brand-purple/30 transition-all duration-300">
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white"><Clock className="w-6 h-6" /></div>
                  <h3 className="text-2xl font-bold">24/7 Access</h3>
                  <p className="text-purple-100">Medical care doesn't wait for office hours. Find available doctors anytime, anywhere.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
              </div>

              {/* Small Card 1 */}
              <div className="md:col-span-2 bg-brand-blue-light/50 rounded-3xl p-8 border border-brand-blue/15 shadow-lg shadow-brand-blue/8 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center text-brand-blue group-hover:rotate-6 transition-transform"><FileText className="w-6 h-6" /></div>
                  <h3 className="text-xl font-bold text-slate-900">Digital Rx</h3>
                  <p className="text-slate-600 text-sm">Get valid e-prescriptions instantly after your visit. Print or share with pharmacies.</p>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className="md:col-span-2 bg-brand-purple-light/50 rounded-3xl p-8 border border-brand-purple/15 shadow-lg shadow-brand-purple/8 hover:shadow-xl hover:border-brand-purple/30 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-purple-light rounded-xl flex items-center justify-center text-brand-purple group-hover:rotate-6 transition-transform"><Users className="w-6 h-6" /></div>
                  <h3 className="text-xl font-bold text-slate-900">Family Profiles</h3>
                  <p className="text-slate-600 text-sm">Manage health records for your parents, spouse, and children under one account.</p>
                </div>
              </div>

              {/* Small Card 3 */}
              <div className="md:col-span-2 bg-green-50/50 rounded-3xl p-8 border border-green-200/50 shadow-lg shadow-green-500/5 hover:shadow-xl hover:border-green-300/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:rotate-6 transition-transform"><Pill className="w-6 h-6" /></div>
                  <h3 className="text-xl font-bold text-slate-900">Medicine Reminders</h3>
                  <p className="text-slate-600 text-sm">Never miss a dose. Smart reminders keep your treatment plan on track.</p>
                </div>
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* How it Works (Timeline) */}
        <section id="how-it-works" className="py-16 relative overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-slate-50 -z-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[120px] opacity-80 -z-10 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="container-width">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-20">
                <span className="inline-block text-brand-blue font-semibold tracking-widest text-xs uppercase bg-brand-blue/10 border border-brand-blue/20 px-4 py-1 rounded-full">Simple Process</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Consult in 3 Easy Steps</h2>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

              <StaggerChildren className="grid md:grid-cols-3 gap-12 relative z-10" staggerDelay={150}>
                {/* Step 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform">1</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Download & Sign Up</h3>
                  <p className="text-slate-600 text-sm">Get the MediMan app from your store and create your secure profile in seconds.</p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform">2</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Choose Specialist</h3>
                  <p className="text-slate-600 text-sm">Browse verified doctors, check reviews, and book a slot that works for you.</p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform">3</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Consult & Heal</h3>
                  <p className="text-slate-600 text-sm">Join the video call, discuss your health, and get your digital prescription instantly.</p>
                </div>
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* Care Without Borders (New Section) */}
        <section className="py-16 relative overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-white -z-20"></div>
          <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-brand-light/80 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-purple-light/60 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal variant="fade-right">
                <div className="space-y-6">
                  <span className="inline-block text-brand-red font-semibold tracking-widest text-xs uppercase bg-brand-red/10 border border-brand-red/20 px-4 py-1 rounded-full">Global Access</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Care without borders. <br /><span className="text-brand-red">For everyone.</span>
                  </h2>
                  <p className="text-lg text-slate-600 font-medium">
                    Next-gen telehealth for real world needs.
                  </p>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      No one should spend a whole day for a 5 minute medical discussion. Traffic, queues, long waits while the patient gets weaker. MediMan connects you to trusted specialists worldwide, instantly.
                    </p>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><ShieldCheck className="w-4 h-4" /></div>
                        <span>Verified doctors, wherever you are.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-blue-light flex items-center justify-center text-brand-blue"><Video className="w-4 h-4" /></div>
                        <span>Video/Audio and secure e-prescriptions.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-purple-light flex items-center justify-center text-brand-purple"><Clock className="w-4 h-4" /></div>
                        <span>Fast booking, reminders, follow ups, and safe medical records.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6">
                    <Link href="https://play.google.com/store/apps/details?id=com.mediman.life" target="_blank">
                      <Button size="lg" className="h-12 px-8 bg-brand-red hover:bg-brand-red-dark text-white rounded-full text-base font-semibold shadow-lg shadow-brand-red/20 transition-all hover:scale-105">
                        Download Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-left" delay={200}>
                <div className="relative">
                  <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-50 rounded-[3rem] -z-10 rotate-3"></div>
                  <div className="relative rounded-3xl shadow-xl z-10 w-full overflow-hidden">
                    <Image
                      src="/images/care-family.png"
                      alt="Family Care - Healthcare for everyone"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover scale-[1.02] origin-center"
                    />
                  </div>
                  {/* Decorative Circle */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-light rounded-full blur-2xl z-0"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 overflow-x-clip relative">
          <div className="absolute top-0 w-full h-full bg-slate-50 -z-20"></div>
          <div className="absolute -top-20 right-0 w-[700px] h-[700px] bg-brand-light/60 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal variant="fade-right">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-light rounded-full blur-3xl z-0"></div>
                  <Image
                    src="/images/features-doctors.webp"
                    alt="Happy Patient"
                    width={600}
                    height={800}
                    className="rounded-3xl shadow-2xl relative z-10 object-cover h-[500px] w-full"
                  />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl z-0"></div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-8 right-8 z-20 glass-card p-4 rounded-xl flex flex-col items-center shadow-xl animate-in fade-in zoom-in duration-1000 delay-500">
                    <span className="text-3xl font-bold text-slate-900">4.8</span>
                    <div className="flex text-yellow-400 text-sm gap-0.5">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-xs text-slate-500 mt-1">App Store Rating</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-left" delay={150}>
                <div className="space-y-8">
                  <span className="inline-block text-brand-blue font-semibold tracking-widest text-xs uppercase bg-brand-blue/10 border border-brand-blue/20 px-4 py-1 rounded-full">Testimonials</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mt-4">Loved by users <span className="text-brand-blue">across the globe.</span></h2>

                  <div className="space-y-6">
                    {/* Dynamic Testimonials Carousel */}
                    <TestimonialsCarousel />
                  </div>


                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-white -z-20"></div>
          <div className="container-width">
            <ScrollReveal variant="scale-in">
              <div className="bg-gradient-to-br from-brand-blue via-[#103E99] to-brand-blue-dark rounded-[3rem] p-8 md:p-16 text-center md:text-left text-white relative overflow-hidden shadow-2xl shadow-brand-blue/20 ring-1 ring-white/10 isolate">
                {/* Background Patterns & Glows */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-brand-light/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-brand-light/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

                <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                  <div className="flex-1 space-y-10">
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] drop-shadow-sm">
                        Your Health,<br /><span className="text-blue-100">In Your Hands.</span>
                      </h2>
                      <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed font-light max-w-2xl">
                        Join thousands of users experiencing the future of healthcare today. Instant access to specialists, anytime, anywhere.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 items-center md:items-start pt-4">
                      <Link href="https://play.google.com/store/apps/details?id=com.mediman.life" target="_blank" className="hover:scale-105 transition-transform duration-300 group">
                        <img src="/images/google-play.png" alt="Google Play" className="h-[3.5rem] w-auto" />
                      </Link>
                      <Link href="https://apps.apple.com/us/app/mediman-patient/id6445903276" target="_blank" className="hover:scale-105 transition-transform duration-300 group">
                        <img src="/images/app-store.png" alt="App Store" className="h-[3.5rem] w-auto" />
                      </Link>
                    </div>


                  </div>

                  <div className="flex-1 relative w-full flex justify-center md:justify-end">
                    <div className="relative z-10">
                      <div className="absolute inset-0 bg-brand-blue/30 blur-[60px] rounded-full scale-90 pointer-events-none"></div>
                      <Image
                        src="/images/mobile-app-mockup.png"
                        alt="MediMan App Interface"
                        width={400}
                        height={800}
                        className="w-full max-w-[450px] md:max-w-[800px] mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out origin-bottom transform-gpu hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </div>
  );
}
