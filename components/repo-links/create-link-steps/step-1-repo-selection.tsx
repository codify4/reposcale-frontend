"use client"

import React, { useState, useEffect } from 'react'
import { Search, GitBranch, Lock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Repo {
  id: string
  name: string
  description?: string
  private: boolean
  html_url: string
}

interface Step1RepoSelectionProps {
  selectedRepo?: Repo
  onRepoSelected: (repo: Repo) => void
  multiSelect?: boolean
  selectedRepos?: Repo[]
  onReposSelected?: (repos: Repo[]) => void
}

export function Step1RepoSelection({ selectedRepo, onRepoSelected, multiSelect = false, selectedRepos = [], onReposSelected }: Step1RepoSelectionProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockRepos: Repo[] = [
      {
        id: '1',
        name: 'my-awesome-project',
        description: 'A React-based web application for task management',
        private: true,
        html_url: 'https://github.com/user/my-awesome-project'
      },
      {
        id: '2',
        name: 'backend-api',
        description: 'Node.js REST API with Express and MongoDB',
        private: true,
        html_url: 'https://github.com/user/backend-api'
      },
      {
        id: '3',
        name: 'mobile-app',
        description: 'React Native mobile application',
        private: true,
        html_url: 'https://github.com/user/mobile-app'
      },
      {
        id: '4',
        name: 'design-system',
        description: 'Shared component library and design tokens',
        private: true,
        html_url: 'https://github.com/user/design-system'
      },
      {
        id: '5',
        name: 'data-analytics',
        description: 'Python scripts for data processing and analytics',
        private: true,
        html_url: 'https://github.com/user/data-analytics'
      }
    ]

    // Simulate API delay
    setTimeout(() => {
      setRepos(mockRepos)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleRepoSelect = (repo: Repo) => {
    if (multiSelect && onReposSelected) {
      const isSelected = selectedRepos?.some(r => r.id === repo.id)
      if (isSelected) {
        onReposSelected(selectedRepos.filter(r => r.id !== repo.id))
      } else {
        onReposSelected([...selectedRepos, repo])
      }
    } else {
      onRepoSelected(repo)
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="text-center py-8">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your repositories...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-none pl-10"
        />
      </div>

      <div className="space-y-2 max-h-72 overflow-y-auto scrollbar-hide">
        {filteredRepos.length === 0 ? (
          <div className="text-center py-8">
            <GitBranch className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400">No repositories found</p>
          </div>
        ) : (
          filteredRepos.map((repo) => (
            <Card
              key={repo.id}
              className={`bg-black border border-white/10 rounded-none hover:border-white/20 transition-colors cursor-pointer px-3 py-4 ${
                multiSelect 
                  ? selectedRepos?.some(r => r.id === repo.id) ? 'border-white/40 bg-white/5' : ''
                  : selectedRepo?.id === repo.id ? 'border-white/40 bg-white/5' : ''
              }`}
              onClick={() => handleRepoSelect(repo)}
            >
              <CardContent className='p-0'>
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-medium truncate">{repo.name}</h4>
                      {repo.private && (
                        <Lock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                    {repo.description && (
                      <p className="text-gray-400 text-xs truncate mt-1">{repo.description}</p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-none px-2 py-1 text-xs ml-2 flex-shrink-0 ${
                      multiSelect
                        ? selectedRepos?.some(r => r.id === repo.id)
                          ? 'bg-white text-black hover:bg-gray-100'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                        : selectedRepo?.id === repo.id
                          ? 'bg-white text-black hover:bg-gray-100'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {multiSelect
                      ? selectedRepos?.some(r => r.id === repo.id) ? 'Selected' : 'Select'
                      : selectedRepo?.id === repo.id ? 'Selected' : 'Select'
                    }
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
} 