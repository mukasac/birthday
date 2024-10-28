// src/app/api/quizzes/[id]/session/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      let questionIndex = 0;
      const questions = [
        {
          id: '1',
          text: "What's Sarah's favorite color?",
          options: ['Blue', 'Red', 'Purple', 'Green'],
          timeLimit: 20
        },
        {
          id: '2',
          text: "Where did Sarah grow up?",
          options: ['New York', 'Chicago', 'Boston', 'Miami'],
          timeLimit: 20
        }
      ];

      const sendQuestion = () => {
        if (questionIndex < questions.length) {
          const data = {
            type: 'question',
            question: questions[questionIndex],
            totalQuestions: questions.length,
            currentQuestion: questionIndex + 1
          };
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
          questionIndex++;
        } else {
          const data = { type: 'end', message: 'Quiz completed!' };
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
          controller.close();
        }
      };

      const interval = setInterval(sendQuestion, 22000); // Question time + 2s buffer
      sendQuestion(); // Send first question immediately

      return () => clearInterval(interval);
    }
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  });
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { questionId, answer } = await request.json();
  // Process answer and return result
  return NextResponse.json({
    correct: true,
    points: 100,
    feedback: "That's correct!"
  });
}