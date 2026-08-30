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
  ExternalLink,
  ArrowRight,
  Sparkles,
  Zap,
  Briefcase,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { PERSONAL_INFO, TECHNICAL_SKILLS } from '../data/portfolioData';

export function AboutSection() {
  const principles = [
    {
      title: 'Zero Tolerance for Financial Hallucinations',
      desc: 'LLMs are never allowed to write numbers directly into ledgers. AI parses unstructured documents and extracts entities; deterministic math validates and balances debits and credits.',
      icon: ShieldCheck
    },
    {
      title: 'Immutable Cryptographic Provenance',
      desc: 'Every journal entry is tied to the original PDF source document with SHA-256 hash proof, full OCR bounding-box coordinates, and timestamped audit logs for Big 4 verification.',
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

  const highlights = [
    {
      icon: Briefcase,
      title: '7+ Years Production Experience',
      desc: 'Architecting resilient backend systems, distributed data pipelines, and intelligent automation for high-volume FinTech, B2B SaaS, and CPA firms.'
    },
    {
      icon: Cpu,
      title: 'Machine Learning & Multi-Modal AI',
      desc: 'Mastery over Python, TensorFlow, PyTorch, LangGraph, and multi-modal models for complex document decomposition and predictive treasury modeling.'
    },
    {
      icon: Sparkles,
      title: 'Passion for Financial Transformation',
      desc: 'Driven by eradicating soul-crushing spreadsheet reconciliation, eliminating month-end closing panic, and unlocking real-time CFO strategic agility.'
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
              <span>About Me & Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Hakob Nahapetyan
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              AI Financial Workflow Automation Architect & Engineer bridging quantitative accounting logic with autonomous machine learning systems.
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

        {/* 3 Key Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.title} className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-2xs">
                <div className="h-9 w-9 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-3.5">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{h.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 2-Column Deep Bio & Core Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Bio Box */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 space-y-4 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-emerald-600" />
              Expertise in Automating Financial Workflows
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Hello, I am <strong className="text-slate-900 font-semibold">Hakob Nahapetyan</strong>, an expert in architecting and deploying autonomous AI pipelines for corporate financial operations, accounting departments, and treasury teams.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Modern enterprises lose thousands of high-value employee hours each month manually matching invoices against purchase orders, tracing wire transactions across fragmented banking portals, auditing expense anomalies, and assembling month-end close binders in fragile spreadsheets.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              My passion is applying <strong className="text-emerald-700 font-semibold">modern AI, machine learning, and NLP</strong> to solve these high-stakes financial bottlenecks. By combining deep vision transformers (for unstructured PDF/image parsing) with rigorous deterministic rule engines (for mathematical double-entry accounting integrity), I build systems that achieve <strong className="text-slate-900 font-semibold">99%+ straight-through processing rates</strong> while ensuring complete compliance with SOX 404, GAAP/IFRS standards, and external audit scrutiny.
            </p>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-slate-500 block">Domain Host</span>
                <span className="text-emerald-700 font-bold">{PERSONAL_INFO.domain}</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-slate-500 block">Experience & Focus</span>
                <span className="text-slate-800 font-semibold">{PERSONAL_INFO.yearsExperience} / Financial AI</span>
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
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-2xs mb-12">
          <h3 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Cpu className="h-4 w-4 text-emerald-600" />
            Comprehensive Technical & AI Model Stack
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

        {/* Call to Action for Collaborators & Clients */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
              <HeartHandshake className="h-4 w-4 text-emerald-600" />
              <span>Let&apos;s Build Together</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Ready to Automate Your Financial Operations or Collaborate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you are looking to integrate autonomous multi-bank reconciliation, eliminate AP invoice processing bottlenecks, build custom financial copilots, or explore fractional AI engineering, I am available for consultations, proof-of-concept sprints, and strategic client engagements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors shadow-2xs"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
            </a>

            <a
              href="#sandbox"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-slate-300 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Zap className="h-3.5 w-3.5 text-emerald-600" />
              <span>Test AI Sandbox</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
