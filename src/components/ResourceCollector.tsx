import React, { useState, useEffect } from 'react';
import { Database, Link } from 'lucide-react';

export default function ResourceCollector({ useCases, onComplete }) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch resources
    setTimeout(() => {
      const mockResources = [
        {
          title: 'Document Processing Dataset',
          source: 'Kaggle',
          url: 'https://www.kaggle.com/datasets/example',
          type: 'Dataset'
        },
        {
          title: 'Customer Service Conversations',
          source: 'HuggingFace',
          url: 'https://huggingface.co/datasets/example',
          type: 'Dataset'
        },
        // Add more mock resources
      ];
      setResources(mockResources);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Database className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Resource Collection</h2>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-indigo-600 border-t-transparent" />
        </div>
      ) : (
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-200 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <Link className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold">{resource.title}</h3>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                  {resource.source}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {resource.type}
                </span>
              </div>
            </a>
          ))}
          
          <button
            onClick={() => onComplete(resources)}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Generate Final Proposal
          </button>
        </div>
      )}
    </div>
  );
}