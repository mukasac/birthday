'use client';

import { useState } from 'react';
import { SideNavigation } from '@/components/dashboard/side-navigation';
import { Dashboard } from '@/components/dashboard/dashboard';
import { EventPlanning } from '@/components/dashboard/event-planning';
import { BirthdayQuizzes } from '@/components/dashboard/birthday-quizzes';
import { GiftPlanning } from '@/components/dashboard/gift-planning';

export default function BirthdayPlatform() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 p-6">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'events' && <EventPlanning />}
        {activeTab === 'quizzes' && <BirthdayQuizzes />}
        {activeTab === 'gifts' && <GiftPlanning />}
      </div>
    </div>
  );
}