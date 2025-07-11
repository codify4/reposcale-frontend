"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Copy } from "lucide-react"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines = [
    "# 1. Select your private repository",
    "curl -X POST https://reposhare.dev/api/share \\",
    "  -H 'Authorization: Bearer your_token' \\",
    "  -d '{",
    '    "repo": "username/private-repo",',
    '    "expiration": "7d",',
    '    "permissions": ["read"]',
    "  }'",
    "",
    "# Response:",
    "{",
    '  "shareUrl": "https://reposhare.dev/s/abc123def456",',
    '  "expiresAt": "2024-01-15T10:30:00Z"',
    "}",
  ]

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine]
      let charIndex = 0

      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setTypedText((prev) => {
            const lines = prev.split("\n")
            lines[currentLine] = line.substring(0, charIndex)
            return lines.join("\n")
          })
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1)
          }, 200)
        }
      }, 25)

      return () => clearInterval(typeInterval)
    }
  }, [currentLine])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20 lg:mt-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center flex flex-col items-center">
            <div className="space-y-6 flex flex-col items-center">
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Share Private GitHub Repos <span className="underline decoration-4 underline-offset-8">Securely</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl font-medium">
                Generate secure, time-limited links to share private repositories without adding collaborators. Full
                control, unlimited shares.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 h-12 px-8 group rounded-none"
              >
                Start sharing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-foreground"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-foreground"></div>
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Right content - Code animation */}
          {/* <div className="relative">
            <div className="bg-black border border-border/20 p-6 font-mono text-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground ml-4">terminal</span>
                </div>
              </div>

              <div className="min-h-[320px] leading-6">
                <pre className="text-white">
                  {typedText}
                  <span className="animate-pulse bg-foreground w-2 h-5 inline-block ml-1"></span>
                </pre>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
