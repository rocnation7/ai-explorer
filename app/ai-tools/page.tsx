import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileSpreadsheet, Brain, Search, Code, Presentation, Database, MessageSquare, BarChart3, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

interface AITool {
  name: string
  category: string
  icon: any
  description: string
  useCase: string
  bestFor: string[]
  url?: string
  considerations: string
}

const aiTools: AITool[] = [
  {
    name: "Claude for Excel",
    category: "Spreadsheet Intelligence",
    icon: FileSpreadsheet,
    description: "Bring Claude's advanced reasoning directly into Excel. Analyze complex data, clean datasets, create formulas, and generate insights without leaving your spreadsheet.",
    useCase: "Transform portfolio data analysis, automate complex calculations, and generate client-ready summaries from raw performance data.",
    bestFor: ["Portfolio analysis", "Data cleaning", "Custom calculations", "Report generation"],
    url: "https://www.anthropic.com/excel",
    considerations: "Ensure sensitive client data stays within approved systems. Review all AI-generated formulas before using in production."
  },
  {
    name: "NotebookLM",
    category: "Research & Synthesis",
    icon: Brain,
    description: "Google's AI research assistant that creates personalized knowledge bases from your documents. Upload research, meeting notes, and market commentary to generate summaries, Q&A, and connections.",
    useCase: "Create a searchable knowledge base from investment committee notes, research reports, and market commentary. Generate audio briefings for advisors.",
    bestFor: ["Research synthesis", "Meeting prep", "Knowledge management", "Audio summaries"],
    url: "https://notebooklm.google.com",
    considerations: "Consider data residency and document sensitivity. Best for published research vs. confidential client data."
  },
  {
    name: "Perplexity Pro",
    category: "Real-Time Research",
    icon: Search,
    description: "AI-powered search engine with citations. Get current information with source attribution, perfect for market research and fact-checking.",
    useCase: "Research current market conditions, competitor positioning, or regulatory changes with cited sources you can verify.",
    bestFor: ["Market research", "Fact-checking", "Current events", "Competitive analysis"],
    url: "https://www.perplexity.ai",
    considerations: "Always verify sources. Great for research phase, but confirm critical facts independently."
  },
  {
    name: "Claude Projects",
    category: "Contextual Workspaces",
    icon: MessageSquare,
    description: "Persistent AI workspaces that maintain context across conversations. Upload firm documents, style guides, and templates to create a customized AI assistant.",
    useCase: "Create role-specific AI assistants with your firm's investment philosophy, compliance guidelines, and communication templates pre-loaded.",
    bestFor: ["Ongoing projects", "Team collaboration", "Custom knowledge bases", "Consistent workflows"],
    url: "https://www.anthropic.com/claude",
    considerations: "Only upload documents approved for AI use. Perfect for firm-level templates and public information."
  },
  {
    name: "ChatGPT Advanced Data Analysis",
    category: "Data Analysis",
    icon: BarChart3,
    description: "Upload datasets and receive Python-powered analysis, visualizations, and insights. Handles complex statistical analysis and creates publication-ready charts.",
    useCase: "Analyze portfolio performance trends, create client presentation charts, or explore correlations in market data.",
    bestFor: ["Statistical analysis", "Data visualization", "Trend analysis", "Custom charts"],
    url: "https://chat.openai.com",
    considerations: "Understand data processing occurs server-side. Best for anonymized or aggregated data analysis."
  },
  {
    name: "Gamma",
    category: "Presentation Creation",
    icon: Presentation,
    description: "AI-powered presentation builder that transforms outlines into beautiful, professional slide decks in minutes. Includes design templates and smart formatting.",
    useCase: "Create client presentations, investment committee decks, or advisor training materials with professional design and consistent branding.",
    bestFor: ["Client presentations", "Pitch decks", "Training materials", "Investment updates"],
    url: "https://gamma.app",
    considerations: "Review all generated content for accuracy. Great for structure and design, but verify all data and claims."
  },
  {
    name: "Elicit",
    category: "Academic Research",
    icon: FileText,
    description: "AI research assistant specialized in academic papers. Search across millions of papers, extract key findings, and synthesize research on specific topics.",
    useCase: "Research academic literature on investment strategies, behavioral finance, or economic indicators to support thought leadership.",
    bestFor: ["Literature review", "Research synthesis", "Citation finding", "Trend analysis"],
    url: "https://elicit.com",
    considerations: "Best for published research. Always review primary sources for investment decisions."
  },
  {
    name: "Hebbia",
    category: "Document Intelligence",
    icon: Database,
    description: "Enterprise-grade AI for complex document analysis. Search across thousands of documents, extract structured data, and generate insights from unstructured content.",
    useCase: "Analyze large sets of fund documents, extract key terms across multiple prospectuses, or synthesize insights from years of investment committee notes.",
    bestFor: ["Document review", "Due diligence", "Compliance analysis", "Pattern detection"],
    url: "https://www.hebbia.ai",
    considerations: "Enterprise solution requiring proper data governance. Excellent for large-scale document analysis."
  },
]

const categories = Array.from(new Set(aiTools.map(tool => tool.category)))

export default function AIToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            World-Class AI Tools
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed mb-8">
            A curated guide to the most powerful AI tools for wealth management professionals.
            Each tool is evaluated for real-world applications, compliance considerations, and practical use cases.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900">
            <span className="font-medium">Platform Agnostic:</span>
            <span>We recommend tools based on capabilities, not partnerships.</span>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {categories.map((category) => {
            const categoryTools = aiTools.filter(tool => tool.category === category)
            return (
              <div key={category} className="mb-20 last:mb-0">
                <h2 className="font-serif text-3xl text-[#1a1f36] mb-8 pb-4 border-b border-[#e5e5dc]">
                  {category}
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {categoryTools.map((tool) => {
                    const Icon = tool.icon
                    return (
                      <div
                        key={tool.name}
                        className="bg-white border border-[#e5e5dc] rounded-xl p-8 hover:shadow-xl hover:border-[#b8945f]/30 transition-all"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-xl text-[#1a1f36]">
                                {tool.name}
                              </h3>
                              {tool.url && (
                                <a
                                  href={tool.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-[#b8945f] hover:underline inline-flex items-center gap-1 mt-1"
                                >
                                  Visit site
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#4a4a4a] mb-6 leading-relaxed">
                          {tool.description}
                        </p>

                        {/* Use Case */}
                        <div className="bg-gradient-to-br from-[#f8f7f2] to-white rounded-lg p-4 mb-6">
                          <div className="text-xs text-[#6a6a6a] uppercase tracking-wider mb-2 font-medium">
                            Wealth Management Use Case
                          </div>
                          <p className="text-sm text-[#1a1f36]">
                            {tool.useCase}
                          </p>
                        </div>

                        {/* Best For */}
                        <div className="mb-6">
                          <div className="text-xs text-[#6a6a6a] uppercase tracking-wider mb-3 font-medium">
                            Best For
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tool.bestFor.map((item) => (
                              <span
                                key={item}
                                className="text-xs px-3 py-1 bg-white border border-[#e5e5dc] rounded-full text-[#4a4a4a]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Considerations */}
                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                          <div className="text-xs text-blue-900 uppercase tracking-wider mb-2 font-medium">
                            ⚠️ Important Considerations
                          </div>
                          <p className="text-sm text-blue-900">
                            {tool.considerations}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Evaluation Framework */}
      <section className="py-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0] border-y border-[#e5e5dc]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl text-[#1a1f36] mb-12 text-center">
            How We Evaluate AI Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#e5e5dc] rounded-lg p-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-serif text-lg">1</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1a1f36] mb-3">
                Finance Relevance
              </h3>
              <p className="text-sm text-[#6a6a6a]">
                Does it solve real problems advisors face? We prioritize tools with clear wealth management applications.
              </p>
            </div>
            <div className="bg-white border border-[#e5e5dc] rounded-lg p-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-serif text-lg">2</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1a1f36] mb-3">
                Data Governance
              </h3>
              <p className="text-sm text-[#6a6a6a]">
                How is client data handled? We note compliance considerations and data processing models.
              </p>
            </div>
            <div className="bg-white border border-[#e5e5dc] rounded-lg p-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-serif text-lg">3</span>
              </div>
              <h3 className="font-semibold text-lg text-[#1a1f36] mb-3">
                Ease of Adoption
              </h3>
              <p className="text-sm text-[#6a6a6a]">
                Can advisors start using it today? We favor tools with low learning curves and immediate value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-6">
            Want Guidance on Tool Selection?
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-8">
            Our team can help you evaluate which tools make sense for your practice,
            navigate compliance considerations, and build safe implementation frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/simulator">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a1f36] to-[#2a3f5f] text-white rounded-lg hover:shadow-lg transition-all font-medium">
                Try the Workflow Simulator
              </button>
            </Link>
            <Link href="mailto:ai-practice@lazard.com">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#1a1f36] text-[#1a1f36] rounded-lg hover:bg-[#1a1f36] hover:text-white transition-all font-medium">
                Talk to Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
