import { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Code, 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  ExternalLink,
  Layers,
  Zap,
  Clock,
  Search
} from 'lucide-react';
import { SIMULATION_SCENARIOS } from '../data/portfolioData';
import { FinancialSimulationScenario } from '../types';

export function InteractiveWorkflowSandbox() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState<'visual' | 'json' | 'raw'>('visual');
  const [completed, setCompleted] = useState(false);

  const scenario: FinancialSimulationScenario = SIMULATION_SCENARIOS[selectedScenarioIndex];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
    setCompleted(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setCompleted(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && currentStepIndex >= 0 && currentStepIndex < scenario.steps.length) {
      timer = setTimeout(() => {
        if (currentStepIndex === scenario.steps.length - 1) {
          setIsRunning(false);
          setCompleted(true);
        } else {
          setCurrentStepIndex((prev) => prev + 1);
        }
      }, 1400);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentStepIndex, scenario.steps.length]);

  return (
    <section id="sandbox" className="py-16 md:py-24 border-b border-slate-200 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>Interactive Live Agent Sandbox</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Test Autonomous Financial Workflows
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Experience the end-to-end multi-modal perception, deterministic reconciliation, and ERP journal dispatch pipeline in real-time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500">Engine:</span>
            <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-sm">
              LangGraph + GPT-4o / Claude 3.5 / Gemini 2.0
            </span>
          </div>
        </div>

        {/* Scenario Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SIMULATION_SCENARIOS.map((sc, index) => {
            const isSelected = selectedScenarioIndex === index;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setSelectedScenarioIndex(index);
                  handleReset();
                }}
                className={`text-left rounded-xl p-5 border transition-all ${
                  isSelected
                    ? 'border-emerald-600 bg-white shadow-md ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {sc.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">SCENARIO 0{index + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {sc.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {sc.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Sandbox Interactive Console */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950/80 px-5 py-3.5 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-xs text-slate-200 font-medium">
                {scenario.documentType}
              </span>
            </div>

            {/* View switcher tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-sm border border-slate-800">
              <button
                onClick={() => setActiveTab('visual')}
                className={`px-3 py-1 text-xs font-mono rounded-xs transition-colors ${
                  activeTab === 'visual' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Visual Pipeline
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`px-3 py-1 text-xs font-mono rounded-xs transition-colors ${
                  activeTab === 'json' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Structured JSON
              </button>
              <button
                onClick={() => setActiveTab('raw')}
                className={`px-3 py-1 text-xs font-mono rounded-xs transition-colors ${
                  activeTab === 'raw' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Raw Input
              </button>
            </div>

            {/* Run / Reset Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                disabled={currentStepIndex === -1 && !completed}
                className="flex items-center gap-1 rounded-sm border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-mono text-slate-300 hover:bg-slate-700 disabled:opacity-40 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>

              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="flex items-center gap-1.5 rounded-sm bg-emerald-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 disabled:opacity-50 transition-colors shadow-sm"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{isRunning ? 'Processing...' : completed ? 'Re-Run Pipeline' : 'Run Pipeline'}</span>
              </button>
            </div>
          </div>

          {/* Context Banner */}
          <div className="bg-slate-900/60 px-5 py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-4 text-slate-300">
              <span><strong>Source:</strong> {scenario.sampleInput.source}</span>
              <span><strong>Doc:</strong> {scenario.sampleInput.documentName}</span>
              <span><strong>Amount:</strong> <span className="text-emerald-400 font-bold">{scenario.sampleInput.amount}</span></span>
            </div>
            <div className="text-slate-400">
              Vendor: <span className="text-slate-200">{scenario.sampleInput.vendor}</span>
            </div>
          </div>

          {/* Body Content depending on Active Tab */}
          <div className="p-5 min-h-[380px]">
            {activeTab === 'visual' && (
              <div className="space-y-4">
                
                {/* Initial state before run */}
                {currentStepIndex === -1 && !completed && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h4 className="text-base font-semibold text-slate-200">
                      Pipeline Ready for Execution
                    </h4>
                    <p className="text-xs text-slate-400 max-w-md mt-1 mb-4">
                      Click &quot;Run Pipeline&quot; above to watch the agent chain parse the incoming payload, verify deterministic tolerances, audit bank metadata, and trigger ERP ledger sync.
                    </p>
                    <button
                      onClick={handleRunSimulation}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      Execute Workflow
                    </button>
                  </div>
                )}

                {/* Steps sequence */}
                {(currentStepIndex >= 0 || completed) && (
                  <div className="space-y-3">
                    {scenario.steps.map((step, idx) => {
                      const isStepActive = isRunning && currentStepIndex === idx;
                      const isStepDone = (currentStepIndex > idx) || completed;
                      const isStepPending = currentStepIndex < idx && !completed;

                      return (
                        <div
                          key={step.name}
                          className={`rounded-xl p-4 border transition-all ${
                            isStepActive
                              ? 'border-emerald-500 bg-emerald-950/20 shadow-md shadow-emerald-500/10 animate-pulse'
                              : isStepDone
                              ? 'border-slate-800 bg-slate-950/80'
                              : 'border-slate-800/40 bg-slate-950/30 opacity-40'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2.5">
                              {isStepDone ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                              ) : isStepActive ? (
                                <Cpu className="h-4 w-4 text-emerald-400 animate-spin shrink-0" />
                              ) : (
                                <div className="h-4 w-4 rounded-full border border-slate-700 shrink-0" />
                              )}
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono font-bold text-slate-200">
                                    Step 0{idx + 1}: {step.name}
                                  </span>
                                  <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                                    Agent: {step.agentName}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">
                                  {step.action}
                                </p>
                              </div>
                            </div>

                            <span className="text-[11px] font-mono text-slate-500 shrink-0 ml-2">
                              {isStepDone ? 'COMPLETE' : isStepActive ? 'EXECUTING...' : 'QUEUED'}
                            </span>
                          </div>

                          {/* Result Callout when finished */}
                          {isStepDone && (
                            <div className="mt-3 ml-6.5 pt-2.5 border-t border-slate-800/60 text-xs font-mono text-emerald-300/90 bg-slate-900/60 px-3 py-2 rounded-lg">
                              <span className="text-slate-400 mr-1.5 font-sans font-medium">Outcome:</span>
                              {step.resultSummary}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Final Result Card */}
                {completed && (
                  <div className="mt-6 rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 to-slate-900 p-5 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-emerald-800/40 gap-2">
                      <div className="flex items-center gap-2">
                        {scenario.finalResult.status === 'Anomaly Detected' ? (
                          <AlertTriangle className="h-5 w-5 text-amber-400" />
                        ) : (
                          <ShieldCheck className="h-5 w-5 text-emerald-400" />
                        )}
                        <span className="text-sm font-bold text-white font-mono">
                          STATUS: {scenario.finalResult.status.toUpperCase()}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                        Execution Time: {scenario.finalResult.timeTakenSeconds}s
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">CONFIDENCE SCORE</span>
                        <span className="text-emerald-400 font-bold text-sm">
                          {scenario.finalResult.confidenceScore}%
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">ERP LEDGER SYNC</span>
                        <span className="text-slate-200 font-medium truncate block">
                          {scenario.finalResult.erpSynced}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">GL POSTING</span>
                        <span className={`font-semibold ${scenario.finalResult.journalEntryCreated ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {scenario.finalResult.journalEntryCreated ? 'Auto-Created' : 'Quarantined'}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">AUDIT PROOF HASH</span>
                        <span className="text-slate-400 font-mono text-[10px] truncate block" title={scenario.finalResult.auditLogHash}>
                          {scenario.finalResult.auditLogHash}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {activeTab === 'json' && (
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span>Structured Output Schema (Pydantic / LangGraph Model)</span>
                  <span className="text-emerald-400">Valid JSON-Schema</span>
                </div>
                <pre className="text-xs font-mono text-emerald-300/90 leading-relaxed">
                  {JSON.stringify(
                    {
                      scenario_id: scenario.id,
                      document_type: scenario.documentType,
                      input_metadata: scenario.sampleInput,
                      agent_execution_steps: scenario.steps.map((s) => ({
                        agent: s.agentName,
                        action: s.name,
                        output: s.structuredOutput
                      })),
                      reconciliation_result: scenario.finalResult
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            )}

            {activeTab === 'raw' && (
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span>Raw Ingested Text Stream (Simulated OCR Payload)</span>
                  <span className="text-slate-500">UTF-8 Plaintext</span>
                </div>
                <p className="text-xs font-mono text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                  {scenario.sampleInput.rawTextPreview}
                </p>
                <div className="mt-4 text-xs text-slate-400">
                  <p>
                    <strong>Architecture Note:</strong> In production deployments, Hakob uses multi-modal Gemini Vision models with deterministic bounding-box coordinates to ensure 0% line-item slippage even on low-resolution scanned faxes and complex multi-page invoices.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
