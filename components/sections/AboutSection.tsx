"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Sparkles } from "lucide-react"

import { SectionHeading } from "@/components/ui/section-heading"

const valueBlocks = [
  {
    title: "Développement web moderne",
    description:
      "Applications rapides, évolutives et robustes avec une architecture pensée pour la maintenabilité et la performance.",
    icon: Code2,
  },
  {
    title: "Applications mobiles",
    description:
      "Expériences React Native fluides, cohérentes et orientées usages réels pour iOS et Android.",
    icon: Smartphone,
  },
  {
    title: "UI/UX orientée produit",
    description:
      "Interfaces premium conçues pour la clarté, la conversion et la confiance, avec une attention forte aux détails.",
    icon: Sparkles,
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.14,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-32 py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-card/90 to-card/60 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur md:p-10">
        <SectionHeading
          eyebrow="À propos"
          title="Un partenaire technique moderne, fiable et orienté résultats"
          description="Je construis des produits digitaux premium avec une approche rigoureuse : vision produit claire, exécution soignée et standards de qualité élevés à chaque étape."
          className="mb-8"
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <motion.p
            variants={cardVariants}
            className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Mon positionnement est simple : livrer des solutions élégantes qui inspirent
            confiance, servent vos objectifs business et restent performantes dans le temps.
            Je combine précision technique, sens du détail et communication transparente pour
            garantir un niveau d&apos;exigence professionnel de bout en bout.
          </motion.p>

          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-primary/20 bg-primary/10 p-5"
          >
            <p className="text-xs tracking-[0.16em] text-primary uppercase">Positionnement</p>
            <p className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
              Développeur produit full-stack, orienté performance, qualité et impact.
            </p>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {valueBlocks.map((block) => {
            const Icon = block.icon

            return (
              <motion.article
                key={block.title}
                variants={cardVariants}
                className="group rounded-2xl border border-border/70 bg-card/80 p-5 shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
