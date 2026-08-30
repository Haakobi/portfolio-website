import { useState } from 'react';
import { 
  Terminal, 
  Sparkles, 
  ExternalLink, 
  Menu, 
  X, 
  Globe, 
  ShieldCheck, 
  FileCode, 
  Calendar 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenSandbox: () => void;
}

export function Navbar({ onOpenSandbox }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Systems', href: '#sandbox', highlight: true },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'ROI Model', href: '#roi-calculator' },
    { name: 'Services', href: '#services' },
    { name: 'About Me', href: '#about' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Brand identity: Stylized Monogram & Personal Name */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 cursor-pointer"
            title="Hakob Nahapetyan - Back to top"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-sm bg-slate-900 text-white shadow-xs group-hover:bg-emerald-600 transition-colors duration-300">
              <span className="font-mono text-xs font-black tracking-wider text-emerald-400 group-hover:text-white transition-colors">
                HN
              </span>
              <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white"></div>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5 leading-none mt-0.5">
                <span>AI Financial Architect</span>
                <span className="text-slate-300">•</span>
                <span>Enterprise Automation</span>
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                link.highlight 
                  ? 'text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-sm border border-emerald-200' 
                  : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              {link.highlight && <Sparkles className="h-3 w-3 text-emerald-600" />}
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-sm bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors shadow-xs"
          >
            <Calendar className="h-3.5 w-3.5 text-emerald-400" />
            <span>Contact & Consultation</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-sm p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-6 lg:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-xs font-semibold uppercase tracking-widest ${
                  link.highlight ? 'text-emerald-600' : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-sm bg-slate-900 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
              >
                <Calendar className="h-4 w-4 text-emerald-400" />
                Contact & Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
