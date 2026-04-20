'use client'

import { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { Marquee } from '@/components/shared/Marquee'
import { BioSection } from '@/components/home/BioSection'
import { StreamingSection } from '@/components/home/StreamingSection'
import { SocialsSection } from '@/components/home/SocialsSection'
import { LatestReleaseSection } from '@/components/home/LatestReleaseSection'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Marquee />
      <LatestReleaseSection />
      <BioSection />
      <StreamingSection />
      <SocialsSection />
    </main>
  )
}
