
import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for a modern, friendly medical look
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "MediMan - Healthcare. Anytime. Anywhere.",
  description: "The simplest way to see your doctor. Video consultations, e-prescriptions, and family health records in one secure platform.",
  icons: {
    icon: "/favicon.ico", // Ensure we add a favicon later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          outfit.variable
        )}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
