'use client'

import Image from 'next/image'
import { PlatformButton } from '@/components/shared/PlatformButton'

interface Track {
  id: string
  title: string
  image: string
  year: number
}

const tracks: Track[] = [
  { id: '1', title: 'That Voice!', image: '/images/covers/ep1.JPG', year: 2024 },
  { id: '2', title: 'Under the Sun!', image: '/images/covers/ep1.JPG', year: 2024 },
  { id: '3', title: 'Sensual!', image: '/images/covers/ep1.JPG', year: 2024 },
  { id: '4', title: 'Everybody Wants!', image: '/images/covers/ep1.JPG', year: 2024 },

]

export function TrackGallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div key={track.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-muted">
                <Image
                  src={track.image}
                  alt={track.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center gap-2">
                  <PlatformButton
                    platform="spotify"
                    href={`https://open.spotify.com/search/${encodeURIComponent(track.title)}`}
                  />
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {track.title}
              </h3>
              <p className="text-sm text-muted-foreground">{track.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
