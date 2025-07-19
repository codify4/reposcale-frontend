export const metadata = {
    title: "Waitlist | reposcale",
    description: "Waitlist for reposcale",
};

export default function WaitlistLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
