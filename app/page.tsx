import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FinalCTASection } from "@/components/sections/final-cta-section"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />
            <main className="bg-black">
                <HeroSection />
                <FeaturesSection />
                {/* <PricingSection /> */}
                <FAQSection />
                <FinalCTASection />
            </main>
            <Footer />
        </div>
    )
}
