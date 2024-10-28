// src/app/api/stats/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const stats = {
    totalUsers: 1000,
    totalEvents: 250,
    totalQuizzes: 150,
    activeGiftPools: 45,
    upcomingBirthdays: 12,
    lastMonthActivity: {
      newUsers: 50,
      newEvents: 25,
      quizCompleted: 75
    },
    popularQuizzes: [
      { id: '1', title: "How well do you know Sarah?", plays: 120 },
      { id: '2', title: "John's Birthday Quiz", plays: 89 }
    ]
  };

  return NextResponse.json(stats);
}