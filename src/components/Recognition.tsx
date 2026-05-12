import React, { useMemo } from 'react';
import { Award, Plus, MessageSquare, Heart, Share2, Sparkles } from 'lucide-react';

import { MOCK_RECOGNITIONS, MOCK_USERS } from '../data';
import { Card, Avatar, Button } from './ui/core';

export function RecognitionPage() {

    const recognitions = useMemo(() => MOCK_RECOGNITIONS, []);

    const getUser = (id: string) =>
        MOCK_USERS.find(u => u.id === id);

    return (
        <div className="p-6 space-y-6 max-w-3xl mx-auto">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between gap-4">

                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        Pulse <Sparkles size={18} className="text-indigo-500" />
                    </h1>
                    <p className="text-sm text-slate-500">
                        Celebrate wins across your team
                    </p>
                </div>

                <Button className="text-xs font-bold uppercase h-9 px-4 flex items-center gap-2">
                    <Plus size={16} />
                    Give Recognition
                </Button>

            </div>

            {/* FILTERS */}
            <div className="flex gap-2 overflow-x-auto pb-2">

                {[
                    'All',
                    'My Team',
                    'Engineering',
                    'Leadership',
                    'Anniversaries'
                ].map(filter => (
                    <Button
                        key={filter}
                        variant="secondary"
                        className="text-[10px] font-bold uppercase whitespace-nowrap px-4 h-8"
                    >
                        {filter}
                    </Button>
                ))}

            </div>

            {/* FEED */}
            <div className="space-y-4">

                {recognitions.map((pulse) => {

                    const from = getUser(pulse.fromId);
                    const to = getUser(pulse.toId);

                    return (
                        <Card
                            key={pulse.id}
                            className="p-5 border-l-4 border-l-indigo-500 space-y-4"
                        >

                            {/* HEADER */}
                            <div className="flex justify-between">

                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        {from?.name} → {to?.name}
                                    </p>

                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                                        {new Date(pulse.date).toLocaleDateString()} • {pulse.type}
                                    </p>
                                </div>

                                <Award size={18} className="text-indigo-500" />

                            </div>

                            {/* MESSAGE */}
                            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 italic">
                                {pulse.message}
                            </div>

                            {/* REACTIONS */}
                            <div className="flex items-center gap-2">

                                {Object.entries(pulse.reactions).map(([emoji, count]) => (
                                    <button
                                        key={emoji}
                                        className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-xs font-bold"
                                    >
                                        <span>{emoji}</span>
                                        <span>{count}</span>
                                    </button>
                                ))}

                            </div>

                            {/* ACTIONS */}
                            <div className="flex items-center justify-end gap-3 pt-2">

                                <button className="text-slate-400">
                                    <MessageSquare size={16} />
                                </button>

                                <button className="text-slate-400">
                                    <Heart size={16} />
                                </button>

                                <button className="text-slate-400">
                                    <Share2 size={16} />
                                </button>

                            </div>

                        </Card>
                    );
                })}

            </div>

        </div>
    );
}