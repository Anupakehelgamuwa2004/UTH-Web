"use client";

import { motion } from "framer-motion";

export default function AnimatedSocialIllustration() {
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
        {/* Megaphone */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.path
            d="M200 200 L200 400 L350 350 L450 250 L350 200 Z"
            fill="#10104a"
            stroke="#ffffff"
            strokeWidth="3"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Sound Waves */}
          <motion.g
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M450 250 Q500 200 550 250"
              stroke="#ffffff"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M450 250 Q520 180 580 250"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            />
          </motion.g>
        </motion.g>

        {/* Analytics Chart */}
        <motion.g
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.rect
            x="100"
            y="450"
            width="400"
            height="100"
            rx="8"
            fill="#000000"
            stroke="#ffffff"
            strokeWidth="2"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Chart Bars */}
          <motion.rect
            x="130"
            y="500"
            width="40"
            height="30"
            fill="#10104a"
            animate={{
              height: [30, 50, 30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="200"
            y="480"
            width="40"
            height="50"
            fill="#10104a"
            animate={{
              height: [50, 70, 50],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          <motion.rect
            x="270"
            y="460"
            width="40"
            height="70"
            fill="#10104a"
            animate={{
              height: [70, 90, 70],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
          <motion.rect
            x="340"
            y="440"
            width="40"
            height="90"
            fill="#10104a"
            animate={{
              height: [90, 110, 90],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          />
          <motion.rect
            x="410"
            y="420"
            width="40"
            height="110"
            fill="#10104a"
            animate={{
              height: [110, 130, 110],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
        </motion.g>

        {/* Social Media Icons Floating */}
        <motion.g
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle cx="80" cy="150" r="25" fill="#10104a" stroke="#ffffff" strokeWidth="2" />
          <text x="70" y="158" fontSize="20" fill="#ffffff" fontFamily="Arial" fontWeight="bold">
            f
          </text>
        </motion.g>

        <motion.g
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <rect x="520" y="120" width="50" height="50" rx="12" fill="#10104a" stroke="#ffffff" strokeWidth="2" />
          <circle cx="540" cy="140" r="8" fill="#ffffff" />
          <circle cx="555" cy="140" r="8" fill="#ffffff" />
          <circle cx="545" cy="155" r="8" fill="#ffffff" />
        </motion.g>

        {/* Engagement Arrows */}
        <motion.g
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M300 300 L320 280 M320 280 L340 300 M320 280 L320 260"
            stroke="#ffffff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </div>
  );
}
