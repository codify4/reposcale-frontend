"use client"

import React from 'react'
import { BucketCard, Bucket } from './bucket-card'

interface BucketsListProps {
  buckets: Bucket[]
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

export function BucketsList({ buckets, onEdit, onDelete }: BucketsListProps) {
  return (
    <div className='grid gap-6'>
      {buckets.map((bucket) => (
        <BucketCard
          key={bucket.id}
          bucket={bucket}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
} 