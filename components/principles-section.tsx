"use client"

import { Shield, Zap, Target, Users2 } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "Platform Agnostic",
    description: "No vendor lock-in. Our guidance focuses on workflows and patterns, not specific tools.",
  },
  {
    icon: Shield,
    title: "Finance-First",
    description: "Grounded in real advisory workflows with compliance-aware language throughout.",
  },
  {
    icon: Zap,
    title: "Inspiration Over Instruction",
    description: "We show what's possible, not step-by-step tutorials. Adapt ideas to your context.",
  },
  {
    icon: Users2,
    title: "Partnership Approach",
    description: "Not a sales pitch. We're here to guide your AI journey as a strategic partner.",
  },
]

export function PrinciplesSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#1a1f36] via-[#252b47] to-[#1a1f36] text-white relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #b8945f 1px, transparent 1px),
            linear-gradient(to bottom, #b8945f 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#b8945f]/10 border border-[#b8945f]/20 rounded-full mb-6">
            <span className="text-sm text-[#b8945f] font-medium uppercase tracking-wider">
              Our Principles
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6 tracking-tight">
            Built on Trust and Transparency
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Every use case, workflow, and recommendation is designed with your
            fiduciary responsibility in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 h-full hover:bg-white/10 hover:border-[#b8945f]/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#b8945f]/30 group-hover:scale-110 transition-all duration-300">
                  <principle.icon className="w-6 h-6 text-[#b8945f]" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl mb-3 group-hover:text-[#b8945f] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-[15px]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <span className="text-sm text-white/70">Powered by</span>
            <span className="font-serif text-lg text-white">Lazard</span>
          </div>
        </div>
      </div>
    </section>
  )
}
