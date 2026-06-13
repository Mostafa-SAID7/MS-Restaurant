import starbucks from "@/assets/projects/React/starbucks.png";
import bunzo from "@/assets/projects/React/Bunzo.png";
import qr from "@/assets/project-qr.jpg";

export const qrMenuProject = {
  id: "qr-menu",
  title: "Digital QR Menu & Table Ordering",
  description: "Contactless dining: scan, browse, order, and pay — all from the table.",
  longDescription:
    "Transform the guest experience: each table gets a QR code linking to a beautiful digital menu. Guests browse, customize orders, and pay directly from their phone. Built with React and Tailwind for responsive design, Firebase for real-time sync, and Stripe for payments.",
  image: starbucks,
  gallery: [starbucks, bunzo, qr],
  category: "QR Menu" as const,
  tech: ["React", "Tailwind CSS", "Firebase", "Stripe"],
  metrics: ["+38% avg ticket size", "Deployed to 80+ venues", "<2s scan-to-order"],
  features: [
    "Rich media menus with allergen filters",
    "Table-aware ordering & calling for service",
    "Split-the-bill functionality at the table",
    "Multi-language with auto-detect",
    "Fully customizable per venue (logo, fonts, colors)",
    "Real-time inventory sync",
  ],
  demoUrl: "https://example.com/demo/qr",
};
