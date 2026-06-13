export interface HeroStat {
  value: string;
  label: string;
}

export const heroData = {
  badge: "Available for restaurant & cafe projects",
  name: "Mostafa Said",
  title: "Full-Stack Developer",
  subtitle: "Restaurant & Cafe Systems",
  description:
    "I build comprehensive F&B solutions — POS systems, online ordering platforms, kitchen display systems, QR menus, table management, loyalty programs, and integrated payment solutions that your team and guests love. 4+ years of full-stack expertise in React, Angular, Vue, Node.js, NestJS, ASP.NET, and modern databases.",
  cta: {
    primary: {
      text: "View My Work",
      href: "#projects",
    },
    secondary: {
      text: "Get In Touch",
      href: "#contact",
    },
  },
};

export const heroStats: HeroStat[] = [
  {
    value: "50+",
    label: "Venues Served",
  },
  {
    value: "1.2k+",
    label: "Orders / Day",
  },
  {
    value: "65%",
    label: "Faster Service",
  },
];
