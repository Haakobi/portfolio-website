export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  category: 'reconciliation' | 'audit' | 'forecasting' | 'reporting' | 'tax';
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  techStack: string[];
  erpSystems: string[];
  featured: boolean;
}

export interface WorkflowSimulationStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'flagged';
  outputData?: Record<string, unknown> | string;
  durationMs: number;
}

export interface FinancialSimulationScenario {
  id: string;
  name: string;
  category: string;
  documentType: string;
  description: string;
  sampleInput: {
    source: string;
    documentName: string;
    amount: string;
    vendor: string;
    invoiceNo: string;
    poNumber: string;
    rawTextPreview: string;
  };
  steps: {
    name: string;
    agentName: string;
    action: string;
    resultSummary: string;
    structuredOutput: Record<string, unknown>;
  }[];
  finalResult: {
    status: 'Auto-Reconciled' | 'Anomaly Detected' | 'Narrative Generated';
    confidenceScore: number;
    journalEntryCreated: boolean;
    erpSynced: string;
    auditLogHash: string;
    timeTakenSeconds: number;
  };
}

export interface ServiceOffering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeframe: string;
  bestFor: string;
  iconName: string;
}

export interface TestimonialOrEndorsement {
  quote: string;
  author: string;
  role: string;
  company: string;
  metricHighlight: string;
}

export interface CareerExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  keyCollaborator?: {
    name: string;
    role: string;
  };
}
