import { AnimatedBackground } from "./components/animated-bg"
import { WaitlistForm } from "./components/waitlist-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-black relative hidden lg:block overflow-hidden">
        <AnimatedBackground />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Image src="/reposcale.svg" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  )
}
