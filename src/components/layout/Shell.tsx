import React from 'react';
import {
    LayoutDashboard,
    Users,
    BookOpen,
    Award,
    MessageSquare,
    Trophy,
    ShieldCheck,
    Calendar,
    X,
    Bell,
    LogOut
} from 'lucide-react';
import type { Page, User } from '../../types';
import { useAuth } from '../../store/AuthContext';


interface AppContextType {
    currentUser: User;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    isAdmin: boolean;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}
import { useApp } from '../../store';
import { cn } from '../../lib/utils';
import { Avatar, Badge } from '../ui/core';


type MenuItem = {
    id: Page;
    label: string;
    icon: React.ElementType;
};

export function Sidebar() {
    const { logout, user } = useAuth();
    const {
        currentPage,
        setCurrentPage,
        isAdmin,
        isMobileMenuOpen,
        setIsMobileMenuOpen
    } = useApp();

    const menuItems: MenuItem[] = [
        { id: 'dashboard', label: 'Command Hub', icon: LayoutDashboard },
        { id: 'directory', label: 'Directory', icon: Users },
        { id: 'hub', label: 'Knowledge', icon: BookOpen },
        { id: 'recognition', label: 'Recognition', icon: Award },
        { id: 'forums', label: 'Forum', icon: MessageSquare },
        { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'notifications', label: 'Notifications', icon: Bell },

        ...(user?.role === 'admin'
            ? [{ id: 'admin' as Page, label: 'Admin Center', icon: ShieldCheck }]
            : []
        )
    ];

    return (
        <>
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 md:hidden z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <aside
                className={cn(
                    "w-72 h-screen bg-white border-r border-slate-200 flex flex-col p-5",
                    "fixed md:relative z-50 transition-transform",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                <button
                    className="md:hidden absolute top-4 right-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X size={20} />
                </button>

                {/* Logo */}
                <div
                    className="flex items-center gap-3 mb-8 cursor-pointer"
                    onClick={() => setCurrentPage('dashboard')}
                >
                    <div className="w-9 h-9 bg-slate-900 text-white flex items-center justify-center font-bold">
                        V
                    </div>
                    <div>
                        <div className="font-bold text-sm">VORTEX</div>
                        <div className="text-[10px] text-slate-400">Enterprise OS</div>
                    </div>
                </div>

                {/* Menu */}
                <nav className="flex-1 space-y-1">
                    {menuItems.map((item) => {
                        const active = currentPage === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setCurrentPage(item.id); // ✅ FIXED (now Page type matches)
                                    setIsMobileMenuOpen(false);
                                }}
                                className={cn(
                                    "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md",
                                    active
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-600 hover:bg-slate-100"
                                )}
                            >
                                <item.icon size={16} />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Profile */}
                <div className="border-t pt-4 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                            name="User"
                            size="sm"
                        />
                        <div>
                            <div className="text-xs font-bold">User</div>
                            <div className="text-[10px] text-slate-400">Online</div>
                        </div>
                    </div>

                    <button
                        onClick={logout}
                        className="flex items-center gap-2 text-slate-400 hover:text-red-500"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}