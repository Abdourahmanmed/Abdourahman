import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 space-y-3 sm:mb-10", className)}>
      {eyebrow ? (
        <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-primary uppercase sm:text-xs sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem] md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
