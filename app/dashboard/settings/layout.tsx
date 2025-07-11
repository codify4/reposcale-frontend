export const metadata = {
    title: 'Settings | Dashboard',
    description: 'Settings',
}

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black h-svh flex items-center justify-center'>
            {children}
        </div>
    )
}