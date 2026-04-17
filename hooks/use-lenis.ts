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
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      return
    }

    const lenis = new Lenis({
      lerp: 0.11,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 0.95,
      wheelMultiplier: 0.92,
      gestureOrientation: "vertical",
      autoRaf: false,
    })

    let rafId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }

    rafId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
