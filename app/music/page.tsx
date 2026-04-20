'use client'

import { PageHeader } from '@/components/shared/PageHeader'
import { TrackGallery } from '@/components/music/TrackGallery'
import { Marquee } from '@/components/shared/Marquee'

export default function MusicPage() {
  return (
    <main>
      <PageHeader 
        title="Music Discography"
        subtitle="Explore my latest tracks, remixes, and exclusive beats available across all streaming platforms"
      />
      <TrackGallery />
      <Marquee />
    </main>
  )
}
