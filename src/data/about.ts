import { Utensils, Coffee, Truck, Store, LucideIcon } from "lucide-react";

export interface Pillar {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const aboutPillars: Pillar[] = [
  {
    icon: Utensils,
    title: "Fine Dining",
    desc: "Reservation, table mgmt, premium UX.",
  },
  {
    icon: Coffee,
    title: "Cafes",
    desc: "QR menus, loyalty, fast checkout flows.",
  },
  {
    icon: Truck,
    title: "Cloud Kitchens",
    desc: "Multi-brand ordering and routing.",
  },
  {
    icon: Store,
    title: "Multi-Branch",
    desc: "Centralized control, branch autonomy.",
  },
];

export const aboutBio = {
  eyebrow: "About",
  title: "Full-Stack Solutions for Modern Hospitality",
  subtitle:
    "I partner with restaurants, cafes, and multi-branch F&B operations to build scalable systems that drive growth — from POS and online ordering to kitchen management and loyalty platforms.",
  paragraphs: [
    "With 4+ years of experience in full-stack development, I've specialized in building comprehensive F&B solutions. From single-location POS systems to multi-branch platforms processing thousands of orders daily, I design systems that scale and perform during peak hours.",
    "My expertise spans React, Angular, Vue for frontend; Node.js, NestJS, ASP.NET for backend; and PostgreSQL, MongoDB, SQL Server, MySQL for databases. I focus on intuitive staff interfaces, delightful guest experiences, and robust backends that integrate seamlessly with payment gateways, delivery platforms, and accounting systems.",
  ],
};
