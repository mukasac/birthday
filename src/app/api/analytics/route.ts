// src/app/api/analytics/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const analytics = {
    events: {
      total: 150,
      completed: 75,
      upcoming: 45,
      cancelled: 30,
      byMonth: [
        { month: 'Jan', count: 12 },
        { month: 'Feb', count: 15 }
      ]
    },
    quizzes: {
      total: 300,
      averageScore: 85,
      totalPlayers: 1500,
      completion: {
        started: 2000,
        completed: 1800,
        abandoned: 200
      }
    },
    gifts: {
      totalPools: 100,
      averageContribution: 25,
      successRate: 0.85,
      popularCategories: [
        { category: 'Electronics', count: 45 },
        { category: 'Books', count: 30 }
      ]
    }
  };

  return NextResponse.json(analytics);
}