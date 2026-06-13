import kitchenDash from "@/assets/projects/React/kitchen-dash.png";
import shuvo from "@/assets/projects/React/SHUVO.png";

export const kitchenDashProject = {
  id: "kitchen-dash",
  title: "Kitchen Dash — Restaurant Kitchen Management & Ordering",
  description:
    "Dynamic restaurant kitchen dashboard and customer ordering platform for real-time order management, kitchen operations tracking, and smooth online menu browsing with delivery experience.",
  longDescription:
    "A comprehensive dual-interface platform called Kitchen Dash that serves both kitchen staff and end customers. Provides a dynamic kitchen dashboard for real-time order management and kitchen operations tracking, while simultaneously offering customers a smooth online menu browsing and delivery experience. The platform is built with a modern, fast interface specifically tailored for quick-service restaurants and food delivery services. Features intuitive order management, real-time status updates, and seamless customer flows from menu discovery to checkout.",
  image: kitchenDash,
  gallery: [kitchenDash, shuvo],
  category: "Full Systems" as const,
  tech: [
    "React",
    "Vite",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "React Router",
    "Context API",
    "Zustand",
    "Redux",
    "Netlify",
  ],
  metrics: [
    "Responsive kitchen/order management interface with real-time order tracking and status updates",
    "Complete customer flows: menu browsing, cart management, and checkout process",
    "Clean, high-performance UI optimized for both kitchen staff and end customers",
    "Smooth animations and intuitive navigation for enhanced user experience",
    "Real-time order synchronization between kitchen and customer interfaces",
    "Production-ready deployment with modern React best practices",
    "Excellent mobile responsiveness for on-the-go kitchen staff",
    "State management for complex multi-user scenarios",
  ],
  features: [
    "Kitchen Dashboard with real-time order queue",
    "Order status tracking and updates",
    "Kitchen preparation time management",
    "Order completion and delivery marking",
    "Customer menu browsing with search and filtering",
    "Item categorization and detailed descriptions",
    "Shopping cart with quantity management",
    "Checkout and payment flow",
    "Order history and tracking",
    "Real-time notifications",
    "Staff and customer interfaces",
    "Responsive design for mobile and desktop",
    "Smooth animations and transitions",
    "Intuitive navigation and UX",
    "High-performance interface",
  ],
  demoUrl: "https://kitchen-dash.netlify.app",
};
