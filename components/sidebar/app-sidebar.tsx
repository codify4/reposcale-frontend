"use client"

import * as React from "react"
import {
  Github,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import PremiumCard from "./premium-card"
import { ChartBarIncreasingIcon } from "../ui/chart-bar-increasing"
import { HomeIcon } from "../ui/home"
import { WaypointsIcon } from "../ui/waypoints"
import { TerminalIcon } from "../ui/terminal"
import { CogIcon } from "../ui/cog"


const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Home",
            url: "/dashboard",
            icon: <HomeIcon />,
        },
        {
            title: "Shared Repos",
            url: "/dashboard/repos",
            icon: <WaypointsIcon />,
        },
        {
            title: "Analytics",
            url: "/dashboard/analytics",
            icon: <ChartBarIncreasingIcon />,
        },
        {
            title: "Integrations",
            url: "/dashboard/integrations",
            icon: <TerminalIcon />,
        },
        {
            title: "Settings",
            url: "/dashboard/settings",
            icon: <CogIcon />,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props} className="bg-sidebar border-r border-border/20">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                        <div>
                            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                <Github className="size-4" />
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="font-medium text-white">reposcale</span>
                            </div>
                        </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <PremiumCard />
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
