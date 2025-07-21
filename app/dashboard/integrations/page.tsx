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
    Calendar
} from "lucide-react"

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

function IntegrationsPage() {
    const [githubIntegration, setGithubIntegration] = useState<GitHubIntegration>({
        id: "github-1",
        name: "GitHub",
        description: "Connect your GitHub repositories to track metrics and analytics",
        status: "connected",
        connectedAt: "2024-01-15T10:30:00Z",
        lastSync: "2024-01-20T14:22:00Z",
        repositories: 12,
        permissions: ["repo", "read:org", "read:user"],
        webhookUrl: "https://api.reposcale.com/webhooks/github/12345"
    })

    const [showDisconnectDialog, setShowDisconnectDialog] = useState(false)
    const [showRevokeDialog, setShowRevokeDialog] = useState(false)
    const [showWebhookDialog, setShowWebhookDialog] = useState(false)

    const handleDisconnect = () => {
        setGithubIntegration(prev => ({ ...prev, status: "disconnected" }))
        setShowDisconnectDialog(false)
    }

    const handleRevoke = () => {
        setGithubIntegration(prev => ({ ...prev, status: "disconnected" }))
        setShowRevokeDialog(false)
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "connected":
                return <CheckCircle className="w-4 h-4 text-green-500" />
            case "disconnected":
                return <Clock className="w-4 h-4 text-yellow-500" />
            case "error":
                return <AlertTriangle className="w-4 h-4 text-red-500" />
            default:
                return <Clock className="w-4 h-4 text-neutral-400" />
        }
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "connected":
                return <Badge variant="default" className="bg-green-500 text-white border-0">Connected</Badge>
            case "disconnected":
                return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Disconnected</Badge>
            case "error":
                return <Badge variant="destructive" className="bg-red-500 text-white border-0">Error</Badge>
            default:
                return <Badge variant="outline">Unknown</Badge>
        }
    }

    return (
        <div className="bg-black min-h-screen p-6 w-full">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-white text-3xl font-bold mb-2">Integrations</h1>
                    <p className="text-neutral-400">Manage your connected services and API integrations</p>
                </div>

                {/* GitHub Integration Card */}
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
                                        {getStatusIcon(githubIntegration.status)}
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

                    <CardContent className="space-y-6">
                        {/* Connection Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-black font-semibold text-sm uppercase tracking-wide">Connection Details</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Connected:</span>
                                        <span className="text-black">{new Date(githubIntegration.connectedAt).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Last Sync:</span>
                                        <span className="text-black">{new Date(githubIntegration.lastSync).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Repositories:</span>
                                        <span className="text-black flex items-center gap-1">
                                            <GitBranch className="w-4 h-4" />
                                            {githubIntegration.repositories}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-black font-semibold text-sm uppercase tracking-wide">Permissions</h3>
                                <div className="space-y-2">
                                    {githubIntegration.permissions.map((permission, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-neutral-700 text-sm">{permission}</span>
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

                {/* Webhook Configuration Dialog */}
                <Dialog open={showWebhookDialog} onOpenChange={setShowWebhookDialog}>
                    <DialogContent className="bg-white border border-neutral-200 text-black max-w-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-black">Webhook Configuration</DialogTitle>
                            <DialogDescription className="text-neutral-600">
                                Configure webhook settings for GitHub integration
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <label className="text-black text-sm font-medium mb-2 block">Webhook URL</label>
                                <div className="bg-neutral-50 p-3 border border-neutral-200">
                                    <p className="text-black font-mono text-sm">{githubIntegration.webhookUrl}</p>
                                </div>
                            </div>
                            <div>
                                <label className="text-black text-sm font-medium mb-2 block">Secret Token</label>
                                <input
                                    type="password"
                                    className="w-full bg-neutral-50 border border-neutral-200 text-black p-3 text-sm"
                                    placeholder="Enter webhook secret"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-black text-sm font-medium">Events</label>
                                <div className="space-y-2">
                                    {["push", "pull_request", "issues", "repository"].map((event) => (
                                        <label key={event} className="flex items-center gap-2">
                                            <input type="checkbox" className="bg-neutral-50 border-neutral-200" defaultChecked />
                                            <span className="text-neutral-700 text-sm capitalize">{event.replace("_", " ")}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setShowWebhookDialog(false)}
                                className="border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                            >
                                Cancel
                            </Button>
                            <Button className="bg-black text-white hover:bg-neutral-800">
                                Save Configuration
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Additional Integrations Placeholder */}
                <div className="mt-8">
                    <h2 className="text-white text-xl font-semibold mb-4">Available Integrations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="bg-white border border-neutral-200 text-black opacity-50">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-neutral-400 text-lg">GitLab</CardTitle>
                                        <CardDescription className="text-neutral-500">Coming Soon</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card className="bg-white border border-neutral-200 text-black opacity-50">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-neutral-400 text-lg">Bitbucket</CardTitle>
                                        <CardDescription className="text-neutral-500">Coming Soon</CardDescription>
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