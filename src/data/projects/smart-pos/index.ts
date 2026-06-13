import dashboard from "@/assets/project-dashboard.jpg";
import hero from "@/assets/hero.jpg";

const dashboardImg = dashboard;
const heroImg = hero;

export const smartPosProject = {
  id: "smart-pos",
  title: "Smart POS + Kitchen Display System",
  description:
    "Lightning-fast POS synced in real time with a KDS that orchestrates the kitchen line.",
  longDescription:
    "A complete front-of-house and back-of-house system: servers ring orders on tablets, items appear instantly on station-specific KDS screens, and timers help the line stay coordinated. Built for the speed of a Friday-night service. Full-stack built with React, Node.js, and PostgreSQL.",
  image: "/projects/smart-pos/main.jpg",
  gallery: ["/projects/smart-pos/main.jpg", heroImg, dashboardImg],
  category: "POS" as const,
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
};
