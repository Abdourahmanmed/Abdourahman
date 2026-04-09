import { AnimatedSection } from "@/components/ui/animated-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { skills } from "@/lib/constants"

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-16 md:py-20">
      <SectionHeading
        eyebrow="Compétences"
        title="Stack moderne et maîtrisée"
        description="Du frontend à l'expérience mobile, avec une approche robuste, scalable et orientée performance."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-xl border border-border/70 bg-card px-4 py-3 transition-colors hover:border-primary/40"
          >
            <p className="text-sm font-medium">{skill.name}</p>
            <p className="text-xs text-muted-foreground">{skill.category}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
