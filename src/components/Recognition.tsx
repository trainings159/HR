import React, { useMemo, useState } from 'react';

import {
    Award,
    Plus,
    MessageSquare,
    Heart,
    Share2,
    Sparkles,
    Trophy,
    ShieldCheck,
    PartyPopper,
    Send,
    Flag,
    Star
} from 'lucide-react';

import {
    MOCK_RECOGNITIONS,
    MOCK_USERS
} from '../data';

import {
    Card,
    Avatar,
    Button,
    Badge
} from './ui/core';

export function RecognitionPage() {

    const recognitions = useMemo(() => MOCK_RECOGNITIONS, []);

    const [replyText, setReplyText] = useState('');

    const getUser = (id: string) =>
        MOCK_USERS.find(u => u.id === id);

    const topUsers = [...MOCK_USERS]
        .sort((a, b) => b.kudosReceived - a.kudosReceived)
        .slice(0, 5);

    return (

        <div className="p-6 space-y-6 max-w-6xl mx-auto">

            {/* HERO */}

            <div className="bg-slate-900 rounded-2xl p-8 text-white space-y-4">

                <Badge className="text-[10px] uppercase font-bold">
                    Recognition Culture
                </Badge>

                <h1 className="text-2xl font-bold">
                    Celebration Pulse
                    <Sparkles size={24} className="text-indigo-300" />
                </h1>

                <p className="text-sm text-slate-300 max-w-2xl">
                    Encourage peer appreciation, celebrate milestones,
                    welcome employees, and strengthen engagement culture.
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400">

                    <Button variant="secondary">
                        <Plus size={14} className="mr-2" />
                        Give Recognition
                    </Button>

                    <Button variant="secondary">
                        <PartyPopper size={14} className="mr-2" />
                        Celebration Post
                    </Button>

                </div>

            </div>


            {/* STATS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                <Card className="p-5">
                    <p className="text-xs uppercase font-bold text-slate-400">
                        Appreciations
                    </p>
                    <h2 className="text-3xl font-black mt-2">
                        428
                    </h2>
                </Card>

                <Card className="p-5">
                    <p className="text-xs uppercase font-bold text-slate-400">
                        Celebration Posts
                    </p>
                    <h2 className="text-3xl font-black mt-2">
                        94
                    </h2>
                </Card>

                <Card className="p-5">
                    <p className="text-xs uppercase font-bold text-slate-400">
                        Employee Stories
                    </p>
                    <h2 className="text-3xl font-black mt-2">
                        63
                    </h2>
                </Card>

                <Card className="p-5">
                    <p className="text-xs uppercase font-bold text-slate-400">
                        Engagement Score
                    </p>
                    <h2 className="text-3xl font-black mt-2">
                        91%
                    </h2>
                </Card>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* LEFT SIDEBAR */}

                <aside className="lg:col-span-3 space-y-6">

                    {/* FILTERS */}

                    <Card className="p-5 space-y-3">

                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Feed Filters
                        </h3>

                        {[
                            'All',
                            'Peer Appreciation',
                            'Achievements',
                            'New Joinees',
                            'Celebrations',
                            'Leadership'
                        ].map(filter => (

                            <button
                                key={filter}
                                className="w-full text-left px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-medium text-slate-700 transition"
                            >
                                {filter}
                            </button>

                        ))}

                    </Card>

                    {/* MODERATION */}

                    <Card className="p-5 space-y-4">

                        <div className="flex items-center gap-2">
                            <ShieldCheck
                                size={16}
                                className="text-emerald-500"
                            />

                            <h3 className="text-sm font-black uppercase">
                                Moderation
                            </h3>
                        </div>

                        <ul className="space-y-3 text-xs text-slate-500">

                            <li>
                                • AI spam & duplicate filtering
                            </li>

                            <li>
                                • HR flagged-content review
                            </li>

                            <li>
                                • Toxicity detection system
                            </li>

                            <li>
                                • Rate limiting for excessive posts
                            </li>

                        </ul>

                    </Card>

                    {/* LEADERBOARD */}

                    <Card className="p-5 space-y-4">

                        <div className="flex items-center gap-2">
                            <Trophy
                                size={16}
                                className="text-amber-500"
                            />

                            <h3 className="text-sm font-black uppercase">
                                Weekly Leaders
                            </h3>
                        </div>

                        {topUsers.map((user, idx) => (

                            <div
                                key={user.id}
                                className="flex items-center gap-3"
                            >

                                <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                                    #{idx + 1}
                                </div>

                                <Avatar
                                    src={user.avatar}
                                    name={user.name}
                                    size="sm"
                                />

                                <div className="flex-1">

                                    <p className="text-sm font-semibold">
                                        {user.name}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        {user.kudosReceived} kudos
                                    </p>

                                </div>

                                <Star
                                    size={14}
                                    className="text-amber-500"
                                />

                            </div>

                        ))}

                    </Card>

                </aside>

                {/* MAIN FEED */}

                <main className="lg:col-span-9 space-y-6">

                    {/* NEW JOINERS */}

                    <Card className="p-6">

                        <div className="flex items-center justify-between mb-5">

                            <div>

                                <h2 className="text-lg font-black">
                                    Welcome New Joinees
                                </h2>

                                <p className="text-sm text-slate-500">
                                    Recently joined employees
                                </p>

                            </div>

                            <Badge variant="success">
                                New Team Members
                            </Badge>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            {MOCK_USERS.slice(0, 3).map((user) => (

                                <div
                                    key={user.id}
                                    className="bg-slate-50 rounded-2xl p-4 border"
                                >

                                    <div className="flex items-center gap-3">

                                        <Avatar
                                            src={user.avatar}
                                            name={user.name}
                                            size="md"
                                        />

                                        <div>

                                            <p className="font-semibold">
                                                {user.name}
                                            </p>

                                            <p className="text-xs text-slate-400">
                                                {user.role}
                                            </p>

                                        </div>

                                    </div>

                                    <Button
                                        variant="ghost"
                                        className="w-full mt-4"
                                    >
                                        Welcome
                                    </Button>

                                </div>

                            ))}

                        </div>

                    </Card>

                    {/* RECOGNITION FEED */}

                    {recognitions.map((pulse) => {

                        const from = getUser(pulse.fromId);
                        const to = getUser(pulse.toId);

                        return (

                            <Card
                                key={pulse.id}
                                className="p-6 border border-slate-100 space-y-5"
                            >

                                {/* HEADER */}

                                <div className="flex justify-between items-start">

                                    <div className="flex items-center gap-3">

                                        <Avatar
                                            src={from?.avatar || ''}
                                            name={from?.name || ''}
                                            size="md"
                                        />

                                        <div>

                                            <p className="text-sm font-semibold text-slate-900">
                                                {from?.name}
                                            </p>

                                            <p className="text-xs text-slate-400">
                                                Appreciated{' '}
                                                <span className="font-semibold">
                                                    {to?.name}
                                                </span>
                                            </p>

                                        </div>

                                    </div>

                                    <Badge variant="admin">
                                        {pulse.type}
                                    </Badge>

                                </div>

                                {/* MESSAGE */}

                                <div className="bg-slate-50 rounded-2xl p-5">

                                    <p className="text-sm text-slate-700 italic leading-relaxed">
                                        {pulse.message}
                                    </p>

                                </div>

                                {/* REACTIONS */}

                                <div className="flex flex-wrap gap-2">

                                    {Object.entries(pulse.reactions).map(
                                        ([emoji, count]) => (

                                            <button
                                                key={emoji}
                                                className="flex items-center gap-1 px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs font-bold transition"
                                            >
                                                <span>{emoji}</span>
                                                <span>{count}</span>
                                            </button>

                                        )
                                    )}

                                </div>

                                {/* EMPLOYEE EXPERIENCE */}

                                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">

                                    <p className="text-xs uppercase font-bold text-indigo-500 mb-2">
                                        Employee Experience
                                    </p>

                                    <p className="text-sm text-slate-700">
                                        “Working across teams on this initiative
                                        made collaboration much smoother and
                                        helped improve delivery confidence.”
                                    </p>

                                </div>

                                {/* REPLIES */}

                                <div className="border-t pt-4 space-y-4">

                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <MessageSquare size={14} />
                                            12 Replies
                                        </div>

                                        <button className="text-xs text-red-500 flex items-center gap-1">
                                            <Flag size={12} />
                                            Report
                                        </button>

                                    </div>

                                    <div className="flex gap-3">

                                        <input
                                            value={replyText}
                                            onChange={(e) =>
                                                setReplyText(e.target.value)
                                            }
                                            placeholder="Write a reply..."
                                            className="flex-1 border rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900"
                                        />

                                        <Button>
                                            <Send size={14} />
                                        </Button>

                                    </div>

                                </div>

                                {/* ACTIONS */}

                                <div className="flex items-center justify-end gap-5 pt-2 border-t">

                                    <button className="text-slate-400 hover:text-indigo-600 transition">
                                        <MessageSquare size={18} />
                                    </button>

                                    <button className="text-slate-400 hover:text-pink-500 transition">
                                        <Heart size={18} />
                                    </button>

                                    <button className="text-slate-400 hover:text-emerald-500 transition">
                                        <Share2 size={18} />
                                    </button>

                                </div>

                            </Card>

                        );
                    })}

                </main>

            </div>

        </div>

    );
}