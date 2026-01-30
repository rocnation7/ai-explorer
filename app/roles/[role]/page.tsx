import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, TrendingUp, Headphones, Clock, Target, Shield } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const roleData: Record<string, {
  title: string
  icon: any
  description: string
  mindsetShifts: Array<{ from: string; to: string }>
  useCases: Array<{
    title: string
    difficulty: string
    description: string
    slug: string
  }>
  stats: Array<{ label: string; value: string }>
}> = {
  "wealth-advisor": {
    title: "Wealth Advisor",
    icon: Users,
    description: "AI enables wealth advisors to deliver deeper personalization at scale, transforming routine tasks into high-value client interactions.",
    mindsetShifts: [
      {
        from: "Hours writing custom portfolio commentaries",
        to: "Minutes generating personalized, compliant narratives"
      },
      {
        from: "Generic market updates sent to all clients",
        to: "Tailored insights based on individual portfolios"
      },
      {
        from: "Manual meeting prep across multiple systems",
        to: "Consolidated, AI-synthesized client briefings"
      }
    ],
    useCases: [
      {
        title: "Personalized Portfolio Commentary",
        difficulty: "Basic",
        description: "Generate tailored quarterly letters that speak to each client's specific holdings and goals.",
        slug: "portfolio-commentary"
      },
      {
        title: "Client Meeting Preparation",
        difficulty: "Basic",
        description: "Synthesize client data, recent interactions, and market context into pre-meeting briefings.",
        slug: "meeting-prep"
      },
      {
        title: "Market Update Personalization",
        difficulty: "Intermediate",
        description: "Transform general market commentary into client-specific implications and talking points.",
        slug: "market-updates"
      },
      {
        title: "Email Response Drafting",
        difficulty: "Basic",
        description: "Generate professional, on-brand responses to common client inquiries while maintaining your voice.",
        slug: "email-drafting"
      },
      {
        title: "Performance Attribution Stories",
        difficulty: "Intermediate",
        description: "Translate performance data into clear, narrative explanations clients can understand.",
        slug: "performance-stories"
      },
      {
        title: "Tax-Loss Harvesting Communication",
        difficulty: "Advanced",
        description: "Create sophisticated yet accessible explanations of tax strategies executed in portfolios.",
        slug: "tax-loss-communication"
      },
    ],
    stats: [
      { label: "Time Saved on Commentary", value: "75%" },
      { label: "Meeting Prep Time", value: "60%" },
      { label: "Response Speed", value: "3x faster" },
    ]
  },
  "ria-principal": {
    title: "RIA Principal",
    icon: Building2,
    description: "Scale your practice without sacrificing quality. AI helps standardize best practices while preserving the boutique experience clients expect.",
    mindsetShifts: [
      {
        from: "Inconsistent advisor output quality",
        to: "Standardized excellence across all client communications"
      },
      {
        from: "Manual oversight of advisor work",
        to: "AI-assisted quality assurance and compliance checks"
      },
      {
        from: "Difficult to scale without hiring",
        to: "Existing team manages more clients effectively"
      }
    ],
    useCases: [
      {
        title: "Firm-Wide Communication Templates",
        difficulty: "Basic",
        description: "Create consistent, on-brand communication templates that advisors can personalize.",
        slug: "communication-templates"
      },
      {
        title: "Compliance Review Assistance",
        difficulty: "Intermediate",
        description: "Pre-screen advisor communications for compliance red flags before final review.",
        slug: "compliance-review"
      },
      {
        title: "Onboarding New Advisors",
        difficulty: "Basic",
        description: "Accelerate new advisor training with AI-powered knowledge bases and best practice examples.",
        slug: "advisor-onboarding"
      },
      {
        title: "Practice Management Insights",
        difficulty: "Advanced",
        description: "Analyze firm-wide communication patterns to identify opportunities and risks.",
        slug: "practice-insights"
      },
      {
        title: "Client Segmentation Strategies",
        difficulty: "Intermediate",
        description: "Use AI to identify service model opportunities and client cohorts.",
        slug: "client-segmentation"
      },
    ],
    stats: [
      { label: "Advisor Productivity", value: "+40%" },
      { label: "Compliance Review Time", value: "-50%" },
      { label: "Client Capacity per Advisor", value: "+25%" },
    ]
  },
  "cio": {
    title: "CIO / Investment Committee",
    icon: TrendingUp,
    description: "Bridge the gap between institutional research and client-ready insights. AI helps translate complex investment thinking into accessible narratives.",
    mindsetShifts: [
      {
        from: "Days to produce investment commentary",
        to: "Hours to generate and refine multiple versions"
      },
      {
        from: "One-size-fits-all institutional language",
        to: "Audience-appropriate translations of same ideas"
      },
      {
        from: "Research buried in lengthy documents",
        to: "Key insights surfaced and synthesized automatically"
      }
    ],
    useCases: [
      {
        title: "Research Synthesis",
        difficulty: "Intermediate",
        description: "Distill lengthy research reports into executive summaries and client-ready insights.",
        slug: "research-synthesis"
      },
      {
        title: "Investment Committee Documentation",
        difficulty: "Basic",
        description: "Generate meeting summaries and decision documentation efficiently.",
        slug: "committee-docs"
      },
      {
        title: "Market Commentary Distribution",
        difficulty: "Intermediate",
        description: "Adapt institutional market views for different audience segments (advisors vs. end clients).",
        slug: "market-commentary"
      },
      {
        title: "Portfolio Positioning Narratives",
        difficulty: "Advanced",
        description: "Explain complex positioning decisions in clear, compelling language.",
        slug: "positioning-narratives"
      },
      {
        title: "Crisis Communication",
        difficulty: "Advanced",
        description: "Rapidly draft timely, measured responses to market volatility.",
        slug: "crisis-communication"
      },
    ],
    stats: [
      { label: "Commentary Production", value: "3x faster" },
      { label: "Research Accessibility", value: "90% improved" },
      { label: "Audience Versions", value: "5+ from 1 source" },
    ]
  },
  "client-service": {
    title: "Client Service & Operations",
    icon: Headphones,
    description: "Elevate service quality while managing operational efficiency. AI handles routine tasks so your team can focus on complex, high-touch interactions.",
    mindsetShifts: [
      {
        from: "Hours responding to routine inquiries",
        to: "Minutes with AI-assisted response drafting"
      },
      {
        from: "Manual document preparation",
        to: "Automated, accurate document generation"
      },
      {
        from: "Inconsistent service across team members",
        to: "Standardized excellence with room for personalization"
      }
    ],
    useCases: [
      {
        title: "Client Inquiry Responses",
        difficulty: "Basic",
        description: "Draft professional responses to common account and service questions.",
        slug: "inquiry-responses"
      },
      {
        title: "Document Preparation",
        difficulty: "Basic",
        description: "Generate standard forms, letters, and documentation with pre-filled client data.",
        slug: "document-prep"
      },
      {
        title: "Onboarding Communication",
        difficulty: "Intermediate",
        description: "Create personalized welcome sequences and onboarding materials for new clients.",
        slug: "onboarding-communication"
      },
      {
        title: "Service Issue Resolution",
        difficulty: "Intermediate",
        description: "Draft empathetic, solution-focused responses to service concerns.",
        slug: "issue-resolution"
      },
      {
        title: "Knowledge Base Management",
        difficulty: "Advanced",
        description: "Maintain and query internal knowledge bases for faster issue resolution.",
        slug: "knowledge-base"
      },
    ],
    stats: [
      { label: "Response Time", value: "70% faster" },
      { label: "Documentation Accuracy", value: "95%+" },
      { label: "Client Satisfaction", value: "+30%" },
    ]
  },
}

export default async function RoleDetailPage({
  params,
}: {
  params: Promise<{ role: string }>
}) {
  const { role: roleSlug } = await params
  const role = roleData[roleSlug]

  if (!role) {
    notFound()
  }

  const Icon = role.icon

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] rounded-lg flex items-center justify-center mb-8">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
                {role.title}
              </h1>
              <p className="text-xl text-[#4a4a4a] leading-relaxed mb-8">
                {role.description}
              </p>
              <Button variant="primary" size="lg">
                Try the Simulator
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {role.stats.map((stat) => (
                <div key={stat.label} className="bg-white border border-[#e5e5dc] rounded-lg p-6 text-center">
                  <div className="text-3xl font-serif text-[#b8945f] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#6a6a6a]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mindset Shifts */}
      <section className="py-20 bg-white border-y border-[#e5e5dc]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl text-[#1a1f36] mb-12 text-center">
            AI-Enabled Mindset Shifts
          </h2>
          <div className="space-y-6">
            {role.mindsetShifts.map((shift, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-[#f5f5f0] border border-[#e5e5dc] rounded-lg p-6">
                  <div className="text-sm text-[#6a6a6a] mb-2 uppercase tracking-wider">
                    Traditional
                  </div>
                  <p className="text-[#1a1f36]">{shift.from}</p>
                </div>
                <div className="bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] text-white rounded-lg p-6 relative">
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#b8945f] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm text-[#b8945f] mb-2 uppercase tracking-wider">
                    AI-Enabled
                  </div>
                  <p>{shift.to}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#1a1f36] mb-4">
              Use Cases
            </h2>
            <p className="text-lg text-[#4a4a4a]">
              Practical workflows from basic to advanced
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {role.useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/use-cases/${useCase.slug}`}
                className="group bg-white border border-[#e5e5dc] rounded-lg p-6 hover:shadow-xl hover:border-[#b8945f]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    useCase.difficulty === "Basic"
                      ? "bg-green-100 text-green-700"
                      : useCase.difficulty === "Intermediate"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {useCase.difficulty}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#b8945f] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-lg text-[#1a1f36] mb-2 group-hover:text-[#b8945f] transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-sm text-[#6a6a6a]">
                  {useCase.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-8">
            Try our interactive simulator to see these use cases in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Launch Simulator
            </Button>
            <Button variant="outline" size="lg">
              Talk to Our Team
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
    { role: "wealth-advisor" },
    { role: "ria-principal" },
    { role: "cio" },
    { role: "client-service" },
  ]
}
