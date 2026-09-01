import { CaseStudy, FinancialSimulationScenario, ServiceOffering, CareerExperience, TestimonialOrEndorsement } from '../types';

export const PERSONAL_INFO = {
  name: 'Hakob Nahapetyan',
  title: 'AI Financial Workflow Automation Architect & Engineer',
  domain: 'hakobnahapetyan.com',
  email: 'hakob.h.nahapetyan@gmail.com',
  location: 'Yerevan / Remote Worldwide (EST, PST, CET timezone flexible)',
  yearsExperience: '7+',
  headline: 'Engineering autonomous AI pipelines that eliminate manual reconciliation, audit risk, and month-end close delays for modern finance teams.',
  aboutIntro: 'I am an AI Financial Systems Architect specializing in automating high-volume accounting and treasury workflows. I design and build end-to-end intelligent pipelines that combine deep learning, natural language processing (NLP), multi-modal LLMs, and deterministic accounting engines to achieve straight-through processing with zero financial hallucinations.',
  stats: [
    { label: 'Routine Task Automation', value: '88%' },
    { label: 'Straight-Through Processing', value: '98.5%' },
    { label: 'Close Cycle Acceleration', value: '3.5 Days' },
    { label: 'Reconciliation Precision', value: '99.8%' }
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
    title: 'FinRecon AI: Autonomous Multi-Bank Ledger 3-Way Matcher',
    clientType: 'Growth-Stage FinTech & Payment Operations',
    category: 'reconciliation',
    tagline: '98.5% straight-through automated reconciliation across banking feeds and NetSuite GL.',
    summary: 'Engineered an enterprise AI pipeline that automatically reconciles high-volume daily wire, ACH, and card transactions against vendor invoices and internal purchase orders.',
    challenge: 'The accounting team spent 5 business days every month-end manually reconciling transaction feeds (SWIFT MT940, BAI2, CSVs) against internal ERP ledgers. Manual mismatch resolution caused audit bottlenecks and FX variance delays.',
    solution: 'Built an event-driven workflow utilizing multi-modal document parsers and structured Pydantic schema validation. Implemented fuzzy token matching with deterministic tolerance rules to resolve line-item discrepancies and split payments.',
    architectureDetails: [
      'Raw bank feed ingestion via SFTP & webhooks into PostgreSQL ledger cache',
      'Multi-modal layout parser extracting raw PDF/image remittances with confidence scoring',
      'Deterministic rule engine for exact matching + semantic reasoning for fuzzy line-item splits',
      'Automated NetSuite REST API dispatch for instant journal entry creation',
      'Continuous audit trail logging with SHA-256 cryptographic proof hashes'
    ],
    metrics: [
      { label: 'Straight-Through Rate', value: '98.5%', improvement: 'Up from 42% manual' },
      { label: 'Close Cycle Time', value: '1.5 Days', improvement: 'Reduced from 5 days' },
      { label: 'Time Saved / Mo', value: '120+ Hours', improvement: 'Freed for strategic analysis' }
    ],
    techStack: ['Python', 'TensorFlow', 'NLP & LayoutLM', 'Gemini Multi-Modal API', 'LangGraph', 'FastAPI', 'PostgreSQL', 'Docker'],
    erpSystems: ['NetSuite SuiteTalk', 'SAP S/4HANA', 'Plaid API', 'J.P. Morgan Access'],
    featured: true
  },
  {
    id: 'ledgerguard-audit',
    title: 'LedgerGuard: Real-Time AP Fraud & Duplicate Anomaly Detector',
    clientType: 'Mid-Market Logistics & Distribution Firm',
    category: 'audit',
    tagline: 'Pre-payment autonomous sentinel catching duplicate invoices, altered routing, and billing anomalies.',
    summary: 'Deployed an automated validation sentinel that inspects 100% of vendor bills before approval workflows, intercepting duplicate charges and unverified banking detail changes.',
    challenge: 'The AP department processed thousands of monthly vendor invoices across multiple subsidiaries, occasionally missing subtle duplicate submissions or unverified bank routing changes.',
    solution: 'Engineered a vector-similarity and semantic validation agent that cross-references incoming invoice metadata with historic vendor baseline profiles, contract rate-cards, and bank routing records before payment scheduling.',
    architectureDetails: [
      'Continuous webhook listener on QuickBooks Enterprise & SAP AP queues',
      'Semantic embeddings on vendor invoices using dense vector similarity to catch near-duplicate billing',
      'Automated vendor bank routing verification with anomaly alerts on unannounced account edits',
      'Explainable AI reasoning reports highlighting exact contract clause violations for AP managers'
    ],
    metrics: [
      { label: 'Duplicate Prevention', value: '100%', improvement: '94 duplicates intercepted' },
      { label: 'Routing Discrepancies', value: 'Zero Misses', improvement: 'Instant quarantine on mismatch' },
      { label: 'Review Latency', value: '< 1.2s', improvement: 'Automated pre-flight check' }
    ],
    techStack: ['Python', 'ML Anomaly Detection', 'NLP Token Embeddings', 'pgvector', 'FastAPI', 'RabbitMQ', 'TypeScript'],
    erpSystems: ['SAP S/4HANA', 'QuickBooks Enterprise', 'Coupa', 'Bill.com'],
    featured: true
  },
  {
    id: 'cashpulse-omni',
    title: 'CashPulse Omni: Multi-Entity Dynamic Liquidity & Cash Forecasting',
    clientType: 'Multi-Currency SaaS Scaleup',
    category: 'forecasting',
    tagline: 'Self-updating 13-week rolling cash forecast with autonomous variance explanation.',
    summary: 'Built an AI-driven cash positioning model that integrates real-time AR aging collections, AP payment schedules, and payroll projections to predict daily cash balances with 95%+ accuracy.',
    challenge: 'Treasury team manually maintained fragile multi-tab spreadsheets to project 13-week liquidity, leading to significant weekly maintenance overhead and delayed visibility.',
    solution: 'Designed an autonomous data pipeline extracting real-time bank balances, pending gateway payouts, and open invoices, combined with historical payment velocity modeling and automated variance narratives.',
    architectureDetails: [
      'Direct API integrations with Stripe, Wise Business, and commercial banking feeds',
      'Probabilistic trend modeling combined with historical customer payment velocity curves',
      'Natural language generation producing executive CFO summary bullet points and anomaly flags',
      'Interactive scenario simulation for dynamic working capital projections'
    ],
    metrics: [
      { label: 'Forecast Accuracy', value: '95.4%', improvement: 'Up from 76% spreadsheet baseline' },
      { label: 'Weekly Prep Time', value: '30 Mins', improvement: 'Down from 10+ hours/wk' },
      { label: 'Visibility Horizon', value: 'Daily 13-Week', improvement: 'Continuous real-time updates' }
    ],
    techStack: ['Python', 'PyTorch / TensorFlow', 'ML Time-Series Forecasting', 'Gemini Pro', 'FastAPI', 'Pandas', 'PostgreSQL'],
    erpSystems: ['NetSuite OneWorld', 'Stripe Sigma', 'Xero', 'Wise API'],
    featured: true
  },
  {
    id: 'statementsynth',
    title: 'StatementSynth: Autonomous Financial Report & Variance Analyst',
    clientType: 'Accounting & Financial Advisory Practice',
    category: 'reporting',
    tagline: 'Extracts, standardizes, and drafts professional variance commentary for periodic financials.',
    summary: 'Created an intelligent financial document engine that parses trial balances, P&L statements, and balance sheets to produce standardized financial summaries with automated variance commentary.',
    challenge: 'Financial analysts spent over 20 hours per client compiling trial balances and drafting monthly variance explanations manually.',
    solution: 'Developed a structured table extractor using multi-modal AI combined with quantitative debit/credit formula checks to verify mathematical consistency before generating narrative insights.',
    architectureDetails: [
      'Multi-page PDF layout decomposition and table structure parsing',
      'Automated debit/credit balancing verification engine with self-correcting validation loops',
      'Context-aware LLM prompted with GAAP accounting standards to synthesize variance drivers'
    ],
    metrics: [
      { label: 'Extraction Accuracy', value: '99.6%', improvement: 'Mathematical balance guaranteed' },
      { label: 'Report Generation', value: '< 2 mins', improvement: 'Down from 20+ analyst hours' },
      { label: 'Review Capacity', value: '3x', improvement: 'More client accounts handled' }
    ],
    techStack: ['Python', 'Gemini Vision', 'Drizzle/PostgreSQL', 'LangGraph', 'Tailwind/React'],
    erpSystems: ['Workday Financials', 'Sage Intacct', 'Excel OpenPyXL', 'QuickBooks'],
    featured: false
  },
  {
    id: 'taxflow-copilot',
    title: 'TaxFlow Copilot: Automated Expense & Compliance Documentation Classifier',
    clientType: 'Corporate Tax & Accounting Advisory Firm',
    category: 'tax',
    tagline: 'Autonomous classification of technical project logs and cloud spend for compliance binders.',
    summary: 'Built a specialized tax automation engine that scans engineering project logs, cloud invoices, and payroll registers to assemble auditable documentation dossiers.',
    challenge: 'Accountants manually audited thousands of developer timesheets and cloud invoices, causing significant project turnaround delays.',
    solution: 'Engineered an AI evidence-binding agent that links project work descriptions directly to corresponding payroll entries and infrastructure costs with audit citations.',
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
    techStack: ['Python', 'Gemini Pro', 'FastAPI', 'PostgreSQL', 'Docker'],
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
    description: 'An incoming vendor bill from CloudScale Data Corp ($4,250.00) with line item discount and freight charge is reconciled against PO #8492 and warehouse receiving slip.',
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
        name: 'Multi-Modal Document Parsing & OCR',
        agentName: 'VisionParser-Agent',
        action: 'Extracted key-value bounding boxes, itemized tables, freight charges, and tax breakdown with 99.7% confidence.',
        resultSummary: 'Parsed 2 line items, validated subtotal ($3,750) + freight ($500) = Total ($4,250.00).',
        structuredOutput: {
          vendor: 'CloudScale Data Corp',
          tax_id: 'XX-XXX8921',
          invoice_date: '2026-08-28',
          items: [
            { desc: 'Server Memory Modules', qty: 15, unit_price: 250.00, total: 3750.00 },
            { desc: 'Expedited Logistics', qty: 1, unit_price: 500.00, total: 500.00 }
          ]
        }
      },
      {
        name: 'ERP 3-Way Match & Tolerance Verification',
        agentName: 'ToleranceRecon-Agent',
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
        agentName: 'LedgerGuard-Sentinel',
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
        agentName: 'NetSuiteSync-Agent',
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
        agentName: 'LedgerGuard-Sentinel',
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
        agentName: 'FraudAudit-Agent',
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
        agentName: 'IncidentEscalator-Agent',
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
    name: 'Autonomous Departmental Variance & Commentary Synthesis',
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
        agentName: 'Consolidation-Agent',
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
        agentName: 'VarianceAnalyzer-Agent',
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
        agentName: 'NarrativeSynth-Agent',
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
    tagline: 'Replace days of spreadsheet matching with instant, straight-through ledger reconciliation.',
    description: 'Custom end-to-end AI pipelines that ingest bank feeds (SWIFT, BAI2, Plaid), PDF remittances, and merchant gateways to perform automated 3-way matching and post balanced journal entries to your ERP.',
    deliverables: [
      'Multi-modal LLM document extraction for complex vendor bills and credit memos',
      'Deterministic rule engine + fuzzy semantic matching for tricky line-item splits',
      'Two-way ERP synchronization (NetSuite, SAP S/4HANA, QuickBooks, Xero)',
      'Human-in-the-loop exception dashboard for edge-case review (<2% of volume)',
      'Complete audit trail logging with immutable proof hashes'
    ],
    timeframe: '3 - 6 Weeks',
    bestFor: 'Growing FinTech, E-Commerce & Mid-Market companies processing high-volume monthly invoices',
    iconName: 'Layers'
  },
  {
    id: 'ai-audit-fraud',
    title: 'Real-Time AI Audit & Fraud Prevention Sentinel',
    tagline: 'Continuous pre-payment monitoring to intercept duplicate billing, rogue vendors, and invoice drift.',
    description: 'Autonomous risk detection agents sitting between your procurement and payment gateways. Evaluates 100% of vendor transactions against historical patterns and contract clauses in sub-second latency.',
    deliverables: [
      'Semantic duplicate invoice detection (even with re-worded items or altered numbers)',
      'Vendor bank routing integrity verification with immediate fraud quarantine',
      'Contract compliance checker comparing billings to master service rate cards',
      'Automated SOC 1 / SOC 2 & SOX audit log generation'
    ],
    timeframe: '2 - 4 Weeks',
    bestFor: 'Organizations managing multiple subsidiaries, distributed AP teams, or complex logistics',
    iconName: 'ShieldCheck'
  },
  {
    id: 'financial-copilots',
    title: 'Custom FP&A & Financial Reporting Copilots',
    tagline: 'Instant variance commentary, rolling cash forecasting, and automated management summaries.',
    description: 'Specialized LLM agents trained on your chart of accounts and corporate financial taxonomy. Extracts insights from trial balances, explains margin deviations, and drafts executive summaries automatically.',
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
    tagline: 'Strategic design and hands-on engineering to modernize legacy financial infrastructure.',
    description: 'Direct architectural guidance, proof-of-concept builds, and team upskilling to safely deploy generative and predictive AI into production accounting and treasury operations.',
    deliverables: [
      'Comprehensive Financial AI Readiness & Security Audit',
      'ERP API connector architecture (SuiteScript, SAP RFC, REST Webhooks)',
      'Zero-Hallucination guardrail design with deterministic validation gates',
      'Deployment to your private cloud infrastructure (GCP, AWS, Azure)'
    ],
    timeframe: 'Ongoing Retainer / Sprint-based',
    bestFor: 'Organizations seeking expert AI engineering leadership without hiring a full in-house team',
    iconName: 'Cpu'
  }
];

export const TECHNICAL_SKILLS = [
  { category: 'AI & Machine Learning', skills: ['Python (NumPy, SciPy, Pandas)', 'TensorFlow & PyTorch', 'NLP & LayoutLM Document OCR', 'Machine Learning Classification', 'Vector Similarity (pgvector, FAISS)', 'Time-Series Liquidity Models', 'Fine-tuned Transformer Embeddings'] },
  { category: 'LLM Orchestration & Agents', skills: ['Gemini 2.5/3.0 Multi-Modal', 'LangGraph Stateful Workflows', 'Structured Pydantic Output', 'Zero-Hallucination Guardrails', 'Multi-Agent Human-in-the-Loop', 'Function & Tool Calling', 'Prompt Engineering for GAAP'] },
  { category: 'Financial Systems & ERPs', skills: ['NetSuite SuiteTalk / SuiteScript', 'SAP S/4HANA & RFC APIs', 'QuickBooks Online & Enterprise', 'Workday Financials & Adaptive', 'Xero API & Stripe Sigma', 'Plaid & SWIFT MT940 / BAI2', 'Coupa & Bill.com Connectors'] },
  { category: 'Enterprise Architecture & Cloud', skills: ['Deterministic Double-Entry Rules', 'FastAPI & Async Task Queues', 'PostgreSQL, Redis & RabbitMQ', 'Docker & Kubernetes', 'GCP Cloud Run & AWS Lambda', 'SOX 404 & GAAP Compliance', 'SHA-256 Cryptographic Proofs'] }
];

export const CAREER_EXPERIENCES: CareerExperience[] = [
  {
    company: 'Hedgicore',
    role: 'Lead Financial AI Systems Architect & Engineering Lead',
    period: '2023 - Present',
    location: 'Quantitative FinTech & Asset Management Infrastructure',
    summary: 'Architecting mission-critical autonomous AI pipelines for quantitative accounting, real-time multi-asset trade reconciliation, and algorithmic ledger integrity under leadership of Robert Yenokyan.',
    achievements: [
      'Engineered zero-hallucination multi-bank ledger matching pipelines reconciling high-volume daily transactional volume with 98.5%+ straight-through processing.',
      'Collaborated closely with Robert Yenokyan to design risk-mitigation guardrails and real-time anomaly detection sentinels that eliminated manual audit backlogs.',
      'Developed deep neural network layout parsers extracting structured accounting entities from complex PDF statements, Swift MT940 feeds, and proprietary broker formats.',
      'Implemented automated compliance logging with cryptographic SHA-256 proof hashes ensuring complete auditability for institutional partners.'
    ],
    keyCollaborator: {
      name: 'Robert Yenokyan',
      role: 'Founder & CEO, Hedgicore'
    }
  },
  {
    company: 'Independent Financial AI Architecture & Advisory',
    role: 'Principal AI Automation Consultant',
    period: '2021 - 2023',
    location: 'Remote Worldwide (US, EU, UK Enterprise Clients)',
    summary: 'Delivering bespoke enterprise AI automation workflows, AP/AR 3-way reconciliation systems, and FP&A copilots for mid-market corporations, FinTech scaleups, and accounting advisory firms.',
    achievements: [
      'Designed and deployed automated invoice-to-PO reconciliation engines saving dozens of manual hours per week across client accounting departments.',
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

export const ENDORSEMENTS: TestimonialOrEndorsement[] = [
  {
    quote: 'Hakob has an exceptional ability to bridge the gap between complex quantitative finance and cutting-edge autonomous AI. At Hedgicore, his architectures brought unprecedented reliability, speed, and mathematical rigor to our financial pipelines. He does not just build models—he engineers production-grade financial systems with zero room for error.',
    author: 'Robert Yenokyan',
    role: 'Founder & CEO',
    company: 'Hedgicore',
    metricHighlight: '98.5% Straight-Through Match'
  },
  {
    quote: 'Implementing Hakob\'s autonomous reconciliation engine transformed our month-end close from days of tedious spreadsheet cross-checking into an automated review process. His deterministic guardrail design gave our auditors confidence from day one.',
    author: 'VP of Finance & Operations',
    role: 'Head of Accounting',
    company: 'Growing FinTech Infrastructure',
    metricHighlight: '3.5-Day Close Acceleration'
  },
  {
    quote: 'The duplicate and fraud detection sentinel built by Hakob intercepted anomalous wire routing modifications and duplicate charges that traditional ERP validation rules completely missed. An indispensable engineering asset for our finance team.',
    author: 'Corporate Controller',
    role: 'Controller & Compliance Lead',
    company: 'Logistics & Distribution Practice',
    metricHighlight: 'Zero Unverified Disbursements'
  }
];


