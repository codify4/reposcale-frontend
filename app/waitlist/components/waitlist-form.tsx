import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight } from "lucide-react"

export function WaitlistForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-white">Join the Waitlist</h1>
        <p className="text-muted-foreground text-base">
          Enter a name and email below to join the waitlist for 50% off on reposcale when we launch.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input id="name" type="text" className="text-white" placeholder="John Doe" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input id="email" type="email" className="text-white" placeholder="john@example.com" required />
        </div>
        <Button type="submit" className="group w-full bg-white text-black hover:bg-white/90">
          Join Waitlist
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </form>
  )
}
