'use client';

import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Gift, 
  PartyPopper,
  Gamepad2, // Changed from GameController
  Settings 
} from "lucide-react";

interface SideNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function SideNavigation({ activeTab, setActiveTab }: SideNavigationProps) {
  return (
    <div className="w-64 border-r h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Birthday Central</h1>
      </div>

      <nav className="space-y-2">
        <Button
          variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActiveTab('dashboard')}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Dashboard
        </Button>
        <Button
          variant={activeTab === 'events' ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActiveTab('events')}
        >
          <PartyPopper className="w-4 h-4 mr-2" />
          Event Planning
        </Button>
        <Button
          variant={activeTab === 'quizzes' ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActiveTab('quizzes')}
        >
          <Gamepad2 className="w-4 h-4 mr-2" />
          Birthday Quizzes
        </Button>
        <Button
          variant={activeTab === 'gifts' ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActiveTab('gifts')}
        >
          <Gift className="w-4 h-4 mr-2" />
          Gift Planning
        </Button>
      </nav>

      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
}