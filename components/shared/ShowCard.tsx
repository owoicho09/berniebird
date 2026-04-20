'use client'

import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock } from 'lucide-react'

interface ShowCardProps {
  id: string
  date: Date
  venue: string
  city: string
  country: string
  ticketUrl?: string
  isUpcoming: boolean
}

export function ShowCard({
  id,
  date,
  venue,
  city,
  country,
  ticketUrl,
  isUpcoming,
}: ShowCardProps) {
  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const formatTime = (d: Date) => {
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Date Block */}
        <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
            {date.toLocaleDateString('en-US', { month: 'short' })}
          </div>
          <div className="text-4xl font-bold text-foreground">
            {date.getDate()}
          </div>
          <div className="text-xs text-muted-foreground">
            {date.getFullYear()}
          </div>
        </div>

        {/* Event Details */}
        <div className="md:col-span-2 space-y-3">
          <div>
            <h3 className="font-display font-bold text-lg text-foreground">
              {venue}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{city}, {country}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            {formatTime(date)}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-end">
          {isUpcoming && ticketUrl ? (
            <Button
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
                Get Tickets
              </a>
            </Button>
          ) : (
            <Button variant="outline" disabled>
              Past Event
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
