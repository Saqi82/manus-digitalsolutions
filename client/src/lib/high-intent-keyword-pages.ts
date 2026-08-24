import type { KeywordLandingPage } from "@/lib/keyword-pages";

type SourceKeyword = { keyword: string; slug: string; cluster: keyof typeof clusterDefinitions; path: string };
const clusterDefinitions = {
  "operations-analytics": {
    "label": "Operations & ERP",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Operational software is useful when it makes the route from work request to accountable result easier to see. Start with the routine, records, capacity and exceptions that matter to the team before comparing products.",
    "decision": "Which operating routine needs clearer ownership, information and exception handling?",
    "signals": [
      {
        "label": "ROUTINE",
        "value": "Map the work"
      },
      {
        "label": "RECORD",
        "value": "Follow the information"
      },
      {
        "label": "REVIEW",
        "value": "Test the exception path"
      }
    ],
    "checkpoints": [
      {
        "title": "Use a live scenario",
        "detail": "Trace a current order, work request, stock movement or delivery task from start to finish."
      },
      {
        "title": "Keep ownership visible",
        "detail": "Check who can see the next action, approve a change and resolve an exception."
      },
      {
        "title": "Test connected records",
        "detail": "Assess whether the relevant information remains useful across each hand-off."
      }
    ]
  },
  "customer-management": {
    "label": "Customer Service & Support",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Customer-service software should help a team retain context, assign the next action and close the loop without losing the customer’s underlying need. Begin with a real support journey before comparing services.",
    "decision": "Where does the customer-support routine need clearer context, ownership or follow-through?",
    "signals": [
      {
        "label": "REQUEST",
        "value": "Capture the context"
      },
      {
        "label": "OWNER",
        "value": "Assign the next action"
      },
      {
        "label": "OUTCOME",
        "value": "Review the resolution"
      }
    ],
    "checkpoints": [
      {
        "title": "Trace one support journey",
        "detail": "Follow a request from first contact through triage, response and closure."
      },
      {
        "title": "Check the hand-offs",
        "detail": "Make sure context, timing and accountability survive a change of channel or person."
      },
      {
        "title": "Protect the feedback loop",
        "detail": "Retain a useful way to learn from repeat questions, issues and outcomes."
      }
    ]
  },
  "finance-invoicing": {
    "label": "Finance Workflow",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Finance-workflow software should make records, approvals, timing and the next review step easier to understand. Use a realistic business scenario to shape provider conversations, and seek qualified advice where a tax or financial decision requires it.",
    "decision": "Which finance routine needs a clearer record, approval path or review point?",
    "signals": [
      {
        "label": "INPUT",
        "value": "Use the source record"
      },
      {
        "label": "CONTROL",
        "value": "Keep approvals visible"
      },
      {
        "label": "CHECK",
        "value": "Review before action"
      }
    ],
    "checkpoints": [
      {
        "title": "Map the actual routine",
        "detail": "Use a recent expense, payment, budget or billing scenario rather than a generic demo."
      },
      {
        "title": "Confirm the controls",
        "detail": "Check user roles, approvals, records and the information needed for oversight."
      },
      {
        "title": "Verify current suitability",
        "detail": "Confirm product scope and obtain appropriate professional advice before changing finance or tax processes."
      }
    ]
  },
  "people-operations": {
    "label": "People Operations",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "People-operations software is most useful when it makes employee context, required approvals and recurring workforce routines easier to manage. Begin with the people process that needs a better shared record.",
    "decision": "Which people routine needs more reliable context, timing or accountability?",
    "signals": [
      {
        "label": "PEOPLE",
        "value": "Map the journey"
      },
      {
        "label": "RECORD",
        "value": "Keep key context usable"
      },
      {
        "label": "REVIEW",
        "value": "Protect the required check"
      }
    ],
    "checkpoints": [
      {
        "title": "Choose one workforce process",
        "detail": "Start with a real onboarding, time, hiring or employee-development routine."
      },
      {
        "title": "Clarify appropriate access",
        "detail": "Check who needs to see, update or approve the information involved."
      },
      {
        "title": "Review the hand-off",
        "detail": "Test whether the process remains clear as responsibility moves between people."
      }
    ]
  },
  "communication-utilities": {
    "label": "Communication & Coordination",
    "hubPath": "/free-tools/",
    "hubLabel": "Free Tools",
    "lead": "Communication software should help people share the right context, coordinate a next action and retain the useful record. Evaluate it around the message, channel and response pattern your team actually uses.",
    "decision": "What communication routine needs less friction and a more visible next action?",
    "signals": [
      {
        "label": "CONTEXT",
        "value": "Make the purpose clear"
      },
      {
        "label": "CHANNEL",
        "value": "Use the right route"
      },
      {
        "label": "FOLLOW-UP",
        "value": "Keep the next step visible"
      }
    ],
    "checkpoints": [
      {
        "title": "Start with a real interaction",
        "detail": "Use a meeting, call, inbox, file exchange or support interaction as the test case."
      },
      {
        "title": "Check the information flow",
        "detail": "Make sure the relevant context can move without unnecessary duplication."
      },
      {
        "title": "Set the review point",
        "detail": "Keep a way to confirm that the request, decision or hand-off is complete."
      }
    ]
  },
  "security-storage": {
    "label": "Security & Resilience",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Security software should support deliberate access, resilient records and a practical response path. Use it to inform a structured review with the appropriate technical, security and legal expertise for your organisation.",
    "decision": "Which access, protection or recovery routine needs a clearer and more testable control?",
    "signals": [
      {
        "label": "ACCESS",
        "value": "Set the right roles"
      },
      {
        "label": "PROTECT",
        "value": "Handle information deliberately"
      },
      {
        "label": "RECOVER",
        "value": "Test the response path"
      }
    ],
    "checkpoints": [
      {
        "title": "Identify the business asset",
        "detail": "Start with the people, devices, records or services that need a reliable control."
      },
      {
        "title": "Review the operating control",
        "detail": "Consider permissions, monitoring, ownership and the point where an exception is escalated."
      },
      {
        "title": "Test an appropriate scenario",
        "detail": "Use a safe, approved test or professional review to validate recovery and response plans."
      }
    ]
  },
  "marketing-web": {
    "label": "Marketing & Web",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "Marketing and web software is useful when it connects an audience question to a clearer message, action and learning loop. Begin with the customer journey and evidence you need, not a generic list of channels or features.",
    "decision": "What audience journey needs a clearer message, action or learning loop?",
    "signals": [
      {
        "label": "AUDIENCE",
        "value": "Understand the need"
      },
      {
        "label": "MESSAGE",
        "value": "Make the response useful"
      },
      {
        "label": "MEASURE",
        "value": "Learn from the path"
      }
    ],
    "checkpoints": [
      {
        "title": "Name the visitor or customer task",
        "detail": "Define what someone needs to understand, provide or do before selecting a platform."
      },
      {
        "title": "Trace the full path",
        "detail": "Connect page, message, capture, hand-off and appropriate follow-up."
      },
      {
        "title": "Use meaningful evidence",
        "detail": "Agree on the signals that would show whether the path has become clearer or more useful."
      }
    ]
  },
  "ecommerce-systems": {
    "label": "E-commerce Systems",
    "hubPath": "/business-software/",
    "hubLabel": "Business Software",
    "lead": "E-commerce software should help a business connect product information, order movement, fulfilment and customer service. Assess the complete hand-off rather than treating the storefront as the only decision point.",
    "decision": "Where does the product-to-order journey need clearer information, ownership or follow-through?",
    "signals": [
      {
        "label": "PRODUCT",
        "value": "Keep the information useful"
      },
      {
        "label": "ORDER",
        "value": "Make the commitment visible"
      },
      {
        "label": "FULFIL",
        "value": "Review the hand-off"
      }
    ],
    "checkpoints": [
      {
        "title": "Follow one real order",
        "detail": "Trace a product from discovery through payment, fulfilment and any customer follow-up."
      },
      {
        "title": "Check connected operations",
        "detail": "Consider stock, product data, shipping, returns and service as one journey."
      },
      {
        "title": "Test the exception path",
        "detail": "Review what happens when information changes, a product is unavailable or an order needs attention."
      }
    ]
  },
  "productivity-collaboration": {
    "label": "Productivity & Collaboration",
    "hubPath": "/ai-tools/",
    "hubLabel": "AI Tools",
    "lead": "Productivity software should reduce avoidable friction while keeping work, decisions and ownership visible. Start with a live project or shared routine, then assess whether a new system makes it easier to complete well.",
    "decision": "Which project or shared-work routine needs clearer priorities, ownership or progress?",
    "signals": [
      {
        "label": "PLAN",
        "value": "Make the work visible"
      },
      {
        "label": "OWN",
        "value": "Clarify responsibility"
      },
      {
        "label": "REVIEW",
        "value": "Learn from the outcome"
      }
    ],
    "checkpoints": [
      {
        "title": "Use active work",
        "detail": "Test with current tasks, decisions, people and dependencies rather than a blank workspace."
      },
      {
        "title": "Check the shared view",
        "detail": "Make sure the team can find the owner, priority and next action without extra interpretation."
      },
      {
        "title": "Keep the process light",
        "detail": "Remove steps and fields that do not help people progress the work."
      }
    ]
  }
} as const;
const sourceKeywords: SourceKeyword[] = [
  {
    "keyword": "erp software",
    "slug": "erp-software",
    "cluster": "operations-analytics",
    "path": "/erp-software/"
  },
  {
    "keyword": "erp software for small business",
    "slug": "erp-software-for-small-business",
    "cluster": "operations-analytics",
    "path": "/erp-software-for-small-business/"
  },
  {
    "keyword": "best erp software",
    "slug": "best-erp-software",
    "cluster": "operations-analytics",
    "path": "/best-erp-software/"
  },
  {
    "keyword": "free erp software",
    "slug": "free-erp-software",
    "cluster": "operations-analytics",
    "path": "/free-erp-software/"
  },
  {
    "keyword": "enterprise resource planning software",
    "slug": "enterprise-resource-planning-software",
    "cluster": "operations-analytics",
    "path": "/enterprise-resource-planning-software/"
  },
  {
    "keyword": "work order management software",
    "slug": "work-order-management-software",
    "cluster": "operations-analytics",
    "path": "/work-order-management-software/"
  },
  {
    "keyword": "maintenance management software",
    "slug": "maintenance-management-software",
    "cluster": "operations-analytics",
    "path": "/maintenance-management-software/"
  },
  {
    "keyword": "quality management software",
    "slug": "quality-management-software",
    "cluster": "operations-analytics",
    "path": "/quality-management-software/"
  },
  {
    "keyword": "supply chain management software",
    "slug": "supply-chain-management-software",
    "cluster": "operations-analytics",
    "path": "/supply-chain-management-software/"
  },
  {
    "keyword": "manufacturing software",
    "slug": "manufacturing-software",
    "cluster": "operations-analytics",
    "path": "/manufacturing-software/"
  },
  {
    "keyword": "manufacturing erp software",
    "slug": "manufacturing-erp-software",
    "cluster": "operations-analytics",
    "path": "/manufacturing-erp-software/"
  },
  {
    "keyword": "retail management software",
    "slug": "retail-management-software",
    "cluster": "operations-analytics",
    "path": "/retail-management-software/"
  },
  {
    "keyword": "point of sale software",
    "slug": "point-of-sale-software",
    "cluster": "operations-analytics",
    "path": "/point-of-sale-software/"
  },
  {
    "keyword": "pos software for small business",
    "slug": "pos-software-for-small-business",
    "cluster": "operations-analytics",
    "path": "/pos-software-for-small-business/"
  },
  {
    "keyword": "restaurant management software",
    "slug": "restaurant-management-software",
    "cluster": "operations-analytics",
    "path": "/restaurant-management-software/"
  },
  {
    "keyword": "construction management software",
    "slug": "construction-management-software",
    "cluster": "operations-analytics",
    "path": "/construction-management-software/"
  },
  {
    "keyword": "property management software",
    "slug": "property-management-software",
    "cluster": "operations-analytics",
    "path": "/property-management-software/"
  },
  {
    "keyword": "fleet management software",
    "slug": "fleet-management-software",
    "cluster": "operations-analytics",
    "path": "/fleet-management-software/"
  },
  {
    "keyword": "route planning software",
    "slug": "route-planning-software",
    "cluster": "operations-analytics",
    "path": "/route-planning-software/"
  },
  {
    "keyword": "inventory control software",
    "slug": "inventory-control-software",
    "cluster": "operations-analytics",
    "path": "/inventory-control-software/"
  },
  {
    "keyword": "support ticket software",
    "slug": "support-ticket-software",
    "cluster": "customer-management",
    "path": "/support-ticket-software/"
  },
  {
    "keyword": "ticketing system",
    "slug": "ticketing-system",
    "cluster": "customer-management",
    "path": "/ticketing-system/"
  },
  {
    "keyword": "chatbot software",
    "slug": "chatbot-software",
    "cluster": "customer-management",
    "path": "/chatbot-software/"
  },
  {
    "keyword": "call center software",
    "slug": "call-center-software",
    "cluster": "customer-management",
    "path": "/call-center-software/"
  },
  {
    "keyword": "contact center software",
    "slug": "contact-center-software",
    "cluster": "customer-management",
    "path": "/contact-center-software/"
  },
  {
    "keyword": "knowledge base software",
    "slug": "knowledge-base-software",
    "cluster": "customer-management",
    "path": "/knowledge-base-software/"
  },
  {
    "keyword": "customer feedback software",
    "slug": "customer-feedback-software",
    "cluster": "customer-management",
    "path": "/customer-feedback-software/"
  },
  {
    "keyword": "customer satisfaction survey software",
    "slug": "customer-satisfaction-survey-software",
    "cluster": "customer-management",
    "path": "/customer-satisfaction-survey-software/"
  },
  {
    "keyword": "survey software",
    "slug": "survey-software",
    "cluster": "customer-management",
    "path": "/survey-software/"
  },
  {
    "keyword": "nps software",
    "slug": "nps-software",
    "cluster": "customer-management",
    "path": "/nps-software/"
  },
  {
    "keyword": "customer success software",
    "slug": "customer-success-software",
    "cluster": "customer-management",
    "path": "/customer-success-software/"
  },
  {
    "keyword": "complaint management software",
    "slug": "complaint-management-software",
    "cluster": "customer-management",
    "path": "/complaint-management-software/"
  },
  {
    "keyword": "customer portal software",
    "slug": "customer-portal-software",
    "cluster": "customer-management",
    "path": "/customer-portal-software/"
  },
  {
    "keyword": "it help desk software",
    "slug": "it-help-desk-software",
    "cluster": "customer-management",
    "path": "/it-help-desk-software/"
  },
  {
    "keyword": "service desk software",
    "slug": "service-desk-software",
    "cluster": "customer-management",
    "path": "/service-desk-software/"
  },
  {
    "keyword": "remote support software",
    "slug": "remote-support-software",
    "cluster": "customer-management",
    "path": "/remote-support-software/"
  },
  {
    "keyword": "expense tracking software",
    "slug": "expense-tracking-software",
    "cluster": "finance-invoicing",
    "path": "/expense-tracking-software/"
  },
  {
    "keyword": "business expense tracker",
    "slug": "business-expense-tracker",
    "cluster": "finance-invoicing",
    "path": "/business-expense-tracker/"
  },
  {
    "keyword": "spend management software",
    "slug": "spend-management-software",
    "cluster": "finance-invoicing",
    "path": "/spend-management-software/"
  },
  {
    "keyword": "budgeting software",
    "slug": "budgeting-software",
    "cluster": "finance-invoicing",
    "path": "/budgeting-software/"
  },
  {
    "keyword": "financial planning software",
    "slug": "financial-planning-software",
    "cluster": "finance-invoicing",
    "path": "/financial-planning-software/"
  },
  {
    "keyword": "cash flow software",
    "slug": "cash-flow-software",
    "cluster": "finance-invoicing",
    "path": "/cash-flow-software/"
  },
  {
    "keyword": "tax software",
    "slug": "tax-software",
    "cluster": "finance-invoicing",
    "path": "/tax-software/"
  },
  {
    "keyword": "receipt scanner app",
    "slug": "receipt-scanner-app",
    "cluster": "finance-invoicing",
    "path": "/receipt-scanner-app/"
  },
  {
    "keyword": "business banking software",
    "slug": "business-banking-software",
    "cluster": "finance-invoicing",
    "path": "/business-banking-software/"
  },
  {
    "keyword": "payment gateway",
    "slug": "payment-gateway",
    "cluster": "finance-invoicing",
    "path": "/payment-gateway/"
  },
  {
    "keyword": "subscription management software",
    "slug": "subscription-management-software",
    "cluster": "finance-invoicing",
    "path": "/subscription-management-software/"
  },
  {
    "keyword": "invoice approval software",
    "slug": "invoice-approval-software",
    "cluster": "finance-invoicing",
    "path": "/invoice-approval-software/"
  },
  {
    "keyword": "business credit card management",
    "slug": "business-credit-card-management",
    "cluster": "finance-invoicing",
    "path": "/business-credit-card-management/"
  },
  {
    "keyword": "hris software",
    "slug": "hris-software",
    "cluster": "people-operations",
    "path": "/hris-software/"
  },
  {
    "keyword": "human resources software",
    "slug": "human-resources-software",
    "cluster": "people-operations",
    "path": "/human-resources-software/"
  },
  {
    "keyword": "employee onboarding software",
    "slug": "employee-onboarding-software",
    "cluster": "people-operations",
    "path": "/employee-onboarding-software/"
  },
  {
    "keyword": "performance management software",
    "slug": "performance-management-software",
    "cluster": "people-operations",
    "path": "/performance-management-software/"
  },
  {
    "keyword": "employee engagement software",
    "slug": "employee-engagement-software",
    "cluster": "people-operations",
    "path": "/employee-engagement-software/"
  },
  {
    "keyword": "leave management software",
    "slug": "leave-management-software",
    "cluster": "people-operations",
    "path": "/leave-management-software/"
  },
  {
    "keyword": "absence management software",
    "slug": "absence-management-software",
    "cluster": "people-operations",
    "path": "/absence-management-software/"
  },
  {
    "keyword": "timesheet software",
    "slug": "timesheet-software",
    "cluster": "people-operations",
    "path": "/timesheet-software/"
  },
  {
    "keyword": "applicant tracking system",
    "slug": "applicant-tracking-system",
    "cluster": "people-operations",
    "path": "/applicant-tracking-system/"
  },
  {
    "keyword": "recruiting software",
    "slug": "recruiting-software",
    "cluster": "people-operations",
    "path": "/recruiting-software/"
  },
  {
    "keyword": "learning management system",
    "slug": "learning-management-system",
    "cluster": "people-operations",
    "path": "/learning-management-system/"
  },
  {
    "keyword": "payroll hr software",
    "slug": "payroll-hr-software",
    "cluster": "people-operations",
    "path": "/payroll-hr-software/"
  },
  {
    "keyword": "hr analytics software",
    "slug": "hr-analytics-software",
    "cluster": "people-operations",
    "path": "/hr-analytics-software/"
  },
  {
    "keyword": "employee self service software",
    "slug": "employee-self-service-software",
    "cluster": "people-operations",
    "path": "/employee-self-service-software/"
  },
  {
    "keyword": "team communication software",
    "slug": "team-communication-software",
    "cluster": "communication-utilities",
    "path": "/team-communication-software/"
  },
  {
    "keyword": "business phone system",
    "slug": "business-phone-system",
    "cluster": "communication-utilities",
    "path": "/business-phone-system/"
  },
  {
    "keyword": "voip for business",
    "slug": "voip-for-business",
    "cluster": "communication-utilities",
    "path": "/voip-for-business/"
  },
  {
    "keyword": "online meeting software",
    "slug": "online-meeting-software",
    "cluster": "communication-utilities",
    "path": "/online-meeting-software/"
  },
  {
    "keyword": "collaboration software",
    "slug": "collaboration-software",
    "cluster": "communication-utilities",
    "path": "/collaboration-software/"
  },
  {
    "keyword": "team chat software",
    "slug": "team-chat-software",
    "cluster": "communication-utilities",
    "path": "/team-chat-software/"
  },
  {
    "keyword": "internal communication software",
    "slug": "internal-communication-software",
    "cluster": "communication-utilities",
    "path": "/internal-communication-software/"
  },
  {
    "keyword": "screen sharing software",
    "slug": "screen-sharing-software",
    "cluster": "communication-utilities",
    "path": "/screen-sharing-software/"
  },
  {
    "keyword": "remote desktop software",
    "slug": "remote-desktop-software",
    "cluster": "communication-utilities",
    "path": "/remote-desktop-software/"
  },
  {
    "keyword": "virtual phone system",
    "slug": "virtual-phone-system",
    "cluster": "communication-utilities",
    "path": "/virtual-phone-system/"
  },
  {
    "keyword": "call recording software",
    "slug": "call-recording-software",
    "cluster": "communication-utilities",
    "path": "/call-recording-software/"
  },
  {
    "keyword": "email collaboration software",
    "slug": "email-collaboration-software",
    "cluster": "communication-utilities",
    "path": "/email-collaboration-software/"
  },
  {
    "keyword": "shared inbox software",
    "slug": "shared-inbox-software",
    "cluster": "communication-utilities",
    "path": "/shared-inbox-software/"
  },
  {
    "keyword": "call tracking software",
    "slug": "call-tracking-software",
    "cluster": "communication-utilities",
    "path": "/call-tracking-software/"
  },
  {
    "keyword": "business texting software",
    "slug": "business-texting-software",
    "cluster": "communication-utilities",
    "path": "/business-texting-software/"
  },
  {
    "keyword": "antivirus software",
    "slug": "antivirus-software",
    "cluster": "security-storage",
    "path": "/antivirus-software/"
  },
  {
    "keyword": "endpoint security",
    "slug": "endpoint-security",
    "cluster": "security-storage",
    "path": "/endpoint-security/"
  },
  {
    "keyword": "endpoint protection software",
    "slug": "endpoint-protection-software",
    "cluster": "security-storage",
    "path": "/endpoint-protection-software/"
  },
  {
    "keyword": "password manager",
    "slug": "password-manager",
    "cluster": "security-storage",
    "path": "/password-manager/"
  },
  {
    "keyword": "password manager for business",
    "slug": "password-manager-for-business",
    "cluster": "security-storage",
    "path": "/password-manager-for-business/"
  },
  {
    "keyword": "identity access management",
    "slug": "identity-access-management",
    "cluster": "security-storage",
    "path": "/identity-access-management/"
  },
  {
    "keyword": "single sign-on software",
    "slug": "single-sign-on-software",
    "cluster": "security-storage",
    "path": "/single-sign-on-software/"
  },
  {
    "keyword": "multi factor authentication",
    "slug": "multi-factor-authentication",
    "cluster": "security-storage",
    "path": "/multi-factor-authentication/"
  },
  {
    "keyword": "data backup software",
    "slug": "data-backup-software",
    "cluster": "security-storage",
    "path": "/data-backup-software/"
  },
  {
    "keyword": "disaster recovery software",
    "slug": "disaster-recovery-software",
    "cluster": "security-storage",
    "path": "/disaster-recovery-software/"
  },
  {
    "keyword": "ransomware protection",
    "slug": "ransomware-protection",
    "cluster": "security-storage",
    "path": "/ransomware-protection/"
  },
  {
    "keyword": "network security software",
    "slug": "network-security-software",
    "cluster": "security-storage",
    "path": "/network-security-software/"
  },
  {
    "keyword": "firewall software",
    "slug": "firewall-software",
    "cluster": "security-storage",
    "path": "/firewall-software/"
  },
  {
    "keyword": "vulnerability management",
    "slug": "vulnerability-management",
    "cluster": "security-storage",
    "path": "/vulnerability-management/"
  },
  {
    "keyword": "security awareness training",
    "slug": "security-awareness-training",
    "cluster": "security-storage",
    "path": "/security-awareness-training/"
  },
  {
    "keyword": "secure file sharing",
    "slug": "secure-file-sharing",
    "cluster": "security-storage",
    "path": "/secure-file-sharing/"
  },
  {
    "keyword": "data loss prevention",
    "slug": "data-loss-prevention",
    "cluster": "security-storage",
    "path": "/data-loss-prevention/"
  },
  {
    "keyword": "mobile device management",
    "slug": "mobile-device-management",
    "cluster": "security-storage",
    "path": "/mobile-device-management/"
  },
  {
    "keyword": "customer data platform",
    "slug": "customer-data-platform",
    "cluster": "marketing-web",
    "path": "/customer-data-platform/"
  },
  {
    "keyword": "landing page builder",
    "slug": "landing-page-builder",
    "cluster": "marketing-web",
    "path": "/landing-page-builder/"
  },
  {
    "keyword": "conversion rate optimization tools",
    "slug": "conversion-rate-optimization-tools",
    "cluster": "marketing-web",
    "path": "/conversion-rate-optimization-tools/"
  },
  {
    "keyword": "web analytics software",
    "slug": "web-analytics-software",
    "cluster": "marketing-web",
    "path": "/web-analytics-software/"
  },
  {
    "keyword": "email automation software",
    "slug": "email-automation-software",
    "cluster": "marketing-web",
    "path": "/email-automation-software/"
  },
  {
    "keyword": "newsletter software",
    "slug": "newsletter-software",
    "cluster": "marketing-web",
    "path": "/newsletter-software/"
  },
  {
    "keyword": "social media scheduling tool",
    "slug": "social-media-scheduling-tool",
    "cluster": "marketing-web",
    "path": "/social-media-scheduling-tool/"
  },
  {
    "keyword": "influencer marketing software",
    "slug": "influencer-marketing-software",
    "cluster": "marketing-web",
    "path": "/influencer-marketing-software/"
  },
  {
    "keyword": "affiliate marketing software",
    "slug": "affiliate-marketing-software",
    "cluster": "marketing-web",
    "path": "/affiliate-marketing-software/"
  },
  {
    "keyword": "brand management software",
    "slug": "brand-management-software",
    "cluster": "marketing-web",
    "path": "/brand-management-software/"
  },
  {
    "keyword": "reputation management software",
    "slug": "reputation-management-software",
    "cluster": "marketing-web",
    "path": "/reputation-management-software/"
  },
  {
    "keyword": "review management software",
    "slug": "review-management-software",
    "cluster": "marketing-web",
    "path": "/review-management-software/"
  },
  {
    "keyword": "online form builder",
    "slug": "online-form-builder",
    "cluster": "marketing-web",
    "path": "/online-form-builder/"
  },
  {
    "keyword": "form builder",
    "slug": "form-builder",
    "cluster": "marketing-web",
    "path": "/form-builder/"
  },
  {
    "keyword": "quiz builder",
    "slug": "quiz-builder",
    "cluster": "marketing-web",
    "path": "/quiz-builder/"
  },
  {
    "keyword": "webinar software",
    "slug": "webinar-software",
    "cluster": "marketing-web",
    "path": "/webinar-software/"
  },
  {
    "keyword": "event management software",
    "slug": "event-management-software",
    "cluster": "marketing-web",
    "path": "/event-management-software/"
  },
  {
    "keyword": "marketplace management software",
    "slug": "marketplace-management-software",
    "cluster": "ecommerce-systems",
    "path": "/marketplace-management-software/"
  },
  {
    "keyword": "product information management software",
    "slug": "product-information-management-software",
    "cluster": "ecommerce-systems",
    "path": "/product-information-management-software/"
  },
  {
    "keyword": "order fulfillment software",
    "slug": "order-fulfillment-software",
    "cluster": "ecommerce-systems",
    "path": "/order-fulfillment-software/"
  },
  {
    "keyword": "subscription ecommerce software",
    "slug": "subscription-ecommerce-software",
    "cluster": "ecommerce-systems",
    "path": "/subscription-ecommerce-software/"
  },
  {
    "keyword": "digital product selling platform",
    "slug": "digital-product-selling-platform",
    "cluster": "ecommerce-systems",
    "path": "/digital-product-selling-platform/"
  },
  {
    "keyword": "restaurant online ordering software",
    "slug": "restaurant-online-ordering-software",
    "cluster": "ecommerce-systems",
    "path": "/restaurant-online-ordering-software/"
  },
  {
    "keyword": "online ordering system",
    "slug": "online-ordering-system",
    "cluster": "ecommerce-systems",
    "path": "/online-ordering-system/"
  },
  {
    "keyword": "pos system",
    "slug": "pos-system",
    "cluster": "ecommerce-systems",
    "path": "/pos-system/"
  },
  {
    "keyword": "retail inventory software",
    "slug": "retail-inventory-software",
    "cluster": "ecommerce-systems",
    "path": "/retail-inventory-software/"
  },
  {
    "keyword": "restaurant pos system",
    "slug": "restaurant-pos-system",
    "cluster": "ecommerce-systems",
    "path": "/restaurant-pos-system/"
  },
  {
    "keyword": "product catalog management software",
    "slug": "product-catalog-management-software",
    "cluster": "ecommerce-systems",
    "path": "/product-catalog-management-software/"
  },
  {
    "keyword": "b2b ecommerce platform",
    "slug": "b2b-ecommerce-platform",
    "cluster": "ecommerce-systems",
    "path": "/b2b-ecommerce-platform/"
  },
  {
    "keyword": "project portfolio management software",
    "slug": "project-portfolio-management-software",
    "cluster": "productivity-collaboration",
    "path": "/project-portfolio-management-software/"
  },
  {
    "keyword": "resource management software",
    "slug": "resource-management-software",
    "cluster": "productivity-collaboration",
    "path": "/resource-management-software/"
  },
  {
    "keyword": "gantt chart software",
    "slug": "gantt-chart-software",
    "cluster": "productivity-collaboration",
    "path": "/gantt-chart-software/"
  },
  {
    "keyword": "kanban software",
    "slug": "kanban-software",
    "cluster": "productivity-collaboration",
    "path": "/kanban-software/"
  },
  {
    "keyword": "project time tracking software",
    "slug": "project-time-tracking-software",
    "cluster": "productivity-collaboration",
    "path": "/project-time-tracking-software/"
  },
  {
    "keyword": "sprint planning tools",
    "slug": "sprint-planning-tools",
    "cluster": "productivity-collaboration",
    "path": "/sprint-planning-tools/"
  },
  {
    "keyword": "agile project management software",
    "slug": "agile-project-management-software",
    "cluster": "productivity-collaboration",
    "path": "/agile-project-management-software/"
  },
  {
    "keyword": "roadmap software",
    "slug": "roadmap-software",
    "cluster": "productivity-collaboration",
    "path": "/roadmap-software/"
  },
  {
    "keyword": "bug tracking software",
    "slug": "bug-tracking-software",
    "cluster": "productivity-collaboration",
    "path": "/bug-tracking-software/"
  },
  {
    "keyword": "issue tracking software",
    "slug": "issue-tracking-software",
    "cluster": "productivity-collaboration",
    "path": "/issue-tracking-software/"
  },
  {
    "keyword": "meeting management software",
    "slug": "meeting-management-software",
    "cluster": "productivity-collaboration",
    "path": "/meeting-management-software/"
  },
  {
    "keyword": "note taking software",
    "slug": "note-taking-software",
    "cluster": "productivity-collaboration",
    "path": "/note-taking-software/"
  },
  {
    "keyword": "team wiki software",
    "slug": "team-wiki-software",
    "cluster": "productivity-collaboration",
    "path": "/team-wiki-software/"
  },
  {
    "keyword": "business calendar software",
    "slug": "business-calendar-software",
    "cluster": "productivity-collaboration",
    "path": "/business-calendar-software/"
  },
  {
    "keyword": "client portal software",
    "slug": "client-portal-software",
    "cluster": "productivity-collaboration",
    "path": "/client-portal-software/"
  },
  {
    "keyword": "file request software",
    "slug": "file-request-software",
    "cluster": "productivity-collaboration",
    "path": "/file-request-software/"
  }
];

function titleCase(keyword: string) {
  const acronyms: Record<string, string> = { erp: "ERP", hris: "HRIS", nps: "NPS", pos: "POS", voip: "VoIP", it: "IT", b2b: "B2B" };
  return keyword.split(" ").map((word) => acronyms[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export const highIntentKeywordPages: KeywordLandingPage[] = sourceKeywords.map((source) => {
  const definition = clusterDefinitions[source.cluster];
  return {
    slug: source.slug,
    title: titleCase(source.keyword),
    keyword: source.keyword,
    cluster: source.cluster,
    path: source.path,
    hubPath: definition.hubPath,
    hubLabel: definition.hubLabel,
    eyebrow: `${definition.label} / high-intent category guide`,
    description: `Explore ${source.keyword} with practical guidance on the workflow, records, people and review points that shape a better business-software decision.`,
    lead: definition.lead,
    decision: definition.decision,
    signals: definition.signals.map((signal) => ({ ...signal })),
    checkpoints: definition.checkpoints.map((checkpoint) => ({ ...checkpoint })),
    related: [
      { title: "Business Software", path: "/business-software/" },
      { title: "Topic Authority Map", path: "/topic-authority/" },
      { title: "Software Comparisons", path: "/comparisons/" }
    ]
  };
});
