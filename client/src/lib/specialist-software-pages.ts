import type { KeywordLandingPage } from "@/lib/keyword-pages";

type GroupName = "Payments & billing" | "Scheduling & appointments" | "E-commerce" | "Inventory & operations" | "Legal & compliance" | "Recruitment & hiring" | "Knowledge & internal business systems" | "Analytics & reporting" | "No-code & developer tools" | "Data & spreadsheets" | "File & media utilities" | "Communication utilities" | "Small-business practical searches" | "Particularly interesting tool opportunities";
type GroupConfig = { cluster: string; hubPath: string; hubLabel: string; eyebrow: string; focus: string; decision: string; signals: [string, string][]; checkpoints: [string, string][]; review: [string, string, string][]; lens: string };

const groupPages: { group: GroupName; keywords: string[] }[] = [
  {
    "group": "Payments & billing",
    "keywords": [
      "payment processing software",
      "online payment software",
      "payment collection software",
      "payment tracking software",
      "payment reminder software",
      "recurring payment software",
      "subscription billing software",
      "billing management software",
      "billing automation software",
      "accounts receivable software",
      "accounts payable software",
      "expense management software",
      "expense reporting software",
      "receipt tracking software",
      "receipt management software",
      "purchase order software",
      "purchase order management",
      "cash flow management software",
      "cash flow forecasting software",
      "financial reporting software"
    ]
  },
  {
    "group": "Scheduling & appointments",
    "keywords": [
      "appointment scheduling software",
      "appointment booking software",
      "online appointment booking",
      "appointment management software",
      "scheduling software for small business",
      "online scheduling tools",
      "meeting scheduling tools",
      "calendar scheduling software",
      "employee scheduling tools",
      "staff scheduling software",
      "shift scheduling software",
      "rota scheduling software",
      "resource scheduling software",
      "room booking software",
      "service booking software",
      "client booking software",
      "online booking system",
      "booking management software",
      "appointment reminder software",
      "scheduling automation software"
    ]
  },
  {
    "group": "E-commerce",
    "keywords": [
      "ecommerce tools",
      "ecommerce management software",
      "ecommerce automation tools",
      "ecommerce analytics software",
      "product management software",
      "inventory management software",
      "inventory tracking software",
      "stock management software",
      "order management software",
      "order tracking software",
      "shipping management software",
      "shipping software",
      "returns management software",
      "ecommerce customer service software",
      "ecommerce email marketing tools",
      "ecommerce SEO tools",
      "ecommerce reporting tools",
      "shopping cart software",
      "product feed management software",
      "ecommerce workflow automation"
    ]
  },
  {
    "group": "Inventory & operations",
    "keywords": [
      "inventory software",
      "inventory management system",
      "inventory tracking system",
      "stock control software",
      "stock tracking software",
      "warehouse management software",
      "warehouse inventory software",
      "order management system",
      "supply chain software",
      "supply chain management tools",
      "procurement software",
      "purchasing software",
      "supplier management software",
      "vendor management software",
      "asset management software",
      "asset tracking software",
      "equipment tracking software",
      "field service management software",
      "operations dashboard",
      "operations tracking software"
    ]
  },
  {
    "group": "Legal & compliance",
    "keywords": [
      "legal document software",
      "legal management software",
      "contract management system",
      "contract tracking software",
      "contract automation software",
      "agreement management software",
      "compliance management software",
      "compliance tracking software",
      "policy management software",
      "risk management software",
      "risk assessment tools",
      "audit management software",
      "digital signature tools",
      "document approval software",
      "approval workflow software",
      "business compliance tools",
      "privacy management software",
      "consent management software",
      "GDPR compliance software",
      "data privacy tools"
    ]
  },
  {
    "group": "Recruitment & hiring",
    "keywords": [
      "hiring software",
      "recruitment tools",
      "recruitment management software",
      "hiring management software",
      "job posting software",
      "job application software",
      "candidate management software",
      "candidate tracking software",
      "interview scheduling software",
      "interview management software",
      "employee onboarding tools",
      "new hire onboarding software",
      "recruitment automation software",
      "hiring automation tools",
      "employee referral software",
      "skills assessment software",
      "employee skills tracking",
      "workforce management software",
      "workforce planning software",
      "talent management software"
    ]
  },
  {
    "group": "Knowledge & internal business systems",
    "keywords": [
      "knowledge management software",
      "knowledge base tools",
      "internal knowledge base",
      "company knowledge base",
      "employee knowledge base",
      "wiki software for business",
      "internal wiki software",
      "company wiki software",
      "document collaboration software",
      "internal documentation tools",
      "SOP management software",
      "standard operating procedure software",
      "process documentation software",
      "business documentation tools",
      "employee handbook software",
      "training management software",
      "employee training software",
      "learning management system for business",
      "internal communication platform",
      "company intranet software"
    ]
  },
  {
    "group": "Analytics & reporting",
    "keywords": [
      "business analytics tools",
      "business intelligence software",
      "data visualization software",
      "data dashboard tools",
      "reporting dashboard software",
      "automated reporting software",
      "automated business reports",
      "sales analytics software",
      "marketing analytics software",
      "customer analytics software",
      "website analytics software",
      "ecommerce analytics tools",
      "financial analytics software",
      "performance analytics software",
      "KPI dashboard",
      "KPI reporting tools",
      "data reporting tools",
      "business metrics dashboard",
      "management dashboard software"
    ]
  },
  {
    "group": "No-code & developer tools",
    "keywords": [
      "no code tools",
      "no code software",
      "no code business tools",
      "no code app builder",
      "no code website builder",
      "no code database",
      "no code CRM",
      "no code automation",
      "low code software",
      "low code development tools",
      "workflow builder",
      "visual workflow builder",
      "app builder software",
      "internal tool builder",
      "business app builder",
      "form automation software",
      "database management tools",
      "API management tools",
      "API testing tools",
      "developer productivity tools"
    ]
  },
  {
    "group": "Data & spreadsheets",
    "keywords": [
      "spreadsheet software",
      "spreadsheet automation",
      "spreadsheet management tools",
      "online spreadsheet tools",
      "free spreadsheet software",
      "spreadsheet templates",
      "business spreadsheet templates",
      "financial spreadsheet templates",
      "budget spreadsheet templates",
      "invoice spreadsheet template",
      "expense spreadsheet template",
      "project management spreadsheet",
      "inventory spreadsheet",
      "CRM spreadsheet template",
      "sales tracking spreadsheet",
      "business dashboard spreadsheet",
      "data cleaning tools",
      "CSV editor",
      "CSV viewer",
      "data conversion tools"
    ]
  },
  {
    "group": "File & media utilities",
    "keywords": [
      "file compression tool",
      "ZIP file extractor online",
      "image compression software",
      "video compression tool",
      "audio converter",
      "video converter",
      "file converter",
      "document converter",
      "OCR software",
      "OCR online tool",
      "image to text converter",
      "PDF text extractor",
      "PDF editor online",
      "PDF annotation tool",
      "PDF signature tool",
      "document scanner software",
      "online document scanner",
      "screenshot tool",
      "screen capture software"
    ]
  },
  {
    "group": "Communication utilities",
    "keywords": [
      "email signature generator",
      "email template generator",
      "email subject line generator",
      "email validator",
      "email verification tool",
      "email testing tool",
      "email deliverability checker",
      "email spam checker",
      "disposable email checker",
      "email header analyzer",
      "meeting agenda generator",
      "meeting notes template",
      "meeting minutes generator",
      "business letter generator",
      "professional email generator",
      "business email template",
      "out of office generator",
      "QR code business card",
      "digital business card",
      "business card generator"
    ]
  },
  {
    "group": "Small-business practical searches",
    "keywords": [
      "how to invoice a client",
      "how to follow up with a client",
      "how to organise client information",
      "how to track unpaid invoices",
      "how to manage recurring clients",
      "how to schedule client appointments",
      "how to automate client reminders",
      "how to collect customer feedback",
      "how to create a business budget",
      "how to track business cash flow",
      "how to manage business expenses",
      "how to organise business receipts",
      "how to create a sales pipeline",
      "how to track sales opportunities",
      "how to manage business contacts",
      "how to automate customer emails",
      "how to create a business dashboard",
      "how to track business KPIs",
      "how to automate business reporting",
      "how to organise business documents"
    ]
  },
  {
    "group": "Particularly interesting tool opportunities",
    "keywords": [
      "invoice number generator",
      "business name checker",
      "business proposal generator",
      "UTM link generator",
      "password strength checker",
      "email validation checker",
      "website speed checker",
      "image compression tool"
    ]
  }
];
const groupConfig: Record<GroupName, GroupConfig> = {
  "Payments & billing": {
    "cluster": "payments-billing",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "eyebrow": "Payments & billing / visible control",
    "focus": "payment collection, billing records and finance hand-offs",
    "decision": "Which payment or billing routine needs clearer collection, ownership and a reviewable record?",
    "signals": [
      [
        "COLLECT",
        "Track the payment path"
      ],
      [
        "RECORD",
        "Keep context visible"
      ],
      [
        "REVIEW",
        "Resolve the exception"
      ]
    ],
    "checkpoints": [
      [
        "Trace the payment journey",
        "Follow the work from the invoice or request through collection and reconciliation."
      ],
      [
        "Protect approval points",
        "Keep the relevant owner, record and exception handling visible."
      ],
      [
        "Test a practical scenario",
        "Use a real billing or expense case to compare how options fit."
      ]
    ],
    "review": [
      [
        "Stripe Billing",
        "Review it for billing and monetisation workflows where payment collection and recurring billing need to sit together.",
        "Compare pricing-model flexibility, payment workflow and implementation responsibility."
      ],
      [
        "QuickBooks",
        "Review it where billing, expenses, reporting and cash-flow context need to remain close to business records.",
        "Compare the accounting record, invoice workflow and the reporting needed after payment."
      ],
      [
        "BILL",
        "Review it for accounts payable, accounts receivable, spend and expense workflows with visible approvals.",
        "Compare payable and receivable hand-offs, approval controls and accounting-system connection."
      ]
    ],
    "lens": "Run the same payment, approval and reconciliation scenario through every option; confirm current financial, tax, security and integration details directly."
  },
  "Scheduling & appointments": {
    "cluster": "scheduling-appointments",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "eyebrow": "Scheduling / time and service flow",
    "focus": "appointment availability, service coordination and reminder routines",
    "decision": "Which appointment or scheduling hand-off needs clearer availability, context and follow-through?",
    "signals": [
      [
        "AVAILABILITY",
        "Set the real capacity"
      ],
      [
        "BOOK",
        "Capture the context"
      ],
      [
        "FOLLOW",
        "Confirm the next step"
      ]
    ],
    "checkpoints": [
      [
        "Map the booking journey",
        "Follow the customer or team experience from selecting a time to confirmation."
      ],
      [
        "Check service and staff logic",
        "Use your own staff, resource and availability scenario rather than a blank calendar."
      ],
      [
        "Review updates and reminders",
        "Confirm how changes, no-shows and preparation information are handled."
      ]
    ],
    "review": [
      [
        "Calendly",
        "Review it for meeting coordination where calendar control and scheduling automation are central to the workflow.",
        "Compare event types, routing, calendar context and follow-up workflow."
      ],
      [
        "Acuity Scheduling",
        "Review it for service appointments where client self-booking, intake and operational preparation need to connect.",
        "Compare appointment setup, client information, payment needs and reminder flow."
      ],
      [
        "Square Appointments",
        "Review it where appointments, staff schedules and a connected payment context are part of the same service routine.",
        "Compare service configuration, staff and resource coordination, and payment workflow."
      ]
    ],
    "lens": "Test the same booking, reschedule and reminder journey in every option; confirm payment, regional availability and integration scope directly."
  },
  "E-commerce": {
    "cluster": "ecommerce-systems",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "eyebrow": "E-commerce systems / connected commerce",
    "focus": "catalogue, checkout, order and customer-service workflows",
    "decision": "Which commerce hand-off needs a clearer view from product information to order, delivery and follow-up?",
    "signals": [
      [
        "CATALOGUE",
        "Prepare the product data"
      ],
      [
        "ORDER",
        "See the movement"
      ],
      [
        "SERVICE",
        "Close the customer loop"
      ]
    ],
    "checkpoints": [
      [
        "Follow one product order",
        "Test the route from product information and checkout to fulfilment and customer communication."
      ],
      [
        "Check channel context",
        "Map where inventory, product data and orders connect to the channels that matter."
      ],
      [
        "Keep exceptions visible",
        "Review returns, changes, customer service and other operational edge cases."
      ]
    ],
    "review": [
      [
        "Shopify",
        "Review it as a commerce platform example when storefront, checkout and business operations need to be considered together.",
        "Compare catalogue ownership, checkout context, order workflow and extension requirements."
      ],
      [
        "BigCommerce",
        "Review it as an e-commerce platform example when the store, catalogue and channel workflow need a shared test.",
        "Compare storefront control, product workflow, channel needs and implementation ownership."
      ],
      [
        "WooCommerce",
        "Review it as an e-commerce option where a website-led store and its ongoing operating work are central to the decision.",
        "Compare site ownership, commerce workflow, extension needs and maintenance responsibility."
      ]
    ],
    "lens": "Use the same product, order, customer-service and return scenario for each option; confirm current plan, ecosystem and payment scope directly."
  },
  "Inventory & operations": {
    "cluster": "inventory-operations",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "eyebrow": "Inventory operations / stock in view",
    "focus": "stock, purchasing, order and fulfilment operations",
    "decision": "Which inventory or operational routine needs a more reliable view of stock, ownership and movement?",
    "signals": [
      [
        "STOCK",
        "See the actual position"
      ],
      [
        "ORDER",
        "Track the hand-off"
      ],
      [
        "CONTROL",
        "Review the exception"
      ]
    ],
    "checkpoints": [
      [
        "Trace one item",
        "Follow a realistic item through purchasing, receipt, availability, order and fulfilment."
      ],
      [
        "Check the information source",
        "Clarify where stock, supplier, order and asset information must stay aligned."
      ],
      [
        "Review exceptions deliberately",
        "Test adjustments, delays, returns or resource changes that matter in real work."
      ]
    ],
    "review": [
      [
        "Cin7",
        "Review it as an inventory and order-operations example for businesses that need connected stock and fulfilment decisions.",
        "Compare inventory records, order hand-offs, channel context and operating controls."
      ],
      [
        "Katana",
        "Review it as an operations example where product, production or inventory workflow needs a practical fit test.",
        "Compare the item lifecycle, planning workflow, team roles and relevant connections."
      ],
      [
        "Zoho Inventory",
        "Review it as an inventory example where stock, orders and wider business-system context need to be considered.",
        "Compare stock visibility, order processing, integration context and daily administration."
      ]
    ],
    "lens": "Use the same item, purchase, order and fulfilment test for each product; confirm current inventory, region, integration and support scope directly."
  },
  "Legal & compliance": {
    "cluster": "legal-compliance",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "eyebrow": "Legal & compliance / deliberate evidence",
    "focus": "contracts, approvals, policies and compliance evidence",
    "decision": "Which agreement, approval or compliance process needs clearer evidence, ownership and a controlled review path?",
    "signals": [
      [
        "SOURCE",
        "Keep the record current"
      ],
      [
        "APPROVE",
        "Protect the check"
      ],
      [
        "EVIDENCE",
        "Retain the decision"
      ]
    ],
    "checkpoints": [
      [
        "Map the document lifecycle",
        "Follow the real route from draft and review through approval, signature and retrieval."
      ],
      [
        "Clarify the control points",
        "Keep authority, permissions, policy changes and exceptions visible."
      ],
      [
        "Confirm requirements directly",
        "Check jurisdiction, legal, privacy and compliance suitability with the appropriate professional advice."
      ]
    ],
    "review": [
      [
        "DocuSign",
        "Review it as an agreement and signature workflow example where document action and evidence are central.",
        "Compare signing journey, workflow ownership, record handling and relevant integrations."
      ],
      [
        "Ironclad",
        "Review it as a contract-lifecycle example where drafting, review and obligation context need a shared workflow.",
        "Compare contract process, review roles, implementation work and information controls."
      ],
      [
        "OneTrust",
        "Review it as a privacy and compliance example where policies, evidence and programme governance need consideration.",
        "Compare scope for the relevant programme, governance needs, data context and ownership."
      ]
    ],
    "lens": "Use one controlled document or compliance scenario across options; obtain suitable legal, privacy and compliance advice before selecting or configuring a system."
  },
  "Recruitment & hiring": {
    "cluster": "recruitment-hiring",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "eyebrow": "Hiring systems / candidate path",
    "focus": "candidate records, interview coordination and hiring hand-offs",
    "decision": "Which recruitment or onboarding hand-off needs a clearer candidate record, owner and review point?",
    "signals": [
      [
        "CANDIDATE",
        "Keep the context"
      ],
      [
        "INTERVIEW",
        "Coordinate the hand-off"
      ],
      [
        "DECISION",
        "Retain the record"
      ]
    ],
    "checkpoints": [
      [
        "Map a real hiring path",
        "Follow one candidate from initial interest through interview, decision and onboarding."
      ],
      [
        "Check access and ownership",
        "Clarify who can see, update and approve the information at each stage."
      ],
      [
        "Review fairness and privacy",
        "Make appropriate people, privacy and process checks before implementation."
      ]
    ],
    "review": [
      [
        "Greenhouse",
        "Review it as a hiring workflow example where structured candidate movement and interview coordination need testing.",
        "Compare candidate stages, interview hand-offs, permissions and hiring-team workflow."
      ],
      [
        "Lever",
        "Review it as a recruitment example where talent relationship context and hiring movement need to be assessed together.",
        "Compare candidate record, sourcing context, collaboration and operational administration."
      ],
      [
        "Workable",
        "Review it as a hiring example where recruitment activity, candidate management and team adoption need practical testing.",
        "Compare job workflow, candidate path, team roles and the information required for decisions."
      ]
    ],
    "lens": "Use the same candidate, interviewer and offer scenario for each option; confirm privacy, employment-law and regional suitability directly."
  },
  "Knowledge & internal business systems": {
    "cluster": "knowledge-systems",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "eyebrow": "Knowledge systems / shared source",
    "focus": "internal knowledge, documentation, collaboration and training records",
    "decision": "Which internal source of knowledge needs clearer ownership, access and a reliable way to stay current?",
    "signals": [
      [
        "SOURCE",
        "Name the current record"
      ],
      [
        "ACCESS",
        "Set the right audience"
      ],
      [
        "REVIEW",
        "Keep knowledge usable"
      ]
    ],
    "checkpoints": [
      [
        "Choose a real knowledge task",
        "Test how a person finds, uses and updates information for an active piece of work."
      ],
      [
        "Clarify ownership",
        "Make the author, approver, review date and source relationship visible."
      ],
      [
        "Check adoption in context",
        "Assess whether the structure fits the team’s actual documentation and communication routine."
      ]
    ],
    "review": [
      [
        "Confluence",
        "Review it as an internal knowledge and documentation example for teams that need a shared source of record.",
        "Compare structure, content ownership, access patterns and the documentation workflow."
      ],
      [
        "Guru",
        "Review it as a knowledge-management example where verified answers and in-workflow access need consideration.",
        "Compare knowledge review, user context, source controls and adoption work."
      ],
      [
        "Notion",
        "Review it as a flexible workspace example where documentation, collaboration and operating ownership need a shared test.",
        "Compare information architecture, permissions, team workflow and ongoing administration."
      ]
    ],
    "lens": "Use the same operating procedure or employee question in each product; confirm security, permissions, retention and integration needs directly."
  },
  "Analytics & reporting": {
    "cluster": "analytics-reporting",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "eyebrow": "Analytics / decision evidence",
    "focus": "business metrics, dashboards, reporting and data-context decisions",
    "decision": "Which metric, dashboard or report needs clearer definition, source context and an accountable next action?",
    "signals": [
      [
        "SOURCE",
        "Check the data path"
      ],
      [
        "METRIC",
        "Define the measure"
      ],
      [
        "ACTION",
        "Use the evidence"
      ]
    ],
    "checkpoints": [
      [
        "Start with one decision",
        "Choose the business question the report must help someone answer."
      ],
      [
        "Trace the metric",
        "Clarify source, definition, refresh and the owner responsible for interpretation."
      ],
      [
        "Test the sharing route",
        "Check how the audience sees the evidence and follows through on the next action."
      ]
    ],
    "review": [
      [
        "Microsoft Power BI",
        "Review it as a business-intelligence example where data connection, dashboards and organisational reporting need a shared test.",
        "Compare data-source connection, metric logic, sharing model and governance requirements."
      ],
      [
        "Tableau",
        "Review it as a visual analytics example where exploration and communication of business evidence need consideration.",
        "Compare data preparation, visual analysis, publication workflow and audience needs."
      ],
      [
        "Looker Studio",
        "Review it as a reporting example where data sources and shareable dashboards need a lightweight evaluation.",
        "Compare connector fit, report ownership, refresh expectations and the required level of governance."
      ]
    ],
    "lens": "Build the same metric and audience view in every option; confirm data permissions, refresh, retention and governance expectations directly."
  },
  "No-code & developer tools": {
    "cluster": "no-code-developer",
    "hubPath": "/ai-tools/",
    "hubLabel": "AI Tools",
    "eyebrow": "No-code systems / governed building",
    "focus": "applications, workflows, data models and automation ownership",
    "decision": "Which app, workflow or internal tool needs a clearer data model, owner and maintenance path before it is built?",
    "signals": [
      [
        "MODEL",
        "Define the record"
      ],
      [
        "FLOW",
        "Map the trigger"
      ],
      [
        "OWN",
        "Keep maintenance visible"
      ]
    ],
    "checkpoints": [
      [
        "Start with a bounded job",
        "Choose a single internal process or customer action before building a wider system."
      ],
      [
        "Protect the data model",
        "Clarify fields, source, permissions and the changes that need review."
      ],
      [
        "Plan for ownership",
        "Decide who maintains the workflow, handles exceptions and reviews the result."
      ]
    ],
    "review": [
      [
        "Airtable",
        "Review it as a structured-data and workflow example where teams need a shared operating record.",
        "Compare data model, permissions, views, automation and ownership after launch."
      ],
      [
        "Zapier",
        "Review it as an automation example where triggers, actions and exception handling need a visible test.",
        "Compare the workflow boundary, source systems, error handling and ongoing monitoring."
      ],
      [
        "Bubble",
        "Review it as a no-code application example where a customer or internal workflow requires a fuller product build.",
        "Compare application scope, data responsibility, governance and the team’s ability to maintain it."
      ]
    ],
    "lens": "Prototype one bounded workflow in every option; confirm security, API, data, licensing and maintenance responsibilities before production use."
  },
  "Data & spreadsheets": {
    "cluster": "data-spreadsheets",
    "hubPath": "/free-tools/",
    "hubLabel": "Free Tools",
    "eyebrow": "Data & spreadsheets / reliable working record",
    "focus": "spreadsheets, templates, data preparation and repeatable business records",
    "decision": "Which spreadsheet or data routine needs a clearer source of truth, control point and useful output?",
    "signals": [
      [
        "SOURCE",
        "Keep the input clear"
      ],
      [
        "CHANGE",
        "Review the update"
      ],
      [
        "OUTPUT",
        "Use the result"
      ]
    ],
    "checkpoints": [
      [
        "Use a real template",
        "Test with the records, people and decision that the spreadsheet must support."
      ],
      [
        "Clarify version and access",
        "Define who changes the data, what needs approval and where the current file lives."
      ],
      [
        "Review the limits",
        "Move repeated, high-risk or multi-user processes into an appropriate controlled workflow when needed."
      ]
    ],
    "review": [
      [
        "Google Sheets",
        "Review it as a collaborative spreadsheet example for lightweight shared records, templates and data work.",
        "Compare collaboration, source control, automation needs and permission model."
      ],
      [
        "Microsoft Excel",
        "Review it as a spreadsheet example where structured analysis, templates or local working patterns matter.",
        "Compare calculation needs, sharing workflow, governance and data connections."
      ],
      [
        "Airtable",
        "Review it as a structured-record example when a spreadsheet process begins to need clearer fields and workflows.",
        "Compare table design, views, collaboration and automation ownership."
      ]
    ],
    "lens": "Use one real business template in each option; check permissions, versioning, data quality and the threshold for a more controlled system."
  },
  "File & media utilities": {
    "cluster": "file-media-utilities",
    "hubPath": "/free-tools/",
    "hubLabel": "Free Tools",
    "eyebrow": "File utility / source to output",
    "focus": "file conversion, document handling, extraction and output review",
    "decision": "Which file or media task needs a clearer source, permission check and reviewed output before it enters the work?",
    "signals": [
      [
        "SOURCE",
        "Use the correct file"
      ],
      [
        "PROCESS",
        "Choose the utility"
      ],
      [
        "CHECK",
        "Review the output"
      ]
    ],
    "checkpoints": [
      [
        "Define the required output",
        "State the format, quality, accessibility and recipient need before choosing a utility."
      ],
      [
        "Check the information",
        "Consider whether the file contains data that is appropriate to process in the chosen service."
      ],
      [
        "Review before use",
        "Open the converted, extracted or compressed output before sharing or relying on it."
      ]
    ],
    "review": [
      [
        "Adobe Acrobat",
        "Review it as a document-workflow example where PDF creation, review and controlled handling need consideration.",
        "Compare document tasks, permission needs, signing context and output-review workflow."
      ],
      [
        "Smallpdf",
        "Review it as an online document-utility example for bounded conversion or file-handling tasks.",
        "Compare the exact utility, source-file sensitivity, output quality and review step."
      ],
      [
        "PDF24",
        "Review it as a document-utility example where practical PDF operations need a focused workflow check.",
        "Compare available utility fit, privacy approach, required output and the final validation step."
      ]
    ],
    "lens": "Use a non-sensitive test file and the same output requirement for every tool; confirm data handling and retention details directly before processing business information."
  },
  "Communication utilities": {
    "cluster": "communication-utilities",
    "hubPath": "/free-tools/",
    "hubLabel": "Free Tools",
    "eyebrow": "Communication utility / message quality",
    "focus": "email quality, message preparation, validation and deliverability checks",
    "decision": "Which communication task needs a clearer audience, message review and delivery check before it is sent?",
    "signals": [
      [
        "AUDIENCE",
        "Prepare the context"
      ],
      [
        "MESSAGE",
        "Review the content"
      ],
      [
        "DELIVERY",
        "Check the result"
      ]
    ],
    "checkpoints": [
      [
        "Start with a useful message",
        "Define the audience, purpose and next action before choosing a generator or checking service."
      ],
      [
        "Protect the data",
        "Avoid placing unsuitable customer or business information into an external utility."
      ],
      [
        "Review the final output",
        "Check the subject, content, sender details and delivery context before release."
      ]
    ],
    "review": [
      [
        "Mailchimp",
        "Review it as an audience-communication example where campaign preparation and follow-up need a structured workflow.",
        "Compare audience records, message workflow, approval process and reporting context."
      ],
      [
        "ZeroBounce",
        "Review it as an email-validation example where list quality needs a careful, privacy-aware review step.",
        "Compare validation scope, data handling, integration needs and the action taken after a result."
      ],
      [
        "Litmus",
        "Review it as an email-quality example where testing, rendering review and campaign workflow need consideration.",
        "Compare test process, review ownership, email-building context and the required output."
      ]
    ],
    "lens": "Use a controlled, non-sensitive message and list-quality scenario; confirm applicable privacy, consent, sender and data-processing requirements directly."
  },
  "Small-business practical searches": {
    "cluster": "small-business-practical",
    "hubPath": "/business-guides/",
    "hubLabel": "Business Guides",
    "eyebrow": "Small business guide / practical routine",
    "focus": "small-business customer, finance, sales and administration routines",
    "decision": "Which everyday small-business routine needs a clearer record, owner and practical next action?",
    "signals": [
      [
        "TASK",
        "Name the friction"
      ],
      [
        "ROUTINE",
        "Map the work"
      ],
      [
        "NEXT",
        "Improve one step"
      ]
    ],
    "checkpoints": [
      [
        "Follow the current routine",
        "Observe the work from first request to completed action before selecting a tool."
      ],
      [
        "Choose a bounded improvement",
        "Solve the most useful point of friction without creating unnecessary overhead."
      ],
      [
        "Review after a few cycles",
        "Check whether the people doing the work have a clearer, more reliable routine."
      ]
    ],
    "review": [
      [
        "QuickBooks",
        "Review it as a finance-record example for small-business routines involving invoices, expenses, cash flow or reports.",
        "Compare the financial routine, current records, reporting need and implementation support."
      ],
      [
        "HubSpot",
        "Review it as a customer and sales example where contacts, follow-up and simple pipeline visibility are the priority.",
        "Compare customer context, ownership, next-action workflow and team adoption."
      ],
      [
        "Notion",
        "Review it as an operating-information example where documents, simple processes or shared working context need attention.",
        "Compare the information structure, ownership, access and the ongoing upkeep required."
      ]
    ],
    "lens": "Start with one real routine rather than a product list; confirm current scope, data handling and implementation requirements directly with providers."
  },
  "Particularly interesting tool opportunities": {
    "cluster": "interactive-tool-opportunities",
    "hubPath": "/free-tools/",
    "hubLabel": "Free Tools",
    "eyebrow": "Utility opportunity / considered output",
    "focus": "interactive business utilities, generators and digital output checks",
    "decision": "What output should an interactive tool create, and what review must happen before that output is used?",
    "signals": [
      [
        "INPUT",
        "Set the right context"
      ],
      [
        "OUTPUT",
        "Generate the result"
      ],
      [
        "REVIEW",
        "Check before use"
      ]
    ],
    "checkpoints": [
      [
        "Define the output",
        "State the format and decision the utility needs to support."
      ],
      [
        "Use suitable input",
        "Do not place sensitive or inappropriate business information into a tool without checking its handling."
      ],
      [
        "Validate the result",
        "Review generated files, text, links or metadata before publishing or sharing."
      ]
    ],
    "review": [
      [
        "DigitalSolutions Tools",
        "Review the site’s existing calculators and guides when the task is a supported planning or finance decision.",
        "Compare the exact business question, assumptions and next action that the output should support."
      ],
      [
        "PDF24",
        "Review it as a file-utility example for bounded PDF operations that need an explicit source-to-output check.",
        "Compare the required document operation, privacy approach and output validation step."
      ],
      [
        "Smallpdf",
        "Review it as an online utility example for document conversion or handling where a practical output is needed.",
        "Compare the relevant utility, source-file sensitivity and the review required after processing."
      ]
    ],
    "lens": "Treat a utility result as a draft or input to a decision; verify the output and relevant data-handling terms before relying on it."
  }
};

const initialisms = new Set(["AI", "API", "CSV", "DNS", "GDPR", "HR", "IP", "KPI", "OCR", "PDF", "QR", "SEO", "SOP", "SSL", "UTM", "ZIP"]);
const titleCase = (keyword: string) => keyword.split(" ").map((word) => initialisms.has(word.toUpperCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
const slugify = (keyword: string) => keyword.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const specialistSoftwarePages: KeywordLandingPage[] = groupPages.flatMap(({ group, keywords }) => {
  const config = groupConfig[group];
  return keywords.map((keyword) => ({
    slug: slugify(keyword), title: titleCase(keyword), keyword, cluster: config.cluster, path: `/${slugify(keyword)}/`, hubPath: config.hubPath, hubLabel: config.hubLabel, eyebrow: config.eyebrow,
    description: `Explore ${keyword} with practical guidance on ${config.focus}. Use a real workflow to define fit checks, named software research and a useful next action.`,
    lead: `${titleCase(keyword)} is most useful when it supports ${config.focus} without hiding the records, people or decisions behind the work. Start with a real routine, then use the same scenario to review relevant software and compare the operating fit.`,
    decision: config.decision,
    signals: config.signals.map(([label, value]) => ({ label, value })),
    checkpoints: config.checkpoints.map(([title, detail]) => ({ title, detail })),
    reviewShortlist: config.review.map(([name, review, comparison]) => ({ name, review, comparison })),
    reviewLens: config.lens,
    related: [{ title: config.hubLabel, path: config.hubPath }, { title: "Software comparisons", path: "/comparisons/" }, { title: "Business guides", path: "/business-guides/" }]
  }));
});
