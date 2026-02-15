import { BLOGS } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, Link as LinkIcon } from 'lucide-react';
import { Metadata } from 'next';
import { ShareButtons } from '@/components/blog/share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { BlogCTA } from '@/components/blog/blog-cta';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export async function generateStaticParams() {
    return BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
        };
    }

    const ogImage = blog.image.startsWith('http')
        ? blog.image
        : `${process.env.NEXT_PUBLIC_APP_URL || 'https://mediman.life'}${blog.image}`;

    return {
        title: `${blog.title} | MediMan Blog`,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            type: 'article',
            publishedTime: blog.date,
            authors: [blog.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.excerpt,
            images: [ogImage],
        },
    };
}

function generateId(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function BlogContent({ content }: { content: string }) {
    const sections = content.split(/\n\n+/); // Split by one or more empty lines

    return (
        <div className="space-y-6 text-lg text-slate-700 leading-8">
            {sections.map((section, index) => {
                const trimmed = section.trim();
                if (!trimmed) return null;

                // Check for List (starts with 4 spaces, tab, -, or *)
                if (/^(\s{4}|\t|- |\* )/.test(section)) {
                    const items = section.split('\n').filter(line => line.trim());
                    return (
                        <ul key={index} className="list-disc pl-6 space-y-3 my-6 text-slate-700">
                            {items.map((item, i) => (
                                <li key={i} className="pl-2">
                                    {item.replace(/^(\s{4}|\t|- |\* )/, '').trim()}
                                </li>
                            ))}
                        </ul>
                    );
                }

                // Check for Header (Short, no ending period usually, or specific structure)
                // Heuristic: Short length, not a sentence (no dot at end, unless it is a question?)
                // Also ignore image markdown if mistakenly identified
                const isHeader = trimmed.length < 100 && !trimmed.endsWith('.') && !trimmed.endsWith('”') && !trimmed.endsWith('"') && !trimmed.includes('![');

                if (isHeader) {
                    const id = generateId(trimmed);
                    return (
                        <h3 id={id} key={index} className="scroll-mt-32 text-2xl font-bold text-slate-900 mt-10 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple w-fit">
                            {trimmed}
                        </h3>
                    );
                }

                // Standard Paragraph
                return <p key={index} className="mb-4 text-justify- md:text-left">{trimmed}</p>;
            })}
        </div>
    );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    // JSON-LD for FAQPage
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: blog.faqs?.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })) || [],
    };

    return (
        <main className="min-h-screen bg-slate-50 font-sans pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero / Header Image */}
            <div className="relative h-[60vh] min-h-[400px] w-full bg-slate-900">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover opacity-60 blur-sm scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-10 pb-16">
                    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blogs
                        </Link>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-semibold tracking-wide uppercase">
                                {blog.category}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold flex items-center backdrop-blur-md">
                                <Clock className="w-3 h-3 mr-1" /> 5 min read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg max-w-4xl">
                            {blog.title}
                        </h1>

                        <div className="flex items-center text-white/80 space-x-6 text-sm md:text-base">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3 border border-white/20">
                                    <User className="w-5 h-5 text-white" />
                                </div>
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 opacity-70" />
                                <span>{blog.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container with Grid Layout */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

                    {/* Main Content Column */}
                    <div className="bg-white rounded-3xl p-6 md:p-12 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 h-fit">
                        {/* Share / Action Bar */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-100 pb-6 mb-8 gap-4">
                            <div className="text-slate-500 italic text-sm">
                                Posted in <span className="font-semibold text-brand-blue">{blog.category}</span>
                            </div>
                            <ShareButtons title={blog.title} slug={blog.slug} />
                        </div>

                        {/* Actual Content */}
                        <article>
                            <BlogContent content={blog.content} />
                        </article>

                        {/* FAQs Section */}
                        {blog.faqs && blog.faqs.length > 0 && (
                            <div className="mt-16 pt-10 border-t border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    {blog.faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-100">
                                            <AccordionTrigger className="text-left text-slate-800 font-medium hover:text-brand-primary hover:no-underline py-4">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        )}

                        {/* References Section */}
                        {blog.references && blog.references.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-slate-100 bg-slate-50/50 p-6 rounded-xl">
                                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                    <LinkIcon className="w-4 h-4 mr-2" /> References & Further Reading
                                </h4>
                                <ul className="space-y-2">
                                    {blog.references.map((ref, index) => (
                                        <li key={index}>
                                            <a
                                                href={ref.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-brand-blue hover:underline hover:text-brand-dark transition-colors flex items-start"
                                            >
                                                <span className="mr-2">•</span>
                                                {ref.title || ref.url}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-md text-sm hover:bg-slate-200 transition-colors cursor-default">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Column (TOC) */}
                    <div className="hidden lg:block space-y-8">
                        {blog.toc && blog.toc.length > 0 && (
                            <TableOfContents toc={blog.toc} />
                        )}
                    </div>
                </div>
            </div>

            <BlogCTA />
        </main>
    );
}
