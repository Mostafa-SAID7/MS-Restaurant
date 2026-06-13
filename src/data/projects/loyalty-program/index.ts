import qr from "@/assets/project-qr.jpg";
import ordering from "@/assets/project-ordering.jpg";
import loyalty from "@/assets/project-loyalty.jpg";

const qrImg = qr;
const orderingImg = ordering;
const loyaltyImg = loyalty;

export const loyaltyProgramProject = {
  id: "loyalty-program",
  title: "Cafe Loyalty & CRM Program",
  description: "Digital loyalty platform that turns one-time guests into regulars.",
  longDescription:
    "A comprehensive loyalty system with digital stamp cards, points-based rewards, and CRM functionality. Target guests with personalized offers based on behavior patterns. Built with React frontend and Node.js/NestJS backend with MongoDB for flexible data modeling.",
  image: loyaltyImg,
  gallery: [loyaltyImg, qrImg, orderingImg],
  category: "Analytics" as const,
  tech: ["React", "NestJS", "MongoDB", "Stripe", "SendGrid"],
  metrics: ["+52% repeat visits", "20k+ active members", "4.8★ ratings"],
  features: [
    "Digital stamp cards and tiered rewards",
    "Personalized offers via CRM segments",
    "Web-based member portal",
    "Email campaigns and notifications",
    "Referral program with tracking",
    "Advanced analytics on member behavior",
  ],
  demoUrl: "https://example.com/demo/loyalty",
};
