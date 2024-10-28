// src/app/api/events/[id]/timeline/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const timeline = [
    {
      id: '1',
      type: 'milestone',
      title: 'Planning Started',
      date: '2024-01-01',
      description: 'Event planning initiated',
      completed: true
    },
    {
      id: '2',
      type: 'task',
      title: 'Venue Selection',
      date: '2024-01-15',
      description: 'Choose and book venue',
      status: 'in_progress',
      assignee: 'John'
    }
  ];

  return NextResponse.json(timeline);
}