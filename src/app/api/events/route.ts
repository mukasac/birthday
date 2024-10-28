// src/app/api/events/route.ts
import { NextResponse } from 'next/server';
import type { Event } from '@/types';

export async function GET() {
  const events: Event[] = [
    {
      id: '1',
      title: "Sarah's Birthday Dinner",
      date: '2024-10-28',
      guestCount: 8,
      guests: [],
      tasks: [],
      budget: {
        total: 250,
        spent: 180,
        items: []
      }
    }
  ];

  return NextResponse.json(events);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: 'Event created successfully' });
}