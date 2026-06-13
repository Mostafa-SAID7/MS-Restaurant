import { useEffect, useState } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, brandData, ctaButton } from "@/data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass shadow-elegant" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <ChefHat className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              {brandData.name} <span className="text-gradient-gold">{brandData.highlight}</span>
            </span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={ctaButton.href}
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:shadow-gold md:inline-block"
            >
              {ctaButton.text}
            </a>
            <button
              className="md:hidden grid h-10 w-10 place-items-center rounded-full glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="mt-2 rounded-2xl glass p-4 md:hidden">
            <ul className="grid gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
