import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { heroData, heroStats } from "@/data/hero";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 -z-10 grain-bg" />

      <div className="mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          {heroData.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          {heroData.name}
          <br />
          <span className="text-gradient-gold">{heroData.title}</span>
          <br className="hidden sm:block" /> {heroData.subtitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={heroData.cta.primary.href}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold transition hover:translate-y-[-2px]"
          >
            {heroData.cta.primary.text}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href={heroData.cta.secondary.href}
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:border-gold"
          >
            {heroData.cta.secondary.text}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-center">
              <div className="font-display text-3xl text-gradient-gold">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
