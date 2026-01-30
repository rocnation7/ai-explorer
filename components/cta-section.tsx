"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#b8945f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#1a1f36]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-4xl lg:text-6xl text-[#1a1f36] mb-8 tracking-tight leading-tight">
          Ready to explore AI workflows for your practice?
        </h2>
        <p className="text-xl text-[#4a4a4a] mb-12 max-w-3xl mx-auto leading-relaxed">
          Join wealth professionals who are reimagining their workflows.
          Start with role-based use cases or connect with our team to discuss
          your specific needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="primary" size="lg" className="group">
            Explore Use Cases
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Mail className="w-5 h-5" />
            Talk to Our Team
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="border-t border-[#e5e5dc] pt-12">
          <p className="text-sm text-[#6a6a6a] mb-6 uppercase tracking-wider">
            Trusted by Leading Wealth Management Firms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {/* Placeholder for client logos - would be real logos in production */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-32 bg-[#1a1f36]/20 rounded"
                aria-label="Client logo"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
