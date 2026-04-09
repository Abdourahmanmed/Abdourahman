"use client"

import { useLenis } from "@/hooks/use-lenis"

type LenisProviderProps = {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  useLenis()

  return <>{children}</>
}
