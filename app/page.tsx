'use client';

import { useState, useEffect } from 'react';

interface Event {
  id: string;
  description: string;
  timestamp: Date;
}

const possibleEvents = [
  'Passing cat',
  'Passing car',
  'John Doe passing through west door',
  'Jane Smith entering east gate',
  'Delivery truck at loading dock',
  'Security alert: unauthorized access',
];

export default function RealTime() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    let isMounted = true;

    const generateEvent = () => {
      if (!isMounted) return;

      const description = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
      const timestamp = new Date();
      const newEvent: Event = {
        id: `${timestamp.getTime()}-${Math.random().toString(36).slice(2, 7)}`,
        description,
        timestamp,
      };
      setEvents((prev) => [newEvent, ...prev].slice(0, 50));

      const delay = Math.random() * 500 + 100;
      setTimeout(generateEvent, delay); 
    };

    setTimeout(generateEvent, Math.random() * 500 + 100);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-3xl font-bold mb-6 text-cyber-green dark:text-cyber-orange">
        Real Time Events
      </h2>
      <div className="flex-1 space-y-4 overflow-y-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 bg-gray-800/80 dark:bg-gray-200/80 rounded-lg border border-cyber-orange/50 dark:border-cyber-green/50 animate-pop-in"
          >
            <p className="text-cyber-green dark:text-cyber-orange font-medium">
              {event.description}
            </p>
            <p className="text-sm text-cyber-orange/70 dark:text-cyber-green/70 mt-1">
              {event.timestamp.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}