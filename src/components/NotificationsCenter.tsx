import React, { useMemo } from 'react';
import {
    Bell,
    AtSign,
    Award,
    Calendar,
    Megaphone,
    CheckCircle2,
    Clock
} from 'lucide-react';

import { MOCK_NOTIFICATIONS } from '../data';
import { Card, Button } from './ui/core';

export function NotificationsCenter() {

    const getIcon = (type: string) => {
        switch (type) {
            case 'mention': return AtSign;
            case 'recognition': return Award;
            case 'event': return Calendar;
            case 'announcement': return Megaphone;
            default: return Bell;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case 'mention': return 'text-blue-500 bg-blue-50';
            case 'recognition': return 'text-amber-500 bg-amber-50';
            case 'event': return 'text-emerald-500 bg-emerald-50';
            case 'announcement': return 'text-indigo-500 bg-indigo-50';
            default: return 'text-slate-500 bg-slate-50';
        }
    };

    const notifications = useMemo(() => MOCK_NOTIFICATIONS, []);

    return (
        <div className="p-4 md:p-6 max-w-xl mx-auto space-y-5 min-h-screen">

            {/* HEADER */}
            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-xl font-bold text-slate-900">
                        Notifications
                    </h1>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">
                        Network updates
                    </p>
                </div>

                <Button className="text-[10px] font-bold uppercase h-8 px-3 flex items-center gap-2">
                    <CheckCircle2 size={12} />
                    Mark All Read
                </Button>

            </div>

            {/* LIST */}
            <div className="space-y-3">

                {notifications.map((notif) => {
                    const Icon = getIcon(notif.type);

                    return (
                        <Card
                            key={notif.id}
                            className={`p-4 space-y-3 border-l-4 ${notif.isRead
                                    ? 'border-transparent opacity-70'
                                    : 'border-indigo-500 bg-indigo-50/30'
                                }`}
                        >

                            <div className="flex gap-3">

                                {/* ICON */}
                                <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${getColor(
                                        notif.type
                                    )}`}
                                >
                                    <Icon size={16} />
                                </div>

                                {/* CONTENT */}
                                <div className="flex-1 space-y-1">

                                    <div className="flex justify-between gap-2">

                                        <p className="font-semibold text-sm text-slate-900">
                                            {notif.title}
                                        </p>

                                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                            <Clock size={10} />
                                            {new Date(
                                                notif.timestamp
                                            ).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </span>

                                    </div>

                                    <p className="text-xs text-slate-600">
                                        {notif.message}
                                    </p>

                                    {/* ACTIONS */}
                                    <div className="flex gap-4 pt-2">

                                        <button className="text-[10px] font-bold text-indigo-600 uppercase">
                                            View
                                        </button>

                                        <button className="text-[10px] font-bold text-slate-400 uppercase">
                                            Dismiss
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </Card>
                    );
                })}

            </div>

            {/* EMPTY STATE */}
            {notifications.length === 0 && (
                <div className="text-center py-16 space-y-2">

                    <div className="w-12 h-12 bg-slate-100 rounded-xl mx-auto flex items-center justify-center">
                        <Bell size={18} className="text-slate-300" />
                    </div>

                    <h3 className="font-semibold text-slate-900">
                        All caught up
                    </h3>

                    <p className="text-sm text-slate-500">
                        No new notifications
                    </p>

                </div>
            )}
        </div>
    );
}