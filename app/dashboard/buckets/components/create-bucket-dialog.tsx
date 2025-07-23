"use client"

import React from 'react'
import { CreateLinkDialog } from '@/components/repo-links/create-link-dialog'

interface CreateBucketDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: any) => void
}

export function CreateBucketDialog({ open, onOpenChange, onSubmit }: CreateBucketDialogProps) {
  return (
    <CreateLinkDialog 
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmit}
      multiSelect={true}
      isBucket={true}
    />
  )
} 