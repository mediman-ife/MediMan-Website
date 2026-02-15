'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const PLAY_STORE =
    'https://play.google.com/store/apps/details?id=com.mediman.patient&pcampaignid=web_share';
const APP_STORE =
    'https://apps.apple.com/lk/app/mediman-healthcare-anywhere/id6751712281';

export default function UserAppPage() {
    const router = useRouter();
    const [status, setStatus] = useState('Checking device...');
    const [subStatus, setSubStatus] = useState('Please wait...');
    const [showButtons, setShowButtons] = useState(false);
    const [platform, setPlatform] = useState<{ type: string; name: string } | null>(
        null
    );

    useEffect(() => {
        // Platform detection logic
        const detectPlatform = () => {
            const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera: unknown }).opera;
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
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPlatform(currentPlatform);
        // eslint-disable-next-line react-hooks/exhaustive-deps

        // Redirect logic
        const handleRedirect = () => {
            if (currentPlatform.type === 'android') {
                setStatus('Opening Google Play Store...');
                setSubStatus('Redirecting you to the app...');
                window.location.href = PLAY_STORE;

                // Fallback
                setTimeout(() => {
                    setStatus('Manual Download');
                    setSubStatus('Tap current store below');
                    setShowButtons(true);
                }, 1500);
            } else if (currentPlatform.type === 'ios') {
                setStatus('Opening App Store...');
                setSubStatus('Redirecting you to the app...');
                window.location.href = APP_STORE;

                // Fallback
                setTimeout(() => {
                    setStatus('Manual Download');
                    setSubStatus('Tap current store below');
                    setShowButtons(true);
                }, 1500);
            } else {
                // Desktop -> Redirect to Home
                setStatus('Redirecting to Website...');
                setSubStatus('App is available on mobile devices');
                setTimeout(() => {
                    router.push('/');
                }, 2000);
            }
        };

        // Initial run - Rapid redirect (100ms)
        const timer = setTimeout(handleRedirect, 100);

        // Cleanup
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 font-sans relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl max-w-[420px] w-full text-center animate-in fade-in zoom-in-95 duration-500 relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-3xl flex items-center justify-center shadow-xl overflow-hidden ring-4 ring-white/10">
                    <Image
                        src="/images/userappicon.webp"
                        alt="MediMan Logo"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                <h1 className="text-white mb-2 text-3xl font-extrabold tracking-tight drop-shadow-sm">
                    MediMan
                </h1>
                <p className="text-blue-50/80 text-base mb-8 leading-relaxed font-medium">
                    Healthcare anytime, anywhere. Your prescriptions, appointments, and
                    records in one secure place.
                </p>

                <div className="bg-black/20 backdrop-blur-md border border-white/10 p-5 rounded-2xl mb-6 min-h-[80px] flex flex-col items-center justify-center transition-all duration-300">
                    {!showButtons && platform?.type !== 'desktop' && (
                        <Loader2 className="w-8 h-8 text-white animate-spin mb-3" />
                    )}
                    <div className="text-white font-bold text-lg">{status}</div>
                    <div className="text-blue-200 text-sm mt-1.5 font-medium">
                        {subStatus}
                    </div>
                </div>

                {showButtons && (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 items-center">
                        <a
                            href={APP_STORE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105 hover:shadow-lg rounded-lg block w-48"
                        >
                            <Image
                                src="/images/app-store.png"
                                alt="Download on the App Store"
                                width={180}
                                height={54}
                                className="w-full h-auto"
                            />
                        </a>
                        <a
                            href={PLAY_STORE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105 hover:shadow-lg rounded-lg block w-48"
                        >
                            <Image
                                src="/images/google-play.png"
                                alt="Get it on Google Play"
                                width={180}
                                height={54}
                                className="w-full h-auto"
                            />
                        </a>
                        <button
                            onClick={() => router.push('/')}
                            className="mt-2 flex items-center justify-center gap-2 px-6 py-2 rounded-full text-white/70 font-medium text-sm transition-all hover:bg-white/10 border border-transparent hover:border-white/20"
                        >
                            Visit Website
                        </button>
                    </div>
                )}

                {platform?.type === 'desktop' && (
                    <div className="mt-6">
                        <button
                            onClick={() => router.push('/')}
                            className="text-white/70 hover:text-white text-sm font-medium underline-offset-4 hover:underline transition-colors"
                        >
                            Click here if you are not redirected
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
