"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Doctor", href: "https://mediman.life/doctor/" }, // Linking to live site's doctor page or a new internal one
    { name: "Available Doctors", href: "https://doctors.mediman.life/" }, // Linking to subdomain as per live site, or keep internal /doctors? User said "Available Doctors" is a link. I will use internal /doctors for now if we built it, or external if that is the goal. I'll stick to internal /doctors for "Available Doctors" as we built it. Wait, live site links "Available Doctors" to doctors.mediman.life. I will use internal /doctors since I built it.
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src="/images/logo.svg"
                            alt="MediMan Logo"
                            className="h-8 w-auto"
                        />
                    </Link>
                    <nav className="hidden lg:flex items-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="https://play.google.com/store/apps/details?id=com.mediman.life" className="hidden sm:block">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
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
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t p-4 space-y-4 bg-background">
                    <nav className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="https://play.google.com/store/apps/details?id=com.mediman.life">
                            <Button className="w-full bg-primary">Download App</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
