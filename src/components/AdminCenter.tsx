import React, { useState } from 'react';
import {
    Users,
    MousePointer2,
    MessageSquare,
    TrendingUp,
    ArrowUpRight,
    Activity,
    ShieldAlert,
    Download,
    Search,
    CheckCircle2,
    XCircle,
    Sparkles,
    Clock,
    Eye,
    Filter
} from 'lucide-react';

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

import {
    MOCK_ANALYTICS,
    MOCK_USERS,
    MOCK_RECOGNITIONS
} from '../data';

import {
    Card,
    Button,
    Badge,
    Avatar
} from './ui/core';

import { cn } from '../lib/utils';

export function AdminCenter() {
    const [activeTab, setActiveTab] = useState('analytics');

    const stats = [
        {
            label: 'Sentiments',
            value: '8.4',
            change: '+2%',
            icon: Activity,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50'
        },
        {
            label: 'Emp. Engagement',
            value: `${MOCK_ANALYTICS.engagementRate}%`,
            change: '+5.4%',
            icon: MousePointer2,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            label: 'Interaction Vol',
            value: '12.4k',
            change: '+22%',
            icon: MessageSquare,
            color: 'text-orange-600',
            bg: 'bg-orange-50'
        },
        {
            label: 'Active Users',
            value: MOCK_ANALYTICS.activeUsers,
            icon: Users,
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        }
    ];

    const adminTabs = [
        {
            id: 'analytics',
            label: 'Analytics',
            icon: TrendingUp
        },
        {
            id: 'comms',
            label: 'Communications',
            icon: MessageSquare
        },
        {
            id: 'moderation',
            label: 'Moderation',
            icon: ShieldAlert
        }
    ];

    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-6">

            {/* HEADER */}

            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                    <Badge className="mb-6 bg-indigo-100 text-indigo-700 border-none">
                        Admin Control Center
                    </Badge>

                    <h1 className="text-3xl font-bold text-slate-900 mt-3">
                        Platform Governance
                    </h1>

                    <p className="text-sm text-slate-500 mt-2">
                        Monitor engagement, moderation, communications and analytics.
                    </p>
                </div>

                <div className="flex gap-3">
                    <Button
                        variant="secondary"
                        className="flex items-center gap-2"
                    >
                        <Download size={16} />
                        Export
                    </Button>

                    <Button className="flex items-center gap-2">
                        <ShieldAlert size={16} />
                        System Audit
                    </Button>
                </div>
            </div>

            {/* TAB NAVIGATION */}

            <div className="flex flex-wrap gap-2 bg-white border border-slate-200 rounded-xl p-2 w-fit">

                {adminTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            activeTab === tab.id
                                ? "bg-slate-900 text-white"
                                : "text-slate-600 hover:bg-slate-100"
                        )}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}

            </div>

            {/* ANALYTICS */}

            {activeTab === 'analytics' && (
                <div className="space-y-6">

                    {/* STATS */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                        {stats.map((stat) => (
                            <Card
                                key={stat.label}
                                className="p-6 border border-slate-200 rounded-xl shadow-sm"
                            >
                                <div className="flex justify-between items-start mb-5">

                                    <div
                                        className={cn(
                                            "w-12 h-12 rounded-xl flex items-center justify-center",
                                            stat.bg
                                        )}
                                    >
                                        <stat.icon
                                            size={22}
                                            className={stat.color}
                                        />
                                    </div>

                                    {stat.change && (
                                        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                                            {stat.change}
                                            <ArrowUpRight size={12} />
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                                        {stat.label}
                                    </p>

                                    <h2 className="text-3xl font-bold text-slate-900">
                                        {stat.value}
                                    </h2>
                                </div>
                            </Card>
                        ))}

                    </div>

                    {/* CHART + AI PANEL */}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* CHART */}

                        <Card className="lg:col-span-2 p-6 border border-slate-200 rounded-xl shadow-sm">

                            <div className="flex items-center justify-between mb-6">

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Engagement Velocity
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Monthly interaction throughput.
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs">
                                        7 Days
                                    </button>

                                    <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs">
                                        30 Days
                                    </button>
                                </div>
                            </div>

                            <div className="h-72">

                                <ResponsiveContainer width="100%" height="100%">

                                    <AreaChart data={MOCK_ANALYTICS.weeklyTrend}>

                                        <defs>
                                            <linearGradient
                                                id="colorValue"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="5%"
                                                    stopColor="#4F46E5"
                                                    stopOpacity={0.15}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor="#4F46E5"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            vertical={false}
                                            stroke="#e2e8f0"
                                        />

                                        <XAxis
                                            dataKey="date"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{
                                                fill: '#64748b',
                                                fontSize: 12
                                            }}
                                        />

                                        <YAxis hide />

                                        <Tooltip />

                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#4F46E5"
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            fill="url(#colorValue)"
                                            isAnimationActive={false}
                                        />

                                    </AreaChart>

                                </ResponsiveContainer>

                            </div>

                        </Card>

                        {/* AI PANEL */}

                        <Card className="p-6 border border-slate-200 rounded-xl shadow-sm">

                            <div className="flex items-center gap-3 mb-6">

                                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                                    <Sparkles
                                        size={18}
                                        className="text-indigo-600"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        AI Insights
                                    </h3>

                                    <p className="text-xs text-slate-500">
                                        Real-time recommendations
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">

                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                    <div className="flex justify-between mb-2">
                                        <Badge variant="success">
                                            High Impact
                                        </Badge>

                                        <TrendingUp
                                            size={14}
                                            className="text-emerald-500"
                                        />
                                    </div>

                                    <p className="text-sm font-medium text-slate-800">
                                        Peak engagement detected in Engineering.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                    <div className="flex justify-between mb-2">
                                        <Badge variant="warn">
                                            Attention
                                        </Badge>

                                        <ShieldAlert
                                            size={14}
                                            className="text-amber-500"
                                        />
                                    </div>

                                    <p className="text-sm font-medium text-slate-800">
                                        Marketing sentiment dipped this week.
                                    </p>
                                </div>

                            </div>

                            <Button className="w-full mt-6">
                                Generate Audit
                            </Button>

                        </Card>

                    </div>

                </div>
            )}

            {/* MODERATION */}

            {activeTab === 'moderation' && (
                <div className="space-y-6">

                    {/* TOP BAR */}

                    <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                                <ShieldAlert
                                    size={22}
                                    className="text-red-500"
                                />
                            </div>

                            <div>
                                <h2 className="font-semibold text-slate-900">
                                    Moderation Queue
                                </h2>

                                <p className="text-sm text-slate-500">
                                    {MOCK_RECOGNITIONS.length} events pending review
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">

                            <div className="relative">

                                <Search
                                    size={16}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm outline-none"
                                />

                            </div>

                            <Button
                                variant="secondary"
                                className="flex items-center gap-2"
                            >
                                <Filter size={14} />
                                Filter
                            </Button>

                        </div>

                    </div>

                    {/* LIST */}

                    <div className="space-y-4">

                        {MOCK_RECOGNITIONS.map((pulse) => (

                            <Card
                                key={pulse.id}
                                className="p-6 border border-slate-200 rounded-xl shadow-sm"
                            >

                                <div className="flex flex-col lg:flex-row lg:items-center gap-6">

                                    <div className="flex-1 space-y-4">

                                        <div className="flex flex-wrap items-center gap-3">

                                            <div className="flex items-center gap-2">

                                                <Avatar
                                                    src={
                                                        MOCK_USERS.find(
                                                            u => u.id === pulse.fromId
                                                        )?.avatar || ''
                                                    }
                                                    name="F"
                                                    size="sm"
                                                />

                                                <span className="text-sm font-medium">
                                                    {
                                                        MOCK_USERS.find(
                                                            u => u.id === pulse.fromId
                                                        )?.name
                                                    }
                                                </span>

                                            </div>

                                            <ArrowUpRight
                                                size={14}
                                                className="text-slate-400"
                                            />

                                            <div className="flex items-center gap-2">

                                                <Avatar
                                                    src={
                                                        MOCK_USERS.find(
                                                            u => u.id === pulse.toId
                                                        )?.avatar || ''
                                                    }
                                                    name="T"
                                                    size="sm"
                                                />

                                                <span className="text-sm font-medium">
                                                    {
                                                        MOCK_USERS.find(
                                                            u => u.id === pulse.toId
                                                        )?.name
                                                    }
                                                </span>

                                            </div>

                                            <div className="ml-auto flex items-center gap-1 text-xs text-slate-500">
                                                <Clock size={12} />
                                                {pulse.date}
                                            </div>

                                        </div>

                                        <p className="text-slate-700 italic">
                                            "{pulse.message}"
                                        </p>

                                        <div className="flex gap-2 flex-wrap">

                                            <Badge variant="admin">
                                                Recognition
                                            </Badge>

                                            <Badge variant="default">
                                                {pulse.type}
                                            </Badge>

                                            <Badge variant="success">
                                                Positive
                                            </Badge>

                                        </div>

                                    </div>

                                    {/* ACTIONS */}

                                    <div className="flex gap-2">

                                        <button className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                            <CheckCircle2 size={20} />
                                        </button>

                                        <button className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                                            <XCircle size={20} />
                                        </button>

                                        <button className="w-11 h-11 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                                            <Search size={20} />
                                        </button>

                                    </div>

                                </div>

                            </Card>

                        ))}

                    </div>

                </div>
            )}

            {/* COMMS */}

            {activeTab === 'comms' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* SCHEDULED */}

                    <div className="space-y-4">

                        <h3 className="font-semibold text-slate-900">
                            Scheduled Communications
                        </h3>

                        {[
                            {
                                title: 'New Benefits Overview',
                                scheduled: 'Tomorrow, 9:00 AM',
                                status: 'Draft'
                            },
                            {
                                title: 'Global Hackathon Launch',
                                scheduled: 'Sept 15, 10:00 AM',
                                status: 'Scheduled'
                            }
                        ].map((comm) => (

                            <Card
                                key={comm.title}
                                className="p-6 border border-slate-200 rounded-xl"
                            >

                                <div className="flex justify-between items-center mb-4">

                                    <Badge>
                                        {comm.status}
                                    </Badge>

                                    <span className="text-xs text-slate-500">
                                        {comm.scheduled}
                                    </span>

                                </div>

                                <h4 className="font-medium text-slate-900 mb-4">
                                    {comm.title}
                                </h4>

                                <div className="flex gap-2">

                                    <Button
                                        variant="secondary"
                                        className="flex-1"
                                    >
                                        Preview
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        Edit
                                    </Button>

                                </div>

                            </Card>

                        ))}

                    </div>

                    {/* INSIGHTS */}

                    <div className="space-y-4">

                        <h3 className="font-semibold text-slate-900">
                            Communication Insights
                        </h3>

                        <Card className="p-6 border border-slate-200 rounded-xl space-y-6">

                            <div>

                                <div className="flex justify-between mb-2 text-sm">
                                    <span>Total Reach</span>
                                    <span className="font-medium text-indigo-600">
                                        98.2%
                                    </span>
                                </div>

                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[98.2%] bg-indigo-600 rounded-full" />
                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-2 text-sm">
                                    <span>Read-Through Rate</span>
                                    <span className="font-medium text-indigo-600">
                                        64.5%
                                    </span>
                                </div>

                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[64.5%] bg-indigo-600 rounded-full" />
                                </div>

                            </div>

                            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">

                                <p className="text-sm text-indigo-800 mb-4">
                                    Posts with video attachments have 2.4x more engagement.
                                </p>

                                <Button className="w-full">
                                    View Asset Library
                                </Button>

                            </div>

                        </Card>

                    </div>

                </div>
            )}

        </div>
    );
}