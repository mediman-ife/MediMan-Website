
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="w-full bg-white border-t">
            {/* Main Footer Content */}
            <div className="container-width py-12 md:py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Brand & Description */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <img src="/images/logo.svg" alt="MediMan" className="h-10 w-auto" />
                        </Link>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            MediMan is a secure telehealth app to book trusted doctors, consult by video or in – clinic, get e-prescriptions, and manage family records – all in one place.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/mediman.life" target="_blank" className="bg-[#1751C2] p-2 rounded text-white hover:bg-[#1751C2]/90 transition-colors">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="https://www.instagram.com/mediman.life" target="_blank" className="bg-[#1751C2] p-2 rounded text-white hover:bg-[#1751C2]/90 transition-colors">
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/mediman-life" target="_blank" className="bg-[#1751C2] p-2 rounded text-white hover:bg-[#1751C2]/90 transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </Link>
                            <Link href="https://www.youtube.com/@medimanlife" target="_blank" className="bg-[#1751C2] p-2 rounded text-white hover:bg-[#1751C2]/90 transition-colors">
                                <Youtube className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-[#1751C2] font-bold text-lg">Quick Links</h3>
                        <nav className="flex flex-col space-y-3 text-sm text-gray-600">
                            <Link href="/faq" className="hover:text-[#1751C2] transition-colors">FAQ</Link>
                            <Link href="/contact" className="hover:text-[#1751C2] transition-colors">Contact Us</Link>
                            <Link href="/blogs" className="hover:text-[#1751C2] transition-colors">Blogs</Link>
                        </nav>

                        {/* Badges */}
                        {/* Badges */}
                        <div className="pt-4 flex flex-col gap-4">
                            {/* SaaSHub Badge */}
                            <a href="https://www.saashub.com/mediman?utm_source=badge&utm_campaign=badge&utm_content=mediman&badge_variant=color&badge_kind=approved" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1" alt="MediMan.life badge" className="max-w-[150px]" />
                            </a>

                            {/* Product Hunt Badge */}
                            <a href="https://www.producthunt.com/products/mediman?utm_source=badge-follow&utm_medium=badge&utm_source=badge-mediman" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=1150139&theme=light" alt="MediMan - Healthcare Anytime Anywhere | Product Hunt" width="250" height="54" className="w-[250px] h-[54px]" />
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Support */}
                    <div className="space-y-6">
                        <h3 className="text-[#1751C2] font-bold text-lg">Support</h3>
                        <div className="flex flex-col space-y-4 text-sm text-gray-600">
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-gray-400" />
                                <a href="tel:+94114668668" className="hover:text-[#1751C2]">+94 11 466 8668</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-gray-400" />
                                <a href="mailto:support@mediman.life" className="hover:text-[#1751C2]">support@mediman.life</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Download Doctor App */}
                    <div className="space-y-6">
                        <h3 className="text-gray-900 font-bold text-lg">Download MediMan Doctor App</h3>
                        <p className="text-sm text-gray-600">
                            Grow your practice with MediMan Doctor - all from one secure app.
                        </p>

                        <div className="flex flex-col gap-3">
                            <Link href="https://play.google.com/store/apps/details?id=com.mediman.doctor" target="_blank">
                                <img src="/images/google-play.png" alt="Get it on Google Play" className="h-[40px] w-auto bg-black rounded-md border border-gray-200" />
                            </Link>
                            <Link href="https://apps.apple.com/us/app/mediman-doctor/id6445903387" target="_blank">
                                <img src="/images/app-store.png" alt="Download on the App Store" className="h-[40px] w-auto bg-black rounded-md border border-gray-200" />
                            </Link>
                        </div>

                        <p className="text-xs text-gray-500 italic">
                            For licensed practitioners only. Not for emergencies.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#1751C2] text-white py-6">
                <div className="container-width flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-90">
                    <p>
                        © 2026 MediMan Life (PVT) Ltd. All rights reserved.
                    </p>
                    <nav className="flex gap-6">
                        <Link href="/terms" className="hover:text-white/80 underline-offset-4 hover:underline">Terms & Conditions</Link>
                        <Link href="/privacy" className="hover:text-white/80 underline-offset-4 hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white/80 underline-offset-4 hover:underline">Unsubscribe</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
