"use client"

import { useInView } from "react-intersection-observer"

export function useSectionInView() {
  return useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -12% 0px",
  })
}
