import React from 'react';
import { FileCheck, Download, ExternalLink } from 'lucide-react';

export default function FinalProposal({ researchData, useCases, resources }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileCheck className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-semibold">Final Proposal</h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Download className="w-4 h-4" />
          Export PDF
        </button>
      </div>

      <div className="prose max-w-none">
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-2">
            Industry Overview
          </h3>
          <p className="text-indigo-700">
            {researchData?.industry} - {researchData?.segment}
          </p>
        </div>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Recommended Use Cases</h3>
          <div className="grid gap-4">
            {useCases?.map((useCase, index) => (
              <div key={index} className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{useCase.title}</h4>
                <p className="text-gray-600">{useCase.description}</p>
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
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Resource Assets</h3>
          <div className="grid gap-4">
            {resources?.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white border rounded-lg p-4 hover:border-indigo-200 transition-colors"
              >
                <div>
                  <h4 className="font-semibold">{resource.title}</h4>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                      {resource.source}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-indigo-600" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}