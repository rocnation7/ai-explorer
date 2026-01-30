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
  }
}

export default function UseCasePage({
  params,
}: {
  params: { slug: string }
}) {
  const useCase = useCaseData[params.slug]

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
    { slug: "portfolio-commentary" },
    { slug: "meeting-prep" },
  ]
}
