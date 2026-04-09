"use client"

import { useInView } from "react-intersection-observer"

export function useSectionInView() {
  return useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "-60px 0px",
  })
}
