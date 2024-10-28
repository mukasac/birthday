import { NextResponse } from 'next/server';

export async function GET() {
  // Placeholder data - will be replaced with DB calls
  const birthdays = [
    { name: 'Sarah Parker', date: 'Oct 28', daysLeft: 2, planned: true },
    { name: 'John Smith', date: 'Nov 5', daysLeft: 10, planned: false },
    { name: 'Emma Wilson', date: 'Nov 12', daysLeft: 17, planned: false }
  ];

  return NextResponse.json(birthdays);
}

export async function POST(request: Request) {
  const data = await request.json();
  // Add birthday logic here
  return NextResponse.json({ message: 'Birthday added successfully' });
}