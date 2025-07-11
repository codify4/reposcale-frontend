"use client"

import { useState, useEffect } from "react"
import { Sparkles, Edit3, Globe, BarChart3, DollarSign, ArrowRight, FileText, Eye } from 'lucide-react'
import { features } from "@/constants/features"
import { Button } from "./ui/button"
import Link from "next/link"

export function FeaturesSection({ page = false }: { page?: boolean }) {
  const VisualDemo = ({ type }: { type: string }) => {
    // Monetize number animation state
    const [monetizeAmount, setMonetizeAmount] = useState(0);
    const [isMonetizeHovered, setIsMonetizeHovered] = useState(false);

    useEffect(() => {
      if (!isMonetizeHovered) {
        setMonetizeAmount(0);
        return;
      }
      let start = 0;
      const end = 1247;
      const duration = 700;
      const stepTime = 16;
      const steps = Math.ceil(duration / stepTime);
      let currentStep = 0;
      const increment = end / steps;
      const interval = setInterval(() => {
        currentStep++;
        setMonetizeAmount((prev) => {
          const next = prev + increment;
          if (currentStep >= steps) {
            clearInterval(interval);
            return end;
          }
          return next;
        });
      }, stepTime);
      return () => clearInterval(interval);
    }, [isMonetizeHovered]);

    return (
      <div className="relative w-full h-80 bg-black">
        <div className="group/card bg-gradient-to-br from-neutral-900 to-black p-8 w-full h-full flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 will-change-transform border border-border/10">
          {/* Upload Demo */}
          {type === "upload" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-start self-start gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500" />
                <div className="w-3 h-3 bg-yellow-500" />
                <div className="w-3 h-3 bg-green-500" />
              </div>
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-neutral-200" />
                  <span className="text-white text-sm font-medium">document.pdf</span>
                  <div className="ml-auto w-2 h-2 bg-neutral-700 group-hover/card:bg-white group-hover/card:animate-pulse transition-all duration-300" />
                </div>
                {/* Chips animate in on hover */}
                <div className="flex gap-2 mt-2 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                  <div className="px-2 py-1 bg-neutral-800 text-neutral-200 text-xs font-medium">Blog</div>
                  <div className="px-2 py-1 bg-neutral-900 text-neutral-400 text-xs font-medium">Course</div>
                  <div className="px-2 py-1 bg-neutral-700 text-neutral-100 text-xs font-medium">Listicle</div>
                </div>
                {/* Processing text animates in on hover */}
                <div className="text-xs text-neutral-500 mt-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">Processing...</div>
              </div>
            </div>
          )}
          {/* Generate Demo */}
          {type === "generate" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">AI Generation</span>
              </div>
              <div className="space-y-3 w-full">
                <div className="h-2 bg-neutral-800 w-full animate-pulse group-hover/card:animate-none transition-all duration-500" />
                <div className="h-2 bg-neutral-800 w-3/4 animate-pulse group-hover/card:animate-none transition-all duration-500" />
                <div className="h-2 bg-neutral-800 w-1/2 animate-pulse group-hover/card:animate-none transition-all duration-500" />
                {/* Animated content on hover */}
                <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="h-2 bg-white w-full mt-2" />
                  <div className="h-2 bg-white w-4/5 mt-2" />
                  <div className="text-xs text-neutral-300 mt-2 font-medium">✓ Content generated</div>
                </div>
              </div>
            </div>
          )}
          {/* Edit Demo */}
          {type === "edit" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <Edit3 className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Live Editor</span>
                <div className="ml-auto">
                  <Eye className="w-4 h-4 text-neutral-300" />
                </div>
              </div>
              <div className="space-y-2 w-full">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white" />
                  <div className="h-2 bg-neutral-800 flex-1" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neutral-700" />
                  <div className="h-2 bg-neutral-800 flex-1" />
                </div>
                {/* Animated bar on hover */}
                <div className="flex items-center gap-2 opacity-0 -translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-500">
                  <div className="w-2 h-2 bg-neutral-300 animate-pulse" />
                  <div className="h-2 bg-white flex-1" />
                </div>
              </div>
            </div>
          )}
          {/* Publish Demo */}
          {type === "publish" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Publishing</span>
              </div>
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500 text-xs">Status</span>
                  <div className="flex items-center gap-2 text-neutral-500 group-hover/card:text-white transition-colors duration-500">
                    <div className="w-2 h-2 bg-neutral-700 group-hover/card:bg-white group-hover/card:animate-pulse transition-all duration-500" />
                    <span className="text-xs font-medium group-hover/card:hidden">Draft</span>
                    <span className="text-xs font-medium hidden group-hover/card:inline">Live</span>
                  </div>
                </div>
                {/* URL box animates in on hover */}
                <div className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                  <div className="bg-neutral-900 p-3 border border-neutral-800 mt-2">
                    <div className="text-xs text-neutral-500">Your URL:</div>
                    <div className="text-xs text-white font-medium">yoursite.com/course</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Analytics Demo */}
          {type === "analytics" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Analytics</span>
              </div>
              <div className="space-y-4 w-full">
                <div className="flex justify-between">
                  <span className="text-neutral-500 text-xs">Sales</span>
                  <span className="text-white text-sm font-medium">1,247</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[30, 45, 60, 80, 35, 90, 70].map((height, i) => (
                    <div
                      key={i}
                      className="w-4 bg-neutral-700 transition-all duration-300 opacity-30 group-hover/card:opacity-100 group-hover/card:scale-110"
                      style={{ height: `${height}%`, transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Monetize Demo */}
          {type === "monetize" && (
            <div
              className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center"
              onMouseEnter={() => setIsMonetizeHovered(true)}
              onMouseLeave={() => setIsMonetizeHovered(false)}
            >
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Earnings</span>
              </div>
              <div className="space-y-4 w-full">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white transition-all duration-500 group-hover/card:scale-110">
                    ${Math.round(monetizeAmount).toLocaleString()}
                  </div>
                  <div className="text-xs text-neutral-500">This month</div>
                </div>
                {/* Earnings details animate in on hover */}
                <div className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-500">Platform fee</span>
                    <span className="text-white font-medium">$0</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <section  className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Reposcale allows you to share your private repositories with ease.
          </p>
        </div>
        {/* Features */}
        <div className="space-y-32 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex ${page ? 'flex-col' : `flex-col lg:flex-row ${feature.reverse ? "lg:flex-row-reverse" : ""}`} items-center gap-16 transition-transform duration-300`}
            >
              {/* Visual */}
              <div className="flex-1 w-full">
                <VisualDemo type={feature.visual} />
              </div>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{page ? feature.longDescription : feature.description}</p>
                <Link href="/login">
                  <Button className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black px-6 py-5 rounded-none font-medium transition-all duration-200 hover:scale-105">
                    {feature.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}