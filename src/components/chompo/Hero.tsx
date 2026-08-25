import { Nav } from "./Nav";
import { useState } from "react";
import { Storefront } from "./Storefront";

const BURGER_IMAGE_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F099c37e9e90a45d9a23ea28329c094a0%2F01f178aaae084cef863eb6514f659c2c?format=webp&width=800&height=1200";

export function Hero() {
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);

  return (
    <section
      className={`relative overflow-hidden pb-7 transition-colors duration-500 sm:pb-8 ${
        isBurgerVisible ? "bg-[#fa5a00]" : "bg-signal"
      }`}
    >
      <Nav />

      {isBurgerVisible ? (
        <div
          id="burger-reveal"
          className="mx-auto max-w-[800px] origin-top animate-in fade-in zoom-in-95 slide-in-from-top-8 duration-500"
        >
          <img src={BURGER_IMAGE_URL} alt="I want a burger" className="block w-full" />
        </div>
      ) : (
        <>
          <div className="mx-auto max-w-[1200px] px-4 pt-10 text-center sm:px-6 sm:pt-16">
            <p className="font-display text-2xl leading-none tracking-[0.02em] text-cream sm:text-4xl">
              SENIOR
            </p>
            <h1 className="mt-1 font-display text-[22vw] leading-[0.82] tracking-[-0.01em] text-cream sm:text-[17vw] lg:text-[13rem]">
              MOSTAFA
            </h1>
            <p className="mt-2 font-heavy text-[0.65rem] tracking-[0.1em] text-cream uppercase sm:text-base">
              FULL STACK ENGINEER · .NET · REACT · ANGULAR
            </p>
          </div>

          <div className="relative mx-auto mt-6 max-w-[760px] px-4 sm:mt-10">
            <Storefront className="w-full" />
            <button
              type="button"
              aria-controls="burger-reveal"
              aria-label="Show the burger"
              onClick={() => setIsBurgerVisible(true)}
              className="absolute left-1/2 top-[18.5%] h-[27%] w-[38%] -translate-x-1/2 cursor-pointer rounded-sm outline-none focus-visible:ring-4 focus-visible:ring-cream/80"
            />
          </div>
        </>
      )}

      <div className="bumps-up pointer-events-none absolute -bottom-px left-0 h-[30px] w-full text-cream" />
    </section>
  );
}
