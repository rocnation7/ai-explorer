import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, AlertTriangle, Bot, Scale, Shield } from "lucide-react"

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1f36]/5 border border-[#1a1f36]/10 rounded-full text-sm text-[#1a1f36] mb-6">
            <FileText className="w-4 h-4" />
            <span>Legal</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-lg text-[#4a4a4a]">
            Last updated: January 2026
          </p>
        </div>
      </div>

      {/* Important Disclaimers Banner */}
      <section className="py-8 bg-[#b8945f]/10 border-y border-[#b8945f]/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-[#b8945f] flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-semibold text-[#1a1f36] mb-2">
                Important Notice
              </h2>
              <p className="text-[#4a4a4a]">
                This website contains content that was created with the
                assistance of artificial intelligence tools. The information
                provided is for educational and illustrative purposes only and
                does not constitute investment advice, legal advice, or
                professional recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Table of Contents */}
          <div className="bg-[#f8f7f2] border border-[#e5e5dc] rounded-lg p-6 mb-12">
            <h2 className="font-semibold text-[#1a1f36] mb-4">
              Table of Contents
            </h2>
            <nav className="grid sm:grid-cols-2 gap-2 text-sm">
              <a href="#ai-disclosure" className="text-[#b8945f] hover:underline">
                1. AI Content Disclosure
              </a>
              <a href="#no-investment-advice" className="text-[#b8945f] hover:underline">
                2. No Investment Advice
              </a>
              <a href="#educational-purpose" className="text-[#b8945f] hover:underline">
                3. Educational Purpose Only
              </a>
              <a href="#no-guarantees" className="text-[#b8945f] hover:underline">
                4. No Guarantees or Warranties
              </a>
              <a href="#user-responsibilities" className="text-[#b8945f] hover:underline">
                5. User Responsibilities
              </a>
              <a href="#intellectual-property" className="text-[#b8945f] hover:underline">
                6. Intellectual Property
              </a>
              <a href="#limitation-liability" className="text-[#b8945f] hover:underline">
                7. Limitation of Liability
              </a>
              <a href="#third-party" className="text-[#b8945f] hover:underline">
                8. Third-Party Links
              </a>
              <a href="#changes" className="text-[#b8945f] hover:underline">
                9. Changes to Terms
              </a>
              <a href="#contact" className="text-[#b8945f] hover:underline">
                10. Contact Information
              </a>
            </nav>
          </div>

          {/* Section 1 - AI Disclosure */}
          <div id="ai-disclosure" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#b8945f]/20 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#b8945f]" />
              </div>
              <h2 className="font-serif text-2xl text-[#1a1f36]">
                1. AI Content Disclosure
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>
                This website, including its design, content, copy, examples, and
                illustrative materials, was created with significant assistance
                from artificial intelligence tools. We believe in transparency
                about how this content was produced.
              </p>
              <p>
                <strong className="text-[#1a1f36]">
                  AI-assisted elements include:
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website copy and written content</li>
                <li>Use case descriptions and workflow examples</li>
                <li>Design concepts and layout suggestions</li>
                <li>Code and technical implementation</li>
                <li>Illustrative scenarios and sample outputs</li>
              </ul>
              <p>
                While AI tools were instrumental in creating this site, all
                content has been reviewed by humans for accuracy and
                appropriateness. However, AI-generated content may contain
                errors, inaccuracies, or outdated information.
              </p>
            </div>
          </div>

          {/* Section 2 - No Investment Advice */}
          <div id="no-investment-advice" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#b8945f]/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#b8945f]" />
              </div>
              <h2 className="font-serif text-2xl text-[#1a1f36]">
                2. No Investment Advice
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-[#4a4a4a] leading-relaxed">
              <p className="font-semibold text-[#1a1f36] bg-[#f5f5f0] p-4 rounded-lg border border-[#e5e5dc]">
                Nothing on this website constitutes investment advice, financial
                advice, trading advice, or any other sort of advice. You should
                not treat any of the website's content as such.
              </p>
              <p>
                <strong className="text-[#1a1f36]">Specifically:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We do not recommend any particular investment, security,
                  transaction, or investment strategy
                </li>
                <li>
                  Any examples of client communications, portfolio analyses, or
                  market commentary shown are purely illustrative and fictional
                </li>
                <li>
                  Sample outputs from AI tools shown on this site should not be
                  relied upon for any investment decision
                </li>
                <li>
                  Past performance examples (if any) are hypothetical and do not
                  guarantee future results
                </li>
                <li>
                  No fiduciary relationship is created by your use of this
                  website
                </li>
              </ul>
              <p>
                Before making any investment decisions, consult with a qualified
                financial advisor, and conduct your own due diligence.
              </p>
            </div>
          </div>

          {/* Section 3 - Educational Purpose */}
          <div id="educational-purpose" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#b8945f]/20 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#b8945f]" />
              </div>
              <h2 className="font-serif text-2xl text-[#1a1f36]">
                3. Educational Purpose Only
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>
                This website is intended solely for educational and illustrative
                purposes. Its goal is to demonstrate potential applications of
                AI in wealth management workflows and to inspire thinking about
                how these technologies might be applied.
              </p>
              <p>
                <strong className="text-[#1a1f36]">
                  The content is not intended to:
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Replace professional judgment or expertise</li>
                <li>Serve as compliance, legal, or regulatory guidance</li>
                <li>Recommend specific AI tools, vendors, or platforms</li>
                <li>
                  Provide implementation instructions for your specific
                  organization
                </li>
                <li>Guarantee any particular outcomes or results</li>
              </ul>
              <p>
                Any decision to implement AI tools in your practice should
                involve consultation with your compliance, legal, technology,
                and risk management teams.
              </p>
            </div>
          </div>

          {/* Section 4 - No Guarantees */}
          <div id="no-guarantees" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#b8945f]/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#b8945f]" />
              </div>
              <h2 className="font-serif text-2xl text-[#1a1f36]">
                4. No Guarantees or Warranties
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>
                This website and its content are provided "as is" and "as
                available" without any warranties of any kind, either express or
                implied.
              </p>
              <p>
                <strong className="text-[#1a1f36]">We do not warrant that:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The content is accurate, complete, reliable, current, or
                  error-free
                </li>
                <li>
                  The website will be available at all times or operate without
                  interruption
                </li>
                <li>
                  Any AI workflows or examples shown will work in your specific
                  environment
                </li>
                <li>
                  The information will meet your particular requirements or
                  expectations
                </li>
                <li>
                  Results depicted in examples are achievable in real-world
                  scenarios
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 - User Responsibilities */}
          <div id="user-responsibilities" className="mb-12 scroll-mt-32">
            <h2 className="font-serif text-2xl text-[#1a1f36] mb-4">
              5. User Responsibilities
            </h2>
            <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>By using this website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use the content for lawful purposes only and in compliance
                  with applicable regulations
                </li>
                <li>
                  Exercise your own professional judgment when considering any
                  information presented
                </li>
                <li>
                  Consult appropriate professionals before implementing any AI
                  solutions
                </li>
                <li>
                  Not rely on any content as a substitute for professional
                  advice
                </li>
                <li>
                  Verify any information through independent sources before
                  acting upon it
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 - Intellectual Property */}
          <div id="intellectual-property" className="mb-12 scroll-mt-32">
            <h2 className="font-serif text-2xl text-[#1a1f36] mb-4">
              6. Intellectual Property
            </h2>
            <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>
                The content on this website, including text, graphics, logos,
                and design elements, is the property of Lazard or its content
                suppliers and is protected by intellectual property laws.
              </p>
              <p>
                You may view, download, and print content from this website for
                your personal, non-commercial use only. You may not reproduce,
                distribute, modify, or create derivative works without our prior
                written consent.
              </p>
            </div>
          </div>

          {/* Section 7 - Limitation of Liability */}
          <div id="limitation-liability" className="mb-12 scroll-mt-32">
            <h2 className="font-serif text-2xl text-[#1a1f36] mb-4">
              7. Limitation of Liability
            </h2>
            <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>
                To the fullest extent permitted by applicable law, Lazard and
                its affiliates, officers, directors, employees, and agents shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to
                your use of this website.
              </p>
              <p>
                This includes, but is not limited to, any damages resulting
                from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Decisions made based on information presented on this website
                </li>
                <li>Implementation of AI tools or workflows inspired by this content</li>
                <li>Errors or inaccuracies in AI-generated content</li>
                <li>Interruption or unavailability of the website</li>
                <li>Any investment losses or business decisions</li>
              </ul>
            </div>
          </div>

          {/* Section 8 - Third Party Links */}
          <div id="third-party" className="mb-12 scroll-mt-32">
            <h2 className="font-serif text-2xl text-[#1a1f36] mb-4">
              8. Third-Party Links
            </h2>
            <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>
                This website may contain links to third-party websites or
                resources. These links are provided for convenience only. We do
                not endorse and are not responsible for the content, products,
                or services offered by third parties.
              </p>
            </div>
          </div>

          {/* Section 9 - Changes */}
          <div id="changes" className="mb-12 scroll-mt-32">
            <h2 className="font-serif text-2xl text-[#1a1f36] mb-4">
              9. Changes to Terms
            </h2>
            <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>
                We reserve the right to modify these Terms of Use at any time.
                Changes will be effective immediately upon posting to this
                website. Your continued use of the website following any changes
                constitutes your acceptance of the revised terms.
              </p>
              <p>
                We encourage you to review these Terms periodically for any
                updates.
              </p>
            </div>
          </div>

          {/* Section 10 - Contact */}
          <div id="contact" className="mb-12 scroll-mt-32">
            <h2 className="font-serif text-2xl text-[#1a1f36] mb-4">
              10. Contact Information
            </h2>
            <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
              <p>
                If you have any questions about these Terms of Use, please
                contact us:
              </p>
              <div className="bg-[#f8f7f2] border border-[#e5e5dc] rounded-lg p-6">
                <p className="mb-2">
                  <strong className="text-[#1a1f36]">Email:</strong>{" "}
                  <a
                    href="mailto:ai-practice@lazard.com"
                    className="text-[#b8945f] hover:underline"
                  >
                    ai-practice@lazard.com
                  </a>
                </p>
                <p>
                  <strong className="text-[#1a1f36]">Or visit:</strong>{" "}
                  <Link href="/talk-to-us" className="text-[#b8945f] hover:underline">
                    Talk to Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="py-12 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-2xl mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            By accessing and using this website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms of Use. If
            you do not agree to these terms, please do not use this website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#b8945f] hover:bg-[#a37f4a] text-white rounded-lg transition-colors"
            >
              Return to Home
            </Link>
            <Link
              href="/talk-to-us"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
