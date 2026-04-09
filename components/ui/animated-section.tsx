"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { useSectionInView } from "@/hooks/use-section-in-view"

type AnimatedSectionProps = {
  id: string
  className?: string
  children: React.ReactNode
}

export function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  const { ref, inView } = useSectionInView()

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("scroll-mt-32", className)}
    >
      {children}
    </motion.section>
  )
}
