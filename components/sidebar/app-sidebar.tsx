"use client"

import Image from "next/image"
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
import { WaypointsIcon } from "../ui/waypoints"
import { TerminalIcon } from "../ui/terminal"
import { CogIcon } from "../ui/cog"
import { FoldersIcon } from "../ui/folders"


const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Shared Repos",
            url: "/dashboard",
            icon: <WaypointsIcon />,
        },
        {
            title: "Buckets",
            url: "/dashboard/buckets",
            icon: <FoldersIcon />,
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
                            <div className="flex items-center gap-2">
                                <Image src="/reposcale.svg" alt="reposcale" width={100} height={100} />
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
