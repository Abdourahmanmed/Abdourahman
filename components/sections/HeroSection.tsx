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
      className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-24 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <motion.div
        className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
      >
        <div className="space-y-8">
          <motion.span
            variants={fadeUpItem}
            className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-4 py-1 text-[0.68rem] font-medium tracking-[0.24em] text-primary uppercase"
          >
            Développeur Full-Stack moderne
          </motion.span>

          <motion.h1
            variants={fadeUpItem}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl"
          >
            Je conçois des applications web et mobiles haut de gamme avec
            Next.js, React.js et React Native.
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
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
                className="rounded-full border border-border/80 bg-card/65 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="flex flex-wrap gap-3 pt-2"
          >
            <MotionLink
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_24px_rgb(0,0,0,0.14)]"
            >
              Voir mes projets <ArrowUpRight className="size-4" />
            </MotionLink>
            <MotionLink
              href="#contact"
              className="inline-flex items-center rounded-full border border-border bg-card/85 px-6 py-3 text-sm font-medium backdrop-blur hover:border-primary/40"
            >
              Démarrer un projet
            </MotionLink>
          </motion.div>
        </div>

        <motion.aside variants={fadeUpItem} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
          <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-black/45 p-4 shadow-2xl backdrop-blur-md md:p-5">
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
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20"
              >
                <div className="mb-3 inline-flex rounded-lg border border-primary/30 bg-primary/10 p-2 text-primary">
                  <Icon className="size-4" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </motion.div>
            ))}

            <div className="grid grid-cols-3 gap-2 pt-1">
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
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-center"
                >
                  <p className="text-[0.7rem] text-muted-foreground">
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
