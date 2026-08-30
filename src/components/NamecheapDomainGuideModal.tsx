import { useState } from 'react';
import { 
  X, 
  Globe, 
  Copy, 
  Check, 
  ExternalLink, 
  Server, 
  ShieldCheck, 
  Terminal, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NamecheapDomainGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NamecheapDomainGuideModal({ isOpen, onClose }: NamecheapDomainGuideModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'namecheap' | 'export' | 'cloudrun'>('namecheap');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 h-8 w-8 rounded-sm bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
            <Globe className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Namecheap & Domain Setup Guide
              </h3>
              <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-sm border border-emerald-200 font-semibold">
                {PERSONAL_INFO.domain}
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Step-by-step instructions to link your purchased Namecheap domain ({PERSONAL_INFO.domain}) to your deployed portfolio.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-6 gap-2">
          <button
            onClick={() => setActiveTab('namecheap')}
            className={`pb-3 text-xs font-mono transition-colors border-b-2 ${
              activeTab === 'namecheap'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            1. Namecheap Advanced DNS
          </button>
          <button
            onClick={() => setActiveTab('cloudrun')}
            className={`pb-3 text-xs font-mono transition-colors border-b-2 ${
              activeTab === 'cloudrun'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            2. Cloud Run / Custom Host Mapping
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`pb-3 text-xs font-mono transition-colors border-b-2 ${
              activeTab === 'export'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            3. Production Build & Export
          </button>
        </div>

        {/* Tab 1: Namecheap DNS Table & Steps */}
        {activeTab === 'namecheap' && (
          <div className="space-y-5 text-xs text-slate-700">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
              <h4 className="font-mono font-bold text-slate-900 text-sm">
                How to configure DNS in your Namecheap Account:
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-600">
                <li>Log in to <strong className="text-emerald-700 font-semibold">Namecheap.com</strong> and go to your <strong className="text-slate-900">Domain List</strong>.</li>
                <li>Click <strong className="text-slate-900">Manage</strong> next to <code className="text-emerald-800 font-mono bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">{PERSONAL_INFO.domain}</code>.</li>
                <li>Navigate to the <strong className="text-slate-900">Advanced DNS</strong> tab.</li>
                <li>Under <strong className="text-slate-900">Host Records</strong>, add the following standard DNS records:</li>
              </ol>
            </div>

            {/* DNS Records Table */}
            <div className="rounded-lg border border-slate-200 overflow-hidden bg-white shadow-2xs">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="p-3">Type</th>
                    <th className="p-3">Host</th>
                    <th className="p-3">Value / Target</th>
                    <th className="p-3">TTL</th>
                    <th className="p-3 text-right">Copy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 text-emerald-700 font-bold">CNAME Record</td>
                    <td className="p-3 text-slate-800">www</td>
                    <td className="p-3 text-slate-600 truncate max-w-[200px]" title="ghs.googlehosted.com or your cname target">
                      ghs.googlehosted.com
                    </td>
                    <td className="p-3 text-slate-500">Automatic</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => copyToClipboard('ghs.googlehosted.com', 'cname')}
                        className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                        title="Copy Value"
                      >
                        {copiedKey === 'cname' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-700 font-bold">A Record</td>
                    <td className="p-3 text-slate-800">@</td>
                    <td className="p-3 text-slate-600 font-mono">
                      216.239.32.21 (Google Anycast IP)
                    </td>
                    <td className="p-3 text-slate-500">Automatic</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => copyToClipboard('216.239.32.21', 'arecord')}
                        className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                        title="Copy IP"
                      >
                        {copiedKey === 'arecord' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-emerald-700 font-bold">URL Redirect</td>
                    <td className="p-3 text-slate-800">@</td>
                    <td className="p-3 text-slate-600">
                      https://www.{PERSONAL_INFO.domain} (Unmasked)
                    </td>
                    <td className="p-3 text-slate-500">Automatic</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => copyToClipboard(`https://www.${PERSONAL_INFO.domain}`, 'redirect')}
                        className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                        title="Copy Redirect"
                      >
                        {copiedKey === 'redirect' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>
                <strong>SSL Certificate:</strong> Automatically provisioned via Google Managed Certificates or Let&apos;s Encrypt once DNS propagates (usually 5 to 30 mins).
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Cloud Run / Vercel Mapping */}
        {activeTab === 'cloudrun' && (
          <div className="space-y-4 text-xs text-slate-700">
            <p>
              Your app is currently running on Google Cloud Run container infrastructure. To map <code className="text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded font-mono border border-emerald-200">{PERSONAL_INFO.domain}</code> directly:
            </p>

            <div className="space-y-3 font-mono">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 font-semibold block text-[11px] mb-1">Option A: Via Google Cloud Console</span>
                <p className="text-slate-700 font-sans">
                  Go to <strong>Cloud Run</strong> &gt; <strong>Manage Custom Domains</strong> &gt; <strong>Add Mapping</strong> &gt; Select domain <code className="text-emerald-700 font-bold">{PERSONAL_INFO.domain}</code>.
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 font-semibold block text-[11px] mb-1">Option B: Via Vercel / Netlify / Cloudflare Pages</span>
                <p className="text-slate-700 font-sans">
                  Export repository to GitHub, link project in Vercel/Netlify, and enter <code className="text-emerald-700 font-bold">{PERSONAL_INFO.domain}</code> in Domain Settings. It will provide the exact CNAME record.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Production Build & Export */}
        {activeTab === 'export' && (
          <div className="space-y-4 text-xs text-slate-700">
            <p>
              You can export or bundle this application anytime. The build creates fully optimized static HTML, CSS, and JS bundles:
            </p>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono space-y-3">
              <div>
                <span className="text-slate-500 font-semibold text-[11px]"># 1. Build production bundle</span>
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded border border-slate-200 mt-1 shadow-2xs">
                  <code className="text-emerald-700 font-bold">npm run build</code>
                  <button
                    onClick={() => copyToClipboard('npm run build', 'cmd_build')}
                    className="text-slate-500 hover:text-slate-800"
                  >
                    {copiedKey === 'cmd_build' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-slate-500 font-semibold text-[11px]"># 2. Output directory ready for Namecheap cPanel or static host</span>
                <div className="bg-white px-3 py-2 rounded border border-slate-200 mt-1 shadow-2xs">
                  <code className="text-slate-700 font-bold">./dist/ (index.html, assets/*.js, assets/*.css)</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href="https://www.namecheap.com/myaccount/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-700 hover:text-emerald-800"
          >
            <span>Open Namecheap Account Login</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={onClose}
            className="rounded-sm bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors shadow-2xs"
          >
            Got It, Close
          </button>
        </div>

      </div>
    </div>
  );
}
