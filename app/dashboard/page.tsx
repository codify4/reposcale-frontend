"use client"

import React, { useState } from 'react'
import { mockLinks } from '@/constants/links'
import { RepoLinksHeader, RepoLinksList, CreateLinkDialog } from '@/components/repo-links'

function ReposPage() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false)

  const handleNewLink = () => {
    setCreateDialogOpen(true)
  }

  const handleEdit = (id: number) => {
    // TODO: Implement edit functionality
    console.log('Edit link:', id)
  }

  const handleDelete = (id: number) => {
    // TODO: Implement delete functionality
    console.log('Delete link:', id)
  }

  const handleViewLink = (id: number) => {
    // TODO: Implement view link functionality
    console.log('View link:', id)
  }

  const handleManageMembers = (id: number) => {
    // TODO: Implement manage members functionality
    console.log('Manage members for link:', id)
  }

  const handleLinkCreated = (linkData: any) => {
    // TODO: Implement link creation API call
    console.log('Link created:', linkData)
    // Here you would typically make an API call to create the link
    // and then refresh the links list
  }

  return (
    <main className='bg-black min-h-screen p-5 lg:p-10'>
      <div className='max-w-7xl mx-auto space-y-6'>
        <RepoLinksHeader onNewLink={handleNewLink} />
        <RepoLinksList 
          links={mockLinks}
          onNewLink={handleNewLink}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onViewLink={handleViewLink}
          onManageMembers={handleManageMembers}
        />
      </div>

      <CreateLinkDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onLinkCreated={handleLinkCreated}
      />
    </main>
  );
}

export default ReposPage