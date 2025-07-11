"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Ripple } from "./magicui/ripple"

export function FinalCTASection() {
    return (
        <section className="py-32 relative overflow-hidden">
            <Ripple />
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
                        Ready to share your private repos{" "}
                        <span className="underline decoration-4 underline-offset-8">securely?</span>
                    </h2>

                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        Join thousands of developers who trust reposcale for secure, effortless repository sharing. Start free or
                        unlock unlimited sharing with a one-time purchase.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button
                            size="lg"
                            className="bg-white hover:bg-white/90 text-black h-12 px-8 group rounded-none"
                        >
                            Get Started Free
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            className="h-12 px-8 font-medium rounded-none"
                        >
                            View Pricing
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        No credit card required • Setup in 2 minutes
                    </p>
                </div>
            </div>
        </section>
    )
}
