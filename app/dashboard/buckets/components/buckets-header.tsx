"use client"

import React from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'

interface BucketsHeaderProps {
  onCreateBucket: () => void
}

export function BucketsHeader({ onCreateBucket }: BucketsHeaderProps) {
  return (
    <div className='flex flex-col lg:flex-row w-full items-center lg:justify-between'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='w-full lg:w-auto'>
          <h1 className='text-white text-xl lg:text-3xl font-bold'>Buckets</h1>
          <p className='text-gray-400 mt-1'>Organize your repositories into collections</p>
        </div>
        <SidebarTrigger className="lg:hidden" />
      </div>
      <Button 
        onClick={onCreateBucket}
        className='w-full lg:w-auto mt-3 bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2'
      >
        <Plus className='w-4 h-4 mr-2' />
        New Bucket
      </Button>
    </div>
  )
} 