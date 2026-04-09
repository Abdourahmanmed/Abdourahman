"use client"

import { motion, useReducedMotion } from "framer-motion"

import { subtleButtonHover, subtleButtonTap } from "@/lib/motion"
import { cn } from "@/lib/utils"

type MotionLinkProps = React.ComponentProps<typeof motion.a>

export function MotionLink({ className, children, ...props }: MotionLinkProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.a
      whileHover={prefersReducedMotion ? undefined : subtleButtonHover}
      whileTap={prefersReducedMotion ? undefined : subtleButtonTap}
      className={cn(
        "transition-[background-color,border-color,color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  )
}
