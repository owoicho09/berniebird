'use client'

import Image from 'next/image'
import { PlatformButton } from '@/components/shared/PlatformButton'

export function LatestReleaseSection() {
  const release = {
    title: 'Latest Release',
    trackName: 'The Birds!',
    artistName: 'Bernie aka Birdbadas',
    releaseDate: '2026',
    coverImage: '/images/covers/ep.jpg',
  }

  const streamingLinks = [
    {
      platform: 'spotify' as const,
      href: 'https://open.spotify.com/album/0dgpocTJJGIZxqHYHRnuPO?si=T3V5ftO0Qk-gLt8kXYHssw',
    },
    {
      platform: 'apple-music' as const,
      href: 'https://music.apple.com/ng/album/the-birds-single/1890701895',
    },
    {
      platform: 'youtube' as const,
      href: 'https://music.youtube.com/channel/UCc9c4GAWF6tbSn5X_3M4jgQ',
    },

    {
      platform: 'soundcloud' as const,
      href: 'https://on.soundcloud.com/PwWmcNDFGMxtMMwBkL',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <h2 className="font-display text-4xl font-bold text-foreground text-center mb-4">
          Latest Release
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Stream Bernie&apos;s newest EP on your favorite platform
        </p>

        {/* Card */}
        <div className="max-w-3xl mx-auto bg-background/80 border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row">

            {/* Cover art */}
            <div className="relative w-full sm:w-56 md:w-64 flex-shrink-0 aspect-square sm:aspect-auto">
              <Image
                src={release.coverImage}
                alt={release.artistName}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 256px"
                priority
              />
            </div>

            {/* Info + platform buttons */}
            <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 flex-1 min-w-0">

              {/* Track info */}
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Out Now
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-1 truncate">
                  {release.trackName}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {release.artistName} &middot; {release.releaseDate}
                </p>
              </div>

              {/* Platform buttons */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Stream on
                </p>
                <div className="flex flex-wrap gap-3">
                  {streamingLinks.map((link) => (
                    <PlatformButton
                      key={link.platform}
                      platform={link.platform}
                      href={link.href}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}