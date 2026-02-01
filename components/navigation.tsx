"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e5e5dc] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="transition-transform group-hover:translate-x-1 duration-300">
              <Image
                src="/assets/LazardLogoBlack.svg"
                alt="Lazard Asset Management"
                width={120}
                height={36}
                className="h-auto"
                priority
              />
            </div>
            <div className="border-l border-[#e5e5dc] pl-4 py-1">
              <span className="text-[13px] font-medium text-[#1a1f36] tracking-wide uppercase">
                AI in Practice
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/roles"
              className="text-[15px] text-[#4a4a4a] hover:text-[#1a1f36] transition-colors"
            >
              By Role
            </Link>
            <Link
              href="/use-cases"
              className="text-[15px] text-[#4a4a4a] hover:text-[#1a1f36] transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="/ai-tools"
              className="text-[15px] text-[#4a4a4a] hover:text-[#1a1f36] transition-colors"
            >
              AI Tools
            </Link>
            <Link
              href="/simulator"
              className="text-[15px] text-[#4a4a4a] hover:text-[#1a1f36] transition-colors"
            >
              Simulator
            </Link>
            <Link
              href="/about"
              className="text-[15px] text-[#4a4a4a] hover:text-[#1a1f36] transition-colors"
            >
              About
            </Link>
          </div>

          <Link href="/talk-to-us">
            <Button variant="primary" size="default">
              Talk to Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
