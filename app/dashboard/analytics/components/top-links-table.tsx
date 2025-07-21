"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus, Trophy } from "lucide-react"

const topLinksData = [
  {
    rank: 1,
    link: "github.com/user/awesome-project",
    clicks: 1247,
    uniqueVisitors: 892,
    conversionRate: 71.5,
    growth: 12.3,
    trend: "up"
  },
  {
    rank: 2,
    link: "github.com/user/react-library",
    clicks: 1034,
    uniqueVisitors: 756,
    conversionRate: 73.1,
    growth: 8.7,
    trend: "up"
  },
  {
    rank: 3,
    link: "github.com/user/node-api",
    clicks: 892,
    uniqueVisitors: 634,
    conversionRate: 71.1,
    growth: -2.1,
    trend: "down"
  },
  {
    rank: 4,
    link: "github.com/user/vue-component",
    clicks: 756,
    uniqueVisitors: 523,
    conversionRate: 69.2,
    growth: 5.4,
    trend: "up"
  },
  {
    rank: 5,
    link: "github.com/user/python-script",
    clicks: 634,
    uniqueVisitors: 445,
    conversionRate: 70.2,
    growth: 0,
    trend: "neutral"
  },
  {
    rank: 6,
    link: "github.com/user/typescript-utils",
    clicks: 523,
    uniqueVisitors: 378,
    conversionRate: 72.3,
    growth: 15.2,
    trend: "up"
  },
  {
    rank: 7,
    link: "github.com/user/css-framework",
    clicks: 445,
    uniqueVisitors: 312,
    conversionRate: 70.1,
    growth: -1.8,
    trend: "down"
  },
  {
    rank: 8,
    link: "github.com/user/mobile-app",
    clicks: 378,
    uniqueVisitors: 267,
    conversionRate: 70.6,
    growth: 3.2,
    trend: "up"
  },
  {
    rank: 9,
    link: "github.com/user/database-tool",
    clicks: 312,
    uniqueVisitors: 223,
    conversionRate: 71.5,
    growth: 7.8,
    trend: "up"
  },
  {
    rank: 10,
    link: "github.com/user/ai-model",
    clicks: 267,
    uniqueVisitors: 189,
    conversionRate: 70.8,
    growth: -0.5,
    trend: "down"
  }
]

export function TopLinksTable() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-400" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-400" />
      default:
        return <Minus className="w-4 h-4 text-gray-400" />
    }
  }

  const getGrowthColor = (growth: number) => {
    if (growth > 0) return "text-green-400"
    if (growth < 0) return "text-red-400"
    return "text-gray-400"
  }

  return (
    <Card className="bg-black border-border/20 rounded-none text-white w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Top 10 Shared Links
        </CardTitle>
        <CardDescription className="text-gray-400">
          Ranking based on total clicks and engagement metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {topLinksData.map((link) => (
            <div 
              key={link.rank}
              className="flex items-center justify-between p-4 border border-border/20 rounded-none hover:bg-white/5 transition-colors"
            >
              {/* Rank */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-bold text-sm">
                  {link.rank}
                </div>
                
                {/* Link Info */}
                <div className="flex-1">
                  <div className="font-medium text-sm text-white">{link.link}</div>
                  <div className="text-xs text-gray-400 mt-1">Repository link</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{link.clicks.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Total Clicks</div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{link.uniqueVisitors.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Unique Visitors</div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{link.conversionRate}%</div>
                  <div className="text-xs text-gray-400">Conversion Rate</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    {getTrendIcon(link.trend)}
                    <span className={`text-sm font-medium ${getGrowthColor(link.growth)}`}>
                      {link.growth > 0 ? '+' : ''}{link.growth}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">Growth</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 