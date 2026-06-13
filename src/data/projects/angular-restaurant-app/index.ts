import noorapp from "@/assets/projects/angular/noorapp.png";
import roaster from "@/assets/projects/angular/Roaster.png";

export const angularRestaurantAppProject = {
  id: "angular-restaurant-app",
  title: "Restaurant Web Application (Frontend)",
  description:
    "Modern, high-end restaurant web application built with Angular 19 featuring menu browsing, table reservations, shopping cart, and secure checkout with Server-Side Rendering.",
  longDescription:
    "A production-ready restaurant web application built with Angular 19 Standalone Components and TypeScript 5.7. Features a complete customer-facing experience with SSR for optimal performance and SEO. Users can browse menus with category filtering, make table reservations, manage shopping carts, and complete secure checkout. The application showcases a sleek dark theme with responsive design, 60+ custom SVG icons, and smooth animations. Built with modular architecture, reusable components, and comprehensive documentation.",
  image: noorapp,
  gallery: [noorapp, roaster],
  category: "Full Systems" as const,
  tech: [
    "Angular 19",
    "Standalone Components",
    "TypeScript 5.7",
    "RxJS",
    "Tailwind CSS v3",
    "SCSS",
    "Angular Universal",
    "SSR",
    "Express.js",
    "Docker",
    "Docker Compose",
    "GitHub Actions",
    "Netlify",
  ],
  metrics: [
    "Delivered fully responsive, mobile-first UI with smooth animations",
    "60+ custom SVG icons for enhanced user experience",
    "Production-ready SSR setup with optimal Core Web Vitals",
    "Docker multi-container support for development and production",
    "Automated CI/CD pipelines with GitHub Actions",
    "Modular architecture with reusable components and centralized data constants",
  ],
  features: [
    "Menu browsing with category filtering",
    "Table reservations booking system",
    "Shopping cart management",
    "Secure checkout process",
    "Restaurant details and information",
    "Dark theme with responsive design",
    "Server-Side Rendering (SSR) for SEO",
    "60+ custom SVG icons",
    "Smooth animations and transitions",
  ],
  demoUrl: "https://noor73.netlify.app",
};
