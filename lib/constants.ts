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

export type SkillCategory = "Frontend" | "Backend" | "Mobile" | "Database" | "Design & Tools"

export type SkillItem = {
  name: string
}

export type SkillCategoryGroup = {
  category: SkillCategory
  description: string
  skills: SkillItem[]
}

export type ServiceItem = {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export type ProjectItem = {
  title: string
  description: string
  category: "SaaS" | "Dashboard" | "Mobile" | "Interface"
  stack: string[]
  visualLabel: string
  projectUrl: string
  codeUrl?: string
}

export type SocialLink = {
  label: string
  href: string
}

export const navigation: NavigationItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export const skillCategories: SkillCategoryGroup[] = [
  {
    category: "Frontend",
    description: "Interfaces web modernes, performantes et évolutives.",
    skills: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
    ],
  },
  {
    category: "Backend",
    description: "Architecture API fiable et logique métier robuste.",
    skills: [{ name: "Node.js" }, { name: "Express.js" }, { name: "Prisma" }],
  },
  {
    category: "Mobile",
    description: "Applications mobiles fluides avec base React Native.",
    skills: [{ name: "React Native" }],
  },
  {
    category: "Database",
    description: "Gestion de données relationnelles et modélisation propre.",
    skills: [{ name: "PostgreSQL" }],
  },
  {
    category: "Design & Tools",
    description: "Collaboration produit et workflow pro en équipe.",
    skills: [{ name: "Figma" }, { name: "Git / GitHub" }],
  },
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
    title: "OrbitFlow SaaS",
    description:
      "Plateforme SaaS B2B pour piloter le cycle client, la facturation et l'onboarding avec une UX premium.",
    category: "SaaS",
    stack: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    visualLabel: "Vue onboarding + analytics",
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    title: "PulseOps Dashboard",
    description:
      "Dashboard décisionnel avec widgets configurables, indicateurs temps réel et exports avancés pour équipes produit.",
    category: "Dashboard",
    stack: ["React", "Recharts", "Node.js", "PostgreSQL", "Framer Motion"],
    visualLabel: "KPIs temps réel",
    projectUrl: "#",
  },
  {
    title: "MoveWell Mobile",
    description:
      "Application mobile de coaching avec suivi d'habitudes, programmes personnalisés et notifications intelligentes.",
    category: "Mobile",
    stack: ["React Native", "Expo", "Firebase", "TypeScript"],
    visualLabel: "Parcours mobile iOS/Android",
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Nova UI Experience",
    description:
      "Interface moderne pour produit digital haut de gamme avec design system, micro-interactions et parcours conversion optimisé.",
    category: "Interface",
    stack: ["Next.js", "shadcn/ui", "Framer Motion", "Figma"],
    visualLabel: "Prototype interface moderne",
    projectUrl: "#",
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
