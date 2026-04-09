import type { Transition, Variants } from "framer-motion"

export const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const smoothTransition: Transition = {
  duration: 0.58,
  ease: premiumEase,
}

export const sectionViewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -10% 0px",
} as const

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: premiumEase,
    },
  },
}

export const subtleCardHover = {
  y: -4,
  transition: {
    duration: 0.26,
    ease: premiumEase,
  },
}

export const subtleButtonHover = {
  y: -2,
  scale: 1.01,
  transition: {
    duration: 0.22,
    ease: premiumEase,
  },
}

export const subtleButtonTap = {
  y: 0,
  scale: 0.99,
  transition: {
    duration: 0.14,
    ease: premiumEase,
  },
}
