// src/app/api/events/[id]/budget/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const budget = {
    total: 500,
    spent: 350,
    categories: {
      venue: { allocated: 200, spent: 150 },
      food: { allocated: 200, spent: 150 },
      decoration: { allocated: 100, spent: 50 }
    },
    transactions: [
      { date: '2024-01-01', description: 'Venue deposit', amount: 150 },
      { date: '2024-01-05', description: 'Decorations', amount: 50 }
    ]
  };

  return NextResponse.json(budget);
}