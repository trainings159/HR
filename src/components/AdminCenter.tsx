import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    MousePointer2,
    MessageSquare,
    TrendingUp,
    ArrowUpRight,
    Activity,
    Settings,
    ShieldAlert,
    Download,
    Plus,
    Search,
    CheckCircle2,
    XCircle,
    Sparkles,
    Clock,
    Eye,
    MoreVertical,
    Filter
} from 'lucide-react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    Cell
} from 'recharts';
import { MOCK_ANALYTICS, MOCK_USERS, MOCK_RECOGNITIONS } from '../data';
import { Card, Button, Badge, Avatar, MotionCard } from './ui/core';
import { cn } from '../lib/utils';

export function AdminCenter() {
    const [activeTab, setActiveTab] = useState('analytics');

    const stats = [
        { label: 'Sentiments', value: '8.4', change: '+2%', icon: Activity, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { label: 'Emp. Engagement', value: `${MOCK_ANALYTICS.engagementRate}%`, change: '+5.4%', icon: MousePointer2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: 'Interaction Vol', value: '12.4k', change: '+22%', icon: MessageSquare, color: 'text-orange-600', bg: 'bg-orange-50' },
        { label: 'Active Users', value: MOCK_ANALYTICS.activeUsers, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    ];

    const adminTabs = [
        { id: 'analytics', label: 'Executive Analytics', icon: TrendingUp },
        { id: 'comms', label: 'Comms & Content', icon: MessageSquare },
        { id: 'moderation', label: 'Moderation Hub', icon: ShieldAlert },
        { id: 'gamification', label: 'Gamification', icon: Sparkles },
    ];

    return (
        <div className="p-8 space-y-8 bg-slate-50/50 min-h-screen">
            {/* Premium Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-end gap-8 bg-slate-950 text-white p-12 rounded-[4rem] shadow-2xl shadow-indigo-900/20 relative overflow-hidden bg-mesh-dark border border-white/5"
            >
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] -mr-96 -mt-96" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600 rounded-full blur-[120px] -ml-48 -mb-48 opacity-30" />
                </div>
                <div className="space-y-6 relative z-10 w-full md:w-auto text-center md:text-left">
                    <Badge variant="admin" className="bg-indigo-400/10 text-indigo-300 border-indigo-400/20 uppercase text-[9px] tracking-[0.4em] font-black py-2.5 px-6 rounded-full backdrop-blur-3xl text-glow">
                        Command Center • v2.4 Enterprise
                    </Badge>
                    <div className="space-y-2">
                        <h1 className="text-6xl font-black tracking-tight font-heading leading-[0.9] text-white">Platform Governance</h1>
                        <p className="text-slate-400 font-medium text-lg max-w-xl leading-relaxed">Intelligence orchestration, moderation streams, and organizational engagement analytics.</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                    <Button variant="secondary" className="gap-3 h-16 px-10 rounded-3xl text-[10px] font-black uppercase tracking-widest bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-xl group">
                        <Download size={18} className="group-hover:translate-y-0.5 transition-premium" /> Export intelligence
                    </Button>
                    <Button variant="brand" className="gap-3 h-16 px-12 rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-indigo-500/20">
                        <ShieldAlert size={20} /> System Audit
                    </Button>
                </div>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-1.5 bg-white/50 backdrop-blur-xl p-2 rounded-3xl border border-slate-200/50 w-full md:w-fit shadow-soft">
                    {adminTabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-premium group relative overflow-hidden",
                                activeTab === tab.id
                                    ? "bg-slate-900 text-white shadow-premium"
                                    : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                            )}
                        >
                            <tab.icon size={16} className={cn("transition-premium", activeTab === tab.id ? "text-white" : "group-hover:scale-110")} />
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-indigo-50 rounded-2xl border border-indigo-100/50">
                    <Activity size={14} className="text-indigo-600" />
                    <span className="text-[10px] font-black text-indigo-900 uppercase tracking-widest">Real-time Sync Active</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping" />
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'analytics' && (
                    <motion.div
                        key="analytics"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                    >
                        {/* Metric Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <MotionCard className="p-10 bg-white border-slate-100/50 group shadow-xl shadow-slate-200/20 hover:shadow-indigo-500/10 transition-all">
                                        <div className="flex justify-between items-start mb-10">
                                            <div className={cn("p-5 rounded-[1.5rem] shadow-sm transition-premium duration-700 group-hover:scale-110 ring-4 ring-white shadow-soft", stat.bg)}>
                                                <stat.icon size={24} className={stat.color} />
                                            </div>
                                            {stat.change && (
                                                <div className="flex items-center gap-1.5 text-emerald-600 font-black text-[10px] uppercase tracking-widest bg-emerald-50/50 px-3 py-1.5 rounded-full border border-emerald-100/50">
                                                    {stat.change} <ArrowUpRight size={12} strokeWidth={3} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1 font-heading">{stat.label}</h4>
                                            <p className="text-5xl font-black text-slate-900 tracking-tighter font-heading tabular-nums">{stat.value}</p>
                                        </div>
                                    </MotionCard>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Engagement Trend Chart */}
                            <MotionCard className="lg:col-span-2 p-10 bg-white border border-slate-100 shadow-xl shadow-slate-200/30 relative overflow-hidden">
                                <div className="flex justify-between items-center mb-12 relative z-10">
                                    <div>
                                        <h3 className="font-black text-slate-900 uppercase tracking-[0.2em] text-[10px] mb-2 font-heading">Engagement Velocity</h3>
                                        <p className="text-slate-400 text-xs font-medium">Monthly interaction throughput per department.</p>
                                    </div>
                                    <div className="flex gap-2 p-1.5 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest bg-white shadow-sm rounded-xl text-slate-900 border border-slate-100">7 Days</button>
                                        <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-premium">30 Days</button>
                                    </div>
                                </div>

                                <div className="h-72 w-full relative z-10">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={MOCK_ANALYTICS.weeklyTrend}>
                                            <defs>
                                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2} />
                                                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                            <XAxis
                                                dataKey="date"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }}
                                                dy={15}
                                            />
                                            <YAxis hide />
                                            <Tooltip
                                                contentStyle={{
                                                    borderRadius: '24px',
                                                    border: 'none',
                                                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                                                    fontSize: '11px',
                                                    fontWeight: '900',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    padding: '16px'
                                                }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#4F46E5"
                                                strokeWidth={5}
                                                fillOpacity={1}
                                                fill="url(#colorValue)"
                                                animationDuration={2500}
                                                strokeLinecap="round"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </MotionCard>

                            {/* AI Insights Panel */}
                            <Card className="p-8 bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Sparkles size={120} />
                                </div>
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                            <Sparkles size={18} className="text-indigo-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-black uppercase tracking-widest text-indigo-300">Nova Intelligence</h3>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase">AI-Driven Insights</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-1">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant="success" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 font-black text-[9px]">High Impact</Badge>
                                                <TrendingUp size={14} className="text-emerald-400" />
                                            </div>
                                            <p className="text-sm font-bold leading-tight mb-2">Peak engagement detected in Engineering pulses.</p>
                                            <p className="text-[11px] text-slate-400 leading-relaxed">Consider featuring Sarah Connor as an engagement catalyst this week.</p>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant="warn" className="bg-amber-500/20 text-amber-400 border-amber-500/30 font-black text-[9px]">Caution</Badge>
                                                <ShieldAlert size={14} className="text-amber-400" />
                                            </div>
                                            <p className="text-sm font-bold leading-tight mb-2">Sentiment dip in Marketing (Q3 Goals).</p>
                                            <p className="text-[11px] text-slate-400 leading-relaxed">Suggest launching a "Wins of the Week" comms thread to bolster morale.</p>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-white text-slate-900 border-none hover:bg-slate-100 font-black text-[10px] uppercase tracking-[0.2em] py-3 mt-8">
                                        Generate Full Audit
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'moderation' && (
                    <motion.div
                        key="moderation"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-soft">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
                                    <ShieldAlert size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-slate-900 font-heading">Moderation Stream</h2>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protocol validation required for <span className="text-red-500">{MOCK_RECOGNITIONS.length} events</span></p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative group">
                                    <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-premium" />
                                    <input type="text" placeholder="Search signals..." className="pl-11 pr-4 py-3 rounded-2xl border border-slate-100 bg-slate-50/50 text-[11px] font-black uppercase tracking-widest focus:ring-4 focus:ring-indigo-100 focus:bg-white outline-none w-full md:w-80 transition-premium" />
                                </div>
                                <Button variant="secondary" className="px-6 gap-3 h-12 rounded-2xl border-slate-100"><Filter size={16} /> Classify</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {MOCK_RECOGNITIONS.map((pulse, idx) => (
                                <motion.div
                                    key={pulse.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Card className="p-10 bg-white border border-slate-100 group hover:border-indigo-100 transition-premium shadow-soft hover:shadow-premium-hover relative">
                                        <div className="flex flex-col md:flex-row items-start gap-8">
                                            <div className="flex flex-col items-center gap-3">
                                                <Badge variant="default" className="text-[8px] bg-slate-50 text-slate-400 font-black border-slate-100/50">SIGNAL {pulse.id}</Badge>
                                                <div className="w-1 h-20 bg-slate-50 rounded-full overflow-hidden">
                                                    <div className="w-full bg-indigo-500 h-1/2" />
                                                </div>
                                            </div>

                                            <div className="flex-1 space-y-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                                                        <Avatar src={MOCK_USERS.find(u => u.id === pulse.fromId)?.avatar || ''} name="F" size="sm" />
                                                        <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{MOCK_USERS.find(u => u.id === pulse.fromId)?.name}</span>
                                                    </div>
                                                    <ArrowUpRight size={14} className="text-slate-300" />
                                                    <div className="flex items-center gap-3 bg-indigo-50/50 px-4 py-2 rounded-2xl border border-indigo-100/50">
                                                        <Avatar src={MOCK_USERS.find(u => u.id === pulse.toId)?.avatar || ''} name="T" size="sm" />
                                                        <span className="text-xs font-black text-indigo-700 uppercase tracking-tight">{MOCK_USERS.find(u => u.id === pulse.toId)?.name}</span>
                                                    </div>
                                                    <div className="ml-auto flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                        <Clock size={12} />
                                                        {pulse.date}
                                                    </div>
                                                </div>

                                                <div className="relative">
                                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-indigo-500 rounded-full opacity-20" />
                                                    <p className="text-lg font-medium text-slate-700 italic pl-6 leading-relaxed">"{pulse.message}"</p>
                                                </div>

                                                <div className="flex flex-wrap gap-3">
                                                    <Badge variant="admin" className="bg-indigo-50 text-indigo-600 border-indigo-100 uppercase">RECOGNITION</Badge>
                                                    <Badge variant="default" className="bg-slate-50 text-slate-500 border-slate-100 uppercase">{pulse.type}</Badge>
                                                    <Badge variant="success" className="bg-emerald-50 text-emerald-600 border-emerald-100 uppercase">POSITIVITY HIGH</Badge>
                                                </div>
                                            </div>

                                            <div className="flex md:flex-col gap-3 w-full md:w-auto pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-8">
                                                <button className="flex-1 md:flex-none flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                                                    <CheckCircle2 size={24} />
                                                </button>
                                                <button className="flex-1 md:flex-none flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                                                    <XCircle size={24} />
                                                </button>
                                                <button className="flex-1 md:flex-none flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                                                    <Search size={24} />
                                                </button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'comms' && (
                    <motion.div
                        key="comms"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                                <Clock size={14} /> Scheduled Comms
                            </h3>
                            {[
                                { title: 'New Benefits Overview', scheduled: 'Tomorrow, 9:00 AM', status: 'Draft' },
                                { title: 'Global Hackathon Launch', scheduled: 'Sept 15, 10:00 AM', status: 'Scheduled' }
                            ].map(comm => (
                                <Card key={comm.title} className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant={comm.status === 'Draft' ? 'default' : 'admin'}>{comm.status}</Badge>
                                        <span className="text-[10px] font-black text-slate-400 uppercase">{comm.scheduled}</span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-2">{comm.title}</h4>
                                    <div className="flex gap-2 pt-4 mt-auto">
                                        <Button variant="secondary" className="flex-1 text-[10px] font-black uppercase tracking-widest py-2">Preview</Button>
                                        <Button variant="outline" className="flex-1 text-[10px] font-black uppercase tracking-widest py-2">Edit</Button>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                                <Eye size={14} /> Communication Insights
                            </h3>
                            <Card className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[11px] font-black uppercase tracking-tight">
                                        <span className="text-slate-600">Total Reach</span>
                                        <span className="text-indigo-600">98.2%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full linear-gradient-bg w-[98.2%] rounded-full" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-[11px] font-black uppercase tracking-tight">
                                        <span className="text-slate-600">Read-Through Rate</span>
                                        <span className="text-indigo-600">64.5%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full linear-gradient-bg w-[64.5%] rounded-full" />
                                    </div>
                                </div>

                                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                    <p className="text-xs text-indigo-800 font-bold leading-relaxed mb-4">Posts with video attachments have <span className="font-black">2.4x</span> more engagement than text-only updates.</p>
                                    <Button className="w-full bg-indigo-600 border-none text-[10px] uppercase font-black tracking-widest shadow-none">View Asset Library</Button>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
