"use client"

import React from 'react'
import { Link, FileText } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

interface Step3LinkDetailsProps {
  linkName?: string
  linkDescription?: string
  onDataUpdate: (data: {
    linkName?: string
    linkDescription?: string
  }) => void
  isBucket?: boolean
}

export function Step3LinkDetails({
  linkName,
  linkDescription,
  onDataUpdate,
  isBucket = false
}: Step3LinkDetailsProps) {
  const handleNameChange = (value: string) => {
    onDataUpdate({ linkName: value })
  }

  const handleDescriptionChange = (value: string) => {
    onDataUpdate({ linkDescription: value })
  }

  return (
    <div>
      <Card className="bg-black border-none rounded-none p-0">
        <CardContent className='p-0'>
          <div className="flex items-center gap-2 mb-2">
            <Link className="w-4 h-4 text-gray-400" />
            <Label className="text-white font-medium">{isBucket ? 'Bucket Name' : 'Link Name'}</Label>
          </div>
          
          <Input
            type="text"
            placeholder={isBucket ? "e.g., Frontend Projects, Backend Services, etc." : "e.g., Frontend Team Access, Client Review, etc."}
            value={linkName || ''}
            onChange={(e) => handleNameChange(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-none"
            maxLength={100}
          />
          
          <div className="flex justify-end mt-2">
            <span className="text-xs text-gray-400">
              {(linkName?.length || 0)}/100
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border-none rounded-none p-0">
        <CardContent className='p-0'>
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-gray-400" />
            <Label className="text-white font-medium">Description</Label>
          </div>
          
          <Textarea
            placeholder={isBucket ? "e.g., All frontend related repositories and components" : "e.g., Temporary access for the design team to review the new components"}
            value={linkDescription || ''}
            onChange={(e) => handleDescriptionChange(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-none resize-none"
            rows={3}
            maxLength={500}
          />
          
          <div className="flex justify-end mt-2">
            <span className="text-xs text-gray-400">
              {(linkDescription?.length || 0)}/500
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 