import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function AnalyticsLoading() {
  return (
    <div className="w-11/12 bg-black text-white">
      {/* Header skeleton */}
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='w-full lg:w-auto'>
          <Skeleton className='h-8 lg:h-10 w-32 bg-white/10' />
          <Skeleton className='h-4 w-48 mt-2 bg-white/5' />
        </div>
      </div>
      
      <div className="w-full flex flex-col gap-8 mt-5">
        {/* Stats cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-black border-border/20 rounded-none text-white">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-4 h-4 bg-white/10" />
                  <Skeleton className="h-4 w-32 bg-white/10" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 bg-white/10" />
                <Skeleton className="h-3 w-24 mt-2 bg-white/5" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart card skeleton */}
        <Card className="bg-black border-border/20 rounded-none text-white w-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Skeleton className="w-5 h-5 bg-white/10" />
              <Skeleton className="h-6 w-48 bg-white/10" />
            </div>
            <Skeleton className="h-4 w-80 mt-2 bg-white/5" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full bg-white/5" />
          </CardContent>
        </Card>

        {/* Table skeleton */}
        <Card className="bg-black border-border/20 rounded-none text-white w-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Skeleton className="w-5 h-5 bg-white/10" />
              <Skeleton className="h-6 w-48 bg-white/10" />
            </div>
            <Skeleton className="h-4 w-80 mt-2 bg-white/5" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Table header */}
              <div className="grid grid-cols-3 gap-4 pb-2 border-b border-white/10">
                <Skeleton className="h-4 w-24 bg-white/10" />
                <Skeleton className="h-4 w-20 bg-white/10" />
                <Skeleton className="h-4 w-32 bg-white/10" />
              </div>
              {/* Table rows */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="grid grid-cols-3 gap-4 py-2">
                  <Skeleton className="h-4 w-48 bg-white/5" />
                  <Skeleton className="h-4 w-16 bg-white/5" />
                  <Skeleton className="h-4 w-20 bg-white/5" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AnalyticsLoading 