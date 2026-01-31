import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkflowSimulator } from "@/components/workflow-simulator"

interface SimulatorPageProps {
  searchParams: Promise<{ scenario?: string }>
}

export default async function SimulatorPage({ searchParams }: SimulatorPageProps) {
  const params = await searchParams
  const initialScenario = params.scenario || null

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-32 pb-12 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            Workflow Simulator
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            Experience AI-enabled workflows step-by-step. See how prompts are
            refined, guardrails are applied, and outputs evolve from naive
            to advisor-ready.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <WorkflowSimulator initialScenario={initialScenario} />
        </div>
      </div>

      <Footer />
    </main>
  )
}
