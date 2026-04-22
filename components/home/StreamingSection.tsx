'use client'

import { PlatformButton } from '@/components/shared/PlatformButton'

export function StreamingSection() {
  const streamingLinks = [
    {
      platform: 'spotify' as const,
      href: 'https://open.spotify.com',
    },
    {
      platform: 'apple-music' as const,
      href: 'https://music.apple.com',
    },
    {
      platform: 'youtube' as const,
      href: 'https://music.youtube.com/channel/UCc9c4GAWF6tbSn5X_3M4jgQ',
    },

    {
      platform: 'soundcloud' as const,
      href: 'https://soundcloud.com',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold text-foreground text-center mb-4">
          Stream My Music
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Listen to Bernie&apos;s latest releases on your favorite platform
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {streamingLinks.map((link) => (
            <PlatformButton
              key={link.platform}
              platform={link.platform}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
