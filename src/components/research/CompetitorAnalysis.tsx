import React from 'react';
import { Building2 } from 'lucide-react';

interface Props {
  competitors: string[];
}

export default function CompetitorAnalysis({ competitors }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold">Competitor Analysis</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {competitors.map((competitor, index) => (
          <div
            key={index}
            className="p-3 bg-gray-50 rounded-lg text-center hover:bg-indigo-50 transition-colors"
          >
            <p className="font-medium text-gray-700">{competitor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}