'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, Phone, MapPin, Download } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 500))

    setIsSuccess(true)
    setIsSubmitting(false)

    // Reset success state after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000)
  }

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center space-y-4">
          <div className="text-6xl">✓</div>
          <h3 className="font-display text-2xl font-bold text-primary">
            Message Sent!
          </h3>
          <p className="text-muted-foreground max-w-md">
            Thanks for your inquiry. We&apos;ll get back to you soon with available dates and rates.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">
            Get in Touch
          </h3>
          <p className="text-muted-foreground mb-8">
            Ready to book Bernie for your next event? Send an inquiry and we'll respond with availability and pricing information.
          </p>
        </div>

        <div className="space-y-6">
          <a
            href="mailto:birdbadas@gmail.com"
            className="flex items-start gap-4 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <p className="text-muted-foreground">birdbadas@gmail.com</p>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Location</h4>
              <div className="text-muted-foreground">
                <p>Søndersøparken 1</p>
                <p>8800 Viborg</p>
                <p>Denmark</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
          >
            <a href="/" download>
              <Download className="w-4 h-4 mr-2" />
              Download Press Kit
            </a>
          </Button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-background border-border"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-background border-border"
          />
        </div>

        <div>
          <label htmlFor="eventType" className="block text-sm font-semibold text-foreground mb-2">
            Event Type *
          </label>
          <Select>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="club">Club Night</SelectItem>
              <SelectItem value="festival">Festival</SelectItem>
              <SelectItem value="private">Private Event</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
            Preferred Date *
          </label>
          <Input
            id="date"
            name="date"
            type="date"
            required
            className="bg-background border-border"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-2">
            Estimated Budget: ${(typeof window !== 'undefined' ? 2000 : 0).toLocaleString()}
          </label>
          <input
            id="budget"
            name="budget"
            type="range"
            min="500"
            max="10000"
            step="100"
            defaultValue="2000"
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>$500</span>
            <span>$10,000+</span>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your event and what you&apos;re looking for..."
            className="bg-background border-border min-h-32"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    </div>
  )
}
