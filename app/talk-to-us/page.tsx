import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import {
  MessageSquare,
  Mail,
  Building2,
  Clock,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react"

export default function TalkToUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8945f]/10 border border-[#b8945f]/20 rounded-full text-sm text-[#b8945f] mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Start a Conversation</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-[#1a1f36] mb-6 tracking-tight">
            Talk to Us
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed max-w-2xl mx-auto">
            Ready to explore how AI can transform your practice? Our team is
            here to discuss your specific needs, answer questions, and share
            insights tailored to your role.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-[#f8f7f2] to-white border border-[#e5e5dc] rounded-lg">
              <div className="w-14 h-14 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-[#b8945f]" />
              </div>
              <h3 className="font-semibold text-xl text-[#1a1f36] mb-3">
                Email Us
              </h3>
              <p className="text-[#4a4a4a] mb-4">
                Send us a detailed inquiry and we'll respond within 1-2 business
                days.
              </p>
              <a
                href="mailto:ai-practice@lazard.com"
                className="text-[#b8945f] hover:text-[#a37f4a] font-medium transition-colors"
              >
                ai-practice@lazard.com
              </a>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#f8f7f2] to-white border border-[#e5e5dc] rounded-lg">
              <div className="w-14 h-14 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-[#b8945f]" />
              </div>
              <h3 className="font-semibold text-xl text-[#1a1f36] mb-3">
                Schedule a Call
              </h3>
              <p className="text-[#4a4a4a] mb-4">
                Book a 30-minute discovery call with our AI practice team.
              </p>
              <span className="text-[#b8945f] font-medium">
                Use form below to request
              </span>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#f8f7f2] to-white border border-[#e5e5dc] rounded-lg">
              <div className="w-14 h-14 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-7 h-7 text-[#b8945f]" />
              </div>
              <h3 className="font-semibold text-xl text-[#1a1f36] mb-3">
                For Institutions
              </h3>
              <p className="text-[#4a4a4a] mb-4">
                Enterprise inquiries and partnership discussions welcome.
              </p>
              <span className="text-[#b8945f] font-medium">
                Contact your Lazard representative
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-[#1a1f36] mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-[#4a4a4a]">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <form className="bg-white border border-[#e5e5dc] rounded-xl p-8 lg:p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="firstName" className="text-[#1a1f36] mb-2 block">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="border-[#e5e5dc] focus:ring-[#b8945f] focus:border-[#b8945f]"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-[#1a1f36] mb-2 block">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Smith"
                  className="border-[#e5e5dc] focus:ring-[#b8945f] focus:border-[#b8945f]"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="email" className="text-[#1a1f36] mb-2 block">
                Work Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.smith@company.com"
                className="border-[#e5e5dc] focus:ring-[#b8945f] focus:border-[#b8945f]"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="company" className="text-[#1a1f36] mb-2 block">
                Company / Firm <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Your firm name"
                className="border-[#e5e5dc] focus:ring-[#b8945f] focus:border-[#b8945f]"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="role" className="text-[#1a1f36] mb-2 block">
                Your Role
              </Label>
              <select
                id="role"
                className="w-full h-10 px-3 rounded-md border border-[#e5e5dc] bg-white text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#b8945f] focus:border-[#b8945f]"
              >
                <option value="">Select your role...</option>
                <option value="wealth-advisor">Wealth Advisor</option>
                <option value="ria-principal">RIA Principal</option>
                <option value="cio">CIO / Investment Committee</option>
                <option value="client-service">Client Service & Ops</option>
                <option value="technology">Technology / Innovation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <Label htmlFor="interest" className="text-[#1a1f36] mb-2 block">
                What brings you here?
              </Label>
              <select
                id="interest"
                className="w-full h-10 px-3 rounded-md border border-[#e5e5dc] bg-white text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#b8945f] focus:border-[#b8945f]"
              >
                <option value="">Select your interest...</option>
                <option value="general">General AI inquiry</option>
                <option value="workflows">Specific workflow questions</option>
                <option value="implementation">Implementation guidance</option>
                <option value="partnership">Partnership opportunities</option>
                <option value="demo">Request a demonstration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-8">
              <Label htmlFor="message" className="text-[#1a1f36] mb-2 block">
                Message
              </Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us more about what you'd like to discuss..."
                className="w-full px-3 py-2 rounded-md border border-[#e5e5dc] bg-white text-[#1a1f36] placeholder:text-[#6a6a6a] focus:outline-none focus:ring-2 focus:ring-[#b8945f] focus:border-[#b8945f] resize-none"
              />
            </div>

            <div className="flex items-start gap-3 mb-8">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 rounded border-[#e5e5dc] text-[#b8945f] focus:ring-[#b8945f]"
              />
              <Label htmlFor="consent" className="text-sm text-[#4a4a4a]">
                I agree to receive communications from Lazard about AI in
                Practice and related topics. View our{" "}
                <Link href="/privacy" className="text-[#b8945f] hover:underline">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#b8945f] hover:bg-[#a37f4a]"
            >
              Send Message
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl text-[#1a1f36] mb-12 text-center">
            What to Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1f36] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                1
              </div>
              <h3 className="font-semibold text-lg text-[#1a1f36] mb-2">
                We Review Your Inquiry
              </h3>
              <p className="text-[#4a4a4a] text-sm">
                Our team reviews your message and matches you with the right
                specialist.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1f36] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                2
              </div>
              <h3 className="font-semibold text-lg text-[#1a1f36] mb-2">
                Personalized Response
              </h3>
              <p className="text-[#4a4a4a] text-sm">
                You'll receive a tailored response addressing your specific
                questions and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1f36] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                3
              </div>
              <h3 className="font-semibold text-lg text-[#1a1f36] mb-2">
                Ongoing Partnership
              </h3>
              <p className="text-[#4a4a4a] text-sm">
                We're here for the long term as your firm navigates AI
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics We Can Help With */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-14 h-14 bg-[#b8945f]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-7 h-7 text-[#b8945f]" />
          </div>
          <h2 className="font-serif text-4xl mb-6">Topics We Can Help With</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Clock className="w-5 h-5 text-[#b8945f] mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                Getting started with AI in your practice
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Clock className="w-5 h-5 text-[#b8945f] mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                Compliance and governance frameworks
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Clock className="w-5 h-5 text-[#b8945f] mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                Role-specific workflow recommendations
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Clock className="w-5 h-5 text-[#b8945f] mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                Building AI literacy across your team
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Clock className="w-5 h-5 text-[#b8945f] mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                Evaluating AI tools and platforms
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Clock className="w-5 h-5 text-[#b8945f] mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                Strategic partnership opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-[#f5f5f0] border-t border-[#e5e5dc]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-sm text-[#6a6a6a] leading-relaxed text-center">
            <strong className="text-[#1a1f36]">Important:</strong> Conversations
            and guidance provided through this platform are for educational and
            informational purposes only. They do not constitute investment
            advice, compliance guidance, or recommendations for specific AI
            tools or vendors. Please review our{" "}
            <Link href="/terms" className="text-[#b8945f] hover:underline">
              Terms of Use
            </Link>{" "}
            for additional disclosures.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
