"use client"

import React from 'react'
import { Edit, Trash2, FolderOpen, Calendar, Clock, Archive, GitBranch, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export interface Bucket {
  id: number
  name: string
  description: string
  repoCount: number
  createdAt: string
  lastUpdated: string
  status: string
}

interface BucketCardProps {
  bucket: Bucket
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

export function BucketCard({ bucket, onEdit, onDelete }: BucketCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#10b981' // Green
      case 'archived':
        return '#6b7280' // Gray
      default:
        return '#6b7280' // Gray
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Card className='bg-black border border-white/10 rounded-none hover:border-white/20 transition-colors group'>
      <CardHeader className='pb-4'>
        <div className='flex items-start justify-between'>
          <div className='flex-1 space-y-2'>
            <div className='flex items-center gap-3'>
              <CardTitle className='text-white text-lg font-semibold'>{bucket.name}</CardTitle>
              <Badge 
                className='text-xs rounded-none border-0'
                style={{
                  backgroundColor: `${getStatusColor(bucket.status)}80`,
                  color: 'white'
                }}
              >
                {bucket.status.charAt(0).toUpperCase() + bucket.status.slice(1)}
              </Badge>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>{bucket.description}</p>
          </div>
          <div className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(bucket.id)}
              className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none h-8 w-8 p-0'
            >
              <Edit className='w-4 h-4' />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(bucket.id)}
              className='text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-none h-8 w-8 p-0'
            >
              <Trash2 className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className='pt-0'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
              <GitBranch className='w-5 h-5 text-gray-400' />
            </div>
            <div>
              <p className='text-white text-lg font-semibold'>{bucket.repoCount}</p>
              <p className='text-gray-400 text-xs uppercase tracking-wide'>Repos</p>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
              <Calendar className='w-5 h-5 text-gray-400' />
            </div>
            <div>
              <p className='text-white text-sm font-medium'>{formatDate(bucket.createdAt)}</p>
              <p className='text-gray-400 text-xs uppercase tracking-wide'>Created</p>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
              <Clock className='w-5 h-5 text-gray-400' />
            </div>
            <div>
              <p className='text-white text-sm font-medium'>{formatDate(bucket.lastUpdated)}</p>
              <p className='text-gray-400 text-xs uppercase tracking-wide'>Updated</p>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
              <Archive className='w-5 h-5 text-gray-400' />
            </div>
            <div>
              <Badge 
                className='text-xs rounded-none border-0 font-medium'
                style={{
                  backgroundColor: `${getStatusColor(bucket.status)}80`,
                  color: 'white'
                }}
              >
                {bucket.status.charAt(0).toUpperCase() + bucket.status.slice(1)}
              </Badge>
              <p className='text-gray-400 text-xs uppercase tracking-wide mt-1'>Status</p>
            </div>
          </div>
        </div>

        <Separator className='my-6 bg-white/10' />

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Button
              variant="ghost"
              size="sm"
              className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none text-xs h-8 px-3'
            >
              <FolderOpen className='w-3 h-3 mr-2' />
              View Repos
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none text-xs h-8 px-3'
            >
              <Plus className='w-3 h-3 mr-2' />
              Add Repo
            </Button>
          </div>
          <div className='text-xs text-gray-500'>
            Last updated {formatDate(bucket.lastUpdated)}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 