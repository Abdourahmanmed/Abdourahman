"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Code2 } from "lucide-react"

import { AnimatedSection } from "@/components/ui/animated-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { TechBadge } from "@/components/ui/tech-badge"
import { projects } from "@/lib/constants"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const categoryStyles = {
  SaaS: "bg-primary/15 text-primary border-primary/40",
  Dashboard: "bg-emerald-500/15 text-emerald-300 border-emerald-400/35",
  Mobile: "bg-blue-500/15 text-blue-300 border-blue-400/35",
  Interface: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/35",
}

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-16 md:py-20">
      <SectionHeading
        eyebrow="Projects premium"
        title="Projets qui transforment l'idée en produit crédible"
        description="Des réalisations pensées pour convaincre un client ou un recruteur : exécution technique solide, design premium et impact business mesurable."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-card/95 via-card/80 to-card/65 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-6"
          >
            <div className="pointer-events-none absolute -top-20 right-0 h-36 w-36 rounded-full bg-primary/15 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

            <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.12em] uppercase ${categoryStyles[project.category]}`}
                >
                  {project.category}
                </span>
                <Code2 className="size-4 text-muted-foreground" />
              </div>
              <div className="rounded-lg border border-dashed border-white/20 bg-black/20 px-3 py-7 text-center text-xs font-medium tracking-wide text-muted-foreground">
                {project.visualLabel}
              </div>
            </div>

            <h3 className="text-lg font-semibold tracking-tight md:text-xl">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {project.stack.map((tech) => (
                <TechBadge key={tech} label={tech} className="bg-white/[0.03]" />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={project.projectUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20"
              >
                Voir le projet <ArrowUpRight className="size-3.5" />
              </a>
              {project.codeUrl ? (
                <a
                  href={project.codeUrl}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.02] px-4 py-2 text-xs font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30"
                >
                  Voir le code
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatedSection>
  )
}
