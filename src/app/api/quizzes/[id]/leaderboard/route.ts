// src/app/api/quizzes/[id]/leaderboard/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const leaderboard = [
    { rank: 1, name: 'John', score: 2400 },
    { rank: 2, name: 'Emma', score: 2200 },
    { rank: 3, name: 'Mike', score: 2000 }
  ];

  return NextResponse.json(leaderboard);
}