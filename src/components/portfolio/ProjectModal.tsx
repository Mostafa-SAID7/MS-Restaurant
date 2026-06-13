import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl glass shadow-elegant"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/70 backdrop-blur transition hover:bg-background"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-secondary/30 p-4 md:p-6">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.gallery[activeImage] ?? project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                {project.gallery.length > 1 && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {project.gallery.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`overflow-hidden rounded-lg border transition ${
                          i === activeImage
                            ? "border-gold"
                            : "border-border opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-wider text-gold">
                  {project.category}
                </span>
                <h2
                  id="project-modal-title"
                  className="font-display mt-3 text-2xl font-semibold sm:text-3xl"
                >
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest text-gold">Key features</p>
                  <ul className="mt-3 grid gap-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest text-gold">Tech stack</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {project.metrics.map((m) => (
                    <div key={m} className="rounded-xl border border-border bg-secondary/40 p-3 text-center">
                      <p className="text-xs text-muted-foreground">{m}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold transition hover:translate-y-[-2px]"
                    >
                      Live demo <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition hover:border-gold"
                    >
                      Case study <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition hover:border-gold"
                  >
                    Discuss a project
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
