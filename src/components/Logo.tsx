export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-primary text-2xl">✦</span>
      <span className="text-xl font-bold tracking-widest uppercase" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.15em" }}>
        Manarт
      </span>
    </div>
  )
}
