// src/app/events/create/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, MapPin, Users, DollarSign,
  Plus, Clock, Save, X
} from 'lucide-react';

export default function CreateEventPage() {
  const [step, setStep] = useState(1);
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    guestLimit: '',
    budget: '',
    type: 'birthday'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      });
      
      if (response.ok) {
        // Handle success
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create New Event</h1>
        <p className="text-gray-500">Fill in the details for your event</p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between relative">
          <div className="w-full absolute top-1/2 h-0.5 bg-gray-200" />
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${
                step >= s ? 'bg-primary text-white' : 'bg-gray-200'
              }`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm">Basic Details</span>
          <span className="text-sm">Additional Info</span>
          <span className="text-sm">Review</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Basic Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Event Title
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={eventData.title}
                    onChange={(e) => setEventData({
                      ...eventData,
                      title: e.target.value
                    })}
                    placeholder="Enter event title"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded"
                      value={eventData.date}
                      onChange={(e) => setEventData({
                        ...eventData,
                        date: e.target.value
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full p-2 border rounded"
                      value={eventData.time}
                      onChange={(e) => setEventData({
                        ...eventData,
                        time: e.target.value
                      })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={eventData.location}
                    onChange={(e) => setEventData({
                      ...eventData,
                      location: e.target.value
                    })}
                    placeholder="Enter event location"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows={4}
                    value={eventData.description}
                    onChange={(e) => setEventData({
                      ...eventData,
                      description: e.target.value
                    })}
                    placeholder="Describe your event"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </Button>
          )}
          {step < 3 ? (
            <Button
              type="button"
              onClick={() => setStep(step + 1)}
            >
              Next
            </Button>
          ) : (
            <Button type="submit">
              Create Event
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}