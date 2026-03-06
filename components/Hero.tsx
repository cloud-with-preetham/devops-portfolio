"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-5xl">
              👨💻
            </div>
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Preetham Pereira
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          DevOps Engineer | Cloud Architect
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Building scalable cloud infrastructure and automating deployment pipelines
          with AWS, Docker, Kubernetes, and modern CI/CD practices.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Preetham_Pereira_Devops_resume.pdf"
            className="px-8 py-3 border-2 border-gray-600 rounded-full font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition"
          >
            Resume
          </motion.a>
        </div>

        <div className="flex gap-6 justify-center text-2xl">
          <motion.a whileHover={{ scale: 1.2, color: "#3b82f6" }} href="https://github.com/cloud-with-preetham" className="text-gray-400 hover:text-blue-400 transition">
            <FaGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, color: "#0ea5e9" }} href="https://linkedin.com/in/preetham-pereira" className="text-gray-400 hover:text-sky-400 transition">
            <FaLinkedin />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, color: "#8b5cf6" }} href="https://x.com/yourcloudguy_" className="text-gray-400 hover:text-purple-400 transition">
            <FaTwitter />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
