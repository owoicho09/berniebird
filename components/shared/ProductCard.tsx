'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  id: string
  title: string
  image: string
  price: number
  category: 'track' | 'beat' | 'bundle'
  onAddToCart: (id: string) => void
}

export function ProductCard({
  id,
  title,
  image,
  price,
  category,
  onAddToCart,
}: ProductCardProps) {
  const categoryLabel = {
    track: 'Track',
    beat: 'Beat',
    bundle: 'Bundle',
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4 bg-muted h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <Button
            onClick={() => onAddToCart(id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary hover:bg-primary/90"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider">
          {categoryLabel[category]}
        </p>
        <h3 className="font-display font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-lg font-bold text-primary">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
