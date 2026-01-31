import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Users, Building2, TrendingUp, Headphones } from "lucide-react"

const useCases = [
  // Wealth Advisor
  {
    slug: "portfolio-commentary",
    title: "Personalized Portfolio Commentary",
    role: "Wealth Advisor",
    roleIcon: Users,
    difficulty: "Basic",
    description: "Generate tailored quarterly letters that speak to each client's specific holdings and goals.",
    timeSavings: "75% time savings",
  },
  {
    slug: "meeting-prep",
    title: "Client Meeting Preparation",
    role: "Wealth Advisor",
    roleIcon: Users,
    difficulty: "Basic",
    description: "Synthesize client data, recent interactions, and market context into pre-meeting briefings.",
    timeSavings: "60% time savings",
  },
  {
    slug: "market-updates",
    title: "Market Update Personalization",
    role: "Wealth Advisor",
    roleIcon: Users,
    difficulty: "Intermediate",
    description: "Transform general market commentary into client-specific implications and talking points.",
    timeSavings: "70% time savings",
  },
  {
    slug: "email-drafting",
    title: "Email Response Drafting",
    role: "Wealth Advisor",
    roleIcon: Users,
    difficulty: "Basic",
    description: "Generate professional, on-brand responses to common client inquiries.",
    timeSavings: "80% time savings",
  },
  {
    slug: "performance-stories",
    title: "Performance Attribution Stories",
    role: "Wealth Advisor",
    roleIcon: Users,
    difficulty: "Intermediate",
    description: "Translate complex performance data into clear, narrative explanations.",
    timeSavings: "75% time savings",
  },
  {
    slug: "tax-loss-communication",
    title: "Tax-Loss Harvesting Communication",
    role: "Wealth Advisor",
    roleIcon: Users,
    difficulty: "Advanced",
    description: "Create sophisticated yet accessible explanations of tax strategies executed in portfolios.",
    timeSavings: "75% time savings",
  },
  // RIA Principal
  {
    slug: "communication-templates",
    title: "Firm-Wide Communication Templates",
    role: "RIA Principal",
    roleIcon: Building2,
    difficulty: "Basic",
    description: "Create consistent, on-brand communication templates that advisors can personalize.",
    timeSavings: "70% time savings",
  },
  {
    slug: "compliance-review",
    title: "Compliance Review Assistance",
    role: "RIA Principal",
    roleIcon: Building2,
    difficulty: "Intermediate",
    description: "Pre-screen advisor communications for compliance red flags before final review.",
    timeSavings: "50% time savings",
  },
  {
    slug: "advisor-onboarding",
    title: "Onboarding New Advisors",
    role: "RIA Principal",
    roleIcon: Building2,
    difficulty: "Basic",
    description: "Accelerate new advisor training with AI-powered knowledge bases and best practice examples.",
    timeSavings: "50% faster productivity",
  },
  {
    slug: "practice-insights",
    title: "Practice Management Insights",
    role: "RIA Principal",
    roleIcon: Building2,
    difficulty: "Advanced",
    description: "Analyze firm-wide communication patterns, advisor productivity, and client engagement data.",
    timeSavings: "75% time savings",
  },
  {
    slug: "client-segmentation",
    title: "Client Segmentation Strategies",
    role: "RIA Principal",
    roleIcon: Building2,
    difficulty: "Intermediate",
    description: "Use AI to identify meaningful client segments and service model opportunities.",
    timeSavings: "80% time savings",
  },
  // CIO / Investment Committee
  {
    slug: "research-synthesis",
    title: "Research Synthesis",
    role: "CIO / Investment Committee",
    roleIcon: TrendingUp,
    difficulty: "Intermediate",
    description: "Distill lengthy research reports into executive summaries and client-ready insights.",
    timeSavings: "75% time savings",
  },
  {
    slug: "committee-docs",
    title: "Investment Committee Documentation",
    role: "CIO / Investment Committee",
    roleIcon: TrendingUp,
    difficulty: "Basic",
    description: "Generate meeting summaries, decision documentation, and action items efficiently.",
    timeSavings: "80% time savings",
  },
  {
    slug: "market-commentary",
    title: "Market Commentary Distribution",
    role: "CIO / Investment Committee",
    roleIcon: TrendingUp,
    difficulty: "Intermediate",
    description: "Adapt institutional market views for different audience segments.",
    timeSavings: "65% time savings",
  },
  {
    slug: "positioning-narratives",
    title: "Portfolio Positioning Narratives",
    role: "CIO / Investment Committee",
    roleIcon: TrendingUp,
    difficulty: "Advanced",
    description: "Explain complex positioning decisions in clear, compelling language.",
    timeSavings: "70% time savings",
  },
  {
    slug: "crisis-communication",
    title: "Crisis Communication",
    role: "CIO / Investment Committee",
    roleIcon: TrendingUp,
    difficulty: "Advanced",
    description: "Rapidly draft timely, measured responses to market volatility.",
    timeSavings: "75% time savings",
  },
  // Client Service & Operations
  {
    slug: "inquiry-responses",
    title: "Client Inquiry Responses",
    role: "Client Service & Operations",
    roleIcon: Headphones,
    difficulty: "Basic",
    description: "Draft professional responses to common account and service questions quickly.",
    timeSavings: "70% time savings",
  },
  {
    slug: "document-prep",
    title: "Document Preparation",
    role: "Client Service & Operations",
    roleIcon: Headphones,
    difficulty: "Basic",
    description: "Generate standard forms, letters, and documentation with pre-filled client data.",
    timeSavings: "80% time savings",
  },
  {
    slug: "onboarding-communication",
    title: "Onboarding Communication",
    role: "Client Service & Operations",
    roleIcon: Headphones,
    difficulty: "Intermediate",
    description: "Create personalized welcome sequences and onboarding materials for new clients.",
    timeSavings: "75% time savings",
  },
  {
    slug: "issue-resolution",
    title: "Service Issue Resolution",
    role: "Client Service & Operations",
    roleIcon: Headphones,
    difficulty: "Intermediate",
    description: "Draft empathetic, solution-focused responses to service concerns.",
    timeSavings: "70% time savings",
  },
  {
    slug: "knowledge-base",
    title: "Knowledge Base Management",
    role: "Client Service & Operations",
    roleIcon: Headphones,
    difficulty: "Advanced",
    description: "Maintain and query internal knowledge bases for faster issue resolution.",
    timeSavings: "90% time savings",
  },
]

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-32 pb-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            Use Cases Library
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            Practical AI workflows for wealth management professionals. Each use
            case includes before/after comparisons, implementation guidance, and
            compliance considerations.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Filter options would go here in production */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => {
              const RoleIcon = useCase.roleIcon
              return (
                <Link
                  key={useCase.slug}
                  href={`/use-cases/${useCase.slug}`}
                  className="group bg-white border border-[#e5e5dc] rounded-lg overflow-hidden hover:shadow-xl hover:border-[#b8945f]/30 transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-[#6a6a6a]">
                        <RoleIcon className="w-4 h-4" />
                        <span>{useCase.role}</span>
                      </div>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          useCase.difficulty === "Basic"
                            ? "bg-green-100 text-green-700"
                            : useCase.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {useCase.difficulty}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-[#1a1f36] mb-3 group-hover:text-[#b8945f] transition-colors">
                      {useCase.title}
                    </h3>

                    <p className="text-sm text-[#6a6a6a] mb-4 leading-relaxed">
                      {useCase.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#e5e5dc]">
                      <span className="text-sm font-medium text-[#b8945f]">
                        {useCase.timeSavings}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#b8945f] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              )
            })}

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
