import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/chompo/Hero";
import { IconBand } from "@/components/chompo/IconBand";
import { CollageGrid } from "@/components/chompo/CollageGrid";
import { FeaturedSection } from "@/components/chompo/FeaturedSection";
import { CraveMarquee } from "@/components/chompo/CraveMarquee";
import { NewMeal } from "@/components/chompo/NewMeal";
import { TypeSpiral } from "@/components/chompo/TypeSpiral";
import { Reviews } from "@/components/chompo/Reviews";
import { KhidaSection } from "@/components/chompo/KhidaSection";
import { SiteFooter } from "@/components/chompo/SiteFooter";

const TITLE = "M.SAID | Senior Full Stack Engineer";
const DESCRIPTION =
  "Senior Full Stack Engineer specializing in .NET 8, microservices, modern web architectures, and scalable marketplace platforms.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream">
      <Hero />
      <CraveMarquee />
      <CollageGrid />
      <FeaturedSection />
      <IconBand />
      <NewMeal />
      <TypeSpiral />
      <Reviews />
      <KhidaSection />
      <SiteFooter />
    </main>
  );
}
