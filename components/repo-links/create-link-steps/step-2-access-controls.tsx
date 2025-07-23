"use client"

import React, { useState } from 'react'
import { Calendar, Users, Lock, Clock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Step2AccessControlsProps {
  expiryTime?: string
  memberLimit?: number
  password?: string
  onDataUpdate: (data: {
    expiryTime?: string
    memberLimit?: number
    password?: string
  }) => void
}

export function Step2AccessControls({
  expiryTime,
  memberLimit,
  password,
  onDataUpdate
}: Step2AccessControlsProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [date, setDate] = useState<Date>()
  const [selectedHour, setSelectedHour] = useState<string>('23')
  const [selectedMinute, setSelectedMinute] = useState<string>('59')

  const handleExpiryChange = (value: string) => {
    onDataUpdate({ expiryTime: value })
  }

  const handleMemberLimitChange = (value: string) => {
    const numValue = value === '' ? undefined : parseInt(value)
    onDataUpdate({ memberLimit: numValue })
  }

  const handlePasswordChange = (value: string) => {
    onDataUpdate({ password: value })
  }

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    updateExpiryTime(selectedDate, selectedHour, selectedMinute)
  }

  const updateExpiryTime = (selectedDate: Date | undefined, hour: string, minute: string) => {
    if (selectedDate) {
      const dateWithTime = new Date(selectedDate)
      dateWithTime.setHours(parseInt(hour), parseInt(minute), 0, 0)
      onDataUpdate({ expiryTime: dateWithTime.toISOString() })
    } else {
      onDataUpdate({ expiryTime: undefined })
    }
  }

  const handleTimeChange = (type: 'hour' | 'minute', value: string) => {
    if (type === 'hour') {
      setSelectedHour(value)
      updateExpiryTime(date, value, selectedMinute)
    } else {
      setSelectedMinute(value)
      updateExpiryTime(date, selectedHour, value)
    }
  }

  const formatExpiryTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <Card className="bg-black border-none rounded-none p-0 mb-3">
        <CardContent className="p-0">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-neutral-400" />
            <Label className="text-white text-sm font-medium">Expiry Time</Label>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`bg-white/5 border-white/10 hover:bg-white/10 justify-start text-left font-normal text-white hover:text-white rounded-none text-sm h-9`}
                >
                  <Calendar className="mr-2 h-3 w-3" />
                  {date ? format(date, "MMM dd") : "Pick date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-black border border-white/10">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                  className="bg-black text-white rounded-none"
                />
              </PopoverContent>
            </Popover>

            <div className="flex gap-1">
              <Select value={selectedHour} onValueChange={(value) => handleTimeChange('hour', value)}>
                <SelectTrigger className="h-9 rounded-none text-sm bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black rounded-none border border-white/10">
                  {Array.from({ length: 24 }, (_, i) => (
                    <SelectItem key={i} value={i.toString().padStart(2, '0')} className="text-white rounded-none">
                      {i.toString().padStart(2, '0')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="text-white text-sm flex items-center">:</span>
              <Select value={selectedMinute} onValueChange={(value) => handleTimeChange('minute', value)}>
                <SelectTrigger className="h-9 rounded-none text-sm bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black rounded-none border border-white/10">
                  {Array.from({ length: 60 }, (_, i) => (
                    <SelectItem key={i} value={i.toString().padStart(2, '0')} className="text-white rounded-none">
                      {i.toString().padStart(2, '0')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {expiryTime && (
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Clock className="w-3 h-3" />
              <span>Expires: {formatExpiryTime(expiryTime)}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  handleExpiryChange('')
                  setDate(undefined)
                }}
                className="text-neutral-400 hover:text-red-400 hover:bg-red-500/10 rounded-none h-6 px-2 text-xs"
              >
                Clear
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-black border-none rounded-none p-0 mb-3">
        <CardContent className="p-0">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-neutral-400" />
            <Label className="text-white text-sm font-medium">Member Limit</Label>
          </div>

          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Enter limit"
              value={memberLimit || ''}
              onChange={(e) => handleMemberLimitChange(e.target.value)}
              min="1"
              max="1000"
              className="bg-white/5 border-white/10 text-white rounded-none h-9 text-sm"
            />
            {memberLimit && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleMemberLimitChange('')}
                className="text-neutral-400 hover:text-red-400 hover:bg-red-500/10 rounded-none h-9 px-2"
              >
                Clear
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border-none rounded-none p-0">
        <CardContent className="p-0">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-4 h-4 text-neutral-400" />
            <Label className="text-white text-sm font-medium">Password Protection</Label>
          </div>
          
          <div className="flex items-center gap-2">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password || ''}
              onChange={(e) => handlePasswordChange(e.target.value)}
              className="bg-white/5 border-white/10 text-white rounded-none h-9 text-sm flex-1"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
              className="text-neutral-400 hover:text-white hover:bg-white/10 rounded-none h-9 px-2"
            >
              {showPassword ? 'Hide' : 'Show'}
            </Button>
            {password && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handlePasswordChange('')}
                className="text-neutral-400 hover:text-red-400 hover:bg-red-500/10 rounded-none h-9 px-2"
              >
                Clear
              </Button>
            )}
          </div>

          {password && (
            <div className="flex items-center gap-2 mt-2 text-xs text-neutral-400">
              <Lock className="w-3 h-3" />
              <span>Password protected</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 