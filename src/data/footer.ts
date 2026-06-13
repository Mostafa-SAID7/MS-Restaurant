import { Github, Linkedin, MessageCircle, LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/Mostafa-SAID7",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mostafasamirsaid",
    label: "LinkedIn",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/201067358073",
    label: "WhatsApp",
  },
];

export const footerBrand = {
  name: "Mostafa",
  highlight: "Said",
};

export const footerCopyright = {
  prefix: "© ",
  suffix: " Mostafa Said — Full-Stack Developer for Hospitality.",
};
