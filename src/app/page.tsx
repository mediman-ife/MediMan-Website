
import { Button } from "@/components/ui/button";
import { MoveRight, Phone, FileText, Users, Stethoscope, Smartphone, Pill } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Healthcare. Anytime. Anywhere. 🩺
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Find your favourite doctors, get e-prescriptions, manage appointments and followups, and keep your medical records securely in one app.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row py-4">
                  <Link href="https://play.google.com/store/apps/details?id=com.mediman.life" target="_blank">
                    <img src="/images/google-play.png" alt="Get it on Google Play" className="h-[50px] w-auto hover:opacity-90 transition-opacity" />
                  </Link>
                  <Link href="https://apps.apple.com/us/app/mediman-patient/id6445903276" target="_blank">
                    <img src="/images/app-store.png" alt="Download on the App Store" className="h-[50px] w-auto hover:opacity-90 transition-opacity" />
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center lg:order-last">
                <Image
                  src="/images/hero-mockup.webp"
                  alt="MediMan App Interface"
                  width={600}
                  height={800}
                  className="object-contain w-full h-auto max-w-[400px] drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 bg-white relative">
          <div className="absolute top-10 left-10 -z-0 opacity-20 hidden xl:block">
            <svg width="100" height="100" viewBox="0 0 100 100" className="fill-gray-300">
              <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" />
              </pattern>
              <rect width="100" height="100" fill="url(#dots2)" />
            </svg>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-4 items-start">
              {/* Intro Text Column */}
              <div className="flex flex-col space-y-4 lg:pr-8">
                <h2 className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl leading-tight">
                  Skip queues.<br />
                  Consult<br />
                  faster.
                </h2>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                  Book in minutes for video or in clinic visits with your favourite doctors.<br />
                  Healthcare. Anytime. Anywhere.
                </p>
              </div>

              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-lg bg-[#F9F9F9] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 h-full">
                <Smartphone className="h-10 w-10 text-[#CC0052]" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-[#111]">Book in Minutes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Find the right doctor, pick a time, and choose video or in-clinic no phone calls, no waiting room stress.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-lg bg-[#F9F9F9] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 h-full">
                <Stethoscope className="h-10 w-10 text-[#CC0052]" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-[#111]">Reports</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instant digital prescriptions, visit summaries, lab uploads, and smart reminders so you never miss a follow-up.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-lg bg-[#F9F9F9] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 h-full">
                <div className="relative">
                  <div className="absolute -top-1 -right-1 text-[#CC0052] font-bold text-xs">+</div>
                  <Pill className="h-10 w-10 text-[#CC0052]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#111]">Family Care</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Add parents, partner & kids. Book consultations on their behalf, receive e-prescriptions & keep each person’s records.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">Mediman for life</span>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1751C2]">How to consult in 3 easy steps</h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Steps Column */}
              <div className="space-y-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-sm">1</div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#111]">Download & Register</h3>
                    <p className="text-muted-foreground">Get the MediMan app, verify your number, create your profile.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-sm">2</div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#111]">Find Doctor & Book</h3>
                    <p className="text-muted-foreground">Search your trusted specialist and book a Video or In-Clinic slot that fits your time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-sm">3</div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#111]">Join & Get e-Prescription</h3>
                    <p className="text-muted-foreground">Join on time; receive your e-prescription, notes, and follow-up reminders in the app.</p>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/images/image.png"
                  alt="How to consult with MediMan"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto max-w-[400px] lg:max-w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <span className="text-sm font-bold tracking-wider text-[#7E57C2] uppercase">CARE WITHOUT BORDERS. FOR EVERYONE.</span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1751C2]">
                  Next-gen telehealth<br />for real world needs.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  No one should spend a whole day for a 5 minute medical discussion.
                  Traffic, queues, long waits while the patient gets weaker. MediMan
                  connects you to trusted specialists worldwide, instantly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                    <span className="text-gray-700 font-medium">Verified doctors, wherever you are.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                    <span className="text-gray-700 font-medium">Video/Audio and secure e-prescriptions.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                    <span className="text-gray-700 font-medium">Fast booking, reminders, follow ups, and safe medical records.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="https://play.google.com/store/apps/details?id=com.mediman.life" target="_blank">
                    <Button size="lg" className="bg-[#1751C2] hover:bg-[#1751C2]/90 gap-2 text-white">
                      Download Now <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto lg:ml-auto">
                {/* Placeholder for an image if user provides one later, or a decorative element */}
                <div className="relative h-[400px] w-[300px] sm:w-[350px] mx-auto bg-gray-100 rounded-[40px] border-8 border-gray-900 overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-mockup.webp"
                    alt="MediMan App"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative floaters */}
                <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full"><Users className="h-5 w-5 text-green-600" /></div>
                    <div>
                      <p className="text-xs text-muted-foreground">Active Patients</p>
                      <p className="text-sm font-bold">10,000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Banner Section - Replaced with HTML for responsiveness */}
        <section className="w-full py-16 md:py-24 bg-[#1751C2] relative overflow-hidden">
          {/* Background pattern or subtle gradient matching the branding */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1751C2] to-[#3b71ca] opacity-90"></div>

          <div className="container px-4 md:px-6 relative z-10 text-center text-white space-y-8">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                Everything You Need in<br />One Smart Health App
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Book verified doctors, order medicines, save health records, and care for your family—all in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-5xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#1751C2] text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">One App for the Whole Family</h3>
                <p className="text-sm text-blue-100">Add all your family members and manage their appointments, records, and health updates with ease.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#1751C2] text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Never Miss an Appointment</h3>
                <p className="text-sm text-blue-100">Upload, share, and access every medical report and prescription securely — whenever you need them.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#1751C2] text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Digital Prescriptions</h3>
                <p className="text-sm text-blue-100">Get your doctor's e-prescription right after your consultation, ready to save, print, or share.</p>
              </div>
            </div>

            <div className="pt-8">
              <Link href="https://play.google.com/store/apps/details?id=com.mediman.life" target="_blank">
                <Button size="lg" className="bg-white text-[#1751C2] hover:bg-gray-100 font-bold border-none">
                  Download Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Column: Image with Overlay Card */}
              <div className="relative">
                <Image
                  src="/images/features-doctors.webp"
                  alt="Doctors using MediMan"
                  width={600}
                  height={800}
                  className="rounded-2xl object-cover w-full h-auto shadow-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#111] text-lg">Top-rated &<br />widely used</p>
                    <p className="text-xs text-muted-foreground mt-1">Trusted by 500K+ users & 10K+ doctors</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => <span key={i}>★</span>)}
                      <span className="text-yellow-400/50">★</span>
                    </div>
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-1">4.5/5</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Testimonial Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-bold tracking-wider text-[#1751C2] uppercase">TESTIMONIALS</span>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#111] mt-2 mb-4">
                    MediMan is Loved by<br />users globally
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Real stories from people who use MediMan to see doctors faster safely from home.
                  </p>
                </div>

                {/* Testimonial Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                  <div className="absolute top-6 right-6 text-[#CC0052]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                      {/* Placeholder avatar or initial */}
                      <div className="w-full h-full flex items-center justify-center bg-[#CC0052] text-white font-bold text-xl">V</div>
                    </div>
                    <div>
                      <p className="font-bold text-[#111]">Vimalan Parameswaran</p>
                      <div className="flex text-[#CC0052] text-sm">
                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">MANNAR (MANAGER)</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed relative z-10 italic">
                    &quot;With long working hours at my shop, I rarely get time to visit doctors. MediMan.life lets me consult during my breaks—it&apos;s so convenient and efficient.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-[#1751C2] to-[#3b71ca] relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 items-center gap-8">
              <div className="text-white space-y-6 text-center lg:text-left">
                <p className="text-lg opacity-90">Advanced digital care that works in real life</p>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Download MediMan<br />App Now
                </h2>
                <p className="text-xl font-medium">Because care begins from home..!</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Link href="https://play.google.com/store/apps/details?id=com.mediman.life" target="_blank">
                    <img src="/images/google-play.png" alt="Get it on Google Play" className="h-[60px] w-auto hover:opacity-90 transition-opacity" />
                  </Link>
                  <Link href="https://apps.apple.com/us/app/mediman-patient/id6445903276" target="_blank">
                    <img src="/images/app-store.png" alt="Download on the App Store" className="h-[60px] w-auto hover:opacity-90 transition-opacity" />
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[500px] mt-8 lg:mt-0">
                <Image
                  src="/images/download-section-doctor.webp"
                  alt="Download MediMan App"
                  fill
                  className="object-contain object-bottom lg:object-right-bottom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Feature Highlight */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-last lg:order-first">
                <Image
                  src="/images/features-doctors.webp"
                  alt="Join MediMan Doctor Network"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-xl border w-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Are you a Doctor?</h2>
                <p className="text-muted-foreground text-lg">
                  Join the future of healthcare. MediMan enables you to consult patients online via video, audio, or chat. Manage both online and in-person appointments, issue e-prescriptions, and track follow-ups.
                </p>
                <ul className="grid gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2">✓ Manage Clinic & Online Slots</li>
                  <li className="flex items-center gap-2">✓ Secure e-Prescriptions</li>
                  <li className="flex items-center gap-2">✓ Guaranteed Payouts</li>
                </ul>
                <Link href="https://play.google.com/store/apps/details?id=com.mediman.doctor" target="_blank">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 gap-2 mt-2">
                    Download Doctor App <MoveRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
