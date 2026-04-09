import { Mail } from "lucide-react"

import { AnimatedSection } from "@/components/ui/animated-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { socialLinks } from "@/lib/constants"

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-16 md:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Discutons de votre prochain projet"
        description="Vous cherchez un développeur Next.js / React / React Native pour créer une expérience digitale premium ? Parlons-en."
      />

      <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-8">
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 text-base font-medium text-primary hover:underline"
        >
          <Mail className="size-4" /> hello@example.com
        </a>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
