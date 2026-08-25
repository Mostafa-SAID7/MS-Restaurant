import { Marquee } from "./Marquee";

export function CraveMarquee() {
  return (
    <section className="bg-cream py-8 sm:py-12">
      <Marquee durationSeconds={22}>
        <span className="px-6 font-display text-4xl whitespace-nowrap text-ink sm:text-6xl lg:text-7xl">
          BUILD. SCALE. SHIP. FULL STACK ENGINEERING THAT MOVES PRODUCTS FORWARD.
        </span>
        <span className="px-6 font-display text-4xl whitespace-nowrap text-ink sm:text-6xl lg:text-7xl">
          BUILD. SCALE. SHIP. FULL STACK ENGINEERING THAT MOVES PRODUCTS FORWARD.
        </span>
      </Marquee>
    </section>
  );
}
