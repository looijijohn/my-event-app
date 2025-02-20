'use client';

import { useState, ReactNode } from 'react';
import './globals.css';

export default function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <html lang="en" className={theme}>
      <body className="flex h-screen bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800/90 dark:bg-gray-200/90 p-6 border-r border-neon-pink/50 dark:border-neon-cyan/50">
          <h1 className="text-3xl font-extrabold mb-8 text-neon-cyan dark:text-neon-pink">
            Neon Events
          </h1>
          <nav>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="block p-3 rounded-md bg-neon-cyan/20 dark:bg-neon-pink/20 text-neon-cyan dark:text-neon-pink hover:bg-neon-cyan/40 dark:hover:bg-neon-pink/40 transition-colors duration-300"
                >
                  Real Time
                </a>
              </li>
              <li>
                <a
                  href="/histories"
                  className="block p-3 rounded-md bg-neon-cyan/20 dark:bg-neon-pink/20 text-neon-cyan dark:text-neon-pink hover:bg-neon-cyan/40 dark:hover:bg-neon-pink/40 transition-colors duration-300"
                >
                  Histories
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleTheme}
            className="mt-8 w-full p-3 bg-neon-cyan dark:bg-neon-pink text-gray-900 rounded-md hover:bg-neon-cyan-dark dark:hover:bg-neon-pink-dark transition-colors duration-300"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-900 dark:bg-gray-100 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}