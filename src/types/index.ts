export interface ResearchData {
  industry: string;
  segment: string;
  keyOfferings: string[];
  strategicFocus: string[];
  marketSize?: string;
  growthRate?: string;
  competitors?: string[];
}

export interface UseCase {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  category: string;
  implementation: string;
  timeline: string;
  roi: string;
}

export interface Resource {
  title: string;
  source: string;
  url: string;
  type: string;
  relevance: string;
  description: string;
}

export interface Report {
  summary: string;
  methodology: string;
  findings: string[];
  recommendations: string[];
  nextSteps: string[];
}