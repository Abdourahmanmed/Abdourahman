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
        <p className="inline-flex rounded-full border border-primary/22 bg-primary/8 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-primary uppercase sm:text-[0.7rem] sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-balance max-w-3xl text-2xl leading-tight font-semibold text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-refined max-w-2xl text-sm leading-relaxed sm:text-[0.95rem] md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
