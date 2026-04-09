"use client"

import { motion, useReducedMotion } from "framer-motion"

import { useSectionInView } from "@/hooks/use-section-in-view"
import { sectionReveal, sectionViewport } from "@/lib/motion"
import { cn } from "@/lib/utils"

type AnimatedSectionProps = {
  id: string
  className?: string
  children: React.ReactNode
}

export function AnimatedSection({
  id,
  className,
  children,
}: AnimatedSectionProps) {
  const { ref } = useSectionInView()
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={prefersReducedMotion ? undefined : sectionReveal}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={prefersReducedMotion ? undefined : sectionViewport}
      className={cn("scroll-mt-32", className)}
    >
      {children}
    </motion.section>
  )
}
