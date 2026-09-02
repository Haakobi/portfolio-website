import { useState } from 'react';
import { 
  FolderKanban, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  Database, 
  ShieldCheck, 
  FileText,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code2,
  BrainCircuit,
  BarChart3
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';

export function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>('finrecon-ai');

  const categories = [
    { id: 'all', label: 'All Projects & Case Studies' },
    { id: 'reconciliation', label: 'Ledger Reconciliation' },
    { id: 'audit', label: 'Fraud & Anomaly Guard' },
    { id: 'forecasting', label: 'Cashflow Forecasting' },
    { id: 'reporting', label: 'SEC & Tax Automation' },
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => s.category === selectedCategory || (selectedCategory === 'reporting' && s.category === 'tax'));

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-200 bg-white relative">
      {/* Dual anchor for compatibility */}
      <div id="case-studies" className="absolute -top-16 left-0 h-0 w-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
              <FolderKanban className="h-3.5 w-3.5 text-emerald-600" />
              <span>Projects & Production Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured AI Financial Automation Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              End-to-end architectures orchestrating OpenAI GPT-4o, Claude 3.5 Sonnet, and Google Gemini with deterministic ERP verification to deliver zero-hallucination financial automation.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-sm px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-5">
          {filteredStudies.map((study) => {
            const isExpanded = expandedCaseId === study.id;

            return (
              <div
                key={study.id}
                className={`rounded-xl border transition-all ${
                  isExpanded
                    ? 'border-emerald-600 bg-white shadow-md'
                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Main Card Header (Click to toggle) */}
                <div
                  onClick={() => setExpandedCaseId(isExpanded ? null : study.id)}
                  className="cursor-pointer p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-sm border border-emerald-200 uppercase tracking-wider">
                        {study.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        Target: {study.clientType}
                      </span>
                      {study.featured && (
                        <span className="text-[11px] font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wider">
                          FEATURED PROJECT
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Quick Technologies Used Pill Row */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] font-mono text-slate-400 font-medium">Core Technologies:</span>
                      {study.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {tech}
                        </span>
                      ))}
                      {study.techStack.length > 4 && (
                        <span className="text-[11px] font-mono text-slate-500">+{study.techStack.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  {/* High level metrics snapshot */}
                  <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {study.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="bg-white p-2.5 rounded-lg border border-slate-200 text-right shadow-2xs">
                          <span className="text-sm font-extrabold text-emerald-600 font-mono block">
                            {m.value}
                          </span>
                          <span className="text-[11px] text-slate-500 block font-mono font-medium">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="h-9 w-9 rounded-sm bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Deep-Dive Details */}
                {isExpanded && (
                  <div className="border-t border-slate-200 px-6 sm:px-8 py-6 bg-slate-50 space-y-6">
                    
                    {/* Challenge vs Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-lg border border-rose-200 bg-white p-4 sm:p-5 shadow-2xs">
                        <div className="flex items-center gap-2 text-rose-700 font-mono text-xs font-bold mb-2 uppercase tracking-wide">
                          <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                          Operational Challenge
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="rounded-lg border border-emerald-200 bg-white p-4 sm:p-5 shadow-2xs">
                        <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold mb-2 uppercase tracking-wide">
                          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                          AI-Driven Financial Automation Solution
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Architecture & Technologies Used */}
                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BrainCircuit className="h-4 w-4 text-emerald-600" />
                        AI Models, Key Technologies & Execution Details
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {study.architectureDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-200 shadow-2xs">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quantifiable Benefits & Outcomes Achieved */}
                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-emerald-600" />
                        Quantifiable Benefits & Outcomes Achieved
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {study.metrics.map((m) => (
                          <div key={m.label} className="bg-white border border-slate-200 p-3.5 rounded-lg shadow-2xs">
                            <div className="text-lg font-extrabold text-slate-900 font-mono">
                              {m.value}
                            </div>
                            <div className="text-xs font-medium text-slate-500 mt-0.5">
                              {m.label}
                            </div>
                            <div className="text-[11px] font-mono font-bold text-emerald-600 mt-1">
                              {m.improvement}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack & ERP Integrations */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs font-mono">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-slate-500 mr-1 font-semibold">Technologies:</span>
                        {study.techStack.map((tech) => (
                          <span key={tech} className="bg-white text-slate-700 px-2 py-0.5 rounded-sm border border-slate-200 shadow-2xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-slate-500 mr-1 font-semibold">ERP & Banking:</span>
                        {study.erpSystems.map((erp) => (
                          <span key={erp} className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-sm border border-emerald-200">
                            {erp}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
