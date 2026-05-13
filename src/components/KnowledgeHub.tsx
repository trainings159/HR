import React, { useMemo } from 'react';
import {
    Search,
    Book,
    Clock,
    Eye,
    Tags,
    FileText,
    Image,
    MessageSquare,
    PlayCircle,
    ArrowRight
} from 'lucide-react';

import {
    MOCK_ARTICLES,
    MOCK_USERS,
    MOCK_POSTS
} from '../data';

import { Card, Badge, Button, Avatar } from './ui/core';

export function KnowledgeHub() {

    const categories = [
        'HR Policies',
        'Engineering',
        'Security',
        'Operations',
        'Design',
        'Marketing'
    ];

    const featuredDocs = [
        {
            title: 'Employee Handbook',
            type: 'PDF',
            category: 'HR'
        },
        {
            title: 'Remote Work Policy',
            type: 'DOC',
            category: 'Policy'
        },
        {
            title: 'Engineering Standards',
            type: 'Guide',
            category: 'Engineering'
        }
    ];

    const mediaGallery = [
        {
            id: 1,
            title: 'Hackathon 2026',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
        },
        {
            id: 2,
            title: 'Townhall Celebration',
            image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754'
        },
        {
            id: 3,
            title: 'Team Meetup',
            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
        }
    ];

    const authorMap = useMemo(() => {
        const map = new Map();

        MOCK_USERS.forEach((u) => {
            map.set(u.id, u);
        });

        return map;
    }, []);

    return (
        <div className="p-6 space-y-6 max-w-6xl mx-auto">

            {/* HERO */

                <section className="bg-slate-900 rounded-2xl p-8 text-white space-y-6">

                    {/* TOP META */}
                    <Badge className="text-[10px] uppercase font-bold">
                        Enterprise Knowledge System
                    </Badge>

                    {/* TITLE */}
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold">
                            Knowledge Hub
                        </h1>

                        <p className="text-sm text-slate-300 max-w-2xl">
                            Centralized access to company policies, onboarding resources,
                            internal discussions, and workplace knowledge.
                        </p>
                    </div>

                    {/* SYSTEM STATS (lighter, separated, not dominant) */}
                    <div className="flex flex-wrap gap-6 pt-2 border-t border-white/10">

                        <div>
                            <p className="text-xl font-bold">4.2K+</p>
                            <p className="text-[10px] uppercase tracking-widest text-slate-400">
                                Documents
                            </p>
                        </div>

                        <div>
                            <p className="text-xl font-bold">182</p>
                            <p className="text-[10px] uppercase tracking-widest text-slate-400">
                                Discussions
                            </p>
                        </div>

                        <div>
                            <p className="text-xl font-bold">96%</p>
                            <p className="text-[10px] uppercase tracking-widest text-slate-400">
                                Engagement
                            </p>
                        </div>

                    </div>

                </section>
            }

            {/* SEARCH (PRIMARY ACTION — now cleaner like Directory) */}
            <div className="relative">

                <Search size={18} className="absolute left-3 top-3 text-slate-400" />

                <input
                    type="text"
                    placeholder="Search policies, documents, discussions..."
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white text-slate-900 focus:outline-none focus:ring"
                />

            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* SIDEBAR */}
                <aside className="lg:col-span-3 space-y-6">

                    {/* Categories */}
                    <Card className="space-y-4">

                        <div className="flex items-center gap-2">
                            <Tags size={14} />
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">
                                Categories
                            </h3>
                        </div>

                        <div className="space-y-2">

                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className="w-full text-left px-4 py-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all text-sm font-semibold text-slate-700"
                                >
                                    {cat}
                                </button>
                            ))}

                        </div>

                    </Card>

                    {/* Upload */}
                    <Card className="space-y-4">

                        <div className="space-y-1">
                            <h3 className="text-sm font-black text-slate-900">
                                Contribute Knowledge
                            </h3>

                            <p className="text-xs text-slate-500 leading-relaxed">
                                Upload guides, policies, onboarding resources,
                                or operational documents.
                            </p>
                        </div>

                        <Button className="w-full h-11">
                            Upload Resource
                        </Button>

                    </Card>

                    {/* Forum Preview */}
                    <Card className="space-y-4">

                        <div className="flex items-center gap-2">
                            <MessageSquare size={15} />
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">
                                Active Discussions
                            </h3>
                        </div>

                        <div className="space-y-3">

                            {MOCK_POSTS.slice(0, 3).map((post) => (
                                <div
                                    key={post.id}
                                    className="border border-slate-100 rounded-xl p-3 hover:bg-slate-50 transition-all cursor-pointer"
                                >
                                    <p className="text-sm font-semibold text-slate-800 line-clamp-2">
                                        {post.title}
                                    </p>

                                    <div className="flex items-center justify-between mt-2 text-[11px] text-slate-400">
                                        <span>{post.likes} likes</span>
                                        <span>{post.replies} replies</span>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </Card>

                </aside>

                {/* MAIN CONTENT */}
                <main className="lg:col-span-9 space-y-8">

                    {/* FEATURED DOCS */}
                    <section className="space-y-4">

                        <div className="flex items-center justify-between">

                            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                <FileText size={14} />
                                Featured Resources
                            </h2>

                            <button className="text-xs font-bold text-indigo-600 flex items-center gap-1">
                                View All
                                <ArrowRight size={12} />
                            </button>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {featuredDocs.map((doc, idx) => (
                                <Card
                                    key={idx}
                                    className="space-y-4 hover:-translate-y-1 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                        <FileText size={22} />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="font-bold text-slate-900">
                                            {doc.title}
                                        </h3>

                                        <div className="flex gap-2">
                                            <Badge>{doc.category}</Badge>
                                            <Badge>{doc.type}</Badge>
                                        </div>
                                    </div>

                                    <Button variant="secondary" className="w-full h-10">
                                        Open Resource
                                    </Button>

                                </Card>
                            ))}

                        </div>

                    </section>

                    {/* ARTICLES */}
                    <section className="space-y-4">

                        <div className="flex items-center gap-2">
                            <Book size={15} />
                            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500">
                                Latest Articles
                            </h2>
                        </div>

                        <div className="space-y-4">

                            {MOCK_ARTICLES.map((article) => {

                                const author = authorMap.get(article.authorId);

                                return (
                                    <Card
                                        key={article.id}
                                        className="space-y-5"
                                    >

                                        <div className="flex flex-wrap gap-3 text-xs text-slate-500">

                                            <Badge>
                                                {article.category}
                                            </Badge>

                                            <span className="flex items-center gap-1">
                                                <Eye size={12} />
                                                {article.views}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Clock size={12} />
                                                {article.readTime}
                                            </span>

                                        </div>

                                        <div className="space-y-2">

                                            <h3 className="text-xl font-bold text-slate-900">
                                                {article.title}
                                            </h3>

                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {article.summary}
                                            </p>

                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">

                                            <div className="flex items-center gap-3">

                                                <Avatar
                                                    src={author?.avatar || ''}
                                                    name={author?.name || 'User'}
                                                    size="sm"
                                                />

                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900">
                                                        {author?.name}
                                                    </p>

                                                    <p className="text-[11px] uppercase tracking-widest text-slate-400">
                                                        Contributor
                                                    </p>
                                                </div>

                                            </div>

                                            <Button className="h-10 px-5">
                                                Read Article
                                            </Button>

                                        </div>

                                    </Card>
                                );
                            })}

                        </div>

                    </section>

                    {/* MEDIA GALLERY */}
                    <section className="space-y-4">

                        <div className="flex items-center gap-2">
                            <Image size={15} />
                            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500">
                                Workplace Moments
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {mediaGallery.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative rounded-2xl overflow-hidden group cursor-pointer h-64"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">

                                        <div>
                                            <p className="text-white font-bold">
                                                {item.title}
                                            </p>

                                            <p className="text-xs text-white/70">
                                                Event Gallery
                                            </p>
                                        </div>

                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white">
                                            <PlayCircle size={18} />
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}