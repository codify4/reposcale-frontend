"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Share2 } from "lucide-react"
import { floatingElements, steps } from "@/constants/steps"
import Link from "next/link"

export function HeroSection() {
  const [terminalText, setTerminalText] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [generatedLink, setGeneratedLink] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentStep < steps.length) {
      const step = steps[currentStep]
      let charIndex = 0

      // Type the step title
      const typeStep = () => {
        const stepInterval = setInterval(() => {
          if (charIndex <= step.step.length) {
            setTerminalText((prev) => {
              const lines = prev.split("\n")
              const lastLineIndex = lines.length - 1
              if (lines[lastLineIndex]?.startsWith("→ ")) {
                lines[lastLineIndex] = `→ ${step.step.substring(0, charIndex)}`
              } else {
                lines.push(`→ ${step.step.substring(0, charIndex)}`)
              }
              return lines.join("\n")
            })
            charIndex++
          } else {
            clearInterval(stepInterval)
            // Add details after a delay
            setTimeout(() => {
              setTerminalText((prev) => prev + "\n" + step.details + "\n")
              setTimeout(() => {
                if (currentStep === 2) {
                  setGeneratedLink("https://share.repo.dev/s/abc123xyz789")
                  setShowSuccess(true)
                }
                setTimeout(() => {
                  if (currentStep < steps.length - 1) {
                    setCurrentStep((prev) => prev + 1)
                  } else {
                    // Reset animation
                    setTimeout(() => {
                      setTerminalText("")
                      setCurrentStep(0)
                      setShowSuccess(false)
                      setGeneratedLink("")
                    }, 2000)
                  }
                }, 1500)
              }, 800)
            }, 300)
          }
        }, 60)
      }

      setTimeout(typeStep, currentStep === 0 ? 1000 : 0)
    }
  }, [currentStep])

  const terminalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTo({
        top: terminalContentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [terminalText]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden mt-32 lg:mt-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Floating code elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute text-xs font-mono text-white/20 animate-bounce"
          style={{
            left: element.x,
            top: element.y,
            animationDelay: `${element.delay}ms`,
            animationDuration: "3s",
          }}
        >
          {element.text}
        </div>
      ))}
      
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Left content */}
          <div className="flex-1 lg:max-w-[45%] xl:max-w-[50%] space-y-6 lg:space-y-8 text-start">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                Share Private GitHub Repos <span className="underline decoration-4 underline-offset-8">Securely</span>
              </h1>

              <p className="text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
                Generate secure, time-limited links to share private repositories without adding collaborators. Full
                control, unlimited shares.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 h-12 px-8 group rounded-none"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base text-muted-foreground">
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
          
          {/* Right content - Terminal animation */}
          <div className="flex-1 lg:max-w-[55%] xl:max-w-[50%] w-full lg:pl-8">
            {/* Terminal window */}
            <div className="bg-black border border-white/20 relative scrollbar-hide">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 bg-black">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-white/60 ml-4">Sharing Process — reposcale</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="w-4 h-4 text-white/40" />
                  <span className="text-xs text-white/40">live demo</span>
                </div>
              </div>

              {/* Terminal content */}
              <div
                ref={terminalContentRef}
                className="p-4 font-mono text-sm min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] bg-black"
              >
                <div className="text-green-400 mb-2">Reposcale - Private Repository Sharing</div>
                <div className="text-white/60 mb-4">Watch how easy it is to share your private repos</div>

                <pre className="text-white leading-relaxed whitespace-pre-wrap">
                  {terminalText}
                  {showCursor && <span className="bg-white w-2 h-5 inline-block ml-1"></span>}
                </pre>
              </div>
            </div>

            {/* Floating security badges */}
            <div className="absolute -top-4 -right-4 bg-white text-black px-3 py-1 text-xs font-bold animate-bounce">
              🔒 SECURE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
