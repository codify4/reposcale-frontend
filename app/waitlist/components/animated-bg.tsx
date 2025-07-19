"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>(
    [],
  )

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: ["white", "#ef4444", "#10b981", "#8b5cf6"][Math.floor(Math.random() * 4)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Large Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M0,200 Q200,100 400,200 T800,200"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,400 Q300,300 600,400 T1200,400"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Morphing Blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full"
          animate={{
            borderRadius: ["50% 50% 50% 50%", "60% 40% 60% 40%", "40% 60% 40% 60%", "50% 50% 50% 50%"],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Orbiting Elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 w-2 h-2 bg-green-500 rounded-full -translate-x-1/2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-0 w-2 h-2 bg-purple-500 rounded-full -translate-y-1/2"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </motion.div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/30" />
    </div>
  )
}
