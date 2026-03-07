"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from "react-icons/fa";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    setIsDark(theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = menuItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full backdrop-blur-xl bg-black/30 border-b border-white/10 z-50"
    >
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-600"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="font-bold text-xl bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Cloud with Preetham
        </motion.a>

        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              whileHover={{ y: -2 }}
              href={item.href}
              className={`text-sm font-medium transition relative ${
                activeSection === item.href.substring(1)
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-600"
                />
              )}
            </motion.a>
          ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/50 transition"
          >
            <motion.div
              animate={{ rotate: isDark ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <FaMoon className="text-purple-400" /> : <FaSun className="text-yellow-400" />}
            </motion.div>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Preetham_Pereira_Devops_resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            <FaDownload /> Resume
          </motion.a>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 transition"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-xl bg-black/90 border-b border-white/10"
        >
          <div className="px-6 py-4 space-y-1">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition ${
                  activeSection === item.href.substring(1)
                    ? "bg-linear-to-r from-blue-500/20 to-purple-600/20 text-purple-400 border border-purple-500/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: menuItems.length * 0.05 }}
              href="/Preetham_Pereira_Devops_resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold mt-4"
            >
              <FaDownload /> Download Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
