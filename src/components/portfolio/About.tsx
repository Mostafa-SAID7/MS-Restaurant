import { Reveal, SectionHeading } from "./Reveal";
import { aboutPillars, aboutBio } from "@/data/about";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow={aboutBio.eyebrow}
          title={aboutBio.title}
          subtitle={aboutBio.subtitle}
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="glass rounded-3xl p-8 shadow-elegant">
              {aboutBio.paragraphs.map((para, idx) => (
                <p key={idx} className={`text-lg leading-relaxed text-muted-foreground ${idx > 0 ? "mt-4" : ""}`}>
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {aboutPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group h-full glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-gold">
                  <p.icon className="h-6 w-6 text-gold transition group-hover:scale-110" />
                  <h3 className="font-display mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
