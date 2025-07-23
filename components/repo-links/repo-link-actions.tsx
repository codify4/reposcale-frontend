"use client"

import React from 'react'
import { ExternalLink, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RepoLinkActionsProps {
  onViewLink?: () => void
  onManageMembers?: () => void
}

export function RepoLinkActions({ onViewLink, onManageMembers }: RepoLinkActionsProps) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Button
          variant="ghost"
          size="sm"
          onClick={onViewLink}
          className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none text-xs h-8 px-3'
        >
          <ExternalLink className='w-3 h-3 mr-2' />
          View Link
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onManageMembers}
          className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none text-xs h-8 px-3'
        >
          <Users className='w-3 h-3 mr-2' />
          Manage Members
        </Button>
      </div>
    </div>
  )
} 