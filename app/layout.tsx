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
        <aside className="w-64 bg-gray-800/90 dark:bg-gray-200/90 p-6 border-r border-cyber-orange/50 dark:border-cyber-green/50">
          <h1 className="text-3xl font-extrabold mb-8 text-cyber-green dark:text-cyber-orange">
            Cyber Pulse
          </h1>
          <nav>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="block p-3 rounded-md bg-cyber-green/20 dark:bg-cyber-orange/20 text-cyber-green dark:text-cyber-orange hover:bg-cyber-green/40 dark:hover:bg-cyber-orange/40 transition-colors duration-300"
                >
                  Real Time
                </a>
              </li>
              <li>
                <a
                  href="/histories"
                  className="block p-3 rounded-md bg-cyber-green/20 dark:bg-cyber-orange/20 text-cyber-green dark:text-cyber-orange hover:bg-cyber-green/40 dark:hover:bg-cyber-orange/40 transition-colors duration-300"
                >
                  Histories
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleTheme}
            className="mt-8 w-full p-3 bg-cyber-green dark:bg-cyber-orange text-gray-900 rounded-md hover:bg-cyber-green-dark dark:hover:bg-cyber-orange-dark transition-colors duration-300"
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