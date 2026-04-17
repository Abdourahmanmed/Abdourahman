"use client"

import { useMemo, useState } from "react"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { AnimatedSection } from "@/components/ui/animated-section"
import { MotionLink } from "@/components/ui/motion-link"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUpItem, sectionViewport, staggerContainer } from "@/lib/motion"
import { type ProjectCategory, projects } from "@/lib/constants"

const categoryLabels: Record<ProjectCategory, string> = {
  Pro: "Projets professionnels",
  "Learning Web": "Web en apprentissage",
  "Learning Mobile": "Mobile en apprentissage",
}

const categoryStyles: Record<ProjectCategory, string> = {
  Pro: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
  "Learning Web": "border-sky-400/40 bg-sky-500/15 text-sky-200",
  "Learning Mobile": "border-violet-400/40 bg-violet-500/15 text-violet-200",
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects
    }

    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <AnimatedSection id="projects" className="py-12 sm:py-14 md:py-18 lg:py-20">
      <SectionHeading
        eyebrow="Projets"
        title="Réalisations réelles & projets sélectionnés"
        description="Une sélection de projets professionnels et d'apprentissage qui reflètent mon expérience en développement web et mobile."
      />

      <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
            activeCategory === "all"
              ? "border-primary/70 bg-primary/15 text-primary"
              : "border-border/70 bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
          }`}
        >
          Tous les projets
        </button>

        {(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
              activeCategory === category
                ? "border-primary/70 bg-primary/15 text-primary"
                : "border-border/70 bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <motion.div
        className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.title} variants={fadeUpItem}>
            <PremiumCard className="flex h-full flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${categoryStyles[project.category]}`}
                >
                  {categoryLabels[project.category]}
                </span>
                <span className="rounded-full border border-border/70 bg-secondary/60 px-2.5 py-1 text-[11px] text-secondary-foreground">
                  {project.status}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>

              <div className="mt-2 space-y-1 text-sm">
                {project.context ? (
                  <p className="text-foreground/90">
                    <span className="text-muted-foreground">Contexte :</span> {project.context}
                  </p>
                ) : null}
                <p className="text-foreground/90">
                  <span className="text-muted-foreground">Type :</span> {project.type}
                </p>
              </div>

              <p className="text-refined mt-3 text-sm">{project.description}</p>

              {project.highlights?.length ? (
                <p className="mt-3 text-xs text-muted-foreground">
                  {project.highlights.join(" • ")}
                </p>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-secondary/80 px-3 py-1 text-xs text-secondary-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-colors duration-300 hover:bg-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                {project.projectUrl ? (
                  <MotionLink
                    href={project.projectUrl}
                    className="inline-flex items-center gap-2 text-sm text-primary"
                  >
                    Voir le projet <ExternalLink className="size-4" />
                  </MotionLink>
                ) : (
                  <span className="inline-flex rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                    {project.status}
                  </span>
                )}
              </div>
            </PremiumCard>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  )
}
