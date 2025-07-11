"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Zap, BarChart3, Clock, Layers, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Token-Based Security",
    description:
      "Enterprise-grade encryption with secure token generation. Your repositories stay private and protected.",
  },
  {
    icon: Zap,
    title: "No Collaborators Needed",
    description: "Share access without adding users as collaborators. Maintain complete control over permissions.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track access patterns, view counts, and user engagement with comprehensive analytics dashboard.",
  },
  {
    icon: Clock,
    title: "Time-Limited Access",
    description: "Set custom expiration dates or revoke access instantly. Full control over sharing duration.",
  },
  {
    icon: Layers,
    title: "Multi-Provider Ready",
    description: "Built for GitHub today, designed for GitLab and Bitbucket tomorrow. Future-proof architecture.",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".feature-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-in")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-32 relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-mono text-white/60 tracking-wider uppercase">Features</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-none">
            Built for developers who value{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">security</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
            Every feature designed with security, simplicity, and developer experience in mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item opacity-0 translate-y-16 transition-all duration-1000 ease-out group relative rounded-none"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/5 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative bg-black border border-white/10 rounded-none p-8 h-full group-hover:border-white/30 transition-all duration-500 group-hover:bg-white/[0.02]">
                {/* Icon container */}
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:bg-white group-hover:border-white transition-all duration-500">
                  <feature.icon className="h-8 w-8 text-white group-hover:text-black transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-base group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Learn more link */}
                <div className="mt-8 flex items-center text-white/60 group-hover:text-white transition-all duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
