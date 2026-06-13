import roaster from "@/assets/projects/angular/Roaster.png";
import bella from "@/assets/projects/angular/bella.png";
import dashboard from "@/assets/project-dashboard.jpg";

export const rmsDashboardProject = {
  id: "rms-dashboard",
  title: "Restaurant Management Dashboard",
  description: "Unified analytics, inventory, staff scheduling, and financial reporting.",
  longDescription:
    "The operator's command center. Real-time KPIs across branches, inventory tracking, staff scheduling, and comprehensive financial reports. Built with React frontend, NestJS backend, PostgreSQL database, and advanced charting with Recharts.",
  image: dashboard,
  gallery: [dashboard, roaster, bella],
  category: "Full Systems" as const,
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
};
