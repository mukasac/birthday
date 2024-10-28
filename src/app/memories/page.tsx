// src/app/memories/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MemoriesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Birthday Memories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sarah's 25th Birthday</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 rounded-lg mb-4"></div>
            <p className="text-sm text-gray-600">October 28, 2023</p>
            <div className="mt-4 space-y-2">
              <h3 className="font-medium">Messages</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded">
                  <p className="text-sm">"Happy Birthday!"</p>
                  <p className="text-xs text-gray-500">- John</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}