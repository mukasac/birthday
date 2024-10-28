// src/app/quizzes/create/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CreateQuizPage() {
  const [questions, setQuestions] = useState([]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Quiz</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Quiz Details</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add quiz creation form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Quiz Title</label>
              <input 
                type="text"
                className="w-full p-2 border rounded"
                placeholder="How well do you know..."
              />
            </div>
            {/* Add more form fields */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}