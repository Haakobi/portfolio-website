import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  MapPin, 
  Mail, 
  Award,
  Maximize2,
  X,
  UserCheck,
  Lock,
  UploadCloud,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileCoverCardProps {
  variant?: 'hero' | 'about' | 'compact';
  className?: string;
}

const DEFAULT_PORTRAIT = '/portrait.svg';

export function ProfileCoverCard({ variant = 'hero', className = '' }: ProfileCoverCardProps) {
  const [imageSrc, setImageSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hn_custom_cover_photo') || DEFAULT_PORTRAIT;
    }
    return DEFAULT_PORTRAIT;
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if owner mode is triggered via URL param (?owner=1 or ?admin=1)
  const [isOwnerMode, setIsOwnerMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('owner') === 'true' || urlParams.get('admin') === 'true') {
        setIsOwnerMode(true);
      }
    }

    // Secret shortcut: Alt + Shift + P opens Owner Photo Manager
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && (e.key === 'P' || e.key === 'p')) {
        setIsOwnerModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Triple click on verified badge triggers Owner access modal discreetly
  const handleBadgeClick = () => {
    setClickCount(prev => {
      const next = prev + 1;
      if (next >= 3) {
        setIsOwnerModalOpen(true);
        return 0;
      }
      return next;
    });
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setImageSrc(result);
      try {
        localStorage.setItem('hn_custom_cover_photo', result);
      } catch {
        // LocalStorage quota fallback
      }
      setIsOwnerModalOpen(false);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const resetToDefault = () => {
    localStorage.removeItem('hn_custom_cover_photo');
    setImageSrc(DEFAULT_PORTRAIT);
    setIsOwnerModalOpen(false);
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative h-12 w-12 rounded-xl overflow-hidden border-2 border-emerald-500/40 shadow-sm bg-slate-900 shrink-0 cursor-pointer group"
        >
          <img 
            src={imageSrc} 
            alt={PERSONAL_INFO.name} 
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to portrait.svg if custom fails
              if (e.currentTarget.src !== DEFAULT_PORTRAIT) {
                e.currentTarget.src = DEFAULT_PORTRAIT;
              }
            }}
          />
          <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">{PERSONAL_INFO.name}</h4>
          <p className="text-xs text-slate-500 font-mono">Hedgicore • AI Lead</p>
        </div>
      </div>
    );
  }

  if (variant === 'about') {
    return (
      <div className={`relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl overflow-hidden ${className}`}>
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          
          {/* Portrait Photo Frame - Public & Click-to-enlarge */}
          <div className="relative shrink-0 group">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-slate-950 cursor-pointer transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-emerald-950/40"
            >
              <img 
                src={imageSrc} 
                alt={PERSONAL_INFO.name} 
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== DEFAULT_PORTRAIT) {
                    e.currentTarget.src = DEFAULT_PORTRAIT;
                  }
                }}
              />

              {/* Status Badge with triple-click owner trigger */}
              <div 
                onClick={(e) => { e.stopPropagation(); handleBadgeClick(); }}
                className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5 shadow-sm select-none"
                title="Verified Lead Profile"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-mono font-semibold text-emerald-300 uppercase tracking-wider">Executive Lead</span>
              </div>

              {/* Discreet expand icon */}
              <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-slate-900/80 text-slate-300 group-hover:text-white border border-slate-700/60 backdrop-blur-xs transition-opacity opacity-75 group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Identity & Career Meta */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-mono font-semibold mb-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Financial AI Systems Architect</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm font-medium text-emerald-400 mt-1">
                Lead Financial AI Systems Architect & Engineering Lead
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Specializing in autonomous zero-hallucination pipelines for high-stakes financial operations, multi-currency trade reconciliation, and double-entry accounting integrity at <strong className="text-white font-semibold">Hedgicore</strong> under leadership of <strong className="text-emerald-300 font-semibold">Robert Yenokyan</strong> (Founder of Bonton AI & Founder/CEO of Hedgicore).
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <Building2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Hedgicore & Bonton AI Ecosystem</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Yerevan / Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <Award className="h-3.5 w-3.5 text-emerald-400" />
                <span>7+ Yrs Experience</span>
              </div>
            </div>

            {/* Contact Action */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-mono font-bold text-white hover:bg-emerald-500 shadow-md shadow-emerald-900/30 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 px-3 py-2 rounded-lg transition-colors"
              >
                <span>View Engineering Case Studies</span>
              </a>

              {/* Owner mode indicator only if unlocked */}
              {isOwnerMode && (
                <button
                  type="button"
                  onClick={() => setIsOwnerModalOpen(true)}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 bg-slate-800/60 border border-emerald-500/30 px-2.5 py-1.5 rounded-md transition-colors"
                >
                  <Lock className="h-3 w-3" />
                  <span>Owner Photo Settings</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Modal for Expanded View */}
        {isModalOpen && (
          <div 
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/50 mb-4 shadow-xl bg-black">
                <img 
                  src={imageSrc} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h4 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h4>
              <p className="text-xs text-emerald-400 font-mono mt-0.5">Lead Financial AI Systems Architect</p>
              <p className="text-xs text-slate-400 mt-2 font-mono">{PERSONAL_INFO.email}</p>
            </div>
          </div>
        )}

        {/* Owner Photo Management Modal (Protected) */}
        {isOwnerModalOpen && (
          <div 
            onClick={() => setIsOwnerModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 shadow-2xl text-left"
            >
              <button
                type="button"
                onClick={() => setIsOwnerModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono font-bold mb-1">
                <Lock className="h-4 w-4" />
                <span>Hakob Nahapetyan • Private Photo Manager</span>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Upload your raw personal photo. This will be stored securely on your browser as your primary portrait across the portfolio.
              </p>

              {/* Drag and Drop Zone */}
              <div 
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                  isDragging 
                    ? 'border-emerald-400 bg-emerald-950/30 ring-4 ring-emerald-500/20' 
                    : 'border-slate-700 bg-slate-950/60 hover:border-emerald-500/60 hover:bg-slate-950'
                }`}
              >
                <UploadCloud className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
                <p className="text-sm font-semibold text-white mb-1">
                  Click to select or drag & drop your photo
                </p>
                <p className="text-xs text-slate-400">
                  PNG, JPG, WEBP up to 10MB
                </p>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={resetToDefault}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Reset to default portrait
                </button>
                <button
                  type="button"
                  onClick={() => setIsOwnerModalOpen(false)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default 'hero' banner presentation
  return (
    <div className={`bg-slate-900 rounded-2xl border border-slate-800 p-5 text-white shadow-xl ${className}`}>
      <div className="flex items-center gap-4">
        
        {/* Photo Container */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative shrink-0 group cursor-pointer"
        >
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden border-2 border-emerald-500/50 shadow-md bg-slate-950 transition-all group-hover:border-emerald-400">
            <img 
              src={imageSrc} 
              alt={PERSONAL_INFO.name} 
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== DEFAULT_PORTRAIT) {
                  e.currentTarget.src = DEFAULT_PORTRAIT;
                }
              }}
            />
            <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-900"></div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-white truncate">
              {PERSONAL_INFO.name}
            </h3>
            <span 
              onClick={handleBadgeClick}
              className="inline-flex items-center gap-1 text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/60 px-2 py-0.5 rounded-full shrink-0 select-none cursor-pointer"
              title="Verified Financial AI Architect"
            >
              <UserCheck className="h-2.5 w-2.5 text-emerald-400" />
              Verified
            </span>
          </div>

          <p className="text-xs text-emerald-400 font-medium truncate mt-0.5">
            Lead AI Systems Architect • Hedgicore
          </p>

          <div className="flex items-center gap-3 mt-2 text-[11px] font-mono text-slate-400">
            <span className="truncate">7+ Yrs Exp</span>
            <span>•</span>
            <span className="text-slate-300 truncate">98.5% Match Rate</span>
            <span>•</span>
            <span className="text-emerald-400/90 truncate">Zero Hallucinations</span>
          </div>
        </div>

      </div>

      {/* Modal for Expanded View */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/50 mb-4 shadow-xl bg-black">
              <img 
                src={imageSrc} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            <h4 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h4>
            <p className="text-xs text-emerald-400 font-mono mt-0.5">Lead Financial AI Systems Architect</p>
            <p className="text-xs text-slate-400 mt-2 font-mono">{PERSONAL_INFO.email}</p>
          </div>
        </div>
      )}

      {/* Owner Photo Management Modal (Protected) */}
      {isOwnerModalOpen && (
        <div 
          onClick={() => setIsOwnerModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 shadow-2xl text-left"
          >
            <button
              type="button"
              onClick={() => setIsOwnerModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono font-bold mb-1">
              <Lock className="h-4 w-4" />
              <span>Hakob Nahapetyan • Private Photo Manager</span>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Upload your raw personal photo. This will be stored securely on your browser as your primary portrait across the portfolio.
            </p>

            {/* Drag and Drop Zone */}
            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                isDragging 
                  ? 'border-emerald-400 bg-emerald-950/30 ring-4 ring-emerald-500/20' 
                  : 'border-slate-700 bg-slate-950/60 hover:border-emerald-500/60 hover:bg-slate-950'
              }`}
            >
              <UploadCloud className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-white mb-1">
                Click to select or drag & drop your photo
              </p>
              <p className="text-xs text-slate-400">
                PNG, JPG, WEBP up to 10MB
              </p>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800 text-xs">
              <button
                type="button"
                onClick={resetToDefault}
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                Reset to default portrait
              </button>
              <button
                type="button"
                onClick={() => setIsOwnerModalOpen(false)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
