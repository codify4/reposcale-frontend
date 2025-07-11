export const metadata = {
    title: 'Shared Repos | Dashboard',
    description: 'Shared Repos',
}

export default function ReposLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black h-svh flex items-center justify-center'>
            {children}
        </div>
    )
}