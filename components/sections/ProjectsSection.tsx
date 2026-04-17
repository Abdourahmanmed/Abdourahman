"use client"

import { useMemo, useState } from "react"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { AnimatedSection } from "@/components/ui/animated-section"
import { MotionLink } from "@/components/ui/motion-link"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { buttonHover, buttonTap, premiumEase } from "@/lib/motion"
import { type ProjectCategory, projects } from "@/lib/constants"

type ProjectFilter = "all" | ProjectCategory

const filterOptions: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "Tous les projets" },
  { value: "pro", label: "Projets professionnels" },
  { value: "learning-web", label: "Web en apprentissage" },
  { value: "learning-mobile", label: "Mobile en apprentissage" },
]

const categoryLabels: Record<ProjectCategory, string> = {
  pro: "Projets professionnels",
  "learning-web": "Web en apprentissage",
  "learning-mobile": "Mobile en apprentissage",
}

const categoryStyles: Record<ProjectCategory, string> = {
  pro: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
  "learning-web": "border-sky-400/40 bg-sky-500/15 text-sky-200",
  "learning-mobile": "border-violet-400/40 bg-violet-500/15 text-violet-200",
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all")
  const prefersReducedMotion = useReducedMotion()

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <AnimatedSection id="projects" className="py-12 sm:py-14 md:py-18 lg:py-20">
      <SectionHeading
        eyebrow="Projets"
        title="Réalisations réelles & projets sélectionnés"
        description="Une sélection de projets professionnels et d'apprentissage qui reflètent mon expérience en développement web et mobile."
      />

      <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
        {filterOptions.map((filterOption) => {
          const isActive = activeFilter === filterOption.value

          return (
            <motion.button
              key={filterOption.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filterOption.value)}
              whileHover={prefersReducedMotion ? undefined : buttonHover}
              whileTap={prefersReducedMotion ? undefined : buttonTap}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                isActive
                  ? "border-primary/70 bg-primary/15 text-primary"
                  : "border-border/70 bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {filterOption.label}
            </motion.button>
          )
        })}
      </div>

      <motion.div layout className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={`${project.title}-${project.category}`}
              initial={{ opacity: 0, y: 12, scale: 0.988 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.988 }}
              transition={{ duration: 0.24, ease: premiumEase }}
            >
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
                      <span className="text-muted-foreground">Contexte :</span>{" "}
                      {project.context}
                    </p>
                  ) : null}
                  <p className="text-foreground/90">
                    <span className="text-muted-foreground">Type :</span>{" "}
                    {project.type}
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
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  )
}
