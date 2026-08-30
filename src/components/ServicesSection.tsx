import { 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICE_OFFERINGS } from '../data/portfolioData';

export function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="h-6 w-6 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6 text-teal-400" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="h-6 w-6 text-emerald-300" />;
      default: return <Sparkles className="h-6 w-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>Consulting & Engineering Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Can Work Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            From scoped turnkey automated pipelines to fractional AI financial systems architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_OFFERINGS.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-600 transition-all hover:shadow-md shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-sm border border-slate-200">
                    <Clock className="h-3.5 w-3.5 text-emerald-600" />
                    {service.timeframe}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-emerald-700 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Core Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-[11px] font-mono text-slate-500">
                  <strong className="text-slate-800">Best for:</strong> {service.bestFor}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
