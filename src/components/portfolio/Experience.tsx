import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/data/skills";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="Experience" title="A track record on the line" />

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-border to-transparent md:left-1/2" />
          <ul className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.year} delay={i * 0.05}>
                <li
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                  }`}
                >
                  <span className="absolute left-3 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold shadow-gold md:left-1/2" />
                  <div className="pl-10 md:pl-0 md:pr-12 md:text-right">
                    <p className="text-xs uppercase tracking-[0.25em] text-gold">{e.year}</p>
                    <h3 className="font-display mt-2 text-lg font-semibold">{e.role}</h3>
                    <p className="text-sm text-muted-foreground">{e.company}</p>
                  </div>
                  <div className="mt-2 pl-10 md:mt-0 md:pl-12">
                    <div className="glass rounded-2xl p-5 text-sm text-muted-foreground">
                      {e.description}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
