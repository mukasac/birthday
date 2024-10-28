// src/app/events/create/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CreateEventPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Plan New Event</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Event Title</label>
              <input 
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Birthday Dinner..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input 
                type="date"
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Add more form fields */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}