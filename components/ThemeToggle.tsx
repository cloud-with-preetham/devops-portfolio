"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    setIsDark(theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-24 right-8 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:border-purple-500/50 transition z-50"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <FaMoon className="text-purple-400 text-xl" /> : <FaSun className="text-yellow-400 text-xl" />}
      </motion.div>
    </motion.button>
  );
}
