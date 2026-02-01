import Link from "next/link"
import Image from "next/image"
import { Linkedin, Youtube, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1f36] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/assets/LazardLogoBlack.svg"
                alt="Lazard Asset Management"
                width={160}
                height={48}
                className="h-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-[11px] font-medium text-[#b8945f] tracking-wide uppercase mb-3">
              AI in Practice
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Practical AI guidance for wealth and asset management professionals.
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
                <Link href="/talk-to-us" className="text-white/70 hover:text-white transition-colors">
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm">
            © 2026 Lazard Asset Management. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/lazard-asset-management/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-[#b8945f]/20 border border-white/10 hover:border-[#b8945f]/30 rounded-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.youtube.com/c/LazardAssetManagement"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-[#b8945f]/20 border border-white/10 hover:border-[#b8945f]/30 rounded-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://lazardassetmanagement.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-[#b8945f]/20 border border-white/10 hover:border-[#b8945f]/30 rounded-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="Lazard Asset Management Website"
            >
              <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
