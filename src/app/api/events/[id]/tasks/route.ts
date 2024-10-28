// src/app/api/events/[id]/tasks/route.ts
import { NextResponse } from 'next/server';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dependsOn: string[];
  assignedTo?: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  status: 'blocked' | 'ready' | 'in_progress' | 'completed';
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Book venue',
      completed: false,
      dependsOn: [],
      dueDate: '2024-10-20',
      priority: 'high',
      status: 'ready'
    },
    {
      id: '2',
      title: 'Send invitations',
      completed: false,
      dependsOn: ['1'], // Depends on venue booking
      dueDate: '2024-10-22',
      priority: 'medium',
      status: 'blocked'
    }
  ];

  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const task = await request.json();
  return NextResponse.json({ message: 'Task created successfully' });
}

export async function PATCH(request: Request) {
  const { taskId, status } = await request.json();
  return NextResponse.json({ message: 'Task updated successfully' });
}