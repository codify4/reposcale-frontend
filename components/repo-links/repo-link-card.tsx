"use client"

import React from 'react'
import { Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { RepoLinkStats } from './repo-link-stats'
import { RepoLinkActions } from './repo-link-actions'
import { RepoLink } from './types'

interface RepoLinkCardProps {
  link: RepoLink
  onEdit: (id: number) => void
  onDelete: (id: number) => void
  onViewLink?: () => void
  onManageMembers?: () => void
}

export function RepoLinkCard({ 
  link, 
  onEdit, 
  onDelete, 
  onViewLink, 
  onManageMembers 
}: RepoLinkCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#10b981' // Green
      case 'expired':
        return '#ef4444' // Red
      default:
        return '#6b7280' // Gray
    }
  }

  return (
    <Card className='bg-black border border-white/10 rounded-none hover:border-white/20 transition-colors group'>
      <CardHeader className='pb-4'>
        <div className='flex items-start justify-between'>
          <div className='flex-1 space-y-2'>
            <div className='flex items-center gap-3'>
              <CardTitle className='text-white text-lg font-semibold'>{link.name}</CardTitle>
              <Badge 
                className='text-xs rounded-none border-0'
                style={{
                  backgroundColor: `${getStatusColor(link.status)}80`,
                  color: 'white'
                }}
              >
                {link.status.charAt(0).toUpperCase() + link.status.slice(1)}
              </Badge>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>{link.description}</p>
          </div>
          <div className='flex items-center gap-1'>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(link.id)}
              className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none h-8 w-8 p-0'
            >
              <Edit className='w-4 h-4' />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(link.id)}
              className='text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-none h-8 w-8 p-0'
            >
              <Trash2 className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className='pt-0'>
        <RepoLinkStats 
          members={link.members}
          expiresAt={link.expiresAt}
          memberLimit={link.memberLimit}
          hasPassword={link.hasPassword}
        />

        <Separator className='my-6 bg-white/10' />

        <RepoLinkActions 
          onViewLink={onViewLink}
          onManageMembers={onManageMembers}
        />
      </CardContent>
    </Card>
  )
} 