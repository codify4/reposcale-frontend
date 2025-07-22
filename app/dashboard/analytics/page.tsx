"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GitBranch, Database } from "lucide-react"
import { LinkMemberChart } from "./components/member-chart"
import { TopLinksTable } from "./components/top-links-table"
import { SidebarTrigger } from "@/components/ui/sidebar"

const mockData = {
    totalSharedRepos: 24,
    totalBuckets: 8,
    monthlyUsers: [
        { month: "Jan", users: 120 },
        { month: "Feb", users: 180 },
        { month: "Mar", users: 220 },
        { month: "Apr", users: 280 },
        { month: "May", users: 320 },
        { month: "Jun", users: 380 }
    ],
    linkAnalytics: [
        { name: "github.com/user/repo1", clicks: 156, uniqueVisitors: 89 },
        { name: "github.com/user/repo2", clicks: 203, uniqueVisitors: 134 },
        { name: "github.com/user/repo3", clicks: 98, uniqueVisitors: 67 },
        { name: "github.com/user/repo4", clicks: 342, uniqueVisitors: 201 }
    ],
    memberData: [
        { month: "January", "github.com/user/repo1": 45, "github.com/user/repo2": 67, "github.com/user/repo3": 23, "github.com/user/repo4": 89 },
        { month: "February", "github.com/user/repo1": 52, "github.com/user/repo2": 78, "github.com/user/repo3": 31, "github.com/user/repo4": 95 },
        { month: "March", "github.com/user/repo1": 48, "github.com/user/repo2": 82, "github.com/user/repo3": 28, "github.com/user/repo4": 102 },
        { month: "April", "github.com/user/repo1": 61, "github.com/user/repo2": 91, "github.com/user/repo3": 35, "github.com/user/repo4": 118 },
        { month: "May", "github.com/user/repo1": 58, "github.com/user/repo2": 87, "github.com/user/repo3": 42, "github.com/user/repo4": 125 },
        { month: "June", "github.com/user/repo1": 67, "github.com/user/repo2": 103, "github.com/user/repo3": 49, "github.com/user/repo4": 142 }
    ]
}

function AnalyticsPage() {
    return (
        <div className="w-11/12 bg-black text-white">
            <div className='flex flex-row items-center justify-between w-full'>
                <div className='w-full lg:w-auto'>
                    <h1 className='text-white text-xl lg:text-3xl font-bold'>Analytics</h1>
                    <p className='text-gray-400 mt-1'>Track your analytics</p>
                </div>
                <SidebarTrigger className="lg:hidden" />
            </div>
            
            <div className="w-full flex flex-col gap-8 mt-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-black border-border/20 rounded-none text-white">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-sm font-medium">
                                <GitBranch className="w-4 h-4" />
                                Total Shared Repos
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{mockData.totalSharedRepos}</div>
                            <p className="text-xs text-gray-400 mt-1">Active repositories</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-black border-border/20 rounded-none text-white">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-sm font-medium">
                                <Database className="w-4 h-4" />
                                Total Buckets
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{mockData.totalBuckets}</div>
                            <p className="text-xs text-gray-400 mt-1">Storage buckets</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-black border-border/20 rounded-none text-white">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-sm font-medium">
                                <Users className="w-4 h-4" />
                                Monthly Users
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{mockData.monthlyUsers[mockData.monthlyUsers.length - 1].users}</div>
                            <p className="text-xs text-gray-400 mt-1">This month</p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-black border-border/20 rounded-none text-white w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            Members by Shared Repos
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Track member growth across all shared repos over time
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LinkMemberChart />
                    </CardContent>
                </Card>

                <TopLinksTable />
            </div>
        </div>
    )
}

export default AnalyticsPage