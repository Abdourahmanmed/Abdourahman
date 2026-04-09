import { cn } from "@/lib/utils"

type PremiumCardProps = {
  className?: string
  children: React.ReactNode
}

export function PremiumCard({ className, children }: PremiumCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border/70 bg-card/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </article>
  )
}
