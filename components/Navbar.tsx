"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const mainLinks = [
  { label: "SOCIAL MEDIA MARKETING", href: "#social" },
  { label: "WEB DESIGN/DEVELOPMENT", href: "#web" },
  { label: "ABOUT US", href: "#about" },
];
const contactLink = { label: "CONTACT US", href: "#contact" };
const allLinks = [...mainLinks, contactLink];

/* Shared glass style — applied identically to both initial-state pills */
const glass: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1.5px solid rgba(255, 255, 255, 0.22)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  boxShadow:
    "inset 0 1.5px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.04), 0 4px 20px rgba(0,0,0,0.3)",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnimatePresence mode="wait">
        {!scrolled ? (
          /* ═══════════════════════════════════════════
             INITIAL STATE — full-width, two glass pills
             ═══════════════════════════════════════════ */
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            /* px-10 gives enough inset so pills don't hug the edge */
            className="flex items-center justify-between px-10 py-5"
          >
            {/* Logo */}
            <span className="text-white font-black text-2xl tracking-tight select-none">
              UTH
            </span>

            {/* Two pills — right-aligned */}
            <nav className="flex items-center gap-4">

              {/* Pill 1: three nav links */}
              <div
                className="flex items-center gap-8 rounded-full"
                style={{ ...glass, padding: "11px 28px" }}
              >
                {mainLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white text-[13px] font-semibold tracking-wide hover:text-white/70 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Pill 2: contact */}
              <div
                className="flex items-center rounded-full"
                style={{ ...glass, padding: "11px 28px" }}
              >
                <a
                  href={contactLink.href}
                  className="text-white text-[13px] font-semibold tracking-wide hover:text-white/70 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {contactLink.label}
                </a>
              </div>
            </nav>
          </motion.div>
        ) : (
          /* ═══════════════════════════════════════════
             SCROLLED STATE — single Dynamic Island pill
             ═══════════════════════════════════════════ */
          <motion.div
            key="island"
            initial={{ opacity: 0, y: -24, scale: 0.82 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.82 }}
            transition={{
              type: "spring",
              damping: 18,
              stiffness: 260,
              mass: 0.8,
            }}
            className="flex justify-center pt-4"
          >
            <nav
              className="flex items-center gap-1 rounded-full"
              style={{
                padding: "10px 16px",
                background: "rgba(255, 255, 255, 0.10)",
                border: "1.5px solid rgba(255, 255, 255, 0.28)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "inset 0 1.5px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.06)",
              }}
            >
              {/* Logo */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="text-white font-black text-sm tracking-tight px-2 select-none"
              >
                UTH
              </motion.span>

              {/* Divider */}
              <div
                className="shrink-0 mx-2"
                style={{
                  width: "1px",
                  height: "16px",
                  background: "rgba(255,255,255,0.22)",
                }}
              />

              {/* All four links */}
              {allLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.04 + 0.06 },
                  }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.09)" }}
                  className="px-3 py-1.5 rounded-full text-white text-[11px] font-semibold tracking-wide hover:text-white/70 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
