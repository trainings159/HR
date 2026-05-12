import React, { useMemo, useState } from 'react';
import { Search, MapPin, Building2, ChevronRight } from 'lucide-react';

import { MOCK_USERS } from '../data';
import { Card, Avatar } from './ui/core';
import { cn } from '../lib/utils';

export function DirectoryLite() {
    const [search, setSearch] = useState('');
    const [activeDept, setActiveDept] = useState('All');

    const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'HR'];

    const filteredUsers = useMemo(() => {
        return MOCK_USERS.filter((u) => {
            const query = search.toLowerCase();
            const matchesSearch =
                (u.name?.toLowerCase().includes(query) ?? false) ||
                (u.department?.toLowerCase().includes(query) ?? false);

            const matchesDept =
                activeDept === 'All' || u.department === activeDept;

            return matchesSearch && matchesDept;
        });
    }, [search, activeDept]);

    return (
        <div className="p-4 md:hidden space-y-5">

            {/* HEADER */}
            <div className="space-y-4">
                <h1 className="text-xl font-bold text-slate-900">
                    Directory
                </h1>

                {/* SEARCH */}
                <div className="relative">
                    <Search
                        size={16}
                        className="absolute left-3 top-3 text-slate-400"
                    />
                    <input
                        type="text"
                        placeholder="Search people or teams..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-3 text-sm border rounded-xl focus:outline-none focus:ring"
                    />
                </div>

                {/* FILTERS */}
                <div className="flex gap-2 overflow-x-auto">
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setActiveDept(dept)}
                            className={cn(
                                "px-3 py-1 text-[10px] font-semibold uppercase rounded-full whitespace-nowrap border",
                                activeDept === dept
                                    ? "bg-black text-white"
                                    : "bg-white text-slate-500"
                            )}
                        >
                            {dept}
                        </button>
                    ))}
                </div>
            </div>

            {/* LIST */}
            <div className="space-y-3">
                {filteredUsers.map((user) => (
                    <Card
                        key={user.id}
                        className="p-3 flex items-center gap-3 active:bg-slate-50 transition cursor-pointer"
                    >
                        <Avatar src={user.avatar} name={user.name} size="md" />

                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm truncate">
                                {user.name}
                            </p>

                            <p className="text-xs text-slate-500 truncate">
                                {user.role}
                            </p>

                            <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-500">
                                <span className="flex items-center gap-1">
                                    <Building2 size={10} />
                                    {user.department}
                                </span>

                                <span className="flex items-center gap-1">
                                    <MapPin size={10} />
                                    {user.location?.split(',')[0]}
                                </span>
                            </div>
                        </div>

                        <ChevronRight size={16} className="text-slate-300" />
                    </Card>
                ))}
            </div>

            {/* EMPTY STATE */}
            {filteredUsers.length === 0 && (
                <div className="text-center text-sm text-slate-500 py-10">
                    No results found.
                </div>
            )}
        </div>
    );
}