'use client'

import Image from 'next/image'

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface TrackLinks {
  spotify?: string
  appleMusic?: string
  soundcloud?: string
}

interface Track {
  id: string
  title: string
  image: string
  year: number
  links: TrackLinks
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const tracks: Track[] = [
  {
    id: '1',
    title: 'That Voice!',
    image: '/images/covers/ep1.JPG',
    year: 2024,
    links: {
      appleMusic: 'https://music.apple.com/ng/song/that-voice/1760311463',
      spotify:
        'https://open.spotify.com/artist/2h2qqz99wdkj5nmGgW1eMs?si=gR8mBk6kQkaFrr1Xl2q4CQ',
    },
  },
  {
    id: '2',
    title: 'Angelino Aurelio?',
    image: '/images/covers/122.JPG',
    year: 2024,
    links: {
      soundcloud:
        'https://soundcloud.com/birdbadas/angelino-aurelio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
  {
    id: '3',
    title: 'Sensual!',
    image: '/images/covers/ep1.JPG',
    year: 2024,
    links: {
      appleMusic: 'https://music.apple.com/ng/song/sensual/1760309588',
    },
  },
  {
    id: '4',
    title: 'Everybody Wants!',
    image: '/images/covers/ep1.JPG',
    year: 2024,
    links: {
      appleMusic:
        'https://music.apple.com/ng/album/everybody-wants-single/1760309586',
    },
  },
  {
    id: '5',
    title: '24/7',
    image: '/images/covers/247.JPG',
    year: 2024,
    links: {
      soundcloud:
        'https://soundcloud.com/birdbadas/247365-free-download?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
  {
    id: '6',
    title: 'OShantie Devine!',
    image: '/images/covers/2472.JPG',
    year: 2024,
    links: {
      soundcloud:
        'https://soundcloud.com/birdbadas/shantie-devine?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
  {
    id: '7',
    title: 'Friday Afternoon!',
    image: '/images/covers/111.JPG',
    year: 2024,
    links: {
      soundcloud:
        'https://soundcloud.com/birdbadas/friday-afternoon-freedownload?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
  {
    id: '8',
    title: 'Under The Sun!',
    image: '/images/covers/121.JPG',
    year: 2024,
    links: {
      soundcloud:
        'https://soundcloud.com/birdbadas/under-the-sun?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },{
    id: '9',
    title: 'Drop. .This. .Fire. -Experimentalas',
    image: '/images/covers/231.JPG',
    year: 2024,
    links: {
      soundcloud:
        'https://soundcloud.com/birdbadas/drop-this-fire-experimentalas?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },{
    id: '10',
    title: 'Big Bada Boom!',
    image: '/images/covers/333.JPG',
    year: 2024,
    links: {
      soundcloud:
        'https://soundcloud.com/birdbadas/big-bada-boom-re-mastered-free-download?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
]

// ─────────────────────────────────────────────
// Artist Profiles
// ─────────────────────────────────────────────

const ARTIST_PROFILES: Record<keyof TrackLinks, string> = {
  spotify:
    'https://open.spotify.com/artist/2h2qqz99wdkj5nmGgW1eMs?si=gR8mBk6kQkaFrr1Xl2q4CQ',
  appleMusic:
    'https://music.apple.com/dk/artist/bernie-aka-birdbadas/1520533030?l=da',
  soundcloud: 'https://on.soundcloud.com/PwWmcNDFGMxtMMwBkL',
}

const PLATFORM_LABELS: Record<keyof TrackLinks, string> = {
  spotify: 'Spotify',
  appleMusic: 'Apple Music',
  soundcloud: 'SoundCloud',
}

// ─────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────

function SpotifyIcon({ size = 16 }: { size?: number }) {
  return <div style={{ width: size, height: size, borderRadius: '50%', background: '#1DB954' }} />
}

function AppleMusicIcon({ size = 16 }: { size?: number }) {
  return <div style={{ width: size, height: size, borderRadius: '6px', background: '#FC3C44' }} />
}

function SoundCloudIcon({ size = 16 }: { size?: number }) {
  return <div style={{ width: size, height: size, borderRadius: '50%', background: '#FF5500' }} />
}

function PlatformIcon({
  platform,
  size,
}: {
  platform: keyof TrackLinks
  size: number
}) {
  switch (platform) {
    case 'spotify':
      return <SpotifyIcon size={size} />
    case 'appleMusic':
      return <AppleMusicIcon size={size} />
    case 'soundcloud':
      return <SoundCloudIcon size={size} />
  }
}

// ─────────────────────────────────────────────
// Platform Pill (FIXED)
// ─────────────────────────────────────────────

function PlatformPill({
  platform,
  href,
  size = 'sm',
}: {
  platform: keyof TrackLinks
  href: string
  size?: 'sm' | 'md' | 'lg'
}) {
  if (!href) return null

  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  }

  const iconSize = {
    sm: 14,
    md: 16,
    lg: 18,
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-border/60 bg-background text-foreground hover:bg-muted hover:border-border transition whitespace-nowrap ${sizeStyles[size]}`}
    >
      <PlatformIcon platform={platform} size={iconSize[size]} />
      <span className="leading-none">{PLATFORM_LABELS[platform]}</span>
    </a>
  )
}

// ─────────────────────────────────────────────
// Placeholder
// ─────────────────────────────────────────────

function CoverPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
  )
}

// ─────────────────────────────────────────────
// Track Card (FIXED EDGE CASES)
// ─────────────────────────────────────────────

function TrackCard({ track }: { track: Track }) {
  const platformEntries = Object.entries(track.links).filter(
    ([, link]) => !!link
  ) as [keyof TrackLinks, string][]

  const primaryHref = platformEntries[0]?.[1]

  return (
    <div className="group flex flex-col gap-3">
      {/* Cover */}
      <div className="relative overflow-hidden rounded-xl aspect-square bg-muted border border-border/40">
        <CoverPlaceholder />

        <Image
          src={track.image}
          alt={track.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.opacity = '0'
          }}
        />

        {primaryHref && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-center justify-center">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg"
            >
              <span className="w-0 h-0 border-t-[7px] border-b-[7px] border-l-[12px] border-transparent border-l-black ml-1" />
            </a>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <h3 className="font-semibold text-sm truncate">{track.title}</h3>
      </div>

      {/* Platforms */}
      {platformEntries.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {platformEntries.map(([platform, href]) => (
            <PlatformPill key={platform} platform={platform} href={href} />
          ))}
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────

export function TrackGallery() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Discography
          </p>
          <h2 className="text-4xl font-bold mb-2">Music</h2>
          <p className="text-sm text-muted-foreground">
            Stream on your platform of choice
          </p>
        </div>

        {/* Artist platforms */}
        <div className="flex flex-wrap gap-3 mb-12">
          {(Object.keys(ARTIST_PROFILES) as (keyof TrackLinks)[]).map(
            (platform) => (
              <PlatformPill
                key={platform}
                platform={platform}
                href={ARTIST_PROFILES[platform]}
                size="md"
              />
            )
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  )
}