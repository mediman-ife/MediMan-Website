
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-muted/20">
            <div className="container py-12 md:py-16 lg:py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">MediMan</h3>
                        <p className="text-sm text-muted-foreground w-3/4">
                            A secure telehealth app to book trusted doctors, consult by video or in-clinic, get e-prescriptions, and manage family records.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube className="h-5 w-5" /></Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link href="/doctors" className="hover:text-primary">Find a Doctor</Link>
                            <Link href="/about" className="hover:text-primary">About Us</Link>
                            <Link href="/contact" className="hover:text-primary">Contact</Link>
                            <Link href="/faq" className="hover:text-primary">FAQs</Link>
                            <Link href="/blogs" className="hover:text-primary">Blogs</Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
                        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+94 11 466 8668</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>support@mediman.life</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
                            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        </nav>
                        <p className="text-xs text-muted-foreground mt-4">
                            © 2026 MediMan Life (PVT) Ltd. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
