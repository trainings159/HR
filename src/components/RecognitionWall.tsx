import React, { useMemo } from 'react';
import { Trophy, Star, Award } from 'lucide-react';

import { MOCK_RECOGNITIONS, MOCK_USERS } from '../data';
import { Card, Avatar, Badge, Button } from './ui/core';

export function RecognitionWall() {

    const recognitions = useMemo(() => MOCK_RECOGNITIONS, []);

    const getUser = (id: string) =>
        MOCK_USERS.find(u => u.id === id);

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">

            {/* HEADER */}
            <div className="flex justify-between items-end">

                <div>
                    <h1 className="text-xl font-bold text-slate-900">
                        Kudos Wall
                    </h1>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Celebrating wins
                    </p>
                </div>

                <Button className="text-xs font-bold uppercase h-9 px-4 flex items-center gap-2">
                    <Award size={14} />
                    Recognize
                </Button>

            </div>

            {/* FEED (horizontal scroll removed for performance) */}
            <div className="space-y-4">

                {recognitions.map((pulse) => {

                    const from = getUser(pulse.fromId);
                    const to = getUser(pulse.toId);

                    return (
                        <Card
                            key={pulse.id}
                            className="p-5 space-y-4 border border-slate-100"
                        >

                            {/* HEADER */}
                            <div className="flex items-center gap-3">

                                <Avatar
                                    src={from?.avatar || ''}
                                    name={from?.name || 'User'}
                                    size="sm"
                                />

                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        {from?.name} → {to?.name}
                                    </p>

                                    <p className="text-[10px] text-slate-400 uppercase font-bold">
                                        {pulse.type} Recognition
                                    </p>
                                </div>

                            </div>

                            {/* MESSAGE */}
                            <p className="text-sm text-slate-700 italic">
                                "{pulse.message}"
                            </p>

                            {/* RECEIVER */}
                            <div className="flex items-center gap-3">

                                <Avatar
                                    src={to?.avatar || ''}
                                    name={to?.name || 'User'}
                                    size="sm"
                                />

                                <span className="text-xs font-semibold text-slate-900">
                                    {to?.name}
                                </span>

                            </div>

                            {/* REACTIONS */}
                            <div className="flex gap-2">

                                {Object.entries(pulse.reactions)
                                    .slice(0, 2)
                                    .map(([emoji, count]) => (
                                        <span
                                            key={emoji}
                                            className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-xs font-bold"
                                        >
                                            {emoji} {count}
                                        </span>
                                    ))}

                            </div>

                        </Card>
                    );
                })}

            </div>

            {/* LEADERBOARD */}
            <div className="space-y-3">

                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Weekly Leaderboard
                </h3>

                {MOCK_USERS.slice(0, 3).map((user, idx) => (
                    <div
                        key={user.id}
                        className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-lg"
                    >

                        <span className="text-xs font-bold text-slate-400 w-6">
                            #{idx + 1}
                        </span>

                        <Avatar src={user.avatar} name={user.name} size="sm" />

                        <div className="flex-1">
                            <p className="text-sm font-semibold text-slate-900">
                                {user.name}
                            </p>
                            <p className="text-[10px] text-slate-400 uppercase font-bold">
                                {user.department}
                            </p>
                        </div>

                        <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                            <Star size={12} />
                            {user.kudosReceived || 0}
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}