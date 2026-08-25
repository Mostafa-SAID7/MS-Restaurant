import { ChickenLegIcon, PizzaIcon, SandwichIcon } from "./FoodIcons";

const MENU_LINKS = ["Home", "Projects", "Experience", "Skills", "Contact"];
const COMPANY_LINKS = ["About Us", "Careers", "Terms of Use", "Privacy Policy", "The Team"];

const SOCIALS = [
  {
    label: "LinkedIn",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.03 1.46-4.03 4.14v2.28H7.5V13h2.76v8z",
  },
  {
    label: "YouTube",
    path: "M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2C1 8.9 1 12 1 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8ZM9.8 15.3V8.7l5.7 3.3z",
  },
];

function FooterNav({ title, items }: { title: string; items: string[] }) {
  return (
    <nav aria-label={title}>
      <p className="font-oswald text-[11px] font-light tracking-[0.32em] text-cream/50 uppercase">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="font-heavy text-sm tracking-[0.08em] text-cream uppercase transition-colors hover:text-signal"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-12 text-cream sm:pt-14">
      <div className="mx-auto grid max-w-[1180px] gap-x-10 gap-y-12 px-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        {/* Brand + newsletter */}
        <div>
          <p className="font-display text-3xl leading-none tracking-[0.04em] text-cream">M.SAID</p>
          <p className="mt-4 max-w-[22rem] font-oswald text-sm leading-relaxed font-light text-cream/70">
            Senior Full Stack Engineer focused on .NET 8, microservices, Clean Architecture, and
            high-performance web applications.
          </p>

          <form
            className="mt-6 flex w-full max-w-[22rem] items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-full border-2 border-cream/25 bg-transparent px-4 py-2 font-oswald text-sm text-cream placeholder:text-cream/40 focus:border-signal focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-signal px-5 py-2 font-heavy text-xs tracking-[0.1em] text-cream uppercase transition-transform hover:-translate-y-0.5"
            >
              Join
            </button>
          </form>
        </div>

        <FooterNav title="Portfolio" items={MENU_LINKS} />
        <FooterNav title="Company" items={COMPANY_LINKS} />

        <div>
          <p className="font-oswald text-[11px] font-light tracking-[0.32em] text-cream/50 uppercase">
            Contact
          </p>
          <a
            href="tel:+15550189264"
            className="mt-5 block font-heavy text-sm tracking-[0.06em] text-signal transition-colors hover:text-cream"
          >
            +20 106 735 8073
          </a>
          <address className="mt-3 max-w-[16rem] font-oswald text-sm leading-relaxed font-light text-cream/70 not-italic">
            Tanta, Egypt
            <br />
            Available for full-stack opportunities
          </address>
          <p className="mt-3 font-oswald text-sm font-light text-cream/70">
            English professional · Arabic native
          </p>

          <div className="mt-5 flex items-center gap-3 text-signal">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border-2 border-signal/40 transition-colors hover:bg-signal hover:text-cream"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border-2 border-signal/40 transition-colors hover:bg-signal hover:text-cream"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* giant wordmark */}
      <div className="relative mt-14 px-2">
        <p className="footer-wordmark text-center font-display text-[19vw] leading-[1.05] whitespace-nowrap text-cream">
          ENGINEER
        </p>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden text-signal sm:block [&_circle]:fill-cream [&_path]:fill-cream [&_rect]:fill-cream"
        >
          <ChickenLegIcon className="absolute bottom-[14%] left-[5%] w-[9vw] -rotate-12" />
          <PizzaIcon className="absolute top-[6%] left-[34%] w-[11vw] rotate-6" />
          <SandwichIcon className="absolute bottom-[10%] left-[60%] w-[10vw] -rotate-6" />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 border-t border-cream/15 px-6 py-6 text-center sm:flex-row sm:text-left">
        <p className="font-oswald text-xs font-light tracking-[0.14em] text-cream/50 uppercase">
          © {new Date().getFullYear()} Mostafa Samir. All rights reserved.
        </p>
        <p className="font-oswald text-xs font-light tracking-[0.14em] text-cream/50 uppercase">
          Crafted with clean code from Egypt
        </p>
      </div>
    </footer>
  );
}
