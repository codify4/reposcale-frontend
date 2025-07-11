export const metadata = {
    title: 'Integrations | Dashboard',
    description: 'Integrations',
}

export default function IntegrationsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black h-svh flex items-center justify-center'>
            {children}
        </div>
    )
}