import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { RoleCards } from "@/components/role-cards"
import { PrinciplesSection } from "@/components/principles-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <RoleCards />
      <PrinciplesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
