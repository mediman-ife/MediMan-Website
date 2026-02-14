
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | MediMan",
    description: "Learn about MediMan's mission to make healthcare accessible, affordable, and simple for everyone.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Healthcare Reimagined</h1>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                We are on a mission to connect patients with the best doctors, anytime, anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Our Mission</h2>
                            <p className="text-muted-foreground text-lg">
                                At MediMan, we believe access to quality healthcare is a fundamental right. We are building the infrastructure to power the next generation of healthcare delivery in Sri Lanka and beyond.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                By bridging the gap between patients and doctors through technology, we eliminate waiting times, reduce travel costs, and ensure medical records are secure and accessible.
                            </p>
                        </div>
                        <div className="rounded-xl bg-muted aspect-video flex items-center justify-center text-muted-foreground">
                            {/* Placeholder for team image or mission graphic */}
                            Mission Image
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Why Choose MediMan?</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-background p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Patient First</h3>
                            <p className="text-muted-foreground">Every decision we make starts with the patient. We design for simplicity, trust, and care.</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Verified Doctors</h3>
                            <p className="text-muted-foreground">We rigorously verify every doctor on our platform to ensure you receive safe and expert care.</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
                            <p className="text-muted-foreground">Your health data is yours. We use bank-grade encryption to keep your records safe.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to experience better healthcare?</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Join thousands of patients who trust MediMan for their health needs.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/doctors">
                                <Button size="lg" className="bg-primary hover:bg-primary/90">Find a Doctor</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
