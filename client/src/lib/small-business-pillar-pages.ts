import type { KeywordLandingPage } from "@/lib/keyword-pages";

type SourceKeyword = { keyword: string; slug: string; cluster: keyof typeof clusterDefinitions; path: string };
const clusterDefinitions = {
  "small-business-technology": {
    "label": "Small-Business Technology",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Small-business technology is most useful when it supports a clear operating outcome without creating a stack that the team cannot own. Start with the job, people and information that need a better shared routine.",
    "decision": "Which technology choice would make an important small-business routine clearer, more reliable or easier to run?",
    "signals": [
      {
        "label": "OUTCOME",
        "value": "Name the work to improve"
      },
      {
        "label": "STACK",
        "value": "Keep the system purposeful"
      },
      {
        "label": "ROADMAP",
        "value": "Stage the next move"
      }
    ],
    "checkpoints": [
      {
        "title": "Start with a real constraint",
        "detail": "Use a current customer, team, finance or delivery issue as the basis for the technology decision."
      },
      {
        "title": "Build a deliberate stack",
        "detail": "Connect only the tools, ownership and information that the business can maintain."
      },
      {
        "title": "Plan a bounded next step",
        "detail": "Use a pilot, checklist or roadmap action before extending the change."
      }
    ]
  },
  "small-business-transformation": {
    "label": "Small-Business Transformation",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Small-business digital transformation works when it improves a high-impact routine in a manageable way. Begin with the business value, current process and evidence that would show the change is helping.",
    "decision": "Which small-business process should change first, and what would show that the change is worthwhile?",
    "signals": [
      {
        "label": "VALUE",
        "value": "Prioritise the outcome"
      },
      {
        "label": "ADOPT",
        "value": "Support the people"
      },
      {
        "label": "EVIDENCE",
        "value": "Review the result"
      }
    ],
    "checkpoints": [
      {
        "title": "Choose one high-impact routine",
        "detail": "Focus the work on a process with visible friction and a useful opportunity to improve."
      },
      {
        "title": "Support practical adoption",
        "detail": "Make training, ownership and a realistic transition part of the plan."
      },
      {
        "title": "Measure a useful signal",
        "detail": "Agree on the operating evidence that will guide the next transformation decision."
      }
    ]
  },
  "small-business-process": {
    "label": "Small-Business Process Improvement",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Process improvement is a practical way to make a small business easier to operate. Map the work as it happens, find the delay or duplication, and test one improvement before introducing a heavier system.",
    "decision": "Where does the current small-business process create unnecessary waiting, rework or uncertainty?",
    "signals": [
      {
        "label": "MAP",
        "value": "See the live routine"
      },
      {
        "label": "FRICTION",
        "value": "Name the bottleneck"
      },
      {
        "label": "TEST",
        "value": "Improve one step"
      }
    ],
    "checkpoints": [
      {
        "title": "Follow the work end to end",
        "detail": "Trace one request, order or recurring task from the trigger to the completed result."
      },
      {
        "title": "Find the practical constraint",
        "detail": "Distinguish between an unclear owner, missing record, repeated activity or an exception that lacks a path."
      },
      {
        "title": "Test before scaling",
        "detail": "Try a focused improvement, retain the review point, and learn from the actual routine."
      }
    ]
  },
  "small-business-automation": {
    "label": "Small-Business Automation",
    "hubPath": "/ai-tools/",
    "hubLabel": "AI Tools",
    "lead": "Small-business automation should reduce predictable administrative effort while keeping context, accountability and exceptions visible. Start with a repeatable task that can be checked by the person who owns the outcome.",
    "decision": "Which predictable small-business task can be automated while keeping a meaningful decision visible?",
    "signals": [
      {
        "label": "TRIGGER",
        "value": "Define the repeatable start"
      },
      {
        "label": "FLOW",
        "value": "Connect the routine"
      },
      {
        "label": "EXCEPTION",
        "value": "Keep the owner involved"
      }
    ],
    "checkpoints": [
      {
        "title": "Choose a repeatable candidate",
        "detail": "Start with reminders, preparation, data movement, scheduling or status work that happens consistently."
      },
      {
        "title": "Design the exception route",
        "detail": "Make clear how missing data, non-standard cases and decisions move to the responsible person."
      },
      {
        "title": "Review the working result",
        "detail": "Check whether the automation saves useful effort without reducing oversight or context."
      }
    ]
  },
  "small-business-productivity": {
    "label": "Small-Business Productivity",
    "hubPath": "/ai-tools/",
    "hubLabel": "AI Tools",
    "lead": "Productivity improves when a small team can see the priority, useful context and next action without more status work. Use an active routine to decide which system or practice will make the work lighter.",
    "decision": "Which shared-work routine would benefit from clearer priorities, context and a visible next action?",
    "signals": [
      {
        "label": "FOCUS",
        "value": "Name the important work"
      },
      {
        "label": "OWNER",
        "value": "Clarify the next action"
      },
      {
        "label": "RHYTHM",
        "value": "Review what helps"
      }
    ],
    "checkpoints": [
      {
        "title": "Use an active example",
        "detail": "Assess tools and methods against a real project, team hand-off or recurring work cycle."
      },
      {
        "title": "Protect focused effort",
        "detail": "Reduce searching, status-chasing and duplicate updates around the work that matters."
      },
      {
        "title": "Keep the system light",
        "detail": "Remove process overhead that does not help people make progress or learn."
      }
    ]
  },
  "small-business-workflow": {
    "label": "Small-Business Workflow",
    "hubPath": "/ai-tools/",
    "hubLabel": "AI Tools",
    "lead": "A small-business workflow should make the trigger, work state, owner and completion signal easy to understand. Map the current path before adding templates, builders, automation or integrations.",
    "decision": "Which small-business workflow needs a clearer start, hand-off or completion signal?",
    "signals": [
      {
        "label": "START",
        "value": "Define the trigger"
      },
      {
        "label": "HAND-OFF",
        "value": "Assign responsibility"
      },
      {
        "label": "COMPLETE",
        "value": "Confirm the outcome"
      }
    ],
    "checkpoints": [
      {
        "title": "Record the current workflow",
        "detail": "Capture the action that starts the work, the key hand-offs and the useful evidence of completion."
      },
      {
        "title": "Keep states meaningful",
        "detail": "Use only the steps, fields and automation rules that help the team act with confidence."
      },
      {
        "title": "Review the exception",
        "detail": "Test what happens when the normal route cannot proceed as expected."
      }
    ]
  },
  "small-business-data": {
    "label": "Small-Business Data Management",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Small-business data management begins with a trusted source, useful structure and a clear owner for quality. Consider data tools around the operating decision or customer context that information needs to support.",
    "decision": "What small-business decision needs more reliable data, a clearer source or a safer hand-off?",
    "signals": [
      {
        "label": "SOURCE",
        "value": "Know where records start"
      },
      {
        "label": "QUALITY",
        "value": "Make validation visible"
      },
      {
        "label": "FLOW",
        "value": "Connect data to action"
      }
    ],
    "checkpoints": [
      {
        "title": "Start with a decision",
        "detail": "Identify the practical customer, financial or operational question that needs a better information base."
      },
      {
        "title": "Follow data movement",
        "detail": "Review collection, storage, access, integration and ownership in the full working routine."
      },
      {
        "title": "Set a suitable quality check",
        "detail": "Use an appropriate review point for completeness, accuracy, currency or access."
      }
    ]
  },
  "small-business-intelligence": {
    "label": "Small-Business Intelligence",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Business intelligence is useful when a small team can connect a decision, metric, evidence source and next action. Begin with the business question rather than with a dashboard design.",
    "decision": "Which small-business decision would improve with a more useful metric, source and action view?",
    "signals": [
      {
        "label": "QUESTION",
        "value": "Name the decision"
      },
      {
        "label": "METRIC",
        "value": "Define the signal"
      },
      {
        "label": "ACTION",
        "value": "Review the next move"
      }
    ],
    "checkpoints": [
      {
        "title": "Identify the decision owner",
        "detail": "Clarify who needs the information, when they need it and what they need to decide."
      },
      {
        "title": "Document the metric",
        "detail": "Make its definition, source, timing and limits visible to avoid false certainty."
      },
      {
        "title": "Keep the evidence useful",
        "detail": "Use reporting to support investigation and action, not just display activity."
      }
    ]
  },
  "small-business-customer-experience": {
    "label": "Small-Business Customer Experience",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Customer experience improves when a small business can see the customer task, relevant context, feedback and responsible response. Start with one meaningful moment in the customer journey.",
    "decision": "Which customer moment needs a clearer record, feedback signal or more useful response?",
    "signals": [
      {
        "label": "JOURNEY",
        "value": "Follow the customer task"
      },
      {
        "label": "SIGNAL",
        "value": "Understand the feedback"
      },
      {
        "label": "RESPONSE",
        "value": "Improve the next action"
      }
    ],
    "checkpoints": [
      {
        "title": "Trace a real customer path",
        "detail": "Follow a query, request, order or support issue from the customer perspective."
      },
      {
        "title": "Connect feedback to work",
        "detail": "Make the message, owner and improvement route visible to the relevant team."
      },
      {
        "title": "Test the next interaction",
        "detail": "Check whether the new approach makes the next customer moment clearer and more useful."
      }
    ]
  },
  "small-business-marketing-operations": {
    "label": "Small-Business Marketing Operations",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Marketing operations help small teams coordinate planning, content, campaigns and reporting without losing the audience question that matters. Use a real campaign path to assess the supporting workflow.",
    "decision": "Which marketing routine needs a clearer plan, owner, content hand-off or evidence loop?",
    "signals": [
      {
        "label": "PLAN",
        "value": "Set the audience outcome"
      },
      {
        "label": "RUN",
        "value": "Coordinate the work"
      },
      {
        "label": "LEARN",
        "value": "Review useful evidence"
      }
    ],
    "checkpoints": [
      {
        "title": "Start with an audience journey",
        "detail": "Choose a practical campaign, content plan or message path rather than a channel list."
      },
      {
        "title": "Assign working ownership",
        "detail": "Connect brief, content, approval, delivery and follow-up to clear responsibilities."
      },
      {
        "title": "Choose a meaningful signal",
        "detail": "Use evidence that informs the next marketing decision, not only a surface metric."
      }
    ]
  },
  "small-business-sales-operations": {
    "label": "Small-Business Sales Operations",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Sales operations should make the opportunity, customer context, sales activity and next action useful for a small team. Test systems against a live lead or pipeline rather than a feature checklist alone.",
    "decision": "Which sales record, hand-off or forecast needs clearer context and more accountable follow-through?",
    "signals": [
      {
        "label": "CONTEXT",
        "value": "Retain the opportunity record"
      },
      {
        "label": "MOTION",
        "value": "Make the next step visible"
      },
      {
        "label": "REVIEW",
        "value": "Learn from the result"
      }
    ],
    "checkpoints": [
      {
        "title": "Use a live sales example",
        "detail": "Follow an opportunity through qualification, activity, decision and the next useful action."
      },
      {
        "title": "Connect the operating signal",
        "detail": "Check how activity, pipeline and forecasting views relate to the actual customer work."
      },
      {
        "title": "Keep coaching practical",
        "detail": "Use the system to improve decision quality and follow-up, not simply track status."
      }
    ]
  },
  "small-business-growth": {
    "label": "Small-Business Growth",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Growth tools are useful when they connect customer acquisition, retention, delivery capacity and evidence for the next business decision. Begin with a specific growth question instead of a generic scale-up plan.",
    "decision": "Which growth decision needs clearer customer context, capacity evidence or a more useful forecast assumption?",
    "signals": [
      {
        "label": "CUSTOMER",
        "value": "Understand the path"
      },
      {
        "label": "CAPACITY",
        "value": "Check the operating fit"
      },
      {
        "label": "NEXT",
        "value": "Review the decision"
      }
    ],
    "checkpoints": [
      {
        "title": "Name the growth question",
        "detail": "Start with one acquisition, retention, expansion or operating-capacity decision."
      },
      {
        "title": "Follow the evidence",
        "detail": "Connect the relevant customer and business signal to its source and a clear review cadence."
      },
      {
        "title": "Keep assumptions open",
        "detail": "Treat growth estimates as inputs to a deliberate conversation rather than automatic conclusions."
      }
    ]
  },
  "small-business-saas": {
    "label": "Small-Business SaaS",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "SaaS works best for a small business when the service has a clear role, owner, lifecycle and place in the wider technology stack. Use one shared view to make cost, access, adoption and review practical.",
    "decision": "Which SaaS decision needs clearer ownership, cost, access, lifecycle or technology-stack context?",
    "signals": [
      {
        "label": "ROLE",
        "value": "Define the business job"
      },
      {
        "label": "OWNER",
        "value": "Assign responsibility"
      },
      {
        "label": "LIFECYCLE",
        "value": "Review the fit"
      }
    ],
    "checkpoints": [
      {
        "title": "Map the active service",
        "detail": "Record the business role, users, owner, information and connected workflow for the service."
      },
      {
        "title": "Check lifecycle moments",
        "detail": "Review adoption, renewal, access, integration and offboarding deliberately."
      },
      {
        "title": "Use shared evidence",
        "detail": "Keep the information needed for a cost, risk or fit decision available to the right people."
      }
    ]
  },
  "small-business-software-buying": {
    "label": "Small-Business Software Buying",
    "hubPath": "/comparisons/",
    "hubLabel": "Software Comparisons",
    "lead": "Software buying is more reliable when a small business defines the real job, tests the same workflow across options and records evidence beyond price or marketing claims. Treat implementation and adoption as part of the evaluation.",
    "decision": "What does a small business need to test, compare and record before selecting software?",
    "signals": [
      {
        "label": "REQUIRE",
        "value": "Define the real job"
      },
      {
        "label": "COMPARE",
        "value": "Use the same scenario"
      },
      {
        "label": "DECIDE",
        "value": "Record the evidence"
      }
    ],
    "checkpoints": [
      {
        "title": "Write a practical requirement",
        "detail": "Describe people, records, integrations, constraints and outcomes that shape the decision."
      },
      {
        "title": "Test a common workflow",
        "detail": "Use a live scenario for every option so the comparison is fair and useful."
      },
      {
        "title": "Plan adoption",
        "detail": "Include data preparation, ownership, onboarding and review in the final decision."
      }
    ]
  },
  "small-business-integrations": {
    "label": "Small-Business Integrations",
    "hubPath": "/ai-tools/",
    "hubLabel": "AI Tools",
    "lead": "Small-business integrations should make a useful hand-off more reliable, not simply connect applications. Start with the source record, trigger, owner and exception path for one real workflow.",
    "decision": "Which business-system hand-off needs a clearer source, trigger, responsibility or exception path?",
    "signals": [
      {
        "label": "SOURCE",
        "value": "Define the system of record"
      },
      {
        "label": "FLOW",
        "value": "Map the hand-off"
      },
      {
        "label": "EXCEPTION",
        "value": "Keep review visible"
      }
    ],
    "checkpoints": [
      {
        "title": "Choose one bounded connection",
        "detail": "Start with a specific sales, finance, marketing, customer or operational hand-off."
      },
      {
        "title": "Clarify data responsibility",
        "detail": "Know which service owns the record and how changes, errors and access should be handled."
      },
      {
        "title": "Test the exception route",
        "detail": "Confirm what the responsible person sees when the connection cannot complete as expected."
      }
    ]
  },
  "small-business-cybersecurity": {
    "label": "Small-Business Cybersecurity",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Small-business cybersecurity is a practical operating responsibility involving leadership, people, accounts, devices, data and recovery routines. Use the category to structure a careful conversation with appropriate security expertise.",
    "decision": "Which small-business asset, account, control or recovery path needs a clearer and more practical safeguard?",
    "signals": [
      {
        "label": "ASSET",
        "value": "Identify what matters"
      },
      {
        "label": "CONTROL",
        "value": "Make responsibility visible"
      },
      {
        "label": "RECOVER",
        "value": "Practice the response path"
      }
    ],
    "checkpoints": [
      {
        "title": "Start with the relevant asset",
        "detail": "Consider the account, device, record, service or customer information that needs a safeguard."
      },
      {
        "title": "Use an appropriate control",
        "detail": "Review access, multi-factor authentication, updates, training, backups and escalation in context."
      },
      {
        "title": "Validate with expertise",
        "detail": "Use approved testing and qualified guidance before relying on a material cybersecurity decision."
      }
    ]
  }
} as const;
const sourceKeywords: SourceKeyword[] = [
  {
    "keyword": "business technology solutions for small businesses",
    "slug": "business-technology-solutions-for-small-businesses",
    "path": "/business-technology-solutions-for-small-businesses/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "business technology strategy for small businesses",
    "slug": "business-technology-strategy-for-small-businesses",
    "path": "/business-technology-strategy-for-small-businesses/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "how to build a business technology strategy",
    "slug": "how-to-build-a-business-technology-strategy",
    "path": "/how-to-build-a-business-technology-strategy/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "business IT solutions for small businesses",
    "slug": "business-it-solutions-for-small-businesses",
    "path": "/business-it-solutions-for-small-businesses/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "best IT tools for small businesses",
    "slug": "best-it-tools-for-small-businesses",
    "path": "/best-it-tools-for-small-businesses/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "business IT support software",
    "slug": "business-it-support-software",
    "path": "/business-it-support-software/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "best tech stack for small business",
    "slug": "best-tech-stack-for-small-business",
    "path": "/best-tech-stack-for-small-business/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "how to build a small business tech stack",
    "slug": "how-to-build-a-small-business-tech-stack",
    "path": "/how-to-build-a-small-business-tech-stack/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "technology stack for startups",
    "slug": "technology-stack-for-startups",
    "path": "/technology-stack-for-startups/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "essential technology for small businesses",
    "slug": "essential-technology-for-small-businesses",
    "path": "/essential-technology-for-small-businesses/",
    "cluster": "small-business-technology"
  },
  {
    "keyword": "digital transformation for small businesses",
    "slug": "digital-transformation-for-small-businesses",
    "path": "/digital-transformation-for-small-businesses/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "digital transformation tools for small businesses",
    "slug": "digital-transformation-tools-for-small-businesses",
    "path": "/digital-transformation-tools-for-small-businesses/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "digital transformation strategy for small businesses",
    "slug": "digital-transformation-strategy-for-small-businesses",
    "path": "/digital-transformation-strategy-for-small-businesses/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "digital transformation checklist for small businesses",
    "slug": "digital-transformation-checklist-for-small-businesses",
    "path": "/digital-transformation-checklist-for-small-businesses/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "digital transformation roadmap for small business",
    "slug": "digital-transformation-roadmap-for-small-business",
    "path": "/digital-transformation-roadmap-for-small-business/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "how to start digital transformation in a small business",
    "slug": "how-to-start-digital-transformation-in-a-small-business",
    "path": "/how-to-start-digital-transformation-in-a-small-business/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "digital adoption tools for small businesses",
    "slug": "digital-adoption-tools-for-small-businesses",
    "path": "/digital-adoption-tools-for-small-businesses/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "digital adoption software for employees",
    "slug": "digital-adoption-software-for-employees",
    "path": "/digital-adoption-software-for-employees/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "digital adoption strategy for small business",
    "slug": "digital-adoption-strategy-for-small-business",
    "path": "/digital-adoption-strategy-for-small-business/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "how to improve digital adoption in business",
    "slug": "how-to-improve-digital-adoption-in-business",
    "path": "/how-to-improve-digital-adoption-in-business/",
    "cluster": "small-business-transformation"
  },
  {
    "keyword": "business process improvement for small businesses",
    "slug": "business-process-improvement-for-small-businesses",
    "path": "/business-process-improvement-for-small-businesses/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "business process improvement tools for small businesses",
    "slug": "business-process-improvement-tools-for-small-businesses",
    "path": "/business-process-improvement-tools-for-small-businesses/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "how to improve business processes",
    "slug": "how-to-improve-business-processes",
    "path": "/how-to-improve-business-processes/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "business process improvement examples",
    "slug": "business-process-improvement-examples",
    "path": "/business-process-improvement-examples/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "business process improvement checklist",
    "slug": "business-process-improvement-checklist",
    "path": "/business-process-improvement-checklist/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "how to identify inefficient business processes",
    "slug": "how-to-identify-inefficient-business-processes",
    "path": "/how-to-identify-inefficient-business-processes/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "process mapping software for small business",
    "slug": "process-mapping-software-for-small-business",
    "path": "/process-mapping-software-for-small-business/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "free process mapping software",
    "slug": "free-process-mapping-software",
    "path": "/free-process-mapping-software/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "how to create a business process map",
    "slug": "how-to-create-a-business-process-map",
    "path": "/how-to-create-a-business-process-map/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "business workflow mapping software",
    "slug": "business-workflow-mapping-software",
    "path": "/business-workflow-mapping-software/",
    "cluster": "small-business-process"
  },
  {
    "keyword": "business automation for small businesses",
    "slug": "business-automation-for-small-businesses",
    "path": "/business-automation-for-small-businesses/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "business automation tools for small businesses",
    "slug": "business-automation-tools-for-small-businesses",
    "path": "/business-automation-tools-for-small-businesses/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "what business processes should be automated",
    "slug": "what-business-processes-should-be-automated",
    "path": "/what-business-processes-should-be-automated/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "best processes to automate in a small business",
    "slug": "best-processes-to-automate-in-a-small-business",
    "path": "/best-processes-to-automate-in-a-small-business/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "small business automation tools",
    "slug": "small-business-automation-tools",
    "path": "/small-business-automation-tools/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "automation ideas for small business owners",
    "slug": "automation-ideas-for-small-business-owners",
    "path": "/automation-ideas-for-small-business-owners/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "business automation for one person business",
    "slug": "business-automation-for-one-person-business",
    "path": "/business-automation-for-one-person-business/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "automate administrative tasks for small business",
    "slug": "automate-administrative-tasks-for-small-business",
    "path": "/automate-administrative-tasks-for-small-business/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "automate data entry for small business",
    "slug": "automate-data-entry-for-small-business",
    "path": "/automate-data-entry-for-small-business/",
    "cluster": "small-business-automation"
  },
  {
    "keyword": "business productivity tools for small businesses",
    "slug": "business-productivity-tools-for-small-businesses",
    "path": "/business-productivity-tools-for-small-businesses/",
    "cluster": "small-business-productivity"
  },
  {
    "keyword": "productivity systems for small businesses",
    "slug": "productivity-systems-for-small-businesses",
    "path": "/productivity-systems-for-small-businesses/",
    "cluster": "small-business-productivity"
  },
  {
    "keyword": "business productivity tools for entrepreneurs",
    "slug": "business-productivity-tools-for-entrepreneurs",
    "path": "/business-productivity-tools-for-entrepreneurs/",
    "cluster": "small-business-productivity"
  },
  {
    "keyword": "software to improve business productivity",
    "slug": "software-to-improve-business-productivity",
    "path": "/software-to-improve-business-productivity/",
    "cluster": "small-business-productivity"
  },
  {
    "keyword": "productivity tools for business owners",
    "slug": "productivity-tools-for-business-owners",
    "path": "/productivity-tools-for-business-owners/",
    "cluster": "small-business-productivity"
  },
  {
    "keyword": "employee productivity tools for small businesses",
    "slug": "employee-productivity-tools-for-small-businesses",
    "path": "/employee-productivity-tools-for-small-businesses/",
    "cluster": "small-business-productivity"
  },
  {
    "keyword": "software to track employee productivity",
    "slug": "software-to-track-employee-productivity",
    "path": "/software-to-track-employee-productivity/",
    "cluster": "small-business-productivity"
  },
  {
    "keyword": "employee productivity tracking software",
    "slug": "employee-productivity-tracking-software",
    "path": "/employee-productivity-tracking-software/",
    "cluster": "small-business-productivity"
  },
  {
    "keyword": "business workflow software for small businesses",
    "slug": "business-workflow-software-for-small-businesses",
    "path": "/business-workflow-software-for-small-businesses/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "business workflow automation for small businesses",
    "slug": "business-workflow-automation-for-small-businesses",
    "path": "/business-workflow-automation-for-small-businesses/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "business workflow management tools",
    "slug": "business-workflow-management-tools",
    "path": "/business-workflow-management-tools/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "how to create business workflows",
    "slug": "how-to-create-business-workflows",
    "path": "/how-to-create-business-workflows/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "digital workflow tools for small business",
    "slug": "digital-workflow-tools-for-small-business",
    "path": "/digital-workflow-tools-for-small-business/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "workflow software for small teams",
    "slug": "workflow-software-for-small-teams",
    "path": "/workflow-software-for-small-teams/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "workflow automation tools for small businesses",
    "slug": "workflow-automation-tools-for-small-businesses",
    "path": "/workflow-automation-tools-for-small-businesses/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "no code workflow automation tools",
    "slug": "no-code-workflow-automation-tools",
    "path": "/no-code-workflow-automation-tools/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "workflow automation for customer service",
    "slug": "workflow-automation-for-customer-service",
    "path": "/workflow-automation-for-customer-service/",
    "cluster": "small-business-workflow"
  },
  {
    "keyword": "data management software for small businesses",
    "slug": "data-management-software-for-small-businesses",
    "path": "/data-management-software-for-small-businesses/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "data management tools for small business",
    "slug": "data-management-tools-for-small-business",
    "path": "/data-management-tools-for-small-business/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "business data management best practices",
    "slug": "business-data-management-best-practices",
    "path": "/business-data-management-best-practices/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "how to manage business data",
    "slug": "how-to-manage-business-data",
    "path": "/how-to-manage-business-data/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "data management system for small business",
    "slug": "data-management-system-for-small-business",
    "path": "/data-management-system-for-small-business/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "data integration software for small businesses",
    "slug": "data-integration-software-for-small-businesses",
    "path": "/data-integration-software-for-small-businesses/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "business data integration tools",
    "slug": "business-data-integration-tools",
    "path": "/business-data-integration-tools/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "data integration platform for small business",
    "slug": "data-integration-platform-for-small-business",
    "path": "/data-integration-platform-for-small-business/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "no code data integration tools",
    "slug": "no-code-data-integration-tools",
    "path": "/no-code-data-integration-tools/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "automate data integration between apps",
    "slug": "automate-data-integration-between-apps",
    "path": "/automate-data-integration-between-apps/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "business application integration software",
    "slug": "business-application-integration-software",
    "path": "/business-application-integration-software/",
    "cluster": "small-business-data"
  },
  {
    "keyword": "business intelligence tools for small businesses",
    "slug": "business-intelligence-tools-for-small-businesses",
    "path": "/business-intelligence-tools-for-small-businesses/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "business intelligence software for small business",
    "slug": "business-intelligence-software-for-small-business",
    "path": "/business-intelligence-software-for-small-business/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "business intelligence dashboard for small business",
    "slug": "business-intelligence-dashboard-for-small-business",
    "path": "/business-intelligence-dashboard-for-small-business/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "business intelligence examples for small business",
    "slug": "business-intelligence-examples-for-small-business",
    "path": "/business-intelligence-examples-for-small-business/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "how to use business intelligence",
    "slug": "how-to-use-business-intelligence",
    "path": "/how-to-use-business-intelligence/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "business intelligence for startups",
    "slug": "business-intelligence-for-startups",
    "path": "/business-intelligence-for-startups/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "business analytics tools for small businesses",
    "slug": "business-analytics-tools-for-small-businesses",
    "path": "/business-analytics-tools-for-small-businesses/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "business analytics software for startups",
    "slug": "business-analytics-software-for-startups",
    "path": "/business-analytics-software-for-startups/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "small business analytics dashboard",
    "slug": "small-business-analytics-dashboard",
    "path": "/small-business-analytics-dashboard/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "how to use analytics to improve business decisions",
    "slug": "how-to-use-analytics-to-improve-business-decisions",
    "path": "/how-to-use-analytics-to-improve-business-decisions/",
    "cluster": "small-business-intelligence"
  },
  {
    "keyword": "customer experience software for small businesses",
    "slug": "customer-experience-software-for-small-businesses",
    "path": "/customer-experience-software-for-small-businesses/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "customer experience tools for small business",
    "slug": "customer-experience-tools-for-small-business",
    "path": "/customer-experience-tools-for-small-business/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "how to improve customer experience",
    "slug": "how-to-improve-customer-experience",
    "path": "/how-to-improve-customer-experience/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "customer experience strategy for small businesses",
    "slug": "customer-experience-strategy-for-small-businesses",
    "path": "/customer-experience-strategy-for-small-businesses/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "customer feedback software for small businesses",
    "slug": "customer-feedback-software-for-small-businesses",
    "path": "/customer-feedback-software-for-small-businesses/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "free customer feedback tools",
    "slug": "free-customer-feedback-tools",
    "path": "/free-customer-feedback-tools/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "customer survey software for small business",
    "slug": "customer-survey-software-for-small-business",
    "path": "/customer-survey-software-for-small-business/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "how to collect customer feedback online",
    "slug": "how-to-collect-customer-feedback-online",
    "path": "/how-to-collect-customer-feedback-online/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "customer journey mapping software",
    "slug": "customer-journey-mapping-software",
    "path": "/customer-journey-mapping-software/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "how to create a customer journey map",
    "slug": "how-to-create-a-customer-journey-map",
    "path": "/how-to-create-a-customer-journey-map/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "customer journey automation tools",
    "slug": "customer-journey-automation-tools",
    "path": "/customer-journey-automation-tools/",
    "cluster": "small-business-customer-experience"
  },
  {
    "keyword": "marketing operations software for small businesses",
    "slug": "marketing-operations-software-for-small-businesses",
    "path": "/marketing-operations-software-for-small-businesses/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "marketing workflow automation tools",
    "slug": "marketing-workflow-automation-tools",
    "path": "/marketing-workflow-automation-tools/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "marketing campaign management software",
    "slug": "marketing-campaign-management-software",
    "path": "/marketing-campaign-management-software/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "marketing planning software for small businesses",
    "slug": "marketing-planning-software-for-small-businesses",
    "path": "/marketing-planning-software-for-small-businesses/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "marketing reporting tools for small businesses",
    "slug": "marketing-reporting-tools-for-small-businesses",
    "path": "/marketing-reporting-tools-for-small-businesses/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "content planning tools for small businesses",
    "slug": "content-planning-tools-for-small-businesses",
    "path": "/content-planning-tools-for-small-businesses/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "content calendar software",
    "slug": "content-calendar-software",
    "path": "/content-calendar-software/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "social media content calendar tools",
    "slug": "social-media-content-calendar-tools",
    "path": "/social-media-content-calendar-tools/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "content workflow management software",
    "slug": "content-workflow-management-software",
    "path": "/content-workflow-management-software/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "free content planning tools",
    "slug": "free-content-planning-tools",
    "path": "/free-content-planning-tools/",
    "cluster": "small-business-marketing-operations"
  },
  {
    "keyword": "sales operations software for small businesses",
    "slug": "sales-operations-software-for-small-businesses",
    "path": "/sales-operations-software-for-small-businesses/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "sales workflow automation software",
    "slug": "sales-workflow-automation-software",
    "path": "/sales-workflow-automation-software/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "sales process management tools",
    "slug": "sales-process-management-tools",
    "path": "/sales-process-management-tools/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "sales process automation for small business",
    "slug": "sales-process-automation-for-small-business",
    "path": "/sales-process-automation-for-small-business/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "sales performance tracking software",
    "slug": "sales-performance-tracking-software",
    "path": "/sales-performance-tracking-software/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "sales pipeline software for small businesses",
    "slug": "sales-pipeline-software-for-small-businesses",
    "path": "/sales-pipeline-software-for-small-businesses/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "sales pipeline management tools",
    "slug": "sales-pipeline-management-tools",
    "path": "/sales-pipeline-management-tools/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "sales pipeline automation tools",
    "slug": "sales-pipeline-automation-tools",
    "path": "/sales-pipeline-automation-tools/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "simple sales pipeline software",
    "slug": "simple-sales-pipeline-software",
    "path": "/simple-sales-pipeline-software/",
    "cluster": "small-business-sales-operations"
  },
  {
    "keyword": "business growth tools for small businesses",
    "slug": "business-growth-tools-for-small-businesses",
    "path": "/business-growth-tools-for-small-businesses/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "software to help grow a small business",
    "slug": "software-to-help-grow-a-small-business",
    "path": "/software-to-help-grow-a-small-business/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "business growth strategies for small companies",
    "slug": "business-growth-strategies-for-small-companies",
    "path": "/business-growth-strategies-for-small-companies/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "small business growth software",
    "slug": "small-business-growth-software",
    "path": "/small-business-growth-software/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "business growth analytics tools",
    "slug": "business-growth-analytics-tools",
    "path": "/business-growth-analytics-tools/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "tools for scaling a small business",
    "slug": "tools-for-scaling-a-small-business",
    "path": "/tools-for-scaling-a-small-business/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "technology for business growth",
    "slug": "technology-for-business-growth",
    "path": "/technology-for-business-growth/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "automation for business growth",
    "slug": "automation-for-business-growth",
    "path": "/automation-for-business-growth/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "customer acquisition tools for small business",
    "slug": "customer-acquisition-tools-for-small-business",
    "path": "/customer-acquisition-tools-for-small-business/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "customer acquisition strategies for small business",
    "slug": "customer-acquisition-strategies-for-small-business",
    "path": "/customer-acquisition-strategies-for-small-business/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "software for getting new customers",
    "slug": "software-for-getting-new-customers",
    "path": "/software-for-getting-new-customers/",
    "cluster": "small-business-growth"
  },
  {
    "keyword": "best SaaS tools for small businesses",
    "slug": "best-saas-tools-for-small-businesses",
    "path": "/best-saas-tools-for-small-businesses/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "SaaS tools for startups",
    "slug": "saas-tools-for-startups",
    "path": "/saas-tools-for-startups/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "SaaS tools for entrepreneurs",
    "slug": "saas-tools-for-entrepreneurs",
    "path": "/saas-tools-for-entrepreneurs/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "affordable SaaS tools for small business",
    "slug": "affordable-saas-tools-for-small-business",
    "path": "/affordable-saas-tools-for-small-business/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "SaaS management tools for small businesses",
    "slug": "saas-management-tools-for-small-businesses",
    "path": "/saas-management-tools-for-small-businesses/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "SaaS expense management software",
    "slug": "saas-expense-management-software",
    "path": "/saas-expense-management-software/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "SaaS subscription management tools",
    "slug": "saas-subscription-management-tools",
    "path": "/saas-subscription-management-tools/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "how to manage SaaS subscriptions",
    "slug": "how-to-manage-saas-subscriptions",
    "path": "/how-to-manage-saas-subscriptions/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "SaaS license management software",
    "slug": "saas-license-management-software",
    "path": "/saas-license-management-software/",
    "cluster": "small-business-saas"
  },
  {
    "keyword": "software buying guide for small business",
    "slug": "software-buying-guide-for-small-business",
    "path": "/software-buying-guide-for-small-business/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "how to compare business software",
    "slug": "how-to-compare-business-software",
    "path": "/how-to-compare-business-software/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "software selection checklist",
    "slug": "software-selection-checklist",
    "path": "/software-selection-checklist/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "business software selection checklist",
    "slug": "business-software-selection-checklist",
    "path": "/business-software-selection-checklist/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "software evaluation checklist for small business",
    "slug": "software-evaluation-checklist-for-small-business",
    "path": "/software-evaluation-checklist-for-small-business/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "business software requirements checklist",
    "slug": "business-software-requirements-checklist",
    "path": "/business-software-requirements-checklist/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "questions to ask before buying business software",
    "slug": "questions-to-ask-before-buying-business-software",
    "path": "/questions-to-ask-before-buying-business-software/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "how to evaluate business software",
    "slug": "how-to-evaluate-business-software",
    "path": "/how-to-evaluate-business-software/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "business software pricing comparison",
    "slug": "business-software-pricing-comparison",
    "path": "/business-software-pricing-comparison/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "free vs paid business software",
    "slug": "free-vs-paid-business-software",
    "path": "/free-vs-paid-business-software/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "SaaS pricing models explained",
    "slug": "saas-pricing-models-explained",
    "path": "/saas-pricing-models-explained/",
    "cluster": "small-business-software-buying"
  },
  {
    "keyword": "software integrations for small businesses",
    "slug": "software-integrations-for-small-businesses",
    "path": "/software-integrations-for-small-businesses/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "best business app integration tools",
    "slug": "best-business-app-integration-tools",
    "path": "/best-business-app-integration-tools/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "how to integrate business software",
    "slug": "how-to-integrate-business-software",
    "path": "/how-to-integrate-business-software/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "software integration platforms",
    "slug": "software-integration-platforms",
    "path": "/software-integration-platforms/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "business application integration",
    "slug": "business-application-integration",
    "path": "/business-application-integration/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "cloud software integration tools",
    "slug": "cloud-software-integration-tools",
    "path": "/cloud-software-integration-tools/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "no code software integration",
    "slug": "no-code-software-integration",
    "path": "/no-code-software-integration/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "API integration for small businesses",
    "slug": "api-integration-for-small-businesses",
    "path": "/api-integration-for-small-businesses/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "API integration tools for beginners",
    "slug": "api-integration-tools-for-beginners",
    "path": "/api-integration-tools-for-beginners/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "no code API integration",
    "slug": "no-code-api-integration",
    "path": "/no-code-api-integration/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "how to connect APIs without coding",
    "slug": "how-to-connect-apis-without-coding",
    "path": "/how-to-connect-apis-without-coding/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "API integration platforms",
    "slug": "api-integration-platforms",
    "path": "/api-integration-platforms/",
    "cluster": "small-business-integrations"
  },
  {
    "keyword": "cybersecurity for small businesses",
    "slug": "cybersecurity-for-small-businesses",
    "path": "/cybersecurity-for-small-businesses/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "cybersecurity tools for small businesses",
    "slug": "cybersecurity-tools-for-small-businesses",
    "path": "/cybersecurity-tools-for-small-businesses/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "affordable cybersecurity for small business",
    "slug": "affordable-cybersecurity-for-small-business",
    "path": "/affordable-cybersecurity-for-small-business/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "small business cybersecurity software",
    "slug": "small-business-cybersecurity-software",
    "path": "/small-business-cybersecurity-software/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "small business cybersecurity checklist",
    "slug": "small-business-cybersecurity-checklist",
    "path": "/small-business-cybersecurity-checklist/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "cybersecurity checklist for startups",
    "slug": "cybersecurity-checklist-for-startups",
    "path": "/cybersecurity-checklist-for-startups/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "cybersecurity best practices for small businesses",
    "slug": "cybersecurity-best-practices-for-small-businesses",
    "path": "/cybersecurity-best-practices-for-small-businesses/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "how to protect a small business from cyber attacks",
    "slug": "how-to-protect-a-small-business-from-cyber-attacks",
    "path": "/how-to-protect-a-small-business-from-cyber-attacks/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "business security software for small businesses",
    "slug": "business-security-software-for-small-businesses",
    "path": "/business-security-software-for-small-businesses/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "website security for small business",
    "slug": "website-security-for-small-business",
    "path": "/website-security-for-small-business/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "email security for small business",
    "slug": "email-security-for-small-business",
    "path": "/email-security-for-small-business/",
    "cluster": "small-business-cybersecurity"
  },
  {
    "keyword": "password security for businesses",
    "slug": "password-security-for-businesses",
    "path": "/password-security-for-businesses/",
    "cluster": "small-business-cybersecurity"
  }
];

function titleCase(keyword: string) {
  const acronyms: Record<string, string> = { api: "API", it: "IT", saas: "SaaS" };
  return keyword.split(" ").map((word) => acronyms[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export const smallBusinessPillarPages: KeywordLandingPage[] = sourceKeywords.map((source) => {
  const definition = clusterDefinitions[source.cluster];
  return {
    slug: source.slug,
    title: titleCase(source.keyword),
    keyword: source.keyword,
    cluster: source.cluster,
    path: source.path,
    hubPath: definition.hubPath,
    hubLabel: definition.hubLabel,
    eyebrow: `${definition.label} / pillar and supporting guide`,
    description: `Explore ${source.keyword} with practical small-business guidance on the outcome, workflow, people, information and review points that support a more useful decision.`,
    lead: definition.lead,
    decision: definition.decision,
    signals: definition.signals.map((signal) => ({ ...signal })),
    checkpoints: definition.checkpoints.map((checkpoint) => ({ ...checkpoint })),
    related: [
      { title: "Topic Authority Map", path: "/topic-authority/" },
      { title: definition.hubLabel, path: definition.hubPath },
      { title: "Software Comparisons", path: "/comparisons/" }
    ]
  };
});
