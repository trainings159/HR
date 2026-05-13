import React from 'react';
import { AuthProvider, useAuth } from './store/AuthContext';
import { AppProvider, useApp } from './store';

import { Login } from './components/login';
import { Sidebar } from './components/layout/Shell';

import { Dashboard } from './components/Dashboard';
import { Directory } from './components/Directory';
import { AdminCenter } from './components/AdminCenter';
import { RecognitionPage } from './components/Recognition';
import { KnowledgeHub } from './components/KnowledgeHub';
import { Forum } from './components/Forum';
import { ProfileView } from './components/Profile';
import { Leaderboard } from './components/Leaderboard';
import { EventHub } from './components/EventHub';
import { NotificationsCenter } from './components/NotificationsCenter';

function AppContent() {
  const { user } = useAuth();

  if (!user) return <Login />;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <PageContent />
      </div>
    </div>
  );
}


function PageContent() {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;

      case 'directory':
        return <Directory />;

      case 'recognition':
        return <RecognitionPage />;

      case 'events':
        return <EventHub />;

      case 'notifications':
        return <NotificationsCenter />;

      case 'hub':
        return <KnowledgeHub />;

      case 'forums':
        return <Forum />;

      case 'profile':
        return <ProfileView />;

      case 'leaderboard':
        return <Leaderboard />;

      case 'admin':
        return <AdminCenter />;

      default:
        return (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center p-8">
            <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-3xl font-bold text-slate-300">N</span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">
              Module Not Found
            </h2>

            <p className="text-slate-500 max-w-sm text-sm">
              The <span className="font-semibold text-slate-900">
                {String(currentPage).charAt(0).toUpperCase() + String(currentPage).slice(1)}
              </span>{' '}section is not available.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 text-xs font-bold uppercase tracking-widest text-indigo-600"
            >
              Refresh
            </button>
          </div>
        );
    }
  };

  return (
    <main className="flex-1 overflow-y-auto bg-white">
      {/* Removed AnimatePresence + motion wrapper for performance */}
      {renderPage()}
    </main>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </AuthProvider>
  );
}