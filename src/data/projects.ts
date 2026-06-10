import pos from "@/assets/project-pos.jpg";
import ordering from "@/assets/project-ordering.jpg";
import qr from "@/assets/project-qr.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import loyalty from "@/assets/project-loyalty.jpg";
import hero from "@/assets/hero.jpg";

export type Category = "POS" | "Online Ordering" | "QR Menu" | "Full Systems" | "Mobile Apps";

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
      "A complete front-of-house and back-of-house system: servers ring orders on tablets, items appear instantly on station-specific KDS screens, and timers help the line stay coordinated. Built for the speed of a Friday-night service.",
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
    ],
    demoUrl: "https://example.com/demo/pos",
  },
  {
    id: "ordering-platform",
    title: "Multi-Branch Online Ordering Platform",
    description: "A marketplace with multi-branch routing, live tracking, and a vendor dashboard.",
    longDescription:
      "A Talabat-style ordering platform: customers browse multiple brands and branches, get routed to the nearest kitchen, pay online, and track their order live. Vendors get a complete dashboard to manage menus, hours, and orders.",
    image: ordering,
    gallery: [ordering, loyalty, dashboard],
    category: "Online Ordering",
    tech: ["Next.js", "NestJS", "MongoDB", "Stripe", "Mapbox"],
    metrics: ["Handled 1,200+ orders/day", "30+ vendors onboarded", "4.8★ user rating"],
    features: [
      "Branch routing based on geolocation",
      "Live driver tracking and ETA",
      "Vendor admin: menus, hours, promos",
      "Multi-currency & multi-language",
      "Stripe + local payment gateways",
    ],
    demoUrl: "https://example.com/demo/ordering",
    caseStudyUrl: "https://example.com/case/ordering",
  },
  {
    id: "qr-menu",
    title: "Digital QR Menu & Table Ordering",
    description: "Contactless dining: scan, browse, order, and pay — all from the table.",
    longDescription:
      "Each table gets a QR code. Guests scan to view a rich-media menu, order without flagging down a server, and pay directly from their phone. Optimized for conversion: average ticket sizes climb noticeably after launch.",
    image: qr,
    gallery: [qr, loyalty, hero],
    category: "QR Menu",
    tech: ["React", "Tailwind", "Firebase", "Stripe"],
    metrics: ["+38% avg ticket size", "Deployed to 80+ venues", "<2s scan-to-order"],
    features: [
      "Rich media menus with allergen filters",
      "Table-aware ordering & calling for service",
      "Split-the-bill at the table",
      "Multi-language with auto-detect",
      "Branded per venue (logo, fonts, colors)",
    ],
    demoUrl: "https://example.com/demo/qr",
  },
  {
    id: "rms-dashboard",
    title: "Restaurant Management Dashboard",
    description: "Unified analytics, inventory, staff scheduling, and financial reporting.",
    longDescription:
      "The operator's command center. Real-time KPIs across branches, inventory and waste tracking, staff scheduling, and exportable reports built for accountants — all in one dark, focused interface.",
    image: dashboard,
    gallery: [dashboard, pos, ordering],
    category: "Full Systems",
    tech: ["React", "NestJS", "PostgreSQL", "Recharts", "Redis"],
    metrics: ["Saves 12 hours/week per branch", "Real-time KPIs", "Multi-currency"],
    features: [
      "Sales, labor, and food cost KPIs",
      "Inventory with low-stock alerts",
      "Staff scheduling & timesheets",
      "Branch comparison reports",
      "Role-based access for owners & managers",
    ],
    demoUrl: "https://example.com/demo/dashboard",
  },
  {
    id: "loyalty-app",
    title: "Cafe Loyalty & CRM Mobile App",
    description: "A native-feeling loyalty app that turns one-time guests into regulars.",
    longDescription:
      "Stamp cards, points, and personalized offers powered by a CRM that segments guests by behavior. Push notifications bring people back; in-app ordering keeps them inside your ecosystem.",
    image: loyalty,
    gallery: [loyalty, qr, ordering],
    category: "Mobile Apps",
    tech: ["React Native", "Firebase", "Node.js", "Stripe"],
    metrics: ["+52% repeat visits", "20k+ active users", "4.9★ App Store"],
    features: [
      "Digital stamp cards and tiered rewards",
      "Personalized offers via CRM segments",
      "In-app ordering and pre-pay",
      "Push notifications for new drops",
      "Referral program with tracking",
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
  "Mobile Apps",
];
