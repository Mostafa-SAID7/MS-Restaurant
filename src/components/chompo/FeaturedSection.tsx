import burgerBite from "@/assets/collage-sunglasses-burger.jpg";
import chickenHand from "@/assets/collage-chicken-hand.jpg";
import fries from "@/assets/featured-fries.jpg";
import pizza from "@/assets/featured-pizza.jpg";
import { useReveal } from "@/hooks/use-reveal";

const TILE = "relative aspect-square overflow-hidden";
const PHOTO_TILE = `${TILE} group`;
const TEXT_TILE = `${TILE} flex flex-col items-center justify-center p-[clamp(1.25rem,4vw,2.75rem)] text-center`;
const HEADLINE =
  "font-display text-[clamp(1rem,2.6vw,2rem)] leading-[1.08] tracking-[0.02em] text-cream";
const LABEL =
  "font-oswald text-[clamp(0.44rem,0.9vw,0.625rem)] font-light tracking-[0.38em] uppercase";
const PILL = `font-oswald text-[clamp(0.44rem,0.9vw,0.625rem)] font-light tracking-[0.32em] uppercase text-cream border border-cream/50 px-5 py-[5px]`;

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={PHOTO_TILE}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={800}
        height={800}
        decoding="async"
        className="motion-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
    </div>
  );
}

export function FeaturedSection() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="w-full bg-cream">
      <div
        className={`motion-stagger grid grid-cols-2 md:grid-cols-4 ${isVisible ? "is-visible" : ""}`}
      >
        <Photo src={burgerBite} alt="Full-stack engineer working on a web application" />

        <div className={`${TEXT_TILE} bg-signal`}>
          <p className={`${LABEL} mb-2 text-cream/75`}>Professional Summary</p>
          <p className={`${HEADLINE} mb-6`}>
            Senior Full Stack
            <br />
            Engineer building
            <br />
            scalable systems.
          </p>
          <span className={PILL}>FULL STACK</span>
        </div>

        <Photo src={chickenHand} alt="Developer reviewing a software project" />

        <div className={`${TEXT_TILE} bg-signal`}>
          <p className={`${LABEL} mb-2 text-cream/75`}>Engineering Focus</p>
          <p className={HEADLINE}>
            Ship Like
            <br />
            You Mean It
          </p>
          <span
            aria-hidden="true"
            className="mt-6 font-display text-[clamp(1.125rem,2.5vw,1.75rem)] tracking-[0.1em] text-cream/50"
          >
            →
          </span>
        </div>
      </div>

      <div
        className={`motion-stagger grid grid-cols-2 md:grid-cols-4 ${isVisible ? "is-visible" : ""}`}
      >
        <div className={`${TEXT_TILE} bg-ink`}>
          <p className={`${HEADLINE} mb-4`}>
            Thoughtful Code,
            <br />
            Real Impact.
          </p>
          <span aria-hidden="true" className="h-0.5 w-9 bg-signal" />
        </div>

        <Photo src={fries} alt="Clean dashboard interface for a production application" />
        <Photo src={pizza} alt="Scalable backend architecture and service design" />

        <div className={`${TEXT_TILE} bg-signal`}>
          <p className={`${HEADLINE} mb-4`}>
            Every Project
            <br />
            Tells A Story
          </p>
          <button type="button" className={`${PILL} button-depth rounded-full transition-colors hover:bg-cream/10`}>
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
