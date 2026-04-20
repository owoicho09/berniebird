'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function BioSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <Image
              src="/images/profile.jpg"
              alt="Bernie aka Birdbadas"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold text-foreground">
              About Bernie
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p className="text-lg leading-relaxed">
                Bernie, also known as Birdbadas (real name: Palle Bruun Pedersen), is an emerging EDM and electronic music artist based in Viborg, Denmark. With a passion for crafting immersive soundscapes and energetic beats, Bernie creates music that resonates with audiences across multiple genres within the electronic music spectrum.
              </p>

              {isExpanded && (
                <>
                  <p className="text-lg leading-relaxed">
                    Known for innovative production techniques and a signature sound that blends traditional electronic elements with modern production, Bernie&apos;s tracks showcase his technical prowess and creative vision. His work ranges from intricate beat-focused productions to full-bodied tracks designed for both intimate listening and high-energy performances.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Beyond production, Bernie is available for event bookings, collaborations, and custom production work. Whether you&apos;re looking for original tracks, beat packs, or exclusive compositions, Bernie brings professionalism and creativity to every project.
                  </p>
                </>
              )}
            </div>

            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
