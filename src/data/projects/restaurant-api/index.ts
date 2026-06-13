import hero from "@/assets/hero.jpg";
import dashboard from "@/assets/project-dashboard.jpg";

const heroImg = hero;
const dashboardImg = dashboard;

export const restaurantApiProject = {
  id: "restaurant-api",
  title: "Restaurant Management API (Full-Stack Platform)",
  description:
    "Premium .NET 8 Web API for modern restaurant management, online ordering, and customer experiences with glassmorphism UI.",
  longDescription:
    "A production-ready full-stack restaurant platform built with .NET 8 and ASP.NET Core. Features comprehensive restaurant & menu management, secure user authentication, persistent shopping cart, and complete order lifecycle handling. Includes a stunning glassmorphism UI landing page, interactive Swagger documentation, and enterprise-grade DevOps setup with Docker and CI/CD pipelines. Built with clean architecture patterns for high maintainability and scalability.",
  image: "/projects/restaurant-api/home.png",
  gallery: ["/projects/restaurant-api/home.png", dashboardImg, heroImg],
  category: "Full Systems" as const,
  tech: [
    ".NET 8",
    "ASP.NET Core",
    "Entity Framework Core",
    "C# 12",
    "SQL Server",
    "PostgreSQL",
    "Docker",
    "GitHub Actions",
    "Swagger/OpenAPI",
  ],
  metrics: [
    "Supports 1000+ concurrent users with sub-second response times",
    "Restaurant listing <1s, cart operations <500ms",
    "Complete order lifecycle with transactional integrity",
    "Production-grade DevOps with multi-stage Docker & CI/CD",
  ],
  features: [
    "Complete restaurant & menu management system",
    "Secure user authentication and authorization",
    "Persistent shopping cart with real-time updates",
    "Full order lifecycle (cart → master order → items)",
    "Glassmorphism UI with responsive design",
    "Interactive Swagger/OpenAPI documentation",
  ],
  demoUrl: "https://restaurant-app-api.runasp.net",
};
