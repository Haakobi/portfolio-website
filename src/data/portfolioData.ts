import { CaseStudy, FinancialSimulationScenario, ServiceOffering, CareerExperience } from '../types';

export const PERSONAL_INFO = {
  name: 'Hakob Nahapetyan',
  title: 'AI Financial Systems Architect & Multi-Model Workflow Engineer',
  domain: 'hakobnahapetyan.com',
  email: 'hakob.h.nahapetyan@gmail.com',
  location: 'Yerevan / Remote Worldwide (EST, PST, CET timezone flexible)',
  yearsExperience: '7+',
  headline: 'Architecting autonomous multi-model AI pipelines that eliminate manual reconciliation, audit risk, and month-end close delays for modern finance operations.',
  aboutIntro: 'I architect and deploy production-grade financial AI systems. Combining multi-model intelligence (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 2.0) with deterministic accounting engines to deliver straight-through processing, real-time fraud defense, and zero financial hallucinations.',
  stats: [
    { label: 'Straight-Through Processing', value: '98.5%' },
    { label: 'Month-End Close Acceleration', value: '3.5 Days' },
    { label: 'Sub-Second Validation', value: '< 1.2s' },
    { label: 'Hallucination Rate', value: '0.00%' }
  ],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:hakob.h.nahapetyan@gmail.com'
  }
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'finrecon-ai',
    title: 'FinRecon AI: Multi-Bank Ledger 3-Way Reconciliation Pipeline',
    clientType: 'Growth-Stage FinTech & Payment Operations',
    category: 'reconciliation',
    tagline: '98.5% straight-through automated reconciliation across banking feeds and NetSuite GL.',
    summary: 'Autonomous multi-model pipeline that ingests daily wire, ACH, and card transactions, executes deterministic 3-way matching against invoices and POs, and posts balanced journal entries.',
    challenge: '5-day monthly close delay caused by manual spreadsheet reconciliation across SWIFT MT940, BAI2, and ERP ledgers.',
    solution: 'Built an event-driven multi-model parser (GPT-4o & Gemini 2.0) coupled with deterministic Pydantic math validation to resolve discrepancies and split payments automatically.',
    architectureDetails: [
      'Raw bank feed ingestion via SFTP & webhooks into PostgreSQL ledger cache',
      'Multi-modal spatial parser extracting unstructured PDF/image remittances with confidence scoring',
      'Deterministic rule engine for exact matching + semantic reasoning for fuzzy line-item splits',
      'Automated NetSuite REST API dispatch for instant balanced journal entry creation',
      'Continuous audit trail logging with SHA-256 cryptographic proof hashes'
    ],
    metrics: [
      { label: 'Straight-Through Rate', value: '98.5%', improvement: 'Up from 42% manual' },
      { label: 'Close Cycle Time', value: '1.5 Days', improvement: 'Reduced from 5 days' },
      { label: 'Monthly Time Saved', value: '120+ Hours', improvement: 'Freed for strategic analysis' }
    ],
    techStack: ['OpenAI GPT-4o', 'Anthropic Claude 3.5 Sonnet', 'Gemini 2.0 Flash', 'LangGraph', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    erpSystems: ['NetSuite SuiteTalk', 'SAP S/4HANA', 'Plaid API', 'J.P. Morgan Access'],
    featured: true
  },
  {
    id: 'ledgerguard-audit',
    title: 'LedgerGuard: Real-Time AP Fraud & Duplicate Anomaly Sentinel',
    clientType: 'Mid-Market Logistics & Enterprise Operations',
    category: 'audit',
    tagline: 'Pre-payment autonomous sentinel intercepting duplicate invoices, altered routing, and billing drift.',
    summary: 'Automated pre-flight validation sentinel that inspects 100% of vendor bills before approval workflows, quarantining duplicate charges and unverified banking modifications in sub-second latency.',
    challenge: 'Manual AP workflows missing subtle duplicate submissions, re-worded line items, and unverified vendor banking modifications across subsidiaries.',
    solution: 'Engineered a vector-similarity and semantic validation agent (Claude 3.5 Sonnet & pgvector) cross-referencing invoice metadata against vendor history, rate-cards, and routing records.',
    architectureDetails: [
      'Continuous webhook listener on QuickBooks Enterprise & SAP AP queues',
      'Semantic embeddings on vendor invoices using dense vector similarity to catch near-duplicates',
      'Automated vendor bank routing verification with instant quarantine on unverified changes',
      'Explainable AI reasoning reports highlighting exact contract clause violations for AP managers'
    ],
    metrics: [
      { label: 'Duplicate Prevention', value: '100%', improvement: '94 duplicates intercepted' },
      { label: 'Routing Discrepancies', value: 'Zero Misses', improvement: 'Instant quarantine on mismatch' },
      { label: 'Review Latency', value: '< 1.2s', improvement: 'Automated pre-flight check' }
    ],
    techStack: ['Anthropic Claude 3.5 Sonnet', 'OpenAI Embeddings', 'pgvector', 'Python', 'FastAPI', 'RabbitMQ', 'Redis'],
    erpSystems: ['SAP S/4HANA', 'QuickBooks Enterprise', 'Coupa', 'Bill.com'],
    featured: true
  },
  {
    id: 'cashpulse-omni',
    title: 'CashPulse Omni: Dynamic Liquidity & Cash Forecasting Engine',
    clientType: 'Multi-Currency SaaS Scaleup',
    category: 'forecasting',
    tagline: 'Self-updating 13-week rolling cash forecast with autonomous variance explanation.',
    summary: 'AI-driven cash positioning model integrating real-time AR aging collections, AP payment schedules, and payroll projections to predict daily cash balances with 95%+ accuracy.',
    challenge: 'Manual multi-tab spreadsheet maintenance creating weekly overhead, delayed cash visibility, and reactive liquidity management.',
    solution: 'Designed an autonomous pipeline pulling real-time bank balances and open invoices, combined with customer payment velocity modeling and multi-model narrative generation.',
    architectureDetails: [
      'Direct API integrations with Stripe, Wise Business, and commercial banking feeds',
      'Probabilistic trend modeling combined with historical customer payment velocity curves',
      'Multi-model LLM generation (GPT-4o / Claude 3.5) producing executive CFO variance commentaries',
      'Interactive scenario simulation for dynamic working capital projections'
    ],
    metrics: [
      { label: 'Forecast Accuracy', value: '95.4%', improvement: 'Up from 76% spreadsheet baseline' },
      { label: 'Weekly Prep Time', value: '30 Mins', improvement: 'Down from 10+ hours/wk' },
      { label: 'Visibility Horizon', value: 'Daily 13-Week', improvement: 'Continuous real-time updates' }
    ],
    techStack: ['OpenAI GPT-4o', 'Gemini 2.0 Flash', 'Python', 'PyTorch', 'Pandas', 'FastAPI', 'PostgreSQL'],
    erpSystems: ['NetSuite OneWorld', 'Stripe Sigma', 'Xero', 'Wise API'],
    featured: true
  },
  {
    id: 'statementsynth',
    title: 'StatementSynth: Autonomous Financial Report & Variance Synthesizer',
    clientType: 'Accounting & Financial Advisory Practice',
    category: 'reporting',
    tagline: 'Extracts, standardizes, and drafts professional variance commentary for periodic financials.',
    summary: 'Intelligent document engine that parses trial balances, P&L statements, and balance sheets to produce standardized summaries with automated, GAAP-compliant variance commentary.',
    challenge: 'Over 20 analyst hours spent per client compiling trial balances and drafting monthly variance explanations manually.',
    solution: 'Built a structured table extractor combining multi-model perception (Claude 3.5 Sonnet & Gemini) with deterministic debit/credit formula validation before generating commentary.',
    architectureDetails: [
      'Multi-page PDF layout decomposition and table structure parsing',
      'Automated debit/credit balancing verification engine with self-correcting validation loops',
      'Context-aware LLMs prompted with GAAP accounting standards to synthesize variance drivers'
    ],
    metrics: [
      { label: 'Extraction Accuracy', value: '99.6%', improvement: 'Mathematical balance guaranteed' },
      { label: 'Report Generation', value: '< 2 mins', improvement: 'Down from 20+ analyst hours' },
      { label: 'Review Capacity', value: '3x', improvement: 'More client accounts handled' }
    ],
    techStack: ['Anthropic Claude 3.5 Sonnet', 'Gemini 2.0 Pro', 'Python', 'FastAPI', 'PostgreSQL', 'React'],
    erpSystems: ['Workday Financials', 'Sage Intacct', 'Excel OpenPyXL', 'QuickBooks'],
    featured: false
  },
  {
    id: 'taxflow-copilot',
    title: 'TaxFlow Copilot: Expense & Compliance Documentation Classifier',
    clientType: 'Corporate Tax & Accounting Advisory Firm',
    category: 'tax',
    tagline: 'Autonomous classification of technical project logs and cloud spend for compliance binders.',
    summary: 'Specialized compliance automation engine scanning engineering project logs, cloud invoices, and payroll registers to assemble auditable documentation dossiers.',
    challenge: 'Auditors manually parsing thousands of timesheets and cloud invoices, causing severe project turnaround delays.',
    solution: 'Engineered an AI evidence-binding agent linking project work descriptions directly to payroll entries and infrastructure costs with audit citations.',
    architectureDetails: [
      'API connectors to Jira, GitHub, AWS Cost Explorer, and payroll registers',
      'Semantic classification of technical task descriptions against statutory criteria',
      'Automated generation of audit defense dossiers with structured evidence references'
    ],
    metrics: [
      { label: 'Documentation Coverage', value: '100%', improvement: 'Complete evidence cross-referencing' },
      { label: 'Dossier Assembly Time', value: '2 Days', improvement: 'Down from 3 weeks' },
      { label: 'Review Efficiency', value: '+60%', improvement: 'Accelerated sign-off' }
    ],
    techStack: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    erpSystems: ['Gusto API', 'ADP Workforce Now', 'AWS Cost Explorer', 'QuickBooks Online'],
    featured: false
  }
];

export const SIMULATION_SCENARIOS: FinancialSimulationScenario[] = [
  {
    id: 'scenario-invoice-3way',
    name: '3-Way Match & Invoice Auto-Reconciliation',
    category: 'Accounts Payable',
    documentType: 'PDF Vendor Bill vs PO #8492',
    description: 'Incoming vendor bill from CloudScale Data Corp ($4,250.00) with line item discount and freight charge is reconciled against PO #8492 and warehouse receiving slip.',
    sampleInput: {
      source: 'AP Mailbox Ingestion (invoices@company.com)',
      documentName: 'INV-2026-8942-CloudScale.pdf',
      amount: '$4,250.00',
      vendor: 'CloudScale Data Corp',
      invoiceNo: 'CS-8942-B',
      poNumber: 'PO-8492',
      rawTextPreview: 'INVOICE: CS-8942-B | VENDOR: CloudScale Data Corp | PO: PO-8492 | DOCK REC: REC-9921 | ITEMS: 15x Server Memory Modules @ $250.00 ($3,750.00) + Expedited Logistics ($500.00). Total: $4,250.00 | TERMS: Net 30 | BANK ROUTING: 021000021 ACCT: ****8912'
    },
    steps: [
      {
        name: 'Multi-Model Vision & Layout Extraction',
        agentName: 'OpenAI GPT-4o & Gemini Vision',
        action: 'Extracted key-value bounding boxes, itemized tables, freight charges, and tax breakdown with 99.7% confidence.',
        resultSummary: 'Parsed 2 line items, validated subtotal ($3,750) + freight ($500) = Total ($4,250.00).',
        structuredOutput: {
          vendor: 'CloudScale Data Corp',
          tax_id: 'XX-XXX8921',
          invoice_date: '2026-08-28',
          model_used: 'OpenAI GPT-4o (Vision) / Gemini 2.0 Fallback',
          items: [
            { desc: 'Server Memory Modules', qty: 15, unit_price: 250.00, total: 3750.00 },
            { desc: 'Expedited Logistics', qty: 1, unit_price: 500.00, total: 500.00 }
          ]
        }
      },
      {
        name: 'ERP 3-Way Match & Tolerance Verification',
        agentName: 'Deterministic Rules & Claude 3.5',
        action: 'Queried NetSuite PO-8492 and Warehouse Receiving Dock slip REC-9921 for physical receipt confirmation.',
        resultSummary: 'PO #8492 had 15 memory modules at $250 authorized. Freight fee $500 within standard tolerance clause.',
        structuredOutput: {
          po_matched: true,
          po_number: 'PO-8492',
          dock_receipt_verified: true,
          price_variance: 0.00,
          freight_tolerance_passed: true,
          contract_clause: 'Standard logistics passthrough allowance §4.2'
        }
      },
      {
        name: 'Pre-Flight Fraud & Bank Integrity Check',
        agentName: 'LedgerGuard Sentinel Agent',
        action: 'Checked vendor bank routing hash (021000021 / ****8912) against verified NetSuite vendor record.',
        resultSummary: 'Zero routing modifications detected. Duplicate invoice hash checked across 180-day history (Clean).',
        structuredOutput: {
          duplicate_risk: 'LOW (0.01%)',
          bank_routing_verified: true,
          vendor_status: 'Approved Tier-1 Supplier'
        }
      },
      {
        name: 'Automated GL Journal Entry & ERP Dispatch',
        agentName: 'NetSuite REST Sync Worker',
        action: 'Created AP Bill record and balanced General Ledger debits/credits automatically.',
        resultSummary: 'Dispatched REST API payload to NetSuite. Bill #BILL-92019 status set to APPROVED for scheduled payment.',
        structuredOutput: {
          gl_entries: [
            { account: '5100 - Cloud Compute & Hardware', debit: 3750.00, credit: 0.00 },
            { account: '5240 - Freight & Shipping Incurred', debit: 500.00, credit: 0.00 },
            { account: '2000 - Accounts Payable (Trade)', debit: 0.00, credit: 4250.00 }
          ],
          netsuite_bill_id: 'BILL-92019',
          approval_status: 'Auto-Approved (Straight-Through)'
        }
      }
    ],
    finalResult: {
      status: 'Auto-Reconciled',
      confidenceScore: 99.8,
      journalEntryCreated: true,
      erpSynced: 'NetSuite OneWorld (Live)',
      auditLogHash: '0x8f2d99c4b129a0ef11823d',
      timeTakenSeconds: 1.14
    }
  },
  {
    id: 'scenario-fraud-anomaly',
    name: 'Real-Time Duplicate & Altered Wire Anomaly Guard',
    category: 'Internal Audit & Fraud',
    documentType: 'Altered Wire Remittance Notification',
    description: 'A duplicate invoice from Apex Logistics ($8,450.00) containing modified beneficiary banking details is intercepted and quarantined prior to treasury payout.',
    sampleInput: {
      source: 'Vendor Portal Submission',
      documentName: 'Apex_Invoice_Aug2026_Updated.pdf',
      amount: '$8,450.00',
      vendor: 'Apex Global Logistics LLC',
      invoiceNo: 'APX-7741',
      poNumber: 'PO-7104',
      rawTextPreview: 'REMINDER INVOICE APX-7741 | URGENT: PLEASE UPDATE BENEFICIARY ROUTING TO ACCOUNT #9910-4421 AT OFFSHORE FIRST TRUST. Total Due: $8,450.00.'
    },
    steps: [
      {
        name: 'Vector Metadata & Duplicate Hash Extraction',
        agentName: 'pgvector & Claude 3.5 Sonnet',
        action: 'Scanned semantic fingerprint against historical transaction database.',
        resultSummary: 'Identified that invoice APX-7741 was already settled 14 days ago on Aug 16 ($8,450.00).',
        structuredOutput: {
          duplicate_detected: true,
          prior_transaction_id: 'TX-2026-0816-99',
          match_confidence: 99.9
        }
      },
      {
        name: 'Bank Beneficiary Drift Inspection',
        agentName: 'FraudAudit Sentinel',
        action: 'Compared requested bank routing with verified vendor Master File.',
        resultSummary: 'CRITICAL ALERT: Bank routing changed from Chase NY (021000021) to unverified external account.',
        structuredOutput: {
          security_flag: 'HIGH_RISK_BANK_MUTATION',
          original_routing: '021000021 (Chase NY)',
          new_unverified_routing: '098199201 (Unverified Institution)',
          policy_breach: 'Unauthorized bank modification without secondary callback'
        }
      },
      {
        name: 'Autonomous Quarantine & Audit Escalation',
        agentName: 'IncidentEscalator Worker',
        action: 'Freezes transaction in ERP queue, blocks payment disbursement, and issues forensic breakdown to Controller.',
        resultSummary: 'Payment blocked immediately. Forensic ticket #SEC-8921 opened with full PDF diff proof.',
        structuredOutput: {
          payment_blocked: true,
          disbursement_hold_id: 'HOLD-89192',
          controller_notified: true,
          duplicate_prevented: '$8,450.00'
        }
      }
    ],
    finalResult: {
      status: 'Anomaly Detected',
      confidenceScore: 100.0,
      journalEntryCreated: false,
      erpSynced: 'SAP S/4HANA (Quarantined)',
      auditLogHash: '0x3a9b9911e2f88a91c55d01',
      timeTakenSeconds: 0.88
    }
  },
  {
    id: 'scenario-variance-narrative',
    name: 'Departmental Variance & Commentary Synthesis',
    category: 'Financial Planning & Analysis',
    documentType: 'Monthly Departmental P&L vs Budget',
    description: 'Consolidates departmental line items, isolates OpEx budget deviations, and drafts clear controller commentary.',
    sampleInput: {
      source: 'Consolidated General Ledger (Multi-Department)',
      documentName: 'Monthly_Dept_Variance_Review.xlsx',
      amount: '$148,000 Actual OpEx vs $135,000 Budget',
      vendor: 'Engineering & Operations Departments',
      invoiceNo: 'VAR-2026-M08',
      poNumber: 'N/A',
      rawTextPreview: 'ENGINEERING DEPT: Actual $88.5k (+9.2% vs budget) driven by temporary model training compute instances ($7.2k variance) | OPERATIONS: Actual $59.5k (on plan).'
    },
    steps: [
      {
        name: 'Trial Balance Ingestion & Line Consolidation',
        agentName: 'Consolidation Engine',
        action: 'Ingested department accounts and mapped variances against approved monthly operating budgets.',
        resultSummary: 'Consolidated $148,000 Total OpEx vs $135,000 Budget (+9.6% overall variance).',
        structuredOutput: {
          total_actual_opex: 148000,
          budget_opex: 135000,
          variance_amount: 13000,
          variance_pct: 9.6
        }
      },
      {
        name: 'Root-Cause Variance Attribution',
        agentName: 'Claude 3.5 & GPT-4o Reasoning',
        action: 'Drilled into line items to isolate specific drivers behind the 9.6% OpEx deviation.',
        resultSummary: '78% of variance driven by temporary reserved cloud compute nodes in engineering (Acct 5120).',
        structuredOutput: {
          primary_driver: 'Cloud Infrastructure & Compute (Acct 5120)',
          driver_impact: '+$7,200 (temporary sprint surge)',
          secondary_driver: 'Contract Software Tools (Acct 5140: +$2,100)'
        }
      },
      {
        name: 'Executive Commentary Generation',
        agentName: 'NarrativeSynth Copilot',
        action: 'Generated concise, GAAP-compliant variance explanation notes for review meetings.',
        resultSummary: 'Drafted 2-paragraph executive commentary with actionable budget normalization points.',
        structuredOutput: {
          executive_summary: 'Monthly OpEx exceeded budget by $13,000 (+9.6%) primarily due to temporary compute allocations during model benchmark tests, projected to return to baseline next cycle.',
          recommendation: 'Release non-reserved cloud instances following benchmark completion to normalize run-rate.'
        }
      }
    ],
    finalResult: {
      status: 'Narrative Generated',
      confidenceScore: 99.4,
      journalEntryCreated: false,
      erpSynced: 'Workday Adaptive Planning (Exported)',
      auditLogHash: '0x19f9c09aa371092e00bd8a',
      timeTakenSeconds: 1.42
    }
  }
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'autonomous-recon',
    title: 'Autonomous AP/AR & Multi-Bank Reconciliation',
    tagline: 'Straight-through automated ledger reconciliation across bank feeds and ERPs.',
    description: 'End-to-end multi-model AI pipelines ingesting bank feeds (SWIFT, BAI2, Plaid), PDF remittances, and merchant gateways to perform automated 3-way matching and post balanced journal entries to your ERP.',
    deliverables: [
      'Multi-modal LLM extraction for complex vendor bills, remittances, and credit memos',
      'Deterministic rule engine + fuzzy semantic matching for line-item splits',
      'Two-way ERP synchronization (NetSuite, SAP S/4HANA, QuickBooks, Xero)',
      'Human-in-the-loop exception dashboard for edge cases (<1.5% of volume)',
      'Complete audit trail logging with SHA-256 cryptographic proof hashes'
    ],
    timeframe: '3 - 6 Weeks',
    bestFor: 'Growing FinTech, E-Commerce & Mid-Market companies with high-volume monthly invoices',
    iconName: 'Layers'
  },
  {
    id: 'ai-audit-fraud',
    title: 'Real-Time AI Audit & Fraud Prevention Sentinel',
    tagline: 'Continuous pre-payment monitoring to intercept duplicate billing and invoice drift.',
    description: 'Autonomous risk detection agents placed between procurement and payment gateways. Evaluates 100% of vendor transactions against historical patterns and contract clauses in sub-second latency.',
    deliverables: [
      'Semantic duplicate invoice detection (identifies re-worded items and altered numbers)',
      'Vendor bank routing integrity verification with immediate fraud quarantine',
      'Contract compliance checker comparing billings to master service rate cards',
      'Automated SOC 1 / SOC 2 & SOX 404 audit log generation'
    ],
    timeframe: '2 - 4 Weeks',
    bestFor: 'Organizations managing multiple subsidiaries, distributed AP teams, or complex logistics',
    iconName: 'ShieldCheck'
  },
  {
    id: 'financial-copilots',
    title: 'Custom FP&A & Financial Reporting Copilots',
    tagline: 'Instant variance commentary, rolling cash forecasting, and automated management summaries.',
    description: 'Specialized multi-model LLM agents configured on your chart of accounts and corporate financial taxonomy. Extracts insights from trial balances, explains margin deviations, and drafts executive summaries.',
    deliverables: [
      'Automated P&L, balance sheet, and cash flow variance commentary synthesis',
      '13-Week rolling liquidity and working capital predictive models',
      'Structured financial document parser and covenant check assistants',
      'Natural language query interface for finance team ad-hoc analysis'
    ],
    timeframe: '3 - 5 Weeks',
    bestFor: 'Finance Directors, Controllers, and FP&A teams seeking to eliminate repetitive reporting hours',
    iconName: 'TrendingUp'
  },
  {
    id: 'erp-ai-architecture',
    title: 'Fractional AI Financial Systems Architect',
    tagline: 'Strategic design and hands-on engineering for production financial AI infrastructure.',
    description: 'Direct architectural guidance, proof-of-concept builds, and engineering execution to safely deploy multi-model AI into production accounting and treasury operations.',
    deliverables: [
      'Financial AI Architecture & Security Readiness Blueprint',
      'ERP API connector design (SuiteScript, SAP RFC, REST Webhooks)',
      'Zero-Hallucination guardrail design with deterministic validation gates',
      'Deployment to private cloud infrastructure (GCP, AWS, Azure)'
    ],
    timeframe: 'Sprint-based / Retainer',
    bestFor: 'Organizations seeking expert AI engineering leadership without hiring a full in-house team',
    iconName: 'Cpu'
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Multi-Model AI Ecosystem',
    skills: [
      'OpenAI GPT-4o & GPT-4o-mini',
      'Anthropic Claude 3.5 Sonnet',
      'Google Gemini 2.0 & 1.5 Pro',
      'Dynamic Model Routing & Fallback',
      'LangGraph Stateful Workflows',
      'Structured Pydantic Extraction',
      'Zero-Hallucination Guardrails'
    ]
  },
  {
    category: 'Perception & ML Intelligence',
    skills: [
      'Multi-Modal PDF/Image Parsers',
      'Spatial Table Decomposition',
      'LayoutLM & Vision Transformers',
      'Vector Similarity (pgvector, FAISS)',
      'Fuzzy Token & Entity Matchers',
      'Time-Series Liquidity Models',
      'Python, PyTorch & TensorFlow'
    ]
  },
  {
    category: 'Financial Systems & ERPs',
    skills: [
      'NetSuite SuiteTalk & SuiteScript',
      'SAP S/4HANA RFC & OData',
      'QuickBooks Online & Enterprise',
      'Workday Financials & Adaptive',
      'Xero API & Stripe Sigma',
      'Plaid & SWIFT MT940 / BAI2',
      'Coupa, Brex & Bill.com'
    ]
  },
  {
    category: 'Enterprise Systems & Security',
    skills: [
      'Deterministic Double-Entry Rules',
      'FastAPI Async Task Microservices',
      'PostgreSQL, Redis & RabbitMQ',
      'Docker & Kubernetes Containers',
      'GCP Cloud Run & AWS Lambda',
      'SOX 404 & GAAP Compliance',
      'SHA-256 Cryptographic Proofs'
    ]
  }
];

export const CAREER_EXPERIENCES: CareerExperience[] = [
  {
    company: 'Hedgicore',
    role: 'Lead Financial AI Systems Architect & Engineering Lead',
    period: '2023 - Present',
    location: 'Quantitative FinTech & Asset Management Infrastructure',
    summary: 'Architecting autonomous multi-model AI pipelines for quantitative accounting, real-time multi-bank trade reconciliation, and algorithmic ledger integrity in close collaboration with Robert Yenokyan (Founder of Bonton AI & Founder/CEO of Hedgicore).',
    achievements: [
      'Engineered straight-through multi-bank ledger reconciliation pipelines processing daily transaction feeds with 98.5%+ automated match rates.',
      'Designed zero-hallucination risk mitigation guardrails and real-time anomaly detection sentinels with Robert Yenokyan, eliminating manual audit bottlenecks.',
      'Built multi-modal layout parsers extracting structured accounting entities from complex PDF statements, SWIFT MT940 feeds, and broker formats.',
      'Implemented automated compliance logging with cryptographic SHA-256 proof hashes ensuring complete auditability for institutional partners.'
    ],
    keyCollaborator: {
      name: 'Robert Yenokyan',
      role: 'Founder, Bonton AI • Founder & CEO, Hedgicore'
    }
  },
  {
    company: 'Independent Financial AI Architecture & Advisory',
    role: 'Principal AI Automation Architect',
    period: '2021 - 2023',
    location: 'Remote Worldwide (US, EU, UK Enterprise Clients)',
    summary: 'Delivering bespoke enterprise AI automation workflows, AP/AR 3-way reconciliation systems, and FP&A copilots for mid-market corporations, FinTech scaleups, and accounting advisory firms.',
    achievements: [
      'Designed and deployed automated invoice-to-PO reconciliation engines saving dozens of manual hours per week across accounting departments.',
      'Integrated real-time two-way synchronization between multi-modal LLM reasoning pipelines and major ERPs including NetSuite, SAP S/4HANA, and QuickBooks.',
      'Architected variance commentary generators for financial analysts, reducing periodic review cycles from days to hours.'
    ]
  },
  {
    company: 'Enterprise Financial Systems Engineering',
    role: 'Senior Backend & Machine Learning Engineer',
    period: '2018 - 2021',
    location: 'Financial Services & Accounting Software',
    summary: 'Built high-throughput transactional backends, distributed microservices, and predictive ML models for financial data processing, payment settlement, and ledger management.',
    achievements: [
      'Developed high-availability event-driven microservices handling daily settlement records using Python, PostgreSQL, Redis, and message queues.',
      'Trained and deployed supervised classification and anomaly detection models to detect suspicious banking transactions and invoice irregularities.'
    ]
  }
];

