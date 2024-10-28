// src/app/api/quizzes/[id]/questions/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const questions = [
    {
      id: '1',
      text: "What's Sarah's favorite color?",
      options: ['Blue', 'Red', 'Purple', 'Green'],
      correctAnswer: 2,
      timeLimit: 20
    },
    {
      id: '2',
      text: "Where did Sarah grow up?",
      options: ['New York', 'Chicago', 'Boston', 'Miami'],
      correctAnswer: 1,
      timeLimit: 20
    }
  ];

  return NextResponse.json(questions);
}