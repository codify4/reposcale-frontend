"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, User, Globe, AlertTriangle } from "lucide-react"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

function SettingsPage() {
    const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [deleteConfirmText, setDeleteConfirmText] = useState("")

    const handleLogout = () => {
        // TODO: Implement logout logic
        console.log("Logging out...")
        setLogoutDialogOpen(false)
    }

    const handleDeleteAccount = () => {
        // TODO: Implement delete account logic
        console.log("Deleting account...")
        setDeleteDialogOpen(false)
        setDeleteConfirmText("")
    }

    return (
        <div className="w-11/12 bg-black text-white">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-gray-400">Manage your account and preferences</p>
            </div>
            <div className="w-full flex flex-col gap-8 mt-5">
                <Card className="bg-black border-border/20 rounded-none text-white w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            Profile Information
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Update your personal information and profile picture
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Avatar className="w-16 h-16">
                                <AvatarImage src="/avatars/shadcn.jpg" />
                                <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                                    shadcn
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input 
                                    id="name" 
                                    defaultValue="shadcn" 
                                    className="bg-black border-border/20 text-white placeholder:text-gray-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    id="email" 
                                    defaultValue="m@example.com" 
                                    className="bg-black border-border/20 text-white placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                        
                        <Button className="bg-white hover:bg-white/80 text-black">
                            Save Changes
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-black border-border/20 rounded-none text-white w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-red-400">
                            <Globe className="w-5 h-5" />
                            Danger Zone
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Irreversible and destructive actions
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-red-400">Log Out</p>
                                <p className="text-sm text-gray-400">Sign out of your account</p>
                            </div>
                            <Button 
                                className="bg-red-500/50 border-red-500/20 text-white hover:bg-red-500/30 flex items-center gap-2"
                                onClick={() => setLogoutDialogOpen(true)}
                            >
                                <LogOut className="w-4 h-4" />
                                Log Out
                            </Button>
                        </div>
                        <Separator className="bg-border/20" />
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-red-400">Delete Account</p>
                                <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
                            </div>
                            <Button 
                                className="bg-red-500/50 border-red-500/20 text-white hover:bg-red-500/30 flex items-center gap-2"
                                onClick={() => setDeleteDialogOpen(true)}
                            >
                                Delete Account
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
                <DialogContent className="rounded-none bg-black border-border/20 text-white">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <LogOut className="w-5 h-5" />
                            Confirm Logout
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                            Are you sure you want to log out?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button 
                            className="border-border/20 text-white hover:bg-white/10"
                            onClick={() => setLogoutDialogOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button 
                            className="bg-red-500/50 border-red-500/20 text-white hover:bg-red-500/30"
                            onClick={handleLogout}
                        >
                            Log Out
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent className="rounded-none bg-black border-border/20 text-white">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-red-400">
                            <AlertTriangle className="w-5 h-5" />
                            Delete Account
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                            This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="delete-confirm" className="text-red-400">
                                Type "username" to confirm
                            </Label>
                            <Input 
                                id="delete-confirm"
                                value={deleteConfirmText}
                                onChange={(e) => setDeleteConfirmText(e.target.value)}
                                placeholder="username"
                                className="mt-3 bg-black border-border/20 text-white placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button 
                            className="border-border/20 text-white hover:bg-white/10"
                            onClick={() => {
                                setDeleteDialogOpen(false)
                                setDeleteConfirmText("")
                            }}
                        >
                            Cancel
                        </Button>
                        <Button 
                            className="bg-red-500/50 border-red-500/20 text-white hover:bg-red-500/30"
                            onClick={handleDeleteAccount}
                            disabled={deleteConfirmText !== "username"}
                        >
                            Delete Account
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SettingsPage