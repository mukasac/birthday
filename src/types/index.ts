export interface Birthday {
  id?: string;
  name: string;
  date: string;
  daysLeft: number;
  planned: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  questionCount: number;
  players: number;
  topScore: number;
  questions?: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  timeLimit: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  guestCount: number;
  guests: Guest[];
  tasks: Task[];
  budget: Budget;
}

export interface Guest {
  id: string;
  name: string;
  status: 'pending' | 'confirmed' | 'declined';
  plusOne: boolean;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  assignedTo?: string;
}

export interface Budget {
  total: number;
  spent: number;
  items: BudgetItem[];
}

export interface BudgetItem {
  id: string;
  title: string;
  amount: number;
  category: string;
}

export interface GiftPool {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  contributors: Contributor[];
  status: 'pending' | 'in_progress' | 'completed';
}

export interface Contributor {
  id: string;
  name: string;
  amount: number;
  anonymous: boolean;
}