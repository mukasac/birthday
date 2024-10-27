export interface Birthday {
  name: string;
  date: string;
  daysLeft: number;
  planned: boolean;
}

export interface Event {
  title: string;
  date: string;
  guestCount: number;
  progress: number;
  budget: {
    current: number;
    total: number;
  };
  tasks: {
    completed: number;
    total: number;
  };
  guests: {
    confirmed: number;
    total: number;
  };
}

export interface Quiz {
  title: string;
  questionCount: number;
  playerCount: number;
  createdAt: string;
  topScore: number;
}

export interface GiftPool {
  title: string;
  targetAmount: number;
  currentAmount: number;
  contributorCount: number;
  status: 'pending' | 'in_progress' | 'completed';
}