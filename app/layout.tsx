import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { LenisProvider } from "@/components/layout/lenis-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Abdourahman | Next.js, React.js & React Native Developer",
  description:
    "Portfolio premium moderne mettant en valeur expertise Next.js, React.js, React Native, services et projets.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider defaultTheme="dark">
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
