// src/app/gifts/[id]/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function GiftPoolPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Gift Pool Details</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Nintendo Switch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>$180/$299</span>
            </div>
            <Progress value={60} className="h-2" />
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Contributors</h3>
              <div className="space-y-2">
                {/* Add contributor list */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}