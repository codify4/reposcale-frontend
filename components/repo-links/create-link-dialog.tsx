"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { Step1RepoSelection } from './create-link-steps/step-1-repo-selection'
import { Step2AccessControls } from './create-link-steps/step-2-access-controls'
import { Step3LinkDetails } from './create-link-steps/step-3-link-details'

interface Repo {
  id: string
  name: string
  description?: string
  private: boolean
  html_url: string
}

interface CreateLinkData {
  selectedRepo?: Repo
  selectedRepos?: Repo[]
  expiryTime?: string
  memberLimit?: number
  password?: string
  linkName?: string
  linkDescription?: string
}

interface CreateLinkDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onLinkCreated: (linkData: CreateLinkData) => void
  multiSelect?: boolean
  isBucket?: boolean
  onSubmit?: (data: any) => void
}

export function CreateLinkDialog({ open, onOpenChange, onLinkCreated, multiSelect = false, isBucket = false, onSubmit }: CreateLinkDialogProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [linkData, setLinkData] = useState<CreateLinkData>({})

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleClose = () => {
    setCurrentStep(1)
    setLinkData({})
    onOpenChange(false)
  }

  const handleStepDataUpdate = (stepData: Partial<CreateLinkData>) => {
    setLinkData(prev => ({ ...prev, ...stepData }))
  }

  const handleGenerateLink = () => {
    if (isBucket && onSubmit) {
      onSubmit(linkData)
    } else {
      onLinkCreated(linkData)
    }
    handleClose()
  }

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        if (multiSelect) {
          return linkData.selectedRepos && linkData.selectedRepos.length > 0
        }
        return !!linkData.selectedRepo
      case 2:
        return true // All fields are optional in step 2
      case 3:
        return !!linkData.linkName
      default:
        return false
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return isBucket ? 'Select Repositories' : 'Select Repository'
      case 2:
        return 'Access Controls'
      case 3:
        return isBucket ? 'Bucket Details' : 'Link Details'
      default:
        return ''
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border border-white/10 rounded-none max-w-4xl max-h-[95vh]">
        <DialogHeader className="relative">
          <DialogTitle className="text-white text-xl font-semibold">
            {getStepTitle()}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute right-0 top-0 text-gray-400 hover:text-white hover:bg-white/10 rounded-none h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <div className="mt-6">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div
                  className={`w-8 h-8 rounded-none flex items-center justify-center text-sm font-medium ${
                    step <= currentStep
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-0.5 mx-2 ${
                      step < currentStep ? 'bg-white' : 'bg-white/10'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <Step1RepoSelection
              selectedRepo={linkData.selectedRepo}
              onRepoSelected={(repo) => handleStepDataUpdate({ selectedRepo: repo })}
              multiSelect={multiSelect}
              selectedRepos={linkData.selectedRepos}
              onReposSelected={(repos) => handleStepDataUpdate({ selectedRepos: repos })}
            />
          )}

          {currentStep === 2 && (
            <Step2AccessControls
              expiryTime={linkData.expiryTime}
              memberLimit={linkData.memberLimit}
              password={linkData.password}
              onDataUpdate={handleStepDataUpdate}
            />
          )}

          {currentStep === 3 && (
            <Step3LinkDetails
              linkName={linkData.linkName}
              linkDescription={linkData.linkDescription}
              onDataUpdate={handleStepDataUpdate}
              isBucket={isBucket}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-none"
            >
              Back
            </Button>

            <div className="flex gap-3">
              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceedToNext()}
                  className="bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleGenerateLink}
                  disabled={!canProceedToNext()}
                  className="bg-white text-black hover:bg-gray-100 rounded-none px-6 py-2"
                >
                  {isBucket ? 'Create Bucket' : 'Generate Link'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 