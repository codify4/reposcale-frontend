export const metadata = {
    title: 'Analytics | Dashboard',
    description: 'Analytics',
}

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black min-h-svh flex items-center justify-center p-5'>
            {children}
        </div>
    )
}