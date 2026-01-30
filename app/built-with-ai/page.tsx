import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Code, Palette, FileText, Zap, CheckCircle2 } from "lucide-react"

const buildingBlocks = [
  {
    icon: Palette,
    title: "Design & Layout Ideation",
    description: "AI helped explore design directions and layout concepts",
    examples: [
      {
        prompt: "Suggest premium, editorial-style layout concepts for a financial thought leadership site targeting wealth advisors",
        outcome: "Generated mood board concepts, typography pairing suggestions, and spatial design ideas that informed our Financial Editorial Luxury direction"
      },
      {
        prompt: "How can we make role-based navigation feel organic and inviting rather than generic?",
        outcome: "Inspired the asymmetric card layouts with gradient accents and hover interactions"
      }
    ]
  },
  {
    icon: FileText,
    title: "Content Drafting & Refinement",
    description: "AI accelerated content creation while maintaining professional tone",
    examples: [
      {
        prompt: "Draft use case descriptions for portfolio commentary generation, written for sophisticated wealth advisors who are skeptical of AI hype",
        outcome: "Initial drafts that were refined for voice, compliance language, and specific pain points"
      },
      {
        prompt: "Refine this value proposition to be more specific and less generic: [original text]",
        outcome: "Sharpened messaging to focus on concrete time savings and workflow improvements"
      }
    ]
  },
  {
    icon: Code,
    title: "Component Development",
    description: "AI assisted with React component structure and TypeScript patterns",
    examples: [
      {
        prompt: "Create a workflow simulator component that shows progressive refinement of AI outputs through 4 stages",
        outcome: "Base component structure that was customized with our design system and interaction patterns"
      },
      {
        prompt: "Suggest accessibility patterns for the role navigation cards",
        outcome: "Keyboard navigation, ARIA labels, and focus management recommendations"
      }
    ]
  },
  {
    icon: Zap,
    title: "Performance & Optimization",
    description: "AI helped identify optimization opportunities and best practices",
    examples: [
      {
        prompt: "Review this Next.js configuration for production performance best practices",
        outcome: "Suggested image optimization, font loading strategies, and bundle optimization techniques"
      },
      {
        prompt: "How can we reduce initial page load while maintaining the premium aesthetic?",
        outcome: "Recommended progressive enhancement patterns and strategic component lazy-loading"
      }
    ]
  }
]

const principles = [
  {
    title: "AI as Co-Pilot, Not Autopilot",
    description: "Every AI output was reviewed, refined, and customized. AI accelerated the process but didn't replace human judgment on design, tone, and user experience."
  },
  {
    title: "Iterative Refinement",
    description: "Initial AI outputs were starting points. The best results came from multiple rounds of prompting, testing, and refinement based on the specific context."
  },
  {
    title: "Domain Expertise Matters",
    description: "Prompts were most effective when they included specific context about wealth management, compliance considerations, and target audience sophistication."
  },
  {
    title: "Guardrails Built In",
    description: "We prompted with constraints from the start: tone guidelines, compliance awareness, avoiding hype language, and maintaining professional credibility."
  }
]

const promptExamples = [
  {
    category: "Layout Design",
    prompt: "Design a hero section for a thought leadership site that feels like a premium financial publication, not a SaaS product. Use serif typography, generous whitespace, and subtle gold accents. Target audience: wealth advisors and RIA principals.",
    learnings: [
      "Specific aesthetic direction beats generic prompts",
      "Mentioning what NOT to do (SaaS aesthetics) was crucial",
      "Including target audience helped with tone decisions"
    ]
  },
  {
    category: "Component Logic",
    prompt: "Create a React component for an email capture modal with: email (required), role dropdown, firm type dropdown, AUM band dropdown, and consent checkbox. Use Radix UI primitives and Tailwind styling. Success state should show confirmation.",
    learnings: [
      "Breaking down requirements clearly produces better code",
      "Specifying the component library avoided generic solutions",
      "Detailing states (form vs success) prevented rework"
    ]
  },
  {
    category: "Content Creation",
    prompt: "Write a use case description for 'Client Meeting Preparation' that explains how AI can synthesize CRM data, portfolio information, and recent interactions into a briefing. Tone: professional but not salesy, acknowledge advisor skepticism, focus on time savings. 150 words.",
    learnings: [
      "Tone guidance is essential for financial content",
      "Word count constraints improve output quality",
      "Acknowledging audience sentiment ('skepticism') helped"
    ]
  }
]

export default function BuiltWithAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8945f]/10 border border-[#b8945f]/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#b8945f]" />
            <span className="text-sm text-[#b8945f] font-medium">Meta Story</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            How This Site Was Built with AI
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            This platform practices what it preaches. We used AI throughout the
            design, development, and content creation process—not to replace
            human creativity, but to accelerate it. Here's a transparent look at
            how AI contributed to this experience.
          </p>
        </div>
      </div>

      {/* Building Blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-16 text-center">
            AI's Role in the Build
          </h2>

          <div className="space-y-12">
            {buildingBlocks.map((block, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#f8f7f2] to-white border border-[#e5e5dc] rounded-lg p-8 lg:p-12"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <block.icon className="w-7 h-7 text-[#b8945f]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#1a1f36] mb-2">
                      {block.title}
                    </h3>
                    <p className="text-[#6a6a6a]">{block.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {block.examples.map((example, idx) => (
                    <div key={idx} className="bg-white border border-[#e5e5dc] rounded-lg p-6">
                      <div className="mb-4">
                        <div className="text-xs text-[#b8945f] uppercase tracking-wider mb-2">
                          Example Prompt
                        </div>
                        <div className="font-mono text-sm text-[#1a1f36] bg-[#f5f5f0] p-4 rounded border border-[#e5e5dc]">
                          "{example.prompt}"
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[#1a1f36] uppercase tracking-wider mb-2 font-semibold">
                          Outcome
                        </div>
                        <p className="text-sm text-[#4a4a4a]">{example.outcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl mb-12 text-center">
            Our AI Principles in Practice
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              >
                <h3 className="font-semibold text-xl mb-3 text-[#b8945f]">
                  {principle.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Examples Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-6 text-center">
            Prompt Examples & Learnings
          </h2>
          <p className="text-center text-lg text-[#6a6a6a] mb-16 max-w-3xl mx-auto">
            Effective prompting is a skill. Here are real examples from this
            project and what made them work.
          </p>

          <div className="space-y-12">
            {promptExamples.map((example, index) => (
              <div
                key={index}
                className="border border-[#e5e5dc] rounded-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#1a1f36] to-[#2a3f5f] px-6 py-4">
                  <div className="text-sm text-[#b8945f] font-medium uppercase tracking-wider">
                    {example.category}
                  </div>
                </div>

                <div className="p-6 bg-[#f5f5f0]">
                  <div className="font-mono text-sm text-[#1a1f36] leading-relaxed">
                    {example.prompt}
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <h4 className="font-semibold text-[#1a1f36] mb-4">
                    What Made This Prompt Effective:
                  </h4>
                  <ul className="space-y-2">
                    {example.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#b8945f] flex-shrink-0 mt-0.5" />
                        <span className="text-[#4a4a4a]">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-6">
            Want to Try These Approaches?
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-8">
            We've compiled our prompting templates and workflows into a
            downloadable guide you can adapt for your own projects.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#b8945f] text-white font-medium rounded-sm hover:bg-[#a37f4a] transition-colors">
              Download Prompt Library
            </button>
            <button className="px-8 py-4 border-2 border-[#1a1f36] text-[#1a1f36] font-medium rounded-sm hover:bg-[#1a1f36] hover:text-white transition-colors">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-16 bg-[#1a1f36] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-white/80 leading-relaxed">
            <strong className="text-white">Transparency Note:</strong> This page
            itself was drafted with AI assistance and refined by human editors.
            All technical accuracy, compliance considerations, and strategic
            decisions were made by experienced professionals. AI was a tool, not
            the decision-maker.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
