
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | MediMan",
    description: "Get in touch with the MediMan team for support or inquiries.",
};

export default function ContactPage() {
    return (
        <div className="container py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-4 text-primary">Get in Touch</h1>
                        <p className="text-muted-foreground text-lg">
                            Have questions about MediMan? We're here to help you revolutionize your healthcare experience.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <p className="text-muted-foreground">+94 11 466 8668</p>
                                <p className="text-sm text-muted-foreground">Mon-Fri from 8am to 5pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-muted-foreground">support@mediman.life</p>
                                <p className="text-sm text-muted-foreground">We usually reply within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Office</h3>
                                <p className="text-muted-foreground">
                                    MediMan Life (PVT) Ltd,<br />
                                    Colombo, Sri Lanka.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Send us a message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                            </div>
                            <Button type="button" className="w-full bg-primary hover:bg-primary/90">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
