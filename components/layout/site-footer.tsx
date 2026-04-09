import { socialLinks } from "@/lib/constants"

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Abdourahman. Tous droits réservés.</p>

        <div className="flex items-center gap-4">
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
