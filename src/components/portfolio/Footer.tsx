import { ChefHat } from "lucide-react";
import { socialLinks, footerBrand, footerCopyright } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <ChefHat className="h-4 w-4" />
          </span>
          <span className="font-display text-base">
            {footerBrand.name} <span className="text-gradient-gold">{footerBrand.highlight}</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          {footerCopyright.prefix}
          {new Date().getFullYear()}
          {footerCopyright.suffix}
        </p>
        <div className="flex gap-2">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground transition hover:text-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
