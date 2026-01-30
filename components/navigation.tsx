"use client"

import Link from "next/link"
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1a1f36] rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L4 7v10l8 4 8-4V7l-8-4z"
                  stroke="#b8945f"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12l8-4M12 12v9M12 12L4 8"
                  stroke="#b8945f"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-serif text-xl text-[#1a1f36] tracking-tight">
              AI in Practice
            </span>
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

          <Button variant="primary" size="default">
            Talk to Us
          </Button>
        </div>
      </div>
    </nav>
  )
}
