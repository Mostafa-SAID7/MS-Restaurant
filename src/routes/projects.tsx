import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";
import { categories, projects, type Project, type Category } from "@/data/projects";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { SearchInput } from "@/components/shared/SearchInput";
import { Pagination } from "@/components/shared/Pagination";
import { CustomSelect } from "@/components/shared/CustomSelect";

export const Route = createFileRoute("/projects")({
  component: AllProjectsPage,
});

const ITEMS_PER_PAGE = 6;

function AllProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [sortBy, setSortBy] = useState<"name-asc" | "name-desc" | "category" | "tech-count">("name-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter and sort projects
  const processedProjects = useMemo(() => {
    let result = [...projects];

    // Search filter
    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tech.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "name-desc") {
        return b.title.localeCompare(a.title);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      } else if (sortBy === "tech-count") {
        return b.tech.length - a.tech.length;
      }
      return 0;
    });

    return result;
  }, [search, activeCategory, sortBy]);

  // Reset page when filters change
  const totalPages = Math.ceil(processedProjects.length / ITEMS_PER_PAGE);
  const currentPageSafe = Math.min(currentPage, Math.max(1, totalPages));

  const paginatedProjects = useMemo(() => {
    const start = (currentPageSafe - 1) * ITEMS_PER_PAGE;
    return processedProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [processedProjects, currentPageSafe]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("projects-title");
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - 120; // 120px offset for fixed navbar
      window.scrollTo({ top: targetY });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-28">
      <SmoothScroll />
      <Toaster theme="dark" position="top-center" richColors />
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Page Title */}
        <div id="projects-title" className="mb-12 text-center">
          <span className="text-xs uppercase tracking-widest text-gold">Portfolio</span>
          <h1 className="font-display mt-3 text-4xl font-bold sm:text-5xl">All Projects</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Explore my complete work on modern F&B systems, POS dashboards, loyalty programs, and developer APIs.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <SearchInput
            value={search}
            onChange={(val) => {
              setSearch(val);
              setCurrentPage(1);
            }}
            placeholder="Search title, description, or tech..."
            className="w-full lg:max-w-sm"
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between flex-1 lg:justify-end">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setActiveCategory(c);
                    setCurrentPage(1);
                  }}
                  className={`rounded-full px-3.5 py-1.5 text-xs transition ${
                    activeCategory === c
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground whitespace-nowrap">Sort by</span>
              <CustomSelect
                value={sortBy}
                onChange={setSortBy}
                options={[
                  { value: "name-asc", label: "Name (A-Z)" },
                  { value: "name-desc", label: "Name (Z-A)" },
                  { value: "category", label: "Category" },
                  { value: "tech-count", label: "Tech Used Count" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="min-h-[50vh]">
          {paginatedProjects.length > 0 ? (
            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {paginatedProjects.map((p, i) => (
                  <motion.button
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    onClick={() => setSelectedProject(p)}
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
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg text-muted-foreground">No projects match your criteria.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                  setCurrentPage(1);
                }}
                className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:shadow-gold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPageSafe}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-16"
        />
      </div>

      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
