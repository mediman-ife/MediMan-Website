"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from 'next/link';

// Form Schema
const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    userId: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(5, "Phone number must be at least 5 characters"), // Global validation
    userRole: z.enum(["doctor", "patient"]),
    country: z.string().min(1, "Country is required"),
    preferredContact: z.enum(["email", "phone", "whatsapp", "sms"]),
    contactNumber: z.string().optional(),
    sameAsRegistered: z.boolean().default(false).optional(),
    alternativeEmail: z.string().email("Invalid email address").optional().or(z.literal("")),
    deletionReason: z.string().min(1, "Primary reason is required"),
    additionalDetails: z.string().optional(),
    confirmation: z.boolean().refine(val => val === true, {
        message: "You must confirm the data retention policy",
    }),
}).superRefine((data, ctx) => {
    // Conditional validation: Contact Number is required if method is phone/whatsapp/sms
    if (["phone", "whatsapp", "sms"].includes(data.preferredContact)) {
        if (!data.contactNumber || data.contactNumber.length < 5) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Valid contact number is required for this method",
                path: ["contactNumber"],
            });
        }
    }
});

type FormData = z.infer<typeof formSchema>;

export default function AccountDeletionPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userRole: undefined,
            preferredContact: undefined,
            deletionReason: "",
            sameAsRegistered: false,
        },
    });

    // Watch fields for conditional logic
    // eslint-disable-next-line react-hooks/incompatible-library
    const preferredContact = watch("preferredContact");
    const registeredPhone = watch("phone");
    const sameAsRegistered = watch("sameAsRegistered");

    // Auto-fill logic: Sync contactNumber with registeredPhone when checkbox is checked
    useEffect(() => {
        if (sameAsRegistered && registeredPhone) {
            setValue("contactNumber", registeredPhone, { shouldValidate: true });
        } else if (sameAsRegistered && !registeredPhone) {
            setValue("contactNumber", "", { shouldValidate: true });
        }
    }, [sameAsRegistered, registeredPhone, setValue]);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log("Form Data:", data);

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Construct mailto link as a fallback/demo
        // const subject = `Account Deletion Request - ${data.userRole.toUpperCase()} - ${data.email}`;
        // ... (rest of logic) ...

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const reasons = [
        "No longer using service",
        "Privacy concerns",
        "Duplicate account",
        "Moving to different platform",
        "Service not meeting needs",
        "Technical issues",
        "Other",
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <div className="w-full bg-slate-900 py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Account Deletion Request
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            We&apos;re sorry to see you go. Please fill out the form below to process your account deletion request.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-10 relative z-20">
                <ScrollReveal>
                    <Card className="max-w-3xl mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                        <CardHeader className="text-center pb-2">
                            <CardTitle className="text-2xl font-bold text-slate-900">Deletion Request Form</CardTitle>
                            <CardDescription>Please fill out all required fields marked with *</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 md:p-10">
                            {isSuccess ? (
                                <div className="text-center py-10 space-y-6">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">Request Submitted</h2>
                                    <p className="text-slate-600 max-w-md mx-auto">
                                        Your account deletion request has been received. Our support team will process your request within 7 business days.
                                    </p>
                                    <Button asChild className="mt-6">
                                        <Link href="/">Return to Home</Link>
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                                    {/* Personal Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none text-slate-700">First Name *</label>
                                            <Input
                                                placeholder="First Name"
                                                {...register("firstName")}
                                                className={errors.firstName ? "border-red-500" : ""}
                                            />
                                            {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none text-slate-700">Last Name *</label>
                                            <Input
                                                placeholder="Last Name"
                                                {...register("lastName")}
                                                className={errors.lastName ? "border-red-500" : ""}
                                            />
                                            {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none text-slate-700">User ID (if known)</label>
                                            <Input
                                                placeholder="e.g. DOC-12345"
                                                {...register("userId")}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none text-slate-700">User Role *</label>
                                            <div className="flex gap-4 pt-2">
                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        value="doctor"
                                                        {...register("userRole")}
                                                        className="w-4 h-4 text-brand-purple border-slate-300 focus:ring-brand-purple"
                                                    />
                                                    <span className="text-sm text-slate-700">Doctor</span>
                                                </label>
                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        value="patient"
                                                        {...register("userRole")}
                                                        className="w-4 h-4 text-brand-purple border-slate-300 focus:ring-brand-purple"
                                                    />
                                                    <span className="text-sm text-slate-700">Patient</span>
                                                </label>
                                            </div>
                                            {errors.userRole && <p className="text-xs text-red-500">{errors.userRole.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none text-slate-700">Registered Email *</label>
                                            <Input
                                                placeholder="name@example.com"
                                                type="email"
                                                {...register("email")}
                                                className={errors.email ? "border-red-500" : ""}
                                            />
                                            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none text-slate-700">Registered Phone *</label>
                                            <Input
                                                placeholder="+94 77 123 4567"
                                                type="tel"
                                                {...register("phone")}
                                                className={errors.phone ? "border-red-500" : ""}
                                            />
                                            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none text-slate-700">Country/Region *</label>
                                        <Input
                                            placeholder="Please enter your full country name"
                                            {...register("country")}
                                            className={errors.country ? "border-red-500" : ""}
                                        />
                                        {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none text-slate-700">Preferred Contact Method *</label>
                                            <Select
                                                onValueChange={(val) => setValue("preferredContact", val as "email" | "phone" | "whatsapp" | "sms")}
                                                defaultValue={watch("preferredContact")}
                                            >
                                                <SelectTrigger className={errors.preferredContact ? "border-red-500 bg-white" : "bg-white"}>
                                                    <SelectValue placeholder="Select contact method" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="email">Email</SelectItem>
                                                    <SelectItem value="phone">Phone</SelectItem>
                                                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                                    <SelectItem value="sms">SMS</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {errors.preferredContact && <p className="text-xs text-red-500">{errors.preferredContact.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none text-slate-700">Alternative Email (Optional)</label>
                                            <Input
                                                placeholder="alt.email@example.com"
                                                type="email"
                                                {...register("alternativeEmail")}
                                                className={errors.alternativeEmail ? "border-red-500" : ""}
                                            />
                                            {errors.alternativeEmail && <p className="text-xs text-red-500">{errors.alternativeEmail.message}</p>}
                                        </div>
                                    </div>

                                    {/* Conditional Contact Number Field */}
                                    {["phone", "whatsapp", "sms"].includes(preferredContact) && (
                                        <div className="space-y-4 p-5 bg-slate-50 rounded-lg border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-300">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none text-slate-700">
                                                    Contact Number for {preferredContact === 'whatsapp' ? 'WhatsApp' : 'Communication'} *
                                                </label>
                                                <div className="flex flex-col gap-3">
                                                    <Input
                                                        placeholder="+94 77 123 4567"
                                                        type="tel"
                                                        {...register("contactNumber")}
                                                        disabled={sameAsRegistered} // Disable editing if auto-copy is checked
                                                        className={errors.contactNumber ? "border-red-500 bg-white" : "bg-white"}
                                                    />
                                                    <label className="flex items-center space-x-2 cursor-pointer select-none">
                                                        <input
                                                            type="checkbox"
                                                            {...register("sameAsRegistered")}
                                                            className="w-4 h-4 text-brand-purple border-slate-300 rounded focus:ring-brand-purple"
                                                        />
                                                        <span className="text-sm text-slate-600 font-medium">
                                                            Same as Registered Phone Number
                                                        </span>
                                                    </label>
                                                </div>
                                                {errors.contactNumber && <p className="text-xs text-red-500">{errors.contactNumber.message}</p>}
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none text-slate-700">Primary Reason for Deletion *</label>
                                        <Select
                                            onValueChange={(val) => setValue("deletionReason", val)}
                                            defaultValue={watch("deletionReason")}
                                        >
                                            <SelectTrigger className={errors.deletionReason ? "border-red-500 bg-white" : "bg-white"}>
                                                <SelectValue placeholder="Select a reason" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {reasons.map((r) => (
                                                    <SelectItem key={r} value={r}>{r}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.deletionReason && <p className="text-xs text-red-500">{errors.deletionReason.message}</p>}
                                        <p className="text-xs text-slate-500">Common reasons: No longer using service, Privacy concerns, Duplicate account, Moving to different platform, etc.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none text-slate-700">Additional Details (Optional)</label>
                                        <Textarea
                                            placeholder="Please provide any additional context..."
                                            {...register("additionalDetails")}
                                            className="bg-white min-h-[100px]"
                                        />
                                    </div>

                                    {/* Data Retention Notice */}
                                    <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xl">📋</span>
                                            <h3 className="text-lg font-bold text-slate-900">Data Retention Notice</h3>
                                        </div>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            <span className="font-bold">Important:</span> In accordance with healthcare regulations and legal requirements, we will retain your booking records (appointment dates, healthcare provider information, visit types, and payment references) for medical audit and legal compliance purposes. All other personal profile data and system data will be permanently deleted or anonymized.
                                        </p>
                                    </div>

                                    {/* Confirmation */}
                                    <div className="space-y-4">
                                        <label className="flex items-start space-x-3 cursor-pointer p-2 rounded hover:bg-slate-100 transition-colors">
                                            <input
                                                type="checkbox"
                                                {...register("confirmation", { required: true })}
                                                className="mt-1 w-5 h-5 text-brand-purple border-slate-300 rounded focus:ring-brand-purple"
                                            />
                                            <span className="text-sm text-slate-700 leading-relaxed">
                                                I understand the data retention policy stated above and confirm my request to permanently delete my Mediman account. I acknowledge that this action cannot be undone and that booking records will be retained as described for legal compliance.
                                            </span>
                                        </label>
                                        {errors.confirmation && <p className="text-sm font-bold text-red-600 px-2">{errors.confirmation.message}</p>}
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-12 text-base font-bold bg-red-600 hover:bg-red-700 text-white transition-all shadow-lg hover:shadow-xl"
                                        >
                                            {isSubmitting ? "Processing Request..." : "Submit Deletion Request"}
                                        </Button>
                                        <p className="text-center text-xs text-slate-400 mt-4">
                                            By submitting this form, you authorize MediMan to process your data deletion as per the <Link href="/privacy-policy" className="underline hover:text-brand-purple">Privacy Policy</Link> and <Link href="/terms-and-conditions" className="underline hover:text-brand-purple">Terms & Conditions</Link>.
                                        </p>
                                    </div>

                                </form>
                            )}
                        </CardContent>
                    </Card>
                </ScrollReveal>
            </div>
        </div>
    );
}
