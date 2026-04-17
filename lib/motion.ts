import type { Transition, Variants } from "framer-motion"

export const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const premiumTransition: Transition = {
  duration: 0.45,
  ease: premiumEase,
}

export const springTransition: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 28,
  mass: 0.85,
}

export const sectionViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -8% 0px",
} as const

export const sectionViewportFast = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -6% 0px",
} as const

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
}

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: premiumEase,
    },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
}

export const subtleCardHover = {
  y: -4,
  scale: 1.008,
  transition: {
    duration: 0.24,
    ease: premiumEase,
  },
}

export const buttonHover = {
  y: -2,
  scale: 1.01,
  transition: {
    duration: 0.2,
    ease: premiumEase,
  },
}

export const buttonTap = {
  y: 0,
  scale: 0.985,
  transition: {
    duration: 0.12,
    ease: premiumEase,
  },
}

export const subtleButtonHover = buttonHover
export const subtleButtonTap = buttonTap
