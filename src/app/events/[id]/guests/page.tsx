// src/app/events/[id]/guests/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Mail, Check, X } from "lucide-react";

interface Guest {
  id: string;
  name: string;
  email: string;
  status: string;
  sentAt: string;
}

export default function GuestManagementPage({ params }: { params: { id: string } }) {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showInviteModal, setShowInviteModal] = useState(false);

  useEffect(() => {
    fetchGuests();
  }, [params.id]);

  const fetchGuests = async () => {
    try {
      const response = await fetch(`/api/events/${params.id}/invitations`);
      const data = await response.json();
      setGuests(data);
    } catch (error) {
      console.error('Error fetching guests:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendInvitations = async (emails: string[]) => {
    try {
      await fetch(`/api/events/${params.id}/invitations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails })
      });
      setShowInviteModal(false);
      fetchGuests();
    } catch (error) {
      console.error('Error sending invitations:', error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Guest Management</h1>
        <Button onClick={() => setShowInviteModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Invite Guests
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Guest List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {guests.map((guest) => (
              <div 
                key={guest.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium">{guest.name}</div>
                  <div className="text-sm text-gray-500">{guest.email}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    guest.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    guest.status === 'declined' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {guest.status}
                  </span>
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-1" />
                    Resend
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}