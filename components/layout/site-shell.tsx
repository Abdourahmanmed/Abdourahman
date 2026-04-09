import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

type SiteShellProps = {
  children: React.ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-svh overflow-x-clip bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6">{children}</main>
      <SiteFooter />
    </div>
  )
}
