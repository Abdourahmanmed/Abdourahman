import type { Metadata, Viewport } from "next"
import { Manrope, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { LenisProvider } from "@/components/layout/lenis-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Abdourahman | Next.js, React.js & React Native Developer",
  description:
    "Portfolio premium moderne mettant en valeur expertise Next.js, React.js, React Native, services et projets.",
  metadataBase: new URL("https://abdourahman.dev"),
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060a16" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8ff" },
  ],
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
      className={cn("h-full scroll-smooth antialiased", fontSans.variable, fontDisplay.variable)}
    >
      <body className="relative min-h-screen bg-background font-sans text-foreground transition-colors duration-500 ease-out">
        <div aria-hidden className="page-bg" />
        <div aria-hidden className="page-glow" />
        <div aria-hidden className="page-noise" />

        <ThemeProvider defaultTheme="dark" enableSystem>
          <LenisProvider>
            <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
