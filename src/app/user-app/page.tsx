'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const PLAY_STORE =
    'https://play.google.com/store/apps/details?id=com.mediman.patient&pcampaignid=web_share';
const APP_STORE = 'https://apps.apple.com/lk/app/mediman-healthcare-anywhere/id6751712281';

export default function UserAppPage() {
    const [status, setStatus] = useState('Detecting your device...');
    const [subStatus, setSubStatus] = useState('Please wait a moment');
    const [showButtons, setShowButtons] = useState(false);
    const [platform, setPlatform] = useState<{ type: string; name: string } | null>(null);

    useEffect(() => {
        // Platform detection logic
        const detectPlatform = () => {
            const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
            const platformName = navigator.platform || '';

            // iOS detection
            const isIOS =
                /iPad|iPhone|iPod/.test(ua) ||
                (platformName === 'MacIntel' && navigator.maxTouchPoints > 1);

            // Android detection
            const isAndroid = /android/i.test(ua);

            if (isAndroid) return { type: 'android', name: 'Android' };
            if (isIOS) return { type: 'ios', name: 'iOS' };
            return { type: 'desktop', name: 'Desktop' };
        };

        const currentPlatform = detectPlatform();
        setPlatform(currentPlatform);

        // Redirect logic
        const handleRedirect = () => {
            if (currentPlatform.type === 'android') {
                setStatus('Android detected');
                setSubStatus('Opening Google Play Store...');
                window.location.href = PLAY_STORE;

                // Fallback
                setTimeout(() => {
                    setStatus('Taking too long?');
                    setSubStatus('Tap the button below');
                    setShowButtons(true);
                }, 2500);

            } else if (currentPlatform.type === 'ios') {
                setStatus('iOS detected');
                setSubStatus('Opening App Store...');
                window.location.href = APP_STORE;

                // Fallback
                setTimeout(() => {
                    setStatus('Taking too long?');
                    setSubStatus('Tap the button below');
                    setShowButtons(true);
                }, 2500);

            } else {
                // Desktop
                setTimeout(() => {
                    setStatus('Choose your platform');
                    setSubStatus('Available on Android and iOS');
                    setShowButtons(true);
                }, 400);
            }
        };

        // Initial run
        const timer = setTimeout(handleRedirect, 300);

        // Cleanup
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-[#667eea] to-[#764ba2] font-sans">
            <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-[420px] w-full text-center animate-in fade-in slide-in-from-bottom-5 duration-500">
                <div className="w-20 h-20 mx-auto mb-5 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                        src="https://play-lh.googleusercontent.com/To4n03gt4BFvZFDHKEc00d7boClF8D_GTca118r127-pX1h-eJ6pwsKeY4m85VEFYwyIuIs0Ht3noOatX8m0Og=w480-h960-rw"
                        alt="MediMan Logo"
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                        unoptimized
                    />
                </div>

                <h1 className="text-[#333] mb-2 text-2xl font-bold">MediMan</h1>
                <p className="text-[#666] text-[15px] mb-8 leading-relaxed">
                    Find your favourite doctors, get e-prescriptions, manage appointments and followups, and keep your medical records securely in one app.
                </p>

                <div className="bg-[#0056ff] p-5 rounded-xl mb-6 min-h-[80px] flex flex-col items-center justify-center">
                    {/* Note: Original HTML used #0056ff blue bg for status box, keeping distinct from Doctor app which used light grey */}
                    {!showButtons && (
                        <div className="w-9 h-9 border-[3px] border-[#f3f3f3] border-t-[#667eea] rounded-full animate-spin mb-3"></div>
                    )}
                    <div className="text-white font-semibold text-[15px]">{status}</div> {/* Changed text to white for contrast on blue */}
                    <div className="text-white/80 text-[13px] mt-1.5">{subStatus}</div>
                </div>

                {showButtons && (
                    <div className="flex flex-col gap-3 animate-in fade-in duration-300">
                        <a
                            href={platform?.type === 'ios' ? APP_STORE : PLAY_STORE}
                            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl bg-gradient-to-br from-[#667eea] to-[#764ba2]"
                        >
                            {platform?.type === 'ios' ? 'Download on App Store' : 'Get it on Google Play'}
                        </a>
                        <a
                            href={platform?.type === 'ios' ? PLAY_STORE : APP_STORE}
                            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-[#667eea] font-semibold text-[15px] transition-all border-2 border-[#e0e0e0] hover:border-[#667eea] hover:bg-[#f8f9ff]"
                        >
                            {platform?.type === 'ios' ? 'Get for Android' : 'Download for iOS'}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
