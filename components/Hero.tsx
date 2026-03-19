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

/* ─── Each word's entrance ──────────────────────────────────────────────
 *  Low damping (6) = big overshoot → the word "bounces" past its resting
 *  position before settling. This is the core of the jiggly feel.
 *  stiffness: 80, mass: 0.9 keeps it hefty so each word feels weighty.
 * ─────────────────────────────────────────────────────────────────────── */
const wordEntrance = (i: number) => ({
  initial: { opacity: 0, y: 80, scale: 0.82, rotate: -3 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 6,
      stiffness: 80,
      mass: 0.9,
      delay: 0.05 + i * 0.14,
    },
  },
});

/* ─── Continuous idle jiggle ────────────────────────────────────────────
 *  After the entrance settles (~1.2 s), each word loops a tiny
 *  up/down + left/right wobble. Different duration per word so they
 *  move independently and feel "alive" rather than robotic.
 * ─────────────────────────────────────────────────────────────────────── */
type EaseTuple = [number, number, number, number];
const JIGGLE_EASE: EaseTuple = [0.45, 0, 0.55, 1];

const idleJiggle = (i: number) => ({
  animate: {
    y: [0, -5, 1, -3, 0],
    x: [0, 1.5, -1, 0.8, 0],
    rotate: [0, -0.6, 0.5, -0.3, 0],
  },
  transition: {
    duration: 3.2 + i * 0.5,
    repeat: Infinity,
    repeatDelay: 1.8 + i * 0.6,
    ease: JIGGLE_EASE,
    delay: 1.2 + i * 0.18,
  },
});

const words = ["UNLEASH", "YOUR", "BRAND'S", "POTENTIAL"];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{
        background: [
          "radial-gradient(ellipse 65% 85% at 60% 42%, rgba(11,6,152,0.45) 0%, rgba(71,74,255,0.22) 42%, rgba(93,185,242,0.06) 68%, transparent 82%)",
          "#050E15",
        ].join(", "),
      }}
    >
      {/* ── Headline — left side, vertically centered ── */}
      <div className="relative z-10 pl-12 md:pl-16 lg:pl-24 pt-24 pb-16 w-full md:w-[45%]">
        <h1
          className="text-white font-extrabold leading-none tracking-tighter uppercase"
          style={{ fontSize: "clamp(3rem, 6.5vw, 7.5rem)" }}
        >
          {words.map((word, i) => (
            /*
             * Two-layer approach:
             *  Outer motion.div  → spring entrance (drops in + bounces)
             *  Inner motion.span → continuous idle jiggle loop
             * Separating them prevents the looping animation from
             * interfering with the entrance spring physics.
             */
            <motion.div
              key={word}
              className="block overflow-visible"
              {...wordEntrance(i)}
            >
              <motion.span
                className="inline-block"
                {...idleJiggle(i)}
              >
                {word}
              </motion.span>
            </motion.div>
          ))}
        </h1>

        {/* ── Tagline ── */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 18, stiffness: 120, delay: 0.72 }}
          className="mt-5 text-white/55 text-sm md:text-base font-normal leading-relaxed tracking-wide max-w-xs"
        >
          We grow brands through strategy&nbsp;&amp;&nbsp;design.
        </motion.p>

        {/* ── CTA button ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", damping: 14, stiffness: 130, delay: 0.88 }}
          className="mt-7"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white text-sm font-bold tracking-wide select-none cursor-pointer"
            style={{
              background: "linear-gradient(120deg, #474AFF 0%, #5DB9F2 100%)",
              boxShadow:
                "0 0 24px rgba(71,74,255,0.45), 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            GET STARTED
            {/* Arrow icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* ── Hero graphic — desktop ── */}
      <motion.div
        variants={fadeUp(0.55)}
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
        variants={fadeUp(0.6)}
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
