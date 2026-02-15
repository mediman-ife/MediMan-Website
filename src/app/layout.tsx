import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { AppShell } from '@/components/layout/app-shell';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'MediMan - Healthcare. Anytime. Anywhere.',
  description:
    'The simplest way to see your doctor. Video consultations, e-prescriptions, and family health records in one secure platform.',
  icons: {
    icon: '/icon.png',
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
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          dmSans.variable
        )}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
