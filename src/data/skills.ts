import {
  Code2,
  Server,
  Utensils,
  Database,
} from "lucide-react";

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Angular", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "ASP.NET", "PHP", "REST & GraphQL", "Firebase"],
  },
  {
    title: "Restaurant & Cafe Systems",
    icon: Utensils,
    items: [
      "POS Systems",
      "Online Ordering",
      "Kitchen Display (KDS)",
      "QR Menus",
      "Table Reservation",
      "Loyalty Programs",
      "Order Tracking",
      "Stripe / PayPal / Local Payment Gateways",
    ],
  },
  {
    title: "Databases & Infrastructure",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Redis", "WebSockets", "Docker"],
  },
];

export const experience = [
  {
    year: "2020 — Present",
    role: "Full-Stack Developer · Restaurant & Cafe Systems",
    company: "Independent / Hospitality Clients",
    description:
      "4+ years building end-to-end systems for restaurants, cafes, and multi-branch F&B operations. Specialized in POS, online ordering, KDS, QR menus, and analytics platforms.",
  },
  {
    year: "2022 — 2024",
    role: "Full-Stack Engineer",
    company: "Various F&B Projects",
    description:
      "Architected and shipped multi-tenant ordering platforms, loyalty systems, and integrated payment solutions for 50+ hospitality venues.",
  },
  {
    year: "2020 — 2022",
    role: "Full-Stack Developer",
    company: "Restaurant Technology Startup",
    description:
      "Launched comprehensive F&B management systems including QR-menus, table-ordering, and real-time kitchen management for 20+ locations.",
  },
];
