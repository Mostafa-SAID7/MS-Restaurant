import pos from "@/assets/project-pos.jpg";
import ordering from "@/assets/project-ordering.jpg";
import qr from "@/assets/project-qr.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import loyalty from "@/assets/project-loyalty.jpg";

export type Category = "POS" | "Online Ordering" | "QR Menu" | "Full Systems" | "Mobile Apps";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
  tech: string[];
  metrics: string[];
}

export const projects: Project[] = [
  {
    id: "smart-pos",
    title: "Smart POS + Kitchen Display System",
    description:
      "Lightning-fast POS synced in real time with a KDS that orchestrates the kitchen line, from order entry to plate-up.",
    image: pos,
    category: "POS",
    tech: ["React", "Node.js", "WebSockets", "PostgreSQL", "Redis"],
    metrics: ["Reduced order time by 65%", "Used by 45+ restaurants", "99.9% uptime"],
  },
  {
    id: "ordering-platform",
    title: "Multi-Branch Online Ordering Platform",
    description:
      "A Talabat-style marketplace with multi-branch routing, live tracking, and a vendor dashboard for every kitchen.",
    image: ordering,
    category: "Online Ordering",
    tech: ["Next.js", "NestJS", "MongoDB", "Stripe", "Mapbox"],
    metrics: ["Handled 1,200+ orders/day", "30+ vendors onboarded", "4.8★ user rating"],
  },
  {
    id: "qr-menu",
    title: "Digital QR Menu & Table Ordering",
    description:
      "Contactless dining: scan, browse a rich media menu, order, and pay — all without flagging a waiter down.",
    image: qr,
    category: "QR Menu",
    tech: ["React", "Tailwind", "Firebase", "Stripe"],
    metrics: ["+38% avg ticket size", "Deployed to 80+ venues", "<2s scan-to-order"],
  },
  {
    id: "rms-dashboard",
    title: "Restaurant Management Dashboard",
    description:
      "Unified analytics, inventory, staff scheduling, and financial reporting for multi-location operators.",
    image: dashboard,
    category: "Full Systems",
    tech: ["React", "NestJS", "PostgreSQL", "Recharts", "Redis"],
    metrics: ["Saves 12 hours/week per branch", "Real-time KPIs", "Multi-currency"],
  },
  {
    id: "loyalty-app",
    title: "Cafe Loyalty & CRM Mobile App",
    description:
      "A native-feeling loyalty app: stamp cards, push offers, and a CRM that turns one-time guests into regulars.",
    image: loyalty,
    category: "Mobile Apps",
    tech: ["React Native", "Firebase", "Node.js", "Stripe"],
    metrics: ["+52% repeat visits", "20k+ active users", "4.9★ App Store"],
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "POS",
  "Online Ordering",
  "QR Menu",
  "Full Systems",
  "Mobile Apps",
];
