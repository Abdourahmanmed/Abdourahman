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

export type ProjectCategory = "pro" | "learning-web" | "learning-mobile"

export type ProjectItem = {
  title: string
  context?: string
  type: string
  description: string
  category: ProjectCategory
  status: string
  stack: string[]
  highlights?: string[]
  projectUrl?: string
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
    title: "Gestion de boîtes postales",
    context: "La Poste de Djibouti",
    type: "Application métier interne",
    description:
      "Application de gestion des boîtes postales permettant d'administrer et suivre l'ensemble des boîtes postales de manière centralisée.",
    category: "pro",
    status: "Projet interne",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Gestion", "Suivi", "Administration", "Outil métier"],
  },
  {
    title: "VoxLink",
    context: "La Poste de Djibouti",
    type: "CRM centre d'appel sortant",
    description:
      "CRM conçu pour la gestion des appels sortants du centre d'appel, avec suivi opérationnel et organisation des interactions.",
    category: "pro",
    status: "Projet interne",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["CRM", "Centre d'appel", "Appels sortants", "Productivité"],
  },
  {
    title: "EntreVox",
    context: "La Poste de Djibouti",
    type: "Plateforme de gestion des appels entrants",
    description:
      "Application de gestion des appels entrants pour les entreprises partenaires du centre d'appel, permettant de traiter les demandes clients, doléances, plaintes et besoins d'information.",
    category: "pro",
    status: "Projet interne",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Appels entrants", "Support client", "Partenaires", "Traitement des demandes"],
  },
  {
    title: "RRA Connecteur",
    context: "La Poste de Djibouti",
    type: "Connecteur / outil métier",
    description:
      "Connecteur développé récemment pour répondre à un besoin métier spécifique et améliorer l'intégration entre services.",
    category: "pro",
    status: "Projet interne",
    stack: ["React", "Next.js", "TypeScript"],
    highlights: ["Intégration", "Connecteur", "Logique métier"],
  },
  {
    title: "CENI Djibouti",
    type: "Projet réel",
    description:
      "Projet réalisé récemment dans un contexte réel, avec une approche professionnelle orientée exécution et fiabilité.",
    category: "pro",
    status: "Cas réel",
    stack: ["Next.js", "React", "TypeScript"],
    highlights: ["Projet réel", "Exécution", "Fiabilité"],
  },
  {
    title: "Safegate",
    type: "Site vitrine professionnel",
    description:
      "Site conçu pour mettre en valeur les services de Safegate et renforcer sa présence en ligne, même si la version finale n'a pas été retenue par l'entreprise.",
    category: "learning-web",
    status: "Projet d'apprentissage / cas client non retenu",
    stack: ["Next.js", "React", "Tailwind CSS"],
    highlights: ["Site vitrine", "Services", "Présence en ligne"],
  },
  {
    title: "Freegate",
    type: "Plateforme web pour importateurs",
    description:
      "Plateforme web conçue pour les professionnels de l'importation, avec mise en avant de services liés au financement, à l'entreposage, à la publication d'annonces de marchandises, au transport, aux formalités administratives, au suivi des commandes et au support client personnalisé.",
    category: "learning-web",
    status: "Projet d'apprentissage",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: ["Importation", "Logistique", "Financement", "Annonces", "Suivi", "Support"],
  },
  {
    title: "Todo List Mobile",
    type: "Application mobile",
    description:
      "Application mobile de gestion de tâches réalisée durant l'apprentissage, avec organisation simple et expérience fluide.",
    category: "learning-mobile",
    status: "Projet d'apprentissage",
    stack: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Wallet Manager",
    type: "Application mobile",
    description:
      "Application mobile de suivi des dépenses et de gestion personnelle de l'argent, permettant de visualiser ce qui a été dépensé, ce qui reste et où l'argent a été utilisé.",
    category: "learning-mobile",
    status: "Projet d'apprentissage",
    stack: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Movies App",
    type: "Application mobile",
    description:
      "Application mobile affichant des films et séries avec détails, favoris et navigation par contenu.",
    category: "learning-mobile",
    status: "Projet d'apprentissage",
    stack: ["React Native", "Expo", "TypeScript"],
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
