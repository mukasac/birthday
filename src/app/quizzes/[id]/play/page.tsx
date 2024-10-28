// src/app/quizzes/[id]/play/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: string;
  text: string;
  options: string[];
  timeLimit: number;
}

interface QuizState {
  type: 'question' | 'end';
  question?: Question;
  totalQuestions?: number;
  currentQuestion?: number;
  message?: string;
}

export default function PlayQuizPage({ params }: { params: { id: string } }) {
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    const eventSource = new EventSource(`/api/quizzes/${params.id}/session`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setQuizState(data);
      if (data.type === 'question') {
        setTimeLeft(data.question.timeLimit);
        setSelectedAnswer(null);
        setFeedback(null);
      }
    };

    return () => {
      eventSource.close();
    };
  }, [params.id]);

  useEffect(() => {
    if (quizState?.type === 'question' && timeLeft > 0 && !selectedAnswer) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, quizState, selectedAnswer]);

  const handleAnswer = async (answerIndex: number) => {
    if (selectedAnswer !== null || !quizState?.question) return;

    setSelectedAnswer(answerIndex);
    
    try {
      const response = await fetch(`/api/quizzes/${params.id}/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: quizState.question.id,
          answer: answerIndex
        })
      });

      const result = await response.json();
      
      if (result.correct) {
        setScore((prev) => prev + result.points);
        setFeedback(result.feedback);
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  if (!quizState) {
    return <div className="p-6">Loading quiz...</div>;
  }

  if (quizState.type === 'end') {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">Final Score: {score}</p>
              <p className="text-gray-600">{quizState.message}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span>Question {quizState.currentQuestion}/{quizState.totalQuestions}</span>
          <span>Score: {score}</span>
        </div>
        <Progress 
          value={(timeLeft / quizState.question!.timeLimit) * 100} 
          className="h-2"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{quizState.question!.text}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {quizState.question!.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                variant={selectedAnswer === index ? 'default' : 'outline'}
                className="w-full justify-start text-left h-auto py-4"
              >
                {option}
              </Button>
            ))}
          </div>

          {feedback && (
            <div className="mt-4 p-4 bg-green-50 text-green-700 rounded">
              {feedback}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}