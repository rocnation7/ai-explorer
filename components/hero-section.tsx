"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#b8945f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#1a1f36]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Main content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#e5e5dc] rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-[#b8945f]" />
              <span className="text-sm text-[#4a4a4a] font-medium">
                Thought Leadership for Wealth Professionals
              </span>
            </div>

            <h1 className="font-serif text-5xl lg:text-7xl text-[#1a1f36] leading-[1.1] tracking-tight">
              AI workflows{" "}
              <span className="relative inline-block">
                reimagined
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 3 150 1 298 8"
                    stroke="#b8945f"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              for wealth management
            </h1>

            <p className="text-xl text-[#4a4a4a] leading-relaxed max-w-xl">
              Discover how financial professionals are responsibly transforming
              client service, portfolio communication, and advisory
              workflows—today and tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" className="group" asChild>
                <Link href="/roles">
                  Explore by Role
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/use-cases">
                  View Use Cases
                </Link>
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-6 text-sm text-[#6a6a6a]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#b8945f] rounded-full" />
                <span>Platform Agnostic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#b8945f] rounded-full" />
                <span>Finance-First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#b8945f] rounded-full" />
                <span>Compliance Aware</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative cards showing workflow transformation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full space-y-4">
                  {/* Before card */}
                  <div className="bg-white border border-[#e5e5dc] rounded-lg p-6 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#f5f5f0] rounded flex items-center justify-center text-[#6a6a6a] font-medium">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#1a1f36] mb-2">
                          Traditional Workflow
                        </h4>
                        <div className="space-y-1.5">
                          <div className="h-2 bg-[#e5e5dc] rounded w-full" />
                          <div className="h-2 bg-[#e5e5dc] rounded w-4/5" />
                          <div className="h-2 bg-[#e5e5dc] rounded w-3/5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-[#b8945f]" />
                  </div>

                  {/* After card */}
                  <div className="bg-gradient-to-br from-[#1a1f36] to-[#252b47] border border-[#b8945f]/20 rounded-lg p-6 shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#b8945f] rounded flex items-center justify-center text-[#1a1f36] font-medium">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2">
                          AI-Enhanced
                        </h4>
                        <div className="space-y-1.5">
                          <div className="h-2 bg-[#b8945f]/40 rounded w-full" />
                          <div className="h-2 bg-[#b8945f]/40 rounded w-5/6" />
                          <div className="h-2 bg-[#b8945f]/40 rounded w-4/6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#6a6a6a] uppercase tracking-wider">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-[#6a6a6a] rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2 bg-[#6a6a6a] rounded-full" />
        </div>
      </div>
    </section>
  )
}
