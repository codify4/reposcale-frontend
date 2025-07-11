import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-10 md:gap-16 items-center justify-center min-h-[60vh]", className)} {...props}>
      <Card className="overflow-hidden p-0 rounded-none bg-black text-white shadow-lg">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-10 w-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-center text-center gap-4">
                <h1 className="text-3xl font-bold mb-2">Connect to your GitHub account</h1>
                <p className="text-muted-foreground text-balance text-lg">
                  Connecting allows us to access your repositories for the experience on the platform to be seamless.
                </p>
              </div>
              <Link href="/dashboard" className="flex flex-col gap-6 mt-4">
                <Button type="button" className="w-full bg-white text-black hover:bg-white/90 rounded-none py-4 text-base flex items-center justify-center gap-3">
                  <Github className="w-5 h-5" />
                  <span className="text-black font-medium">Login with GitHub</span>
                </Button>
              </Link>
            </div>
          </form>
          <div className="relative hidden md:block">
            <Image
              src="/vercel.svg"
              alt="Image"
              width={500}
              height={500}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
