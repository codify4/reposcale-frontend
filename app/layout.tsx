import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "reposcale",
    description: "reposcale is a tool for sharing your github repositories",
    alternates: {
        canonical: "https://reposcale.vercel.app",
    },
    icons: {
        icon: "/rs-logo.png",
        apple: "/rs-logo.png",
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} antialiased bg-black`}>
                {children}
                <Analytics />
                <Toaster 
                    position="top-center"
                />
            </body>
        </html>
    )
}
