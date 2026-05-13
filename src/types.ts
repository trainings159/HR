export interface User {
    id: string;
    name: string;
    role: 'admin' | 'user' | 'hr';
    department: Department;
    email: string;
    avatar: string;
    joinDate: string;
    location: string;
    bio?: string;
    skills: string[];
    kudosReceived: number;
    password: string;
}

export type Department = 'Engineering' | 'Design' | 'HR' | 'Marketing' | 'Sales' | 'Product' | 'Operations';

export interface Announcement {
    id: string;
    title: string;
    content: string;
    authorId: string;
    category: 'Company' | 'Department' | 'Event' | 'Policy';
    publishDate: string;
    importance: 'Low' | 'Medium' | 'High';
    readCount: number;
}

export interface Recognition {
    id: string;
    fromId: string;
    toId: string;
    message: string;
    type: 'Peer' | 'Leadership' | 'Anniversary' | 'Welcome';
    date: string;
    reactions: Record<string, number>;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    status: 'Planning' | 'In Progress' | 'Completed';
    team: string[];
    department: Department;
    deadline: string;
    progress: number;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    type: 'Social' | 'Townhall' | 'Training' | 'Workshop';
    attendees: number;
    thumbnail: string;
    time?: string;
}

export interface Post {
    id: string;
    authorId: string;
    title: string;
    content: string;
    category: string;
    tags: string[];
    createdAt: string;
    likes: number;
    replies: number;
}

export interface Article {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    authorId: string;
    readTime: string;
    lastUpdated: string;
    views: number;
}

export interface Achievement {
    id: string;
    userId: string;
    title: string;
    icon: string;
    date: string;
}

export interface Analytics {
    totalLogins: number;
    engagementRate: number;
    postCount: number;
    activeUsers: number;
    topDepts: { name: string; count: number }[];
    weeklyTrend: { date: string; value: number }[];
    sentimentScore: number;
    participationRate: number;
}

export interface Notification {
    id: string;
    type: 'mention' | 'recognition' | 'event';
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
}
export type Page =
    | 'dashboard'
    | 'directory'
    | 'events'
    | 'notifications'
    | 'hub'
    | 'recognition'
    | 'forums'
    | 'leaderboard'
    | 'profile'
    | 'admin';