"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Code2, Rocket, Smartphone } from "lucide-react"

import { MotionLink } from "@/components/ui/motion-link"
import {
  fadeUpItem,
  premiumEase,
  sectionViewport,
  staggerContainer,
} from "@/lib/motion"

const techStack = [
  "Next.js",
  "React.js",
  "React Native",
  "TypeScript",
  "UI premium",
]

const serviceCards = [
  {
    icon: Code2,
    title: "Applications Web",
    detail:
      "Interfaces rapides, maintenables et scalables avec Next.js & React.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    detail:
      "Expériences fluides et élégantes sur iOS & Android avec React Native.",
  },
  {
    icon: Rocket,
    title: "Performance",
    detail: "Optimisation UX, SEO et architecture pour des produits solides.",
  },
]

const stats = [
  { label: "Spécialités", value: "3 stacks" },
  { label: "Approche", value: "Design + Perf" },
  { label: "Livrables", value: "Web & Mobile" },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-24 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <motion.div
        className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
      >
        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          <motion.span
            variants={fadeUpItem}
            className="inline-flex max-w-full rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[0.62rem] leading-tight font-medium tracking-[0.18em] text-primary uppercase sm:px-4 sm:text-[0.68rem] sm:tracking-[0.24em]"
          >
            Développeur Full-Stack moderne
          </motion.span>

          <motion.h1
            variants={fadeUpItem}
            className="heading-balance max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Je conçois des applications web et mobiles haut de gamme avec
            Next.js, React.js et React Native.
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="text-refined max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg"
          >
            Développeur spécialisé dans la création de produits professionnels,
            élégants et performants. J&apos;accompagne les marques et startups
            de l&apos;idée au déploiement avec une exigence premium sur le
            design, la qualité technique et l&apos;expérience utilisateur.
          </motion.p>

          <motion.div variants={fadeUpItem} className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/80 bg-card/65 px-3 py-1.5 text-[0.7rem] font-medium text-muted-foreground/90 shadow-[inset_0_1px_0_rgb(255_255_255/0.55)] backdrop-blur sm:px-3.5 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:pt-2"
          >
            <MotionLink
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_24px_rgb(0,0,0,0.14)] sm:w-auto sm:px-6"
            >
              Voir mes projets <ArrowUpRight className="size-4" />
            </MotionLink>
            <MotionLink
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-border/75 bg-card/85 px-5 py-3 text-sm font-medium shadow-[inset_0_1px_0_rgb(255_255_255/0.45)] backdrop-blur hover:border-primary/40 hover:bg-card sm:w-auto sm:px-6"
            >
              Démarrer un projet
            </MotionLink>
          </motion.div>
        </div>

        <motion.aside variants={fadeUpItem} className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
          <div className="surface-panel-strong soft-border space-y-4 rounded-[1.75rem] p-3.5 sm:p-4 md:p-5">
            {serviceCards.map(({ icon: Icon, title, detail }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={sectionViewport}
                transition={{
                  duration: 0.45,
                  delay: 0.12 * index,
                  ease: premiumEase,
                }}
                className="rounded-2xl border border-border/65 bg-background/55 p-4 transition-all duration-300 hover:border-primary/24 hover:bg-background/72"
              >
                <div className="mb-3 inline-flex rounded-lg border border-primary/30 bg-primary/10 p-2 text-primary">
                  <Icon className="size-4" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-refined mt-1.5 text-xs leading-relaxed">
                  {detail}
                </p>
              </motion.div>
            ))}

            <div className="grid grid-cols-3 gap-1.5 pt-1 sm:gap-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={sectionViewport}
                  transition={{
                    duration: 0.35,
                    delay: 0.18 + index * 0.08,
                    ease: premiumEase,
                  }}
                  className="rounded-xl border border-border/70 bg-background/52 px-3 py-2 text-center"
                >
                  <p className="text-[0.7rem] text-muted-foreground/85">
                    {stat.label}
                  </p>
                  <p className="text-xs font-semibold text-foreground">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  )
}
