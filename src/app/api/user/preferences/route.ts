// src/app/api/user/preferences/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const preferences = {
    notifications: {
      email: true,
      push: true,
      reminderDays: 7
    },
    privacy: {
      profileVisibility: 'friends',
      birthdayVisibility: 'public'
    },
    theme: 'light'
  };

  return NextResponse.json(preferences);
}

export async function PATCH(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: 'Preferences updated successfully' });
}