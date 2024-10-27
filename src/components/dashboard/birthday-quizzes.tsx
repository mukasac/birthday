'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, Trophy } from "lucide-react";

export function BirthdayQuizzes() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Birthday Quizzes</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Quiz
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">How Well Do You Know Sarah?</h3>
                  <p className="text-sm text-gray-500">5 questions • Created 2 days ago</p>
                </div>
                <Button>Play</Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>12 players</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1" />
                  <span>High Score: 2,400</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}