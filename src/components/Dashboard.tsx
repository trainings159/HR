import React from 'react';
import {
    Trophy,
    TrendingUp,
    MessageSquare,
    Heart,
    Share2,
    Calendar,
    Star,
    ShieldCheck,
    Plus,
    FileText,
    LayoutGrid,
    ChevronRight,
    PlayCircle,
    BookOpen
} from 'lucide-react';

import {
    MOCK_ANNOUNCEMENTS,
    MOCK_RECOGNITIONS,
    MOCK_USERS
} from '../data';

import { Card, Avatar, Badge, Button } from './ui/core';
import { useApp } from '../store';
export function Dashboard() {
    const { setCurrentPage } = useApp();

    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto bg-slate-50 min-h-screen">

            {/* HERO (simplified) */}
            <div className="bg-indigo-600 text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6">
                <div>
                    <div className="mb-4">
                        <Badge className="mb-4 bg-white/20 text-white">
                            System Active
                        </Badge>
                    </div>

                    <h1 className="text-3xl font-bold mb-2">
                        Welcome back
                    </h1>

                    <p className="text-white/80">
                        Your network activity is in the top tier this week.
                    </p>

                    <div className="mt-6 flex gap-3">
                        <Button variant="secondary">Post Update</Button>
                        <Button variant="ghost">Enterprise Hub</Button>
                    </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 text-center min-w-[160px]">
                    <p className="text-xs uppercase">Engagement</p>
                    <p className="text-3xl font-bold">8.4</p>
                    <p className="text-green-300 text-sm">+12%</p>
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* ANNOUNCEMENTS */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="font-bold text-sm uppercase text-slate-500">
                        Announcements
                    </h2>

                    {MOCK_ANNOUNCEMENTS.slice(0, 3).map((ann) => (
                        <Card key={ann.id} className="p-5">
                            <div className="flex justify-between text-xs text-slate-400 mb-2">
                                <span>Official</span>
                                <span>{ann.publishDate}</span>
                            </div>

                            <h3 className="font-bold text-lg mb-2">{ann.title}</h3>
                            <p className="text-sm text-slate-600">{ann.content}</p>

                            <div className="flex gap-4 mt-4 text-slate-400 text-sm">
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
                    <Card className="p-5">
                        <h3 className="font-bold text-sm mb-4">Quick Actions</h3>

                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: MessageSquare, label: 'Post' },
                                { icon: Trophy, label: 'Kudos' },
                                { icon: LayoutGrid, label: 'Poll' },
                                { icon: FileText, label: 'Upload' }
                            ].map((a) => (
                                <button
                                    key={a.label}
                                    className="p-3 border rounded-lg text-center text-xs hover:bg-slate-50"
                                >
                                    <a.icon size={18} className="mx-auto mb-1" />
                                    {a.label}
                                </button>
                            ))}
                        </div>
                    </Card>

                    {/* EVENTS */}
                    <Card className="p-5">
                        <h3 className="font-bold text-sm mb-4">Events</h3>

                        {[
                            { day: 15, title: 'All Hands' },
                            { day: 20, title: 'Tech Talk' },
                            { day: 22, title: 'Culture Jam' }
                        ].map((e, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center py-2 border-b last:border-0 cursor-pointer"
                                onClick={() => setCurrentPage('events')}
                            >
                                <div>
                                    <p className="font-semibold text-sm">{e.title}</p>
                                    <p className="text-xs text-slate-400">May {e.day}</p>
                                </div>
                                <ChevronRight size={16} />
                            </div>
                        ))}
                    </Card>

                    {/* GLOBAL TAGS */}
                    <Card className="p-5">
                        <h3 className="font-bold text-sm mb-4">Trending</h3>

                        <div className="flex flex-wrap gap-2">
                            {['RemoteWork', 'AI', 'Hackathon', 'Design', 'Growth'].map(tag => (
                                <span
                                    key={tag}
                                    className="text-xs bg-slate-100 px-2 py-1 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </Card>

                </div>
            </div>

            {/* RECOGNITION */}
            <div>
                <h2 className="font-bold text-sm uppercase text-slate-500 mb-4">
                    Recognition
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    {MOCK_RECOGNITIONS.map((kudos) => (
                        <Card key={kudos.id} className="p-5">
                            <p className="text-sm italic text-slate-600 mb-3">
                                "{kudos.message}"
                            </p>

                            <div className="flex items-center justify-between text-xs text-slate-400">
                                <span>{kudos.type}</span>
                                <span>{kudos.date}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
}