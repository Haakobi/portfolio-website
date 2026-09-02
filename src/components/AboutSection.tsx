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
  HeartHandshake,
  Quote,
  Building2,
  Calendar
} from 'lucide-react';
import { PERSONAL_INFO, TECHNICAL_SKILLS, CAREER_EXPERIENCES, ENDORSEMENTS } from '../data/portfolioData';
import { ProfileCoverCard } from './ProfileCoverCard';

export function AboutSection() {
  const capabilities = [
    {
      title: 'Autonomous AP/AR 3-Way Reconciliation',
      desc: 'Straight-through matching across multi-bank feeds (SWIFT, BAI2, Plaid), PDF bills, and POs with direct ERP journal dispatch.',
      icon: Layers
    },
    {
      title: 'Deterministic Zero-Hallucination Guardrails',
      desc: 'LLMs extract and reason; deterministic accounting engines validate debit/credit integrity before committing to the ledger.',
      icon: ShieldCheck
    },
    {
      title: 'Multi-Model Routing & Fallback Gateways',
      desc: 'Dynamic load-balancing across OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and Google Gemini 2.0 based on document complexity and token budget.',
      icon: Cpu
    },
    {
      title: 'Real-Time AP Fraud & Duplicate Sentinel',
      desc: 'Pre-flight anomaly detection quarantining duplicate charges, unauthorized bank routing drift, and contract clause deviations.',
      icon: Lock
    }
  ];

  const highlights = [
    {
      icon: Cpu,
      title: 'Multi-Model Intelligence',
      desc: 'Orchestrating OpenAI GPT-4o, Claude 3.5 Sonnet, and Gemini 2.0 with LangGraph state machines for high-precision document extraction.'
    },
    {
      icon: ShieldCheck,
      title: 'Audit-Grade Reliability',
      desc: 'SHA-256 cryptographic proof hashes, full bounding-box citation links, and SOX 404 / GAAP compliance built into every workflow.'
    },
    {
      icon: Sparkles,
      title: 'Direct ERP Integration',
      desc: 'Native REST, SuiteScript, and SAP RFC connectors syncing balanced journal entries without disrupting your chart of accounts.'
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
              <span>Capabilities & Engineering Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Hakob Nahapetyan
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              AI Financial Systems Architect specializing in autonomous multi-model pipelines, deterministic reconciliation, and enterprise ERP automation.
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

        {/* Executive Profile Cover Card with Portrait */}
        <div className="mb-12">
          <ProfileCoverCard variant="about" />
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

        {/* 2-Column Capability Overview & Core Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Capability Box */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 space-y-4 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-emerald-600" />
              What I Architect & Execute
            </h3>
            
            <p className="text-sm text-slate-700 leading-relaxed">
              I build production-ready AI automation systems that turn fragmented financial operations into self-reconciling, straight-through pipelines.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Multi-Model Ingestion:</strong> Parsing unstructured invoices, broker statements, and SWIFT MT940 feeds via OpenAI GPT-4o, Claude 3.5 Sonnet, and Gemini 2.0.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Deterministic Math Gates:</strong> Enforcing double-entry balancing rules so LLMs never write unverified numbers directly to general ledgers.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Automated ERP Dispatch:</strong> Direct two-way sync with NetSuite, SAP S/4HANA, QuickBooks, and Workday for instant journal entry creation.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pre-Flight Fraud Sentinels:</strong> Sub-second screening for duplicate invoices, unverified bank routing modifications, and contract variances.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-slate-500 block">Primary Focus</span>
                <span className="text-emerald-700 font-bold">Autonomous Financial AI</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-slate-500 block">Experience Depth</span>
                <span className="text-slate-800 font-semibold">{PERSONAL_INFO.yearsExperience} in Production Systems</span>
              </div>
            </div>
          </div>

          {/* Core Architecture Capabilities Grid */}
          <div className="lg:col-span-6 space-y-3.5">
            {capabilities.map((pr) => {
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
            <h3 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="h-4 w-4 text-emerald-600" />
              Multi-Model AI & Technical Stack Architecture
            </h3>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-semibold">
              OpenAI • Anthropic • Google Gemini Ecosystem
            </span>
          </div>

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

        {/* Track Record & Engineering Engagements */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 mb-1">
                <Building2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Production Track Record</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Engineering Leadership & Deployments
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {CAREER_EXPERIENCES.map((exp) => (
              <div 
                key={exp.company}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-emerald-600/60 transition-colors shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-200">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{exp.company}</h4>
                      {exp.keyCollaborator && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                          Collaboration: {exp.keyCollaborator.name} ({exp.keyCollaborator.role})
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-slate-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                <div className="space-y-1.5">
                  {exp.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Endorsements & Client Feedback */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 mb-1">
                <Quote className="h-3.5 w-3.5 text-emerald-600" />
                <span>Executive Endorsements</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Leadership Recommendations & Industry Impact
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ENDORSEMENTS.map((end, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-2xs hover:border-emerald-600/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-7 w-7 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <Quote className="h-3.5 w-3.5" />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-100/80 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-800">
                      {end.metricHighlight}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed mb-6">
                    &ldquo;{end.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900">{end.author}</h4>
                  <p className="text-[11px] text-emerald-700 font-medium">{end.role}</p>
                  <p className="text-[10px] font-mono text-slate-500">{end.company}</p>
                </div>
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
