import {
  Code2,
  Server,
  Utensils,
  Smartphone,
  Database,
} from "lucide-react";

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "Firebase", "REST & GraphQL"],
  },
  {
    title: "Restaurant Tech",
    icon: Utensils,
    items: [
      "POS Systems",
      "Online Ordering",
      "Kitchen Display (KDS)",
      "QR Menus",
      "Table Reservation",
      "Loyalty Programs",
      "Stripe / PayPal / Local Gateways",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Push Notifications", "Offline-first"],
  },
  {
    title: "Data & Infra",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "WebSockets", "Docker"],
  },
];

export const experience = [
  {
    year: "2023 — Present",
    role: "Lead Full-Stack Engineer · Restaurant Tech",
    company: "Independent / F&B Clients",
    description:
      "Designing and shipping end-to-end systems for restaurant groups across MENA — POS, KDS, ordering, and analytics.",
  },
  {
    year: "2021 — 2023",
    role: "Senior Full-Stack Developer",
    company: "Hospitality SaaS Studio",
    description:
      "Built multi-tenant ordering and loyalty platforms used by 100+ cafes and cloud kitchens.",
  },
  {
    year: "2019 — 2021",
    role: "Full-Stack Developer",
    company: "F&B Startup",
    description:
      "Launched the first version of a QR-menu and table-ordering product, scaling to 80+ venues.",
  },
];
