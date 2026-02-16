
import React from 'react';

export function BackgroundGlow() {
    return (
        <>
            {/* Ambient Background */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-brand-blue-light/40 rounded-full blur-[140px] -z-10 mix-blend-multiply opacity-60 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-brand-red-light/30 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-50 pointer-events-none"></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/40 rounded-full blur-[80px] -z-20 pointer-events-none"></div>
        </>
    );
}
