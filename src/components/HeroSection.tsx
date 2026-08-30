import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Database, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  FileSpreadsheet, 
  Zap, 
  ChevronRight,
  TrendingUp,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenSandbox: () => void;
  onOpenRoiCalc: () => void;
}

export function HeroSection({ onOpenSandbox, onOpenRoiCalc }: HeroSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through the live pipeline visualizer
  const pipelineSteps = [
    { label: '1. Multi-Format Ingestion', detail: 'Bank SFTP, MT940, PDF Invoices, EDI Feeds' },
    { label: '2. Vision & Semantic OCR', detail: 'Multi-modal bounding box & table decomposition' },
    { label: '3. Deterministic Tolerance & 3-Way Match', detail: 'Line-item reconciliation against POs & receiving slips' },
    { label: '4. Autonomous Audit & Fraud Guard', detail: 'Pre-flight bank routing & duplicate hash scan' },
    { label: '5. Direct ERP Ledger Dispatch', detail: 'Instant balanced journal entry sync to NetSuite/SAP' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [pipelineSteps.length]);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Subtle geometric line accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-x border-slate-200/80">
          
          {/* Left Column: Geometric Hero Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-white border-b lg:border-b-0 lg:border-r border-slate-200">
            
            {/* Top badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>Financial Automation & Machine Learning</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono text-slate-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>{PERSONAL_INFO.domain}</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Financial <br />
              Architecture <br />
              <span className="text-emerald-600">Redefined.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              I am <strong className="text-slate-900 font-semibold">Hakob Nahapetyan</strong>. I architect intelligent automation systems for high-stakes financial workflows, pairing advanced AI models with deterministic accounting guardrails to eliminate manual friction in reporting, bank reconciliation, and risk audit.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#sandbox"
                onClick={onOpenSandbox}
                className="inline-flex items-center gap-2 rounded-sm bg-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 shadow-sm transition-all hover:scale-[1.01]"
              >
                <Zap className="h-4 w-4 text-emerald-400" />
                <span>Launch Live AI Sandbox</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-all hover:bg-slate-50"
              >
                <span>Featured Projects</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>

              <button
                onClick={onOpenRoiCalc}
                className="inline-flex items-center gap-1.5 rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-mono font-medium text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                <span>Calculate ROI</span>
              </button>
            </div>

            {/* Metrics row with geometric dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                  94%
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">
                  Manual Work Reduction
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono tracking-tight">
                  $2.4M+
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">
                  Avg. Annual Efficiency Gain
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                  &lt;1.2s
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">
                  Sub-Second Invoice Audits
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Geometric Slate-900 Terminal Simulator */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            
            <div className="relative bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-800 flex flex-col overflow-hidden">
              {/* Geometric top emerald bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>

              {/* Console header */}
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-800">
                <div className="text-emerald-400 font-mono text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  SYSTEM_STATUS: ACTIVE
                </div>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Interactive pipeline step cards */}
              <div className="space-y-2.5 mb-6">
                {pipelineSteps.map((step, idx) => {
                  const isActive = idx === activeStep;
                  const isDone = idx < activeStep;

                  return (
                    <div
                      key={step.label}
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer rounded-lg p-3 border transition-all ${
                        isActive
                          ? 'border-emerald-500 bg-slate-800 shadow-md shadow-emerald-500/10'
                          : isDone
                          ? 'border-slate-800 bg-slate-950/70 text-slate-300'
                          : 'border-slate-800/60 bg-slate-950/40 opacity-60 hover:opacity-90'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-mono font-semibold ${isActive ? 'text-emerald-300' : isDone ? 'text-slate-200' : 'text-slate-400'}`}>
                          {step.label}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/40">
                            <Activity className="h-3 w-3 animate-spin" />
                            Running
                          </span>
                        )}
                        {isDone && (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        {step.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Monospace terminal logs */}
              <div className="pt-4 border-t border-slate-800 text-slate-400 font-mono text-[11px] leading-relaxed">
                <span className="text-emerald-400">&gt;</span> INITIALIZING WORKFLOW_AUTOMATION_v4.2<br />
                <span className="text-emerald-400">&gt;</span> SCANNING MULTI_BANK_LEDGER... <span className="text-emerald-300">OK</span><br />
                <span className="text-emerald-400">&gt;</span> APPLYING DETERMINISTIC_GUARD: TOLERANCE_ZERO<br />
                <span className="text-emerald-400">&gt;</span> ANOMALIES DETECTED: <span className="text-emerald-300">0 (BALANCED)</span><br />
                <span className="text-emerald-400">&gt;</span> ERP DISPATCH: <span className="text-cyan-300">NETSUITE_API_SYNCED</span>
              </div>

            </div>

            {/* Bottom mini feature card matching the theme */}
            <div className="mt-6 p-4 bg-white border border-slate-200 rounded-xl flex items-center space-x-4 shadow-xs">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">100% Deterministic Reconciliation</div>
                <div className="text-xs text-slate-500">Autonomous bank statement matching with mathematical proof.</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
