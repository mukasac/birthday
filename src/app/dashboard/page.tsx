// src/app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, Gift, GameController, Users,
  Plus, ArrowRight, Star, Settings,
  Bell, PieChart, Heart, Cake
} from 'lucide-react';

export default function Dashboard() {
  const quickActions = [
    { title: 'New Event', href: '/events/create', icon: Plus },
    { title: 'Create Quiz', href: '/quizzes/create', icon: GameController },
    { title: 'Start Gift Pool', href: '/gifts/create', icon: Gift },
    { title: 'Birthday Reminder', href: '/events/reminder', icon: Bell }
  ];

  const upcomingEvents = [
    {
      title: "Sarah's Birthday",
      date: '2024-10-28',
      type: 'birthday',
      guests: 12,
      status: 'planning'
    },
    // Add more events...
  ];

  const activeQuizzes = [
    {
      title: 'How well do you know Sarah?',
      participants: 8,
      averageScore: 75,
      status: 'active'
    },
    // Add more quizzes...
  ];

  const giftPools = [
    {
      title: 'Nintendo Switch for Sarah',
      target: 299,
      collected: 180,
      contributors: 5,
      daysLeft: 7
    },
    // Add more gift pools...
  ];

  return (
    <div className="p-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action, index) => (
          <Link key={index} href={action.href}>
            <Card className="hover:bg-gray-50 transition-colors">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <action.icon className="h-5 w-5" />
                  <span>{action.title}</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Events</CardTitle>
            <Link href="/events/calendar">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded">
                      <Cake className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Quizzes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Active Quizzes</CardTitle>
            <Link href="/quizzes">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeQuizzes.map((quiz, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded">
                      <GameController className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{quiz.title}</h3>
                      <p className="text-sm text-gray-500">
                        {quiz.participants} participants • Avg: {quiz.averageScore}%
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Results
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gift Pools */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Active Gift Pools</CardTitle>
            <Link href="/gifts/pools">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {giftPools.map((pool, index) => (
                <div 
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{pool.title}</h3>
                      <p className="text-sm text-gray-500">
                        {pool.contributors} contributors • {pool.daysLeft} days left
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Contribute
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>${pool.collected} raised</span>
                      <span>${pool.target} goal</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{
                          width: `${(pool.collected / pool.target) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Analytics Overview</CardTitle>
            <Link href="/analytics">
              <Button variant="ghost" size="sm">View Details</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-gray-500">Total Events</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-gray-500">Active Quizzes</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold">$1,250</div>
                <div className="text-sm text-gray-500">Total Gifted</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm text-gray-500">Participants</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}