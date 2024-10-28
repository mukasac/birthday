// src/app/events/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { CollaborationAware } from '@/components/ui/collaboration-aware';
import { Timeline } from '@/components/ui/timeline';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEventSource } from '@/hooks/use-event-source';

export default function EventPage({ params }: { params: { id: string } }) {
  const [event, setEvent] = useState(null);
  const [tasks, setTasks] = useState([]);
  const collaborationData = useEventSource(`/api/events/${params.id}/collaboration`);

  useEffect(() => {
    fetchEventDetails();
    fetchTasks();
  }, [params.id]);

  const fetchEventDetails = async () => {
    try {
      const response = await fetch(`/api/events/${params.id}`);
      const data = await response.json();
      setEvent(data);
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(`/api/events/${params.id}/tasks`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <CollaborationAware>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <p className="text-gray-500">
              {new Date(event.date).toLocaleDateString()}
            </p>
          </div>
          <Button>Edit Event</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event Details */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <p>{event.location}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <p>{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline events={tasks} />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Collaborators */}
            <Card>
              <CardHeader>
                <CardTitle>Collaborators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {collaborationData?.data?.activeUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center space-x-3 p-2 bg-gray-50 rounded"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">
                          {user.lastActivity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full">Send Invitations</Button>
                  <Button className="w-full" variant="outline">
                    Manage Tasks
                  </Button>
                  <Button className="w-full" variant="outline">
                    Budget Planning
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </CollaborationAware>
  );
}