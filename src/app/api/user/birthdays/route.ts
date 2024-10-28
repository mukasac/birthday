// src/app/api/user/birthdays/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const birthdays = {
    upcoming: [
      { name: 'Sarah Parker', date: 'Oct 28', daysLeft: 2 },
      { name: 'John Smith', date: 'Nov 5', daysLeft: 10 }
    ],
    past: [
      { name: 'Emma Wilson', date: 'Sep 15', memories: 3 },
      { name: 'Mike Johnson', date: 'Aug 22', memories: 5 }
    ]
  };

  return NextResponse.json(birthdays);
}