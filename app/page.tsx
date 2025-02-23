'use client';

import { useState, useEffect } from 'react';

interface Event {
  id: string;
  description: string;
  type: string;
  source: string;
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

const possibleTypes = ['person past', 'animal past', 'boss come', 'delivery', 'security alert'];

export default function RealTime() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedType, setSelectedType] = useState('all');
  const [descriptionFilter, setDescriptionFilter] = useState('');
  const [ipFilter, setIpFilter] = useState('');

  useEffect(() => {
    let isMounted = true;

    const generateEvent = () => {
      if (!isMounted) return;

      const description = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
      const type = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
      const source = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
      const timestamp = new Date();
      const newEvent: Event = {
        id: `${timestamp.getTime()}-${Math.random().toString(36).slice(2, 7)}`,
        description,
        type,
        source,
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

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionFilter(e.target.value);
  };

  const handleIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpFilter(e.target.value);
  };

  const filteredEvents = events.filter(
    (event) =>
      (selectedType === 'all' || event.type === selectedType) &&
      event.description.toLowerCase().includes(descriptionFilter.toLowerCase()) &&
      event.source.startsWith(ipFilter)
  );

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-3xl font-bold mb-6 text-neon-cyan dark:text-neon-pink">
        Real Time Events
      </h2>

      {/* Filter Section */}
      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/50 rounded-lg border border-neon-pink/30">
        {/* Type Filter */}
        <div>
          <h3 className="text-neon-cyan mb-2">Filter by Type</h3>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2 cursor-pointer hover:text-neon-pink">
              <input
                type="radio"
                name="type"
                value="all"
                checked={selectedType === 'all'}
                onChange={handleTypeChange}
                className="form-radio text-neon-cyan"
              />
              <span>All</span>
            </label>
            {possibleTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer hover:text-neon-pink">
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={selectedType === type}
                  onChange={handleTypeChange}
                  className="form-radio text-neon-cyan"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description Filter */}
        <div>
          <label className="block text-neon-cyan mb-1">Description</label>
          <input
            type="text"
            value={descriptionFilter}
            onChange={handleDescriptionChange}
            className="w-full form-input bg-gray-800 text-white border-neon-pink focus:border-neon-cyan focus:ring focus:ring-neon-cyan/50"
            placeholder="Filter by description"
          />
        </div>

        {/* Source IP Filter */}
        <div>
          <label className="block text-neon-cyan mb-1">Source IP</label>
          <input
            type="text"
            value={ipFilter}
            onChange={handleIpChange}
            className="w-full form-input bg-gray-800 text-white border-neon-pink focus:border-neon-cyan focus:ring focus:ring-neon-cyan/50"
            placeholder="Filter by IP"
          />
        </div>
      </div>

      {/* Events List */}
      <div className="flex-1 space-y-4 overflow-y-auto">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="p-4 bg-gray-800/80 dark:bg-gray-200/80 rounded-lg border border-neon-pink/50 dark:border-neon-cyan/50 animate-pop-in"
          >
            <p className="text-neon-cyan dark:text-neon-pink font-medium">
              {event.description}
            </p>
            <p className="text-sm text-neon-pink/70 dark:text-neon-cyan/70 mt-1">
              Type: {event.type} | Source: {event.source} | {event.timestamp.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}