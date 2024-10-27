'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, GamepadIcon, ChevronRight } from 'lucide-react';

export function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="bg-purple-50 border-purple-100">
        <CardContent className="p-4">
          <Button variant="ghost" className="w-full justify-between">
            <span className="flex items-center">
              <GamepadIcon className="w-4 h-4 mr-2 text-purple-600" />
              Plan New Event
            </span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
      {/* Add other quick action cards */}
    </div>
  );
}