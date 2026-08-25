import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="motion-hero-rise px-3 pt-3 sm:px-5 sm:pt-5">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between rounded-2xl bg-ink px-5 py-2.5 sm:px-7 sm:py-3.5">
        <a
          href="/"
          className="font-display text-2xl tracking-wide text-signal transition-transform duration-300 hover:scale-105 sm:text-3xl"
        >
          M.SAID
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md bg-cream px-4 py-1.5 font-heavy text-xs tracking-wider text-signal uppercase transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[3px_3px_0_var(--signal)] sm:text-sm"
          >
            Projects
          </button>
        </div>
      </nav>
    </header>
  );
}
