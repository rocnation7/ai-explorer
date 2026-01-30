"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, TrendingUp, Headphones } from "lucide-react"
import Link from "next/link"

const roles = [
  {
    icon: Users,
    title: "Wealth Advisor",
    description: "Elevate client relationships with AI-powered portfolio narratives, meeting prep, and personalized communications.",
    href: "/roles/wealth-advisor",
    gradient: "from-[#1a1f36] to-[#2a3f5f]",
  },
  {
    icon: Building2,
    title: "RIA Principal",
    description: "Scale your practice efficiently. Standardize workflows while maintaining the personalized touch that differentiates your firm.",
    href: "/roles/ria-principal",
    gradient: "from-[#2a3f5f] to-[#3a4f7f]",
  },
  {
    icon: TrendingUp,
    title: "CIO / Investment Committee",
    description: "Transform investment communications. Synthesize complex research into clear, client-ready insights at scale.",
    href: "/roles/cio",
    gradient: "from-[#3a4f7f] to-[#4a5f9f]",
  },
  {
    icon: Headphones,
    title: "Client Service & Ops",
    description: "Streamline operations and enhance service quality. Automate routine tasks while maintaining compliance and accuracy.",
    href: "/roles/client-service",
    gradient: "from-[#4a5f9f] to-[#5a6fbf]",
  },
]

export function RoleCards() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1a1f36] mb-6 tracking-tight">
            Explore by Your Role
          </h2>
          <p className="text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
            Each role faces unique challenges and opportunities. Discover AI
            workflows tailored to how you work, with practical examples and
            compliance-aware guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <Link
              key={role.title}
              href={role.href}
              className="group relative bg-gradient-to-br from-[#f8f7f2] to-white border border-[#e5e5dc] rounded-lg p-8 hover:shadow-2xl hover:border-[#b8945f]/30 transition-all duration-300 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b8945f]/5 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${role.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <role.icon className="w-7 h-7 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#b8945f] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>

                <h3 className="font-serif text-2xl text-[#1a1f36] mb-3 group-hover:text-[#b8945f] transition-colors">
                  {role.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  {role.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1a1f36] group-hover:text-[#b8945f] transition-colors">
                  View use cases
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#6a6a6a] mb-6">
            Not sure where to start? Take our quick assessment.
          </p>
          <Button variant="outline" size="lg">
            Find Your Path
          </Button>
        </div>
      </div>
    </section>
  )
}
