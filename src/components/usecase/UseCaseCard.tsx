import React from 'react';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import { UseCase } from '../../types';

interface Props {
  useCase: UseCase;
}

export default function UseCaseCard({ useCase }: Props) {
  return (
    <div className="bg-white border rounded-lg p-4 hover:border-indigo-200 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-5 h-5 text-indigo-600" />
        <h3 className="font-semibold">{useCase.title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
      
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-600">{useCase.timeline}</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-600">{useCase.roi}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
          {useCase.impact} Impact
        </span>
        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
          {useCase.category}
        </span>
      </div>
    </div>
  );
}