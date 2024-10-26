import React, { useState } from 'react';
import { Search, Building2 } from 'lucide-react';

export default function ResearchAgent({ onComplete }) {
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockData = {
        industry: 'Technology',
        segment: 'Enterprise Software',
        keyOfferings: ['Cloud Computing', 'AI Solutions', 'Data Analytics'],
        strategicFocus: ['Digital Transformation', 'Customer Experience', 'Innovation']
      };
      setLoading(false);
      onComplete(mockData);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Building2 className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Industry Research</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company or Industry Name
          </label>
          <div className="mt-1 relative">
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="Enter company or industry name..."
              required
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              Analyzing...
            </>
          ) : (
            'Start Research'
          )}
        </button>
      </form>
    </div>
  );
}