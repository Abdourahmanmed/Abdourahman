"use client"

import { motion } from "framer-motion"
import {
  Globe,
  LayoutDashboard,
  Rocket,
  Smartphone,
  Sparkles,
  SwatchBook,
} from "lucide-react"

import { AnimatedSection } from "@/components/ui/animated-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { cardReveal, premiumTransition, sectionViewport, staggerContainer } from "@/lib/motion"

const serviceCards = [
  {
    title: "Développement de sites web modernes",
    description:
      "Conception de sites performants, rapides et orientés conversion avec une architecture propre et évolutive.",
    icon: Globe,
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "Création de dashboards / admin panels",
    description:
      "Interfaces data-driven claires pour piloter vos opérations, vos ventes et vos indicateurs métier en temps réel.",
    icon: LayoutDashboard,
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
  },
  {
    title: "Développement de SaaS MVP",
    description:
      "MVP pragmatiques pour tester rapidement votre marché avec les bonnes fondations techniques dès la V1.",
    icon: Rocket,
    gradient: "from-accent/20 via-accent/5 to-transparent",
  },
  {
    title: "Applications mobiles React Native",
    description:
      "Apps iOS et Android fluides, cohérentes et maintenables avec un excellent niveau de qualité produit.",
    icon: Smartphone,
    gradient: "from-primary/20 via-accent/5 to-transparent",
  },
  {
    title: "Intégration UI/UX moderne et responsive",
    description:
      "Transformation fidèle de maquettes en interfaces pixel-perfect, adaptatives et optimisées pour tous les écrans.",
    icon: Sparkles,
    gradient: "from-chart-4/20 via-primary/5 to-transparent",
  },
  {
    title: "Refonte d'interfaces",
    description:
      "Modernisation de produits existants pour améliorer la lisibilité, l'ergonomie et les performances perçues.",
    icon: SwatchBook,
    gradient: "from-chart-2/20 via-accent/5 to-transparent",
  },
] as const

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="py-12 sm:py-14 md:py-20 lg:py-24">
      <div className="surface-panel-strong relative overflow-hidden rounded-3xl p-4 sm:p-6 md:p-8 lg:p-9">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_0%,color-mix(in_oklch,var(--primary)_14%,transparent)_0%,transparent_42%),radial-gradient(circle_at_90%_100%,color-mix(in_oklch,var(--accent)_16%,transparent)_0%,transparent_36%)]" />

        <SectionHeading
          eyebrow="Services premium"
          title="Un partenaire produit pour transformer votre portfolio en machine à conversion"
          description="J'accompagne vos besoins web, mobile et design produit avec une approche orientée impact business, clarté UX et performance technique."
          className="mb-6 sm:mb-8 md:mb-12"
        />

        <motion.div
          className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {serviceCards.map((service) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                variants={cardReveal}
                whileHover={{ y: -4, scale: 1.006 }}
                transition={premiumTransition}
                className="group surface-panel relative overflow-hidden rounded-2xl bg-background/74 p-5"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary transition-all duration-250 group-hover:border-primary/40 group-hover:bg-primary/15">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-lg leading-snug font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-refined mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={cardReveal}
          className="surface-panel mt-8 rounded-2xl bg-background/68 p-4 md:mt-10 md:p-5"
        >
          <p className="text-sm font-medium text-foreground md:text-base">
            Vous avez une idée, un produit à lancer ou une interface à faire
            évoluer ?
            <span className="text-primary">
              {" "}
              Je peux intervenir de la stratégie à l&apos;exécution.
            </span>
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
