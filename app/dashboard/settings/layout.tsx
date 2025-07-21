export const metadata = {
    title: 'Settings | Dashboard',
    description: 'Settings',
}

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black min-h-svh flex items-center justify-center p-5'>
            {children}
        </div>
    )
}