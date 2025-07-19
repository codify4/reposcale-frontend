"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group bg-black rounded-none text-white border border-white/20"
      {...props}
    />
  )
}

export { Toaster }
