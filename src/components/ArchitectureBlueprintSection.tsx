import { useState } from 'react';
import { 
  Cpu, 
  Database, 
  ShieldCheck, 
  FileCheck, 
  Layers, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  Server, 
  Sparkles,
  GitBranch,
  KeyRound
} from 'lucide-react';

export function ArchitectureBlueprintSection() {
  const [activeTier, setActiveTier] = useState<number>(1);

  const tiers = [
    {
      tier: 1,
      title: 'Multi-Model Ingestion & Perception',
      subtitle: 'Dynamic Model Routing & Vision Extraction',
      description: 'Ingests complex vendor bills, remittances, SWIFT MT940 statements, and multi-bank PDFs with zero rigid OCR templates.',
      color: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-cyan-500/40',
      features: [
        'Dynamic routing across OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet & Google Gemini 2.0',
        'Multi-modal spatial table decomposition for nested line-items, taxes, and discounts',
        'Scan skew compensation and multi-currency parsing with automatic FX reconciliation',
        'Direct SFTP, email webhooks, and commercial banking API ingestion feeds'
      ],
      stack: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 2.0 Flash', 'LangGraph', 'FastAPI']
    },
    {
      tier: 2,
      title: 'Deterministic Math & Tolerance Gates',
      subtitle: 'Zero-Hallucination Semantic Guardrails',
      description: 'AI models never write unverified numbers directly to ledgers. All arithmetic runs through deterministic Pydantic validation checks.',
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/40',
      features: [
        'Strict debit = credit double-entry balancing validation before ledger dispatch',
        'Contractual tolerance enforcement for freight variance and currency spreads',
        'Automated 3-Way Match validation against ERP Purchase Orders and receiving slips',
        'Floating-point safe decimal arithmetic with checksum verification loops'
      ],
      stack: ['Pydantic v2', 'Deterministic Rules Engine', 'Python Decimal Math', 'NumPy']
    },
    {
      tier: 3,
      title: 'Real-Time Audit & Fraud Sentinel',
      subtitle: 'Continuous Pre-Disbursement Screening',
      description: 'Autonomous risk detection agents evaluate 100% of vendor transactions against historical patterns and bank routing records in sub-second latency.',
      color: 'from-amber-500/20 to-orange-500/20',
      border: 'border-amber-500/40',
      features: [
        'Dense vector semantic similarity to catch disguised duplicate invoices',
        'Real-time vendor bank routing and IBAN modification anomaly quarantine',
        'Invoice drift detection alerting on sudden price spikes above rate cards',
        'Automated audit dossier compilation with evidence cross-referencing'
      ],
      stack: ['Anthropic Claude 3.5', 'pgvector Embeddings', 'Redis Sentinel', 'SHA-256 Hashes']
    },
    {
      tier: 4,
      title: 'Two-Way ERP Ledger Synchronization',
      subtitle: 'Transactional Safety & Audit Provenance',
      description: 'Executes atomic REST API calls to enterprise ERPs with rollback safeguards and immutable cryptographic audit trails.',
      color: 'from-purple-500/20 to-indigo-500/20',
      border: 'border-purple-500/40',
      features: [
        'Direct connectors for NetSuite SuiteTalk, SAP S/4HANA, QuickBooks, and Workday',
        'Human-in-the-loop escalation queues for edge cases (<1.5% of transaction volume)',
        'SHA-256 cryptographic audit logs preserving original PDF and reasoning traces',
        'Instant Slack and Microsoft Teams interactive exception approval cards'
      ],
      stack: ['NetSuite SuiteTalk', 'SAP RFC / OData', 'PostgreSQL', 'SOX 404 Logging']
    }
  ];

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
            <Cpu className="h-3.5 w-3.5 text-emerald-600" />
            <span>Production Architecture Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Deterministic Precision Meets Multi-Model Intelligence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Decoupling multi-modal language perception (OpenAI GPT-4o, Claude 3.5 Sonnet, Gemini 2.0) from rigorous mathematical accounting gates to guarantee 100% financial integrity.
          </p>
        </div>

        {/* Tier Selector Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {tiers.map((t) => {
            const isSelected = activeTier === t.tier;
            return (
              <button
                key={t.tier}
                onClick={() => setActiveTier(t.tier)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'border-emerald-600 bg-white shadow-md ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-emerald-700 font-bold uppercase tracking-wider">
                    TIER 0{t.tier}
                  </span>
                  <div className={`h-2.5 w-2.5 rounded-full ${isSelected ? 'bg-emerald-600' : 'bg-slate-300'}`} />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {t.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Tier Interactive Display */}
        {tiers.map((t) => {
          if (t.tier !== activeTier) return null;

          return (
            <div
              key={t.tier}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200">
                    Tier 0{t.tier}: {t.subtitle}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {t.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.description}
                  </p>

                  <div className="pt-2 space-y-2.5">
                    {t.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 shadow-xl">
                  <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="h-4 w-4 text-emerald-400" />
                    Tier Technology Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {t.stack.map((stk) => (
                      <span
                        key={stk}
                        className="text-xs font-mono bg-slate-800 text-emerald-300 px-3 py-1.5 rounded-sm border border-slate-700"
                      >
                        {stk}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono space-y-1.5">
                    <div className="flex justify-between">
                      <span>Latency Budget:</span>
                      <span className="text-emerald-400 font-bold">&lt; 1,200ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Error Rate Tolerance:</span>
                      <span className="text-emerald-400 font-bold">0.00% (Fail-Safe Trap)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security Standard:</span>
                      <span className="text-slate-200">TLS 1.3 + AES-256 At Rest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Security & Zero Hallucination Guarantee Bar */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Zero-Hallucination & SOX 404 Audit Guarantee
              </h4>
              <p className="text-xs text-slate-500">
                Every extracted ledger entry undergoes dual cryptographic verification before committing to production ERP ledgers.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shrink-0 transition-colors shadow-2xs"
          >
            <span>Request Technical Spec</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
