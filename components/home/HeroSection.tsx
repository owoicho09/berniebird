'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <div className="relative h-screen min-h-96 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm">
          Now Playing
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
          Bernie<br />aka<br />Birdbadas
        </h1>

        <p className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-2xl mx-auto">
          EDM Artist & Producer from Viborg, Denmark
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <Link href="/music">Explore Music</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            <Link href="/contact">Book for Event</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
