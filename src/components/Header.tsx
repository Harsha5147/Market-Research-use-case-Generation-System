import React from 'react';
import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              AI Use Case Generator
            </h1>
            <p className="text-gray-600">
              Market Research & GenAI Solutions Platform
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}