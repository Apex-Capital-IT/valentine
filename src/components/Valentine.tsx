"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Valentine() {
  const [isSent, setIsSent] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 1.5, times: [0, 0.8, 1] }}
        className="mb-8"
      >
        <HeartSVG />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl font-bold text-red-600 text-center mb-6"
      >
        Happy Valentine&apos;s Day!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-xl text-red-500 text-center mb-8 max-w-md"
      >
        Roses are red, violets are blue, this Valentine&apos;s message is just for you!
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsSent(true)}
        className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold shadow-lg hover:bg-red-600 transition duration-300"
      >
        {isSent ? "Kiss Sent! ❤️" : "Send a Virtual Kiss"}
      </motion.button>
    </div>
  )
}

function HeartSVG() {
  return (
    <motion.svg width="100" height="100" viewBox="0 0 100 100" initial="hidden" animate="visible">
      <motion.path
        d="M50 30 L40 20 A10 10 0 0 0 20 40 L50 70 L80 40 A10 10 0 0 0 60 20 Z"
        fill="#ff4b4b"
        stroke="#ff4b4b"
        strokeWidth="2"
        variants={{
          hidden: { pathLength: 0, fill: "rgba(255, 75, 75, 0)" },
          visible: {
            pathLength: 1,
            fill: "rgba(255, 75, 75, 1)",
            transition: {
              pathLength: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            },
          },
        }}
      />
    </motion.svg>
  )
}

