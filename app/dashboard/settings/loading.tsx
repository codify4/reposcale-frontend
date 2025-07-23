import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function SettingsLoading() {
  return (
    <div className="w-11/12 bg-black text-white">
      {/* Header skeleton */}
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='w-full lg:w-auto'>
          <Skeleton className='h-8 lg:h-10 w-32 bg-white/10' />
          <Skeleton className='h-4 w-64 mt-2 bg-white/5' />
        </div>
      </div>
      
      <div className="w-full flex flex-col gap-8 mt-5">
        {/* Profile Information Card */}
        <Card className="bg-black border-border/20 rounded-none text-white w-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Skeleton className="w-5 h-5 bg-white/10" />
              <Skeleton className="h-6 w-48 bg-white/10" />
            </div>
            <Skeleton className="h-4 w-80 mt-2 bg-white/5" />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar skeleton */}
            <div className="flex items-center gap-4">
              <Skeleton className="w-16 h-16 rounded-full bg-white/10" />
            </div>
            
            {/* Form fields skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-20 bg-white/10" />
                  <Skeleton className="h-10 w-full bg-white/5" />
                </div>
              ))}
            </div>
            
            <Skeleton className="h-10 w-32 bg-white/10" />
          </CardContent>
        </Card>

        {/* Danger Zone Card */}
        <Card className="bg-black border-border/20 rounded-none text-white w-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Skeleton className="w-5 h-5 bg-red-400/20" />
              <Skeleton className="h-6 w-32 bg-red-400/20" />
            </div>
            <Skeleton className="h-4 w-64 mt-2 bg-white/5" />
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Logout section */}
            <div className="flex items-center justify-between">
              <div>
                <Skeleton className="h-4 w-20 bg-red-400/20" />
                <Skeleton className="h-3 w-32 mt-1 bg-white/5" />
              </div>
              <Skeleton className="h-10 w-24 bg-red-500/20" />
            </div>
            
            <Skeleton className="h-px w-full bg-white/10" />
            
            {/* Delete account section */}
            <div className="flex items-center justify-between">
              <div>
                <Skeleton className="h-4 w-28 bg-red-400/20" />
                <Skeleton className="h-3 w-48 mt-1 bg-white/5" />
              </div>
              <Skeleton className="h-10 w-32 bg-red-500/20" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SettingsLoading 