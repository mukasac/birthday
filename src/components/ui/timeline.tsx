// src/components/ui/timeline.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from "./card";

interface TimelineEvent {
  id: string;
  type: 'milestone' | 'task';
  title: string;
  date: string;
  description: string;
  status?: string;
  completed?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
      
      <div className="space-y-8 ml-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="absolute -left-10 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                  {event.type === 'milestone' ? '🏁' : '📋'}
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                </div>
                
                {event.status && (
                  <div className="mt-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      event.status === 'completed' ? 'bg-green-100 text-green-800' :
                      event.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}