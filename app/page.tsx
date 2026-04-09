import { SiteShell } from "@/components/layout/site-shell"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { SkillsSection } from "@/components/sections/skills-section"

export default function Page() {
  return (
    <SiteShell>
      <div className="relative isolate pb-20 md:pb-28">
        <HeroSection />

        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </SiteShell>
  )
}
