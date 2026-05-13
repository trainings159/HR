import React, { useMemo, useState } from 'react';
import {
    MessageCircle,
    ThumbsUp,
    TrendingUp,
    Plus,
    Hash,
    Search,
    Filter
} from 'lucide-react';

import { MOCK_POSTS, MOCK_USERS } from '../data';
import { Card, Badge, Avatar, Button } from './ui/core';
import { PageHeader } from './ui/PageHeader';

export function Forum() {
    const [search, setSearch] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const getAuthor = (id: string) =>
        MOCK_USERS.find((u) => u.id === id);

    const filters = ['All', 'Engineering', 'Design', 'Sales', 'HR'];

    const trendingTopics = [
        { name: 'RemoteWork', count: 156 },
        { name: 'Hackathon2026', count: 82 },
        { name: 'Performance', count: 45 },
        { name: 'Architecture', count: 32 }
    ];

    // 🔎 filtered posts (lightweight logic)
    const filteredPosts = useMemo(() => {
        return MOCK_POSTS.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.content.toLowerCase().includes(search.toLowerCase());

            const matchesFilter =
                activeFilter === 'All' || post.category === activeFilter;

            return matchesSearch && matchesFilter;
        });
    }, [search, activeFilter]);


    return (
        <div className="p-6 space-y-6 max-w-6xl mx-auto">
            {/* HEADER */}

            <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-4">

                <Badge className="text-[10px] uppercase font-bold">
                    Community Forum
                </Badge>

                <h1 className="text-2xl font-bold">
                    Collaboration Hub
                </h1>

                <p className="text-sm text-slate-300 max-w-2xl">
                    A space for discussions, ideas, and cross-team collaboration across the organization.
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400">

                    <span className="flex items-center gap-2">
                        <MessageCircle size={14} />
                        Active Discussions
                    </span>

                    <span className="flex items-center gap-2">
                        <TrendingUp size={14} />
                        Trending Topics
                    </span>

                </div>

            </div>

            {/* SEARCH + FILTERS */}
            <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">

                <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 flex-1">
                    <Search size={14} className="text-slate-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search discussions..."
                        className="w-full text-sm outline-none"
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`text-xs font-bold px-3 py-1.5 rounded-full border transition ${activeFilter === f
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* POSTS */}
                <div className="lg:col-span-3 space-y-4">

                    {filteredPosts.map((post) => {
                        const author = getAuthor(post.authorId);

                        return (
                            <Card
                                key={post.id}
                                className="p-5 space-y-4 hover:shadow-md transition"
                            >

                                {/* AUTHOR */}
                                <div className="flex items-center justify-between">

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

                                            <p className="text-[10px] text-slate-400 uppercase font-bold">
                                                {author?.department}
                                            </p>
                                        </div>
                                    </div>

                                    <Badge className="text-[9px] uppercase">
                                        {post.category}
                                    </Badge>

                                </div>

                                {/* CONTENT */}
                                <div>
                                    <h3 className="font-bold text-base text-slate-900">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-slate-500 mt-1">
                                        {post.content}
                                    </p>
                                </div>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center gap-1 text-[10px] font-bold bg-slate-100 px-2 py-1 rounded-full uppercase"
                                        >
                                            <Hash size={10} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* ACTIONS */}
                                <div className="flex items-center justify-between pt-3 border-t">

                                    <div className="flex items-center gap-5 text-slate-500">

                                        <button className="flex items-center gap-1 hover:text-slate-900 transition">
                                            <ThumbsUp size={14} />
                                            <span className="text-xs font-bold">
                                                {post.likes}
                                            </span>
                                        </button>

                                        <button className="flex items-center gap-1 hover:text-slate-900 transition">
                                            <MessageCircle size={14} />
                                            <span className="text-xs font-bold">
                                                {post.replies}
                                            </span>
                                        </button>

                                    </div>

                                    <span className="text-[10px] text-slate-400">
                                        2h ago
                                    </span>

                                </div>

                            </Card>
                        );
                    })}

                </div>

                {/* SIDEBAR */}
                <aside className="space-y-4">

                    {/* TRENDING */}
                    <Card className="p-5">

                        <div className="flex items-center gap-2 mb-4 text-slate-700">
                            <TrendingUp size={16} />
                            <h3 className="text-xs font-bold uppercase">
                                Trending Topics
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {trendingTopics.map((t) => (
                                <div
                                    key={t.name}
                                    className="flex justify-between text-sm"
                                >
                                    <span className="text-slate-600">
                                        #{t.name}
                                    </span>
                                    <span className="text-xs text-slate-400">
                                        {t.count}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </Card>

                    {/* COMMUNITY INSIGHT */}
                    <Card className="p-5 bg-slate-900 text-white">

                        <h3 className="text-xs font-bold uppercase mb-3 opacity-70">
                            Community Insight
                        </h3>

                        <p className="text-xs opacity-80 mb-4">
                            Strong collaboration improves delivery speed and innovation.
                        </p>

                        <Button className="w-full bg-white text-black text-[10px] font-bold uppercase h-10 hover:bg-slate-200">
                            View Insights
                        </Button>

                    </Card>

                </aside>

            </div>
        </div>
    );
}