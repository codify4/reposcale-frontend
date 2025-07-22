"use client"

import React from 'react'
import { Plus, Edit, Trash2, FolderOpen, Calendar, Clock, Archive, GitBranch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { mockBuckets } from '@/constants/buckets'
import { SidebarTrigger } from '@/components/ui/sidebar'

function BucketsPage() {
  const handleNewBucket = () => {
    // TODO: Implement new bucket creation
    console.log('Create new bucket')
  }

  const handleEdit = (id: number) => {
    // TODO: Implement edit functionality
    console.log('Edit bucket:', id)
  }

  const handleDelete = (id: number) => {
    // TODO: Implement delete functionality
    console.log('Delete bucket:', id)
  }

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
    <main className='bg-black min-h-screen p-5 lg:p-10'>
      <div className='max-w-7xl mx-auto space-y-6'>
        <div className='flex flex-col lg:flex-row w-full items-center lg:justify-between'>
          <div className='flex flex-row items-center justify-between w-full'>
            <div className='w-full lg:w-auto'>
              <h1 className='text-white text-xl lg:text-3xl font-bold'>Buckets</h1>
              <p className='text-gray-400 mt-1'>Organize your repositories into collections</p>
            </div>
            <SidebarTrigger className="lg:hidden" />
          </div>
          <Button 
            onClick={handleNewBucket}
            className='w-full lg:w-auto mt-3 bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2'
          >
            <Plus className='w-4 h-4 mr-2' />
            New Bucket
          </Button>
        </div>

        <div className='grid gap-6'>
          {mockBuckets.map((bucket) => (
            <Card key={bucket.id} className='bg-black border border-white/10 rounded-none hover:border-white/20 transition-colors group'>
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
                      onClick={() => handleEdit(bucket.id)}
                      className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none h-8 w-8 p-0'
                    >
                      <Edit className='w-4 h-4' />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(bucket.id)}
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
          ))}
        </div>

        {mockBuckets.length === 0 && (
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
                  onClick={handleNewBucket}
                  className='bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2 mt-4'
                >
                  <Plus className='w-4 h-4 mr-2' />
                  Create First Bucket
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}

export default BucketsPage