"use client"

import React, { useState } from 'react'
import { mockBuckets } from '@/constants/buckets'
import { 
  BucketsHeader, 
  BucketsList, 
  EmptyState, 
  CreateBucketDialog,
  type Bucket 
} from './components'

function BucketsPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleNewBucket = () => {
    setDialogOpen(true)
  }

  const handleEdit = (id: number) => {
    // TODO: Implement edit functionality
    console.log('Edit bucket:', id)
  }

  const handleDelete = (id: number) => {
    // TODO: Implement delete functionality
    console.log('Delete bucket:', id)
  }

  const handleCreateBucket = (data: any) => {
    // TODO: Implement bucket creation
    console.log('Create bucket with data:', data)
  }

  return (
    <main className='bg-black min-h-screen p-5 lg:p-10'>
      <div className='max-w-7xl mx-auto space-y-6'>
        <BucketsHeader onCreateBucket={handleNewBucket} />

        {mockBuckets.length > 0 ? (
          <BucketsList 
            buckets={mockBuckets as Bucket[]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <EmptyState onCreateBucket={handleNewBucket} />
        )}

        <CreateBucketDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onSubmit={handleCreateBucket}
        />
      </div>
    </main>
  );
}

export default BucketsPage