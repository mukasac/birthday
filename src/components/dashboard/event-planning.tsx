'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";

export function EventPlanning() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Event Planning</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Sarah's Birthday Dinner</h3>
                  <p className="text-sm text-gray-500">Oct 28, 2024</p>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Guest List</span>
                  <span className="text-gray-600">8/10 confirmed</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tasks</span>
                  <span className="text-gray-600">12/15 done</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Budget</span>
                  <span className="text-gray-600">$180/$250</span>
                </div>
              </div>

              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}