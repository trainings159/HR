import React, { createContext, useContext, useState } from 'react';
import { User } from '../types';
import { MOCK_USERS } from '../data';

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    setUser: React.Dispatch<React.SetStateAction<User | null>>; // 👈 add this
    isAdmin: boolean; // 👈 add this
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, password: string) => {
        const foundUser = MOCK_USERS.find(
            u => u.email === email && (u as any).password === password
        );

        if (foundUser) {
            setUser(foundUser);
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
    };

    const isAdmin = user?.role === 'admin';

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            setUser,
            isAdmin
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
}