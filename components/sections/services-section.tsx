import { AnimatedSection } from "@/components/ui/animated-section"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { services } from "@/lib/constants"

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="py-16 md:py-20">
      <SectionHeading
        eyebrow="Services"
        title="Accompagnement de bout en bout"
        description="Des solutions premium pensées pour la conversion, la vitesse et la maintenabilité."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <PremiumCard key={service.title}>
              <Icon className="mb-4 size-5 text-primary" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </PremiumCard>
          )
        })}
      </div>
    </AnimatedSection>
  )
}
