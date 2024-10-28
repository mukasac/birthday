// src/app/api/events/[id]/collaboration/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const collaborators = new Set();
      
      const sendUpdate = () => {
        const data = {
          type: 'collaboration_update',
          activeUsers: Array.from(collaborators).map(user => ({
            id: user.id,
            name: user.name,
            cursor: user.cursor,
            lastActivity: user.lastActivity
          })),
          lastUpdate: new Date().toISOString()
        };
        
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };

      const interval = setInterval(sendUpdate, 1000);
      
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