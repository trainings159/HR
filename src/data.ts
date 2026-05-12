import { User, Announcement, Recognition, Project, Event, Analytics, Post, Article, Notification } from './types';

export const MOCK_NOTIFICATIONS: Notification[] = [
    {
        id: 'n1',
        type: 'mention',
        title: 'New Mention',
        message: 'Marcus Wright mentioned you in a comment on "v2 Roadmap".',
        timestamp: '2026-05-12T09:00:00Z',
        isRead: false,
    },
    {
        id: 'n2',
        type: 'recognition',
        title: 'Kudos Received!',
        message: 'Dani Ramos gave you a "Team Player" badge.',
        timestamp: '2026-05-11T16:45:00Z',
        isRead: true,
    },
    {
        id: 'n3',
        type: 'event',
        title: 'Upcoming Event',
        message: 'Q3 Townhall starts in 30 minutes. Don\'t forget to join!',
        timestamp: '2026-05-12T10:00:00Z',
        isRead: false,
    }
];

export const MOCK_EVENTS: Event[] = [
    {
        id: 'e1',
        title: 'Global All-Hands Meeting',
        description: 'Quarterly update from leadership team.',
        date: '2026-05-15',
        time: '10:00 AM PST',
        location: 'Zoom / Main Stage',
        attendees: 1200,
        type: 'Townhall',
        thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
    },
    {
        id: 'e2',
        title: 'NexaSphere Tech Talk',
        description: 'Deep dive into micro-frontend architecture.',
        date: '2026-05-20',
        time: '2:00 PM PST',
        location: 'Engineering Hub',
        attendees: 156,
        type: 'Training',
        thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df'
    },
    {
        id: 'e3',
        title: 'Culture Jam: Coffee & Collab',
        description: 'Casual networking across departments.',
        date: '2026-05-22',
        time: '9:00 AM PST',
        location: 'Virtual Lounge',
        attendees: 84,
        type: 'Social',
        thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
    }
];

export const MOCK_USERS: User[] = [
    {
        id: 'u1',
        name: 'Sarah Connor',
        role: 'Senior Software Engineer',
        department: 'Engineering',
        email: 'sarah.c@nexasphere.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        joinDate: '2022-03-15',
        location: 'San Francisco, CA',
        bio: 'Building systems that scale. Coffee enthusiast.',
        skills: ['React', 'Node.js', 'Kubernetes'],
        kudosReceived: 42,
        password: '1234'
    },
    {
        id: 'u2',
        name: 'Marcus Wright',
        role: 'Product Designer',
        department: 'Design',
        email: 'marcus.w@nexasphere.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
        joinDate: '2023-01-10',
        location: 'Austin, TX',
        bio: 'Pixel perfectionist and motion design lover.',
        skills: ['Figma', 'Framer', 'Prototyping'],
        kudosReceived: 28,
        password: '1234'

    },
    {
        id: 'u3',
        name: 'Kyle Reese',
        role: 'HR Manager',
        department: 'HR',
        email: 'kyle.r@nexasphere.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kyle',
        joinDate: '2021-11-20',
        location: 'London, UK',
        bio: 'Passionate about company culture and employee growth.',
        skills: ['Conflict Resolution', 'Recruiting', 'Policy'],
        kudosReceived: 56,
        password: 'admin1234'


    },
    {
        id: 'u4',
        name: 'Dani Ramos',
        role: 'Marketing Lead',
        department: 'Marketing',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dani',
        email: 'dani.r@nexasphere.com',
        joinDate: '2023-05-12',
        location: 'Madrid, ES',
        skills: ['SEO', 'Content Strategy', 'Public Relations'],
        kudosReceived: 15,
        password: '1234'
    },
    {
        id: 'u5',
        name: 'Grace Harper',
        role: 'Sales Executive',
        department: 'Sales',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace',
        email: 'grace.h@nexasphere.com',
        joinDate: '2024-02-01',
        location: 'Seattle, WA',
        skills: ['Negotiation', 'CRM', 'Lead Gen'],
        kudosReceived: 8,
        password: '1234'
    }
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
    {
        id: 'a1',
        title: 'Q3 Townhall - Save the Date',
        content: "Join our CEO for the quarterly updates on our product roadmap and growth metrics. We'll be hosting this live at headquarters and streaming for remote teams.",
        authorId: 'u3',
        category: 'Company',
        publishDate: '2026-05-10',
        importance: 'High',
        readCount: 1240
    },
    {
        id: 'a2',
        title: 'Updated Remote Work Policy',
        content: "We've listened to your feedback! Check out the new flexible working hours and travel reimbursement updates in the knowledge hub.",
        authorId: 'u3',
        category: 'Policy',
        publishDate: '2026-05-08',
        importance: 'Medium',
        readCount: 856
    },
    {
        id: 'a3',
        title: 'Annual Hackathon Winners',
        content: "Congratulations to 'Team SkyNet' for winning the 2026 Hackathon with their AI-driven internal search tool!",
        authorId: 'u1',
        category: 'Event',
        publishDate: '2026-05-05',
        importance: 'Low',
        readCount: 432
    }
];

export const MOCK_RECOGNITIONS: Recognition[] = [
    {
        id: 'r1',
        fromId: 'u2',
        toId: 'u1',
        message: "Sarah did an incredible job fixing those critical bugs before the v2 launch. Truly life-saving work!",
        type: 'Peer',
        date: '2026-05-11',
        reactions: { '❤️': 12, '🔥': 8, '🙌': 15 }
    },
    {
        id: 'r2',
        fromId: 'u3',
        toId: 'u4',
        message: "Welcome to the team, Dani! Excited to see your fresh perspective on our global marketing strategy.",
        type: 'Welcome',
        date: '2026-05-12',
        reactions: { '🎉': 25, '👋': 10 }
    }
];

export const MOCK_PROJECTS: Project[] = [
    {
        id: 'p1',
        name: 'Project Chronos',
        description: 'Internal time-tracking and resource management overhaul.',
        status: 'In Progress',
        team: ['u1', 'u2', 'u3'],
        department: 'Engineering',
        deadline: '2026-07-30',
        progress: 65
    },
    {
        id: 'p2',
        name: 'Brand Refresh 2026',
        description: 'Modernizing our visual identity across all platforms.',
        status: 'Planning',
        team: ['u2', 'u4'],
        department: 'Design',
        deadline: '2026-09-15',
        progress: 20
    }
];

export const MOCK_POSTS: Post[] = [
    {
        id: 'p1',
        authorId: 'u1',
        title: 'Tips for managing large monorepos',
        content: 'We have been seeing some performance issues lately. Here is how I optimized my local environment...',
        category: 'Engineering',
        tags: ['DevOps', 'Productivity'],
        createdAt: '2026-05-10T10:00:00Z',
        likes: 24,
        replies: 5
    },
    {
        id: 'p2',
        authorId: 'u2',
        title: 'The future of our Design System',
        content: 'With the move to Tailwind 4, we are rethinking our theme structure. Looking for feedback!',
        category: 'Design',
        tags: ['UI/UX', 'System'],
        createdAt: '2026-05-11T14:30:00Z',
        likes: 42,
        replies: 12
    }
];

export const MOCK_ARTICLES: Article[] = [
    {
        id: 'art1',
        title: 'Employee Onboarding Guide',
        summary: 'Everything you need to know for your first 30 days.',
        content: 'Welcome to NexaSphere...',
        category: 'HR',
        authorId: 'u3',
        readTime: '5 min',
        lastUpdated: '2026-04-12',
        views: 1240
    },
    {
        id: 'art2',
        title: 'Technical Interview Standards',
        summary: 'How we evaluate engineering candidates.',
        content: 'Our process focuses on...',
        category: 'Engineering',
        authorId: 'u1',
        readTime: '8 min',
        lastUpdated: '2026-05-01',
        views: 856
    }
];

export const MOCK_ANALYTICS: Analytics = {
    totalLogins: 12450,
    engagementRate: 78.4,
    participationRate: 92,
    sentimentScore: 8.4,
    postCount: 156,
    activeUsers: 842,
    topDepts: [
        { name: 'Engineering', count: 342 },
        { name: 'Sales', count: 215 },
        { name: 'Marketing', count: 189 },
        { name: 'HR', count: 96 }
    ],
    weeklyTrend: [
        { date: 'Mon', value: 450 },
        { date: 'Tue', value: 520 },
        { date: 'Wed', value: 610 },
        { date: 'Thu', value: 580 },
        { date: 'Fri', value: 490 },
        { date: 'Sat', value: 120 },
        { date: 'Sun', value: 95 }
    ]
};
