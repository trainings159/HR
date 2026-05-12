import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from './types';
import { MOCK_USERS } from './data';

export type Page =
    | 'dashboard'
    | 'directory'
    | 'recognition'
    | 'hub'
    | 'forums'
    | 'profile'
    | 'leaderboard'
    | 'admin'
    | 'notifications'
    | 'events';

interface AppContextType {
    currentUser: User;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    isAdmin: boolean;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [currentUser] = useState<User>(MOCK_USERS[0]);
    const [currentPage, setCurrentPage] = useState<Page>('dashboard');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isAdmin = currentUser.id === 'u3';

    return (
        <AppContext.Provider
            value={{
                currentUser,
                currentPage,
                setCurrentPage,
                isAdmin,
                isMobileMenuOpen,
                setIsMobileMenuOpen
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}