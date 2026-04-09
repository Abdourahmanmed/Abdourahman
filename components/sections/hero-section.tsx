import { ArrowUpRight } from "lucide-react"

import { AnimatedSection } from "@/components/ui/animated-section"
import { techBadges } from "@/lib/constants"

export function HeroSection() {
  return (
    <AnimatedSection id="hero" className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="space-y-8">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs tracking-[0.2em] text-primary uppercase">
          Portfolio premium
        </span>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          Développeur Next.js, React.js & React Native.
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Je conçois des expériences web et mobile haut de gamme: rapides, élégantes et
          centrées sur les résultats.
        </p>

        <div className="flex flex-wrap gap-3">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Voir mes projets <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium"
          >
            Me contacter
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
