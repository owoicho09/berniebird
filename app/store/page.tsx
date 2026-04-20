'use client'

import { PageHeader } from '@/components/shared/PageHeader'
import { StoreContent } from '@/components/store/StoreContent'

export default function StorePage() {
  return (
    <main>
      <PageHeader 
        title="Store"
        subtitle="Purchase exclusive tracks, beat packs, and bundles"
      />
      <StoreContent />
    </main>
  )
}
