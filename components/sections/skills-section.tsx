"use client"

import { motion } from "framer-motion"

import { AnimatedSection } from "@/components/ui/animated-section"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { TechBadge } from "@/components/ui/tech-badge"
import { cardReveal, premiumTransition, sectionViewport, staggerContainer } from "@/lib/motion"
import { skillCategories } from "@/lib/constants"

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-12 sm:py-14 md:py-18 lg:py-20">
      <SectionHeading
        eyebrow="Skills / Tech Stack"
        title="Une stack moderne, robuste et orientée produit"
        description="Expertise full-stack et mobile avec des choix techniques fiables pour livrer des produits performants, maintenables et premium."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {skillCategories.map((group) => (
          <motion.div key={group.category} variants={cardReveal}>
            <PremiumCard className="h-full border-border/60 bg-gradient-to-b from-card to-card/70 p-4 sm:p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold md:text-lg">
                  {group.category}
                </h3>
                <span className="text-xs text-muted-foreground/85">
                  {group.skills.length} tech
                </span>
              </div>

              <p className="text-refined mb-5 text-sm leading-relaxed">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={premiumTransition}
                  >
                    <TechBadge label={skill.name} />
                  </motion.div>
                ))}
              </div>
            </PremiumCard>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  )
}
