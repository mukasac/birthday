'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  PartyPopper,
  Gamepad2,
  Gift, 
  ChevronRight,
  Trophy,
  CheckCircle 
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-purple-50 border-purple-100">
          <CardContent className="p-4">
            <Button variant="ghost" className="w-full justify-between">
              <span className="flex items-center">
                <PartyPopper className="w-4 h-4 mr-2 text-purple-600" />
                Plan New Event
              </span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-4">
            <Button variant="ghost" className="w-full justify-between">
              <span className="flex items-center">
                <Gamepad2 className="w-4 h-4 mr-2 text-blue-600" />
                Create Quiz
              </span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-100">
          <CardContent className="p-4">
            <Button variant="ghost" className="w-full justify-between">
              <span className="flex items-center">
                <Gift className="w-4 h-4 mr-2 text-green-600" />
                Start Gift Pool
              </span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Birthdays */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Birthdays</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Sarah Parker', date: 'Oct 28', daysLeft: 2, planned: true },
              { name: 'John Smith', date: 'Nov 5', daysLeft: 10, planned: false },
              { name: 'Emma Wilson', date: 'Nov 12', daysLeft: 17, planned: false }
            ].map((birthday, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {birthday.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{birthday.name}</div>
                    <div className="text-sm text-gray-500">{birthday.date}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">{birthday.daysLeft} days left</span>
                  {birthday.planned ? (
                    <span className="flex items-center text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Planned
                    </span>
                  ) : (
                    <Button size="sm">Plan Now</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Plans */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Sarah's Birthday Dinner</h3>
                    <p className="text-sm text-gray-500">Oct 28 • 8 guests</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Planning Progress</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">How Well Do You Know Sarah?</h3>
                    <p className="text-sm text-gray-500">5 questions • 3 players</p>
                  </div>
                  <Button variant="outline" size="sm">Play</Button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Trophy className="w-4 h-4" />
                  <span>Top Score: 2,400</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}