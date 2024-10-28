// src/app/api/events/[id]/tasks/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const tasks = [
    { id: '1', title: 'Book venue', completed: true, assignedTo: 'John' },
    { id: '2', title: 'Order cake', completed: false, assignedTo: 'Emma' }
  ];

  return NextResponse.json(tasks);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  return NextResponse.json({ message: 'Task added successfully' });
}