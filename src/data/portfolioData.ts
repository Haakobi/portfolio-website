import { CaseStudy, FinancialSimulationScenario, ServiceOffering } from '../types';

export const PERSONAL_INFO = {
  name: 'Hakob Nahapetyan',
  title: 'AI Financial Workflow Automation Architect',
  domain: 'hakobnahapetyan.com',
  email: 'hakobian.ohanyan@gmail.com',
  location: 'Yerevan / Remote Worldwide (EST, PST, CET timezone flexible)',
  yearsExperience: '7+',
  headline: 'Engineering autonomous AI pipelines that eliminate manual reconciliation, audit risk, and month-end close delays for modern finance teams.',
  stats: [
    { label: 'Manual Hours Eliminated / Mo', value: '4,200+' },
    { label: 'Straight-Through Processing Rate', value: '99.4%' },
    { label: 'Reconciled Volume Processed', value: '$840M+' },
    { label: 'Avg. Close Cycle Acceleration', value: '72%' }
  ],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:hakobian.ohanyan@gmail.com'
  }
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'finrecon-ai',
    title: 'FinRecon AI: Autonomous Multi-Bank Ledger 3-Way Matcher',
    clientType: 'Series C B2B FinTech ($120M ARR)',
    category: 'reconciliation',
    tagline: '99.4% straight-through automated reconciliation across 8 global banking partners and NetSuite GL.',
    summary: 'Engineered an enterprise LLM agentic pipeline that reconciles 50,000+ daily cross-border wire and card settlements against merchant invoices and purchase orders without human intervention.',
    challenge: 'A high-volume global payment processor spent 6 business days every month-end reconciling disparate bank transaction logs (SWIFT MT940, BAI2, CSVs) against internal ERP ledgers. Manual mismatch resolution caused audit bottlenecks and FX reporting variances.',
    solution: 'Built an event-driven AI workflow utilizing multi-modal vision parsers and structured Pydantic schema validation. Implemented fuzzy token matching combined with LLM semantic reasoning to resolve line-item discrepancy descriptions, FX spread adjustments, and partial payment splits.',
    architectureDetails: [
      'Raw bank feed ingestion via SFTP & webhooks into PostgreSQL ledger cache',
      'Gemini-powered multi-modal layout parser extracting raw PDF/image remittances with confidence thresholding',
      'Deterministic deterministic rules engine for exact matching + LLM reasoning for ambiguous fuzzy splits',
      'Automated NetSuite REST web services dispatch for instant journal entry creation',
      'Continuous audit trail logging with SHA-256 cryptographic proof hashes for external auditors'
    ],
    metrics: [
      { label: 'Straight-Through Rate', value: '99.4%', improvement: 'Up from 41% manual' },
      { label: 'Close Cycle Time', value: '1.2 Days', improvement: 'Reduced from 6 days' },
      { label: 'Annual Cost Savings', value: '$340,000', improvement: '6 FTE hours redirected' }
    ],
    techStack: ['Python', 'FastAPI', 'Gemini Multi-Modal API', 'LangGraph', 'PostgreSQL', 'Redis', 'Docker'],
    erpSystems: ['NetSuite SuiteTalk', 'SAP S/4HANA', 'Plaid API', 'J.P. Morgan Access'],
    featured: true
  },
  {
    id: 'ledgerguard-audit',
    title: 'LedgerGuard: Real-Time AP Fraud & Duplicate Anomaly Detector',
    clientType: 'Mid-Market Logistics Enterprise ($350M Revenue)',
    category: 'audit',
    tagline: 'Pre-payment autonomous sentinel catching invoice drift, vendor routing spoofing, and ghost billings.',
    summary: 'Deployed an autonomous monitoring agent that inspects 100% of vendor invoices before approval workflows, intercepting duplicate charges, altered wire instructions, and unapproved price deviations.',
    challenge: 'The enterprise processed 4,500 monthly vendor bills across 14 freight subsidiaries. AP clerks periodically approved duplicate invoices formatted with slight typographical alterations or subtle vendor bank routing changes.',
    solution: 'Engineered a vector-similarity and semantic validation agent that cross-references incoming invoice metadata with historic 3-year vendor baseline profiles, contract rate-cards, and bank routing hashes before payment scheduling.',
    architectureDetails: [
      'Continuous webhook listener on QuickBooks Enterprise & SAP AP queues',
      'Semantic embeddings on vendor invoices using dense vector similarity to catch near-duplicate billing',
      'Automated vendor bank routing verification with anomaly alerts on unannounced account edits',
      'Explainable AI reasoning reports highlighting exact contract clause violations for AP managers'
    ],
    metrics: [
      { label: 'Fraud Intercepted', value: '$1.4M', improvement: 'Zero false disbursements' },
      { label: 'Duplicate Detection', value: '100%', improvement: '184 duplicates prevented' },
      { label: 'Review Latency', value: '850ms', improvement: 'Instant pre-flight check' }
    ],
    techStack: ['Python', 'LangChain', 'pgvector', 'FastAPI', 'RabbitMQ', 'TypeScript'],
    erpSystems: ['SAP S/4HANA', 'QuickBooks Enterprise', 'Coupa', 'Bill.com'],
    featured: true
  },
  {
    id: 'cashpulse-omni',
    title: 'CashPulse Omni: Multi-Entity Dynamic Liquidity & Cash Forecasting',
    clientType: 'Global SaaS Conglomerate (6 Entities, 4 Currencies)',
    category: 'forecasting',
    tagline: 'Self-updating 13-week rolling cash forecast with autonomous variance explanation.',
    summary: 'Built an AI-driven cash positioning model that integrates real-time AR aging collections, AP payment schedules, and payroll projections to predict daily cash balances with 96.8% accuracy.',
    challenge: 'Treasury team manually maintained a fragile 40-tab Excel workbook to project 13-week liquidity. FX fluctuations and delayed customer payment notifications led to cash cushion over-allocation and lost treasury yield.',
    solution: 'Designed an autonomous data pipeline extracting real-time bank balances, pending stripe payouts, and open invoices. Trained customized predictive models coupled with LLM scenario narrative generation for executive board reporting.',
    architectureDetails: [
      'Direct API integrations with Stripe, Wise Business, and Silicon Valley Bank / HSBC feeds',
      'Probabilistic Monte-Carlo simulations combined with historical payment velocity modeling',
      'Natural language generation producing executive CFO summary bullet points and anomaly flags',
      'Interactive CFO liquidity scenario simulator for dynamic FX stress-testing'
    ],
    metrics: [
      { label: 'Forecast Accuracy', value: '96.8%', improvement: 'Up from 78% in Excel' },
      { label: 'Idle Cash Unlocked', value: '$4.2M', improvement: 'Re-allocated to yield accounts' },
      { label: 'Reporting Prep Time', value: '15 Mins', improvement: 'Down from 18 hours/wk' }
    ],
    techStack: ['Python', 'PyTorch', 'Gemini Pro', 'FastAPI', 'Pandas', 'PostgreSQL'],
    erpSystems: ['NetSuite OneWorld', 'Stripe Sigma', 'Xero', 'Wise API'],
    featured: true
  },
  {
    id: 'statementsynth',
    title: 'StatementSynth: Autonomous SEC 10-K & Variance Analyst',
    clientType: 'Private Equity & Asset Management Advisory',
    category: 'reporting',
    tagline: 'Extracts, standardizes, and writes institutional-grade variance commentary for quarterly financials.',
    summary: 'Created an intelligent financial document engine that parses raw SEC filings, GAAP balance sheets, and trial balances into standardized financial models with automated MD&A variance commentary.',
    challenge: 'Financial analysts spent over 30 hours per portfolio company converting PDF trial balances and 10-Q filings into standardized debt covenant models and variance reports.',
    solution: 'Developed a deterministic table structure extractor using LLM vision combined with quantitative formula checkers to verify balance sheet mathematical consistency before generating variance insights.',
    architectureDetails: [
      'Multi-page PDF layout decomposition and table structure parsing',
      'Automated debit/credit balancing verification engine with self-correcting validation loops',
      'Context-aware LLM prompted with GAAP accounting standards to synthesize variance drivers'
    ],
    metrics: [
      { label: 'Extraction Accuracy', value: '99.8%', improvement: 'Zero math discrepancies' },
      { label: 'Report Generation', value: '< 2 mins', improvement: 'From 30+ analyst hours' },
      { label: 'Coverage Capacity', value: '5x', improvement: 'More portfolio companies covered' }
    ],
    techStack: ['Python', 'Gemini Vision', 'Drizzle/PostgreSQL', 'LangGraph', 'Tailwind/React'],
    erpSystems: ['Workday Financials', 'Sage Intacct', 'Excel OpenPyXL', 'SEC EDGAR API'],
    featured: false
  },
  {
    id: 'taxflow-copilot',
    title: 'TaxFlow Copilot: Automated R&D Tax Credit & Expense Classifier',
    clientType: 'CPA & Tax Advisory Firm',
    category: 'tax',
    tagline: 'Autonomous classification of technical payroll and cloud spend for Section 41 R&D tax compliance.',
    summary: 'Built a specialized tax automation engine that scans GitHub commits, Jira tickets, AWS invoices, and payroll ledgers to assemble auditable R&D tax credit study binders.',
    challenge: 'CPAs manually audited thousands of engineer timesheets and cloud invoices to defend qualified research expenses (QREs), resulting in huge billable hour friction.',
    solution: 'Engineered an AI evidence-binding agent that links code commits and sprint stories directly to corresponding payroll entries and cloud infrastructure costs with comprehensive audit citations.',
    architectureDetails: [
      'API connectors to Jira, GitHub, AWS Cost Explorer, and ADP/Gusto payroll logs',
      'Semantic classification of technical task descriptions against IRS Section 41 Four-Part Test',
      'Automated generation of IRS-compliant audit defense dossiers with clickable evidence links'
    ],
    metrics: [
      { label: 'Qualified Credit Identified', value: '+$820k', improvement: '34% more qualified spend' },
      { label: 'Dossier Assembly Time', value: '3 Days', improvement: 'Down from 6 weeks' },
      { label: 'IRS Audit Defense Rate', value: '100%', improvement: 'Zero disallowed deductions' }
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
    description: 'An incoming vendor bill from CloudScale Data Corp ($14,250.00) with line item discount mismatch and freight fee is reconciled against PO #8492 and receiving dock slip.',
    sampleInput: {
      source: 'AP Mailbox Ingestion (invoices@company.com)',
      documentName: 'INV-2026-8942-CloudScale.pdf',
      amount: '$14,250.00',
      vendor: 'CloudScale Data Corp',
      invoiceNo: 'CS-8942-B',
      poNumber: 'PO-8492',
      rawTextPreview: 'INVOICE: CS-8942-B | VENDOR: CloudScale Data Corp | PO: PO-8492 | DOCK REC: REC-9921 | ITEMS: 50x Enterprise GPU Cluster Nodes @ $270.00 ($13,500.00) + Priority Courier Expedited Logistics ($750.00). Total: $14,250.00 | TERMS: Net 30 | BANK ROUTING: 021000021 ACCT: ****8912'
    },
    steps: [
      {
        name: 'Multi-Modal Document Parsing & OCR',
        agentName: 'VisionParser-Agent',
        action: 'Extracted key-value bounding boxes, itemized tables, freight charges, and tax breakdown with 99.7% confidence.',
        resultSummary: 'Parsed 2 line items, validated subtotal ($13,500) + freight ($750) = Total ($14,250.00).',
        structuredOutput: {
          vendor: 'CloudScale Data Corp',
          tax_id: 'XX-XXX8921',
          invoice_date: '2026-08-28',
          items: [
            { desc: 'Enterprise GPU Cluster Nodes', qty: 50, unit_price: 270.00, total: 13500.00 },
            { desc: 'Priority Courier Expedited Logistics', qty: 1, unit_price: 750.00, total: 750.00 }
          ]
        }
      },
      {
        name: 'ERP 3-Way Match & Tolerance Verification',
        agentName: 'ToleranceRecon-Agent',
        action: 'Queried NetSuite PO-8492 and Warehouse Receiving Dock slip REC-9921 for physical receipt confirmation.',
        resultSummary: 'PO #8492 had 50 GPU nodes at $270 authorized. Freight fee $750 within 5% tolerance contract clause.',
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
            { account: '5100 - Cloud Compute & Infrastructure', debit: 13500.00, credit: 0.00 },
            { account: '5240 - Freight & Shipping Incurred', debit: 750.00, credit: 0.00 },
            { account: '2000 - Accounts Payable (Trade)', debit: 0.00, credit: 14250.00 }
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
    description: 'A spoofed invoice from Apex Logistics containing altered beneficiary banking details and duplicate billing is intercepted and quarantined prior to treasury payout.',
    sampleInput: {
      source: 'Vendor Portal Submission',
      documentName: 'Apex_Invoice_Aug2026_Updated.pdf',
      amount: '$48,900.00',
      vendor: 'Apex Global Logistics LLC',
      invoiceNo: 'APX-7741',
      poNumber: 'PO-7104',
      rawTextPreview: 'REMINDER INVOICE APX-7741 | URGENT: PLEASE UPDATE BENEFICIARY ROUTING TO ACCOUNT #9910-4421 AT OFFSHORE FIRST TRUST. Total Due: $48,900.00.'
    },
    steps: [
      {
        name: 'Vector Metadata & Duplicate Hash Extraction',
        agentName: 'LedgerGuard-Sentinel',
        action: 'Scanned semantic fingerprint against historical transaction database.',
        resultSummary: 'Identified that invoice APX-7741 was already settled 14 days ago on Aug 16 ($48,900.00).',
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
        resultSummary: 'CRITICAL ALERT: Bank routing changed from Chase NY (021000021) to unverified offshore institution.',
        structuredOutput: {
          security_flag: 'HIGH_RISK_BANK_MUTATION',
          original_routing: '021000021 (Chase NY)',
          new_unverified_routing: '098199201 (Offshore First Trust)',
          policy_breach: 'Unauthorized bank modification without secondary callback'
        }
      },
      {
        name: 'Autonomous Quarantine & Slack/Audit Escalation',
        agentName: 'IncidentEscalator-Agent',
        action: 'Freezes transaction in ERP queue, blocks treasury disbursement, and issues forensic breakdown to Controller.',
        resultSummary: 'Payment blocked immediately. Forensic ticket #SEC-8921 opened with full PDF diff proof.',
        structuredOutput: {
          payment_blocked: true,
          disbursement_hold_id: 'HOLD-89192',
          controller_notified: true,
          fraud_prevention_value: '$48,900.00'
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
    name: 'Autonomous P&L Variance & Executive Narrative Synthesis',
    category: 'Financial Planning & Analysis',
    documentType: 'Q3 Trial Balance vs Budget Forecast',
    description: 'Consolidates multi-subsidiary trial balances, isolates anomalous OpEx budget overruns, and drafts CFO board commentary.',
    sampleInput: {
      source: 'Consolidated General Ledger (Multi-Entity)',
      documentName: 'Q3_Consolidated_Trial_Balance_vFinal.xlsx',
      amount: '$18.4M Revenue / $12.1M OpEx',
      vendor: 'Internal Consolidated Entities',
      invoiceNo: 'TB-2026-Q3',
      poNumber: 'N/A',
      rawTextPreview: 'ENTITY 01 (US): Rev $12.2M (+4.1% vs budget) | OpEx $7.8M (+14.2% overrun in AWS GPU compute) | ENTITY 02 (EU): Rev €5.7M (-1.8% vs budget) | FX Spread Impact: -$140k.'
    },
    steps: [
      {
        name: 'Trial Balance Ingestion & Entity Consolidation',
        agentName: 'Consolidation-Agent',
        action: 'Ingested 4 distinct chart-of-accounts hierarchies and converted EUR/GBP to USD functional currency.',
        resultSummary: 'Consolidated $18.42M Total Revenue vs $17.90M Budget (+2.9%). OpEx $12.10M vs $10.95M (+10.5%).',
        structuredOutput: {
          total_revenue: 18420000,
          budget_revenue: 17900000,
          revenue_variance_pct: 2.9,
          total_opex: 12100000,
          budget_opex: 10950000,
          opex_variance_pct: 10.5
        }
      },
      {
        name: 'Root-Cause Variance Attribution',
        agentName: 'VarianceAnalyzer-Agent',
        action: 'Drilled into 1,200 line items to isolate specific drivers behind the 10.5% OpEx overrun.',
        resultSummary: '82% of OpEx overrun attributed to unbudgeted LLM inference token clusters and expedited server hardware.',
        structuredOutput: {
          primary_driver: 'Cloud Infrastructure & AI Compute (Acct 5120)',
          driver_impact: '+$940,000 (81.7% of total variance)',
          secondary_driver: 'FX translation loss EUR/USD (Acct 8910: -$140,000)'
        }
      },
      {
        name: 'Executive Narrative Generation for CFO/Board',
        agentName: 'NarrativeSynth-Agent',
        action: 'Generated institutional executive briefing bullet points with actionable margin optimization steps.',
        resultSummary: 'Drafted 3-paragraph executive board commentary with GAAP reconciliation table.',
        structuredOutput: {
          executive_summary: 'Q3 Outperformed top-line by +$520k (+2.9%) driven by Enterprise tier upgrades. EBITDA compressed by 310 bps due to $940k in upfront model fine-tuning compute costs, projected to normalize in Q4 by 45%.',
          recommendation: 'Transition inference nodes to reserved 1-year instances to recapture $320k quarterly run-rate.'
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
      'Human-in-the-loop exception dashboard for edge-case review (<1% of volume)',
      'Complete audit trail logging with immutable proof hashes'
    ],
    timeframe: '3 - 6 Weeks',
    bestFor: 'Mid-Market & High-Volume FinTech / E-Commerce processing >2,000 transactions/mo',
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
    bestFor: 'Enterprises managing multiple subsidiaries, distributed AP teams, or complex logistics',
    iconName: 'ShieldCheck'
  },
  {
    id: 'financial-copilots',
    title: 'Custom FP&A & SEC Financial Copilots',
    tagline: 'Instant variance commentary, 13-week cash forecasting, and automated board deck generation.',
    description: 'Specialized LLM agents trained on your chart of accounts and corporate financial taxonomy. Extracts insights from trial balances, explains margin deviations, and drafts executive presentations automatically.',
    deliverables: [
      'Automated P&L, balance sheet, and cash flow variance commentary synthesis',
      '13-Week rolling liquidity and working capital predictive models',
      'SEC 10-K / 10-Q filing table structure parser and standardized covenant checker',
      'Natural language SQL/vector interface for instant finance team data queries'
    ],
    timeframe: '3 - 5 Weeks',
    bestFor: 'CFOs, Private Equity PortCos, and FP&A teams spending >15 hours/wk on reporting',
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
  { category: 'AI & LLM Orchestration', skills: ['Gemini 2.5/3.0 Multi-Modal', 'LangGraph', 'LangChain', 'LlamaIndex', 'Pydantic Guardrails', 'Structured Output Parsing', 'Vector Search (pgvector)'] },
  { category: 'Financial Systems & ERPs', skills: ['NetSuite SuiteTalk / SuiteScript', 'SAP S/4HANA APIs', 'QuickBooks Online / Desktop', 'Xero API', 'Stripe Sigma / Treasury', 'Plaid', 'Workday Financials'] },
  { category: 'Backend & Data Engineering', skills: ['Python (FastAPI, PySpark, Pandas)', 'TypeScript & Node.js', 'PostgreSQL & pgvector', 'Redis', 'Docker & Kubernetes', 'GCP Cloud Run', 'AWS Lambda / SQS'] },
  { category: 'Financial Domain & Compliance', skills: ['GAAP / IFRS Standards', '3-Way Reconciliation', 'SOX 404 Controls', 'SOC 1 / SOC 2 Compliance', 'SEC 10-K / 10-Q Taxonomy', 'Multi-Entity FX Consolidation'] }
];
