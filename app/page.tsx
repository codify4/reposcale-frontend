import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />
            <main className="bg-black">
                <HeroSection />
                <FeaturesSection />
                <PricingSection />
                <FAQSection />
                <FinalCTASection />
            </main>
            <Footer />
        </div>
    )
}
