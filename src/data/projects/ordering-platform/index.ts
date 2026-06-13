import loyalty from "@/assets/project-loyalty.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import ordering from "@/assets/project-ordering.jpg";

export const orderingPlatformProject = {
  id: "ordering-platform",
  title: "Multi-Branch Online Ordering Platform",
  description: "A marketplace with multi-branch routing, live tracking, and a vendor dashboard.",
  longDescription:
    "A complete ordering ecosystem: customers browse multiple brands and branches, get routed intelligently, pay securely, and track orders live. Vendors get a comprehensive dashboard to manage menus, hours, inventory, and orders. Built with Next.js frontend and NestJS backend.",
  image: ordering,
  gallery: [ordering, loyalty, dashboard],
  category: "Online Ordering" as const,
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
};
