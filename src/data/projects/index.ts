import { restaurantApiProject } from "./restaurant-api";
import { smartPosProject } from "./smart-pos";
import { orderingPlatformProject } from "./ordering-platform";
import { qrMenuProject } from "./qr-menu";
import { rmsDashboardProject } from "./rms-dashboard";
import { loyaltyProgramProject } from "./loyalty-program";
import { angularRestaurantAppProject } from "./angular-restaurant-app";
import { uixshuvoProject } from "./uixshuvo";
import { starbucksConnectProject } from "./starbucks-connect";
import { starbucksEgyptProject } from "./starbucks-egypt";
import { naarNoorProject } from "./naar-noor";
import { bunzoProject } from "./bunzo";
import { islandRoasterProject } from "./island-roaster";
import { burgerDeliveryProject } from "./burger-delivery";
import { bellaProject } from "./bella";
import { kitchenDashProject } from "./kitchen-dash";

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
  uixshuvoProject as Project,
  starbucksConnectProject as Project,
  starbucksEgyptProject as Project,
  naarNoorProject as Project,
  bunzoProject as Project,
  islandRoasterProject as Project,
  burgerDeliveryProject as Project,
  bellaProject as Project,
  kitchenDashProject as Project,
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
export { restaurantApiProject, smartPosProject, orderingPlatformProject, qrMenuProject, rmsDashboardProject, loyaltyProgramProject, angularRestaurantAppProject, uixshuvoProject, starbucksConnectProject, starbucksEgyptProject, naarNoorProject, bunzoProject, islandRoasterProject, burgerDeliveryProject, bellaProject, kitchenDashProject };
