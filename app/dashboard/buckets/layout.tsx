export const metadata = {
    title: 'buckets | reposcale',
    description: 'Shared Repos',
}

export default function BucketsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black h-svh flex items-center justify-center'>
            {children}
        </div>
    )
}