import { ExternalLink } from "lucide-react"

import { AnimatedSection } from "@/components/ui/animated-section"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { projects } from "@/lib/constants"

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-16 md:py-20">
      <SectionHeading
        eyebrow="Projets"
        title="Réalisations sélectionnées"
        description="Une sélection de projets qui illustrent mon niveau de détail technique et visuel."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <PremiumCard key={project.title} className="flex h-full flex-col">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.projectUrl}
              className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Voir le projet <ExternalLink className="size-4" />
            </a>
          </PremiumCard>
        ))}
      </div>
    </AnimatedSection>
  )
}
