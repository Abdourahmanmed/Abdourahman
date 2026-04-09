import type { ComponentType } from "react"
import {
  BriefcaseBusiness,
  Code2,
  Globe,
  Layers,
  Rocket,
  Smartphone,
} from "lucide-react"

export type NavigationItem = {
  label: string
  href: string
}

export type SkillItem = {
  name: string
  category: "Frontend" | "Backend" | "Mobile" | "Tooling"
}

export type ServiceItem = {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export type ProjectItem = {
  title: string
  description: string
  stack: string[]
  href: string
}

export type SocialLink = {
  label: string
  href: string
}

export const navigation: NavigationItem[] = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export const skills: SkillItem[] = [
  { name: "Next.js App Router", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "Git & GitHub", category: "Tooling" },
  { name: "Figma", category: "Tooling" },
]

export const services: ServiceItem[] = [
  {
    title: "Développement Next.js",
    description:
      "Applications web rapides, SEO-friendly et maintenables avec architecture moderne.",
    icon: Code2,
  },
  {
    title: "Interfaces React Premium",
    description:
      "Design systems élégants, composants réutilisables et animations fluides.",
    icon: Layers,
  },
  {
    title: "Applications React Native",
    description:
      "Applications mobiles iOS/Android performantes avec expérience utilisateur soignée.",
    icon: Smartphone,
  },
  {
    title: "Lancement produit",
    description:
      "Accompagnement technique de la conception à la mise en production.",
    icon: Rocket,
  },
]

export const projects: ProjectItem[] = [
  {
    title: "SaaS Dashboard",
    description:
      "Dashboard analytique Next.js avec authentification, filtres avancés et graphiques temps réel.",
    stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    href: "#",
  },
  {
    title: "E-commerce Premium",
    description:
      "Boutique moderne orientée conversion, performance Core Web Vitals et checkout simplifié.",
    stack: ["Next.js", "Stripe", "Framer Motion"],
    href: "#",
  },
  {
    title: "Mobile Fitness App",
    description:
      "Application React Native avec suivi d'objectifs, notifications et synchronisation cloud.",
    stack: ["React Native", "Expo", "Firebase"],
    href: "#",
  },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
]

export const highlightStats = [
  { label: "Projets livrés", value: "30+" },
  { label: "Années d'expérience", value: "4+" },
  { label: "Technologies maîtrisées", value: "20+" },
]

export const techBadges = ["Next.js", "React.js", "React Native", "TypeScript", "Tailwind"]

export const serviceIcons = {
  Globe,
  BriefcaseBusiness,
}
