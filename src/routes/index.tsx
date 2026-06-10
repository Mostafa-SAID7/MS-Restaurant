import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

const SITE_TITLE = "Maison.dev — Full-Stack Developer for Restaurants & Cafes";
const SITE_DESCRIPTION =
  "Premium full-stack development for restaurants and cafes: POS, KDS, online ordering, QR menus, table management, loyalty, and analytics.";
const OG_IMAGE = "/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "restaurant developer, cafe developer, POS system, KDS, online ordering, QR menu, restaurant software, hospitality tech, full-stack developer",
      },
      { name: "author", content: "Maison.dev" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#E8C547" },

      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Maison.dev" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Maison.dev — Restaurant & Cafe Systems Specialist" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Maison.dev portfolio preview" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maison.dev",
          jobTitle: "Full-Stack Developer · Restaurant & Cafe Systems Specialist",
          description: SITE_DESCRIPTION,
          knowsAbout: [
            "Point of Sale",
            "Kitchen Display Systems",
            "Online Ordering",
            "QR Menus",
            "Restaurant Management Software",
            "Loyalty Programs",
          ],
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SmoothScroll />
      <Toaster theme="dark" position="top-center" richColors />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
