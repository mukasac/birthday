// src/app/api/quizzes/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const quizzes = [
    {
      id: 1,
      title: "How Well Do You Know Sarah?",
      questionCount: 5,
      players: 3,
      topScore: 2400,
    }
  ];

  return NextResponse.json(quizzes);
}

export async function POST(request: Request) {
  const data = await request.json();
  // Create quiz logic here
  return NextResponse.json({ message: 'Quiz created successfully' });
}