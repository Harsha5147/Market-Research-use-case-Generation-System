import React from 'react';
import { TrendingUp, Users, Target, PieChart } from 'lucide-react';
import { ResearchData } from '../../types';

interface Props {
  data: ResearchData;
}

export default function IndustryInsights({ data }: Props) {
  const metrics = [
    { icon: PieChart, label: 'Market Size', value: data.marketSize },
    { icon: TrendingUp, label: 'Growth Rate', value: data.growthRate },
    { icon: Users, label: 'Key Offerings', value: data.keyOfferings?.length },
    { icon: Target, label: 'Focus Areas', value: data.strategicFocus?.length }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <metric.icon className="w-5 h-5 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-600">{metric.label}</p>
              <p className="text-lg font-semibold">{metric.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}