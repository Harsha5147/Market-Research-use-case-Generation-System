import React, { useState } from 'react';
import { Search, BookOpen, Database, FileCheck, ArrowRight } from 'lucide-react';
import ResearchAgent from './components/ResearchAgent';
import UseCaseGenerator from './components/UseCaseGenerator';
import ResourceCollector from './components/ResourceCollector';
import FinalProposal from './components/FinalProposal';
import Header from './components/Header';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [researchData, setResearchData] = useState(null);
  const [useCases, setUseCases] = useState([]);
  const [resources, setResources] = useState([]);

  const steps = [
    { icon: Search, title: 'Industry Research', component: ResearchAgent },
    { icon: BookOpen, title: 'Use Case Generation', component: UseCaseGenerator },
    { icon: Database, title: 'Resource Collection', component: ResourceCollector },
    { icon: FileCheck, title: 'Final Proposal', component: FinalProposal }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex justify-between mb-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  index <= activeStep
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                <step.icon className="w-6 h-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">
                {step.title}
              </span>
            </div>
          ))}
          
          {/* Progress Line */}
          <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200 -z-10">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Active Component */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {React.createElement(steps[activeStep].component, {
            onComplete: (data) => {
              if (activeStep === 0) setResearchData(data);
              if (activeStep === 1) setUseCases(data);
              if (activeStep === 2) setResources(data);
              if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
            },
            researchData,
            useCases,
            resources
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-6 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
            disabled={activeStep === steps.length - 1}
            className="px-6 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;