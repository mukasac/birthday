// src/app/api/events/[id]/rsvp/route.ts
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { status, plusOne } = await request.json();
  // RSVP logic here
  return NextResponse.json({ message: 'RSVP updated successfully' });
}