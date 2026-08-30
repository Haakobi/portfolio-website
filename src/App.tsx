import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveWorkflowSandbox } from './components/InteractiveWorkflowSandbox';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ArchitectureBlueprintSection } from './components/ArchitectureBlueprintSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NamecheapDomainGuideModal } from './components/NamecheapDomainGuideModal';

export default function App() {
  const [namecheapGuideOpen, setNamecheapGuideOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* Top sticky navigation */}
      <Navbar
        onOpenNamecheapGuide={() => setNamecheapGuideOpen(true)}
        onOpenSandbox={() => scrollToSection('sandbox')}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onOpenSandbox={() => scrollToSection('sandbox')}
          onOpenRoiCalc={() => scrollToSection('roi-calculator')}
        />

        <InteractiveWorkflowSandbox />

        <CaseStudiesSection />

        <ArchitectureBlueprintSection />

        <RoiCalculatorSection
          onScheduleWithPrefill={(details) => {
            scrollToSection('contact');
          }}
        />

        <ServicesSection />

        <AboutSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenNamecheapGuide={() => setNamecheapGuideOpen(true)} />

      {/* Namecheap & Custom Domain Configuration Modal */}
      <NamecheapDomainGuideModal
        isOpen={namecheapGuideOpen}
        onClose={() => setNamecheapGuideOpen(false)}
      />

    </div>
  );
}
