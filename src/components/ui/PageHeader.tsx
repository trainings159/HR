import React from 'react';
import { cn } from '../../lib/utils';

type PageHeaderProps = {
    title: string;
    subtitle?: string;
    badge?: string;
    rightContent?: React.ReactNode;
    children?: React.ReactNode;
};

export function PageHeader({
    title,
    subtitle,
    badge,
    rightContent,
    children
}: PageHeaderProps) {
    return (
        <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-4">

            {/* top row */}
            <div className="flex items-start justify-between gap-4">

                <div className="space-y-2">

                    {badge && (
                        <span className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">
                            {badge}
                        </span>
                    )}

                    <h1 className="text-2xl font-bold leading-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-sm text-slate-300 max-w-2xl">
                            {subtitle}
                        </p>
                    )}

                </div>

                {rightContent && (
                    <div className="flex-shrink-0">
                        {rightContent}
                    </div>
                )}

            </div>

            {/* optional extra row */}
            {children && (
                <div className="flex items-center gap-4 text-xs text-slate-400">
                    {children}
                </div>
            )}

        </div>
    );
}