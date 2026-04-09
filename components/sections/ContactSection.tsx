"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Mail,
  MessageCircleMore,
  Sparkles,
} from "lucide-react"

import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { MotionLink } from "@/components/ui/motion-link"
import {
  fadeUpItem,
  premiumEase,
  sectionViewport,
  staggerContainer,
} from "@/lib/motion"

const contactLinks = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: Mail,
    variant: "default" as const,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/votreprofil",
    href: "https://www.linkedin.com",
    icon: Briefcase,
    variant: "outline" as const,
  },
  {
    label: "GitHub",
    value: "github.com/votreprofil",
    href: "https://github.com",
    icon: Code2,
    variant: "outline" as const,
  },
  {
    label: "WhatsApp",
    value: "+33 6 00 00 00 00",
    href: "https://wa.me/33600000000",
    icon: MessageCircleMore,
    variant: "outline" as const,
  },
]

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-12 sm:py-14 md:py-20 lg:py-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-4 shadow-[0_22px_70px_-35px_rgb(0,0,0,0.45)] backdrop-blur-md sm:p-6 md:p-8 lg:p-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,color-mix(in_oklch,var(--primary)_22%,transparent)_0%,transparent_38%),radial-gradient(circle_at_85%_92%,color-mix(in_oklch,var(--accent)_20%,transparent)_0%,transparent_40%)]" />

        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <motion.div variants={fadeUpItem}>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              <Sparkles className="size-3.5" /> Disponibilité limitée
            </p>

            <h2 className="mt-4 max-w-2xl text-2xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Construisons ensemble une expérience digitale qui inspire
              confiance et convertit.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Vous avez un projet web, SaaS ou mobile ambitieux ? Parlons de vos
              objectifs et transformons-les en un produit premium, performant et
              prêt à scaler.
            </p>

            <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2">
              {contactLinks.map((link, index) => {
                const Icon = link.icon

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={sectionViewport}
                    transition={{
                      duration: 0.35,
                      ease: premiumEase,
                      delay: index * 0.08,
                    }}
                  >
                    <Button
                      asChild
                      size="lg"
                      variant={link.variant}
                      className="h-10 w-full rounded-xl px-4 text-sm"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Me contacter via ${link.label}`}
                      >
                        <Icon className="size-4" />
                        {link.label}
                        <ArrowUpRight className="size-4 opacity-80 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                      </a>
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.aside
            variants={fadeUpItem}
            className="rounded-2xl border border-border/70 bg-background/75 p-5 shadow-[0_14px_35px_-25px_rgb(0,0,0,0.45)] backdrop-blur-sm md:p-6"
          >
            <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Point de contact direct
            </p>
            <p className="mt-2 text-xl font-semibold text-foreground md:text-2xl">
              Réponse sous 24h
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Je sélectionne peu de collaborations pour garantir un haut niveau
              d&apos;exécution. Si votre vision est claire et ambitieuse, je
              serais ravi d&apos;en discuter.
            </p>

            <div className="mt-6 space-y-3">
              {contactLinks.map((link) => (
                <MotionLink
                  key={`${link.label}-detail`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between rounded-xl border border-border/70 bg-card/70 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {link.label}
                    </p>
                    <p className="max-w-[13rem] text-xs break-words text-muted-foreground sm:max-w-[15rem]">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-0.5 size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </MotionLink>
              ))}
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
