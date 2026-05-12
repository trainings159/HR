/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

/* -------------------------
   BUTTON
-------------------------- */

type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'outline'
    | 'danger'
    | 'brand';

export const Button = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        variant?: ButtonVariant;
    }
>(({ className, variant = 'primary', ...props }, ref) => {
    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10',
        secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm',
        ghost: 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-indigo-600',
        outline: 'bg-transparent border-2 border-slate-100 text-slate-600 hover:border-indigo-600 hover:text-indigo-600',
        danger: 'bg-red-50 text-red-600 hover:bg-red-100 shadow-sm',
        brand: 'linear-gradient-bg text-white hover:opacity-90 shadow-lg shadow-indigo-200/50'
    };

    return (
        <button
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-premium active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 cursor-pointer',
                variants[variant],
                className
            )}
            {...props}
        />
    );
});

Button.displayName = 'Button';

/* -------------------------
   CARD
-------------------------- */

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

export const Card = ({ className, children, ...props }: CardProps) => (
    <div
        className={cn(
            'glass-card p-6 overflow-hidden transition-premium hover:shadow-premium-hover border-white/40 ring-1 ring-slate-900/5',
            className
        )}
        {...props}
    >
        {children}
    </div>
);

/* -------------------------
   MOTION CARD
-------------------------- */

type MotionCardProps = HTMLMotionProps<'div'> & {
    children: React.ReactNode;
};

export const MotionCard = ({ children, className, ...props }: MotionCardProps) => (
    <motion.div
        className={cn(
            'glass-card p-6 overflow-hidden transition-premium hover:shadow-premium-hover cursor-pointer border-white/40 ring-1 ring-slate-900/5',
            className
        )}
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        {...props}
    >
        {children}
    </motion.div>
);

/* -------------------------
   BADGE
-------------------------- */

type BadgeVariant = 'default' | 'high' | 'success' | 'warn' | 'admin';

export const Badge = ({
    children,
    className,
    variant = 'default'
}: {
    children: React.ReactNode;
    className?: string;
    variant?: BadgeVariant;
}) => {
    const variants: Record<BadgeVariant, string> = {
        default: 'bg-slate-100 text-slate-600 border-slate-200/50',
        high: 'bg-red-50 text-red-600 border-red-100/50 shadow-sm shadow-red-500/10',
        success: 'bg-emerald-50 text-emerald-600 border-emerald-100/50 shadow-sm shadow-emerald-500/10',
        warn: 'bg-amber-50 text-amber-600 border-amber-100/50 shadow-sm shadow-amber-500/10',
        admin: 'bg-indigo-50 text-indigo-700 border-indigo-100/50 shadow-sm shadow-indigo-500/10'
    };

    return (
        <span
            className={cn(
                'px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border transition-premium select-none',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
};

/* -------------------------
   AVATAR
-------------------------- */

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const Avatar = ({
    src,
    name,
    size = 'md',
    className,
    ...props
}: {
    src: string;
    name: string;
    size?: AvatarSize;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const sizes: Record<AvatarSize, string> = {
        xs: 'w-6 h-6',
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-14 h-14',
        xl: 'w-24 h-24'
    };

    return (
        <div
            role="img"
            aria-label={name}
            className={cn(
                'rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-soft flex-shrink-0 transition-premium hover:scale-110 select-none',
                sizes[size],
                className
            )}
            {...props}
        >
            <img
                src={src}
                alt={name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
            />
        </div>
    );
};