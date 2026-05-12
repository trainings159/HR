import React from 'react';
import { MessageCircle, ThumbsUp, TrendingUp, Plus, Hash } from 'lucide-react';

import { MOCK_POSTS, MOCK_USERS } from '../data';
import { Card, Badge, Avatar, Button } from './ui/core';

export function Forum() {

    const getAuthor = (id: string) =>
        MOCK_USERS.find((u) => u.id === id);

    const trendingTopics = [
        { name: 'RemoteWork', count: 156 },
        { name: 'Hackathon2026', count: 82 },
        { name: 'Performance', count: 45 },
        { name: 'Architecture', count: 32 }
    ];

    return (
        <div className="p-6 space-y-6 max-w-6xl mx-auto">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Collaboration Forums
                    </h1>
                    <p className="text-sm text-slate-500">
                        Join conversations across teams.
                    </p>
                </div>

                <Button className="flex items-center gap-2 text-xs font-bold uppercase h-10 px-4">
                    <Plus size={16} />
                    New Discussion
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* POSTS */}
                <div className="lg:col-span-3 space-y-4">

                    {MOCK_POSTS.map((post) => {
                        const author = getAuthor(post.authorId);

                        return (
                            <Card key={post.id} className="p-5 space-y-4">

                                {/* AUTHOR */}
                                <div className="flex items-center gap-3">
                                    <Avatar
                                        src={author?.avatar || ''}
                                        name={author?.name || 'User'}
                                        size="sm"
                                    />

                                    <div>
                                        <p className="text-sm font-semibold">
                                            {author?.name || 'Unknown'}
                                        </p>

                                        <p className="text-[10px] text-slate-400 uppercase font-bold">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div>
                                    <h3 className="font-bold text-base mb-1">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        {post.content}
                                    </p>
                                </div>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center gap-1 text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded uppercase"
                                        >
                                            <Hash size={10} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* ACTIONS */}
                                <div className="flex items-center justify-between pt-3 border-t">

                                    <div className="flex items-center gap-4 text-slate-500">

                                        <button className="flex items-center gap-1">
                                            <ThumbsUp size={14} />
                                            <span className="text-xs font-bold">
                                                {post.likes}
                                            </span>
                                        </button>

                                        <button className="flex items-center gap-1">
                                            <MessageCircle size={14} />
                                            <span className="text-xs font-bold">
                                                {post.replies}
                                            </span>
                                        </button>

                                    </div>

                                    <Badge className="text-[9px] uppercase">
                                        {post.category}
                                    </Badge>

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

                    {/* COMMUNITY CARD */}
                    <Card className="p-5 bg-slate-900 text-white">

                        <h3 className="text-xs font-bold uppercase mb-3 opacity-70">
                            Community Spotlight
                        </h3>

                        <div className="flex items-center gap-3 mb-4">
                            <Avatar
                                src={MOCK_USERS[0]?.avatar || ''}
                                name="User"
                                size="sm"
                            />
                            <div>
                                <p className="text-sm font-bold">
                                    {MOCK_USERS[0]?.name || 'Top Contributor'}
                                </p>
                                <p className="text-[10px] uppercase opacity-60">
                                    MVP Contributor
                                </p>
                            </div>
                        </div>

                        <p className="text-xs opacity-80 mb-4">
                            Collaboration drives innovation. Share your insights.
                        </p>

                        <Button className="w-full bg-white text-black text-[10px] font-bold uppercase h-10">
                            View Leaderboard
                        </Button>

                    </Card>

                </aside>

            </div>
        </div>
    );
}