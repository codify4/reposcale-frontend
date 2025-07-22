"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, TrendingDown, Minus, Trophy } from "lucide-react"
import { topLinksData } from "@/constants/top-links"

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
        <Table>
          <TableHeader>
            <TableRow className="border-border/20 hover:bg-white/5">
              <TableHead className="text-gray-400 font-medium">Rank</TableHead>
              <TableHead className="text-gray-400 font-medium">Link</TableHead>
              <TableHead className="text-gray-400 font-medium text-center">Total Clicks</TableHead>
              <TableHead className="text-gray-400 font-medium text-center">Unique Visitors</TableHead>
              <TableHead className="text-gray-400 font-medium text-center">Conversion Rate</TableHead>
              <TableHead className="text-gray-400 font-medium text-center">Growth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topLinksData.map((link) => (
              <TableRow 
                key={link.rank}
                className="border-border/20 hover:bg-white/5 transition-colors"
              >
                <TableCell className="font-medium">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-md font-semibold text-sm ${link.rank <= 3 ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' : 'bg-white/5 text-white'}`}>
                    {link.rank}
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-white">{link.link}</div>
                    <div className="text-xs text-gray-400">Repository link</div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="text-base font-semibold text-white">{link.clicks.toLocaleString()}</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="text-base font-semibold text-white">{link.uniqueVisitors.toLocaleString()}</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="text-base font-semibold text-white">{link.conversionRate}%</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    {getTrendIcon(link.trend)}
                    <span className={`text-sm font-medium ${getGrowthColor(link.growth)}`}>
                      {link.growth > 0 ? '+' : ''}{link.growth}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 