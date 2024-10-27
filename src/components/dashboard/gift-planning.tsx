'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";

export function GiftPlanning() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gift Planning</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Gift Pool
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Sarah's Nintendo Switch</h3>
                  <p className="text-sm text-gray-500">Group Gift • $299</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                  In Progress
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>3 contributors</span>
                  <span>$180/$299</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}