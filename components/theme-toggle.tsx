"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  )
  const isDark = resolvedTheme === "dark"

  const label = mounted ? (isDark ? "Activer le mode clair" : "Activer le mode sombre") : "Changer le thème"

  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      className={cn(
        "relative size-9 rounded-full border-border/75 bg-card/70 text-muted-foreground shadow-[0_8px_18px_-14px_rgb(0_0_0/0.6)] backdrop-blur-sm transition-all duration-300 hover:border-primary/35 hover:bg-card hover:text-foreground sm:size-10",
        className
      )}
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun
        className={cn(
          "absolute size-[1.05rem] transition-all duration-400",
          mounted && isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute size-[1.05rem] transition-all duration-400",
          mounted && isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )}
      />
      <span className="sr-only">{label}</span>
    </Button>
  )
}
