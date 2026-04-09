"use client"

import type { ReactNode } from "react"

import { useLenis } from "@/hooks/use-lenis"

type LenisProviderProps = {
  children: ReactNode
}

/**
 * Client boundary dédiée au scroll fluide.
 *
 * Le RootLayout reste un Server Component (App Router best practice)
 * et seule cette couche est hydratée côté client.
 */
export function LenisProvider({ children }: LenisProviderProps) {
  useLenis()

  return <>{children}</>
}
