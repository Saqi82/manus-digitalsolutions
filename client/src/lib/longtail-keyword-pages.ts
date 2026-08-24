import { businessSoftwareKeywordPages } from "@/lib/business-software-pages";
import { calculatorKeywordTools } from "@/lib/calculator-definitions";
import { crmKeywordPages } from "@/lib/crm-pages";
import { seoKeywordPages } from "@/lib/seo-keyword-pages";

type LongTailCluster = "business-software" | "ai-automation" | "sales-customer" | "people-operations" | "productivity-collaboration" | "marketing-web" | "finance-invoicing" | "security-storage" | "how-to" | "calculators" | "utilities" | "comparisons";
type LandingPage = { slug: string; title: string; keyword: string; cluster: LongTailCluster; path: string; hubPath: string; hubLabel: string; eyebrow: string; description: string; lead: string; decision: string; signals: { label: string; value: string }[]; checkpoints: { title: string; detail: string }[]; related: { title: string; path: string }[] };

const sourceKeywords = `best business software
best software for small business
best business tools
best online business tools
best tools for entrepreneurs
best tools for freelancers
business software comparison
software comparison
business software solutions
online business software
cloud business software
business management software
business productivity software
small business software
software for small business
business automation software
business process automation
workflow automation software
sales automation software
marketing automation software
customer service software
customer support software
help desk software
live chat software
sales software
sales management software
sales pipeline software
lead management software
lead generation software
proposal software
quote software
electronic signature software
HR software
HR software for small business
employee management software
employee scheduling software
recruitment software
applicant tracking software
project management software
task management software
team management software
workflow management software
time tracking software
team collaboration software
business communication software
video conferencing software
meeting scheduling software
document management software
file sharing software
business cloud storage
website builder for small business
business website builder
ecommerce software
online store builder
email marketing software
social media management software
SEO software
digital marketing tools
accounting software
accounting software for small business
best accounting software
online accounting software
free accounting software
accounting software for freelancers
accounting software for startups
CRM software
CRM for small business
best CRM for small business
free CRM for small business
simple CRM software
CRM software for startups
best free CRM software
invoicing software
invoice software
free invoice software
recurring invoice software
AI tools for business
AI tools for small business
AI productivity tools
AI automation tools
AI marketing tools
AI writing tools
AI business tools
free AI tools
AI tools for entrepreneurs
AI tools for freelancers
productivity tools
productivity apps
best productivity tools
productivity tools for business
productivity tools for small business
time management tools
social media management tools
content marketing tools
best digital marketing tools
marketing automation tools
sales productivity tools
cybersecurity software
cybersecurity tools
cybersecurity for small business
password management software
business VPN
backup software
business backup software
cloud backup software
business software for startups
software for entrepreneurs
software for freelancers
business tools for startups
business tools for freelancers
how to choose business software
how to choose CRM software
how to choose accounting software
how to automate a small business
how to manage customer leads
how to create an invoice
how to calculate profit margin
how to calculate markup
how to calculate ROI
how to calculate break even point
how to improve business productivity
how to manage projects
how to track business expenses
how to manage customer relationships
how to create a business website
how to improve website SEO
how to protect a small business website
how to use AI for business
how to automate repetitive tasks
how to choose an email marketing platform
how to manage invoices
how to manage customers
how to track leads
how to schedule appointments
how to manage employees
how to manage projects effectively
how to automate emails
how to automate social media
how to create invoices online
how to manage subscriptions
how to track time at work
how to organise business tasks
how to manage business documents
how to share business files
how to collect online payments
how to create business proposals
how to send contracts online
how to collect electronic signatures
how to improve customer service
how to build a sales pipeline
how to generate business leads
how to automate lead follow up
how to choose project management software
how to choose invoicing software
how to choose payroll software
how to choose website builder
how to choose accounting software for a small business
how to choose a CRM for a small business
how to choose cybersecurity software
how to choose cloud storage
how to choose password manager
how to use AI for marketing
how to use AI for customer service
how to use AI for productivity
how to automate business workflows
how to reduce business admin
how to save time with automation
how to improve small business productivity
how to manage remote teams
how to collaborate with remote teams
how to schedule team meetings
how to track employee hours
how to manage employee leave
how to create a professional invoice
how to calculate gross profit
how to calculate net profit
how to calculate break even
how to calculate conversion rate
how to calculate sales commission
how to calculate freelance hourly rate
how to calculate freelance day rate
how to calculate customer acquisition cost
how to calculate return on investment
how to calculate return on ad spend
how to secure business accounts
how to protect business data
how to back up business files
how to share files securely
how to create a privacy policy
how to start using business software
how to migrate business software
how to compare software
how to review software
how to choose free business tools
how to choose AI tools
VAT calculator
profit margin calculator
gross profit margin calculator
net profit calculator
break even calculator
break even point calculator
freelance rate calculator
hourly rate calculator
day rate calculator
salary calculator
take home pay calculator
business loan calculator
ROI calculator
ROAS calculator
commission calculator
percentage calculator
percentage increase calculator
percentage decrease calculator
discount calculator
markup calculator
revenue calculator
sales commission calculator
business valuation calculator
loan repayment calculator
interest calculator
compound interest calculator
savings calculator
conversion rate calculator
customer acquisition cost calculator
invoice calculator
tax calculator
income tax calculator
free invoice generator
invoice generator
online invoice generator
invoice template generator
business name generator
company name generator
slogan generator
password generator
strong password generator
QR code generator
barcode generator
URL shortener
UTM builder
UTM generator
meta description generator
title tag generator
robots.txt generator
sitemap generator
schema markup generator
keyword density checker
word counter
character counter
reading time calculator
image compressor
image resizer
image converter
background remover
PDF compressor
PDF merger
PDF splitter
PDF to Word converter
Word to PDF converter
image to PDF converter
online text editor
JSON formatter
CSV to JSON converter
JSON to CSV converter
unit converter
currency converter
time zone converter
age calculator
date calculator
countdown timer
meeting time calculator
business days calculator
working days calculator
annual leave calculator
overtime calculator
hourly wage calculator
salary to hourly calculator
hourly to salary calculator
profit calculator
margin calculator
break even analysis calculator
cash flow calculator
budget calculator
expense calculator
savings goal calculator
subscription cost calculator
Xero vs QuickBooks
FreeAgent vs Xero
QuickBooks vs FreeAgent
Google Workspace vs Microsoft 365
HubSpot vs Salesforce
Zoho vs HubSpot
Xero alternatives
QuickBooks alternatives
FreeAgent alternatives
HubSpot alternatives
Salesforce alternatives
Microsoft 365 alternatives
Google Workspace alternatives
best Xero alternatives
best QuickBooks alternatives
best CRM alternatives
best accounting software alternatives
best project management software alternatives
best email marketing software alternatives
CRM comparison
accounting software comparison
project management software comparison
email marketing software comparison
invoicing software comparison
payroll software comparison
website builder comparison
AI tool comparison
AI software comparison
best CRM software for small business
best accounting software for small business
best invoicing software
best project management tools
best email marketing tools
best SEO tools
best AI tools for business
best AI productivity tools
best automation tools
best cybersecurity tools
best password managers
best cloud storage
best website builders
best email marketing software
best social media tools
best time tracking software
best employee scheduling software
best help desk software
best customer service software
best sales software
best proposal software
best e signature software`;

const titleCase = (keyword: string) => keyword.split(" ").map((word) => (["AI", "CRM", "SEO", "ROI", "ROAS", "VAT", "HR", "VPN", "PDF", "QR", "URL", "UTM", "JSON", "CSV", "Xero", "QuickBooks", "FreeAgent", "HubSpot", "Salesforce", "Zoho", "Google", "Microsoft"].includes(word.toUpperCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1))).join(" ");
const slugify = (keyword: string) => keyword.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const utilityTerms = new Set(["url shortener", "keyword density checker", "word counter", "character counter", "image compressor", "image resizer", "image converter", "background remover", "pdf compressor", "pdf merger", "pdf splitter", "pdf to word converter", "word to pdf converter", "image to pdf converter", "online text editor", "json formatter", "csv to json converter", "json to csv converter", "unit converter", "currency converter", "time zone converter", "countdown timer"]);
const clusterFor = (keyword: string): LongTailCluster => {
  const lower = keyword.toLowerCase();
  if (lower.startsWith("how to ")) return "how-to";
  if (lower.includes(" vs ") || lower.includes("comparison") || lower.includes("alternatives")) return "comparisons";
  if (lower.includes("calculator")) return "calculators";
  if (lower.includes("generator") || utilityTerms.has(lower)) return "utilities";
  if (/(crm|sales|lead|customer|help desk|live chat|proposal|quote|signature)/.test(lower)) return "sales-customer";
  if (/(accounting|invoice|invoicing|tax|profit|margin|loan|cash flow|budget|expense|savings)/.test(lower)) return "finance-invoicing";
  if (/(hr|employee|recruitment|applicant|scheduling|payroll)/.test(lower)) return "people-operations";
  if (/(project|task|team|workflow|time tracking|communication|video conferencing|meeting)/.test(lower)) return "productivity-collaboration";
  if (/(website|ecommerce|email marketing|social media|seo|marketing|utm|meta description|title tag|schema)/.test(lower)) return "marketing-web";
  if (/(cybersecurity|password|vpn|backup|cloud storage|privacy|secure)/.test(lower)) return "security-storage";
  if (/(ai|automation)/.test(lower)) return "ai-automation";
  return "business-software";
};

const definition: Record<LongTailCluster, Omit<LandingPage, "slug" | "title" | "keyword" | "cluster" | "path" | "related">> = {
  "business-software": { hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Software category / practical fit", description: "Explore {keyword} by identifying the routine, information and people a business system needs to support.", lead: "{keyword} is most useful when it makes a defined business routine easier to run, review and improve without adding avoidable process overhead.", decision: "Which business routine needs clearer ownership, better information or a more reliable way to move forward?", signals: [{ label: "ROUTINE", value: "Map the work" }, { label: "FIT", value: "Check the hand-offs" }, { label: "TEST", value: "Use real evidence" }], checkpoints: [{ title: "Start with the job", detail: "Choose the recurring work that needs a clearer way of operating." }, { title: "Follow the information", detail: "Check where context, ownership and decisions currently move." }, { title: "Test the real workflow", detail: "Use a realistic scenario instead of relying on a feature list." }] },
  "ai-automation": { hubPath: "/ai-tools/", hubLabel: "AI Tools", eyebrow: "AI and automation / reviewable work", description: "Explore {keyword} by setting a clear task boundary, appropriate review point and sensible information-handling approach.", lead: "{keyword} can support useful work when the task is well defined, human responsibility remains visible and the team understands what information is appropriate to share.", decision: "Which repeatable task could be improved while keeping context, review and accountability in view?", signals: [{ label: "TASK", value: "Set the boundary" }, { label: "REVIEW", value: "Keep ownership" }, { label: "DATA", value: "Check the context" }], checkpoints: [{ title: "Choose a defined task", detail: "Start with a repeatable draft, hand-off or preparation step." }, { title: "Set a review standard", detail: "Decide who checks the output before it affects the work." }, { title: "Protect useful context", detail: "Consider what information should remain outside the workflow." }] },
  "sales-customer": { hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Customer operations / visible next actions", description: "Explore {keyword} through the customer context, ownership and follow-up routines the work needs to support.", lead: "{keyword} is most useful when it helps a team understand customer context, keep the next action visible and improve follow-through across the relationship.", decision: "What customer information, sales step or service hand-off needs to be easier to see and act on?", signals: [{ label: "CONTEXT", value: "Understand the record" }, { label: "OWNER", value: "Assign the next action" }, { label: "FOLLOW", value: "Review the outcome" }], checkpoints: [{ title: "Map the customer path", detail: "Follow the relationship from the first question to the relevant next step." }, { title: "Keep ownership visible", detail: "Make it clear who is responsible for the current action." }, { title: "Test with a real scenario", detail: "Use an active customer example to assess practical fit." }] },
  "people-operations": { hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "People operations / reliable routines", description: "Explore {keyword} by mapping the people, records, timings and review points that make the routine dependable.", lead: "{keyword} should make a people-related routine easier to manage without hiding the approvals, information and human judgement that remain important.", decision: "Which people process needs a clearer routine, stronger record or more visible approval point?", signals: [{ label: "PEOPLE", value: "Map the roles" }, { label: "RECORD", value: "Check the inputs" }, { label: "REVIEW", value: "Keep oversight" }], checkpoints: [{ title: "Map the current cycle", detail: "Identify the roles, timings and records that shape the work." }, { title: "Protect necessary checks", detail: "Keep approvals and exceptions easy to find." }, { title: "Confirm the workflow", detail: "Use realistic examples before changing a routine." }] },
  "productivity-collaboration": { hubPath: "/ai-tools/", hubLabel: "AI Tools", eyebrow: "Work management / lighter routines", description: "Explore {keyword} by identifying repeated friction, visible ownership and the practical routines that help work move forward.", lead: "{keyword} is most useful when it reduces avoidable effort and makes the current owner, context and next action easier to find.", decision: "Where does shared work currently wait, duplicate effort or lose the context needed to move forward?", signals: [{ label: "FIND", value: "Observe the friction" }, { label: "OWN", value: "Make responsibility clear" }, { label: "FLOW", value: "Review the routine" }], checkpoints: [{ title: "Trace one routine", detail: "Follow an ordinary task from request through to completion." }, { title: "Create a shared default", detail: "Make the work, owner and next action easy to see." }, { title: "Remove extra effort", detail: "Retain only the steps that make the routine lighter." }] },
  "marketing-web": { hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Marketing and web / useful customer paths", description: "Explore {keyword} by connecting audience context, useful information and a clear path to the next customer action.", lead: "{keyword} should help a business make a message, website or marketing routine more useful for the people it is intended to serve.", decision: "Which audience question, message or next action needs a clearer customer-facing path?", signals: [{ label: "AUDIENCE", value: "Understand the need" }, { label: "MESSAGE", value: "Make it useful" }, { label: "ACTION", value: "Clarify the next step" }], checkpoints: [{ title: "Start with the audience task", detail: "Define the question or outcome the visitor needs help with." }, { title: "Map the information path", detail: "Connect the message, channel and action deliberately." }, { title: "Review the response", detail: "Use questions and outcomes to improve the next iteration." }] },
  "finance-invoicing": { hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Finance and invoicing / reliable records", description: "Explore {keyword} around the records, billing activity and review points a business needs to keep clear.", lead: "{keyword} is most useful when it helps people create a clearer finance routine, retain useful records and review the information behind a decision.", decision: "Which finance, billing or record-keeping routine needs a more reliable way of working?", signals: [{ label: "RECORD", value: "Keep inputs clear" }, { label: "REVIEW", value: "Check the routine" }, { label: "DECIDE", value: "Use the evidence" }], checkpoints: [{ title: "Map the recurring work", detail: "Identify the records, people and review steps that matter." }, { title: "Use realistic information", detail: "Test the routine with an appropriate example of the work." }, { title: "Confirm the current fit", detail: "Check relevant scope and details before changing a workflow." }] },
  "security-storage": { hubPath: "/business-software/", hubLabel: "Business Software", eyebrow: "Security and storage / deliberate access", description: "Explore {keyword} by considering the information, access, recovery and review routines a business needs to keep visible.", lead: "{keyword} is most useful when it supports sensible access, clearer information handling and a deliberate response to the risks that matter to the business.", decision: "What information, access or recovery routine needs a clearer and more deliberate approach?", signals: [{ label: "ACCESS", value: "Set suitable roles" }, { label: "PROTECT", value: "Know the information" }, { label: "RECOVER", value: "Review the response" }], checkpoints: [{ title: "Map important information", detail: "Identify where sensitive or essential business information is held." }, { title: "Check access and ownership", detail: "Make roles and permissions appropriate to the work." }, { title: "Review recovery steps", detail: "Keep a practical response and restore path visible." }] },
  "how-to": { hubPath: "/business-guides/", hubLabel: "Business Guides", eyebrow: "Practical guide / clear next steps", description: "Use this {keyword} guide to map the task, clarify the information involved and decide on a sensible next step.", lead: "{keyword} becomes more manageable when the work is separated into a clear starting point, a visible routine and an appropriate review before the next decision.", decision: "What is the smallest useful first step that will make this task clearer and easier to complete well?", signals: [{ label: "START", value: "Name the task" }, { label: "MAP", value: "Follow the routine" }, { label: "REVIEW", value: "Improve the next step" }], checkpoints: [{ title: "Define the outcome", detail: "Be clear about what a useful completion looks like." }, { title: "Break down the routine", detail: "Identify the information, people and hand-offs involved." }, { title: "Review before scaling", detail: "Use the first pass to refine the next version of the process." }] },
  "calculators": { hubPath: "/free-tools/", hubLabel: "Free Tools", eyebrow: "Calculator guide / visible assumptions", description: "Explore {keyword} by identifying the inputs, assumptions and practical question a calculation should help you examine.", lead: "A {keyword} is most useful when the figures, timing and limits behind the result are visible. Use a calculation as a starting point for a better question, not as a substitute for professional advice.", decision: "Which inputs and assumptions need to be clear before this calculation can support a useful next decision?", signals: [{ label: "INPUT", value: "Use real figures" }, { label: "ASSUMPTION", value: "Check the limits" }, { label: "NEXT", value: "Act with context" }], checkpoints: [{ title: "Choose the right inputs", detail: "Use current figures that reflect the question you are trying to answer." }, { title: "Check the assumptions", detail: "Understand which costs, rates or timings are outside the calculation." }, { title: "Use the result carefully", detail: "Treat the outcome as planning evidence and seek appropriate advice where needed." }] },
  "utilities": { hubPath: "/free-tools/", hubLabel: "Free Tools", eyebrow: "Utility guide / practical output", description: "Explore {keyword} by clarifying the job, inputs and review step that should shape a useful output.", lead: "{keyword} can provide a practical starting point when the intended job is clear and someone checks the output before it is used in an important workflow.", decision: "What clear input and review step would make this utility useful for the task at hand?", signals: [{ label: "PURPOSE", value: "Define the job" }, { label: "INPUT", value: "Use useful context" }, { label: "CHECK", value: "Review the output" }], checkpoints: [{ title: "Define the intended use", detail: "Start with one clear outcome rather than a broad request." }, { title: "Prepare useful inputs", detail: "Make the context and source information appropriate to the task." }, { title: "Review before use", detail: "Check the output for relevance, accuracy and next action." }] },
  comparisons: { hubPath: "/comparisons/", hubLabel: "Software Comparisons", eyebrow: "Comparison guide / same workflow", description: "Use this {keyword} framework to compare options around the same job, evidence and implementation work.", lead: "A {keyword} is most useful when every option is tested against a shared workflow rather than compared through an abstract feature list.", decision: "Which real workflow should every option be able to support before you compare products, plans or alternatives?", signals: [{ label: "SAME JOB", value: "Set the comparison task" }, { label: "SAME TEST", value: "Use shared evidence" }, { label: "SAME CHECK", value: "Review adoption work" }], checkpoints: [{ title: "Define shared criteria", detail: "Use the same business task and evidence for every option." }, { title: "Test the same scenario", detail: "Compare the workflow using a realistic example of the work." }, { title: "Check the implementation", detail: "Consider ownership, adoption and current provider details before deciding." }] },
};

const knownExistingSlugs = new Set([
  ...businessSoftwareKeywordPages.map((page) => page.slug),
  ...crmKeywordPages.map((page) => page.slug),
  ...seoKeywordPages.map((page) => page.slug),
  ...calculatorKeywordTools.map((tool) => tool.slug),
  "small-business-software", "business-tools", "digital-tools", "online-business-tools", "free-business-tools", "ai-tools-for-small-business", "business-automation-tools", "productivity-tools", "accounting-software", "crm-software", "invoicing-software", "payroll-software", "project-management-software", "email-marketing-software", "booking-software", "website-builders", "xero-vs-quickbooks", "freeagent-vs-xero", "google-workspace-vs-microsoft-365",
]);

export const longTailKeywordPages: LandingPage[] = Array.from(new Set(sourceKeywords.split("\n").map((keyword) => keyword.trim()).filter(Boolean))).map((keyword) => ({ keyword, slug: slugify(keyword) })).filter(({ slug }) => !knownExistingSlugs.has(slug)).map(({ keyword, slug }) => {
  const cluster = clusterFor(keyword);
  const config = definition[cluster];
  return { slug, title: titleCase(keyword), keyword, cluster, path: `/${slug}/`, hubPath: config.hubPath, hubLabel: config.hubLabel, eyebrow: config.eyebrow, description: config.description.replace("{keyword}", keyword), lead: config.lead.replace("{keyword}", keyword), decision: config.decision, signals: config.signals, checkpoints: config.checkpoints, related: [] };
});

export const longTailClusterLabels: Record<LongTailCluster, string> = { "business-software": "Business Software", "ai-automation": "AI & Automation", "sales-customer": "Sales & Customer Operations", "people-operations": "People Operations", "productivity-collaboration": "Productivity & Collaboration", "marketing-web": "Marketing & Web", "finance-invoicing": "Finance & Invoicing", "security-storage": "Security & Storage", "how-to": "How-To Guides", calculators: "Calculator Guides", utilities: "Generators & Utilities", comparisons: "Comparisons & Alternatives" };
