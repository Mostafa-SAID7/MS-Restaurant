import { Marquee } from "./Marquee";

const SKILLS = [".NET 8", "React", "TypeScript", "Microservices", "PostgreSQL", "Azure"];

export function IconBand() {
  return (
    <section className="relative bg-cream py-10">
      {/* tilted red underlay */}
      <div className="absolute inset-x-0 top-1/2 h-16 -translate-y-1/2 -rotate-[1.6deg] bg-signal" />

      <div className="relative rotate-[1deg] border-y-[3px] border-ink bg-ink py-2">
        <Marquee durationSeconds={26}>
          {SKILLS.map((skill, index) => (
            <span key={`${skill}-${index}`} className="flex items-center gap-4 px-5">
              <span className="font-display text-3xl text-signal sm:text-5xl" aria-hidden="true">
                ✦
              </span>
              <span className="font-display text-lg whitespace-nowrap text-cream sm:text-2xl">
                {skill}
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
