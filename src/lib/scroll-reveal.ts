/**
 * Global IntersectionObserver that fades + lifts `[data-reveal]` elements into
 * view the first time they enter the viewport. Install once at the app root
 * (see RootComponent in routes/__root.tsx).
 *
 * Honors prefers-reduced-motion by showing every reveal immediately. The
 * matching CSS in styles.css keeps content invisible only while JS/motion are
 * available — a <noscript> fallback in the root shell covers the no-JS case.
 */
export function installScrollReveal(): () => void {
  if (typeof document === "undefined") return () => {};

  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

  // No motion preference: skip the observer, show everything at once.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-in"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
  );

  items.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}
