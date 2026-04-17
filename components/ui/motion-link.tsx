"use client"

import { motion, useReducedMotion } from "framer-motion"

import { buttonHover, buttonTap } from "@/lib/motion"
import { cn } from "@/lib/utils"

type MotionLinkProps = React.ComponentProps<typeof motion.a>

export function MotionLink({ className, children, ...props }: MotionLinkProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.a
      whileHover={prefersReducedMotion ? undefined : buttonHover}
      whileTap={prefersReducedMotion ? undefined : buttonTap}
      className={cn(
        "transition-[background-color,border-color,color,transform] duration-250 will-change-transform focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  )
}
