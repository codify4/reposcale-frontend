import React from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function IntegrationsLoading() {
  return (
    <div className="bg-black min-h-screen p-6 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Header skeleton */}
        <div className='flex flex-row items-center justify-between w-full'>
          <div className='w-full lg:w-auto'>
            <Skeleton className='h-8 lg:h-10 w-40 bg-white/10' />
            <Skeleton className='h-4 w-64 mt-2 bg-white/5' />
          </div>
        </div>

        {/* GitHub Integration Card */}
        <Card className="border border-border/20 rounded-none bg-black text-white mt-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Skeleton className="w-12 h-12 bg-white/10" />
                <div>
                  <Skeleton className="h-6 w-32 bg-white/10" />
                  <Skeleton className="h-4 w-80 mt-2 bg-white/5" />
                </div>
              </div>
              <Skeleton className="h-6 w-24 bg-green-500/20" />
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-4 w-24 bg-white/10" />
                  <div className="space-y-4">
                    {[1, 2].map((j) => (
                      <div key={j}>
                        <Skeleton className="h-3 w-20 mb-1 bg-white/5" />
                        <Skeleton className="h-4 w-32 bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex gap-5">
            <Skeleton className="h-10 w-32 bg-white/10" />
            <Skeleton className="h-10 w-32 bg-red-500/20" />
          </CardFooter>
        </Card>

        {/* More Integrations Section */}
        <div className="mt-8">
          <Skeleton className="h-6 w-48 mb-4 bg-white/10" />
          <div className="flex flex-col gap-4">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-black border border-border/20 text-white rounded-none">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <Skeleton className="w-12 h-12 bg-white/10" />
                      <div>
                        <Skeleton className="h-6 w-24 bg-white/10" />
                        <Skeleton className="h-4 w-48 mt-2 bg-white/5" />
                      </div>
                    </div>
                    <Skeleton className="h-6 w-24 bg-yellow-500/20" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrationsLoading 