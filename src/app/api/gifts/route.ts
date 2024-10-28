// src/app/api/gifts/route.ts
import { NextResponse } from 'next/server';
import type { GiftPool } from '@/types';

export async function GET() {
  const gifts: GiftPool[] = [
    {
      id: '1',
      title: "Sarah's Nintendo Switch",
      targetAmount: 299,
      currentAmount: 180,
      contributors: [],
      status: 'in_progress'
    }
  ];

  return NextResponse.json(gifts);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: 'Gift pool created successfully' });
}