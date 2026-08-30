import { Terminal, Globe, Mail, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {}

export function Footer({}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 text-xs text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          
          {/* Col 1: Brand & Domain */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-slate-900 text-white font-mono font-bold">
                <span className="h-2 w-2 rotate-45 bg-emerald-400"></span>
              </div>
              <span className="font-bold text-slate-900 text-sm tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              {PERSONAL_INFO.headline}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
              <Globe className="h-3.5 w-3.5" />
              <span>https://{PERSONAL_INFO.domain}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5 font-mono">
            <span className="text-slate-900 font-bold block uppercase tracking-wider text-[11px]">
              Navigation
            </span>
            <ul className="space-y-1.5">
              <li><a href="#sandbox" className="text-slate-600 hover:text-emerald-700 transition-colors">Live Sandbox</a></li>
              <li><a href="#projects" className="text-slate-600 hover:text-emerald-700 transition-colors">Projects & Case Studies</a></li>
              <li><a href="#architecture" className="text-slate-600 hover:text-emerald-700 transition-colors">Architecture Spec</a></li>
              <li><a href="#roi-calculator" className="text-slate-600 hover:text-emerald-700 transition-colors">ROI Calculator</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-emerald-700 transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-600 hover:text-emerald-700 transition-colors">About Me</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-emerald-700 transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Channels */}
          <div className="space-y-2.5 font-mono">
            <span className="text-slate-900 font-bold block uppercase tracking-wider text-[11px]">
              Direct Contact
            </span>
            <ul className="space-y-1.5 text-slate-600">
              <li><span>Portfolio: {PERSONAL_INFO.domain}</span></li>
              <li><span>Location: {PERSONAL_INFO.location}</span></li>
              <li>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3 w-3" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-slate-500 font-mono text-[11px]">
            <span>© {new Date().getFullYear()} Hakob Nahapetyan. All rights reserved.</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Reconciliation Engine: 99.98% Precision</span>
            </span>
            <span>•</span>
            <span className="text-slate-600 font-medium flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-emerald-600" />
              SOX 404 & GAAP Audit Compliant
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
