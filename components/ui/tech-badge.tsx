import { cn } from "@/lib/utils"

type TechBadgeProps = {
  label: string
  className?: string
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-foreground/90 transition-all duration-300",
        "hover:border-primary/40 hover:bg-primary/10",
        className,
      )}
    >
      {label}
    </span>
  )
}
