import { cn } from "@/lib/utils"

type TechBadgeProps = {
  label: string
  className?: string
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/22 bg-primary/7 px-3 py-1 text-xs font-medium tracking-wide text-foreground/90 shadow-[inset_0_1px_0_rgb(255_255_255/0.5)] transition-all duration-300",
        "hover:border-primary/40 hover:bg-primary/12 hover:text-foreground",
        className,
      )}
    >
      {label}
    </span>
  )
}
