import { useState, FormEvent } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: 'AP/AR Autonomous Reconciliation Pipeline',
    monthlyVolume: '2,500 - 10,000 / mo',
    currentErp: 'NetSuite',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[Financial AI Inquiry] ${formData.serviceType} for ${formData.company || 'Enterprise'}`
  )}&body=${encodeURIComponent(
    `Hi Hakob,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.serviceType}\nMonthly Volume: ${formData.monthlyVolume}\nERP: ${formData.currentErp}\n\nMessage:\n${formData.message}\n\nSent from ${PERSONAL_INFO.domain}`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-200 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
            <Mail className="h-3.5 w-3.5 text-emerald-600" />
            <span>Direct Engineering Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Automate Your Financial Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Schedule an architectural review or request a scoped implementation proposal. Response within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct info & calendar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 space-y-5 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Direct Communication Channels
              </h3>

              {/* Direct email card */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                  Primary Engineering Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-mono text-emerald-700 hover:text-emerald-800 font-bold truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-sm bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Response Time & Guarantee */}
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Avg. response time: <strong className="text-slate-900">&lt; 4 hours</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Strict NDA & confidentiality assured for all financial data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Official Domain: <strong className="text-slate-900">{PERSONAL_INFO.domain}</strong></span>
                </div>
              </div>

              {/* Availability badge */}
              <div className="p-3.5 rounded-sm bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>Currently booking Q3/Q4 implementation sprints</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="h-14 w-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Consultation Request Ready
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-emerald-700">{formData.name || 'there'}</strong>! Click below to send your pre-formatted inquiry directly to Hakob Nahapetyan.
                </p>
                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 rounded-sm bg-slate-900 hover:bg-slate-800 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors shadow-2xs"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send via Email Client</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-sm border border-slate-300 bg-white hover:bg-slate-50 px-4 py-3 text-xs font-mono font-medium text-slate-700"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme FinTech Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">Target ERP / Accounting</label>
                    <select
                      value={formData.currentErp}
                      onChange={(e) => setFormData({ ...formData, currentErp: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="NetSuite">NetSuite OneWorld</option>
                      <option value="SAP S/4HANA">SAP S/4HANA</option>
                      <option value="QuickBooks Online/Desktop">QuickBooks Online / Desktop</option>
                      <option value="Xero / Bill.com">Xero / Bill.com</option>
                      <option value="Sage Intacct">Sage Intacct</option>
                      <option value="Workday Financials">Workday Financials</option>
                      <option value="Custom Database">Custom In-House SQL / PostgreSQL</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">Project Type or Engagement Model</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="Autonomous AP/AR & Multi-Bank Reconciliation">
                      Autonomous AP/AR & Multi-Bank Reconciliation
                    </option>
                    <option value="Real-Time AI Audit & Fraud Detection Sentinel">
                      Real-Time AI Audit & Fraud Detection Sentinel
                    </option>
                    <option value="Custom FP&A & SEC 10-K Financial Copilot">
                      Custom FP&A & SEC 10-K Financial Copilot
                    </option>
                    <option value="Fractional AI Financial Systems Architect">
                      Fractional AI Financial Systems Architect
                    </option>
                    <option value="Custom Proof of Concept / Consultation">
                      Custom Proof of Concept / Architectural Audit
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">Project Objectives & Current Bottlenecks</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your transaction volume, reconciliation bottlenecks, or specific ERP workflows you want to automate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-slate-900 hover:bg-slate-800 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors shadow-2xs"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Inquiry & Request Proposal</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
