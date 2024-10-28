// src/app/api/notifications/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const notifications = [
    {
      id: '1',
      type: 'birthday',
      message: "Sarah's birthday is in 2 days!",
      read: false,
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      type: 'quiz',
      message: "John completed your quiz with score 2400!",
      read: true,
      createdAt: new Date().toISOString()
    }
  ];

  return NextResponse.json(notifications);
}

export async function PATCH(request: Request) {
  const { id } = await request.json();
  return NextResponse.json({ message: 'Notification marked as read' });
}