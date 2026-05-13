import React from 'react';
import {
    Trophy,
    MessageSquare,
    Heart,
    ChevronRight,
    LayoutGrid,
    FileText
} from 'lucide-react';

import {
    MOCK_ANNOUNCEMENTS,
    MOCK_RECOGNITIONS
} from '../data';

import { Card, Badge, Button } from './ui/core';
import { useApp } from '../store';

export function Dashboard() {
    const { setCurrentPage } = useApp();

    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto">

            {/* ================= HERO (UNIFIED STYLE) ================= */}
            <section className="bg-slate-900 text-white rounded-2xl p-8 space-y-6">

                <Badge className="text-[10px] uppercase font-bold bg-white/10 text-white">
                    System Active
                </Badge>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">
                        Welcome back
                    </h1>

                    <p className="text-sm text-slate-300 max-w-2xl">
                        Your network activity is in the top tier this week. Here’s what’s happening across your organization.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" className="h-10">
                        Post Update
                    </Button>

                    <Button className="h-10 bg-white text-black hover:bg-slate-200">
                        Enterprise Hub
                    </Button>
                </div>

            </section>

            {/* ================= MAIN GRID ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* ANNOUNCEMENTS */}
                <div className="lg:col-span-2 space-y-4">

                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Announcements
                    </h2>

                    {MOCK_ANNOUNCEMENTS.slice(0, 3).map((ann) => (
                        <Card key={ann.id} className="p-6 space-y-3">

                            <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                                <span>Official</span>
                                <span>{ann.publishDate}</span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900">
                                {ann.title}
                            </h3>

                            <p className="text-sm text-slate-600">
                                {ann.content}
                            </p>

                            <div className="flex gap-5 pt-2 text-slate-400 text-sm">
                                <button className="flex items-center gap-1">
                                    <Heart size={14} /> 24
                                </button>

                                <button className="flex items-center gap-1">
                                    <MessageSquare size={14} /> 8
                                </button>
                            </div>

                        </Card>
                    ))}
                </div>

                {/* SIDEBAR */}
                <div className="space-y-6">

                    {/* QUICK ACTIONS */}
                    <Card className="p-5 space-y-4">

                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            Quick Actions
                        </h3>

                        <div className="grid grid-cols-2 gap-3">

                            {[
                                { icon: MessageSquare, label: 'Post' },
                                { icon: Trophy, label: 'Kudos' },
                                { icon: LayoutGrid, label: 'Poll' },
                                { icon: FileText, label: 'Upload' }
                            ].map((a) => (
                                <button
                                    key={a.label}
                                    className="p-3 border rounded-xl text-center text-xs font-semibold hover:bg-slate-50 transition"
                                >
                                    <a.icon size={18} className="mx-auto mb-1" />
                                    {a.label}
                                </button>
                            ))}

                        </div>

                    </Card>

                    {/* EVENTS */}
                    <Card className="p-5 space-y-4">

                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            Events
                        </h3>

                        {[
                            { day: 15, title: 'All Hands' },
                            { day: 20, title: 'Tech Talk' },
                            { day: 22, title: 'Culture Jam' }
                        ].map((e, i) => (
                            <div
                                key={i}
                                onClick={() => setCurrentPage('events')}
                                className="flex justify-between items-center py-2 border-b last:border-0 cursor-pointer hover:bg-slate-50 px-2 rounded-lg"
                            >
                                <div>
                                    <p className="font-semibold text-sm">{e.title}</p>
                                    <p className="text-xs text-slate-400">May {e.day}</p>
                                </div>

                                <ChevronRight size={16} className="text-slate-400" />
                            </div>
                        ))}

                    </Card>

                    {/* TRENDING */}
                    <Card className="p-5 space-y-3">

                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            Trending
                        </h3>

                        <div className="flex flex-wrap gap-2">

                            {['RemoteWork', 'AI', 'Hackathon', 'Design', 'Growth'].map(tag => (
                                <span
                                    key={tag}
                                    className="text-xs bg-slate-100 px-3 py-1 rounded-full font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}

                        </div>

                    </Card>

                </div>
            </div>

            {/* ================= RECOGNITION ================= */}
            <section className="space-y-4">

                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Recognition
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                    {MOCK_RECOGNITIONS.map((kudos) => (
                        <Card key={kudos.id} className="p-6 space-y-3">

                            <p className="text-sm italic text-slate-600">
                                "{kudos.message}"
                            </p>

                            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                                <span>{kudos.type}</span>
                                <span>{kudos.date}</span>
                            </div>

                        </Card>
                    ))}

                </div>

            </section>

        </div>
    );
}