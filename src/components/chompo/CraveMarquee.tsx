import { useReveal } from "@/hooks/use-reveal";
import { Marquee } from "./Marquee";

export function CraveMarquee() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`motion-reveal bg-cream py-8 sm:py-12 ${isVisible ? "is-visible" : ""}`}
    >
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
