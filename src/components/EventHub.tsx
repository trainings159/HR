import React from 'react';
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    Plus
} from 'lucide-react';

import { MOCK_EVENTS } from '../data';
import { Card, Badge, Button, Avatar } from './ui/core';

export function EventHub() {
    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 min-h-screen">

            {/* HEADER */}
            <div className="flex flex-col  md:flex-row justify-between gap-4">
                <div>
                    <Badge className="text-[10px] uppercase font-black mb-4">
                        Culture & Community
                    </Badge>

                    <h1 className="text-2xl font-bold text-slate-900 mt-6">
                        Event Hub
                    </h1>

                    <p className="text-sm text-slate-500">
                        Discover what's happening across the platform.
                    </p>
                </div>

                <Button className="flex items-center gap-2 h-10 px-4 text-xs font-bold uppercase">
                    <Plus size={14} />
                    Create Event
                </Button>
            </div>

            {/* FEATURED EVENT */}
            <Card className="p-6 bg-slate-900 text-white rounded-2xl space-y-4">

                <Badge className="bg-emerald-500 text-white border-none text-[10px] uppercase">
                    Featured Event
                </Badge>

                <h2 className="text-xl font-bold">
                    Global All-Hands: Q3 Strategy Launch
                </h2>

                <div className="text-xs text-slate-300 space-y-2">
                    <div className="flex items-center gap-2">
                        <Calendar size={14} /> May 15, 2026
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} /> 10:00 AM PST
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={14} /> Zoom Main Stage
                    </div>
                </div>

                <div className="flex gap-3 pt-2">
                    <Button className="bg-white text-black text-xs font-bold uppercase px-4 h-10">
                        RSVP
                    </Button>
                    <Button className="bg-white/10 text-white text-xs font-bold uppercase px-4 h-10">
                        Share
                    </Button>
                </div>
            </Card>

            {/* FILTERS */}
            <div className="flex gap-2 overflow-x-auto">
                {['All', 'Official', 'Creative', 'Knowledge', 'Culture', 'Social'].map((cat) => (
                    <button
                        key={cat}
                        className="px-3 py-1 text-[10px] font-semibold uppercase border rounded-full whitespace-nowrap text-slate-500 bg-white"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* EVENTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {MOCK_EVENTS.map((event) => (
                    <Card key={event.id} className="p-4 space-y-3">

                        <Badge className="text-[9px] uppercase">
                            {event.type}
                        </Badge>

                        <h3 className="font-bold text-base">
                            {event.title}
                        </h3>

                        <p className="text-sm text-slate-500">
                            {event.description}
                        </p>

                        <div className="text-xs text-slate-600 space-y-1">
                            <div className="flex items-center gap-2">
                                <Calendar size={12} />
                                {event.date}
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPin size={12} />
                                {event.location}
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t">

                            {/* ATTENDEES */}
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <Avatar
                                        key={i}
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                                        name="user"
                                        size="xs"
                                        className="border-2 border-white"
                                    />
                                ))}
                            </div>

                            <Button className="text-[10px] font-bold uppercase h-8 px-3">
                                RSVP
                            </Button>

                        </div>
                    </Card>
                ))}
            </div>

            {/* GALLERY (STATIC LIGHTWEIGHT VERSION) */}
            <div className="space-y-3 pt-6">

                <h3 className="text-xs font-bold uppercase text-slate-400">
                    Celebration Gallery
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                        <img
                            key={i}
                            src={`https://picsum.photos/seed/${i}/300/300`}
                            alt="event"
                            className="rounded-xl object-cover aspect-square"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}