// src/app/calendar/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CalendarPage() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Birthday Calendar</h1>
        <div className="flex space-x-2">
          <Button variant="outline">Month</Button>
          <Button variant="outline">List</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {months.map((month) => (
          <Card key={month}>
            <CardHeader>
              <CardTitle className="text-lg">{month}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {/* Example birthday entry */}
                <div className="p-2 bg-purple-50 rounded-lg">
                  <div className="font-medium">Sarah Parker</div>
                  <div className="text-sm text-gray-500">October 28</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}