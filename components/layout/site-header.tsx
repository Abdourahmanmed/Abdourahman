"use client"

import Link from "next/link"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowRight, Menu, Sparkles, X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { navigation } from "@/lib/constants"
import { premiumEase } from "@/lib/motion"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  const sectionIds = useMemo(() => navigation.map((item) => item.href.replace("#", "")), [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 14)
  })

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection?.target.id) {
          setActiveSection(`#${visibleSection.target.id}`)
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [sectionIds])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <motion.header
      className="sticky top-2 z-50 px-3 sm:top-3 sm:px-4"
      animate={{ y: isScrolled ? 0 : 2 }}
      transition={{ duration: 0.32, ease: premiumEase }}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[88rem] rounded-2xl border bg-background/62 px-3.5 backdrop-blur-xl transition-all duration-300 sm:px-6",
          isScrolled
            ? "border-border/75 shadow-[0_14px_34px_-22px_rgb(0_0_0/0.45)]"
            : "border-border/55 shadow-[0_10px_25px_-20px_rgb(0_0_0/0.35)]"
        )}
      >
        <div className="flex h-15 items-center justify-between gap-2 sm:h-16 sm:gap-3">
          <Link href="#hero" className="group inline-flex min-w-0 items-center gap-2 sm:gap-2.5">
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30 sm:size-8">
              <Sparkles className="size-3.5 sm:size-4" />
            </span>
            <span className="truncate text-[0.68rem] font-semibold tracking-[0.14em] uppercase sm:text-sm sm:tracking-[0.18em]">
              ABDOURAHMAN
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="active-section"
                      className="absolute inset-0 -z-10 rounded-full border border-primary/30 bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : null}
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild className="h-10 rounded-full px-5 text-sm">
              <Link href="#contact">
                Let&apos;s work together <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="size-9 rounded-full lg:hidden sm:size-10"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: premiumEase }}
            className="mx-auto mt-2 w-full max-w-[88rem] rounded-2xl border border-border/60 bg-background/90 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-1">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.href

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03, ease: premiumEase }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-sm",
                        isActive
                          ? "bg-primary/10 text-foreground ring-1 ring-primary/30"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            <Button asChild className="mt-3 h-10 w-full rounded-xl text-sm" onClick={() => setIsMenuOpen(false)}>
              <Link href="#contact">
                Me contacter <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
