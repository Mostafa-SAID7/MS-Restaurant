import pos from "@/assets/project-pos.jpg";
import ordering from "@/assets/project-ordering.jpg";
import qr from "@/assets/project-qr.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import loyalty from "@/assets/project-loyalty.jpg";
import hero from "@/assets/hero.jpg";

export type Category = "POS" | "Online Ordering" | "QR Menu" | "Full Systems" | "Analytics";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: Category;
  tech: string[];
  metrics: string[];
  features: string[];
  demoUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: "smart-pos",
    title: "Smart POS + Kitchen Display System",
    description:
      "Lightning-fast POS synced in real time with a KDS that orchestrates the kitchen line.",
    longDescription:
      "A complete front-of-house and back-of-house system: servers ring orders on tablets, items appear instantly on station-specific KDS screens, and timers help the line stay coordinated. Built for the speed of a Friday-night service. Full-stack built with React, Node.js, and PostgreSQL.",
    image: pos,
    gallery: [pos, hero, dashboard],
    category: "POS",
    tech: ["React", "Node.js", "WebSockets", "PostgreSQL", "Redis"],
    metrics: ["Reduced order time by 65%", "Used by 45+ restaurants", "99.9% uptime"],
    features: [
      "Tablet & desktop POS with offline mode",
      "Real-time KDS for hot/cold/bar stations",
      "Course-by-course order pacing",
      "Split bills, discounts, tips, and tax presets",
      "Receipt printing & integrated payment terminals",
      "Multi-branch synchronization",
    ],
    demoUrl: "https://example.com/demo/pos",
  },
  {
    id: "ordering-platform",
    title: "Multi-Branch Online Ordering Platform",
    description: "A marketplace with multi-branch routing, live tracking, and a vendor dashboard.",
    longDescription:
      "A complete ordering ecosystem: customers browse multiple brands and branches, get routed intelligently, pay securely, and track orders live. Vendors get a comprehensive dashboard to manage menus, hours, inventory, and orders. Built with Next.js frontend and NestJS backend.",
    image: ordering,
    gallery: [ordering, loyalty, dashboard],
    category: "Online Ordering",
    tech: ["Next.js", "NestJS", "MongoDB", "Stripe", "Mapbox"],
    metrics: ["Handled 1,200+ orders/day", "30+ vendors onboarded", "4.8★ user rating"],
    features: [
      "Smart branch routing based on geolocation",
      "Live order tracking and real-time updates",
      "Vendor admin: comprehensive menus, hours, promos",
      "Multi-currency & multi-language support",
      "Stripe + local payment gateway integration",
      "Advanced analytics and reporting",
    ],
    demoUrl: "https://example.com/demo/ordering",
    caseStudyUrl: "https://example.com/case/ordering",
  },
  {
    id: "qr-menu",
    title: "Digital QR Menu & Table Ordering",
    description: "Contactless dining: scan, browse, order, and pay — all from the table.",
    longDescription:
      "Transform the guest experience: each table gets a QR code linking to a beautiful digital menu. Guests browse, customize orders, and pay directly from their phone. Built with React and Tailwind for responsive design, Firebase for real-time sync, and Stripe for payments.",
    image: qr,
    gallery: [qr, loyalty, hero],
    category: "QR Menu",
    tech: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    metrics: ["+38% avg ticket size", "Deployed to 80+ venues", "<2s scan-to-order"],
    features: [
      "Rich media menus with allergen filters",
      "Table-aware ordering & calling for service",
      "Split-the-bill functionality at the table",
      "Multi-language with auto-detect",
      "Fully customizable per venue (logo, fonts, colors)",
      "Real-time inventory sync",
    ],
    demoUrl: "https://example.com/demo/qr",
  },
  {
    id: "rms-dashboard",
    title: "Restaurant Management Dashboard",
    description: "Unified analytics, inventory, staff scheduling, and financial reporting.",
    longDescription:
      "The operator's command center. Real-time KPIs across branches, inventory tracking, staff scheduling, and comprehensive financial reports. Built with React frontend, NestJS backend, PostgreSQL database, and advanced charting with Recharts.",
    image: dashboard,
    gallery: [dashboard, pos, ordering],
    category: "Full Systems",
    tech: ["React", "NestJS", "PostgreSQL", "Recharts", "Redis"],
    metrics: ["Saves 12 hours/week per branch", "Real-time KPIs across locations", "Multi-currency"],
    features: [
      "Sales, labor, and food cost KPIs",
      "Inventory tracking with low-stock alerts",
      "Staff scheduling & timesheets",
      "Branch comparison & export reports",
      "Role-based access for owners & managers",
      "Integration with accounting software",
    ],
    demoUrl: "https://example.com/demo/dashboard",
  },
  {
    id: "loyalty-program",
    title: "Cafe Loyalty & CRM Program",
    description: "Digital loyalty platform that turns one-time guests into regulars.",
    longDescription:
      "A comprehensive loyalty system with digital stamp cards, points-based rewards, and CRM functionality. Target guests with personalized offers based on behavior patterns. Built with React frontend and Node.js/NestJS backend with MongoDB for flexible data modeling.",
    image: loyalty,
    gallery: [loyalty, qr, ordering],
    category: "Analytics",
    tech: ["React", "NestJS", "MongoDB", "Stripe", "SendGrid"],
    metrics: ["+52% repeat visits", "20k+ active members", "4.8★ ratings"],
    features: [
      "Digital stamp cards and tiered rewards",
      "Personalized offers via CRM segments",
      "Web-based member portal",
      "Email campaigns and notifications",
      "Referral program with tracking",
      "Advanced analytics on member behavior",
    ],
    demoUrl: "https://example.com/demo/loyalty",
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "POS",
  "Online Ordering",
  "QR Menu",
  "Full Systems",
  "Analytics",
];
