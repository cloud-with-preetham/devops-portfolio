"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full backdrop-blur-xl bg-black/30 border-b border-white/10 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="font-bold text-xl bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Cloud with Preetham
        </motion.h1>

        <div className="flex gap-8 text-sm">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.1, color: "#a78bfa" }}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-purple-400 transition"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
