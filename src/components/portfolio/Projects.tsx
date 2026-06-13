import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, projects, type Project } from "@/data/projects";
import { SectionHeading } from "./Reveal";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Featured Work"
          title="Full-Stack Systems That Drive Revenue"
          subtitle="Selected projects built for restaurant groups, independent cafes, and multi-branch operations. Click any card to learn how each system improves operations and guest satisfaction."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-gold"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setSelected(p)}
                className="group relative overflow-hidden rounded-3xl glass shadow-elegant text-left transition hover:-translate-y-1 hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[11px] uppercase tracking-wider text-gold backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition group-hover:rotate-45" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 grid gap-1.5 border-t border-border pt-4">
                    {p.metrics.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {m}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-xs font-medium text-gold opacity-0 transition group-hover:opacity-100">
                    View details →
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
