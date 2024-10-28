// src/app/api/events/[id]/invitations/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const invitations = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'pending',
      sentAt: new Date().toISOString()
    }
  ];

  return NextResponse.json(invitations);
}

export async function POST(request: Request) {
  const { emails } = await request.json();
  return NextResponse.json({ message: 'Invitations sent successfully' });
}