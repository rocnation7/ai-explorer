import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1f36] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#b8945f] rounded-sm flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3L4 7v10l8 4 8-4V7l-8-4z"
                    stroke="#1a1f36"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12l8-4M12 12v9M12 12L4 8"
                    stroke="#1a1f36"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-serif text-xl">AI in Practice</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Practical AI guidance for wealth management professionals.
            </p>
          </div>

          {/* Navigation columns */}
          <div>
            <h4 className="font-semibold mb-4 text-[#b8945f]">By Role</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/roles/wealth-advisor" className="text-white/70 hover:text-white transition-colors">
                  Wealth Advisor
                </Link>
              </li>
              <li>
                <Link href="/roles/ria-principal" className="text-white/70 hover:text-white transition-colors">
                  RIA Principal
                </Link>
              </li>
              <li>
                <Link href="/roles/cio" className="text-white/70 hover:text-white transition-colors">
                  CIO / Investment Committee
                </Link>
              </li>
              <li>
                <Link href="/roles/client-service" className="text-white/70 hover:text-white transition-colors">
                  Client Service & Ops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#b8945f]">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/use-cases" className="text-white/70 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/simulator" className="text-white/70 hover:text-white transition-colors">
                  Workflow Simulator
                </Link>
              </li>
              <li>
                <Link href="/built-with-ai" className="text-white/70 hover:text-white transition-colors">
                  How This Site Was Built
                </Link>
              </li>
              <li>
                <Link href="/principles" className="text-white/70 hover:text-white transition-colors">
                  Our Principles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#b8945f]">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Lazard
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Lazard Asset Management. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
