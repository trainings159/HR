import React, { useMemo } from 'react';
import { Search, Book, Clock, Eye, Tags, FileText } from 'lucide-react';

import { MOCK_ARTICLES, MOCK_USERS } from '../data';
import { Card, Badge, Button, Avatar } from './ui/core';

export function KnowledgeHub() {

    const categories = [
        'Engineering Pulse',
        'Product Flux',
        'Human Capital',
        'Design Syntax',
        'Growth Marketing',
        'Scale Sales'
    ];

    // Optimize author lookup once per render
    const authorMap = useMemo(() => {
        const map = new Map();
        MOCK_USERS.forEach((u) => map.set(u.id, u));
        return map;
    }, []);

    return (
        <div className="p-6 space-y-8 max-w-6xl mx-auto">

            {/* HEADER */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-4">

                <Badge className="text-[10px] uppercase font-bold">
                    Knowledge Hub
                </Badge>

                <h1 className="text-2xl font-bold">
                    Intelligence Archives
                </h1>

                <p className="text-sm text-slate-300">
                    System documentation and organizational knowledge base.
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock size={14} />
                    Active Indexing: 4,242 Documents
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* SIDEBAR */}
                <aside className="md:col-span-3 space-y-6">

                    <div>
                        <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 flex items-center gap-2">
                            <Tags size={14} />
                            Categories
                        </h3>

                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className="w-full text-left px-3 py-2 text-xs font-medium border rounded-lg bg-white text-slate-600"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Card className="p-4 space-y-3">

                        <h4 className="text-xs font-bold uppercase text-slate-600">
                            Contribute
                        </h4>

                        <p className="text-xs text-slate-500">
                            Add new documentation or updates to the knowledge base.
                        </p>

                        <Button className="w-full text-xs font-bold uppercase h-10">
                            Upload Document
                        </Button>

                    </Card>

                </aside>

                {/* MAIN CONTENT */}
                <main className="md:col-span-9 space-y-4">

                    {/* HEADER ROW */}
                    <div className="flex justify-between items-center">

                        <h2 className="text-xs font-bold uppercase text-slate-500 flex items-center gap-2">
                            <Book size={14} />
                            Recent Articles
                        </h2>

                        <button className="p-2 border rounded-lg">
                            <Search size={16} />
                        </button>

                    </div>

                    {/* ARTICLES */}
                    <div className="space-y-4">

                        {MOCK_ARTICLES.map((article) => {
                            const author = authorMap.get(article.authorId);

                            return (
                                <Card key={article.id} className="p-5 space-y-4">

                                    {/* META */}
                                    <div className="flex flex-wrap gap-3 text-xs text-slate-500">

                                        <Badge className="text-[9px] uppercase">
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

                                    {/* TITLE */}
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {article.title}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        {article.summary}
                                    </p>

                                    {/* AUTHOR + ACTION */}
                                    <div className="flex items-center justify-between pt-3 border-t">

                                        <div className="flex items-center gap-2">

                                            <Avatar
                                                src={author?.avatar || ''}
                                                name={author?.name || 'User'}
                                                size="sm"
                                            />

                                            <div>
                                                <p className="text-xs font-semibold">
                                                    {author?.name || 'Unknown'}
                                                </p>
                                                <p className="text-[10px] text-slate-400 uppercase">
                                                    Author
                                                </p>
                                            </div>

                                        </div>

                                        <Button className="text-[10px] font-bold uppercase h-9 px-3">
                                            Read
                                        </Button>

                                    </div>

                                </Card>
                            );
                        })}

                    </div>

                </main>

            </div>
        </div>
    );
}