import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Building2, TrendingUp, Headphones } from "lucide-react"
import Link from "next/link"

const roles = [
  {
    icon: Users,
    slug: "wealth-advisor",
    title: "Wealth Advisor",
    description: "Elevate client relationships with AI-powered portfolio narratives, meeting prep, and personalized communications.",
    painPoints: [
      "Limited time for deep client personalization",
      "Repetitive portfolio commentary writing",
      "Complex market updates need simplification",
    ],
    useCases: 8,
  },
  {
    icon: Building2,
    slug: "ria-principal",
    title: "RIA Principal",
    description: "Scale your practice efficiently. Standardize workflows while maintaining the personalized touch that differentiates your firm.",
    painPoints: [
      "Inconsistent advisor output quality",
      "Difficulty scaling without losing personal touch",
      "Compliance and documentation overhead",
    ],
    useCases: 6,
  },
  {
    icon: TrendingUp,
    slug: "cio",
    title: "CIO / Investment Committee",
    description: "Transform investment communications. Synthesize complex research into clear, client-ready insights at scale.",
    painPoints: [
      "Research synthesis takes too long",
      "Translating institutional insights for retail",
      "Maintaining consistent investment narratives",
    ],
    useCases: 7,
  },
  {
    icon: Headphones,
    slug: "client-service",
    title: "Client Service & Operations",
    description: "Streamline operations and enhance service quality. Automate routine tasks while maintaining compliance and accuracy.",
    painPoints: [
      "High volume of routine inquiries",
      "Manual document preparation",
      "Inconsistent service quality across team",
    ],
    useCases: 5,
  },
]

export default function RolesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-32 pb-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            Explore by Role
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            Each role in wealth management faces unique challenges. Discover
            AI-enabled workflows tailored to your specific responsibilities,
            with practical examples and compliance-aware guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="space-y-12">
          {roles.map((role, index) => (
            <Link
              key={role.slug}
              href={`/roles/${role.slug}`}
              className="group block"
            >
              <div className="bg-white border border-[#e5e5dc] rounded-lg p-8 lg:p-12 hover:shadow-2xl hover:border-[#b8945f]/30 transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Left: Icon and title */}
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-serif text-3xl text-[#1a1f36] mb-3 group-hover:text-[#b8945f] transition-colors">
                      {role.title}
                    </h2>
                    <p className="text-[#6a6a6a] mb-4">{role.description}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-[#b8945f]">
                      {role.useCases} use cases
                    </div>
                  </div>

                  {/* Right: Pain points */}
                  <div className="lg:col-span-2">
                    <h3 className="font-semibold text-[#1a1f36] mb-4 text-lg">
                      Common Challenges:
                    </h3>
                    <ul className="space-y-3">
                      {role.painPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-[#b8945f]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 bg-[#b8945f] rounded-full" />
                          </div>
                          <span className="text-[#4a4a4a]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
