// src/app/dashboard/live/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useEventSource } from '@/hooks/use-event-source';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface LiveStats {
  guestCount: number;
  lastUpdate: string;
}

interface SearchResult {
  id: string;
  title?: string;
  name?: string;
  type: string;
}

export default function LiveDashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const { data: liveStats } = useEventSource<LiveStats>('/api/events/1/live');

  useEffect(() => {
    if (searchQuery) {
      const debounce = setTimeout(async () => {
        const response = await fetch(`/api/search?q=${searchQuery}`);
        const data = await response.json();
        const results = [
          ...data.users,
          ...data.events,
          ...data.quizzes
        ];
        setSearchResults(results);
      }, 300);

      return () => clearTimeout(debounce);
    }
  }, [searchQuery]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {searchQuery && (
          <div className="mt-2 absolute z-10 w-full max-w-md bg-white rounded-lg shadow-lg">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="p-3 hover:bg-gray-50 cursor-pointer"
              >
                <div className="font-medium">
                  {result.title || result.name}
                </div>
                <div className="text-sm text-gray-500">
                  {result.type}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Live Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            {liveStats && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Current Guests</span>
                  <span className="font-bold">{liveStats.guestCount}</span>
                </div>
                <div className="text-sm text-gray-500">
                  Last updated: {new Date(liveStats.lastUpdate).toLocaleTimeString()}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}