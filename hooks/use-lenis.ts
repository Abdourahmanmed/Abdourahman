"use client"

import { useEffect } from "react"
import Lenis from "lenis"

/**
 * Centralise la configuration Lenis pour éviter de disperser la logique
 * de scroll fluide dans les composants App Router.
 */
export function useLenis() {
  useEffect(() => {
    // Respect des préférences d'accessibilité : pas d'animation forcée.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      return
    }

    const lenis = new Lenis({
      // Réglages discrets pour un rendu premium sans effet "lourd".
      duration: 0.9,
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1,
      wheelMultiplier: 0.95,
      gestureOrientation: "vertical",
      autoRaf: true,
    })

    return () => {
      lenis.destroy()
    }
  }, [])
}
