import { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RoiCalculatorSectionProps {
  onScheduleWithPrefill?: (details: string) => void;
}

export function RoiCalculatorSection({ onScheduleWithPrefill }: RoiCalculatorSectionProps) {
  const [monthlyInvoices, setMonthlyInvoices] = useState<number>(3500);
  const [teamSize, setTeamSize] = useState<number>(4);
  const [hourlyRate, setHourlyRate] = useState<number>(55);
  const [selectedErp, setSelectedErp] = useState<string>('NetSuite');

  // Realistic quantitative formulas based on enterprise benchmark studies
  // Manual reconciliation: ~14 minutes per invoice (lookup, 3-way match, exception resolution, GL posting)
  // AI Pipeline: Reduces manual time by ~88%
  const manualHoursPerInvoice = 14 / 60; // 0.233 hours
  const totalManualHoursPerMonth = monthlyInvoices * manualHoursPerInvoice;
  const aiAutomatedHoursSavedPerMonth = totalManualHoursPerMonth * 0.88;
  const hoursSavedPerYear = Math.round(aiAutomatedHoursSavedPerMonth * 12);

  // Financial dollar savings
  const annualDollarSavings = Math.round(hoursSavedPerYear * hourlyRate);

  // Month-end close acceleration (avg 4.5 days down to ~1.2 days)
  const closeDaysSaved = 3.2;

  // Payback period estimated based on standard implementation scope ($25k - $60k)
  const estImplementationCost = Math.min(65000, Math.max(22000, monthlyInvoices * 4.5));
  const paybackMonths = ((estImplementationCost / (annualDollarSavings / 12))).toFixed(1);

  const erpOptions = [
    'NetSuite OneWorld',
    'SAP S/4HANA',
    'QuickBooks Enterprise',
    'Xero / Bill.com',
    'Sage Intacct',
    'Workday Financials'
  ];

  return (
    <section id="roi-calculator" className="py-16 md:py-24 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
            <Calculator className="h-3.5 w-3.5 text-emerald-600" />
            <span>Interactive Financial Workflow ROI Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Organization&apos;s Annual Savings
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            See how much time, capital, and close-cycle friction autonomous AI financial pipelines eliminate for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 space-y-6 shadow-2xs">
            <h3 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Building2 className="h-4 w-4 text-emerald-600" />
              1. Your Operational Profile
            </h3>

            {/* Slider: Monthly Invoices */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                <span className="text-slate-700">Monthly Invoices & Bank Transactions</span>
                <span className="text-emerald-700 font-mono font-extrabold text-base">
                  {monthlyInvoices.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="30000"
                step="250"
                value={monthlyInvoices}
                onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>500 / mo</span>
                <span>15,000 / mo</span>
                <span>30,000+ / mo</span>
              </div>
            </div>

            {/* Slider: AP/Finance Team Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                <span className="text-slate-700">AP / Accounting Team Size</span>
                <span className="text-emerald-700 font-mono font-extrabold text-base">
                  {teamSize} {teamSize === 1 ? 'Person' : 'FTEs'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>1 Specialist</span>
                <span>10 FTEs</span>
                <span>25+ FTEs</span>
              </div>
            </div>

            {/* Slider: Average Hourly Cost */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                <span className="text-slate-700">Fully-Loaded Hourly Rate (Wages + Overhead)</span>
                <span className="text-emerald-700 font-mono font-extrabold text-base">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>$30/hr</span>
                <span>$75/hr</span>
                <span>$120/hr</span>
              </div>
            </div>

            {/* ERP Selector */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <label className="text-xs font-mono font-semibold text-slate-600 block uppercase tracking-wider">
                Target ERP / Accounting Platform:
              </label>
              <select
                value={selectedErp}
                onChange={(e) => setSelectedErp(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:border-emerald-600 focus:outline-none shadow-2xs"
              >
                {erpOptions.map((erp) => (
                  <option key={erp} value={erp}>{erp}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Right Column: Projected ROI Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Big Headline Output Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-7 shadow-xl text-white">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                PROJECTED ANNUAL SAVINGS
              </span>
              
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight my-2">
                ${annualDollarSavings.toLocaleString()}
              </div>

              <p className="text-xs sm:text-sm text-slate-300">
                Estimated net financial savings per year through autonomous straight-through processing and anomaly elimination.
              </p>

              {/* Grid breakdown metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-800">
                <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="h-3.5 w-3.5 text-emerald-400" />
                    Hours Saved / Yr
                  </div>
                  <div className="text-lg font-extrabold text-white font-mono mt-1">
                    {hoursSavedPerYear.toLocaleString()} hrs
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                    Close Acceleration
                  </div>
                  <div className="text-lg font-extrabold text-emerald-400 font-mono mt-1">
                    -{closeDaysSaved} Days
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                    Est. Payback
                  </div>
                  <div className="text-lg font-extrabold text-white font-mono mt-1">
                    ~{paybackMonths} Mo
                  </div>
                </div>
              </div>

            </div>

            {/* Direct CTA with pre-calculated parameters */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Want an Architecture Roadmap for {selectedErp}?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Hakob reviews your invoice volume and prepares a tailored zero-hallucination spec.
                </p>
              </div>

              <a
                href={`#contact?erp=${encodeURIComponent(selectedErp)}&vol=${monthlyInvoices}&savings=${annualDollarSavings}`}
                className="inline-flex items-center gap-2 rounded-sm bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shrink-0 transition-colors shadow-2xs"
              >
                <span>Request Custom Plan</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
