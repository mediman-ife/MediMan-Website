'use client';

import { useState, useEffect } from 'react';
import {
    Facebook,
    Linkedin,
    Twitter,
    Link as LinkIcon,
    Check,
    MessageCircle,
    Instagram
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [currentUrl, setCurrentUrl] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(`${window.location.origin}/blogs/${slug}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            url: `https://wa.me/?text=${encodedTitle} - ${encodedUrl}`,
            color: 'hover:bg-[#25D366] hover:text-white',
        },
        {
            name: 'Facebook',
            icon: Facebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: 'hover:bg-[#1877F2] hover:text-white',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: 'hover:bg-[#0A66C2] hover:text-white',
        },
        {
            name: 'X (Twitter)',
            icon: Twitter, // Lucide might export it as Twitter or X, usually Twitter in older versions or X in newer. Using generic Twitter name if X fails, or import X as Twitter.
            // Actually checking footer used 'X'. Let's use 'Twitter' icon but call it X. Or just use 'X' icon if available.
            // Footer used: import { X } from 'lucide-react';
            // But X is usually the close icon in Lucide?
            // Footer might have aliased it or Lucide inserted it. 
            // Let's stick to standard names. If X is close, I should check.
            // Re-reading footer: import { Share2, Link as LinkIcon, MessageCircle, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
            // In Lucide, X is indeed the Close icon. 
            // The footer might be using it for the "X" brand, but visually it is just a cross.
            // I'll use Twitter icon for clarity if possible, or just the generic share.
            // Wait, Lucide has a 'Twitter' icon.
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: 'hover:bg-black hover:text-white',
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: `https://www.instagram.com/`, // Instagram doesn't support direct link sharing via URL, creating a generic link or instruction might be needed, but usually just linking to IG or copying link is the fallback. 
            // Actually, standard "Share to Instagram" often involves native apps. For web, maybe just copy link?
            // Or we can leave it as a link to Instagram - users often copy link manually.
            // Let's use a generic Instagram URL or maybe just omitted if it's not truly shareable.
            // But user REQUESTED Instagram.
            // A common pattern is to open Instagram and let user paste, or just Copy Link is the main way.
            // Let's make it open instagram.com.
            color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white',
            onClick: (e: React.MouseEvent) => {
                e.preventDefault(); // Prevent default anchor behavior
                // Special handling for Instagram? 
                // It's hard to share directly to feed/stories from web without native share sheet.
                // Maybe just copy link and notify?
                handleCopy();
                window.open('https://instagram.com', '_blank');
            }
        }
    ];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
            toast.success('Link copied to clipboard!');
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Share this article
            </h3>
            <div className="flex flex-wrap gap-2">
                {shareLinks.map((link) => (
                    link.onClick ? (
                        <button
                            key={link.name}
                            onClick={link.onClick}
                            className={cn(
                                "p-3 rounded-full bg-gray-100 text-gray-600 transition-all duration-300",
                                link.color
                            )}
                            title={`Share on ${link.name}`}
                        >
                            <link.icon className="w-5 h-5" />
                        </button>
                    ) : (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "p-3 rounded-full bg-gray-100 text-gray-600 transition-all duration-300",
                                link.color
                            )}
                            title={`Share on ${link.name}`}
                        >
                            <link.icon className="w-5 h-5" />
                        </a>
                    )
                ))}

                {/* Copy Link Button */}
                <button
                    onClick={handleCopy}
                    className={cn(
                        "p-2.5 rounded-full bg-slate-100 text-slate-600 transition-all duration-300 transform hover:scale-110 hover:bg-slate-800 hover:text-white relative",
                    )}
                    aria-label="Copy Link"
                >
                    {copied ? <Check className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
                </button>
            </div>
        </div>
    );
}
