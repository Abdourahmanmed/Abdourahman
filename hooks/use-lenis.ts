"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    })

    let animationFrame = 0

    const raf = (time: number) => {
      lenis.raf(time)
      animationFrame = window.requestAnimationFrame(raf)
    }

    animationFrame = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])
}
