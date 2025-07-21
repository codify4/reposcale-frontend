export const metadata = {
    title: 'Integrations | Dashboard',
    description: 'Integrations',
}

export default function IntegrationsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black min-h-svh flex items-center justify-center p-5'>
            {children}
        </div>
    )
}