"use client"

import React from 'react'
import { Plus, Edit, Trash2, Users, Calendar, Lock, Shield, ExternalLink } from 'lucide-react'
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

        <div className='grid gap-6'>
          {mockLinks.map((link) => (
            <Card key={link.id} className='bg-black border border-white/10 rounded-none hover:border-white/20 transition-colors group'>
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
                  <div className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(link.id)}
                      className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none h-8 w-8 p-0'
                    >
                      <Edit className='w-4 h-4' />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(link.id)}
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
                      <Users className='w-5 h-5 text-gray-400' />
                    </div>
                    <div>
                      <p className='text-white text-lg font-semibold'>{link.members}</p>
                      <p className='text-gray-400 text-xs uppercase tracking-wide'>Members</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
                      <Calendar className='w-5 h-5 text-gray-400' />
                    </div>
                    <div>
                      <p className='text-white text-sm font-medium'>{formatDate(link.expiresAt)}</p>
                      <p className='text-gray-400 text-xs uppercase tracking-wide'>Expires</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-white/5 rounded-none flex items-center justify-center'>
                      <Shield className='w-5 h-5 text-gray-400' />
                    </div>
                    <div>
                      <p className='text-white text-lg font-semibold'>{link.memberLimit}</p>
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
                          backgroundColor: link.hasPassword ? '#10b98180' : '#6b728080',
                          color: 'white'
                        }}
                      >
                        {link.hasPassword ? 'Protected' : 'Public'}
                      </Badge>
                      <p className='text-gray-400 text-xs uppercase tracking-wide mt-1'>Access</p>
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
                      <ExternalLink className='w-3 h-3 mr-2' />
                      View Link
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className='text-gray-400 hover:text-white hover:bg-white/10 rounded-none text-xs h-8 px-3'
                    >
                      <Users className='w-3 h-3 mr-2' />
                      Manage Members
                    </Button>
                  </div>
                  <div className='text-xs text-gray-500'>
                    Created {formatDate(link.expiresAt)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {mockLinks.length === 0 && (
          <Card className='bg-black border border-white/10 rounded-none'>
            <CardContent className='flex flex-col items-center justify-center py-16'>
              <div className='text-center space-y-4'>
                <div className='w-16 h-16 bg-white/5 rounded-none flex items-center justify-center mx-auto'>
                  <Users className='w-8 h-8 text-gray-400' />
                </div>
                <div>
                  <h3 className='text-white text-lg font-semibold mb-2'>No shared repos yet</h3>
                  <p className='text-gray-400 text-sm'>Create your first repository sharing link to get started</p>
                </div>
                <Button 
                  onClick={handleNewLink}
                  className='bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2 mt-4'
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