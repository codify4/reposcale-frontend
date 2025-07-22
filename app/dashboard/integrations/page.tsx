"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
    Github, 
    ExternalLink, 
    Settings, 
    Trash2, 
    AlertTriangle,
    CheckCircle,
    Clock,
    Users,
    GitBranch,
    Calendar,
    Gitlab
} from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface GitHubIntegration {
    id: string
    name: string
    description: string
    status: "connected" | "disconnected" | "error"
    connectedAt: string
    lastSync: string
    repositories: number
    permissions: string[]
    webhookUrl: string
}
const BitbucketIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.157 4.63h14.314c.21 0 .37.188.34.395l-.611 4.07h-9.29l.687 4.465h3.434l.528-3.434h4.486l-1.192 7.95a.34.34 0 0 1-.34.292H6.801a.34.34 0 0 1-.34-.293L4.504 6.025a.343.343 0 0 1 .34-.394Z" clipRule="evenodd"></path>
        </svg>
    )
}
function IntegrationsPage() {
    const [githubIntegration, setGithubIntegration] = useState<GitHubIntegration>({
        id: "github-1",
        name: "GitHub",
        description: "Connect your GitHub repositories to track metrics and analytics",
        status: "connected",
        connectedAt: "2024-01-15T10:30:00Z",
        lastSync: "2024-01-20T14:22:00Z",
        repositories: 12,
        permissions: ["repo", "user", "user:email"],
        webhookUrl: "https://api.reposcale.com/webhooks/github/12345"
    })

    const [showRevokeDialog, setShowRevokeDialog] = useState(false)

    const handleRevoke = () => {
        setGithubIntegration(prev => ({ ...prev, status: "disconnected" }))
        setShowRevokeDialog(false)
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "connected":
                return <Badge variant="default" className="bg-green-500/50 text-white border-0">Connected</Badge>
            case "disconnected":
                return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Disconnected</Badge>
            case "error":
                return <Badge variant="destructive" className="bg-red-500 text-white border-0">Error</Badge>
            case "soon":
                return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Coming Soon</Badge>
            default:
                return <Badge variant="outline">Unknown</Badge>
        }
    }

    return (
        <div className="bg-black min-h-screen p-6 w-full">
            <div className="max-w-4xl mx-auto">
                <div className='flex flex-row items-center justify-between w-full'>
                    <div className='w-full lg:w-auto'>
                        <h1 className='text-white text-xl lg:text-3xl font-bold'>Integrations</h1>
                        <p className='text-gray-400 mt-1'>Manage your Git provider integrations</p>
                    </div>
                    <SidebarTrigger className="lg:hidden" />
                </div>

                <Card className="border border-border/20 rounded-none bg-black text-white">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-black flex items-center justify-center">
                                    <Github className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <CardTitle className="text-white text-xl flex items-center gap-2">
                                        {githubIntegration.name}
                                    </CardTitle>
                                    <CardDescription className="text-neutral-600 mt-1">
                                        {githubIntegration.description}
                                    </CardDescription>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {getStatusBadge(githubIntegration.status)}
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-3">
                                <h3 className="text-white font-medium text-sm tracking-wider">Connection</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs text-neutral-500 mb-1">Connected</div>
                                        <div className="text-white font-medium">{new Date(githubIntegration.connectedAt).toLocaleDateString()}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-500 mb-1">Last Sync</div>
                                        <div className="text-white font-medium">{new Date(githubIntegration.lastSync).toLocaleDateString()}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-white font-medium text-sm tracking-wider">Repositories</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs text-neutral-500 mb-1">Total Connected</div>
                                        <div className="text-white font-medium flex items-center gap-2">
                                            <GitBranch className="w-4 h-4 text-neutral-400" />
                                            {githubIntegration.repositories}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-white font-medium text-sm tracking-wider">Permissions</h3>
                                <div className="space-y-2">
                                    {githubIntegration.permissions.map((permission, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                            <span className="text-white text-sm">{permission}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="flex gap-5">
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                className="border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                                onClick={() => window.open("https://github.com", "_blank")}
                            >
                                <ExternalLink className="w-4 h-4" />
                                View on GitHub
                            </Button>
                        </div>

                        <div className="flex gap-2">
                            <Dialog open={showRevokeDialog} onOpenChange={setShowRevokeDialog}>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="destructive"
                                        className="bg-red-600 hover:bg-red-700 text-white border-0"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Revoke Access
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-black border border-border/20 text-white rounded-none">
                                    <DialogHeader>
                                        <DialogTitle className="text-white flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-red-500" />
                                            Revoke GitHub Access
                                        </DialogTitle>
                                        <DialogDescription className="text-neutral-600">
                                            This action will permanently revoke access to your GitHub account and 
                                            delete all associated data. This action cannot be undone.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button
                                            onClick={() => setShowRevokeDialog(false)}
                                            className="border-border/20 text-white hover:bg-white/10"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            onClick={handleRevoke}
                                            className="bg-red-600/50 hover:bg-red-700/50 text-white border-0"
                                        >
                                            Revoke Access
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardFooter>
                </Card>

                <div className="mt-8">
                    <h2 className="text-white text-xl font-semibold mb-4">More Integrations</h2>
                    <div className="flex flex-col gap-4">
                        <Card className="bg-black border border-border/20 text-white rounded-none">
                            <CardHeader>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black flex items-center justify-center">
                                            <Gitlab className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-white text-xl flex items-center gap-2">
                                                GitLab
                                            </CardTitle>
                                            <CardDescription className="text-neutral-600 mt-1">
                                                Connect your GitLab account.
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {getStatusBadge("soon")}
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card className="bg-black border border-border/20 text-white rounded-none">
                            <CardHeader>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black flex items-center justify-center">
                                            <BitbucketIcon />
                                        </div>
                                        <div>
                                            <CardTitle className="text-white text-xl flex items-center gap-2">
                                                Bitbucket
                                            </CardTitle>
                                            <CardDescription className="text-neutral-600 mt-1">
                                                Connect your Bitbucket account.
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {getStatusBadge("soon")}
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntegrationsPage