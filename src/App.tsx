import { ThemeProvider } from "@/lib/theme";
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

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
