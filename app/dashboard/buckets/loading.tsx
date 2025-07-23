import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function BucketsLoading() {
  return (
    <main className='bg-black min-h-screen p-5 lg:p-10'>
      <div className='max-w-7xl mx-auto space-y-6'>
        {/* Header skeleton */}
        <div className='flex flex-col lg:flex-row w-full items-center lg:justify-between'>
          <div className='flex flex-row items-center justify-between w-full'>
            <div className='w-full lg:w-auto'>
              <Skeleton className='h-8 lg:h-10 w-32 bg-white/10' />
              <Skeleton className='h-4 w-64 mt-2 bg-white/5' />
            </div>
          </div>
          <Skeleton className='w-full lg:w-32 h-10 mt-3 bg-white/10' />
        </div>

        {/* Bucket cards skeleton */}
        <div className='grid gap-6'>
          {[1, 2, 3].map((i) => (
            <Card key={i} className='bg-black border border-white/10 rounded-none'>
              <CardHeader className='pb-4'>
                <div className='flex items-start justify-between'>
                  <div className='flex-1 space-y-2'>
                    <div className='flex items-center gap-3'>
                      <Skeleton className='h-6 w-48 bg-white/10' />
                      <Skeleton className='h-5 w-16 bg-white/5' />
                    </div>
                    <Skeleton className='h-4 w-full bg-white/5' />
                  </div>
                  <div className='flex items-center gap-1'>
                    <Skeleton className='h-8 w-8 bg-white/5' />
                    <Skeleton className='h-8 w-8 bg-white/5' />
                  </div>
                </div>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className='flex items-center gap-3'>
                      <Skeleton className='w-10 h-10 bg-white/5' />
                      <div>
                        <Skeleton className='h-5 w-12 bg-white/10' />
                        <Skeleton className='h-3 w-16 mt-1 bg-white/5' />
                      </div>
                    </div>
                  ))}
                </div>

                <div className='my-6'>
                  <Skeleton className='h-px w-full bg-white/10' />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <Skeleton className='h-8 w-24 bg-white/5' />
                    <Skeleton className='h-8 w-24 bg-white/5' />
                  </div>
                  <Skeleton className='h-4 w-32 bg-white/5' />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

export default BucketsLoading 