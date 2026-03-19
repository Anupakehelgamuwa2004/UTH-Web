"use client";

import { motion } from "framer-motion";

export default function AnimatedGrowthIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Growth Arrow */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.path
            d="M150 450 L300 200 L450 450"
            stroke="#ffffff"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0.5, 1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="150"
            cy="450"
            r="8"
            fill="#10104a"
            stroke="#ffffff"
            strokeWidth="2"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="300"
            cy="200"
            r="12"
            fill="#10104a"
            stroke="#ffffff"
            strokeWidth="2"
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.circle
            cx="450"
            cy="450"
            r="8"
            fill="#10104a"
            stroke="#ffffff"
            strokeWidth="2"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.g>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + i * 80}
            cy={300 + Math.sin(i) * 100}
            r="4"
            fill="#ffffff"
            opacity="0.6"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Digital Elements */}
        <motion.g
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <rect x="250" y="250" width="100" height="100" rx="8" fill="#10104a" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
        </motion.g>

        <motion.g
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle cx="300" cy="300" r="60" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
        </motion.g>
      </svg>
    </div>
  );
}
