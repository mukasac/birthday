// src/app/quizzes/manage/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { CollaborationAware } from '@/components/ui/collaboration-aware';
import { AnalyticsChart } from '@/components/ui/analytics-chart';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEventSource } from '@/hooks/use-event-source';
import { 
  Trophy, Users, Clock, Brain, 
  BarChart, ArrowRight 
} from 'lucide-react';

export default function QuizManagementPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const liveData = useEventSource('/api/quizzes/live');

  useEffect(() => {
    fetchQuizzes();
    fetchAnalytics();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await fetch('/api/quizzes');
      const data = await response.json();
      setQuizzes(data);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      setAnalytics(data.quizzes);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  return (
    <CollaborationAware>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Quiz Management</h1>
          <Button>
            Create New Quiz
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { 
              title: 'Total Quizzes', 
              value: analytics?.total || 0,
              icon: Brain,
              color: 'blue'
            },
            { 
              title: 'Total Players', 
              value: analytics?.totalPlayers || 0,
              icon: Users,
              color: 'green'
            },
            { 
              title: 'Avg. Score', 
              value: `${analytics?.averageScore || 0}%`,
              icon: Trophy,
              color: 'yellow'
            },
            { 
              title: 'Completion Rate', 
              value: `${(analytics?.completion?.completed / analytics?.completion?.started * 100 || 0).toFixed(1)}%`,
              icon: BarChart,
              color: 'purple'
            }
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 bg-${stat.color}-100 rounded-full`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analytics Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <AnalyticsChart
            title="Player Activity"
            data={analytics?.completion ? [
              { label: 'Started', value: analytics.completion.started },
              { label: 'Completed', value: analytics.completion.completed },
              { label: 'Abandoned', value: analytics.completion.abandoned }
            ] : []}
            type="bar"
          />

          <AnalyticsChart
            title="Score Distribution"
            data={[
              { label: '0-20%', value: 10 },
              { label: '21-40%', value: 20 },
              { label: '41-60%', value: 35 },
              { label: '61-80%', value: 25 },
              { label: '81-100%', value: 10 }
            ]}
          />
        </div>

        {/* Active Quizzes */}
        <Card>
          <CardHeader>
            <CardTitle>Active Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quizzes.map((quiz, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded">
                      <Brain className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{quiz.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {quiz.players} players
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {quiz.duration} mins
                        </span>
                        <span className="flex items-center">
                          <Trophy className="h-4 w-4 mr-1" />
                          Top score: {quiz.topScore}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button size="sm">View Results</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Activity */}
        {liveData && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Live Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {liveData.activeQuizzes?.map((quiz, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">{quiz.title}</h3>
                      <p className="text-sm text-gray-500">
                        {quiz.activePlayers} players currently playing
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="animate-pulse h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm text-green-600">Live</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </CollaborationAware>
  );
}