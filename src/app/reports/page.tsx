// src/app/reports/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Event Reports & Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Birthday Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Birthdays</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Upcoming This Month</span>
                <span className="font-bold">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Events Planned</span>
                <span className="font-bold">2</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quiz Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Quizzes Created</span>
                <span className="font-bold">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Players</span>
                <span className="font-bold">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Average Score</span>
                <span className="font-bold">1850</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}