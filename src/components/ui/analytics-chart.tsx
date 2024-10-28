// src/components/ui/analytics-chart.tsx
'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

interface AnalyticsData {
  label: string;
  value: number;
  previousValue?: number;
}

interface AnalyticsChartProps {
  title: string;
  data: AnalyticsData[];
  type?: 'line' | 'bar';
  showComparison?: boolean;
}

export function AnalyticsChart({
  title,
  data,
  type = 'line',
  showComparison = false
}: AnalyticsChartProps) {
  const [chartType, setChartType] = useState(type);

  const ChartComponent = chartType === 'line' ? LineChart : BarChart;
  const DataComponent = chartType === 'line' ? Line : Bar;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <div className="space-x-2">
          <Button
            variant={chartType === 'line' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('line')}
          >
            Line
          </Button>
          <Button
            variant={chartType === 'bar' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('bar')}
          >
            Bar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ChartComponent data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <DataComponent
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
              />
              {showComparison && (
                <DataComponent
                  type="monotone"
                  dataKey="previousValue"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              )}
            </ChartComponent>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}