"use client";

import { motion } from "framer-motion";

export default function AnimatedWebIllustration() {
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
        {/* Browser Window */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.rect
            x="100"
            y="100"
            width="400"
            height="300"
            rx="8"
            fill="#10104a"
            stroke="#ffffff"
            strokeWidth="2"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Browser Header */}
          <rect x="100" y="100" width="400" height="40" rx="8" fill="#000000" />
          <circle cx="120" cy="120" r="6" fill="#ffffff" />
          <circle cx="140" cy="120" r="6" fill="#ffffff" />
          <circle cx="160" cy="120" r="6" fill="#ffffff" />
          
          {/* Code Brackets */}
          <motion.g
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <text
              x="200"
              y="200"
              fontSize="80"
              fill="#ffffff"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {"{"}
            </text>
            <text
              x="320"
              y="200"
              fontSize="80"
              fill="#ffffff"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {"}"}
            </text>
          </motion.g>
          
          {/* Code Lines */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <line x1="220" y1="250" x2="380" y2="250" stroke="#ffffff" strokeWidth="2" />
            <line x1="220" y1="280" x2="350" y2="280" stroke="#ffffff" strokeWidth="2" />
            <line x1="220" y1="310" x2="320" y2="310" stroke="#ffffff" strokeWidth="2" />
          </motion.g>
        </motion.g>

        {/* Floating Code Elements */}
        <motion.g
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <text
            x="50"
            y="200"
            fontSize="40"
            fill="#10104a"
            fontFamily="monospace"
            opacity="0.6"
          >
            {"<div>"}
          </text>
        </motion.g>

        <motion.g
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <text
            x="450"
            y="350"
            fontSize="40"
            fill="#10104a"
            fontFamily="monospace"
            opacity="0.6"
          >
            {"</div>"}
          </text>
        </motion.g>

        {/* Responsive Device Icons */}
        <motion.g
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect x="150" y="450" width="80" height="120" rx="8" fill="#10104a" stroke="#ffffff" strokeWidth="2" />
          <rect x="370" y="450" width="80" height="120" rx="8" fill="#10104a" stroke="#ffffff" strokeWidth="2" />
        </motion.g>
      </svg>
    </div>
  );
}
