"use client"

import React from 'react'
import { Users, Calendar, Shield, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface RepoLinkStatsProps {
  members: number
  expiresAt: string
  memberLimit: number
  hasPassword: boolean
}

export function RepoLinkStats({ members, expiresAt, memberLimit, hasPassword }: RepoLinkStatsProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
          <Users className='w-5 h-5 text-gray-400' />
        </div>
        <div>
          <p className='text-white text-lg font-semibold'>{members}</p>
          <p className='text-gray-400 text-xs uppercase tracking-wide'>Members</p>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
          <Calendar className='w-5 h-5 text-gray-400' />
        </div>
        <div>
          <p className='text-white text-sm font-medium'>{formatDate(expiresAt)}</p>
          <p className='text-gray-400 text-xs uppercase tracking-wide'>Expires</p>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
          <Shield className='w-5 h-5 text-gray-400' />
        </div>
        <div>
          <p className='text-white text-lg font-semibold'>{memberLimit}</p>
          <p className='text-gray-400 text-xs uppercase tracking-wide'>Limit</p>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
          <Lock className='w-5 h-5 text-gray-400' />
        </div>
        <div>
          <Badge 
            className='text-xs rounded-none border-0 font-medium'
            style={{
              backgroundColor: hasPassword ? '#10b98180' : '#6b728080',
              color: 'white'
            }}
          >
            {hasPassword ? 'Protected' : 'Public'}
          </Badge>
          <p className='text-gray-400 text-xs uppercase tracking-wide mt-1'>Access</p>
        </div>
      </div>
    </div>
  )
} 