import { Reveal, SectionHeading } from "./Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for restaurants"
          subtitle="Modern, battle-tested tools — picked for reliability on the floor, not just for the demo."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="group h-full glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-gold">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground transition group-hover:border-gold/40"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
