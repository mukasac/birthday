// src/app/api/memories/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const memories = [
    {
      id: '1',
      eventId: 'event1',
      type: 'birthday',
      date: '2023-10-28',
      title: "Sarah's 25th Birthday",
      photos: ['url1', 'url2'],
      messages: [
        { from: 'John', message: 'Happy Birthday!' }
      ]
    }
  ];

  return NextResponse.json(memories);
}