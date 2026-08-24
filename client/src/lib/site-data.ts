/** Editorial Terminal: centralised content keeps routes, labels and search consistent. */
import { keywordLandingPages } from "@/lib/keyword-pages";
import { calculatorKeywordTools } from "@/lib/calculator-definitions";
export type HubKey =
  | "business-software"
  | "ai-tools"
  | "free-tools"
  | "reviews"
  | "comparisons"
  | "business-guides";

export type Hub = {
  title: string;
  eyebrow: string;
  description: string;
  path: string;
  items: { title: string; detail: string }[];
};

export const hubs: Record<HubKey, Hub> = {
  "business-software": {
    title: "Business Software",
    eyebrow: "Choose with confidence",
    description: "Practical guidance for narrowing down business software by the work you need it to do—not by a feature checklist alone.",
    path: "/business-software/",
    items: [
      { title: "Accounting", detail: "Records, reporting and routine finance workflows." },
      { title: "CRM", detail: "Customer relationships, pipelines and follow-up." },
      { title: "Invoicing", detail: "Clear billing processes and payment follow-up." },
      { title: "Payroll", detail: "Routine pay administration and compliance checks." },
      { title: "Project management", detail: "Planning work, responsibilities and delivery." },
      { title: "Email marketing", detail: "Campaign organisation and audience communication." },
      { title: "Booking software", detail: "Appointments, availability and customer reminders." },
      { title: "Website builders", detail: "Practical options for a business web presence." },
    ],
  },
  "ai-tools": {
    title: "AI Tools",
    eyebrow: "Useful work, carefully checked",
    description: "Explore practical AI use cases for businesses and teams, with emphasis on review, privacy and good judgement.",
    path: "/ai-tools/",
    items: [
      { title: "AI writing", detail: "Drafting, rewriting and clarifying working content." },
      { title: "AI marketing", detail: "Planning messages and developing creative starting points." },
      { title: "AI productivity", detail: "Summaries, task support and routine preparation." },
      { title: "AI automation", detail: "Connecting repeatable steps with suitable oversight." },
      { title: "AI research", detail: "Finding starting points before checking original sources." },
      { title: "AI customer service", detail: "Supporting routine customer communication safely." },
    ],
  },
  "free-tools": {
    title: "Free Tools",
    eyebrow: "Run the numbers first",
    description: "Straightforward calculators for common planning tasks. Each listed tool works in your browser and explains its assumptions.",
    path: "/free-tools/",
    items: [
      { title: "VAT calculator", detail: "Add or remove a chosen VAT rate." },
      { title: "Profit margin calculator", detail: "Check profit and margin from revenue and cost." },
      { title: "Break-even calculator", detail: "Estimate units and revenue needed to cover costs." },
      { title: "Freelance rate calculator", detail: "Plan a starting daily and hourly rate." },
    ],
  },
  reviews: {
    title: "Software Reviews",
    eyebrow: "Context before conclusions",
    description: "A review framework for understanding intended users, practical trade-offs and questions to verify before you subscribe.",
    path: "/reviews/",
    items: [
      { title: "Purpose", detail: "What a tool is intended to help a business do." },
      { title: "Fit", detail: "Who may find it useful, and where it may not be suitable." },
      { title: "Checks", detail: "What to confirm directly with a provider before deciding." },
      { title: "Alternatives", detail: "Other approaches worth considering for the same job." },
    ],
  },
  comparisons: {
    title: "Software Comparisons",
    eyebrow: "Compare the work, not only the brands",
    description: "Decision structures that help you compare software against your workflow, budget, data needs and team responsibilities.",
    path: "/comparisons/",
    items: [
      { title: "Core job", detail: "The important task each option needs to improve." },
      { title: "Workflow", detail: "How each option fits existing people and processes." },
      { title: "Cost checks", detail: "Current pricing and terms to confirm before purchase." },
      { title: "Implementation", detail: "Requirements to investigate with the provider before committing." },
    ],
  },
  "business-guides": {
    title: "Business Guides",
    eyebrow: "Practical digital guidance",
    description: "Plain-language guides for independent professionals, growing teams and small businesses making everyday technology decisions.",
    path: "/business-guides/",
    items: [
      { title: "Planning", detail: "Choose technology around a clear, useful business need." },
      { title: "Productivity", detail: "Build routines that reduce unnecessary admin." },
      { title: "Digital marketing", detail: "Understand the practical work behind online reach." },
      { title: "Cybersecurity", detail: "Improve everyday safeguards and awareness." },
    ],
  },
};

export const calculatorTools = calculatorKeywordTools;

export type GuideArticle = {
  slug: string;
  title: string;
  emphasis: string;
  path: string;
  description: string;
  intro: string;
  signal: { label: string; value: string }[];
  sections: { label: string; heading: string; body: string; points: string[] }[];
  related: { title: string; path: string }[];
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "planning", title: "Technology Planning", emphasis: "Begin with the decision.", path: "/business-guides/planning/",
    description: "A practical planning guide for turning a broad technology idea into a clear business decision and a focused next step.",
    intro: "The most useful planning work happens before you compare products. Start by describing the business change you need, the people involved and the evidence that would make a next step worthwhile.",
    signal: [{ label: "START", value: "Name the change" }, { label: "CHECK", value: "Set boundaries" }, { label: "MOVE", value: "Test a next step" }],
    sections: [
      { label: "01 / DEFINE", heading: "Write the decision in plain language.", body: "Avoid starting with a tool category. Instead, describe what must become easier, clearer, faster or more reliable for the people doing the work.", points: ["State the recurring problem in one sentence.", "Identify who feels the impact and who owns the decision.", "Describe what a useful outcome would look like in everyday work."] },
      { label: "02 / BOUND", heading: "Set the constraints before you search.", body: "Time, budget, data handling, existing systems and team capacity all shape a sensible option. Boundaries turn an overwhelming search into a usable shortlist.", points: ["Separate essential requirements from helpful extras.", "Note the systems, records or routines that cannot be interrupted.", "Decide what level of change the team can realistically absorb."] },
      { label: "03 / TEST", heading: "Choose evidence over assumptions.", body: "A small, realistic test reveals more than a long feature list. Use an example from real work and ask whether the option improves the full workflow, not just one step.", points: ["Test with a real task, record or customer scenario.", "Check the hand-offs, approvals and follow-up work around the task.", "Write down what would need to be true before committing further."] },
    ],
    related: [{ title: "Business software", path: "/business-software/" }, { title: "Software comparisons", path: "/comparisons/" }, { title: "Productivity guide", path: "/business-guides/productivity/" }],
  },
  {
    slug: "productivity", title: "Digital Productivity", emphasis: "Make the routine lighter.", path: "/business-guides/productivity/",
    description: "A practical guide to improving everyday digital productivity by reducing friction in the routines that happen most often.",
    intro: "Productivity is rarely about doing more at once. It is about removing avoidable effort from repeatable work, making responsibilities visible and protecting time for the work that needs attention.",
    signal: [{ label: "OBSERVE", value: "Find the friction" }, { label: "SIMPLIFY", value: "Standardise the routine" }, { label: "REVIEW", value: "Keep what works" }],
    sections: [
      { label: "01 / NOTICE", heading: "Find the routine that creates drag.", body: "Look for tasks that require repeated searching, copying, chasing or re-explaining. These small interruptions compound quickly when they happen across a team or every week.", points: ["Track one recurring process from first request to final outcome.", "Notice where people wait, duplicate effort or lose context.", "Ask which step feels necessary only because the information is hard to find."] },
      { label: "02 / STANDARDISE", heading: "Create a shared way of working.", body: "A simple, visible pattern usually outperforms a complicated tool setup. Name the places where work starts, where decisions are recorded and where the next action is visible.", points: ["Use consistent names for shared files, tasks and hand-offs.", "Keep decisions close to the work they affect.", "Define a light default for status updates and follow-up."] },
      { label: "03 / PROTECT", heading: "Use automation with a review point.", body: "Automation is valuable when it removes predictable administrative work without hiding an important judgement call. Make it easy to see what ran, what changed and when a person should step in.", points: ["Automate repeatable notifications, reminders or data movement first.", "Keep an owner responsible for checking exceptions.", "Review the routine after a few cycles and remove any step that no longer earns its place."] },
    ],
    related: [{ title: "AI tools", path: "/ai-tools/" }, { title: "Planning guide", path: "/business-guides/planning/" }, { title: "Business software", path: "/business-software/" }],
  },
  {
    slug: "digital-marketing", title: "Digital Marketing", emphasis: "Build a useful signal.", path: "/business-guides/digital-marketing/",
    description: "A practical digital marketing guide for building a clear message, useful content and a simple way to learn from audience response.",
    intro: "Digital marketing becomes more manageable when it is treated as a system for helping the right people understand a useful offer. Start with the audience problem, then create a consistent path from message to next action.",
    signal: [{ label: "AUDIENCE", value: "Name the need" }, { label: "MESSAGE", value: "Make it useful" }, { label: "LEARN", value: "Improve the path" }],
    sections: [
      { label: "01 / FOCUS", heading: "Choose one audience problem to solve.", body: "A broad message may reach many people but help none of them decide. Begin with a specific situation, the language people use for it and the outcome they are looking for.", points: ["Describe the moment when someone starts looking for help.", "Use the words your audience would use to explain the problem.", "Connect the offer to a practical, believable next outcome."] },
      { label: "02 / EXPLAIN", heading: "Create content that earns attention.", body: "Useful content answers a real question, clarifies a choice or helps someone take a small next step. It should reduce uncertainty rather than simply repeat a claim.", points: ["Build a small set of core explanations before chasing volume.", "Make each page or message lead to one clear next action.", "Keep examples specific enough that a reader can recognise their own situation."] },
      { label: "03 / LEARN", heading: "Review the path, not only the numbers.", body: "A response is most helpful when you understand the journey behind it. Look at whether visitors can find the right information, trust it and complete the intended next step without unnecessary friction.", points: ["Check the message, page and action as one connected experience.", "Listen for questions that reveal missing or unclear information.", "Change one meaningful element at a time so you can learn from the result."] },
    ],
    related: [{ title: "Planning guide", path: "/business-guides/planning/" }, { title: "AI tools", path: "/ai-tools/" }, { title: "Productivity guide", path: "/business-guides/productivity/" }],
  },
  {
    slug: "cybersecurity", title: "Everyday Cybersecurity", emphasis: "Make safer habits easier.", path: "/business-guides/cybersecurity/",
    description: "A practical guide to improving everyday cybersecurity through clear routines, sensible access and a plan for handling unexpected events.",
    intro: "Cybersecurity is strongest when safe behaviour is built into ordinary work. Focus on the routines people use every day: sign-in, sharing, access, updates, requests and the response when something does not look right.",
    signal: [{ label: "ACCESS", value: "Protect entry points" }, { label: "ROUTINE", value: "Make checks normal" }, { label: "RESPOND", value: "Know the next call" }],
    sections: [
      { label: "01 / ACCESS", heading: "Give access deliberately.", body: "People need the right access to do their work, but not every account needs the same level of permission. Make ownership, access changes and account recovery visible rather than informal.", points: ["Use unique, strong sign-in methods and enable available account protections.", "Review access when a role, supplier or working arrangement changes.", "Keep important accounts tied to a named owner and a documented recovery route."] },
      { label: "02 / ROUTINE", heading: "Build a pause into unusual requests.", body: "Many costly mistakes begin with urgency, unfamiliar requests or a small detail that does not feel right. A short verification routine gives people permission to stop and check.", points: ["Verify unexpected requests using a known contact route.", "Treat unusual payment, login and file-sharing requests with extra care.", "Keep software and devices updated through a predictable routine."] },
      { label: "03 / RESPOND", heading: "Agree what happens when something feels wrong.", body: "A clear response plan reduces delay and confusion. It does not need to be complex: people should know who to tell, what to preserve and which access may need to be changed quickly.", points: ["Write down the first contact for a suspected issue.", "Record the account, device or message involved without spreading it further.", "Review what happened afterwards and improve the routine rather than assigning blame."] },
    ],
    related: [{ title: "Productivity guide", path: "/business-guides/productivity/" }, { title: "Planning guide", path: "/business-guides/planning/" }, { title: "Business software", path: "/business-software/" }],
  },
];

export const searchItems = [
  ...Object.values(hubs).map((hub) => ({ label: hub.title, path: hub.path, type: "Section" })),
  ...keywordLandingPages.map((page) => ({ label: page.title, path: page.path, type: "Category" })),
  ...calculatorTools.map((tool) => ({ label: tool.title, path: tool.path, type: "Free tool" })),
  ...guideArticles.map((guide) => ({ label: guide.title, path: guide.path, type: "Guide" })),
  { label: "Topic authority map", path: "/topic-authority/", type: "Guide" },
  { label: "About DigitalSolutions.cv", path: "/about/", type: "Company" },
  { label: "Contact DigitalSolutions.cv", path: "/contact/", type: "Company" },
  { label: "Editorial Policy", path: "/editorial-policy/", type: "Policy" },
];

export const footerGroups = [
  { title: "Explore", links: [["Business Software", "/business-software/"], ["AI Tools", "/ai-tools/"], ["Free Tools", "/free-tools/"], ["Software Reviews", "/reviews/"], ["Software Comparisons", "/comparisons/"], ["Business Guides", "/business-guides/"]] },
  { title: "Resources", links: [["Topic Authority Map", "/topic-authority/"], ["Productivity", "/business-guides/productivity/"], ["Digital Marketing", "/business-guides/digital-marketing/"], ["Cybersecurity", "/business-guides/cybersecurity/"], ["Technology Guides", "/business-guides/"], ["Business Tools", "/free-tools/"]] },
  { title: "Company", links: [["About", "/about/"], ["Contact", "/contact/"], ["Editorial Policy", "/editorial-policy/"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy-policy/"], ["Cookie Policy", "/cookie-policy/"], ["Terms & Conditions", "/terms-conditions/"], ["Affiliate Disclosure", "/affiliate-disclosure/"], ["Advertising Disclosure", "/advertising-disclosure/"]] },
];

export type VerifiedArticle = {
  slug: string;
  kind: "Review" | "Comparison";
  title: string;
  emphasis: string;
  path: string;
  description: string;
  intro: string;
  scopes: { product: string; text: string; url: string; source: number }[];
  investigate: string[];
  checks: string[];
  contextNote: string;
  related: { title: string; path: string }[];
  references: { label: string; url: string }[];
};

export const verifiedArticles: VerifiedArticle[] = [
  {
    slug: "xero", kind: "Review", title: "Xero Review", emphasis: "Start with the workflow.", path: "/reviews/xero/",
    description: "A source-led Xero review framework for checking accounting, invoicing, tax reporting, payroll and reporting workflows.",
    intro: "This is not a star-rating review or a substitute for a product trial. It is a practical framework for checking whether the workflows Xero presents match the work your business needs to carry out.",
    scopes: [{ product: "What Xero says it covers", text: "Xero presents an online accounting platform with invoicing, bills, expenses, inventory and reporting features. Product availability and plan scope can vary, so confirm the details that apply to your business.", url: "https://www.xero.com/", source: 1 }],
    investigate: ["You are mapping an accounting process that includes invoicing, tax reporting, payroll, reporting or other linked finance work.", "You want to compare current plan details, integrations and implementation steps against a specific business workflow.", "You are prepared to verify which features are included in the plan and services you are considering."],
    checks: ["Which current plan includes every workflow you need, rather than just one headline feature?", "How will bank connections, payment collection, data migration and user permissions work in your setup?", "What should your accountant or bookkeeper confirm before you change accounting processes?"],
    contextNote: "Tax reporting rules, availability and provider features can vary by location and change over time. Confirm the current requirements that apply to you directly with the provider, the relevant authority and an appropriate adviser before acting.",
    related: [{ title: "Compare Xero and QuickBooks", path: "/comparisons/xero-vs-quickbooks/" }, { title: "Compare FreeAgent and Xero", path: "/comparisons/freeagent-vs-xero/" }, { title: "Business software hub", path: "/business-software/" }],
    references: [{ label: "Xero — accounting software and business solutions", url: "https://www.xero.com/" }],
  },
  {
    slug: "quickbooks", kind: "Review", title: "QuickBooks Review", emphasis: "Check the plan behind the claim.", path: "/reviews/quickbooks/",
    description: "A source-led QuickBooks review framework for checking invoicing, expenses, cash flow, reporting and tax-related workflows.",
    intro: "This page frames a careful QuickBooks evaluation. It focuses on the official product areas that are worth testing against your business process, rather than presenting a generic score or a permanent feature list.",
    scopes: [{ product: "What QuickBooks says it covers", text: "QuickBooks presents invoicing and payments, expense tracking, dashboards and reports, cash-flow visibility and connected payroll tools. Some features are available only in particular plans or locations.", url: "https://quickbooks.intuit.com/", source: 1 }],
    investigate: ["You want to assess an accounting tool against recurring invoicing, expense, cash-flow or reporting tasks.", "You need to check what a particular plan includes before relying on a workflow or automation.", "You can test your own data, approval steps and accountant or bookkeeper collaboration requirements."],
    checks: ["Which plan currently contains the reporting, payroll, inventory or tax workflow you need?", "How would your existing records, receipts and bank activity be brought into the service?", "Which tasks should remain under human review, even when automation is available?"],
    contextNote: "Tax rules, service availability and product scope depend on your location, selected plan and changing provider terms. Confirm current requirements with the relevant authority, the provider and an appropriate adviser before acting.",
    related: [{ title: "Compare Xero and QuickBooks", path: "/comparisons/xero-vs-quickbooks/" }, { title: "Business software hub", path: "/business-software/" }, { title: "How to compare software", path: "/comparisons/" }],
    references: [{ label: "QuickBooks — accounting and bookkeeping software", url: "https://quickbooks.intuit.com/" }],
  },
  {
    slug: "xero-vs-quickbooks", kind: "Comparison", title: "Xero vs QuickBooks", emphasis: "Compare the job, not just the brand.", path: "/comparisons/xero-vs-quickbooks/",
    description: "A practical framework for comparing the accounting, invoicing, tax reporting, payroll and connected workflows presented by Xero and QuickBooks.",
    intro: "Xero and QuickBooks both present broad accounting and business-finance workflows. A useful comparison starts by defining what needs to happen in your business, then verifying the exact current plan, setup and support implications for each option.",
    scopes: [{ product: "Xero’s stated scope", text: "Xero presents an online accounting platform with invoicing, bills, expenses, inventory and reporting features. Availability can vary by location and plan.", url: "https://www.xero.com/", source: 1 }, { product: "QuickBooks’ stated scope", text: "QuickBooks presents invoicing and payments, expense tracking, dashboards and reports, cash-flow visibility and connected payroll tools, with some capabilities dependent on plan and location.", url: "https://quickbooks.intuit.com/", source: 2 }],
    investigate: ["You need a shortlist for an accounting workflow rather than a generic ‘best software’ answer.", "You can use a trial, demonstration or provider discussion to test your own records and routine tasks.", "You understand that current price, product scope and third-party integration availability can change."],
    checks: ["List the routine tasks that must work on day one: invoicing, bank reconciliation, tax reporting, expenses, payroll or reporting.", "Ask which current plan supports every required task, each user role and your expected level of reporting.", "Check the migration process, accountant access, security controls, support routes and the cost of any connected services."],
    contextNote: "Tax reporting rules and product availability vary by location. Check the relevant requirements, provider terms and professional guidance before committing to a new finance workflow.",
    related: [{ title: "Xero Review", path: "/reviews/xero/" }, { title: "QuickBooks Review", path: "/reviews/quickbooks/" }, { title: "Business software hub", path: "/business-software/" }],
    references: [{ label: "Xero — accounting software and business solutions", url: "https://www.xero.com/" }, { label: "QuickBooks — accounting and bookkeeping software", url: "https://quickbooks.intuit.com/" }],
  },
  {
    slug: "freeagent-vs-xero", kind: "Comparison", title: "FreeAgent vs Xero", emphasis: "Test the finance routine you actually run.", path: "/comparisons/freeagent-vs-xero/",
    description: "A practical framework for comparing the accounting and tax-related workflows presented by FreeAgent and Xero.",
    intro: "FreeAgent and Xero both present accounting software for businesses and independent professionals, but the productive choice is the one that fits your specific finance routine, the people who will use it and the services you need to connect.",
    scopes: [{ product: "FreeAgent’s stated scope", text: "FreeAgent presents accounting software for small businesses, self-employed people and accountants, including workflows for invoicing, cash flow, tax, payments and payroll.", url: "https://www.freeagent.com/", source: 1 }, { product: "Xero’s stated scope", text: "Xero presents an online accounting platform with invoicing, bills, expenses, inventory and reporting features. Availability and feature scope can vary by location and plan.", url: "https://www.xero.com/", source: 2 }],
    investigate: ["You are an independent professional, small business owner or team checking how a service maps to routine work.", "You need to validate workflows around tax, invoicing, payments, cash flow or payroll with the right professional input.", "You will check current plan scope and account eligibility directly with the provider."],
    checks: ["Write down your non-negotiable tasks and test them using realistic business examples.", "Check what your accountant, bookkeeper or other collaborators need to see and do.", "Compare the current plan, add-on and connected-service requirements, rather than comparing introductory prices alone."],
    contextNote: "Tax workflows, eligibility and availability may be location-specific. Use provider materials as a starting point, then confirm the rules and services that apply to you before acting.",
    related: [{ title: "Xero Review", path: "/reviews/xero/" }, { title: "Xero vs QuickBooks", path: "/comparisons/xero-vs-quickbooks/" }, { title: "Business software hub", path: "/business-software/" }],
    references: [{ label: "FreeAgent — accounting software for small businesses", url: "https://www.freeagent.com/" }, { label: "Xero — accounting software and business solutions", url: "https://www.xero.com/" }],
  },
  {
    slug: "google-workspace-vs-microsoft-365", kind: "Comparison", title: "Google Workspace vs Microsoft 365", emphasis: "Trial the way your team works.", path: "/comparisons/google-workspace-vs-microsoft-365/",
    description: "A source-led business comparison framework for Google Workspace and Microsoft 365 productivity, collaboration and administration tools.",
    intro: "The right productivity suite is the one that makes everyday communication, documents, meetings, files and administration easier for your team. A short, realistic trial is more useful than a generic verdict.",
    scopes: [{ product: "Google Workspace’s stated scope", text: "Google Workspace presents business email and applications including Gmail, Calendar, Meet, Chat, Drive, Docs, Sheets, Slides, Forms and Sites.", url: "https://workspace.google.com/", source: 1 }, { product: "Microsoft 365 Business’ stated scope", text: "Microsoft presents productivity apps, business email, cloud storage, Teams and additional applications such as Bookings, Planner and Forms. Available applications and security capabilities vary by plan.", url: "https://www.microsoft.com/microsoft-365/business", source: 2 }],
    investigate: ["You are choosing a shared environment for email, documents, files, meetings and everyday team communication.", "You can test how current documents, mail, calendars, devices and permissions will be handled.", "You will compare the current plan-level administration, data-protection and support options required by your organisation."],
    checks: ["Run a small pilot using the documents, collaborators and devices that matter most to your team.", "Check email migration, shared file ownership, external sharing, meeting needs, user administration and access controls.", "Confirm the current plan’s included desktop, web, mobile, AI and security capabilities before deciding."],
    contextNote: "Procurement, privacy, retention, security and contractual requirements can differ by organisation and location. Check relevant documentation and seek specialist support where needed.",
    related: [{ title: "AI tools hub", path: "/ai-tools/" }, { title: "Business guides", path: "/business-guides/" }, { title: "Software comparisons hub", path: "/comparisons/" }],
    references: [{ label: "Google Workspace — business apps and collaboration tools", url: "https://workspace.google.com/" }, { label: "Microsoft 365 Business — apps for work", url: "https://www.microsoft.com/microsoft-365/business" }],
  },
];
