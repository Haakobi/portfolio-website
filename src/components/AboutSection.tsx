import { 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Code2, 
  Database, 
  Lock, 
  Award, 
  Globe, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO, TECHNICAL_SKILLS } from '../data/portfolioData';

export function AboutSection() {
  const principles = [
    {
      title: 'Zero Tolerance for Financial Hallucinations',
      desc: 'LLMs are never allowed to write numbers directly into ledgers. AI parses and extracts; deterministic math validates and balances debits and credits.',
      icon: ShieldCheck
    },
    {
      title: 'Immutable Cryptographic Provenance',
      desc: 'Every journal entry is tied to the original PDF source document with SHA-256 hash proof, full OCR bounding-box coordinates, and timestamped audit logs.',
      icon: Lock
    },
    {
      title: 'Fail-Safe Human Escalation Queues',
      desc: 'Transactions with ambiguous terms or variances above tight policy thresholds automatically route to human controllers via interactive Slack/Teams cards.',
      icon: CheckCircle2
    },
    {
      title: 'Deep ERP & Banking API Native',
      desc: 'Direct SuiteScript, SAP RFC, Plaid, and SWIFT connectors that respect your existing chart-of-accounts structure and enterprise RBAC policies.',
      icon: Database
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
              <Terminal className="h-3.5 w-3.5 text-emerald-600" />
              <span>Engineering Background & Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Hakob Nahapetyan
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Specialized at the intersection of quantitative accounting logic, deterministic distributed systems, and multi-modal AI agents.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-sm bg-slate-900 px-4 py-2 text-xs font-mono text-white hover:bg-slate-800 transition-colors shadow-2xs"
            >
              <Mail className="h-3.5 w-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Overview & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Bio Box */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 space-y-4 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-emerald-600" />
              Architecting Production Financial Systems
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              I specialize in designing and deploying <strong className="text-emerald-700 font-semibold">autonomous AI pipelines for corporate financial operations</strong>. Modern finance teams lose thousands of high-value hours every month manually matching invoices, verifying bank wires, hunting down duplicates, and preparing month-end variance commentary in fragile spreadsheets.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              My engineering approach bridges state-of-the-art multi-modal LLMs (for unstructured document perception) with rigorous deterministic rule engines (for mathematical double-entry accounting integrity). The result is <strong className="text-slate-900 font-semibold">99%+ straight-through processing</strong> that satisfies external Big 4 auditors and accelerates close cycles by over 70%.
            </p>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-slate-500 block">Domain Host</span>
                <span className="text-emerald-700 font-bold">{PERSONAL_INFO.domain}</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-slate-500 block">Location & Focus</span>
                <span className="text-slate-800 font-semibold">Global / AI FinTech</span>
              </div>
            </div>
          </div>

          {/* Principles Grid */}
          <div className="lg:col-span-6 space-y-3.5">
            {principles.map((pr) => {
              const Icon = pr.icon;
              return (
                <div
                  key={pr.title}
                  className="rounded-lg border border-slate-200 bg-white p-4 hover:border-emerald-600 transition-colors shadow-2xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {pr.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {pr.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Technical Stack Radar & Matrix */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-2xs">
          <h3 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Cpu className="h-4 w-4 text-emerald-600" />
            Comprehensive Technical & ERP Stack
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNICAL_SKILLS.map((group) => (
              <div key={group.category} className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 border-b border-slate-200 pb-2">
                  {group.category}
                </h4>
                <ul className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-xs text-slate-700 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
