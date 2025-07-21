"use client"

import { Button } from "@/components/ui/button"
import { plans } from "@/constants/pricing"
import { Check, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-mono text-white/60 tracking-wider uppercase">Pricing</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            One-time purchase. No subscriptions. No hidden fees. Own it forever.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                plan.popular ? "lg:scale-105" : "hover:scale-[1.02]"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-white text-black px-4 py-2 text-sm font-bold flex items-center gap-1 rounded-none">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative bg-black border border-white/50 rounded-none p-8 h-full transition-all duration-300 ${
                  plan.popular
                    ? "border-white/30 bg-white/[0.02]"
                    : "border-white/50 hover:border-white/50 hover:bg-white/[0.01]"
                }`}
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/60 ml-2 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-white/70 leading-relaxed">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start ">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-white  transition-colors duration-200" />
                      </div>
                      <span className="text-white/80 leading-relaxed group-hover/item:text-white transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/waitlist">
                  <Button
                    className={`w-full group transition-all duration-300 rounded-none ${
                      plan.popular
                        ? "bg-white text-black hover:bg-white/90 hover:scale-[1.02]"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black hover:scale-[1.02]"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom guarantee text */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-white/60 text-sm">
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <span>Instant access</span>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <span>No setup fees</span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-5 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
