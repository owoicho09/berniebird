'use client'

export function Marquee() {
  const text = '★ BIRDBADAS ★ ELECTRONIC MUSIC ★ BEATS & TRACKS ★ BOOK FOR EVENTS ★ '

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="flex animate-scroll">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="whitespace-nowrap text-sm font-bold tracking-widest px-8">
            {text}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
