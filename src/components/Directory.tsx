import React, { useState } from 'react';
import { Search, Building2, MapPin, ChevronRight } from 'lucide-react';

import { MOCK_USERS } from '../data';
import { Card, Avatar, Badge, Button } from './ui/core';
import { cn } from '../lib/utils';
import { useApp } from '../store';

export function Directory() {
    const { setCurrentPage } = useApp();

    const [searchTerm, setSearchTerm] = useState('');
    const [filterDept, setFilterDept] = useState<string>('All');

    const depts = ['All', 'Engineering', 'Design', 'HR', 'Marketing', 'Sales'];

    const filteredUsers = MOCK_USERS.filter(user => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDept =
            filterDept === 'All' || user.department === filterDept;

        return matchesSearch && matchesDept;
    });

    return (
        <div className="p-6 space-y-8 max-w-7xl mx-auto">

            {/* ✅ STANDARDIZED HEADER (matches Knowledge Hub / Recognition / Leaderboard style) */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-4">

                <Badge className="text-[10px] uppercase font-bold">
                    Network Index
                </Badge>

                <h1 className="text-2xl font-bold">
                    Talent Directory
                </h1>

                <p className="text-sm text-slate-300">
                    Discover and connect with colleagues across your organization.
                </p>

                <div className="flex flex-col md:flex-row gap-4 pt-2">

                    {/* SEARCH */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search people, roles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white text-slate-900 focus:outline-none focus:ring"
                        />
                    </div>

                    {/* FILTERS */}
                    <div className="flex flex-wrap gap-2">
                        {depts.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setFilterDept(dept)}
                                className={cn(
                                    "px-3 py-1 text-xs font-bold uppercase rounded-full border",
                                    filterDept === dept
                                        ? "bg-white text-slate-900"
                                        : "bg-transparent text-slate-200 border-slate-600 hover:bg-slate-800"
                                )}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>

                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {filteredUsers.map((user) => (
                    <Card
                        key={user.id}
                        className="p-5 hover:shadow-md transition cursor-pointer"
                        onClick={() => setCurrentPage('profile')}
                    >

                        {/* USER */}
                        <div className="flex items-center gap-3 mb-4">
                            <Avatar src={user.avatar} name={user.name} size="md" />

                            <div>
                                <p className="text-sm font-semibold">{user.name}</p>
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
                        <div className="mt-4 flex justify-end text-slate-400">
                            <ChevronRight size={16} />
                        </div>

                    </Card>
                ))}

            </div>
            {/* 👇 BOTTOM INSIGHTS SECTION (DEPTH + SEPARATION) */}
            <div className="mt-14 pt-10 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 rounded-2xl px-2 py-8 space-y-6">

                {/* SECTION HEADER */}
                <div className="text-center space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Organization Insights
                    </h3>
                    <p className="text-sm text-slate-600">
                        Live overview of your internal network activity
                    </p>
                </div>

                {/* INSIGHT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* PEOPLE INSIGHT */}
                    <Card className="p-5 bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                        <p className="text-[10px] font-bold uppercase text-slate-400">
                            People Overview
                        </p>

                        <div className="mt-3 space-y-2">
                            <p className="text-sm font-semibold text-slate-900">
                                Total Employees: {MOCK_USERS.length}
                            </p>
                            <p className="text-xs text-slate-500">
                                Active across 6 departments
                            </p>
                            <p className="text-xs text-slate-500">
                                Collaboration index: Strong
                            </p>
                        </div>
                    </Card>

                    {/* CONNECTIONS */}
                    <Card className="p-5 bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                        <p className="text-[10px] font-bold uppercase text-slate-400">
                            Suggested Connections
                        </p>

                        <div className="mt-3 space-y-3">
                            {MOCK_USERS.slice(0, 3).map((u) => (
                                <div key={u.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Avatar src={u.avatar} name={u.name} size="sm" />
                                        <div>
                                            <p className="text-xs font-semibold text-slate-900">
                                                {u.name}
                                            </p>
                                            <p className="text-[10px] text-slate-400">
                                                {u.department}
                                            </p>
                                        </div>
                                    </div>

                                    <button className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800">
                                        Connect
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* ACTIONS */}
                    <Card className="p-5 bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                        <p className="text-[10px] font-bold uppercase text-slate-400">
                            Quick Actions
                        </p>

                        <div className="mt-3 space-y-2 text-sm">

                            <button className="w-full text-left hover:text-indigo-600 transition">
                                💬 Message HR Team
                            </button>

                            <button className="w-full text-left hover:text-indigo-600 transition">
                                🧭 View Org Structure
                            </button>

                            <button className="w-full text-left hover:text-indigo-600 transition">
                                🤝 Request Introduction
                            </button>

                        </div>
                    </Card>

                </div>

                {/* FOOTER NOTE */}
                <div className="text-center pt-4">
                    <p className="text-[10px] text-slate-400">
                        Showing {filteredUsers.length} colleagues • Last updated just now
                    </p>
                </div>

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