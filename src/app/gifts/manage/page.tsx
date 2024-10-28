// src/app/gifts/manage/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { CollaborationAware } from '@/components/ui/collaboration-aware';
import { AnalyticsChart } from '@/components/ui/analytics-chart';
import { Timeline } from '@/components/ui/timeline';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Gift, DollarSign, Users, Truck,
  ShoppingCart, Heart
} from 'lucide-react';

export default function GiftManagementPage() {
  const [giftPools, setGiftPools] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetchGiftPools();
    fetchAnalytics();
  }, []);

  const fetchGiftPools = async () => {
    try {
      const response = await fetch('/api/gifts');
      const data = await response.json();
      setGiftPools(data);
    } catch (error) {
      console.error('Error fetching gift pools:', error);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      setAnalytics(data.gifts);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  return (
    <CollaborationAware>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Gift Management</h1>
          <Button>Start New Gift Pool</Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              title: 'Active Pools',
              value: analytics?.totalPools || 0,
              icon: Gift,
              color: 'purple'
            },
            {
              title: 'Avg. Contribution',
              value: `$${analytics?.averageContribution || 0}`,
              icon: DollarSign,
              color: 'green'
            },
            {
              title: 'Success Rate',
              value: `${(analytics?.successRate * 100 || 0).toFixed(1)}%`,
              icon: Heart,
              color: 'red'
            },
            {
              title: 'Total Contributors',
              value: '150+',
              icon: Users,
              color: 'blue'
            }
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {stat.title}
                    </p>
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

        {/* Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <AnalyticsChart
            title="Popular Gift Categories"
            data={analytics?.popularCategories || []}
            type="bar"
          />

          <AnalyticsChart
            title="Contribution Trends"
            data={[
              { label: 'Week 1', value: 500 },
              { label: 'Week 2', value: 1200 },
              { label: 'Week 3', value: 800 },
              { label: 'Week 4', value: 1500 }
            ]}
          />
        </div>

        {/* Active Gift Pools */}
        <Card>
          <CardHeader>
            <CardTitle>Active Gift Pools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {giftPools.map((pool, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded">
                        <Gift className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{pool.title}</h3>
                        <p className="text-sm text-gray-500">
                          Target: ${pool.targetAmount}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>
                        ${pool.currentAmount} of ${pool.targetAmount}
                      </span>
                    </div>
                    <Progress 
                      value={(pool.currentAmount / pool.targetAmount) * 100} 
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{pool.contributors.length} contributors</span>
                      <span>
                        {((pool.currentAmount / pool.targetAmount) * 100).toFixed(1)}% funded
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </CollaborationAware>
  );
}