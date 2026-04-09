import { socialLinks } from "@/lib/constants"

export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-border/60 py-8 sm:mt-16 md:mt-20">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground sm:px-6 md:flex-row md:text-left lg:px-8 2xl:px-12">
        <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Abdourahman. Tous droits réservés.</p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
