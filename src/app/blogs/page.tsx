'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BLOGS } from '@/data/blogs';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BlogListingPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-4 border border-brand-blue/20">
                        Health & Telehealth Insights
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple tracking-tight leading-tight pb-2">
                        MediMan Blogs
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Expert articles, health tips, and the latest updates on telehealth services in Sri Lanka.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-24 px-4 md:px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOGS.map((blog, index) => (
                        <Link
                            key={blog.id}
                            href={`/blogs/${blog.slug}`}
                            className="group relative flex flex-col h-full bg-white rounded-3xl p-5 border border-slate-200/80 shadow-lg shadow-brand-blue/5 ring-1 ring-brand-blue/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-brand-blue/20"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl mb-5 bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col space-y-3 px-2 pb-2">
                                {/* Meta */}
                                <div className="flex items-center text-xs text-slate-500 space-x-4 mb-2 flex-wrap gap-y-2">
                                    <div className="flex items-center text-brand-blue/80 font-medium">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {blog.date}
                                    </div>
                                    <div className="flex items-center text-brand-blue/80 font-medium">
                                        <User className="w-3 h-3 mr-1" />
                                        {blog.author}
                                    </div>
                                    <div className="flex items-center text-brand-blue font-medium">
                                        <Tag className="w-3 h-3 mr-1" />
                                        {blog.category}
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
                                    {blog.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                {/* Read More */}
                                <div className="pt-4 mt-auto flex items-center text-brand-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
