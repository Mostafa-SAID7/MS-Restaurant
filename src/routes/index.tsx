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

const SITE_TITLE = "Mostafa Said — Full-Stack Developer | Restaurant & Cafe Systems";
const SITE_DESCRIPTION =
  "Full-Stack developer specializing in restaurant and cafe management systems: POS, KDS, online ordering, QR menus, loyalty programs, and analytics. 4+ years experience with React, Angular, Next.js, Node.js, NestJS, ASP.NET.";
const OG_IMAGE = "/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Full-Stack Developer, Mostafa Said, Restaurant Systems, POS System, KDS, Kitchen Display, Online Ordering, QR Menu, React, Node.js, NestJS, ASP.NET, MongoDB, PostgreSQL, Egypt",
      },
      { name: "author", content: "Mostafa Said" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#E8C547" },

      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Mostafa Said - Full-Stack Developer" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mostafa Said — Full-Stack Developer for Restaurant & Cafe Systems" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Mostafa Said portfolio preview" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mostafa Said",
          jobTitle: "Full-Stack Developer · Restaurant & Cafe Systems Specialist",
          description: SITE_DESCRIPTION,
          email: "m.ssaid356@gmail.com",
          telephone: "+201067358073",
          sameAs: [
            "https://github.com/Mostafa-SAID7",
            "https://www.linkedin.com/in/mostafasamirsaid"
          ],
          knowsAbout: [
            "Point of Sale",
            "Kitchen Display Systems",
            "Online Ordering",
            "QR Menus",
            "Restaurant Management Software",
            "Loyalty Programs",
            "Full-Stack Development",
            "React",
            "Node.js",
            "NestJS",
            "ASP.NET",
            "Angular",
            "Vue.js",
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
