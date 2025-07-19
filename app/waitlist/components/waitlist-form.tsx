"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight, Loader2 } from "lucide-react"
import { addToWaitlist } from "@/actions/waitlist"
import { toast } from "sonner"

export function WaitlistForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    const response = await addToWaitlist(formData);
    if (response.error) {
      toast.error("Failed to add to waitlist!", {
        style: {
          background: 'black',
          color: 'white',
          border: '1px solid white',
          borderRadius: '0',
        },
      })
    }

    toast.success("Added to waitlist!", {
      style: {
        background: 'black',
        color: 'white',
        border: '1px solid white',
        borderRadius: '0',
      },
    });

    setIsLoading(false)
    return response
  }
  return (
    <form 
      action={handleSubmit} 
      className={cn("flex flex-col gap-6", className)} 
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-white">Join the Waitlist</h1>
        <p className="text-muted-foreground text-base">
          Enter a name and email below to join the waitlist for 50% off on reposcale when we launch.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input id="name" name="name" type="text" className="text-white" placeholder="John Doe" required autoComplete="off"/>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input id="email" name="email" type="email" className="text-white" placeholder="john@example.com" required autoComplete="off"/>
        </div>
        <Button type="submit" className="group w-full bg-white text-black hover:bg-white/90">
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Join Waitlist
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
