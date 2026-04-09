import { SiteShell } from "@/components/layout/site-shell"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { SkillsSection } from "@/components/sections/skills-section"

export default function Page() {
  return (
    <SiteShell>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </SiteShell>
  )
}
