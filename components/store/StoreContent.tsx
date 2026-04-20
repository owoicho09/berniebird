'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/shared/ProductCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ShoppingCart, X } from 'lucide-react'

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
}

const products = {
  tracks: [
    { id: 't1', title: 'Electric Dreams', price: 2.99, image: '/images/covers/cover1.jpg' },
    { id: 't2', title: 'Neon Nights', price: 2.99, image: '/images/covers/cover2.jpg' },
    { id: 't3', title: 'Digital Pulse', price: 2.99, image: '/images/covers/cover3.jpg' },
  ],
  beats: [
    { id: 'b1', title: 'Synth Drive Beat Pack', price: 14.99, image: '/images/covers/cover4.jpg' },
    { id: 'b2', title: 'Deep Techno Collection', price: 19.99, image: '/images/covers/cover5.jpg' },
    { id: 'b3', title: 'Ambient Loops Pack', price: 12.99, image: '/images/covers/cover6.jpg' },
  ],
  bundles: [
    { id: 'bun1', title: 'All Tracks Bundle', price: 7.99, image: '/images/covers/cover1.jpg' },
    { id: 'bun2', title: 'All Beats Bundle', price: 39.99, image: '/images/covers/cover4.jpg' },
    { id: 'bun3', title: 'Complete Collection', price: 79.99, image: '/images/covers/cover2.jpg' },
  ],
}

export function StoreContent() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)

  const handleAddToCart = (id: string) => {
    const product = Object.values(products).flat().find(p => p.id === id)
    if (!product) return

    const existingItem = cart.find(item => item.id === id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, {
        id,
        title: product.title,
        price: product.price,
        quantity: 1,
      }])
    }
  }

  const handleRemoveFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      {/* Tabs */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="tracks" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="tracks">Tracks</TabsTrigger>
              <TabsTrigger value="beats">Beats</TabsTrigger>
              <TabsTrigger value="bundles">Bundles</TabsTrigger>
            </TabsList>

            <TabsContent value="tracks">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.tracks.map(product => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    category="track"
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beats">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.beats.map(product => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    category="beat"
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bundles">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.bundles.map(product => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    category="bundle"
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sticky Cart Bar */}
      {cartCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 border-t border-primary/20 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <ShoppingCart className="w-6 h-6" />
              <div>
                <p className="font-semibold">{cartCount} item{cartCount !== 1 ? 's' : ''}</p>
                <p className="text-sm opacity-90">${cartTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowCart(!showCart)}
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                {showCart ? 'Hide Cart' : 'View Cart'}
              </Button>
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Checkout
              </Button>
            </div>
          </div>

          {/* Cart Dropdown */}
          {showCart && (
            <div className="absolute bottom-full left-0 right-0 mb-2 mx-4 bg-background text-foreground rounded-lg shadow-lg p-4 max-h-64 overflow-y-auto">
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between border-b border-border pb-3">
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-destructive hover:text-destructive/80 transition"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Spacing for sticky bar */}
      {cartCount > 0 && <div className="h-24" />}
    </div>
  )
}
