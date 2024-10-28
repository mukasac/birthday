// src/app/api/events/[id]/guests/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const guests = [
    { id: '1', name: 'John Smith', status: 'confirmed', plusOne: true },
    { id: '2', name: 'Emma Wilson', status: 'pending', plusOne: false }
  ];

  return NextResponse.json(guests);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  return NextResponse.json({ message: 'Guest added successfully' });
}