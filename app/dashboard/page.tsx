"use client"

import React from 'react'
import { Plus, Edit, Trash2, Users, Calendar, Lock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { mockLinks } from '@/constants/links'
import { SidebarTrigger } from '@/components/ui/sidebar'

function ReposPage() {
  const handleNewLink = () => {
    // TODO: Implement new link creation
    console.log('Create new link')
  }

  const handleEdit = (id: number) => {
    // TODO: Implement edit functionality
    console.log('Edit link:', id)
  }

  const handleDelete = (id: number) => {
    // TODO: Implement delete functionality
    console.log('Delete link:', id)
  }

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
        {/* Header */}
        <div className='flex flex-col lg:flex-row w-full items-center lg:justify-between'>
          <div className='flex flex-row items-center justify-between w-full'>
            <div className='w-full lg:w-auto'>
              <h1 className='text-white text-xl lg:text-3xl font-bold'>Shared Repos</h1>
              <p className='text-gray-400 mt-1'>Manage your repository sharing links</p>
            </div>
            <SidebarTrigger className="lg:hidden" />
          </div>
          <Button 
            onClick={handleNewLink}
            className='w-full lg:w-auto mt-3 bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2'
          >
            <Plus className='w-4 h-4 mr-2' />
            New Link
          </Button>
        </div>

        {/* Links Grid */}
        <div className='grid gap-4'>
          {mockLinks.map((link) => (
            <Card key={link.id} className='bg-black border-border/20 rounded-none'>
              <CardHeader className='pb-3'>
                <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                    <CardTitle className='text-white text-lg'>{link.name}</CardTitle>
                    <p className='text-gray-400 text-sm mt-1'>{link.description}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(link.id)}
                      className='text-gray-400 hover:text-white hover:bg-neutral-800 rounded-none'
                    >
                      <Edit className='w-4 h-4' />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(link.id)}
                      className='text-gray-400 hover:text-red-400 hover:bg-neutral-800 rounded-none'
                    >
                      <Trash2 className='w-4 h-4' />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  {/* Members */}
                  <div className='flex items-center gap-2'>
                    <Users className='w-4 h-4 text-gray-400' />
                    <div>
                      <p className='text-white text-sm font-medium'>{link.members}</p>
                      <p className='text-gray-400 text-xs'>Members</p>
                    </div>
                  </div>

                  {/* Expires At */}
                  <div className='flex items-center gap-2'>
                    <Calendar className='w-4 h-4 text-gray-400' />
                    <div>
                      <p className='text-white text-sm font-medium'>{formatDate(link.expiresAt)}</p>
                      <p className='text-gray-400 text-xs'>Expires</p>
                    </div>
                  </div>

                  {/* Member Limit */}
                  <div className='flex items-center gap-2'>
                    <Shield className='w-4 h-4 text-gray-400' />
                    <div>
                      <p className='text-white text-sm font-medium'>{link.memberLimit}</p>
                      <p className='text-gray-400 text-xs'>Limit</p>
                    </div>
                  </div>

                  {/* Password Protection */}
                  <div className='flex items-center gap-2'>
                    <Lock className='w-4 h-4 text-gray-400' />
                    <div>
                      <Badge 
                        className='text-xs rounded-none border-0'
                        style={{
                          backgroundColor: link.hasPassword ? '#10b98180' : '#6b728080',
                          color: 'white'
                        }}
                      >
                        {link.hasPassword ? 'Yes' : 'No'}
                      </Badge>
                      <p className='text-gray-400 text-xs mt-1'>Password</p>
                    </div>
                  </div>
                </div>

                <Separator className='my-4 bg-border/20' />

                {/* Status Badge */}
                <div className='flex items-center justify-between'>
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {mockLinks.length === 0 && (
          <Card className='bg-gray-900 border-gray-800 rounded-none'>
            <CardContent className='flex flex-col items-center justify-center py-12'>
              <div className='text-center'>
                <Users className='w-12 h-12 text-gray-400 mx-auto mb-4' />
                <h3 className='text-white text-lg font-medium mb-2'>No shared repos yet</h3>
                <p className='text-gray-400 mb-4'>Create your first repository sharing link to get started</p>
                <Button 
                  onClick={handleNewLink}
                  className='bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2'
                >
                  <Plus className='w-4 h-4 mr-2' />
                  Create First Link
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}

export default ReposPage