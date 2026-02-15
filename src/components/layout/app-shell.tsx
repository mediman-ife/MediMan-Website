'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // List of routes that should NOT have the main site layout (Header/Footer)
    const isStandalonePage =
        pathname?.startsWith('/doctor-app') ||
        pathname?.startsWith('/user-app') ||
        // Also handle the legacy/rewrite paths if they somehow bypass rewrites on client-side nav
        pathname === '/doctorapp' ||
        pathname === '/userapp';

    if (isStandalonePage) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
        </>
    );
}
