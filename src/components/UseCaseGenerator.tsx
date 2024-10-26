import React, { useState, useEffect } from 'react';
import { Lightbulb, TrendingUp } from 'lucide-react';

export default function UseCaseGenerator({ researchData, onComplete }) {
  const [useCases, setUseCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to generate use cases
    setTimeout(() => {
      const mockUseCases = [
        {
          title: 'Intelligent Document Processing',
          description: 'Automate document processing using AI for improved efficiency',
          impact: 'High',
          category: 'Operations'
        },
        {
          title: 'Customer Service Chatbot',
          description: 'AI-powered chatbot for 24/7 customer support',
          impact: 'Medium',
          category: 'Customer Experience'
        },
        // Add more mock use cases
      ];
      setUseCases(mockUseCases);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Lightbulb className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Use Case Generation</h2>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-indigo-600 border-t-transparent" />
        </div>
      ) : (
        <div className="space-y-4">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-200 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
              <div className="mt-2 flex gap-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                  {useCase.impact} Impact
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {useCase.category}
                </span>
              </div>
            </div>
          ))}
          
          <button
            onClick={() => onComplete(useCases)}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Continue with Selected Use Cases
          </button>
        </div>
      )}
    </div>
  );
}