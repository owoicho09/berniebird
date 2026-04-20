'use client'

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-b border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground mb-6">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}
