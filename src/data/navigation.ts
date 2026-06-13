export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const brandData = {
  name: "Mostafa",
  highlight: "Said",
};

export const ctaButton = {
  text: "Hire me",
  href: "#contact",
};
