import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Users, Target, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            About This Initiative
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            AI in Practice is Lazard's commitment to helping wealth management
            professionals navigate the AI transformation responsibly and
            effectively.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-8 text-center">
            Our Mission
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
              The wealth management industry is at an inflection point. AI
              promises to transform how advisors serve clients, but most
              guidance is either too generic or too technical to be actionable.
            </p>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
              This platform exists to bridge that gap. We provide practical,
              finance-native examples of AI workflows - not to sell specific
              tools, but to inspire and educate professionals who are navigating
              this transformation.
            </p>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              We believe AI should enhance human judgment, not replace it. Every
              use case, workflow, and recommendation on this site is designed
              with your fiduciary responsibility in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-12 text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#e5e5dc] rounded-lg p-8">
              <div className="w-12 h-12 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#b8945f]" />
              </div>
              <h3 className="font-semibold text-xl text-[#1a1f36] mb-3">
                Compliance First
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                Every workflow includes guardrails and compliance
                considerations. We never suggest approaches that compromise
                regulatory requirements or fiduciary duty.
              </p>
            </div>

            <div className="bg-white border border-[#e5e5dc] rounded-lg p-8">
              <div className="w-12 h-12 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#b8945f]" />
              </div>
              <h3 className="font-semibold text-xl text-[#1a1f36] mb-3">
                Platform Agnostic
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                We don't sell tools. Our guidance focuses on workflows and
                patterns that work across different AI platforms and vendors.
              </p>
            </div>

            <div className="bg-white border border-[#e5e5dc] rounded-lg p-8">
              <div className="w-12 h-12 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#b8945f]" />
              </div>
              <h3 className="font-semibold text-xl text-[#1a1f36] mb-3">
                Human-Centered
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                AI augments human expertise; it doesn't replace it. All our
                workflows emphasize the critical role of human review and
                judgment.
              </p>
            </div>

            <div className="bg-white border border-[#e5e5dc] rounded-lg p-8">
              <div className="w-12 h-12 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#b8945f]" />
              </div>
              <h3 className="font-semibold text-xl text-[#1a1f36] mb-3">
                Practical Over Hype
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                We focus on what works today, not distant possibilities. Every
                use case is grounded in real advisory workflows and current AI
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Lazard */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
              <span className="font-serif text-2xl">Lazard</span>
            </div>
          </div>

          <h2 className="font-serif text-4xl mb-6">About Lazard</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Lazard is a leading global financial advisory and asset management
            firm, with a rich history of providing sophisticated investment
            solutions and strategic advisory services.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Our Asset Management business serves institutional and individual
            clients worldwide, managing portfolios with a focus on fundamental
            research and long-term value creation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#b8945f] hover:bg-[#a37f4a]"
            >
              Learn More About Lazard
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1a1f36]"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-[#f5f5f0] border-t border-[#e5e5dc]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-sm text-[#6a6a6a] leading-relaxed text-center">
            <strong className="text-[#1a1f36]">Important:</strong> The use
            cases and workflows presented on this site are for educational and
            illustrative purposes. They do not constitute investment advice,
            compliance guidance, or recommendations for specific AI tools or
            vendors. Always consult with your compliance, legal, and technology
            teams before implementing AI solutions in your practice.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
