import React, { useMemo } from 'react';
import { Trophy } from 'lucide-react';

import { MOCK_USERS } from '../data';
import { Card, Avatar, Badge } from './ui/core';

export function Leaderboard() {

    const sortedUsers = useMemo(() => {
        return [...MOCK_USERS].sort(
            (a, b) => (b.kudosReceived ?? 0) - (a.kudosReceived ?? 0)
        );
    }, []);

    const top = sortedUsers.slice(0, 3);
    const rest = sortedUsers.slice(3);

    if (!sortedUsers.length) return null;

    return (
        <div className="p-6 space-y-8 max-w-5xl mx-auto">

            {/* HEADER */}
            <div className="text-center space-y-2">
                <Badge className="bg-amber-100 text-amber-700 text-xs">
                    Engagement Season
                </Badge>

                <h1 className="text-2xl font-bold text-slate-900">
                    Leaderboard
                </h1>

                <p className="text-sm text-slate-500">
                    Recognizing top contributors across the platform.
                </p>
            </div>

            {/* TOP 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">

                {/* 2ND */}
                {top[1] && (
                    <Card className="p-6 text-center">
                        <div className="relative inline-block">
                            <Avatar
                                src={top[1].avatar}
                                name={top[1].name}
                                size="lg"
                            />
                            <span className="absolute -top-2 -right-2 w-6 h-6 text-xs font-bold bg-slate-200 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </div>

                        <p className="font-semibold mt-3">{top[1].name}</p>
                        <p className="text-xs text-slate-400">{top[1].role}</p>

                        <p className="mt-4 text-xl font-bold">
                            {top[1].kudosReceived}
                        </p>
                        <p className="text-[10px] uppercase text-slate-400">
                            Points
                        </p>
                    </Card>
                )}

                {/* 1ST */}
                {top[0] && (
                    <Card className="p-6 text-center border border-indigo-200">

                        <div className="relative inline-block">
                            <Avatar
                                src={top[0].avatar}
                                name={top[0].name}
                                size="xl"
                            />
                            <span className="absolute -top-2 -right-2 w-7 h-7 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                                <Trophy size={14} />
                            </span>
                        </div>

                        <p className="font-bold mt-3">{top[0].name}</p>
                        <p className="text-xs text-indigo-500 uppercase">
                            {top[0].role}
                        </p>

                        <p className="mt-5 text-3xl font-bold">
                            {top[0].kudosReceived}
                        </p>

                        <Badge className="mt-3 text-xs">
                            Champion
                        </Badge>
                    </Card>
                )}

                {/* 3RD */}
                {top[2] && (
                    <Card className="p-6 text-center">

                        <div className="relative inline-block">
                            <Avatar
                                src={top[2].avatar}
                                name={top[2].name}
                                size="lg"
                            />
                            <span className="absolute -top-2 -right-2 w-6 h-6 text-xs font-bold bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </div>

                        <p className="font-semibold mt-3">{top[2].name}</p>
                        <p className="text-xs text-slate-400">{top[2].role}</p>

                        <p className="mt-4 text-xl font-bold">
                            {top[2].kudosReceived}
                        </p>

                        <p className="text-[10px] uppercase text-slate-400">
                            Points
                        </p>

                    </Card>
                )}

            </div>

            {/* LIST */}
            <Card className="overflow-hidden">

                {/* HEADER ROW */}
                <div className="px-6 py-3 text-xs font-bold uppercase text-slate-400 border-b flex justify-between">
                    <span>Rank</span>
                    <span>Employee</span>
                    <span>Department</span>
                    <span>Points</span>
                </div>

                {/* ROWS */}
                <div className="divide-y">

                    {rest.map((user, idx) => (
                        <div
                            key={user.id}
                            className="px-6 py-3 flex justify-between items-center hover:bg-slate-50"
                        >

                            <span className="text-slate-400 font-bold w-10">
                                #{idx + 4}
                            </span>

                            <div className="flex items-center gap-2 flex-1">
                                <Avatar
                                    src={user.avatar}
                                    name={user.name}
                                    size="sm"
                                />
                                <div>
                                    <p className="text-sm font-semibold">
                                        {user.name}
                                    </p>
                                    <p className="text-[10px] text-slate-400">
                                        {user.role}
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-slate-500 w-32 text-right">
                                {user.department}
                            </span>

                            <span className="font-bold w-20 text-right">
                                {user.kudosReceived}
                            </span>

                        </div>
                    ))}

                </div>

            </Card>
        </div>
    );
}
