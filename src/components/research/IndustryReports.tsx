import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

interface Report {
  title: string;
  url: string;
  source: string;
}

interface Props {
  reports: Report[];
}

export default function IndustryReports({ reports }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold">Industry Reports</h3>
      </div>
      <div className="space-y-3">
        {reports.map((report, index) => (
          <a
            key={index}
            href={report.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 border rounded-lg hover:border-indigo-200 transition-colors"
          >
            <div>
              <p className="font-medium">{report.title}</p>
              <p className="text-sm text-gray-600">{report.source}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-indigo-600" />
          </a>
        ))}
      </div>
    </div>
  );
}