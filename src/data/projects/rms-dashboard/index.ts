import pos from "@/assets/project-pos.jpg";
import ordering from "@/assets/project-ordering.jpg";

const posImg = pos;
const orderingImg = ordering;

export const rmsDashboardProject = {
  id: "rms-dashboard",
  title: "Restaurant Management Dashboard",
  description: "Unified analytics, inventory, staff scheduling, and financial reporting.",
  longDescription:
    "The operator's command center. Real-time KPIs across branches, inventory tracking, staff scheduling, and comprehensive financial reports. Built with React frontend, NestJS backend, PostgreSQL database, and advanced charting with Recharts.",
  image: "/projects/rms-dashboard/main.jpg",
  gallery: ["/projects/rms-dashboard/main.jpg", posImg, orderingImg],
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
