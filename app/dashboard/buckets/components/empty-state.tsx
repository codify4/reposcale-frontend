"use client"

import React from 'react'
import { Plus, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface EmptyStateProps {
  onCreateBucket: () => void
}

export function EmptyState({ onCreateBucket }: EmptyStateProps) {
  return (
    <Card className='bg-black border border-white/10 rounded-none'>
      <CardContent className='flex flex-col items-center justify-center py-16'>
        <div className='text-center space-y-4'>
          <div className='w-16 h-16 bg-white/5 rounded-none flex items-center justify-center mx-auto'>
            <FolderOpen className='w-8 h-8 text-gray-400' />
          </div>
          <div>
            <h3 className='text-white text-lg font-semibold mb-2'>No buckets yet</h3>
            <p className='text-gray-400 text-sm'>Create your first bucket to organize your repositories</p>
          </div>
          <Button 
            onClick={onCreateBucket}
            className='bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2 mt-4'
          >
            <Plus className='w-4 h-4 mr-2' />
            Create First Bucket
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 