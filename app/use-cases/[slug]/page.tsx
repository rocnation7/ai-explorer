import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"

// This would come from a CMS or MDX files in production
const useCaseData: Record<string, {
  title: string
  role: string
  difficulty: string
  readTime: string
  description: string
  jobToBeDone: string
  traditionalApproach: {
    title: string
    steps: string[]
    timeRequired: string
    painPoints: string[]
  }
  aiEnabledApproach: {
    title: string
    steps: string[]
    timeRequired: string
    benefits: string[]
  }
  workflowVisualization: {
    before: string[]
    after: string[]
  }
  valueNarrative: string[]
  guardrails: Array<{
    title: string
    description: string
  }>
  examples: Array<{
    title: string
    description: string
  }>
}> = {
  "portfolio-commentary": {
    title: "Personalized Portfolio Commentary",
    role: "Wealth Advisor",
    difficulty: "Basic",
    readTime: "5 min",
    description: "Generate tailored quarterly letters that speak to each client's specific holdings and goals, maintaining your voice while saving hours of writing time.",
    jobToBeDone: "Create personalized, compliant portfolio commentary that resonates with each client's unique situation without spending hours on repetitive writing.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Review client portfolio holdings and performance",
        "Check recent market events and their relevance",
        "Draft commentary from scratch or adapt template",
        "Personalize for client's goals and concerns",
        "Review for compliance and tone",
        "Format and finalize"
      ],
      timeRequired: "45-90 minutes per client",
      painPoints: [
        "Highly repetitive across similar portfolios",
        "Difficult to maintain consistent quality",
        "Easy to miss important personalization opportunities",
        "Time-consuming compliance review process"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Input client portfolio data and goals",
        "AI generates draft commentary with market context",
        "Review and refine for personal touch",
        "Verify compliance and accuracy",
        "Approve and deliver"
      ],
      timeRequired: "10-15 minutes per client",
      benefits: [
        "75% time savings while improving personalization",
        "Consistent quality across all clients",
        "Automatic incorporation of market context",
        "Built-in compliance checks"
      ]
    },
    workflowVisualization: {
      before: [
        "Gather data (15 min)",
        "Draft from scratch (45 min)",
        "Personalize (20 min)",
        "Review & edit (15 min)",
        "Compliance check (10 min)"
      ],
      after: [
        "Input to AI (3 min)",
        "Review AI draft (5 min)",
        "Personalize touches (4 min)",
        "Final approval (3 min)"
      ]
    },
    valueNarrative: [
      "A typical advisor managing 100 households can save 50-75 hours per quarter on commentary writing alone.",
      "This time is redirected to high-value activities: client meetings, financial planning, and business development.",
      "Clients receive more personalized, timely communications without increasing operational overhead."
    ],
    guardrails: [
      {
        title: "Human Review Required",
        description: "All AI-generated commentary must be reviewed by the advisor for accuracy, appropriateness, and compliance before sending to clients."
      },
      {
        title: "Data Privacy",
        description: "Ensure your AI solution complies with firm data policies. Never input sensitive client data into unapproved systems."
      },
      {
        title: "Maintain Your Voice",
        description: "AI should augment, not replace, your unique advisor voice. Train systems on your style or edit outputs to match your tone."
      },
      {
        title: "Fact Verification",
        description: "Always verify performance figures, dates, and market references. AI can occasionally generate plausible but incorrect details."
      }
    ],
    examples: [
      {
        title: "Quarterly Portfolio Letter",
        description: "Generate comprehensive quarterly commentary that explains performance, discusses market conditions, and reinforces the investment strategy."
      },
      {
        title: "Performance Attribution Explanation",
        description: "Translate performance data into clear narratives about what drove returns and why positioning makes sense."
      },
      {
        title: "Market Event Commentary",
        description: "Quickly create personalized responses to significant market events, explaining implications for each client's portfolio."
      }
    ]
  },
  "meeting-prep": {
    title: "Client Meeting Preparation",
    role: "Wealth Advisor",
    difficulty: "Basic",
    readTime: "6 min",
    description: "Synthesize client data, recent interactions, and market context into comprehensive pre-meeting briefings that help you show up prepared and confident.",
    jobToBeDone: "Prepare thoroughly for client meetings without spending an hour pulling information from multiple systems and reviewing recent history.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Review CRM notes and recent interactions",
        "Check portfolio performance and changes",
        "Review client's financial plan and goals",
        "Research relevant market developments",
        "Compile key talking points manually",
        "Prepare questions and discussion topics"
      ],
      timeRequired: "45-60 minutes per meeting",
      painPoints: [
        "Information scattered across multiple systems",
        "Risk of missing important context",
        "Inconsistent prep quality under time pressure",
        "Difficult to stay current on all client situations"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "AI aggregates data from CRM, portfolio, and plan",
        "Generates consolidated briefing with key insights",
        "Highlights changes since last meeting",
        "Suggests discussion topics and questions",
        "Review and add personal notes"
      ],
      timeRequired: "10-15 minutes per meeting",
      benefits: [
        "60% time savings on meeting preparation",
        "Nothing falls through the cracks",
        "Consistent preparation quality",
        "More confident, personalized meetings"
      ]
    },
    workflowVisualization: {
      before: [
        "Login to CRM (5 min)",
        "Review notes & history (15 min)",
        "Check portfolio data (10 min)",
        "Research context (15 min)",
        "Compile talking points (10 min)"
      ],
      after: [
        "AI generates briefing (2 min)",
        "Review key insights (5 min)",
        "Add personal touches (5 min)",
        "Mental preparation (3 min)"
      ]
    },
    valueNarrative: [
      "Advisors with 4-6 client meetings per week save 2-3 hours on meeting prep alone.",
      "More importantly, meeting quality improves with comprehensive, consistent preparation.",
      "Clients feel truly understood when advisors arrive with full context and thoughtful questions."
    ],
    guardrails: [
      {
        title: "Verify Current Data",
        description: "Always confirm key figures and account values are up-to-date before the meeting. AI pulls from existing systems which may have data lags."
      },
      {
        title: "Privacy and Access Controls",
        description: "Ensure AI systems only access client data you're authorized to view and comply with firm access policies."
      },
      {
        title: "Add Personal Context",
        description: "AI can't replace personal knowledge. Add notes about family situations, recent conversations, or relationship nuances."
      },
      {
        title: "Don't Over-Rely",
        description: "Use AI briefings as a foundation, but stay engaged with your book of business. Technology should enhance, not replace, advisor judgment."
      }
    ],
    examples: [
      {
        title: "Annual Review Preparation",
        description: "Comprehensive briefings for annual planning meetings that synthesize a full year of portfolio activity, goal progress, and life changes."
      },
      {
        title: "New Client Discovery",
        description: "First-meeting prep that organizes prospect information, identifies planning opportunities, and suggests engagement strategies."
      },
      {
        title: "Urgent Meeting Response",
        description: "Rapid briefing generation for unscheduled client calls, ensuring you're never caught off guard."
      }
    ]
  },
  "market-updates": {
    title: "Market Update Personalization",
    role: "Wealth Advisor",
    difficulty: "Intermediate",
    readTime: "6 min",
    description: "Transform general market commentary into client-specific implications and talking points that resonate with each portfolio and investment objective.",
    jobToBeDone: "Deliver timely, relevant market updates that connect macro developments to each client's specific situation without writing custom commentary from scratch.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Read firm's general market commentary",
        "Review each client's portfolio composition",
        "Manually assess relevance to each client",
        "Draft personalized talking points",
        "Craft individual emails or prepare for calls",
        "Send or schedule communications"
      ],
      timeRequired: "30-45 minutes per client",
      painPoints: [
        "Generic updates feel impersonal and get ignored",
        "Time-consuming to personalize for large client base",
        "Difficult to identify which clients need proactive outreach",
        "Risk of missing key portfolio-specific implications"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Input firm market commentary and client portfolio data",
        "AI analyzes portfolio-specific implications",
        "Generates personalized talking points per client",
        "Review and prioritize high-impact communications",
        "Approve and distribute targeted updates"
      ],
      timeRequired: "5-10 minutes per client",
      benefits: [
        "70% time savings on market update distribution",
        "Every client receives relevant, personalized insights",
        "Automated prioritization of which clients to contact",
        "Consistent quality across all communications"
      ]
    },
    workflowVisualization: {
      before: [
        "Read market update (10 min)",
        "Review client portfolios (20 min)",
        "Draft custom messages (30 min)",
        "Send individual emails (10 min)"
      ],
      after: [
        "Input market update (2 min)",
        "AI generates personalized versions (1 min)",
        "Review and refine outputs (5 min)",
        "Approve distribution (2 min)"
      ]
    },
    valueNarrative: [
      "Advisors can reach their entire client base with personalized market updates in hours instead of days.",
      "Clients appreciate receiving only relevant commentary that speaks directly to their portfolios.",
      "Proactive, timely communication during volatile markets strengthens client relationships and reduces inbound anxiety calls."
    ],
    guardrails: [
      {
        title: "Verify Market Data",
        description: "Always verify that market data, figures, and event descriptions are accurate before distribution. AI may occasionally misinterpret recent developments."
      },
      {
        title: "Review Portfolio Relevance",
        description: "Confirm that AI-identified portfolio implications are accurate. Some nuances of positioning may require advisor judgment."
      },
      {
        title: "Maintain Advisor Voice",
        description: "Ensure personalized updates still sound like you. Edit AI outputs to match your communication style and client relationship."
      },
      {
        title: "Compliance Review",
        description: "Market commentary must comply with firm policies. Review all communications for compliance before sending, especially during volatile periods."
      }
    ],
    examples: [
      {
        title: "Fed Rate Decision Communication",
        description: "Translate Federal Reserve actions into portfolio-specific implications for fixed income, equity, and alternative allocations."
      },
      {
        title: "Sector Rotation Alerts",
        description: "Identify clients with significant sector exposure and explain how market rotations affect their specific holdings."
      },
      {
        title: "Volatility Event Outreach",
        description: "During market selloffs, quickly generate reassuring messages that reference each client's long-term plan and portfolio positioning."
      }
    ]
  },
  "email-drafting": {
    title: "Email Response Drafting",
    role: "Wealth Advisor",
    difficulty: "Basic",
    readTime: "5 min",
    description: "Generate professional, on-brand responses to common client inquiries while maintaining your voice and ensuring compliance.",
    jobToBeDone: "Respond to routine client emails quickly and professionally without spending 20-30 minutes crafting each response from scratch.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Read and understand client inquiry",
        "Research necessary information or data",
        "Draft response from scratch",
        "Review for tone and clarity",
        "Check for compliance issues",
        "Send response"
      ],
      timeRequired: "15-30 minutes per email",
      painPoints: [
        "Repetitive questions require repetitive answers",
        "Inconsistent response quality under time pressure",
        "Risk of compliance errors in rushed responses",
        "Email backlog creates stress and delayed responses"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "AI reads client inquiry and context",
        "Generates draft response in your voice",
        "Pulls relevant data or portfolio information",
        "Review and personalize as needed",
        "Send with confidence"
      ],
      timeRequired: "3-5 minutes per email",
      benefits: [
        "80% time savings on routine email responses",
        "Faster response times improve client satisfaction",
        "Consistent, professional communication quality",
        "Built-in compliance language for common scenarios"
      ]
    },
    workflowVisualization: {
      before: [
        "Read inquiry (2 min)",
        "Look up information (8 min)",
        "Draft response (12 min)",
        "Review & edit (5 min)",
        "Compliance check (3 min)"
      ],
      after: [
        "AI drafts response (1 min)",
        "Review draft (2 min)",
        "Personalize details (1 min)",
        "Final approval (1 min)"
      ]
    },
    valueNarrative: [
      "Advisors receiving 20-30 client emails per week save 5-8 hours on email management alone.",
      "Faster response times create a better client experience without sacrificing quality or compliance.",
      "Reduced email stress allows advisors to focus on high-value activities like planning and relationship building."
    ],
    guardrails: [
      {
        title: "Personalization Required",
        description: "Never send AI-generated emails without adding personal touches. Clients can tell when responses feel generic or automated."
      },
      {
        title: "Verify All Facts",
        description: "Always confirm account balances, performance figures, and other data points before sending. AI may pull outdated or incorrect information."
      },
      {
        title: "Compliance Review",
        description: "Review all communications for compliance, especially those involving performance, recommendations, or forward-looking statements."
      },
      {
        title: "Complex Issues Need Human Judgment",
        description: "Use AI for routine inquiries only. Complex questions, sensitive situations, or unhappy clients require full advisor attention and customization."
      }
    ],
    examples: [
      {
        title: "Account Balance Inquiries",
        description: "Quick, professional responses to routine balance and transaction questions with current portfolio data."
      },
      {
        title: "Distribution Requests",
        description: "Draft responses to withdrawal or distribution requests that include necessary instructions and next steps."
      },
      {
        title: "General Market Questions",
        description: "Respond to 'what do you think about X?' questions with thoughtful, compliant commentary that reflects firm views."
      }
    ]
  },
  "performance-stories": {
    title: "Performance Attribution Stories",
    role: "Wealth Advisor",
    difficulty: "Intermediate",
    readTime: "7 min",
    description: "Translate complex performance data into clear, narrative explanations that help clients understand what drove returns and why positioning makes sense.",
    jobToBeDone: "Explain portfolio performance in client-friendly language that builds confidence and understanding, without requiring deep attribution analysis expertise.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Review portfolio performance reports",
        "Analyze attribution by sector, security, and allocation",
        "Research market context for major contributors/detractors",
        "Translate technical analysis into plain language",
        "Draft performance narrative",
        "Review for accuracy and tone"
      ],
      timeRequired: "60-90 minutes per portfolio",
      painPoints: [
        "Requires strong analytical skills to interpret data",
        "Time-consuming to research market context",
        "Difficult to explain complex concepts simply",
        "Inconsistent storytelling across client base"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Input performance attribution data",
        "AI analyzes drivers of returns",
        "Generates narrative explanation with market context",
        "Review and add advisor perspective",
        "Approve client-ready story"
      ],
      timeRequired: "15-20 minutes per portfolio",
      benefits: [
        "75% time savings on performance analysis",
        "Consistent, clear storytelling for all clients",
        "Automatic connection to broader market context",
        "Helps advisors better understand portfolio positioning"
      ]
    },
    workflowVisualization: {
      before: [
        "Pull attribution reports (10 min)",
        "Analyze performance drivers (30 min)",
        "Research market context (20 min)",
        "Write narrative (25 min)",
        "Edit and refine (10 min)"
      ],
      after: [
        "Input performance data (3 min)",
        "AI generates story (2 min)",
        "Review and understand (8 min)",
        "Add personal insights (5 min)"
      ]
    },
    valueNarrative: [
      "Advisors can deliver sophisticated performance storytelling regardless of analytical background.",
      "Clients gain clearer understanding of portfolio strategy and decision-making rationale.",
      "Better performance communication leads to fewer difficult conversations during underperformance periods."
    ],
    guardrails: [
      {
        title: "Verify All Numbers",
        description: "Always confirm performance figures, attribution percentages, and security returns are accurate before sharing with clients."
      },
      {
        title: "Add Strategic Context",
        description: "AI explains what happened, but advisors must add context about why positions were taken and how they fit the long-term strategy."
      },
      {
        title: "Avoid Over-Simplification",
        description: "Ensure simplified explanations remain accurate. Don't sacrifice correctness for simplicity."
      },
      {
        title: "Manage Expectations",
        description: "Performance narratives should educate, not create unrealistic expectations about future returns or minimize real concerns."
      }
    ],
    examples: [
      {
        title: "Quarterly Performance Review",
        description: "Explain the top 5 contributors and detractors to quarterly returns with market context and strategic rationale."
      },
      {
        title: "Underperformance Explanation",
        description: "Navigate difficult conversations about lagging returns by clearly explaining positioning decisions and maintaining long-term perspective."
      },
      {
        title: "Benchmark Comparison",
        description: "Articulate why portfolio performance differed from benchmarks based on intentional positioning and client-specific objectives."
      }
    ]
  },
  "tax-loss-communication": {
    title: "Tax-Loss Harvesting Communication",
    role: "Wealth Advisor",
    difficulty: "Advanced",
    readTime: "8 min",
    description: "Create sophisticated yet accessible explanations of tax strategies executed in portfolios, helping clients understand the value of proactive tax management.",
    jobToBeDone: "Communicate complex tax-loss harvesting activities in a way that demonstrates value and expertise without overwhelming clients with technical details.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Identify all tax-loss harvesting transactions",
        "Calculate tax savings and impact",
        "Research wash sale rules and replacement securities",
        "Draft explanation of strategy and benefits",
        "Create before/after positioning comparison",
        "Review with tax specialist if needed"
      ],
      timeRequired: "90-120 minutes per client",
      painPoints: [
        "Highly technical topic difficult to explain simply",
        "Time-intensive to calculate and document savings",
        "Risk of non-compliance with wash sale rules",
        "Clients often don't understand or appreciate the value"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Input transaction details and tax lot information",
        "AI generates client-friendly explanation",
        "Calculates estimated tax savings by scenario",
        "Creates visualization of positioning changes",
        "Review and approve communication"
      ],
      timeRequired: "20-30 minutes per client",
      benefits: [
        "75% time savings on tax strategy communication",
        "Clear, compliant explanations of complex topics",
        "Automated calculation of tax impact scenarios",
        "Consistent value demonstration across client base"
      ]
    },
    workflowVisualization: {
      before: [
        "Review all transactions (20 min)",
        "Calculate tax savings (30 min)",
        "Draft explanation (35 min)",
        "Create positioning comparison (20 min)",
        "Compliance review (15 min)"
      ],
      after: [
        "Input transaction data (5 min)",
        "AI generates explanation (3 min)",
        "Review calculations (10 min)",
        "Customize messaging (8 min)"
      ]
    },
    valueNarrative: [
      "Tax-loss harvesting communication transforms from a burdensome annual task to a proactive value demonstration.",
      "Clients better understand and appreciate the tax alpha generated by active management.",
      "Clear tax reporting helps justify advisory fees and strengthens client retention during market volatility."
    ],
    guardrails: [
      {
        title: "Tax Professional Review",
        description: "Complex tax situations require review by qualified tax professionals. AI assists with communication, not tax advice."
      },
      {
        title: "Verify Wash Sale Compliance",
        description: "Always confirm replacement securities comply with wash sale rules. This is a critical compliance area requiring human oversight."
      },
      {
        title: "Manage Expectations",
        description: "Present tax savings as estimates dependent on client's individual tax situation. Avoid guarantees about future tax benefits."
      },
      {
        title: "Document Assumptions",
        description: "Clearly state tax rate assumptions and scenarios used in calculations. Different tax brackets produce different savings."
      }
    ],
    examples: [
      {
        title: "Year-End Tax Harvesting Report",
        description: "Comprehensive summary of tax-loss harvesting activity, estimated savings, and portfolio positioning changes."
      },
      {
        title: "Mid-Year Opportunity Alert",
        description: "Proactive communication about tax-loss harvesting opportunities identified during market downturns."
      },
      {
        title: "Tax Strategy Education",
        description: "Explain tax-loss harvesting strategy to new clients in accessible language that builds confidence in your tax-aware approach."
      }
    ]
  },
  "communication-templates": {
    title: "Firm-Wide Communication Templates",
    role: "RIA Principal",
    difficulty: "Basic",
    readTime: "6 min",
    description: "Create consistent, on-brand communication templates that advisors can personalize, ensuring quality standards across all client interactions.",
    jobToBeDone: "Standardize communication quality across your advisor team without sacrificing personalization or creating burdensome approval processes.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Draft template communications from scratch",
        "Review with compliance and leadership",
        "Distribute to advisors via email or shared drive",
        "Hope advisors actually use the templates",
        "Manually review advisor-generated content",
        "Provide feedback on inconsistent messaging"
      ],
      timeRequired: "4-6 hours per template",
      painPoints: [
        "Advisors often ignore or modify templates incorrectly",
        "Difficult to enforce consistent quality",
        "Templates quickly become outdated",
        "No easy way to track template usage or effectiveness"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Define communication standards and firm voice",
        "AI generates template library with variations",
        "Build in personalization guidance and variables",
        "Advisors use AI to customize while maintaining standards",
        "Automated quality checks before distribution"
      ],
      timeRequired: "1-2 hours per template",
      benefits: [
        "70% faster template creation and maintenance",
        "Higher adoption rates with easier customization",
        "Consistent quality with built-in guardrails",
        "Automatic compliance language insertion"
      ]
    },
    workflowVisualization: {
      before: [
        "Draft template (120 min)",
        "Compliance review (60 min)",
        "Leadership revisions (45 min)",
        "Distribute to team (15 min)",
        "Train advisors (60 min)"
      ],
      after: [
        "Define requirements (20 min)",
        "AI generates options (5 min)",
        "Review and refine (30 min)",
        "Integrate with systems (20 min)"
      ]
    },
    valueNarrative: [
      "Firms can build comprehensive template libraries in days instead of months.",
      "Advisors maintain their individual voice while operating within firm standards.",
      "Consistent, professional communication across the firm strengthens brand and reduces compliance risk."
    ],
    guardrails: [
      {
        title: "Compliance Approval Required",
        description: "All templates must go through standard compliance review before advisor distribution, regardless of how they were created."
      },
      {
        title: "Regular Updates Needed",
        description: "Templates must be reviewed and updated regularly as market conditions, regulations, and firm positioning evolve."
      },
      {
        title: "Personalization Guidelines",
        description: "Provide clear guidance on which template elements can be modified and which must remain consistent across all advisors."
      },
      {
        title: "Monitor Usage and Quality",
        description: "Track which templates are actually used and review advisor-generated content to ensure standards are maintained."
      }
    ],
    examples: [
      {
        title: "Market Commentary Templates",
        description: "Create quarterly market update templates that advisors can personalize with client-specific portfolio implications."
      },
      {
        title: "Client Onboarding Sequences",
        description: "Standardize welcome sequences and onboarding communications while allowing advisor personalization of relationship details."
      },
      {
        title: "Review Meeting Follow-ups",
        description: "Generate consistent post-meeting summary templates that capture action items, decisions, and next steps."
      }
    ]
  },
  "compliance-review": {
    title: "Compliance Review Assistance",
    role: "RIA Principal",
    difficulty: "Intermediate",
    readTime: "7 min",
    description: "Pre-screen advisor communications for compliance red flags before final review, reducing compliance workload and catching issues earlier.",
    jobToBeDone: "Identify potential compliance issues in advisor communications before they reach clients or require expensive manual compliance review.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Advisors submit communications for review",
        "Compliance manually reads each submission",
        "Flag potential issues and request revisions",
        "Advisors revise and resubmit",
        "Second review of revised content",
        "Approval and release"
      ],
      timeRequired: "2-4 days turnaround time",
      painPoints: [
        "Bottleneck in communication approval process",
        "Expensive compliance resources spent on routine reviews",
        "Frustration from advisors waiting for approval",
        "Some issues not caught until too late"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Advisor drafts communication",
        "AI scans for compliance red flags",
        "Highlights potential issues with explanations",
        "Advisor revises before compliance submission",
        "Compliance reviews only pre-screened content"
      ],
      timeRequired: "Same-day turnaround time",
      benefits: [
        "50% reduction in compliance review burden",
        "Faster approval process for advisors",
        "Fewer revision cycles needed",
        "Educational feedback helps advisors learn"
      ]
    },
    workflowVisualization: {
      before: [
        "Advisor drafts (30 min)",
        "Compliance queue wait (1-2 days)",
        "Compliance review (30 min)",
        "Revision request (15 min)",
        "Advisor revises (20 min)",
        "Second review (20 min)"
      ],
      after: [
        "Advisor drafts (30 min)",
        "AI pre-screen (1 min)",
        "Advisor self-corrects (10 min)",
        "Compliance review (15 min)",
        "Approval (5 min)"
      ]
    },
    valueNarrative: [
      "Compliance teams can focus on complex issues and strategic guidance rather than catching routine language problems.",
      "Advisors learn compliance standards through AI feedback, improving quality of future drafts.",
      "Faster approval cycles mean more timely client communications, especially during time-sensitive market events."
    ],
    guardrails: [
      {
        title: "AI is Pre-Screen, Not Approval",
        description: "AI compliance checking assists but does not replace human compliance review and approval. Final sign-off remains with qualified compliance staff."
      },
      {
        title: "Keep AI Training Current",
        description: "Regularly update AI models with current regulations, firm policies, and emerging compliance issues to maintain effectiveness."
      },
      {
        title: "False Positives Expected",
        description: "AI may flag acceptable content or miss nuanced issues. Use as a first line of defense, not definitive judgment."
      },
      {
        title: "Document AI Limitations",
        description: "Clearly communicate to advisors what AI can and cannot catch, and maintain human accountability for compliance."
      }
    ],
    examples: [
      {
        title: "Performance Claims Screening",
        description: "Automatically flag unsubstantiated performance claims, missing disclosures, or inappropriate comparisons before compliance review."
      },
      {
        title: "Recommendation Language Check",
        description: "Identify language that could be construed as recommendations or guarantees in communications meant to be educational."
      },
      {
        title: "Disclosure Verification",
        description: "Ensure required disclosures are included in client communications based on content type and firm policies."
      }
    ]
  },
  "advisor-onboarding": {
    title: "Onboarding New Advisors",
    role: "RIA Principal",
    difficulty: "Basic",
    readTime: "6 min",
    description: "Accelerate new advisor training with AI-powered knowledge bases and best practice examples that provide instant access to institutional knowledge.",
    jobToBeDone: "Get new advisors up to speed on firm processes, communication standards, and best practices without monopolizing senior advisor time.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Assign senior advisor mentor",
        "Schedule recurring training sessions",
        "Provide binders of policies and procedures",
        "Answer repetitive questions individually",
        "Review and critique early work products",
        "Hope knowledge transfers effectively"
      ],
      timeRequired: "3-6 months to full productivity",
      painPoints: [
        "Expensive senior advisor time spent on training",
        "Inconsistent training quality depending on mentor",
        "New advisors hesitant to ask basic questions",
        "Difficult to access firm knowledge when needed"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "New advisor accesses AI knowledge base",
        "Asks questions and gets instant answers",
        "Reviews best practice examples on demand",
        "AI suggests relevant firm resources",
        "Senior advisors focus on relationship and strategic guidance"
      ],
      timeRequired: "1-2 months to full productivity",
      benefits: [
        "50% faster time to productivity",
        "Consistent training experience for all new hires",
        "24/7 access to firm knowledge",
        "Senior advisor time freed for high-value mentoring"
      ]
    },
    workflowVisualization: {
      before: [
        "Wait for mentor availability (varies)",
        "Schedule training session (60 min)",
        "Search through documents (30 min)",
        "Email questions (response time varies)",
        "Trial and error learning (hours)"
      ],
      after: [
        "Query AI knowledge base (2 min)",
        "Review best practice examples (10 min)",
        "Get instant answers (1 min)",
        "Focus mentor time on strategy (30 min)"
      ]
    },
    valueNarrative: [
      "New advisors contribute revenue-generating work weeks earlier, improving ROI on hiring.",
      "Senior advisors can mentor more effectively by focusing on judgment and relationships, not procedural questions.",
      "Consistent onboarding experience ensures all advisors internalize the same quality standards and firm culture."
    ],
    guardrails: [
      {
        title: "Human Mentorship Still Essential",
        description: "AI provides knowledge access, but cannot replace relationship-based mentoring, cultural integration, and judgment development."
      },
      {
        title: "Keep Knowledge Base Current",
        description: "Regularly update AI training data with new policies, procedures, and best practices to ensure new advisors receive current information."
      },
      {
        title: "Monitor Learning Progress",
        description: "Track which questions new advisors ask most frequently to identify gaps in training materials or processes that need improvement."
      },
      {
        title: "Escalation Path for Complex Issues",
        description: "Ensure new advisors know when to escalate beyond AI to human experts for complex, nuanced, or sensitive situations."
      }
    ],
    examples: [
      {
        title: "Firm Process Q&A",
        description: "Instant answers to questions about account opening, trading procedures, compliance requirements, and operational workflows."
      },
      {
        title: "Communication Best Practices",
        description: "Access to examples of excellent client emails, meeting summaries, and portfolio commentary with explanations of what makes them effective."
      },
      {
        title: "Technical Troubleshooting",
        description: "Quick help with software, systems, and tools without waiting for IT or senior advisor assistance."
      }
    ]
  },
  "practice-insights": {
    title: "Practice Management Insights",
    role: "RIA Principal",
    difficulty: "Advanced",
    readTime: "8 min",
    description: "Analyze firm-wide communication patterns, advisor productivity, and client engagement data to identify opportunities and risks before they become problems.",
    jobToBeDone: "Gain actionable insights into practice health, advisor performance, and client satisfaction without manual data analysis or waiting for quarterly reviews.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Export data from multiple systems",
        "Manual analysis in spreadsheets",
        "Create reports and visualizations",
        "Identify patterns and outliers",
        "Schedule management meetings to review",
        "Implement changes based on lagging indicators"
      ],
      timeRequired: "8-16 hours per month",
      painPoints: [
        "Insights arrive too late to be actionable",
        "Manual analysis is time-consuming and error-prone",
        "Difficult to spot subtle patterns across large datasets",
        "Inconsistent metrics and reporting approaches"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "AI continuously monitors practice metrics",
        "Identifies patterns, trends, and anomalies",
        "Generates automated insights and alerts",
        "Principals review prioritized recommendations",
        "Take proactive action on leading indicators"
      ],
      timeRequired: "2-3 hours per month",
      benefits: [
        "75% time savings on practice analysis",
        "Earlier identification of issues and opportunities",
        "Data-driven coaching and resource allocation",
        "Proactive rather than reactive management"
      ]
    },
    workflowVisualization: {
      before: [
        "Collect data from systems (120 min)",
        "Clean and organize (90 min)",
        "Analyze patterns (180 min)",
        "Create reports (90 min)",
        "Management review (60 min)"
      ],
      after: [
        "AI generates insights (5 min)",
        "Review key alerts (30 min)",
        "Deep dive on priorities (60 min)",
        "Action planning (30 min)"
      ]
    },
    valueNarrative: [
      "Principals can manage larger advisor teams effectively by focusing attention where it's needed most.",
      "Early warning signals allow intervention before clients leave or performance issues compound.",
      "Data-driven decisions about hiring, training, and resource allocation improve firm profitability and advisor satisfaction."
    ],
    guardrails: [
      {
        title: "Context Required for Interpretation",
        description: "AI identifies patterns but principals must apply context and judgment. Metrics alone don't tell the full story of advisor performance or client satisfaction."
      },
      {
        title: "Privacy and Fairness Concerns",
        description: "Be transparent with advisors about what's being monitored and how data is used. Avoid creating surveillance culture that undermines trust."
      },
      {
        title: "Avoid Over-Optimization",
        description: "Not everything meaningful can be measured. Balance data-driven insights with qualitative factors like culture, relationships, and long-term strategy."
      },
      {
        title: "Validate AI Insights",
        description: "Spot-check AI-generated insights against reality before taking action. Algorithms can identify correlations that aren't causal."
      }
    ],
    examples: [
      {
        title: "At-Risk Client Identification",
        description: "Detect declining engagement patterns (fewer touchpoints, shorter meetings, less responsive) that predict client attrition."
      },
      {
        title: "Advisor Productivity Analysis",
        description: "Identify coaching opportunities by comparing advisor efficiency on routine tasks, meeting preparation, and client communication."
      },
      {
        title: "Service Model Optimization",
        description: "Analyze which client segments require disproportionate service time relative to revenue, informing service model redesign."
      }
    ]
  },
  "client-segmentation": {
    title: "Client Segmentation Strategies",
    role: "RIA Principal",
    difficulty: "Intermediate",
    readTime: "7 min",
    description: "Use AI to identify meaningful client segments and service model opportunities based on behavior, needs, and profitability patterns.",
    jobToBeDone: "Design targeted service models that improve profitability and client satisfaction without relying on simplistic AUM-based tiering.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Export client database to spreadsheet",
        "Segment by AUM and revenue",
        "Manually review characteristics of each tier",
        "Design service models based on gut feel",
        "Implement across firm",
        "Hope it improves economics"
      ],
      timeRequired: "20-40 hours for initial segmentation",
      painPoints: [
        "AUM-based tiers miss meaningful differences in client needs",
        "Manual analysis can't process complex behavioral patterns",
        "Service models often feel arbitrary to clients and advisors",
        "Difficult to identify profitable micro-segments"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "AI analyzes client data across multiple dimensions",
        "Identifies natural clusters based on behavior and needs",
        "Generates segment profiles with characteristics",
        "Recommends differentiated service models",
        "Test and refine with firm leadership"
      ],
      timeRequired: "4-8 hours for initial segmentation",
      benefits: [
        "Discover 3-5 meaningful segments vs. simple AUM tiers",
        "Data-driven service model design",
        "Improved profitability and client satisfaction",
        "Easier to explain and implement across firm"
      ]
    },
    workflowVisualization: {
      before: [
        "Extract and clean data (180 min)",
        "Manual clustering attempts (240 min)",
        "Leadership debates (120 min)",
        "Service model design (300 min)",
        "Documentation (60 min)"
      ],
      after: [
        "AI clustering analysis (10 min)",
        "Review segment profiles (60 min)",
        "Refine with business context (90 min)",
        "Service model design (120 min)"
      ]
    },
    valueNarrative: [
      "Firms discover that their 'mass affluent' segment actually contains distinct groups with different service needs and profitability.",
      "Targeted service models allow firms to serve more clients profitably while improving experience for best-fit relationships.",
      "Advisors appreciate having clear guidance on how to serve different client types rather than one-size-fits-all approach."
    ],
    guardrails: [
      {
        title: "Validate Segments with Advisors",
        description: "AI-identified segments must make intuitive sense to advisors who work with clients daily. Purely statistical clusters may not be actionable."
      },
      {
        title: "Privacy and Data Ethics",
        description: "Ensure client data analysis complies with privacy policies and ethical standards. Be transparent about how client data informs service models."
      },
      {
        title: "Avoid Over-Segmentation",
        description: "Too many segments create operational complexity. Focus on 3-5 meaningful, distinctive groups that warrant different service approaches."
      },
      {
        title: "Monitor Segment Migration",
        description: "Track how clients move between segments over time and adjust service models accordingly. Segments aren't static."
      }
    ],
    examples: [
      {
        title: "Behavioral Segmentation",
        description: "Identify segments like 'hands-off delegators' vs. 'engaged co-pilots' who need very different communication frequency and depth."
      },
      {
        title: "Life Stage Clustering",
        description: "Discover natural groupings around retirement transition, wealth accumulation, and legacy planning that cut across AUM tiers."
      },
      {
        title: "Service Intensity Analysis",
        description: "Identify high-maintenance vs. low-touch clients to design appropriate service models that balance profitability and satisfaction."
      }
    ]
  },
  "research-synthesis": {
    title: "Research Synthesis",
    role: "CIO / Investment Committee",
    difficulty: "Intermediate",
    readTime: "7 min",
    description: "Distill lengthy research reports into executive summaries and client-ready insights that make institutional thinking accessible.",
    jobToBeDone: "Transform complex institutional research into multiple audience-appropriate versions without spending days on rewriting.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Write comprehensive institutional research",
        "Manually create executive summary",
        "Draft separate advisor-facing version",
        "Write client-appropriate version",
        "Review all versions for consistency",
        "Distribute through multiple channels"
      ],
      timeRequired: "8-12 hours per research piece",
      painPoints: [
        "Research often too technical for end audience",
        "Time-consuming to create multiple versions",
        "Key insights buried in lengthy documents",
        "Inconsistent messaging across versions"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Write single institutional research piece",
        "AI generates audience-appropriate versions",
        "Creates executive summary with key takeaways",
        "Review and refine outputs",
        "Distribute appropriate versions to each audience"
      ],
      timeRequired: "2-3 hours per research piece",
      benefits: [
        "75% time savings on research distribution",
        "Consistent messaging across all versions",
        "Better insight accessibility for all audiences",
        "More research output with same resources"
      ]
    },
    workflowVisualization: {
      before: [
        "Write full research (240 min)",
        "Create exec summary (60 min)",
        "Advisor version (90 min)",
        "Client version (120 min)",
        "Consistency review (30 min)"
      ],
      after: [
        "Write full research (240 min)",
        "AI generates versions (5 min)",
        "Review and refine (45 min)",
        "Final approval (15 min)"
      ]
    },
    valueNarrative: [
      "Investment teams can publish 3x more client-facing insights with the same research effort.",
      "Advisors receive actionable talking points instead of being overwhelmed by institutional reports.",
      "Clients benefit from sophisticated thinking translated into accessible, relevant insights."
    ],
    guardrails: [
      {
        title: "Verify Accuracy Across Versions",
        description: "Ensure simplified versions don't distort the original research conclusions or create misleading impressions."
      },
      {
        title: "Maintain Appropriate Nuance",
        description: "Client-facing versions should be accessible but not oversimplified. Don't sacrifice important caveats and limitations."
      },
      {
        title: "Compliance Review All Versions",
        description: "Each audience version requires compliance review, especially client-facing materials that may be considered marketing."
      },
      {
        title: "CIO Final Approval",
        description: "Investment leadership must approve all versions to ensure they accurately represent firm views and positioning."
      }
    ],
    examples: [
      {
        title: "Quarterly Market Outlook",
        description: "Transform detailed economic analysis into executive summary, advisor talking points, and client-appropriate market perspective."
      },
      {
        title: "Thematic Research Papers",
        description: "Distill deep-dive research on topics like ESG, inflation, or geopolitical risk into accessible insights for different audiences."
      },
      {
        title: "Asset Class Views",
        description: "Translate technical positioning rationale into clear explanations of why portfolios are positioned as they are."
      }
    ]
  },
  "committee-docs": {
    title: "Investment Committee Documentation",
    role: "CIO / Investment Committee",
    difficulty: "Basic",
    readTime: "6 min",
    description: "Generate meeting summaries, decision documentation, and action items efficiently from committee discussions and materials.",
    jobToBeDone: "Capture investment committee decisions and rationale accurately without spending hours on meeting minutes and documentation.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Take notes during IC meeting",
        "Review meeting materials and presentations",
        "Draft meeting summary from scratch",
        "Document all decisions and rationale",
        "Identify and assign action items",
        "Circulate for review and corrections"
      ],
      timeRequired: "3-4 hours per meeting",
      painPoints: [
        "Note-taking distracts from meeting participation",
        "Difficult to capture nuanced discussions accurately",
        "Time-consuming post-meeting documentation",
        "Action items sometimes lost or unclear"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Record meeting discussion (with consent)",
        "AI generates meeting summary with key points",
        "Extracts decisions, rationale, and action items",
        "Review and refine for accuracy",
        "Distribute to committee and stakeholders"
      ],
      timeRequired: "30-45 minutes per meeting",
      benefits: [
        "80% time savings on meeting documentation",
        "More complete and accurate capture of discussions",
        "Clear action items with assignments",
        "Better participation during meetings"
      ]
    },
    workflowVisualization: {
      before: [
        "Meeting with notes (90 min)",
        "Review materials (30 min)",
        "Draft summary (75 min)",
        "Identify action items (20 min)",
        "Review and edit (30 min)"
      ],
      after: [
        "Meeting without note distraction (90 min)",
        "AI generates summary (5 min)",
        "Review and refine (25 min)",
        "Approve and distribute (10 min)"
      ]
    },
    valueNarrative: [
      "CIOs and committee members can focus fully on discussion and decision-making rather than note-taking.",
      "More accurate documentation of investment rationale supports better governance and regulatory compliance.",
      "Clear action item tracking ensures follow-through on committee decisions."
    ],
    guardrails: [
      {
        title: "Committee Consent Required",
        description: "Recording meetings requires consent from all participants. Establish clear policies about recording, storage, and access."
      },
      {
        title: "Review for Sensitive Content",
        description: "Ensure meeting summaries don't include sensitive information about specific managers, trades, or proprietary strategies."
      },
      {
        title: "Human Review Essential",
        description: "AI may misinterpret technical discussion or miss important nuance. Always review and correct before distribution."
      },
      {
        title: "Retention and Access Policies",
        description: "Establish clear policies for how long recordings and transcripts are retained and who can access them."
      }
    ],
    examples: [
      {
        title: "Monthly IC Meeting Minutes",
        description: "Comprehensive meeting summaries that capture portfolio positioning decisions, manager reviews, and strategic discussions."
      },
      {
        title: "Special Topic Deep Dives",
        description: "Document detailed committee discussions on special topics like new asset classes or strategy changes."
      },
      {
        title: "Action Item Tracking",
        description: "Automatically extract and track action items from meetings with clear assignments and deadlines."
      }
    ]
  },
  "market-commentary": {
    title: "Market Commentary Distribution",
    role: "CIO / Investment Committee",
    difficulty: "Intermediate",
    readTime: "7 min",
    description: "Adapt institutional market views for different audience segments, ensuring advisors and end clients receive appropriate depth and context.",
    jobToBeDone: "Distribute timely market commentary that resonates with different audiences without writing completely separate pieces for each.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Write institutional market perspective",
        "Manually create advisor version with talking points",
        "Write separate client-appropriate version",
        "Review for tone and technical level",
        "Coordinate distribution across channels",
        "Hope advisors use it effectively"
      ],
      timeRequired: "6-8 hours per commentary",
      painPoints: [
        "Time pressure during volatile markets",
        "Difficult to hit right tone for each audience",
        "Advisors often don't know how to use IC commentary",
        "Client version may oversimplify or lose key points"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Write core market perspective",
        "AI adapts for advisor and client audiences",
        "Generates suggested talking points",
        "Review and refine messaging",
        "Distribute audience-appropriate versions"
      ],
      timeRequired: "2-3 hours per commentary",
      benefits: [
        "65% faster market commentary production",
        "Consistent messaging across all versions",
        "Actionable advisor talking points included",
        "More responsive during time-sensitive events"
      ]
    },
    workflowVisualization: {
      before: [
        "Write IC perspective (150 min)",
        "Create advisor version (90 min)",
        "Write client version (120 min)",
        "Review and edit (45 min)",
        "Distribute (15 min)"
      ],
      after: [
        "Write core perspective (150 min)",
        "AI generates versions (5 min)",
        "Review and refine (35 min)",
        "Final approval (15 min)"
      ]
    },
    valueNarrative: [
      "Investment teams can respond to market events within hours instead of days, when timeliness matters most.",
      "Advisors receive ready-to-use talking points that accurately reflect firm views without requiring translation.",
      "Clients appreciate receiving timely, relevant market perspective that doesn't overwhelm with technical jargon."
    ],
    guardrails: [
      {
        title: "Consistency Across Versions",
        description: "Ensure all versions convey the same core message and positioning. Simplification shouldn't change the fundamental view."
      },
      {
        title: "Compliance Approval",
        description: "All client-facing versions require compliance review before distribution, especially content that could be considered marketing."
      },
      {
        title: "Market Data Accuracy",
        description: "Verify all market data, returns, and statistics are accurate across all versions before distribution."
      },
      {
        title: "Avoid Prediction Creep",
        description: "Ensure client versions don't inadvertently make stronger claims or predictions than the institutional version supports."
      }
    ],
    examples: [
      {
        title: "Fed Decision Response",
        description: "Rapid commentary on Fed actions adapted for IC documentation, advisor guidance, and client communication."
      },
      {
        title: "Quarterly Market Update",
        description: "Comprehensive quarterly perspective delivered as detailed IC report, advisor talking points, and client-friendly summary."
      },
      {
        title: "Crisis Communication",
        description: "During market volatility, quickly distribute calming, informed perspective appropriate for each audience."
      }
    ]
  },
  "positioning-narratives": {
    title: "Portfolio Positioning Narratives",
    role: "CIO / Investment Committee",
    difficulty: "Advanced",
    readTime: "8 min",
    description: "Explain complex positioning decisions in clear, compelling language that builds confidence in investment strategy.",
    jobToBeDone: "Help advisors and clients understand why portfolios are positioned as they are without requiring deep investment expertise.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Document investment positioning decisions",
        "Translate technical rationale into plain language",
        "Create multiple versions for different audiences",
        "Develop talking points and Q&A",
        "Review with investment team",
        "Distribute and hope for accurate communication"
      ],
      timeRequired: "10-15 hours per major positioning change",
      painPoints: [
        "Difficult to explain complex strategies simply",
        "Advisors may misrepresent positioning to clients",
        "Clients don't understand or trust unfamiliar positioning",
        "Time-consuming to create comprehensive materials"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Document positioning decision and rationale",
        "AI generates clear explanations for different audiences",
        "Creates Q&A for common questions",
        "Review for accuracy and tone",
        "Distribute comprehensive positioning package"
      ],
      timeRequired: "3-4 hours per major positioning change",
      benefits: [
        "70% faster positioning communication development",
        "Consistent, accurate explanation across firm",
        "Proactive Q&A prevents miscommunication",
        "Builds client confidence in strategy"
      ]
    },
    workflowVisualization: {
      before: [
        "Document decision (90 min)",
        "Write explanations (240 min)",
        "Develop Q&A (120 min)",
        "Create talking points (90 min)",
        "Team review (60 min)"
      ],
      after: [
        "Document decision (90 min)",
        "AI generates materials (10 min)",
        "Review and refine (75 min)",
        "Team alignment (30 min)"
      ]
    },
    valueNarrative: [
      "Complex positioning changes can be communicated clearly and consistently across the entire organization.",
      "Advisors feel confident explaining unconventional or sophisticated strategies to clients.",
      "Clients understand and support portfolio positioning even when it differs from conventional wisdom."
    ],
    guardrails: [
      {
        title: "Investment Team Approval",
        description: "All positioning narratives must be reviewed and approved by investment leadership to ensure accurate representation of strategy."
      },
      {
        title: "Avoid Oversimplification",
        description: "Simplified explanations must remain accurate. Don't sacrifice important nuance or create misleading impressions of risk."
      },
      {
        title: "Scenario Planning",
        description: "Include discussion of what could go wrong or change the positioning, not just the bull case for current strategy."
      },
      {
        title: "Update as Positioning Evolves",
        description: "Positioning narratives must be updated as strategy evolves. Outdated explanations create confusion and mistrust."
      }
    ],
    examples: [
      {
        title: "Defensive Positioning Explanation",
        description: "Articulate rationale for holding more cash or defensive assets in a way that builds confidence rather than creating fear."
      },
      {
        title: "Alternative Investment Introduction",
        description: "Explain new or unfamiliar asset class exposures in language that helps clients understand benefits and risks."
      },
      {
        title: "Active Management Rationale",
        description: "Communicate value proposition of active management and why certain opportunities warrant active vs. passive approaches."
      }
    ]
  },
  "crisis-communication": {
    title: "Crisis Communication",
    role: "CIO / Investment Committee",
    difficulty: "Advanced",
    readTime: "8 min",
    description: "Rapidly draft timely, measured responses to market volatility that calm clients while providing substantive perspective.",
    jobToBeDone: "Respond to market crises with speed and substance, delivering calming yet honest perspective before anxiety calls overwhelm advisors.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Emergency IC meeting to assess situation",
        "Draft market perspective under time pressure",
        "Multiple rounds of leadership review",
        "Compliance approval in crisis mode",
        "Distribute to advisors",
        "Often arrives too late to prevent anxiety calls"
      ],
      timeRequired: "4-8 hours during crisis",
      painPoints: [
        "Time pressure creates quality and compliance risks",
        "Difficult to strike right tone between calming and honest",
        "Slow response increases client anxiety",
        "Inconsistent messaging if advisors respond independently"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Quick IC alignment on key messages",
        "AI generates draft crisis communication",
        "Rapid review and refinement",
        "Fast-track compliance review",
        "Immediate distribution to advisors"
      ],
      timeRequired: "1-2 hours during crisis",
      benefits: [
        "75% faster crisis response time",
        "Consistent, measured tone",
        "Comprehensive talking points for advisors",
        "Reduced inbound anxiety calls"
      ]
    },
    workflowVisualization: {
      before: [
        "Emergency meeting (60 min)",
        "Draft from scratch (120 min)",
        "Multiple reviews (90 min)",
        "Compliance approval (45 min)",
        "Distribution (15 min)"
      ],
      after: [
        "Quick IC alignment (30 min)",
        "AI draft generation (5 min)",
        "Review and refine (30 min)",
        "Fast compliance review (20 min)",
        "Immediate distribution (5 min)"
      ]
    },
    valueNarrative: [
      "Firms can respond to market crises within 2 hours instead of next-day, when client anxiety is highest.",
      "Advisors receive substantive guidance before clients call, preventing miscommunication or panic.",
      "Consistent, timely crisis communication strengthens client confidence in firm leadership during difficult periods."
    ],
    guardrails: [
      {
        title: "Avoid Panic or Overconfidence",
        description: "Crisis communications must strike careful balance between calming clients and being honest about uncertainty and risks."
      },
      {
        title: "Facts Over Predictions",
        description: "Focus on what is known and how portfolios are positioned. Avoid making predictions about what happens next during uncertain times."
      },
      {
        title: "Compliance in Crisis Mode",
        description: "Even during crises, compliance review is essential. Plan for fast-track review process that maintains standards."
      },
      {
        title: "Leadership Alignment Critical",
        description: "Ensure all senior leaders are aligned on message before distribution. Inconsistent communication from leadership creates more anxiety."
      }
    ],
    examples: [
      {
        title: "Market Selloff Response",
        description: "Rapid perspective on sudden market declines that explains what's happening and how portfolios are positioned to weather volatility."
      },
      {
        title: "Geopolitical Event Commentary",
        description: "Measured response to geopolitical crises that acknowledges uncertainty while providing relevant investment perspective."
      },
      {
        title: "Banking System Stress",
        description: "Crisis communication during financial system stress that addresses client concerns about safety while maintaining appropriate perspective."
      }
    ]
  },
  "inquiry-responses": {
    title: "Client Inquiry Responses",
    role: "Client Service & Operations",
    difficulty: "Basic",
    readTime: "5 min",
    description: "Draft professional responses to common account and service questions quickly and accurately while maintaining consistent quality.",
    jobToBeDone: "Respond to routine client service inquiries promptly and professionally without spending excessive time on each individual response.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Read and understand client inquiry",
        "Look up account information across systems",
        "Draft response from scratch or modify old emails",
        "Verify accuracy of information provided",
        "Review for tone and professionalism",
        "Send response"
      ],
      timeRequired: "10-20 minutes per inquiry",
      painPoints: [
        "Repetitive inquiries require repetitive responses",
        "Quality inconsistent across team members",
        "Time-consuming to maintain professional tone",
        "Risk of errors when rushing through responses"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "AI reads inquiry and accesses relevant account data",
        "Generates professional draft response",
        "Team member reviews and personalizes",
        "Quick accuracy check",
        "Send with confidence"
      ],
      timeRequired: "3-5 minutes per inquiry",
      benefits: [
        "70% time savings on routine inquiries",
        "Consistent professional quality",
        "Faster response times improve client satisfaction",
        "Reduced error rates"
      ]
    },
    workflowVisualization: {
      before: [
        "Read inquiry (2 min)",
        "Look up information (5 min)",
        "Draft response (8 min)",
        "Review and edit (3 min)",
        "Double-check data (2 min)"
      ],
      after: [
        "AI drafts response (1 min)",
        "Review draft (2 min)",
        "Personalize (1 min)",
        "Final approval (1 min)"
      ]
    },
    valueNarrative: [
      "Client service teams can handle 2-3x more inquiries with the same headcount.",
      "Faster response times create better client experience without sacrificing quality.",
      "Consistent professionalism across all team members regardless of experience level."
    ],
    guardrails: [
      {
        title: "Verify Account Information",
        description: "Always confirm account numbers, balances, and transaction details are accurate before sending. AI may pull outdated or incorrect data."
      },
      {
        title: "Add Personal Touch",
        description: "Never send purely AI-generated responses. Add personalization that shows you understand the specific client situation."
      },
      {
        title: "Escalate Complex Issues",
        description: "Use AI for routine inquiries only. Complex problems, unhappy clients, or sensitive situations require full human attention."
      },
      {
        title: "Monitor Response Quality",
        description: "Regularly review AI-assisted responses to ensure quality standards are maintained and identify areas for improvement."
      }
    ],
    examples: [
      {
        title: "Balance and Transaction Inquiries",
        description: "Quick, professional responses to questions about account balances, recent transactions, and statement details."
      },
      {
        title: "Beneficiary and Registration Questions",
        description: "Clear explanations of account registration, beneficiary designations, and how to make changes."
      },
      {
        title: "Distribution and Transfer Requests",
        description: "Professional responses that outline the process, required documents, and timelines for distributions or transfers."
      }
    ]
  },
  "document-prep": {
    title: "Document Preparation",
    role: "Client Service & Operations",
    difficulty: "Basic",
    readTime: "6 min",
    description: "Generate standard forms, letters, and documentation with pre-filled client data, reducing errors and preparation time.",
    jobToBeDone: "Produce accurate, professional client documents without manual data entry and formatting that's prone to errors.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Find correct document template",
        "Manually enter client information",
        "Look up account details across systems",
        "Format document appropriately",
        "Review for errors and typos",
        "Print, mail, or send electronically"
      ],
      timeRequired: "15-30 minutes per document",
      painPoints: [
        "Manual data entry creates error risk",
        "Time-consuming for high-volume documents",
        "Inconsistent formatting across team",
        "Difficult to track document versions"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Select document type needed",
        "AI pulls relevant client and account data",
        "Generates completed, formatted document",
        "Quick review for accuracy",
        "Approve and distribute"
      ],
      timeRequired: "3-5 minutes per document",
      benefits: [
        "80% time savings on document preparation",
        "Near-zero data entry errors",
        "Consistent formatting and branding",
        "Automatic tracking and version control"
      ]
    },
    workflowVisualization: {
      before: [
        "Find template (3 min)",
        "Look up client data (6 min)",
        "Manual data entry (12 min)",
        "Format document (4 min)",
        "Error checking (5 min)"
      ],
      after: [
        "Select document type (1 min)",
        "AI generates document (1 min)",
        "Review accuracy (2 min)",
        "Approve and send (1 min)"
      ]
    },
    valueNarrative: [
      "Operations teams can process account openings, changes, and documentation 3-4x faster.",
      "Elimination of data entry errors reduces rework and improves client experience.",
      "Consistent, professional documentation strengthens brand and reduces compliance risk."
    ],
    guardrails: [
      {
        title: "Verify All Data Fields",
        description: "Always review auto-populated data for accuracy, especially critical fields like account numbers, tax IDs, and legal names."
      },
      {
        title: "Maintain Template Control",
        description: "Ensure document templates are kept current with regulatory requirements and firm standards. Outdated templates create risk."
      },
      {
        title: "Compliance Review for New Documents",
        description: "Any new document templates must go through compliance review before being added to the automated system."
      },
      {
        title: "Secure Data Handling",
        description: "Ensure AI systems handling client data comply with firm security policies and don't expose sensitive information."
      }
    ],
    examples: [
      {
        title: "Account Opening Packages",
        description: "Complete account opening documents with all client information pre-filled and ready for signature."
      },
      {
        title: "Beneficiary Change Forms",
        description: "Accurate beneficiary designation forms with current account and registration information."
      },
      {
        title: "Distribution Request Letters",
        description: "Professional confirmation letters for distribution requests with all details correctly documented."
      }
    ]
  },
  "onboarding-communication": {
    title: "Onboarding Communication",
    role: "Client Service & Operations",
    difficulty: "Intermediate",
    readTime: "7 min",
    description: "Create personalized welcome sequences and onboarding materials for new clients that set proper expectations and build relationships.",
    jobToBeDone: "Deliver consistent, high-quality onboarding experience that educates new clients and sets up long-term relationship success.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Draft welcome email from template",
        "Manually personalize with client details",
        "Create custom onboarding checklist",
        "Schedule follow-up communications",
        "Track completion of onboarding steps",
        "Hope nothing falls through the cracks"
      ],
      timeRequired: "60-90 minutes per new client",
      painPoints: [
        "Inconsistent onboarding experience",
        "Easy to miss steps or forget follow-ups",
        "Time-consuming personalization",
        "Difficult to track onboarding progress"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "AI generates personalized welcome sequence",
        "Creates customized onboarding checklist",
        "Schedules appropriate follow-up communications",
        "Review and approve sequence",
        "Automated tracking of completion"
      ],
      timeRequired: "15-20 minutes per new client",
      benefits: [
        "75% time savings on onboarding setup",
        "Consistent excellent experience for all clients",
        "Automated tracking prevents missed steps",
        "Better personalization with less effort"
      ]
    },
    workflowVisualization: {
      before: [
        "Draft welcome email (20 min)",
        "Create checklist (15 min)",
        "Personalize materials (25 min)",
        "Schedule follow-ups (10 min)",
        "Set up tracking (10 min)"
      ],
      after: [
        "AI generates sequence (3 min)",
        "Review and customize (10 min)",
        "Approve materials (3 min)",
        "Auto-tracking setup (1 min)"
      ]
    },
    valueNarrative: [
      "Every new client receives a thoughtful, comprehensive onboarding experience regardless of team capacity.",
      "Reduced onboarding errors and missed steps create better first impressions and long-term retention.",
      "Operations teams can handle growth without proportional headcount increases."
    ],
    guardrails: [
      {
        title: "Personalization Essential",
        description: "Don't send generic automated sequences. Use AI for structure but ensure each client feels individually welcomed."
      },
      {
        title: "Timing Sensitivity",
        description: "Not all clients need the same onboarding pace. Adjust automated sequences based on client sophistication and needs."
      },
      {
        title: "Human Touchpoints Critical",
        description: "Automate logistical communications but ensure key relationship moments include genuine human contact."
      },
      {
        title: "Monitor Completion Rates",
        description: "Track which onboarding steps clients complete and which they ignore to continuously improve the sequence."
      }
    ],
    examples: [
      {
        title: "New Client Welcome Series",
        description: "Multi-touch welcome sequence that introduces firm, explains processes, and sets expectations over first 30-60 days."
      },
      {
        title: "Account Setup Guidance",
        description: "Step-by-step communications guiding clients through account setup, document submission, and funding processes."
      },
      {
        title: "Onboarding Milestone Celebrations",
        description: "Automated recognition of onboarding milestones (first investment, completed paperwork, etc.) that build engagement."
      }
    ]
  },
  "issue-resolution": {
    title: "Service Issue Resolution",
    role: "Client Service & Operations",
    difficulty: "Intermediate",
    readTime: "7 min",
    description: "Draft empathetic, solution-focused responses to service concerns that rebuild trust and resolve issues effectively.",
    jobToBeDone: "Respond to unhappy clients with professionalism and empathy while resolving their concerns without escalation.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Understand client complaint and history",
        "Research what went wrong",
        "Draft response balancing empathy and solution",
        "Review with manager for tone and approach",
        "Send response and track resolution",
        "Follow up to ensure satisfaction"
      ],
      timeRequired: "45-90 minutes per issue",
      painPoints: [
        "Difficult to strike right empathetic tone",
        "Time pressure can lead to defensive responses",
        "Inconsistent handling across team",
        "Some issues escalate unnecessarily"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "AI analyzes issue and suggests resolution approach",
        "Generates empathetic response draft",
        "Includes specific solution steps",
        "Team member reviews and personalizes",
        "Send with appropriate follow-up plan"
      ],
      timeRequired: "15-20 minutes per issue",
      benefits: [
        "70% time savings on issue resolution",
        "Consistently empathetic, professional tone",
        "Solution-focused approach reduces escalations",
        "Better client retention after service issues"
      ]
    },
    workflowVisualization: {
      before: [
        "Investigate issue (20 min)",
        "Draft response (30 min)",
        "Manager review (15 min)",
        "Revise (10 min)",
        "Set up follow-up (5 min)"
      ],
      after: [
        "AI analyzes and drafts (3 min)",
        "Review and customize (10 min)",
        "Manager quick review (3 min)",
        "Send with auto follow-up (2 min)"
      ]
    },
    valueNarrative: [
      "Service issues transform from relationship risks into opportunities to demonstrate commitment to client satisfaction.",
      "Faster, more empathetic responses prevent escalation and reduce client churn.",
      "Consistent quality in issue handling builds reputation for excellent service recovery."
    ],
    guardrails: [
      {
        title: "Genuine Empathy Required",
        description: "AI can suggest empathetic language, but responses must feel genuine. Don't send formulaic apologies that feel corporate."
      },
      {
        title: "Ownership and Accountability",
        description: "Take responsibility appropriately without over-apologizing or making promises the firm can't keep."
      },
      {
        title: "Escalation When Needed",
        description: "Some issues require senior attention. Don't use AI to avoid proper escalation of serious problems."
      },
      {
        title: "Learn from Issues",
        description: "Track common service issues to identify systemic problems that need process improvements, not just better responses."
      }
    ],
    examples: [
      {
        title: "Transaction Error Resolution",
        description: "Empathetic response acknowledging error, explaining what happened, outlining correction steps, and preventing recurrence."
      },
      {
        title: "Communication Breakdown Recovery",
        description: "Response to clients who felt ignored or misunderstood that rebuilds trust and improves future communication."
      },
      {
        title: "Expectation Misalignment",
        description: "Handle situations where service delivered didn't match client expectations with honesty and path forward."
      }
    ]
  },
  "knowledge-base": {
    title: "Knowledge Base Management",
    role: "Client Service & Operations",
    difficulty: "Advanced",
    readTime: "8 min",
    description: "Maintain and query internal knowledge bases for faster issue resolution and consistent answers across the service team.",
    jobToBeDone: "Access firm knowledge instantly to answer client questions accurately without searching through documents or waiting for senior staff.",
    traditionalApproach: {
      title: "The Manual Process",
      steps: [
        "Search email history for similar situations",
        "Check shared drive for procedure documents",
        "Ask colleagues if they know the answer",
        "Wait for senior staff response",
        "Document answer for future reference",
        "Hope to remember next time"
      ],
      timeRequired: "20-60 minutes to find answers",
      painPoints: [
        "Knowledge trapped in individual team members",
        "Time-consuming searches through documents",
        "Inconsistent answers to same questions",
        "New team members have long learning curve"
      ]
    },
    aiEnabledApproach: {
      title: "AI-Assisted Workflow",
      steps: [
        "Query AI knowledge base with question",
        "Receive instant answer with source citations",
        "Review for current accuracy",
        "Provide answer to client",
        "AI learns from new situations automatically"
      ],
      timeRequired: "2-5 minutes to find answers",
      benefits: [
        "90% time savings on information lookup",
        "Consistent accurate answers across team",
        "New team members productive immediately",
        "Continuous learning from new situations"
      ]
    },
    workflowVisualization: {
      before: [
        "Search documents (15 min)",
        "Ask colleagues (10 min)",
        "Wait for response (30 min)",
        "Document for future (5 min)",
        "Respond to client (5 min)"
      ],
      after: [
        "Query knowledge base (1 min)",
        "Review answer (2 min)",
        "Confirm accuracy (1 min)",
        "Respond to client (1 min)"
      ]
    },
    valueNarrative: [
      "Client service teams can answer complex questions immediately instead of 'let me get back to you' delays.",
      "Institutional knowledge preserved and accessible even as team members come and go.",
      "Consistent, accurate answers improve client experience and reduce errors."
    ],
    guardrails: [
      {
        title: "Keep Knowledge Current",
        description: "Regularly update knowledge base with policy changes, new procedures, and evolving regulations. Outdated information creates risk."
      },
      {
        title: "Verify Critical Information",
        description: "For important or unusual situations, verify AI answers against source documents or escalate to experienced staff."
      },
      {
        title: "Human Judgment for Edge Cases",
        description: "Knowledge bases handle common situations well but struggle with unusual edge cases requiring human judgment."
      },
      {
        title: "Track Unanswered Questions",
        description: "Monitor which questions the knowledge base can't answer to identify gaps in documentation and training."
      }
    ],
    examples: [
      {
        title: "Policy and Procedure Lookup",
        description: "Instant answers to questions about firm policies, account procedures, and operational workflows."
      },
      {
        title: "Complex Situation Guidance",
        description: "Access to documented approaches for handling unusual client situations based on past precedent."
      },
      {
        title: "Regulatory Requirement Checking",
        description: "Quick lookup of regulatory requirements for specific account types, transactions, or client situations."
      }
    ]
  },
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const useCase = useCaseData[slug]

  if (!useCase) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-serif text-4xl text-[#1a1f36] mb-4">
            Use Case Not Found
          </h1>
          <Link href="/use-cases">
            <Button variant="primary">View All Use Cases</Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-[#6a6a6a]">{useCase.role}</span>
            <span className="text-[#6a6a6a]">•</span>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              useCase.difficulty === "Basic"
                ? "bg-green-100 text-green-700"
                : useCase.difficulty === "Intermediate"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-orange-100 text-orange-700"
            }`}>
              {useCase.difficulty}
            </span>
            <span className="text-[#6a6a6a]">•</span>
            <span className="text-sm text-[#6a6a6a]">{useCase.readTime} read</span>
          </div>

          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            {useCase.title}
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            {useCase.description}
          </p>
        </div>
      </div>

      {/* Job to Be Done */}
      <section className="py-12 bg-[#1a1f36] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-[#b8945f] flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-semibold text-lg mb-2 text-[#b8945f]">The Job to Be Done</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                {useCase.jobToBeDone}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-16 text-center">
            Traditional vs. AI-Enabled Approach
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Traditional */}
            <div className="bg-[#f5f5f0] border border-[#e5e5dc] rounded-lg p-8">
              <h3 className="font-semibold text-xl text-[#1a1f36] mb-6">
                {useCase.traditionalApproach.title}
              </h3>

              <div className="mb-6">
                <div className="text-sm text-[#6a6a6a] mb-3 uppercase tracking-wider">Process Steps</div>
                <ol className="space-y-3">
                  {useCase.traditionalApproach.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="font-semibold text-[#6a6a6a] flex-shrink-0">{idx + 1}.</span>
                      <span className="text-[#4a4a4a]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mb-6 p-4 bg-white rounded border border-[#e5e5dc]">
                <div className="text-sm font-medium text-[#1a1f36] mb-1">Time Required</div>
                <div className="text-2xl font-serif text-[#b8945f]">{useCase.traditionalApproach.timeRequired}</div>
              </div>

              <div>
                <div className="text-sm text-[#6a6a6a] mb-3 uppercase tracking-wider">Pain Points</div>
                <ul className="space-y-2">
                  {useCase.traditionalApproach.painPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#4a4a4a]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI-Enabled */}
            <div className="bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] text-white rounded-lg p-8 relative">
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#b8945f] rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-semibold text-xl mb-6">
                {useCase.aiEnabledApproach.title}
              </h3>

              <div className="mb-6">
                <div className="text-sm text-[#b8945f] mb-3 uppercase tracking-wider">Process Steps</div>
                <ol className="space-y-3">
                  {useCase.aiEnabledApproach.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="font-semibold text-[#b8945f] flex-shrink-0">{idx + 1}.</span>
                      <span className="text-white/90">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded border border-white/20">
                <div className="text-sm font-medium text-[#b8945f] mb-1">Time Required</div>
                <div className="text-2xl font-serif text-white">{useCase.aiEnabledApproach.timeRequired}</div>
              </div>

              <div>
                <div className="text-sm text-[#b8945f] mb-3 uppercase tracking-wider">Benefits</div>
                <ul className="space-y-2">
                  {useCase.aiEnabledApproach.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b8945f] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Narrative */}
      <section className="py-16 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl text-[#1a1f36] mb-8 text-center">
            The Business Impact
          </h2>
          <div className="space-y-6">
            {useCase.valueNarrative.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-[#4a4a4a] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Guardrails */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8945f]/10 border border-[#b8945f]/20 rounded-full mb-4">
              <Shield className="w-4 h-4 text-[#b8945f]" />
              <span className="text-sm text-[#b8945f] font-medium uppercase tracking-wider">
                Guardrails & Considerations
              </span>
            </div>
            <h2 className="font-serif text-3xl text-[#1a1f36]">
              Implementing Responsibly
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCase.guardrails.map((guardrail, idx) => (
              <div key={idx} className="bg-[#f5f5f0] border border-[#e5e5dc] rounded-lg p-6">
                <h3 className="font-semibold text-lg text-[#1a1f36] mb-3">
                  {guardrail.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  {guardrail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl mb-6">
            Try This Workflow in Our Simulator
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Experience this AI-enabled workflow step-by-step in a safe, interactive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Launch Simulator
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1a1f36]">
              View More Use Cases
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return [
    // Wealth Advisor
    { slug: "portfolio-commentary" },
    { slug: "meeting-prep" },
    { slug: "market-updates" },
    { slug: "email-drafting" },
    { slug: "performance-stories" },
    { slug: "tax-loss-communication" },
    // RIA Principal
    { slug: "communication-templates" },
    { slug: "compliance-review" },
    { slug: "advisor-onboarding" },
    { slug: "practice-insights" },
    { slug: "client-segmentation" },
    // CIO
    { slug: "research-synthesis" },
    { slug: "committee-docs" },
    { slug: "market-commentary" },
    { slug: "positioning-narratives" },
    { slug: "crisis-communication" },
    // Client Service
    { slug: "inquiry-responses" },
    { slug: "document-prep" },
    { slug: "onboarding-communication" },
    { slug: "issue-resolution" },
    { slug: "knowledge-base" },
  ]
}
