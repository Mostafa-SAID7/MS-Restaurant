import { Reveal, SectionHeading } from "./Reveal";
import { Coffee, Utensils, Truck, Store } from "lucide-react";

const pillars = [
  { icon: Utensils, title: "Fine Dining", desc: "Reservation, table mgmt, premium UX." },
  { icon: Coffee, title: "Cafes", desc: "QR menus, loyalty, fast checkout flows." },
  { icon: Truck, title: "Cloud Kitchens", desc: "Multi-brand ordering and routing." },
  { icon: Store, title: "Multi-Branch", desc: "Centralized control, branch autonomy." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About"
          title="Digital craftsmanship for hospitality"
          subtitle="I partner with restaurants, cafes, and cloud kitchens to ship software that pays for itself — measured in faster service, higher ticket sizes, and happier guests."
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="glass rounded-3xl p-8 shadow-elegant">
              <p className="text-lg leading-relaxed text-muted-foreground">
                For the last six years I've been the engineer behind the screens
                your servers, baristas, and guests actually use. From a single-location
                POS to a multi-branch ordering platform handling thousands of orders a
                day, I design systems that hold up on a Friday night rush.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                My focus: clear UX for staff, beautiful interfaces for guests, and a
                backend that integrates cleanly with the payment, delivery, and
                accounting tools you already use.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group h-full glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-gold">
                  <p.icon className="h-6 w-6 text-gold transition group-hover:scale-110" />
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
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
