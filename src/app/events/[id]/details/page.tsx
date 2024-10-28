// src/app/events/[id]/details/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, Users, MapPin, Clock, 
  DollarSign, ChevronRight, Edit,
  Share2, MessageSquare, CheckCircle
} from 'lucide-react';

interface EventDetails {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: string;
  guestCount: number;
  budget: {
    total: number;
    spent: number;
  };
  tasks: {
    total: number;
    completed: number;
  };
}

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const [event, setEvent] = useState<EventDetails | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchEventDetails();
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

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      {/* Event Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
            <div className="flex items-center space-x-4 text-gray-500">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(event.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {event.location}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {event.guestCount} guests
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button>
              <Edit className="w-4 h-4 mr-2" />
              Edit Event
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 mb-6 border-b">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'guests', label: 'Guest List' },
          { id: 'tasks', label: 'Tasks' },
          { id: 'budget', label: 'Budget' }
        ].map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={`px-4 py-2 -mb-px ${
              activeTab === tab.id 
                ? 'border-b-2 border-primary' 
                : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="col-span-2 space-y-6">
          {activeTab === 'overview' && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Event Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Tasks Completion</span>
                        <span>{Math.round((event.tasks.completed / event.tasks.total) * 100)}%</span>
                      </div>
                      <Progress 
                        value={(event.tasks.completed / event.tasks.total) * 100} 
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Budget Utilization</span>
                        <span>{Math.round((event.budget.spent / event.budget.total) * 100)}%</span>
                      </div>
                      <Progress 
                        value={(event.budget.spent / event.budget.total) * 100} 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((_, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">John Doe added a new task</p>
                          <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Right Column - Quick Actions & Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full justify-between">
                  Manage Guest List
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Add Task
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Update Budget
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Guest Status</span>
                  <span className="text-sm font-medium">24/50 Confirmed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Tasks Status</span>
                  <span className="text-sm font-medium">15/20 Complete</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Budget Status</span>
                  <span className="text-sm font-medium">$2,400/$3,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">Confirm Venue</p>
                      <p className="text-sm text-gray-500">Due in 2 days</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}