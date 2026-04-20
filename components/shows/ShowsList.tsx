'use client'

import { ShowCard } from '@/components/shared/ShowCard'

interface Show {
  id: string
  date: Date
  venue: string
  city: string
  country: string
  ticketUrl?: string
}

const upcomingShows: Show[] = [
  {
    id: '1',
    date: new Date('2025-05-15T20:00:00'),
    venue: 'Vega Copenhagen',
    city: 'Copenhagen',
    country: 'Denmark',
    ticketUrl: 'https://vega.dk',
  },
  {
    id: '2',
    date: new Date('2025-06-21T21:00:00'),
    venue: 'Elektronik Festival',
    city: 'Berlin',
    country: 'Germany',
    ticketUrl: 'https://elektronik-festival.de',
  },
  {
    id: '3',
    date: new Date('2025-07-10T19:30:00'),
    venue: 'Summer Night Festival',
    city: 'Stockholm',
    country: 'Sweden',
    ticketUrl: 'https://summernightfestival.se',
  },
]

const pastShows: Show[] = [
  {
    id: '4',
    date: new Date('2025-04-12T22:00:00'),
    venue: 'Club Pumpehuset',
    city: 'Copenhagen',
    country: 'Denmark',
  },
  {
    id: '5',
    date: new Date('2025-03-28T21:00:00'),
    venue: 'Viborg Club',
    city: 'Viborg',
    country: 'Denmark',
  },
]

export function ShowsList() {
  const now = new Date()

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upcoming Shows */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Upcoming Shows
          </h2>
          {upcomingShows.length > 0 ? (
            <div className="space-y-6">
              {upcomingShows.map((show) => (
                <ShowCard
                  key={show.id}
                  {...show}
                  isUpcoming={show.date > now}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-border rounded-lg">
              <p className="text-muted-foreground">More shows coming soon. Follow for updates!</p>
            </div>
          )}
        </div>

        {/* Past Shows */}
        {pastShows.length > 0 && (
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Past Shows
            </h3>
            <div className="space-y-4 opacity-75">
              {pastShows.map((show) => (
                <ShowCard
                  key={show.id}
                  {...show}
                  isUpcoming={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
