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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison.dev — Full-Stack Developer for Restaurants & Cafes" },
      {
        name: "description",
        content:
          "Premium full-stack development for restaurants and cafes: POS, KDS, online ordering, QR menus, table management, loyalty, and analytics.",
      },
      { property: "og:title", content: "Maison.dev — Restaurant & Cafe Systems Specialist" },
      {
        property: "og:description",
        content:
          "POS, online ordering, KDS, QR menus, loyalty and analytics — built for hospitality.",
      },
      { property: "og:type", content: "website" },
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
