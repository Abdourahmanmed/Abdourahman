"use client"

import { motion, type MotionProps, useReducedMotion } from "framer-motion"

import { subtleCardHover } from "@/lib/motion"
import { cn } from "@/lib/utils"

type PremiumCardProps = MotionProps & {
  className?: string
  children: React.ReactNode
}

export function PremiumCard({
  className,
  children,
  ...motionProps
}: PremiumCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : subtleCardHover}
      className={cn(
        "surface-panel rounded-2xl p-6 transition-[border-color,background-color,transform] duration-250 will-change-transform hover:border-primary/28 hover:bg-card/86 hover:shadow-[0_18px_40px_-30px_rgb(0,0,0,0.42)]",
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.article>
  )
}
