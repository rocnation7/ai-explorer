import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Users, Building2, TrendingUp, Headphones } from "lucide-react"

const useCases = [
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
  // Add more use cases as they're developed
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

            {/* Coming Soon Card */}
            <div className="bg-gradient-to-br from-[#f8f7f2] to-white border-2 border-dashed border-[#e5e5dc] rounded-lg p-6 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl mb-2">✨</div>
                <h3 className="font-semibold text-[#1a1f36] mb-2">
                  More Coming Soon
                </h3>
                <p className="text-sm text-[#6a6a6a]">
                  We're adding new use cases every week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
