import React, { useMemo } from 'react';
import { Mail, MapPin, Calendar, Shield, Briefcase, ArrowUpRight } from 'lucide-react';

import { MOCK_USERS, MOCK_PROJECTS, MOCK_RECOGNITIONS } from '../data';
import { Card, Avatar, Badge, Button } from './ui/core';

export function ProfileView({ userId = 'u1' }: { userId?: string }) {

    const user = useMemo(
        () => MOCK_USERS.find(u => u.id === userId) || MOCK_USERS[0],
        [userId]
    );

    const userProjects = useMemo(
        () => MOCK_PROJECTS.filter(p => p.team.includes(user.id)),
        [user.id]
    );

    const receivedKudos = useMemo(
        () => MOCK_RECOGNITIONS.filter(r => r.toId === user.id),
        [user.id]
    );

    return (
        <div className="p-6 space-y-6 max-w-5xl mx-auto">

            {/* HEADER */}
            <Card className="p-0 overflow-hidden border-none shadow-lg">

                {/* COVER */}
                <div className="h-40 bg-indigo-600" />

                <div className="p-6 space-y-6">

                    {/* USER INFO */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-12">

                        <div className="flex items-end gap-4">

                            <Avatar
                                src={user.avatar}
                                name={user.name}
                                size="xl"
                                className="w-24 h-24 border-4 border-white"
                            />

                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">
                                    {user.name}
                                </h1>

                                <p className="text-xs font-bold uppercase text-indigo-600 flex items-center gap-2">
                                    <Shield size={14} />
                                    {user.role}
                                </p>
                            </div>

                        </div>

                        <div className="flex gap-2">
                            <Button className="text-xs font-bold uppercase px-4 h-9 flex items-center gap-2">
                                <Mail size={14} /> Message
                            </Button>

                            <Button variant="secondary" className="text-xs font-bold uppercase px-4 h-9">
                                Connect
                            </Button>
                        </div>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* MAIN */}
                        <div className="md:col-span-2 space-y-8">

                            {/* BIO */}
                            <section>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                                    Bio
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {user.bio ||
                                        'Senior professional focused on building scalable systems and delivering high-impact solutions.'}
                                </p>
                            </section>

                            {/* PROJECTS */}
                            <section>

                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                        Projects
                                    </h3>

                                    <Badge className="text-[9px]">
                                        {userProjects.length}
                                    </Badge>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">

                                    {userProjects.map(project => (
                                        <Card key={project.id} className="p-4 border border-slate-100">

                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-sm font-semibold text-slate-900">
                                                    {project.name}
                                                </span>
                                                <ArrowUpRight size={14} className="text-slate-300" />
                                            </div>

                                            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[65%] bg-indigo-500" />
                                            </div>

                                        </Card>
                                    ))}

                                </div>

                            </section>

                        </div>

                        {/* SIDEBAR */}
                        <aside className="space-y-6">

                            {/* DETAILS */}
                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                                    Details
                                </h3>

                                <div className="space-y-2 text-slate-600 text-sm">

                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        {user.location}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Briefcase size={14} />
                                        {user.department}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        Joined {new Date(user.joinDate).toLocaleDateString()}
                                    </div>

                                </div>
                            </div>

                            {/* SKILLS */}
                            <div>

                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                                    Skills
                                </h3>

                                <div className="flex flex-wrap gap-2">

                                    {user.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-100 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                            </div>

                        </aside>

                    </div>

                </div>

            </Card>

        </div>
    );
}