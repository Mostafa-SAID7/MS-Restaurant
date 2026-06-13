import { restaurantApiProject } from "./restaurant-api";
import { smartPosProject } from "./smart-pos";
import { orderingPlatformProject } from "./ordering-platform";
import { qrMenuProject } from "./qr-menu";
import { rmsDashboardProject } from "./rms-dashboard";
import { loyaltyProgramProject } from "./loyalty-program";
import { angularRestaurantAppProject } from "./angular-restaurant-app";

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
  restaurantApiProject as Project,
  smartPosProject as Project,
  orderingPlatformProject as Project,
  qrMenuProject as Project,
  rmsDashboardProject as Project,
  loyaltyProgramProject as Project,
  angularRestaurantAppProject as Project,
];

export const categories: ("All" | Category)[] = [
  "All",
  "POS",
  "Online Ordering",
  "QR Menu",
  "Full Systems",
  "Analytics",
];

// Export individual projects for direct access
export { restaurantApiProject, smartPosProject, orderingPlatformProject, qrMenuProject, rmsDashboardProject, loyaltyProgramProject, angularRestaurantAppProject };
