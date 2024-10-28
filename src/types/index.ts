// src/types/index.ts
export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'birthday' | 'event';
  guests?: number;
  status: 'planning' | 'active' | 'completed';
  location?: string;
  description?: string;
}

export interface Quiz {
  id: string;
  title: string;
  participants: number;
  averageScore: number;
  status: 'draft' | 'active' | 'completed';
  questions?: Question[];
}

export interface GiftPool {
  id: string;
  title: string;
  target: number;
  collected: number;
  contributors: number;
  daysLeft: number;
  status: 'active' | 'completed';
}

// ... add more types as needed