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

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.08 * index,
      ease: "easeOut",
    },
  }),
}

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="py-18 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/75 p-6 shadow-[0_20px_60px_-30px_rgb(0,0,0,0.25)] backdrop-blur-md md:p-9">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_0%,color-mix(in_oklch,var(--primary)_14%,transparent)_0%,transparent_42%),radial-gradient(circle_at_90%_100%,color-mix(in_oklch,var(--accent)_16%,transparent)_0%,transparent_36%)]" />

        <SectionHeading
          eyebrow="Services premium"
          title="Un partenaire produit pour transformer votre portfolio en machine à conversion"
          description="J'accompagne vos besoins web, mobile et design produit avec une approche orientée impact business, clarté UX et performance technique."
          className="mb-8 md:mb-12"
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.24 }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-5 shadow-[0_10px_35px_-20px_rgb(0,0,0,0.35)]"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-lg font-semibold leading-snug text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-border/70 bg-background/70 p-4 md:mt-10 md:p-5">
          <p className="text-sm font-medium text-foreground md:text-base">
            Vous avez une idée, un produit à lancer ou une interface à faire évoluer ?
            <span className="text-primary"> Je peux intervenir de la stratégie à l&apos;exécution.</span>
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
