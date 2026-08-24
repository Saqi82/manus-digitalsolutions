import type { KeywordLandingPage } from "@/lib/keyword-pages";

type GroupName = "Business operations" | "Customer management" | "Lead generation & sales" | "Freelancers" | "Startups" | "Small business problems" | "Remote work" | "AI business use cases" | "Documents & productivity" | "Website tools" | "More SEO/tool opportunities" | "High-value “best” searches";

const groupPages: { group: GroupName; keywords: string[] }[] = [
  {
    "group": "Business operations",
    "keywords": [
      "business operations software",
      "operations management software",
      "business process management software",
      "process management tools",
      "business workflow software",
      "workflow management tools",
      "business administration software",
      "business admin tools",
      "small business management tools",
      "business planning software",
      "business planning tools",
      "business dashboard software",
      "business reporting software",
      "business intelligence tools",
      "business analytics software",
      "business data analytics tools",
      "KPI tracking software",
      "KPI dashboard software",
      "business performance software",
      "business reporting tools",
      "management reporting software",
      "decision making tools for business",
      "business planning tools for small business",
      "business strategy tools",
      "business organisation software"
    ]
  },
  {
    "group": "Customer management",
    "keywords": [
      "customer management software",
      "customer database software",
      "customer database management",
      "client management software",
      "client management system",
      "client tracking software",
      "customer tracking software",
      "customer information management",
      "customer records software",
      "customer onboarding software",
      "client onboarding software",
      "customer retention software",
      "customer loyalty software",
      "customer engagement software",
      "customer experience software",
      "customer communication software",
      "customer contact management",
      "customer relationship management tools",
      "client relationship management software",
      "customer database for small business"
    ]
  },
  {
    "group": "Lead generation & sales",
    "keywords": [
      "lead generation tools",
      "lead capture tools",
      "lead capture software",
      "lead tracking tools",
      "lead management tools",
      "sales lead software",
      "sales lead tracking",
      "prospect management software",
      "prospect tracking software",
      "sales prospecting tools",
      "sales prospecting software",
      "sales funnel software",
      "sales funnel tools",
      "sales pipeline tools",
      "sales pipeline management",
      "deal tracking software",
      "deal management software",
      "sales dashboard",
      "sales reporting software",
      "sales analytics tools",
      "customer acquisition software",
      "client acquisition tools",
      "appointment setting software",
      "sales engagement software"
    ]
  },
  {
    "group": "Freelancers",
    "keywords": [
      "tools for freelancers",
      "freelancer business software",
      "freelancer accounting software",
      "freelancer invoicing software",
      "freelancer CRM",
      "freelancer project management",
      "freelancer time tracking",
      "freelancer expense tracking",
      "freelancer proposal software",
      "freelancer contract software",
      "freelancer payment software",
      "freelancer productivity tools",
      "freelance business tools",
      "freelance management software",
      "freelance workflow tools",
      "freelance client management",
      "freelance project tracking",
      "freelance business automation"
    ]
  },
  {
    "group": "Startups",
    "keywords": [
      "startup software",
      "software for startups",
      "startup business tools",
      "startup productivity tools",
      "startup management software",
      "startup CRM",
      "startup accounting software",
      "startup project management software",
      "startup automation tools",
      "startup marketing tools",
      "startup sales tools",
      "startup analytics tools",
      "startup collaboration tools",
      "startup finance tools",
      "startup HR software",
      "startup customer management",
      "startup lead generation tools",
      "startup workflow software",
      "startup technology tools",
      "best software for startups"
    ]
  },
  {
    "group": "Small business problems",
    "keywords": [
      "how to manage a small business",
      "tools to run a small business",
      "software to run a small business",
      "how to save time in a small business",
      "how to automate small business tasks",
      "how to organise a small business",
      "how to manage small business finances",
      "how to manage small business customers",
      "how to track small business sales",
      "how to track small business expenses",
      "how to manage small business invoices",
      "how to manage small business projects",
      "how to manage small business employees",
      "how to improve small business efficiency",
      "how to reduce repetitive business tasks",
      "how to streamline business processes",
      "how to streamline small business operations",
      "small business efficiency tools",
      "small business automation ideas"
    ]
  },
  {
    "group": "Remote work",
    "keywords": [
      "remote work software",
      "remote work tools",
      "remote team software",
      "remote team tools",
      "remote employee management software",
      "remote collaboration software",
      "remote collaboration tools",
      "remote project management tools",
      "remote team communication tools",
      "remote employee productivity tools",
      "work from home productivity tools",
      "home office productivity tools",
      "remote meeting tools",
      "remote team scheduling software",
      "remote time tracking software",
      "remote employee monitoring software",
      "virtual team management tools",
      "virtual meeting software",
      "online team collaboration",
      "distributed team software"
    ]
  },
  {
    "group": "AI business use cases",
    "keywords": [
      "AI for small business",
      "AI for entrepreneurs",
      "AI for freelancers",
      "AI for startups",
      "AI business automation",
      "AI business productivity",
      "AI customer service tools",
      "AI sales tools",
      "AI lead generation tools",
      "AI CRM tools",
      "AI email tools",
      "AI meeting assistant",
      "AI meeting notes",
      "AI transcription tools",
      "AI research tools",
      "AI data analysis tools",
      "AI spreadsheet tools",
      "AI presentation tools",
      "AI document tools",
      "AI business writing tools",
      "AI proposal generator",
      "AI email generator",
      "AI business plan generator",
      "AI marketing automation",
      "AI customer support automation"
    ]
  },
  {
    "group": "Documents & productivity",
    "keywords": [
      "document automation software",
      "document workflow software",
      "document creation tools",
      "online document tools",
      "PDF tools",
      "free PDF tools",
      "PDF editing software",
      "free PDF editor",
      "online PDF editor",
      "PDF signing software",
      "online document signing",
      "contract management software",
      "contract management tools",
      "document signing tools",
      "document collaboration tools",
      "digital document management",
      "business document software",
      "business forms software",
      "online form software",
      "digital forms software"
    ]
  },
  {
    "group": "Website tools",
    "keywords": [
      "website audit tools",
      "website analysis tools",
      "website performance checker",
      "website speed test",
      "website uptime monitoring",
      "broken link checker",
      "website accessibility checker",
      "mobile friendly test",
      "favicon generator",
      "sitemap checker",
      "SSL checker",
      "domain checker",
      "DNS checker",
      "IP address checker",
      "HTTP status checker",
      "redirect checker",
      "URL checker",
      "website screenshot tool",
      "website technology checker"
    ]
  },
  {
    "group": "More SEO/tool opportunities",
    "keywords": [
      "keyword research tool",
      "keyword suggestion tool",
      "long tail keyword generator",
      "SEO keyword generator",
      "SEO title generator",
      "SEO description generator",
      "SEO content checker",
      "SEO writing tool",
      "internal link checker",
      "backlink analysis tool",
      "competitor keyword checker",
      "competitor SEO analysis",
      "website keyword checker",
      "keyword ranking checker",
      "Google ranking checker",
      "search volume checker",
      "SERP checker",
      "SEO score checker",
      "website SEO analysis",
      "technical SEO checker"
    ]
  },
  {
    "group": "High-value “best” searches",
    "keywords": [
      "best software for freelancers",
      "best tools for remote teams",
      "best software for remote teams",
      "best client management software",
      "best customer management software",
      "best lead management software",
      "best sales tracking software",
      "best sales pipeline software",
      "best business analytics software",
      "best business dashboard software",
      "best workflow automation software",
      "best business automation tools",
      "best document management software",
      "best contract management software",
      "best employee management software",
      "best scheduling software",
      "best appointment scheduling software",
      "best customer service tools",
      "best remote work tools"
    ]
  }
];

const groupConfig: Record<GroupName, { cluster: string; hubPath: string; hubLabel: string; eyebrow: string; focus: string; decision: string; signals: { label: string; value: string }[]; checkpoints: { title: string; detail: string }[] }> = {
  "Business operations": { cluster: "operations-analytics", hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Operations guide / visible performance", focus: "workflows, reporting and operating decisions", decision: "Which operational routine needs clearer ownership, evidence and a useful next action?", signals: [{ label: "ROUTINE", value: "Map the work" }, { label: "SIGNAL", value: "See the evidence" }, { label: "MOVE", value: "Review the decision" }], checkpoints: [{ title: "Trace the operating routine", detail: "Follow the work, information and decisions the category needs to support." }, { title: "Keep the metrics useful", detail: "Choose a small number of measures that clarify the next discussion." }, { title: "Check the hand-offs", detail: "Make responsibility and review points visible before adding a system." }] },
  "Customer management": { cluster: "customer-management", hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Customer operations / visible context", focus: "customer records, relationships and follow-up", decision: "What customer context or relationship routine needs to become easier to see and act on?", signals: [{ label: "CONTEXT", value: "Know the record" }, { label: "OWNER", value: "Clarify follow-up" }, { label: "REVIEW", value: "Close the loop" }], checkpoints: [{ title: "Map the customer path", detail: "Follow the conversation, record and next action through a real relationship." }, { title: "Protect useful context", detail: "Keep the information and ownership people need easy to find." }, { title: "Test the hand-off", detail: "Use an active scenario to check how the next person continues the work." }] },
  "Lead generation & sales": { cluster: "sales-revenue", hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Sales operations / practical follow-through", focus: "lead context, pipeline movement and sales follow-up", decision: "Which lead, pipeline or sales follow-up step needs a clearer view of context and next action?", signals: [{ label: "LEAD", value: "Capture the context" }, { label: "PIPELINE", value: "See the movement" }, { label: "FOLLOW", value: "Review the next step" }], checkpoints: [{ title: "Define a real sales stage", detail: "Start with the activity, record and decision that move a lead forward." }, { title: "Keep the next action visible", detail: "Make owner, timing and useful context easy to find." }, { title: "Review the learning loop", detail: "Use outcomes to improve the quality of future follow-up." }] },
  "Freelancers": { cluster: "freelancer-work", hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Independent work / lighter operations", focus: "independent client work, records and delivery routines", decision: "Which part of independent work would benefit from a clearer record, routine or next action?", signals: [{ label: "CLIENT", value: "Keep the context" }, { label: "WORK", value: "Plan the routine" }, { label: "PAY", value: "Review the record" }], checkpoints: [{ title: "Start with one repeated task", detail: "Choose the client, project or finance routine that creates the most avoidable effort." }, { title: "Keep ownership simple", detail: "Use a system that supports the way you actually organise your work." }, { title: "Check the complete cycle", detail: "Test from the first request through delivery, payment and review." }] },
  "Startups": { cluster: "startup-operations", hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Startup operations / deliberate foundations", focus: "early-stage processes, ownership and repeatable growth work", decision: "Which early-stage routine needs a simple, reliable foundation before the business scales it?", signals: [{ label: "PRIORITY", value: "Name the job" }, { label: "OWNER", value: "Keep it visible" }, { label: "SCALE", value: "Review the pattern" }], checkpoints: [{ title: "Choose the current constraint", detail: "Focus on the process that is slowing a real customer, team or delivery outcome." }, { title: "Build a lightweight default", detail: "Set a clear record, owner and review point before adding complexity." }, { title: "Test before standardising", detail: "Use a live example to see what the team will need as the work grows." }] },
  "Small business problems": { cluster: "small-business-guides", hubPath: "/business-guides/", hubLabel: "Business Guides", eyebrow: "Small business guide / useful next steps", focus: "small business routines, administration and practical improvements", decision: "What small business task could become clearer, lighter or easier to complete well?", signals: [{ label: "TASK", value: "Name the friction" }, { label: "ROUTINE", value: "Map the steps" }, { label: "NEXT", value: "Improve one part" }], checkpoints: [{ title: "Start with the current process", detail: "Notice where time, information or responsibility becomes hard to manage." }, { title: "Keep the change bounded", detail: "Improve one routine before trying to redesign the whole business." }, { title: "Review the real result", detail: "Check whether the adjustment removes friction for the people doing the work." }] },
  "Remote work": { cluster: "remote-work", hubPath: "/ai-tools/", hubLabel: "AI Tools", eyebrow: "Remote work / shared visibility", focus: "distributed teamwork, communication and coordination", decision: "Which remote-work routine needs clearer communication, ownership or shared context?", signals: [{ label: "TEAM", value: "Set the rhythm" }, { label: "CONTEXT", value: "Share the record" }, { label: "FLOW", value: "Review the hand-off" }], checkpoints: [{ title: "Map the shared routine", detail: "Follow how a request, update or decision currently moves between people." }, { title: "Make ownership clear", detail: "Keep the person, timing and next action visible across the team." }, { title: "Protect focused work", detail: "Use the right channel and record for the level of coordination needed." }] },
  "AI business use cases": { cluster: "ai-business-use-cases", hubPath: "/ai-tools/", hubLabel: "AI Tools", eyebrow: "AI use case / reviewable work", focus: "bounded AI tasks, human review and appropriate information handling", decision: "Which bounded business task could AI assist while keeping people, review and context in control?", signals: [{ label: "TASK", value: "Set the boundary" }, { label: "REVIEW", value: "Keep ownership" }, { label: "DATA", value: "Check the context" }], checkpoints: [{ title: "Choose a repeatable task", detail: "Start with preparation, drafting or analysis rather than an unbounded decision." }, { title: "Set a review standard", detail: "Define who checks the output and what a useful result must include." }, { title: "Consider the information", detail: "Only use information that is appropriate for the selected service and task." }] },
  "Documents & productivity": { cluster: "documents-productivity", hubPath: "/free-tools/", hubLabel: "Free Tools", eyebrow: "Documents / practical control", focus: "documents, forms, approvals and usable records", decision: "Which document, form or agreement routine needs a clearer source, review and final record?", signals: [{ label: "SOURCE", value: "Prepare the input" }, { label: "REVIEW", value: "Check the record" }, { label: "USE", value: "Keep it usable" }], checkpoints: [{ title: "Name the document job", detail: "Clarify who creates, reviews, signs or uses the information." }, { title: "Keep the source visible", detail: "Make the current version, context and required checks easy to find." }, { title: "Review the outcome", detail: "Confirm the final record is usable for the next relevant person or process." }] },
  "Website tools": { cluster: "website-tools", hubPath: "/free-tools/", hubLabel: "Free Tools", eyebrow: "Website utility / useful evidence", focus: "website health, visibility and technical checks", decision: "Which website signal needs a clearer check before you decide what to improve?", signals: [{ label: "PAGE", value: "Choose the URL" }, { label: "CHECK", value: "Read the signal" }, { label: "ACTION", value: "Prioritise the fix" }], checkpoints: [{ title: "Start with a clear question", detail: "Use a tool to investigate a page, technical signal or visitor need you can act on." }, { title: "Read the result in context", detail: "Treat a check as evidence for a decision, not a result to chase in isolation." }, { title: "Prioritise the next change", detail: "Focus on the improvement most likely to help a visitor or site owner." }] },
  "More SEO/tool opportunities": { cluster: "seo-tools", hubPath: "/free-tools/", hubLabel: "Free Tools", eyebrow: "SEO utility / measurable discovery", focus: "search visibility, page quality and website discovery", decision: "Which search or website signal needs a clearer check before you choose the next optimisation task?", signals: [{ label: "QUERY", value: "Define the question" }, { label: "EVIDENCE", value: "Check the page" }, { label: "NEXT", value: "Prioritise the work" }], checkpoints: [{ title: "Start with one page or query", detail: "Keep the research task specific enough to create a useful next action." }, { title: "Check the evidence", detail: "Compare the signal with the page, audience and business goal it relates to." }, { title: "Make the change deliberate", detail: "Choose the next improvement based on usefulness, not only a generic score." }] },
  "High-value “best” searches": { cluster: "high-intent-evaluation", hubPath: "/comparisons/", hubLabel: "Software Comparisons", eyebrow: "Evaluation guide / same-workflow test", focus: "high-intent software evaluation and fit decisions", decision: "Which real workflow should every option be able to support before you choose a product or tool?", signals: [{ label: "JOB", value: "Set the same test" }, { label: "EVIDENCE", value: "Compare the fit" }, { label: "ADOPTION", value: "Review the change" }], checkpoints: [{ title: "Define shared criteria", detail: "Test every option against the same task, users and evidence requirements." }, { title: "Use a real scenario", detail: "Compare the workflow with a practical example rather than a feature list." }, { title: "Check implementation work", detail: "Consider ownership, learning, current context and ongoing maintenance." }] }
};

const initialisms = new Set(["AI", "CRM", "KPI", "PDF", "SEO", "QR", "DNS", "SSL", "IP", "HTTP", "URL", "HR"]);
const titleCase = (keyword: string) => keyword.split(" ").map((word) => initialisms.has(word.toUpperCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
const slugify = (keyword: string) => keyword.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const operationsGrowthPages: KeywordLandingPage[] = groupPages.flatMap(({ group, keywords }) => {
  const config = groupConfig[group];
  return keywords.map((keyword) => ({
    slug: slugify(keyword), title: titleCase(keyword), keyword, cluster: config.cluster, path: `/${slugify(keyword)}/`, hubPath: config.hubPath, hubLabel: config.hubLabel, eyebrow: config.eyebrow,
    description: `Explore ${keyword} through practical guidance on ${config.focus}. Use a real workflow to identify useful requirements, checks and next steps.`,
    lead: `${titleCase(keyword)} is most useful when it supports ${config.focus} without hiding the people, information or decisions behind the work. Start with a real routine, then assess the category around the outcome it needs to improve.`,
    decision: config.decision, signals: config.signals, checkpoints: config.checkpoints,
    related: [{ title: config.hubLabel, path: config.hubPath }, { title: "Business guides", path: "/business-guides/" }, { title: "Software comparisons", path: "/comparisons/" }]
  }));
});
