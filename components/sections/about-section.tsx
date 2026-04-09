import { AnimatedSection } from "@/components/ui/animated-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { highlightStats } from "@/lib/constants"

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-16 md:py-20">
      <SectionHeading
        eyebrow="À propos"
        title="Un profil full-stack orienté produit"
        description="J'aide startups et entreprises à transformer des idées en produits digitaux performants avec une forte exigence de qualité visuelle et technique."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {highlightStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-border/70 bg-card p-5">
            <p className="text-3xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
