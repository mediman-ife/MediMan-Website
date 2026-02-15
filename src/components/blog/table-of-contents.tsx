"use client";

import { useEffect, useState } from "react";
import { TOCItem } from "@/data/blogs";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

interface TableOfContentsProps {
    toc: TOCItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        toc.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            toc.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [toc]);

    if (!toc || toc.length === 0) return null;

    return (
        <div className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-4 text-brand-dark">
                <FileText className="w-5 h-5" />
                <h3 className="font-outfit font-bold text-lg">Table of Contents</h3>
            </div>
            <nav className="flex flex-col gap-2">
                {toc.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({
                                behavior: "smooth",
                            });
                            setActiveId(item.id);
                        }}
                        className={cn(
                            "text-sm font-jakarta transition-all duration-200 border-l-2 pl-4 py-1",
                            activeId === item.id
                                ? "border-brand-primary text-brand-primary font-medium"
                                : "border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-300"
                        )}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>
        </div>
    );
}
