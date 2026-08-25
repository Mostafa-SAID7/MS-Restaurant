import { useReveal } from "@/hooks/use-reveal";

const WORD = "MOSTAFA";

/** Ring geometry inside a 600x600 viewBox, largest outside -> smallest inside. */
const RINGS = [
  { radius: 246, size: 44, duration: 120 },
  { radius: 198, size: 40, duration: 104 },
  { radius: 155, size: 35, duration: 88 },
  { radius: 117, size: 30, duration: 74 },
  { radius: 85, size: 25, duration: 62 },
];

const TAGS = [
  { label: ".NET 8", className: "top-[20%] right-[-2%] rotate-[-10deg]" },
  { label: "MICROSERVICES", className: "top-[54%] left-[-3%] rotate-[8deg]" },
  { label: "REACT + ANGULAR", className: "bottom-[18%] right-[10%] rotate-[12deg]" },
];

/** Average glyph advance for the condensed heavy display face, as a ratio of font size. */
const GLYPH_RATIO = 0.62;

function ringText(radius: number, size: number) {
  const circumference = 2 * Math.PI * radius;
  const wordWidth = (WORD.length + 0.35) * size * GLYPH_RATIO;
  const repeats = Math.max(4, Math.round(circumference / wordWidth));
  return WORD.repeat(repeats);
}

/** Concentric rings of "CHOMPO" curved smoothly around a line-art face. */
export function TypeSpiral() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-cream px-4 pt-10 pb-20 sm:px-6">
      <div
        className={`motion-reveal relative mx-auto aspect-square w-full max-w-[640px] ${isVisible ? "is-visible" : ""}`}
      >
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 h-full w-full select-none"
          aria-hidden="true"
        >
          <defs>
            {RINGS.map((ring) => (
              <path
                key={ring.radius}
                id={`spiral-ring-${ring.radius}`}
                d={`M 300 ${300 - ring.radius} a ${ring.radius} ${ring.radius} 0 1 1 -0.01 0`}
                fill="none"
              />
            ))}
          </defs>

          {RINGS.map((ring, index) => (
            <g
              key={ring.radius}
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `spin ${ring.duration}s linear infinite ${
                  index % 2 ? "reverse" : "normal"
                }`,
                willChange: "transform",
              }}
            >
              <text
                className="font-display fill-ink"
                style={{ fontSize: ring.size, letterSpacing: "-0.01em" }}
                textLength={2 * Math.PI * ring.radius}
                lengthAdjust="spacingAndGlyphs"
              >
                <textPath href={`#spiral-ring-${ring.radius}`} startOffset="0">
                  {ringText(ring.radius, ring.size)}
                </textPath>
              </text>
            </g>
          ))}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <FaceDoodle className="w-[19%]" />
        </div>

        {TAGS.map((tag) => (
          <span
            key={tag.label}
            className={`absolute ${tag.className} rounded-full border-[3px] border-ink bg-signal px-4 py-1.5 font-heavy text-xs text-cream transition-[transform,box-shadow] duration-300 hover:scale-105 hover:shadow-[4px_4px_0_var(--ink)] sm:text-sm`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function FaceDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 150" className={className} aria-hidden="true">
      <g
        fill="none"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M36 22c4-12 20-16 30-8 8-8 22-2 20 10-8 2-14 0-20 4-8 5-22 4-30-6z" />
        <path d="M30 44c0-16 12-26 30-26s30 10 30 26c0 20-10 34-30 34S30 64 30 44z" />
        <path d="M42 44c4-4 10-4 13 0M65 44c4-4 10-4 13 0" />
        <path d="M56 56c3 3 6 3 9 0" />
        <path d="M48 66c8 6 16 6 24 0" />
        <path d="M40 84c-14 8-22 26-22 46M80 84c14 8 22 26 22 46" />
        <path d="M24 106c-10 6-14 16-12 24M96 106c10 6 14 16 12 24" />
      </g>
    </svg>
  );
}
