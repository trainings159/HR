import React, { useMemo, useState } from 'react';
import { Trophy, TrendingUp, TrendingDown } from 'lucide-react';

import { MOCK_USERS } from '../data';
import { Card, Avatar, Badge } from './ui/core';

export function Leaderboard() {

    const [filter, setFilter] = useState<'weekly' | 'monthly' | 'all'>('all');
    const [dept, setDept] = useState('All');

    const departments = ['All', 'Engineering', 'Design', 'HR', 'Sales', 'Marketing'];

    const sortedUsers = useMemo(() => {
        return [...MOCK_USERS].sort(
            (a, b) => (b.kudosReceived ?? 0) - (a.kudosReceived ?? 0)
        );
    }, []);

    const filtered = useMemo(() => {
        if (dept === 'All') return sortedUsers;
        return sortedUsers.filter(u => u.department === dept);
    }, [dept, sortedUsers]);

    const top = filtered.slice(0, 3);
    const rest = filtered.slice(3);

    const avgKudos =
        filtered.reduce((acc, u) => acc + (u.kudosReceived ?? 0), 0) /
        (filtered.length || 1);

    return (
        <div className="p-6 space-y-6 max-w-6xl mx-auto">

            {/* HEADER (consistent system style) */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-4">

                <Badge className="text-[10px] uppercase font-bold">
                    Engagement Dashboard
                </Badge>

                <h1 className="text-2xl font-bold">
                    Leaderboard
                </h1>

                <p className="text-sm text-slate-300">
                    Recognizing top contributors and engagement across the organization.
                </p>

                {/* mini stats */}
                <div className="flex flex-wrap gap-4 text-xs text-slate-400">

                    <span>👥 {filtered.length} Employees</span>
                    <span>⭐ Avg {avgKudos.toFixed(1)} Kudos</span>
                    <span>🏆 Top Performer: {top[0]?.name}</span>

                </div>

            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-2 justify-between">

                {/* time filter */}
                <div className="flex gap-2">
                    {['all', 'weekly', 'monthly'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`text-xs font-bold px-3 py-1.5 rounded-full border ${filter === f
                                    ? 'bg-slate-900 text-white border-slate-900'
                                    : 'bg-white text-slate-600'
                                }`}
                        >
                            {f.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* dept filter */}
                <div className="flex gap-2 overflow-x-auto">
                    {departments.map(d => (
                        <button
                            key={d}
                            onClick={() => setDept(d)}
                            className={`text-xs px-3 py-1.5 rounded-full border ${dept === d
                                    ? 'bg-indigo-600 text-white border-indigo-600'
                                    : 'bg-white text-slate-600'
                                }`}
                        >
                            {d}
                        </button>
                    ))}
                </div>

            </div>

            {/* TOP 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {top.map((user, idx) => (
                    <Card
                        key={user.id}
                        className={`p-6 text-center relative ${idx === 0 ? 'border-indigo-300 shadow-md' : ''
                            }`}
                    >

                        {/* rank badge */}
                        <span className="absolute top-3 right-3 text-xs font-bold text-slate-400">
                            #{idx + 1}
                        </span>

                        <Avatar
                            src={user.avatar}
                            name={user.name}
                            size={idx === 0 ? 'xl' : 'lg'}
                        />

                        <p className="font-bold mt-3">{user.name}</p>

                        <p className="text-xs text-slate-400 uppercase">
                            {user.department}
                        </p>

                        <div className="mt-4 text-2xl font-bold">
                            {user.kudosReceived}
                        </div>

                        {/* trend (mock) */}
                        <div className="flex justify-center mt-2 text-xs text-green-600 gap-1">
                            <TrendingUp size={14} />
                            Rising
                        </div>

                        {idx === 0 && (
                            <Badge className="mt-3">Top Performer</Badge>
                        )}

                    </Card>
                ))}

            </div>

            {/* LIST */}
            <Card className="overflow-hidden">

                <div className="px-6 py-3 text-xs font-bold uppercase text-slate-400 border-b flex justify-between">
                    <span>Rank</span>
                    <span>Employee</span>
                    <span>Dept</span>
                    <span>Points</span>
                </div>

                <div className="divide-y">

                    {rest.map((user, idx) => (
                        <div
                            key={user.id}
                            className="px-6 py-3 flex items-center justify-between hover:bg-slate-50"
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