"use client"

import React from 'react'
import { RepoLinkCard } from './repo-link-card'
import { EmptyState } from './empty-state'
import { RepoLink } from './types'

interface RepoLinksListProps {
  links: RepoLink[]
  onNewLink: () => void
  onEdit: (id: number) => void
  onDelete: (id: number) => void
  onViewLink?: (id: number) => void
  onManageMembers?: (id: number) => void
}

export function RepoLinksList({ 
  links, 
  onNewLink, 
  onEdit, 
  onDelete, 
  onViewLink, 
  onManageMembers 
}: RepoLinksListProps) {
  if (links.length === 0) {
    return <EmptyState onNewLink={onNewLink} />
  }

  return (
    <div className='grid gap-6'>
      {links.map((link) => (
        <RepoLinkCard
          key={link.id}
          link={link}
          onEdit={onEdit}
          onDelete={onDelete}
          onViewLink={onViewLink ? () => onViewLink(link.id) : undefined}
          onManageMembers={onManageMembers ? () => onManageMembers(link.id) : undefined}
        />
      ))}
    </div>
  )
} 