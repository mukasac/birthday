// src/app/api/quizzes/[id]/play/route.ts
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { answers } = await request.json();
  // Quiz submission logic here
  return NextResponse.json({ score: 2400 });
}