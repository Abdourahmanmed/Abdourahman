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
        "rounded-2xl border border-border/70 bg-card/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-300 hover:border-primary/30 hover:shadow-[0_14px_36px_rgb(0,0,0,0.14)]",
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.article>
  )
}
