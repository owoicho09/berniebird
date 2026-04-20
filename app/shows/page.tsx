'use client'

import { PageHeader } from '@/components/shared/PageHeader'
import { ShowsList } from '@/components/shows/ShowsList'

export default function ShowsPage() {
  return (
    <main>
      <PageHeader 
        title="Live Shows"
        subtitle="Book Bernie for your event or catch him live at these upcoming performances"
      />
      <ShowsList />
    </main>
  )
}
