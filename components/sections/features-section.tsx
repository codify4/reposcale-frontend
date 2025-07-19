"use client"

import { useState, useEffect } from "react"
import { DollarSign, ArrowRight, Eye, GitBranch, Users, Shield, Clock } from "lucide-react"
import { features } from "@/constants/features"
import { Button } from "../ui/button"
import NextLink from "next/link"

export function FeaturesSection({ page = false }: { page?: boolean }) {
  const VisualDemo = ({ type }: { type: string }) => {
    // Monetize number animation state
    const [monetizeAmount, setMonetizeAmount] = useState(0)
    const [isMonetizeHovered, setIsMonetizeHovered] = useState(false)

    useEffect(() => {
      if (!isMonetizeHovered) {
        setMonetizeAmount(0)
        return
      }
      const start = 0
      const end = 1247
      const duration = 700
      const stepTime = 16
      const steps = Math.ceil(duration / stepTime)
      let currentStep = 0
      const increment = end / steps
      const interval = setInterval(() => {
        currentStep++
        setMonetizeAmount((prev) => {
          const next = prev + increment
          if (currentStep >= steps) {
            clearInterval(interval)
            return end
          }
          return next
        })
      }, stepTime)
      return () => clearInterval(interval)
    }, [isMonetizeHovered])

    return (
      <div className="relative w-full h-80 bg-black">
        <div className="group/card bg-gradient-to-br from-neutral-900 to-black p-8 w-full h-full flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 will-change-transform border border-border/10">
          {/* Upload Demo - Share Private Repos */}
          {type === "upload" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-start self-start gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500" />
                <div className="w-3 h-3 bg-yellow-500" />
                <div className="w-3 h-3 bg-green-500" />
              </div>
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-3">
                  <GitBranch className="w-5 h-5 text-neutral-200" />
                  <span className="text-white text-sm font-medium">user/private-repo</span>
                  <div className="ml-auto w-2 h-2 bg-neutral-700 group-hover/card:bg-green-500 group-hover/card:animate-pulse transition-all duration-300" />
                </div>
                {/* Share options animate in on hover */}
                <div className="flex gap-2 mt-2 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                  <div className="px-2 py-1 bg-neutral-800 text-neutral-200 text-xs font-medium">🔒 Private</div>
                  <div className="px-2 py-1 bg-neutral-900 text-neutral-400 text-xs font-medium">📤 Share</div>
                  <div className="px-2 py-1 bg-neutral-700 text-neutral-100 text-xs font-medium">🔗 Link</div>
                </div>
                {/* Processing text animates in on hover */}
                <div className="text-xs text-green-400 mt-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                  ✓ Secure link generated
                </div>
              </div>
            </div>
          )}
          {/* Generate Demo - No Collaborators Needed */}
          {type === "generate" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Access Control</span>
              </div>
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between text-neutral-500">
                  <span className="text-xs">Collaborators:</span>
                  <span className="text-xs line-through group-hover/card:no-underline group-hover/card:text-red-400">
                    Required
                  </span>
                </div>
                <div className="h-2 bg-neutral-800 w-full" />
                <div className="h-2 bg-neutral-800 w-3/4" />
                {/* No collaborators message on hover */}
                <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="flex items-center gap-2 text-green-400 text-xs mt-2">
                    <Shield className="w-3 h-3" />
                    <span>Share without adding collaborators</span>
                  </div>
                  <div className="text-xs text-neutral-300 mt-1">✓ Full permission control maintained</div>
                </div>
              </div>
            </div>
          )}
          {/* Edit Demo - Access Control */}
          {type === "edit" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Permissions</span>
                <div className="ml-auto">
                  <Eye className="w-4 h-4 text-neutral-300" />
                </div>
              </div>
              <div className="space-y-2 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 text-xs">Read Access</span>
                  <div className="w-2 h-2 bg-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 text-xs">Write Access</span>
                  <div className="w-2 h-2 bg-red-500" />
                </div>
                {/* Expiration control on hover */}
                <div className="flex items-center justify-between opacity-0 -translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-500">
                  <span className="text-neutral-300 text-xs">Expires in</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-yellow-400" />
                    <span className="text-yellow-400 text-xs">7 days</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Publish Demo - Integrations */}
          {type === "publish" && (
            <div className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">GitHub Integration</span>
              </div>
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500 text-xs">Connection</span>
                  <div className="flex items-center gap-2 text-neutral-500 group-hover/card:text-green-400 transition-colors duration-500">
                    <div className="w-2 h-2 bg-neutral-700 group-hover/card:bg-green-500 group-hover/card:animate-pulse transition-all duration-500" />
                    <span className="text-xs font-medium group-hover/card:hidden">Connecting...</span>
                    <span className="text-xs font-medium hidden group-hover/card:inline">Connected</span>
                  </div>
                </div>
                {/* Repository list animates in on hover */}
                <div className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                  <div className="bg-neutral-900 p-3 border border-neutral-800 mt-2 space-y-1">
                    <div className="text-xs text-neutral-500">Available repos:</div>
                    <div className="text-xs text-white font-medium">📁 my-private-project</div>
                    <div className="text-xs text-white font-medium">📁 secret-api</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Monetize Demo - Pay Once, Own Forever */}
          {type === "monetize" && (
            <div
              className="bg-neutral-950 rounded-none p-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center"
              onMouseEnter={() => setIsMonetizeHovered(true)}
              onMouseLeave={() => setIsMonetizeHovered(false)}
            >
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Lifetime Access</span>
              </div>
              <div className="space-y-4 w-full">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white transition-all duration-500 group-hover/card:scale-110">
                    $19
                  </div>
                  <div className="text-xs text-neutral-500">One-time payment</div>
                </div>
                {/* Lifetime benefits animate in on hover */}
                <div className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-green-400">
                      <div className="w-1 h-1 bg-green-400" />
                      <span>Unlimited repositories</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <div className="w-1 h-1 bg-green-400" />
                      <span>No monthly fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <div className="w-1 h-1 bg-green-400" />
                      <span>Forever yours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Buckets Demo - Organize Repositories */}
          {type === "buckets" && (
            <div
              className="bg-neutral-950 rounded-none px-6 w-full max-w-sm shadow-lg border border-neutral-800 flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-4 mt-10">
                <GitBranch className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Buckets</span>
              </div>
              <BucketsAnimation />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Reposcale allows you to share your private repositories with ease.
          </p>
        </div>
        {/* Features */}
        <div className="space-y-32 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex ${page ? "flex-col" : `flex-col lg:flex-row ${feature.reverse ? "lg:flex-row-reverse" : ""}`} items-center gap-16 transition-transform duration-300`}
            >
              {/* Visual */}
              <div className="flex-1 w-full">
                <VisualDemo type={feature.visual} />
              </div>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {page ? feature.longDescription : feature.description}
                </p>
                {/* <NextLink href="/login">
                  <Button className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black px-6 py-5 rounded-none font-medium transition-all duration-200 hover:scale-105">
                    {feature.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </NextLink> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BucketsAnimation() {
  const [hovered, setHovered] = useState(false)
  const [inBucket, setInBucket] = useState([false, false, false])
  const [showCheck, setShowCheck] = useState(false)

  useEffect(() => {
    if (!hovered) {
      setInBucket([false, false, false])
      setShowCheck(false)
      return
    }
    let timeouts = []
    timeouts.push(setTimeout(() => setInBucket([true, false, false]), 200))
    timeouts.push(setTimeout(() => setInBucket([true, true, false]), 500))
    timeouts.push(setTimeout(() => setInBucket([true, true, true]), 800))
    timeouts.push(setTimeout(() => setShowCheck(true), 1100))
    return () => timeouts.forEach(clearTimeout)
  }, [hovered])

  const repoNames = ["api-server", "frontend-ui", "web-app"]

  return (
    <div
      className="flex flex-col items-center w-full mt-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: 180 }}
    >
      {/* Repo chips - row, same size, gap, centered */}
      <div className="flex flex-row justify-center items-center gap-4 w-full mb-4" style={{ minHeight: 40 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="transition-all duration-500 z-10"
            style={{
              transform: `translateY(${inBucket[i] ? 70 : 0}px)`,
              opacity: inBucket[i] ? 0 : 1,
              transition: `transform 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s, opacity 0.4s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s`,
              pointerEvents: 'none',
              minWidth: 110,
              maxWidth: 110,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full border border-neutral-700 text-white text-xs font-mono shadow-sm w-[110px] h-10 justify-center">
              <GitBranch className="w-4 h-4 text-green-400" />
              {repoNames[i]}
            </div>
          </div>
        ))}
      </div>
      {/* Bucket - bigger */}
      <div className="relative flex flex-col items-center">
        <div
          className={`transition-all duration-500 ${inBucket.every(Boolean) ? "ring-2 ring-green-400/60" : inBucket.some(Boolean) ? "ring-2 ring-green-400/20" : "ring-0"}`}
          style={{ borderRadius: 20 }}
        >
          {/* Bigger bucket icon */}
          <svg width="110" height="70" viewBox="0 0 110 70" fill="none">
            <rect x="10" y="30" width="90" height="34" rx="10" fill="#222" stroke="#4ade80" strokeWidth="3"/>
            <rect x="30" y="12" width="50" height="22" rx="7" fill="#333" stroke="#666" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
