import React, { useMemo, useState } from 'react';
import { Search, Building2, MapPin, ChevronRight } from 'lucide-react';

import { MOCK_USERS } from '../data';
import { Card, Avatar, Badge, Button } from './ui/core';
import { useApp } from '../store';
import { cn } from '../lib/utils';

export function Directory() {
    const { setCurrentPage } = useApp();

    const [searchTerm, setSearchTerm] = useState('');
    const [filterDept, setFilterDept] = useState('All');

    const depts = ['All', 'Engineering', 'Design', 'HR', 'Marketing', 'Sales'];

    const filteredUsers = useMemo(() => {
        return MOCK_USERS.filter((user) => {
            const name = user.name?.toLowerCase() ?? '';
            const role = user.role?.toLowerCase() ?? '';
            const search = searchTerm.toLowerCase();

            const matchesSearch =
                name.includes(search) || role.includes(search);

            const matchesDept =
                filterDept === 'All' || user.department === filterDept;

            return matchesSearch && matchesDept;
        });
    }, [searchTerm, filterDept]);

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">

            {/* HEADER */}
            <div className="bg-white border rounded-xl p-6 space-y-4">
                <div>
                    <Badge>Network Index</Badge>
                    <h1 className="text-2xl font-bold mt-2">Talent Directory</h1>
                    <p className="text-sm text-slate-500">
                        Find and connect with colleagues across your network.
                    </p>
                </div>

                {/* SEARCH + FILTER */}
                <div className="flex flex-col md:flex-row gap-4">

                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {depts.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setFilterDept(dept)}
                                className={cn(
                                    "px-3 py-1 text-xs border rounded-full",
                                    filterDept === dept
                                        ? "bg-black text-white"
                                        : "bg-white text-slate-600"
                                )}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>

                </div>
            </div>

            {/* USERS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {filteredUsers.map((user) => (
                    <Card
                        key={user.id}
                        className="p-5 cursor-pointer hover:shadow-md transition"
                        onClick={() => setCurrentPage('profile')}
                    >
                        {/* USER HEADER */}
                        <div className="flex items-center gap-3 mb-4">
                            <Avatar src={user.avatar} name={user.name} />
                            <div>
                                <p className="font-semibold text-sm">{user.name}</p>
                                <p className="text-xs text-slate-500">{user.role}</p>
                            </div>
                        </div>

                        {/* DETAILS */}
                        <div className="space-y-2 text-xs text-slate-600">
                            <div className="flex items-center gap-2">
                                <Building2 size={14} />
                                {user.department}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} />
                                {user.location}
                            </div>
                        </div>

                        {/* ACTION */}
                        <div className="mt-4 flex justify-end">
                            <ChevronRight size={16} className="text-slate-400" />
                        </div>
                    </Card>
                ))}

            </div>

            {/* EMPTY STATE */}
            {filteredUsers.length === 0 && (
                <div className="text-center text-sm text-slate-500 py-10">
                    No users found.
                </div>
            )}
        </div>
    );
}