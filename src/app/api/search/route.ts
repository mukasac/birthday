// src/app/api/search/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  const results = {
    users: [
      { id: '1', name: 'John Doe', type: 'user' }
    ],
    events: [
      { id: '1', title: "Sarah's Birthday", type: 'event' }
    ],
    quizzes: [
      { id: '1', title: "Birthday Quiz", type: 'quiz' }
    ]
  };

  return NextResponse.json(results);
}