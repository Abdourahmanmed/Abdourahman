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
        "surface-panel rounded-2xl p-6 transition-[border-color,box-shadow,background-color,transform] duration-300 hover:border-primary/28 hover:bg-card/86 hover:shadow-[0_20px_48px_-28px_rgb(0,0,0,0.52)]",
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.article>
  )
}
