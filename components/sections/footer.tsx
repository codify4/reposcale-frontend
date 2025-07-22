import Image from "next/image"

export function Footer() {
    return (
        <footer className="border-t border-border/10 bg-black flex items-center justify-center">
            <div className="container mx-auto px-6 lg:px-8 py-16 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex items-center space-x-3 mb-6">
                        <Image src="/reposcale.svg" alt="Logo" width={100} height={100} />
                    </div>
                    <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                        Secure, effortless private GitHub repository sharing. One-time purchase, unlimited shares, full control.
                    </p>
                </div>
                <div className="border-t border-border pt-5 text-center">
                    <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} reposcale. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}