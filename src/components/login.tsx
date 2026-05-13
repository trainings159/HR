import React, { useState } from 'react';
import { useAuth } from '../store/AuthContext';
import { useApp } from '../store';
import { MOCK_USERS } from '../data';
import { Button, Card } from './ui/core';


export function Login() {
    const { login } = useAuth();
    const { setCurrentPage } = useApp();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const success = login(email, password);

        if (!success) return;

        const user = MOCK_USERS.find(u => u.email === email);

        if (user?.role === 'admin') {
            setCurrentPage('admin');
        } else {
            setCurrentPage('dashboard');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-slate-50">
            <Card className="w-[360px] space-y-4">
                <h1 className="text-xl font-black">Login</h1>

                <input
                    className="w-full border p-2 rounded"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-full border p-2 rounded"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* ✅ FIXED */}
                <Button onClick={handleLogin} className="w-full">
                    Login
                </Button>

                <p className="text-[10px] text-slate-400">
                    Try: sarah.c@nexasphere.com or kyle.r@nexasphere.com
                </p>
            </Card>
        </div>
    );
}