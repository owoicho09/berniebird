'use client'

import { SocialIconButton } from '@/components/shared/SocialIconButton'

export function SocialsSection() {
  const socials = [
    {
      platform: 'instagram' as const,
      href: 'https://www.instagram.com/bernie_a.k.a_birdbadas',
      label: 'Instagram',
    },
    {
      platform: 'facebook' as const,
      href: 'https://www.facebook.com/share/1CiPhKXoqe/',
      label: 'Facebook',
    },
    {
      platform: 'youtube' as const,
      href: 'https://music.youtube.com/channel/UCc9c4GAWF6tbSn5X_3M4jgQ',
      label: 'YouTube',
    },
    {
      platform: 'tiktok' as const,
      href: 'https://www.tiktok.com/@themissingkeys',
      label: 'TikTok',
    },
    {
      platform: 'twitter' as const,
      href: 'https://x.com/martellgiuk',
      label: 'X',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold text-foreground text-center mb-4">
          Follow the Journey
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Stay connected for exclusive updates and behind-the-scenes content
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social) => (
            <SocialIconButton
              key={social.platform}
              platform={social.platform}
              href={social.href}
              label={social.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
