"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay },
  },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{
        /*
         * Base:  #050E15 — Figma's dark-navy background
         * Glow:  tighter radial ellipse centred at 58% / 42%
         *        (behind the hero image area, not bleeding to the left edge)
         *   0B0698 → 474AFF → 5DB9F2 matching the Figma accent palette.
         * Opacity values kept moderate so the left text area stays
         * uniformly dark-navy without any blue bleed.
         */
        background: [
          "radial-gradient(ellipse 65% 85% at 60% 42%, rgba(11,6,152,0.45) 0%, rgba(71,74,255,0.22) 42%, rgba(93,185,242,0.06) 68%, transparent 82%)",
          "#050E15",
        ].join(", "),
      }}
    >
      {/* ── Headline — left side, vertically centered ── */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        animate="visible"
        className="relative z-10 pl-12 md:pl-16 lg:pl-24 pt-24 pb-16 w-full md:w-[45%]"
      >
        <h1
          className="text-white font-extrabold leading-none tracking-tighter uppercase"
          style={{ fontSize: "clamp(3rem, 6.5vw, 7.5rem)" }}
        >
          UNLEASH
          <br />
          YOUR
          <br />
          {"BRAND'S"}
          <br />
          POTENTIAL
        </h1>
      </motion.div>

      {/* ── Hero graphic — desktop ── */}
      {/*
       * w-[65%] makes the image start at roughly the 35% mark from the
       * left, matching Image 2 where the laptop / person sits near
       * screen-center rather than hard-right.
       * bottom-0 + h-auto ensures the rug bottom is flush with the viewport.
       */}
      <motion.div
        variants={fadeUp(0.25)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 right-0 w-[65%] pointer-events-none hidden md:block"
      >
        <Image
          src="/image.png"
          alt="Person with laptop surrounded by 3D social media and analytics icons"
          width={900}
          height={900}
          className="w-full h-auto block"
          priority
          sizes="65vw"
        />
      </motion.div>

      {/* ── Hero graphic — mobile ── */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 pointer-events-none md:hidden"
      >
        <Image
          src="/image.png"
          alt="Person with laptop surrounded by 3D social media and analytics icons"
          width={900}
          height={900}
          className="w-full h-auto block"
          priority
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
