"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "January", "github.com/user/repo1": 45, "github.com/user/repo2": 67, "github.com/user/repo3": 23, "github.com/user/repo4": 89 },
  { month: "February", "github.com/user/repo1": 52, "github.com/user/repo2": 78, "github.com/user/repo3": 31, "github.com/user/repo4": 95 },
  { month: "March", "github.com/user/repo1": 48, "github.com/user/repo2": 82, "github.com/user/repo3": 28, "github.com/user/repo4": 102 },
  { month: "April", "github.com/user/repo1": 61, "github.com/user/repo2": 91, "github.com/user/repo3": 35, "github.com/user/repo4": 118 },
  { month: "May", "github.com/user/repo1": 58, "github.com/user/repo2": 87, "github.com/user/repo3": 42, "github.com/user/repo4": 125 },
  { month: "June", "github.com/user/repo1": 67, "github.com/user/repo2": 103, "github.com/user/repo3": 49, "github.com/user/repo4": 142 }
]

const chartConfig = {
  "github.com/user/repo1": {
    label: "Repo 1",
    color: "#3b82f6", // Blue
  },
  "github.com/user/repo2": {
    label: "Repo 2", 
    color: "#10b981", // Green
  },
  "github.com/user/repo3": {
    label: "Repo 3",
    color: "#f59e0b", // Amber
  },
  "github.com/user/repo4": {
    label: "Repo 4",
    color: "#8b5cf6", // Purple
  },
} satisfies ChartConfig

export function LinkMemberChart() {
  const [selectedRepos, setSelectedRepos] = useState<string[]>([
    "github.com/user/repo1",
    "github.com/user/repo2", 
    "github.com/user/repo3",
    "github.com/user/repo4"
  ])

  const repos = [
    { key: "github.com/user/repo1", label: "Repo 1", color: "#3b82f6" },
    { key: "github.com/user/repo2", label: "Repo 2", color: "#10b981" },
    { key: "github.com/user/repo3", label: "Repo 3", color: "#f59e0b" },
    { key: "github.com/user/repo4", label: "Repo 4", color: "#8b5cf6" },
  ]

  const handleRepoSelect = (repoKey: string) => {
    setSelectedRepos(prev => 
      prev.includes(repoKey) 
        ? prev.filter(repo => repo !== repoKey)
        : [...prev, repoKey]
    )
  }

  return (
    <div className="w-full space-y-4">
      {/* Repository Selection */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-white">Select Repositories:</span>
        <div className="flex flex-wrap gap-2">
          {repos.map((repo) => (
            <Badge
              key={repo.key}
              variant={selectedRepos.includes(repo.key) ? "default" : "secondary"}
              className={`cursor-pointer transition-colors ${
                selectedRepos.includes(repo.key) 
                  ? "text-white border-white/20"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
              style={{
                backgroundColor: selectedRepos.includes(repo.key) ? `${repo.color}80` : undefined
              }}
              onClick={() => handleRepoSelect(repo.key)}
            >
              <div 
                className="w-2 h-2 rounded-full mr-2" 
                style={{ backgroundColor: repo.color }}
              />
              {repo.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
          height={300}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-gray-700" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value: string) => value.slice(0, 3)}
            className="text-white"
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillRepo1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillRepo2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillRepo3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillRepo4" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          {selectedRepos.includes("github.com/user/repo1") && (
            <Area
              dataKey="github.com/user/repo1"
              type="natural"
              fill="url(#fillRepo1)"
              fillOpacity={0.4}
              stroke="#3b82f6"
              strokeWidth={2}
            />
          )}
          {selectedRepos.includes("github.com/user/repo2") && (
            <Area
              dataKey="github.com/user/repo2"
              type="natural"
              fill="url(#fillRepo2)"
              fillOpacity={0.4}
              stroke="#10b981"
              strokeWidth={2}
            />
          )}
          {selectedRepos.includes("github.com/user/repo3") && (
            <Area
              dataKey="github.com/user/repo3"
              type="natural"
              fill="url(#fillRepo3)"
              fillOpacity={0.4}
              stroke="#f59e0b"
              strokeWidth={2}
            />
          )}
          {selectedRepos.includes("github.com/user/repo4") && (
            <Area
              dataKey="github.com/user/repo4"
              type="natural"
              fill="url(#fillRepo4)"
              fillOpacity={0.4}
              stroke="#8b5cf6"
              strokeWidth={2}
            />
          )}
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
