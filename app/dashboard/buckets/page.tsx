"use client"

import React from 'react'
import { Plus, Edit, Trash2, FolderOpen, Calendar, Clock, Archive } from 'lucide-react'
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

        <div className='grid gap-4'>
          {mockBuckets.map((bucket) => (
            <Card key={bucket.id} className='bg-black border-border/20 rounded-none'>
              <CardHeader className='pb-3'>
                <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                    <CardTitle className='text-white text-lg'>{bucket.name}</CardTitle>
                    <p className='text-gray-400 text-sm mt-1'>{bucket.description}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(bucket.id)}
                      className='text-gray-400 hover:text-white hover:bg-neutral-800 rounded-none'
                    >
                      <Edit className='w-4 h-4' />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(bucket.id)}
                      className='text-gray-400 hover:text-red-400 hover:bg-neutral-800 rounded-none'
                    >
                      <Trash2 className='w-4 h-4' />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  <div className='flex items-center gap-2'>
                    <FolderOpen className='w-4 h-4 text-gray-400' />
                    <div>
                      <p className='text-white text-sm font-medium'>{bucket.repoCount}</p>
                      <p className='text-gray-400 text-xs'>Repos</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Calendar className='w-4 h-4 text-gray-400' />
                    <div>
                      <p className='text-white text-sm font-medium'>{formatDate(bucket.createdAt)}</p>
                      <p className='text-gray-400 text-xs'>Created</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Clock className='w-4 h-4 text-gray-400' />
                    <div>
                      <p className='text-white text-sm font-medium'>{formatDate(bucket.lastUpdated)}</p>
                      <p className='text-gray-400 text-xs'>Updated</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Archive className='w-4 h-4 text-gray-400' />
                    <div>
                      <Badge 
                        className='text-xs rounded-none border-0'
                        style={{
                          backgroundColor: `${getStatusColor(bucket.status)}80`,
                          color: 'white'
                        }}
                      >
                        {bucket.status.charAt(0).toUpperCase() + bucket.status.slice(1)}
                      </Badge>
                      <p className='text-gray-400 text-xs mt-1'>Status</p>
                    </div>
                  </div>
                </div>

                <Separator className='my-4 bg-border/20' />

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <Button
                      variant="ghost"
                      size="sm"
                      className='text-gray-400 hover:text-white hover:bg-neutral-800 rounded-none text-xs'
                    >
                      View Repos
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className='text-gray-400 hover:text-white hover:bg-neutral-800 rounded-none text-xs'
                    >
                      Add Repo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {mockBuckets.length === 0 && (
          <Card className='bg-black border-border/20 rounded-none'>
            <CardContent className='flex flex-col items-center justify-center py-12'>
              <div className='text-center'>
                <FolderOpen className='w-12 h-12 text-gray-400 mx-auto mb-4' />
                <h3 className='text-white text-lg font-medium mb-2'>No buckets yet</h3>
                <p className='text-gray-400 mb-4'>Create your first bucket to organize your repositories</p>
                <Button 
                  onClick={handleNewBucket}
                  className='bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2'
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