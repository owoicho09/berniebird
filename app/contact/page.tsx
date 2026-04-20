'use client'

import { PageHeader } from '@/components/shared/PageHeader'
import { ContactForm } from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="Book Bernie"
        subtitle="Send an inquiry for event bookings, collaborations, and custom production work"
      />
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
